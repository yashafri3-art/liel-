/* Песни сгруппированы по исполнителям и плейлистам. Проверенные видео добавляйте
   в YOUTUBE_VIDEO_IDS только после проверки совпадения песни и правообладателя. */
const PLAYLISTS = [
  {
    id: "near",
    title: "Мася, я рядом",
    mood: "Тихий вечер",
    cover: "assets/images/playlist-near.svg",
    accent: "#d99aaf",
    description: "Когда тебе грустно, когда ты скучаешь по мне или просто хочешь побыть наедине со своими мыслями. Включай музыку и помни, что ты не одна.",
    groups: [
      { artist: "Баста", titles: ["Сансара", "Где ты теперь и с кем", "Любовь без памяти", "Выпускной (Медлячок)", "Буду всегда с тобой", "Одна любовь", "Вселенная (feat. Тати)", "Сияй (с Ramil')", "Кинолента"] },
      { artist: "Miyagi & Эндшпиль", titles: ["I Got Love", "Minor", "Самая", "Половина моя", "Люби меня", "In Love", "Фея", "Дама"] },
      { artist: "Miyagi & Andy Panda", titles: ["Kosandra", "Silhouette"] },
      { artist: "HammAli & Navai", titles: ["Птичка", "Где ты теперь и с кем"] },
      { artist: "Жанулька", titles: ["Портреты (Acoustic)", "Не я", "Заклятый враг", "Наколки", "Портреты", "Бабочки", "Я любя", "Сильно скучаю"] },
      { artist: "ICEGERGERT", titles: ["Наследство"] }
    ]
  },
  {
    id: "cat",
    title: "Моя котичка",
    mood: "Ночной город",
    cover: "assets/images/playlist-cat.svg",
    accent: "#ff5c78",
    description: "Когда ты весёлая, уверенная в себе, собираешься гулять или просто хочешь включить что-нибудь качающее.",
    groups: [
      { artist: "ICEGERGERT", titles: ["Наследство", "Casino", "Гектор", "Amsterdam", "Евродэнс.ru", "БАНК (feat. Zivert)", "Мать императрица", "Полукровка", "G-Woman", "Top Dawg", "Rich Me"] },
      { artist: "YUNG TRAPPA", titles: ["FAMILY", "Одна ночь", "DoggyStyle"] },
      { artist: "Miyagi & Andy Panda", titles: ["Yamakasi", "Captain"] },
      { artist: "Miyagi & Эндшпиль", titles: ["TAMADA", "I Got Love", "Бейба судьба", "Фея"] },
      { artist: "Жанулька", titles: ["Кискис", "Ты похож на кота", "Ток", "Лазить по стенам"] },
      { artist: "ICEGERGERT & kizaru", titles: ["Fake ID"] },
      { artist: "Баста", titles: ["Если я буду танцевать"] }
    ]
  },
  {
    id: "together",
    title: "Я мысленно с тобой",
    mood: "Ночное небо",
    cover: "assets/images/playlist-together.svg",
    accent: "#aa9cff",
    description: "Когда ты одна, скучаешь по мне, вспоминаешь наши моменты или просто хочешь лежать ночью и думать о нас.",
    groups: [
      { artist: "Miyagi & Эндшпиль", titles: ["Половина моя", "Люби меня", "In Love", "Самая", "Minor", "Фея", "Дама", "I Got Love"] },
      { artist: "Miyagi & Andy Panda", titles: ["Kosandra", "Silhouette", "Yamakasi", "Captain"] },
      { artist: "Баста", titles: ["Буду всегда с тобой", "Одна любовь", "Вселенная (feat. Тати)", "Сияй (с Ramil')", "Где ты теперь и с кем", "Любовь без памяти", "Сансара"] },
      { artist: "HammAli & Navai", titles: ["Птичка", "Где ты теперь и с кем"] },
      { artist: "Жанулька", titles: ["Портреты", "Бабочки", "Я любя", "Сильно скучаю", "Не я", "Портреты (Acoustic)"] },
      { artist: "ICEGERGERT", titles: ["Наследство"] }
    ]
  }
];

/* Не добавляйте сюда ссылку, пока не удостоверились, что это нужная запись. */
const YOUTUBE_VIDEO_IDS = {};
const CHECK_STATUS = {
  verified: "Проверено",
  pending: "Нужно проверить"
};

/* Фотографии без подписей и историй, чтобы не выдумывать контекст. */
const MEMORIES = [
  "photo_2026-10-12_06-29-03.jpg", "photo_2026-10-12_06-29-07.jpg",
  "photo_2026-10-12_06-29-11.jpg", "photo_2026-10-12_06-29-14.jpg",
  "photo_2026-10-12_06-29-18.jpg", "photo_2026-10-12_06-29-22.jpg",
  "photo_2026-10-12_06-29-26.jpg", "photo_2026-10-12_06-29-37.jpg",
  "photo_2026-10-12_06-29-41.jpg", "photo_2026-10-12_06-29-45.jpg",
  "photo_2026-10-12_06-29-49.jpg", "photo_2026-10-12_06-29-53.jpg",
  "photo_2026-10-12_06-29-58.jpg", "photo_2026-10-12_06-30-01.jpg",
  "photo_2026-10-12_06-30-04.jpg", "photo_2026-10-12_06-30-08.jpg",
  "photo_2026-10-12_06-30-12.jpg", "photo_2026-10-12_06-30-16.jpg",
  "photo_2026-10-12_06-30-19.jpg", "photo_2026-10-12_06-30-23.jpg",
  "photo_2026-10-12_06-30-28.jpg"
].map((file, index) => ({ id: `memory-${index + 1}`, src: `assets/photos/${file}`, alt: "Фотография из нашего альбома" }));

/* Видео — именно присланные файлы. Здесь удобно менять коды, тексты и названия. */
const VIDEO_SURPRISES = [
  {
    id: "funny",
    title: "Когда тебе не хватает моего юмора 😂",
    code: "YASHA123",
    src: "assets/videos/when-you-miss-my-jokes.mp4",
    before: "Лиэль, не хватает моих приколов? 😂 Тогда у меня для тебя кое-что есть",
    after: "Ну что, получилось тебя рассмешить? ❤️",
    description: "Смешное видео для моментов, когда тебе грустно или ты скучаешь по мне."
  },
  {
    id: "favorite",
    title: "Наш любимый момент ❤️",
    code: "OURMOMENT",
    src: "assets/videos/our-favorite-moment.mp4",
    before: "Я знаю, как тебе нравится это видео. Поэтому теперь оно будет здесь, чтобы ты могла пересматривать его, когда захочешь",
    after: "Некоторые моменты хочется пересматривать снова и снова. Этот — один из них. ❤️",
    description: "Твоё любимое видео со мной."
  },
  {
    id: "memory",
    title: "Ещё один наш момент",
    code: "SPECIAL03",
    src: "assets/videos/another-our-moment.mp4",
    before: "У меня для тебя есть ещё кое-что ❤️",
    after: "",
    description: "Личный видеосюрприз."
  }
];

const MEMORY_CODES = {
  YASHA123: { video: "funny" },
  OURMOMENT: { video: "favorite" },
  SPECIAL03: { video: "memory" }
};

const LOVE_NOTES = [
  {
    id: "near",
    code: "PISMO",
    title: "Записка на тихий вечер",
    text: "Лиэль, если день выдался непростым — пусть эта маленькая записка напомнит: тебе не нужно со всем справляться в одиночку. Я рядом, даже если сейчас не могу обнять."
  },
  {
    id: "hug",
    code: "OBNIMAU",
    title: "Обнимашка на расстоянии",
    text: "Представь, что я крепко-крепко тебя обнял. Подержи это объятие столько, сколько нужно. Ты очень важна для меня."
  },
  {
    id: "smile",
    code: "ULYBNIS",
    title: "Маленькое напоминание",
    text: "Я люблю твою улыбку, твой характер и то, как рядом с тобой обычный день становится особенным. Просто захотел, чтобы ты это знала."
  },
  {
    id: "morning",
    code: "DOBROEUTRO",
    title: "Письмо для доброго утра",
    text: "Доброе утро, моя хорошая. Пусть сегодня будет хотя бы один повод улыбнуться, вкусный момент и мысль о том, что вечером можно выдохнуть. Я уже болею за тебя."
  },
  {
    id: "miss",
    code: "SKUCHAYU",
    title: "Когда скучаю",
    text: "Если бы сейчас можно было телепортироваться, я бы уже был рядом. Пока телепорта нет — отправляю тебе это письмо и самое тёплое виртуальное объятие."
  },
  {
    id: "proud",
    code: "GORDUS",
    title: "Я тобой горжусь",
    text: "Напоминание на случай, если ты сама этого не замечаешь: ты стараешься, растёшь и проходишь через многое. Я горжусь тобой не только за большие победы, но и за каждый маленький шаг."
  },
  {
    id: "safe",
    code: "TYSMOZHESH",
    title: "Тебе можно выдохнуть",
    text: "Не обязательно сегодня всё успеть и всем всё доказать. Можно остановиться, отдохнуть и попросить поддержки. Ты достойна заботы просто потому, что ты — это ты."
  },
  {
    id: "thankyou",
    code: "SPASIBOTE",
    title: "Спасибо, что ты есть",
    text: "Спасибо за твоё тепло, за наши разговоры и за маленькие обычные моменты, которые рядом с тобой становятся важными. Я очень рад, что ты есть в моей жизни."
  }
];

const LOVE_CODES = Object.fromEntries(LOVE_NOTES.map(note => [note.code, { note: note.id }]));
const BONUS_CODES = {
  PODSKAZKA: { route: "hints" },
  IGRA: { route: "game" },
  KAKDEN: { route: "day" },
  OTNOSHENIYA: { route: "questions" },
  KUPONY: { route: "coupons" },
  KOMPLIMENT: { route: "compliment" },
  SVIDANIE: { route: "dateIdea" },
  OBNIMI: { route: "hug" },
  DATEPOLL: { route: "datePoll" },
  SVIDANIEOPROS: { route: "datePoll" },
  GDEGULYAT: { route: "datePoll" },
  HUGME: { route: "hug" },
  SADLOVE: { route: "sad" },
  MAKEHERLAUGH: { video: "funny" },
  MIDNIGHT: { route: "midnight" },
  OURSONG: { playlist: "together" },
  SURPRISE: { route: "surprise" },
  WHYILOVEYOU: { route: "reasons" },
  PLAYWITHME: { route: "game" },
  FIRSTDAY: { route: "first-day" },
  ILOVEYOU: { route: "i-love-you" },
  JUSTBECAUSE: { route: "compliment" },
  OPENWHEN: { route: "open-when" },
  MEMORIES: { route: "memories" }
};

