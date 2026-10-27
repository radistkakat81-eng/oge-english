// Тренажёр грамматики ОГЭ. Весь прогресс хранится только на этом устройстве (localStorage).

const KEY = 'oge-english-v1';
const GOAL_MIN = 30;
const SESSION_SIZE = 15;
const INTERVALS = [0, 1, 3, 7, 16, 35]; // дней до повтора для коробок 0..5
const DAY_NAMES = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

const byId = Object.fromEntries(ITEMS.map(it => [it.id, it]));
const topicById = Object.fromEntries(TOPICS.map(t => [t.id, t]));
const app = document.getElementById('app');

// ---------- хранение ----------
function load() {
  try {
    const s = JSON.parse(localStorage.getItem(KEY));
    if (s && s.items) return s;
  } catch (e) {}
  return { items: {}, log: [], days: {} };
}
let S = load();
function save() {
  try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {}
}
if (navigator.storage && navigator.storage.persist) navigator.storage.persist().catch(() => {});

function dayKey(d = new Date()) {
  return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
}
function dayNum(d = new Date()) {
  return Math.floor((d.getTime() - d.getTimezoneOffset() * 60000) / 86400000);
}
function today() { return S.days[dayKey()] || (S.days[dayKey()] = { sec: 0, n: 0, ok: 0 }); }

