// Задания тренажёра. Тексты написаны для этого тренажёра (не из сборников).
// I(тема, предложение, слово, [правильные ответы], объяснение) — ввести слово в нужной форме.
// C(тема, предложение, [варианты], номер правильного, объяснение) — выбрать вариант.

const TOPICS = [
  { id: 'present', group: 'Грамматика', name: 'Настоящее время',
    rule: 'Present Simple — обычно, всегда, регулярно (every day, usually, often). Он/она/оно: глагол + s (he plays, she goes). Вопрос и «не» — с does/doesn’t, и тогда s у глагола уже нет: Does she play? She doesn’t play.\n\nPresent Continuous — прямо сейчас (now, look!, at the moment): am/is/are + глагол-ing. She is reading now.' },
  { id: 'past', group: 'Грамматика', name: 'Прошедшее время',
    rule: 'Past Simple — что-то случилось в прошлом и закончилось (yesterday, last week, ago, in 2020). Правильные глаголы + ed (played), неправильные — 2-я форма (go → went, see → saw). С did/didn’t глагол без изменений: Did you go? I didn’t go.\n\nPast Continuous — что-то длилось в момент в прошлом: was/were + -ing. I was sleeping when you called.' },
  { id: 'perfect', group: 'Грамматика', name: 'Perfect (have done)',
    rule: 'Present Perfect — have/has + 3-я форма глагола. Важен результат сейчас, время не названо: already, just, yet, ever, never, since, for. I have already eaten. She has never been to Paris.\n\nPast Perfect — had + 3-я форма: одно действие случилось раньше другого в прошлом. When we came, the film had started.' },
  { id: 'future', group: 'Грамматика', name: 'Будущее время',
    rule: 'Will + глагол — будущее, обещание, решение «прямо сейчас»: I will help you. Tomorrow it will rain.\n\nВажно для ОГЭ: после if, when, as soon as, before, after, until будущее НЕ ставим, а пишем настоящее: When she comes, we will start. If it rains, we will stay at home.' },
  { id: 'passive', group: 'Грамматика', name: 'Пассив (был сделан)',
    rule: 'Пассив — когда действие делают НАД предметом: «дом был построен», «письма пишут». Форма: be в нужном времени + 3-я форма глагола.\n\nСейчас: is/are made. В прошлом: was/were built. Уже сделано: has/have been done. В будущем: will be sent.' },
  { id: 'cond', group: 'Грамматика', name: 'Условные предложения',
    rule: 'Реальное условие: If + настоящее, … will. If you study, you will pass.\n\nНереальное («если бы» сейчас): If + прошедшее, … would. If I had money, I would buy a dog. С be обычно were: If I were you…\n\nНереальное в прошлом («если бы тогда»): If + had done, … would have done.' },
  { id: 'comp', group: 'Грамматика', name: 'Степени сравнения',
    rule: 'Короткие слова: + er / the + est: tall → taller → the tallest. На -y: happy → happier → the happiest. Удвоение: big → bigger.\n\nДлинные слова: more / the most: more interesting, the most interesting.\n\nИсключения: good → better → the best; bad → worse → the worst; far → farther/further → the farthest/furthest; little → less → the least; many/much → more → the most.' },
  { id: 'pron', group: 'Грамматика', name: 'Местоимения',
    rule: 'Кто делает: I, you, he, she, it, we, they.\nКого/кому: me, you, him, her, it, us, them.\nЧей (перед словом): my, your, his, her, its, our, their.\nЧей (без слова после): mine, yours, his, hers, ours, theirs.\nСам/себя: myself, yourself, himself, herself, itself, ourselves, yourselves, themselves.' },
  { id: 'plural', group: 'Грамматика', name: 'Мн. число и числа',
    rule: 'Особое множественное число: man → men, woman → women, child → children, tooth → teeth, foot → feet, mouse → mice, person → people, sheep → sheep, fish → fish. На -f: leaf → leaves, wife → wives, knife → knives, shelf → shelves.\n\nПорядковые числа (который по счёту): one → first, two → second, three → third, five → fifth, nine → ninth, twelve → twelfth, twenty → twentieth.' },
  { id: 'wf_noun', group: 'Словообразование', name: 'Существительные',
    rule: 'Из глагола или прилагательного делаем существительное (кто? что?):\n-er/-or — человек: teach → teacher, act → actor, visit → visitor.\n-ion/-tion/-ation: invite → invitation, decide → decision, educate → education.\n-ment: develop → development, agree → agreement.\n-ness: kind → kindness, happy → happiness.\n-ance/-ence: perform → performance, differ → difference.\n-ist: art → artist, science → scientist.' },
  { id: 'wf_adj', group: 'Словообразование', name: 'Прилагательные',
    rule: 'Прилагательное отвечает на «какой?» и стоит перед существительным или после be.\n-ful (полный чего-то): help → helpful, beauty → beautiful.\n-less (без): care → careless.\n-ous: danger → dangerous, fame → famous.\n-al: nation → national, tradition → traditional.\n-able/-ible: comfort → comfortable, enjoy → enjoyable.\n-y: sun → sunny, rain → rainy.\n-ive: create → creative, attract → attractive.\n-ic: science → scientific, history → historic.' },
  { id: 'wf_adv', group: 'Словообразование', name: 'Наречия (-ly)',
    rule: 'Наречие отвечает на «как?» и описывает действие: She sings beautifully. Делаем из прилагательного + ly: quick → quickly, careful → carefully.\n\nНа -y: happy → happily, easy → easily. На -le: possible → possibly, comfortable → comfortably. На -ic: basic → basically.\n\nИсключение: good → well (She speaks English well).' },
  { id: 'wf_neg', group: 'Словообразование', name: 'Приставки «не-»',
    rule: 'Если по смыслу нужно «не»: un- (unhappy, unusual, unable), im- перед p/m (impossible, impolite, impatient), in- (incorrect, independent), ir- перед r (irregular, irresponsible), il- перед l (illegal), dis- (dislike, disagree, dishonest).\n\nЧитай всё предложение: если там «но», «к сожалению», «не смог» — скорее всего нужно отрицание.' },
];