const OPEN_WHEN_NOTES = [
  { id: "sad", title: "Когда тебе грустно", text: "Лиэль, тебе не нужно прямо сейчас становиться веселее или объяснять свои чувства. Можно просто побыть такой, какая ты есть. Если захочется — я рядом, чтобы выслушать или поддержать так, как тебе будет комфортно." },
  { id: "miss", title: "Когда ты скучаешь по мне", text: "Я тоже думаю о тебе. Пусть эта записка будет маленьким напоминанием о моей нежности к тебе — без спешки и без обязанности отвечать. Просто оставь себе это тепло." },
  { id: "laugh", title: "Когда тебе хочется посмеяться", text: "Тут есть моё видео с шутками — возможно, одна из них всё-таки попадёт в цель 😂 А если сегодня не до смеха, ничего страшного: можно закрыть страницу и вернуться позже." },
  { id: "hard-day", title: "Когда у тебя был тяжёлый день", text: "Ты можешь отложить всё, что не требует срочного внимания, и немного выдохнуть. Я горжусь тобой не за продуктивность — мне важна ты сама." },
  { id: "sleep", title: "Когда ты не можешь уснуть", text: "Устройся поудобнее, сделай медленный вдох и длинный выдох. Не обязательно решать всё этой ночью. Пусть мысли немного побудут в стороне, а ты отдохни." },
  { id: "care", title: "Когда хочется почувствовать мою заботу", text: "Я забочусь о тебе и уважаю твои чувства. Если тебе хочется внимания, разговора или тишины — ты можешь выбрать то, что подходит именно сейчас." },
  { id: "warmth", title: "Когда тебе нужно немного тепла", text: "Отправляю тебе бережное виртуальное объятие. Возьми столько тепла, сколько хочется, и помни: тебе не нужно ничего заслуживать, чтобы быть достойной заботы." }
];

const LOVE_REASONS = [
  "Мне дорого, что рядом с тобой можно быть собой.",
  "Я ценю твои мысли и то, как ты смотришь на мир.",
  "Мне нравится делить с тобой и большие планы, и обычные дни.",
  "Твоя улыбка часто делает мой день светлее.",
  "Я уважаю твои границы, желания и право на любой настрой.",
  "Потому что ты — это ты, и я очень рад, что ты есть в моей жизни."
];

const FIRST_DAY_STORY = "Здесь я оставил место для нашей истории. Добавь сюда ваш настоящий рассказ, дату или воспоминание — не хочу выдумывать за нас то, чего ты мне ещё не рассказывал.";

const DATE_POLL_QUESTIONS = [
  {
    id: "place",
    title: "Где тебе хотелось бы побывать?",
    options: [
      { id: "nature", title: "На природе", detail: "Зелень, свежий воздух и прогулка без спешки.", image: "nature.jpg", source: "photo-1470770841072-f978cf4d019e" },
      { id: "restaurant", title: "В уютном ресторане", detail: "Красивый столик, вкусная еда и разговоры.", image: "restaurant.jpg", source: "photo-1517248135467-4c7edcad34c4" },
      { id: "beach", title: "У моря", detail: "Берег, шум волн и закат вместе.", image: "beach.jpg", source: "photo-1507525428034-b723cf961d3e" },
      { id: "city", title: "В вечернем городе", detail: "Огни, красивые улочки и спонтанный маршрут.", image: "city-lights.jpg", source: "photo-1519501025264-65ba15a82390" }
    ]
  },
  {
    id: "activity",
    title: "Чем займёмся на свидании?",
    options: [
      { id: "picnic", title: "Устроим пикник", detail: "Плед, любимые вкусности и поболтать обо всём.", image: "picnic.jpg", source: "photo-1529156069898-49953e39b3ac" },
      { id: "brunch", title: "Сходим на бранч", detail: "Кофе, что-нибудь вкусное и уютное кафе.", image: "brunch.jpg", source: "photo-1504754524776-8f4f37790ca0" },
      { id: "cook", title: "Приготовим ужин вместе", detail: "Выберем рецепт и устроим домашний вечер.", image: "dinner.jpg", source: "photo-1464366400600-7168b8af9bc3" },
      { id: "event", title: "Сходим на мероприятие", detail: "Концерт, фестиваль или что-нибудь интересное.", image: "live-event.jpg", source: "photo-1517457373958-b7bdd4587205" }
    ]
  },
  {
    id: "mood",
    title: "Какое настроение свидания тебе ближе?",
    options: [
      { id: "sunset", title: "Романтичный закат", detail: "Погулять у воды и дождаться вечернего неба.", image: "sea-sunset.jpg", source: "photo-1518837695005-2083093ee35b" },
      { id: "celebration", title: "Нарядный вечер", detail: "Особенный повод, красивые огни и праздничное настроение.", image: "celebration.jpg", source: "photo-1511795409834-ef04bbd61622" },
      { id: "walk", title: "Долгая прогулка вдвоём", detail: "Исследовать новое место и никуда не торопиться.", image: "date-walk.jpg", source: "photo-1527529482837-4698179dc6ce" },
      { id: "cozy", title: "Тихий уютный вечер", detail: "Побыть рядом, укутаться и просто отдохнуть.", image: "cozy-evening.jpg", source: "photo-1516589178581-6cd7833ae3b2" }
    ]
  }
];

const COMPLIMENTS = [
  "С тобой даже обычный день становится чем-то хорошим.",
  "Мне нравится, как ты умеешь быть собой.",
  "Ты заслуживаешь нежности не только по особым поводам.",
  "В тебе есть что-то, от чего на душе становится теплее.",
  "Я очень ценю, что могу делить с тобой свои дни.",
  "Ты прекрасна не потому, что стараешься понравиться, а просто потому, что ты — это ты.",
  "Даже на расстоянии ты умеешь сделать мой день лучше.",
  "Я замечаю твои старания, даже если ты сама их обесцениваешь."
];

const DATE_IDEAS = [
  "Устроить домашний кино-вечер и выбрать фильм друг для друга.",
  "Прогуляться без спешки и по пути купить что-нибудь вкусное.",
  "Приготовить вместе новое блюдо — даже если получится смешно.",
  "Сделать маленький пикник: плед, любимые снеки и разговоры.",
  "Устроить вечер настольной игры или игры на телефоне.",
  "Сходить в уютное кафе и заказать друг другу напиток-сюрприз.",
  "Включить наши песни и рассказать, с каким моментом они ассоциируются.",
  "Выбрать красивое место для прогулки и сделать несколько общих фото."
];

const EXTRA_CODES = [
  { code: "DOBROEUTRO", description: "Записка на начало дня." },
  { code: "SKUCHAYU", description: "Послание, когда скучаешь." },
  { code: "GORDUS", description: "Открой, когда нужна поддержка." },
  { code: "TYSMOZHESH", description: "Напоминание, что можно выдохнуть." },
  { code: "SPASIBOTE", description: "Маленькое «спасибо» для тебя." },
  { code: "KOMPLIMENT", description: "Случайный комплимент." },
  { code: "SVIDANIE", description: "Идея для нашего свидания." },
  { code: "OBNIMI", description: "Виртуальное объятие." },
  { code: "DATEPOLL", description: "Выбор свидания по фотографиям." },
  { code: "SVIDANIEOPROS", description: "Ещё один код к опросу о свидании." },
  { code: "GDEGULYAT", description: "Где провести время вместе?" },
  { code: "HUGME", description: "Нежное послание и виртуальное объятие." },
  { code: "SADLOVE", description: "Поддержка и спокойная музыка." },
  { code: "MAKEHERLAUGH", description: "Открой смешное личное видео." },
  { code: "MIDNIGHT", description: "Ночная музыка и уютный вечер." },
  { code: "OURSONG", description: "Плейлист о наших чувствах." },
  { code: "SURPRISE", description: "Секретная тёплая открытка." },
  { code: "WHYILOVEYOU", description: "Почему ты мне дорога." },
  { code: "PLAYWITHME", description: "Небольшая игра-сюрприз." },
  { code: "FIRSTDAY", description: "Место для настоящей истории о нас." },
  { code: "ILOVEYOU", description: "Личное письмо для Лиэль." },
  { code: "JUSTBECAUSE", description: "Комплимент просто так." },
  { code: "OPENWHEN", description: "Письма для разных настроений." },
  { code: "MEMORIES", description: "Открыть альбом наших воспоминаний." }
];

const COUPONS = [
  { id: "video-call", title: "Видеозвонок 💗", description: "Хочу увидеть твою улыбку, даже если мы далеко." },
  { id: "hug", title: "Обнимашки 🧸", description: "Самые тёплые объятия — только если тебе самой этого хочется." },
  { id: "kiss", title: "Нежный поцелуй 💋", description: "Один нежный поцелуй, если ты тоже этого хочешь." },
  { id: "voice-call", title: "Обычный звонок ☎️", description: "Поболтаем обо всём и ни о чём, когда тебе удобно." },
  { id: "date", title: "Маленький подарок 🎁", description: "Сюрприз специально для тебя — вместе выберем, что порадует." },
  { id: "tea", title: "Что-нибудь сладкое 🍓", description: "Выбирай вкусняшку — устроим сладкий момент." },
  { id: "evening", title: "Вечер со мной 🌙", description: "Ты выбираешь настроение: фильм, прогулка или уют дома." }
];

const HEART_GAME_TARGETS = [1, 3, 4, 6, 8];

const RELATIONSHIP_QUESTIONS = [
  {
    id: "together",
    prompt: "Что тебе больше всего нравится в нашем времени вдвоём?",
    options: ["Разговоры обо всём", "Когда смеёмся над глупостями", "Тихо быть рядом", "Каждый раз по-разному"]
  },
  {
    id: "care",
    prompt: "Как мне лучше поддержать тебя после тяжёлого дня?",
    options: ["Выслушать", "Обнять", "Отвлечь чем-нибудь весёлым", "Спросить, что нужно именно сейчас"]
  },
  {
    id: "next",
    prompt: "Какой маленький момент нам стоит устроить вместе?",
    options: ["Прогулка", "Домашний вечер", "Вкусное свидание", "Твой вариант"]
  }
];

const HINTS = [
  { id: "music", title: "Музыкальный след", text: "Для вечера, когда хочется чувствовать, что я рядом: MASYA или RYADOM." },
  { id: "smile", title: "Записки", text: `Все ${LOVE_NOTES.length} письма: ${LOVE_NOTES.map(note => note.code).join(", ")}.` },
  { id: "surprise", title: "Сюрпризы и идеи", text: `Видео: YASHA123, OURMOMENT, SPECIAL03. Дополнительные коды: ${EXTRA_CODES.slice(5).map(item => item.code).join(", ")}.` },
  { id: "play", title: "Игра и вопросы", text: "Найди сердечки: IGRA. Ответь на вопросы: OTNOSHENIYA. Запиши свой день: KAKDEN. Купоны: KUPONY. А ещё есть письма по настроению и опрос о свидании." },
  { id: "date", title: "Свидание мечты", text: "Хочешь выбрать место, занятие и настроение нашего свидания? Введи DATEPOLL или SVIDANIEOPROS." }
];

