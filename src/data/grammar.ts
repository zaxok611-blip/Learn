import { Level } from '../types';

export interface GrammarTopic {
  id: string;
  title: string;
  titleKurdish: string;
  category: string;
  level: Level;
  content: {
    rule: string;
    explanation: string;
    structure?: string; // Added structure formula
    examples: {
      en: string;
      ku: string;
    }[];
    notes?: string[]; // Added notes/tips section
  }[];
}

export const GRAMMAR_TOPICS: GrammarTopic[] = [
  {
    id: 'present-simple',
    title: 'Present Simple',
    titleKurdish: 'دەمێ نوکە یێ سادە',
    category: 'Tenses (دەم)',
    level: 'A1',
    content: [
      {
        rule: 'بکارئینان ل ژیانا ڕۆژانە (Daily Usage & Intent)',
        explanation: 'ئەم دەمێ نوکە یێ سادە (Present Simple) بکار دئینین بۆ ئاخفتنێ ل سەر وان تشتێن کو ب بەردەوامی یان وەک نەریت یان عادات یێن ڕۆژانە ڕوو ددەن. هەروەها بۆ ڕاستیێن زانستی و ژینگەیی یێن گشتی یێن نەگۆڕ دهێتە بکارئینان.\n\nبۆ نموونە ئەگەر تو هەر ڕۆژ بووم چایێ ڤەخۆی یان ڕۆژ ل ژ لایێ رۆژهەلاتێ هەلدێت، ئەڤە هەمی ڕاستی یان عاداتن و پێدڤییە ب دەمێ نوکە یێ سادە بهێنە دەربڕین.',
        examples: [
          { en: 'I drink water and tea every day.', ku: 'ئەز هەر ڕۆژ ئاڤ و چایێ ڤەدۆخۆم (ئەڤە عادەتەکا بەردەوامە).' },
          { en: 'The sun rises in the east and sets in the west.', ku: 'ڕۆژ ل ڕۆژهەلاتێ هەلدێت و ل ڕۆژئاڤایێ ئاڤا دبیت (ئەڤە ڕاستیەکا گشتی یە).' },
          { en: 'They live in Duhok.', ku: 'ئەو ل دهۆکێ دژین (ئەڤە سەروبەرەکێ هەمیشەیی یە).' }
        ],
        notes: [
          'ئەڤ دەمە چ جاران بۆ کارەکێ نوکە یێ کاتی تابلۆ ناکەت.',
          'پەیڤێن نیشاندەر وەکی (every day, usually, always, often) گەلەک جاران دگەل دهێن.'
        ]
      },
      {
        rule: 'پێکهاتە د دەمێ ڕستێ دا (Sentence Structure & Verbs)',
        explanation: 'ڕێسایێ سەرەکی یێ پێکهاتنا ڕستێ د دەمێ نوکە یێ سادە دا دابەش دبیت ل سەر دوو حالەتان ب دویڤ جۆرێ بکەری (Subject):\n\n١. بکەرێن مفرەد (He, She, It): پیتا (s) یان (es) دکەڤیتە سەر دووماهییا فعلێ.\n٢. بکەرێن کۆم و ڕستێن کەسی (I, We, You, They): فعل ب شێوازێ خۆ یێ چاڤکانێ یێ سادە دبیت بێ دۆماهیک پیت.',
        structure: 'Subject + Verb (s/es/ies for single) + Object',
        examples: [
          { en: 'He plays football with his friends.', ku: 'ئەو دگەل هەڤالێن خۆ تەپاپێ دکەت (فعل بوویە plays).' },
          { en: 'They play football on Fridays.', ku: 'ئەو ڕۆژێن ئینی یاریێ دکەن (فعل مایە play).' },
          { en: 'She studies English hard.', ku: 'ئەو ب دل گەرم خوینی ب ئنگلیزی دکەت (study بوویە studies).' }
        ],
        notes: [
          'ئەگەر فعل ب پیتێن (ch, sh, ss, x, o, z) ب دووماهی هات، ئەم (es) زێدە دکەین، وەکی: watch -> watches.',
          'بۆ نەرێکرنێ (Negative) ئەم (does not / do not) هاڤێژینە بەری فعلێ.'
        ]
      }
    ]
  },
  {
    id: 'past-simple',
    title: 'Past Simple',
    titleKurdish: 'دەمێ بۆری یێ سادە',
    category: 'Tenses (دەم)',
    level: 'A1',
    content: [
      {
        rule: 'چێکرن و بکارئینانا دەمێ بۆری (Past Usage & Actions)',
        explanation: 'کار یان ڕوودانەک کو ل دەمەکێ دەستنیشانکری و زانستی ل ڕابردوودا ب دووماهی هاتیە، ب تەمامی خلاس بوویە و پەیوەندی ب کارێ نوکە ڤە نینە.\n\nبۆ نموونە: گەشتەکا سالا پار، یان کارەکێ کو تە دوهی ئەنجامدابیت. ل دەڤ مە د زمانێ کوردی (بادینی) دا دبیتە دەمێ بۆری، وەکی "من کڕی" یان "من دیت".',
        structure: 'Subject + Verb (2nd form / -ed) + Object',
        examples: [
          { en: 'I watched a very interesting movie yesterday.', ku: 'من دوهی سەیرا فیلمەکێ گەلەک سەرنجڕاکێش کر (کار یێ خلاس بووی).' },
          { en: 'She visited London last summer.', ku: 'وێ هاوینا چووی سەرەدانا لەندەنێ کر.' },
          { en: 'They built this house in 2015.', ku: 'وان ئەڤ خانیە ل سالا ٢٠١٥ێ ئاڤاکر.' }
        ],
        notes: [
          'پێدڤی یە دەمێ ڕوودانێ هاتیە زانین یان دیارکرن (such as: yesterday, last night, two days ago).',
          'فعل دابەش دبنە سەر دوو جۆران: Regular (کو پاشگرێ ed وەردگرن) و Irregular (کو ب تەمامی دگۆهرن وەکی go -> went).'
        ]
      }
    ]
  },
  {
    id: 'present-continuous',
    title: 'Present Continuous',
    titleKurdish: 'دەمێ نوکە یێ بەردەوام',
    category: 'Tenses (دەم)',
    level: 'A1',
    content: [
      {
        rule: 'کاران د حینا ڕوودانێ دا (Happening Now)',
        explanation: 'ئەم ڤی دەمی بکار دئینین بۆ دەربڕینا وان کارێن کو ب دروستی ل دەمێ هۆسا ئاخفتنێ یان گوتنێ ب سەر دا دچن و د بەردەوامن.\n\nوەکی دەمێ تە کچەک دیت یا دخوینیت و دبێژی "ئەو یا دخوینیت نوکە" نەک خۆ تەنێ ڕۆژانە.',
        structure: 'Subject + am/is/are + Verb-ing + Object',
        examples: [
          { en: 'I am studying English grammar at the moment.', ku: 'ئەز د ڤی سەعاتی دا یێ هوردبینیا ڕێزمانا ئنگلیزی دخوینم.' },
          { en: 'Look! They are playing in the garden.', ku: 'بەرێ خۆ بدێ! ئەو یێ د ناڤ باخچەی دا یاری دکەن.' },
          { en: 'She is cooking dinner now.', ku: 'ئەو نوکە یا خوارنا ئێڤاری چێ دکەت.' }
        ],
        notes: [
          'ئامرازێن هاریکار: (am) بۆ I، (is) بۆ He/She/It و (are) بۆ We/You/They.',
          'هندەک فعل یێن هەنە کو دبێژنێ Stative Verbs (وەکی: believe, understand, love) کو چ جاران دگەل (ing) ناهێن، بەلکی دابەش دبنە دەمێ سادە.'
        ]
      }
    ]
  },
  {
    id: 'articles',
    title: 'Articles (A, An, The)',
    titleKurdish: 'ئامرازێن ناساندنێ',
    category: 'Basics (بنیات)',
    level: 'A1',
    content: [
      {
        rule: 'پێکهاتنێن نەدیار (Indefinite: A / An)',
        explanation: 'ئەم (A) و (An) بکار دئینین بۆ ناڤێن تاک (singular) و قابلی حژمار کرنێ یێن بێ دەستنیشانکرن و نەدیار.\n\nتێبینی د ناڤبەرا (A) و (An) دا د دەمێ پەیڤ هەلبژی کەت ل سەر حەرفا دەنگی یا دەستپێکێ دبیت.',
        structure: 'A/An + Singular Countable Noun',
        examples: [
          { en: 'I need a book to read on the weekend.', ku: 'من پێدڤی ب پەرتووکەکێ هەیە بۆ خواندنێ ل دوماهیا حەفتیێ (هەر پەرتووکەک بیت).' },
          { en: 'She ate an apple and an orange.', ku: 'وێ سێڤەک و پڕتەقالەک خوارن (هەر سێڤەک یان پڕتەقالەک بیت).' }
        ],
        notes: [
          'ئەم (An) بکار دئینین ئەگەر پەیڤ ب دەنگەکێ دەنگدار (Vowel sound) دەست پێ بکەت (a, e, i, o, u).',
          'چ جاران (A/An) بۆ ناڤێن کۆم یان تشتێن بێ حژمار (uncountable) ناهێنە بکارئینان.'
        ]
      },
      {
        rule: 'پێکهاتنێن دیارکەر (Definite Article: The)',
        explanation: 'ئەم (The) بکار دئینین بۆ ناڤەکێ دیارکری کو گوهدار و ئاخفتنکەر دزانن کیژ ل بەرحەسیە، یان کو بەری نوکە مە ب شێوازەکێ بەحسا وی کربی.',
        structure: 'The + Noun (Singular / Plural / Uncountable)',
        examples: [
          { en: 'The book you gave me was amazing.', ku: 'پەرتووکا تە دایە من یا کێفتین و سەیر بوو (پەرتووکەکا دیارکری یە).' },
          { en: 'The moon is beautiful tonight.', ku: 'هیڤ ئەڤ شەڤە یا جوان و گەشە (تەنێ ئێک هیڤ هەیە).' }
        ],
        notes: [
          'بۆ ناڤێن گشتی یان جهێن سروشتی یێن گشتی وەکی (The sun, The sky, The world) دهێنە بکارئینان.',
          'ناهێتە بکارئینان بۆ ناڤێن زۆربەیا دەولەتان و باژێڕان، مەگەر دەولەت ژ ئێک لێک پێکهاتبی وەکی (The UK, The USA).'
        ]
      }
    ]
  },
  {
    id: 'future-simple',
    title: 'Future Simple',
    titleKurdish: 'دەمێ پاشەڕۆژێ یێ سادە',
    category: 'Tenses (دەم)',
    level: 'A1',
    content: [
      {
        rule: 'بڕیارێن ئێکسەر و جێبەجێکرنا کاران (Promises & Instant Decisions)',
        explanation: 'ئەم (Will) بکار دئینین بۆ ئاخفتنێ ل سەر وان کارێن کو دێ ل پاشەڕۆژێ دا ڕوو دەن، یان دەمێ بڕیارەکا خێرا و سەرمەست ل گەل ئاخفتنێ بدەین یان بەڵێنیەکێ ژی دەربڕین.',
        structure: 'Subject + will + Verb (base form) + Object',
        examples: [
          { en: 'I will travel to Erbil tomorrow morning.', ku: 'ئەز دێ سوبە ل سپێدێ گەشت کەم بۆ هەولێرێ.' },
          { en: 'Don\'t worry, I will help you with your homework.', ku: 'خەم نەخۆ، ئەز دێ هاریکاریا تە کەم د کارێ مال دا.' },
          { en: 'It is cold. I will close the window.', ku: 'یا سەرمایە. ئەز دێ پەنجەرێ گرم (بڕیارەکا ب لەز).' }
        ],
        notes: [
          'پشتی (will) فعل چ جاران گۆهرین ب سەردا ناهێت و پیت وەک خۆ دهێتە هێلان.',
          'نەرێکرنا (will not) کورت دبیتە (won\'t).'
        ]
      }
    ]
  },
  {
    id: 'adjectives',
    title: 'Adjectives',
    titleKurdish: 'ئاڤەڵناڤ (سیفەت)',
    category: 'Basics (بنیات)',
    level: 'A1',
    content: [
      {
        rule: 'جهێ گونجایێ سیفەتی (Position & Rules)',
        explanation: 'ل زمانێ ئنگلیزی دا، سیفەت هەر دەم دکەڤیتە بەری ناڤی بۆ وەسفکرن یان گرنگ نیشاندانێ، بەروڤاژی زمانێ کوردی یێ کو سیفەت تێدا دکەڤیتە پشتی ناڤی.',
        structure: 'Adjective + Noun   OR   Subject + Verb to be + Adjective',
        examples: [
          { en: 'He bought a red car.', ku: 'وی ترۆمبێلەکا سۆر کڕی (سۆراتی بەری ترۆمبێلێ کەفت).' },
          { en: 'This is an expensive smartphone.', ku: 'ئەڤە تەلەفۆنەکا گرانبهایە.' },
          { en: 'The test was easy.', ku: 'تاقیکرن یا ب ساناهی بوو (پشتی فعلێن be کەفت).' }
        ],
        notes: [
          'سیفەت ل زمانێ ئنگلیزی چ جاران کۆم (plural) نابیت، ب تنێ ناڤ کۆم دبیت، وەکی: big dogs نەک bigs dogs.',
          'سیفەت هندەک جاران جهێ خۆ وەردگرن پشتی فعلێن بی وەکی (is, am, are, was, were).'
        ]
      }
    ]
  },
  {
    id: 'present-perfect',
    title: 'Present Perfect',
    titleKurdish: 'دەمێ نوکە یێ تەمام',
    category: 'Tenses (دەم)',
    level: 'A2',
    content: [
      {
        rule: 'پیوەندییا ڕابردووی ب نوکە ڤە (Past Experience with Present Results)',
        explanation: 'ئەم ڤی دەمی بکار دئینین بۆ کارەکێ کو ل ڕابردوویدا ڕوو دابیت بەلێ ئەنجامێ وی یان کارتێکرنا وی هەتا نوکە یا دیار و مایی د ژیانا مە دا. ب تایبەت بۆ ئەزموونێن ژیانێ دهێتە بکارئینان.\n\nئەگەر تە کلیلا خۆ بەرزە کربیت و هەتا نوکە یا بەرزە بیت، ئەڤە تەمامە. ئەگەر تە پیتەکە دیت وێ دەمێ دبێژی "من ئەڤ کلیلە بەرزە کریبوون بۆری سادە" لێ ئەگەر یا نوکە بەرزە بیت دبێژی "من بەرزە کرینە".',
        structure: 'Subject + have/has + Verb (3rd form - Past Participle) + Object',
        examples: [
          { en: 'I have lost my keys!', ku: 'من کلیلێن خۆ بەرزە کرینە! (کارتێکرن: هەتا نوکە بێ کلیل دەرڤە مە).' },
          { en: 'She has visited France twice.', ku: 'وێ دوو جاران سەرەدانا فرەنسا یا کری (ئەزموونا ژیانێ بەحس دکەت).' },
          { en: 'We have lived here since 2018.', ku: 'ئەم ل ڤێرێ ژ سالا ٢٠١٨ێ وەرە ژیاینە (هەتا نوکە ژی ل ڤێرێ نە).' }
        ],
        notes: [
          'بۆ (I, We, You, They) پەیڤا (have) مەرجدار دهێت.',
          'بۆ (He, She, It) پەیڤا (has) دهێتە بکارئینان.',
          'پەیڤا (since) بۆ خالا دەستپێکا رەها دهێت و (for) بۆ ماوەیێ زەمەنی.'
        ]
      }
    ]
  },
  {
    id: 'past-continuous',
    title: 'Past Continuous',
    titleKurdish: 'دەمێ بۆری یێ بەردەوام',
    category: 'Tenses (دەم)',
    level: 'A2',
    content: [
      {
        rule: 'بەردەوامی ل دەمەکێ دەستنیشانکری (Duration in the Past)',
        explanation: 'بۆ ئاخفتنێ ل سەر کارەکێ یان بویەرەکا کو ل ڕابردوویدا بۆ دەمەکێ یان ماوەیەکێ درێژ یێ بەردەوام بی و دهاتە ئەنجامدان. گەلەک جاران ئەڤ کارە دهێتە پچڕاندن ب کارەکێ دی یێ بۆری یێ کورت.\n\nوەکی دەمێ تو یێ تەلەفزیونێ سەیرکەی و ل ناکا دەرگەهـ لێ دەلێت، سەیرکرن یا بەردەوام بوو.',
        structure: 'Subject + was/were + Verb-ing + Object',
        examples: [
          { en: 'I was sleeping at 10 PM yesterday.', ku: 'ئەز دوهی ل دەمژمێر ١٠ ی شەڤێ یێ نڤستی بووم.' },
          { en: 'They were playing football when it started to rain.', ku: 'ئەو یێ مژویلی یاریێ بوون دەمێ باران ل ناکا دەست پێ کری باریت.' },
          { en: 'While she was cooking, her phone rang.', ku: 'دەما ئەو مژویلی چێکرنا خوارنێ بوو، تەلەفۆنا وێ زەنگ لێ دا.' }
        ],
        notes: [
          '(was) بۆ مفرەدان (I, He, She, It) دهێتە تەرخانکردن.',
          '(were) بۆ کۆم و لایەنێن کۆمی (We, You, They) دهێت.'
        ]
      }
    ]
  },
  {
    id: 'modals-can',
    title: 'Can and Could',
    titleKurdish: 'شیان (Can and Could)',
    category: 'Modals (فعلێن هاریکار)',
    level: 'A1',
    content: [
      {
        rule: 'بکارئینانا کەن و کۆد د ڕستان دا (Ability & Polite Requests)',
        explanation: 'ئەم (Can) بکار دئینین بۆ دیارکرنا شیانێن مە یێن نوکە، دەما کو ئەم (Could) بکار دئینین بۆ شیانێن مە یێن ڕابردوو یان ژی بۆ داخوازکرنەکا گەلەک ب ڕێز و ئەدەب.',
        structure: 'Subject + can / could + Verb (base form)',
        examples: [
          { en: 'I can speak three languages fluently.', ku: 'ئەز دشێم ب سێ زمانان ب رەوانی باخڤم.' },
          { en: 'When I was young, I could run very fast.', ku: 'دەمێ ئەز یێ بچیک، من دشیان ب لەزەکا برێز بڕەڤم.' },
          { en: 'Could you please open the door for me?', ku: 'ئەرێ تو دشێی ب زەحمەت دەرگەهی بۆ من ڤەکەی؟' }
        ],
        notes: [
          'پشتی ڤان هەردوو فعلان، فعل یێ ڕویس و سادە دبیت بێ (to) و بێ ب جۆرەن (s) یان (ing).',
          'نەرێکرنا وان دبیتە (cannot / could not).'
        ]
      }
    ]
  },
  {
    id: 'passive-voice',
    title: 'Passive Voice',
    titleKurdish: 'ڕستا نەدیار',
    category: 'Advanced (پێشکەفتی)',
    level: 'C1',
    content: [
      {
        rule: 'پەسەندکرنا کریارێ ل سەر کارکەری (Focus on Action)',
        explanation: 'ئەم ڤی شێوازی بکار دئینین دەمێ کو بکەر (Subject) نە یێ گرنگ بیت د بابەت دا، یان یێ بەرزە و نەدیار بیت، و گرنگی ب تەمامی بکەڤیتە سەر کارێ هاتیە کرن و مفعولێ ڕستێ.\n\nبۆ نموونە ئەگەر دەرگەهـ هاتبیتە شکاندن و گرنگ نینە کێ شکاندیە، بەلکی گرنگ تەنێ شکاندنا دەرگەهی بخۆیە.',
        structure: 'Object + is/are/was/were + Verb (3rd form - Past Participle)',
        examples: [
          { en: 'The rooms are cleaned every day.', ku: 'ژوور هەر ڕۆژ دهێنە پاقژکرن (گرنگ خواندنا پاقژکرنا وانە).' },
          { en: 'My phone was stolen yesterday on the street.', ku: 'دوهی تەلەفۆنا من ل سەر جاددێ هاتە دزین (دز یێ نەدیارە).' },
          { en: 'This book was written by a famous author.', ku: 'ئەڤ پەرتووکە ژ لایێ نڤیسەرەکێ ناڤدار ڤە هاتیە نڤیسین.' }
        ],
        notes: [
          'فعل د ڕستا نەدیار دا هەر دەم دکەڤیتە شێوازێ سێیێ (Verb 3).',
          'ئەگەر تە بڤێت بکەر پاش ل دووماهیێ زێدە کەی، بکاربینە: by + Subject.'
        ]
      }
    ]
  },
  {
    id: 'conditionals-1',
    title: 'First Conditional',
    titleKurdish: 'مەرجێ ئێکێ',
    category: 'Conditionals (مەرج)',
    level: 'A2',
    content: [
      {
        rule: 'ئەگەرێن مومکن د پاشەڕۆژێ دا (Possibilities in the Future)',
        explanation: 'بۆ ئاخفتنێ ل سەر کار یان تشتەکێ کو ئەگەرەکێ گەلەک مەزن هەیە د پاشەڕۆژێ دا بجهـ بهێت، ئەگەر مەرجێ ل دەستپێکێ ئاماژە پێ کری ڕوو بدەت.\n\nرێسایەکە کو بەلاڤە د ناڤبەرا پێشبینی کرنا کارێن روو ددەن ل سەر بریارا دروست دا.',
        structure: 'If + Present Simple, .... Subject + will + Verb (base form)',
        examples: [
          { en: 'If it rains this evening, I will stay at home.', ku: 'ئەگەر ئەڤ شەڤە باران بباریت، ئەز دێ ل مال مینم (ئەگەرێ بارانێ یێ هەی).' },
          { en: 'If you study hard, you will pass all the exams.', ku: 'ئەگەر تو ب دڵسۆزی بخوینی، دێ د هەمی ئەزموونان دا سەرکەڤی.' },
          { en: 'We will miss the train if we don\'t hurry.', ku: 'ئەم دێ شەمەندەفەرێ بەرزە کەین ئەگەر ل خۆ نەلەزینین.' }
        ],
        notes: [
          'د پشکا (If) دا چ جاران و ب هیچ ئاوایەکی پەیڤا (will) ناهێتە هێلان.',
          'دشێین جهێ هەردوو بەشان بگوهۆڕین، بەلێ ئەگەر (If) کەفتە ناڤەڕاستێ، فاریزە (comma) لانابەین.'
        ]
      }
    ]
  },
  {
    id: 'prepositions-time',
    title: 'Prepositions of Time',
    titleKurdish: 'ئامرازێن دەمی (In, At, On)',
    category: 'Basics (بنیات)',
    level: 'A1',
    content: [
      {
        rule: 'بکارئینانا ئاراستێن دەمێن داگیرکری (At, On, In Rules)',
        explanation: 'ل دەڤ مە د زمانێ ئنگلیزی دا، ژ بۆ دیارکرنا دەمی ئەم پێویستمان ب ئامرازەکان هەیە بەلێ گەلەک پێویستە بزانی کا هەر ئێک ل کیش حالەتی کارا دبیت:\n\n١. (At): بۆ دەمێن کورت و سەعاتی یێن دیارکری.\n٢. (On): بۆ ڕۆژێن حەفتیێ و تەواریخان.\n٣. (In): بۆ ماوێن درێژتر وەکی هەیڤان، سالان، وەرزان و چەرخان.',
        structure: 'At + Specific, On + Days, In + Years/Months',
        examples: [
          { en: 'The class starts at 8:30 AM.', ku: 'وانە د سەعەت ٨:٣٠ ی نیڤرۆ دا دەست پێ دکەت (سه عه ت دیاره).' },
          { en: 'I was born on July 15th, 1998.', ku: 'ئەز ل رۆژا ١٥ ی حەفت ل سالا ١٩٩٨ێ ژ دایک بوویمە (تەواریخە).' },
          { en: 'We usually travel in summer.', ku: 'ئەم گەلەک جاران ل وەرزێ هاڤینێ گەشت دکەین (وەرزە).' }
        ],
        notes: [
          'تێبینی: دگەل سپێدە و ئێڤاری (In the morning / afternoon) دهێت بەلێ بۆ شەڤێ (At night) دبیت.'
        ]
      }
    ]
  },
  {
    id: 'comparatives',
    title: 'Comparatives',
    titleKurdish: 'ئاڤەلناڤێن هەڤبەرکرنێ',
    category: 'Basics (بنیات)',
    level: 'A2',
    content: [
      {
        rule: 'هەڤبەرکرنا دوو تشتان (Comparing Two Things)',
        explanation: 'ئەم ئاڤەلناڤێن هەڤبەرکرنێ (Comparatives) بکار دئینین دەمێ مە بڤێت بەراورد و هەڤبەرکرنەکێ د ناڤبەرا دوو کەسان، دوو گیانەوەران، یان دوو تشتان دا دیار بکەین کو ئێک ژ وان د سیفەتەکی دا یێ پێشکەفتی تر بیت.',
        structure: 'Active Adjectives with -er + than   OR   More + Long Adjectives + than',
        examples: [
          { en: 'My new phone is faster than my old one.', ku: 'تەلەفۆنا من یا جدید ب لەزترە ژ یا من یا کۆن.' },
          { en: 'Gold is more expensive than silver.', ku: 'زێڕ گرانبهاترە ژ زێڤی (Expensive پەیڤەکا درێژ بوو).' },
          { en: 'He is taller than his brother.', ku: 'ئەو بلندترە ژ برایێ خۆ.' }
        ],
        notes: [
          'بۆ سیفەتێن کورت و لێک دایی پاشگرێ (-er) زێدە دکەین، بەلێ بۆ سیفەتێن درێژ (زێدەتر ژ ئێک بڕگە) پەیڤا (more) بەری ددەن.',
          'هندەک سیفەت هەنە هند گۆهرن ب تەمامی وەکی: good -> better / bad -> worse.'
        ]
      }
    ]
  },
  {
    id: 'present-perfect-continuous',
    title: 'Present Perfect Continuous',
    titleKurdish: 'دەمێ نوکە یێ تەمام یێ بەردەوام',
    category: 'Tenses (دەم)',
    level: 'B2',
    content: [
      {
        rule: 'کارێن ل ڕابردوو دەستپێکرین و هەتا نوکە یێن دچن (Action Continued to Present)',
        explanation: 'کارەک ل ڕابردوودا دەستپێکریە و ماوەیەکێ درێژ کێشایە و یێ بەردەوام بووی و هەتا نوکە ژی یێ د بەردەوامیێ دایە یان ژ تەنێ نوکە خلاس بوویە بەلێ ئەنجامێن وی یێن ل سەر چ دەرکەفتین.',
        structure: 'Subject + have/has + been + Verb-ing + Object',
        examples: [
          { en: 'I have been studying for three hours.', ku: 'سێ سەعاتە ئەز یێ بەردەوام دخوینم (هەتا نوکە ژی دخوینم).' },
          { en: 'It has been raining all night.', ku: 'هەمی شەڤ بوو یا باران دەباریت (جاددە تەڕن).' },
          { en: 'Why are you tired? Have you been running?', ku: 'من بۆچی تو یێ وەستیای؟ ئەرێ تو یێ دڕەڤی؟ (کارتێکرن د نوکە دا یا دیارە).' }
        ],
        notes: [
          'پتر هێز و گرنگیێ ددەتە سەر ماوەیێ درێژ یێ کار بکەت (Duration).',
          'دگەل پەیڤێن (for, since, all day) گەلەک دهێت.'
        ]
      }
    ]
  },
  {
    id: 'past-perfect',
    title: 'Past Perfect',
    titleKurdish: 'دەمێ بۆری یێ تەمام',
    category: 'Tenses (دەم)',
    level: 'B2',
    content: [
      {
        rule: 'کارێ بەری کارەکی د بۆری دا (Past before Past)',
        explanation: 'ئەم ڤی دەمی بکار دئینین دەمێ کو دوو کار ل ڕابردوودا یەک ل دویڤ یەک ڕوو دابن. لێرە دا ئەو کارێ بەری کارێ دی ل دەستپێکێ ڕوودایی، پێدڤییە بکەڤیتە دەمێ بۆری یێ تەمام (Past Perfect)، و بۆ کارێ دووێ پێدڤییە بۆری یێ سادە بکار بهێت.',
        structure: 'Subject + had + Verb (3rd form - Past Participle) + Object',
        examples: [
          { en: 'When I arrived at the station, the train had already left.', ku: 'دەمێ ئەز گەهشتیمە مەحەتێ، شەمەندەفەر بەری هێنگێ یا چووی (شەمەندەفەر جارێ چوو پاش ئەز گەهشتم).' },
          { en: 'She had finished her exam before the time ended.', ku: 'وێ تاقیکرنا خۆ یا ب دووماهی ئینای بەری دەم ب دووماهی بهێت.' }
        ],
        notes: [
          'بۆ هەمی بکەران (had) دهێتە بکارئینان بێ جوداهی.',
          'پەیڤێن ناڤبەر (before, after, by the time) گەلەک دهێنە بکارئینان.'
        ]
      }
    ]
  },
  {
    id: 'reported-speech',
    title: 'Reported Speech',
    titleKurdish: 'ئاخفتنا ڤەگۆهاستی',
    category: 'Advanced (پێشکەفتی)',
    level: 'C1',
    content: [
      {
        rule: 'ڤەگوهاستنا گۆتنێن کەسان (Reporting words and backshifting)',
        explanation: 'ئەم ڤی بابەتی بکار دئینین دەمێ مە بڤێت پەیڤ و ئاخفتنێن کەسەکی بگۆهێزین بۆ کەسەکێ دی، بێ کو گۆتنا وی ڕێک تێدا بکاربینین (Direct Speech). د ڤی حالەتی دا پێدڤی یە دەمێ ڕستێ گاڤەکێ بەر ب بۆری ڤە پاش بکەشی (Backshift).',
        structure: 'Direct: "I am happy" -> Reported: He said that he was happy.',
        examples: [
          { en: 'She said, "I like ice cream." -> She said that she liked ice cream.', ku: 'وێ گۆت: "ئەز بستەنی یێ حەز دکەم" -> وێ گۆت کو ئەو ژ بستەنیێ حەز دکەت.' },
          { en: 'He said, "I have lost my watch." -> He said that he had lost his watch.', ku: 'وی گۆت کو وی جەمژمێر مۆریا خۆ بەرزە کربوو.' }
        ],
        notes: [
          'دەمێ نوکە یێ سادە دبیتە بۆری یێ سادە.',
          'دەمێ نوکە یێ تەمام دبیتە بۆری یێ تەمام.'
        ]
      }
    ]
  },
  {
    id: 'relative-clauses',
    title: 'Relative Clauses (Who, Which, That)',
    titleKurdish: 'ڕستێن گرێدایی',
    category: 'Advanced (پێشکەفتی)',
    level: 'B2',
    content: [
      {
        rule: 'پێدانا زانیاریێن زێدە ل سەر ناڤی (Who / Which / That)',
        explanation: 'ڕستێن گرێدایی (Relative Clauses) بکار دهێن بۆ پێکگەهاندنا زانیاریێن گرنگ ل سەر ناڤەکێ دیارکری د ڕستێ دا، بێ کو پێدڤی بکەت ڕستەکا جدید و جودا دەستپێ بکەین:\n\n١. (Who): بۆ کەس و مرۆڤان دهێت.\n٢. (Which): بۆ تشت، گیانەوەر، و بیرۆکەیان دهێت.\n٣. (That): بۆ هەردوو د حالەتێن نەفەرمی و گرنگ دا دهێت.',
        structure: 'Noun + Relative Pronoun + Clause',
        examples: [
          { en: 'The teacher who helped me was very kind.', ku: 'ئەو مامۆستایێ هاریکاریا من کری گەلەک یێ دلسۆز و دلۆڤان بوو.' },
          { en: 'This is the car which my father bought last month.', ku: 'ئەڤە ئەو ترۆمبێلە یا بابێ من هەیڤا بووری کڕی.' },
          { en: 'I found a wallet that had no money inside.', ku: 'من جزدانەک دیت کو هیچ پارە تێدا نینن.' }
        ],
        notes: [
          'پەیڤا (Whose) ژی هەیە کو بۆ مالکیەت و خۆدانێ تشتی دهێت.',
          'دشێین ئامرازی لایبەین ئەگەر مفعول دهاتە سەر، وەکی: The book I read (نەک The book which I read).'
        ]
      }
    ]
  },
  {
    id: 'countable-nouns',
    title: 'Countable and Uncountable Nouns',
    titleKurdish: 'ناڤێن ژمار و نەژمار',
    category: 'Basics (بنیات)',
    level: 'A1',
    content: [
      {
        rule: 'جوداهیا د ناڤبەرا تشتێن ژمار و تشتێن بێ ژمار (Countable vs Uncountable)',
        explanation: 'ناڤ د زمانێ ئنگلیزی دا دابەش دبنە سەر دوو بەشان:\n\n١. ناڤێن ژمارکرنێ (Countable): ئەو ناڤن یێن کو ئەم دشێین بژمێرین و دشێن ببنە تاک یان کۆم، وەکی: book -> books.\n٢. ناڤێن بێ ژمار (Uncountable): تشتێن کو ناهێنە حژمارکرن، وەکی شلەمەنی، خۆارنێن مفرەد، یان بیرۆکێن نەخۆست پەیڤ، وەکی: water, money, information.',
        structure: 'Countable: Singular or Plural with s/es. Uncountable: Only singular forms.',
        examples: [
          { en: 'I have three apples in the bag.', ku: 'سێ سێڤ د ناڤ کانتۆرێ من دا هەنە (Apples حژمار دەینە).' },
          { en: 'Could you give me some advice, please?', ku: 'ئەرێ دشێی گازندەکا ژمارەیی یان دەمەکا شیرەتان بدەیە من دۆستێ من؟ (Advice ناهێتە حژمارکرن).' },
          { en: 'There is a lot of milk left inside the bottle.', ku: 'گەلەک شیر یێ ل ناڤ بتلێ دا مایی (Milk شلەمەنیە و ناهێتە حژمارکرن).' }
        ],
        notes: [
          'چ جاران پیتا (s) یا کۆمێ ناکەڤیتە سەر ناڤێن بێ ژمار، بکارنەئینه: waters ❌.',
          'دگەل ناڤێن بێ ژمار پەیڤێن (Much, Little, Some) دهێن.'
        ]
      }
    ]
  },
  {
    id: 'used-to',
    title: 'Used to',
    titleKurdish: 'عاداتێن بۆری (Used to)',
    category: 'Basics (بنیات)',
    level: 'A2',
    content: [
      {
        rule: 'بکارئینانا عادەتێن بەرێ یێن کو خلاس بووین (Past Habits / States)',
        explanation: 'ئەم (Used to) بکار دئینین دەمێ مە بڤێت خزمەتەکێ بکەین ل سەر کار یان عادەتەکێ مە یێ بەرێ، یێ کو مە گەلەک ب بەردەوامی د ڕابردوودا دکر بەلێ نوکە د ژیانا مە دا خلاس بیە و د نوکە دا نا دکەین.',
        structure: 'Subject + used to + Verb (base form)',
        examples: [
          { en: 'I used to smoke, but I stopped last year.', ku: 'من جاران جگارە دکێشان، بەلێ پار من یا ب تەمامی هێلای.' },
          { en: 'She used to live in London when she was a student.', ku: 'ئەو جاران ل لەندەنێ دژیا دەمێ ئەو مژیلی قوتابخۆنێ بووی.' },
          { en: 'We used to go to the park every Sunday.', ku: 'ئەم جاران هەر ڕۆژا یەکشەمبێ دچووینە باخچەی (بۆری بەلێ نوکە ناچین).' }
        ],
        notes: [
          'بۆ نەرێکرنێ ئەم بابەتێ (did not use to) پێ ددەن، تێبینی کو (d) ل سەر use لادەبەن.',
          'پشتی used to فعل هەمیشە ب شێوەیێ سادە و چاڤکانی دهێت.'
        ]
      }
    ]
  },
  {
    id: 'modals-must-should',
    title: 'Must and Should',
    titleKurdish: 'ئەرک و ئامۆژگاری (Must and Should)',
    category: 'Modals (فعلێن هاریکار)',
    level: 'B1',
    content: [
      {
        rule: 'نەچاری و رێنمایی (Obligation vs Advice)',
        explanation: 'هەردوو بۆ گوتنا بابەتەکێ گرنگ دهێن، بەلێ هێزا وان گۆهرینێ دکەت:\n\n١. (Must): بۆ ئەرک، قانون، یان گەلەک یا پێویست و نەچاری بکار دهێت، و ئەگەر دڕوست نەبیت سزا هەیە.\n٢. (Should): بۆ ئامۆژگاری، رێنمایی و لایەنێن ئەخلاقی یێن نەرم دهێت.',
        structure: 'Subject + must / should + Verb (base form)',
        examples: [
          { en: 'You must stop when the red light is on.', ku: 'پێدڤی یە تو ڕاوەستی دەمێ گڵۆپا سۆر پێ دکەت (قانونە و یاری پێ ناهێتەکرن).' },
          { en: 'You should visit the doctor if you are sick.', ku: 'باشترە تو سەرەدانا دکتۆری بکەی ئەگەر تو یێ نەساخ بی (ئامۆژگاری).' },
          { en: 'Students must not cheat in exams.', ku: 'ناچێبیت و قانونە کو قوتابی د تاقیکرنان دا فێلبازیێ بکەن (مەنعە).' }
        ],
        notes: [
          'کورت برینا (should not) دبیتە (shouldn\'t).',
          'نەرێکرنا (must not) رامانا قەدەغەکرنێ ددەت (Prohibition).'
        ]
      }
    ]
  },
  {
    id: 'question-tags',
    title: 'Question Tags',
    titleKurdish: 'پرسیارێن کورت ل دووماهیێ',
    category: 'Advanced (پێشکەفتی)',
    level: 'C1',
    content: [
      {
        rule: 'پشتڕاستکرنا مەلۆماتان (Confirming Information)',
        explanation: 'ئەم ڤان پرسیارێن بچووک (Question Tags) ل دووماهییا ڕستان زێدە دکەین ژ بۆ پشتڕاستکرن یان دڵنیابوون ژ بابەتەکێ، یان ژی بۆ ڕازیبوونا کەسێ بەرامبەر.\n\nڕێسایێ سەرەکی: ئەگەر ڕستە یا موجەب بیت، پرسیارا کورت دبیتە سالبی، و ئەگەر ڕستە یا سالبی بیت، پرسیار دبیتە موجەب.',
        structure: 'Positive sentence, negative tag? / Negative sentence, positive tag?',
        examples: [
          { en: 'You speak English, don\'t you?', ku: 'تو ب ئنگلیزی دئاخڤی، وەک یە؟ (ڕستە موجەب بوو، تاگ بوو سالبی).' },
          { en: 'She isn\'t here today, is she?', ku: 'ئەو ئەڤڕۆ ل ڤێرێ نینە، ئەرێ هۆسایە؟' },
          { en: 'They left early, didn\'t they?', ku: 'ئەو زوو چوونە دەر، هۆسا نینە؟' }
        ],
        notes: [
          'ئەم فعلێن هاریکار یێن د ڕستێ دا بکار دئینین بۆ چێکرنا تاگی (وەکی is -> isn\'t, can -> can\'t).',
          'ئەگەر هیچ فعلەکا هاریکار نەبیت د ڕستێ دا، ئەم (do, does, did) بکار دئینین.'
        ]
      }
    ]
  },
  {
    id: 'adverbs-frequency',
    title: 'Adverbs of Frequency',
    titleKurdish: 'ئاڤەلکارێن ڕێژەیی (Always, Usually, Never)',
    category: 'Basics (بنیات)',
    level: 'A1',
    content: [
      {
        rule: 'دیارکرنا چاند جاران (How Often Things Happen)',
        explanation: 'ئەم ڤان پەیڤان بکار دئینین بۆ دیارکرن و وەڵامدانەوەیا پسیارا "چەند جاران دەربس دبیت یان ڕووددەت" د ژیانێ دا. چەندین ئاست هەنە:\n\n- (Always): ١٠٠٪ هەر دەم.\n- (Usually): ٨٠٪ گەلەک جاران.\n- (Often): ٦٠٪ زۆربەیا جاران.\n- (Sometimes): ٤٠٪ جاران.\n- (Never): ٠٪ هیچ جاران.',
        structure: 'Subject + Adverb of Frequency + Main Verb   OR   Subject + Verb to be + Adverb',
        examples: [
          { en: 'I always wake up early in the morning.', ku: 'ئەز هەمیشە و هەر دەم سپێدێ زوو ژ خەو ڕادبم (١٠٠٪).' },
          { en: 'He is never late for school.', ku: 'ئەو چ جاران بۆ قوتابخۆنێ پاش ناهێت (دکەڤیتە پشتی is).' },
          { en: 'We sometimes eat dinner outside.', ku: 'ئەم جاران خوارنا ئێڤاری ل دەرڤە دخۆین (٤٠٪).' }
        ],
        notes: [
          'جهێ وان هەر دەم دکەڤیتە بەری فعلێ سەرەکی، بەلێ پشتی فعلێن (be) دهێن.'
        ]
      }
    ]
  },
  {
    id: 'superlatives',
    title: 'Superlatives',
    titleKurdish: 'ئاڤەڵناڤێن هەفت بلند',
    category: 'Basics (بنیات)',
    level: 'A2',
    content: [
      {
        rule: 'هەلبژارتنا باشترین یان سەرەکیترین (Comparing 3+ Things)',
        explanation: 'ئەم ئاڤەلناڤێن هەری سەرەتر و بەرزتر (Superlatives) بکار دئینین بۆ بەراوردکرنا سێ تشتان یان زێدەتر، دا کو دیار بکەین کو ئێک ژ وان د لووتکە یان نزمترین لووتکا سیفەتەکی دایە.',
        structure: 'The + Adjective-est   OR   The + most + Long Adjective',
        examples: [
          { en: 'He is the tallest student in our school.', ku: 'ئەو بلندترین قوتابی یە د هەر مەکرو قوتابخۆنا مە دا.' },
          { en: 'This is the most expensive car in the world.', ku: 'ئەڤە گرانبهاترین ترۆمبێلە ل سەرانسەری جیهانێ.' },
          { en: 'Friday is the best day of the week.', ku: 'ڕۆژا ئینی خۆشترین ڕۆژا حەفتیێ یە (Good دبیتە best).' }
        ],
        notes: [
          'هەر دەم پێویستە ئەم پەیڤا (the) هاڤێژینە ناسنامەیا سیفەتی.',
          'بۆ سیفەتێن کورت (-est) زێدە دکەین، بۆ یێن درێژ (the most) پێ ددەن.'
        ]
      }
    ]
  },
  {
    id: 'conditionals-2',
    title: 'Second Conditional',
    titleKurdish: 'مەرجێ دووێ',
    category: 'Conditionals (مەرج)',
    level: 'B1',
    content: [
      {
        rule: 'خەیالکرنا کارێن دیارنەکری د نوکە دا (Imaginary / Hypothetical Situations)',
        explanation: 'بۆ ئاخفتنێ ل سەر تشتێن خەیالی، بنچینەیی، یان نە بنەڕەتی د دەمێ نوکە یان ل پاشەڕۆژێ دا، ئەو کارێن کو ڕێژەیا ڕوودانا وان گەلەک کێم بیت یان مۆحاڵ و مەحاڵ بن.\n\nوەکی دەمێ مرۆڤ دبێژیت: "ئەگەر من گەلەک پارە هەبان، دا ترۆمبێلەکا فرۆکەیی کڕم" (بەلێ د ڕاستی دا نوکە نینە).',
        structure: 'If + Past Simple, .... Subject + would + Verb (base form)',
        examples: [
          { en: 'If I won the lottery, I would travel around the world.', ku: 'ئەگەر من د لۆتەریێ دا ببەم، دا ل سەرانسەری جیهانێ گەشم (خەیالە).' },
          { en: 'If I were you, I would take this great job offer.', ku: 'ئەگەر ئەز ل جهێ تە بام، دا ڕازی ببم ل سەر ڤی کاری (ئەز چ جاران نابمە تو).' },
          { en: 'She would pass if she studied more, but she does not.', ku: 'ئەو دا دەرچیت ئەگەر وێ زێدەتر خویندبا، بەلێ ئەو ناخوینیت.' }
        ],
        notes: [
          'د پشکا مەرجی دا ژ بەر ڕێزمانا لایک ئەدەبی، ئەم گەلەک جاران (were) بۆ هەمی بکەران بکار دئینین (وەکی: If I were... یان If he were).',
          'بۆ وەڵامدانەوەیا پرسیارێ بکار دهێت.'
        ]
      }
    ]
  },
  {
    id: 'reflexive-pronouns',
    title: 'Reflexive Pronouns',
    titleKurdish: 'جێناڤێن ڤەگێڕ (Myself, Yourself)',
    category: 'Basics (بنیات)',
    level: 'A2',
    content: [
      {
        rule: 'بکەر و مفعول هەردوو ئێکن (Subject is Same as Object)',
        explanation: 'ئەم جێناڤێن ڤەگێڕ بکار دئینین دەمێ کو بکەری و ئەنجامدەرێ کاری ڕێک مفعولێ کارتێکرنا کاری بخۆ بیت. یانی کار دزڤڕیت ل سەر مروڤی بخۆ.',
        structure: 'Singular: -myself, -yourself, -himself, -herself, -itself. Plural: -ourselves, -yourselves, -themselves.',
        examples: [
          { en: 'I cut myself while cooking dinner today.', ku: 'من دەستێ خۆ بڕی دەمێ ئەڤڕۆ مژویلی چێکرنا خوارنێ بووم (من ب دەستێ خۆ زیان دا خۆ).' },
          { en: 'They built this beautiful garden themselves.', ku: 'وان ب خۆ ئەڤ باخچەیێ جوان ئاڤاکر بێ هێژا.' },
          { en: 'We should look after ourselves.', ku: 'پێدڤی یە ئەم هایب خۆ هەبین و چاڤدێرییا خۆ بکەین.' }
        ],
        notes: [
          'دشێت بکار بهێت بۆ تەئکیدکرنێ ل سەر تشتی، بۆ نموونە: I saw the president himself.'
        ]
      }
    ]
  },
  {
    id: 'possessives',
    title: 'Possessives (\'s, My, Mine)',
    titleKurdish: 'خۆدانایەتی و مالکیەت',
    category: 'Basics (بنیات)',
    level: 'A1',
    content: [
      {
        rule: 'دیارکردنا ڕەها یا جهێ خۆدانی (Showing Ownership)',
        explanation: 'بۆ دیارکرنا کو ئەڤ تشتە یێ کێ یە، سێ ڕێکێن سەرەکی هەنە:\n\n١. جێناڤێن سیفەتی (Possessive Adjectives): دکەڤنە بەری ناڤی: my, your, his, her, its, our, their.\n٢. جێناڤێن کێم کێم (Possessive Pronouns): ب تنێ دکەڤن بێ ناڤ: mine, yours, his, hers, ours, theirs.\n٣. ڕێسا دروستکرن ب پیتا (\'s): بۆ کەسپە و ناڤان: Jack\'s car.',
        structure: 'Possessive Adjective + Noun   OR   Noun + is + Possessive Pronoun',
        examples: [
          { en: 'This is my notebook. / This notebook is mine.', ku: 'ئەڤە دەفتەرا منە. / ئەڤ دەفتەرە یا منە.' },
          { en: 'Where is Azat\'s laptop?', ku: 'کۆمپیۆتەرێ ئازادی ل کیدەرێ یە؟' },
          { en: 'The green house is theirs.', ku: 'خانیێ کەسک یێ وانە.' }
        ],
        notes: [
          'بۆ ناڤێن کۆم ئەوێن پێشتر ب پیتا s دووماهی هاتین، تەنێ نیشانا فاریزێ ل سەر s ددانین (\') وەکی: students\' books.'
        ]
      }
    ]
  },
  {
    id: 'gerunds-infinitives',
    title: 'Gerunds and Infinitives',
    titleKurdish: 'چادر و فعلێن بێ و گۆهرین',
    category: 'Advanced (پێشکەفتی)',
    level: 'B2',
    content: [
      {
        rule: 'پەیڤین و پێکهاتن د زمان دا (Verb + -ing vs Verb + to-infinitive)',
        explanation: 'ل زمانێ ئنگلیزی دا، هندەک جاران دوو فعل ل دویڤ یەک د ڕستێ دا دکەڤن. ئەگەر کارێ ئێکێ بۆ تشتەکی هاتە دیارکرن، کارێ دووێ پێدڤییە یان ب شێوەیێ (Gerund - ing) بهێت یان ب شێوەیێ (Infinitive - to + verb).\n\nهەڵبژارتنا ڤان هەردووکان ب تەمامی دکەڤیتە سەر کارێ ئێکێ یێ سەرەکی کو کا ڕێک ل دویڤ کیژان جۆر دا دهێت.',
        structure: 'Subject + Verb + -ing   OR   Subject + Verb + to + base verb',
        examples: [
          { en: 'I enjoy reading books in a quiet place.', ku: 'ئەز ماسی چێژێ ژ خواندنا پەرتووکان وەردگرم ل جهەکێ بێ دەنگ (Enjoy ل دویڤ خۆ ing زێدە دکەت).' },
          { en: 'We decided to buy a new house next year.', ku: 'مە بڕیار دا کو سالا بهێت خانیەکێ نوو بکڕین (Decide پەیڤا to پێدڤی دکەت).' },
          { en: 'She promised to help her sister.', ku: 'وێ بەڵێنی دا کو هاریکاریا خوشکا خۆ بکەت.' }
        ],
        notes: [
          'هندەک فعل هەردوو دگەل دهێن وەکی (like, start) بێ کو جوداهیەکا گەلەک گرنگ دروست ببیت.',
          'بۆ نەرێکرنێ دهێتە نڤیسین: not to verb یان not verb-ing.'
        ]
      }
    ]
  },
  {
    id: 'modals-may-might',
    title: 'May and Might',
    titleKurdish: 'مومکن کێش و گومان',
    category: 'Modals (فعلێن هاریکار)',
    level: 'B1',
    content: [
      {
        rule: 'نیشاندانا ڕاددەیێ ڕاستیێ (Possibility & Deduction)',
        explanation: 'ئەم (May) و (Might) بکار دئینین بۆ دیارکرنا ئەگەر یان گومانا کارەکی د نوکە یان ل پاشەڕۆژێ دا، لێرە دا گومانا (Might) کێمترا ژ یا (May) ل ڕوودانێ دا.',
        structure: 'Subject + may / might + Verb (base form)',
        examples: [
          { en: 'It may rain later, take your umbrella.', ku: 'مومکنە ببارێ باران کێمەکا دی، چەترا خۆ دگەل ببە.' },
          { en: 'She might come to the meeting, but she is busy.', ku: 'دبیت ئەو بهێتە جڤینێ، بەلێ یا مژویلە (ئەگەر یێ ژ نزم بوویی).' },
          { en: 'I might travel on Monday if I get my visa.', ku: 'دبیت ڕۆژا دووشەمبێ گەشت کەم ئەگەر ڤیزا من دەربچیت.' }
        ],
        notes: [
          'هەروەسا پەیڤا (May) بۆ مۆلەت و ئیکرامی گەلەک ب ڕێز ژی بکار دهێت، وەکی: May I come in?'
        ]
      }
    ]
  },
  {
    id: 'both-either-neither',
    title: 'Both, Either, Neither',
    titleKurdish: 'هەردوو، یان ئێک، یان ژی هیچ',
    category: 'Advanced (پێشکەفتی)',
    level: 'B2',
    content: [
      {
        rule: 'کۆنترۆلکرنا دوو ڕێکان د زمان دا (Expressing Two Options)',
        explanation: 'ئەو پەیڤێن فەرمی نە کو ئەم دگەل دوو تشت تەرخێن دکەین:\n\n١. (Both): هەردوو تشت (موجەب).\n٢. (Either ... or): یان ئەڤە یان ئەو (ئێک د ناڤبەرا دووکان دا).\n٣. (Neither ... nor): نە ئەڤە و نە ئەو (چ ژ هەردووکان نینن - سالبی).',
        structure: 'Both A and B / Either A or B / Neither A nor B',
        examples: [
          { en: 'Both Azad and Alan are studying hard.', ku: 'هەم ئازاد و هەم ئالان ب توندی و دلگەرمی دخوینن.' },
          { en: 'You can have either coffee or tea.', ku: 'تو دشێی یان قەهوێ یان چایێ ڤەخۆی (ئێک ژ هەردووکان هەلبژێرە).' },
          { en: 'Neither my father nor my brother was at home.', ku: 'نە بابێ من و نەبرایێ من ل مال بوون.' }
        ],
        notes: [
          'دگەل (Neither) پێکهات ڕستە سالبی یە، بۆیە چ جاران (not) بەردەوام ناکەین دگەل.'
        ]
      }
    ]
  },
  {
    id: 'each-every',
    title: 'Each and Every',
    titleKurdish: 'هەر ئێک، هەمی پیست',
    category: 'Basics (بنیات)',
    level: 'A2',
    content: [
      {
        rule: 'جوداهیا د ناڤبەرا گروپی و کەسی (Individual vs Group)',
        explanation: 'ئەم هەردووکان بکار دئینین بۆ بەحسکرنی تاک ژ کۆمی، بەلێ جوداهی گرنگە:\n\n١. (Each): پتر هێزی ددەتە سەر هەر تاکەک ب دروستی، خاس و تنێ ل گروپی دا (گەلەک جاران دگەل دوو تشتان ژی دهێت).\n٢. (Every): بۆ ناساندنا هەمی گروپی وەک ئێک پارچە.',
        structure: 'Each / Every + Singular Countable Noun',
        examples: [
          { en: 'Each student received a textbook.', ku: 'هەر قوتابیەکێ (جودا ب جودا) پەرتووکەک وەرگرت.' },
          { en: 'Every student must attend the lecture.', ku: 'هەمی قوتابی بلا د ئامادەبن د گۆفتارێ دا.' },
          { en: 'I go to the gym every week.', ku: 'ئەز هەر حەفتی دچمە مەشقێ (ماوەیە).' }
        ],
        notes: [
          'هەردووکان فعلەکا مفرەد (singular verb) پشتی وان دهێت، بکارنەئینه: Every student are ❌.'
        ]
      }
    ]
  },
  {
    id: 'prepositions-place',
    title: 'Prepositions of Place',
    titleKurdish: 'ئامرازێن جهی (In, At, On)',
    category: 'Basics (بنیات)',
    level: 'A2',
    content: [
      {
        rule: 'دیارکرنا جهێن فیزیکی (At, On, In for Places)',
        explanation: 'بۆ دیارکردنا هوبە و ئاراستێن جهێن فیزیکی ل زمانێ ئنگلیزی، پێدڤییە پۆلین بکەین:\n\n١. (In): ل ناڤ تشتەکێ داخراو، وەسفی، یان باژێڕ و وەڵاتان.\n٢. (On): ل سەر ڕوویەکێ فیزیکی یێ دەرڤە.\n٣. (At): ل جهەکێ دەستنیشانکری و گشتی یێ خزمەتگۆزاری.',
        structure: 'In + Country/City/Closed box, On + Surface, At + Specific point',
        examples: [
          { en: 'I live in Kurdistan.', ku: 'ئەز ل کوردستانێ دژیم (وەڵاتە).' },
          { en: 'Your phone is on the table.', ku: 'تەلەفۆنا تە ل سەر مێزێ یە (روویەکە).' },
          { en: 'I am waiting for you at the bus station.', ku: 'ئەز ل وێستگەها پاسێ یێ چاڤەڕێی تە دکەم (خالەکا دیارە).' }
        ],
        notes: [
          'تێبینی: بۆ ماشین و تەکسیان (In the car) دهێت لێ بۆ پاس و تەیاران (On the bus/plane) دهێت.'
        ]
      }
    ]
  },
  {
    id: 'conditionals-3',
    title: 'Third Conditional',
    titleKurdish: 'مەرجێ سێیێ',
    category: 'Conditionals (مەرج)',
    level: 'C2',
    content: [
      {
        rule: 'پەشیمانی و خەیال ل سەر بۆری (Regrets / Past Unreal)',
        explanation: 'ئەم مەرجێ لایێ سێیێ (Third Conditional) بکار دئینین بۆ ئاخفتنێ ل سەر تشت یان ڕوودانەکێ کو ل ڕابردوویدا ڕوو نەدایە، و ل ڤێرێ مە بڤێت خەیالا ئەنجامەکێ ب تەمامی بەروڤاژ ب ئینین، کو گەلەک جاران بۆ پەشیمانبوونێ یان گوتنا "ئەگەر وا با، دا وا بیت" بکار دهێت.',
        structure: 'If + Past Perfect, ..... Subject + would have + Verb (3rd form)',
        examples: [
          { en: 'If I had studied harder, I would have passed the final exam.', ku: 'ئەگەر من ب باشی خویندبا، با د تاقیکرنێ دا سەرکەڤم (بەلێ د ڕاستی دا من نەخویندیە و ئەز ل تاقیکرنێ بڕینم).' },
          { en: 'If we had left ten minutes earlier, we would have caught the flight.', ku: 'ئەگەر ئەم دەهـ دەقە زووتر چوباین، دا بگەهینە فرینێ.' },
          { en: 'If he had driven carefully, he wouldn\'t have had the car accident.', ku: 'ئەگەر وی ب هوردبینی دڕوومبێل کێشا با، با تووشی کارەسات نەبیت.' }
        ],
        notes: [
          'ئەڤ مەرجە تایبەتە ب تەمامی ب ژناڤچوون و بۆری و قەت ناگۆهۆڕیت د نوکە دا.',
          'دشێین (could have) یان (might have) ل جهێ (would have) ژی بکاربینین.'
        ]
      }
    ]
  },
  {
    id: 'wish-if-only',
    title: 'Wish and If only',
    titleKurdish: 'هیڤی و خۆزیک',
    category: 'Advanced (پێشکەفتی)',
    level: 'C2',
    content: [
      {
        rule: 'گۆهرینا جۆغرافی یا وەزیعەکی د زەمەنی دا (Wishes about Present & Past)',
        explanation: 'ئەم (Wish / If only) بکار دئینین بۆ دەربڕینا خۆزیکێن مە ل سەر بابەتەکی کو مە دڤێت د جودا با ژ ڕاستیێ:\n\n١. خۆزیەک ل سەر نوکە (Present Wish): دەمێ بۆری یێ سادە بکار دئینین.\n٢. پەشیمانی ل سەر ڕابردووی (Past Regret): دەمێ بۆری یێ تەمام بکار دئینین.\n٣. گازندە ل سەر نەریتی (Wishes for change): (would + verb) بکار دئینین.',
        structure: 'Wish + Past Simple (Present) / Past Perfect (Past) / would + verb (Complaints)',
        examples: [
          { en: 'I wish I had more free time now.', ku: 'خۆزیکێن من دەمەکێ زێدەترێ ڤالا هەبا نوکە (ڕاستی: نوکە مژویلم).' },
          { en: 'If only I hadn\'t eaten that street food yesterday.', ku: 'خۆزیک تەنێ من دوهی ئەو خوارنا کۆڵانێ نەخواربا (پەشیمانم چونکی زکێ من دئێشیت).' },
          { en: 'I wish it would stop raining!', ku: 'خۆزیک باران بارین یا ڕاوەستیا با! (گازندەیە ل سەر بەردەوامیا بارانێ).' }
        ],
        notes: [
          'پەیڤا (If only) هێز و هەستا وێ هند یا پتر و ب درێژییە ژ (I wish).'
        ]
      }
    ]
  },
  {
    id: 'have-to-must',
    title: 'Have to and Must',
    titleKurdish: 'نەچاری و دەربرین (Have to and Must)',
    category: 'Modals (فعلێن هاریکار)',
    level: 'B1',
    content: [
      {
        rule: 'تیگەهشتنا دروست د ناڤبەرا پێڕەوی و بریارا کەردا (External vs Internal Obligation)',
        explanation: 'هەردوو بۆ نەچاریێ و ڕاستیەکا ب هێز مە ددەنە ڕاوەستاندن بەلێ گەلەک گرنگە جوداهیا وان بزانی:\n\n١. (Have to): نەچاری برێکەکا ژ دەرڤە هاتیە وەک یاسا، قانون، یان رێنمایێن کارۆی فەرمی (دەرەکی).\n٢. (Must): گوزارشتەکا ناڤخۆیی یە، هەست یان بڕیارەکا مرۆڤی بخۆیە بۆ کارەکی (ناڤخۆیی).',
        structure: 'Subject + have to / must + Verb (base form)',
        examples: [
          { en: 'I have to wear a safety helmet at the construct location.', ku: 'پێدڤی یە ئەز کلاوێ پاراستنێ ل سەر کارێ بیناسازی بپۆشم (قانونە و یاری پێ ناهێت کرنا).' },
          { en: 'I must call my sister tonight to check on her.', ku: 'پێدڤی یە پیرۆز ئەڤ شەڤە تەلەفۆنێ بۆ خوشکا خۆ بکەم (بڕیارا من بخۆیە).' },
          { en: 'You don\'t have to pay, the entry is completely free.', ku: 'پێویست ناکەت تو پارەی بدەی، چوونە دەر ب تەمامی بێ بەرامبەرە (بێ پیلانە).' }
        ],
        notes: [
          'تێبینیەکا گەلەک ئەلتمۆس: د نەفیکرنێ دا (Don\'t have to) رامانا "نە پێدڤی کەت" د دەت، لێ (Must not) رامانا "قەدەغە و حەرامە" کەت.'
        ]
      }
    ]
  },
  {
    id: 'linking-words',
    title: 'Linking Words',
    titleKurdish: 'پەیڤێن گرێدانێ (Although, Despite, etc.)',
    category: 'Advanced (پێشکەفتی)',
    level: 'B2',
    content: [
      {
        rule: 'گرێدانا دوو بیرۆکێن بەروڤاژ (Contrast Connectors)',
        explanation: 'ئەم ڤان پەیڤێن گرێدەر بکار دئینین دا کو دوو بیرۆکە یان کارێن بەروڤاژی ئێکتری د ڕستەکە دا کۆم بکەین د شێوازەکێ جوان و رەوان دا:\n\n١. (Although / Even though): ل دویڤ خۆ پێدڤی ب ڕستەکا تەمام (Subject + Verb) هەیە.\n٢. (Despite / In spite of): ل دویڤ خۆ تەنێ ناڤەک (Noun) یان کارەکێ (Verb + ing) وەردگرن.',
        structure: 'Although + Clause , .... OR Despite + Noun/Gerund',
        examples: [
          { en: 'Although it was raining heavily, we enjoyed our long walk.', ku: 'هەرچەندە بارانەکە بهێز دەباری، مە چێژ ژ پیاسەکرنا خۆ یا درێژ وەرگرت.' },
          { en: 'Despite studying for days, he could not pass the interview.', ku: 'سەرەڕای چەندین ڕۆژێن خواندنێ، وی نەشیا د چاوپێکەفتنێ دا دەرچیت.' },
          { en: 'They went to the beach in spite of the cold weather.', ku: 'ئەو چوونە سەر بەحرێ سەرەڕای سەرمایا کەشوهەوای.' }
        ],
        notes: [
          'نابێت چ جاران دگەل (Although) پەیڤا (but) بکاربهێنین د هەمان ڕستە دا.'
        ]
      }
    ]
  },
  {
    id: 'quantifiers',
    title: 'Quantifiers',
    titleKurdish: 'پەیڤێن چەندایەتیێ (All, Most, Some, Any)',
    category: 'Basics (بنیات)',
    level: 'A2',
    content: [
      {
        rule: 'دیارکردنی ڕێژەیا تشتان د قسەکردنێ دا (Expressing Quantity)',
        explanation: 'ئەم ڤان ژمارکەرێن چەندایەتی د زمانێ مە دا بکار دئینین بۆ دیارکردنی چەد و چی تشت د مژارەکە دا هەنە ب جوانی:\n\n- (All): هەمی ب دروستی (١٠0٪).\n- (Most): زۆربەی تشتان (٨٠٪).\n- (Some): هندەک (بۆ ڕستێن ئەرێنی).\n- (Any): چ تشت یان هیچ (بۆ پسیار و ڕستێن نەرێنی).\n- (None): چ نینە (٠٪).',
        structure: 'Quantifier + Noun',
        examples: [
          { en: 'All workers must attend the main factory safety check.', ku: 'کیژا هەمی کرێکار بلا ئامادە د تاقیکرنا پاراستنا فەرمی یا کارگەهێ دا بن.' },
          { en: 'I have some books on learning English.', ku: 'من هندەک پەرتووک ل سەر فێربوونا زمانێ ئنگلیزی هەنە.' },
          { en: 'Do you have any money in your pocket?', ku: 'ئەرێ چ پارە د بەهرا تە دا هەنە؟ (پرسیارە).' }
        ],
        notes: [
          'پەیڤا (Any) گەلەک جاران د ڕستێن سالبی دا دهێت، وەکی: I don\'t have any money.'
        ]
      }
    ]
  }
];