const ITEMS = [];
let _n = 0;
function I(topic, q, w, a, ex) { ITEMS.push({ id: topic + '-' + (++_n), topic, type: 'input', q, w, a, ex }); }
function C(topic, q, opts, ai, ex) { ITEMS.push({ id: topic + '-' + (++_n), topic, type: 'choice', q, opts, a: [opts[ai]], ex }); }

// ---------- Настоящее время ----------
I('present', 'My brother ___ football every Saturday.', 'PLAY', ['plays'], 'Every Saturday — регулярно, значит Present Simple. My brother = he, поэтому + s: plays.');
I('present', 'Look! The children ___ in the garden.', 'DANCE', ['are dancing'], 'Look! — происходит прямо сейчас. The children — они, значит are + -ing: are dancing.');
I('present', 'Kate usually ___ to school by bus.', 'GO', ['goes'], 'Usually — обычно, Present Simple. Kate = she, к go добавляем es: goes.');
I('present', 'My dad ___ coffee in the morning. He prefers tea.', 'NOT DRINK', ["doesn't drink", 'does not drink'], 'Привычка — Present Simple. Для he/she «не» = doesn’t + глагол без s: doesn’t drink.');
I('present', '___ your sister speak French?', 'DO', ['does'], 'Вопрос в Present Simple про she (your sister) — начинаем с Does.');
I('present', 'Be quiet, please! The baby ___.', 'SLEEP', ['is sleeping'], 'Просят тишины — потому что малыш спит прямо сейчас. Present Continuous: is sleeping.');
I('present', 'The Earth ___ around the Sun.', 'GO', ['goes'], 'Это факт, который верен всегда — Present Simple. The Earth = it, поэтому goes.');
I('present', 'At the moment we ___ for the test.', 'PREPARE', ['are preparing'], 'At the moment — в данный момент, Present Continuous: are preparing (e в конце пропадает).');
I('present', 'My grandma ___ delicious pies.', 'MAKE', ['makes'], 'Обычное умение/привычка — Present Simple. Grandma = she: makes.');
I('present', 'She ___ her homework right now, so she can\'t talk.', 'DO', ['is doing'], 'Right now — прямо сейчас: is doing.');
C('present', 'Tom ___ TV every evening.', ['watch', 'watches', 'is watching'], 1, 'Every evening — регулярно. Tom = he, а после ch добавляем es: watches.');
C('present', 'Listen! Somebody ___ the piano.', ['plays', 'is playing', 'play'], 1, 'Listen! — значит, звучит прямо сейчас: is playing.');
C('present', 'They ___ like spicy food.', ["don't", "doesn't", "aren't"], 0, 'They — они, «не» в Present Simple для I/you/we/they = don’t.');
I('present', 'The shop ___ at 9 o\'clock every day.', 'OPEN', ['opens'], 'Расписание каждый день — Present Simple. The shop = it: opens.');
I('present', 'My friends ___ me at the café now.', 'WAIT', ['are waiting'], 'Now — сейчас, friends — они: are waiting.');
I('present', 'He ___ his teeth twice a day.', 'BRUSH', ['brushes'], 'Twice a day — привычка. После sh добавляем es: brushes.');