const STORE_KEY = "liel-music-gift-v1";
const app = document.querySelector("#app");
const header = document.querySelector(".site-header");
const favoriteCount = document.querySelector("[data-favorite-count]");
const photoDialog = document.querySelector("#photo-dialog");
const photoDialogImage = document.querySelector("#photo-dialog-image");
const photoDialogCaption = document.querySelector("#photo-dialog-caption");
let toastTimer;
let store = {
  favorites: [],
  lastPlaylist: "near",
  foundHearts: [],
  usedCoupons: [],
  savedDateIdeas: [],
  datePollAnswers: {},
  revealedHints: [],
  relationshipAnswers: {},
  dayEntries: []
};
let currentPlaylistId = "near";
let selectedTrackId = null;
let sortMode = "playlist";
let currentPhotoIndex = 0;
let photoTouchStart = null;
let currentCompliment = 0;
let currentDateIdea = 0;
let hugStep = 0;

const trackMap = new Map();
PLAYLISTS.forEach(playlist => {
  playlist.trackIds = [];
  playlist.groups.forEach(group => group.titles.forEach(title => {
    const key = `${group.artist.toLocaleLowerCase("ru-RU")}::${title.toLocaleLowerCase("ru-RU")}`;
    let track = trackMap.get(key);
    if (!track) {
      track = {
        id: `track-${trackMap.size + 1}`,
        artist: group.artist,
        title,
        youtubeId: YOUTUBE_VIDEO_IDS[key] || "",
        checkStatus: YOUTUBE_VIDEO_IDS[key] ? CHECK_STATUS.verified : CHECK_STATUS.pending,
        playlistIds: []
      };
      trackMap.set(key, track);
    }
    if (!track.playlistIds.includes(playlist.id)) track.playlistIds.push(playlist.id);
    playlist.trackIds.push(track.id);
  }));
});
const TRACKS = [...trackMap.values()];
const TRACK_BY_ID = new Map(TRACKS.map(track => [track.id, track]));

function loadStore() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORE_KEY) || "null");
    if (!parsed || typeof parsed !== "object") return;
    if (Array.isArray(parsed.favorites)) store.favorites = parsed.favorites.filter(id => TRACK_BY_ID.has(id));
    if (PLAYLISTS.some(playlist => playlist.id === parsed.lastPlaylist)) store.lastPlaylist = parsed.lastPlaylist;
    if (Array.isArray(parsed.foundHearts)) store.foundHearts = [...new Set(parsed.foundHearts.filter(id => HEART_GAME_TARGETS.includes(id)))];
    if (Array.isArray(parsed.usedCoupons)) store.usedCoupons = [...new Set(parsed.usedCoupons.filter(id => COUPONS.some(coupon => coupon.id === id)))];
    if (Array.isArray(parsed.savedDateIdeas)) store.savedDateIdeas = [...new Set(parsed.savedDateIdeas.filter(idea => DATE_IDEAS.includes(idea)))];
    if (parsed.datePollAnswers && typeof parsed.datePollAnswers === "object" && !Array.isArray(parsed.datePollAnswers)) {
      store.datePollAnswers = Object.fromEntries(
        DATE_POLL_QUESTIONS
          .filter(question => question.options.some(option => option.id === parsed.datePollAnswers[question.id]))
          .map(question => [question.id, parsed.datePollAnswers[question.id]])
      );
    }
    if (Array.isArray(parsed.revealedHints)) store.revealedHints = [...new Set(parsed.revealedHints.filter(id => HINTS.some(hint => hint.id === id)))];
    if (parsed.relationshipAnswers && typeof parsed.relationshipAnswers === "object" && !Array.isArray(parsed.relationshipAnswers)) {
      store.relationshipAnswers = Object.fromEntries(
        RELATIONSHIP_QUESTIONS
          .filter(question => typeof parsed.relationshipAnswers[question.id] === "string" && question.options.includes(parsed.relationshipAnswers[question.id]))
          .map(question => [question.id, parsed.relationshipAnswers[question.id]])
      );
    }
    if (Array.isArray(parsed.dayEntries)) {
      store.dayEntries = parsed.dayEntries
        .filter(entry => entry && typeof entry.date === "string" && typeof entry.mood === "string" && typeof entry.note === "string")
        .slice(-30);
    }
  } catch (error) {
    console.warn("Не удалось прочитать музыкальные настройки браузера:", error);
    showToast("Настройки браузера недоступны — сайт всё равно работает.");
  }
}

function saveStore() {
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify(store));
  } catch (error) {
    console.warn("Не удалось сохранить музыкальные настройки:", error);
    showToast("Браузер не разрешил сохранить изменения.");
  }
}

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined && text !== null) node.textContent = text;
  return node;
}

function makeButton(text, action, className = "secondary-button", data = {}) {
  const node = el("button", className, text);
  node.type = "button";
  node.dataset.action = action;
  Object.entries(data).forEach(([key, value]) => { node.dataset[key] = value; });
  return node;
}

function append(parent, ...children) {
  children.filter(Boolean).forEach(child => parent.append(child));
  return parent;
}

function getPlaylist(id) {
  return PLAYLISTS.find(playlist => playlist.id === id);
}

function getPlaylistTracks(playlist) {
  return playlist.trackIds.map(id => TRACK_BY_ID.get(id)).filter(Boolean);
}

function setRoute(route, options = {}) {
  const { push = true, replace = false } = options;
  if (route.startsWith("playlist:")) {
    const id = route.slice("playlist:".length);
    if (!getPlaylist(id)) route = "home";
    else {
      currentPlaylistId = id;
      store.lastPlaylist = id;
      saveStore();
    }
  }
  const fragment = route === "home" ? "#home"
    : route.startsWith("playlist:") ? `#playlist-${route.slice(9)}`
      : route.startsWith("video:") ? `#video-${route.slice(6)}`
        : route.startsWith("note:") ? `#note-${route.slice(5)}`
        : route.startsWith("openwhen:") ? `#openwhen-${route.slice(9)}`
          : `#${route}`;
  if (push) history[replace ? "replaceState" : "pushState"]({ route }, "", fragment);
  renderRoute(route);
  window.scrollTo({ top: 0, behavior: "smooth" });
  app.focus({ preventScroll: true });
}

function readRoute() {
  const hash = location.hash.slice(1);
  if (hash.startsWith("playlist-") && getPlaylist(hash.slice("playlist-".length))) return `playlist:${hash.slice("playlist-".length)}`;
  if (hash.startsWith("video-") && VIDEO_SURPRISES.some(video => video.id === hash.slice(6))) return `video:${hash.slice(6)}`;
  if (hash.startsWith("note-") && LOVE_NOTES.some(note => note.id === hash.slice(5))) return `note:${hash.slice(5)}`;
  if (hash.startsWith("openwhen-") && OPEN_WHEN_NOTES.some(note => note.id === hash.slice(9))) return `openwhen:${hash.slice(9)}`;
  if (["favorites", "memories", "codes", "videos", "heart", "hints", "game", "questions", "day", "coupons", "compliment", "dateIdea", "hug", "datePoll", "open-when", "sad", "midnight", "reasons", "surprise", "first-day", "i-love-you"].includes(hash)) return hash;
  return "home";
}

function showToast(message) {
  let node = document.querySelector(".toast");
  if (!node) {
    node = el("div", "toast");
    node.setAttribute("role", "status");
    node.setAttribute("aria-live", "polite");
    document.body.append(node);
  }
  node.textContent = message;
  node.classList.add("is-visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => node.classList.remove("is-visible"), 2600);
}

function celebrateCode() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  document.querySelector(".code-celebration")?.remove();
  const burst = el("div", "code-celebration");
  burst.setAttribute("aria-hidden", "true");
  ["♡", "♥", "✧", "♡", "♥", "✧"].forEach((symbol, index) => {
    const piece = el("span", "", symbol);
    piece.style.setProperty("--piece-x", `${12 + index * 15}%`);
    piece.style.setProperty("--piece-delay", `${index * 45}ms`);
    burst.append(piece);
  });
  document.body.append(burst);
  window.setTimeout(() => burst.remove(), 1150);
}

function updateFavoriteCount() {
  favoriteCount.textContent = String(store.favorites.length);
  const route = readRoute();
  const activeRoute = route.startsWith("playlist:") || route === "home" ? "home"
    : route.startsWith("video:") || route === "videos" ? "codes"
      : route === "memories" || route === "codes" || route === "favorites" || route === "coupons" ? route
        : "heart";
  document.querySelectorAll(".nav-button").forEach(button => {
    button.classList.toggle("is-active", (button.dataset.route || "home") === activeRoute);
  });
}

function favoriteCountLabel(count) {
  const form = count % 10 === 1 && count % 100 !== 11
    ? ["песня", "сохранена"]
    : count % 10 >= 2 && count % 10 <= 4 && (count % 100 < 12 || count % 100 > 14)
      ? ["песни", "сохранены"]
      : ["песен", "сохранено"];
  return `${count} ${form[0]} ${form[1]} в этом браузере`;
}

function checkedTrackCount(tracks) {
  return tracks.filter(track => track.checkStatus === CHECK_STATUS.verified).length;
}

function createCodeCard(title, description, hint) {
  const secret = el("section", "code-card");
  const form = el("form", "code-form");
  form.dataset.action = "open-code";
  const input = el("input", "code-input");
  input.type = "text";
  input.name = "secret-code";
  input.placeholder = "Введи секретный код";
  input.autocomplete = "off";
  input.setAttribute("aria-label", "Секретный код");
  input.setAttribute("aria-describedby", "code-feedback");
  const submit = makeButton("Открыть сюрприз", "submit-code", "primary-button");
  submit.type = "submit";
  append(form, input, submit);
  const feedback = el("p", "code-feedback");
  feedback.id = "code-feedback";
  feedback.setAttribute("aria-live", "polite");
  append(secret, el("h2", "", title), el("p", "", description), form, feedback, el("p", "code-hint", hint));
  return secret;
}

const SECRET_CODES = {
  MUSIC: { route: "home", message: "Вот твой музыкальный уголок ♡" },
  MASYA: { playlist: "near" },
  RYADOM: { playlist: "near" },
  KOTICHKA: { playlist: "cat" },
  CAT: { playlist: "cat" },
  LUBLU: { playlist: "together" },
  VMESTE: { playlist: "together" },
  ...LOVE_CODES,
  ...BONUS_CODES,
  ...MEMORY_CODES
};

