// Подробные объяснения тем простым языком (кнопка «Не понятно — объясни»)
// и перевод каждого предложения (показывается после ответа).

const EXPLAIN = {
  present: `Настоящее время в английском бывает двух видов. Нужно понять: это происходит ВООБЩЕ (обычно, всегда) или ПРЯМО СЕЙЧАС.

1) ОБЫЧНО, ВСЕГДА, КАЖДЫЙ ДЕНЬ → Present Simple
Глагол просто как в словаре: I play, we play, they play.
Но если «он / она / оно» (he, she, it, my brother, Kate, the shop) — в конце добавляем -s:
• He plays — он играет (вообще)
• She goes — она ходит (после o, sh, ch, s добавляем -es: goes, watches, brushes)

Подсказки в предложении: every day (каждый день), usually (обычно), often (часто), always (всегда), never (никогда), on Sundays (по воскресеньям).

«Не» и вопрос: для he/she/it → doesn’t / does, и тогда -s у глагола УБИРАЕМ:
• She doesn’t play. Does she play?
Для остальных → don’t / do: They don’t play. Do they play?

2) ПРЯМО СЕЙЧАС → Present Continuous
Это как фото процесса: «вот прямо сейчас она читает».
Строим: am / is / are + глагол с -ing
• I am reading — я (сейчас) читаю
• She is reading — она читает
• They are reading — они читают

Подсказки: now (сейчас), right now, at the moment (в данный момент), Look! (Смотри!), Listen! (Послушай!).

Как решать: найди подсказку → «обычно» или «сейчас» → выбери форму.`,

  past: `Прошедшее время — что было раньше. Подсказки: yesterday (вчера), last week / last year (на прошлой неделе / в прошлом году), ago (назад: two days ago), in 2019.

1) ПРОСТО СЛУЧИЛОСЬ → Past Simple
Обычные глаголы: добавляем -ed: play → played, visit → visited, move → moved.
Неправильные глаголы — у них своя форма, её надо запомнить (это «2-я форма» в таблице неправильных глаголов):
go → went, see → saw, buy → bought, write → wrote, take → took, eat → ate, tell → told, lose → lost, sleep → slept.

be в прошлом: I / he / she / it → was; we / you / they → were.

«Не» и вопрос → did / didn’t, и глагол возвращается в обычную форму:
• I didn’t go (а НЕ didn’t went). Did you see? (а НЕ did you saw).

2) ДЛИЛОСЬ В КАКОЙ-ТО МОМЕНТ → Past Continuous
«Когда ты позвонил, я СПАЛ» — сон длился, а звонок его прервал.
Строим: was / were + глагол с -ing
• I was sleeping when you called.
• They were playing when it started to rain.
Подсказки: when (когда), while (пока), at 5 o’clock yesterday.`,

  perfect: `Сначала про «3-ю форму». У каждого глагола три формы:
• обычные глаголы: play – played – played (2-я и 3-я одинаковые, с -ed)
• неправильные: go – went – gone, see – saw – seen, do – did – done, be – was/were – been, write – wrote – written, eat – ate – eaten, break – broke – broken, give – gave – given, come – came – come.
3-я форма — третья колонка в таблице неправильных глаголов.

1) Present Perfect = have / has + 3-я форма
Используем, когда важно, что результат есть СЕЙЧАС, а когда именно это случилось — неважно.
• I have finished my project. — Я закончила проект (и вот он готов).
• She has never been to London. — Она никогда не была в Лондоне (за всю жизнь).
has — для he / she / it, have — для остальных.

Подсказки: already (уже), just (только что), yet (ещё / уже — в вопросах и с «не»), ever (когда-нибудь), never (никогда), since (с тех пор как), for (в течение).
Важно: если есть yesterday, last year, ago — это НЕ Perfect, а простое прошедшее.

2) Past Perfect = had + 3-я форма
Два события в прошлом, и одно было РАНЬШЕ другого.
• When we arrived, the train had left. — Когда мы пришли, поезд УЖЕ ушёл (сначала ушёл поезд, потом пришли мы).
Подсказки: by the time (к тому времени как), before (до того как), «сказал, что уже сделал».`,

  future: `Будущее время — почти всегда will + глагол.
• I will help you. — Я тебе помогу.
• It will rain tomorrow. — Завтра будет дождь.
«Не» → won’t (= will not): We won’t go.

ГЛАВНАЯ ЛОВУШКА ОГЭ:
После слов if (если), when (когда), as soon as (как только), before (до того как), after (после того как), until (пока не) будущее НЕ ставим! Пишем настоящее время, хотя по-русски — будущее.
• When she comes, we will start. — Когда она ПРИДЁТ, мы начнём.
  (По-русски «придёт», а по-английски comes!)
• If it rains, we will stay at home. — Если пойдёт дождь, мы останемся дома.

Как решать: посмотри на слово перед пропуском. Стоит if / when / as soon as / until / before? → настоящее время (и не забудь -s для he/she/it). Нет? → will.

Ещё going to: «собираюсь» или когда признаки уже видно: Look at the clouds! It is going to rain.`,

  passive: `Пассив — это когда предмет сам ничего не делает, а с ним что-то делают.
По-русски: «Дом БЫЛ ПОСТРОЕН», «На английском ГОВОРЯТ», «Письма ОТПРАВИЛИ».

Как понять, что нужен пассив: спроси себя — предмет сам это делает?
• The castle ___ (build). Замок сам строил? Нет, его построили → пассив.
• Tom ___ (build) a house. Том сам строил? Да → обычное время.

Строим в 3 шага:
1) Найди подсказку времени (every day, yesterday, tomorrow, already…).
2) Поставь to be в это время.
3) Добавь 3-ю форму глагола (V3, Past Participle): build → built, speak → spoken, send → sent, clean → cleaned.

Какой to be в каком времени:
• Present Simple (обычно, сейчас вообще): am / is / are + V3 — English is spoken (на английском говорят). Cars are made (машины делают).
• Past Simple (в прошлом): was / were + V3 — The castle was built (замок был построен). The letters were sent.
• Future Simple (в будущем): will be + V3 — The bridge will be opened (мост откроют).
• Present Perfect (уже сделано, результат сейчас): has / have been + V3 — The windows have been cleaned (окна помыли).
• Present Continuous (прямо сейчас в процессе): am / is / are being + V3 — The room is being cleaned (комнату сейчас убирают). В ОГЭ встречается редко.

Подсказка: часто есть by — «кем»: written by Rowling (написан Роулинг).`,

  cond: `Условные предложения — с if (если).

1) РЕАЛЬНО может случиться
If + настоящее время, … will …
• If it rains, we will stay at home. — Если пойдёт дождь, мы останемся дома.
(После if — НЕ will!)

2) «ЕСЛИ БЫ» — сейчас это неправда, просто мечтаем
If + прошедшее время, … would + глагол
• If I had a million, I would travel. — Если бы у меня был миллион (а его нет), я бы путешествовала.
• If I were you, I would… — На твоём месте я бы…
С be обычно пишут were даже для I / he / she.
Подсказка: в предложении есть would → значит, «если бы» → после if прошедшее время.

3) «ЕСЛИ БЫ ТОГДА» — про прошлое, уже не исправить
If + had + 3-я форма, … would have + 3-я форма
• If we had left earlier, we wouldn’t have missed the train. — Если бы мы вышли раньше, мы бы не опоздали на поезд.

4) Факт, который верен всегда
If + настоящее, … настоящее
• If you heat ice, it melts. — Если нагреть лёд, он тает.`,

  comp: `Сравнение: «выше», «самый высокий».

1) КОРОТКИЕ слова (1 слог, или 2 слога на -y)
• «более» → + er: tall → taller (выше)
• «самый» → the + est: the tallest (самый высокий)
Правила букв:
• на -y: y меняем на i — happy → happier → the happiest, easy → easier
• короткое слово на согласную после одной гласной — удваиваем: big → bigger → the biggest, hot → hotter

2) ДЛИННЫЕ слова (interesting, beautiful, comfortable)
• «более» → more: more interesting
• «самый» → the most: the most interesting

3) ИСКЛЮЧЕНИЯ — выучить наизусть:
good → better → the best (хороший → лучше → самый лучший)
bad → worse → the worst (плохой → хуже → самый плохой)
little → less → the least (мало → меньше → меньше всего)
many / much → more → the most

Как решать: есть than (чем)? → «более» (-er или more). Есть the перед пропуском или «из всех»? → «самый» (-est или the most).`,

  pron: `Местоимения — слова вместо имён: я, мне, мой, себя.

Таблица (слева направо: кто? / кого? / чей + слово / чей без слова / сам):
• я: I / me / my / mine / myself
• ты: you / you / your / yours / yourself
• он: he / him / his / his / himself
• она: she / her / her / hers / herself
• оно: it / it / its / — / itself
• мы: we / us / our / ours / ourselves
• они: they / them / their / theirs / themselves

Как выбрать:
1) Кто делает (в начале, перед глаголом)? → I, he, she, we, they. Anna and I went…
2) Кого? Кому? (после глагола или после with, for, to) → me, him, her, us, them. Help me. I invited them.
3) Чей? И после него есть слово → my, his, her, our, their. Their house.
4) Чей? А после него слова нет → mine, yours, hers, ours. It’s hers. Is this car ours?
5) Сам / себя → -self (-selves для «мы», «вы», «они»). He hurt himself — он ударился (поранил себя).

Ловушка: its (его, у предмета/животного) пишется БЕЗ апострофа. it’s = it is.`,

  plural: `1) Множественное число — когда много.
Обычно просто + s: book → books, boy → boys.
• после s, sh, ch, x → + es: bus → buses, watch → watches
• согласная + y → ies: city → cities (но boy → boys, т.к. перед y гласная)
• на -f / -fe → ves: leaf → leaves, knife → knives, wife → wives, shelf → shelves

Особые слова — запомнить:
man → men (мужчины), woman → women (женщины), child → children (дети), person → people (люди), tooth → teeth (зубы), foot → feet (ступни), mouse → mice (мыши).
Не меняются: sheep → sheep (овцы), fish → fish (рыбы).

2) Порядковые числа — «который по счёту» (первый, второй…).
Обычно + th: four → fourth, six → sixth, seven → seventh.
Особые:
one → first (первый), two → second (второй), three → third (третий)
five → fifth (ve → f), twelve → twelfth
nine → ninth (без e!)
eight → eighth (только h)
twenty → twentieth (y → ie + th)
twenty-one → twenty-first (меняется только последнее число)

Подсказка: если перед пропуском стоит the (the third floor, the twelfth month) — нужно порядковое.`,

  wf_noun: `В задании на словообразование дано слово, и его надо превратить в другую часть речи, чтобы предложение стало правильным.

Шаг 1. Пойми, какое слово нужно в пропуске. Существительное (кто? что?) нужно, если перед пропуском:
• the, a, an: the ___ of…
• my, your, his, our, their: your ___
• много / несколько: many, a lot of, some
• прилагательное: good ___, big ___

Шаг 2. Выбери окончание.
Человек (кто?):
• -er: teach → teacher, work → worker, manage → manager
• -or: act → actor, visit → visitor
• -ist: art → artist, science → scientist
Предмет, действие, качество (что?):
• -tion / -ation / -sion: invite → invitation, educate → education, decide → decision
• -ment: develop → development, agree → agreement
• -ness: kind → kindness, happy → happiness (y → i)
• -ance / -ence: perform → performance, different → difference
• -ship: friend → friendship
• -ing: build → building, begin → beginning

Шаг 3. Проверь число: если много людей (many visitors) — добавь -s.`,

  wf_adj: `Прилагательное отвечает на вопрос «КАКОЙ?».
Оно нужно, если пропуск:
• перед существительным: a ___ day (какой день?)
• после be, feel, look, become: It was ___. She felt ___.
• после very, so, too: very ___

Окончания прилагательных:
• -ful — «полный чего-то»: help → helpful (полезный), beauty → beautiful, wonder → wonderful
• -less — «без»: care → careless (небрежный, без заботы)
• -ous: danger → dangerous (опасный), fame → famous (известный)
• -al: nation → national, tradition → traditional
• -able / -ible — «можно»: comfort → comfortable, enjoy → enjoyable
• -y: sun → sunny, rain → rainy, fun → funny, hunger → hungry
• -ive: create → creative, attract → attractive
• -ic: science → scientific
• -ly (у прилагательных!): friend → friendly (дружелюбный)

Ловушка -ing / -ed:
• -ing — что-то вызывает чувство: The news was surprising (новости удивительные).
• -ed — человек чувствует: I was surprised (я была удивлена).

И ещё: не всегда нужно прилагательное! «good for your ___» → что? → существительное: health.`,

  wf_adv: `Наречие отвечает на вопрос «КАК?» и описывает действие (глагол).
• She sings ___ → как поёт? → beautifully (красиво)
• Drive ___ → как ехать? → carefully (осторожно)

Как сделать: прилагательное + ly
• quick → quickly, careful → carefully, sudden → suddenly, usual → usually
• на -y: y → i + ly: happy → happily, easy → easily
• на -le: e → y: comfortable → comfortably, terrible → terribly, possible → possibly

Исключение: good → well (хорошо). She speaks English well.

Как отличить от прилагательного:
• описывает ПРЕДМЕТ (какой?) → прилагательное: a quick answer (быстрый ответ)
• описывает ДЕЙСТВИЕ (как?) → наречие: answer quickly (быстро ответить)

Часто наречие стоит в начале предложения с запятой: Suddenly, … (Вдруг, …). Unfortunately, … (К сожалению, …).`,

  wf_neg: `Иногда по смыслу нужно слово с «НЕ»: невозможно, несчастный, неправильный.

Как понять: прочитай всё предложение и следующее за ним. Если там что-то плохое, «но», «к сожалению», «никто не…», «попробуй ещё раз» — скорее всего нужна приставка «не-».
• I was ___ (happy) because I lost my phone. Потеряла телефон — значит НЕ счастлива → unhappy.

Какую приставку выбрать:
• un- — самая частая: unhappy, unusual, unable, unfair, unfriendly, unbelievable
• im- — перед p и m: impossible, impolite, impatient
• ir- — перед r: irregular, irresponsible
• il- — перед l: illegal
• in- — в некоторых словах: incorrect, independent
• dis- — часто с глаголами: dislike, disagree, и ещё dishonest

Если не уверена — пробуй un-, она встречается чаще всего.

Бывает и приставка, и окончание сразу: usual → unusually (необычно).`,
};