// ---------- Прошедшее время ----------
I('past', 'Last summer we ___ to the seaside.', 'GO', ['went'], 'Last summer — прошлое, Past Simple. Go — неправильный глагол: went.');
I('past', 'Yesterday I ___ an interesting film.', 'SEE', ['saw'], 'Yesterday — Past Simple. See → saw (неправильный глагол).');
I('past', 'She ___ a beautiful dress for the party two days ago.', 'BUY', ['bought'], 'Ago — «назад», Past Simple. Buy → bought.');
I('past', 'When I came home, my mum ___ dinner.', 'COOK', ['was cooking'], 'Мама в тот момент была в процессе — Past Continuous: was cooking.');
I('past', 'We ___ the museum last week. It was closed.', 'NOT VISIT', ["didn't visit", 'did not visit'], 'Last week — Past Simple. «Не» = didn’t + глагол без -ed: didn’t visit.');
I('past', 'The boys ___ football when it started to rain.', 'PLAY', ['were playing'], 'Длилось, когда начался дождь — Past Continuous. Boys — они: were playing.');
I('past', 'In 2019 my family ___ to a new flat.', 'MOVE', ['moved'], 'Год в прошлом — Past Simple. Правильный глагол: moved.');
I('past', 'He ___ me a long letter last month.', 'WRITE', ['wrote'], 'Last month — Past Simple. Write → wrote.');
I('past', 'I ___ very tired after the trip.', 'BE', ['was'], 'Прошлое, I — значит was.');
I('past', 'My parents ___ at home yesterday evening.', 'BE', ['were'], 'Прошлое, parents — они: were.');
I('past', 'She ___ her keys and couldn\'t open the door.', 'LOSE', ['lost'], 'Случилось в прошлом. Lose → lost.');
I('past', 'We ___ a lot of photos on holiday.', 'TAKE', ['took'], 'Каникулы уже прошли — Past Simple. Take → took.');
I('past', 'The teacher ___ us a funny story.', 'TELL', ['told'], 'Past Simple. Tell → told.');
I('past', 'I ___ my grandparents last Sunday.', 'VISIT', ['visited'], 'Last Sunday — Past Simple, правильный глагол: visited.');
C('past', '___ you enjoy the concert yesterday?', ['Do', 'Did', 'Were'], 1, 'Yesterday — вопрос в Past Simple начинается с Did.');
C('past', 'While I ___ a bath, the phone rang.', ['took', 'was taking', 'take'], 1, 'While — «пока», длительное действие в прошлом: was taking.');
I('past', 'Columbus ___ America in 1492.', 'DISCOVER', ['discovered'], 'Дата в прошлом — Past Simple: discovered.');
I('past', 'The children ___ the cake in five minutes.', 'EAT', ['ate'], 'Past Simple. Eat → ate.');
I('past', 'We ___ the bus because we got up late.', 'MISS', ['missed'], 'Past Simple, правильный глагол: missed.');
I('past', 'She ___ the whole night and felt great in the morning.', 'SLEEP', ['slept'], 'Past Simple. Sleep → slept.');

// ---------- Perfect ----------
I('perfect', 'I ___ my project. Now I am free!', 'FINISH', ['have finished', 'have already finished'], 'Результат важен сейчас (теперь свободна) — Present Perfect: have + 3-я форма: have finished.');
I('perfect', 'She has never ___ to London.', 'BE', ['been'], 'Has + 3-я форма глагола. Be → was/were → been.');
I('perfect', 'We ___ each other since 2018.', 'KNOW', ['have known'], 'Since — «с тех пор как», Present Perfect: have known.');
I('perfect', 'My dad has just ___ home.', 'COME', ['come'], 'Has + 3-я форма. Come → came → come (3-я форма совпадает с первой).');
I('perfect', 'They ___ the new film yet.', 'NOT SEE', ["haven't seen", 'have not seen'], 'Yet в отрицании — Present Perfect: haven’t seen.');
I('perfect', 'Have you ever ___ sushi?', 'TRY', ['tried'], 'Have + 3-я форма. Try на согласную + y: tried.');
I('perfect', 'When we arrived at the station, the train ___.', 'LEAVE', ['had left', 'had already left'], 'Поезд ушёл РАНЬШЕ, чем мы приехали — Past Perfect: had left.');
I('perfect', 'She said that she ___ her homework.', 'DO', ['had done'], 'Сделала раньше, чем сказала (оба в прошлом) — Past Perfect: had done.');
I('perfect', 'Tom ___ his leg, so he can\'t play today.', 'BREAK', ['has broken'], 'Результат сейчас: не может играть. Present Perfect: has broken.');
I('perfect', 'I ___ this book three times.', 'READ', ['have read'], 'Сколько раз за жизнь — Present Perfect: have read (читается «ред»).');
I('perfect', 'By the time I woke up, mum ___ breakfast.', 'MAKE', ['had made'], 'By the time + прошлое — одно раньше другого: had made.');
C('perfect', 'I have lived here ___ five years.', ['since', 'for', 'ago'], 1, 'For + срок (five years). Since + точка начала (since 2020).');
C('perfect', 'Have you finished your essay ___?', ['already', 'yet', 'just'], 1, 'В вопросе в конце ставится yet: Have you finished it yet?');
I('perfect', 'My friends ___ me a present. Look!', 'GIVE', ['have given'], 'Результат перед глазами — Present Perfect: have given.');
I('perfect', 'He was sad because he ___ his phone.', 'LOSE', ['had lost'], 'Потерял раньше, чем загрустил — Past Perfect: had lost.');
I('perfect', 'We ___ in this town all our lives.', 'LIVE', ['have lived'], 'Всю жизнь и до сих пор — Present Perfect: have lived.');