function renderHome() {
  const hero = el("section", "hero");
  append(hero,
    el("span", "eyebrow", "Три настроения. И немного меня в каждом."),
    el("h1", "", "")
  );
  const headline = hero.querySelector("h1");
  headline.append(document.createTextNode("Маленький мир для моей "));
  headline.append(el("span", "", "Лиэль"));
  hero.append(
    el("p", "hero-copy", "Если тебе хочется улыбнуться, почувствовать мою заботу или просто побыть в нашем маленьком мире — выбирай то, что тебе сейчас нужно."),
    el("span", "small-love", "всё здесь сделано с любовью")
  );
  const mascots = el("img", "hero-mascots");
  mascots.src = "assets/images/storybook-mascots.svg";
  mascots.alt = "Оригинальные сказочные котёнок и щенок с розовыми бантиками";
  mascots.decoding = "async";
  hero.append(mascots);

  const shortcutsHeading = el("div", "section-heading");
  append(shortcutsHeading,
    el("div", "", ""),
    el("p", "", "Открытки для любого настроения — выбирай любую.")
  );
  shortcutsHeading.firstElementChild.append(el("h2", "", "Что тебе сейчас нужно?"));
  const shortcuts = [
    ["♫", "Наша музыка", "Три настроения и песни, которые я собрал для тебя.", "go-music"],
    ["♡", "Наши воспоминания", "Фотографии, к которым можно возвращаться.", "memories"],
    ["▶", "Наши видео", "Три личных видео — открывай, когда захочешь.", "videos"],
    ["✉", "Открой, когда тебе…", "Небольшие письма для разных моментов.", "open-when"],
    ["☁", "Когда тебе грустно", "Тёплые слова и спокойная музыка, если она нужна.", "sad"],
    ["☻", "Когда не хватает моего юмора", "Моё смешное видео — без обещаний удачной шутки.", "video:funny"],
    ["✧", "Маленькие сюрпризы", "Секретные коды, записки и маленькие находки.", "codes"],
    ["♡", "Почему ты мне дорога", "Несколько тёплых слов — просто потому что ты есть.", "reasons"],
    ["☾", "Наш уютный вечер", "Музыка, идея для свидания и спокойный вечер.", "midnight"],
    ["🎟", "Купоны для моей маси", "Звонок, объятия, вкусняшка или время вдвоём.", "coupons"]
  ];
  const shortcutGrid = el("section", "shortcut-grid");
  shortcutGrid.setAttribute("aria-label", "Открытки для тебя");
  shortcuts.forEach(([icon, title, description, route]) => {
    const card = el("article", "shortcut-card");
    append(card,
      el("span", "shortcut-icon", icon),
      el("h3", "", title),
      el("p", "", description),
      makeButton("Открыть открытку", route === "go-music" ? "go-music" : "open-section", "secondary-button", route === "go-music" ? {} : { route })
    );
    shortcutGrid.append(card);
  });

  const sectionHeading = el("div", "section-heading");
  sectionHeading.id = "music";
  const headingCopy = el("div");
  append(headingCopy, el("h2", "", "Выбери своё настроение"), el("p", "", "Три маленьких музыкальных мира для тебя."));
  sectionHeading.append(headingCopy);
  const grid = el("section", "playlist-grid");
  grid.setAttribute("aria-label", "Три музыкальных плейлиста");
  PLAYLISTS.forEach(playlist => {
    const tracks = getPlaylistTracks(playlist);
    const card = el("article", "playlist-card");
    card.style.setProperty("--theme", playlist.accent);
    const cover = el("img", "cover");
    cover.src = playlist.cover;
    cover.alt = `Оригинальная иллюстрация к плейлисту «${playlist.title}»`;
    cover.loading = "lazy";
    cover.addEventListener("error", () => {
      cover.alt = `Иллюстрация к плейлисту «${playlist.title}»`;
      showToast("Не удалось загрузить обложку. Проверь файл в assets/images.");
    }, { once: true });
    const copy = el("div", "card-copy");
    append(copy,
      el("span", "mood-tag", ""),
      el("h2", "", playlist.title),
      el("p", "card-description", playlist.description)
    );
    const tag = copy.querySelector(".mood-tag");
    tag.style.setProperty("--theme", playlist.accent);
    tag.append(el("span", "mood-dot"), document.createTextNode(playlist.mood));
    const meta = el("div", "card-meta");
    meta.append(el("span", "", `${tracks.length} песен`));
    meta.append(el("span", "ready-count", `${checkedTrackCount(tracks)} из ${tracks.length} проверены`));
    copy.append(meta, makeButton("Открыть плейлист", "open-playlist", "primary-button card-button", { playlist: playlist.id }));
    append(card, cover, copy);
    grid.append(card);
  });
  const note = el("p", "unverified-note");
  note.style.textAlign = "center";
  note.textContent = "Ссылки на конкретные записи добавляются только после проверки. Пока можно найти песню на YouTube по её точному названию.";
  const secret = createCodeCard(
    "Открой настроение секретным кодом",
    "Введи код — и я сразу открою нужную музыку. Или выбери плейлист ниже ♡",
    "Есть и другие секретные коды — загляни в раздел «Для нас» и открой подсказки."
  );
  const secretCoupon = el("section", "secret-coupon-drawer");
  const pawButton = makeButton("", "pull-secret-paw", "secret-paw-handle");
  pawButton.setAttribute("aria-label", "Потянуть за кошачью лапку и открыть секретный купон");
  pawButton.setAttribute("aria-expanded", "false");
  const paw = el("img", "secret-paw-image");
  paw.src = "assets/images/cat-paw.svg";
  paw.alt = "";
  paw.setAttribute("aria-hidden", "true");
  pawButton.append(paw);
  const pawHint = el("p", "secret-paw-hint", "Секрет в самом низу… потяни только за лапку");
  const privateCoupon = el("article", "secret-coupon-card");
  privateCoupon.hidden = true;
  append(privateCoupon,
    el("span", "coupon-stamp", "Личный купон • 18+"),
    el("h2", "", "Кино-вечер и, если оба захотим, продолжение 💗"),
    el("p", "", "Сначала выбираем фильм, устраиваемся поудобнее и проводим вечер вместе. А близость — только если нам обоим этого хочется в тот момент. Никаких ожиданий: можно сказать «нет», остановиться или передумать в любое время."),
    makeButton("Принять без обязательств ♡", "accept-private-coupon", "primary-button")
  );
  secretCoupon.append(pawButton, pawHint, privateCoupon);
  const togglePrivateCoupon = () => {
    const revealed = privateCoupon.hidden;
    privateCoupon.hidden = !revealed;
    pawButton.setAttribute("aria-expanded", String(revealed));
    secretCoupon.classList.toggle("is-open", revealed);
    if (revealed) {
      privateCoupon.scrollIntoView({ behavior: "smooth", block: "center" });
      celebrateCode();
    }
  };
  let pawPointerStart = null;
  let draggedPaw = false;
  let skipPawClick = false;
  pawButton.addEventListener("pointerdown", event => {
    pawPointerStart = event.clientY;
    draggedPaw = false;
    pawButton.setPointerCapture(event.pointerId);
  });
  pawButton.addEventListener("pointerup", event => {
    if (pawPointerStart === null) return;
    const pulled = event.clientY - pawPointerStart;
    pawPointerStart = null;
    if (pulled > 24) {
      draggedPaw = true;
      skipPawClick = true;
      togglePrivateCoupon();
      window.setTimeout(() => { skipPawClick = false; }, 0);
    }
  });
  pawButton.addEventListener("pointercancel", () => { pawPointerStart = null; });
  pawButton.addEventListener("click", () => {
    if (skipPawClick || draggedPaw) {
      draggedPaw = false;
      return;
    }
    togglePrivateCoupon();
  });
  const acceptPrivateCoupon = () => {
    privateCoupon.querySelector('[data-action="accept-private-coupon"]').textContent = "Купон принят — обсудим вместе ♡";
    showToast("Купон принят без обязательств. Договоримся только если нам обоим захочется 💗");
  };
  privateCoupon.querySelector('[data-action="accept-private-coupon"]').addEventListener("click", acceptPrivateCoupon);
  append(app, hero, secret, shortcutsHeading, shortcutGrid, sectionHeading, grid, note,
    makeButton("Открыть наш уголок ♡", "open-section", "secondary-button heart-room-link", { route: "heart" }),
    secretCoupon);
}

function youtubeSearchUrl(track) {
  const query = `${track.artist} ${track.title} official audio`;
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
}

function openYouTube(url) {
  const opened = window.open(url, "_blank");
  if (!opened) {
    showToast("Браузер заблокировал новую вкладку — разреши открытие ссылок для этого сайта.");
    return false;
  }
  opened.opener = null;
  return true;
}

function sortTracks(tracks, mode) {
  if (mode === "title") return [...tracks].sort((a, b) => a.title.localeCompare(b.title, "ru"));
  if (mode === "artist") return [...tracks].sort((a, b) => a.artist.localeCompare(b.artist, "ru") || a.title.localeCompare(b.title, "ru"));
  return tracks;
}

function makeTrackRow(track, index) {
  const isFavorite = store.favorites.includes(track.id);
  const selected = selectedTrackId === track.id;
  const row = el("article", `track-row${selected ? " is-selected" : ""}`);
  const number = el("span", "track-number", String(index + 1).padStart(2, "0"));
  number.setAttribute("aria-hidden", "true");
  const copy = el("div", "track-copy");
  append(copy, el("p", "track-title", track.title), el("p", "track-artist", track.artist));
  const status = el("span", "track-status", selected ? "Поиск открыт · не проверено" : track.checkStatus);
  const actions = el("div", "track-actions");
  const play = track.youtubeId
    ? el("a", "secondary-button", "Слушать")
    : makeButton("Найти на YouTube", "search-track", "secondary-button", { track: track.id });
  if (track.youtubeId) {
    play.href = `https://www.youtube.com/watch?v=${encodeURIComponent(track.youtubeId)}`;
    play.target = "_blank";
    play.rel = "noopener noreferrer";
    play.dataset.action = "verified-track";
    play.dataset.track = track.id;
  }
  play.setAttribute("aria-label", `${track.youtubeId ? "Слушать" : "Найти на YouTube"}: ${track.artist} — ${track.title}`);
  const favorite = makeButton(isFavorite ? "♥" : "♡", "toggle-favorite", `icon-button favorite-button${isFavorite ? " is-favorite" : ""}`, { track: track.id });
  favorite.setAttribute("aria-label", isFavorite ? "Убрать из избранного" : "Добавить в избранное");
  favorite.setAttribute("aria-pressed", String(isFavorite));
  append(actions, play, favorite);
  append(row, number, copy, status, actions);
  return row;
}