const RU = {
  // Настоящее время
  "My brother ___ football every Saturday.": "Мой брат играет в футбол каждую субботу.",
  "Look! The children ___ in the garden.": "Смотри! Дети танцуют в саду.",
  "Kate usually ___ to school by bus.": "Катя обычно ездит в школу на автобусе.",
  "My dad ___ coffee in the morning. He prefers tea.": "Мой папа не пьёт кофе по утрам. Он предпочитает чай.",
  "___ your sister speak French?": "Твоя сестра говорит по-французски?",
  "Be quiet, please! The baby ___.": "Тише, пожалуйста! Малыш спит.",
  "The Earth ___ around the Sun.": "Земля вращается вокруг Солнца.",
  "At the moment we ___ for the test.": "Сейчас мы готовимся к контрольной.",
  "My grandma ___ delicious pies.": "Моя бабушка печёт вкусные пироги.",
  "She ___ her homework right now, so she can't talk.": "Она прямо сейчас делает домашку, поэтому не может говорить.",
  "Tom ___ TV every evening.": "Том смотрит телевизор каждый вечер.",
  "Listen! Somebody ___ the piano.": "Послушай! Кто-то играет на пианино.",
  "They ___ like spicy food.": "Они не любят острую еду.",
  "The shop ___ at 9 o'clock every day.": "Магазин открывается в 9 часов каждый день.",
  "My friends ___ me at the café now.": "Друзья сейчас ждут меня в кафе.",
  "He ___ his teeth twice a day.": "Он чистит зубы два раза в день.",
  // Прошедшее
  "Last summer we ___ to the seaside.": "Прошлым летом мы ездили на море.",
  "Yesterday I ___ an interesting film.": "Вчера я посмотрела интересный фильм.",
  "She ___ a beautiful dress for the party two days ago.": "Два дня назад она купила красивое платье на вечеринку.",
  "When I came home, my mum ___ dinner.": "Когда я пришла домой, мама готовила ужин.",
  "We ___ the museum last week. It was closed.": "На прошлой неделе мы не попали в музей. Он был закрыт.",
  "The boys ___ football when it started to rain.": "Мальчики играли в футбол, когда начался дождь.",
  "In 2019 my family ___ to a new flat.": "В 2019 году наша семья переехала в новую квартиру.",
  "He ___ me a long letter last month.": "В прошлом месяце он написал мне длинное письмо.",
  "I ___ very tired after the trip.": "Я очень устала после поездки.",
  "My parents ___ at home yesterday evening.": "Вчера вечером мои родители были дома.",
  "She ___ her keys and couldn't open the door.": "Она потеряла ключи и не смогла открыть дверь.",
  "We ___ a lot of photos on holiday.": "На каникулах мы сделали много фотографий.",
  "The teacher ___ us a funny story.": "Учитель рассказал нам смешную историю.",
  "I ___ my grandparents last Sunday.": "В прошлое воскресенье я навестила бабушку и дедушку.",
  "___ you enjoy the concert yesterday?": "Тебе понравился вчерашний концерт?",
  "While I ___ a bath, the phone rang.": "Пока я принимала ванну, зазвонил телефон.",
  "Columbus ___ America in 1492.": "Колумб открыл Америку в 1492 году.",
  "The children ___ the cake in five minutes.": "Дети съели торт за пять минут.",
  "We ___ the bus because we got up late.": "Мы опоздали на автобус, потому что поздно встали.",
  "She ___ the whole night and felt great in the morning.": "Она проспала всю ночь и утром чувствовала себя отлично.",
  // Perfect
  "I ___ my project. Now I am free!": "Я закончила проект. Теперь я свободна!",
  "She has never ___ to London.": "Она никогда не была в Лондоне.",
  "We ___ each other since 2018.": "Мы знаем друг друга с 2018 года.",
  "My dad has just ___ home.": "Папа только что пришёл домой.",
  "They ___ the new film yet.": "Они ещё не видели новый фильм.",
  "Have you ever ___ sushi?": "Ты когда-нибудь пробовала суши?",
  "When we arrived at the station, the train ___.": "Когда мы пришли на вокзал, поезд уже ушёл.",
  "She said that she ___ her homework.": "Она сказала, что уже сделала домашку.",
  "Tom ___ his leg, so he can't play today.": "Том сломал ногу, поэтому сегодня не может играть.",
  "I ___ this book three times.": "Я читала эту книгу три раза.",
  "By the time I woke up, mum ___ breakfast.": "К тому времени, как я проснулась, мама уже приготовила завтрак.",
  "I have lived here ___ five years.": "Я живу здесь пять лет.",
  "Have you finished your essay ___?": "Ты уже закончила сочинение?",
  "My friends ___ me a present. Look!": "Друзья подарили мне подарок. Смотри!",
  "He was sad because he ___ his phone.": "Он грустил, потому что потерял телефон.",
  "We ___ in this town all our lives.": "Мы живём в этом городе всю жизнь.",
  // Будущее
  "I think it ___ tomorrow.": "Думаю, завтра будет дождь.",
  "If you ___ hard, you will pass the exam.": "Если будешь усердно заниматься, сдашь экзамен.",
  "When she ___ home, she will call you.": "Когда она придёт домой, она тебе позвонит.",
  "Don't worry, I ___ you with the bags.": "Не волнуйся, я помогу тебе с сумками.",
  "We ___ to the party next Friday. We are busy.": "Мы не пойдём на вечеринку в следующую пятницу. Мы заняты.",
  "As soon as the lesson ___, we will go to the park.": "Как только урок закончится, мы пойдём в парк.",
  "In 2050 people ___ on the Moon.": "В 2050 году люди будут жить на Луне.",
  "I ___ fifteen next month.": "В следующем месяце мне будет пятнадцать.",
  "We will wait until the rain ___.": "Мы подождём, пока не закончится дождь.",
  "Look at those clouds! It ___ rain.": "Посмотри на эти тучи! Сейчас пойдёт дождь.",
  "If it ___ sunny tomorrow, we will have a picnic.": "Если завтра будет солнечно, мы устроим пикник.",
  "___ you come to my birthday party?": "Ты придёшь на мой день рождения?",
  "The concert ___ at 7 pm tomorrow.": "Завтра концерт начнётся в 7 вечера.",
  "Before you ___ the house, turn off the lights.": "Прежде чем выйти из дома, выключи свет.",
  // Пассив
  "This castle ___ in the 15th century.": "Этот замок был построен в XV веке.",
  "English ___ all over the world.": "На английском говорят во всём мире.",
  "The letters ___ yesterday.": "Письма отправили вчера.",
  "The new bridge ___ next year.": "Новый мост откроют в следующем году.",
  "This film ___ by millions of people.": "Этот фильм смотрят миллионы людей.",
  "Look! The windows ___. They are shining.": "Смотри! Окна помыли. Они блестят.",
  "Harry Potter ___ by J.K. Rowling.": "«Гарри Поттер» написан Дж. К. Роулинг.",
  "Tea ___ in India and China.": "Чай выращивают в Индии и Китае.",
  "The thief ___ by the police last night.": "Вчера ночью полиция поймала вора.",
  "Cars ___ in this factory.": "На этом заводе делают машины.",
  "The telephone ___ by Alexander Bell.": "Телефон изобрёл Александр Белл.",
  "The room ___ every day.": "Комнату убирают каждый день.",
  "Our school ___ in 1975.": "Нашу школу открыли в 1975 году.",
  "The results ___ tomorrow.": "Результаты объявят завтра.",
  "Many trees ___ in the storm last week.": "На прошлой неделе в бурю было уничтожено много деревьев.",
  "This museum ___ by thousands of tourists every year.": "Этот музей каждый год посещают тысячи туристов.",
  // Условные
  "If I ___ a million dollars, I would travel around the world.": "Если бы у меня был миллион долларов, я бы путешествовала по миру.",
  "If I were you, I ___ this jacket.": "На твоём месте я бы купила эту куртку.",
  "If she ___ more, she would be healthier.": "Если бы она больше спала, она была бы здоровее.",
  "If it rains, we ___ at home.": "Если пойдёт дождь, мы останемся дома.",
  "If I ___ his number, I would call him.": "Если бы я знала его номер, я бы ему позвонила.",
  "If he ___ taller, he could play basketball.": "Если бы он был выше, он мог бы играть в баскетбол.",
  "If you ___ ice, it melts.": "Если нагреть лёд, он тает.",
  "If we had left earlier, we ___ the train.": "Если бы мы вышли раньше, мы бы не опоздали на поезд.",
  "If they ___ me, I would have helped.": "Если бы они меня попросили, я бы помогла.",
  "If I ___ a bird, I would fly.": "Если бы я была птицей, я бы летала.",
  "If you mix red and white, you ___ pink.": "Если смешать красный и белый, получится розовый.",
  "I would be happy if you ___ with us.": "Я была бы рада, если бы ты пошла с нами.",
  "If the weather ___ fine tomorrow, we will go hiking.": "Если завтра будет хорошая погода, мы пойдём в поход.",
  // Сравнение
  "This is the ___ day of my life.": "Это самый счастливый день в моей жизни.",
  "My brother is ___ than me.": "Мой брат выше меня.",
  "Moscow is the ___ city in Russia.": "Москва — самый большой город России.",
  "Today the weather is ___ than yesterday.": "Сегодня погода хуже, чем вчера.",
  "She is the ___ student in our class.": "Она лучшая ученица в нашем классе.",
  "This book is ___ than that one.": "Эта книга интереснее, чем та.",
  "It was the ___ film I have ever seen.": "Это был самый скучный фильм, который я видела.",
  "My new phone is ___ than the old one.": "Мой новый телефон лучше старого.",
  "Winter is the ___ season of the year.": "Зима — самое холодное время года.",
  "This exercise is ___ than the first one.": "Это упражнение легче, чем первое.",
  "That was the ___ mistake of all.": "Это была самая худшая ошибка из всех.",
  "Cheetahs are the ___ animals on land.": "Гепарды — самые быстрые животные на суше.",
  "Your bag is ___ than mine.": "Твоя сумка тяжелее моей.",
  "Of all the girls, Anna is the ___.": "Из всех девочек Аня самая красивая.",
  "I have ___ free time this year than last year.": "В этом году у меня меньше свободного времени, чем в прошлом.",
  "The Nile is the ___ river in Africa.": "Нил — самая длинная река в Африке.",
  "Can you speak ___? I can't hear you.": "Можешь говорить погромче? Я тебя не слышу.",
  "This hotel is ___ than the one we stayed in last year.": "Этот отель удобнее того, где мы жили в прошлом году.",
  // Местоимения
  "This is not my pen. It's ___.": "Это не моя ручка. Это её.",
  "Tom hurt ___ when he fell.": "Том ушибся, когда упал.",
  "Can you help ___ with this box?": "Можешь помочь мне с этой коробкой?",
  "The dog is playing with ___ ball.": "Собака играет со своим мячом.",
  "We did it ___. Nobody helped us.": "Мы сделали это сами. Нам никто не помогал.",
  "Is this car ___? — Yes, it's our car.": "Это наша машина? — Да, наша.",
  "I called my friends and invited ___ to the party.": "Я позвонила друзьям и пригласила их на вечеринку.",
  "She looked at ___ in the mirror.": "Она посмотрела на себя в зеркало.",
  "My parents love ___ new house.": "Мои родители любят свой новый дом.",
  "Please, tell ___ about your holiday.": "Расскажи нам, пожалуйста, о своих каникулах.",
  "This room is mine and that one is ___.": "Эта комната моя, а та — твоя.",
  "The children made the cake ___.": "Дети испекли торт сами.",
  "Anna and ___ went to the cinema.": "Мы с Аней ходили в кино.",
  "Is that ___ bike?": "Это твой велосипед?",
  "Help ___ to some cake, Kate!": "Угощайся тортом, Катя!",
  "I met Mike and gave ___ the book.": "Я встретила Майка и отдала ему книгу.",
  // Мн. число и числа
  "There are three ___ in our family.": "В нашей семье трое детей.",
  "Many ___ came to the meeting.": "На встречу пришло много женщин.",
  "Brush your ___ twice a day.": "Чисти зубы два раза в день.",
  "My ___ hurt after the long walk.": "После долгой прогулки у меня болят ноги.",
  "In autumn the ___ turn yellow.": "Осенью листья желтеют.",
  "The cat caught two ___.": "Кот поймал двух мышей.",
  "There were a lot of ___ in the street.": "На улице было много людей.",
  "Put the ___ on the table, please.": "Положи, пожалуйста, ножи на стол.",
  "The farmer has fifty ___.": "У фермера пятьдесят овец.",
  "December is the ___ month of the year.": "Декабрь — двенадцатый месяц года.",
  "My flat is on the ___ floor.": "Моя квартира на третьем этаже.",
  "It was her ___ birthday.": "Это был её девятый день рождения.",
  "We live in the ___ century.": "Мы живём в двадцать первом веке.",
  "He came ___ in the race.": "Он пришёл вторым в забеге.",
  "May is the ___ month of the year.": "Май — пятый месяц года.",
  "Some ___ were playing in the yard.": "Во дворе играли мальчики.",
  "We visited three ___ in Italy.": "Мы побывали в трёх городах Италии.",
  "There are many ___ in the old house.": "В старом доме много полок.",
  // Существительные
  "My uncle is a famous ___. He paints landscapes.": "Мой дядя — известный художник. Он рисует пейзажи.",
  "Thank you for your ___ to the party.": "Спасибо за приглашение на вечеринку.",
  "The ___ of the new park took two years.": "Строительство нового парка заняло два года.",
  "She is a good ___. Her lessons are interesting.": "Она хорошая учительница. У неё интересные уроки.",
  "Good ___ is very important for children.": "Хорошее образование очень важно для детей.",
  "His ___ to become a doctor surprised everyone.": "Его решение стать врачом всех удивило.",
  "We were amazed by the ___ of the city.": "Нас поразила красота города.",
  "The ___ of the actors was wonderful.": "Игра актёров была чудесной.",
  "There is a big ___ between these two pictures.": "Между этими двумя картинками большая разница.",
  "Money can't buy ___.": "Счастье за деньги не купишь.",
  "The museum had many ___ today.": "Сегодня в музее было много посетителей.",
  "The ___ of the internet changed our lives.": "Изобретение интернета изменило нашу жизнь.",
  "Thank you for your ___!": "Спасибо за твою доброту!",
  "The ___ of the town is very fast.": "Город развивается очень быстро.",
  "He is a famous ___ who studies stars.": "Он известный учёный, который изучает звёзды.",
  "She has a lot of ___ in playing the guitar.": "У неё большой опыт игры на гитаре.",
  "Every ___ must wear a uniform.": "Каждый работник должен носить форму.",
  "There was a ___ between the two teams.": "Между двумя командами было соревнование.",
  "The ___ of the book was very exciting.": "Начало книги было очень захватывающим.",
  "Our ___ is very strong.": "Наша дружба очень крепкая.",
  "She gave me some useful ___.": "Она дала мне полезную информацию.",
  "The ___ of the hotel welcomed us.": "Нас встретил управляющий отеля.",
  // Прилагательные
  "It was a ___ day, so we went to the beach.": "Был солнечный день, и мы пошли на пляж.",
  "Climbing mountains can be ___.": "Лазать по горам бывает опасно.",
  "He is a very ___ singer. Everyone knows him.": "Он очень известный певец. Его все знают.",
  "The bed in the hotel was very ___.": "Кровать в отеле была очень удобной.",
  "Thank you, you have been very ___.": "Спасибо, вы очень помогли.",
  "Pancakes are a ___ Russian dish.": "Блины — традиционное русское блюдо.",
  "She is a ___ girl. She draws and writes poems.": "Она творческая девочка. Рисует и пишет стихи.",
  "We had a very ___ holiday.": "У нас был очень приятный отпуск.",
  "Mendeleev made an important ___ discovery.": "Менделеев сделал важное научное открытие.",
  "The museum has a ___ collection of paintings.": "В музее чудесная коллекция картин.",
  "Don't be so ___! You broke the cup.": "Не будь такой неосторожной! Ты разбила чашку.",
  "Our ___ team won the championship.": "Наша национальная сборная выиграла чемпионат.",
  "It was a ___ day, so we took umbrellas.": "День был дождливый, поэтому мы взяли зонты.",
  "The film was ___. We laughed a lot.": "Фильм был смешной. Мы много смеялись.",
  "She is a very ___ person. Everybody likes her.": "Она очень дружелюбный человек. Её все любят.",
  "This dress is very ___.": "Это платье очень привлекательное.",
  "The Kremlin is a ___ place.": "Кремль — историческое место.",
  "She felt ___ after the long walk.": "После долгой прогулки она проголодалась.",
  "The news was very ___ for us.": "Новость была для нас очень неожиданной.",
  "I was ___ to see him there.": "Я удивилась, увидев его там.",
  "Swimming is good for your ___.": "Плавание полезно для здоровья.",
  "It was a ___ experience.": "Это был полезный опыт.",
  // Наречия
  "She sings very ___.": "Она очень красиво поёт.",
  "Please drive ___.": "Пожалуйста, веди машину осторожно.",
  "The children were playing ___ in the garden.": "Дети весело играли в саду.",
  "He solved the problem ___.": "Он легко решил задачу.",
  "She speaks English very ___.": "Она очень хорошо говорит по-английски.",
  "___, it started to rain.": "Вдруг пошёл дождь.",
  "He ran ___ to catch the bus.": "Он быстро побежал, чтобы успеть на автобус.",
  "We ___ go to the park on Sundays.": "По воскресеньям мы обычно ходим в парк.",
  "She answered all the questions ___.": "Она правильно ответила на все вопросы.",
  "___, we missed the train.": "К сожалению, мы опоздали на поезд.",
  "The cat was sleeping ___ on the sofa.": "Кот мирно спал на диване.",
  "He ___ agreed to help us.": "Он любезно согласился нам помочь.",
  "You can ___ find this book in any shop.": "Эту книгу легко найти в любом магазине.",
  "They sat ___ in the armchairs.": "Они удобно сидели в креслах.",
  "The plane landed ___.": "Самолёт благополучно приземлился.",
  "The bus was ___ late.": "Автобус ужасно опоздал.",
  // Не-
  "It is ___ to learn English in one week.": "Невозможно выучить английский за неделю.",
  "I was ___ because I lost my phone.": "Мне было грустно, потому что я потеряла телефон.",
  "It is ___ to talk with your mouth full.": "Невежливо разговаривать с набитым ртом.",
  "Your answer is ___. Try again.": "Твой ответ неправильный. Попробуй ещё раз.",
  "I ___ this film. It was boring.": "Мне не понравился этот фильм. Он был скучный.",
  "\"Go\", \"see\", \"take\" are ___ verbs.": "«Go», «see», «take» — неправильные глаголы.",
  "Unfortunately, he was ___ to come.": "К сожалению, он не смог прийти.",
  "It is ___ to cross the road on a red light.": "Переходить дорогу на красный свет — незаконно.",
  "Don't be so ___! Wait a minute.": "Не будь таким нетерпеливым! Подожди минутку.",
  "The weather was ___ warm for December.": "Для декабря погода была необычно тёплой.",
  "My sister and I often ___ about music.": "Мы с сестрой часто не соглашаемся насчёт музыки.",
  "She is very ___. She never helps anyone.": "Она очень недружелюбная. Никогда никому не помогает.",
  "He left the door open. That was very ___ of him.": "Он оставил дверь открытой. Это было очень безответственно с его стороны.",
  "The test was ___. Nobody passed it.": "Тест был нечестный. Никто его не сдал.",
  "It was a very ___ story. Nobody believed it.": "Это была совершенно невероятная история. Никто в неё не поверил.",
  "He is ___. He told me a lie.": "Он нечестный. Он мне соврал.",
};