// ---------- Будущее ----------
I('future', 'I think it ___ tomorrow.', 'RAIN', ['will rain'], 'Tomorrow + «я думаю» — будущее: will rain.');
I('future', 'If you ___ hard, you will pass the exam.', 'WORK', ['work'], 'После if будущее не ставим — пишем настоящее: work.');
I('future', 'When she ___ home, she will call you.', 'COME', ['comes'], 'После when в значении «когда» — настоящее время: comes (she + s).');
I('future', 'Don\'t worry, I ___ you with the bags.', 'HELP', ['will help'], 'Обещание помочь — will help.');
I('future', 'We ___ to the party next Friday. We are busy.', 'NOT GO', ["won't go", 'will not go'], 'Next Friday — будущее. «Не» = won’t (will not).');
I('future', 'As soon as the lesson ___, we will go to the park.', 'FINISH', ['finishes'], 'После as soon as — настоящее время. The lesson = it: finishes.');
I('future', 'In 2050 people ___ on the Moon.', 'LIVE', ['will live'], 'Прогноз на будущее — will live.');
I('future', 'I ___ fifteen next month.', 'BE', ['will be'], 'Next month — будущее: will be.');
I('future', 'We will wait until the rain ___.', 'STOP', ['stops'], 'После until — настоящее время: stops.');
C('future', 'Look at those clouds! It ___ rain.', ['is going to', 'will', 'goes to'], 0, 'Есть явный признак (тучи) — is going to. Will — когда просто думаем или решаем.');
C('future', 'If it ___ sunny tomorrow, we will have a picnic.', ['will be', 'is', 'was'], 1, 'После if — настоящее: is.');
I('future', '___ you come to my birthday party?', 'WILL', ['will'], 'Вопрос о будущем начинается с Will.');
I('future', 'The concert ___ at 7 pm tomorrow.', 'START', ['will start', 'starts'], 'Будущее: will start. Для расписания можно и Present Simple: starts.');
I('future', 'Before you ___ the house, turn off the lights.', 'LEAVE', ['leave'], 'После before — настоящее время: leave.');

// ---------- Пассив ----------
I('passive', 'This castle ___ in the 15th century.', 'BUILD', ['was built'], 'Замок не строил сам себя — его построили. Прошлое: was built.');
I('passive', 'English ___ all over the world.', 'SPEAK', ['is spoken'], 'На английском говорят (вообще, сейчас) — пассив в настоящем: is spoken.');
I('passive', 'The letters ___ yesterday.', 'SEND', ['were sent'], 'Письма отправили (их). Множественное и прошлое: were sent.');
I('passive', 'The new bridge ___ next year.', 'OPEN', ['will be opened'], 'Мост откроют в будущем: will be opened.');
I('passive', 'This film ___ by millions of people.', 'WATCH', ['is watched', 'has been watched'], 'Фильм смотрят (его). Пассив: is watched или has been watched.');
I('passive', 'Look! The windows ___. They are shining.', 'CLEAN', ['have been cleaned', 'have already been cleaned'], 'Окна помыли (не они сами), результат виден сейчас: have been cleaned.');
I('passive', 'Harry Potter ___ by J.K. Rowling.', 'WRITE', ['was written'], 'Книгу написали (by — кем). Прошлое: was written.');
I('passive', 'Tea ___ in India and China.', 'GROW', ['is grown'], 'Чай выращивают — пассив, настоящее: is grown.');
I('passive', 'The thief ___ by the police last night.', 'CATCH', ['was caught'], 'Вора поймали — пассив, прошлое: was caught.');
I('passive', 'Cars ___ in this factory.', 'MAKE', ['are made'], 'Машины производят — пассив, множественное: are made.');
I('passive', 'The telephone ___ by Alexander Bell.', 'INVENT', ['was invented'], 'Телефон изобрели — was invented.');
C('passive', 'The room ___ every day.', ['cleans', 'is cleaned', 'cleaned'], 1, 'Комната сама себя не убирает — её убирают: is cleaned.');
C('passive', 'Our school ___ in 1975.', ['was opened', 'opened', 'is opened'], 0, '1975 — прошлое, школу открыли: was opened.');
I('passive', 'The results ___ tomorrow.', 'ANNOUNCE', ['will be announced'], 'Результаты объявят в будущем: will be announced.');
I('passive', 'Many trees ___ in the storm last week.', 'DESTROY', ['were destroyed'], 'Деревья были уничтожены — прошлое, множественное: were destroyed.');
I('passive', 'This museum ___ by thousands of tourists every year.', 'VISIT', ['is visited'], 'Every year — настоящее, музей посещают: is visited.');