function renderPlaylist(id, preserveInput = false) {
  const playlist = getPlaylist(id);
  if (!playlist) {
    renderRoute("home");
    return;
  }
  const oldInput = preserveInput ? app.querySelector("[data-search]") : null;
  const oldSelection = oldInput ? { value: oldInput.value, start: oldInput.selectionStart, end: oldInput.selectionEnd } : null;
  app.replaceChildren();
  const page = el("section", "content-narrow page-enter");
  page.style.setProperty("--theme", playlist.accent);
  const back = makeButton("← Назад к плейлистам", "back-to-home", "back-button");
  const hero = el("section", "playlist-hero");
  const cover = el("img", "playlist-hero-cover");
  cover.src = playlist.cover;
  cover.alt = `Обложка плейлиста «${playlist.title}»`;
  const copy = el("div", "");
  append(copy,
    el("span", "eyebrow", playlist.mood),
    el("h1", "", playlist.title),
    el("p", "playlist-description", playlist.description)
  );
  const actions = el("div", "playlist-actions");
  const listen = makeButton("Найти плейлист на YouTube", "search-playlist", "primary-button", { playlist: playlist.id });
  const shuffle = makeButton("⤨ Перемешать", "shuffle", "secondary-button", { playlist: playlist.id });
  const next = makeButton("Следующая песня →", "next-track", "secondary-button", { playlist: playlist.id });
  append(actions, listen, shuffle, next);
  copy.append(actions);
  const note = el("p", "unverified-note", "Конкретные записи пока не проверены. Кнопки откроют поиск YouTube по исполнителю и названию; выбранная версия и её доступность будут видны на YouTube.");
  copy.append(note);
  append(hero, cover, copy);

  const toolbar = el("div", "toolbar");
  const searchWrap = el("div", "search-wrap");
  const search = el("input", "search-input");
  search.type = "search";
  search.placeholder = "Найти песню или исполнителя";
  search.setAttribute("aria-label", "Поиск по названию песни или исполнителю");
  search.dataset.search = "true";
  search.value = oldSelection ? oldSelection.value : "";
  searchWrap.append(search);
  const sort = el("select", "sort-select");
  sort.setAttribute("aria-label", "Сортировка песен");
  sort.dataset.sort = "true";
  [
    ["playlist", "Порядок плейлиста"],
    ["artist", "По исполнителю"],
    ["title", "По названию"]
  ].forEach(([value, label]) => {
    const option = el("option", "", label);
    option.value = value;
    option.selected = sortMode === value;
    sort.append(option);
  });
  append(toolbar, searchWrap, sort);
  const listHeading = el("div", "section-heading");
  append(listHeading, el("h2", "", "Песни для этого настроения"));
  const tracksContainer = el("div", "track-list");

  const renderRows = () => {
    const query = search.value.trim().toLocaleLowerCase("ru-RU").split(/\s+/).filter(Boolean);
    const allTracks = sortTracks(getPlaylistTracks(playlist), sort.value);
    const filtered = allTracks.filter(track => {
      const searchable = `${track.title} ${track.artist}`.toLocaleLowerCase("ru-RU");
      return query.every(token => searchable.includes(token));
    });
    tracksContainer.replaceChildren();
    if (!filtered.length) {
      tracksContainer.append(el("p", "empty-state", "По этому запросу ничего не нашлось. Попробуй другое название ♡"));
    } else {
      filtered.forEach((track, index) => tracksContainer.append(makeTrackRow(track, index)));
    }
    count.textContent = `Показано ${filtered.length} из ${allTracks.length} песен`;
  };
  const count = el("p", "catalog-count");
  search.addEventListener("input", renderRows);
  sort.addEventListener("change", () => { sortMode = sort.value; renderRows(); });
  renderRows();
  append(page, back, hero, mascotSticker("music-mascot"), listHeading, toolbar, count, tracksContainer);
  app.append(page);
  if (oldSelection) {
    search.focus();
    search.setSelectionRange(oldSelection.start, oldSelection.end);
  }
}

function renderFavorites() {
  const page = el("section", "content-narrow favorites-page");
  const heading = el("div", "section-heading");
  append(heading, el("div", "", ""));
  const headingCopy = heading.firstChild;
  append(headingCopy, el("span", "eyebrow", "Твои любимые песни"), el("h1", "page-title", "Избранное"));
  const back = makeButton("← К плейлистам", "back-to-home", "back-button");
  const favorites = store.favorites.map(id => TRACK_BY_ID.get(id)).filter(Boolean);
  const list = el("div", "track-list");
  if (!favorites.length) {
    list.append(el("p", "empty-state", "Пока здесь тихо. Нажми ♡ рядом с песней, чтобы сохранить её в избранное."));
  } else {
    favorites.forEach((track, index) => list.append(makeTrackRow(track, index)));
  }
  append(page, back, heading, el("p", "catalog-count", favoriteCountLabel(favorites.length)), list);
  app.append(page);
}

function renderMemories() {
  const page = el("section", "memories-page page-enter");
  const heading = el("header", "memories-heading");
  append(heading,
    el("span", "eyebrow", "Наш альбом"),
    el("h1", "page-title", "Наши воспоминания"),
    el("p", "memories-subtitle", "Маленькие моменты, которые стали частью нашей истории.")
  );
  const grid = el("div", "memory-grid");
  MEMORIES.forEach((memory, index) => {
    const item = makeButton("", "open-photo", "memory-card", { index: String(index) });
    item.setAttribute("aria-label", `Открыть фотографию ${index + 1}`);
    const image = el("img", "memory-image");
    image.src = memory.src;
    image.alt = memory.alt;
    image.loading = "lazy";
    image.decoding = "async";
    image.addEventListener("error", () => {
      item.classList.add("memory-missing");
      image.remove();
      item.append(el("span", "memory-placeholder", "Фотография не загрузилась"));
      showToast(`Не удалось открыть ${memory.src}. Проверь файл в assets/photos.`);
    }, { once: true });
    item.append(image);
    grid.append(item);
  });
  const note = el("p", "privacy-note", "Фотографии хранятся в папке сайта. Если опубликовать сайт публично, сами файлы тоже будут доступны посетителям по прямой ссылке.");
  append(page, makeButton("← На главную", "back-to-home", "back-button"), heading, mascotSticker("memories-mascot"), grid, note);
  app.append(page);
}

function renderCodes() {
  const page = el("section", "content-narrow codes-page page-enter");
  append(page,
    makeButton("← На главную", "back-to-home", "back-button"),
    el("span", "eyebrow", "Маленькие сюрпризы"),
    el("h1", "page-title", "У меня для тебя есть кое-что особенное ❤️"),
    el("p", "codes-subtitle", "Попробуй коды для музыки и видео. Другие секреты, записки и мини-игра ждут тебя в разделе «Для нас»."),
    createCodeCard(
      "Открой своё послание",
      "Введи код, который я оставил для тебя.",
      "У каждого кода свой сюрприз ❤️"
    ),
    makeButton("Посмотреть все три видео", "open-section", "primary-button", { route: "videos" }),
    makeButton("Найти подсказки", "open-section", "secondary-button", { route: "hints" })
  );
  app.append(page);
}

function mascotSticker(className = "") {
  const image = el("img", `mascot-sticker${className ? ` ${className}` : ""}`);
  image.src = "assets/images/storybook-mascots.svg";
  image.alt = "";
  image.setAttribute("aria-hidden", "true");
  image.decoding = "async";
  return image;
}

function renderVideos() {
  app.replaceChildren();
  const page = el("section", "content-narrow videos-page page-enter");
  const heading = el("header", "video-heading");
  append(heading,
    el("span", "eyebrow", "Личные видео для тебя"),
    el("h1", "page-title", "Наши видео"),
    el("p", "memories-subtitle", "Три маленькие части моего мира. Открывай любую, когда захочется.")
  );
  const grid = el("div", "video-card-grid");
  VIDEO_SURPRISES.forEach((video, index) => {
    const card = el("article", "video-card");
    append(card,
      el("span", "video-card-number", `0${index + 1}`),
      el("span", "video-card-icon", ["☻", "♡", "🎀"][index]),
      el("h2", "", video.title),
      el("p", "", video.description),
      makeButton("Открыть видео", "open-section", "secondary-button", { route: `video:${video.id}` })
    );
    grid.append(card);
  });
  append(page, makeButton("← К сюрпризам", "back-to-codes", "back-button"), heading, mascotSticker("videos-mascot"), grid);
  app.append(page);
}

function renderPostcard(eyebrow, title, text, actions = []) {
  app.replaceChildren();
  const page = el("section", "content-narrow postcard-page page-enter");
  const card = el("article", "love-letter postcard-letter");
  append(card,
    el("span", "eyebrow", eyebrow),
    el("h1", "page-title", title),
    el("p", "love-letter-text", text),
    mascotSticker("postcard-mascot"),
    el("p", "love-letter-signature", "С теплом, твой человек ♥")
  );
  const controls = actions.map(({ label, route: actionRoute }) =>
    makeButton(label, "open-section", "secondary-button", { route: actionRoute })
  );
  append(page, makeButton("← На главную", "back-to-home", "back-button"), card, ...controls);
  app.append(page);
}

function renderReasons() {
  app.replaceChildren();
  const page = el("section", "content-narrow reasons-page page-enter");
  const heading = el("header", "video-heading");
  append(heading,
    el("span", "eyebrow", "Просто потому что ты — это ты"),
    el("h1", "page-title", "Почему ты мне дорога"),
    el("p", "memories-subtitle", "Это не полный список — просто несколько тёплых мыслей для тебя.")
  );
  const list = el("ol", "reason-list");
  LOVE_REASONS.forEach((reason, index) => {
    const item = el("li", "reason-card");
    append(item, el("span", "reason-number", String(index + 1).padStart(2, "0")), el("p", "", reason));
    list.append(item);
  });
  append(page, makeButton("← На главную", "back-to-home", "back-button"), heading, mascotSticker("reasons-mascot"), list);
  app.append(page);
}

function renderOpenWhen(id = "") {
  app.replaceChildren();
  const page = el("section", "content-narrow open-when-page page-enter");
  const note = OPEN_WHEN_NOTES.find(item => item.id === id);
  if (note) {
    const card = el("article", "love-letter open-when-letter");
    append(card,
      el("span", "eyebrow", "Открывай в своём темпе"),
      el("h1", "page-title", note.title),
      el("p", "love-letter-text", note.text),
      mascotSticker("postcard-mascot")
    );
    append(page, makeButton("← Выбрать другое письмо", "open-section", "back-button", { route: "open-when" }), card);
    if (id === "laugh") page.append(makeButton("Открыть моё смешное видео", "open-section", "primary-button", { route: "video:funny" }));
  } else {
    const heading = el("header", "video-heading");
    append(heading,
      el("span", "eyebrow", "Маленькие письма"),
      el("h1", "page-title", "Открой, когда тебе…"),
      el("p", "memories-subtitle", "Выбирай то, что подходит сейчас. Можно читать молча, не отвечать и закрыть страницу в любой момент.")
    );
    const grid = el("div", "open-when-grid");
    OPEN_WHEN_NOTES.forEach(item => {
      const card = el("article", "open-when-card");
      append(card,
        el("span", "open-when-icon", "✉"),
        el("h2", "", item.title),
        makeButton("Открыть письмо", "open-when", "secondary-button", { when: item.id })
      );
      grid.append(card);
    });
    append(page, makeButton("← На главную", "back-to-home", "back-button"), heading, mascotSticker("open-when-mascot"), grid);
  }
  app.append(page);
}