// ---------- проверка ответа ----------
function norm(s) {
  return String(s).toLowerCase()
    .replace(/[’‘`]/g, "'")
    .replace(/won't/g, 'will not').replace(/can't/g, 'can not').replace(/cannot/g, 'can not')
    .replace(/n't/g, ' not').replace(/'re/g, ' are').replace(/'ve/g, ' have').replace(/'ll/g, ' will').replace(/'m/g, ' am')
    .replace(/[.!?,]/g, ' ').replace(/\s+/g, ' ').trim();
}
function dist(a, b) {
  const m = a.length, n = b.length, d = Array.from({ length: m + 1 }, (_, i) => [i]);
  for (let j = 1; j <= n; j++) d[0][j] = j;
  for (let i = 1; i <= m; i++) for (let j = 1; j <= n; j++)
    d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
  return d[m][n];
}
function check(item, given) {
  const g = norm(given);
  if (item.a.some(a => norm(a) === g)) return 'ok';
  if (item.type === 'input' && g.length > 3 && item.a.some(a => dist(norm(a), g) === 1)) return 'almost';
  return 'bad';
}

// ---------- статистика ----------
function topicStats(tid) {
  const recent = S.log.filter(e => e[1] === tid).slice(-20);
  const ok = recent.filter(e => e[2]).length;
  const items = ITEMS.filter(it => it.topic === tid);
  const learned = items.filter(it => (S.items[it.id] || {}).box >= 3).length;
  const seen = items.filter(it => S.items[it.id]).length;
  return { n: recent.length, acc: recent.length ? ok / recent.length : null, learned, seen, total: items.length };
}
function dueItems() {
  const t = dayNum();
  return ITEMS.filter(it => S.items[it.id] && S.items[it.id].due <= t)
    .sort((a, b) => S.items[a.id].due - S.items[b.id].due);
}
function mistakeItems() {
  return ITEMS.filter(it => { const s = S.items[it.id]; return s && s.wrong > 0 && s.box <= 1; });
}
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}
// Новые задания: сначала из тем, где больше ошибок или которые ещё не пробовали.
function pickNew(count, topicFilter) {
  const topics = TOPICS.filter(t => !topicFilter || topicFilter.includes(t.id)).map(t => {
    const st = topicStats(t.id);
    const score = st.acc === null ? 0.7 : 1 - st.acc;
    return { id: t.id, score: score + Math.random() * 0.15, pool: shuffle(ITEMS.filter(it => it.topic === t.id && !S.items[it.id])) };
  }).sort((a, b) => b.score - a.score);
  const out = [];
  let round = 0;
  while (out.length < count && topics.some(t => t.pool.length)) {
    for (const t of topics) {
      if (out.length >= count) break;
      const take = round === 0 && t.score > 0.4 ? 2 : 1;
      for (let k = 0; k < take && t.pool.length && out.length < count; k++) out.push(t.pool.pop());
    }
    round++;
  }
  return out;
}

// ---------- занятие ----------
let run = null; // { title, queue, i, ok, total, retried:Set, answered, last }

function startRun(title, items) {
  if (!items.length) { renderHome('Здесь пока нет заданий — всё сделано!'); return; }
  run = { title, queue: items.map(it => ({ it, retry: false })), i: 0, ok: 0, total: 0, last: Date.now() };
  renderQuestion();
}
function startDaily() {
  const due = dueItems().slice(0, 10);
  const fresh = pickNew(SESSION_SIZE - due.length);
  let items = shuffle([...due, ...fresh]);
  if (items.length < 5) items = shuffle([...items, ...ITEMS.filter(it => !items.includes(it))].slice(0, SESSION_SIZE));
  startRun('Занятие', items);
}
function startExam() {
  const gram = shuffle(ITEMS.filter(it => it.type === 'input' && !it.topic.startsWith('wf_'))).slice(0, 9);
  const wf = shuffle(ITEMS.filter(it => it.topic.startsWith('wf_'))).slice(0, 6);
  startRun('Как на ОГЭ', [...gram, ...wf]);
}
function startTopic(tid) {
  const pool = ITEMS.filter(it => it.topic === tid);
  const t = dayNum();
  const due = pool.filter(it => S.items[it.id] && S.items[it.id].due <= t);
  const fresh = shuffle(pool.filter(it => !S.items[it.id]));
  const rest = shuffle(pool.filter(it => S.items[it.id] && !due.includes(it)));
  startRun(topicById[tid].name, [...due, ...fresh, ...rest].slice(0, 10));
}

function addTime() {
  const now = Date.now();
  today().sec += Math.min((now - run.last) / 1000, 90);
  run.last = now;
}
function record(item, ok, isRetry) {
  addTime();
  if (isRetry) { save(); return; }
  const t = dayNum();
  const s = S.items[item.id] || { box: 0, right: 0, wrong: 0 };
  const isNew = !S.items[item.id];
  if (ok) { s.box = isNew ? 2 : Math.min(s.box + 1, 5); s.right++; }
  else { s.box = 1; s.wrong++; }
  s.due = t + INTERVALS[s.box];
  S.items[item.id] = s;
  S.log.push([t, item.topic, ok ? 1 : 0]);
  if (S.log.length > 20000) S.log = S.log.slice(-15000);
  const d = today(); d.n++; if (ok) d.ok++;
  save();
}

function esc(s) { return String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]); }
function qHtml(item, fill) {
  const gap = fill ? `<span class="gap">${esc(fill)}</span>` : '<span class="gap">&nbsp;?&nbsp;</span>';
  return esc(item.q).replace('___', gap);
}

function renderQuestion() {
  const cur = run.queue[run.i];
  const item = cur.it;
  const topic = topicById[item.topic];
  const pct = Math.round(run.i / run.queue.length * 100);
  run.last = Math.max(run.last, Date.now() - 90000);
  app.innerHTML = `
    <div class="top"><button class="back" id="quit">✕</button><div class="bar"><i style="width:${pct}%"></i></div><span class="tag">${run.i + 1}/${run.queue.length}</span></div>
    <div class="card">
      <div class="tag">${esc(topic.group)} · ${esc(topic.name)}${cur.retry ? ' · ещё раз' : ''}</div>
      <p class="q" id="q">${qHtml(item)}</p>
      ${item.type === 'input' ? `
        <p class="muted">Поставь слово в нужную форму: <span class="word">${esc(item.w)}</span></p>
        <form id="f" autocomplete="off"><input type="text" id="ans" autocapitalize="none" autocorrect="off" spellcheck="false" enterkeyhint="done" placeholder="ответ…">
        <button class="btn" type="submit">Проверить</button></form>`
      : shuffle([...item.opts]).map(o => `<button class="opt" data-o="${esc(o)}">${esc(o)}</button>`).join('')}
      <div id="fb"></div>
    </div>`;
  document.getElementById('quit').onclick = () => { run = null; renderHome(); };
  if (item.type === 'input') {
    const inp = document.getElementById('ans');
    setTimeout(() => inp.focus(), 50);
    document.getElementById('f').onsubmit = e => {
      e.preventDefault();
      if (!inp.value.trim()) return;
      answer(item, inp.value, cur.retry);
    };
  } else {
    app.querySelectorAll('.opt').forEach(b => b.onclick = () => answer(item, b.dataset.o, cur.retry, b));
  }
}

function answer(item, given, isRetry, btn) {
  const res = check(item, given);
  const ok = res === 'ok';
  record(item, ok, isRetry);
  run.total += isRetry ? 0 : 1;
  if (ok && !isRetry) run.ok++;
  if (!ok && !isRetry) {
    const pos = Math.min(run.i + 4, run.queue.length);
    run.queue.splice(pos, 0, { it: item, retry: true });
  }
  document.getElementById('q').innerHTML = qHtml(item, ok ? given.trim() : item.a[0]);
  if (item.type === 'input') {
    const inp = document.getElementById('ans');
    inp.disabled = true; inp.blur();
    document.querySelector('#f .btn').remove();
  } else {
    app.querySelectorAll('.opt').forEach(b => {
      b.disabled = true;
      if (item.a.includes(b.dataset.o)) b.classList.add('ok');
      else if (b === btn) b.classList.add('bad');
    });
  }
  const head = ok ? '✅ Верно!' : res === 'almost' ? '🟡 Почти! Проверь буквы' : '❌ Не совсем';
  const right = ok ? '' : `<p>Правильно: <b>${esc(item.a.join(' / '))}</b>${item.type === 'input' ? ` · ты написала: ${esc(given.trim())}` : ''}</p>`;
  const fb = document.getElementById('fb');
  const ru = RU[item.q];
  fb.innerHTML = `<div class="fb ${ok ? 'ok' : res === 'almost' ? 'almost' : 'bad'}"><b class="big">${head}</b>${right}
    ${ru ? `<p class="ru">Перевод: ${esc(ru)}</p>` : ''}<p>${esc(item.ex)}</p>
    ${!ok && !isRetry ? '<p class="muted">Это задание вернётся чуть позже — и ещё раз через день.</p>' : ''}
    <button class="more" id="why">🤔 Не понятно — объясни подробнее</button><div id="whyText"></div></div>
    <button class="btn" id="next">Дальше →</button>`;
  document.getElementById('why').onclick = () => {
    document.getElementById('why').remove();
    document.getElementById('whyText').innerHTML = `<div class="explain"><b>${esc(topicById[item.topic].name)} — объясняю по шагам</b>\n\n${esc(EXPLAIN[item.topic])}</div>`;
  };
  const next = document.getElementById('next');
  next.onclick = nextQuestion;
  next.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function nextQuestion() {
  run.i++;
  if (run.i < run.queue.length) renderQuestion(); else renderDone();
}

function renderDone() {
  const r = run; run = null;
  const pct = r.total ? Math.round(r.ok / r.total * 100) : 0;
  const min = Math.round(today().sec / 60);
  const emoji = pct >= 80 ? '🏆' : pct >= 60 ? '💪' : '🌱';
  app.innerHTML = `
    <div class="card center">
      <div class="huge">${emoji}</div>
      <h1>${esc(r.title)}: готово!</h1>
      <p class="q">С первого раза верно: <b>${r.ok} из ${r.total}</b> (${pct}%)</p>
      <p class="muted">Сегодня уже ${min} мин из ${GOAL_MIN}. ${min >= GOAL_MIN ? 'Цель дня выполнена! 🎉' : 'Можно ещё один подход.'}</p>
    </div>
    <button class="btn" id="more">Ещё ${SESSION_SIZE} заданий</button>
    <button class="btn soft" id="home">На главную</button>`;
  document.getElementById('more').onclick = startDaily;
  document.getElementById('home').onclick = () => renderHome();
}

// ---------- экраны ----------
function renderHome(note) {
  const d = today();
  const min = Math.round(d.sec / 60);
  const due = dueItems().length;
  const mist = mistakeItems().length;
  const left = Math.max(0, Math.ceil((new Date(2027, 4, 20) - new Date()) / 86400000));
  app.innerHTML = `
    <h1>Английский ОГЭ</h1>
    <p class="muted">Грамматика и словообразование · до экзамена примерно ${left} дн.</p>
    ${note ? `<div class="fb ok">${esc(note)}</div>` : ''}
    <div class="card">
      <div class="row" style="align-items:center"><b>Сегодня: ${min} из ${GOAL_MIN} мин</b><span class="tag" style="flex:0;white-space:nowrap">${d.n} заданий</span></div>
      <div class="bar" style="margin-top:10px"><i style="width:${Math.min(100, min / GOAL_MIN * 100)}%"></i></div>
    </div>
    <button class="btn" id="daily">▶ Занятие на сегодня<small>${SESSION_SIZE} заданий${due ? ` · из них на повтор: ${Math.min(due, 10)}` : ''}</small></button>
    <div class="row">
      <button class="btn soft" id="exam">📝 Как на ОГЭ<small>9 + 6 заданий</small></button>
      <button class="btn soft" id="mist">🔁 Мои ошибки<small>${mist ? mist + ' шт.' : 'пока нет'}</small></button>
    </div>
    <div class="row">
      <button class="btn soft" id="topics">📚 Темы и правила</button>
      <button class="btn soft" id="week">📊 Неделя<small>для мамы</small></button>
    </div>
    ${Object.keys(S.items).length === 0 ? `<div class="card"><b>Как заниматься</b><p>Каждый день нажимай «Занятие на сегодня». Тренажёр сам поймёт, какие темы трудные, и будет чаще давать их. Ошибки вернутся на повтор через день, потом через 3 дня, неделю…</p><p class="muted">Открывай тренажёр всегда с иконки на экране «Домой» — там хранится прогресс.</p></div>` : ''}`;
  document.getElementById('daily').onclick = startDaily;
  document.getElementById('exam').onclick = startExam;
  document.getElementById('mist').onclick = () => startRun('Мои ошибки', shuffle(mistakeItems()).slice(0, SESSION_SIZE));
  document.getElementById('topics').onclick = renderTopics;
  document.getElementById('week').onclick = renderWeek;
}

function pillFor(st) {
  if (st.acc === null) return '<span class="pill">не начато</span>';
  const p = Math.round(st.acc * 100);
  const cls = st.n >= 4 && p < 65 ? 'weak' : p >= 80 ? 'good' : '';
  return `<span class="pill ${cls}">${p}%</span>`;
}

function renderTopics() {
  let html = `<div class="top"><button class="back" id="b">← Назад</button></div><h1>Темы</h1>
    <p class="muted">Процент — сколько верных из последних ответов. Красным — над чем поработать.</p>`;
  let group = '';
  for (const t of TOPICS) {
    if (t.group !== group) { group = t.group; html += `<h2>${esc(group)}</h2>`; }
    const st = topicStats(t.id);
    html += `<button class="topic" data-t="${t.id}"><span class="name">${esc(t.name)}<small>выучено ${st.learned} из ${st.total}</small></span>${pillFor(st)}</button>`;
  }
  app.innerHTML = html;
  document.getElementById('b').onclick = () => renderHome();
  app.querySelectorAll('.topic').forEach(b => b.onclick = () => renderRule(b.dataset.t));
}

function renderRule(tid) {
  const t = topicById[tid];
  app.innerHTML = `<div class="top"><button class="back" id="b">← Темы</button></div>
    <h1>${esc(t.name)}</h1>
    <div class="card rule">${esc(EXPLAIN[tid] || t.rule)}</div>
    <button class="btn" id="go">Потренироваться (10 заданий)</button>`;
  document.getElementById('b').onclick = renderTopics;
  document.getElementById('go').onclick = () => startTopic(tid);
}

function weekData() {
  const days = [];
  for (let k = 6; k >= 0; k--) {
    const d = new Date(); d.setDate(d.getDate() - k);
    const v = S.days[dayKey(d)] || { sec: 0, n: 0, ok: 0 };
    days.push({ label: DAY_NAMES[d.getDay()], date: d.getDate(), min: Math.round(v.sec / 60), n: v.n, ok: v.ok });
  }
  const from = dayNum() - 6;
  const wlog = S.log.filter(e => e[0] >= from);
  const byTopic = {};
  for (const e of wlog) { const b = byTopic[e[1]] || (byTopic[e[1]] = { n: 0, ok: 0 }); b.n++; b.ok += e[2]; }
  let streak = 0;
  for (let k = 0; k < 400; k++) {
    const d = new Date(); d.setDate(d.getDate() - k);
    const v = S.days[dayKey(d)];
    if (v && v.n > 0) streak++; else if (k > 0) break;
  }
  return { days, byTopic, streak, total: wlog.length, ok: wlog.filter(e => e[2]).length };
}

function reportText() {
  const w = weekData();
  const min = w.days.reduce((s, d) => s + d.min, 0);
  const active = w.days.filter(d => d.n > 0).length;
  const lines = [`Английский ОГЭ — неделя до ${new Date().toLocaleDateString('ru-RU')}`,
    `Занималась ${active} дн. из 7, всего ${min} мин.`,
    `Заданий: ${w.total}, верно ${w.total ? Math.round(w.ok / w.total * 100) : 0}%.`];
  const weak = TOPICS.filter(t => { const s = topicStats(t.id); return s.n >= 4 && s.acc < 0.65; }).map(t => t.name);
  if (weak.length) lines.push('Трудные темы: ' + weak.join(', ') + '.');
  lines.push('По дням: ' + w.days.map(d => `${d.label} ${d.min}м`).join(', '));
  return lines.join('\n');
}

function renderWeek() {
  const w = weekData();
  const maxMin = Math.max(GOAL_MIN, ...w.days.map(d => d.min));
  const min = w.days.reduce((s, d) => s + d.min, 0);
  const active = w.days.filter(d => d.n > 0).length;
  const pct = w.total ? Math.round(w.ok / w.total * 100) : 0;
  const learned = ITEMS.filter(it => (S.items[it.id] || {}).box >= 3).length;
  const topicRows = TOPICS.filter(t => w.byTopic[t.id]).map(t => {
    const b = w.byTopic[t.id];
    return `<tr><td>${esc(t.name)}</td><td>${b.n} зад.</td><td>${pillFor({ acc: b.ok / b.n, n: b.n })}</td></tr>`;
  }).join('');
  const weak = TOPICS.filter(t => { const s = topicStats(t.id); return s.n >= 4 && s.acc < 0.65; });
  const untouched = TOPICS.filter(t => topicStats(t.id).acc === null);
  app.innerHTML = `
    <div class="top"><button class="back" id="b">← Назад</button></div>
    <h1>Что сделано за неделю</h1>
    <div class="card">
      <div class="stats">
        <div class="stat"><b>${active}/7</b><span>дней занималась</span></div>
        <div class="stat"><b>${min}</b><span>минут всего</span></div>
        <div class="stat"><b>${pct}%</b><span>верно из ${w.total}</span></div>
      </div>
      <div class="week">${w.days.map(d => `<div class="d"><span class="v">${d.min || ''}</span><div class="col ${d.min ? '' : 'empty'}" style="height:${Math.max(3, d.min / maxMin * 110)}px"></div><span class="l">${d.label}</span></div>`).join('')}</div>
      <p class="muted center">минут в день · цель ${GOAL_MIN} · серия ${w.streak} дн. подряд</p>
    </div>
    <div class="card">
      <b>Темы этой недели</b>
      ${topicRows ? `<table>${topicRows}</table>` : '<p class="muted">На этой неделе ещё не занималась.</p>'}
    </div>
    <div class="card">
      <p><b>Над чем поработать:</b> ${weak.length ? weak.map(t => esc(t.name)).join(', ') : 'явно слабых тем пока нет'}.</p>
      ${untouched.length ? `<p><b>Ещё не начинала:</b> ${untouched.map(t => esc(t.name)).join(', ')}.</p>` : ''}
      <p><b>Выучено заданий:</b> ${learned} из ${ITEMS.length}. На повтор ждут: ${mistakeItems().length}.</p>
    </div>
    <button class="btn" id="share">📤 Отправить отчёт маме</button>
    <button class="btn soft" id="backup">Резервная копия прогресса</button>
    <div id="bk"></div>`;
  document.getElementById('b').onclick = () => renderHome();
  document.getElementById('share').onclick = async () => {
    const text = reportText();
    try {
      if (navigator.share) { await navigator.share({ text }); return; }
    } catch (e) { if (e.name === 'AbortError') return; }
    try { await navigator.clipboard.writeText(text); alert('Отчёт скопирован — вставь его в сообщение маме.'); }
    catch (e) { alert(text); }
  };
  document.getElementById('backup').onclick = renderBackup;
}

function renderBackup() {
  const code = btoa(unescape(encodeURIComponent(JSON.stringify(S))));
  document.getElementById('bk').innerHTML = `<div class="card">
    <p>Это весь прогресс в виде кода. Его можно сохранить в Заметки, а потом вставить на другом устройстве.</p>
    <textarea id="code" readonly>${code}</textarea>
    <button class="btn soft" id="copy">Скопировать код</button>
    <p>Вставить код с другого устройства:</p>
    <textarea id="paste" placeholder="вставь код сюда"></textarea>
    <button class="btn soft" id="restore">Загрузить прогресс</button></div>`;
  document.getElementById('copy').onclick = () => {
    const ta = document.getElementById('code'); ta.select();
    navigator.clipboard ? navigator.clipboard.writeText(ta.value).then(() => alert('Скопировано')) : document.execCommand('copy');
  };
  document.getElementById('restore').onclick = () => {
    try {
      const s = JSON.parse(decodeURIComponent(escape(atob(document.getElementById('paste').value.trim()))));
      if (!s.items || !s.log || !s.days) throw 0;
      if (!confirm('Заменить текущий прогресс загруженным?')) return;
      S = s; save(); renderHome('Прогресс загружен.');
    } catch (e) { alert('Код не подошёл. Проверь, что он скопирован целиком.'); }
  };
}

renderHome();

if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(() => {});