// ---------- Условные ----------
I('cond', 'If I ___ a million dollars, I would travel around the world.', 'HAVE', ['had'], '«Если бы» — нереальное условие: if + прошедшее: had.');
I('cond', 'If I were you, I ___ this jacket.', 'BUY', ['would buy'], 'If I were you — «на твоём месте». Вторая часть: would buy.');
I('cond', 'If she ___ more, she would be healthier.', 'SLEEP', ['slept'], 'Нереальное условие — if + прошедшее: slept.');
I('cond', 'If it rains, we ___ at home.', 'STAY', ['will stay'], 'Реальное условие: if + настоящее, вторая часть — will stay.');
I('cond', 'If I ___ his number, I would call him.', 'KNOW', ['knew'], 'Номера не знаю — «если бы знал»: knew.');
I('cond', 'If he ___ taller, he could play basketball.', 'BE', ['were', 'was'], 'Нереальное условие с be — were (можно и was).');
I('cond', 'If you ___ ice, it melts.', 'HEAT', ['heat'], 'Это всегда верно (факт): if + настоящее, и вторая часть тоже настоящее.');
I('cond', 'If we had left earlier, we ___ the train.', 'NOT MISS', ["wouldn't have missed", 'would not have missed'], '«Если бы тогда…» — would have + 3-я форма: wouldn’t have missed.');
I('cond', 'If they ___ me, I would have helped.', 'ASK', ['had asked'], 'Про прошлое «если бы попросили» — had asked.');
C('cond', 'If I ___ a bird, I would fly.', ['am', 'were', 'will be'], 1, 'Нереально (я не птица) — If I were.');
C('cond', 'If you mix red and white, you ___ pink.', ['get', 'would get', 'got'], 0, 'Факт — работает всегда: get.');
I('cond', 'I would be happy if you ___ with us.', 'COME', ['came'], 'Если бы ты пришёл (нереально сейчас) — came.');
I('cond', 'If the weather ___ fine tomorrow, we will go hiking.', 'BE', ['is'], 'Реальное условие про завтра — после if настоящее: is.');

// ---------- Степени сравнения ----------
I('comp', 'This is the ___ day of my life.', 'HAPPY', ['happiest'], 'The + «самый». Happy на -y: y → i + est: happiest.');
I('comp', 'My brother is ___ than me.', 'TALL', ['taller'], 'Than — «чем», сравниваем двоих: taller.');
I('comp', 'Moscow is the ___ city in Russia.', 'BIG', ['biggest'], 'Самый — the + est. В big удваиваем g: biggest.');
I('comp', 'Today the weather is ___ than yesterday.', 'BAD', ['worse'], 'Исключение: bad → worse (хуже) → the worst.');
I('comp', 'She is the ___ student in our class.', 'GOOD', ['best'], 'Исключение: good → better → the best.');
I('comp', 'This book is ___ than that one.', 'INTERESTING', ['more interesting'], 'Длинное слово — more interesting.');
I('comp', 'It was the ___ film I have ever seen.', 'BORING', ['most boring'], 'Длинное слово + the — the most boring.');
I('comp', 'My new phone is ___ than the old one.', 'GOOD', ['better'], 'Good → better (лучше).');
I('comp', 'Winter is the ___ season of the year.', 'COLD', ['coldest'], 'The + самый: coldest.');
I('comp', 'This exercise is ___ than the first one.', 'EASY', ['easier'], 'Easy на -y: easier.');
I('comp', 'That was the ___ mistake of all.', 'BAD', ['worst'], 'Bad → worse → the worst.');
I('comp', 'Cheetahs are the ___ animals on land.', 'FAST', ['fastest'], 'Самые быстрые: the fastest.');
C('comp', 'Your bag is ___ than mine.', ['heavy', 'heavier', 'more heavy'], 1, 'Heavy — короткое на -y: heavier.');
C('comp', 'Of all the girls, Anna is the ___.', ['more beautiful', 'beautifulest', 'most beautiful'], 2, 'Длинное слово: the most beautiful.');
I('comp', 'I have ___ free time this year than last year.', 'LITTLE', ['less'], 'Little → less (меньше) → the least.');
I('comp', 'The Nile is the ___ river in Africa.', 'LONG', ['longest'], 'Самая длинная: the longest.');
I('comp', 'Can you speak ___? I can\'t hear you.', 'LOUD', ['louder'], 'Сравниваем с тем, как сейчас: louder.');
I('comp', 'This hotel is ___ than the one we stayed in last year.', 'COMFORTABLE', ['more comfortable'], 'Длинное слово: more comfortable.');