function renderPersonalSurprise(route) {
  const pages = {
    sad: {
      eyebrow: "Если день выдался непростым",
      title: "Когда тебе грустно",
      text: "Лиэль, тебе не нужно торопиться с улыбкой или делать вид, что всё хорошо. Можно отдохнуть, помолчать или рассказать мне, что чувствуешь — как тебе будет комфортно. Я рядом и хочу поддержать тебя бережно.",
      actions: [{ label: "Открыть спокойную музыку", route: "playlist:near" }, { label: "Письмо для этого настроения", route: "openwhen:sad" }]
    },
    midnight: {
      eyebrow: "Тихое время для нас",
      title: "Наш уютный вечер",
      text: "Выбирай то, чего хочется именно тебе: музыку, фильм, прогулку или просто спокойный разговор. Никаких обязательных планов — только возможность побыть рядом.",
      actions: [{ label: "Включить ночной плейлист", route: "playlist:together" }, { label: "Найти идею для вечера", route: "dateIdea" }]
    },
    surprise: {
      eyebrow: "Секретная открытка",
      title: "Маленький сюрприз",
      text: "Сюрприз простой: я очень рад, что ты есть. На этой страничке спрятано напоминание, что ты важна мне не за какие-то достижения, а просто потому, что ты — это ты.",
      actions: [{ label: "Открыть купоны заботы", route: "coupons" }, { label: "Найти ещё секреты", route: "heart" }]
    },
    "first-day": {
      eyebrow: "Место для нашей настоящей истории",
      title: "С чего всё началось",
      text: FIRST_DAY_STORY,
      actions: [{ label: "Посмотреть наши воспоминания", route: "memories" }]
    },
    "i-love-you": {
      eyebrow: "Личное письмо для Лиэль",
      title: "Я тебя люблю",
      text: "Лиэль, я люблю тебя и очень ценю то, что мы можем делить друг с другом свои дни. Мне важно, чтобы рядом со мной ты могла быть собой и чувствовать заботу. Это письмо можно просто оставить себе — отвечать не нужно.",
      actions: [{ label: "Открыть письма по настроению", route: "open-when" }]
    }
  };
  const page = pages[route];
  if (page) renderPostcard(page.eyebrow, page.title, page.text, page.actions);
}

function renderHeartRoom() {
  const page = el("section", "content-narrow heart-room page-enter");
  const heading = el("header", "video-heading");
  append(heading,
    el("span", "eyebrow", "Не только музыка"),
    el("h1", "page-title", "Наш маленький уголок"),
    el("p", "memories-subtitle", "Записки, игра, маленькие вопросы и место для твоего дня. Выбирай, что сейчас хочется.")
  );
  const cards = [
    ["Записки для тебя", "Письма на утро, поддержку и моменты, когда скучаешь.", "note:near", "✉"],
    ["Найди сердечки", "Небольшая игра-сюрприз.", "game", "♡"],
    ["Вопросы про нас", "Расскажи, что тебе нравится в наших отношениях.", "questions", "♥"],
    ["Как прошёл твой день?", "Оставь себе заметку о сегодняшнем дне.", "day", "☾"],
    ["Подсказки", "Куда ведут секретные коды и что ещё можно найти.", "hints", "✧"],
    ["Купоны заботы", "Тёплые идеи для наших общих моментов.", "coupons", "🎟"],
    ["Случайный комплимент", "Открой доброе слово, когда захочется.", "compliment", "♡"],
    ["Идея для свидания", "Выберем, чем заняться вместе.", "dateIdea", "✧"],
    ["Объятие на расстоянии", "Маленький ритуал, чтобы почувствовать мою заботу.", "hug", "♥"],
    ["Свидание мечты", "Выбери место, занятие и атмосферу по фотографиям.", "datePoll", "✿"]
  ];
  const grid = el("div", "heart-room-grid");
  cards.forEach(([title, description, route, icon]) => {
    const card = el("article", "heart-room-card");
    append(card,
      el("span", "heart-room-icon", icon),
      el("h2", "", title),
      el("p", "", description),
      makeButton("Открыть", "open-section", "secondary-button", { route })
    );
    grid.append(card);
  });
  append(page, makeButton("← На главную", "back-to-home", "back-button"), heading, grid);
  app.append(page);
}

function renderLoveNote(id) {
  const note = LOVE_NOTES.find(item => item.id === id);
  if (!note) {
    renderCodes();
    return;
  }
  const page = el("section", "content-narrow note-page page-enter");
  const card = el("article", "love-letter");
  append(card,
    el("span", "eyebrow", "Маленькая записка для тебя"),
    el("h1", "page-title", note.title),
    el("p", "love-letter-text", note.text),
    el("p", "love-letter-signature", "Обнимаю, твой человек ♥")
  );
  append(page,
    makeButton("← В наш уголок", "open-section", "back-button", { route: "heart" }),
    card,
    el("p", "privacy-note", "Записка остаётся здесь — возвращайся к ней, когда захочешь.")
  );
  app.append(page);
}

function renderHints() {
  app.replaceChildren();
  const page = el("section", "content-narrow hints-page page-enter");
  const heading = el("header", "video-heading");
  append(heading,
    el("span", "eyebrow", "Маленькие секреты"),
    el("h1", "page-title", "Подсказки"),
    el("p", "memories-subtitle", "Некоторые коды спрятаны в этой страничке. Открывай подсказки по одной — там ещё много поводов улыбнуться.")
  );
  const list = el("div", "hint-list");
  HINTS.forEach(hint => {
    const revealed = store.revealedHints.includes(hint.id);
    const card = el("article", `hint-card${revealed ? " is-revealed" : ""}`);
    append(card,
      el("h2", "", hint.title),
      el("p", "", revealed ? hint.text : "Нажми, чтобы прочитать подсказку."),
      revealed ? null : makeButton("Открыть подсказку", "reveal-hint", "secondary-button", { hint: hint.id })
    );
    list.append(card);
  });
  append(page, makeButton("← В наш уголок", "open-section", "back-button", { route: "heart" }), heading, list);
  app.append(page);
}

function renderHeartGame() {
  app.replaceChildren();
  const page = el("section", "content-narrow heart-game page-enter");
  const heading = el("header", "video-heading");
  append(heading,
    el("span", "eyebrow", "Мини-игра"),
    el("h1", "page-title", "Найди пять сердечек"),
    el("p", "memories-subtitle", "Нажимай на конвертики. В пяти из них спрятано по сердцу. Прогресс сохранится в этом браузере.")
  );
  const targets = new Set(HEART_GAME_TARGETS);
  const grid = el("div", "heart-game-grid");
  for (let cell = 0; cell < 9; cell += 1) {
    const found = store.foundHearts.includes(cell);
    const button = makeButton(found ? "♥" : "✉", "find-heart", `heart-game-cell${found ? " is-found" : ""}`, { cell: String(cell), target: String(targets.has(cell)) });
    button.setAttribute("aria-label", found ? `Сердечко найдено, ячейка ${cell + 1}` : `Открыть ячейку ${cell + 1}`);
    button.disabled = found;
    grid.append(button);
  }
  const completed = store.foundHearts.filter(cell => targets.has(cell)).length;
  const status = el("p", "game-progress", completed === 5
    ? "Ты нашла все сердечки! Забирай обнимашку ♥"
    : `Найдено сердечек: ${completed} из 5`);
  append(page,
    makeButton("← В наш уголок", "open-section", "back-button", { route: "heart" }),
    heading, grid, status
  );
  app.append(page);
}

function renderQuestions() {
  app.replaceChildren();
  const page = el("section", "content-narrow questions-page page-enter");
  const form = el("form", "relationship-form");
  form.dataset.action = "save-questions";
  const heading = el("header", "video-heading");
  append(heading,
    el("span", "eyebrow", "Мне важно твоё мнение"),
    el("h1", "page-title", "Пара вопросов про нас"),
    el("p", "memories-subtitle", "Тут нет правильных или неправильных ответов. Выбирай то, что ближе тебе.")
  );
  RELATIONSHIP_QUESTIONS.forEach(question => {
    const fieldset = el("fieldset", "question-card");
    fieldset.append(el("legend", "", question.prompt));
    question.options.forEach((option, index) => {
      const label = el("label", "question-option");
      const input = el("input");
      input.type = "radio";
      input.name = question.id;
      input.value = option;
      input.checked = store.relationshipAnswers[question.id] === option;
      input.required = index === 0;
      append(label, input, el("span", "", option));
      fieldset.append(label);
    });
    form.append(fieldset);
  });
  const custom = el("label", "question-custom");
  custom.append(el("span", "", "Хочешь что-нибудь добавить?"));
  const textarea = el("textarea", "journal-input");
  textarea.name = "extra";
  textarea.maxLength = 500;
  textarea.placeholder = "Напиши мне пару слов (необязательно)";
  textarea.value = store.relationshipAnswers.extra || "";
  custom.append(textarea);
  const submit = makeButton("Сохранить ответы", "submit-questions", "primary-button");
  submit.type = "submit";
  form.append(custom, submit);
  const saved = Object.keys(store.relationshipAnswers).length
    ? el("p", "form-success", "Спасибо, что поделилась. Ответы сохранены на этом устройстве ♡")
    : null;
  append(page, makeButton("← В наш уголок", "open-section", "back-button", { route: "heart" }), heading, form, saved);
  app.append(page);
}

function renderDayCheckin() {
  app.replaceChildren();
  const page = el("section", "content-narrow day-page page-enter");
  const today = new Date().toLocaleDateString("sv-SE");
  const existing = store.dayEntries.find(entry => entry.date === today);
  const form = el("form", "day-form");
  form.dataset.action = "save-day";
  const heading = el("header", "video-heading");
  append(heading,
    el("span", "eyebrow", "Я рядом и слушаю"),
    el("h1", "page-title", "Как прошёл твой день?"),
    el("p", "memories-subtitle", "Отметь настроение и запиши всё, чем хочется поделиться. Это увидишь только ты в этом браузере.")
  );
  const moodLabel = el("label", "question-custom");
  moodLabel.append(el("span", "", "Как ты себя чувствуешь?"));
  const mood = el("select", "sort-select");
  mood.name = "mood";
  [
    ["радостно", "😊 Радостно"],
    ["спокойно", "😌 Спокойно"],
    ["устало", "😴 Устала"],
    ["грустно", "🥺 Грустно"],
    ["по-разному", "💭 По-разному"]
  ].forEach(([value, label]) => {
    const option = el("option", "", label);
    option.value = value;
    option.selected = existing?.mood === value;
    mood.append(option);
  });
  moodLabel.append(mood);
  const noteLabel = el("label", "question-custom");
  noteLabel.append(el("span", "", "Чем запомнился день?"));
  const note = el("textarea", "journal-input");
  note.name = "note";
  note.maxLength = 1000;
  note.placeholder = "Можно написать пару слов или ничего не писать";
  note.value = existing?.note || "";
  noteLabel.append(note);
  const submit = makeButton("Сохранить мой день", "submit-day", "primary-button");
  submit.type = "submit";
  append(form, moodLabel, noteLabel, submit);
  const history = el("section", "day-history");
  history.append(el("h2", "", "Твои последние заметки"));
  if (!store.dayEntries.length) {
    history.append(el("p", "empty-state", "Здесь появятся твои заметки о прошедших днях."));
  } else {
    [...store.dayEntries].reverse().slice(0, 7).forEach(entry => {
      const item = el("article", "day-entry");
      append(item, el("strong", "", entry.date), el("span", "", entry.mood), entry.note ? el("p", "", entry.note) : null);
      history.append(item);
    });
  }
  append(page, makeButton("← В наш уголок", "open-section", "back-button", { route: "heart" }), heading, form, history);
  app.append(page);
}