// ---------- Местоимения ----------
I('pron', 'This is not my pen. It\'s ___.', 'SHE', ['hers'], 'Нет слова после — «её» = hers.');
I('pron', 'Tom hurt ___ when he fell.', 'HE', ['himself'], 'Сам себя — himself.');
I('pron', 'Can you help ___ with this box?', 'I', ['me'], 'Помочь кому? — мне: me.');
I('pron', 'The dog is playing with ___ ball.', 'IT', ['its'], 'Чей мяч у собаки — its (без апострофа!).');
I('pron', 'We did it ___. Nobody helped us.', 'WE', ['ourselves'], 'Сами — ourselves.');
I('pron', 'Is this car ___? — Yes, it\'s our car.', 'WE', ['ours'], 'В конце, без слова после — ours.');
I('pron', 'I called my friends and invited ___ to the party.', 'THEY', ['them'], 'Пригласил кого? — их: them.');
I('pron', 'She looked at ___ in the mirror.', 'SHE', ['herself'], 'Посмотрела на себя — herself.');
I('pron', 'My parents love ___ new house.', 'THEY', ['their'], 'Чей дом? Перед словом house — their.');
I('pron', 'Please, tell ___ about your holiday.', 'WE', ['us'], 'Расскажи кому? — нам: us.');
I('pron', 'This room is mine and that one is ___.', 'YOU', ['yours'], 'Без слова после — «твоя»: yours.');
I('pron', 'The children made the cake ___.', 'THEY', ['themselves'], 'Сами — themselves.');
C('pron', 'Anna and ___ went to the cinema.', ['me', 'I', 'my'], 1, 'Кто пошёл? — Анна и я: I.');
C('pron', 'Is that ___ bike?', ['your', 'yours', 'you'], 0, 'Перед словом bike — your.');
I('pron', 'Help ___ to some cake, Kate!', 'YOU', ['yourself'], 'Help yourself — «угощайся», себе: yourself.');
I('pron', 'I met Mike and gave ___ the book.', 'HE', ['him'], 'Дал кому? — ему: him.');

// ---------- Мн. число и числа ----------
I('plural', 'There are three ___ in our family.', 'CHILD', ['children'], 'Особая форма: child → children.');
I('plural', 'Many ___ came to the meeting.', 'WOMAN', ['women'], 'Woman → women.');
I('plural', 'Brush your ___ twice a day.', 'TOOTH', ['teeth'], 'Tooth → teeth.');
I('plural', 'My ___ hurt after the long walk.', 'FOOT', ['feet'], 'Foot → feet.');
I('plural', 'In autumn the ___ turn yellow.', 'LEAF', ['leaves'], 'Leaf → leaves (f → ves).');
I('plural', 'The cat caught two ___.', 'MOUSE', ['mice'], 'Mouse → mice.');
I('plural', 'There were a lot of ___ in the street.', 'PERSON', ['people'], 'Person → people.');
I('plural', 'Put the ___ on the table, please.', 'KNIFE', ['knives'], 'Knife → knives.');
I('plural', 'The farmer has fifty ___.', 'SHEEP', ['sheep'], 'Sheep во множественном не меняется: sheep.');
I('plural', 'December is the ___ month of the year.', 'TWELVE', ['twelfth'], 'Который по счёту: twelve → twelfth (ve → f + th).');
I('plural', 'My flat is on the ___ floor.', 'THREE', ['third'], 'Three → third.');
I('plural', 'It was her ___ birthday.', 'NINE', ['ninth'], 'Nine → ninth (без e!).');
I('plural', 'We live in the ___ century.', 'TWENTY-ONE', ['twenty-first'], 'Twenty-one → twenty-first.');
I('plural', 'He came ___ in the race.', 'TWO', ['second'], 'Two → second.');
I('plural', 'May is the ___ month of the year.', 'FIVE', ['fifth'], 'Five → fifth.');
I('plural', 'Some ___ were playing in the yard.', 'BOY', ['boys'], 'Гласная + y — просто + s: boys.');
I('plural', 'We visited three ___ in Italy.', 'CITY', ['cities'], 'Согласная + y → ies: cities.');
I('plural', 'There are many ___ in the old house.', 'SHELF', ['shelves'], 'Shelf → shelves.');