function renderCoupons() {
  app.replaceChildren();
  const page = el("section", "content-narrow coupons-page page-enter");
  const heading = el("header", "video-heading");
  append(heading,
    el("span", "eyebrow", "Маленькие открытки для нас"),
    el("h1", "page-title", "Маленькие поводы побыть вдвоём"),
    el("p", "memories-subtitle", "Выбирай то, чего хочется. Купон можно использовать повторно или передумать — всё только по взаимному желанию.")
  );
  const grid = el("div", "coupon-grid");
  COUPONS.forEach(coupon => {
    const used = store.usedCoupons.includes(coupon.id);
    const card = el("article", `coupon-card${used ? " is-used" : ""}`);
    append(card,
      el("span", "coupon-stamp", used ? "Выбрала для нас ♥" : "Купон для моей маси"),
      el("h2", "", coupon.title),
      el("p", "", coupon.description),
      el("span", "coupon-perforation", "♡   ♡   ♡   ♡"),
      makeButton(used ? "Снять отметку" : "Использовать купон", "use-coupon", "secondary-button", { coupon: coupon.id })
    );
    grid.append(card);
  });
  append(page, makeButton("← В наш уголок", "open-section", "back-button", { route: "heart" }), heading, mascotSticker("coupon-mascot"), grid);
  app.append(page);
}

function renderCompliment() {
  app.replaceChildren();
  const page = el("section", "content-narrow surprise-page page-enter");
  const card = el("article", "love-letter surprise-card");
  append(card,
    el("span", "eyebrow", "Маленькое доброе слово"),
    el("h1", "page-title", "Комплимент для тебя"),
    el("p", "love-letter-text surprise-message", COMPLIMENTS[currentCompliment]),
    makeButton("Ещё одно доброе слово", "new-compliment", "primary-button")
  );
  append(page,
    makeButton("← В наш уголок", "open-section", "back-button", { route: "heart" }),
    card
  );
  app.append(page);
}

function renderDateIdeas() {
  app.replaceChildren();
  const page = el("section", "content-narrow surprise-page page-enter");
  const idea = DATE_IDEAS[currentDateIdea];
  const saved = store.savedDateIdeas.includes(idea);
  const card = el("article", "love-letter date-idea-card");
  append(card,
    el("span", "eyebrow", "Небольшие планы для нас"),
    el("h1", "page-title", "Идея для свидания"),
    el("p", "love-letter-text surprise-message", idea),
    makeButton("Предложить другую идею", "new-date-idea", "secondary-button"),
    makeButton(saved ? "Убрать из списка желаний" : "Сохранить в список желаний", "save-date-idea", "primary-button", { idea }),
    el("p", "privacy-note", saved ? "Эта идея сохранена в твоём списке желаний." : "Сохрани понравившуюся идею — она останется в этом браузере.")
  );
  const savedList = el("section", "saved-ideas");
  savedList.append(el("h2", "", "Наш список идей"));
  if (!store.savedDateIdeas.length) {
    savedList.append(el("p", "empty-state", "Пока пусто — добавь сюда идею, которая тебе понравится."));
  } else {
    store.savedDateIdeas.forEach(item => savedList.append(el("p", "saved-idea", `♡ ${item}`)));
  }
  append(page, makeButton("← В наш уголок", "open-section", "back-button", { route: "heart" }), card, savedList);
  app.append(page);
}

function renderDatePoll() {
  app.replaceChildren();
  const page = el("section", "content-narrow date-poll-page page-enter");
  const heading = el("header", "video-heading");
  append(heading,
    el("span", "eyebrow", "Выбираем вместе"),
    el("h1", "page-title", "Свидание твоей мечты"),
    el("p", "memories-subtitle", "Выбери по одному варианту в каждом разделе. Это не строгий план — просто узнаю, что тебе сейчас ближе.")
  );
  const form = el("form", "date-poll-form");
  form.dataset.action = "save-date-poll";
  DATE_POLL_QUESTIONS.forEach((question, questionIndex) => {
    const fieldset = el("fieldset", "date-poll-question");
    fieldset.append(el("legend", "", `${questionIndex + 1}. ${question.title}`));
    const grid = el("div", "date-options-grid");
    question.options.forEach((option, optionIndex) => {
      const label = el("label", "date-option-card");
      const input = el("input");
      input.type = "radio";
      input.name = question.id;
      input.value = option.id;
      input.required = optionIndex === 0;
      input.checked = store.datePollAnswers[question.id] === option.id;
      const image = el("img", "date-option-image");
      image.src = `assets/images/date-ideas/${option.image}`;
      image.alt = option.title;
      image.loading = "lazy";
      image.decoding = "async";
      image.addEventListener("error", () => {
        image.classList.add("date-option-image-missing");
        image.alt = `Фото варианта «${option.title}» временно недоступно`;
      }, { once: true });
      const copy = el("span", "date-option-copy");
      append(copy, el("strong", "", option.title), el("span", "", option.detail));
      append(label, input, image, copy);
      grid.append(label);
    });
    append(fieldset, grid);
    form.append(fieldset);
  });
  const submit = makeButton("Сохранить мой выбор ♡", "submit-date-poll", "primary-button");
  submit.type = "submit";
  form.append(submit);

  const answerCount = DATE_POLL_QUESTIONS.filter(question => store.datePollAnswers[question.id]).length;
  if (answerCount === DATE_POLL_QUESTIONS.length) {
    const summary = el("section", "date-poll-summary");
    summary.append(el("h2", "", "Твои ответы"));
    DATE_POLL_QUESTIONS.forEach(question => {
      const option = question.options.find(item => item.id === store.datePollAnswers[question.id]);
      if (option) append(summary, el("p", "", `${question.title} ${option.title}`));
    });
    summary.append(el("p", "privacy-note", "Ответы сохранены только в этом браузере. Я их не получу автоматически — покажи мне результат, когда захочешь."));
    form.append(summary);
  }
  append(page, makeButton("← В наш уголок", "open-section", "back-button", { route: "heart" }), heading, form);
  app.append(page);
}

function renderHug() {
  app.replaceChildren();
  const page = el("section", "content-narrow surprise-page page-enter");
  const card = el("article", "love-letter surprise-card hug-card");
  const steps = el("ol", "hug-steps");
  [
    "Устройся поудобнее и отпусти плечи.",
    "Сделай медленный вдох и такой же спокойный выдох.",
    "Представь, что я рядом и крепко тебя обнимаю.",
    "Останься в этом ощущении столько, сколько тебе хочется."
  ].forEach(text => steps.append(el("li", "", text)));
  append(card,
    el("span", "eyebrow", "Объятие на расстоянии"),
    el("h1", "page-title", "Сейчас маленькая пауза только для тебя"),
    mascotSticker("hug-mascot"),
    steps,
    el("p", "love-letter-signature", "Ты можешь вернуться сюда, когда захочешь ♥")
  );
  append(page, makeButton("← В наш уголок", "open-section", "back-button", { route: "heart" }), card);
  app.append(page);
}

function renderVideoSurprise(id) {
  const video = VIDEO_SURPRISES.find(item => item.id === id);
  if (!video) {
    renderCodes();
    return;
  }
  const page = el("section", "content-narrow video-surprise page-enter");
  const heading = el("header", "video-heading");
  append(heading,
    el("span", "eyebrow", "Личное видео для тебя"),
    el("h1", "page-title", video.title),
    el("p", "video-before", video.before)
  );
  const player = el("video", "personal-video");
  player.controls = true;
  player.playsInline = true;
  player.preload = "metadata";
  player.setAttribute("aria-label", video.title);
  player.src = video.src;
  const status = el("p", "video-status");
  player.addEventListener("error", () => {
    status.textContent = "Не удалось воспроизвести видео. Проверь файл. Обычно лучше всего поддерживается MP4 с видеокодеком H.264 и аудиокодеком AAC.";
    status.classList.add("video-error");
  }, { once: true });
  const endText = video.after ? el("p", "video-after", video.after) : null;
  const controls = el("div", "video-page-actions");
  append(controls,
    makeButton("← К кодам", "back-to-codes", "secondary-button"),
    makeButton("К воспоминаниям", "go-memories", "secondary-button")
  );
  append(page, makeButton("← Назад", "back-to-codes", "back-button"), heading, mascotSticker("video-mascot"), player, status, endText, controls,
    el("p", "privacy-note", "Личное видео хранится вместе с файлами сайта. При публикации на открытом хостинге его файл сможет открыть любой посетитель.")
  );
  app.append(page);
}

function showMemory(index) {
  currentPhotoIndex = (index + MEMORIES.length) % MEMORIES.length;
  const memory = MEMORIES[currentPhotoIndex];
  photoDialogImage.src = memory.src;
  photoDialogImage.alt = memory.alt;
  photoDialogCaption.textContent = "";
  if (!photoDialog.open) photoDialog.showModal();
}

function stepMemory(delta) {
  showMemory(currentPhotoIndex + delta);
}

function renderRoute(route) {
  app.replaceChildren();
  if (route === "home") renderHome();
  else if (route === "favorites") renderFavorites();
  else if (route === "memories") renderMemories();
  else if (route === "codes") renderCodes();
  else if (route === "videos") renderVideos();
  else if (route === "heart") renderHeartRoom();
  else if (route.startsWith("note:")) renderLoveNote(route.slice(5));
  else if (route.startsWith("openwhen:")) renderOpenWhen(route.slice(9));
  else if (route === "open-when") renderOpenWhen();
  else if (["sad", "midnight", "surprise", "first-day", "i-love-you"].includes(route)) renderPersonalSurprise(route);
  else if (route === "reasons") renderReasons();
  else if (route === "hints") renderHints();
  else if (route === "game") renderHeartGame();
  else if (route === "questions") renderQuestions();
  else if (route === "day") renderDayCheckin();
  else if (route === "coupons") renderCoupons();
  else if (route === "compliment") renderCompliment();
  else if (route === "dateIdea") renderDateIdeas();
  else if (route === "hug") renderHug();
  else if (route === "datePoll") renderDatePoll();
  else if (route.startsWith("video:")) renderVideoSurprise(route.slice(6));
  else if (route.startsWith("playlist:")) renderPlaylist(route.slice(9));
  else renderHome();
  updateFavoriteCount();
}

function toggleFavorite(trackId) {
  if (!TRACK_BY_ID.has(trackId)) return;
  if (store.favorites.includes(trackId)) {
    store.favorites = store.favorites.filter(id => id !== trackId);
    showToast("Убрала песню из избранного");
  } else {
    store.favorites.push(trackId);
    showToast("Песня сохранена в избранном ♡");
  }
  saveStore();
  updateFavoriteCount();
  const route = readRoute();
  renderRoute(route);
}

function findSong(trackId) {
  const track = TRACK_BY_ID.get(trackId);
  if (!track) return;
  const opened = openYouTube(track.youtubeId
    ? `https://www.youtube.com/watch?v=${encodeURIComponent(track.youtubeId)}`
    : youtubeSearchUrl(track));
  if (opened) selectedTrackId = trackId;
  renderRoute(readRoute());
}

function choosePlaylistTrack(playlistId, mode) {
  const playlist = getPlaylist(playlistId);
  if (!playlist) return;
  const tracks = getPlaylistTracks(playlist);
  if (!tracks.length) return;
  let nextIndex = -1;
  if (mode === "shuffle") nextIndex = Math.floor(Math.random() * tracks.length);
  else {
    const currentIndex = tracks.findIndex(track => track.id === selectedTrackId);
    nextIndex = (currentIndex + 1) % tracks.length;
  }
  findSong(tracks[nextIndex].id);
}

function playlistSearchUrl(playlist) {
  const query = `${playlist.title} ${getPlaylistTracks(playlist).slice(0, 3).map(track => track.title).join(" ")}`;
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
}

function submitSecretCode(form) {
  const input = form.elements.namedItem("secret-code");
  const feedback = document.querySelector("#code-feedback");
  const code = input.value.trim().toLocaleUpperCase("ru-RU");
  const result = Object.prototype.hasOwnProperty.call(SECRET_CODES, code) ? SECRET_CODES[code] : null;
  if (!result) {
    feedback.textContent = "Кажется, этот сюрприз пока не нашёлся, моя маси 🎀 Попробуй ещё раз.";
    input.setAttribute("aria-invalid", "true");
    input.focus();
    return;
  }
  input.removeAttribute("aria-invalid");
  feedback.textContent = "";
  if (result.message) showToast(result.message);
  celebrateCode();
  const nextRoute = result.video ? `video:${result.video}`
    : result.playlist ? `playlist:${result.playlist}`
      : result.note ? `note:${result.note}`
        : result.route;
  setRoute(nextRoute);
}

app.addEventListener("click", event => {
  const actionButton = event.target.closest("[data-action]");
  if (!actionButton) return;
  const { action, playlist, track } = actionButton.dataset;
  if (action === "submit-code") {
    event.preventDefault();
    const form = actionButton.closest("form");
    if (form) submitSecretCode(form);
  } else if (action === "open-playlist") {
    sortMode = "playlist";
    setRoute(`playlist:${playlist}`);
  } else if (action === "back-to-home") {
    setRoute("home");
  } else if (action === "back-to-codes") {
    setRoute("codes");
  } else if (action === "go-memories") {
    setRoute("memories");
  } else if (action === "open-section") {
    setRoute(actionButton.dataset.route);
  } else if (action === "go-music") {
    if (readRoute() !== "home") setRoute("home");
    document.querySelector("#music")?.scrollIntoView({ behavior: "smooth", block: "start" });
  } else if (action === "open-when") {
    setRoute(`openwhen:${actionButton.dataset.when}`);
  } else if (action === "open-photo") {
    showMemory(Number(actionButton.dataset.index));
  } else if (action === "search-track" || action === "verified-track") {
    if (action === "verified-track") event.preventDefault();
    findSong(track);
  } else if (action === "toggle-favorite") {
    toggleFavorite(track);
  } else if (action === "search-playlist") {
    const item = getPlaylist(playlist);
    if (item) openYouTube(playlistSearchUrl(item));
  } else if (action === "shuffle" || action === "next-track") {
    choosePlaylistTrack(playlist, action);
  } else if (action === "find-heart") {
    const cell = Number(actionButton.dataset.cell);
    if (actionButton.dataset.target === "true" && Number.isInteger(cell) && !store.foundHearts.includes(cell)) {
      store.foundHearts.push(cell);
      saveStore();
      showToast("Нашла сердечко! ♥");
    } else {
      showToast("Пока здесь пусто. Попробуй другой конвертик ♡");
    }
    renderHeartGame();
  } else if (action === "reveal-hint") {
    const hintId = actionButton.dataset.hint;
    if (HINTS.some(hint => hint.id === hintId) && !store.revealedHints.includes(hintId)) {
      store.revealedHints.push(hintId);
      saveStore();
    }
    renderHints();
  } else if (action === "use-coupon") {
    const couponId = actionButton.dataset.coupon;
    if (!COUPONS.some(coupon => coupon.id === couponId)) return;
    const wasUsed = store.usedCoupons.includes(couponId);
    store.usedCoupons = store.usedCoupons.includes(couponId)
      ? store.usedCoupons.filter(id => id !== couponId)
      : [...store.usedCoupons, couponId];
    saveStore();
    showToast(wasUsed
      ? "Отметка снята — купон можно выбрать снова, когда захочется."
      : "Купон принят, моя маси 💗 Выбери время вместе, когда вам обоим будет удобно.");
    celebrateCode();
    renderCoupons();
  } else if (action === "new-compliment") {
    const choices = COMPLIMENTS.map((_, index) => index).filter(index => index !== currentCompliment);
    currentCompliment = choices[Math.floor(Math.random() * choices.length)];
    renderCompliment();
  } else if (action === "new-date-idea") {
    const choices = DATE_IDEAS.map((_, index) => index).filter(index => index !== currentDateIdea);
    currentDateIdea = choices[Math.floor(Math.random() * choices.length)];
    renderDateIdeas();
  } else if (action === "save-date-idea") {
    const idea = actionButton.dataset.idea;
    if (!DATE_IDEAS.includes(idea)) return;
    store.savedDateIdeas = store.savedDateIdeas.includes(idea)
      ? store.savedDateIdeas.filter(item => item !== idea)
      : [...store.savedDateIdeas, idea];
    saveStore();
    renderDateIdeas();
  }
});

app.addEventListener("submit", event => {
  const form = event.target;
  if (!form.matches("[data-action]")) return;
  event.preventDefault();
  if (form.dataset.action === "open-code") {
    submitSecretCode(form);
  } else if (form.dataset.action === "save-questions") {
    const answers = {};
    RELATIONSHIP_QUESTIONS.forEach(question => {
      const selected = form.querySelector(`input[name="${question.id}"]:checked`);
      if (selected) answers[question.id] = selected.value;
    });
    const extra = form.elements.namedItem("extra").value.trim();
    if (extra) answers.extra = extra;
    store.relationshipAnswers = answers;
    saveStore();
    showToast("Спасибо, что ответила на мои вопросы ♡");
    renderQuestions();
  } else if (form.dataset.action === "save-day") {
    const today = new Date().toLocaleDateString("sv-SE");
    const entry = {
      date: today,
      mood: form.elements.namedItem("mood").value,
      note: form.elements.namedItem("note").value.trim()
    };
    store.dayEntries = [...store.dayEntries.filter(item => item.date !== today), entry].slice(-30);
    saveStore();
    showToast("Твой день сохранён в этом браузере ♡");
    renderDayCheckin();
  } else if (form.dataset.action === "save-date-poll") {
    const answers = {};
    DATE_POLL_QUESTIONS.forEach(question => {
      const selected = form.querySelector(`input[name="${question.id}"]:checked`);
      if (selected && question.options.some(option => option.id === selected.value)) {
        answers[question.id] = selected.value;
      }
    });
    if (Object.keys(answers).length !== DATE_POLL_QUESTIONS.length) return;
    store.datePollAnswers = answers;
    saveStore();
    showToast("Твои идеи для свидания сохранены ♡");
    renderDatePoll();
  }
});

photoDialog.addEventListener("click", event => {
  const actionButton = event.target.closest("[data-action]");
  if (actionButton) {
    if (actionButton.dataset.action === "close-photo") photoDialog.close();
    if (actionButton.dataset.action === "photo-prev") stepMemory(-1);
    if (actionButton.dataset.action === "photo-next") stepMemory(1);
  } else if (event.target === photoDialog) {
    photoDialog.close();
  }
});

photoDialog.addEventListener("touchstart", event => {
  if (event.touches.length !== 1) {
    photoTouchStart = null;
    return;
  }
  const touch = event.touches[0];
  photoTouchStart = { x: touch.clientX, y: touch.clientY };
}, { passive: true });

photoDialog.addEventListener("touchend", event => {
  if (!photoTouchStart || !event.changedTouches.length) return;
  const touch = event.changedTouches[0];
  const deltaX = touch.clientX - photoTouchStart.x;
  const deltaY = touch.clientY - photoTouchStart.y;
  photoTouchStart = null;
  if (Math.abs(deltaX) >= 50 && Math.abs(deltaX) > Math.abs(deltaY) * 1.2) {
    stepMemory(deltaX < 0 ? 1 : -1);
  }
}, { passive: true });

photoDialog.addEventListener("touchcancel", () => {
  photoTouchStart = null;
}, { passive: true });

document.addEventListener("keydown", event => {
  if (!photoDialog.open) return;
  if (event.key === "Escape") {
    event.preventDefault();
    photoDialog.close();
    return;
  }
  if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
    event.preventDefault();
    stepMemory(event.key === "ArrowLeft" ? -1 : 1);
  }
});

header.addEventListener("click", event => {
  const nav = event.target.closest("[data-route]");
  if (!nav) return;
  event.preventDefault();
  setRoute(nav.dataset.route);
});

window.addEventListener("popstate", () => {
  const route = readRoute();
  if (route.startsWith("playlist:")) {
    currentPlaylistId = route.slice(9);
    store.lastPlaylist = currentPlaylistId;
  }
  renderRoute(route);
});

loadStore();
currentPlaylistId = store.lastPlaylist;
const initialRoute = readRoute();
if (initialRoute.startsWith("playlist:")) currentPlaylistId = initialRoute.slice(9);
renderRoute(initialRoute);

/* Проверяем целостность каталога и плейлистов во время разработки. */
if (PLAYLISTS.length !== 3 || TRACKS.some(track => track.playlistIds.length === 0)) {
  console.error("Каталог должен содержать три плейлиста, у каждой песни должен быть плейлист.");
}