// ---------- Словообразование: существительные ----------
I('wf_noun', 'My uncle is a famous ___. He paints landscapes.', 'ART', ['artist'], 'Кто рисует — artist (-ist).');
I('wf_noun', 'Thank you for your ___ to the party.', 'INVITE', ['invitation'], 'После your нужно существительное: invite → invitation.');
I('wf_noun', 'The ___ of the new park took two years.', 'BUILD', ['building'], 'The … of — нужно существительное: building (строительство).');
I('wf_noun', 'She is a good ___. Her lessons are interesting.', 'TEACH', ['teacher'], 'Кто учит — teacher (-er).');
I('wf_noun', 'Good ___ is very important for children.', 'EDUCATE', ['education'], 'Нужно «что?» — образование: education.');
I('wf_noun', 'His ___ to become a doctor surprised everyone.', 'DECIDE', ['decision'], 'His + существительное: decide → decision.');
I('wf_noun', 'We were amazed by the ___ of the city.', 'BEAUTIFUL', ['beauty'], 'The … of — существительное: beauty (красота).');
I('wf_noun', 'The ___ of the actors was wonderful.', 'PERFORM', ['performance'], 'The … of — существительное: performance (выступление).');
I('wf_noun', 'There is a big ___ between these two pictures.', 'DIFFERENT', ['difference'], 'A big + существительное: difference (разница).');
I('wf_noun', 'Money can\'t buy ___.', 'HAPPY', ['happiness'], 'Нужно «что?» — счастье: happiness.');
I('wf_noun', 'The museum had many ___ today.', 'VISIT', ['visitors'], 'Many — значит, много людей: visitors (-or + s).');
I('wf_noun', 'The ___ of the internet changed our lives.', 'INVENT', ['invention'], 'The … of — invention (изобретение).');
I('wf_noun', 'Thank you for your ___!', 'KIND', ['kindness'], 'Your + что? — kindness (доброта).');
I('wf_noun', 'The ___ of the town is very fast.', 'DEVELOP', ['development'], 'The … of — development (развитие).');
I('wf_noun', 'He is a famous ___ who studies stars.', 'SCIENCE', ['scientist'], 'Кто занимается наукой — scientist.');
I('wf_noun', 'She has a lot of ___ in playing the guitar.', 'EXPERIENCED', ['experience'], 'A lot of + существительное: experience (опыт).');
I('wf_noun', 'Every ___ must wear a uniform.', 'WORK', ['worker'], 'Every + кто? — worker.');
I('wf_noun', 'There was a ___ between the two teams.', 'COMPETE', ['competition'], 'A + существительное: competition (соревнование).');
I('wf_noun', 'The ___ of the book was very exciting.', 'BEGIN', ['beginning'], 'The … of — beginning (начало, удваиваем n).');
I('wf_noun', 'Our ___ is very strong.', 'FRIEND', ['friendship'], 'Our + что? — friendship (дружба).');
I('wf_noun', 'She gave me some useful ___.', 'INFORM', ['information'], 'Some useful + что? — information.');
I('wf_noun', 'The ___ of the hotel welcomed us.', 'MANAGE', ['manager'], 'Кто управляет — manager.');

// ---------- Словообразование: прилагательные ----------
I('wf_adj', 'It was a ___ day, so we went to the beach.', 'SUN', ['sunny'], 'A … day — какой день? Солнечный: sunny (удваиваем n + y).');
I('wf_adj', 'Climbing mountains can be ___.', 'DANGER', ['dangerous'], 'Can be какой? — dangerous (опасный).');
I('wf_adj', 'He is a very ___ singer. Everyone knows him.', 'FAME', ['famous'], 'Какой певец? — famous (e пропадает).');
I('wf_adj', 'The bed in the hotel was very ___.', 'COMFORT', ['comfortable'], 'Was very какая? — comfortable (удобная).');
I('wf_adj', 'Thank you, you have been very ___.', 'HELP', ['helpful'], 'Very какой? — helpful (полезный).');
I('wf_adj', 'Pancakes are a ___ Russian dish.', 'TRADITION', ['traditional'], 'Какое блюдо? — traditional.');
I('wf_adj', 'She is a ___ girl. She draws and writes poems.', 'CREATE', ['creative'], 'Какая девочка? — creative (творческая).');
I('wf_adj', 'We had a very ___ holiday.', 'ENJOY', ['enjoyable'], 'Какой отдых? — enjoyable (приятный).');
I('wf_adj', 'Mendeleev made an important ___ discovery.', 'SCIENCE', ['scientific'], 'Какое открытие? — scientific (научное).');
I('wf_adj', 'The museum has a ___ collection of paintings.', 'WONDER', ['wonderful'], 'Какая коллекция? — wonderful.');
I('wf_adj', 'Don\'t be so ___! You broke the cup.', 'CARE', ['careless'], 'Разбил чашку — значит, без осторожности: careless (-less = без).');
I('wf_adj', 'Our ___ team won the championship.', 'NATION', ['national'], 'Какая команда? — national.');
I('wf_adj', 'It was a ___ day, so we took umbrellas.', 'RAIN', ['rainy'], 'Какой день? Дождливый: rainy.');
I('wf_adj', 'The film was ___. We laughed a lot.', 'FUN', ['funny'], 'Смешной — funny (удваиваем n).');
I('wf_adj', 'She is a very ___ person. Everybody likes her.', 'FRIEND', ['friendly'], 'Какой человек? — friendly (дружелюбный).');
I('wf_adj', 'This dress is very ___.', 'ATTRACT', ['attractive'], 'Какое платье? — attractive (привлекательное).');
I('wf_adj', 'The Kremlin is a ___ place.', 'HISTORY', ['historic', 'historical'], 'Какое место? — historic (исторический).');
I('wf_adj', 'She felt ___ after the long walk.', 'HUNGER', ['hungry'], 'Felt какой? — hungry (голодный).');
I('wf_adj', 'The news was very ___ for us.', 'SURPRISE', ['surprising'], 'Новости (что-то) удивляют — surprising. Человек удивлён — surprised.');
I('wf_adj', 'I was ___ to see him there.', 'SURPRISE', ['surprised'], 'Человек удивлён — surprised (-ed — про чувства).');
I('wf_adj', 'Swimming is good for your ___.', 'HEALTHY', ['health'], 'Your + что? — здесь нужно существительное: health. Не всегда нужно прилагательное!');
I('wf_adj', 'It was a ___ experience.', 'USE', ['useful'], 'Какой опыт? — useful (полезный).');

// ---------- Словообразование: наречия ----------
I('wf_adv', 'She sings very ___.', 'BEAUTIFUL', ['beautifully'], 'Как поёт? — наречие: beautifully.');
I('wf_adv', 'Please drive ___.', 'CAREFUL', ['carefully'], 'Как ехать? — carefully (осторожно).');
I('wf_adv', 'The children were playing ___ in the garden.', 'HAPPY', ['happily'], 'Как играли? — happily (y → i + ly).');
I('wf_adv', 'He solved the problem ___.', 'EASY', ['easily'], 'Как решил? — easily.');
I('wf_adv', 'She speaks English very ___.', 'GOOD', ['well'], 'Исключение: good → well (хорошо).');
I('wf_adv', '___, it started to rain.', 'SUDDEN', ['suddenly'], 'В начале предложения «вдруг» — suddenly.');
I('wf_adv', 'He ran ___ to catch the bus.', 'QUICK', ['quickly'], 'Как бежал? — quickly.');
I('wf_adv', 'We ___ go to the park on Sundays.', 'USUAL', ['usually'], 'Обычно — usually.');
I('wf_adv', 'She answered all the questions ___.', 'CORRECT', ['correctly'], 'Как ответила? — correctly.');
I('wf_adv', '___, we missed the train.', 'LUCKY', ['unluckily', 'unfortunately'], 'Пропустили поезд — к сожалению: unluckily (не + наречие).');
I('wf_adv', 'The cat was sleeping ___ on the sofa.', 'PEACEFUL', ['peacefully'], 'Как спал? — peacefully (спокойно).');
I('wf_adv', 'He ___ agreed to help us.', 'KIND', ['kindly'], 'Как согласился? — kindly (любезно).');
I('wf_adv', 'You can ___ find this book in any shop.', 'EASY', ['easily'], 'Как найти? — easily.');
I('wf_adv', 'They sat ___ in the armchairs.', 'COMFORTABLE', ['comfortably'], 'На -le: comfortable → comfortably.');
I('wf_adv', 'The plane landed ___.', 'SAFE', ['safely'], 'Как приземлился? — safely.');
I('wf_adv', 'The bus was ___ late.', 'TERRIBLE', ['terribly'], 'Как сильно опоздал? — terribly (на -le: le → ly).');

// ---------- Словообразование: «не-» ----------
I('wf_neg', 'It is ___ to learn English in one week.', 'POSSIBLE', ['impossible'], 'По смыслу «невозможно». Перед p — im-: impossible.');
I('wf_neg', 'I was ___ because I lost my phone.', 'HAPPY', ['unhappy'], 'Потерял телефон — грустно: unhappy.');
I('wf_neg', 'It is ___ to talk with your mouth full.', 'POLITE', ['impolite'], 'Невежливо — impolite (перед p — im-).');
I('wf_neg', 'Your answer is ___. Try again.', 'CORRECT', ['incorrect'], 'Try again — значит неправильно: incorrect.');
I('wf_neg', 'I ___ this film. It was boring.', 'LIKE', ['disliked'], 'Было скучно — не понравился. Прошлое: disliked.');
I('wf_neg', '"Go", "see", "take" are ___ verbs.', 'REGULAR', ['irregular'], 'Неправильные глаголы — irregular (перед r — ir-).');
I('wf_neg', 'Unfortunately, he was ___ to come.', 'ABLE', ['unable'], 'Unfortunately — значит не смог: unable.');
I('wf_neg', 'It is ___ to cross the road on a red light.', 'LEGAL', ['illegal'], 'Незаконно — illegal (перед l — il-).');
I('wf_neg', 'Don\'t be so ___! Wait a minute.', 'PATIENT', ['impatient'], 'Wait a minute — значит человек нетерпеливый: impatient.');
I('wf_neg', 'The weather was ___ warm for December.', 'USUAL', ['unusually'], 'Необычно тепло — unusually (не + наречие).');
I('wf_neg', 'My sister and I often ___ about music.', 'AGREE', ['disagree'], 'Часто спорят — не соглашаются: disagree.');
I('wf_neg', 'She is very ___. She never helps anyone.', 'FRIENDLY', ['unfriendly'], 'Никому не помогает — недружелюбная: unfriendly.');
I('wf_neg', 'He left the door open. That was very ___ of him.', 'RESPONSIBLE', ['irresponsible'], 'Безответственно — irresponsible (перед r — ir-).');
I('wf_neg', 'The test was ___. Nobody passed it.', 'FAIR', ['unfair'], 'Никто не сдал — несправедливый тест: unfair.');
I('wf_neg', 'It was a very ___ story. Nobody believed it.', 'BELIEVABLE', ['unbelievable'], 'Никто не поверил — невероятная: unbelievable.');
I('wf_neg', 'He is ___. He told me a lie.', 'HONEST', ['dishonest'], 'Солгал — нечестный: dishonest.');
