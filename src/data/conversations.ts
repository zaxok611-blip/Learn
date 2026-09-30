import { Conversation } from '../types';

export const conversations: Conversation[] = [
  // A1 Level
  {
    id: 'a1-1',
    level: 'A1',
    title: 'Meeting a New Friend at School',
    titleKurdish: 'دیدارکرنا هەڤالەکێ نوو ل قوتابخانێ',
    dialogue: [
      { speaker: 'Saman', text: 'Hello! Good morning. Are you a new student here?', translation: 'سڵاڤ! سپێدە باش. ئەرێ تو قوتابییەکێ نوویی ل ڤێرە؟' },
      { speaker: 'Alan', text: 'Hi! Yes, I am. Today is my first day. My name is Alan.', translation: 'سڵاڤ! بەلێ، ئەزم. ئەڤرۆ رۆژا من یا ئێکێ یە. ناڤێ من ئالانە.' },
      { speaker: 'Saman', text: 'Welcome to our school, Alan! I am Saman. Nice to meet you.', translation: 'ب خێر بێی بۆ قوتابخانا مە، ئالان! ئەز سامنم. ب دیتنا تە کەیفخۆشم.' },
      { speaker: 'Alan', text: 'Nice to meet you too, Saman. This school is very big.', translation: 'ئەز ژی ب دیتنا تە کەیفخۆشم، سامن. ئەڤ قوتابخانە زۆر یا مەزنە.' },
      { speaker: 'Saman', text: 'Yes, it is. Where are you from, Alan?', translation: 'بەلێ، وەسا یە. تو ژ کیدەرێی، ئالان؟' },
      { speaker: 'Alan', text: 'I am from Duhok. My family moved here last week. And you?', translation: 'ئەز ژ دهۆکێم. خێزانا من حەفتیا بۆری هاتنە ڤێرە. پا تو؟' },
      { speaker: 'Saman', text: 'I am from Zakho. I have lived here for five years.', translation: 'ئەز ژ زاخۆم. من پێنج سالە ل ڤێرە دژیم.' },
      { speaker: 'Alan', text: 'That is cool. How old are you, Saman?', translation: 'ئەفە زۆر باشە. تو چەند سالی، سامن؟' },
      { speaker: 'Saman', text: 'I am 16 years old. What about you?', translation: 'ئەز ١٦ سالم. پا تو؟' },
      { speaker: 'Alan', text: 'I am 16 too! We are the same age.', translation: 'ئەز ژی ١٦ سالم! مە هەمان ژی هەیە.' },
      { speaker: 'Saman', text: 'Great! What class do you have now?', translation: 'زۆر باشە! نوکە تو دێ چییە کیژان پۆلێ (دەرسێ)؟' },
      { speaker: 'Alan', text: 'I have English class. Do you know where the classroom is?', translation: 'من وانەیا ئنگلیزیێ هەیە. تو دزانی پۆل ل کیدەرێ یە؟' },
      { speaker: 'Saman', text: 'Yes! I also have English now. We can go together.', translation: 'بەلێ! ئەز ژی نوکە دێ چمە وانەیا ئنگلیزیێ. ئەم دکارین پێکڤە بچین.' },
      { speaker: 'Alan', text: 'Thank you so much! That is very helpful.', translation: 'زۆر سوپاس بۆ تە! ئەڤە گەلەک هاریکارییە.' },
      { speaker: 'Saman', text: 'You are welcome. What do you like to do in your free time?', translation: 'سەرچاڤا. تو حەز ژ چ دکەی بکەی د دەمێ بەتاڵیێ دا؟' },
      { speaker: 'Alan', text: 'I love playing football and playing video games.', translation: 'ئەز حەز ژ یارییا تەپەپێ و یاریێن ڤیدیۆیی دکەم.' },
      { speaker: 'Saman', text: 'Awesome! We play football every Friday. You can join us.', translation: 'نایابە! ئەم هەر ئەینی یارییا تەپەپێ دکەین. تو دکاری پشکدار ببی دگەل مە.' },
      { speaker: 'Alan', text: 'I would love that! Let us go to class now.', translation: 'دێ گەلەک حەز لێ کەم! وەرە ئەم نوکە بچینە پۆلێ.' }
    ],
    vocabulary: [
      { word: 'Morning', translation: 'سپێدە' },
      { word: 'First', translation: 'ئێکێ / یەکەم' },
      { word: 'School', translation: 'قوتابخانە' },
      { word: 'Together', translation: 'پێکڤە' },
      { word: 'Same age', translation: 'هەمان ژی / هەمان تەمەن' },
      { word: 'Join', translation: 'پشکداریکردن / تێکەل بوون' }
    ]
  },
  {
    id: 'a1-2',
    level: 'A1',
    title: 'At the Cafe: Ordering Food',
    titleKurdish: 'ل کافێیێ: داخوازکرنا خوارنێ',
    dialogue: [
      { speaker: 'Waiter', text: 'Hello, welcome to our cafe! Here is the menu.', translation: 'سڵاڤ، ب خێر بێی بۆ کافێیا مە! ئەڤە لیسیتا خوارنانە (مێنیو).' },
      { speaker: 'Customer', text: 'Thank you. What do you recommend?', translation: 'سوپاس. تو چ پێشنیار دکەی (دبێژی چی بخۆم)؟' },
      { speaker: 'Waiter', text: 'Our chicken sandwich and chocolate cake are very good.', translation: 'ساندویچا مەیا مریشکێ و کێکا چکلێتێ گەلەک د خۆشن.' },
      { speaker: 'Customer', text: 'Hmm, I am very hungry. I will take the chicken sandwich, please.', translation: 'همم، ئەز زۆر یێ برسی مە. ئەز دێ ساندویچا مریشکێ بەم، بێ زەحمەت.' },
      { speaker: 'Waiter', text: 'Excellent choice. Would you like some fries with that?', translation: 'هەلبژارتنەکا نایابە. ئەرێ دخوازی هندەک پەتاتێن سۆرکری دگەل بن؟' },
      { speaker: 'Customer', text: 'Yes, please. I love fries.', translation: 'بەلێ، بێ زەحمەت. ئەز حەز ژ پەتاتێن سۆرکری دکەم.' },
      { speaker: 'Waiter', text: 'What would you like to drink?', translation: 'دێ حەز کەی چ ڤەخۆی؟' },
      { speaker: 'Customer', text: 'Do you have fresh orange juice?', translation: 'ئەرێ شەربەتا پرتەقالێ یا فرێش هەوە یا هەی؟' },
      { speaker: 'Waiter', text: 'Yes, we make it fresh every morning. One orange juice?', translation: 'بەلێ، ئەم هەر سپێدە ب فرێشی چێدکەین. ئێک شەربەتا پرتەقالێ؟' },
      { speaker: 'Customer', text: 'Yes. And after the meal, I want a cup of hot tea.', translation: 'بەلێ. و پشتی خوارنێ، ئێک کوپێ چایێ یا گەرم من دڤێت.' },
      { speaker: 'Waiter', text: 'Perfect. Do you want sugar with your tea?', translation: 'زۆر باشە. تە شەکر دگەل چایێ دڤێت؟' },
      { speaker: 'Customer', text: 'Just a little bit of sugar, please.', translation: 'بتنێ کێمەکا شەکرێ، بێ زەحمەت.' },
      { speaker: 'Waiter', text: 'Okay. Your food will be ready in ten minutes.', translation: 'باشە. خوارنا تە دێ د دەهـ خولەکان دا حازر بیت.' },
      { speaker: 'Customer', text: 'Thank you! Oh, how much is the total?', translation: 'سوپاس بۆ تە! ئۆهـ، کوژمێ گشتی دێ چەند بیت؟' },
      { speaker: 'Waiter', text: 'The sandwich, fries, juice, and tea will be 15 dollars.', translation: 'ساندویچ، پەتاتە، شەربەت و چا دێ بنە ١٥ دۆلار.' },
      { speaker: 'Customer', text: 'Here is 20 dollars. Keep the change.', translation: 'ئەڤە ٢٠ دۆلارن. باقیێ دراڤی بۆ خۆ ببە (وەک بەخشیش).' },
      { speaker: 'Waiter', text: 'Thank you very much! Have a great meal.', translation: 'گەلەک سوپاس! خوارنەکا خۆش بخۆی.' }
    ],
    vocabulary: [
      { word: 'Menu', translation: 'لسیتا خوارنان / مێنیو' },
      { word: 'Recommend', translation: 'پێشنیارکرن' },
      { word: 'Hungry', translation: 'برسی' },
      { word: 'Fresh', translation: 'فرێش / تازە' },
      { word: 'Meal', translation: 'خوارن' },
      { word: 'Change', translation: 'باقیێ دراڤی' }
    ]
  },
  {
    id: 'a1-3',
    level: 'A1',
    title: 'Asking for Directions',
    titleKurdish: 'پرسیارکرن ل پاش رێیێ',
    dialogue: [
      { speaker: 'Tourist', text: 'Excuse me, where is the market?', translation: 'بێ زەحمەت، بازاری ل کیدەرێیە؟' },
      { speaker: 'Local', text: 'Go straight and turn left. It is next to the park.', translation: 'راست هەرە و لایێ چەپێ سوور ببە. یێ ل نک پارکی.' },
      { speaker: 'Tourist', text: 'Is it far from here?', translation: 'ئەرێ یێ دوورە ژ لێرە؟' },
      { speaker: 'Local', text: 'No, only five minutes away.', translation: 'نە، بتنێ پێنج خولەکان دوورە.' },
      { speaker: 'Tourist', text: 'Thank you very much!', translation: 'زۆر سوپاس!' }
    ],
    vocabulary: [
      { word: 'Market', translation: 'بازار' },
      { word: 'Straight', translation: 'راست' },
      { word: 'Left', translation: 'چەپ' },
      { word: 'Next to', translation: 'ل نک' },
      { word: 'Far', translation: 'دوور' }
    ]
  },
  {
    id: 'a1-4',
    level: 'A1',
    title: 'Talking about Family',
    titleKurdish: 'ئاخفتن ل دۆر خێزانی',
    dialogue: [
      { speaker: 'Lana', text: 'How many brothers and sisters do you have?', translation: 'تە چەند برا و خوشک یێن هەیین؟' },
      { speaker: 'Dany', text: 'I have one brother and two sisters.', translation: 'یک برایەک و دوو خوشک یێن من هەیین.' },
      { speaker: 'Lana', text: 'Do you live with your parents?', translation: 'ئەرێ تو دگەل دایک و بابێن خۆ دژی؟' },
      { speaker: 'Dany', text: 'Yes, we live in a big house.', translation: 'بەلێ، ئەم ل مالەکا مەزن دژین.' }
    ],
    vocabulary: [
      { word: 'Family', translation: 'خێزان' },
      { word: 'Brother', translation: 'برا' },
      { word: 'Sister', translation: 'خوشک' },
      { word: 'Parents', translation: 'دایک و باب' },
      { word: 'Live', translation: 'ژیان' }
    ]
  },
  {
    id: 'a1-5',
    level: 'A1',
    title: 'The Weather Today',
    titleKurdish: 'سەقایێ ئەڤرۆ',
    dialogue: [
      { speaker: 'Karwan', text: 'Is it cold outside today?', translation: 'ئەرێ ئەڤرۆ یێ سارە ل دەرڤە؟' },
      { speaker: 'Sivan', text: 'No, it is very sunny and warm.', translation: 'نە، یێ زۆر گەرم و رۆژە.' },
      { speaker: 'Karwan', text: 'Great! Let\'s go for a walk in the garden.', translation: 'باشە! وەرە دێ چینە پیاسەکێ د باخچەی دا.' },
      { speaker: 'Sivan', text: 'That is a good idea. I will bring my sunglasses.', translation: 'هزرەکا باشە. دێ چاڤکێن خۆ یێن رۆژیێ ئینم.' }
    ],
    vocabulary: [
      { word: 'Weather', translation: 'سەقا' },
      { word: 'Cold', translation: 'سار' },
      { word: 'Sunny', translation: 'رۆژ' },
      { word: 'Warm', translation: 'گەرم' },
      { word: 'Garden', translation: 'باخچە' }
    ]
  },
  {
    id: 'a1-6',
    level: 'A1',
    title: 'Asking the Time',
    titleKurdish: 'پرسیارکرنا دەمژمێرێ',
    dialogue: [
      { speaker: 'Ali', text: 'Excuse me, what time is it now?', translation: 'بێ زەحمەت، دەمژمێر چەندە نوکە؟' },
      { speaker: 'Nisrin', text: 'It is exactly half past ten.', translation: 'درۆست دەهـ و نیڤە.' },
      { speaker: 'Ali', text: 'Oh, I have a meeting at eleven o\'clock!', translation: 'ئوو، من دیدارەک یێ ل دەژمێر یازدێ!' },
      { speaker: 'Nisrin', text: 'Don\'t worry, you have plenty of time.', translation: 'خۆ نەکەتە خەم، یێ دەمەکێ زۆر تە هەی.' }
    ],
    vocabulary: [
      { word: 'Time', translation: 'دەمژمێر / دەم' },
      { word: 'Meeting', translation: 'دیدار' },
      { word: 'Worry', translation: 'خەم' },
      { word: 'Plenty', translation: 'زۆر / گەلەک' }
    ]
  },
  {
    id: 'a1-7',
    level: 'A1',
    title: 'At the Supermarket',
    titleKurdish: 'ل سوپەرمارکێتێ',
    dialogue: [
      { speaker: 'Staff', text: 'Good morning! Can I help you find something?', translation: 'سپێدە باش! دکارم هاریکاریا تە بکەم بۆ دیتنا تشتەکی؟' },
      { speaker: 'Customer', text: 'Yes, where can I find the eggs?', translation: 'بەلێ، هێک ل کیدەرێ نە؟' },
      { speaker: 'Staff', text: 'They are in aisle four, near the bread.', translation: 'ل رێکا چارێ نە، نێزیکی نانی.' },
      { speaker: 'Customer', text: 'Thanks. How much is a bottle of water?', translation: 'سوپاس. بوتڵەکێ ئاڤێ ب چەندێیە؟' },
      { speaker: 'Staff', text: 'It is only one dollar.', translation: 'بتنێ یک دۆلارە.' }
    ],
    vocabulary: [
      { word: 'Supermarket', translation: 'سوپەرمارکێت' },
      { word: 'Eggs', translation: 'هێک' },
      { word: 'Bread', translation: 'نان' },
      { word: 'Bottle', translation: 'بوتڵ' },
      { word: 'Price', translation: 'بها / نرخ' }
    ]
  },
  {
    id: 'a1-8',
    level: 'A1',
    title: 'Favorite Hobbies',
    titleKurdish: 'ئارەزوویێن خوەشتڤی',
    dialogue: [
      { speaker: 'Renas', text: 'What do you like to do in your free time?', translation: 'تە حەز ژ چی هەیە بکەی د دەمێ بەتاڵیا خۆ دا؟' },
      { speaker: 'Tara', text: 'I love reading books and swimming.', translation: 'من حەز ژ خواندنا پەرتووکان و مەلەفانیێ هەیە.' },
      { speaker: 'Renas', text: 'That sounds fun! I prefer playing football.', translation: 'ئەفە خۆش دیارە! ئەز یارییا تەپەپێ (فۆتبۆڵێ) هەلدبژێرم.' },
      { speaker: 'Tara', text: 'Football is great too. We should play together sometime.', translation: 'تەپەپێ ژی یا خۆشە. پێتڤییە جارهەکێ ئەم پێکڤە یاری بکەین.' }
    ],
    vocabulary: [
      { word: 'Free time', translation: 'دەمێ بەتاڵیا' },
      { word: 'Reading', translation: 'خواندن' },
      { word: 'Swimming', translation: 'مەلەفانی' },
      { word: 'Football', translation: 'فۆتبۆڵ / تەپەپێ' },
      { word: 'Together', translation: 'پێکڤە' }
    ]
  },
  {
    id: 'a1-9',
    level: 'A1',
    title: 'Buying a Shirt',
    titleKurdish: 'کڕینا کراسەکی',
    dialogue: [
      { speaker: 'Shopkeeper', text: 'Can I help you choose a shirt?', translation: 'دکارم هاریکاریا تە بکەم د هەلبژارتنا کراسەکی دا؟' },
      { speaker: 'Customer', text: 'Yes, do you have this blue shirt in a medium size?', translation: 'بەلێ، ئەرێ ئەڤ کراسێ شین ب قەبارێ ناڤەندی یێ هەی؟' },
      { speaker: 'Shopkeeper', text: 'Let me check... Yes, here it is.', translation: 'بلا بچم تەماشە بکەم... بەلێ، ئەڤە یە.' },
      { speaker: 'Customer', text: 'Can I try it on?', translation: 'دکارم تاقی بکەم (ل خوە بکەم)؟' },
      { speaker: 'Shopkeeper', text: 'Of course, the fitting room is over there.', translation: 'بێگومان، ژوورا خۆ گوهۆڕینێ ل وێرێیە.' }
    ],
    vocabulary: [
      { word: 'Shirt', translation: 'کراس' },
      { word: 'Blue', translation: 'شین' },
      { word: 'Size', translation: 'قەبارە' },
      { word: 'Medium', translation: 'ناڤەندی' },
      { word: 'Check', translation: 'پشکنین' }
    ]
  },
  {
    id: 'a1-10',
    level: 'A1',
    title: 'Talking about Work',
    titleKurdish: 'بەحسکرنا کاری',
    dialogue: [
      { speaker: 'Sara', text: 'What is your job?', translation: 'کارێ تە چییە؟' },
      { speaker: 'Saman', text: 'I am a teacher. I teach English.', translation: 'ئەز مامۆستام. ئەز دەرسا ئنگلیزیێ ددەم.' },
      { speaker: 'Sara', text: 'Do you like your job?', translation: 'تە حەز ژ کارێ خۆ هەیە؟' },
      { speaker: 'Saman', text: 'Yes, I like helping students learn new things.', translation: 'بەلێ، من حەز لێ هەیە هاریکاریا قوتابیان بکەم تشتێن نوو فێرببن.' }
    ],
    vocabulary: [
      { word: 'Job', translation: 'کار' },
      { word: 'Teacher', translation: 'مامۆستا' },
      { word: 'Teach', translation: 'وانەگۆتن' },
      { word: 'Students', translation: 'قوتابی' },
      { word: 'Work', translation: 'ئیش / کار' }
    ]
  },
  {
    id: 'a1-11',
    level: 'A1',
    title: 'Buying a Gift',
    titleKurdish: 'کڕینا دیاریەکێ',
    dialogue: [
      { speaker: 'Sipan', text: 'Tomorrow is my mother\'s birthday. I want to buy her a gift.', translation: 'سوبە رۆژا ژدایکبوونا دایکا منە. ئەز دخوازیم دیاریەکێ بۆ بکڕم.' },
      { speaker: 'Gozel', text: 'How about a nice watch or a necklace?', translation: 'ئەرێ دەمژمێرەکا جوان یان تەسبیحەکا ستۆی چاوایە؟' },
      { speaker: 'Sipan', text: 'A necklace is a good idea. She loves jewelry.', translation: 'نشکێنە (تەسبیحا ستۆی) هزرەکا باشە. ئەو حەز ژ زێڕ و تشتێن جوان دکەت.' },
      { speaker: 'Gozel', text: 'Let\'s go to the jewelry store together.', translation: 'وەرە دێ پێکڤە چینە دۆکانا زێڕی.' }
    ],
    vocabulary: [
      { word: 'Gift', translation: 'دیاری' },
      { word: 'Birthday', translation: 'رۆژا ژدایکبوونێ' },
      { word: 'Necklace', translation: 'تەسبیحا ستۆی' },
      { word: 'Jewelry', translation: 'زێڕ و تشتێن جوان' },
      { word: 'Store', translation: 'دۆکان' }
    ]
  },
  {
    id: 'a1-12',
    level: 'A1',
    title: 'At the Dentist',
    titleKurdish: 'ل نک نوژدارێ ددانان',
    dialogue: [
      { speaker: 'Receptionist', text: 'Good afternoon. Do you have an appointment?', translation: 'نیڤرۆ باش. ئەرێ ژڤانەکێ تە یێ هەی؟' },
      { speaker: 'Patient', text: 'Yes, at two o\'clock. My tooth hurts very much.', translation: 'بەلێ، ل دەمژمێر دووان. ددانێ من زۆر یێ دهێشیت.' },
      { speaker: 'Receptionist', text: 'Please sit down. The doctor will see you soon.', translation: 'کەرم کە روینە خارێ. نوژدار دێ نوکە تە بینیت.' },
      { speaker: 'Patient', text: 'Thank you. I am a little nervous.', translation: 'سوپاس. ئەز هندەکێ یێ ب ترس و لەرزم.' }
    ],
    vocabulary: [
      { word: 'Dentist', translation: 'نوژدارێ ددانان' },
      { word: 'Appointment', translation: 'ژڤان' },
      { word: 'Tooth', translation: 'ددان' },
      { word: 'Hurt', translation: 'هێشان' },
      { word: 'Nervous', translation: 'ب ترس / لەرزی' }
    ]
  },
  {
    id: 'a1-13',
    level: 'A1',
    title: 'Phone Call',
    titleKurdish: 'پەیوەندیا تەلەفۆنی',
    dialogue: [
      { speaker: 'Alan', text: 'Hello, can I speak to Azad, please?', translation: 'سڵاڤ، دکارم دگەل ئازادی باخڤم، بێ زەحمەت؟' },
      { speaker: 'Miryam', text: 'Azad is not home right now. Can I take a message?', translation: 'ئازاد نوکە ل مال نینە. دکارم پەیامەکێ وەرگرم؟' },
      { speaker: 'Alan', text: 'Yes, tell him to call me back later.', translation: 'بەلێ، بێژێ بلا پاشتر تەلەفۆنا من بکەتەڤە.' },
      { speaker: 'Miryam', text: 'Sure, I will tell him. Goodbye.', translation: 'بێگومان، دێ پێ بێژم. خۆزی ل تە بن.' }
    ],
    vocabulary: [
      { word: 'Speak', translation: 'ئاخفتن' },
      { word: 'Message', translation: 'پەیام' },
      { word: 'Call back', translation: 'تەلەفۆن کرنەڤە' },
      { word: 'Later', translation: 'پاشتر' }
    ]
  },
  {
    id: 'a1-14',
    level: 'A1',
    title: 'Planning a Party',
    titleKurdish: 'پلاندانان بۆ ئاهەنگەکێ',
    dialogue: [
      { speaker: 'Nisrin', text: 'Let\'s have a party on Friday night!', translation: 'وەرە دێ ئاهەنگەکێ ل شەڤا ئەینیێ گێڕین!' },
      { speaker: 'Sherzad', text: 'That is great. Who should we invite?', translation: 'ئەفە زۆر باشە. ئەم کێ داخواز بکەین؟' },
      { speaker: 'Nisrin', text: 'All our classmates and our neighbors.', translation: 'هەمی هەڤالێن مە یێن پۆلێ و جیرانێن مە.' },
      { speaker: 'Sherzad', text: 'I will buy some snacks and juices.', translation: 'ئەز دێ هندەک سووکەخوارن و شەربەتا کڕم.' }
    ],
    vocabulary: [
      { word: 'Party', translation: 'ئاهەنگ' },
      { word: 'Invite', translation: 'داخوازکرن' },
      { word: 'Neighbors', translation: 'جیران' },
      { word: 'Snacks', translation: 'سووکەخوارن' }
    ]
  },
  {
    id: 'a1-15',
    level: 'A1',
    title: 'My Daily Life',
    titleKurdish: 'ژیانا من یا رۆژانە',
    dialogue: [
      { speaker: 'Dilshad', text: 'What time do you wake up every morning?', translation: 'تو رۆژانە دەمژمێر چەند ژ خەو رادبی؟' },
      { speaker: 'Viyan', text: 'I wake up at seven o\'clock and have breakfast.', translation: 'ئەز دەمژمێر حەفتێ ژ خەو رادبم و تێشتێ دخووم.' },
      { speaker: 'Dilshad', text: 'When do you go to work?', translation: 'کەنگی تو دچییە سەر کاری؟' },
      { speaker: 'Viyan', text: 'I leave the house at eight o\'clock by bus.', translation: 'ئەز دەمژمێر هەشتێ ژ مال دەردکەڤم ب پاسێ.' }
    ],
    vocabulary: [
      { word: 'Wake up', translation: 'ژ خەو رابوون' },
      { word: 'Breakfast', translation: 'تێشت' },
      { word: 'Leave', translation: 'دەرکەفتن / بجهـ هێلان' },
      { word: 'Bus', translation: 'پاس' }
    ]
  },
  {
    id: 'a1-16',
    level: 'A1',
    title: 'At the Park',
    titleKurdish: 'ل پارکی',
    dialogue: [
      { speaker: 'Mother', text: 'The sun is shining today. Let\'s go to the park.', translation: 'رۆژ یا زەلالە ئەڤرۆ. وەرە دێ چینە پارکی.' },
      { speaker: 'Son', text: 'Can I bring my ball to play with?', translation: 'دکارم تەپەیا خۆ بینم دگەل خوە یاری پێ بکەم؟' },
      { speaker: 'Mother', text: 'Yes, and we can have a picnic under the trees.', translation: 'بەلێ، و ئەم دشێین ل بن داران سفرەیەکێ بخۆین.' },
      { speaker: 'Son', text: 'I love playing outside!', translation: 'ئەز حەز ژ یارییا ل دەرڤە دکەم!' }
    ],
    vocabulary: [
      { word: 'Shining', translation: 'درەوشان / زەلال' },
      { word: 'Ball', translation: 'تەپە / بال' },
      { word: 'Picnic', translation: 'سفرە / گەشت' },
      { word: 'Outside', translation: 'ل دەرڤە' }
    ]
  },
  {
    id: 'a1-17',
    level: 'A1',
    title: 'Favorite Food',
    titleKurdish: 'خوارنا خوەشتڤی',
    dialogue: [
      { speaker: 'Ahmed', text: 'What is your favorite meal?', translation: 'خوارنا تە یا خوەشتڤی چییە؟' },
      { speaker: 'Leyla', text: 'I really love Dolma. It is the best!', translation: 'ئەز ب راستی حەز ژ دۆلمێ دکەم. یا هەمییان چێترە!' },
      { speaker: 'Ahmed', text: 'I like Biryani more. My mother makes it very well.', translation: 'ئەز پتر حەز ژ بڕینج و بڕیانیێ دکەم. دایکا من گەلەک ب باشی چێدکەت.' },
      { speaker: 'Leyla', text: 'Traditional food is always delicious.', translation: 'خوارنا مللی (کەلتووری) هەر دەم یا ب تامە.' }
    ],
    vocabulary: [
      { word: 'Meal', translation: 'خوارن / ژەمێ خوارنێ' },
      { word: 'Favorite', translation: 'خوەشتڤی / دلخواز' },
      { word: 'Delicious', translation: 'ب تام / خۆش' },
      { word: 'Traditional', translation: 'کەلتووری / مللی' }
    ]
  },
  {
    id: 'a1-18',
    level: 'A1',
    title: 'School Trip',
    titleKurdish: 'گەشتەکا قوتابخانێ',
    dialogue: [
      { speaker: 'Teacher', text: 'Class, we are going to the museum next Tuesday.', translation: 'پۆل، ئەم دێ سێشەمبیا بهێت چینە موزەخانەیێ.' },
      { speaker: 'Student', text: 'Will we see old statues and history?', translation: 'ئەرێ ئەم دێ کەڤنەپەیکەر و دیرۆکێ بینین؟' },
      { speaker: 'Teacher', text: 'Yes, it will be very educational.', translation: 'بەلێ، دێ گەلەک یا فێربوونێ بیت.' },
      { speaker: 'Student', text: 'I am so excited for the trip!', translation: 'ئەز گەلەک یێ ب کەیفم بۆ ڤێ گەشتێ!' }
    ],
    vocabulary: [
      { word: 'Museum', translation: 'مۆزەخانە' },
      { word: 'Statues', translation: 'پەیکەر' },
      { word: 'Educational', translation: 'پەروەردەیی / فێربوون' },
      { word: 'Excited', translation: 'ب کەیف / ب شەوق' }
    ]
  },
  {
    id: 'a1-19',
    level: 'A1',
    title: 'My Best Friend',
    titleKurdish: 'باشترین هەڤالێ من',
    dialogue: [
      { speaker: 'Zana', text: 'Who is your best friend?', translation: 'باشترین هەڤالێ تە کێیە؟' },
      { speaker: 'Renas', text: 'My best friend is Roj. We have been friends for ten years.', translation: 'باشترین هەڤالێ من رۆژە. ئەم دەهـ سالە هەڤالین.' },
      { speaker: 'Zana', text: 'What do you do together?', translation: 'هووین پێکڤە چ دکەن؟' },
      { speaker: 'Renas', text: 'We study and go to the gym together.', translation: 'ئەم پێکڤە دخوینین و دچینە وەرزشێ.' }
    ],
    vocabulary: [
      { word: 'Best friend', translation: 'باشترین هەڤال' },
      { word: 'Years', translation: 'ساڵان' },
      { word: 'Study', translation: 'خواندن / دەرس خواندن' },
      { word: 'Gym', translation: 'وەرزشخانە' }
    ]
  },
  {
    id: 'a1-20',
    level: 'A1',
    title: 'New Apartment',
    titleKurdish: 'شوقەکا نوو',
    dialogue: [
      { speaker: 'Karwan', text: 'I moved to a new apartment in the city center.', translation: 'ئەز چوومە شوقەکا نوو ل سەنتەرێ باژێڕی.' },
      { speaker: 'Sivan', text: 'Is it big or small?', translation: 'یا مەزنە یان بچووکە؟' },
      { speaker: 'Karwan', text: 'It has two bedrooms and a balcony.', translation: 'دوو ژوورێن نۆستنێ و بالکۆنەکا هەی.' },
      { speaker: 'Sivan', text: 'That sounds perfect. I want to visit you soon.', translation: 'ئەفە زۆر یا باشە. ئەز دخوازیم نوکە ژ نێزیک تە ببینم.' }
    ],
    vocabulary: [
      { word: 'Apartment', translation: 'شوقە' },
      { word: 'City center', translation: 'سەنتەرێ باژێڕی' },
      { word: 'Bedroom', translation: 'ژوورا نۆستنێ' },
      { word: 'Balcony', translation: 'بالکۆن' }
    ]
  },
  {
    id: 'a1-21',
    level: 'A1',
    title: 'At the Pharmacy',
    titleKurdish: 'ل دەرمانخانێ',
    dialogue: [
      { speaker: 'Pharmacist', text: 'How can I help you today?', translation: 'ئەڤرۆ ئەز دکارم چاوە هاریکاریا تە بکەم؟' },
      { speaker: 'Customer', text: 'I have a headache and a fever. I need some medicine.', translation: 'سەرێ من یێ دهێشیت و تەتا (تبا) من یا هەی. پێتڤی ب هندەک دەرمانانم.' },
      { speaker: 'Pharmacist', text: 'Take this pill twice a day after meals.', translation: 'ڤێ حەبکێ دوو جاران رۆژانە پشتی خوارنێ بخوە.' },
      { speaker: 'Customer', text: 'Thank you. Should I drink it with water?', translation: 'سوپاس. ئەرێ بلا دگەل ئاڤێ ب نوشم؟' }
    ],
    vocabulary: [
      { word: 'Pharmacy', translation: 'دەرمانخانە' },
      { word: 'Headache', translation: 'سەرئێش' },
      { word: 'Fever', translation: 'تەت / تا' },
      { word: 'Medicine', translation: 'دەرمان' },
      { word: 'Pill', translation: 'حەب' }
    ]
  },
  {
    id: 'a1-22',
    level: 'A1',
    title: 'Weekend Plans',
    titleKurdish: 'پلانێن دوماهیکا حەفتییێ',
    dialogue: [
      { speaker: 'Hozan', text: 'What are you doing this Saturday?', translation: 'تۆ ئەڤێ شەمبییێ دێ چ کەی؟' },
      { speaker: 'Media', text: 'I am going to visit my grandparents in the village.', translation: 'ئەز دێ چمە سەرەدانا باپیر و داپیرێن خۆ ل گوندی.' },
      { speaker: 'Hozan', text: 'That sounds peaceful. I will probably stay home and clean.', translation: 'ئەفە یا ب بێهنفەرفە دیارە. ئەز دێ ل مال مینم و مالێ پاقژ کەم.' },
      { speaker: 'Media', text: 'Cleaning is also necessary. Have a productive day!', translation: 'پاقژکرن ژی یا فەرە. ب هیوایا رۆژەکا ب مفە!' }
    ],
    vocabulary: [
      { word: 'Saturday', translation: 'شەمبی' },
      { word: 'Grandparents', translation: 'باپیر و داپیر' },
      { word: 'Village', translation: 'گوند' },
      { word: 'Necessary', translation: 'فەر / پێتڤی' }
    ]
  },
  {
    id: 'a1-23',
    level: 'A1',
    title: 'At the Library',
    titleKurdish: 'ل پەرتووکخانێ',
    dialogue: [
      { speaker: 'Librarian', text: 'Welcome. Are you looking for a specific book?', translation: 'ب خێر بێی. تو ل سەر پەرتوکەکا تایبەت دگەڕیی؟' },
      { speaker: 'Student', text: 'Yes, I need a book about Kurdish history.', translation: 'بەلێ، من پەرتوکەک ل سەر دیرۆکا کوردان دڤێت.' },
      { speaker: 'Librarian', text: 'It is on the third shelf under History.', translation: 'ل رێزا سێیێ یە ل ژێر ناڤێ دیرۆکێ.' },
      { speaker: 'Student', text: 'Can I borrow it for two weeks?', translation: 'دکارم بۆ دوو حەفتییان ب قەرز ببەم؟' }
    ],
    vocabulary: [
      { word: 'Library', translation: 'پەرتووکخانە' },
      { word: 'Specific', translation: 'تایبەت' },
      { word: 'History', translation: 'دیرۆک' },
      { word: 'Borrow', translation: 'ب قەرز برن' }
    ]
  },
  {
    id: 'a1-24',
    level: 'A1',
    title: 'Opening a Bank Account',
    titleKurdish: 'ڤەکرنا حسابەکا بانکی',
    dialogue: [
      { speaker: 'Customer', text: 'I would like to open a savings account.', translation: 'من دڤێت حسابەکا پاشکەفتنێ ڤەکەم.' },
      { speaker: 'Banker', text: 'Sure. I need your ID and proof of address.', translation: 'بێگومان. پێتڤی ب ناسنامە و ناڤۆنیشانێن تە یە.' },
      { speaker: 'Customer', text: 'Here they are. Is there a monthly fee?', translation: 'ئەڤە نە. ئەرێ رسووماتێن هەیڤانە یێن هەی؟' },
      { speaker: 'Banker', text: 'No, this account is free for students.', translation: 'نە، ئەڤ حسابە بۆ قوتابیان بێ بەرامبەرە.' }
    ],
    vocabulary: [
      { word: 'Bank', translation: 'بانک' },
      { word: 'Savings', translation: 'پاشکەفتن' },
      { word: 'ID', translation: 'ناسنامە' },
      { word: 'Fee', translation: 'کرێ / رسوومات' }
    ]
  },
  {
    id: 'a1-25',
    level: 'A1',
    title: 'At the Post Office',
    titleKurdish: 'ل پۆستەخانێ',
    dialogue: [
      { speaker: 'Staff', text: 'Next please! How can I help?', translation: 'یێ دیتر، کەرەم کە! دکارم چاوە هاریکار ببم؟' },
      { speaker: 'Man', text: 'I want to send this package to Erbil.', translation: 'من دڤێت ڤێ کارتۆنێ (ئەمانەتێ) بنێرم بۆ هەولێرێ.' },
      { speaker: 'Staff', text: 'Put it on the scale, please. It weighs two kilograms.', translation: 'بێ زەحمەت بدە سەر کێشانێ. کێشا وێ دوو کیلۆنە.' },
      { speaker: 'Man', text: 'How much does it cost to send?', translation: 'کێشانا وێ ب چەندێیە؟' }
    ],
    vocabulary: [
      { word: 'Post Office', translation: 'پۆستەخانە' },
      { word: 'Package', translation: 'ئەمانەت / پارسێل' },
      { word: 'Scale', translation: 'تەرازی / کێشان' },
      { word: 'Weight', translation: 'کێش' }
    ]
  },
  {
    id: 'a1-26',
    level: 'A1',
    title: 'Doing Laundry',
    titleKurdish: 'شیشتنا جلان',
    dialogue: [
      { speaker: 'Wife', text: 'Don\'t forget to wash your white shirts today.', translation: 'ئەڤرۆ نەهێلە کراسێن خۆ یێن سپی بشۆیی.' },
      { speaker: 'Husband', text: 'I will. Should I use the washing machine?', translation: 'دێ شۆیم. ئەرێ ب غەسەلێ (جلهەڵگرێ) بشۆیم؟' },
      { speaker: 'Wife', text: 'Yes, and use the special soap for whites.', translation: 'بەلێ، و سابوونا (تایدا) تایبەت بۆ جلان سپی بکاربینە.' },
      { speaker: 'Husband', text: 'Okay, I will hang them outside later.', translation: 'باشە، دێ پاشتر ل دەرڤە هەلاویزم.' }
    ],
    vocabulary: [
      { word: 'Laundry', translation: 'شیشتنا جلان' },
      { word: 'Wash', translation: 'شیشتن' },
      { word: 'Soap', translation: 'سابوون' },
      { word: 'Hang', translation: 'هەلاویستن' }
    ]
  },
  {
    id: 'a1-27',
    level: 'A1',
    title: 'Kitchen Chores',
    titleKurdish: 'کارێن مەتەبخێ',
    dialogue: [
      { speaker: 'Son', text: 'Mom, do you need help with the dishes?', translation: 'دایێ، هاریکاریا تە بکەم د شیشتنا قاپان دا؟' },
      { speaker: 'Mom', text: 'Yes, please dry the plates and put them away.', translation: 'بەلێ، بێ زەحمەت قاپان حشک بکە و بدە سەر جهێ وان.' },
      { speaker: 'Son', text: 'Where do the spoons go?', translation: 'کەچک دچنە کیدەرێ؟' },
      { speaker: 'Mom', text: 'In the top drawer, next to the knives.', translation: 'د چەکمەجەیا سەری دا، ل نک چەقۆیان.' }
    ],
    vocabulary: [
      { word: 'Kitchen', translation: 'مەتەبخ' },
      { word: 'Dishes', translation: 'قاپ و قاچاخ' },
      { word: 'Dry', translation: 'حشک کردن' },
      { word: 'Spoons', translation: 'کەچک' },
      { word: 'Knives', translation: 'چەقۆ' }
    ]
  },
  {
    id: 'a1-28',
    level: 'A1',
    title: 'Favorite Season',
    titleKurdish: 'وەرزی خوەشتڤی',
    dialogue: [
      { speaker: 'Azad', text: 'Which season do you like most?', translation: 'تە حەز ژ کیژان وەرزی پتر هەیە؟' },
      { speaker: 'Dilvin', text: 'I love spring because of the green grass and flowers.', translation: 'ئەز حەز ژ بهارێ دکەم ژبەر گیایێ کەسک و گولان.' },
      { speaker: 'Azad', text: 'I like autumn more. The weather is cool and the leaves change color.', translation: 'ئەز پتر حەز ژ پاییزێ دکەم. سەقا یێ فێنکە و رەنگێ بەلگێن داران دهێتە گوهۆڕین.' },
      { speaker: 'Dilvin', text: 'Every season has its own beauty.', translation: 'هەر وەرزەکی جوانیەکا تایبەت یا هەی.' }
    ],
    vocabulary: [
      { word: 'Spring', translation: 'بهار' },
      { word: 'Autumn', translation: 'پاییز' },
      { word: 'Flowers', translation: 'گولان' },
      { word: 'Leaves', translation: 'بەلگ' }
    ]
  },
  {
    id: 'a1-29',
    level: 'A1',
    title: 'Buying Shoes',
    titleKurdish: 'کڕینا پێلاڤان',
    dialogue: [
      { speaker: 'Customer', text: 'Do you have these black shoes in size 42?', translation: 'ئەرێ تە ئەڤ پێلاڤێن رەش ب قەبارێ ٤٢ یێن هەیین؟' },
      { speaker: 'Clerk', text: 'Let me look in the back. One moment please.', translation: 'بلا ل پشت لێ بگڕێم. خۆ هلیگری دەمەکێ کێم.' },
      { speaker: 'Customer', text: 'Are they comfortable for walking?', translation: 'ئەرێ بۆ پیاسێ یا ب حەسیانن؟' },
      { speaker: 'Clerk', text: 'Yes, they have a soft sole. Try them on.', translation: 'بەلێ، بنکێ وێ یێ نەرمە. تاقی بکە.' }
    ],
    vocabulary: [
      { word: 'Shoes', translation: 'پێلاڤ' },
      { word: 'Black', translation: 'رەش' },
      { word: 'Comfortable', translation: 'ب حەسیان / ئاسۆدە' },
      { word: 'Soft', translation: 'نەرم' }
    ]
  },
  {
    id: 'a1-30',
    level: 'A1',
    title: 'Getting a Haircut',
    titleKurdish: 'سەر و نینۆک چێکرن',
    dialogue: [
      { speaker: 'Barber', text: 'How do you want your hair today?', translation: 'ئەڤرۆ تو دخوازێ چەوا قژا (سەرێ) خۆ چێکەی؟' },
      { speaker: 'Customer', text: 'Short on the sides and a little long on top, please.', translation: 'لایان کورت بکە و ناڤەراستێ هندەکێ درێژ بهێلە، بێ زەحمەت.' },
      { speaker: 'Barber', text: 'Do you want a shave too?', translation: 'دخوازی رێهێن (ردێنا) خۆ ژی چێکەی؟' },
      { speaker: 'Customer', text: 'No, just the haircut. Thank you.', translation: 'نە، بتنێ سەرێ من چێکە. سوپاس.' }
    ],
    vocabulary: [
      { word: 'Haircut', translation: 'سەر چێکرن' },
      { word: 'Sides', translation: 'لای / تەنیشت' },
      { word: 'Top', translation: 'سەر / ناڤەراست' },
      { word: 'Shave', translation: 'ردێن تاشین' }
    ]
  },
  {
    id: 'a1-31',
    level: 'A1',
    title: 'At the Bus Stop',
    titleKurdish: 'ل راوەستگەها پاسێ',
    dialogue: [
      { speaker: 'Girl', text: 'Does the number 5 bus stop here?', translation: 'ئەرێ پاسا ژمارە ٥ ل ڤێرێ رادوەستیت؟' },
      { speaker: 'Old Man', text: 'Yes, it comes every twenty minutes.', translation: 'بەلێ، هەر ٢٠ خولەکان جارهەکێ دهێت.' },
      { speaker: 'Girl', text: 'I have been waiting for half an hour.', translation: 'ئەز نیڤ دەمژمێرە ل هیڤیێ مە.' },
      { speaker: 'Old Man', text: 'The traffic is very heavy today.', translation: 'هاتنوچوون ئەڤرۆ گەلەک یا قەلەبالغە.' }
    ],
    vocabulary: [
      { word: 'Stop', translation: 'راوەستگەهـ' },
      { word: 'Wait', translation: 'چاوەڕێبوون / ل هیڤیێ مان' },
      { word: 'Traffic', translation: 'هاتنوچوون / ترافیک' },
      { word: 'Heavy', translation: 'گران / قەلەبالغ' }
    ]
  },
  {
    id: 'a1-32',
    level: 'A1',
    title: 'Lost and Found',
    titleKurdish: 'تشتێن بەرزەبوویی',
    dialogue: [
      { speaker: 'Student', text: 'I lost my wallet in the cafeteria.', translation: 'بەرسیکا من (جزدانێ من) ل کافتریایێ بەرزە بوو.' },
      { speaker: 'Officer', text: 'What color is it?', translation: 'رەنگێ وێ چییە؟' },
      { speaker: 'Student', text: 'It is brown and has my ID card inside.', translation: 'یا قاوەییە و ناسناما من تێدایە.' },
      { speaker: 'Officer', text: 'Someone found it! Here you go.', translation: 'ئێکێ دیتووە! فەرموو ئەڤەیە.' }
    ],
    vocabulary: [
      { word: 'Lost', translation: 'بەرزەبوون' },
      { word: 'Wallet', translation: 'بەرسیک / جزدان' },
      { word: 'Brown', translation: 'قاوەیی' },
      { word: 'Found', translation: 'دیتن' }
    ]
  },
  {
    id: 'a1-33',
    level: 'A1',
    title: 'Introducing a Colleague',
    titleKurdish: 'ناساندنا هەڤالەکێ کاری',
    dialogue: [
      { speaker: 'Boss', text: 'Everyone, this is Ali. He is our new accountant.', translation: 'هەمی کەس، ئەڤە عەلییە. ئەو لایێ من یێ نوویە یێ ئەندازەیی (حساباتێ).' },
      { speaker: 'Team', text: 'Welcome to the team, Ali!', translation: 'ب خێر بێی بۆ ناڤ تیمێ مە، عەلی!' },
      { speaker: 'Ali', text: 'Thank you. I am happy to work with you.', translation: 'سوپاس. ئەز کەیفخۆشم دگەل هەوە کار دکەم.' },
      { speaker: 'Boss', text: 'Let\'s show him his desk.', translation: 'وەرن دێ مێزا کاری نیشا دێین.' }
    ],
    vocabulary: [
      { word: 'Colleague', translation: 'هەڤالێ کاری' },
      { word: 'Accountant', translation: 'حسابگر / ژمێریار' },
      { word: 'Team', translation: 'تیم / کۆم' },
      { word: 'Desk', translation: 'مێزا خواندنێ یان کاری' }
    ]
  },
  {
    id: 'a1-34',
    level: 'A1',
    title: 'Talking about Dreams',
    titleKurdish: 'ئاخفتن ل سەر خەونان',
    dialogue: [
      { speaker: 'Renas', text: 'What do you want to be in the future?', translation: 'تو دخوازی د پاشەرۆژێ دا ببییە چی؟' },
      { speaker: 'Zin', text: 'I want to be a famous doctor and help sick children.', translation: 'من دڤێت ببمە نوژدارەکێ بەرنیاس و هاریکاریا زارۆکێن نەخۆش بکەم.' },
      { speaker: 'Renas', text: 'That is a noble dream. I want to travel the world.', translation: 'ئەفە خەونەکا جوانە. ئەز دخوازیم ل جیهانێ بگەڕێم.' },
      { speaker: 'Zin', text: 'Traveling is also a great experience.', translation: 'گەڕیان ژی ئەزموونەکا خۆشە.' }
    ],
    vocabulary: [
      { word: 'Future', translation: 'پاشەرۆژ' },
      { word: 'Famous', translation: 'بەرنیاس' },
      { word: 'Sick', translation: 'نەخۆش' },
      { word: 'Dream', translation: 'خەون' }
    ]
  },
  {
    id: 'a1-35',
    level: 'A1',
    title: 'Our Hometown',
    titleKurdish: 'باژێڕێ مە یێ بنەرەتی',
    dialogue: [
      { speaker: 'Alan', text: 'Tell me about your hometown.', translation: 'بەحسێ باژێڕێ خۆ یێ بنەرەتی بۆ من بکە.' },
      { speaker: 'Sipan', text: 'I am from Amed. It is an old and historic city.', translation: 'ئەز خەلکێ ئامەدێ بم. باژێڕەکێ کەڤن و دیرۆکییە.' },
      { speaker: 'Alan', text: 'Is the food good there?', translation: 'ئەرێ خوارن ل وێرێ یا خۆشە؟' },
      { speaker: 'Sipan', text: 'Yes, the kebabs are the best in the world!', translation: 'بەلێ، کەبابێن وێرێ چێترین کەبابن ل جیهانێ!' }
    ],
    vocabulary: [
      { word: 'Hometown', translation: 'باژێڕێ بنەرەتی' },
      { word: 'Historic', translation: 'دیرۆکی' },
      { word: 'Food', translation: 'خوارن' },
      { word: 'Best', translation: 'چێترین / باشترین' }
    ]
  },
  {
    id: 'a1-36',
    level: 'A1',
    title: 'Music Taste',
    titleKurdish: 'حەزژێکرنا مۆزیکێ',
    dialogue: [
      { speaker: 'Leyla', text: 'Do you like listening to music?', translation: 'تە حەز ژ گۆهداریکردنا مۆزیکێ هەیە؟' },
      { speaker: 'Karwan', text: 'Yes, I listen to Kurdish folk music every day.', translation: 'بەلێ، ئەز رۆژانە گۆهدارییا مۆزیکا مللی یا کوردی دکەم.' },
      { speaker: 'Leyla', text: 'I like pop music. It makes me feel energetic.', translation: 'ئەز حەز ژ مۆزیکا پۆپ دکەم. هەستا چالاکییێ ددەتە من.' },
      { speaker: 'Karwan', text: 'Music is like medicine for the soul.', translation: 'مۆزیک وەک دەرمانە بۆ رووحێ.' }
    ],
    vocabulary: [
      { word: 'Music', translation: 'مۆزیک' },
      { word: 'Listen', translation: 'گۆهداریکردن' },
      { word: 'Folk', translation: 'مللی' },
      { word: 'Soul', translation: 'رووح' }
    ]
  },
  {
    id: 'a1-37',
    level: 'A1',
    title: 'Watching a Football Match',
    titleKurdish: 'تەماشەی یارییەکا تەپەپێ',
    dialogue: [
      { speaker: 'Dany', text: 'Which team are you supporting tonight?', translation: 'ئەڤ شەڤە پشتەڤانییا کیژان تیمێ دکەی؟' },
      { speaker: 'Roj', text: 'I am a fan of the local club. They play very well.', translation: 'ئەز هاندەرێ یانەیا مە یا لێرەمە. ئەوان گەلەک ب باشی یاری دکەن.' },
      { speaker: 'Dany', text: 'I hope they win and score many goals.', translation: 'هیوادارم ببەن و گەلەک گۆلان تومار بکەن.' },
      { speaker: 'Roj', text: 'Let\'s watch the game together at the cafe.', translation: 'وەرە دێ پێکڤە ل کافێ تەماشەی یاریێ کەین.' }
    ],
    vocabulary: [
      { word: 'Support', translation: 'پشتەڤانیکردن' },
      { word: 'Fan', translation: 'هاندەر / شەیدا' },
      { word: 'Score', translation: 'تومارکرن' },
      { word: 'Goal', translation: 'گۆل' }
    ]
  },
  {
    id: 'a1-38',
    level: 'A1',
    title: 'Adopting a Pet',
    titleKurdish: 'خودانکرنا ئاژەلەکێ مالێ',
    dialogue: [
      { speaker: 'Daughter', text: 'Dad, can we get a cat?', translation: 'بابۆ، ئەم دکارین پشیکەکێ خودان کەین؟' },
      { speaker: 'Father', text: 'A cat needs a lot of care and responsibility.', translation: 'پشیک پێتڤی ب گەلەک خزمەت و بەرپرسیاریەتیێ یە.' },
      { speaker: 'Daughter', text: 'I will feed her and clean her bed every day.', translation: 'ئەز دێ رۆژانە خوارنێ دەمێ و جهێ وێ پاقژ کەم.' },
      { speaker: 'Father', text: 'Okay, let\'s go to the shelter this weekend.', translation: 'باشە، وەرە دێ چینە جهێ خودانکرنا ئاژەلان ئەڤێ دوماهیکا حەفتیێ.' }
    ],
    vocabulary: [
      { word: 'Cat', translation: 'پشیک' },
      { word: 'Care', translation: 'خزمەت / چاڤدێری' },
      { word: 'Feed', translation: 'خوارنێ دان' },
      { word: 'Shelter', translation: 'پەناگەهـ / جهێ ئاژەلان' }
    ]
  },
  {
    id: 'a1-39',
    level: 'A1',
    title: 'At a Cooking Class',
    titleKurdish: 'ل خۆلا چێکرنا خوارنێ',
    dialogue: [
      { speaker: 'Chef', text: 'Today we are learning how to bake bread.', translation: 'ئەڤرۆ ئەم دێ فێربین چەوا نانی ل فڕنێ چێکەین.' },
      { speaker: 'Student', text: 'Is the dough ready to put in the oven?', translation: 'ئەرێ هەڤیر یێ حازرە بۆ فڕنێ؟' },
      { speaker: 'Chef', text: 'Not yet, wait for ten more minutes for it to rise.', translation: 'هێشتا نە، دەهـ خولەکێن دی ل هیڤیێ بە دا کو تێک بچیت (پف ببیت).' },
      { speaker: 'Student', text: 'It smells so good already!', translation: 'بێنا وێ زۆر یا خۆشە ژ نوکەدا!' }
    ],
    vocabulary: [
      { word: 'Chef', translation: 'خوارنچێکەر / چێشتلێنەر' },
      { word: 'Bake', translation: 'چێکرنا خوارنێ ل فڕنێ' },
      { word: 'Dough', translation: 'هەڤیر' },
      { word: 'Oven', translation: 'فڕن' }
    ]
  },
  {
    id: 'a1-40',
    level: 'A1',
    title: 'Renting a Car',
    titleKurdish: 'بدەستڤەئینانا ترۆمبێلەکێ ب کرێ',
    dialogue: [
      { speaker: 'Traveler', text: 'I want to rent a car for three days.', translation: 'من دڤێت ترۆمبێلەکێ بۆ سێ رۆژان ب کرێ بگرم.' },
      { speaker: 'Agent', text: 'We have a small sedan and a big SUV available.', translation: 'مە ترۆمبێلەکا بچووک و یا مەزن ژی یا هەی.' },
      { speaker: 'Traveler', text: 'How much is the daily rate for the small one?', translation: 'کرێیا رۆژانە یا یا بچووک ب چەندێیە؟' },
      { speaker: 'Agent', text: 'It is 40 dollars per day, including insurance.', translation: '٤٠ دۆلارن بۆ هەر رۆژەکێ، دگەل دڵنیاییێ (تەئمیناتێ).' }
    ],
    vocabulary: [
      { word: 'Rent', translation: 'کرێ / ب کرێ گرتن' },
      { word: 'Daily', translation: 'رۆژانە' },
      { word: 'Insurance', translation: 'دڵنیایی / تەئمینات' },
      { word: 'Available', translation: 'هەی / بەردەست' }
    ]
  },
  {
    id: 'a1-41',
    level: 'A1',
    title: 'At the Airport',
    titleKurdish: 'ل فرۆکەخانێ',
    dialogue: [
      { speaker: 'Officer', text: 'Passport and ticket, please.', translation: 'پاسەپۆرت و پلێت (تیکێت)، بێ زەحمەت.' },
      { speaker: 'Traveler', text: 'Here they are. Is the flight on time?', translation: 'فەرموو ئەڤەنە. ئەرێ گەشت ل دەمێ خۆدایە؟' },
      { speaker: 'Officer', text: 'Yes, it departs at 2:00 PM from Gate 7.', translation: 'بەلێ، ل دەمژمێر ٢ێ پشتی نیڤرۆ ژ دەرگەهێ ٧ێ ب رێ دکەڤیت.' },
      { speaker: 'Traveler', text: 'Thank you. Where is the waiting area?', translation: 'سوپاس. جهێ چاوەڕێبوونێ ل کیدەرێیە؟' }
    ],
    vocabulary: [
      { word: 'Passport', translation: 'پاسەپۆرت' },
      { word: 'Ticket', translation: 'پلێت / تیکێت' },
      { word: 'Flight', translation: 'گەشت' },
      { word: 'Gate', translation: 'دەرگەهـ' }
    ]
  },
  {
    id: 'a1-42',
    level: 'A1',
    title: 'Booking a Hotel',
    titleKurdish: 'حجزکرنا ئوتێلەکێ',
    dialogue: [
      { speaker: 'Reception', text: 'How many nights would you like to stay?', translation: 'تو دخوازی چەند شەڤان بمینی؟' },
      { speaker: 'Guest', text: 'Three nights, starting from tonight.', translation: 'سێ شەڤان، ل ئەڤ شەڤە دەستپێدکەت.' },
      { speaker: 'Reception', text: 'We have a single room for 50 dollars per night.', translation: 'مە ژوورەکا تاک یا هەی ب ٥٠ دۆلاران بۆ هەر شەڤەکێ.' },
      { speaker: 'Guest', text: 'That is fine. Does it include breakfast?', translation: 'باشە. ئەرێ تێشت ژی دگەلدایە؟' }
    ],
    vocabulary: [
      { word: 'Stay', translation: 'مان / مانا ل جهەکی' },
      { word: 'Single room', translation: 'ژوورا ئێک کەسی' },
      { word: 'Include', translation: 'تێدابوون' },
      { word: 'Guest', translation: 'مێڤان / خودان حجز' }
    ]
  },
  {
    id: 'a1-43',
    level: 'A1',
    title: 'Favorite Color',
    titleKurdish: 'رەنگێ خوەشتڤی',
    dialogue: [
      { speaker: 'Anna', text: 'What is your favorite color?', translation: 'رەنگێ تە یێ خوەشتڤی چییە؟' },
      { speaker: 'Mark', text: 'I really like blue because it reminds me of the sea.', translation: 'ئەز ب راستی حەز ژ رەنگێ شین دکەم چونکی دەریا دهێتە بیرا من.' },
      { speaker: 'Anna', text: 'My favorite is red. It is very bright and bold.', translation: 'یێ من رەنگێ سۆرە. یێ زۆر گەش و دیارە.' },
      { speaker: 'Mark', text: 'Yellow is also nice, like the sun.', translation: 'رەنگێ زەرد ژی یێ جوانە، وەک رۆژی.' }
    ],
    vocabulary: [
      { word: 'Color', translation: 'رەنگ' },
      { word: 'Reminds', translation: 'ب بیرهێنان' },
      { word: 'Bright', translation: 'گەش / گەرم' },
      { word: 'Bold', translation: 'دیار / بهێز' }
    ]
  },
  {
    id: 'a1-44',
    level: 'A1',
    title: 'Describing a Person',
    titleKurdish: 'وەسفکرنا کەسەکی',
    dialogue: [
      { speaker: 'Sara', text: 'Have you met the new neighbor?', translation: 'تە جیرانێ نوو دیتییە؟' },
      { speaker: 'Tom', text: 'Yes, he is tall and has short black hair.', translation: 'بەلێ، ئەو یێ درێژە و قژەکا کورت و رەش یا هەی.' },
      { speaker: 'Sara', text: 'Does he look friendly?', translation: 'ئەرێ ئەو یێ رحسڤک دیارە؟' },
      { speaker: 'Tom', text: 'Very much. He always smiles and says hello.', translation: 'گەلەک. ئەو هەر دەم دشێت و دبێژیت سڵاڤ.' }
    ],
    vocabulary: [
      { word: 'Tall', translation: 'درێژ' },
      { word: 'Short', translation: 'کورت' },
      { word: 'Friendly', translation: 'رحسڤک / هەڤالانە' },
      { word: 'Smile', translation: 'گرنژین' }
    ]
  },
  {
    id: 'a1-45',
    level: 'A1',
    title: 'Talking about Pets',
    titleKurdish: 'ئاخفتن ل سەر ئاژەلێن مالێ',
    dialogue: [
      { speaker: 'Dany', text: 'Do you have any pets at home?', translation: 'ئەرێ چو ئاژەلێن مالێ ل دەڤ تە هەنە؟' },
      { speaker: 'Lily', text: 'Yes, I have a small brown dog named Rex.', translation: 'بەلێ، من سەگیەکێ بچووک و قاوەیی یێ هەی ناڤێ وی "رێکس"ە.' },
      { speaker: 'Dany', text: 'Does he bark a lot?', translation: 'ئەرێ ئەو گەلەک دڕەویت (حەوا دکەت)؟' },
      { speaker: 'Lily', text: 'No, he is very quiet and loves to sleep.', translation: 'نە، ئەو یێ زۆر هێمنە و حەز ژ نۆستنێ دکەت.' }
    ],
    vocabulary: [
      { word: 'Pet', translation: 'ئاژەلا مالێ' },
      { word: 'Dog', translation: 'سەگ' },
      { word: 'Bark', translation: 'ڕەوین / حەوا' },
      { word: 'Quiet', translation: 'هێمن / بێدەنگ' }
    ]
  },
  {
    id: 'a1-46',
    level: 'A1',
    title: 'My Morning Routine',
    titleKurdish: 'کارێن من یێن سپێدێ',
    dialogue: [
      { speaker: 'Adam', text: 'Tell me about your morning.', translation: 'بەحسێ سپێدێیا خۆ بۆ من بکە.' },
      { speaker: 'Emma', text: 'First, I wash my face and brush my teeth.', translation: 'دەستپێکێ، ئەز دەست و چاڤێن خۆ دشۆیم و ددانێن خۆ برۆش دکەم.' },
      { speaker: 'Adam', text: 'Do you drink tea or coffee?', translation: 'تۆ چایێ د ڤەخۆی یان قەهوێ؟' },
      { speaker: 'Emma', text: 'I always drink tea with a sandwich.', translation: 'ئەز هەر دەم چایێ دگەل لەفەیەکێ دشۆم.' }
    ],
    vocabulary: [
      { word: 'Morning', translation: 'سپێدە' },
      { word: 'Face', translation: 'دەست و چاڤ' },
      { word: 'Brush', translation: 'فڕچەدکرن / برۆشکردن' },
      { word: 'Teeth', translation: 'ددان' }
    ]
  },
  {
    id: 'a1-47',
    level: 'A1',
    title: 'Shopping for Vegetables',
    titleKurdish: 'کڕینا کەسکاتییێ',
    dialogue: [
      { speaker: 'Seller', text: 'How many tomatoes do you need?', translation: 'تۆ چەند تەماتە دخوازی؟' },
      { speaker: 'Customer', text: 'Two kilograms, please. Are they fresh?', translation: 'دوو کیلۆیان، بێ زەحمەت. ئەرێ یێن تەیەی نە (فریشن)؟' },
      { speaker: 'Seller', text: 'Yes, they arrived this morning from the farm.', translation: 'بەلێ، ئەڤ سپێدێ ژ کێلگەی (مەزرەعێ) هاتین.' },
      { speaker: 'Customer', text: 'I also need some onions and potatoes.', translation: 'پێتڤی ب هندەک پیواز و پەتاتان ژی مە.' }
    ],
    vocabulary: [
      { word: 'Vegetables', translation: 'کەسکاتی' },
      { word: 'Tomatoes', translation: 'تەماتە' },
      { word: 'Fresh', translation: 'تەیەی / فڕێش' },
      { word: 'Onions', translation: 'پیواز' }
    ]
  },
  {
    id: 'a1-48',
    level: 'A1',
    title: 'In the Classroom',
    titleKurdish: 'د پۆلێ دا',
    dialogue: [
      { speaker: 'Teacher', text: 'Open your books to page 15.', translation: 'پەرتۆکێن خۆ ل لاپەرە ١٥ ڤەکەن.' },
      { speaker: 'Student', text: 'Excuse me, can I use your eraser?', translation: 'بێ زەحمەت، دکارم مەسحەکا (ژێبرەکا) تە بکاربینم؟' },
      { speaker: 'Teacher', text: 'Yes, here you go. Please be quiet now.', translation: 'بەلێ، فەرموو ئەڤەیە. بێ زەحمەت نوکە بێدەنگ بن.' },
      { speaker: 'Student', text: 'Thank you, teacher.', translation: 'سوپاس، مامۆستا.' }
    ],
    vocabulary: [
      { word: 'Page', translation: 'لاپەرە' },
      { word: 'Eraser', translation: 'مەسحە / ژێبر' },
      { word: 'Open', translation: 'ڤەکرن' },
      { word: 'Quiet', translation: 'بێدەنگ' }
    ]
  },
  {
    id: 'a1-49',
    level: 'A1',
    title: 'Taking a Taxi',
    titleKurdish: 'سواربوونا تەکسیکێ',
    dialogue: [
      { speaker: 'Driver', text: 'Where to, sir?', translation: 'بۆ کیدەرێ، خودانێ من؟' },
      { speaker: 'Passenger', text: 'To the city hospital, please. I am in a hurry.', translation: 'بۆ نەخۆشخانا باژێڕی، بێ زەحمەت. ئەز یێ ب لەزم.' },
      { speaker: 'Driver', text: 'No problem. I will take the fastest road.', translation: 'چو ئاریشە نینن. دێ ژ رێکا هەرە بلەز چم.' },
      { speaker: 'Passenger', text: 'How much is the fare?', translation: 'کرێ چەندە؟' }
    ],
    vocabulary: [
      { word: 'Hospital', translation: 'نەخۆشخانە' },
      { word: 'Hurry', translation: 'ب لەز' },
      { word: 'Fastest', translation: 'بلەزترین' },
      { word: 'Fare', translation: 'کرێیا تەکسیکێ یان پاسێ' }
    ]
  },
  {
    id: 'a1-50',
    level: 'A1',
    title: 'Invitation to Coffee',
    titleKurdish: 'داخوازکرن بۆ قەهوێ',
    dialogue: [
      { speaker: 'Zana', text: 'Are you free for coffee this afternoon?', translation: 'ئەرێ تو ئەڤرۆ پشتی نیڤرۆ یێ بەتاڵی (ڤالا) بۆ قەهوێ؟' },
      { speaker: 'Nisrin', text: 'Yes, I would love to. Where should we meet?', translation: 'بەلێ، ئەز حەز دکەم. ل کیدەرێ هەڤدوو ببینین؟' },
      { speaker: 'Zana', text: 'Let\'s meet at the cafe near the park at 4:30.', translation: 'وەرە دێ ل کافێیا نک پارکی هەڤدوو ببینین ل دەمژمێر ٤:٣٠.' },
      { speaker: 'Nisrin', text: 'Great, see you then!', translation: 'باشە، وێ دەمێ تە دبینم!' }
    ],
    vocabulary: [
      { word: 'Free', translation: 'بەتاڵ / ڤالا' },
      { word: 'Meet', translation: 'دیتن / هەڤدیتن' },
      { word: 'Afternoon', translation: 'پشتی نیڤرۆ' },
      { word: 'Great', translation: 'باش / مەزن' }
    ]
  },
  {
    id: 'a1-51',
    level: 'A1',
    title: 'Household Items',
    titleKurdish: 'کەرەستێن مالێ',
    dialogue: [
      { speaker: 'Wife', text: 'We need to buy a new lamp for the living room.', translation: 'پێتڤییە ئەم گلۆپەکا (لامپەکا) نوو بۆ ژوورا روینشتنێ بکڕین.' },
      { speaker: 'Husband', text: 'Is the old one broken?', translation: 'ئەرێ یا کەڤن یا شکەستییە؟' },
      { speaker: 'Wife', text: 'No, but it is too dim. We need more light.', translation: 'نە، لێ رۆناهیا وێ یا کێمە. پێتڤی ب رۆناهیەکا زێدەتر مە.' },
      { speaker: 'Husband', text: 'I will check the hardware store tomorrow.', translation: 'دێ سوبە چمە دۆکانا کەرەستێن ناڤمالێ.' }
    ],
    vocabulary: [
      { word: 'Lamp', translation: 'گلۆپ / لامپ' },
      { word: 'Living room', translation: 'ژوورا روینشتنێ' },
      { word: 'Broken', translation: 'شکەستی' },
      { word: 'Light', translation: 'رۆناهی' }
    ]
  },
  {
    id: 'a1-52',
    level: 'A1',
    title: 'Talking about Children',
    titleKurdish: 'ئاخفتن ل سەر زارۆکان',
    dialogue: [
      { speaker: 'Karwan', text: 'How old is your daughter now?', translation: 'کچا تە نوکە چەند سالی یە؟' },
      { speaker: 'Hevi', text: 'She is five years old. She started school last month.', translation: 'ئەو پێنج سالی یە. هەیڤا بووری دەست ب قوتابخانێ کر.' },
      { speaker: 'Karwan', text: 'Does she like her teacher?', translation: 'ئەرێ ئەو حەز ژ مامۆستایا خۆ دکەت؟' },
      { speaker: 'Hevi', text: 'Yes, she says her teacher is very kind.', translation: 'بەلێ، دبێژیت مامۆستایا من یا زۆر دلۆڤانە.' }
    ],
    vocabulary: [
      { word: 'Daughter', translation: 'کچ' },
      { word: 'Started', translation: 'دەستپێکرن' },
      { word: 'Month', translation: 'هەیڤ' },
      { word: 'Kind', translation: 'دلۆڤان / میهرەبان' }
    ]
  },
  {
    id: 'a1-53',
    level: 'A1',
    title: 'Visiting a Farm',
    titleKurdish: 'سەرەدانا کێلگەیەکێ (مەزرەعەکێ)',
    dialogue: [
      { speaker: 'Visitor', text: 'Look at the cows and sheep!', translation: 'تەماشەی چێل و پەزان بکە!' },
      { speaker: 'Farmer', text: 'We have fifty sheep and ten cows.', translation: 'مە پێنجی پەز و دەهـ چێل یێن هەیین.' },
      { speaker: 'Visitor', text: 'Do they give fresh milk every day?', translation: 'ئەرێ ئەوان رۆژانە شیرێ فریش (تەزە) ددەن؟' },
      { speaker: 'Farmer', text: 'Yes, we make cheese and yogurt from it.', translation: 'بەلێ، ئەم پەنیر و ماستی ژێ چێدکەین.' }
    ],
    vocabulary: [
      { word: 'Cows', translation: 'چێل' },
      { word: 'Sheep', translation: 'پەز' },
      { word: 'Milk', translation: 'شیر' },
      { word: 'Cheese', translation: 'پەنیر' }
    ]
  },
  {
    id: 'a1-54',
    level: 'A1',
    title: 'Emergency Call',
    titleKurdish: 'پەیوەندیا بەلەز (تەوارێ)',
    dialogue: [
      { speaker: 'Operator', text: 'Emergency services. What is your emergency?', translation: 'خزمەتگوزاریا تەوارێ (فریاکەفتنێ). بارودۆخێ تە یێ بەلەز چییە؟' },
      { speaker: 'Man', text: 'There is a fire in the building next to me!', translation: 'ئاگری بەرەبوویە د ئاڤاهیێ نک من دا!' },
      { speaker: 'Operator', text: 'What is the address, please?', translation: 'ناڤۆنیشان چییە، بێ زەحمەت؟' },
      { speaker: 'Man', text: 'It is 45 Flower Street. Please hurry!', translation: 'شەقاما گوڵان ژمارە ٤٥. بێ زەحمەت بلەز وەرن!' }
    ],
    vocabulary: [
      { word: 'Emergency', translation: 'تەوارێ / بەلەز' },
      { word: 'Fire', translation: 'ئاگر' },
      { word: 'Building', translation: 'ئاڤاهی' },
      { word: 'Address', translation: 'ناڤۆنیشان' }
    ]
  },
  {
    id: 'a1-55',
    level: 'A1',
    title: 'My House',
    titleKurdish: 'مالا من',
    dialogue: [
      { speaker: 'Guest', text: 'Your house is very beautiful.', translation: 'مالا تە یا زۆر جوانە.' },
      { speaker: 'Host', text: 'Thank you. It has a small garden and three rooms.', translation: 'سوپاس. باخچەیەکێ بچووک و سێ ژوور یێن هەیین.' },
      { speaker: 'Guest', text: 'The living room is very bright.', translation: 'ژوورا روینشتنێ یا زۆر رۆهنە (گەشە).' },
      { speaker: 'Host', text: 'Yes, it has big windows to let the sun in.', translation: 'بەلێ، پەنجەرێن مەزن یێن هەیین دا کو رۆژ بهێتە تێدا.' }
    ],
    vocabulary: [
      { word: 'Beautiful', translation: 'جوان' },
      { word: 'Windows', translation: 'پەنجەرە' },
      { word: 'Bright', translation: 'گەش / رۆهن' },
      { word: 'Rooms', translation: 'ژوور' }
    ]
  },
  {
    id: 'a1-56',
    level: 'A1',
    title: 'Gardening',
    titleKurdish: 'کارێن باخچەی',
    dialogue: [
      { speaker: 'Sipan', text: 'Are you planting flowers today?', translation: 'تۆ ئەڤرۆ گۆلان دچینی؟' },
      { speaker: 'Gozel', text: 'Yes, I am planting roses and tulips.', translation: 'بەلێ، ئەز گۆلێن سۆر و لالان دچینم.' },
      { speaker: 'Sipan', text: 'Do they need a lot of water?', translation: 'ئەرێ ئەوان گەلەک ئاڤ دڤێت؟' },
      { speaker: 'Gozel', text: 'Just once every morning.', translation: 'بتنێ جارهەکێ هەر سپێدە.' }
    ],
    vocabulary: [
      { word: 'Planting', translation: 'چاندن' },
      { word: 'Roses', translation: 'گۆلێن سۆر' },
      { word: 'Water', translation: 'ئاڤ' },
      { word: 'Every morning', translation: 'هەر سپێدە' }
    ]
  },
  {
    id: 'a1-57',
    level: 'A1',
    title: 'Learning English',
    titleKurdish: 'فێربوونا ئنگلیزیێ',
    dialogue: [
      { speaker: 'Student', text: 'English is a bit difficult for me.', translation: 'ئنگلیزی هندەکێ بۆ من یا ب زەحمەتە.' },
      { speaker: 'Friend', text: 'Don\'t worry. You just need to practice every day.', translation: 'خەمێ نەخۆ. تۆ بتنێ پێتڤی ب راهێنانێن رۆژانە هەی.' },
      { speaker: 'Student', text: 'I watch movies in English to learn.', translation: 'ئەز تەماشەی فلمێن ئنگلیزی دکەم دا کو فێرببم.' },
      { speaker: 'Friend', text: 'That is a very good method!', translation: 'ئەفە رێکارەکا گەلەک باشە!' }
    ],
    vocabulary: [
      { word: 'Difficult', translation: 'ب زەحمەت' },
      { word: 'Practice', translation: 'راهێنان / مەشق' },
      { word: 'Movies', translation: 'فلم' },
      { word: 'Method', translation: 'رێکار / شێواز' }
    ]
  },
  {
    id: 'a1-58',
    level: 'A1',
    title: 'Asking for Help',
    titleKurdish: 'داخوازکرنا هاریکارییێ',
    dialogue: [
      { speaker: 'Woman', text: 'Can you help me carry these heavy bags?', translation: 'دکاری هاریکاریا من بکەی بۆ هەلگرتنا ڤان جانتەیێن گران؟' },
      { speaker: 'Young Man', text: 'Of course. Give them to me.', translation: 'بێگومان. بدە من.' },
      { speaker: 'Woman', text: 'Thank you so much. You are very kind.', translation: 'زۆر سوپاس. تۆ یێ گەلەک دلۆڤانی.' },
      { speaker: 'Young Man', text: 'It is my pleasure.', translation: 'خۆشحالیا منە (سەر سەران و چاڤان).' }
    ],
    vocabulary: [
      { word: 'Carry', translation: 'هەلگرتن' },
      { word: 'Heavy', translation: 'گران' },
      { word: 'Bags', translation: 'جانتە' },
      { word: 'Pleasure', translation: 'خۆشحالی' }
    ]
  },
  {
    id: 'a1-59',
    level: 'A1',
    title: 'Telling a Story',
    titleKurdish: 'گۆتنا چیرۆکەکێ',
    dialogue: [
      { speaker: 'Child', text: 'Grandpa, tell me a story before I sleep.', translation: 'باپیرۆ، چیرۆکەکێ بۆ من بێژە بەری بنۆم.' },
      { speaker: 'Grandpa', text: 'Long ago, there was a brave hero in the mountains.', translation: 'بەری دەمەکێ درێژ، قارەمانەکێ ئازا د چیا دا هەبوو.' },
      { speaker: 'Child', text: 'Did he have a horse?', translation: 'ئەرێ وی ئەسپەک یێ هەبوو؟' },
      { speaker: 'Grandpa', text: 'Yes, a white horse that ran as fast as the wind.', translation: 'بەلێ، ئەسپەکێ سپی هەبوو یێ کو وەک بای بلەز دڕەڤی.' }
    ],
    vocabulary: [
      { word: 'Story', translation: 'چیرۆک' },
      { word: 'Brave', translation: 'ئازا / قارەمان' },
      { word: 'Horse', translation: 'ئەسپ' },
      { word: 'Wind', translation: 'با' }
    ]
  },
  {
    id: 'a1-60',
    level: 'A1',
    title: 'At the Beach',
    titleKurdish: 'ل کنارێ دەریایێ',
    dialogue: [
      { speaker: 'Tanya', text: 'The sand is very hot!', translation: 'خیار (لێف) یا زۆر گەرمە!' },
      { speaker: 'Renas', text: 'Let\'s go jump into the water to cool off.', translation: 'وەرە دێ خوە هاڤێینە د ئاڤێ دا دا کو فێنک بببین.' },
      { speaker: 'Tanya', text: 'Wait, I need to put on some sunscreen.', translation: 'اوەستە، من پێتڤی ب هندەک کرێما دژی رۆژیێ یە.' },
      { speaker: 'Renas', text: 'I love the sound of the waves.', translation: 'ئەز حەز ژ دەنگێ پێلێن دەریایێ دکەم.' }
    ],
    vocabulary: [
      { word: 'Beach', translation: 'کنارێ دەریایێ / لێف' },
      { word: 'Sand', translation: 'خیار / لمی' },
      { word: 'Waves', translation: 'پێل' },
      { word: 'Cool off', translation: 'فێنک بوون' }
    ]
  },
  {
    id: 'a1-61',
    level: 'A1',
    title: 'At the Museum',
    titleKurdish: 'ل مۆزەخانێ',
    dialogue: [
      { speaker: 'Guide', text: 'Please do not touch the ancient statues.', translation: 'بێ زەحمەت دەستان نەدەنە پەیکەرێن کەڤن.' },
      { speaker: 'Visitor', text: 'Are we allowed to take photos?', translation: 'ئەرێ رێپێدایە وێنە بگرین؟' },
      { speaker: 'Guide', text: 'Yes, but without using the flash.', translation: 'بەلێ، لێ بێ فلای (رۆناهیێ).' },
      { speaker: 'Visitor', text: 'This history is very impressive.', translation: 'ئەڤ دیرۆکە یا زۆر کارتێکەرە.' }
    ],
    vocabulary: [
      { word: 'Ancient', translation: 'کەڤنار' },
      { word: 'Touch', translation: 'دەست لێدان' },
      { word: 'Allowed', translation: 'رێپێدای' },
      { word: 'Impressive', translation: 'کارتێکەر' }
    ]
  },
  {
    id: 'a1-62',
    level: 'A1',
    title: 'Talking about Hobbies',
    titleKurdish: 'ئاخفتن ل سەر ئارەزوویان',
    dialogue: [
      { speaker: 'Sipan', text: 'What is your hobby?', translation: 'ئارەزوویا تە چییە؟' },
      { speaker: 'Alan', text: 'I love painting landscapes with water colors.', translation: 'ئەز حەز ژ وێنەکێشانا سروشتی دکەم ب رەنگێن ئاڤی.' },
      { speaker: 'Sipan', text: 'I enjoy playing chess with my brother.', translation: 'ئەز کەیفێ ژ یارییا شەترەنجێ دگەل برایێ خۆ دبینم.' },
      { speaker: 'Alan', text: 'Chess is a game for smart people.', translation: 'شەترەنج یارییا کەسێن زیرەک و ژیرە.' }
    ],
    vocabulary: [
      { word: 'Painting', translation: 'وێنەکێشان' },
      { word: 'Landscapes', translation: 'سروشت / دیمەن' },
      { word: 'Chess', translation: 'شەترەنج' },
      { word: 'Smart', translation: 'زیرەک / ژیر' }
    ]
  },
  {
    id: 'a1-63',
    level: 'A1',
    title: 'Ordering Pizza',
    titleKurdish: 'داخوازکرنا پیتزایێ',
    dialogue: [
      { speaker: 'Cashier', text: 'What kind of pizza would you like?', translation: 'تۆ کیژان جۆرێ پیتزایێ دخوازی؟' },
      { speaker: 'Customer', text: 'A large vegetable pizza with extra cheese, please.', translation: 'پیتزایەکا مەزن یا کەسکاتییێ دگەل پەنیری زێدە، بێ زەحمەت.' },
      { speaker: 'Cashier', text: 'Would you like to add olives or peppers?', translation: 'تۆ دخوازی زەیتوون یان بیبەران زێدە کەی؟' },
      { speaker: 'Customer', text: 'Yes, both please.', translation: 'بەلێ، هەردووکان بێ زەحمەت.' }
    ],
    vocabulary: [
      { word: 'Extra', translation: 'زێدە' },
      { word: 'Cheese', translation: 'پەنیر' },
      { word: 'Olives', translation: 'زەیتوون' },
      { word: 'Peppers', translation: 'بیبەر' }
    ]
  },
  {
    id: 'a1-64',
    level: 'A1',
    title: 'Describing Weather (Detailed)',
    titleKurdish: 'وەسفکرنا سەقای ب هوورنی',
    dialogue: [
      { speaker: 'Nisrin', text: 'Is it raining today?', translation: 'ئەرێ ئەڤرۆ باران دباریت؟' },
      { speaker: 'Karwan', text: 'No, but the sky is very cloudy and gray.', translation: 'نە، لێ ئەسمان یێ داگرتییە و ئەورە.' },
      { speaker: 'Nisrin', text: 'I think it might snow tonight.', translation: 'ئەز دهزرکم رەنگە ئەڤ شەڤە بەفر بباریت.' },
      { speaker: 'Karwan', text: 'The temperature is dropping fast.', translation: 'پلەیا گەرمێ بلەز یا دهێتە خوار.' }
    ],
    vocabulary: [
      { word: 'Cloudy', translation: 'ئەور' },
      { word: 'Snow', translation: 'بەفر' },
      { word: 'Temperature', translation: 'پلەیا گەرمێ' },
      { word: 'Dropping', translation: 'هاتنا خوار / کێمبوون' }
    ]
  },
  {
    id: 'a1-65',
    level: 'A1',
    title: 'Neighborhood Watch',
    titleKurdish: 'چاڤدێرییا جیرانان',
    dialogue: [
      { speaker: 'Hevi', text: 'Did you see the new car in the driveway?', translation: 'تە ترۆمبێلا نوو ل رێکا مالێ دیتی؟' },
      { speaker: 'Ali', text: 'Yes, it belongs to the family next door.', translation: 'بەلێ، یا خێزانا جیرانە.' },
      { speaker: 'Hevi', text: 'They are very quiet and polite neighbors.', translation: 'ئەو جیرانێن زۆر بێدەنگ و ب رێز و تەربیەتن.' },
      { speaker: 'Ali', text: 'We are lucky to have them.', translation: 'ئەم یێن ب بەختین کو ئەوە جیرانێن مەنە.' }
    ],
    vocabulary: [
      { word: 'Driveway', translation: 'رێکا پێش مالێ' },
      { word: 'Belongs', translation: 'یا وی یە / بۆ وی دزڤریت' },
      { word: 'Polite', translation: 'ب رێز / ب ئەدەب' },
      { word: 'Lucky', translation: 'ب بەخت / خودان شانس' }
    ]
  },
  {
    id: 'a1-66',
    level: 'A1',
    title: 'Buying a Laptop',
    titleKurdish: 'کڕینا لاپتۆپەکی',
    dialogue: [
      { speaker: 'Salesman', text: 'This laptop is very powerful and lightweight.', translation: 'ئەڤ لاپتۆپە یێ زۆر ب هێز و سڤکە.' },
      { speaker: 'Student', text: 'Does it have a long battery life?', translation: 'ئەرێ شەحنێ (باترییێ) زۆر دگریت؟' },
      { speaker: 'Salesman', text: 'Yes, it can last for twelve hours.', translation: 'بەلێ، دکاریت بۆ دوازدە دەمژمێران بمینیت.' },
      { speaker: 'Student', text: 'That is exactly what I need for university.', translation: 'ئەو تشتە یێ ب درۆستی ئەز بۆ زانکۆیێ پێتڤی مە.' }
    ],
    vocabulary: [
      { word: 'Powerful', translation: 'ب هێز' },
      { word: 'Lightweight', translation: 'سڤک / بێ کێش' },
      { word: 'Battery', translation: 'شەحن / باتری' },
      { word: 'University', translation: 'زانکۆ' }
    ]
  },
  {
    id: 'a1-67',
    level: 'A1',
    title: 'Planning a Picnic',
    titleKurdish: 'پلاندانان بۆ سفرەیەکێ',
    dialogue: [
      { speaker: 'Viyan', text: 'Let\'s go to the river bank for a picnic.', translation: 'وەرە دێ چینە لێفا رووباری بۆ سفرەیەکێ.' },
      { speaker: 'Karwan', text: 'Should I bring the charcoal for the grill?', translation: 'بلا ئەز رەژییا گەشکرنا گۆشتی بینم؟' },
      { speaker: 'Viyan', text: 'Yes, and I will bring the meat and bread.', translation: 'بەلێ، و ئەز دێ گۆشت و نانی ئینم.' },
      { speaker: 'Karwan', text: 'Don\'t forget the tea and cups!', translation: 'چایێ و فنجانان ژبیر نەکە!' }
    ],
    vocabulary: [
      { word: 'River bank', translation: 'لێفا رووباری' },
      { word: 'Charcoal', translation: 'رەژی' },
      { word: 'Grill', translation: 'گەشکرن / کبابکرن' },
      { word: 'Cups', translation: 'فنجان / کۆپ' }
    ]
  },
  {
    id: 'a1-68',
    level: 'A1',
    title: 'Visiting a Sick Friend',
    titleKurdish: 'سەرەدانا هەڤالەکێ نەخۆش',
    dialogue: [
      { speaker: 'Alan', text: 'How are you feeling today, Rozh?', translation: 'تۆ ئەڤرۆ هەست ب چ دکەی، رۆژ؟' },
      { speaker: 'Rozh', text: 'I am better. The doctor said I can go home tomorrow.', translation: 'ئەز باشترم. نوژداری گۆت تۆ دشێی سوبە بچییە مال.' },
      { speaker: 'Alan', text: 'I brought you some fresh fruit and magazines.', translation: 'من هندەک میوێن فریش و کۆڤار بۆ تە ئینان.' },
      { speaker: 'Rozh', text: 'Thank you for coming. It was boring here.', translation: 'سوپاس کو تۆ هاتی. ل ڤێرێ بێزاری بوو.' }
    ],
    vocabulary: [
      { word: 'Feeling', translation: 'هەستکردن' },
      { word: 'Better', translation: 'باشتر' },
      { word: 'Magazines', translation: 'کۆڤار' },
      { word: 'Boring', translation: 'بێزاری / وەنەوا' }
    ]
  },
  {
    id: 'a1-69',
    level: 'A1',
    title: 'In the Library (Finding a Spot)',
    titleKurdish: 'ل پەرتووکخانێ (دیتنا جهی)',
    dialogue: [
      { speaker: 'Male Student', text: 'Is this seat taken?', translation: 'ئەرێ ئەڤ کورسییە یا گرتییە؟' },
      { speaker: 'Female Student', text: 'No, it is free. You can sit here.', translation: 'نە، یا ڤالایە. تۆ دشێی ل ڤێرێ روینی.' },
      { speaker: 'Male Student', text: 'Is it okay if I use my laptop here?', translation: 'باشە ئەز لاپتۆپێ خۆ ل ڤێرێ بکاربینم؟' },
      { speaker: 'Female Student', text: 'Yes, just use your headphones for the sound.', translation: 'بەلێ، بتنێ سماعکێن (هێدفۆنێن) خۆ بکاربینە بۆ دەنگی.' }
    ],
    vocabulary: [
      { word: 'Seat', translation: 'کورسی / جهێ روینشتنێ' },
      { word: 'Taken', translation: 'گرتی / تێدا هەین' },
      { word: 'Headphones', translation: 'سماعک / هێدفۆن' },
      { word: 'Sound', translation: 'دەنگ' }
    ]
  },
  {
    id: 'a1-70',
    level: 'A1',
    title: 'Talking about Laundry',
    titleKurdish: 'ئاخفتن ل سەر جلان',
    dialogue: [
      { speaker: 'Sara', text: 'Whose socks are these on the floor?', translation: 'ئەڤ گۆرە یێن کێ نە ل سەر عەردی؟' },
      { speaker: 'Zana', text: 'They are mine. I am sorry, I will put them away.', translation: 'یێن منن. ببۆرە، دێ کەمە جهێ وان.' },
      { speaker: 'Sara', text: 'The laundry basket is full now.', translation: 'سەبەتەیا جلان یا تژی بوو نوکە.' },
      { speaker: 'Zana', text: 'I will start the washing machine right away.', translation: 'دێ نوکە دەست ب غەسەلێ کەم.' }
    ],
    vocabulary: [
      { word: 'Socks', translation: 'گۆرە' },
      { word: 'Floor', translation: 'عەرد / زەوی' },
      { word: 'Basket', translation: 'سەبەتە' },
      { word: 'Full', translation: 'تژی' }
    ]
  },
  {
    id: 'a1-71',
    level: 'A1',
    title: 'Feeding Animals',
    titleKurdish: 'خوارن دانا ئاژەلان',
    dialogue: [
      { speaker: 'Grandpa', text: 'Help me feed the chickens, little one.', translation: 'هاریکاریا من بکە بۆ خوارن دانا مریشکان، زارۆکێ من.' },
      { speaker: 'Child', text: 'What do they eat? Do they like seeds?', translation: 'ئەو چ دخۆن؟ ئەرێ حەز ژ دان و دەنکان دکەن؟' },
      { speaker: 'Grandpa', text: 'Yes, and they also like bread crumbs.', translation: 'بەلێ، و حەز ژ هویرکاتێن نانی ژی دکەن.' },
      { speaker: 'Child', text: 'Look! They are running towards us.', translation: 'تەماشە بکە! ئەوان بەرەڤ مە را دکەن.' }
    ],
    vocabulary: [
      { word: 'Chickens', translation: 'مریشک' },
      { word: 'Seeds', translation: 'دان و دەنگ / تۆف' },
      { word: 'Crumbs', translation: 'هویرکات' },
      { word: 'Towards', translation: 'بەرەڤ / بەر ب' }
    ]
  },
  {
    id: 'a1-72',
    level: 'A1',
    title: 'Describing a Room',
    titleKurdish: 'وەسفکرنا ژوورەکێ',
    dialogue: [
      { speaker: 'Interior Designer', text: 'This room has too much old furniture.', translation: 'ئەڤ ژوورە گەلەک کەلوپەلێن ناڤمالێ یێن کەڤن تێدا نە.' },
      { speaker: 'Owner', text: 'I want to make it modern and clean.', translation: 'من دڤێت بکەمە یا نوو و پاقژ.' },
      { speaker: 'Interior Designer', text: 'Let\'s paint the walls light gray and get a new rug.', translation: 'وەرە دێ دیواران ب رەنگێ قاوەیی گەش کێشین و مەفرەشەکا (راخەرەوکەکا) نوو کڕین.' },
      { speaker: 'Owner', text: 'That sounds like a good plan.', translation: 'پلاندانانەکا باشە.' }
    ],
    vocabulary: [
      { word: 'Furniture', translation: 'کەلوپەلێن ناڤمالێ' },
      { word: 'Modern', translation: 'نوو / سەردەم' },
      { word: 'Walls', translation: 'دیوار / کەند' },
      { word: 'Rug', translation: 'مەفرەش / راخەروک' }
    ]
  },
  {
    id: 'a1-73',
    level: 'A1',
    title: 'Asking for Price (Market)',
    titleKurdish: 'پرسیارکرنا بها (نرخ) ل بازاری',
    dialogue: [
      { speaker: 'Buyer', text: 'How much are these grapes per kilo?', translation: 'ئەڤ تری یە کیلۆیا وێ ب چەندێیە؟' },
      { speaker: 'Seller', text: 'They are two dollars, but very sweet.', translation: 'ب دوو دۆلارانە، لێ یا زۆر شرینە.' },
      { speaker: 'Buyer', text: 'Can you give me a discount if I buy five kilos?', translation: 'دکاری هندەکێ بۆ من کێم کەی (داشکانێ بکەی) ئەگەر پێنج کیلۆیان بکڕم؟' },
      { speaker: 'Seller', text: 'Okay, I will give them to you for eight dollars in total.', translation: 'باشە، دێ هەمییان ب هەشت دۆلاران دەمە تە.' }
    ],
    vocabulary: [
      { word: 'Grapes', translation: 'تری' },
      { word: 'Sweet', translation: 'شرین' },
      { word: 'Discount', translation: 'داشکان / کێمکرن' },
      { word: 'Total', translation: 'کۆی گشتی' }
    ]
  },
  {
    id: 'a1-74',
    level: 'A1',
    title: 'Meeting at the Cinema',
    titleKurdish: 'دیدارکرن ل سینەمایێ',
    dialogue: [
      { speaker: 'Leyla', text: 'Did you buy the tickets for the movie?', translation: 'تە پلێت (تیکێت) بۆ فلمی کڕین؟' },
      { speaker: 'Karwan', text: 'Yes, I bought them online already.', translation: 'بەلێ، من ژ بەریا نوکە ب رێکا ئینتەرنێتێ کڕین.' },
      { speaker: 'Leyla', text: 'What time does it start?', translation: 'دەمژمێر چەند دەستپێدکەت؟' },
      { speaker: 'Karwan', text: 'At seven o\'clock. Let\'s get some popcorn.', translation: 'ل دەمژمێر حەفتێ. وەرە دێ پاپکۆرنان (قەلییان) وەرگرین.' }
    ],
    vocabulary: [
      { word: 'Cinema', translation: 'سینەما' },
      { word: 'Online', translation: 'ب رێکا ئینتەرنێتێ' },
      { word: 'Start', translation: 'دەستپێکرن' },
      { word: 'Popcorn', translation: 'پاپکۆرن / قەلی' }
    ]
  },
  {
    id: 'a1-75',
    level: 'A1',
    title: 'Discussing Travel Plans',
    titleKurdish: 'بەحسکرنا پلانێن گەشتێ',
    dialogue: [
      { speaker: 'Alan', text: 'Where are you going for your vacation?', translation: 'بۆ بێهنڤەدانێ دێ چییە کیدەرێ؟' },
      { speaker: 'Sivan', text: 'I am planning to visit Turkey to see the sea.', translation: 'ئەز پلان دکەم بچمە تورکیا بۆ دیتنا دەریایێ.' },
      { speaker: 'Alan', text: 'Will you go by plane?', translation: 'ئەرێ دێ ب تەیارێ چی؟' },
      { speaker: 'Sivan', text: 'No, I prefer the bus to see the mountains on the way.', translation: 'نە، ئەز پاسێ هەلدبژێرم دا کو د رێکێ دا تەماشەی چیایان بکەم.' }
    ],
    vocabulary: [
      { word: 'Vacation', translation: 'بێهنڤەدان' },
      { word: 'Plane', translation: 'تەیارە / فرۆکە' },
      { word: 'Prefer', translation: 'هەلبژارتن / پێ باشتر بوون' },
      { word: 'Way', translation: 'رێک' }
    ]
  },
  {
    id: 'a1-76',
    level: 'A1',
    title: 'Weekend Shopping',
    titleKurdish: 'بازارکرنا دوماهیکا حەفتییێ',
    dialogue: [
      { speaker: 'Mother', text: 'We need to go to the bazaar for groceries.', translation: 'پێتڤییە ئەم بچینە بازاری بۆ کەرەستێن خوارنێ.' },
      { speaker: 'Daughter', text: 'Are we buying rice and oil today?', translation: 'ئەرێ ئەم ئەڤرۆ دێ برنجی و زەیتێ کڕین؟' },
      { speaker: 'Mother', text: 'Yes, and we need some spices for the biryani.', translation: 'بەلێ، و پێتڤی ب هندەک بهاراتان ژی مە بۆ بڕیانییێ.' },
      { speaker: 'Daughter', text: 'I will write a list so we don\'t forget anything.', translation: 'ئەز دێ لیستەکێ نڤیشم دا کو چو تشتان ژبیر نەکەین.' }
    ],
    vocabulary: [
      { word: 'Bazaar', translation: 'بازار' },
      { word: 'Groceries', translation: 'کەرەستێن خوارنێ' },
      { word: 'Spices', translation: 'بهارات' },
      { word: 'List', translation: 'لیستە' }
    ]
  },
  {
    id: 'a1-77',
    level: 'A1',
    title: 'My Favorite Teacher',
    titleKurdish: 'مامۆستایێ من یێ خوەشتڤی',
    dialogue: [
      { speaker: 'Ali', text: 'Who is your favorite teacher in school?', translation: 'باشترین مامۆستا ل قوتابخانێ ل دەڤ تە کێیە؟' },
      { speaker: 'Sara', text: 'Mrs. Hozan, she teaches mathematics.', translation: 'مامۆستا "هۆزان"، ئەو دەرسا بیرکارییێ (ماتماتیکێ) دبێژیت.' },
      { speaker: 'Ali', text: 'Is she strict with the students?', translation: 'ئەرێ ئەو یا توندە دگەل قوتابیان؟' },
      { speaker: 'Sara', text: 'No, she is very patient and explains everything clearly.', translation: 'نە، ئەو یا زۆر ب بێهنفەرهە و هەمی تشتان ب رۆهن و ئاشکرایی دیار دکەت.' }
    ],
    vocabulary: [
      { word: 'Mathematics', translation: 'بیرکاری / ماتماتیک' },
      { word: 'Strict', translation: 'توند' },
      { word: 'Patient', translation: 'ب بێهنفەرهـ / ب بێهن' },
      { word: 'Clearly', translation: 'ب ئاشکرایی / ب رۆهنی' }
    ]
  },
  {
    id: 'a1-78',
    level: 'A1',
    title: 'Cooking Dinner',
    titleKurdish: 'چێکرنا شێڤێ',
    dialogue: [
      { speaker: 'Husband', text: 'What are we having for dinner tonight?', translation: 'بۆ ئەڤ شەڤە ئەم دێ چ بۆ شێڤێ خۆین؟' },
      { speaker: 'Wife', text: 'I am making soup and frying some fish.', translation: 'ئەز یێ نیسکەکێ (شۆربەیەکێ) و هندەک ماسییان سوور دکەم.' },
      { speaker: 'Husband', text: 'That smells wonderful! Can I set the table?', translation: 'بێنا وێ زۆر یا خۆشە! ئەرێ مێزا خوارنێ رێک بێخم؟' },
      { speaker: 'Wife', text: 'Yes, please put the plates and forks out.', translation: 'بەلێ، بێ زەحمەت قاپ و چەتالان دانە سەر.' }
    ],
    vocabulary: [
      { word: 'Soup', translation: 'نیسک / شۆربە' },
      { word: 'Frying', translation: 'سوورکردن' },
      { word: 'Wonderful', translation: 'ب سەرسۆم / جوان' },
      { word: 'Forks', translation: 'چەتال' }
    ]
  },
  {
    id: 'a1-79',
    level: 'A1',
    title: 'In the Garden',
    titleKurdish: 'د باخچەی دا',
    dialogue: [
      { speaker: 'Father', text: 'Let\'s water the flowers together.', translation: 'وەرە دێ پێکڤە ئاڤێ دەینە گۆلان.' },
      { speaker: 'Son', text: 'The soil is very dry today.', translation: 'ئەڤرۆ عەرد (ئەرز) یێ زۆر حشکە.' },
      { speaker: 'Father', text: 'Yes, it was very hot this afternoon.', translation: 'بەلێ، ئەڤرۆ پشتی نیڤرۆ گەلەک گەرم بوو.' },
      { speaker: 'Son', text: 'Look, there is a butterfly on the rose!', translation: 'تەماشە بکە، پەپوولەک یا ل سەر گۆلا سۆر!' }
    ],
    vocabulary: [
      { word: 'Soil', translation: 'ئەرز / خاک' },
      { word: 'Dry', translation: 'حشک' },
      { word: 'Hot', translation: 'گەرم' },
      { word: 'Butterfly', translation: 'پەپوولە' }
    ]
  },
  {
    id: 'a1-80',
    level: 'A1',
    title: 'Choosing a Movie',
    titleKurdish: 'هەلبژارتنا فلمەکی',
    dialogue: [
      { speaker: 'Media', text: 'What movie should we watch tonight?', translation: 'بۆ ئەڤ شەڤە ئەم تەماشەی کیژان فلمی بکەین؟' },
      { speaker: 'Dilshad', text: 'How about an action movie or a comedy?', translation: 'ئەرێ فلمەکێ "ئاکشن" یان کۆمیدی چاوایە؟' },
      { speaker: 'Media', text: 'I prefer a comedy. I want to laugh.', translation: 'ئەز فلمەکێ کۆمیدی هەلدبژێرم. من دڤێت بکەنم.' },
      { speaker: 'Dilshad', text: 'Okay, let\'s look for a funny one.', translation: 'باشە، وەرە دێ ل فلمەکێ ب پێکەنین و کۆمیدی گەڕێین.' }
    ],
    vocabulary: [
      { word: 'Action', translation: 'ئاکشن / ب بزاڤ' },
      { word: 'Comedy', translation: 'کۆمیدی / ب پێکەنین' },
      { word: 'Laugh', translation: 'کەنین' },
      { word: 'Funny', translation: 'کۆمیدی / ب پێکەنین' }
    ]
  },
  {
    id: 'a1-81',
    level: 'A1',
    title: 'Visiting the Zoo',
    titleKurdish: 'سەرەدانا باخچێ ئاژەلان',
    dialogue: [
      { speaker: 'Child', text: 'Dad, look! A huge elephant!', translation: 'بابۆ، تەماشە بکە! فیلەکێ گەلەک مەزن!' },
      { speaker: 'Father', text: 'Yes, it is very strong. Do you want to see the lions?', translation: 'بەلێ، ئەو یێ زۆر ب هێزە. تو دخوازی شێران ببینی؟' },
      { speaker: 'Child', text: 'I am a little scared of them. Let\'s see the monkeys.', translation: 'ئەز هندەکێ ژ وان دترسم. وەرە دێ چینە نک مەیموینان.' },
      { speaker: 'Father', text: 'Monkeys are very funny and love bananas.', translation: 'مەیموین زۆر د کۆمیدین و حەز ژ مۆزان دکەن.' }
    ],
    vocabulary: [
      { word: 'Elephant', translation: 'فیل' },
      { word: 'Lion', translation: 'شێر' },
      { word: 'Scared', translation: 'ترس' },
      { word: 'Monkeys', translation: 'مەیموین' }
    ]
  },
  {
    id: 'a1-82',
    level: 'A1',
    title: 'Describing a Job (Doctor)',
    titleKurdish: 'وەسفکرنا کارەکی (نوژدار)',
    dialogue: [
      { speaker: 'Interviewer', text: 'What is the most difficult part of being a doctor?', translation: 'نەخۆشترین پشک د کارێ نوژدارییێ دا چییە؟' },
      { speaker: 'Doctor', text: 'Working long hours in the hospital and seeing sick people.', translation: 'کارکرن بۆ دەمژمێرێن درێژ ل نەخۆشخانێ و دیتنا کەسێن نەخۆش.' },
      { speaker: 'Interviewer', text: 'But you help many people stay healthy.', translation: 'لێ تۆ هاریکاریا گەلەک کەسان دکەی دا کو ب سلامەت بمینن.' },
      { speaker: 'Doctor', text: 'Yes, that is the most rewarding feeling.', translation: 'بەلێ، ئەوە خۆشترین هەست.' }
    ],
    vocabulary: [
      { word: 'Difficult', translation: 'ب زەحمەت' },
      { word: 'Healthy', translation: 'ب سلامەت / ساخلەم' },
      { word: 'Rewarding', translation: 'ب مفا / کەیفخۆشکەر' },
      { word: 'Feeling', translation: 'هەست' }
    ]
  },
  {
    id: 'a1-83',
    level: 'A1',
    title: 'Going to the Gym',
    titleKurdish: 'چوونە هۆڵا وەرزشی (جێم)',
    dialogue: [
      { speaker: 'Ali', text: 'How often do you go to the gym?', translation: 'تۆ چەند جاران دچییە وەرزشخانێ؟' },
      { speaker: 'Karwan', text: 'I go three times a week to stay fit.', translation: 'ئەز هەفتێ سێ جاران دچم دا کو لەشێ من یێ رێکخستی بیت.' },
      { speaker: 'Ali', text: 'Do you lift weights or run on the machine?', translation: 'تۆ قورسییان (ئاسنی) هەلدگری یان ل سەر ئامیرێ غارێ دای؟' },
      { speaker: 'Karwan', text: 'I do both, and I feel more energetic now.', translation: 'ئەز هەردووکان دکەم، و نوکە هەست ب چالاکیەکا زێدەتر دکەم.' }
    ],
    vocabulary: [
      { word: 'Often', translation: 'پتریا جاران' },
      { word: 'Fit', translation: 'رێکخستی / ساخلەم' },
      { word: 'Weights', translation: 'قورسی / ئاسن' },
      { word: 'Energetic', translation: 'چالاک / ب هێز' }
    ]
  },
  {
    id: 'a1-84',
    level: 'A1',
    title: 'In the Winter',
    titleKurdish: 'د وەرزێ زستانێ دا',
    dialogue: [
      { speaker: 'Viyan', text: 'It is freezing outside! Wear your warm coat.', translation: 'ل دەرڤە یێ زۆر سارە! قەپۆتێ (کۆتێ) خۆ یێ گەرم ل خۆ بکە.' },
      { speaker: 'Hozan', text: 'I will also bring my gloves and hat.', translation: 'ئەز دێ دەستکێش و کلاکا خۆ ژی ئینم.' },
      { speaker: 'Viyan', text: 'The mountains are white with snow now.', translation: 'چیا نوکە ب بەفرێ یێن سپی بووین.' },
      { speaker: 'Hozan', text: 'Everything looks so silent and peaceful.', translation: 'هەمی تشت یێ بێدەنگ و ب ئارامی دیار دکەن.' }
    ],
    vocabulary: [
      { word: 'Freezing', translation: 'زۆر سار / جەمدین' },
      { word: 'Coat', translation: 'قەپۆت / کۆت' },
      { word: 'Gloves', translation: 'دەستکێش' },
      { word: 'Silent', translation: 'بێدەنگ' }
    ]
  },
  {
    id: 'a1-85',
    level: 'A1',
    title: 'Inviting a Friend to Dinner',
    titleKurdish: 'داخوازکرنا هەڤالەکی بۆ شێڤێ',
    dialogue: [
      { speaker: 'Alan', text: 'Are you busy this Friday evening?', translation: 'ئەرێ تۆ ئەڤێ ئەینیێ پشتی نیڤرۆ یێ مژوولی؟' },
      { speaker: 'Renas', text: 'No, I have no plans. Why?', translation: 'نە، چو پلانێن من نینن. بۆچی؟' },
      { speaker: 'Alan', text: 'I would like to invite you to my house for dinner.', translation: 'من دڤێت تە داخواز بکەمە مالا خۆ بۆ شێڤێ.' },
      { speaker: 'Renas', text: 'That is very kind of you. I will be there!', translation: 'ئەفە ژ دلۆڤانیا تە یە. ئەز دێ وێرێ بم!' }
    ],
    vocabulary: [
      { word: 'Busy', translation: 'مژوول' },
      { word: 'Plans', translation: 'پلان' },
      { word: 'Invite', translation: 'داخوازکردن' },
      { word: 'Kind', translation: 'دلۆڤان / باش' }
    ]
  },
  {
    id: 'a1-86',
    level: 'A1',
    title: 'Ordering a Taxi (App)',
    titleKurdish: 'داخوازکرنا تەکسیکەکێ (ب رێکا بەرنامەی)',
    dialogue: [
      { speaker: 'Woman', text: 'Is the taxi driver near our location?', translation: 'ئەرێ شوفێرێ تەکسیکێ نێزیکی جهێ مە یە؟' },
      { speaker: 'Husband', text: 'Yes, the map says he will arrive in three minutes.', translation: 'بەلێ، نەخشە دبێژیت ئەو دێ گەریتە لێرە پشتی سێ خولەکان.' },
      { speaker: 'Woman', text: 'What is the car color and plate number?', translation: 'رەنگێ ترۆمبێلێ و ژمارا وێ چییە؟' },
      { speaker: 'Husband', text: 'It is a white Toyota with number 12345.', translation: 'تۆیۆتایەکا سپی یە ب ژمارە ١٢٣٤٥.' }
    ],
    vocabulary: [
      { word: 'Location', translation: 'جهـ' },
      { word: 'Map', translation: 'نەخشە' },
      { word: 'Plate number', translation: 'ژمارا ترۆمبێلێ' },
      { word: 'Arrive', translation: 'گەهشتن' }
    ]
  },
  {
    id: 'a1-87',
    level: 'A1',
    title: 'At the Bookstore',
    titleKurdish: 'ل پەرتووکفرۆشییێ',
    dialogue: [
      { speaker: 'Student', text: 'Do you have any English-Kurdish dictionaries?', translation: 'ئەرێ چو فەرهەنگێن ئنگلیزی-کوردی ل دەڤ تە هەنە؟' },
      { speaker: 'Clerk', text: 'Yes, we have a small one and a comprehensive one.', translation: 'بەلێ، مە یا بچووک و یا گشتگیر ژی یا هەی.' },
      { speaker: 'Student', text: 'How much is the comprehensive one?', translation: 'بهایێ یا گشتگیر ب چەندێیە؟' },
      { speaker: 'Clerk', text: 'It is 15 dollars. It also has examples.', translation: '١٥ دۆلارن. نموونە ژی تێدا هەنە.' }
    ],
    vocabulary: [
      { word: 'Dictionary', translation: 'فەرهەنگ' },
      { word: 'Comprehensive', translation: 'گشتگیر / تێر و تەسەل' },
      { word: 'Examples', translation: 'نموونە' },
      { word: 'Price', translation: 'نرخ' }
    ]
  },
  {
    id: 'a1-88',
    level: 'A1',
    title: 'Discussing a News Story',
    titleKurdish: 'بەحسکرنا چیرۆکەکا نووچەیان',
    dialogue: [
      { speaker: 'Ali', text: 'Did you hear about the new bridge building?', translation: 'تە بهیستی کو دێ کێلەکێ (کۆپرییەکێ) نوو ئاڤا کەن؟' },
      { speaker: 'Leyla', text: 'Yes, it will connect the two sides of the city.', translation: 'بەلێ، دێ هەردوو لایێن باژێڕی ب هەڤڤە گرێدەت.' },
      { speaker: 'Ali', text: 'It will make the traffic much lighter.', translation: 'دێ هاتنوچوونێ گەلەک سڤکتر لێ کەت.' },
      { speaker: 'Leyla', text: 'I hope it finishes soon.', translation: 'هیوادارم زوو ب دوماهی بهێت.' }
    ],
    vocabulary: [
      { word: 'Bridge', translation: 'کێل / کۆپری' },
      { word: 'Connect', translation: 'گرێدان' },
      { word: 'Traffic', translation: 'ترافیک / هاتنوچوون' },
      { word: 'Lighter', translation: 'سڤکتر' }
    ]
  },
  {
    id: 'a1-89',
    level: 'A1',
    title: 'Asking about a Route',
    titleKurdish: 'پرسیارکرن ل سەر رێکەکێ',
    dialogue: [
      { speaker: 'Driver', text: 'Is this the right road to the stadium?', translation: 'ئەرێ ئەڤە رێکا درۆستە بۆ یاریگەهێ (ستادیۆمێ)؟' },
      { speaker: 'Policeman', text: 'No, you missed the turn. Go back to the light.', translation: 'نە، تۆ ژ وێ زڤڕینێ دەرباز بووی. ڤەگەڕە سەر ترافتلایتێ (گلۆپا رێیێ).' },
      { speaker: 'Driver', text: 'Should I turn left or right there?', translation: 'بەرەڤ دەستێ چەپێ یان راستێ زڤڕم؟' },
      { speaker: 'Policeman', text: 'Turn right, and you will see it in front of you.', translation: 'بەرەڤ دەستێ راستێ پێک ڤە کە، دێ ل پێشیا خۆ بینی.' }
    ],
    vocabulary: [
      { word: 'Stadium', translation: 'یاریگەهـ / ستادیۆم' },
      { word: 'Missed', translation: 'دەربازبوون / فەوتین' },
      { word: 'Turn', translation: 'زڤڕین / سووربوون' },
      { word: 'Front', translation: 'پێش / بەرهەمبەر' }
    ]
  },
  {
    id: 'a1-90',
    level: 'A1',
    title: 'Complimenting a Meal',
    titleKurdish: 'وەسفکرنا خوارنەکێ',
    dialogue: [
      { speaker: 'Guest', text: 'This food is absolutely delicious!', translation: 'ئەڤ خوارنە ب درۆستی یا ب تام و خۆشە!' },
      { speaker: 'Host', text: 'I am so glad you like it. It is my grandmother\'s recipe.', translation: 'ئەز کەیفخۆشم کو ب دلێ تە بووی. ئەفە رێکارا (وەسفا) داپیرا منە.' },
      { speaker: 'Guest', text: 'What are the main ingredients?', translation: 'کەرەستێن سەرەکی چنە؟' },
      { speaker: 'Host', text: 'Rice, meat, and many traditional spices.', translation: 'برنج، گۆشت، و گەلەک بهاراتێن کەلتووری.' }
    ],
    vocabulary: [
      { word: 'Absolutely', translation: 'ب درۆستی / ب گشتی' },
      { word: 'Recipe', translation: 'وەسفا خوارنێ / رێکار' },
      { word: 'Ingredients', translation: 'کەرەستە / تێکتلێن' },
      { word: 'Traditional', translation: 'کەلتووری' }
    ]
  },
  {
    id: 'a1-91',
    level: 'A1',
    title: 'Planning a Birthday Party',
    titleKurdish: 'پلاندانان بۆ ئاهەنگا رۆژا ژدایکبوونێ',
    dialogue: [
      { speaker: 'Sara', text: 'Let\'s buy a big cake for my brother\'s birthday.', translation: 'وەرە دێ کێکەکا مەزن بۆ رۆژا ژدایکبوونا برایێ من کڕین.' },
      { speaker: 'Ali', text: 'What flavor does he like?', translation: 'چ تامەکێ حەز دکەت؟' },
      { speaker: 'Sara', text: 'Chocolate is his favorite. We also need balloons.', translation: 'شوکوڵاتە یا وی یا خوەشتڤی یە. پێتڤی ب بوفکێن (بالۆنێن) هەوایی دەین ژی مە.' },
      { speaker: 'Ali', text: 'I will invite our cousins too.', translation: 'ئەز دێ ئامۆزا و پسمامێن مە ژی داخواز کەم.' }
    ],
    vocabulary: [
      { word: 'Flavor', translation: 'تام / چێژ' },
      { word: 'Chocolate', translation: 'شوکوڵاتە' },
      { word: 'Balloons', translation: 'بۆفک / بالۆن' },
      { word: 'Cousins', translation: 'پسمام / پۆسمام' }
    ]
  },
  {
    id: 'a1-92',
    level: 'A1',
    title: 'Talking about Health',
    titleKurdish: 'ئاخفتن ل سەر ساخلەمییێ',
    dialogue: [
      { speaker: 'Media', text: 'You look tired today. Are you okay?', translation: 'تۆ ئەڤرۆ یێ وەنەوا (ماندی) دیار دکەی. ئەرێ تۆ باشی؟' },
      { speaker: 'Zana', text: 'I have a sore throat and a cough.', translation: 'گەڕییێ من یێ دهێشیت و ئەز دکۆخیم.' },
      { speaker: 'Media', text: 'You should stay home and drink warm lemon water.', translation: 'پێتڤییە ل مال بمینی و ئاڤا لیمۆنا گەرم بنۆشی.' },
      { speaker: 'Zana', text: 'I will go to the doctor if I don\'t feel better.', translation: 'ئەز دێ چمە نک نوژداری ئەگەر هەست ب باشیێ نەکەم.' }
    ],
    vocabulary: [
      { word: 'Tired', translation: 'ماندی / وەنەوا' },
      { word: 'Sore throat', translation: 'گەڕیی ئێشان / قۆڕگ ئێشان' },
      { word: 'Cough', translation: 'کۆخین' },
      { word: 'Stay home', translation: 'ل مال مان' }
    ]
  },
  {
    id: 'a1-93',
    level: 'A1',
    title: 'Renting an Apartment (Detailed)',
    titleKurdish: 'ب کرێ گرتنا شوقەیەکێ ب هووربنی',
    dialogue: [
      { speaker: 'Renter', text: 'Is the apartment on the first floor?', translation: 'ئەرێ شوقە ل نهۆما ئێکێ یە؟' },
      { speaker: 'Owner', text: 'No, it is on the third floor, but there is an elevator.', translation: 'نە، ل نهۆما سێیێ یە، لێ مەشعەدە (ئەسانسۆر) یا هەی.' },
      { speaker: 'Renter', text: 'Is electricity included in the rent?', translation: 'ئەرێ کرێیا کارەبێ ژی تێدایە؟' },
      { speaker: 'Owner', text: 'No, you pay for electricity and water separately.', translation: 'نە، تۆ دێ هەقێ کارەبێ و ئاڤێ ب جودا دەی.' }
    ],
    vocabulary: [
      { word: 'Floor', translation: 'نهۆم' },
      { word: 'Elevator', translation: 'مەشحەد / ئەسانسۆر' },
      { word: 'Electricity', translation: 'کارەب' },
      { word: 'Separately', translation: 'ب جودا' }
    ]
  },
  {
    id: 'a1-94',
    level: 'A1',
    title: 'Going to a Concert',
    titleKurdish: 'چوونە ئاهەنگەکا مۆزیکێ',
    dialogue: [
      { speaker: 'Hozan', text: 'The Kurdish singer is performing tonight.', translation: 'هونەرمەندێ کورد ئەڤ شەڤە دێ ئاهەنگێ گێڕیت.' },
      { speaker: 'Viyan', text: 'I love his voice! Where is the concert?', translation: 'ئەز حەز ژ دەنگێ وی دکەم! ئاهەنگ ل کیدەرێیە؟' },
      { speaker: 'Hozan', text: 'It is at the cultural hall downtown.', translation: 'ل هۆڵا رەوشەنبیری ل سەنتەرێ باژێڕی یە.' },
      { speaker: 'Viyan', text: 'Let\'s buy the tickets before they run out.', translation: 'وەرە دێ تیکێتان کڕین بەری تمام ببن.' }
    ],
    vocabulary: [
      { word: 'Singer', translation: 'هونەرمەند / سترانبێژ' },
      { word: 'Voice', translation: 'دەنگ' },
      { word: 'Concert', translation: 'ئاهەنگا مۆزیکێ' },
      { word: 'Run out', translation: 'تمام بوون / نەمان' }
    ]
  },
  {
    id: 'a1-95',
    level: 'A1',
    title: 'Buying a New Smartphone',
    titleKurdish: 'کڕینا مۆبایلەکا نوو',
    dialogue: [
      { speaker: 'Buyer', text: 'Does this phone have a good camera?', translation: 'ئەرێ کامیرەیەکا باش ل ڤێ مۆبایلێ یا هەی؟' },
      { speaker: 'Seller', text: 'Yes, it takes very clear photos even at night.', translation: 'بەلێ، وێنێن زۆر ئاشکرا دگریت حەتا د شەڤێ دا ژی.' },
      { speaker: 'Buyer', text: 'How much memory does it have?', translation: 'میژووا وێ (میمۆری) چەندە؟' },
      { speaker: 'Seller', text: 'It has 128 gigabytes of storage.', translation: '١٢٨ گێگابایت یێن هەلگرتنێ یێن تێدا.' }
    ],
    vocabulary: [
      { word: 'Camera', translation: 'کامیرە' },
      { word: 'Clear', translation: 'ئاشکرا / زەلال' },
      { word: 'Memory', translation: 'بیرهاتن / میمۆری' },
      { word: 'Storage', translation: 'هەلگرتن / بیرگە' }
    ]
  },
  {
    id: 'a1-96',
    level: 'A1',
    title: 'Discussing a Dream (Vision)',
    titleKurdish: 'بەحسکرنا خەونەکێ (دووربینی)',
    dialogue: [
      { speaker: 'Zin', text: 'I have a vision of opening my own English center.', translation: 'خەونەکا من یا هەی دا کو سەنتەرەکێ فێربوونا ئنگلیزیێ ڤەکەم.' },
      { speaker: 'Renas', text: 'That is wonderful. You are very hardworking.', translation: 'ئەفە زۆر یا جوانە. تۆ یێ گەلەک کۆششکەری (بزاڤکەری).' },
      { speaker: 'Zin', text: 'I want to encourage young people to learn languages.', translation: 'ئەز دخوازیم گەنجان هان بدەم دا کو فێری زمانان ببن.' },
      { speaker: 'Renas', text: 'Language is a bridge to the world.', translation: 'زمان کێلەکە (کۆپرییەکە) بۆ جیهانێ.' }
    ],
    vocabulary: [
      { word: 'Vision', translation: 'خەون / دووربینی' },
      { word: 'Center', translation: 'سەنتەر' },
      { word: 'Encourage', translation: 'هاندان / رێزپێدان' },
      { word: 'Bridge', translation: 'کێل / کۆپری' }
    ]
  },
  {
    id: 'a1-97',
    level: 'A1',
    title: 'In the Kitchen (Baking Cake)',
    titleKurdish: 'ل مەتەبخێ (چێکرنا کێکێ)',
    dialogue: [
      { speaker: 'Daughter', text: 'Mom, how much flour do we need for the cake?', translation: 'دایێ، کا چەند ئار مە بۆ کێکێ دڤێت؟' },
      { speaker: 'Mom', text: 'Three cups of flour and two eggs.', translation: 'سێ کۆپێن ئاری و دوو هێک.' },
      { speaker: 'Daughter', text: 'Should I add the sugar now?', translation: 'بلا ئەز شەکرێ نوکە زێدە کەم؟' },
      { speaker: 'Mom', text: 'Yes, and mix it slowly with the butter.', translation: 'بەلێ، و ب هێدی دگەل کەرێ تێکەل بکە.' }
    ],
    vocabulary: [
      { word: 'Flour', translation: 'ئار' },
      { word: 'Mix', translation: 'تێکەل کردن' },
      { word: 'Slowly', translation: 'ب هێدی / ب هێمنی' },
      { word: 'Butter', translation: 'کەرە / نیڤشک' }
    ]
  },
  {
    id: 'a1-98',
    level: 'A1',
    title: 'Meeting a New Neighbor',
    titleKurdish: 'دیتنا جیرانەکێ نوو',
    dialogue: [
      { speaker: 'Neighbor', text: 'Hello, I just moved into the house next door.', translation: 'سڵاڤ، پشتی نوکە ئەز چوومە د مالا جیران دا.' },
      { speaker: 'Local', text: 'Welcome to the neighborhood! My name is Azad.', translation: 'ب خێر بێی بۆ ڤێ کۆلانێ! ناڤێ من ئازادە.' },
      { speaker: 'Neighbor', text: 'Nice to meet you. I am Sivan.', translation: 'ب دیتنا تە کەیفخۆشم. ئەز سیڤانم.' },
      { speaker: 'Local', text: 'If you need anything, please ask me.', translation: 'ئەگەر پێتڤی ب هەر تشتەکی هەبوو، بێ زەحمەت ژ من پرسیار بکە.' }
    ],
    vocabulary: [
      { word: 'Moved', translation: 'چوون / ڤەگوهاستن' },
      { word: 'Neighbor', translation: 'جیران' },
      { word: 'Neighborhood', translation: 'دەڤەر / کۆلان' },
      { word: 'Ask', translation: 'پرسیارکردن' }
    ]
  },
  {
    id: 'a1-99',
    level: 'A1',
    title: 'At a Sports Match',
    titleKurdish: 'ل یارییەکا وەرزشی',
    dialogue: [
      { speaker: 'Fan 1', text: 'The atmosphere in the stadium is amazing!', translation: 'سەقا (کەشوهەوا) ل یاریگەهێ زۆر یێ سەرسۆڕهێنەرە!' },
      { speaker: 'Fan 2', text: 'Yes, the fans are shouting very loud.', translation: 'بەلێ، هاندەر یێ ب دەنگەکێ بلند غار دکەن (هەوار دکەن).' },
      { speaker: 'Fan 1', text: 'I hope our team scores the winning goal.', translation: 'هیوادارم تیما مە گۆلا سەرکەفتنێ تومار بکەت.' },
      { speaker: 'Fan 2', text: 'Look! They are very near the net now!', translation: 'تەماشە بکە! ئەوان گەلەک نێزیکی تۆرێ بووینە نوکە!' }
    ],
    vocabulary: [
      { word: 'Atmosphere', translation: 'سەقا / کەشوهەوا' },
      { word: 'Shouting', translation: 'هەوار / غارکرن' },
      { word: 'Winning', translation: 'سەرکەفتن' },
      { word: 'Net', translation: 'تۆر / شەبەک' }
    ]
  },
  {
    id: 'a1-100',
    level: 'A1',
    title: 'Saying Goodbye',
    titleKurdish: 'ماڵئاڤاهیکردن',
    dialogue: [
      { speaker: 'Alan', text: 'It is late. I have to go now.', translation: 'دیر بوو. پێتڤییە ئەز نوکە بچم.' },
      { speaker: 'Sara', text: 'Thank you for visiting us. It was a nice day.', translation: 'سوپاس بۆ سەرەدانا تە. رۆژەکا خۆش بوو.' },
      { speaker: 'Alan', text: 'I had a great time too. See you soon!', translation: 'ئەز ژی گەلەک کەیف ب دەمێ خۆ بر. تە دبێنم بەم زووانە!' },
      { speaker: 'Sara', text: 'Take care and goodbye!', translation: 'خۆ بپارێزە و ماڵئاڤا!' }
    ],
    vocabulary: [
      { word: 'Late', translation: 'دیر / درەنگ' },
      { word: 'Visiting', translation: 'سەرەدان' },
      { word: 'Soon', translation: 'بەم زووانە' },
      { word: 'Take care', translation: 'خۆ بپارێزە' }
    ]
  },
  {
    id: 'a2-1',
    level: 'A2',
    title: 'Talking about a Weekend Trip',
    titleKurdish: 'بەحسکرنا گەشتەکا دوماهیکا حەفتییێ',
    dialogue: [
      { speaker: 'Saman', text: 'Hey Alan! How was your weekend? Did you do anything fun?', translation: 'سڵاڤ ئالان! دوماهیکا حەفتییا تە چەوا بوو؟ تە چ تشتێن خۆش کرن؟' },
      { speaker: 'Alan', text: 'Hi Saman! Yes, I went to the mountains with my family.', translation: 'سڵاڤ سامن! بەلێ، ئەز دگەل خێزانا خۆ چوویمە چیای.' },
      { speaker: 'Saman', text: 'Oh, that sounds amazing. Which mountain did you go to?', translation: 'ئۆهـ، ئەفە گەلەک خۆش دیارە. هووین چوونە کیژان چیای؟' },
      { speaker: 'Alan', text: 'We went to Gara Mountain. The weather was perfect.', translation: 'ئەم چوونە چیایێ گارەی. سەقا زۆر یێ باش بوو.' },
      { speaker: 'Saman', text: 'Was it very cold there? Usually, it is cold at the top.', translation: 'ئەرێ ل وێرێ گەلەک سار بوو؟ ب گشتی، ل سەرێ چیای یا سارە.' },
      { speaker: 'Alan', text: 'It was a little cold in the morning, but warm in the afternoon.', translation: 'سپێدێ هندەکێ یا سار بوو، لێ پشتی نیڤرۆ یا گەرم بوو.' },
      { speaker: 'Saman', text: 'Did you have a picnic? What did you eat?', translation: 'ئەرێ هەوە سفرەیەک (پیک نیک) کر؟ هەوە چ خوار؟' },
      { speaker: 'Alan', text: 'Yes! My mother made some delicious dolma, and we made tea on the fire.', translation: 'بەلێ! دایکا من دۆلمەیەکا زۆر خۆش چێکر بوو، و مە چای ل سەر ئاگری چێکر.' },
      { speaker: 'Saman', text: 'That is my favorite! I love drinking tea outside.', translation: 'ئەو خوارنا من یا خوەشتڤییە! ئەز حەز ژ ڤەخوارنا چایێ دکەم ل دەرڤە.' },
      { speaker: 'Alan', text: 'What about you, Saman? What did you do this weekend?', translation: 'پا تو، سامن؟ تە چ کر ئەڤێ دوماهیکا حەفتیێ؟' },
      { speaker: 'Saman', text: 'I stayed home and watched some movies.', translation: 'ئەز ل مال مام و من تەماشەی هندەک فیلمێن سینەمایی کر.' },
      { speaker: 'Alan', text: 'Did you watch anything interesting?', translation: 'تە تەماشەی چو تشتێن سەرنجراکێش کر؟' },
      { speaker: 'Saman', text: 'I watched a documentary about space. It was very educational.', translation: 'من تەماشەی فیلمەکا بەلگەنامەیی کر ل سەر بۆشاییا ئاسمانی. گەلەک یا ب مفە بوو.' },
      { speaker: 'Alan', text: 'We should definitely go to the mountains together next time!', translation: 'پێتڤییە ئەم جارا بهێت پێکڤە بچینە چیای!' },
      { speaker: 'Saman', text: 'I would love that! Count me in.', translation: 'دێ حەز ژ وێ یەکێ کەم! ئەز یێ دگەلم.' }
    ],
    vocabulary: [
      { word: 'Weekend', translation: 'دوماهیکا حەفتییێ' },
      { word: 'Mountain', translation: 'چیا' },
      { word: 'Weather', translation: 'سەقا' },
      { word: 'Delicious', translation: 'ب تام / خۆش' },
      { word: 'Educational', translation: 'پەروەردەیی / فێربوون' },
      { word: 'Together', translation: 'پێکڤە' }
    ]
  },
  {
    id: 'a2-2',
    level: 'A2',
    title: 'Shopping at the Market',
    titleKurdish: 'بازارکرن ل مەیدانێ',
    dialogue: [
      { speaker: 'Sivan', text: 'How much are these tomatoes today?', translation: 'ئەڤ تەماتە ئەڤرۆ ب چەندن؟' },
      { speaker: 'Seller', text: 'They are two thousand dinars per kilo.', translation: 'کیلو ب دوو هزار دینارانە.' },
      { speaker: 'Sivan', text: 'They look very fresh. I will take three kilos.', translation: 'زۆر یێن تژی و فرێش دیارن. ئەز دێ سێ کیلۆیان بەم.' },
      { speaker: 'Seller', text: 'Great. Do you need anything else? We have fresh cucumbers too.', translation: 'گەلەک باشە. چو دی دڤێت؟ خەیارێن فرێش ژی هەین.' },
      { speaker: 'Sivan', text: 'Yes, give me one kilo of cucumbers and some onions.', translation: 'بەلێ، کیلۆیەکا خەیاران و هندەک پیڤازان بدە من ژی.' }
    ],
    vocabulary: [
      { word: 'Market', translation: 'بازار / مەیدان' },
      { word: 'Fresh', translation: 'فرێش / تژی' },
      { word: 'Cucumbers', translation: 'خەیار' },
      { word: 'Onions', translation: 'پیڤاز' }
    ]
  },
  {
    id: 'a2-3',
    level: 'A2',
    title: 'Talking about Hobbies',
    titleKurdish: 'ئاخفتن ل سەر خولیایان',
    dialogue: [
      { speaker: 'Sara', text: 'What do you like to do in your free time?', translation: 'تۆ حەز دکەی چ بکەی د دەما خوە یا ڤالا دا؟' },
      { speaker: 'Azad', text: 'I really enjoy swimming and playing football.', translation: 'ئەز گەلەک حەز ژ مەلەڤانیێ و تەپاپێ دکەم.' },
      { speaker: 'Sara', text: 'That sounds active! I prefer reading books and drawing.', translation: 'ئەڤە دیارە تۆ یێ چالاکی! ئەز خواندنا پەرتووکان و وێنەکێشانێ پێ باشتر دبینم.' },
      { speaker: 'Azad', text: 'Drawing is a great talent. How long have you been doing it?', translation: 'وێنەکێشان بەهرەیەکا مەزنە. کا چەندە تۆ وێ دکەی؟' },
      { speaker: 'Sara', text: 'I have been drawing since I was a child.', translation: 'ئەز وێنەی دکێشم ژ دەما ئەز زارۆک.' }
    ],
    vocabulary: [
      { word: 'Free time', translation: 'دەما ڤالا' },
      { word: 'Swimming', translation: 'مەلەڤانی' },
      { word: 'Talent', translation: 'بەهرە' },
      { word: 'Drawing', translation: 'وێنەکێشان' }
    ]
  },
  {
    id: 'a2-4',
    level: 'A2',
    title: 'At the Cinema',
    titleKurdish: 'ل سینەمایێ',
    dialogue: [
      { speaker: 'Ahmed', text: 'Which movie should we watch tonight?', translation: 'کیش فیلمی ئەڤ شەڤە تەماشە بکەین؟' },
      { speaker: 'Leyla', text: 'I want to see the new action movie. It has good reviews.', translation: 'من دڤێت بزانم فیلمێ ئەکشنێ یێ نوو. رەخنێن باش ل سەر هەین.' },
      { speaker: 'Ahmed', text: 'Okay, let\'s check the showtimes. It starts at 8:00 PM.', translation: 'باشە، وەرە دەمێن نیشاندانێ بپشکنین. ل دەمژمێر ٨ ی ئێڤاری دەستپێ دکەت.' },
      { speaker: 'Leyla', text: 'Perfect. I will buy the tickets online.', translation: 'درۆستە. ئەز دێ بلیتێن ئۆنلاین کڕم.' },
      { speaker: 'Ahmed', text: 'Don\'t forget to buy some popcorn and soda!', translation: 'بیر نەکەی هندەک پۆپکۆرن و سۆدایێ کڕی!' }
    ],
    vocabulary: [
      { word: 'Movie', translation: 'فیلم' },
      { word: 'Reviews', translation: 'رەخنە / پێداچوون' },
      { word: 'Showtimes', translation: 'دەمێن نیشاندانێ' },
      { word: 'Popcorn', translation: 'پۆپکۆرن / شامۆک' }
    ]
  },
  {
    id: 'a2-5',
    level: 'A2',
    title: 'Renting a Car',
    titleKurdish: 'ب کرێ گرتنا ترومبێلەکێ',
    dialogue: [
      { speaker: 'Customer', text: 'I would like to rent a car for three days.', translation: 'من دڤێت ترومبێلەکێ بۆ سێ رۆژان ب کرێ بگرم.' },
      { speaker: 'Agent', text: 'Sure, we have compact cars and SUVs available.', translation: 'بێگومان، مە ترومبێلێن بچووک و SUV یێن بەردەست هەین.' },
      { speaker: 'Customer', text: 'An SUV would be better for the mountains.', translation: 'ترومبێلەکا SUV دێ باشتر بیت بۆ چیا.' },
      { speaker: 'Agent', text: 'Excellent choice. Can I see your driver\'s license?', translation: 'هەلبژارتنەکا نایەبە. ئەرێ دکارم مۆۆڵەتا تە یا هاژۆتنێ ببێنم؟' },
      { speaker: 'Customer', text: 'Yes, here it is. Is insurance included?', translation: 'بەلێ، ئەڤە یە. ئەرێ بیمە (تامین) تێدایە؟' }
    ],
    vocabulary: [
      { word: 'Rent', translation: 'کرێ' },
      { word: 'License', translation: 'مۆڵەت' },
      { word: 'Insurance', translation: 'بیمە / تامین' },
      { word: 'Available', translation: 'بەردەست' }
    ]
  },
  {
    id: 'a2-6',
    level: 'A2',
    title: 'Talking about the Weather',
    titleKurdish: 'ئاخفتن ل سەر سەقای',
    dialogue: [
      { speaker: 'Danyar', text: 'It is very cold outside today, isn\'t it?', translation: 'ئەڤرۆ ل دەرڤە گەلەک سارە، وانییە؟' },
      { speaker: 'Ari', text: 'Yes, it is freezing! I think it might snow later.', translation: 'بەلێ، زۆر یا سارە! ئەز هزردکەم دێ بەفر باریت پشتی نوکە.' },
      { speaker: 'Danyar', text: 'I love the snow, but I don\'t like the wind.', translation: 'ئەز حەز ژ بەفرێ دکەم، لێ حەز ژ بێهێ (بای) ناکەم.' },
      { speaker: 'Ari', text: 'Me neither. The wind makes it feel even colder.', translation: 'ئەز ژی وەسا. با دکەت کو مرۆڤ پتر هەست ب سەرمایێ بکەت.' },
      { speaker: 'Danyar', text: 'Let\'s stay inside and drink some hot tea.', translation: 'وەرە دێ ل ناڤمالێ مینین و هندەک چایێ گەرم ڤەخۆین.' }
    ],
    vocabulary: [
      { word: 'Freezing', translation: 'زۆر سار / جەمدین' },
      { word: 'Snow', translation: 'بەفر' },
      { word: 'Wind', translation: 'با / بێهـ' },
      { word: 'Outside', translation: 'ل دەرڤە' }
    ]
  },
  {
    id: 'a2-7',
    level: 'A2',
    title: 'A Visit to the Doctor',
    titleKurdish: 'سەرەدانەک بۆ نک دکتۆری',
    dialogue: [
      { speaker: 'Doctor', text: 'What seems to be the problem today?', translation: 'ئاریشە چییە ئەڤرۆ؟' },
      { speaker: 'Patient', text: 'I have a terrible headache and a fever.', translation: 'سەرئێشانەکا مەزن و تایا من یا هەی.' },
      { speaker: 'Doctor', text: 'How long have you felt like this?', translation: 'کا چەندە بۆتە ڤە؟' },
      { speaker: 'Patient', text: 'Since yesterday evening.', translation: 'ژ دوهی ئێڤاری وەرە.' },
      { speaker: 'Doctor', text: 'I will prescribe some medicine. You need rest.', translation: 'ئەز دێ هندەک دەرمانان بۆتە نڤێسم. پێتڤی ب بێهنڤەدانێ یە.' }
    ],
    vocabulary: [
      { word: 'Headache', translation: 'سەرئێشان' },
      { word: 'Fever', translation: 'تا' },
      { word: 'Prescribe', translation: 'نڤێسینا دەرمانی' },
      { word: 'Medicine', translation: 'دەرمان' }
    ]
  },
  {
    id: 'a2-8',
    level: 'A2',
    title: 'Talking about School',
    titleKurdish: 'ئاخفتن ل سەر قوتابخانێ',
    dialogue: [
      { speaker: 'Student A', text: 'What is your favorite subject at school?', translation: 'خوەشتڤیترین بابەتێ تە ل قوتابخانێ چییە؟' },
      { speaker: 'Student B', text: 'I really like history. It is so interesting.', translation: 'ئەز زۆر حەز ژ دیرۆکێ دکەم. گەلەک یا سەرنجراکێشە.' },
      { speaker: 'Student A', text: 'I prefer science and math. I like solving problems.', translation: 'ئەز زانست و ماتماتیکێ ب باشتر دبینم. من حەز ل سەر چارەسەرکرنا پسیارایە.' },
      { speaker: 'Student B', text: 'Do you have a lot of homework tonight?', translation: 'ئەرێ ئەڤ شەڤە گەلەک ئەرکێن مالێ یێن تە هەین؟' },
      { speaker: 'Student A', text: 'Yes, I have an essay to write for English class.', translation: 'بەلێ، من نڤێسینەک (ئێسەیەک) یا هەی بۆ وانا ئنگلیزی بنڤێسم.' }
    ],
    vocabulary: [
      { word: 'Subject', translation: 'بابەت' },
      { word: 'History', translation: 'دیرۆک' },
      { word: 'Solving', translation: 'چارەسەرکردن' },
      { word: 'Essay', translation: 'کورتە نڤێسین / ئێسێ' }
    ]
  },
  {
    id: 'a2-9',
    level: 'A2',
    title: 'Ordering Coffee',
    titleKurdish: 'داخوازکرنا قەهوێ',
    dialogue: [
      { speaker: 'Barista', text: 'Hello! What can I get for you?', translation: 'سڵاڤ! دکارم چ بۆتە ئامادە بکەم؟' },
      { speaker: 'Customer', text: 'I\'ll have a large latte with sugar, please.', translation: 'من لاتیەکێ مەزن ب شەکر ڤە دڤێت، بێ زەحمەت.' },
      { speaker: 'Barista', text: 'Would you like that for here or to go?', translation: 'تۆ دێ ل ڤێرێ ڤەخۆیی یان بۆ دەرڤە دڤێت؟' },
      { speaker: 'Customer', text: 'To go, please. Also, can I have a blueberry muffin?', translation: 'بۆ دەرڤە، بێ زەحمەت. هەروەسا، ئەرێ دکارم کێکەکا بلووبێری (muffin) وەرگرم؟' },
      { speaker: 'Barista', text: 'Of course. That will be six dollars.', translation: 'بێگومان. دێ بیتە شەش دۆلار.' }
    ],
    vocabulary: [
      { word: 'Large', translation: 'مەزن' },
      { word: 'To go', translation: 'بۆ برنێ بۆ دەرڤە' },
      { word: 'Sugar', translation: 'شەکر' },
      { word: 'Muffin', translation: 'کێکەکا بچووک' }
    ]
  },
  {
    id: 'a2-10',
    level: 'A2',
    title: 'Daily Routine',
    titleKurdish: 'کارێن رۆژانە',
    dialogue: [
      { speaker: 'Zana', text: 'What time do you usually wake up?', translation: 'تۆ ب گشتی دەمژمێر چەند ژ خەو رادبی؟' },
      { speaker: 'Azad', text: 'I wake up at 7:00 AM every day.', translation: 'ئەز هەر رۆژ دەمژمێر ٧ ی سپێدێ رادبم.' },
      { speaker: 'Zana', text: 'That is early! What do you do next?', translation: 'ئەڤە زۆر زوویە! پاشان تۆ چ دکەی؟' },
      { speaker: 'Azad', text: 'I have breakfast, brush my teeth, and then go to work.', translation: 'تێشتێ دخۆم، ددانێن خۆ دشۆم، و پاشان دچمە سەر کاری.' },
      { speaker: 'Zana', text: 'I prefer to sleep until 9:00 AM if I can!', translation: 'ئەز حەز دکەم هەتا ٩ بنڤم ئەگەر بۆ من ببیژیت!' }
    ],
    vocabulary: [
      { word: 'Wake up', translation: 'ژ خەو رابوون' },
      { word: 'Breakfast', translation: 'تێشت' },
      { word: 'Brush', translation: 'شۆشتن (ددان)' },
      { word: 'Usually', translation: 'ب گشتی' }
    ]
  },
  {
    id: 'a2-11',
    level: 'A2',
    title: 'Talking about a Trip',
    titleKurdish: 'ئاخفتن ل سەر گەشتەکێ',
    dialogue: [
      { speaker: 'Amal', text: 'Where did you go for your vacation?', translation: 'تۆ بۆ بێهنڤەدانا خۆ چوویە کیڤە؟' },
      { speaker: 'Hevi', text: 'I went to Istanbul with my family.', translation: 'ئەز دگەل خێزانا خۆ چوومە ئەستەنبۆلێ.' },
      { speaker: 'Amal', text: 'How was the weather there?', translation: 'سەقا ل وێرێ چەوا بوو؟' },
      { speaker: 'Hevi', text: 'It was sunny and warm. We visited many historic places.', translation: 'تاڤ و گەرم بوو. مە سەرەدانا گەلەک جهێن دیرۆکی کر.' },
      { speaker: 'Amal', text: 'That sounds like a wonderful trip!', translation: 'وەسا دیارە گەشتەکا ناوازە بوو!' }
    ],
    vocabulary: [
      { word: 'Vacation', translation: 'بێهنڤەدان / فەراغ' },
      { word: 'Sunny', translation: 'تاڤ' },
      { word: 'Historic', translation: 'دیرۆکی' },
      { word: 'Wonderful', translation: 'ناوازە / جوان' }
    ]
  },
  {
    id: 'a2-12',
    level: 'A2',
    title: 'Buying Clothes',
    titleKurdish: 'کڕینا جلوبەرگان',
    dialogue: [
      { speaker: 'Customer', text: 'Excuse me, do you have this shirt in a smaller size?', translation: 'بێ زەحمەت، ئەرێ قەمیسێ تە ژ ڤی ب قەبارەکێ بچووکتر هەیە؟' },
      { speaker: 'Staff', text: 'Let me check... Yes, we have it in small and medium.', translation: 'بلا بپشکنم... بەلێ، مە یێ بچووک و ناڤین یێ هەین.' },
      { speaker: 'Customer', text: 'Can I try it on, please?', translation: 'ئەرێ دکارم تاقی بکەم بێ زەحمەت؟' },
      { speaker: 'Staff', text: 'Of course. The fitting rooms are over there.', translation: 'بێگومان. ژوورێن تاقیکرنێ ل وێرێنە.' },
      { speaker: 'Customer', text: 'It fits perfectly. How much is it?', translation: 'زۆر یێ درستە. ب چەندن؟' }
    ],
    vocabulary: [
      { word: 'Shirt', translation: 'قەمیس' },
      { word: 'Smaller', translation: 'بچووکتر' },
      { word: 'Fitting room', translation: 'ژوورا تاقیکرنێ' },
      { word: 'Size', translation: 'قەبارە' }
    ]
  },
  {
    id: 'a2-13',
    level: 'A2',
    title: 'At the Library',
    titleKurdish: 'ل پەرتووکخانێ',
    dialogue: [
      { speaker: 'Student', text: 'I am looking for a book about world history.', translation: 'ئەز ل پەرتووکەکێ دەربارەی دیرۆکا جیهانێ دگەڕێم.' },
      { speaker: 'Librarian', text: 'Those are in the non-fiction section on the second floor.', translation: 'ئەو ل بەشێ پەرتووکێن راستی نە ل نهۆما دووێ.' },
      { speaker: 'Student', text: 'Can I borrow this book for two weeks?', translation: 'ئەرێ دکارم ڤێ پەرتووکێ بۆ دوو حەفتییان ب قەرز ببەم؟' },
      { speaker: 'Librarian', text: 'Yes, just show me your library card.', translation: 'بەلێ، تەنیا کارتا خۆ یا پەرتووکخانێ نیشا من بدە.' },
      { speaker: 'Student', text: 'Here it is. Thank you for your help.', translation: 'ئەڤە یە. سوپاس بۆ هاریکاریا تە.' }
    ],
    vocabulary: [
      { word: 'Borrow', translation: 'ب قەرز برن' },
      { word: 'Librarian', translation: 'پەرتووکخانەوان' },
      { word: 'Section', translation: 'بەش' },
      { word: 'Card', translation: 'کارت' }
    ]
  },
  {
    id: 'a2-14',
    level: 'A2',
    title: 'In a Restaurant (Asking for the Bill)',
    titleKurdish: 'ل خوارنگەهێ (داخوازکرنا پسوولێ)',
    dialogue: [
      { speaker: 'Sara', text: 'The meal was delicious. Could we have the bill, please?', translation: 'خوارن زۆر یا خۆش بوو. دکاری پسوولێ (حسابێ) بۆ مە بینی، بێ زەحمەت؟' },
      { speaker: 'Waiter', text: 'Certainly. Here you are.', translation: 'بێگومان. ئەڤە پسوولە.' },
      { speaker: 'Sara', text: 'Do you accept credit cards?', translation: 'ئەرێ هوین کارتا پارەی (کرێدیت کارت) قەبیل دکەن؟' },
      { speaker: 'Waiter', text: 'Yes, we accept all major cards.', translation: 'بەلێ، ئەم هەمی کارتێن سەرەکی قەبیل دکەین.' },
      { speaker: 'Sara', text: 'Great. Keep the change as a tip.', translation: 'باشە. باقیێ پارەی بۆ خۆ ببە وەک دیاری (تیپ).' }
    ],
    vocabulary: [
      { word: 'Bill', translation: 'پسوولە / حساب' },
      { word: 'Credit card', translation: 'کارتا پارەی' },
      { word: 'Accept', translation: 'قەبیلكردن / پەسەندکردن' },
      { word: 'Tip', translation: 'دیاریا پارەی / بەخشیش' }
    ]
  },
  {
    id: 'a2-15',
    level: 'A2',
    title: 'Talking about Family',
    titleKurdish: 'ئاخفتن ل سەر خێزانێ',
    dialogue: [
      { speaker: 'Ali', text: 'Do you have any brothers or sisters?', translation: 'ئەرێ چ برا یان خوشکێن تە هەین؟' },
      { speaker: 'Daryar', text: 'I have one older brother and two younger sisters.', translation: 'من برایەکێ ژ من مەزنتر و دوو خوشکێن ژ من بچووکتر هەین.' },
      { speaker: 'Ali', text: 'Do you all live together?', translation: 'ئەرێ هوین هەمی ب هەڤ رە دژین؟' },
      { speaker: 'Daryar', text: 'No, my brother lives in another city for work.', translation: 'نە، برایێ من ل باژێڕەکێ دی دژیت بۆ کاری.' },
      { speaker: 'Ali', text: 'I see. I am an only child.', translation: 'تێگەهشتم. ئەز تاکە زارۆکم.' }
    ],
    vocabulary: [
      { word: 'Older', translation: 'مەزنتر' },
      { word: 'Younger', translation: 'بچووکتر' },
      { word: 'Together', translation: 'پێکڤە' },
      { word: 'Only child', translation: 'تاکە زارۆک' }
    ]
  },
  {
    id: 'a2-16',
    level: 'A2',
    title: 'Returning a Product',
    titleKurdish: 'زڤڕاندنا کەلوپەلەکی',
    dialogue: [
      { speaker: 'Customer', text: 'I would like to return this watch. It does not work.', translation: 'من دڤێت ئەڤێ دەمژمێرێ ب زڤڕینم. کار ناکەت.' },
      { speaker: 'Cashier', text: 'I am sorry to hear that. Do you have the receipt?', translation: 'دلگرانم کو ئەڤێ دبهیزم. ئەرێ پسوولە (وەسل) یا تە هەیە؟' },
      { speaker: 'Customer', text: 'Yes, here is the receipt. I bought it last week.', translation: 'بەلێ، ئەڤە پسوولەیە. من ل حەفتیا چۆیی کڕیبوو.' },
      { speaker: 'Cashier', text: 'Would you like an exchange or a refund?', translation: 'تۆ دڤێت بگۆهۆڕی یان پارێ تە بۆتە ب زڤڕیت؟' },
      { speaker: 'Customer', text: 'A refund, please.', translation: 'بلا پارێ من ب زڤڕیت، بێ زەحمەت.' }
    ],
    vocabulary: [
      { word: 'Return', translation: 'زڤڕاندن' },
      { word: 'Receipt', translation: 'وەسل / پسوولە' },
      { word: 'Exchange', translation: 'گۆهۆڕین' },
      { word: 'Refund', translation: 'زڤڕاندنا پارەی' }
    ]
  },
  {
    id: 'a2-17',
    level: 'A2',
    title: 'At the Airport',
    titleKurdish: 'ل فرۆکەخانێ',
    dialogue: [
      { speaker: 'Staff', text: 'Can I see your passport and ticket, please?', translation: 'دکارم پاسپۆرت و بلیتێن تە ببێنم، بێ زەحمەت؟' },
      { speaker: 'Traveler', text: 'Yes, here they are. How many bags can I check in?', translation: 'بەلێ، ئەڤە نە. چەند جانتا دکارم ب شینم؟' },
      { speaker: 'Staff', text: 'You are allowed two suitcases. Do you have any hand luggage?', translation: 'رێ ب تە دهێتە دان دوو جانتایێن مەزن ببەی. ئەرێ چ جانتایێن دەستی هەین؟' },
      { speaker: 'Traveler', text: 'Just this small backpack.', translation: 'تەنیا ئەڤ جانتایێ پشتا یێ بچووک.' },
      { speaker: 'Staff', text: 'That is fine. Have a safe flight.', translation: 'ئەو درۆستە. گەشتەکا تەنا و ساخلەم.' }
    ],
    vocabulary: [
      { word: 'Passport', translation: 'پاسپۆرت' },
      { word: 'Suitcase', translation: 'جانتا مەزن' },
      { word: 'Luggage', translation: 'کەلوپەلێن سەفەرێ' },
      { word: 'Flight', translation: 'گەشت' }
    ]
  },
  {
    id: 'a2-18',
    level: 'A2',
    title: 'Talking about Future Plans',
    titleKurdish: 'ئاخفتن ل سەر پلانێن پاشەرۆژێ',
    dialogue: [
      { speaker: 'Lana', text: 'What are you going to do after you graduate?', translation: 'تۆ دێ چ کەی پشتی تۆ دەردچی (تەخەروج دکەی)؟' },
      { speaker: 'Sherzad', text: 'I am planning to study for a master\'s degree abroad.', translation: 'ئەز پلانا هندێ دکەم ل دەرڤەی وەلاتی ماستەرێ بخوینم.' },
      { speaker: 'Lana', text: 'That sounds exciting! Which country do you want to go to?', translation: 'ئەڤە زۆر کەیفخۆشکەرە! دڤێت بچییە کیش وەلاتی؟' },
      { speaker: 'Sherzad', text: 'I am thinking about the UK or Canada.', translation: 'ئەز هزرا بەریتانیا یان کەنەدا دکەم.' },
      { speaker: 'Lana', text: 'I hope you achieve your goals.', translation: 'هیوادارم بگەوهییە ئامانجێن خۆ.' }
    ],
    vocabulary: [
      { word: 'Graduate', translation: 'دەستکێشان / تەخەروج' },
      { word: 'Abroad', translation: 'ل دەرڤەی وەڵاتی' },
      { word: 'Exciting', translation: 'کەیفخۆشکەر' },
      { word: 'Achieve', translation: 'گەهشتن / ب دەست ڤە ئینان' }
    ]
  },
  {
    id: 'a2-19',
    level: 'A2',
    title: 'Health and Exercise',
    titleKurdish: 'ساخلەمی و وەرزش',
    dialogue: [
      { speaker: 'Coach', text: 'How often do you exercise every week?', translation: 'کا چەند جاران تۆ وەرزشێ دکەی هەموو حەفتییەکێ؟' },
      { speaker: 'Member', text: 'I try to go to the gym three times a week.', translation: 'ئەز هەوڵ ددەم سێ جاران بچمە نک (جیم) ی د حەفتیێ دا.' },
      { speaker: 'Coach', text: 'That is good. Do you also eat healthy food?', translation: 'ئەڤە باشە. ئەرێ تۆ خوارنا ساخلەم ژی دخۆیی؟' },
      { speaker: 'Member', text: 'I try to eat more vegetables and less fast food.', translation: 'ئەز هەوڵ ددەم پتر کەسکاتیێ و کێمتر خوارنێن بلەز (فەست فوود) بخۆم.' },
      { speaker: 'Coach', text: 'Keep it up! Consistency is key.', translation: 'بەردەوام بە! بەردەوامی خالەیا سەرەکی یە.' }
    ],
    vocabulary: [
      { word: 'Exercise', translation: 'وەرزش' },
      { word: 'Vegetables', translation: 'کەسکاتی' },
      { word: 'Consistency', translation: 'بەردەوامی' },
      { word: 'Healthy', translation: 'ساخلەم' }
    ]
  },
  {
    id: 'a2-20',
    level: 'A2',
    title: 'At the Bank',
    titleKurdish: 'ل بانقێ',
    dialogue: [
      { speaker: 'Clerk', text: 'How can I help you today?', translation: 'ئەز چەوا دکارم ئەڤرۆ هاریکاریا تە بکەم؟' },
      { speaker: 'Customer', text: 'I would like to open a new savings account.', translation: 'من دڤێت هەژمارەکا خەزنکرنێ (سەیڤینگ ئەکاونت) یا نوو ڤەکەم.' },
      { speaker: 'Clerk', text: 'Sure. I need your ID and a minimum deposit of fifty dollars.', translation: 'بێگومان. پێتڤی ب ناسنامەیا تە و کێمترین رێژەیا پارەی کو ٥٠ دۆلار بن یا هەی.' },
      { speaker: 'Customer', text: 'Okay, here is my ID and the cash.', translation: 'باشە، ئەڤە ناسنامەیا منە و ئەڤە ژی پارەیە.' },
      { speaker: 'Clerk', text: 'Thank you. Please sign this form.', translation: 'سوپاس. هیڤیە ڤێ فۆرمێ ئیمزا بکە.' }
    ],
    vocabulary: [
      { word: 'Savings account', translation: 'هەژمارا خەزنکرنێ' },
      { word: 'Deposit', translation: 'دانانا پارەی' },
      { word: 'ID', translation: 'ناسنامە / هوویە' },
      { word: 'Sign', translation: 'ئیمزا کردن' }
    ]
  },
  {
    id: 'a2-21',
    level: 'A2',
    title: 'Asking for Directions (Detailed)',
    titleKurdish: 'پرسیارکرن ل سەر رێکێ ب هووربنی',
    dialogue: [
      { speaker: 'Tourist', text: 'Excuse me, can you tell me how to get to the museum?', translation: 'بێ زەحمەت، دکاری ببێژی من چەوا دچمە مۆزەخانێ؟' },
      { speaker: 'Local', text: 'Yes. Go straight down this street, then turn left at the traffic light.', translation: 'بەلێ. ب رێک بڕەو خوارێ ل ڤێ کۆلانێ، پاشان بەرەڤ جودا ل سەر ترافتلایتێ زڤڕە.' },
      { speaker: 'Tourist', text: 'Is it far from here?', translation: 'ئەرێ ل ڤێرێ یا دوویرە؟' },
      { speaker: 'Local', text: 'No, it is about a ten-minute walk.', translation: 'نە، نزیکەی دەهـ خولەکان ب پێبانە (پیاسە).' },
      { speaker: 'Tourist', text: 'Thank you very much for your help.', translation: 'زۆر سوپاس بۆ هاریکاریا تە.' }
    ],
    vocabulary: [
      { word: 'Museum', translation: 'مۆزەخانە' },
      { word: 'Straight', translation: 'راست / بێ زڤڕین' },
      { word: 'Far', translation: 'دوویر' },
      { word: 'Walk', translation: 'برێڤەچوون / پێبا' }
    ]
  },
  {
    id: 'a2-22',
    level: 'A2',
    title: 'Job Interview (Simple)',
    titleKurdish: 'دیدارکرنا کاری (سادە)',
    dialogue: [
      { speaker: 'Manager', text: 'Why do you want to work for our company?', translation: 'بۆچی دڤێت ل کۆمپانیا مە کار بکەی؟' },
      { speaker: 'Applicant', text: 'I have experience in sales and I like meeting new people.', translation: 'ئەزموونا من د وارێ فرۆشتنێ دا یا هەی و من حەز ل سەر دیتنا مرۆڤێن نوو یە.' },
      { speaker: 'Manager', text: 'What are your strengths?', translation: 'خالێن تە یێن ب هێز چنە؟' },
      { speaker: 'Applicant', text: 'I am hardworking and very organized.', translation: 'ئەز زۆر ب بزاڤم و یێ رێکوپێکم.' },
      { speaker: 'Manager', text: 'Thank you. We will call you next week.', translation: 'سوپاس. دێ حەفتیا بهێت پەیوەندیێ ب تە بکەین.' }
    ],
    vocabulary: [
      { word: 'Experience', translation: 'ئەزموون' },
      { word: 'Hardworking', translation: 'ب بزاڤ / زەحمەتکێش' },
      { word: 'Organized', translation: 'رێکوپێک' },
      { word: 'Applicant', translation: 'خۆبەربژێر / پێشکێشکار' }
    ]
  },
  {
    id: 'a2-23',
    level: 'A2',
    title: 'Talking about Work',
    titleKurdish: 'ئاخفتن ل سەر کاری',
    dialogue: [
      { speaker: 'Leyla', text: 'What do you do for a living?', translation: 'کارێ تە چییە بۆ ژیانێ؟' },
      { speaker: 'Aveen', text: 'I work as a nurse at the city hospital.', translation: 'ئەز وەک پەرستار ل نەخۆشخانا باژێڕی کار دکەم.' },
      { speaker: 'Leyla', text: 'Is it a difficult job?', translation: 'ئەرێ کارەکێ بزەحمەتە؟' },
      { speaker: 'Aveen', text: 'Yes, it can be stressful, but I love helping patients.', translation: 'بەلێ، دکاریت بارگرانی بیت، لێ ئەز حەز دکەم هاریکاریا نەخۆشان بکەم.' },
      { speaker: 'Leyla', text: 'That is very noble of you.', translation: 'ئەڤە نیشانەیا مەزناهیا تە یە.' }
    ],
    vocabulary: [
      { word: 'Nurse', translation: 'پەرستار' },
      { word: 'Hospital', translation: 'نەخۆشخانە' },
      { word: 'Difficult', translation: 'بزەحمەت' },
      { word: 'Patients', translation: 'نەخۆشەکان' }
    ]
  },
  {
    id: 'a2-24',
    level: 'A2',
    title: 'At the Post Office',
    titleKurdish: 'ل پۆستەخانێ',
    dialogue: [
      { speaker: 'Clerk', text: 'How can I help you?', translation: 'ئەز چەوا دکارم هاریکاریا تە بکەم؟' },
      { speaker: 'User', text: 'I want to send this package to Erbil.', translation: 'من دڤێت ئەڤێ پاکێتێ (پارچێ) بۆ هەولێرێ ب هنێرم.' },
      { speaker: 'Clerk', text: 'Please put it on the scale. That will be ten thousand dinars.', translation: 'بێ زەحمەت دانە سەر کێشانێ. دێ بیتە دەهـ هزار دینار.' },
      { speaker: 'User', text: 'When will it arrive?', translation: 'کەنگی دێ گەهیت؟' },
      { speaker: 'Clerk', text: 'It should arrive in two days.', translation: 'پێتڤییە پشتی دوو رۆژان بگەهیت.' }
    ],
    vocabulary: [
      { word: 'Package', translation: 'پاکێت / پارچە' },
      { word: 'Arrive', translation: 'گەهشتن' },
      { word: 'Scale', translation: 'تەرازوو / کێشان' },
      { word: 'Send', translation: 'هنارتن' }
    ]
  },
  {
    id: 'a2-25',
    level: 'A2',
    title: 'Discussing Household Chores',
    titleKurdish: 'گۆتۆبێژ ل سەر کارێن ناڤمالێ',
    dialogue: [
      { speaker: 'Husband', text: 'I will wash the dishes tonight.', translation: 'ئەز دێ قاپ-شۆشتنێ ئەڤ شەڤە کەم.' },
      { speaker: 'Wife', text: 'Thank you! Then I will clean the living room.', translation: 'سوپاس! پا ئەز ژی دێ ژوورا روونشتنێ پاقژ کەم.' },
      { speaker: 'Husband', text: 'Do we need to do the laundry as well?', translation: 'ئەرێ پێتڤییە ئەم جلان ژی بشۆین؟' },
      { speaker: 'Wife', text: 'No, I did that yesterday morning.', translation: 'نە، من ئەو دوهی سپێدێ کر.' },
      { speaker: 'Husband', text: 'Great, then we have some free time later.', translation: 'گەلەک باشە، پا پاشان دەمێ مە یێ ڤالا دێ هەبیت.' }
    ],
    vocabulary: [
      { word: 'Dishes', translation: 'قاپ / دەوری' },
      { word: 'Laundry', translation: 'جل و بەرگێن شۆشتنێ' },
      { word: 'Clean', translation: 'پاقژکردن' },
      { word: 'Morning', translation: 'سپێدە' }
    ]
  },
  {
    id: 'a2-26',
    level: 'A2',
    title: 'Planning a Picnic',
    titleKurdish: 'پلاندانان بۆ سەیرانەکێ',
    dialogue: [
      { speaker: 'Ali', text: 'The weather is beautiful this weekend. Let\'s have a picnic.', translation: 'سەقا ل ڤێ دووماهیا حەفتیێ یێ جوانە. وەرە دێ چینە سەیرانێ.' },
      { speaker: 'Sara', text: 'That is a great idea! Where should we go?', translation: 'هزره‌کا نایەبە! بلا بچینە کیڤە؟' },
      { speaker: 'Ali', text: 'How about the local park near the river?', translation: 'بلا بچینە باخچێ مە یێ نێزیکی رویباری؟' },
      { speaker: 'Sara', text: 'Perfect. I will prepare some sandwiches and fruit.', translation: 'درۆستە. ئەز دێ هندەک سەندەویچان و فێقی ئامادە کەم.' },
      { speaker: 'Ali', text: 'And I will bring the drinks and a blanket.', translation: 'و ئەز ژی دێ ڤەخوارنان و بەتەنیەکێ (بەریکێ) بۆ روونشتنێ ئینم.' }
    ],
    vocabulary: [
      { word: 'Picnic', translation: 'سەیران' },
      { word: 'River', translation: 'رووبار' },
      { word: 'Prepare', translation: 'ئامادەکردن' },
      { word: 'Blanket', translation: 'بەتەنی / بەریک' }
    ]
  },
  {
    id: 'a2-27',
    level: 'A2',
    title: 'Discussing a Football Match',
    titleKurdish: 'گۆتۆبێژ ل سەر یارییەیا تەپاپێ',
    dialogue: [
      { speaker: 'Omar', text: 'Did you watch the match last night?', translation: 'تە یارییا شەڤێ دی دیت؟' },
      { speaker: 'Zana', text: 'Yes, it was very exciting! Our team played very well.', translation: 'بەلێ، زۆر کەیفخۆشکەر بوو! تیما مە گەلەک باش یاری کر.' },
      { speaker: 'Omar', text: 'I agree. The strikers were very fast today.', translation: 'ئەز هەڤرایم. هێرشبەر ئەڤرۆ گەلەک بلەز بوون.' },
      { speaker: 'Zana', text: 'The final score was three-one. What a great result!', translation: 'ئەنجامێ دوماهیێ سێ ب ئێک بوو. چ ئەنجامەکێ مەزنە!' },
      { speaker: 'Omar', text: 'I hope they win the championship this year.', translation: 'هیوادارم ئەڤ سالە قارەمانیێ (خولێ) ببەن.' }
    ],
    vocabulary: [
      { word: 'Match', translation: 'یاری' },
      { word: 'Strikers', translation: 'هێرشبەر' },
      { word: 'Score', translation: 'ئەنجام / گۆڵ' },
      { word: 'Championship', translation: 'قارەمانی / پاڵەوانیەتی' }
    ]
  },
  {
    id: 'a2-28',
    level: 'A2',
    title: 'Visiting the Zoo',
    titleKurdish: 'سەرەدانەک بۆ باخچێ ئاژەلان',
    dialogue: [
      { speaker: 'Child', text: 'Dad, can we see the lions first?', translation: 'بابو، دکارین ئەم ل پێشیێ شێران ببێنین؟' },
      { speaker: 'Dad', text: 'Sure, they are in the big enclosure near the gate.', translation: 'بێگومان، ئەو ل ناڤ حەوشا (قەفەسا) مەزن یا نێزیکی دەرگەهی نە.' },
      { speaker: 'Child', text: 'Look how big they are! And they are sleeping now.', translation: 'تەماشە بکە کا چەند د مەزنن! و ئەو نوکە د نڤستینە.' },
      { speaker: 'Dad', text: 'Lions sleep a lot during the day. Let\'s go see the monkeys next.', translation: 'شێر ل رۆژێ گەلەک دنڤن. وەرە پاشان دێ چینە نک مه‌یموینان.' },
      { speaker: 'Child', text: 'The monkeys are so funny! They are jumping on the trees.', translation: 'مەیموین زۆر د پێکەنینینە! ئەو ل سەر داران غار دکەن (دهەژین).' }
    ],
    vocabulary: [
      { word: 'Lions', translation: 'شێرەکان' },
      { word: 'Enclosure', translation: 'حەوش / قەفەس' },
      { word: 'Funny', translation: 'پێکەنین / ترانە' },
      { word: 'Jumping', translation: 'بازدان / غارکرن' }
    ]
  },
  {
    id: 'a2-29',
    level: 'A2',
    title: 'Asking about Classes',
    titleKurdish: 'پرسیارکرن ل سەر وانەيان',
    dialogue: [
      { speaker: 'New Student', text: 'Excuse me, where is the English conversation class?', translation: 'بێ زەحمەت، وانا گفتۆگۆیا ئنگلیزی ل کیڤەیە؟' },
      { speaker: 'Staff', text: 'It is in room 204, on the second floor.', translation: 'ل ژوورا ٢٠٤ ە، ل نهۆما دووێ.' },
      { speaker: 'New Student', text: 'What time does the class start?', translation: 'وانە دەمژمێر چەند دەستپێ دکەت؟' },
      { speaker: 'Staff', text: 'It starts at 10:30 AM and finishes at noon.', translation: 'ل دەمژمێر ١٠:٣٠ دەستپێ دکەت و ل نیڤرۆ ب دوماهی دهێت.' },
      { speaker: 'New Student', text: 'Thank you. Do I need to bring any books?', translation: 'سوپاس. ئەرێ پێتڤییە ئەز چ پەرتووکان دگەل خۆ ئینم؟' }
    ],
    vocabulary: [
      { word: 'Class', translation: 'وانە / پۆل' },
      { word: 'Noon', translation: 'نیڤرۆ' },
      { word: 'Room', translation: 'ژوور' },
      { word: 'Conversation', translation: 'گفتۆگۆ' }
    ]
  },
  {
    id: 'a2-30',
    level: 'A2',
    title: 'Buying a Train Ticket',
    titleKurdish: 'کڕینا بلیتا شەمەندەفەرێ',
    dialogue: [
      { speaker: 'Passenger', text: 'I would like a one-way ticket to London, please.', translation: 'من بلیتەکا ئێک-سەر (چوون تەنیا) بۆ لەندەن دڤێت، بێ زەحمەت.' },
      { speaker: 'Clerk', text: 'Would you like to travel first class or standard?', translation: 'تۆ دڤێت ب پلا ئێکێ گەشت بکەی یان ب پلا ئاسایی؟' },
      { speaker: 'Passenger', text: 'Standard is fine. How much is it?', translation: 'ئاسایی درۆستە. ب چەندن؟' },
      { speaker: 'Clerk', text: 'That will be forty-five pounds. Which platform is the train departing from?', translation: 'دێ بیتە ٤٥ پاوەند. شەمەندەفەر ژ کیش رێڕەوی (پلاتفۆرمی) دچیت؟' },
      { speaker: 'Passenger', text: 'Platform 9. It leaves in fifteen minutes.', translation: 'پلاتفۆرمێ ٩. پشتی پازدە خولەکان دکەڤیتە رێ.' }
    ],
    vocabulary: [
      { word: 'One-way', translation: 'ئێک-سەر / چوون تەنیا' },
      { word: 'Ticket', translation: 'بلیت' },
      { word: 'Standard', translation: 'ئاسایی' },
      { word: 'Platform', translation: 'پلاتفۆرم / رێڕەو' }
    ]
  },
  {
    id: 'a2-31',
    level: 'A2',
    title: 'At the Pharmacy',
    titleKurdish: 'ل دەرمانخانێ',
    dialogue: [
      { speaker: 'Customer', text: 'I need something for a sore throat and a cough.', translation: 'من تشتەک بۆ ئێشانا گەڕی و کۆخینێ دڤێت.' },
      { speaker: 'Pharmacist', text: 'I recommend these lozenges and this cough syrup.', translation: 'ئەز ئەڤان حەپێن مژتنێ و ڤی دەرمانێ کۆخینێ (شرۆبێ) پێشنیار دکەم.' },
      { speaker: 'Customer', text: 'How often should I take the syrup?', translation: 'کا چەند جاران پێتڤییە ئەز ڤی شرۆبی بخۆم؟' },
      { speaker: 'Pharmacist', text: 'Take two teaspoons three times a day after meals.', translation: 'دوو کەچکێن چایێ سێ جاران ل رۆژێ پشتی خوارنێ بخۆ.' },
      { speaker: 'Customer', text: 'Okay. Do you have any vitamin C too?', translation: 'باشە. ئەرێ هوین ڤیتامین C ژی هەین؟' }
    ],
    vocabulary: [
      { word: 'Pharmacy', translation: 'دەرمانخانە' },
      { word: 'Recommend', translation: 'پێشنیارکردن' },
      { word: 'Syrup', translation: 'شرۆب / دەرمانێ شل' },
      { word: 'Teaspoon', translation: 'کەچکێ چایێ' }
    ]
  },
  {
    id: 'a2-32',
    level: 'A2',
    title: 'Talking about a Favorite Book',
    titleKurdish: 'ئاخفتن ل سەر پەرتووکەکا خۆشتڤی',
    dialogue: [
      { speaker: 'Rebin', text: 'Have you read anything interesting lately?', translation: 'ئەرێ تە ئەڤ دووماهییە چ تشتێن سەرنجراکێش خواندینە؟' },
      { speaker: 'Lavin', text: 'Yes, I just finished a novel about a time traveler.', translation: 'بەلێ، من نوکە رۆمانەک ب دوماهی ئینا دەربارەی گەشتیارەکێ دەمی.' },
      { speaker: 'Rebin', text: 'That sounds like science fiction. Was it good?', translation: 'دیارە خەیالێ زانستی یە. ئەرێ یا باش بوو؟' },
      { speaker: 'Lavin', text: 'It was amazing! I couldn\'t put it down.', translation: 'سەرسۆڕهێنەر بوو! من نەشیا ژ دەستێن خۆ دانم (ژ کەیفا دا).' },
      { speaker: 'Rebin', text: 'Can I borrow it when you are finished?', translation: 'ئەرێ دکارم ب قەرز ببەم دەمێ تو ب دوماهی دهێی؟' }
    ],
    vocabulary: [
      { word: 'Lately', translation: 'ئەڤ دووماهییە' },
      { word: 'Novel', translation: 'رۆمان' },
      { word: 'Science fiction', translation: 'خەیالێ زانستی' },
      { word: 'Amazing', translation: 'سەرسۆڕهێنەر' }
    ]
  },
  {
    id: 'a2-33',
    level: 'A2',
    title: 'Planning a Dinner Party',
    titleKurdish: 'پلاندانان بۆ خوارنەکا ئێڤاری',
    dialogue: [
      { speaker: 'Dana', text: 'I want to invite our friends for dinner on Friday.', translation: 'من دڤێت هەڤالێن مە بۆ خوارنا ئێڤاری ل رۆژا ئەینی داخواز بکەم.' },
      { speaker: 'Sivan', text: 'Good idea. What should we cook?', translation: 'هزرەکا باشە. دێ چ چێ کەین؟' },
      { speaker: 'Dana', text: 'Maybe a traditional Kurdish meal with rice and okra stew.', translation: 'بەلێ، رەنگە خوارنەکا کوردەواری یا برنج و شله‌یا بامیێ.' },
      { speaker: 'Sivan', text: 'That sounds perfect. How many people are coming?', translation: 'ئەڤە زۆر درۆستە. کا چەند کەس دێ هێن؟' },
      { speaker: 'Dana', text: 'About six people. I will call them tonight.', translation: 'نزیکەی شەش کەس. ئەز دێ ئەڤ شەڤە پەیوەندیێ پێ بکەم.' }
    ],
    vocabulary: [
      { word: 'Invite', translation: 'داخوازکردن / دەعوەتکردن' },
      { word: 'Traditional', translation: 'کەلتووری / کوردەواری' },
      { word: 'Stew', translation: 'شله‌ / تاپۆ' },
      { word: 'Coming', translation: 'هاتن' }
    ]
  },
  {
    id: 'a2-34',
    level: 'A2',
    title: 'Describing a Neighborhood',
    titleKurdish: 'وەسفکردنا گەڕەکەکێ (کۆلانەکێ)',
    dialogue: [
      { speaker: 'Person A', text: 'What is your neighborhood like?', translation: 'گەڕەکا تە (کۆلانا تە) چەوایە؟' },
      { speaker: 'Person B', text: 'It is very quiet and peaceful. There are many trees.', translation: 'گەلەک یا بێدەنگ و تەنایە. گەلەک دار لێ هەین.' },
      { speaker: 'Person A', text: 'Are there any shops or cafes nearby?', translation: 'ئەرێ چ دۆکان یان کافێ ل وێرێ یێن نێزیک هەین؟' },
      { speaker: 'Person B', text: 'Yes, there is a small grocery store and a cozy bakery.', translation: 'بەلێ، دۆکانەکا بچووک یا کەلوپەلان و فڕنەکا (نانپێژییەکا) تەنا ل وێرێ هەیە.' },
      { speaker: 'Person A', text: 'It sounds like a nice place to live.', translation: 'وەسا دیارە جهەکێ خۆشە بۆ ژیانێ.' }
    ],
    vocabulary: [
      { word: 'Quiet', translation: 'بێدەنگ' },
      { word: 'Peaceful', translation: 'تەنا / ئارام' },
      { word: 'Nearby', translation: 'ل ڤێرێ ل نێزیک' },
      { word: 'Bakery', translation: 'فڕن / نانپێژی' }
    ]
  },
  {
    id: 'a2-35',
    level: 'A2',
    title: 'Childhood Memories',
    titleKurdish: 'بیرەوەریێن زارۆکینیێ',
    dialogue: [
      { speaker: 'Ali', text: 'Did you live in the city when you were a child?', translation: 'ئەرێ تۆ ل باژێڕی دژیا دەمێ تۆ زارۆک؟' },
      { speaker: 'Sara', text: 'No, I lived in a small village near the mountains.', translation: 'نە، ئەز ل گوندەکێ بچووک یێ نێزیک چیا دژیام.' },
      { speaker: 'Ali', text: 'What did you like to do for fun?', translation: 'تە حەز دکر چ بکەی بۆ کەیفا خۆ؟' },
      { speaker: 'Sara', text: 'We used to climb trees and swim in the river.', translation: 'مە حەز دکر بچینە سەر داران و ل رووباری مەلەڤانیێ بکەین.' },
      { speaker: 'Ali', text: 'That sounds like a very happy childhood.', translation: 'ئەو دیارە زارۆکینییەکا کەیفخۆش بوو.' }
    ],
    vocabulary: [
      { word: 'Childhood', translation: 'زارۆکینی' },
      { word: 'Village', translation: 'گوند' },
      { word: 'Climb', translation: 'سەرکەفتن / سەرچوون' },
      { word: 'River', translation: 'رووبار' }
    ]
  },
  {
    id: 'a2-36',
    level: 'A2',
    title: 'Making Plans to Meet',
    titleKurdish: 'پلاندانان بۆ هەڤدیتنێ',
    dialogue: [
      { speaker: 'Friend 1', text: 'Are you busy tomorrow afternoon?', translation: 'ئەرێ تۆ سوبەحی پشتی نیڤرۆ یێ مژوولی؟' },
      { speaker: 'Friend 2', text: 'I am free after 4:00 PM. Why do you ask?', translation: 'ئەز پشتی دەمژمێر ٤ یێ ڤالام. بۆچی پرسیار دکەی؟' },
      { speaker: 'Friend 1', text: 'Would you like to go to the park for a walk?', translation: 'تۆ حەز دکەی بچینە باخچەی بۆ پیاسەیەکێ؟' },
      { speaker: 'Friend 2', text: 'I would love to. Where should we meet?', translation: 'من گەلەک دڤێت. بلا ل کیڤە هەڤ ببینین؟' },
      { speaker: 'Friend 1', text: 'Let\'s meet at the main entrance of the park.', translation: 'بلا ل سەر دەرگەهێ سەرەکی یێ باخچەی هەڤ ببینین.' }
    ],
    vocabulary: [
      { word: 'Busy', translation: 'مژوول' },
      { word: 'Free', translation: 'ڤالا / ئازاد' },
      { word: 'Walk', translation: 'پیاسە / پێکڕەو' },
      { word: 'Entrance', translation: 'دەرگەهـ / چوونە ناڤ' }
    ]
  },
  {
    id: 'a2-37',
    level: 'A2',
    title: 'Complaining about the Weather',
    titleKurdish: 'گلەیی کردن ل سەر سەقای',
    dialogue: [
      { speaker: 'Ahmed', text: 'The rain has been falling for three days now.', translation: 'باران سێ رۆژە هەر دبارێت.' },
      { speaker: 'Leyla', text: 'I know, it is so gloomy outside. I miss the sun.', translation: 'دزانم، دەرڤە گەلەک یێ تاری و مژە. بیرا من ل رۆژێ دهێت.' },
      { speaker: 'Ahmed', text: 'The forecast says it will stop tonight.', translation: 'کەشناسی دبێژیت دێ ئەڤ شەڤە ب دوماهی هێت.' },
      { speaker: 'Leyla', text: 'I hope so. My clothes are all wet from walking today.', translation: 'هیوادارم وەسا بیت. جلوبەرگێن من هەمی یێن تەڕ بووین ژ رێڤەچوونا ئەڤرۆ.' },
      { speaker: 'Ahmed', text: 'Hang them near the heater to dry.', translation: 'وان ب کێلەکا هیتەری ڤە هەلاویسە دا بهێنە چناندن (هشک بن).' }
    ],
    vocabulary: [
      { word: 'Rain', translation: 'باران' },
      { word: 'Gloomy', translation: 'تاری / تافی' },
      { word: 'Forecast', translation: 'کەشناسی' },
      { word: 'Wet', translation: 'تەڕ / شێدار' }
    ]
  },
  {
    id: 'a2-38',
    level: 'A2',
    title: 'Asking for a Favor',
    titleKurdish: 'داخوازکرنا هاریکارییەکێ (تەکەلوفەکێ)',
    dialogue: [
      { speaker: 'Neighbor A', text: 'Could you do me a favor, please?', translation: 'ئەرێ دکاری هاریکارییەکێ دگەل من بکەی، بێ زەحمەت؟' },
      { speaker: 'Neighbor B', text: 'Of course. What do you need?', translation: 'بێگومان. پێتڤی ب چ هەیە؟' },
      { speaker: 'Neighbor A', text: 'I am going away for the weekend. Could you water my plants?', translation: 'ئەز دێ بۆ دووماهیا حەفتیێ چمە دەرڤە. ئەرێ دکاری ئاڤێ بدەی کێل-چیکێن من؟' },
      { speaker: 'Neighbor B', text: 'No problem at all. I will take care of them.', translation: 'چو ئاریشە نینە. ئەز دێ چاڤێ خۆ دەیێ.' },
      { speaker: 'Neighbor A', text: 'Thank you so much. I really appreciate it.', translation: 'زۆر سوپاس. ئەز ب راستەقینە ل سەر وێ سوپاسگوزارم.' }
    ],
    vocabulary: [
      { word: 'Favor', translation: 'هاریکاری / منەت' },
      { word: 'Water', translation: 'ئاڤدان' },
      { word: 'Plants', translation: 'کێڵ / شینکاتی' },
      { word: 'Appreciate', translation: 'سوپاسگوزاربوون / رێزگرتن' }
    ]
  },
  {
    id: 'a2-39',
    level: 'A2',
    title: 'Describing a Person',
    titleKurdish: 'وەسفکردنا مرۆڤەکی',
    dialogue: [
      { speaker: 'Manager', text: 'Can you describe the new employee?', translation: 'تۆ دکاری وەسفا کارمەندێ (ئێمپڵۆی) نوو بکەی؟' },
      { speaker: 'Sarah', text: 'She is tall and has short, curly hair.', translation: 'ئەو یا درێژە و قژەکا کورت و لۆل یا هەی.' },
      { speaker: 'Manager', text: 'Is she friendly and helpful?', translation: 'ئەرێ ئەو یا هەڤال هەز و هاریکارە؟' },
      { speaker: 'Sarah', text: 'Yes, she is very polite and always smiles at everyone.', translation: 'بەلێ، ئەو زۆر یا ب ئەدەبە و هەر دەم کرنش (بسکە) دکەتە هەموو کەسان.' },
      { speaker: 'Manager', text: 'That sounds like a great addition to the team.', translation: 'وەسا دیارە زێدەکرنەکا ناوازەیە بۆ تیمێ مە.' }
    ],
    vocabulary: [
      { word: 'Curly', translation: 'لۆل / بەغدا' },
      { word: 'Polite', translation: 'ب ئەدەب / رەوشت بەرز' },
      { word: 'Smiles', translation: 'بسکە / کرنش' },
      { word: 'Addition', translation: 'زێدەکرن' }
    ]
  },
  {
    id: 'a2-40',
    level: 'A2',
    title: 'At the Hairdresser',
    titleKurdish: 'ل نک حەلاق (سەرتاش)',
    dialogue: [
      { speaker: 'Hairdresser', text: 'How would you like your hair cut today?', translation: 'تۆ حەز دکەی ئەڤرۆ چەوا پرچا تە بهێتە تاشین؟' },
      { speaker: 'Customer', text: 'I just want a simple trim, please. Not too short.', translation: 'من تەنیا هندەک کورتکرنەکا سادە دڤێت، بێ زەحمەت. نە زۆر کورت.' },
      { speaker: 'Hairdresser', text: 'Would you like the sides shorter than the top?', translation: 'ئەرێ تۆ دڤێت کەلەخ بۆ تە کورتتر بن ژ سەرێ پرچێ؟' },
      { speaker: 'Customer', text: 'Yes, that sounds good. Please use the scissors for the top.', translation: 'بەلێ، ئەڤە باشە. بێ زەحمەت مەقەستی (مەقەستیێ) بۆ سەرێ پرچێ بکار بینە.' },
      { speaker: 'Hairdresser', text: 'Alright. Let\'s get started.', translation: 'باشە. بلا دەستپێ بکەین.' }
    ],
    vocabulary: [
      { word: 'Trim', translation: 'کورتکرن / دەستکاری' },
      { word: 'Sides', translation: 'کەلەخ / لایەن' },
      { word: 'Scissors', translation: 'مەقەست' },
      { word: 'Haircut', translation: 'پرچ تاشین' }
    ]
  },
  {
    id: 'a2-41',
    level: 'A2',
    title: 'Talking about a New Job',
    titleKurdish: 'ئاخفتن ل سەر کارەکێ نوو',
    dialogue: [
      { speaker: 'Friend A', text: 'How is your new job going?', translation: 'کارێ تە یێ نوو چەوا ب رێڤە دچیت؟' },
      { speaker: 'Friend B', text: 'It is good, but I have to learn many new things.', translation: 'باشە، لێ پێتڤییە ئەز فێری گەلەک تشتێن نوو ببم.' },
      { speaker: 'Friend A', text: 'What are your coworkers like?', translation: 'هەڤکارێن تە چەوایێنە؟' },
      { speaker: 'Friend B', text: 'They are very supportive and kind. They help me a lot.', translation: 'ئەو زۆر پشتەڤان و دلۆڤانن. گەلەک هاریکاریا من دکەن.' },
      { speaker: 'Friend A', text: 'I am glad you are happy there.', translation: 'ئەز کەیفخۆشم کو تۆ ل وێرێ یێ دلخۆشی.' }
    ],
    vocabulary: [
      { word: 'Coworkers', translation: 'هەڤکارێن کار' },
      { word: 'Supportive', translation: 'پشتەڤان' },
      { word: 'Kind', translation: 'دلۆڤان / میهرەبان' },
      { word: 'Company', translation: 'کۆمپانیا' }
    ]
  },
  {
    id: 'a2-42',
    level: 'A2',
    title: 'Planning a Holiday',
    titleKurdish: 'پلاندانان بۆ بێهنڤەدانەکێ (گەشتەکێ)',
    dialogue: [
      { speaker: 'Husband', text: 'Should we go to the beach or the mountains for our holiday?', translation: 'بلا بچینە کەنارێ دەریا یان چیا بۆ بێهنڤەدانا مە؟' },
      { speaker: 'Wife', text: 'I prefer the mountains. The air is so fresh there.', translation: 'ئەز چیا پێ باشتر دبینم. هەوا ل وێرێ زۆر یا فرێشە.' },
      { speaker: 'Husband', text: 'Okay, let\'s look for a hotel in the northern region.', translation: 'باشە، وەرە دێ ل ئۆتێلەکێ گەڕێین ل دەڤەرا باکور.' },
      { speaker: 'Wife', text: 'We should book it early to get a better price.', translation: 'پێتڤییە ئەم زوو حجز بکەین دا کو بهایەکێ باشتر دەست مە بکەڤیت.' },
      { speaker: 'Husband', text: 'I will check some websites tonight.', translation: 'ئەز دێ هندەک مالپەران ئەڤ شەڤە بپشکنم.' }
    ],
    vocabulary: [
      { word: 'Beach', translation: 'کەنارێ دەریا' },
      { word: 'Northern', translation: 'باکوری' },
      { word: 'Book', translation: 'حجزکردن' },
      { word: 'Price', translation: 'بها / نرخ' }
    ]
  },
  {
    id: 'a2-43',
    level: 'A2',
    title: 'Discussing a TV Show',
    titleKurdish: 'گۆتۆبێژ ل سەر بەرنامەیەکێ (درامایەکا) تیڤی',
    dialogue: [
      { speaker: 'Zara', text: 'Have you seen the latest episode of that drama series?', translation: 'ئەرێ تە ئەو ئەڵقەیا دووماهیێ یا وێ درامایێ دیت؟' },
      { speaker: 'Hozan', text: 'Not yet. Please don\'t tell me what happened!', translation: 'هێشتا نە. بێ زەحمەت چوو بۆ من نەبێژە کا چ بوویە!' },
      { speaker: 'Zara', text: 'Don\'t worry, I won\'t give any spoilers. But it was very intense.', translation: 'مەترسە، ئەز دێ چ تشتەکی ژ پێشدا نەبێژم. لێ گەلەک یا ب هێز بوو.' },
      { speaker: 'Hozan', text: 'I am going to watch it tonight after dinner.', translation: 'ئەز دێ ئەڤ شەڤە پشتی خوارنا ئێڤاری تەماشە کەم.' },
      { speaker: 'Zara', text: 'Let\'s talk about it tomorrow at work.', translation: 'بلا سوبەحی ل سەر کاری ل سەر باخێڤین.' }
    ],
    vocabulary: [
      { word: 'Episode', translation: 'ئەڵقە' },
      { word: 'Spoilers', translation: 'ئاشکراکرنا پێشوەخت' },
      { word: 'Intense', translation: 'ب هێز / کویر' },
      { word: 'Series', translation: 'زنجیرە' }
    ]
  },
  {
    id: 'a2-44',
    level: 'A2',
    title: 'Buying Furniture',
    titleKurdish: 'کڕینا کەلوپەلێن ناڤمالێ',
    dialogue: [
      { speaker: 'Customer', text: 'How much is this dining table?', translation: 'ئەو مێزا خوارنێ ب چەندە؟' },
      { speaker: 'Salesman', text: 'It is three hundred thousand dinars. It comes with four chairs.', translation: 'سێ سەد هزار دینارانە. چار کورسی دگەل هەین.' },
      { speaker: 'Customer', text: 'Is it made of real wood?', translation: 'ئەرێ ژ تەختێ (داری) درۆستە؟' },
      { speaker: 'Salesman', text: 'Yes, it is very high quality oak wood.', translation: 'بەلێ، تەختێ دارێ بەڕوویە یێ زۆر ب کالیتی.' },
      { speaker: 'Customer', text: 'Can you deliver it to my home tomorrow?', translation: 'ئەرێ دکارن سوبەحی بگەهیننە مالا من؟' }
    ],
    vocabulary: [
      { word: 'Furniture', translation: 'کەلوپەلێن ناڤمالێ' },
      { word: 'Chairs', translation: 'کورسییەکان' },
      { word: 'Wood', translation: 'تەخت / دار' },
      { word: 'Deliver', translation: 'گەهاندن' }
    ]
  },
  {
    id: 'a2-45',
    level: 'A2',
    title: 'In a Taxi',
    titleKurdish: 'ل ناڤ تەکسیا دا',
    dialogue: [
      { speaker: 'Passenger', text: 'Can you take me to the city center, please?', translation: 'دکاری من ببەی بۆ سەنتەرێ باژێڕی، بێ زەحمەت؟' },
      { speaker: 'Driver', text: 'Sure. Which part of the center?', translation: 'بێگومان. کیش پارچا سەنتەری؟' },
      { speaker: 'Passenger', text: 'Near the big mosque, please.', translation: 'نێزیکی مزگەفتا مەزن، بێ زەحمەت.' },
      { speaker: 'Driver', text: 'The traffic is heavy today, it might take twenty minutes.', translation: 'ترافیک (هاتنوچوون) یا گرانە ئەڤرۆ، رەنگە بیست خولەکان ببەت.' },
      { speaker: 'Passenger', text: 'That is fine. I am not in a hurry.', translation: 'ئەو درۆستە. ئەز نە یێ بلەزم.' }
    ],
    vocabulary: [
      { word: 'Center', translation: 'سەنتەر / ناڤەڕاست' },
      { word: 'Mosque', translation: 'مزگەفت' },
      { word: 'Heavy', translation: 'گران / قەرەبالغ' },
      { word: 'Hurry', translation: 'بلەز / بەپەلە' }
    ]
  },
  {
    id: 'a2-46',
    level: 'A2',
    title: 'Ordering Food for Delivery',
    titleKurdish: 'داخوازکرنا خوارنێ (دیلیڤەری)',
    dialogue: [
      { speaker: 'Customer', text: 'I would like to order one medium pizza and a bottle of coke.', translation: 'من دڤێت پیزایەکا ناڤین و بتڵەکێ کۆکایێ داخواز بکەم.' },
      { speaker: 'Assistant', text: 'What toppings would you like on your pizza?', translation: 'چ تشتێن دی هوین دڤێت ل سەر پیزایا خۆ زێدە بکەن؟' },
      { speaker: 'Customer', text: 'Mushrooms and olives, please.', translation: 'قارچک (تولک) و زەیتوون، بێ زەحمەت.' },
      { speaker: 'Assistant', text: 'What is your address for the delivery?', translation: 'ناڤنیشانێ تە بۆ گەهاندنێ چییە؟' },
      { speaker: 'Customer', text: 'Apartment 12, New City Building.', translation: 'شوقەیا ١٢، ئاڤاهیا "ناڤەراستا نوو".' }
    ],
    vocabulary: [
      { word: 'Delivery', translation: 'گەهاندن / دیلیڤەری' },
      { word: 'Medium', translation: 'ناڤین' },
      { word: 'Toppings', translation: 'تشتێن سەر خوارنێ' },
      { word: 'Mushrooms', translation: 'قارچک / تولک' }
    ]
  },
  {
    id: 'a2-47',
    level: 'A2',
    title: 'Describing a Room',
    titleKurdish: 'وەسفکردنا ژوورەکێ',
    dialogue: [
      { speaker: 'Guest', text: 'Your new living room looks wonderful!', translation: 'ژوورا تە یا نوو یا روونشتنێ زۆر یا جوان دیار دکەت!' },
      { speaker: 'Host', text: 'Thank you. I chose these blue curtains last week.', translation: 'سوپاس. من ئەو پەردەیێن شین حەفتیا چۆیی هەلبژارتن.' },
      { speaker: 'Guest', text: 'They match the sofa perfectly. It is very bright in here.', translation: 'ئەو گەلەک دگەل قەناقا دگونجن. ل ڤێرێ زۆر یێ روونە.' },
      { speaker: 'Host', text: 'Yes, the windows are large, so we get a lot of natural light.', translation: 'بەلێ، پەنجەرە د مەزنن، لەوما ئەم گەلەک رۆناهیا سرۆشتی وەردگرین.' },
      { speaker: 'Guest', text: 'It feels very comfortable and modern.', translation: 'مرۆڤ تێدا هەست ب ئارامی و مۆدێرنیێ دکەت.' }
    ],
    vocabulary: [
      { word: 'Curtains', translation: 'پەردە' },
      { word: 'Bright', translation: 'رۆن / گەش' },
      { word: 'Natural', translation: 'سرۆشتی' },
      { word: 'Modern', translation: 'نوو / مۆدێرن' }
    ]
  },
  {
    id: 'a2-48',
    level: 'A2',
    title: 'Visiting a Friend\'s House',
    titleKurdish: 'سەرەدانەک بۆ مالا هەڤالەکی',
    dialogue: [
      { speaker: 'Friend A', text: 'Come in! Take off your shoes and make yourself at home.', translation: 'وەرە ژوور! پێلاڤێن خۆ داکە و وەسا بزانە مالا تە یە.' },
      { speaker: 'Friend B', text: 'Thank you. You have a very beautiful garden.', translation: 'سوپاس. باخچەیەکێ زۆر یێ جوان تە هەیە.' },
      { speaker: 'Friend A', text: 'Wait until you see the roses. My mother grows them.', translation: 'لێ تێبمینی هەتا تو گولێن سوور ببیبی. دایکا من وان د چینت.' },
      { speaker: 'Friend B', text: 'That is wonderful. Can I help you with the coffee?', translation: 'ئەڤە زۆر نایەبە. دکارم هاریکاریا تە بکەم بۆ قەهوێ؟' },
      { speaker: 'Friend A', text: 'No, just sit down and relax. I will be right back.', translation: 'نە، تەنیا روونە و بێهنڤەدای ببە. ئەز دێ نوکە زڤڕم.' }
    ],
    vocabulary: [
      { word: 'Garden', translation: 'باخچە' },
      { word: 'Roses', translation: 'گۆڵ / گۆڵێن سوور' },
      { word: 'Relax', translation: 'بێهنڤەدان / ئارامی' },
      { word: 'Back', translation: 'زڤڕین' }
    ]
  },
  {
    id: 'a2-49',
    level: 'A2',
    title: 'Talking about Languages',
    titleKurdish: 'ئاخفتن ل سەر زمانان',
    dialogue: [
      { speaker: 'Teacher', text: 'How many languages do you speak?', translation: 'تۆ ب چەند زمانان دئاخڤی؟' },
      { speaker: 'Student', text: 'I speak Kurdish fluently, and I am learning English.', translation: 'ئەز ب کوردی ب رەوانی دئاخڤم، و ئەز یێ فێری ئنگلیزی دبم.' },
      { speaker: 'Teacher', text: 'Your English is improving. Do you know any other languages?', translation: 'ئنگلیزییا تە یا بەرەڤ پێش دچیت. ئەرێ چ زمانێن دی دزانی؟' },
      { speaker: 'Student', text: 'I also know a little bit of Turkish from my visits there.', translation: 'هەروەسا هندەک تورکی ژی دزانم ژ سەرەدانێن خۆ بۆ ئەوێ وەڵاتی.' },
      { speaker: 'Teacher', text: 'That is great. Learning languages opens many doors.', translation: 'ئەڤە زۆر باشە. فێربوونا زمانان گەلەک دەرگەهان ڤەدکەت.' }
    ],
    vocabulary: [
      { word: 'Fluently', translation: 'ب رەوانی' },
      { word: 'Learning', translation: 'فێربوون' },
      { word: 'Improving', translation: 'بەرەڤ پێشچوون' },
      { word: 'Turkish', translation: 'زمانێ تورکی' }
    ]
  },
  {
    id: 'a2-50',
    level: 'A2',
    title: 'Health and Fitness (Part 2)',
    titleKurdish: 'ساخلەمی و وەرزش (پاشکۆ)',
    dialogue: [
      { speaker: 'Friend A', text: 'I want to start running every morning.', translation: 'من دڤێت هەموو سپێدەیەکێ دەست ب غارکرنێ بکەم.' },
      { speaker: 'Friend B', text: 'That is a healthy habit. I can join you if you like.', translation: 'ئەڤە خویەکا ساخلەمە. ئەز دکارم پشکداری تە ببم ئەگەر تە بڤێت.' },
      { speaker: 'Friend A', text: 'Really? That would be much more fun.', translation: 'ب راست؟ ئەڤە دێ گەلەک پتر خۆش بیت.' },
      { speaker: 'Friend B', text: 'Let\'s meet at the park entrance at 6:30 AM tomorrow.', translation: 'بلا ل سەر دەرگەهێ باخچەی ل دەمژمێر ٦:٣٠ سوبەحی هەڤ ببینین.' },
      { speaker: 'Friend A', text: 'Okay. I need to find my running shoes tonight.', translation: 'باشە. پێتڤییە ئەز ئەڤ شەڤە ل پێلاڤێن خۆ یێن غارێ بگەڕێم.' }
    ],
    vocabulary: [
      { word: 'Habit', translation: 'خۆ / مەرەق' },
      { word: 'Join', translation: 'پشکداری / گەهشتن' },
      { word: 'Morning', translation: 'سپێدە' },
      { word: 'Shoes', translation: 'پێلاڤ' }
    ]
  },
  {
    id: 'a2-51',
    level: 'A2',
    title: 'At the Post Office (Part 2)',
    titleKurdish: 'ل پۆستەخانێ (پاشکۆ)',
    dialogue: [
      { speaker: 'Customer', text: 'I would like to buy five stamps for these letters.', translation: 'من پێنج پوول (ستامپ) بۆ ڤان نامەیان دڤێت.' },
      { speaker: 'Clerk', text: 'Are these local or international letters?', translation: 'ئەرێ ئەڤە نامەیێن ناڤخۆیی نە یان نێڤدەولەتی؟' },
      { speaker: 'Customer', text: 'Two are local, and three are international.', translation: 'دوو د ناڤخۆیی نە، و سێ د نێڤدەولەتی نە.' },
      { speaker: 'Clerk', text: 'That will be eight thousand dinars in total, please.', translation: 'دێ بیتە هەشت هزار دینار ب گشتی، بێ زەحمەت.' },
      { speaker: 'Customer', text: 'Can I also buy some envelopes?', translation: 'ئەرێ دکارم هندەک زەرفان ژی بکڕم؟' }
    ],
    vocabulary: [
      { word: 'Stamps', translation: 'پوول / ستامپ' },
      { word: 'Letters', translation: 'نامەکان' },
      { word: 'International', translation: 'نێڤدەولەتی' },
      { word: 'Envelopes', translation: 'زەرف / بۆڕت' }
    ]
  },
  {
    id: 'a2-52',
    level: 'A2',
    title: 'Reporting a Lost Item',
    titleKurdish: 'ئاگەهدارکرنا ل سەر تشتەکێ بەرزەبوویی',
    dialogue: [
      { speaker: 'User', text: 'Excuse me, I think I lost my wallet on the bus.', translation: 'بێ زەحمەت، ئەز هزردکەم من جەزدانێ (وەلێتێ) خۆ یێ پارەی ل ناڤ پاسێ دا بەرزە کری.' },
      { speaker: 'Official', text: 'What color was it and what was inside?', translation: 'رەنگێ وی چ بوو و چ تێدا بوو؟' },
      { speaker: 'User', text: 'It was black and it contained my ID and some cash.', translation: 'یێ رەش بوو و ناسنامەیا من و هندەک پارە تێدا بوون.' },
      { speaker: 'Official', text: 'We will check with the driver. Please leave your phone number.', translation: 'ئەم دێ ژ شوفێری پرسیار کەین. بێ زەحمەت ژمارەیا تەلەفۆنا خۆ بۆ مە بهێلە.' },
      { speaker: 'User', text: 'Here it is. Thank you for your help.', translation: 'ئەڤە یە. سوپاس بۆ هاریکاریا تە.' }
    ],
    vocabulary: [
      { word: 'Lost', translation: 'بەرزەبوون' },
      { word: 'Wallet', translation: 'جەزدان / وەلێت' },
      { word: 'Bus', translation: 'پاس' },
      { word: 'Official', translation: 'بەرپرس / کارمەند' }
    ]
  },
  {
    id: 'a2-53',
    level: 'A2',
    title: 'Asking for a Recommendation',
    titleKurdish: 'داخوازکرنا پێشنیارەکێ (راسپاردەیەکێ)',
    dialogue: [
      { speaker: 'Tourist', text: 'Can you recommend a good local restaurant?', translation: 'تۆ دکاری خوارنگەهەکا باش یا ڤێ دەڤەرێ بۆ من پێشنیار بکەی؟' },
      { speaker: 'Local', text: 'You should try "The Kurdish Kitchen". They have the best dolma.', translation: 'پێتڤییە تۆ "مەتەبخا کوردی" تاقی بکەی. وان باشترین دۆڵمە یا هەی.' },
      { speaker: 'Tourist', text: 'Is it expensive?', translation: 'ئەرێ یا گرانە؟' },
      { speaker: 'Local', text: 'No, the prices are very reasonable and the service is fast.', translation: 'نە، بها گەلەک د گونجاینە و خزمەتگوزاری یا بلەزە.' },
      { speaker: 'Tourist', text: 'Thank you. I will go there for dinner tonight.', translation: 'سوپاس. ئەز دێ ئەڤ شەڤە بۆ خوارنا ئێڤاری چمە وێرێ.' }
    ],
    vocabulary: [
      { word: 'Recommend', translation: 'پێشنیارکردن' },
      { word: 'Reasonable', translation: 'گونجای / مەعقوول' },
      { word: 'Service', translation: 'خزمەتگوزاری' },
      { word: 'Kitchen', translation: 'مەتەبخ / چێشتخانە' }
    ]
  },
  {
    id: 'a2-54',
    level: 'A2',
    title: 'Discussing a New Restaurant',
    titleKurdish: 'گۆتۆبێژ ل سەر خوارنگەهەکا نوو',
    dialogue: [
      { speaker: 'Zana', text: 'Have you been to the new cafe on the corner?', translation: 'ئەرێ تۆ چوویە وێ کافێیا نوو یا ل سەر کۆشەیێ؟' },
      { speaker: 'Hevi', text: 'Yes, I went there yesterday for lunch.', translation: 'بەلێ، ئەز دوهی بۆ فڕاڤینێ چوومە وێرێ.' },
      { speaker: 'Zana', text: 'How was the coffee?', translation: 'قەهوە چەوا بوو؟' },
      { speaker: 'Hevi', text: 'It was excellent, and the cakes were very fresh too.', translation: 'ناوازە بوو، و کێک ژی زۆر یێن فرێش بوون.' },
      { speaker: 'Zana', text: 'I will definitely visit it this weekend.', translation: 'ئەز دێ ب درۆستی ل ڤێ دووماهیا حەفتیێ سەرەدانا وێرێ کەم.' }
    ],
    vocabulary: [
      { word: 'Corner', translation: 'کۆشە / گۆشە' },
      { word: 'Lunch', translation: 'فڕاڤین' },
      { word: 'Excellent', translation: 'ناوازە / نایەب' },
      { word: 'Definitely', translation: 'ب درۆستی / ب گۆمان' }
    ]
  },
  {
    id: 'a2-55',
    level: 'A2',
    title: 'Talking about a Childhood Pet',
    titleKurdish: 'ئاخفتن ل سەر ئاژەڵەکێ مالێ یێ سەردەمێ زارۆکینیێ',
    dialogue: [
      { speaker: 'Alan', text: 'Did you have any pets when you were young?', translation: 'ئەرێ تە چ ئاژەڵێن مالێ هەبوون دەمێ تۆ یێ گەنج؟' },
      { speaker: 'Sivan', text: 'Yes, I had a very smart dog named Max.', translation: 'بەلێ، من سەگەکێ زۆر یێ زیرەک هەبوو ب ناڤێ ماکس.' },
      { speaker: 'Alan', text: 'What color was he?', translation: 'رەنگێ وی چ بوو؟' },
      { speaker: 'Sivan', text: 'He was golden brown and had very long ears.', translation: 'رەنگێ وی یێ قاوەییێ زێرین بوو و گۆهێن وی زۆر د درێژ بوون.' },
      { speaker: 'Alan', text: 'I always wanted a dog, but my mother preferred cats.', translation: 'من هەر دەم دڤیا سەگەک هەبیت، لێ دایکا من پشیک پێ باشتر بوون.' }
    ],
    vocabulary: [
      { word: 'Pet', translation: 'ئاژەڵێ مالێ' },
      { word: 'Smart', translation: 'زیرەک' },
      { word: 'Ears', translation: 'گۆهەکان' },
      { word: 'Cats', translation: 'پشیکەکان' }
    ]
  },
  {
    id: 'a2-56',
    level: 'A2',
    title: 'Booking a Dental Appointment',
    titleKurdish: 'حجزکرنا ژڤانەکی ل نک دکتۆرێ ددانان',
    dialogue: [
      { speaker: 'Receptionist', text: 'Dental clinic, how can I help you?', translation: 'نۆژداریا ددانان، ئەز چەوا دکارم هاریکاریا تە بکەم؟' },
      { speaker: 'Patient', text: 'I would like to book an appointment for a check-up.', translation: 'من دڤێت ژڤانەکێ (داتپۆینتمێنتەکێ) بۆ پشکنینێ حجز بکەم.' },
      { speaker: 'Receptionist', text: 'We have an opening on Tuesday at 2:00 PM.', translation: 'مە ژڤانەکێ ڤالا یێ هەری ل رۆژا سێشەمبی ل دەمژمێر ٢ ی پشتی نیڤرۆ.' },
      { speaker: 'Patient', text: 'That works for me. Can you send me a reminder?', translation: 'ئەو بۆ من یا گونجایە. ئەرێ دکارن ب بیر ئینانەکێ بۆ من ب هنێرن؟' },
      { speaker: 'Receptionist', text: 'Yes, we will send a text message the day before.', translation: 'بەلێ، ئەم دێ نامەیەکا تێکست رۆژەکا بەری وێ هنێرین.' }
    ],
    vocabulary: [
      { word: 'Appointment', translation: 'ژڤان / کات' },
      { word: 'Check-up', translation: 'پشکنین' },
      { word: 'Reminder', translation: 'ب بیر ئینان' },
      { word: 'Message', translation: 'نامە' }
    ]
  },
  {
    id: 'a2-57',
    level: 'A2',
    title: 'Asking for Directions to a Bank',
    titleKurdish: 'پرسیارکرن ل سەر رێکا بانقەکێ',
    dialogue: [
      { speaker: 'Stranger', text: 'Excuse me, is there a bank near here?', translation: 'بێ زەحمەت، ئەرێ چ بانق ل ڤێرێ یا نێزیک هەیە؟' },
      { speaker: 'Local', text: 'Yes, there is one just around the corner, next to the post office.', translation: 'بەلێ، ئێک یا هەی تەنیا ل وێرێ ل سەر کۆشەیێ، ب کێلەکا پۆستەخانێ ڤە.' },
      { speaker: 'Stranger', text: 'Is it open on Saturdays?', translation: 'ئەرێ رۆژێن شەمبی یا ڤەکرییە؟' },
      { speaker: 'Local', text: 'No, it is closed on weekends. It opens again on Sunday morning.', translation: 'نە، ل دووماهیا حەفتیێ یا گرتتییە. دێ رۆژا یەکشەمبی سپێدێ ڤەبیتەڤە.' },
      { speaker: 'Stranger', text: 'Thank you for the information.', translation: 'سوپاس بۆ زانیارییان.' }
    ],
    vocabulary: [
      { word: 'Corner', translation: 'کۆشە / گۆشە' },
      { word: 'Closed', translation: 'گرتتی' },
      { word: 'Stranger', translation: 'کەسەکێ نەناس' },
      { word: 'Information', translation: 'زانیاری' }
    ]
  },
  {
    id: 'a2-58',
    level: 'A2',
    title: 'Describing a Favorite Gadget',
    titleKurdish: 'وەسفکردنا ئامیرەکێ خۆشتڤی',
    dialogue: [
      { speaker: 'Ali', text: 'Is that a new smartwatch?', translation: 'ئەرێ ئەڤە دەمژمێرەکا زیرەکا نوویە؟' },
      { speaker: 'Zana', text: 'Yes, I bought it last week. It tracks my steps and heart rate.', translation: 'بەلێ، من حەفتیا چۆیی کڕی. گاڤێن من و لێدانا دلێ من دەستنیشان دکەت.' },
      { speaker: 'Ali', text: 'That is very useful. Does it connect to your phone?', translation: 'ئەڤە زۆر ب مفا یە. ئەرێ دگەل تەلەفۆنا تە دهێتە گرێدان؟' },
      { speaker: 'Zana', text: 'Yes, it shows all my notifications and messages.', translation: 'بەلێ، هەمی ئاگەهداری و نامەیێن من نیشا ددەت.' },
      { speaker: 'Ali', text: 'I think I might buy one too.', translation: 'ئەز هزردکەم ئەز ژی ئێکێ بکڕم.' }
    ],
    vocabulary: [
      { word: 'Gadget', translation: 'ئامیرە / کەرەستە' },
      { word: 'Tracks', translation: 'دیارکرن / دەستتەنیشانکردن' },
      { word: 'Useful', translation: 'ب مفا' },
      { word: 'Notifications', translation: 'ئاگەهداری / نۆتیفیکەیشن' }
    ]
  },
  {
    id: 'a2-59',
    level: 'A2',
    title: 'Talking about Social Media',
    titleKurdish: 'ئاخفتن ل سەر سۆشیاڵ میدیایێ',
    dialogue: [
      { speaker: 'Lana', text: 'Do you spend a lot of time on social media?', translation: 'ئەرێ تۆ دەمەکێ زۆر ل سەر سۆشیاڵ میدیایێ دبۆرینی؟' },
      { speaker: 'Sherko', text: 'I use Instagram to post pictures, but I try to limit my time.', translation: 'ئەز ئینستاگرامێ بیکاردئینم بۆ ب رێڤەبرنا وێنەیان، لێ هەوڵ ددەم دەمێ خۆ دەستنیشان کەم.' },
      { speaker: 'Lana', text: 'That is smart. Too much screen time is not good for your eyes.', translation: 'ئەڤە زیرەکی یە. دەمەکێ زۆر ل بەر شاشێ مان بۆ چاڤێن تە نە باشە.' },
      { speaker: 'Sherko', text: 'I agree. I prefer meeting friends in person.', translation: 'ئەز هەڤرایم. ئەز حەز دکەم هەڤالان ب شێوازێ ناڤ-ب-ناڤ ببینم.' },
      { speaker: 'Lana', text: 'Me too. It is much more meaningful.', translation: 'ئەز ژی وەسا. ئەڤە گەلەک پتر یا ب رامانە.' }
    ],
    vocabulary: [
      { word: 'Social media', translation: 'سۆشیاڵ میدیا' },
      { word: 'Limit', translation: 'دەستنیشانکردن / سنوور' },
      { word: 'In person', translation: 'ژ نێزیک / ب خۆ' },
      { word: 'Meaningful', translation: 'ب رامان' }
    ]
  },
  {
    id: 'a2-60',
    level: 'A2',
    title: 'Planning a Weekend Hike',
    titleKurdish: 'پلاندانان بۆ پیاسەیەکا چیا ل دووماهیا حەفتیێ',
    dialogue: [
      { speaker: 'Hozan', text: 'Would you like to go for a hike in the mountains this Saturday?', translation: 'تۆ حەز دکەی پیاسەیەکا (هایکەکا) چیا بکەی ل ڤێ شەمبیێ؟' },
      { speaker: 'Soran', text: 'I would love to! What should I bring?', translation: 'من گەلەک دڤێت! پێتڤییە ئەز چ ئینم؟' },
      { speaker: 'Hozan', text: 'Wear comfortable boots and bring plenty of water and snacks.', translation: 'پێلاڤێن (بۆتێن) ئارام لەبەر بکە و گەلەک ئاڤ و خوارنێن سڤک (سناکس) ئینە.' },
      { speaker: 'Soran', text: 'Is the path difficult?', translation: 'ئەرێ رێ یا بزەحمەتە؟' },
      { speaker: 'Hozan', text: 'It is a moderate path, so it should be fine for us.', translation: 'رێکەکا ناڤینە (نە زۆر بزەحمەت)، لەوما دێ بۆ مە یا باش بیت.' }
    ],
    vocabulary: [
      { word: 'Hike', translation: 'پیاسەیا چیا / هایک' },
      { word: 'Snacks', translation: 'خوارنێن سڤک' },
      { word: 'Moderate', translation: 'ناڤین' },
      { word: 'Path', translation: 'رێ / رێباز' }
    ]
  },
  {
    id: 'a2-61',
    level: 'A2',
    title: 'Discussing a Newspaper Article',
    titleKurdish: 'گۆتۆبێژ ل سەر بابەتەکێ (گۆتارەکێ) رۆژنامەیێ',
    dialogue: [
      { speaker: 'Reader 1', text: 'Did you read the article about the new park project?', translation: 'ئەرێ تە ئەو گۆتارا ل سەر پرۆژێ باخچەیێ نوو خواند؟' },
      { speaker: 'Reader 2', text: 'Yes, it says they are going to plant one thousand trees.', translation: 'بەلێ، دبێژیت دێ هزار داران چینن.' },
      { speaker: 'Reader 1', text: 'That is great news for the environment.', translation: 'ئەڤە نووچەیەکێ باشە بۆ ژینگەی.' },
      { speaker: 'Reader 2', text: 'The article also mentioned a new playground for children.', translation: 'گۆتارێ هەروەسا بەحسێ جهەکێ نوو یێ یاریێ بۆ زارۆکان کر.' },
      { speaker: 'Reader 1', text: 'I can\'t wait for it to be finished.', translation: 'ئەز نەشێم چاڤەڕێ بکەم تا تەمام دبیت.' }
    ],
    vocabulary: [
      { word: 'Article', translation: 'گۆتار / بابەت' },
      { word: 'Plant', translation: 'چاندن / شینکرن' },
      { word: 'Environment', translation: 'ژینگە' },
      { word: 'Playground', translation: 'یاریگەهـ / جهێ یاریێ' }
    ]
  },
  {
    id: 'a2-62',
    level: 'A2',
    title: 'In an Art Gallery',
    titleKurdish: 'ل ناڤ گەلەرییەکا هونەری دا',
    dialogue: [
      { speaker: 'Visitor', text: 'This painting is very beautiful. Who is the artist?', translation: 'ئەڤ وێنەیە زۆر یێ جوانە. هونەرمەند کێیە؟' },
      { speaker: 'Guide', text: 'It was painted by a young local artist from Duhok.', translation: 'ئەڤە ژ لایێ هونەرمەندەکێ گەنج یێ ڤێ دەڤەرێ ل دهۆکێ هاتییە کێشان.' },
      { speaker: 'Visitor', text: 'The colors are so vibrant and expressive.', translation: 'رەنگ زۆر یێن تژی ژیان و دیارکەرن.' },
      { speaker: 'Guide', text: 'Yes, he uses a lot of traditional Kurdish symbols in his work.', translation: 'بەلێ، ئەو گەلەک هێمایێن (سمبۆلێن) کەلتووری یێن کوردی د کارێ خۆ دا بکار دئینیت.' },
      { speaker: 'Visitor', text: 'Is this piece for sale?', translation: 'ئەرێ ئەڤ پارچەیە بۆ فرۆشتنێ یە؟' }
    ],
    vocabulary: [
      { word: 'Painting', translation: 'وێنە / تابلۆ' },
      { word: 'Artist', translation: 'هونەرمەند' },
      { word: 'Vibrant', translation: 'گەش / تژی ژیان' },
      { word: 'Symbols', translation: 'هێما / سمبۆل' }
    ]
  },
  {
    id: 'a2-63',
    level: 'A2',
    title: 'Buying a New Phone',
    titleKurdish: 'کڕینا تەلەفۆنەکا نوو',
    dialogue: [
      { speaker: 'Customer', text: 'I want a phone with a very good camera.', translation: 'من تەلەفۆنەک دڤێت کو کامیرەکا زۆر یا باش هەبیت.' },
      { speaker: 'Seller', text: 'This model has three cameras and great night mode.', translation: 'ڤی مۆدێلی سێ کامیرە هەین و رێکارێ شەڤێ (نایت مۆد) یێ نایەبە.' },
      { speaker: 'Customer', text: 'How much storage does it have?', translation: 'کا چەند جادە (ستۆرێج) تێدا هەیە؟' },
      { speaker: 'Seller', text: 'It has 128 gigabytes of storage.', translation: '١٢٨ گیگابایتێن جادەیێ تێدا هەین.' },
      { speaker: 'Customer', text: 'Does it come with a warranty?', translation: 'ئەرێ دگەل گەرەنتییە (وەسنییە)؟' }
    ],
    vocabulary: [
      { word: 'Model', translation: 'مۆدێل / جۆر' },
      { word: 'Storage', translation: 'جادە / جهێ عەمبارکرنێ' },
      { word: 'Warranty', translation: 'گەرەنتی / وەسنی' },
      { word: 'Gigabytes', translation: 'گیگابایت' }
    ]
  },
  {
    id: 'a2-64',
    level: 'A2',
    title: 'Talking about Cooking Skills',
    titleKurdish: 'ئاخفتن ل سەر شارەزاییێن چێکرنا خوارنێ',
    dialogue: [
      { speaker: 'Leyla', text: 'Are you a good cook?', translation: 'ئەرێ تو چێشتکەرەکێ (تەباخەکێ) باشی؟' },
      { speaker: 'Azad', text: 'I am okay, but I want to learn more recipes.', translation: 'ئەز تەمامم، لێ من دڤێت فێری گەلەک رێکارێن (رێسپیێن) دی یێن خوارنێ ببم.' },
      { speaker: 'Leyla', text: 'What is your specialty dish?', translation: 'خوارنا تە یا تایبەت چییە؟' },
      { speaker: 'Azad', text: 'I make a very good biryani with lamb.', translation: 'ئەز بریانیەکا زۆر یا باش ب گۆشتێ بەرخی چێ دکەم.' },
      { speaker: 'Leyla', text: 'Yum! You should invite me to taste it sometime.', translation: 'ئۆهـ! پێتڤییە تۆ جاران من داخواز بکەی دا کو تاما وێ بکەم.' }
    ],
    vocabulary: [
      { word: 'Cook', translation: 'چێشتکەر / تەباخ' },
      { word: 'Specialty', translation: 'تایبەتمەندی' },
      { word: 'Taste', translation: 'تامکردن' },
      { word: 'Biryani', translation: 'بریانی' }
    ]
  },
  {
    id: 'a2-65',
    level: 'A2',
    title: 'Discussing a Historical Figure',
    titleKurdish: 'گۆتۆبێژ ل سەر کەسایەتییەکا دیرۆکی',
    dialogue: [
      { speaker: 'Student A', text: 'We have to write a report about a famous leader.', translation: 'پێتڤییە ئەم راپۆرتەکێ ل سەر سەرکردەیەکێ ناڤدار بنڤێسین.' },
      { speaker: 'Student B', text: 'I am thinking about Saladin Al-Ayyubi.', translation: 'ئەز هزرا سەلاحەدینێ ئەییووبی دکەم.' },
      { speaker: 'Student A', text: 'That is a great choice. He was known for his wisdom and bravery.', translation: 'هەلبژارتنەکا نایەبە. ئەو ب ژیری و قارەمانیا خۆ دهاتە ناسکرن.' },
      { speaker: 'Student B', text: 'Yes, and he united many different groups.', translation: 'بەلێ، و وی گەلەک کۆمەڵێن جودا ئێکخستن.' },
      { speaker: 'Student A', text: 'I will help you find some books in the library about him.', translation: 'ئەز دێ هاریکاریا تە کەم هندەک پەرتووکان ل پەرتووکخانێ دەربارەی وی ببێنی.' }
    ],
    vocabulary: [
      { word: 'Leader', translation: 'سەرکردە / رێبەر' },
      { word: 'Wisdom', translation: 'ژیری / دانایی' },
      { word: 'Bravery', translation: 'قارەمانی / چەلەنگی' },
      { word: 'United', translation: 'ئێکخستن' }
    ]
  },
  {
    id: 'a2-66',
    level: 'A2',
    title: 'At a Wedding',
    titleKurdish: 'ل ناڤ ئاهەنگەکا هەڤژینیێ (داوەتەکێ) دا',
    dialogue: [
      { speaker: 'Guest 1', text: 'The bride looks stunning in her dress!', translation: 'بویک زۆر یا جوانە د جلی خۆ دا!' },
      { speaker: 'Guest 2', text: 'Yes, and the decorations are very elegant.', translation: 'بەلێ، و خەملاندن (دیکۆر) زۆر یا رێکوپێکە.' },
      { speaker: 'Guest 1', text: 'The music is great too. Everyone is dancing Kurdish "Govend".', translation: 'مۆزیک ژی یا نایەبە. هەموو کەس یێ "گۆڤەندێ" (دیلانێ) دکەن.' },
      { speaker: 'Guest 2', text: 'I love the traditional atmosphere of Kurdish weddings.', translation: 'ئەز حەز ژ سەقایێ (کەشوهەوایێ) کەلتووری یێ داوەتێن کوردی دکەم.' },
      { speaker: 'Guest 1', text: 'Let\'s go join the line of dancers!', translation: 'وەرە دێ چینە ناڤ رێزا دیلانکەران!' }
    ],
    vocabulary: [
      { word: 'Bride', translation: 'بۆیک' },
      { word: 'Stunning', translation: 'زۆر جوان / سەرسۆڕهێنەر' },
      { word: 'Elegant', translation: 'جوان / شیک' },
      { word: 'Dancing', translation: 'دیلان / سەما' }
    ]
  },
  {
    id: 'a2-67',
    level: 'A2',
    title: 'Dreams and Aspirations',
    titleKurdish: 'خەون و هیڤییێن پاشەرۆژێ',
    dialogue: [
      { speaker: 'Aveen', text: 'What do you hope to do in five years?', translation: 'تۆ هیڤیداری چ بکەی پشتی پێنج سالێن دی؟' },
      { speaker: 'Rovin', text: 'I want to speak English perfectly and work for an international NGO.', translation: 'من دڤێت ب رەنگی رەها ب ئنگلیزی باخێڤم و ل رێکخراوەکا نێڤدەوڵەتی کار بکەم.' },
      { speaker: 'Aveen', text: 'That is a wonderful goal. I want to start my own business.', translation: 'ئەڤە ئامانجەکا ناوازەیە. ئەز دڤێت کارەکێ تایبەت ب خۆ دەستپێ بکەم.' },
      { speaker: 'Rovin', text: 'It takes a lot of courage to start a business.', translation: 'بۆ دەستپێکرنا کارەکی پێتڤی ب قارەمانییەکا مەزن هەیە.' },
      { speaker: 'Aveen', text: 'I know, but I am working hard every day.', translation: 'دزانم، لێ ئەز هەر رۆژ ب بزاڤ کار دکەم.' }
    ],
    vocabulary: [
      { word: 'Aspirations', translation: 'هیڤی / ئاوات' },
      { word: 'Perfectly', translation: 'ب تەمامی / ب درۆستی' },
      { word: 'Business', translation: 'کار / پڕۆژە' },
      { word: 'Courage', translation: 'قارەمانی / ورە' }
    ]
  },
  {
    id: 'a2-68',
    level: 'A2',
    title: 'Returning a Library Book',
    titleKurdish: 'زڤڕاندنا پەرتووکەکێ بۆ پەرتووکخانێ',
    dialogue: [
      { speaker: 'Student', text: 'I would like to return this book, please.', translation: 'من دڤێت ڤێ پەرتووکێ ب زڤڕینم، بێ زەحمەت.' },
      { speaker: 'Librarian', text: 'Was it helpful for your research?', translation: 'ئەرێ بۆ ڤەکۆلینا تە یا ب مفا بوو؟' },
      { speaker: 'Student', text: 'Yes, it had many good charts and maps.', translation: 'بەلێ، گەلەک نەخشە و خشتەیێن باش تێدا بوون.' },
      { speaker: 'Librarian', text: 'Oh, you are two days late. There is a small fine.', translation: 'ئۆهـ، تۆ دوو رۆژان گیرۆ بووی. هندەک سزایێ پارەی یێ سڤک یێ ل سەر.' },
      { speaker: 'Student', text: 'I apologize. How much is the fine?', translation: 'داخوازا لێبۆرینێ دکەم. سزا چەندە؟' }
    ],
    vocabulary: [
      { word: 'Research', translation: 'ڤەکۆلین' },
      { word: 'Late', translation: 'گیرۆ / گیرۆبوون' },
      { word: 'Fine', translation: 'سزایێ پارەی / غەرامە' },
      { word: 'Apologize', translation: 'لێبۆرین خواستن' }
    ]
  },
  {
    id: 'a2-69',
    level: 'A2',
    title: 'Environmental Issues (Simple)',
    titleKurdish: 'ئاریشەیێن ژینگەیی (سادە)',
    dialogue: [
      { speaker: 'Sara', text: 'We should use less plastic in our daily lives.', translation: 'پێتڤییە ئەم کێمتر پلاستیکێ د ژیانا خۆ یا رۆژانە دا بکار بینین.' },
      { speaker: 'Ali', text: 'I agree. I always bring my own bag when I go shopping.', translation: 'ئەز هەڤرایم. ئەز هەر دەم جانتایێ خۆ دگەل خۆ دئینم دەمێ دچمە بازارکرنێ.' },
      { speaker: 'Sara', text: 'Recycling is also very important for the planet.', translation: 'دووبارە بکارئینان (رسایکلین) ژی زۆر یا گرنگە بۆ هەسارەیێ.' },
      { speaker: 'Ali', text: 'The city should provide more recycling bins.', translation: 'پێتڤییە باژێڕ پتر "قەنتەرێن" (تەنەکێن خۆلێ) یێن رسایکلینێ دابین بکەت.' },
      { speaker: 'Sara', text: 'Every small action helps.', translation: 'هەر کارەکێ بچووک هاریکارە.' }
    ],
    vocabulary: [
      { word: 'Plastic', translation: 'پلاستیک' },
      { word: 'Recycling', translation: 'دووبارە بکارئینان / رسایکلین' },
      { word: 'Planet', translation: 'هەسارە' },
      { word: 'Bins', translation: 'قەنتەر / تەنەکێن خۆلێ' }
    ]
  },
  {
    id: 'a2-70',
    level: 'A2',
    title: 'Ordering Flowers',
    titleKurdish: 'داخوازکرنا گۆڵان',
    dialogue: [
      { speaker: 'Customer', text: 'I would like a bouquet of flowers for my mother\'s birthday.', translation: 'من پێچەکا (بۆکێتەکا) گۆڵان دڤێت بۆ رۆژا ژدایکبوونا دایکا من.' },
      { speaker: 'Florist', text: 'What kind of flowers does she like?', translation: 'چ جۆرە گۆڵان ئەو حەز ژێ دکەت؟' },
      { speaker: 'Customer', text: 'She loves lilies and white roses.', translation: 'ئەو حەز ژ کەلهاتی و گۆڵێن سوور یێن سپی دکەت.' },
      { speaker: 'Florist', text: 'I can make a beautiful arrangement with those.', translation: 'ئەز دکارم رێکخستنەکا (دیزاینەکا) جوان ب وان چێ بکەم.' },
      { speaker: 'Customer', text: 'Can you deliver them to her house tomorrow morning?', translation: 'ئەرێ دکارن سوبەحی سپێدێ بگەهیننە مالا وێ؟' }
    ],
    vocabulary: [
      { word: 'Bouquet', translation: 'بۆکێت / پێچەکا گۆڵان' },
      { word: 'Lilies', translation: 'کەلهاتی / لیلی' },
      { word: 'Arrangement', translation: 'رێکخستن / ئامادەکردن' },
      { word: 'Morning', translation: 'سپێدە' }
    ]
  },
  {
    id: 'a2-71',
    level: 'A2',
    title: 'A Recent Concert',
    titleKurdish: 'ئەو کۆنسێرتا ڤێ دووماهییە',
    dialogue: [
      { speaker: 'Hevi', text: 'Did you go to the Kurdish music concert on Friday?', translation: 'ئەرێ تۆ چوویە کۆنسێرتا مۆزیکا کوردی ل رۆژا ئەینی؟' },
      { speaker: 'Danyar', text: 'Yes, the singer had an amazing voice!', translation: 'بەلێ، دەنگبێژی دەنگەکێ سەرسۆڕهێنەر هەبوو!' },
      { speaker: 'Hevi', text: 'The crowd was huge. Everyone was singing along.', translation: 'قەرەبالغەکا زۆر بوو. هەموو کەسان دگەل دا دگۆت.' },
      { speaker: 'Danyar', text: 'My favorite part was when they played the "Dabuke".', translation: 'خوەشتڤیترین پارچا من ئەو بوو دەمێ وان ل "دەبکێ" (تەبلێ) ددا.' },
      { speaker: 'Hevi', text: 'It was a night to remember.', translation: 'شەڤەک بوو کو ناهێتە ژ بیرکرن.' }
    ],
    vocabulary: [
      { word: 'Concert', translation: 'کۆنسێرت / ئاهەنگا مۆزیکێ' },
      { word: 'Crowd', translation: 'قەرەبالغ / خەڵک' },
      { word: 'Singer', translation: 'دەنگبێژ / سترانبێژ' },
      { word: 'Remember', translation: 'ب بیر ئینان / ژ بیر نەکردن' }
    ]
  },
  {
    id: 'a2-72',
    level: 'A2',
    title: 'A Typical Day at Work',
    titleKurdish: 'رۆژەکا ئاسایی ل سەر کاری',
    dialogue: [
      { speaker: 'Person A', text: 'Describe your typical day at the office.', translation: 'وەسفا رۆژەکا خۆ یا ئاسایی ل نڤیسینگێ (ئۆفیسێ) بکە.' },
      { speaker: 'Person B', text: 'I start by checking my emails, then I have a meeting with my manager.', translation: 'ئەز ب پشکنینا ئیمەیڵێن خۆ دەستپێ دکەم، پاشان ژڤانەکێ من دگەل بەرپرسێ من هەیە.' },
      { speaker: 'Person A', text: 'Do you take a long break for lunch?', translation: 'ئەرێ تۆ بێهنڤەدانەکا درێژ وەردگری بۆ فڕاڤینێ؟' },
      { speaker: 'Person B', text: 'I take about forty-five minutes to eat and chat with coworkers.', translation: 'ئەز نزیکەی ٤٥ خولەکان وەردگرم بۆ خوارنێ و ئاخفتنێ دگەل هەڤکارێن خۆ.' },
      { speaker: 'Person A', text: 'What time do you finish work?', translation: 'دەمژمێر چەند تۆ کارێ خۆ ب دوماهی دئینێ؟' }
    ],
    vocabulary: [
      { word: 'Typical', translation: 'ئاسایی / مۆدێل' },
      { word: 'Office', translation: 'نڤیسینگەهـ / ئۆفیس' },
      { word: 'Meeting', translation: 'کۆبوونەوە / ژڤان' },
      { word: 'Coworkers', translation: 'هەڤکارێن کار' }
    ]
  },
  {
    id: 'a2-73',
    level: 'A2',
    title: 'Asking for Technical Help',
    titleKurdish: 'داخوازکرنا هاریکاریا تەکنیکی',
    dialogue: [
      { speaker: 'User', text: 'I am having trouble with my laptop. It is very slow.', translation: 'ئاریشەیەکا من دگەل لاپتۆپێ من هەیە. زۆر یا گران ب رێڤە دچیت.' },
      { speaker: 'IT Tech', text: 'When did the problem start?', translation: 'کەنگی ئەڤ ئاریشەیە دەستپێ کر؟' },
      { speaker: 'User', text: 'After I installed a new software update.', translation: 'پشتی من نووکرنەکا (ئەپدەیتەکا) پڕۆگرامەکێ نوو ئەنجام دای.' },
      { speaker: 'IT Tech', text: 'I will scan for viruses and clear the cache.', translation: 'ئەز دێ ب دوو ڤایرۆسان بگەڕێم و میمۆریا ڤالا (cache) پاقژ کەم.' },
      { speaker: 'User', text: 'Please let me know if I need a new battery too.', translation: 'بێ زەحمەت ئاگەهداریا من بکە ئەگەر پێتڤی ب باترییەکا نوو هەبیت ژی.' }
    ],
    vocabulary: [
      { word: 'Trouble', translation: 'ئاریشە / گرفت' },
      { word: 'Update', translation: 'نووکرن / ئەپدەیت' },
      { word: 'Viruses', translation: 'ڤایرۆستان' },
      { word: 'Battery', translation: 'باتری' }
    ]
  },
  {
    id: 'a2-74',
    level: 'A2',
    title: 'Different Cultures',
    titleKurdish: 'کەلتوورێن جودا',
    dialogue: [
      { speaker: 'Student A', text: 'I am learning about Japanese culture this week.', translation: 'ئەز ڤێ حەفتیێ فێری کەلتوورێ یابانی دبم.' },
      { speaker: 'Student B', text: 'That is fascinating. What is the most interesting thing you learned?', translation: 'ئەڤە زۆر سەرنجراکێشە. کا چ تشتێ هەرە سەرنجراکێش بوو یێ تە فێربووی؟' },
      { speaker: 'Student A', text: 'I learned about "Tea Ceremonies" and how they value respect.', translation: 'ئەز فێری "رێورەسمێن چایێ" بووم و کا چەوا ئەو رێزگرتنێ بلند رادگرن.' },
      { speaker: 'Student B', text: 'Every culture has unique traditions that define it.', translation: 'هەر کەلتوورەک داب و نەریتێن تایبەت هەین یێن کو وەسفا وی دکەن.' },
      { speaker: 'Student A', text: 'Yes, it makes the world a much more interesting place.', translation: 'بەلێ، ئەڤە جیهانێ دکەتە جهەکێ گەلەک سەرنجراکێشتر.' }
    ],
    vocabulary: [
      { word: 'Culture', translation: 'کەلتوور / رەوشەنبیری' },
      { word: 'Fascinating', translation: 'سەرنجراکێش / جوان' },
      { word: 'Respect', translation: 'رێزگرتن' },
      { word: 'Unique', translation: 'تایبەت / بێ-وێنە' }
    ]
  },
  {
    id: 'a2-75',
    level: 'A2',
    title: 'Planning a Visit to a Museum',
    titleKurdish: 'پلاندانان بۆ سەرەدانەکا مۆزەخانێ',
    dialogue: [
      { speaker: 'Lavin', text: 'The National Museum has a new exhibition of Kurdish jewelry.', translation: 'مۆزەخانەیا نیشتیمانی نیشاندانەکا (پیشانگایەکا) نوو یا خشڵێن (زێڕینێت) کوردی یا هەی.' },
      { speaker: 'Rovin', text: 'I would love to see that. How much is the entrance fee?', translation: 'من گەلەک دڤێت وێ ببێنم. حەقێ چوونێ چەندە؟' },
      { speaker: 'Lavin', text: 'It is free for students on Thursdays.', translation: 'رۆژێن پێنشەمبی بۆ قوتابیان بێ بەرامبەرە.' },
      { speaker: 'Rovin', text: 'Great! Let\'s go together this Thursday afternoon.', translation: 'باشە! بلا ڤێ پێنشەمبیێ پشتی نیڤرۆ پێکڤە بچین.' },
      { speaker: 'Lavin', text: 'I will bring my camera to take some photos.', translation: 'ئەز دێ کامیرەیا خۆ ژی ئینم بۆ هندەک وێنەکێشانێ.' }
    ],
    vocabulary: [
      { word: 'Exhibition', translation: 'نیشاندان / پیشانگا' },
      { word: 'Jewelry', translation: 'خشڵ / زێڕین' },
      { word: 'Free', translation: 'بێ بەرامبەر / بلاش' },
      { word: 'Together', translation: 'پێکڤە' }
    ]
  },
  {
    id: 'a2-76',
    level: 'A2',
    title: 'Buying Souvenirs',
    titleKurdish: 'کڕینا دیارییان (یادگار)، سۆڤێنیر',
    dialogue: [
      { speaker: 'Tourist', text: 'I want to buy some souvenirs for my family back home.', translation: 'من دڤێت هندەک دیارییان (سۆڤێنیران) بۆ خێزانا خۆ ل مال بکڕم.' },
      { speaker: 'Seller', text: 'We have beautiful handmade rugs and pottery.', translation: 'مە قالیچێن دەستکرد یێن جوان و فەخار (کەلوپەلێن هەرێ) هەین.' },
      { speaker: 'Tourist', text: 'The rugs are too big for my suitcase. Maybe some small plates?', translation: 'قالیچە زۆر د مەزنن بۆ جانتایێ من. رەنگە هندەک دەوریێن بچووک؟' },
      { speaker: 'Seller', text: 'These ceramic plates are very popular and easy to carry.', translation: 'ئەڤ دەوریێن سیرامیکێ زۆر ناڤدارن و ب سانەهی بۆ هەلگرتنێ.' },
      { speaker: 'Tourist', text: 'I will take four of them, please.', translation: 'ئەز دێ چار دانەیان بەم، بێ زەحمەت.' }
    ],
    vocabulary: [
      { word: 'Souvenirs', translation: 'دیاری / یادگاری' },
      { word: 'Handmade', translation: 'دەستکرد / دەست-چێکری' },
      { word: 'Rugs', translation: 'قالیچە' },
      { word: 'Plates', translation: 'دەورییەکان' }
    ]
  },
  {
    id: 'a2-77',
    level: 'A2',
    title: 'Talking about High School',
    titleKurdish: 'ئاخفتن ل سەر قوتابخانەیا ئامادەیی',
    dialogue: [
      { speaker: 'Zana', text: 'Which subjects did you like best in high school?', translation: 'تە کیش بابەت ل قوتابخانەیا ئامادەیی ژ هەمیان پتر دڤیان؟' },
      { speaker: 'Dana', text: 'I really enjoyed history and geography.', translation: 'من ب راستی چێژ ژ دیرۆک و جوگرافیایێ وەردگرت.' },
      { speaker: 'Zana', text: 'Were you a good student?', translation: 'ئەرێ تو قوتابیەکێ باش بووی؟' },
      { speaker: 'Dana', text: 'I was okay, but I preferred sports over studying.', translation: 'ئەز باش بووم، لێ من وەرزش ل پێش خواندنێ ددیت.' },
      { speaker: 'Zana', text: 'Me too. I was on the school basketball team.', translation: 'ئەز ژی هەر وەسا. ئەز ل ناڤ تیما باسکێت بۆلا قوتابخانێ بووم.' }
    ],
    vocabulary: [
      { word: 'Subjects', translation: 'بابەتەکان' },
      { word: 'High school', translation: 'ئامادەیی' },
      { word: 'Enjoyed', translation: 'چێژ وەرگرتن' },
      { word: 'Basketball', translation: 'باسکێت بۆڵ' }
    ]
  },
  {
    id: 'a2-78',
    level: 'A2',
    title: 'At the Airport Check-in',
    titleKurdish: 'ل جێبەجێکرنا گەشتێ ل فرۆکەخانێ',
    dialogue: [
      { speaker: 'Agent', text: 'Can I see your passport and ticket, please?', translation: 'دکارم پاسپۆرت و بلیتا تە ببێنم، بێ زەحمەت؟' },
      { speaker: 'Traveler', text: 'Yes, here they are. I have one suitcase to check in.', translation: 'بەلێ، ئەڤە یێن هەین. من جانتایەکێ جەستەیی (سوتکەیس) یێ هەری بۆ جێبەجێکرنێ.' },
      { speaker: 'Agent', text: 'Please place it on the scale. It is twenty kilograms.', translation: 'بێ زەحمەت دانە سەر ته‌رازییێ. ٢٠ کیلۆگرامە.' },
      { speaker: 'Traveler', text: 'Is that within the weight limit?', translation: 'ئەرێ ئەڤە ل ناڤ سنوورێ کێشێ (وەزنێ) دایە؟' },
      { speaker: 'Agent', text: 'Yes, it is perfect. Here is your boarding pass.', translation: 'بەلێ، یا درۆستە. ئەڤە ژی بلیتا تە یا سەرکەفتنێ یه.' }
    ],
    vocabulary: [
      { word: 'Passport', translation: 'پاسپۆرت' },
      { word: 'Suitcase', translation: 'جانتایێ جەستەیی / سوتکەیس' },
      { word: 'Scale', translation: 'تەرازی / کێشان' },
      { word: 'Boarding pass', translation: 'بلیتا سەرکەفتنا فرۆکێ' }
    ]
  },
  {
    id: 'a2-79',
    level: 'A2',
    title: 'Discussing a Charity Event',
    titleKurdish: 'گۆتۆبێژ ل سەر چالاکییەکا خێرخوازی',
    dialogue: [
      { speaker: 'Person A', text: 'Are you going to the charity walk this Saturday?', translation: 'ئەرێ تو دێ چییە پیاسەیا خێرخوازی ل ڤێ شەمبیێ؟' },
      { speaker: 'Person B', text: 'Yes, I want to help raise money for the local orphanage.', translation: 'بەلێ، من دڤێت هاریکاریا کۆمکرنا پارەی بکەم بۆ سێوێخانەیا ڤێ دەڤەرێ.' },
      { speaker: 'Person A', text: 'That is very kind of you. How far is the walk?', translation: 'ئەو گەلەک یا دلۆڤانانە یە ژ لایێ تە ڤە. پیاسە چەند یا دویرە؟' },
      { speaker: 'Person B', text: 'It is about five kilometers around the city lake.', translation: 'نزیکەی پێنج کیلۆمەترانە ل دۆر گۆلا باژێڕی.' },
      { speaker: 'Person A', text: 'I will join you. I will bring some water bottles.', translation: 'ئەز دێ پشکداری تە ببم. ئەز دێ هندەک بتڵێن ئاڤێ ئینم.' }
    ],
    vocabulary: [
      { word: 'Charity', translation: 'خێرخوازی' },
      { word: 'Raise money', translation: 'پارە کۆمکردن' },
      { word: 'Orphanage', translation: 'سێوێخانە' },
      { word: 'Lake', translation: 'گۆڵ' }
    ]
  },
  {
    id: 'a2-80',
    level: 'A2',
    title: 'Asking about Holiday Traditions',
    titleKurdish: 'پرسیارکرن ل سەر داب و نەریتێن جەژنێ (بێهنڤەدانێ)',
    dialogue: [
      { speaker: 'Foreigner', text: 'How do you celebrate Newroz in Kurdistan?', translation: 'هوین چەوا نەورۆزێ ل کوردستانێ پیرۆز دکەن؟' },
      { speaker: 'Kurd', text: 'We wear traditional clothes and light big fires on the mountains.', translation: 'ئەم جل و بەرگێن کوردی لەبەر دکەین و ئاگرێن مەزن ل سەر چیان هەلدکەین.' },
      { speaker: 'Foreigner', text: 'Do you prepare any special food?', translation: 'ئەرێ هوین چ خوارنێن تایبەت ئامادە دکەن؟' },
      { speaker: 'Kurd', text: 'Yes, we go for picnics and eat traditional Kurdish dishes.', translation: 'بەلێ، ئەم دچینە سەیانان و خوارنێن کەلتووری یێن کوردی دخۆین.' },
      { speaker: 'Foreigner', text: 'It sounds like a very beautiful and joyful celebration.', translation: 'وەسا دیارە پیرۆزبایییەکا زۆر یا جوان و کەیفخۆشکەرە.' }
    ],
    vocabulary: [
      { word: 'Celebrate', translation: 'پیرۆزکردن' },
      { word: 'Traditions', translation: 'داب و نەریت' },
      { word: 'Picnics', translation: 'سەیان / گەشت' },
      { word: 'Joyful', translation: 'کەیفخۆشکەر' }
    ]
  },
  {
    id: 'a2-81',
    level: 'A2',
    title: 'Describing a Favorite Movie Star',
    titleKurdish: 'وەسفکردنا ستێرەکا (ئەکتەرەکێ) سینەمایێ یێ خۆشتڤی',
    dialogue: [
      { speaker: 'Ali', text: 'Who is your favorite actor?', translation: 'ئەکتەرێ تە یێ خۆشتڤی کێیە؟' },
      { speaker: 'Sara', text: 'I really like Tom Hanks. He is a very versatile actor.', translation: 'ئەز ب راستی حەز ژ تۆم هانکس دکەم. ئەکتەرەکێ زۆر فرە-بەهرەیە.' },
      { speaker: 'Ali', text: 'What is your favorite movie of his?', translation: 'کیش فیلمێ وی یێ خۆشتڤیترینە ل نک تە؟' },
      { speaker: 'Sara', text: 'I love "Forrest Gump". His acting was so moving.', translation: 'ئەز حەز ژ فیلمێ "فۆرێست گەمپ" دکەم. ئەکتەریا وی زۆر یا دلتەزێن بوو.' },
      { speaker: 'Ali', text: 'I agree. He always gives a great performance.', translation: 'ئەز هەڤرایم. ئەو هەر دەم پێشکێشکرنەیا نایەب پێشکێش دکەت.' }
    ],
    vocabulary: [
      { word: 'Versatile', translation: 'فرە-بەهرە / جودا جودا' },
      { word: 'Moving', translation: 'دلتەزێن / کاریگەر' },
      { word: 'Performance', translation: 'پێشکێشکرن / ئەکتەری' },
      { word: 'Actor', translation: 'ئەکتەر' }
    ]
  },
  {
    id: 'a2-82',
    level: 'A2',
    title: 'Future Plans (Career)',
    titleKurdish: 'پلانا پاشەڕۆژێ (کار و پیشە)',
    dialogue: [
      { speaker: 'Student', text: 'What do you want to be when you graduate?', translation: 'تە دڤێت ببییە چ دەمێ تو دەردچى؟' },
      { speaker: 'Friend', text: 'I want to be a civil engineer and build modern bridges.', translation: 'من دڤێت ببمە ئەندازیارێ شارستانی و پرا (کۆپڕیێن) مۆدێرن ئاڤا بکەم.' },
      { speaker: 'Student', text: 'That is a challenging but rewarding job.', translation: 'ئەو کارەکێ بزەحمەتە لێ یێ ب مفا و بەرهەمە.' },
      { speaker: 'Friend', text: 'Yes, I like working outdoors and solving problems.', translation: 'بەلێ، ئەز حەز دکەم ل دەرڤە کار بکەم و ئاریشەیان چارەسەر بکەم.' },
      { speaker: 'Student', text: 'I hope you achieve your dream soon.', translation: 'هیوادارم تو ب زووی بگەهی خەونا خۆ.' }
    ],
    vocabulary: [
      { word: 'Graduate', translation: 'دەرچوون / تەمامکردنی خواندن' },
      { word: 'Engineer', translation: 'ئەندازیار' },
      { word: 'Bridges', translation: 'پرد / کۆپڕی' },
      { word: 'Rewarding', translation: 'ب مفا / ب بەرهەم' }
    ]
  },
  {
    id: 'a2-83',
    level: 'A2',
    title: 'Buying a Gift for a Teacher',
    titleKurdish: 'کڕینا دیارییەکێ بۆ مامۆستایەکی',
    dialogue: [
      { speaker: 'Parent', text: 'The school year is ending. We should buy a gift for the teacher.', translation: 'سالی خواندنێ یا ب دوماهی دهێت. پێتڤییە ئەم دیارییەکێ بۆ مامۆستای بکڕین.' },
      { speaker: 'Child', text: 'How about a nice pen or a desk organizer?', translation: 'بۆچوونا تە چییە بۆ پێنوسەکێ جوان یان رێکخەرەکێ مێزێ؟' },
      { speaker: 'Parent', text: 'Those are practical ideas. Maybe a beautiful notebook too?', translation: 'ئەو هزرێن ب مفانە. رەنگە دەفتەرەکا تێبینییان یا جوان ژی؟' },
      { speaker: 'Child', text: 'Yes, she writes many notes during class.', translation: 'بەلێ، ئەو گەلەک تێبینییان ل دەمێ وانەیێ د نڤێسیت.' },
      { speaker: 'Parent', text: 'Let\'s go to the stationery shop today.', translation: 'بلا ئەڤرۆ بچینە دۆکانا کەلوپەلێن قوتابخانێ (ستەیشنەریێ).' }
    ],
    vocabulary: [
      { word: 'Practical', translation: 'پرادیژ / ب بکارئینان' },
      { word: 'Notebook', translation: 'دەفتەرا تێبینییان' },
      { word: 'Notes', translation: 'تێبینی / نۆت' },
      { word: 'Stationery', translation: 'کەلوپەلێن نووسینێ' }
    ]
  },
  {
    id: 'a2-84',
    level: 'A2',
    title: 'Discussing a Science Experiment',
    titleKurdish: 'گۆتۆبێژ ل سەر تاقییکرنەکا زانستی',
    dialogue: [
      { speaker: 'Teacher', text: 'Today we will observe how plants grow with different amounts of light.', translation: 'ئەڤرۆ ئەم دێ تەماشە کەین کا چەوا شینکاتی گەشە دکەت ب بکارئینانا بڕێن جودا یێن رۆناهیێ.' },
      { speaker: 'Student', text: 'Should we record the height of the plants every day?', translation: 'ئەرێ پێتڤییە ئەم درێژاهیا شینکاتییان هەر رۆژ تۆمار بکەین؟' },
      { speaker: 'Teacher', text: 'Yes, use your rulers and write it down in your journals.', translation: 'بەلێ، رێسا (مەستەرە) بکال بینن و ل دەفتەرێن خۆ یێن رۆژانە بنڤێسین.' },
      { speaker: 'Student', text: 'What happens if we give them no light?', translation: 'چ دێ چێ بیت ئەگەر ئەم چ رۆناهیێ نەدەینێ؟' },
      { speaker: 'Teacher', text: 'They will likely turn yellow and stop growing.', translation: 'رەنگە زەرد بن و گەشەکرنا وان ب راوەستیت.' }
    ],
    vocabulary: [
      { word: 'Observe', translation: 'تەماشەکرن / چاودێریکردن' },
      { word: 'Record', translation: 'تۆمارکردن' },
      { word: 'Rulers', translation: 'رێسا / مەستەرە' },
      { word: 'Journals', translation: 'تێبینیێن رۆژانە' }
    ]
  },
  {
    id: 'a2-85',
    level: 'A2',
    title: 'Talking about Sports Injuries',
    titleKurdish: 'ئاخفتن ل سەر برینداربوونێن وەرزشی',
    dialogue: [
      { speaker: 'Player 1', text: 'Why are you not playing today?', translation: 'بۆچی تۆ ئەڤرۆ یاریێ ناکەی؟' },
      { speaker: 'Player 2', text: 'I twisted my ankle during practice yesterday.', translation: 'من قۆتابا (گوێزینکا) پێیێ خۆ دۆهی ل دەمێ راهێنانێ بڕیندار کر (پێچدا).' },
      { speaker: 'Player 1', text: 'That sounds painful. Did you go to the doctor?', translation: 'ئەو دیارە یا ب ژانە. ئەرێ تو چوویە نک دکتۆری؟' },
      { speaker: 'Player 2', text: 'Yes, he told me to rest it and use an ice pack.', translation: 'بەلێ، وی گۆتە من بێهنڤەدانێ بدەمێ و جەمدێ (ئایس پاک) بکار بینم.' },
      { speaker: 'Player 1', text: 'I hope you recover quickly and return to the team.', translation: 'هیوادارم تو بزەویی باش ببی و بزڤڕی بۆ تیمێ.' }
    ],
    vocabulary: [
      { word: 'Twisted', translation: 'پێچدان / زڤڕاندن' },
      { word: 'Ankle', translation: 'قۆتاب / گوێزینگ' },
      { word: 'Painful', translation: 'ب ژان / ب ئێش' },
      { word: 'Recover', translation: 'باشبوون / چاکبوونەوە' }
    ]
  },
  {
    id: 'a2-86',
    level: 'A2',
    title: 'Planning a Surprise Party',
    titleKurdish: 'پلاندانان بۆ ئاهەنگەکا سوپرایز (ژناکاڤ)',
    dialogue: [
      { speaker: 'Sara', text: 'We are planning a surprise party for Khalid next Friday.', translation: 'ئەم پلانێ دادەنێین بۆ ئاهەنگەکا سوپرایز بۆ خالدی ل ئەینیا بهێت.' },
      { speaker: 'Omar', text: 'That is exciting! Where will it be?', translation: 'ئەڤە کەیفخۆشکەرە! دێ ل کیڤە بیت؟' },
      { speaker: 'Sara', text: 'At my house. Please don\'t tell him anything!', translation: 'ل مالا من. بێ زەحمەت چوو بۆ وی نەبێژە!' },
      { speaker: 'Omar', text: 'My lips are sealed. What should I bring?', translation: 'ئەی ب تەمامی بێدەنگ دبم. پێتڤییە ئەز چ ئینم؟' },
      { speaker: 'Sara', text: 'Just some snacks and your favorite music.', translation: 'تەنیا هندەک خوارنێن سڤک و مۆزیکا تە یا خۆشتڤی.' }
    ],
    vocabulary: [
      { word: 'Surprise', translation: 'سوپرایز / ژناکاڤ' },
      { word: 'Sealed', translation: 'داخستی / مۆرکری' },
      { word: 'Lips', translation: 'لێوەکان' },
      { word: 'Secret', translation: 'نهێنی' }
    ]
  },
  {
    id: 'a2-87',
    level: 'A2',
    title: 'Discussing a News Broadcast',
    titleKurdish: 'گۆتۆبێژ ل سەر دەنگوباسێن (نووچەیێن) تیڤی',
    dialogue: [
      { speaker: 'Viewer A', text: 'Did you hear the news about the local elections?', translation: 'ئەرێ تە دەنگوباسێن هەلبژارتنێن ناڤخۆیی بهیست؟' },
      { speaker: 'Viewer B', text: 'Yes, they said the results will be announced at midnight.', translation: 'بەلێ، وان گۆت ئەنجام دێ ل نیڤا شەڤێ هێنە ئاشکراکرن.' },
      { speaker: 'Viewer A', text: 'The turnout was higher than last year.', translation: 'رێژه‌یا پشکداریێ ژ سالا چۆیی بلندتر بوو.' },
      { speaker: 'Viewer B', text: 'That means people are more interested in local politics now.', translation: 'ئەڤە رامانا وێ ئەوە کو خەڵک نوکە پتر یێ ب مەرەقە بۆ سیاسەتا ناڤخۆیی.' },
      { speaker: 'Viewer A', text: 'I agree. It is important to participate.', translation: 'ئەز هەڤرایم. یا گرنگە مرۆڤ پشکداریێ بکەت.' }
    ],
    vocabulary: [
      { word: 'Broadcast', translation: 'وەشاندن / پەخش' },
      { word: 'Elections', translation: 'هەلبژارتنەکان' },
      { word: 'Turnout', translation: 'رێژه‌یا پشکداریێ' },
      { word: 'Politics', translation: 'سیاسەت' }
    ]
  },
  {
    id: 'a2-88',
    level: 'A2',
    title: 'At the Laundry Mat',
    titleKurdish: 'ل جلكشۆرینێ (لۆندری ماتی)',
    dialogue: [
      { speaker: 'Customer', text: 'How much does it cost to use the large washing machine?', translation: 'بکارئینانا دانەیا مەزن یا جلک-شۆرێ ب چەندە؟' },
      { speaker: 'Attendant', text: 'It is five thousand dinars per load. Detergent is separate.', translation: 'پێنج هزار دنیارە بۆ هەر وەجبەیەکێ. دەرمانێ جلکان (تایت) ب جودایە.' },
      { speaker: 'Customer', text: 'Where can I buy the detergent?', translation: 'ئەز دکارم ل کیڤە دەرمانێ جلکان بکڕم؟' },
      { speaker: 'Attendant', text: 'There is a vending machine near the entrance.', translation: 'ئامیرەکێ فرۆشتنێ یێ ئۆتۆماتیکی ل نێزیک دەرگەهی یێ هەی.' },
      { speaker: 'Customer', text: 'Thank you. I also need to use the dryer later.', translation: 'سوپاس. من دڤێت پاشان ئامیرێ هشککرنێ ژی بکار بینم.' }
    ],
    vocabulary: [
      { word: 'Washing machine', translation: 'جلک-شۆر' },
      { word: 'Detergent', translation: 'دەرمانێ جلکان / تایت' },
      { word: 'Vending machine', translation: 'ئامیرێ فرۆشتنا ئۆتۆماتیکی' },
      { word: 'Dryer', translation: 'هشککەر' }
    ]
  },
  {
    id: 'a2-89',
    level: 'A2',
    title: 'Talking about Public Transport',
    titleKurdish: 'ئاخفتن ل سەر هاتنوچوونا گشتی',
    dialogue: [
      { speaker: 'Commuter 1', text: 'Do you take the bus to work every day?', translation: 'ئەرێ تۆ هەر رۆژ ب پاسێ دچییە سەر کاری؟' },
      { speaker: 'Commuter 2', text: 'Yes, it is cheaper than driving and I can read a book.', translation: 'بەلێ، ژ ترۆمبێل لێخۆڕینێ ارزانتیرە و ئەز دکارم پەرتووکەکێ بخوینم.' },
      { speaker: 'Commuter 1', text: 'Is the bus always on time?', translation: 'ئەرێ پاس هەر دەم یا ل دەمێ خۆ دایە؟' },
      { speaker: 'Commuter 2', text: 'Usually, but sometimes traffic makes it late.', translation: 'ب گشتی بەلێ، لێ جاران ترافیک دکەتە ئەگەرێ گیرۆبوونا وێ.' },
      { speaker: 'Commuter 1', text: 'I think I will start using the bus too.', translation: 'ئەز هزردکەم ئەز ژی دێ دەست ب بکارئینانا پاسێ کەم.' }
    ],
    vocabulary: [
      { word: 'Transport', translation: 'هاتنوچوون / ڤەگوهاستن' },
      { word: 'Cheaper', translation: 'ارزانتر' },
      { word: 'Usually', translation: 'ب گشتی / ئاسایی' },
      { word: 'Driving', translation: 'لێخۆڕین' }
    ]
  },
  {
    id: 'a2-90',
    level: 'A2',
    title: 'Describing a Busy Street',
    titleKurdish: 'وەسفکردنا جاددەیەکا قەرەبالغ',
    dialogue: [
      { speaker: 'Tourist', text: 'This street is so full of energy!', translation: 'ئەڤ جاددەیە زۆر یا پڕی وزەیە (تەرزە)!' },
      { speaker: 'Local', text: 'Yes, it is the heart of the shopping district. There are many street performers.', translation: 'بەلێ، ئەڤە دلێ دەڤەرا بازارکرنێ یە. گەلەک نیشاندەرێن سەر جاددێ ل ڤێرێ هەین.' },
      { speaker: 'Tourist', text: 'I see many people selling street food too.', translation: 'ئەز گەلەک کەسان دبینم کو خوارنێن سەر جاددێ ژی دفرۆشن.' },
      { speaker: 'Local', text: 'You must try the roasted chickpeas. They are famous here.', translation: 'پێتڤییە تۆ رەزەلا گەرم (نۆکێن قەلانداین) تاقی بکەی. ئەو ل ڤێرێ ناڤدارن.' },
      { speaker: 'Tourist', text: 'The atmosphere is incredible.', translation: 'سەقا (کەشوهەوا) زۆر یێ باوەڕنەکردنی یە.' }
    ],
    vocabulary: [
      { word: 'District', translation: 'ناحیە / دەڤەر' },
      { word: 'Performers', translation: 'نیشاندەر / نوانکار' },
      { word: 'Roasted', translation: 'قەلانداین / برژاندی' },
      { word: 'Incredible', translation: 'باوەڕنەکردنی / نایەب' }
    ]
  },
  {
    id: 'a2-91',
    level: 'A2',
    title: 'Discussing Healthy Snacks',
    titleKurdish: 'گۆتۆبێژ ل سەر خوارنێن سڤک یێن ساخلەم',
    dialogue: [
      { speaker: 'Dana', text: 'I am trying to stop eating junk food.', translation: 'ئەز هەوڵ ددەم خوارنێن نەساخلەم (جەنک فوود) نەخۆم.' },
      { speaker: 'Hevi', text: 'What do you eat instead?', translation: 'تۆ ل جهێ وێ چ دخۆی؟' },
      { speaker: 'Dana', text: 'I eat nuts, seeds, and fresh fruit.', translation: 'ئەز زەرەزوات (نەتس)، تۆم، و فێقییێ فرێش دخۆم.' },
      { speaker: 'Hevi', text: 'Are almonds good for you?', translation: 'ئەرێ باوی (بایەم) بۆ تە د باشن؟' },
      { speaker: 'Dana', text: 'Yes, they have a lot of protein and healthy fats.', translation: 'بەلێ، پرۆتینەکا زۆر و دوهنێن ساخلەم تێدا هەین.' }
    ],
    vocabulary: [
      { word: 'Junk food', translation: 'خوارنا نەساخلەم' },
      { word: 'Seeds', translation: 'تۆم / دەنک' },
      { word: 'Almonds', translation: 'باوی / بایەم' },
      { word: 'Fats', translation: 'دوهن / چەوری' }
    ]
  },
  {
    id: 'a2-92',
    level: 'A2',
    title: 'Asking for a Reference (Job)',
    titleKurdish: 'داخوازکرنا راسپاردەیەکێ (رێفرنسەکی) بۆ کاری',
    dialogue: [
      { speaker: 'Employee', text: 'I am applying for a new position. Could you be my reference?', translation: 'ئەز بۆ پلەکا نوو داخوازنامەیێ پێشکێش دکەم. ئەرێ دکاری ببییە رێفرنسێ من؟' },
      { speaker: 'Manager', text: 'Of course. You were a very hard-working member of our team.', translation: 'بێگومان. تە کارەکی زۆر ب دلسۆزی د ناڤ تیما مە دا دکر.' },
      { speaker: 'Employee', text: 'Thank you. I will provide your contact details to the new company.', translation: 'سوپاس. ئەز دێ زانیارییێن پەیوەندییا تە دەمە کۆمپانیا نوو.' },
      { speaker: 'Manager', text: 'No problem. I will give you a good recommendation.', translation: 'چو ئاریشە نینە. ئەز دێ راسپاردەیەکا باش بدەمە تە.' },
      { speaker: 'Employee', text: 'I really appreciate your support.', translation: 'ئەز ب راستەقینە ل سەر پشتەڤانیا تە سوپاسگوزارم.' }
    ],
    vocabulary: [
      { word: 'Reference', translation: 'رێفرنس / راسپاردە' },
      { word: 'Applying', translation: 'داخوازنامە پێشکێشکردن' },
      { word: 'Position', translation: 'پله‌ / جهێ کار' },
      { word: 'Appreciate', translation: 'سوپاسگوزاربوون / رێزگرتن' }
    ]
  },
  {
    id: 'a2-93',
    level: 'A2',
    title: 'Talking about Photography',
    titleKurdish: 'ئاخفتن ل سەر وێنەکێشانێ (فۆتۆگرافیێ)',
    dialogue: [
      { speaker: 'Soran', text: 'Do you take many photos with your camera?', translation: 'ئەرێ تو گەلەک وێنەیان ب کامیرەیا خۆ دکێشی؟' },
      { speaker: 'Lana', text: 'Yes, I especially like taking pictures of nature.', translation: 'بەلێ، نەخاسمە ئەز حەز دکەم وێنەیێن سرۆشتی بکێشم.' },
      { speaker: 'Soran', text: 'What is the best time for outdoor photography?', translation: 'باشترین دەم چییە بۆ وێنەکێشانا دەرڤە؟' },
      { speaker: 'Lana', text: 'Early morning or late afternoon when the light is soft.', translation: 'سپێدێ زوو یان ژی ئێڤاری گیرۆ دەمێ رۆناهی یا نەرم بیت.' },
      { speaker: 'Soran', text: 'I want to learn how to edit my photos too.', translation: 'من دڤێت فێر ببم کا چەوا وێنەیێن خۆ رێکخەم (ئێدیت کەم) ژی.' }
    ],
    vocabulary: [
      { word: 'Nature', translation: 'سرۆشت' },
      { word: 'Photography', translation: 'وێنەکێشان / فۆتۆگرافی' },
      { word: 'Soft', translation: 'نەرم / کێم' },
      { word: 'Edit', translation: 'رێکخستن / ئێدیت' }
    ]
  },
  {
    id: 'a2-94',
    level: 'A2',
    title: 'Planning an Outdoor Picnic',
    titleKurdish: 'پلاندانان بۆ سەیانەکا (گەشتەکا) دەرڤە',
    dialogue: [
      { speaker: 'Ahmed', text: 'The weather is perfect for a picnic today.', translation: 'سەقا (کەشوهەوا) ئەڤرۆ زۆر یێ گونجایە بۆ سەیانەکێ.' },
      { speaker: 'Nisrin', text: 'Let\'s go to the park near the river. I will pack some sandwiches.', translation: 'بلا بچینە باخچەیێ نێزیکی رووباری. ئەز دێ هندەک لەفان (ساندویچان) ئامادە کەم.' },
      { speaker: 'Ahmed', text: 'Great idea. I will bring a blanket and some fruit juice.', translation: 'هزرەکا نایەبە. ئەز دێ بەتەنییەکێ و هندەک شەربەتا فێقی ئینم.' },
      { speaker: 'Nisrin', text: 'Should we invite our neighbors too?', translation: 'ئەرێ بلا ئەم جیرانێن خۆ ژی داخواز بکەین؟' },
      { speaker: 'Ahmed', text: 'Yes, the more the merrier!', translation: 'بەلێ، هەر چەند پتر بن خۆشترە!' }
    ],
    vocabulary: [
      { word: 'Sandwiches', translation: 'لەفە / ساندویچ' },
      { word: 'Juice', translation: 'شەربەت' },
      { word: 'Neighbors', translation: 'جیرانەکان' },
      { word: 'Merrier', translation: 'کەیفخۆشتر / خۆشتر' }
    ]
  },
  {
    id: 'a2-95',
    level: 'A2',
    title: 'Discussing a Famous Landmark',
    titleKurdish: 'گۆتۆبێژ ل سەر نیشانەیەکا (شۆینەوارەکێ) ناڤدار',
    dialogue: [
      { speaker: 'Tourist', text: 'Have you visited the Citadel of Erbil?', translation: 'ئەرێ تە سەرەدانا قەلاتا هەولێرێ کرییە؟' },
      { speaker: 'Local', text: 'Yes, it is one of the oldest continuously inhabited places in the world.', translation: 'بەلێ، ئێکە ژ کەڤنترین جهێن نیشتەجێبوونێ ل جیهانێ کو هەتا نوکە یێ مای.' },
      { speaker: 'Tourist', text: 'How old is it exactly?', translation: 'تەمەنێ وێ ب درۆستی چەندە؟' },
      { speaker: 'Local', text: 'It is estimated to be over six thousand years old.', translation: 'دهێتە خەملاندن کو پتر ژ شەش هزار سالان یا کەڤن بیت.' },
      { speaker: 'Tourist', text: 'That is truly amazing. The view from the top is beautiful.', translation: 'ئەو ب راستی سەرسۆڕهێنەرە. دیمەنێ وێ ژ سەرێ وێ یێ جوانە.' }
    ],
    vocabulary: [
      { word: 'Citadel', translation: 'قەلات / کەلهـ' },
      { word: 'Inhabited', translation: 'ئاوەدانی / نیشتەجێبوون' },
      { word: 'Estimated', translation: 'خەملاندن / دیارکردن' },
      { word: 'View', translation: 'دیمەن / بەرێخودان' }
    ]
  },
  {
    id: 'a2-96',
    level: 'A2',
    title: 'Talking about Musical Instruments',
    titleKurdish: 'ئاخفتن ل سەر ئامێرێن مۆزیکێ',
    dialogue: [
      { speaker: 'Person A', text: 'Do you play any musical instruments?', translation: 'ئەرێ تو چو ئامێرێن مۆزیکێ لێ ددەی؟' },
      { speaker: 'Person B', text: 'I am learning to play the "Saz" (Tembur).', translation: 'ئەز یێ فێری لێدانا "سازێ" (تەمبورێ) دبم.' },
      { speaker: 'Person A', text: 'Is it difficult to learn?', translation: 'ئەرێ فێربوونا وێ یا بزەحمەتە؟' },
      { speaker: 'Person B', text: 'It takes a lot of practice, but the sound is very beautiful.', translation: 'پێتڤی ب گەلەک راهێنانێ هەیە، لێ دەنگێ وێ زۆر یێ جوانە.' },
      { speaker: 'Person A', text: 'I would love to hear you play sometime.', translation: 'من دڤێت جاران لێدانا تە ببیسم.' }
    ],
    vocabulary: [
      { word: 'Instruments', translation: 'ئامێرەکان' },
      { word: 'Saz', translation: 'ساز / تەمبور' },
      { word: 'Sound', translation: 'دەنگ' },
      { word: 'Practice', translation: 'راهێنان / مەشق' }
    ]
  },
  {
    id: 'a2-97',
    level: 'A2',
    title: 'Traditional Wedding (Part 2)',
    titleKurdish: 'داوەتا (ئاهەنگا) کەلتووری (پاشکۆ)',
    dialogue: [
      { speaker: 'Guest A', text: 'I love seeing the guests in their colorful Kurdish outfits.', translation: 'ئەز حەز دکەم میڤانان ب جلی کوردی یێ رەنگا و رەنگ ببێنم.' },
      { speaker: 'Guest B', text: 'Yes, the hand-woven belts and fabrics are so unique.', translation: 'بەلێ، پشتێن و قۆماشێن دەست-چنین زۆر د تایبەتن.' },
      { speaker: 'Guest A', text: 'Look at the long line of people dancing. They move so well together.', translation: 'تەماشە بکە کا رێزا دیلانکەران چەند یا درێژە. ئەو زۆر ب جوانی پێکڤە د لێڤین.' },
      { speaker: 'Guest B', text: 'It is a symbol of unity in our culture.', translation: 'ئەو هێمایەکە (سمبۆلەکە) بۆ ئێکبوونێ د کەلتوورێ مە دا.' },
      { speaker: 'Guest A', text: 'I enjoy weddings more than any other party.', translation: 'ئەز ژ هەمی ئاهەنگێن دی پتر چێژێ ژ داوەتان وەردگرم.' }
    ],
    vocabulary: [
      { word: 'Outfits', translation: 'جل و بەرگ / پۆشاک' },
      { word: 'Fabrics', translation: 'قۆماش / پارچە' },
      { word: 'Unity', translation: 'ئێکبوون / تەبایی' },
      { word: 'Woven', translation: 'چنین / چنراو' }
    ]
  },
  {
    id: 'a2-98',
    level: 'A2',
    title: 'Discussing Internet Safety',
    titleKurdish: 'گۆتۆبێژ ل سەر پاراستنا ئینتەرنێتێ',
    dialogue: [
      { speaker: 'Parent', text: 'You should never share your password with anyone.', translation: 'پێتڤییە تۆ چو جاران پەیڤا نهێنی (پاسوۆردێ) خۆ دگەل کەسێ پارڤە نەکەی.' },
      { speaker: 'Child', text: 'I know, and I only use safe websites.', translation: 'دزانم، و ئەز تەنیا مالپەرێن (وێبسایتێن) ئارام بکار دئینم.' },
      { speaker: 'Parent', text: 'Be careful about accepting friend requests from strangers.', translation: 'یێ ئاگەهدار ببە ل سەر قەبوولکرنا داخوازنامەیێن هەڤالینیێ ژ کەسێن نەناس.' },
      { speaker: 'Child', text: 'I always ask you before I add someone new.', translation: 'ئەز پەر دەم پێشوەخت پرسیار ژ تە دکەم بەری ئەز کەسەکێ نوو زێدە بکەم.' },
      { speaker: 'Parent', text: 'That is a very good rule to follow.', translation: 'ئەو رێسایەکا (یاسایەکا) زۆر یا باشە بۆ جێبەجێکرنێ.' }
    ],
    vocabulary: [
      { word: 'Safety', translation: 'پاراستن / ئارامی' },
      { word: 'Share', translation: 'پارڤەکرن' },
      { word: 'Strangers', translation: 'کەسێن نەناس' },
      { word: 'Rule', translation: 'رێسا / یاسا' }
    ]
  },
  {
    id: 'a2-99',
    level: 'A2',
    title: 'Asking for a Discount',
    titleKurdish: 'داخوازکرنا داشکاندنەکێ (تەخفیزەکێ)',
    dialogue: [
      { speaker: 'Customer', text: 'I am buying three shirts. Can you give me a discount?', translation: 'ئەز سێ فانیلەیان (کەمیسان) دکڕم. دکاری داشکاندنەکێ (تەخفیزەکێ) بۆ من بکەی؟' },
      { speaker: 'Shopkeeper', text: 'Normally we don\'t, but since you are buying three, I can give you ten percent off.', translation: 'ب گشتی مە نینە، لێ ژ بەر کو تۆ سێیان دکڕی، ئەز دکارم ١٠٪ تەخفیز بکەم.' },
      { speaker: 'Customer', text: 'How about twenty percent?', translation: 'بۆچوونا تە چییە بۆ ٢٠٪؟' },
      { speaker: 'Shopkeeper', text: 'I can\'t go that low, but I will give you a free pair of socks.', translation: 'ئەز نەشێم هێندە کێم کەم، لێ ئەز دێ کۆپلەکا (جووتەکێ) گۆرەیێن بلاش دەمە تە.' },
      { speaker: 'Customer', text: 'Okay, that is a fair deal. Thank you.', translation: 'باشە، ئەڤە رێککەفتنەکا دادپەروەرە. سوپاس.' }
    ],
    vocabulary: [
      { word: 'Discount', translation: 'داشکاندن / تەخفیز' },
      { word: 'Low', translation: 'کێم / نزم' },
      { word: 'Socks', translation: 'گۆره‌ / گۆرەوی' },
      { word: 'Deal', translation: 'رێککەفتن / مامەڵە' }
    ]
  },
  {
    id: 'a2-100',
    level: 'A2',
    title: 'Reflecting on Language Progress',
    titleKurdish: 'گرنگی پێدان ل سەر پێشکەفتنا زمانێ',
    dialogue: [
      { speaker: 'Tutor', text: 'Congratulations on finishing the A2 level!', translation: 'پیرۆزە ل سەر ب دوماهی هێنانا ئاستێ A2!' },
      { speaker: 'Student', text: 'Thank you. I feel much more confident speaking English now.', translation: 'سوپاس. ئەز نوکە پتر هەست ب باوەڕی-ب-خۆبوونێ دکەم د ئاخفتنا ئنگلیزیێ دا.' },
      { speaker: 'Tutor', text: 'What was the most difficult part for you?', translation: 'گرانترین (نەخۆشترین) پشک بۆ تە چی بوو؟' },
      { speaker: 'Student', text: 'Learning all the irregular verbs was a challenge.', translation: 'فێربوونا هەمی کردارێن (فێعلێن) نە-رێکۆپێک تەحەدییەک بوو.' },
      { speaker: 'Tutor', text: 'You did a great job. Ready for the B1 level?', translation: 'تە کارەکێ نایەب کر. ئەرێ تو بەرهەڤی بۆ ئاستێ B1؟' }
    ],
    vocabulary: [
      { word: 'Reflecting', translation: 'گرنگی پێدان / رەنگدانەوە' },
      { word: 'Confident', translation: 'باوەڕی-ب-خۆبوون' },
      { word: 'Irregular verbs', translation: 'کردارێن (فێعلێن) نە-رێکۆپێک' },
      { word: 'Challenge', translation: 'تەحەدی / بەرهەنگاری' }
    ]
  },
  // B1 Level
  {
    id: 'b1-1',
    level: 'B1',
    title: 'Discussing Career Goals and the Future',
    titleKurdish: 'گفتوگۆکرن ل سەر ئارمانجێن کاری و پاشەرۆژێ',
    dialogue: [
      { speaker: 'Saman', text: 'Have you thought about what you want to do after graduation?', translation: 'تە هزر ل وێ یەکێ کریە دێ چ کەی پشتی دەرچوونێ ژ زانکۆیێ؟' },
      { speaker: 'Alan', text: 'Yes, I have been thinking a lot about my career lately. I really want to work in software development.', translation: 'بەلێ، ئەڤە دەمەکە ئەز زۆر هزر ل ژیانا خۆ یا کاری دکەم. ئەز ب راستی دخوازیم د بوارێ پێشخستنا نەرمەواڵەیان (پرۆگرامکرنێ) دا کار بکەم.' },
      { speaker: 'Saman', text: 'That is a great field! Technology is growing so fast. What kind of software do you want to build?', translation: 'ئەو بوارەکێ نایابە! تەکنۆلۆژیا ب لەز یا پێشدکەڤیت. تو دخوازی چ جورێن پرۆگرامان چێکەی؟' },
      { speaker: 'Alan', text: 'I am very interested in artificial intelligence and mobile apps. It is challenging but exciting.', translation: 'ئەز زۆر حەز ژ ژیرییا دەستکرد و بەرنامەیێن مۆبایلێ دکەم. کارەکێ ب زەحمەتە لێ یێ ب جۆش و خۆشە.' },
      { speaker: 'Saman', text: 'I agree. Have you started applying for any internships or jobs yet?', translation: 'ئەز هەڤڕامە دگەل تە. ئەرێ تە دەستپێکریە داخوازیا بۆ راھێنانان یان کاران پێشکەش بکەی؟' },
      { speaker: 'Alan', text: 'Not yet. I am currently taking some extra online courses to improve my programming skills.', translation: 'هێشتا نە. ئەز نوکە هندەک خۆلێن زێدە ل سەر ئەنتەرنێتێ دخوینم دا کو شارەزاییا خۆ د پرۆگرامکرنێ دا باشتر لێ بکەم.' },
      { speaker: 'Saman', text: 'That is a very smart approach. What about you? What are your plans?', translation: 'ئەفە رێکەکا گەلەک زیرەکانەیە. پا تو؟ پلانێن تە چنە؟' },
      { speaker: 'Alan', text: 'I want to be an architect. I have always loved designing houses and modern buildings.', translation: 'من دڤێت ببمە ئەندازیارێ تەلارسازی. من هەمیشە حەز ژ دیزاینکرنا خانوو و ئاڤاهییێن سەردەمیانە کریە.' },
      { speaker: 'Saman', text: 'Wow, architecture is a beautiful profession. It mixes art with engineering.', translation: 'واو، تەلارسازی پیشەیەکێ جوانە. تێکەلکرنا هونەرییە دگەل ئەندازیاریێ.' },
      { speaker: 'Alan', text: 'Exactly. It requires a lot of creativity and hard work, but I am ready for it.', translation: 'رێک وەسا یە. پێتڤی ب گەلەک داهێنان و کارێ رژد هەیە، لێ ئەز یێ ئامادەم بۆ وێ یەکێ.' },
      { speaker: 'Saman', text: 'I am sure we will both achieve our goals if we keep working hard.', translation: 'ئەز یێ پشتراستم کو ئەم هەردوو دێ گەهینە ئارمانجێن خۆ ئەگەر ئەم بەردەوام بین ل سەر کارێ باش.' }
    ],
    vocabulary: [
      { word: 'Career', translation: 'کار / پیشە' },
      { word: 'Graduation', translation: 'دەرچوون (ژ قوتابخانە یان زانکۆ)' },
      { word: 'Software', translation: 'نەرمەواڵە / پرۆگرام' },
      { word: 'Artificial Intelligence', translation: 'ژیرییا دەستکرد' },
      { word: 'Architecture', translation: 'تەلارسازی' },
      { word: 'Achieve', translation: 'گەهشتن / ب دەستڤەئینان' }
    ]
  },
  {
    id: 'b1-2',
    level: 'B1',
    title: 'Discussing Health and Fitness',
    titleKurdish: 'بەحسکرنا ساخلەمی و وەرزشێ',
    dialogue: [
      { speaker: 'Dana', text: 'How do you manage to stay so fit and healthy?', translation: 'تو چەوا دشێی خوە ب ساخلەمی و وەرزشوانی (فیت) بهێلی؟' },
      { speaker: 'Rebin', text: 'I try to exercise at least four times a week.', translation: 'ئەز هەوڵ ددەم هەر چ نەبیت چار جاران د حەفتیێ دا وەرزشێ بکەم.' },
      { speaker: 'Dana', text: 'What kind of exercise do you usually do?', translation: 'تو چ جۆرە وەرزشەکێ ب گشتی دکەی؟' },
      { speaker: 'Rebin', text: 'I enjoy swimming and lifting weights at the gym.', translation: 'ئەز حەز ژ مەلەڤانیێ و بلندکرنا سەنگان (قورسیان) دکەم ل یانا وەرزشی.' },
      { speaker: 'Dana', text: 'I also need to improve my diet and eat more vegetables.', translation: 'پێتڤییە ئەز ژی خوارنا خوە رێک بێخم و پتر کەسکاتیێ بخۆم.' }
    ],
    vocabulary: [
      { word: 'Manage', translation: 'رێڤەبرن / شیاین' },
      { word: 'Exercise', translation: 'وەرزش / راهێنان' },
      { word: 'Weights', translation: 'کێش / سەنگ / قورسی' },
      { word: 'Diet', translation: 'خوارن / رێژیما خوارنێ' }
    ]
  },
  {
    id: 'b1-3',
    level: 'B1',
    title: 'A Professional Work Meeting',
    titleKurdish: 'کۆمبوونا کار و پیشەیی',
    dialogue: [
      { speaker: 'Manager', text: 'Let’s begin the meeting by reviewing our monthly goals.', translation: 'با کۆمبوونێ دەست پێ بکەین ب پێداچوونا ئارمانجێن مە یێن هەەیڤانە.' },
      { speaker: 'Staff', text: 'We have achieved most of our targets, but sales are slightly down.', translation: 'مە پڕانیا ئارمانجێن خوە ب دەست ڤە ئینان، لێ فرۆشتن کێمەکێ کێم بوویە.' },
      { speaker: 'Manager', text: 'What do you think is the reason for this decrease?', translation: 'بۆچوونا تە چییە دەربارەی ئەگەرێ ڤێ کێمبوونێ؟' },
      { speaker: 'Staff', text: 'I believe we need a new marketing strategy to attract customers.', translation: 'ئەز ب وێ باوەڕێ مە کو پێتڤیا مە ب ستراتیژیەتەکا نوو یا مارکێتینگێ هەیە بۆ راکێشانا مشتەریان.' },
      { speaker: 'Manager', text: 'Agreed. Let’s schedule a follow-up meeting next Tuesday.', translation: 'هەڤرایم. با کۆمبوونەکا دی یا بەردەوامیێ (فۆلۆ-ئەپ) دئیستینین بۆ سێشەمبیا دهێت.' }
    ],
    vocabulary: [
      { word: 'Reviewing', translation: 'پێداچوون' },
      { word: 'Achieved', translation: 'ب دەست ڤە ئینای / گەهشتیێ' },
      { word: 'Strategy', translation: 'ستراتیژیەت' },
      { word: 'Schedule', translation: 'دەستنیشانکرنا دەمی / خشتە' }
    ]
  },
  {
    id: 'b1-4',
    level: 'B1',
    title: 'Buying a New Smartphone',
    titleKurdish: 'کڕینا مۆبایلەکا نوو',
    dialogue: [
      { speaker: 'Customer', text: 'I am looking for a phone with a good camera and long battery life.', translation: 'ئەز ل مۆبایلەکێ دگەڕێم کامیرەیەکا باش و پاتریەکا دەم-درێژ هەبیت.' },
      { speaker: 'Salesperson', text: 'This model is very popular and has excellent reviews.', translation: 'ئەڤ مۆدێلە گەلەک بەرنیاسە و گەلەک وەسفێن باش هەنە.' },
      { speaker: 'Customer', text: 'What is the storage capacity of this device?', translation: 'قەبارێ عەمبارکرنێ (ستۆرێج) یێ ڤێ ئامیرێ چەندە؟' },
      { speaker: 'Salesperson', text: 'It comes with 256GB of storage and a high-resolution display.', translation: 'ب قەبارێ ٢٥٦ گێگا دگەل شاشەکا روونا ب کۆالیەتەکا بلند دهێت.' },
      { speaker: 'Customer', text: 'Does it include a warranty in case of any damage?', translation: 'ئەرێ گەرەنتی (ضمان) ب خوە ڤە دگریت ئەگەر چو زیان بگێهنێ؟' }
    ],
    vocabulary: [
      { word: 'Popular', translation: 'بەرنیاس / ناڤدار' },
      { word: 'Capacity', translation: 'قەبارە / شیان' },
      { word: 'Resolution', translation: 'روونی (د وێنە و شاشەیان دا)' },
      { word: 'Warranty', translation: 'گەرەنتی / ضمان' }
    ]
  },
  {
    id: 'b1-5',
    level: 'B1',
    title: 'Discussing Remote Work',
    titleKurdish: 'گۆتۆبێژ ل سەر کارکرنا ل دویر (دویرەونی د کار دا)',
    dialogue: [
      { speaker: 'Tara', text: 'Do you prefer working from home or going to the office?', translation: 'تۆ کارکرن ل مالێ پێ باشترە یان چوون بۆ نڤیسینگێ؟' },
      { speaker: 'Karwan', text: 'Working from home has many benefits, like saving time on commuting.', translation: 'کارکرن ل مالێ گەلەک مفایێن هەین، مینا پاشەکەفتکرنا دەمی یێ د رێکا هاتنوچوونێ دا دهێتە مەزاختن.' },
      { speaker: 'Tara', text: 'I agree, but sometimes it is hard to separate work from personal life.', translation: 'ئەز هەڤرایم، لێ جاران یا بزەحمەتە مرۆڤ کار و ژیانا تایبەت ژ هەڤ جودا بکەت.' },
      { speaker: 'Karwan', text: 'That is true. You need a dedicated workspace and a strict schedule.', translation: 'ئەڤە یا درۆستە. پێتڤی ب جهەکێ کار یێ تایبەت و خشتەیەکێ توند یێ دەمی هەیە.' },
      { speaker: 'Tara', text: 'I miss the social interaction with my colleagues though.', translation: 'لێ تێبیمینی ئەز بیرا هەڤسۆزی و کارلێکرنا دگەل هەڤکارێن خۆ دکەم.' }
    ],
    vocabulary: [
      { word: 'Benefits', translation: 'مفا / قازانج' },
      { word: 'Commuting', translation: 'هاتنوچوونا رۆژانە یا کاری' },
      { word: 'Dedicated', translation: 'تایبەت / دەستنیشانکری' },
      { word: 'Interaction', translation: 'کارلێکرن / هەڤسۆزی' }
    ]
  },
  {
    id: 'b1-6',
    level: 'B1',
    title: 'Choosing a Career Path',
    titleKurdish: 'هەلبژارتنا رێکا کار و پیشەی',
    dialogue: [
      { speaker: 'Adel', text: 'I am still undecided about my future career. Any advice?', translation: 'ئەز هێشتا ل سەر کارێ خۆ یێ پاشەڕۆژێ بڕیار نەدایی مە. چو ئامۆژگاریێن تە هەین؟' },
      { speaker: 'Soran', text: 'You should consider what subjects you are truly passionate about.', translation: 'پێتڤییە تۆ هزر ل وێ بکەی کا کیش بابەت ب راستی تۆ حەز ژێ دکەی (شەیدای وێ ی).' },
      { speaker: 'Adel', text: 'I love technology and design, but I also enjoy helping people.', translation: 'ئەز حەز ژ تەکنەلۆژیا و دیزاینێ دکەم، لێ مژوولبوونا ب هاریکاریا خەڵکی ژی د کەیفا من دایە.' },
      { speaker: 'Soran', text: 'Maybe you could look into UX design or health informatics.', translation: 'رەنگە تۆ دکاری ل دیزاینا بکارئینەری (UX) یان زانیاریێن ساخلەمیێ بگەڕێی.' },
      { speaker: 'Adel', text: 'Those sound like interesting options combining my interests.', translation: 'ئەڤە وەسا دیار دکەن کو بژاردێن سەرنجراکێشن و هەردوو حەزێن من پێکڤە گرێ ددەن.' }
    ],
    vocabulary: [
      { word: 'Undecided', translation: 'بڕیار نەدایی' },
      { word: 'Passionate', translation: 'شەیدا / ب مەرەق' },
      { word: 'Informatics', translation: 'زانیاریخانە / زانستێ زانیارییان' },
      { word: 'Options', translation: 'بژاردە / رێکار' }
    ]
  },
  {
    id: 'b1-7',
    level: 'B1',
    title: 'A Community Charity Project',
    titleKurdish: 'پڕۆژەکێ خێرخوازی یێ جڤاکی',
    dialogue: [
      { speaker: 'Viyan', text: 'Our neighborhood association is planning to renovate the local youth center.', translation: 'کۆمەڵەیا گەڕەکا مە پلانێ ددەتە کو سەنتەرێ گەنجان یێ ناوچەی نوو کەتەڤە (نۆژەن کەتەڤە).' },
      { speaker: 'Rebin', text: 'That is a necessary project. The building is quite old and neglected.', translation: 'ئەڤە پڕۆژەکێ پێتڤی یە. ئاڤاهی گەلەک یێ کەڤن بووی و هاتییە پشتگوھخستن.' },
      { speaker: 'Viyan', text: 'We need volunteers to help with painting and minor repairs.', translation: 'مە پێتڤی ب خۆبەخشان هەیە بۆ هاریکاریا رەنگکرن و چێکرنا ئاریشێن بچووک.' },
      { speaker: 'Rebin', text: 'I can help with the electrical work since I have some experience.', translation: 'ئەز دکارم هاریکاریێ د کارێ کارەبێ دا بکەم ژ بەر کو هندەک ئەزموون یا من هەری.' },
      { speaker: 'Viyan', text: 'That would be fantastic! We will have a meeting this Friday to discuss the details.', translation: 'ئەڤە دێ نایەب بیت! ئەم دێ ئەینیا بهێت کۆبوونیەکێ کەین بۆ باخێڤتنێ ل سەر هویرکارییان.' }
    ],
    vocabulary: [
      { word: 'Association', translation: 'کۆمەڵە / رێکخراو' },
      { word: 'Renovate', translation: 'نۆژەنکردنەوە / نووکردنەوە' },
      { word: 'Neglected', translation: 'پشتگوھخستن' },
      { word: 'Volunteers', translation: 'خۆبەخشەکان' }
    ]
  },
  {
    id: 'b1-8',
    level: 'B1',
    title: 'Technology and Society',
    titleKurdish: 'تەکنەلۆژیا و جڤاک',
    dialogue: [
      { speaker: 'Saman', text: 'How do you think smartphones have changed our social interactions?', translation: 'تو چەوا هزردکەی تەلەفۆنێن زیرەک کارلێکرنێن مە یێن جڤاکی گوهۆڕینە؟' },
      { speaker: 'Leyla', text: 'While they keep us connected, I feel people talk less in person now.', translation: 'هەر چەندە ئەم پێکڤە گڕێدای هەلاین، لێ ئەز هەست دکەم خەڵک نوکە کێمتر ژ نێزیک دئاخڤن.' },
      { speaker: 'Saman', text: 'I agree. It is common to see friends sitting together but looking at their screens.', translation: 'ئەز هەڤرایم. یا بەربلاڤە مرۆڤ هەڤالان ببینیت پێکڤە روونشتینە لێ تەماشەی شاشێن خۆ دکەن.' },
      { speaker: 'Leyla', text: 'However, technology also makes it easier to stay in touch with family abroad.', translation: 'لێ د هەمان دەم دا، تەکنەلۆژیا یا ب سانەهی دکەت مرۆڤ دگەل خێزانا خۆ یا ل دەرڤەی وەڵاتی د پەیوەندیێ دا بمینیت.' },
      { speaker: 'Saman', text: 'It is a double-edged sword, really.', translation: 'ب راستی کارتێکرنەکا دوو-لایەنە یا وێ هەری (شمشێرەکێ دوو سەرە).' }
    ],
    vocabulary: [
      { word: 'Common', translation: 'بەربلاڤ / باو' },
      { word: 'Abroad', translation: 'ل دەرڤەی وەڵاتی' },
      { word: 'Double-edged sword', translation: 'شمشێرێ دوو سەر / کارێ دوو-لایەنی' },
      { word: 'Connections', translation: 'پەیوەندی / گرێدان' }
    ]
  },
  {
    id: 'b1-9',
    level: 'B1',
    title: 'At a Job Interview',
    titleKurdish: 'ل ناڤ چاوپێکەفتنەکا کاری دا',
    dialogue: [
      { speaker: 'Interviewer', text: 'Can you tell me about a time you solved a difficult problem at work?', translation: 'دکاری بۆ من بەحسێ دەمەکی بکەی کو تە ئاریشەیەکا بزەحمەت ل سەر کاری چارەسەر کری؟' },
      { speaker: 'Applicant', text: 'At my previous job, we had a delay in a project due to a technical error.', translation: 'ل کارێ من یێ بەری نوکە، مە گیرۆبوونەک د پڕۆژەکی دا هەبوو ژ بەر خەلەتییەکا تەکنیکی.' },
      { speaker: 'Interviewer', text: 'How did you handle the situation?', translation: 'تە چەوا سەرەدەری دگەل وی بارۆدۆخی کر؟' },
      { speaker: 'Applicant', text: 'I identified the root cause and organized a meeting with the IT team to fix it quickly.', translation: 'من ئەگەرێ سەرەکی دیار کر و کۆبوونیەک دگەل تیما IT رێکخست بۆ چارەسەرکرنا وێ ب زوویی.' },
      { speaker: 'Interviewer', text: 'That shows good leadership and problem-solving skills.', translation: 'ئەو نیشانەتێ ددەت ل سەر سەرکردایەتیەکا باش و بەهرەیێن چارەسەرکرنا ئاریشەیان.' }
    ],
    vocabulary: [
      { word: 'Applicant', translation: 'پێشکێشکار / داخوازکار' },
      { word: 'Previous', translation: 'یێ بەری / پێشین' },
      { word: 'Identified', translation: 'دیارکردن / پەیبردن' },
      { word: 'Leadership', translation: 'سەرکردایەتی / رێبەرایەتی' }
    ]
  },
  {
    id: 'b1-10',
    level: 'B1',
    title: 'City Life vs. Country Life',
    titleKurdish: 'ژیانا باژێڕی بەرامبەر ژیانا گوندی',
    dialogue: [
      { speaker: 'Danyar', text: 'I am thinking about moving to the countryside to escape the city noise.', translation: 'ئەز د هزرا وێ چەندێ دامە بچمە گۆندی دا کو ژ دەنگەدەنگ و قەرەبالغا باژێڕی رزگار ببم.' },
      { speaker: 'Hozan', text: 'Rural life is certainly more peaceful, but you might miss the convenience of the city.', translation: 'ژیانا ل دەشت و گوندان ب بێگۆمان پتر یا تەنایە، لێ رەنگە بیرا سانەهی و تشتێن باژێڕی بکەی.' },
      { speaker: 'Danyar', text: 'True, but I want to grow my own vegetables and enjoy the fresh air.', translation: 'درۆستە، لێ من دڤێت کەسکاتییێن خۆ بچینم و چێژێ ژ هەوایا فرێش وەربگرم.' },
      { speaker: 'Hozan', text: 'You also have to consider the lack of public transportation and distant services.', translation: 'پێتڤییە تۆ هزر ل کێمیا هاتنوچوونا گشتی و دویریا خزمەتگوزارییان ژی بکەی.' },
      { speaker: 'Danyar', text: 'I plan to work remotely, so that shouldn\'t be a major issue.', translation: 'من پلان یا هەری ب شێوازێ دویرەونی کار بکەم، لەوما هند نە ئاریشەیە.' }
    ],
    vocabulary: [
      { word: 'Countryside', translation: 'دەرڤەی باژێڕ / گوند' },
      { word: 'Rural', translation: 'گوندی / دەشتی' },
      { word: 'Convenience', translation: 'ئاسانی / رەخساندن' },
      { word: 'Vegetables', translation: 'کەسکاتی / شینکاتی' }
    ]
  },
  {
    id: 'b1-11',
    level: 'B1',
    title: 'A Nature Documentary',
    titleKurdish: 'دۆکیۆمێنتەرییەک (فیلمەکێ) ل سەر سرۆشتی',
    dialogue: [
      { speaker: 'Aveen', text: 'I watched a fascinating documentary about the Amazon rainforest last night.', translation: 'من یەک دۆکیۆمێنتەرییا (فیلمەکێ) سەرنجراکێش ل سەر دارستانێن "ئەمازۆن" یێن باراناوی شەڤێ دی دیت.' },
      { speaker: 'Rovin', text: 'Oh, I heard those forests are essential for the planet\'s climate.', translation: 'ئۆهـ، من بهیستی یە ئەو دارستانە گەلەک د پێتڤینە بۆ سەقایێ هەسارەیێ.' },
      { speaker: 'Aveen', text: 'Yes, they produce a huge amount of oxygen and host millions of species.', translation: 'بەلێ، بڕەکێ گەلەکێ مەزن یێ ئۆکسجینێ بەرهەم دئینن و ملیۆنان جۆرێن گیانەوەران تێدا دژین.' },
      { speaker: 'Rovin', text: 'Was the film mainly about the wildlife or the environment?', translation: 'ئەرێ فیلم ب گشتی ل سەر ژیانا کێوی بوو یان ل سەر ژینگەی؟' },
      { speaker: 'Aveen', text: 'Both. It highlighted the dangers of deforestation and how it impacts us.', translation: 'هەردوو. تیشک خستە سەر مەترسیێن ژناڤچوونا دارستانان و کا چەوا کارتێکرنێ ل مە دکەت.' }
    ],
    vocabulary: [
      { word: 'Rainforest', translation: 'دارستانێ باراناوی' },
      { word: 'Climate', translation: 'کەشوهەوا / سەقا' },
      { word: 'Species', translation: 'جۆرەکان' },
      { word: 'Deforestation', translation: 'ژناڤچوونا دارستانان' }
    ]
  },
  {
    id: 'b1-12',
    level: 'B1',
    title: 'Travel Experiences in Europe',
    titleKurdish: 'ئەزموونێن گەشتکردنێ ل ئەوروپا',
    dialogue: [
      { speaker: 'Alan', text: 'I am planning an interrail trip through Europe this summer.', translation: 'ئەز پلانا گەشتەکا شەمەندەفەرێ (ئینتەر-رەیڵ) ل ناڤ ئەوروپایێ بۆ ئەڤی هاڤینی دادەنێم.' },
      { speaker: 'Sara', text: 'That sounds like a wonderful adventure! Which countries will you visit?', translation: 'ئەڤە وەسا دیارە کو سەرکێشییەکا ناوازەیە! دێ کیش وەڵاتان بینی؟' },
      { speaker: 'Alan', text: 'I want to start in Italy, then travel through Switzerland and France.', translation: 'من دڤێت ل ئیتالیا دەستپێ بکەم، پاشان ژ سویسرا و فەرەنسا دەرباز ببم.' },
      { speaker: 'Sara', text: 'Switzerland is expensive, but the scenery is absolutely breathtaking.', translation: 'سویسرا یا گرانە، لێ دیمەنێن وێ ب راستی مرۆڤی تەسلیم دکەن (سەرنجراکێشن).' },
      { speaker: 'Alan', text: 'I am trying to find budget hostels to keep the costs low.', translation: 'ئەز هەوڵ ددەم هۆستێلێن (نڤستنگەیێن) ب کێم-بها ببێنم دا کو تێچۆ کێم بن.' }
    ],
    vocabulary: [
      { word: 'Adventure', translation: 'سەرکێشی / هارپات' },
      { word: 'Scenery', translation: 'دیمەن / بەرێخودان' },
      { word: 'Breathtaking', translation: 'سەرسۆڕهێنەر / جوان' },
      { word: 'Budget', translation: 'بوجدە / کێم-بها' }
    ]
  },
  {
    id: 'b1-13',
    level: 'B1',
    title: 'Making a Complaint',
    titleKurdish: 'گلەیی کرن ل سەر خزمەتگوزارییەکێ',
    dialogue: [
      { speaker: 'Customer', text: 'I am calling to complain about the internet speed at my house.', translation: 'ئەز پەیوەندیێ دکەم دا کو گلەییا خێراتیا ئینتەرنێتێ ل مالا خۆ بکەم.' },
      { speaker: 'Support', text: 'I am sorry to hear that. Can you provide your account number?', translation: 'گۆزی من لێ هات (دلگرانم). ئەرێ دکاری ژمارەیا هەژمارا خۆ بدەی؟' },
      { speaker: 'Customer', text: 'It is 88293. The connection has been dropping frequently for three days.', translation: 'ژمارە یا ٨٨٢٩٣ یە. گرێدان ب بەردەوامی سێ رۆژە دپچکیت.' },
      { speaker: 'Support', text: 'I will run a remote diagnostic on your line right now.', translation: 'ئەز دێ نوکە پشکنینەکا (دیگنۆستیکە) دویرەونی بۆ هێڵا تە ئەنجام دەم.' },
      { speaker: 'Customer', text: 'I expect this to be resolved quickly, as I work from home.', translation: 'ئەز چاڤەڕێم ئەڤە ب زوویی چارەسەر ببیت، ژ بەر کو ئەز ل مال کار دکەم.' }
    ],
    vocabulary: [
      { word: 'Complaint', translation: 'گلەیی / شکاەت' },
      { word: 'Frequently', translation: 'ب بەردەوامی / زۆر جار' },
      { word: 'Diagnostic', translation: 'پشکنین / دیارکرن' },
      { word: 'Resolved', translation: 'چارەسەرکردن' }
    ]
  },
  {
    id: 'b1-14',
    level: 'B1',
    title: 'A Wedding Anniversary',
    titleKurdish: 'سالڤەگەڕا هەڤژینیێ',
    dialogue: [
      { speaker: 'Husband', text: 'Our tenth wedding anniversary is next month. We should do something special.', translation: 'دەهەمین سالڤەگەڕا هەڤژینیا مە هەیڤا بهێتە. پێتڤییە ئەم تشتەکێ تایبەت بکەین.' },
      { speaker: 'Wife', text: 'Maybe we could go on a weekend getaway to the mountains.', translation: 'رەنگە ئەم دکارین گەشتەکا دووماهیا حەفتیێ ئەنجام دەین بۆ چیا.' },
      { speaker: 'Husband', text: 'That sounds romantic. I will look for a cozy cabin or a nice hotel.', translation: 'ئەو دیارە یا رۆمانسی یە. ئەز دێ ل کۆخەکا (کابینەکا) تەنا یان ئۆتێلەکا باش گەڕێم.' },
      { speaker: 'Wife', text: 'I would also like to have a small dinner with our closest friends.', translation: 'هەروەسا من دڤیا خوارنەکا ئێڤاری یا بچووک دگەل هەڤالێن مە یێن نێزیک هەبیت.' },
      { speaker: 'Husband', text: 'Sure, I will start making a guest list tonight.', translation: 'بێگومان، ئەز دێ ئەڤ شەڤە دەست ب ئامادەکرنا لیستا میڤانان کەم.' }
    ],
    vocabulary: [
      { word: 'Anniversary', translation: 'سالڤەگەڕ' },
      { word: 'Getaway', translation: 'گەشت / چوونەدەر' },
      { word: 'Romantic', translation: 'رۆمانسی / ئەڤینداری' },
      { word: 'Cozy', translation: 'تەنا / ئارام' }
    ]
  },
  {
    id: 'b1-15',
    level: 'B1',
    title: 'Favorite Historical Eras',
    titleKurdish: 'سەردەمێن دیرۆکی یێن خۆشتڤی',
    dialogue: [
      { speaker: 'Zana', text: 'If you could travel back in time, which era would you visit?', translation: 'ئەگەر تە شیان هەبان بۆ دەمی بزڤڕی، تە دڤیا سەرەدانا کیش سەردەمی بکەی؟' },
      { speaker: 'Omar', text: 'I find the Islamic Golden Age fascinating because of the scientific progress.', translation: 'ئەز سەردەمێ زێرین یێ ئیسلامی ب زۆر سەرنجراکێش دبینم ژ بەر پێشکەفتنا زانستی.' },
      { speaker: 'Zana', text: 'That was indeed a time of great discoveries in medicine and astronomy.', translation: 'ئەو ب راستی دەمێ گەهشتنا مەزن بوو د ناڤ پزیشکی و گەردووزانیێ دا.' },
      { speaker: 'Omar', text: 'What about you? Are you interested in the ancient civilizations?', translation: 'پا تۆ؟ ئەرێ تو ب شارستانییەتێن کەڤن یێ ب مەرەقی؟' },
      { speaker: 'Zana', text: 'Yes, I would love to see Ancient Mesopotamia and the development of writing.', translation: 'بەلێ، من دڤیا وەسپۆتامیا (دوینمه‌هرێ) یا کەڤن و گەشەکرنا نووسینێ ببێنم.' }
    ],
    vocabulary: [
      { word: 'Era', translation: 'سەردەم / چاخ' },
      { word: 'Astronomy', translation: 'گەردووزانی' },
      { word: 'Civilizations', translation: 'شارستانییەتەکان' },
      { word: 'Mesopotamia', translation: 'وەسپۆتامیا / میسۆپۆتامیا' }
    ]
  },
  {
    id: 'b1-16',
    level: 'B1',
    title: 'Hobbies and Skills',
    titleKurdish: 'مەرەق (هۆبی) و شارەزایی',
    dialogue: [
      { speaker: 'Tara', text: 'I started learning calligraphy recently to improve my creativity.', translation: 'من ئەڤ دووماهییە دەست ب فێربوونا خەتخۆشیێ کر دا کو داهێنانێن خۆ باشتر کەم.' },
      { speaker: 'Sivan', text: 'That is quite a difficult skill to master. How is it going?', translation: 'ئەو بەهرەیەکا ب راستی یا بزەحمەتە بۆ سەرکەفتنێ. چەوا ب رێڤە دچیت؟' },
      { speaker: 'Tara', text: 'It requires a lot of patience and steady hand movements.', translation: 'پێتڤی ب بێهنفەرهەیەکا زۆر و لێڤینێن دستێ جێگیر هەیە.' },
      { speaker: 'Sivan', text: 'I prefer active hobbies like rock climbing or swimming.', translation: 'ئەز هۆبیێن (مەرەقێن) چالاک باشتر دبینم مینا سەرکەفتنا چیا یان مەلەڤانیێ.' },
      { speaker: 'Tara', text: 'Both types of hobbies are good for mental and physical health.', translation: 'هەردوو جۆرە مەرەق بۆ ساخلەمیا دەروونی و جەستەیی د باشن.' }
    ],
    vocabulary: [
      { word: 'Calligraphy', translation: 'خەتخۆشى / جوان نووسین' },
      { word: 'Creativity', translation: 'داهێنان / داهێنەری' },
      { word: 'Patience', translation: 'بێهنفەرهەی / ئارامی' },
      { word: 'Steady', translation: 'جێگیر / بێ-لێڤین' }
    ]
  },
  {
    id: 'b1-17',
    level: 'B1',
    title: 'Learning a New Language',
    titleKurdish: 'فێربوونا زمانەکێ نوو',
    dialogue: [
      { speaker: 'Student', text: 'What is the most effective way to improve my English speaking skills?', translation: 'کاریگەرترین رێک چییە بۆ باشترکردنا بەهرەیێن ئاخفتنێ یێن ئنگلیزی؟' },
      { speaker: 'Teacher', text: 'Immersion is key. Try to surround yourself with the language every day.', translation: 'تێکەلبوون (ئیمێرشن) کلیلە. هەوڵ بدە هەر رۆژ خۆ تژی کەی ب وی زمانی.' },
      { speaker: 'Student', text: 'Should I focus more on grammar or vocabulary?', translation: 'ئەرێ پێتڤییە ئەز پتر گرنگیێ بدەمە رێزمانێ یان پەیڤان؟' },
      { speaker: 'Teacher', text: 'Both are important, but communication is the main goal. Don\'t be afraid to make mistakes.', translation: 'هەردوو د گرنگن، لێ گەهاندن ئامانجێ سەرەکی یە. مەترسە ژ خەلەتییان.' },
      { speaker: 'Student', text: 'I often listen to podcasts while I am on the bus.', translation: 'ئەز زۆر جاران گوهداریا پۆدکاستێن دکەم دەمێ ئەز ل ناڤ پاسێ دایم.' }
    ],
    vocabulary: [
      { word: 'Effective', translation: 'کاریگەر / ب مفا' },
      { word: 'Immersion', translation: 'تێکەلبوون / نوقمبوون' },
      { word: 'Communication', translation: 'پەیوەندی / گەهاندن' },
      { word: 'Mistakes', translation: 'خەلەتییەکان' }
    ]
  },
  {
    id: 'b1-18',
    level: 'B1',
    title: 'Dealing with Stress',
    titleKurdish: 'سەرەدەری دگەل فشارێ (سترێسێ)',
    dialogue: [
      { speaker: 'Ahmed', text: 'I have been under a lot of pressure at work lately due to tight deadlines.', translation: 'ئەز ئەڤ دووماهییە ل بن فشارەکا زۆر دایم ل سەر کاری ژ بەر دەمێن دیارکری یێن توند.' },
      { speaker: 'Leyla', text: 'Stress can really affect your well-being. How are you coping?', translation: 'فشار (سترێس) دکارت ب راستی کارێ بکەت ل سەر بژێویا تە. تۆ چەوا سەرەدەریێ دکەی؟' },
      { speaker: 'Ahmed', text: 'I try to take short breaks and practice deep breathing exercises.', translation: 'ئەز هەوڵ ددەم بێهنڤەدانێن کورت وەربگرم و راهێنانێن هەناسەوەرگرتنا کویر ئەنجام دەم.' },
      { speaker: 'Leyla', text: 'You should also prioritize your tasks and learn to delegate some work.', translation: 'پێتڤییە تۆ کارێن خۆ ژی رێزبەند کەی (پریۆریتیز کەی) و فێر ببى کا چەوا هندەک کاران بدەی کەسێن دی.' },
      { speaker: 'Ahmed', text: 'I am learning to say "no" more often to avoid burnout.', translation: 'ئەز یێ فێر دبم پتر "نە" بێژم دا کو ژ هیزکەفتنێ رزگار ببم.' }
    ],
    vocabulary: [
      { word: 'Pressure', translation: 'فشار' },
      { word: 'Deadlines', translation: 'دەمێ دوماهیێ کە یێ دیارکری' },
      { word: 'Coping', translation: 'سەرەدەری / رووبەڕوو-بوونەوە' },
      { word: 'Burnout', translation: 'هیلاکبوون / هێزکەفتن' }
    ]
  },
  {
    id: 'b1-19',
    level: 'B1',
    title: 'Planning a Small Business',
    titleKurdish: 'پلاندانان بۆ پڕۆژەکێ (کارەکێ) بچووک',
    dialogue: [
      { speaker: 'Soran', text: 'I am writing a business plan for an online boutique selling Kurdish accessories.', translation: 'ئەز یێ پلانەکا کار د نڤێسم بۆ دۆکانەکا ئۆنلاین (بوتیك) یا فرۆشتنا کەلوپەلێن خەملاندنێ یێن کوردی.' },
      { speaker: 'Dana', text: 'That is a creative idea. Have you identified your target market?', translation: 'ئەو هزرەکا داهێنەری یە. ئەرێ تە بازاڕێ خۆ یێ ئامانجکری دیار کرییە؟' },
      { speaker: 'Soran', text: 'Mainly young people interested in modern interpretations of traditional designs.', translation: 'ب گشتی گەنجێن کو ب مەرەقن بۆ شڕۆڤەکرنێن مۆدێرن یێن دیزاینێن کەلتووری.' },
      { speaker: 'Dana', text: 'You will need a strong marketing strategy and a user-friendly website.', translation: 'تۆ دێ پێتڤی ب ستراتیژییەتەکا بهێز یا مارکێتینگی و مالپەرەکێ بکارئینەر-دۆست هەبی.' },
      { speaker: 'Soran', text: 'I am currently researching different shipping options.', translation: 'ئەز نوکە یێ ل سەر بژاردێن جودا یێن هنارتنێ (شیپینگێ) ڤەکۆلینێ دکەم.' }
    ],
    vocabulary: [
      { word: 'Accessories', translation: 'کەلوپەلێن خەملاندنێ' },
      { word: 'Interpretations', translation: 'شڕۆڤەکرن / تەفسیر' },
      { word: 'Strategy', translation: 'ستراتیژییەت' },
      { word: 'Shipping', translation: 'هنارتن / گەهاندن' }
    ]
  },
  {
    id: 'b1-20',
    level: 'B1',
    title: 'Benefits of Exercise',
    titleKurdish: 'مفایێن وەرزشێ',
    dialogue: [
      { speaker: 'Coach', text: 'Regular physical activity is vital for a healthy heart and strong muscles.', translation: 'چالاکیا جەستەیی یا ب بەردەوامی زۆر یا فەرە بۆ دلەکێ ساخلەم و ماسولکەیێن بهێز.' },
      { speaker: 'Athlete', text: 'I feel much more energetic since I started going to the gym.', translation: 'ئەز هەست ب وزەیەکا پتر دکەم ژ کادەما من دەست ب چوون بۆ هۆڵا وەرزشێ کری.' },
      { speaker: 'Coach', text: 'Exercise also releases endorphins, which improve your mood.', translation: 'وەرزش هەروەسا "ئیندۆرفینان" ئازاد دکەت، یێن کو کارێ دکەنە سەر مەزاجا تە.' },
      { speaker: 'Athlete', text: 'Is it better to focus on cardio or strength training?', translation: 'ئەرێ باشترە مرۆڤ گرنگیێ بدەتە کاردیۆ یان راهێنانێن هێزێ؟' },
      { speaker: 'Coach', text: 'A balanced routine including both is best for overall fitness.', translation: 'خشتەیەکێ هاوسەنگ کو هەردوو تێدا بن، باشترینە بۆ فیتنێسا گشتی.' }
    ],
    vocabulary: [
      { word: 'Vital', translation: 'فەر / پێویست' },
      { word: 'Energetic', translation: 'پڕی وزە / چالاک' },
      { word: 'Endorphins', translation: 'ئیندۆرفین (هۆڕمۆنەکێ داهێنەر)' },
      { word: 'Overall', translation: 'ب گشتی / هەموو' }
    ]
  },
  {
    id: 'b1-21',
    level: 'B1',
    title: 'A Childhood Dream',
    titleKurdish: 'خەونەکا سەردەمێ زارۆکینیێ',
    dialogue: [
      { speaker: 'Sara', text: 'When I was a little girl, I always dreamed of becoming an astronaut.', translation: 'دەمێ ئەز کچەکا بچووک بووم، من هەر دەم خەونا وێ ددیت ببمە کەشتیگەرێ ئەسمانی.' },
      { speaker: 'Ali', text: 'That is a very ambitious dream! What attracted you to space?', translation: 'ئەو خەونەکا زۆر یا پڕ-هیڤی بوو! چ تشت تۆ بەرەڤ گەردووونێ راکێشای؟' },
      { speaker: 'Sara', text: 'I was fascinated by the stars and the idea of exploring other worlds.', translation: 'ئەز شەیدای ستێران و هزرا دۆزینەوەیا جیهانێن دی بووم.' },
      { speaker: 'Ali', text: 'Did you ever follow that path?', translation: 'ئەرێ تە چو جاران ئەو رێبازە گرتەبەر؟' },
      { speaker: 'Sara', text: 'No, but I became an astronomer, so I still study the stars every day.', translation: 'نە، لێ ئەز بوومە گەردووزان، لەوما ئەز پتر هەر رۆژ خواندنێ ل سەر ستێران دکەم.' }
    ],
    vocabulary: [
      { word: 'Astronaut', translation: 'کەشتیگەرێ ئەسمانی' },
      { word: 'Ambitious', translation: 'پڕ-هیڤی / مەزن' },
      { word: 'Exploring', translation: 'گەڕان / دۆزینەوە' },
      { word: 'Astronomer', translation: 'گەردووزان' }
    ]
  },
  {
    id: 'b1-22',
    level: 'B1',
    title: 'Cultural Differences in Business',
    titleKurdish: 'جوداهیێن کەلتووری د ناڤ کار و بازرگانیێ دا',
    dialogue: [
      { speaker: 'Manager A', text: 'We need to be aware of cultural etiquette when meeting our international partners.', translation: 'پێتڤییە ئەم ئاگەهداری ئەتەکێتا (ئینزباتا) کەلتووری بین دەمێ دگەل هەڤپشکێن مە یێن نێڤدەوڵەتی هەڤ ببینین.' },
      { speaker: 'Manager B', text: 'For example, in some cultures, punctuality is extremely important.', translation: 'بۆ نموونە، ل هندەک کەلتووران، پاراستنا دەمی (پێبەندبوون ب دەمی) زۆر یا گرنگە.' },
      { speaker: 'Manager A', text: 'Exactly. In others, building a personal relationship first is more crucial.', translation: 'درۆستە. ل هندەکان دی، ئاڤاکرنا پەیوەندییەکا تایبەت ل پێشیێ گەلەک فەرترە.' },
      { speaker: 'Manager B', text: 'Gift-giving also varies significantly from one country to another.', translation: 'پێشکێشکرنا دیارییان ژی ب شێوازەکێ بەرچاو ژ وەڵاتەکی بۆ ئێکێ دی دهێتە گوهۆڕین.' },
      { speaker: 'Manager A', text: 'We should provide cultural training for our sales team.', translation: 'پێتڤییە ئەم راهێنانا کەلتووری بۆ تیما فرۆشتنا خۆ دابین بکەین.' }
    ],
    vocabulary: [
      { word: 'Etiquette', translation: 'نەریت / ئەتەکێت' },
      { word: 'Punctuality', translation: 'پێبەندبوون ب دەمی' },
      { word: 'Crucial', translation: 'فەر / بریاردەر' },
      { word: 'Varies', translation: 'دگۆڕێت / جودایە' }
    ]
  },
  {
    id: 'b1-23',
    level: 'B1',
    title: 'A Weekend Road Trip',
    titleKurdish: 'گەشتەکا جاددەیان ل دووماهیا حەفتیێ',
    dialogue: [
      { speaker: 'Hozan', text: 'Let\'s take a road trip to the Bekhal waterfall this weekend.', translation: 'وەرە دێ گەشتەکا جاددەیان هەڵکێشین بۆ بیخالێ ل ڤێ دووماهیا حەفتیێ.' },
      { speaker: 'Soran', text: 'I am in! Who will be driving?', translation: 'ئەز یێ دگەل تە! دێ کێ ترۆمبێلێ لێخۆڕیت؟' },
      { speaker: 'Hozan', text: 'We can take turns if the drive is long.', translation: 'ئەم دکارین نۆره‌-نۆره‌ لێخۆرین ئەگەر رێ یا درێژ بیت.' },
      { speaker: 'Soran', text: 'We should check the fuel and tire pressure before we leave.', translation: 'پێتڤییە ئەم پانزینێ و فشێرا تایەران (تەیران) بپشکنین بەری دکەڤینە رێ.' },
      { speaker: 'Hozan', text: 'I will prepare a music playlist to keep us entertained.', translation: 'ئەز دێ پلەی-لیستەکا مۆزیکێ ئامادە کەم دا کو ئەم بێزار نەبین.' }
    ],
    vocabulary: [
      { word: 'Waterfall', translation: 'هاڤینگەهـ / ئاڤزار' },
      { word: 'Fuel', translation: 'سۆتەمەنی / پانزین' },
      { word: 'Pressure', translation: 'فشار' },
      { word: 'Entertained', translation: 'مژوولبوون / چێژوەرگرتن' }
    ]
  },
  {
    id: 'b1-24',
    level: 'B1',
    title: 'Genres of Music',
    titleKurdish: 'جۆرێن (تەرزێن) مۆزیکێ',
    dialogue: [
      { speaker: 'Friend A', text: 'I have been listening to a lot of classical music lately. It helps me focus.', translation: 'ئەز ئەڤ دووماهییە گەلەک گوهداریا مۆزیکا کلاسیک دکەم. هاریکاریا من دکەت کو پتر گرنگیێ بدەم.' },
      { speaker: 'Friend B', text: 'I prefer jazz because of its complexity and improvisation.', translation: 'ئەز جاز پێ باشترە ژ بەر ئالۆزی و ئۆرتورەیا (داهێنەرییا ژخۆ) وێ.' },
      { speaker: 'Friend A', text: 'I find jazz a bit unpredictable sometimes.', translation: 'ئەز مۆزیکا جاز جاران کێمەک ب نە-قەبلاندن دبینم.' },
      { speaker: 'Friend B', text: 'That is exactly why I like it! Each performance is unique.', translation: 'هەر ژ بەر وێ ئەگەرێ من دڤێت! هەر پێشکێشکرنەکا وێ یا جودایە.' },
      { speaker: 'Friend A', text: 'Do you ever listen to traditional Kurdish folk music?', translation: 'ئەرێ تو چو جاران گوهداریا مۆزیکا کەلتووری یا کوردی دکەی؟' }
    ],
    vocabulary: [
      { word: 'Complexity', translation: 'ئالۆزی / گرانى' },
      { word: 'Improvisation', translation: 'داهێنەری یا ژخۆ (بەدەیهى)' },
      { word: 'Unpredictable', translation: 'نە-قەبلاندن / دیارنەبوو' },
      { word: 'Folk music', translation: 'مۆزیکا جەماوەری / فۆلکلۆر' }
    ]
  },
  {
    id: 'b1-25',
    level: 'B1',
    title: 'Scientific Discoveries',
    titleKurdish: 'دۆزینەوە زانستییەکان',
    dialogue: [
      { speaker: 'Scientist', text: 'The discovery of CRISPR technology has revolutionized genetic engineering.', translation: 'دۆزینەوەیا تەکنەلۆژییا CRISPR شۆڕشەک د ئەندازیارییا بۆماوەیی (جینێتیک) دا چێکرییە.' },
      { speaker: 'Student', text: 'I read about that. It allows scientists to "edit" DNA, right?', translation: 'من ل سەر خواندییە. رێ رێ ددەتە زانایان کو DNA "رێکخەن" (ئێدیت کەن)، درۆستە؟' },
      { speaker: 'Scientist', text: 'Precisely. It could potentially cure many hereditary diseases.', translation: 'ب تەمامی. ئەڤە دکارت ب شیوەیەکێ دەستکەفتن گەلەک نەخۆشیێن بۆماوەیی چارەسەر بکەت.' },
      { speaker: 'Student', text: 'Are there any ethical concerns regarding this technology?', translation: 'ئەرێ چ مەترسییێن رەوشتی (ئەخلاقی) ل دۆر ڤێ تەکنەلۆژیایێ هەین؟' },
      { speaker: 'Scientist', text: 'Yes, it raises many questions about the limits of human intervention in nature.', translation: 'بەلێ، گەلەک پرسیاران پەیدا دکەت ل سەر سنوورێن دەستێوەردانا مرۆڤی د ناڤ سرۆشتی دا.' }
    ],
    vocabulary: [
      { word: 'Revolutionized', translation: 'شۆڕش چێکردن' },
      { word: 'Potentially', translation: 'ب شێوەیەکێ دەستکەفتن' },
      { word: 'Hereditary', translation: 'بۆماوەیی / میراتی' },
      { word: 'Ethical', translation: 'رەوشتی / ئەخلاقی' }
    ]
  },
  {
    id: 'b1-26',
    level: 'B1',
    title: 'Educational Systems',
    titleKurdish: 'سیستەمێن پەروەردەیێ',
    dialogue: [
      { speaker: 'Teacher A', text: 'The Finnish education system focuses on student well-being rather than high-stakes testing.', translation: 'سیستەمێ پەروەردەیێ یێ فینلەندی گرنگیێ ددەتە بژێوی و ئارامیا قوتابی، نە ب تاقییکرنێن توند یێن پارەی.' },
      { speaker: 'Teacher B', text: 'That is a stark contrast to the systems in many other countries where exams are everything.', translation: 'ئەو جوداهییەکا مەزنە ژ سیستەمێن زۆر وەڵاتێن دی کو تاقییکرن تێدا هەموو تشتە.' },
      { speaker: 'Teacher A', text: 'I believe that reducing pressure can lead to better long-term learning outcomes.', translation: 'ئەز باور دکەم کێمکرنا فشارێ دکارت بگەهیتە ئەنجامێن باشتر یێن خواندنا دەم-درێژ.' },
      { speaker: 'Teacher B', text: 'However, how do they measure progress without standardized tests?', translation: 'لێ دگەل وێ ژی، ئەو چەوا پێشکێشتنێ دپێڤن بێ تاقییکرنێن ستاندارد؟' },
      { speaker: 'Teacher A', text: 'They use continuous assessment and encourage self-reflection.', translation: 'ئەو هەڵسەنگاندنا بەردەوام بکار دئینن و هانی گرنگیپێدانا خۆ ددەن.' }
    ],
    vocabulary: [
      { word: 'Well-being', translation: 'بژێوی / ئارامی' },
      { word: 'Contrast', translation: 'جوداهی / بەراورد' },
      { word: 'Outcomes', translation: 'ئەنجامەکان' },
      { word: 'Assessment', translation: 'هەڵسەنگاندن / پشکنین' }
    ]
  },
  {
    id: 'b1-27',
    level: 'B1',
    title: 'Volunteering Experiences',
    titleKurdish: 'ئەزموونێن خۆبەخشیێ',
    dialogue: [
      { speaker: 'Rovin', text: 'I spent my summer volunteering at a local animal shelter.', translation: 'من هاڤینا خۆ وەسا بۆراند کو خۆبەخش بووم ناڤ پەناگەهەکا ئاژەڵان یا ناوچەی.' },
      { speaker: 'Lavin', text: 'That is so admirable! What were your main responsibilities?', translation: 'ئەو ب راستی یا رێزلێگرتی یە (ناوازەیە)! بەرپرسایەتیێن تە یێن سەرەکی چ بوون؟' },
      { speaker: 'Rovin', text: 'I helped with cleaning the enclosures and feeding the rescued dogs.', translation: 'من هاریکاریا پاقژکرنا حەوشان و خوارن-دانە سەگێن رزگارکری دکر.' },
      { speaker: 'Lavin', text: 'Did you find it emotionally challenging?', translation: 'ئەرێ تە د دیت کو ئەڤە ژ لایێ دەروونی (هەستی) ڤە یا بزەحمەت بوو؟' },
      { speaker: 'Rovin', text: 'Sometimes, but seeing a dog find a "forever home" made it all worth it.', translation: 'جاران بەلێ، لێ دیتنا سەگەکی کو "مالەکا هەتا-هەتایی" ببێنیت هەژی هەموو وێ رەنجێ بوو.' }
    ],
    vocabulary: [
      { word: 'Admirable', translation: 'رێزلێگرتی / نایەب' },
      { word: 'Shelter', translation: 'پەناگەهـ / جە' },
      { word: 'Rescued', translation: 'رزگارکری' },
      { word: 'Worth it', translation: 'هەژی / ب مفا' }
    ]
  },
  {
    id: 'b1-28',
    level: 'B1',
    title: 'Art in Schools',
    titleKurdish: 'هونەر ل ناڤ قوتابخانان دا',
    dialogue: [
      { speaker: 'Parent A', text: 'I am concerned about the budget cuts for art programs in our school district.', translation: 'ئەز یێ نیگەرانم ژ کێمکرنا بوجدەیا پڕۆگرامێن هونەرێ ل قوتابخانێن دەڤەرا مە.' },
      { speaker: 'Parent B', text: 'Art is often viewed as a "luxury" rather than a necessity in education.', translation: 'هونەر زۆر جاران وەک "رەفاهیەت" (لۆکشەری) دهێتە دیتن نەک وەک پێتڤییەک د پەروەردەیێ دا.' },
      { speaker: 'Parent A', text: 'But art fosters critical thinking and emotional intelligence in children.', translation: 'لێ هونەر دکارت گەشە بدەتە هزرا رەخنەیی و لێهاتییا هەستی (زیرەکیا هەستی) ل نک زارۆکان.' },
      { speaker: 'Parent B', text: 'I agree. It provides a platform for self-expression that academic subjects might not.', translation: 'ئەز هەڤرایم. ئەو جهەکێ بۆ دیارکرنا خۆ (سێڵف-ئێکسپرێشن) دابین دکەت کو بابەتێن ئەکادیمی نەدەنێ.' },
      { speaker: 'Parent A', text: 'We should advocate for keeping art in the curriculum.', translation: 'پێتڤییە ئەم پشتەڤانیێ (داکۆکیێ) بکەین بۆ هێلانا هونەرێ د ناڤ مەنھەجێ (خواندنێ) دا.' }
    ],
    vocabulary: [
      { word: 'Luxury', translation: 'رەفاهییەت / تشتێ زێدە' },
      { word: 'Fosters', translation: 'گەشە پێ دان / پێ ئینان' },
      { word: 'Academic', translation: 'زانستی / ئەکادیمی' },
      { word: 'Curriculum', translation: 'مەنھەج / پڕۆگرامی خواندن' }
    ]
  },
  {
    id: 'b1-29',
    level: 'B1',
    title: 'Dealing with a Difficult Customer',
    titleKurdish: 'سەرەدەری دگەل مشتەرییەکێ (زەبونەکێ) بزەحمەت',
    dialogue: [
      { speaker: 'Employee', text: 'How do you handle customers who are angry or upset?', translation: 'تۆ چەوا سەرەدەریێ دکەی دگەل مشتەرییێن (زەبونێن) کو یێن عێجزن یان د دلگرانن؟' },
      { speaker: 'Supervisor', text: 'The first step is to stay calm and listen to their concerns without interrupting.', translation: 'گاڤا ئێکێ ئەوە تو یێ هێمن بمینی و گوهداریا نیگەرانیێن وان بکەی بێ کو باخێڤتنا وان ببڕی.' },
      { speaker: 'Employee', text: 'What if they are being unreasonable or shouting?', translation: 'پا ئەگەر ئەو یێن نە-بەرهەڤ بن بۆ گەهشتنێ یان ژی دهاوار کەن؟' },
      { speaker: 'Supervisor', text: 'Acknowledge their feelings and offer a sincere apology, even if the mistake wasn\'t yours.', translation: 'دانپێدانێ ب هەستێن وان بکە و لێبۆرینەکا ب دلسۆزی ژێ بخوازە، ئەگەر خەلەتی یا تە ژی نەبیت.' },
      { speaker: 'Employee', text: 'Then I should try to find a solution that satisfies them.', translation: 'پاشان پێتڤییە ئەز هەوڵ بدەم جارەسەرییەکێ ببێنم کو وان رازی بکەت.' }
    ],
    vocabulary: [
      { word: 'Interrupting', translation: 'بڕینا باخێڤتنێ' },
      { word: 'Unreasonable', translation: 'نە-ژیر / نە-مەعقوول' },
      { word: 'Sincere', translation: 'بە دلسۆزی / راستەقینە' },
      { word: 'Satisfies', translation: 'رازی کردن' }
    ]
  },
  {
    id: 'b1-30',
    level: 'B1',
    title: 'Exploring a Local Museum',
    titleKurdish: 'گەڕیان ل مۆزەخانەیەکا خۆجهی',
    dialogue: [
      { speaker: 'Tourist', text: 'Is this museum dedicated to ancient history or modern art?', translation: 'ئەرێ ئەڤ مۆزەخانەیە یا تایبەتە ب دیروکا کەڤن یان هونەرێ سەردەم؟' },
      { speaker: 'Guide', text: 'It covers the local history of our region from the Bronze Age.', translation: 'ئەو دیروکا خۆجهی یا دەڤەرا مە ژ چاخێ برۆنزی ڤە دگریت.' },
      { speaker: 'Tourist', text: 'Are there any guided tours available in English?', translation: 'ئەرێ چو گەشتێن ب رێبەر (گاید) ب زمانێ ئینگلیزی هەنە؟' },
      { speaker: 'Guide', text: 'Yes, we have an audio guide system you can use.', translation: 'بەلێ، سیستەمەکێ رێبەرا دەنگی مە هەیە تو دشێی بکاربینی.' },
      { speaker: 'Tourist', text: 'That is great. How much is the entrance fee?', translation: 'ئەڤە گەلەک باشە. بهایێ چوونەژوورێ چەندە؟' }
    ],
    vocabulary: [
      { word: 'Ancient', translation: 'کەڤنار / دێرین' },
      { word: 'Region', translation: 'دەڤەر / هەرێم' },
      { word: 'Available', translation: 'بەردەست / هەبووی' },
      { word: 'Entrance', translation: 'چوونەژوور / دەرگەهـ' }
    ]
  },
  {
    id: 'b1-31',
    level: 'B1',
    title: 'Social Media Trends',
    titleKurdish: 'ترێندێن (گۆڕانکاریێن) سۆشیال میدیایێ',
    dialogue: [
      { speaker: 'Sivan', text: 'Social media trends change so rapidly these days.', translation: 'ترێندێن سۆشیال میدیایێ ئەڤ رۆژە گەلەک ب زوویی دهێنە گوهۆڕین.' },
      { speaker: 'Rebin', text: 'True. One week it is a specific dance, and the next it is a new AI filter.', translation: 'راستە. حەفتیەکێ سەمایەکا تایبەتە، و حەفتیا دیتر فیلتەرەکێ نوو یێ ژیرییا دەستکردە.' },
      { speaker: 'Sivan', text: 'Do you think these trends have a lasting impact on culture?', translation: 'ئەرێ تۆ هزردکەی ئەڤ ترێندە کارتێکرنەکا بەردەوام ل سەر کەلتووری هەری؟' },
      { speaker: 'Rebin', text: 'Most of them are ephemeral, but they reflect the interests of the younger generation.', translation: 'پتریا وان کاتینە (زوو دچن)، لێ مەرەق و حەزێن نەوەیێن گەنج نیشان ددەن.' },
      { speaker: 'Sivan', text: 'I worry about the pressure to always stay "on trend".', translation: 'ئەز یێ نیگەرانم ژ وێ فشارا کو دبێژیت مرۆڤ هەر دەم پێتڤییە "ل سەر ترێندێ" بمینیت.' }
    ],
    vocabulary: [
      { word: 'Rapidly', translation: 'ب زوویی' },
      { word: 'Filter', translation: 'فیلتەر / پاقژکەر' },
      { word: 'Ephemeral', translation: 'کاتی / کورت-خایەن' },
      { word: 'Generation', translation: 'نەوە / بەرەباب' }
    ]
  },
  {
    id: 'b1-32',
    level: 'B1',
    title: 'Healthy Eating Habits',
    titleKurdish: 'نەریتێن خوارنا ساخلەم',
    dialogue: [
      { speaker: 'Nutritionist', text: 'Incorporating more whole grains and lean proteins is essential for your diet.', translation: 'زێدەکرنا دانەوێڵەێن گشتی و پرۆتینێن بێ-بەز گەلەک فەرە بۆ سیستەمێ خوارنا تە.' },
      { speaker: 'Patient', text: 'I find it difficult to avoid processed snacks during work hours.', translation: 'ئەز وێ ب زەحمەت دبینم کو دویر بکەڤم ژ سووکەخوارنێن دەستکرد د دەمژمێرێن کار دا.' },
      { speaker: 'Nutritionist', text: 'Try meal prepping your snacks on Sundays to avoid temptation.', translation: 'هەوڵ بدە سووکەخوارنێن خۆ رۆژێن یەکشەمبی ئامادە بکەی دا کو ژ وسوەسەیێ دویر بکەڤی.' },
      { speaker: 'Patient', text: 'That is a good strategy. I will also try to drink more water.', translation: 'ئەو ستراتیژییەتەکا باشە. ئەز دێ هەوڵ دەم ئاڤەکا پتر ژی ڤەخۆم.' },
      { speaker: 'Nutritionist', text: 'Hydration is key to maintaining high energy levels throughout the day.', translation: 'تێریدبوونا ب ئاڤێ کلیلە بۆ پاراستنا ئاستێن بلند یێن وزەی د درێژاهیا رۆژێ دا.' }
    ],
    vocabulary: [
      { word: 'Whole grains', translation: 'دانەوێڵەێن گشتی' },
      { word: 'Processed', translation: 'دەستکرد / پڕۆسێسکری' },
      { word: 'Temptation', translation: 'وسوەسە / لایەنێ راکێشەر' },
      { word: 'Hydration', translation: 'تێریدبوون ب ئاڤێ' }
    ]
  },
  {
    id: 'b1-33',
    level: 'B1',
    title: 'The Future of AI',
    titleKurdish: 'پاشەڕۆژا ژیرییا دەستکرد (AI)',
    dialogue: [
      { speaker: 'Lana', text: 'Generative AI is transforming how we create content.', translation: 'ژیرییا دەستکرد یا بەرهەمهێنەر شێوازێ چێکرنا ناوەڕۆکا مە دگوهۆڕیت.' },
      { speaker: 'Alan', text: 'It is amazing how it can write code or generate realistic images in seconds.', translation: 'یا سەیرە چەوا ئەو دشێت کۆدان بنڤیسیت یان وێنەیێن راستەقینە د جارەکێ دا چێکەت.' },
      { speaker: 'Lana', text: 'But it also raises concerns about job displacement and authenticity.', translation: 'لێ هەروەسا نیگەرانییان پەیدا دکەت ل سەر ژ دەستدانا کاران و راستەقینەبوونی.' },
      { speaker: 'Alan', text: 'I think we need to learn how to collaborate with AI rather than fear it.', translation: 'ئەز هزردکەم پێتڤییە ئەم فێر ببین چەوا هەماهنگیێ دگەل AI بکەین نەک لێ بترسین.' },
      { speaker: 'Lana', text: 'Regulations are necessary to ensure it is used ethically.', translation: 'یاساکان د پێتڤینە دا کو پشتراست بین ب شێوازەکێ رەوشتی (ئەخلاقی) دهێتە بکارئینان.' }
    ],
    vocabulary: [
      { word: 'Generative', translation: 'بەرهەمهێنەر' },
      { word: 'Displacement', translation: 'ل دەرخستن / گوهۆڕین' },
      { word: 'Authenticity', translation: 'راستەقینەبوون' },
      { word: 'Collaborate', translation: 'هەماهنگی / پێکڤە کارکرن' }
    ]
  },
  {
    id: 'b1-34',
    level: 'B1',
    title: 'Space Exploration',
    titleKurdish: 'ڤەکۆلین و گەڕان د گەردوونێ دا',
    dialogue: [
      { speaker: 'Sara', text: 'The recent images from the James Webb telescope are breathtaking.', translation: 'وێنەیێن دووماهییێ یێن تێلسکۆپا جەیمس وێب ب راستی مرۆڤی سەرسام دکەن.' },
      { speaker: 'Ali', text: 'They show galaxies that formed billions of years ago.', translation: 'ئەو گەلەستێرەیان نیشان ددەن کو ملیاران ساڵ بەری نوکە درۆست بووینە.' },
      { speaker: 'Sara', text: 'Do you think humans will colonize Mars in our lifetime?', translation: 'ئەرێ تو هزردکەی مرۆڤ د دەمێ ژیانا مە دا دێ ماریخی (مەریخی) ئاڤەدان کەن؟' },
      { speaker: 'Ali', text: 'It is a huge technical challenge, but companies like SpaceX are working on it.', translation: 'ئەو ئاستەنگەکا مەزنا تەکنیکی یە، لێ کۆمپانیێن مینا SpaceX کار ل سەر دکەن.' },
      { speaker: 'Sara', text: 'The possibility of finding life on other planets is so exciting.', translation: 'ئەگەرا دیتنا ژیانێ ل سەر هەسارەیێن دی زۆر یا مەرەق-بزوێنە.' }
    ],
    vocabulary: [
      { word: 'Telescope', translation: 'تێلسکۆپ / دویربین' },
      { word: 'Galaxies', translation: 'گەلەستێرەکان' },
      { word: 'Colonize', translation: 'ئاڤەدانکرن / نیشتەجێبوون' },
      { word: 'Possibility', translation: 'ئەگەر / شیان' }
    ]
  },
  {
    id: 'b1-35',
    level: 'B1',
    title: 'Learning a Musical Instrument',
    titleKurdish: 'فێربوونا ئامێرەکێ مۆزیکێ',
    dialogue: [
      { speaker: 'Student', text: 'I have been practicing the violin for six months now.', translation: 'ئەز شەش هەیڤە یێ مەشقا لێدانا کەمانچەیا (ڤایۆلینێ) دکەم.' },
      { speaker: 'Teacher', text: 'Your posture has improved significantly, but watch your intonation.', translation: 'رەفتارا تە یا دانا جەستەی گەلەک باشتر بوویە، لێ ئاگەهداری ئاواز و تۆنا خۆ ببە.' },
      { speaker: 'Student', text: 'The higher notes are still very difficult to hit accurately.', translation: 'نۆتێن بلند هێشتا ب زەحمەتن کو ب درۆستی لێ بدەم.' },
      { speaker: 'Teacher', text: 'Daily scales and slow practice will help you build muscle memory.', translation: 'پلەیێن مۆزیکی یێن رۆژانە و مەشقا هێدی دێ هاریکاریا تە کەن بۆ ئاڤاکرنا میمۆرییا ماسولکەیان.' },
      { speaker: 'Student', text: 'I hope to perform a simple piece for my family soon.', translation: 'ئەز هیڤیدارم نێزیک پارچە مۆزیکەکا سادە بۆ خێزانا خۆ پێشکێش بکەم.' }
    ],
    vocabulary: [
      { word: 'Posture', translation: 'شێوازێ جەستە / وەستان' },
      { word: 'Intonation', translation: 'تۆن / ئاواز' },
      { word: 'Accurately', translation: 'ب درۆستی' },
      { word: 'Muscle memory', translation: 'میمۆرییا ماسولکەیان' }
    ]
  },
  {
    id: 'b1-36',
    level: 'B1',
    title: 'Mental Health Awareness',
    titleKurdish: 'هۆشیاریا ساخلەمیا دەروونی',
    dialogue: [
      { speaker: 'Counselor', text: 'It is important to break the stigma around seeking help for mental health.', translation: 'یا گرنگە ئەم وێ عەیبەیێ (ستیگمایێ) بشکێنین یا ل سەر داخوازکرنا هاریکاریێ بۆ ساخلەمیا دەروونی هەی.' },
      { speaker: 'Guest', text: 'Many people still feel ashamed to admit they are struggling.', translation: 'گەلەک کەس هێشتا شەرم دکەن دانپێدانێ بکەن کو ئەو ل بن فشارێ دانە.' },
      { speaker: 'Counselor', text: 'Anxiety and depression are as real as physical illnesses.', translation: 'دوو-دلی و دڵتەنگی (خەمۆکی) هندى نەخۆشیێن جەستەیی راستەقینەن.' },
      { speaker: 'Guest', text: 'What are some simple ways to improve our mental well-being?', translation: 'هندەک رێکارێن سادە چن بۆ باشترکرنا بژێویا مە یا دەروونی؟' },
      { speaker: 'Counselor', text: 'Mindfulness, regular exercise, and talking to someone you trust can make a big difference.', translation: 'هزرکرنا کورت، وەرزشا بەردەوام، و ئاخفتن دگەل کەسەکی کو تە باوەری پێ هەیە دشێن گوهۆڕینەکا مەزن چێکەن.' }
    ],
    vocabulary: [
      { word: 'Stigma', translation: 'لکە / عەیبە' },
      { word: 'Anxiety', translation: 'دوو-دلی / دڵەراوکێ' },
      { word: 'Depression', translation: 'خەمۆکی / دڵتەنگی' },
      { word: 'Mindfulness', translation: 'هزرکرنا کورت / هۆشیاری' }
    ]
  },
  {
    id: 'b1-37',
    level: 'B1',
    title: 'Plastic Pollution',
    titleKurdish: 'پیسبوونا پلاستیکی',
    dialogue: [
      { speaker: 'Environmentalist', text: 'Millions of tons of plastic end up in our oceans every year.', translation: 'ملیۆنان تەنێن پلاستیکی هەر ساڵ دکەڤنە ناڤ زەریایێن مە دا.' },
      { speaker: 'Student', text: 'I saw a documentary showing how it affects marine life.', translation: 'من دۆکیۆمێنتەرییەک دیت نیشان ددا کا چەوا کارتێکرنێ ل سەر ژیانا دەریایی دکەت.' },
      { speaker: 'Environmentalist', text: 'Microplastics are now entering the food chain, which is very dangerous.', translation: 'مایکرۆپلاستیک نوکە دکەڤنە ناڤ زنجیرا خوارنێ دا، کو ئەڤە زۆر یا مەترسیدارە.' },
      { speaker: 'Student', text: 'We should ban single-use plastics globally.', translation: 'پێتڤییە ئەم بکارئینانا پلاستیکێن ئێک-جارە ل سەر ئاستێ جیهانێ قەدەغە بکەین.' },
      { speaker: 'Environmentalist', text: 'Reducing consumption and improving recycling systems are the first steps.', translation: 'کێمکرنا مەزاختنێ و باشترکردنا سیستەمێن دووبارە-بکارئینانێ (ریساکلینێ) پێنگاڤێن ئێکێ نە.' }
    ],
    vocabulary: [
      { word: 'Pollution', translation: 'پیسبوون / ئاڵۆدەبوون' },
      { word: 'Marine life', translation: 'ژیانا دەریایی' },
      { word: 'Food chain', translation: 'زنجیرا خوارنێ' },
      { word: 'Consumption', translation: 'مەزاختن / بەکاربردن' }
    ]
  },
  {
    id: 'b1-38',
    level: 'B1',
    title: 'Sustainable Fashion',
    titleKurdish: 'مۆدەیا بەردەوام (ژینگەیی)',
    dialogue: [
      { speaker: 'Shopper', text: 'I am trying to move away from "fast fashion" and buy more sustainable clothes.', translation: 'ئەز هەوڵ ددەم ژ "مۆدەیا زوو" دویر بکەڤم و جلیێن بەردەوامتر بکڕم.' },
      { speaker: 'Designer', text: 'That is great. Sustainable fashion uses organic materials and fair labor practices.', translation: 'ئەو زۆر باشە. مۆدەیا بەردەوام کەرەستێن ئۆرگانیک و رێکارێن دادپەروەر یێن کاری بکار دئینیت.' },
      { speaker: 'Shopper', text: 'It is more expensive, but the quality is usually much better.', translation: 'ئەو گرانترە، لێ کوالیتییا وێ ب گشتی گەلەک باشترە.' },
      { speaker: 'Designer', text: 'Exactly. It is better to have a few high-quality items than a closet full of cheap clothes.', translation: 'درۆستە. چێترە مرۆڤ هندەک تشتێن کوالیتی بلند هەبن نەک کانتۆرەکا تژی ژ جلیێن ئەرزان.' },
      { speaker: 'Shopper', text: 'I also enjoy thrift shopping to give second-hand clothes a new life.', translation: 'هەروەسا ئەز کەیفێ ژ کڕینا جلیێن بەکارئینای وەردگرم دا کو ژیانەکا نوو بدەمە وان.' }
    ],
    vocabulary: [
      { word: 'Sustainable', translation: 'بەردەوام / ژینگەیی' },
      { word: 'Organic', translation: 'سرۆشتی / ئۆرگانیک' },
      { word: 'Labor', translation: 'کار / رەنج' },
      { word: 'Thrift shopping', translation: 'کڕینا کەلوپەلێن بەکارئینای' }
    ]
  },
  {
    id: 'b1-39',
    level: 'B1',
    title: 'Cybersecurity Risks',
    titleKurdish: 'مەترسییێن ئاسایشا ئەلیکترۆنی',
    dialogue: [
      { speaker: 'IT Specialist', text: 'Phishing attacks are becoming increasingly sophisticated.', translation: 'هێرشێن ماسیگرتنێ (فیشینگ) ل سەر ئەلیکترۆنی پتر و پتر یێن ئاڵۆز دبن.' },
      { speaker: 'User', text: 'I received an email recently asking me to reset my password on an official-looking site.', translation: 'ڤێ دووماهییە ئیمەیلەک بۆ من هات خوەست کو پاسووردێ خۆ نوو کەمەڤە ل سەر سایتەکێ کو وەکی یێ فەرمی دیار دکر.' },
      { speaker: 'IT Specialist', text: 'That is a classic phishing attempt. Never click on suspicious links.', translation: 'ئەو هەوڵەکا کلاسیکە یا فیشینگێ. چو جاران کلیك ل سەر لینکێن گۆماناوی نەکە.' },
      { speaker: 'User', text: 'Should I use a password manager to stay safe?', translation: 'ئەرێ پێتڤییە ئەز "پاسوورد مانەجەرەکێ" بکاربینم دا کو یێ پارێزراو بم؟' },
      { speaker: 'IT Specialist', text: 'Yes, and always enable two-factor authentication for extra security.', translation: 'بەلێ، و هەر دەم تاقییکرنا دوو-قۆناغی (دوو-فاکتەر) کارا بکە بۆ ئاسایشەکا پتر.' }
    ],
    vocabulary: [
      { word: 'Phishing', translation: 'فیشینگ / خاپاندنا ئەلیکترۆنی' },
      { word: 'Sophisticated', translation: 'ئاڵۆز / پێشکەفتی' },
      { word: 'Suspicious', translation: 'گۆماناوی' },
      { word: 'Authentication', translation: 'پشتراستکردنەوە / ناسین' }
    ]
  },
  {
    id: 'b1-40',
    level: 'B1',
    title: 'Cultural Heritage Preservation',
    titleKurdish: 'پاراستنا میراتێ کەلتووری',
    dialogue: [
      { speaker: 'Historian', text: 'Preserving historical sites is vital for understanding our identity.', translation: 'پاراستنا جهێن دیرۆکی گەلەک فەرە بۆ تێگەهشتنا ناسنامەیا مە.' },
      { speaker: 'Curator', text: 'We are using 3D scanning technology to digitize ancient artifacts.', translation: 'ئەم تەکنەلۆژییا سکانکرنا سێ-رەهەندی بکار دئینین دا کو کەلوپەلێن کەڤن بکەینە دیجیتال.' },
      { speaker: 'Historian', text: 'That is a great way to protect them from physical decay or destruction.', translation: 'ئەو رێکارەکا باشە دا کو وان ژ مرینێ (تێچوونا جەستەیی) یان وێرانبوونێ بپارێزیت.' },
      { speaker: 'Curator', text: 'It also makes the history accessible to people all around the world.', translation: 'هەروەسا دیرۆکێ دابین دکەتە خەڵکێ هەمی جیهانێ.' },
      { speaker: 'Historian', text: 'We must involve local communities in these preservation efforts.', translation: 'پێتڤییە ئەم جڤاکێن ناوچەی د ناڤ ڤان هەوڵێن پاراستنێ دا پشکدار بکەین.' }
    ],
    vocabulary: [
      { word: 'Preservation', translation: 'پاراستن' },
      { word: 'Identity', translation: 'ناسنامە / شۆناس' },
      { word: 'Digitize', translation: 'دیجیتال کردن' },
      { word: 'Artifacts', translation: 'کەلوپەلێن کەڤن / شوێنەوار' }
    ]
  },
  {
    id: 'b1-41',
    level: 'B1',
    title: 'Impact of Tourism',
    titleKurdish: 'کارتێکرنا گەشتیاریێ',
    dialogue: [
      { speaker: 'Guide', text: 'Tourism brings economic growth, but it can also cause overcrowding.', translation: 'گەشتیاری گەشەکرنا ئابووری دئینیت، لێ دشێت ببیتە ئەگەرێ قەرەبالغەکا زێدە ژی.' },
      { speaker: 'Local', text: 'The prices of houses in our village have increased significantly because of tourism.', translation: 'نرخێن خانییان ل گوندێ مە گەلەک بلند بووینە ژ بەر گەشتیاریێ.' },
      { speaker: 'Guide', text: 'We are promoting "eco-tourism" to minimize the environmental impact.', translation: 'ئەم هاندانا "گەشتیارییا ژینگەیی" دکەین دا کو کارتێکرنا ل سەر ژینگەی کێم بکەین.' },
      { speaker: 'Local', text: 'It is important to respect local traditions when traveling.', translation: 'یا گرنگە مرۆڤ رێزێ ل داب و نەریتێن ناوچەی بگریت دەمێ گەشتێ دکەت.' },
      { speaker: 'Guide', text: 'Educating tourists about the local culture is part of our mission.', translation: 'هۆشیارکرنا گەشتیاران ل سەر کەلتوورێ ناوچەی پشکەکە ژ ئەرکێ مە.' }
    ],
    vocabulary: [
      { word: 'Economic growth', translation: 'گەشەکرنا ئابووری' },
      { word: 'Overcrowding', translation: 'قەرەبالغا زێدە' },
      { word: 'Eco-tourism', translation: 'گەشتیارییا ژینگەیی' },
      { word: 'Mission', translation: 'ئەرک / مەکۆ' }
    ]
  },
  {
    id: 'b1-42',
    level: 'B1',
    title: 'Remote vs. Traditional Learning',
    titleKurdish: 'فێربوونا دویرەونی بەرامبەر کلاسیک (قوتابخانە)',
    dialogue: [
      { speaker: 'Parent', text: 'Do you think online classes are as effective as being in a classroom?', translation: 'ئەرێ تۆ هزردکەی وانەیێن ئۆنلاین هندى وانەیێن ناڤ پۆلێ ب مفا بن؟' },
      { speaker: 'Student', text: 'I like the flexibility, but I miss the direct interaction with my teachers.', translation: 'ئەز حەز ژ نەرماتییا (فلێکسیبیلیتییا) وێ دکەم، لێ تێبیمینی ئەز بیرا کارلێکرنا راستەوخۆ دگەل مامۆستایێن خۆ دکەم.' },
      { speaker: 'Parent', text: 'Social isolation is a major concern with remote learning.', translation: 'جودابوونا جڤاکی نیگەرانییەکا مەزنە دگەل فێربوونا دویرەونی.' },
      { speaker: 'Student', text: 'Technological issues can also disrupt the lessons sometimes.', translation: 'ئاریشەیێن تەکنیکی ژی دشێن جاران وانەیان پەک بخەن.' },
      { speaker: 'Parent', text: 'Maybe a hybrid model is the best solution for the future.', translation: 'رەنگە مۆدێلەکێ تێکەڵ (هایبرید) باشترین چارەسەری بیت بۆ پاشەڕۆژێ.' }
    ],
    vocabulary: [
      { word: 'Flexibility', translation: 'نەرماتی / فلێکسیبیلیتی' },
      { word: 'Isolation', translation: 'جودابوون / تەنهایی' },
      { word: 'Disrupt', translation: 'پەک خستن / تێکدان' },
      { word: 'Hybrid', translation: 'تێکەڵ' }
    ]
  },
  {
    id: 'b1-43',
    level: 'B1',
    title: 'Renewable Energy Sources',
    titleKurdish: 'ژێدەرێن وزەیا نوو-ببیتەڤە',
    dialogue: [
      { speaker: 'Engineer', text: 'Solar panels are becoming more efficient and affordable every year.', translation: 'پەنەلێن رۆژێ هەر ساڵ کارامەتر و ئەرزانتەر دبن.' },
      { speaker: 'Politician', text: 'We are investing in offshore wind farms to meet our carbon targets.', translation: 'ئەم وەبەرهێنانێ د کێڵگەیێن بای یێن ناو بەحرێ دا دکەین دا کو بگەهینە ئارمانجێن خۆ یێن کاربۆنی.' },
      { speaker: 'Engineer', text: 'Storage is still a challenge when the sun doesn\'t shine or the wind doesn\'t blow.', translation: 'پاشەکەفتکرن (ستۆرێج) هێشتا ئاستەنگە دەمێ رۆژ نەڵێڤیت یان با نەهێت.' },
      { speaker: 'Politician', text: 'Large-scale battery technology is improving rapidly to solve this.', translation: 'تەکنەلۆژییا پاترییان یا قەبارە-مەزن ب زوویی یا گەشە دکەت بۆ چارەسەرکرنا ڤێ ئاریشێ.' },
      { speaker: 'Engineer', text: 'Transitioning to 100% renewable energy is possible with political will.', translation: 'گوهۆڕین بەرەڤ ١٠٠٪ وزەیا نوو-ببیتەڤە ب ئیرادا سیاسی یا گونجایە.' }
    ],
    vocabulary: [
      { word: 'Efficient', translation: 'کارامە / ب مفا' },
      { word: 'Affordable', translation: 'ئەرزان / هەژی' },
      { word: 'Offshore', translation: 'دەرڤەی ساحیلی / ناو بەحرێ' },
      { word: 'Transitioning', translation: 'گوهۆڕین / دەربازبوون' }
    ]
  },
  {
    id: 'b1-44',
    level: 'B1',
    title: 'Importance of Sleep',
    titleKurdish: 'گرنگییا خەوێ',
    dialogue: [
      { speaker: 'Doctor', text: 'Most adults require 7 to 9 hours of quality sleep every night.', translation: 'پتریا کەسێن پێگەهەشتی پێتڤی ب ٧ بۆ ٩ دەمژمێرێن خەوا ب کوالیتی هەین هەر شەڤ.' },
      { speaker: 'Patient', text: 'I usually only get about 5 hours because of my busy schedule.', translation: 'ئەز زۆر جاران تنێ نێزیکی ٥ دەمژمێران د نڤییم ژ بەر خشتەیێ من یێ ب ئیش.' },
      { speaker: 'Doctor', text: 'Chronic sleep deprivation can lead to serious health issues like heart disease.', translation: 'کێم-خەوییا ورا (بەردەوام) دشێت ببیتە ئەگەرێ ئاریشەیێن ساخلەمی یێن گران مینا نەخۆشییا دڵی.' },
      { speaker: 'Patient', text: 'I also find it hard to concentrate during the day.', translation: 'هەروەسا ئەز وێ ب بزەحمەت دبینم کو د درێژاهیا رۆژێ دا گرنگیێ بدەمە تشتان.' },
      { speaker: 'Doctor', text: 'Try to establish a consistent bedtime routine and avoid screens before bed.', translation: 'هەوڵ بدە خشتەیەکێ جێگیر یێ نڤستنێ دابنێی و دویر بکەڤی ژ شاشەیان بەری نڤستنێ.' }
    ],
    vocabulary: [
      { word: 'Deprivation', translation: 'کێمی / محرومیەت' },
      { word: 'Chronic', translation: 'بەردەوام / درێژ-خایەن' },
      { word: 'Concentrate', translation: 'گرنگیپێدان / فۆکۆس' },
      { word: 'Consistent', translation: 'جێگیر' }
    ]
  },
  {
    id: 'b1-45',
    level: 'B1',
    title: 'Gender Equality',
    titleKurdish: 'وەکهەڤیا رەگەزی',
    dialogue: [
      { speaker: 'Activist', text: 'We still have a significant gender pay gap in many industries.', translation: 'ئەم هێشتا جوداهییەکا بەرچاو یا مووچەی مە د ناڤبەرا رەگەزان دا هەی ل زۆر پیشەیان.' },
      { speaker: 'Manager', text: 'Our company has implemented policies to ensure equal opportunities for everyone.', translation: 'کۆمپانیا مە یاساکان جێبەجێ کرینە دا کو پشتراست بین ب دەلیڤەیێن وەکهەڤ بۆ هەموو کەسان.' },
      { speaker: 'Activist', text: 'Representation in leadership roles is also a crucial factor.', translation: 'هەبوونا ژنان د پلەیێن سەرکردایەتیێ دا ژی فاکتەرەکێ زۆر فەرە.' },
      { speaker: 'Manager', text: 'We are mentorship programs to support women in their career growth.', translation: 'مە پڕۆگرامێن راهێنانی هەین بۆ پشتەڤانییا ژنان د گەشەکرنا کارێ وان دا.' },
      { speaker: 'Activist', text: 'True equality requires a change in societal attitudes as well.', translation: 'وەکهەڤیا راستەقینە پێتڤی ب گوهۆڕینا رەفتارێن جڤاکی ژی هەیە.' }
    ],
    vocabulary: [
      { word: 'Gap', translation: 'کەلەک / جوداهی' },
      { word: 'Representation', translation: 'نوینەرایەتی' },
      { word: 'Factor', translation: 'فاکتەر / ئەگەر' },
      { word: 'Societal', translation: 'جڤاکی' }
    ]
  },
  {
    id: 'b1-46',
    level: 'B1',
    title: 'Wildlife Conservation',
    titleKurdish: 'پاراستنا ژیانا کێوی',
    dialogue: [
      { speaker: 'Ranger', text: 'Poaching remains a major threat to many endangered species.', translation: 'نێچیرڤانییا نه‌یاسایی هێشتا مەترسییەکا مەزنە ل سەر جۆرێن گیانەوەرێن د بەرهەڤن بۆ ژناڤچوونێ.' },
      { speaker: 'Tourist', text: 'What can we do to help protect the local wildlife?', translation: 'ئەم چ دکارین بکەین دا کو هاریکار بن د پاراستنا ژیانا کێوی یا ناوچەی دا؟' },
      { speaker: 'Ranger', text: 'Supporting local reserves and avoiding products made from animals helps a lot.', translation: 'پشتەڤانیکردنا پارێزگەهێن ناوچەی و دویرکەفتن ژ بەرهەمێن ژ گیانەوەران چێکری گەلەک هاریکارە.' },
      { speaker: 'Tourist', text: 'Climate change must be affecting their habitats as well.', translation: 'گوهۆڕینا سەقای ژی هەر بێگۆمان کارتێکرنێ ل سەر جهێن ژیانا وان دکەت.' },
      { speaker: 'Ranger', text: 'Yes, habitat loss is actually leading to more human-wildlife conflict.', translation: 'بەلێ، ژدەستدانا جهێن ژیانێ د بیبتە ئەگەرێ پەیدابوونا پتر هەڤرکییان د ناڤبەرا مرۆڤ و گیانەوەران دا.' }
    ],
    vocabulary: [
      { word: 'Poaching', translation: 'نێچیرڤانییا نه‌یاسایی' },
      { word: 'Endangered', translation: 'مەترسییا ژناڤچوونێ' },
      { word: 'Reserves', translation: 'پارێزگەهـ / جهێن پاراستی' },
      { word: 'Habitats', translation: 'جهێن ژیانێ' }
    ]
  },
  {
    id: 'b1-47',
    level: 'B1',
    title: 'Globalization',
    titleKurdish: 'جهانگیری (گلۆبالیزەیشن)',
    dialogue: [
      { speaker: 'Economist', text: 'Globalization has lifted billions out of poverty through trade.', translation: 'جهانگیریێ ملیاران کەس ژ هەژاریێ رزگار کرینە ب رێکا بازرگانیێ.' },
      { speaker: 'Sociologist', text: 'But it has also led to the erosion of local cultures and traditions.', translation: 'لێ هەروەسا بوویە ئەگەرێ ژناڤچوونا کەلتوور و داب و نەریتێن ناوچەی.' },
      { speaker: 'Economist', text: 'It allows for the rapid spread of technology and knowledge.', translation: 'ئەو رێ خۆش دکەت بۆ بەلاڤبوونا ب زوویا تەکنەلۆژیا و زانیارییان.' },
      { speaker: 'Sociologist', text: 'However, large corporations often benefit more than small local businesses.', translation: 'لێ زۆر جاران کۆمپانیێن مەزن پتر مفای وەردگرن ژ کارێن بچووک یێن ناوچەی.' },
      { speaker: 'Economist', text: 'We need global cooperation to address issues like tax havens.', translation: 'مە پێتڤی ب هەماهنگییا جیهانی هەیە بۆ چارەسەرکرنا ئاریشەیێن مینا جێن پاراستنا باجێ.' }
    ],
    vocabulary: [
      { word: 'Poverty', translation: 'هەژاری' },
      { word: 'Erosion', translation: 'داخوران / ژناڤچوون' },
      { word: 'Cooperation', translation: 'هەماهنگی / هاریکاری' },
      { word: 'Tax havens', translation: 'جێن پاراستنا باجێ (پەناگەهێن باجێ)' }
    ]
  },
  {
    id: 'b1-48',
    level: 'B1',
    title: 'Public Transportation',
    titleKurdish: 'هاتنوچوونا گشتی',
    dialogue: [
      { speaker: 'Commuter', text: 'The bus was twenty minutes late again this morning.', translation: 'پاس بیست خۆلەکان گیرۆ بوو ئەڤرۆ سپێدێ ژی.' },
      { speaker: 'Official', text: 'We are expanding the subway system to reduce the reliance on buses.', translation: 'ئەم سیستەمێ میترۆیێ (سەبوەی) مەزن دکەین دا کو پشتبەستنا ل سەر پاسان کێم بکەین.' },
      { speaker: 'Commuter', text: 'I hope the new lines reach the suburbs where I live.', translation: 'ئەز هیڤیدارم هێڵێن نوو بگەهنە دەوروبەرێن باژێڕی ئەو جهێ ئەز لێ دژیم.' },
      { speaker: 'Official', text: 'The expansion plan includes several new stations in the outer districts.', translation: 'پلانا مەزنکردنێ چەندین وێستگەهێن نوو ل ناوچەیێن دەرڤە دابین دکەت.' },
      { speaker: 'Commuter', text: 'Efficient public transit is essential for a sustainable city.', translation: 'هاتنوچوونا گشتی یا ب مفا گەلەک فەرە بۆ باژێڕەکێ بەردەوام.' }
    ],
    vocabulary: [
      { word: 'Subway', translation: 'میترۆ / شەمەندەفەرا بن عەرد' },
      { word: 'Suburbs', translation: 'دەوروبەرێن باژێڕ' },
      { word: 'Expansion', translation: 'مەزنکردن / بەرهەواکردن' },
      { word: 'Transit', translation: 'هاتنوچوون / ڤەگۆهاستن' }
    ]
  },
  {
    id: 'b1-49',
    level: 'B1',
    title: 'Financial Literacy',
    titleKurdish: 'هۆشیاریا دارایی (فێربوونا سەرەدەریێ دگەل پارەی)',
    dialogue: [
      { speaker: 'Mentor', text: 'Learning how to budget and save is crucial for financial independence.', translation: 'فێربوونا دانانا بوجدەیێ و پاشەکەفتکرنێ گەلەک فەرە بۆ سەربەخۆیا دارایی.' },
      { speaker: 'Teen', text: 'I don\'t know where my money goes; it seems to disappear quickly.', translation: 'ئەز نزانم پارەیێ من کیڤە دچیت؛ وەسا دیارە ب زوویی بەرزە دبیت.' },
      { speaker: 'Mentor', text: 'Try tracking your expenses for a month to see your spending patterns.', translation: 'هەوڵ بدە خەرجیێن خۆ بۆ مەهەکێ تۆمار بکەی دا کو شێوازێ مەزاختنا خۆ ببینی.' },
      { speaker: 'Teen', text: 'What about investing? Is it too early for me?', translation: 'پا دەربارەی وەبەرهێنانێ؟ ئەرێ بۆ من هێشتا زوویە؟' },
      { speaker: 'Mentor', text: 'It is never too early to learn about compound interest and diversification.', translation: 'چو جاران زوو نینە بۆ فێربوونا ل سەر "سوودا کۆمکری" و جۆراوجۆرکرنا وەبەرهێنانێ.' }
    ],
    vocabulary: [
      { word: 'Budget', translation: 'بوجدە / پلانا دارایی' },
      { word: 'Independence', translation: 'سەربەخۆیی' },
      { word: 'Expenses', translation: 'خەرجییەکان' },
      { word: 'Diversification', translation: 'جۆراوجۆرکرن' }
    ]
  },
  {
    id: 'b1-50',
    level: 'B1',
    title: 'Urban Gardening',
    titleKurdish: 'باخچەڤانییا ناڤ باژێڕی',
    dialogue: [
      { speaker: 'Resident', text: 'I started growing tomatoes on my balcony to have fresh food.', translation: 'من دەست ب چاندنا تەماتەیان ل سەر بالکۆنا خۆ کریە دا کو خوارنا تازی (فرێش) هەبیت.' },
      { speaker: 'Neighbor', text: 'The community garden downstairs is also a great place to grow herbs.', translation: 'باخچەیێ جڤاکی یێ ل بن ئاڤاهی ژی جهەکێ باشە بۆ چاندنا رووەکێن بێهنخۆش (گیایێن خوارنێ).' },
      { speaker: 'Resident', text: 'It is so satisfying to eat something you have grown yourself.', translation: 'گەلەک خۆشە مرۆڤ تشتەکی بخۆت کو ب دەستێ خۆ چاندبیت.' },
      { speaker: 'Neighbor', text: 'It also helps reduce the "urban heat island" effect in cities.', translation: 'هەروەسا هاریکارە بۆ کێمکرنا کارتێکرنا "گزیرتا گەرمییا باژێڕی" ل باژێڕان.' },
      { speaker: 'Resident', text: 'And it creates a nice green space for neighbors to meet.', translation: 'و جهەکێ کەسک یێ جوان پەیدا دکەت بۆ هەڤدیتنا هەڤسۆیان.' }
    ],
    vocabulary: [
      { word: 'Balcony', translation: 'بالکۆن / نیشتەگەهـ' },
      { word: 'Herbs', translation: 'گیایێن خوارنێ / رووەکێن بێهنخۆش' },
      { word: 'Satisfying', translation: 'خۆش / تێرکەر' },
      { word: 'Resident', translation: 'ئاکنجی / نیشتەجێ' }
    ]
  },
  {
    id: 'b1-51',
    level: 'B1',
    title: 'Fast vs. Slow Fashion',
    titleKurdish: 'مۆدەیا زوو بەرامبەر مۆدەیا هێدی',
    dialogue: [
      { speaker: 'Aveen', text: 'I am trying to avoid buying from fast fashion retailers.', translation: 'ئەز هەوڵ ددەم کڕینێ ژ فرۆشیارێن مۆدەیا زوو نەکەم.' },
      { speaker: 'Lana', text: 'Why? They are so cheap and have all the latest styles.', translation: 'بۆچی؟ ئەو زۆر ئەرزانن و هەمی مۆدێلێن نوو یێن ل دەف وان.' },
      { speaker: 'Aveen', text: 'Slow fashion focuses on quality, durability, and ethical production.', translation: 'مۆدەیا هێدی گرنگیێ ددەتە کوالیتی، مانەوە، و بەرهەمهێنانا ب دادپەروەری.' },
      { speaker: 'Lana', text: 'I guess that means the clothes last longer and don\'t end up in a landfill quickly.', translation: 'ئز هزر دکەم ئەو رامانا وێ ئەوە جلی پتر دمینن و ب زوویی ناچنە ناڤ زبلدانێ.' },
      { speaker: 'Aveen', text: 'Exactly. It is a more conscious way of consuming clothing.', translation: 'درۆستە. ئەو رێکارەکا هۆشیارانەترە بۆ بکارئینانا جلییان.' }
    ],
    vocabulary: [
      { word: 'Retailers', translation: 'فرۆشیارێن وردە' },
      { word: 'Durability', translation: 'مانەوە / ب هێزی' },
      { word: 'Landfill', translation: 'جهێ هاڤێتنا زبڵ' },
      { word: 'Conscious', translation: 'هۆشیار / ب هوش' }
    ]
  },
  {
    id: 'b1-52',
    level: 'B1',
    title: 'Rise of E-commerce',
    titleKurdish: 'گەشەکرنا بازرگانییا ئەلیکترۆنی',
    dialogue: [
      { speaker: 'Buyer', text: 'I do most of my shopping online now because it is so convenient.', translation: 'ئەز نوکە پتریا کڕینێن خۆ ب شێوازێ ئۆنلاین دکەم ژ بەر کو گەلەک یا ب سانەهی یە.' },
      { speaker: 'Merchant', text: 'E-commerce allows us to reach customers globally, not just locally.', translation: 'بازرگانییا ئەلیکترۆنی رێ ددەتە مە ئەم بگەهینە مشتەرییان ل هەمی جیهانێ، نەک تنێ ل ناوچەیێ.' },
      { speaker: 'Buyer', text: 'But I worry about the closing of traditional high-street shops.', translation: 'لێ ئەز نیگەرانم ژ گرتنا دۆکانێن کلاسیک یێن ناڤ باژێڕی.' },
      { speaker: 'Merchant', text: 'We have to adapt by offering unique in-store experiences.', translation: 'پێتڤییە ئەم ژی خۆ گونجینین ب دابینکرنا ئەزموونێن ناوازە ل ناڤ دۆکاناندا.' },
      { speaker: 'Buyer', text: 'Fast delivery and easy returns are also very important factors.', translation: 'گەهاندنا زوو و ڤەگێڕانا ب سانەهی ژی فاکتەرێن زۆر گرنگن.' }
    ],
    vocabulary: [
      { word: 'E-commerce', translation: 'بازرگانییا ئەلیکترۆنی' },
      { word: 'Merchant', translation: 'بازرگان / فرۆشیار' },
      { word: 'Adapt', translation: 'خۆ گونجاندن' },
      { word: 'Delivery', translation: 'گەهاندن' }
    ]
  },
  {
    id: 'b1-53',
    level: 'B1',
    title: 'Ethics of Genetic Engineering',
    titleKurdish: 'رەوشت (ئەخلاق) د ئەندازیارییا بۆماوەیی دا',
    dialogue: [
      { speaker: 'Ethicist', text: 'Modifying human embryos raises complex moral questions.', translation: 'گوهۆڕینا "کۆرپەلەیێن" مرۆڤی پرسیارێن رەوشتی یێن ئاڵۆز پەیدا دکەت.' },
      { speaker: 'Genetist', text: 'But it could eliminate hereditary diseases and save countless lives.', translation: 'لێ ئەو دشێت نەخۆشیێن بۆماوەیی ژناڤ ببەت و ژیانا ب هزاران کەسان رزگار بکەت.' },
      { speaker: 'Ethicist', text: 'Where do we draw the line between therapy and enhancement?', translation: 'ئەم دێ کیڤە سنووری دانیین د ناڤبەرا چارەسەریێ و "باشترکردنێ" دا؟' },
      { speaker: 'Genetist', text: 'International consensus is needed to regulate these technologies.', translation: 'پێتڤی ب هەڤراییا نێڤدەوڵەتی هەیە بۆ رێکخستنا ڤان تەکنەلۆژیایان.' },
      { speaker: 'Ethicist', text: 'We must avoid creating a society divided by genetic status.', translation: 'پێتڤییە ئەم دویر بکەڤن ژ درۆستکرنا جڤاکەکی کو ب ئاستێ جینێتیکی هاتبیتە جوداکرن.' }
    ],
    vocabulary: [
      { word: 'Embryos', translation: 'کۆرپەلە' },
      { word: 'Therapy', translation: 'چارەسەری' },
      { word: 'Enhancement', translation: 'باشترکردن / پێشڤەبردن' },
      { word: 'Consensus', translation: 'کۆدەنگی / هەڤرایی' }
    ]
  },
  {
    id: 'b1-54',
    level: 'B1',
    title: 'Biodiversity Loss',
    titleKurdish: 'ژناڤچوونا جۆراوجۆرییا بایۆلۆژی',
    dialogue: [
      { speaker: 'Biologist', text: 'The current rate of extinction is much higher than the natural background rate.', translation: 'ئاستێ نوکە یێ ژناڤچوونا گیانەوەران گەلەک بلندترە ژ ئاستێ سرۆشتی یێ جیهانێ.' },
      { speaker: 'Volunteer', text: 'What are the main causes of this rapid decline?', translation: 'ئەگەرێن سەرەکی یێن ڤێ کێمبوونا ب زوویی چن؟' },
      { speaker: 'Biologist', text: 'Habitat destruction, pollution, and climate change are the primary drivers.', translation: 'وێرانبوونا جهێن ژیانێ، پیسبوون، و گوهۆڕینا سەقای ئەگەرێن سەرەکی نە.' },
      { speaker: 'Volunteer', text: 'How does biodiversity loss affect human life?', translation: 'چەوا ژناڤچوونا جۆراوجۆرییا بایۆلۆژی کارتێکرنێ ل سەر ژیانا مرۆڤی دکەت؟' },
      { speaker: 'Biologist', text: 'It disrupts ecosystems that provide us with food, clean water, and medicine.', translation: 'ئەو سیستەمێن ژینگەیی تێک ددەت یێن کو خوارن، ئاڤا پاقژ، و دەرمانان بۆ مە دابین دکەن.' }
    ],
    vocabulary: [
      { word: 'Extinction', translation: 'ژناڤچوون / قڕان' },
      { word: 'Decline', translation: 'کێمبوون / دابەزین' },
      { word: 'Primary', translation: 'سەرەکی' },
      { word: 'Ecosystems', translation: 'سیستەمێن ژینگەیی' }
    ]
  },
  {
    id: 'b1-55',
    level: 'B1',
    title: 'Smart Cities',
    titleKurdish: 'باژێڕێن زیرەک',
    dialogue: [
      { speaker: 'Urban Planner', text: 'Smart cities use data and technology to improve urban services.', translation: 'باژێڕێن زیرەک داتایان و تەکنەلۆژیایێ بکار دئینن دا کو خزمەتگوزاریێن باژێڕی باشتر بکەن.' },
      { speaker: 'Citizen', text: 'How does that benefit the average person living in the city?', translation: 'ئەو چەوا ب مفا دهێت بۆ کەسەکێ ئاسایی یێ ل باژێڕی دژیت؟' },
      { speaker: 'Urban Planner', text: 'It can optimize traffic flow, reduce energy waste, and improve public safety.', translation: 'ئەو دشێت رێکا هاتنوچوونێ رێک بێخیت، مەزاختنا وزەی کێم بکەت، و ئاساییشا گشتی باشتر کەت.' },
      { speaker: 'Citizen', text: 'Are there concerns about privacy and data collection?', translation: 'ئەرێ نیگەرانی هەین ل سەر نهێنیبوون و کۆمکرنا داتایان؟' },
      { speaker: 'Urban Planner', text: 'Yes, strong data protection laws are essential for smart city projects.', translation: 'بەلێ، یاسایێن بهێز یێن پاراستنا داتایان گەلەک پێتڤینە بۆ پڕۆژەیێن باژێڕێن زیرەک.' }
    ],
    vocabulary: [
      { word: 'Urban', translation: 'باژێڕی / شاری' },
      { word: 'Optimize', translation: 'رێکخستن / باشترین کرن' },
      { word: 'Safety', translation: 'ئاسایش / پاراستن' },
      { word: 'Privacy', translation: 'نهێنیبوون' }
    ]
  },
  {
    id: 'b1-56',
    level: 'B1',
    title: 'Space Debris',
    titleKurdish: 'پاشمایێن ئەسمانی (Space Junk)',
    dialogue: [
      { speaker: 'Astronomer', text: 'Space debris is becoming a serious threat to satellites and space stations.', translation: 'پاشمایێن ئەسمانی پتر و پتر دبنە مەترسییەکا مەزن بۆ سەر مانگێن دەستکرد و وێستگەهێن ئەسمانی.' },
      { speaker: 'Student', text: 'What exactly is space debris?', translation: 'پاشمایێن ئەسمانی ب درۆستی چن؟' },
      { speaker: 'Astronomer', text: 'Inactive satellites, pieces of rockets, and fragments from collisions in orbit.', translation: 'مانگێن دەستکرد یێن لەنگ، پارچەیێن مۆشەکان، و پاشمایێن پێکدادانان ل ئۆرپیتێ (خولگەی).' },
      { speaker: 'Student', text: 'Can we clean it up?', translation: 'ئەرێ ئەم دشێین وان پاقژ بکەین؟' },
      { speaker: 'Astronomer', text: 'Scientists are developing "space harpoons" and nets to capture and remove the junk.', translation: 'زانایان یێن "نیزەیێن ئەسمانی" و توران گەشە پێ ددەن دا کو وێ زبڵێ بگرن و دویر بکەن.' }
    ],
    vocabulary: [
      { word: 'Debris', translation: 'پاشماوە / پارچەیێن شکەستی' },
      { word: 'Satellites', translation: 'مانگێن دەستکرد' },
      { word: 'Collisions', translation: 'پێکدادان' },
      { word: 'Orbit', translation: 'خولگە / ئۆرپیت' }
    ]
  },
  {
    id: 'b1-57',
    level: 'B1',
    title: 'Circular Economy',
    titleKurdish: 'ئابوورا بازنەیی',
    dialogue: [
      { speaker: 'Professor', text: 'The circular economy aims to eliminate waste by reusing materials.', translation: 'ئابوورا بازنەیی ئارمانجا وێ ئەوە زبڵی ژناڤ ببەت ب رێکا دووبارە-بکارئینانا کەرەستەیان.' },
      { speaker: 'Businessman', text: 'Is it profitable for companies to switch to this model?', translation: 'ئەرێ ب مفا و قازانجە بۆ کۆمپانیان کو بەرەڤ ڤی مۆدێلی بڕێ بکەڤن؟' },
      { speaker: 'Professor', text: 'In the long run, yes. It reduces raw material costs and increases efficiency.', translation: 'د دەمێ درێژ دا، بەلێ. تێچۆیێ کەرەستێن خاڤ کێم دکەت و کارامەییێ بلند دکەت.' },
      { speaker: 'Businessman', text: 'Consumers are also demanding more sustainable products now.', translation: 'بەکاربەر ژی نوکە داخوازا بەرهەمێن بەردەوامتر دکەن.' },
      { speaker: 'Professor', text: 'True. Designing products for repair and recycling is the first step.', translation: 'راستە. دیزاینکرنا بەرهەمان بۆ چێکرن و دووبارە-بکارئینانێ پێنگاڤا ئێکێ یە.' }
    ],
    vocabulary: [
      { word: 'Circular', translation: 'بازنەیی' },
      { word: 'Profitable', translation: 'ب قازانج / ب مفا' },
      { word: 'Raw material', translation: 'کەرەستا خاڤ' },
      { word: 'Repair', translation: 'نۆژەنکرن / چێکرنەڤە' }
    ]
  },
  {
    id: 'b1-58',
    level: 'B1',
    title: 'Minimalism Lifestyle',
    titleKurdish: 'شێوازێ ژیانی یێ کێم-خوازی (مینیمالیزم)',
    dialogue: [
      { speaker: 'Lana', text: 'I decided to declutter my apartment and adopt a minimalist lifestyle.', translation: 'من بڕیار دا مالا خۆ پاقژ کەم ژ تشتێن زێدە و شێوازێ ژیانی یێ کێم-خوازی بگرمە بەر.' },
      { speaker: 'Aveen', text: 'What motivated you to make that change?', translation: 'چ تشت هاندای تۆ ڤێ گوهۆڕینێ بکەی؟' },
      { speaker: 'Lana', text: 'I was overwhelmed by too many belongings and wanted more mental clarity.', translation: 'ئەز هیلاک بوو بووم ب زۆریا کەلوپەلان و من چەنگییەکا (رۆهناتییەکا) دەروونی پتر دڤیا.' },
      { speaker: 'Aveen', text: 'Does it mean you stopped buying new things altogether?', translation: 'ئەرێ ئەڤە رامانا وێ ئەوە تە ب ئێکجاری دەست ژ کڕینا تشتێن نوو بەردا؟' },
      { speaker: 'Lana', text: 'Not exactly. I just focus on buying things that are truly necessary or bring me joy.', translation: 'نە ب درۆستی. ئەز تنێ گرنگیێ ددەمە کڕینا وان تشتێن کو ب راستی پێتڤینە یان کەیفێ ددەنە من.' }
    ],
    vocabulary: [
      { word: 'Declutter', translation: 'پاقژکرن ژ تشتێن زێدە' },
      { word: 'Minimalist', translation: 'کێم-خواز / مینیمالیست' },
      { word: 'Overwhelmed', translation: 'هیلاک / زالبووی' },
      { word: 'Belongings', translation: 'کەلوپەل / مۆڵک' }
    ]
  },
  {
    id: 'b1-59',
    level: 'B1',
    title: 'Digital Privacy',
    titleKurdish: 'نهێنیبوونا دیجیتالی',
    dialogue: [
      { speaker: 'User A', text: 'I am concerned about how apps are tracking my location and data.', translation: 'ئەز یێ نیگەرانم کا چەوا بەرنامە (ئەپ) جهێ من و داتایێن من دپارێزن (چاڤدێری دکەن).' },
      { speaker: 'User B', text: 'You should review and adjust your privacy settings on every app.', translation: 'پێتڤییە تۆ رێکخستنێن نهێنیبوونا خۆ ل سەر هەر ئەپەکی بپشکنینی و رێک بێخی.' },
      { speaker: 'User A', text: 'Many people don\'t realize how much info they are sharing publicly.', translation: 'گەلەک کەس نزانن کا چەند زانیارییان ب شێوازەکێ گشتی بەلاڤ دکەن.' },
      { speaker: 'User B', text: 'Using a VPN and encrypted messaging apps can help protect your identity.', translation: 'بکارئینانا VPN و بەرنامەیێن نامە-ناردنا "کراکری" (ئینکریپتد) دشێن هاریکار بن د پاراستنا ناسنامەیا تە دا.' },
      { speaker: 'User A', text: 'Digital literacy is so important in the modern world.', translation: 'هۆشیاریا دیجیتالی گەلەک یا گرنگە د جیهانێ نوکە دا.' }
    ],
    vocabulary: [
      { word: 'Tracking', translation: 'چاڤدێریکردن / شوینپێهەڵگرتن' },
      { word: 'Settings', translation: 'رێکخستنەکان' },
      { word: 'Encrypted', translation: 'کراکری / نێهنی' },
      { word: 'Literacy', translation: 'هۆشیاری / خواندەواری' }
    ]
  },
  {
    id: 'b1-60',
    level: 'B1',
    title: 'Renewable Architecture',
    titleKurdish: 'تەلارسازییا بەردەوام (نوو-ببیتەڤە)',
    dialogue: [
      { speaker: 'Architect', text: 'We are designing the new library to be carbon neutral.', translation: 'ئەم یێن پێنوسی (دیزاینا) کتێبخانەیەکا نوو دکەین دا کو ئێکجاری ب بێ-کاربۆن بیت.' },
      { speaker: 'Mayor', text: 'That is a fantastic goal. What features will it include?', translation: 'ئەو ئارمانجەکا نایابە. دێ چ تایبەتمەندییان ب خۆ ڤە گریت؟' },
      { speaker: 'Architect', text: 'Solar panels, natural ventilation, and vertical gardens to improve air quality.', translation: 'پەنەلێن رۆژێ، هەواکێشانا سرۆشتی، و باخچەیێن ستوین دا کو کوالیتییا هەوایێ باشتر کەت.' },
      { speaker: 'Mayor', text: 'Will the construction costs be much higher?', translation: 'ئەرێ تێچوونا ئاڤاکرنێ دێ گەلەک بلندتر بیت؟' },
      { speaker: 'Architect', text: 'The initial cost is slightly higher, but the long-term energy savings are significant.', translation: 'تێچوونا دەستپێکێ کێمەک گرانترە، لێ پاشەکەفتکرنا وزەی د دەمێ درێژ دا گەلەک بەرچاوە.' }
    ],
    vocabulary: [
      { word: 'Neutral', translation: 'بێ-لایەن / سفر' },
      { word: 'Ventilation', translation: 'هەواکێشان' },
      { word: 'Vertical', translation: 'ستوین / راوەستای' },
      { word: 'Construction', translation: 'ئاڤاکرن' }
    ]
  },
  {
    id: 'b1-61',
    level: 'B1',
    title: 'Discussing Climate Change',
    titleKurdish: 'بەحسکرنا گۆڕانکاریا سەقای',
    dialogue: [
      { speaker: 'Environmentalist', text: 'Global temperatures are rising every year due to pollution.', translation: 'پلێن گەرمیا جیهانی هەر ساڵ د بلندبووندانە ژبەر پیسبوونا ژینگەهێ.' },
      { speaker: 'Student', text: 'What can individuals do to help prevent this?', translation: 'تاکەکەس چی دشێن بکەن بۆ هاریکاریکرن د رێگریکرن ل ڤێ چەندێ؟' },
      { speaker: 'Environmentalist', text: 'Reducing waste and using renewable energy are great first steps.', translation: 'کێمکرنا پاشماوەیان و بکارئینانا وزەیا نووکرار (رینیوەبڵ) هەنگاڤێن ئێکێ یێن مەزنن.' },
      { speaker: 'Student', text: 'Is it true that planting trees can absorb carbon dioxide?', translation: 'ئەرێ یا درۆستە کو چاندنا داران دشێت گازی کاربۆن دایۆکساید بمێژیت؟' },
      { speaker: 'Environmentalist', text: 'Yes, forests play a crucial role in balancing our ecosystem.', translation: 'بەلێ، دارستان رۆلەکێ سەرەکی دبینن د هاوسەنگکرنا ژینگێ (ئیکۆسیستەم) دا.' }
    ],
    vocabulary: [
      { word: 'Pollution', translation: 'پیسبوونا ژینگەهێ' },
      { word: 'Individuals', translation: 'تاکەکەس' },
      { word: 'Renewable', translation: 'نووکرار / یێ نوو دکەڤیتەڤە' },
      { word: 'Crucial', translation: 'سەرەکی / گرنگ' }
    ]
  },
  {
    id: 'b1-62',
    level: 'B1',
    title: 'The Importance of Reading',
    titleKurdish: 'گرنگییا خواندنێ',
    dialogue: [
      { speaker: 'Librarian', text: 'Reading regularly expands your vocabulary and improves your empathy.', translation: 'خواندن ب شێوازەکێ بەردەوام پەیڤێن تە زێدە دکەت و هەستا تە یا هەڤسۆزیێ باشتر دکەت.' },
      { speaker: 'Student', text: 'I find it hard to focus on books with so many digital distractions.', translation: 'ئەز وێ ب بزەحمەت دبینم کو گرنگیێ بدەمە پەرتووکان دگەل ڤان هەمی تشتێن سەرنجراکێش یێن دیجیتالی.' },
      { speaker: 'Librarian', text: 'Setting aside just twenty minutes a day can make a significant difference.', translation: 'دانانا تنێ بیست خۆلەکان د رۆژێ دا دشێت گوهۆڕینەکا بەرچاو چێکەت.' },
      { speaker: 'Student', text: 'Do you recommend fiction or non-fiction for someone starting out?', translation: 'ئەرێ تۆ پێشنیازا چیرۆکێن خەیالی یان راستی دکەی بۆ کەسەکی کو نوکە دەستپێ دکەت؟' },
      { speaker: 'Librarian', text: 'Both have benefits. Fiction improves creativity, while non-fiction provides knowledge.', translation: 'هەردووکان مفایێن خۆ یێن هەین. چیرۆکێن خەیالی داهێنانێ باشتر دکەن، و چیرۆکێن راستی زانیارییان دابین دکەن.' }
    ],
    vocabulary: [
      { word: 'Expands', translation: 'زێدەکرن / بەرفرهەکرن' },
      { word: 'Empathy', translation: 'هەڤسۆزی / هەستا بەرامبەر' },
      { word: 'Distractions', translation: 'تشتێن سەرنج-لادەر' },
      { word: 'Fiction', translation: 'خەیالی / چیرۆک' }
    ]
  },
  {
    id: 'b1-63',
    level: 'B1',
    title: 'Work-Life Balance',
    titleKurdish: 'هاوسەنگی د ناڤبەرا کار و ژیانێ دا',
    dialogue: [
      { speaker: 'Employee', text: 'I am struggling to maintain a healthy work-life balance.', translation: 'ئەز یێ هەوڵ ددەم هاوسەنگییەکا ساخلەم د ناڤبەرا کار و ژیانێ دا رۆمان کەم.' },
      { speaker: 'Manager', text: 'It is important to set clear boundaries and not check emails after hours.', translation: 'یا گرنگە مرۆڤ سنوورێن رۆهن دانیت و پشتی دەمژمێرێن کاری تەماشەی ئیمەیلان نەکەت.' },
      { speaker: 'Employee', text: 'I feel pressured to be available all the time because of my smartphone.', translation: 'ئەز هەست ب فشارێ دکەم کو هەر دەم یێ بەرهەڤ بم ژ بەر تەلەفۆنا خۆ یا زیرەک.' },
      { speaker: 'Manager', text: 'Taking time to disconnect is essential for avoiding burnout.', translation: 'وەرگرتنا دەمی بۆ ژ-گرێدان-کەفتنێ گەلەک فەرە دا کو مرۆڤ ژ هێز نەکەڤیت (burnout).' },
      { speaker: 'Employee', text: 'I will try to prioritize my family and hobbies this weekend.', translation: 'ئەز دێ هەوڵ دەم گرنگیێ بدەمە خێزانا خۆ و مەرەقێن (هۆبیێن) خۆ ئەڤێ دووماهیا حەفتیێ.' }
    ],
    vocabulary: [
      { word: 'Struggling', translation: 'خەباتکرن / هەوڵدان' },
      { word: 'Boundaries', translation: 'سنوورەکان' },
      { word: 'Burnout', translation: 'هیلاکبوون / ژهێزکەفتن' },
      { word: 'Disconnect', translation: 'بڕینا پەیوەندیێ / دوری' }
    ]
  },
  {
    id: 'b1-64',
    level: 'B1',
    title: 'The Impact of Social Media',
    titleKurdish: 'کارتێکرنا سۆشیال میدیایێ',
    dialogue: [
      { speaker: 'Parent', text: 'I am worried about the amount of time my kids spend on social media.', translation: 'ئەز یێ نیگەرانم ژ وی دەمێ زۆر یێ زارۆکێن من ل سەر سۆشیال میدیایێ دبوورینن.' },
      { speaker: 'Teacher', text: 'It can be a great tool for communication, but it also has its downsides.', translation: 'ئەو دشێت ببیتە ئامرازەکێ باش بۆ پەیوەندیێ، لێ لایەنێن وێ یێن خراب ژی هەین.' },
      { speaker: 'Parent', text: 'Cyberbullying and social comparison are major issues.', translation: 'ئێشاندنا ل سەر ئەلیکترۆنی (سایبەربۆلیین) و بەراوردکرنا جڤاکی ئاریشەیێن مەزنن.' },
      { speaker: 'Teacher', text: 'We need to teach them digital literacy and how to navigate online spaces safely.', translation: 'پێتڤیی کەمە ئەم هۆشیاریا دیجیتالی فێری وان بکەین و چەوا ب پارێزراوی ل ناڤ جیهانا ئۆنلاین دا بگەڕێن.' },
      { speaker: 'Parent', text: 'I try to encourage them to spend more time outdoors.', translation: 'ئەز هەوڵ ددەم وان هان بدەم دەمەکێ پتر ل دەرڤە ببورینن.' }
    ],
    vocabulary: [
      { word: 'Downsides', translation: 'لایەنێن خراب / کێماسی' },
      { word: 'Bullying', translation: 'ئێشاندن / ستەم' },
      { word: 'Comparison', translation: 'بەراوردکردن' },
      { word: 'Safe', translation: 'پارێزراو' }
    ]
  },
  {
    id: 'b1-65',
    level: 'B1',
    title: 'Planning a Budget',
    titleKurdish: 'پلاندانان بۆ بوجدەیەکێ',
    dialogue: [
      { speaker: 'Advisor', text: 'The first step in financial planning is tracking your expenses.', translation: 'گاڤا ئێکێ د پلاندانانا دارایی دا تۆمارکرنا خەرجیێن تە یە.' },
      { speaker: 'Client', text: 'I realized I spend a lot on dining out and coffee.', translation: 'من پەی پێ بر کو ئەز پارەکێ زۆر ل سەر خوارنا ل دەرڤە و قەهوێ د مەزێژم.' },
      { speaker: 'Advisor', text: 'Small daily expenses can add up to a significant amount over a month.', translation: 'خەرجیێن بچووک یێن رۆژانە دشێن ببنە بڕەکێ مەزن د درێژاهیا مەهەکێ دا.' },
      { speaker: 'Client', text: 'How much should I ideally save each month?', translation: 'ب شێوەیەکێ نموونەیی پێتڤییە هەر مەهـ چەند پاشەکەفت بکەم؟' },
      { speaker: 'Advisor', text: 'A common rule is to save at least 20% of your income.', translation: 'یاسایەکا بەربلاڤ ئەوە کو ل کێمتری ١٠٪ یا داهاتێ خۆ پاشەکەفت بکەی.' }
    ],
    vocabulary: [
      { word: 'Expenses', translation: 'خەرجییەکان' },
      { word: 'Ideally', translation: 'ب شێوەیەکێ نموونەیی' },
      { word: 'Income', translation: 'داهات / پارێ دهێت' },
      { word: 'Significant', translation: 'بەرچاو / مەزن' }
    ]
  },
  {
    id: 'b1-66',
    level: 'B1',
    title: 'Future Carrier Plans',
    titleKurdish: 'پلانێن کار و پیشەی یێن پاشەڕۆژێ',
    dialogue: [
      { speaker: 'Hozan', text: 'What are your plans after you finish your degree?', translation: 'پلانێن تە چن پشتی تۆ باوەرنامەیا خۆ وەردگری؟' },
      { speaker: 'Sara', text: 'I am hoping to specialize in renewable energy systems.', translation: 'ئەز هیڤیدارم ببمە شارەزا د سیستەمێن وزەیا نوو-ببیتەڤە دا.' },
      { speaker: 'Hozan', text: 'That is a very promising field with a lot of growth potential.', translation: 'ئەو بوارەکێ زۆر یێ ب هیڤی یە و ئەگەرێ گەشەکرنێ ل دەف هەیە.' },
      { speaker: 'Sara', text: 'I want to help design sustainable solutions for our region.', translation: 'من دڤێت هاریکار بم د دیزاینکرنا چارەسەرییێن بەردەوام بۆ دەڤەرا مە.' },
      { speaker: 'Hozan', text: 'You should look for internships to gain some practical experience.', translation: 'پێتڤییە تۆ ل مەشقێن (ئینتێرنشیپ) بگەڕێی دا کو هندەک ئەزموونا کردار وەربگری.' }
    ],
    vocabulary: [
      { word: 'Specialize', translation: 'شارەزا بوون / پسپۆڕ بوون' },
      { word: 'Promising', translation: 'ب هیڤی / پاشەڕۆژ گەش' },
      { word: 'Potential', translation: 'توانا / ئەگەر' },
      { word: 'Practical', translation: 'کردار / پراکتیکی' }
    ]
  },
  {
    id: 'b1-67',
    level: 'B1',
    title: 'Sustainable Living',
    titleKurdish: 'ژیانا بەردەوام (ژینگەیی)',
    dialogue: [
      { speaker: 'Viyan', text: 'I started composting my waste to reduce my carbon footprint.', translation: 'من دەست ب چێکرنا "کۆمپۆستێ" (پاشمایێن خوارنێ بۆ زراعتێ) کریە دا کو کارتێکرنا خۆ یا کاربۆنی کێم کەم.' },
      { speaker: 'Zana', text: 'That is great. I am trying to use less single-use plastic.', translation: 'ئەو نایەبە. ئەز ژی هەوڵ ددەم پلاستیکا ئێک-جارە کێمتر بکاربینم.' },
      { speaker: 'Viyan', text: 'Every small action counts towards protecting the environment.', translation: 'هەر کارەکێ بچووک گرنگییا خۆ هەری بۆ پاراستنا ژینگەی.' },
      { speaker: 'Zana', text: 'I also installed energy-efficient LED bulbs in my house.', translation: 'من هەروەسا گڵۆپێن LED یێن کێم-وزە ل مالا خۆ بەستینە.' },
      { speaker: 'Viyan', text: 'It is good for both the planet and your electricity bill.', translation: 'ئەو هەم بۆ هەسارەیێ و هەم بۆ وەصلا کارەبا تە یا باشە.' }
    ],
    vocabulary: [
      { word: 'Composting', translation: 'چێکرنا سەمادێ ژ پاشمایان' },
      { word: 'Footprint', translation: 'شوینپێ / کارتێکرن' },
      { word: 'Environment', translation: 'ژینگەی' },
      { word: 'Bulbs', translation: 'گڵۆپەکان' }
    ]
  },
  {
    id: 'b1-68',
    level: 'B1',
    title: 'Discussion about History',
    titleKurdish: 'گۆتۆبێژەک ل سەر دیرۆکێ',
    dialogue: [
      { speaker: 'Teacher', text: 'Why is it important to study history?', translation: 'بۆچی یا گرنگە ئەم دیرۆکێ بخوینین؟' },
      { speaker: 'Student', text: 'To learn from past mistakes and understand modern society.', translation: 'دا کو وانەیان ژ خەلەتییێن بورى وەربگرین و تێگەهشتن و شارستانییەتا نوکە ببێنین.' },
      { speaker: 'Teacher', text: 'History provides context for current political and social issues.', translation: 'دیرۆک بزاڤێ ددەتە ئاریشەیێن سیاسی و جڤاکی یێن نوکە.' },
      { speaker: 'Student', text: 'I am particularly interested in the history of the Silk Road.', translation: 'ئەز ب تایبەتی ب مەرەقم ل سەر دیرۆکا رێکا ئۆرى (سێڵك رۆد).' },
      { speaker: 'Teacher', text: 'It was a vital link for cultural and economic exchange between East and West.', translation: 'ئەو گرێدانەکا فەر بوو بۆ ئالوگۆڕکردنا کەلتوور و ئابووریێ د ناڤبەرا روژهەڵات و روژئاڤای دا.' }
    ],
    vocabulary: [
      { word: 'Context', translation: 'ناواخن / بزاڤ' },
      { word: 'Particularly', translation: 'ب تایبەتی' },
      { word: 'Exchange', translation: 'ئالوگۆڕکردن' },
      { word: 'Silk Road', translation: 'رێکا ئۆرى' }
    ]
  },
  {
    id: 'b1-69',
    level: 'B1',
    title: 'The Benefits of Volunteering',
    titleKurdish: 'مفایێن خۆبەخشیێ',
    dialogue: [
      { speaker: 'Rovin', text: 'Volunteering has helped me develop new skills and meet new people.', translation: 'خۆبەخشیێ هاریکاریا من کریە کو بەهرەیێن نوو گەشە پێ بدەم و کەسێن نوو ببێنم.' },
      { speaker: 'Dana', text: 'It also gives a sense of purpose and fulfillment.', translation: 'هەروەسا هەستەکێ ئارمانجدار و تێربوونێ ددەتە مرۆڤی.' },
      { speaker: 'Rovin', text: 'I recently volunteered at a local food bank.', translation: 'ئەز ڤێ دووماهییە ل پاشەکەفتەکا خوارنێ (فود بانك) یا ل دەڤەرا مە خۆبەخش بووم.' },
      { speaker: 'Dana', text: 'That is such an important service for members of the community in need.', translation: 'ئەو خزمەتگوزارییەکا زۆر گرنگە بۆ ئەندامێن پێتڤیدار یێن جڤاکی.' },
      { speaker: 'Rovin', text: 'I highly recommend it to everyone.', translation: 'ئەز ب توندی پێشنیاز دکەم بۆ هەموو کەسان.' }
    ],
    vocabulary: [
      { word: 'Fulfillment', translation: 'تێربوون / گەهشتن ب ئارمانجێ' },
      { word: 'Community', translation: 'جڤاك' },
      { word: 'In need', translation: 'پێتڤیدار' },
      { word: 'Recommend', translation: 'پێشنیازکردن' }
    ]
  },
  {
    id: 'b1-70',
    level: 'B1',
    title: 'Technology Trends',
    titleKurdish: 'ئاراستەیێن (ترێندێن) تەکنەلۆژیایێ',
    dialogue: [
      { speaker: 'Saman', text: 'Artificial intelligence is becoming integrated into almost every industry.', translation: 'ژیرییا دەستکرد یابەرەو تێکەڵبوون دچیت د هەمی پیشەیان دا.' },
      { speaker: 'Zana', text: 'It is amazing how it can optimize complex processes so quickly.', translation: 'یا سەیرە چەوا ئەو دشێت پڕۆسەیێن ئاڵۆز ب زوویی رێک بێخیت.' },
      { speaker: 'Saman', text: 'However, there are concerns about job security and automation.', translation: 'لێ د هەمان دەم دا، نیگەرانی هەین ل سەر ئاسایشا کار و ئۆتۆماتیک-کردنێ.' },
      { speaker: 'Zana', text: 'We need to adapt by learning new technical skills.', translation: 'پێتڤییە ئەم خۆ بگونجینین ب فێربوونا بەهرەیێن نوو یێن تەکنیکی.' },
      { speaker: 'Saman', text: 'Continuous learning is essential in the digital age.', translation: 'فێربوونا بەردەوام فەرە د سەردەمێ دیجیتالیدا.' }
    ],
    vocabulary: [
      { word: 'Integrated', translation: 'تێکەڵ / گونجای' },
      { word: 'Processes', translation: 'پڕۆسە / رێکارەکان' },
      { word: 'Automation', translation: 'ئۆتۆماتیک-کردن' },
      { word: 'Essential', translation: 'فەر / پێویست' }
    ]
  },
  {
    id: 'b1-71',
    level: 'B1',
    title: 'Traditional Kurdish Crafts',
    titleKurdish: 'کارێن دەستی یێن کەلتووری یێن کوردی',
    dialogue: [
      { speaker: 'Tourist', text: 'The Kurdish rugs I saw in the market are incredibly beautiful.', translation: 'تایەیێن (سماکێن) کوردی یێن من د بازاریدا دیتین ب شێوازەکێ باوەرنەکەر یێن جوانن.' },
      { speaker: 'Artisan', text: 'Each pattern and color tells a story of our heritage.', translation: 'هەر نەخشە و رەنگەک چیرۆکەکا میراتێ مە ڤە دگێڕیت.' },
      { speaker: 'Tourist', text: 'How long does it take to weave a single rug?', translation: 'چەند دەم پێتڤییە بۆ چنینا تنێ ئێک تایەی (سماکێ)؟' },
      { speaker: 'Artisan', text: 'It depends on the size and complexity, but it can take several months.', translation: 'بندنە ل سەر قەبارە و ئاڵۆزیێ، لێ دشێت چەند مەهان بخایەنیت.' },
      { speaker: 'Tourist', text: 'I would love to learn more about the natural dyes you use.', translation: 'من دڤیا پتر فێر ببم ل سەر وان رەنگێن سرۆشتی یێن هوین بکار دئینن.' }
    ],
    vocabulary: [
      { word: 'Pattern', translation: 'نەخشە / شێواز' },
      { word: 'Heritage', translation: 'میرات / کەلتوور' },
      { word: 'Weave', translation: 'چنین / چێکەری' },
      { word: 'Dyes', translation: 'رەنگەکان' }
    ]
  },
  {
    id: 'b1-72',
    level: 'B1',
    title: 'The Future of Transport',
    titleKurdish: 'پاشەڕۆژا ڤەگۆهاستنێ (گواستنەوە)',
    dialogue: [
      { speaker: 'Engineer', text: 'Electric vehicles are a key part of reducing urban pollution.', translation: 'ترۆمبێلێن کارەبایی پشکەکا سەرەکی نە ژ کێمکرنا پیسبوونا باژێڕی.' },
      { speaker: 'Citizen', text: 'But we need more charging stations to make them practical for long trips.', translation: 'لێ پێتڤی ب وێستگەهێن پتر یێن شەحنکرنێ هەین دا کو بۆ مەواحێن دویر ببنە کردار (پراکتیکی).' },
      { speaker: 'Engineer', text: 'Autonomous driving technology is also advancing very quickly.', translation: 'تەکنەلۆژییا لێخۆڕینا خۆکار ژی ب زوویی یا گەشە دکەت.' },
      { speaker: 'Citizen', text: 'I am not sure I would feel safe in a car without a driver.', translation: 'ئەز نە یا گۆمانم کو حەست ب ئاسایشێ بکەم د ترۆمبێلەکێ دا بێ لێخۆڕ.' },
      { speaker: 'Engineer', text: 'Safety is the main priority for developers of these systems.', translation: 'ئاسایش ئارمانجێ سەرەکی یە بۆ گەشەپێدەرێن ڤان سیستەمایان.' }
    ],
    vocabulary: [
      { word: 'Electric vehicles', translation: 'ترۆمبێلێن کارەبایی' },
      { word: 'Charging', translation: 'شەحنکردن' },
      { word: 'Autonomous', translation: 'خۆکار / بێ-لێخۆر' },
      { word: 'Priority', translation: 'رێزبەند / گرنگی' }
    ]
  },
  {
    id: 'b1-73',
    level: 'B1',
    title: 'Mental Health in the Workplace',
    titleKurdish: 'ساخلەمیا دەروونی ل جهێ کاری',
    dialogue: [
      { speaker: 'HR Manager', text: 'We are introducing a wellness program to support our employees.', translation: 'ئەم یێن پڕۆگرامەکێ بژێوییێ ددەنە ناسین بۆ پشتەڤانیکردنا کارمەندێن مە.' },
      { speaker: 'Employee', text: 'That is great. Stress is a common issue in high-pressure roles.', translation: 'ئەو زۆر باشە. فشار (سترێس) ئاریشەیەکا بەربلاڤە ل ناڤ کارێن ب فشارێن مەزن.' },
      { speaker: 'HR Manager', text: 'We want to create an environment where people feel safe discussing their mental health.', translation: 'مە دڤێت ژینگەیەکێ درۆست بکەین کو خەڵك هەست ب ئارامیێ بکەن دەمێ بەحسێ ساخلەمیا خۆ یا دەروونی دکەن.' },
      { speaker: 'Employee', text: 'Flexible working hours can also reduce stress significantly.', translation: 'دەمژمێرێن کار یێن نەرم (فلێکسیبڵ) ژی دشێن فشارێ ب شیوەیەکێ بەرچاو کێم بکەن.' },
      { speaker: 'HR Manager', text: 'Encouraging a positive work culture is one of our main goals.', translation: 'هاندانا کەلتوورەکێ پۆزەتیڤ یێ کاری یەک ژ ئارمانجێن مە یێن سەرەکی یە.' }
    ],
    vocabulary: [
      { word: 'Wellness', translation: 'باشی / بژێوی' },
      { word: 'Pressure', translation: 'فشار' },
      { word: 'Environment', translation: 'ژینگەی / بارودۆخ' },
      { word: 'Significantly', translation: 'ب بەرچاوی / زۆر' }
    ]
  },
  {
    id: 'b1-74',
    level: 'B1',
    title: 'Discussion about Space',
    titleKurdish: 'گۆتۆبێژ ل سەر گەردوونێ (ئەسمانێ دەرڤە)',
    dialogue: [
      { speaker: 'Alan', text: 'Do you think we will ever find evidence of life on Mars?', translation: 'ئەرێ تۆ هزردکەی ئەم چو جاران بەڵگەیەکێ ل سەر هەبوونا ژیانێ ل ماریخی ببێنین؟' },
      { speaker: 'Sara', text: 'Rovers are currently searching for signs of ancient water and organic molecules.', translation: 'رۆڤەر (ئامێرێن گەڕانێ) نوکە ل شوینپێیێن ئاڤا کەڤن و گەردیلەیێن ئۆرگانیک دگەڕێن.' },
      { speaker: 'Alan', text: 'Space exploration is so expensive; should we spend the money on Earth instead?', translation: 'گەڕان ل گەردوونێ گەلەک یا گرانە؛ ئەرێ پێتڤییە ئەم وی پارەی ل سەر عەردی ب مەزێژین د شۆینا وێ دا؟' },
      { speaker: 'Sara', text: 'The technology developed for space often has practical applications in medicine and engineering.', translation: 'ئەو تەکنەلۆژییا بۆ گەردوونێ دهێتە درۆستکرن زۆر جاران مفا و کارێن کردار د بوارێ پزیشکی و ئەندازیاریێ دا هەری.' },
      { speaker: 'Alan', text: 'It also inspires the next generation of scientists and explorers.', translation: 'هەروەسا هاندانێ ددەتە نەوەیا بهێت یا زانا و گەڕۆکان.' }
    ],
    vocabulary: [
      { word: 'Evidence', translation: 'بەڵگە' },
      { word: 'Molecules', translation: 'گەردیلە / مۆلیکیول' },
      { word: 'Applications', translation: 'بکارئینان / کارەکان' },
      { word: 'Explorers', translation: 'گەڕۆکەکان' }
    ]
  },
  {
    id: 'b1-75',
    level: 'B1',
    title: 'Digital Minimalism',
    titleKurdish: 'کێم-خوازییا دیجیتال (مینیمالیزما دیجیتال)',
    dialogue: [
      { speaker: 'Rovin', text: 'I decided to delete all social media apps from my phone for a month.', translation: 'من بڕیار دا هەمی بەرنامەیێن (ئەپێن) سۆشیال میدیایێ ل سەر تەلەفۆنا خۆ بۆ مەهەکێ رەش بکەمەڤە (ب سێڕم).' },
      { speaker: 'Dana', text: 'That sounds like a difficult challenge. How do you feel?', translation: 'وەسا دیارە کو ئاستەنگەکا بزەحمەت بیت. هەستا تە چییە؟' },
      { speaker: 'Rovin', text: 'I feel much more present and less distracted.', translation: 'ئەز هەست دکەم پتر ل ڤێرەم و کێمتر هزرێن من لای دبن.' },
      { speaker: 'Dana', text: 'We spend so much time scrolling without realizing it.', translation: 'ئەم دەمەکێ زۆر ب "سکرۆڵ-کردنێ" ڤە د مەزێژین بێ کو پەی پێ ببێنین.' },
      { speaker: 'Rovin', text: 'I want to be more intentional about how I use technology.', translation: 'من دڤێت یێ ب مەرەم بم دەربارەی وێ چەندێ کا چەوا تەکنەلۆژیایێ بکار دئینم.' }
    ],
    vocabulary: [
      { word: 'Distracted', translation: 'سەرنج-لادەر / سەرهوردا' },
      { word: 'Scrolling', translation: 'تەماشەکرنا ب رێزا ناوەڕۆکێ' },
      { word: 'Intentional', translation: 'ب مەرەم / ب ئەنقەست' },
      { word: 'Present', translation: 'ئاگەهدار / هەبوو' }
    ]
  },
  {
    id: 'b1-76',
    level: 'B1',
    title: 'The Future of Energy',
    titleKurdish: 'پاشەڕۆژا وزەیی',
    dialogue: [
      { speaker: 'Scientist', text: 'Nuclear fusion could provide clean and limitless energy in the future.', translation: 'پێککەفتنا نەوەوی (نیوکلێر فیوژن) دشێت وزەیەکا پاقژ و بێ-سنوور د پاشەڕۆژێ دا دابین بکەت.' },
      { speaker: 'Student', text: 'Is it safe compared to existing nuclear fission reactors?', translation: 'ئەرێ ئەو یێ پارێزراوە ب بەراورد دگەل فڕنێن (رێئاکتۆرێن) پڕژاندنا نەوەوی یێن نوکە؟' },
      { speaker: 'Scientist', text: 'Yes, it doesn\'t produce long-lived radioactive waste.', translation: 'بەلێ، ئەو پاشمایێن تیشکدەر (رادیۆ-ئەکتیڤ) یێن دەم-درێژ بەرهەم نائینیت.' },
      { speaker: 'Student', text: 'When will the technology be commercially available?', translation: 'کەنگی دێ ئەو تەکنەلۆژیا بۆ بکارئینانا بازرگانی بەردەست بیت؟' },
      { speaker: 'Scientist', text: 'It is still in the experimental stage, but progress is being made.', translation: 'هێشتا د قۆناغا تاقیکاریێ دایە، لێ پێشکەفتن یا دهێتە کرن.' }
    ],
    vocabulary: [
      { word: 'Fusion', translation: 'پێککەفتن / یەکبوون' },
      { word: 'Limitless', translation: 'بێ-سنوور' },
      { word: 'Radioactive', translation: 'تیشکدەر / رادیۆ-ئەکتیڤ' },
      { word: 'Experimental', translation: 'تاقیکاری' }
    ]
  },
  {
    id: 'b1-77',
    level: 'B1',
    title: 'Protecting Oceans',
    titleKurdish: 'پاراستنا زەریایان',
    dialogue: [
      { speaker: 'Diver', text: 'I saw a lot of coral bleaching during my last diving trip.', translation: 'من سپیبوونا مەرجانان (کۆرەڵ بیچینگ) یا زۆر دیت د گەشتەکا من یا دووماهییێ یا مەلەڤانیێ دا.' },
      { speaker: 'Biologist', text: 'Rising ocean temperatures and pollution are destroying fragile marine ecosystems.', translation: 'بلندبوونا پلەیێن گەرمێ یێن زەریایان و پیسبوون سیستەمێن ژینگەیی یێن لاواز یێن دەریایی ژناڤ ددەن.' },
      { speaker: 'Diver', text: 'It is heartbreaking to see the beauty of the underwater world fading.', translation: 'یا دلگرانکەرە مرۆڤ ببینیت جوانییا جیهانا بن ئاڤێ یا بەرەڤ بەرزەبوونێ دچیت.' },
      { speaker: 'Biologist', text: 'We need global action to reduce carbon emissions and protect marine areas.', translation: 'مە پێتڤی ب کارەکێ جیهانی هەیە بۆ کێمکرنا غازێن کاربۆنی و پاراستنا ناوچەیێن دەریایی.' },
      { speaker: 'Diver', text: 'Every small effort to reduce plastic waste helps too.', translation: 'هەر هەوڵەکا بچووک بۆ کێمکرنا پاشمایێن پلاستیکی ژی هاریکارە.' }
    ],
    vocabulary: [
      { word: 'Bleaching', translation: 'سپیبوون / رەنگچوون' },
      { word: 'Fragile', translation: 'لاواز / ناسك' },
      { word: 'Heartbreaking', translation: 'دڵگرانکەر' },
      { word: 'Emissions', translation: 'غازەکان / دەرهاوێشتەکان' }
    ]
  },
  {
    id: 'b1-78',
    level: 'B1',
    title: 'The Rise of Cryptocurrencies',
    titleKurdish: 'گەشەکرنا دراڤێن دیجیتالی (کریپتۆکارێنسی)',
    dialogue: [
      { speaker: 'Investor', text: 'Bitcoin and other cryptocurrencies are changing the financial landscape.', translation: 'بیتکۆین و دراڤێن دی یێن دیجیتالی یێن دیمەنێ دارایی دگوهۆڕن.' },
      { speaker: 'Skeptic', text: 'I find them too volatile and risky for the average investor.', translation: 'ئەز وان زۆر ب لەرزۆك و مەترسیدار دبینم بۆ وەبەرهێنەرەکێ ئاسایی.' },
      { speaker: 'Investor', text: 'Blockchain technology has many applications beyond just currency.', translation: 'تەکنەلۆژییا بلۆک-چەین گەلەک بکارئینانێن هەی ژبلی تنێ دراڤی.' },
      { speaker: 'Skeptic', text: 'I am also concerned about the environmental impact of crypto mining.', translation: 'ئەز هەروەسا نیگەرانم ژ کارتێکرنا ژینگەیی یا ب دەستکەفتنا (ماینینگا) کریپتۆی.' },
      { speaker: 'Investor', text: 'Newer systems are being developed that use much less energy.', translation: 'سیستەمێن نووتر یێن دهێنە گەشەپێدان کو وزەیەکا گەلەک کێمتر بکار دئینن.' }
    ],
    vocabulary: [
      { word: 'Volatile', translation: 'لەرزۆك / نە-جێگیر' },
      { word: 'Landscape', translation: 'دیمەن / بوار' },
      { word: 'Mining', translation: 'دەستکەفتن / ماینینگ' },
      { word: 'Skeptic', translation: 'گۆماندار / کەسێ باور نەکەت' }
    ]
  },
  {
    id: 'b1-79',
    level: 'B1',
    title: 'Cultural Festivals',
    titleKurdish: 'فێستیڤاڵێن کەلتووری',
    dialogue: [
      { speaker: 'Viyan', text: 'The Newroz celebrations this year were incredibly vibrant.', translation: 'ئاهەنگێن نەورۆزا ئەڤساڵە زۆر ب جۆش و خرۆش (ڤایبرانت) بوون.' },
      { speaker: 'Alan', text: 'I love seeing everyone in their traditional clothes.', translation: 'ئەز حەز دکەم هەموو کەسان ببینم ب جلیێن وان یێن کەلتووری ڤە.' },
      { speaker: 'Viyan', text: 'It is a time to celebrate our identity and welcome the spring.', translation: 'ئەو دەمەکە بۆ پیرۆزکرنا ناسنامەیا مە و پێشوازییا بهارێ.' },
      { speaker: 'Alan', text: 'The food and music were also fantastic.', translation: 'خوارن و مۆزیک ژی نایەب بوون.' },
      { speaker: 'Viyan', text: 'Cultural festivals are important for passing down traditions to children.', translation: 'فێستیڤاڵێن کەلتووری د گرنگن بۆ ڤەگۆهاستنا داب و نەریتان بۆ زارۆکان.' }
    ],
    vocabulary: [
      { word: 'Vibrant', translation: 'ب جۆش و خرۆش / گەش' },
      { word: 'Traditions', translation: 'داب و نەریت' },
      { word: 'Passing down', translation: 'ڤەگۆهاستن (بۆ نەوەیا بهێت)' },
      { word: 'Celebrate', translation: 'پیرۆزکردن' }
    ]
  },
  {
    id: 'b1-80',
    level: 'B1',
    title: 'The Power of Music',
    titleKurdish: 'شیان و (هێزا) مۆزیکێ',
    dialogue: [
      { speaker: 'Musician', text: 'Music has the power to connect people from different cultures.', translation: 'مۆزیک شیان (هێز) یا هەری کو خەڵکی ژ کەلتوورێن جودا پێکڤە گرێ بدەت.' },
      { speaker: 'Listener', text: 'It can really change your mood in an instant.', translation: 'ئەو دشێت ب راستی د چرکەیەکێ دا مەزاجا تە بگوهۆڕیت.' },
      { speaker: 'Musician', text: 'I find it to be a form of universal language.', translation: 'ئەز وێ وەک جۆرەکێ زمانێ گەردوونی دبینم.' },
      { speaker: 'Listener', text: 'Do you prefer playing live or recording in a studio?', translation: 'تۆ پێ باشترە ب شیوەیەکێ "لایڤ" (بەرهەڤ) مۆزیکێ لێ بدەی یان ل ناڤ ستۆدیۆیێ تۆمار بکەی؟' },
      { speaker: 'Musician', text: 'Nothing beats the energy of a live performance and the connection with the audience.', translation: 'چو تشت ناگەهیتە وزەیا پێشکێشکرنەیا لایڤ و ئەو پەیوەندیا دگەل جەماوەری.' }
    ],
    vocabulary: [
      { word: 'Universal', translation: 'گەردوونی / جیهانی' },
      { word: 'Instant', translation: 'چرکە / زوو' },
      { word: 'Audience', translation: 'جەماوەر / گوهدار' },
      { word: 'Connection', translation: 'گرێدان / پەیوەندی' }
    ]
  },
  {
    id: 'b1-81',
    level: 'B1',
    title: 'Advantages of Living in a Small Town',
    titleKurdish: 'باشیێن ژیانێ ل باژێرەکی بچیک',
    dialogue: [
      { speaker: 'City Resident', text: 'Isn’t it boring living in such a quiet place?', translation: 'ئەرێ نە یا مەلوولکەرە ژیان ل جهەکێ هۆسا بێدەنگ؟' },
      { speaker: 'Town Resident', text: 'Not at all. I love the sense of community and fresh air.', translation: 'نە خێر ب تەمامی. ئەز حەز ژ هەستا کۆمەلایەتیێ و هەوایێ پاقژ دکەم.' },
      { speaker: 'City Resident', text: 'But you have to drive long distances for entertainment.', translation: 'لێ پێتڤییە تو بۆ دەمبۆراندنێ و کەیفێ رێیێن دویر ببڕی.' },
      { speaker: 'Town Resident', text: 'True, but life is less stressful and more affordable here.', translation: 'یا درۆستە، لێ ژیان ل ڤێرێ کێم ستریس ترە و ب بهایەکێ گۆنجای تره.' },
      { speaker: 'City Resident', text: 'I guess there are pros and cons to both lifestyles.', translation: 'وەسا دبینم بۆ هەر ئێک ژ ڤان ژیانان لایەنێن باش و خراب هەنە.' }
    ],
    vocabulary: [
      { word: 'Boring', translation: 'مەلوولکەر / بێزارکەر' },
      { word: 'Community', translation: 'کۆمەلگە / کۆمەلایەتی' },
      { word: 'Affordable', translation: 'هەرزان / ب بهایەکێ گۆنجای' },
      { word: 'Pros and cons', translation: 'باشی و خراپی / لایەنێن ئەرێنی و نەرێنی' }
    ]
  },
  {
    id: 'b1-82',
    level: 'B1',
    title: 'The Future of Education',
    titleKurdish: 'پاشەڕۆژا پەروەردەیێ',
    dialogue: [
      { speaker: 'Professor', text: 'Online learning is changing the way we think about higher education.', translation: 'فێربوونا ئۆنلاین شێوازێ هزرکرنا مە دەربارەی خویندنا بلند دگوهۆڕیت.' },
      { speaker: 'Student', text: 'Do you think it will eventually replace traditional classrooms?', translation: 'ئەرێ تۆ هزردکەی دێ ل دوماهییێ زانیارییا ل پۆلان هێتە گوهۆڕین ب وێ؟' },
      { speaker: 'Professor', text: 'Not entirely. The social and collaborative aspects of in-person learning are hard to replicate.', translation: 'نە ب تەمامی. لایەنێن جڤاکی و هەماھەنگی یێن فێربوونا ب کەسۆکی زەحمەتە بهێنە دووبارە-کرن.' },
      { speaker: 'Student', text: 'But it provides more flexibility for people who are working.', translation: 'لێ ئەو ئاسانکارییا (فلێکسیبیلیتی) پتر دابین دکەت بۆ وان کەسێن کار دکەن.' },
      { speaker: 'Professor', text: 'True. A hybrid model is likely the most sustainable path forward.', translation: 'راستە. مۆدێلەکێ تێکەڵ (هایبرید) ب گۆمان رێکا هەرە باشە بەرەڤ پێش.' }
    ],
    vocabulary: [
      { word: 'Eventually', translation: 'ل دوماهییێ' },
      { word: 'Replicate', translation: 'دووبارە-کرن / لێک-وەشاندن' },
      { word: 'Flexibility', translation: 'کارئاسانی / نەرمی' },
      { word: 'Hybrid', translation: 'تێکەڵ / دوو-رەگ' }
    ]
  },
  {
    id: 'b1-83',
    level: 'B1',
    title: 'Traveling in the Mountains',
    titleKurdish: 'گەشتکرن ل چیایان',
    dialogue: [
      { speaker: 'Guide', text: 'We should start our hike early to avoid the midday sun.', translation: 'پێتڤییە ئەم دەست ب گەشتێ بکەین سپێدێ زوو دا کو خوە ژ رۆژا گەرم یا نیڤرۆ بپارێزین.' },
      { speaker: 'Hiker', text: 'Is the trail steep? I am not very experienced.', translation: 'ئەرێ رێکا چیای یا ئەستەمە (ستێپ)؟ ئەز گەلەک یێ خودان ئەزموون نیم.' },
      { speaker: 'Guide', text: 'It starts out easy, but there are some challenging sections near the summit.', translation: 'د دەستپێکێ دا یا ب ساناهییە، لێ هندەک پارچەیێن بزەحمەت ل نێزیکی لووتکەیێ یێن هەین.' },
      { speaker: 'Hiker', text: 'The view from the top is supposed to be breath-taking.', translation: 'دیمەنێ ژ سەرێ چیای دبێژن یێ زۆر جوان و سەرنجراکێشە.' },
      { speaker: 'Guide', text: 'It is. Just remember to pace yourself and stay hydrated.', translation: 'وەسایە. تنێ ل بیرا تە بیت هەنگاڤێن خوە رێک بێخی و ئاڤێ زۆر بخۆ.' }
    ],
    vocabulary: [
      { word: 'Hike', translation: 'گەشتا چیای / پیاسە' },
      { word: 'Steep', translation: 'ئەستەم / راوەستای' },
      { word: 'Summit', translation: 'لووتکە / سەرێ چیای' },
      { word: 'Hydrated', translation: 'ئاڤ-خۆارن / تێر-ئاڤ' }
    ]
  },
  {
    id: 'b1-84',
    level: 'B1',
    title: 'Volunteering for the Environment',
    titleKurdish: 'خۆبەخشی بۆ ژینگەی',
    dialogue: [
      { speaker: 'Zara', text: 'I am participating in a beach clean-up this Sunday.', translation: 'ئەز پشکداریێ د پاقژکرنا لێڤا دەریایێ دا دکەم ڤێ یەکشەمبیێ.' },
      { speaker: 'Aveen', text: 'I would love to join you. Where do we meet?', translation: 'من ژی دڤێت دگەل تە پشکدار ببم. دێ ل کیدەرێ هەڤ بین؟' },
      { speaker: 'Zara', text: 'We will gather at the main pier at 9 AM. Gloves and bags will be provided.', translation: 'ئەم دێ ل سەر جەمسەرێ سەرەکی (پیر) کۆم بین ل دەمژمێر ٩ێ سپێدێ. دەستکێش و کیسک دێ هێنە دابینکرن.' },
      { speaker: 'Aveen', text: 'It is a small way to give back to nature.', translation: 'ئەو رێکەکا بچووکە بۆ پێشکێشکرنا مفا بۆ سرۆشتی.' },
      { speaker: 'Zara', text: 'If everyone did a little bit, it would make a huge impact.', translation: 'ئەگەر هەر کەسەک هندەکێ بکەت، دێ کارتێکرنەکا مەزن هەبیت.' }
    ],
    vocabulary: [
      { word: 'Participating', translation: 'پشکداربوونی' },
      { word: 'Pier', translation: 'جەمسەرێ لێڤا ئاڤێ' },
      { word: 'Gloves', translation: 'دەستکێشەکان' },
      { word: 'Impact', translation: 'کارتێکرن' }
    ]
  },
  {
    id: 'b1-85',
    level: 'B1',
    title: 'The Rise of E-bikes',
    titleKurdish: 'بەربلاڤبوونا پاسکیلێن کارەبایی',
    dialogue: [
      { speaker: 'Saman', text: 'E-bikes are becoming very popular for commuting in the city.', translation: 'پاسکیلێن کارەبایی یێن دبنە تشتەکێ زۆر بەربلاڤ بۆ چوون و هاتنێ (کۆمیوتینگ) ل باژێڕی.' },
      { speaker: 'Zana', text: 'They are great for hills and longer distances compared to regular bikes.', translation: 'ئەو د باشن بۆ گردان و مەودایێن دویرتر ب بەراورد دگەل پاسکیلێن ئاسایی.' },
      { speaker: 'Saman', text: 'And they are much more eco-friendly than cars.', translation: 'و ئەو زۆر پتر د دۆستێن ژینگەی نە ژ ترۆمبێلان.' },
      { speaker: 'Zana', text: 'Do you need a special license to ride one?', translation: 'ئەرێ تە پێتڤی ب مۆلەتا تایبەت هەیە بۆ لێخۆڕینا وێ؟' },
      { speaker: 'Saman', text: 'Usually no, as long as the motor output is within certain limits.', translation: 'ب گشتی نە، هەتا کو وزەیا مۆتۆری د ناڤ هندەک سنووران دا بیت.' }
    ],
    vocabulary: [
      { word: 'Commuting', translation: 'چوون و هاتنی کار' },
      { word: 'Popular', translation: 'بەناوبانگ / بەربلاڤ' },
      { word: 'Range', translation: 'مەودا / رێز' },
      { word: 'License', translation: 'مۆڵەت / دەستهەڵات' }
    ]
  },
  {
    id: 'b1-86',
    level: 'B1',
    title: 'Historical Landmarks',
    titleKurdish: 'شوینوارێن دیرۆکی یێن بەرچاو',
    dialogue: [
      { speaker: 'Tourist', text: 'The citadel in Erbil is one of the oldest continuously inhabited places in the world.', translation: 'قەڵایا هەولێرێ یەک ژ کەڤنترین جهێن ب ئاوەدان مۆیی یە ل جیهانێ.' },
      { speaker: 'Guide', text: 'Yes, it holds layers of history from different civilizations.', translation: 'بەلێ، ئەو چەندین تەبەقێن دیرۆکێ یێن شارستانییەتێن جودا د ناڤ خۆ دا دگریت.' },
      { speaker: 'Tourist', text: 'The architecture is fascinating. How is it being preserved?', translation: 'تەلارسازییا وێ یا سەرنجراکێشە. چەوا پارێزگاری لێ دهێتە کرن؟' },
      { speaker: 'Guide', text: 'There are ongoing restoration projects supported by UNESCO.', translation: 'پڕۆژەیێن نۆژەنکرنێ یێن بەردەوام هەنە کو ژ لایێ یوونێسکۆ ڤە دهێنە پشتەڤانیکردن.' },
      { speaker: 'Tourist', text: 'It is a privilege to walk through such a historic site.', translation: 'شانازییەکە مرۆڤ د ناڤ جهەکێ ئوها دیرۆکی دا پیاسێ بکەت.' }
    ],
    vocabulary: [
      { word: 'Citadel', translation: 'قەڵا' },
      { word: 'Civilizations', translation: 'شارستانییەتەکان' },
      { word: 'Fascinating', translation: 'سەرنجراکێش / جوان' },
      { word: 'Restoration', translation: 'نۆژەنکرنەڤە' }
    ]
  },
  {
    id: 'b1-87',
    level: 'B1',
    title: 'Discussion on Remote Work',
    titleKurdish: 'گۆتۆبێژ ل سەر کارکرنا ژ دویر',
    dialogue: [
      { speaker: 'Manager', text: 'We have seen an increase in productivity since offering remote work options.', translation: 'مە زیادبوونا بەرهەمداریێ دیتییە ژ دەمی مە بژاردەیێن کارکرنا ژ دویر دابین کرین.' },
      { speaker: 'Employee', text: 'I appreciate the time saved by not having to commute every day.', translation: 'ئەز سوپاسگوزارم بۆ وی دەمێ پاشەکەفت بووی ب نە-مەزێختنا وی ل سەر چوون و هاتنا رۆژانە.' },
      { speaker: 'Manager', text: 'Communication is key. We use video conferencing and messaging to stay connected.', translation: 'پەیوەندی تشتێ سەرەکی یە. ئەم ڤیدیۆ کۆنفرانس و نامە-ناردنێ بکار دئینن دا کو ب پەیوەندی بمینن.' },
      { speaker: 'Employee', text: 'Occasionally I miss the spontaneous interactions with my colleagues.', translation: 'جاردەمان بیرییا وان گۆفتوگۆیێن سرۆشتی دگەل هەڤالێن کارێن خۆ دکەم.' },
      { speaker: 'Manager', text: 'We plan regular team-building events to maintain a strong team culture.', translation: 'ئەم پلانا ئەنجامدانا بۆنەیێن تیم-ئاڤاکرنا دبەردەوام ددانن دا کو کەلتوورەکێ ب هێز یێ تیمێ بهێلین.' }
    ],
    vocabulary: [
      { word: 'Productivity', translation: 'بەرهەمداری' },
      { word: 'Appreciate', translation: 'سوپاسگوزاری / رێزگرتن' },
      { word: 'Spontaneous', translation: 'سرۆشتی / بێ-پلان' },
      { word: 'Interactions', translation: 'کارلێک / پەیوەندی' }
    ]
  },
  {
    id: 'b1-88',
    level: 'B1',
    title: 'Learning a Musical Instrument',
    titleKurdish: 'فێربوونا ئامرازەکێ مۆزیکێ',
    dialogue: [
      { speaker: 'Student', text: 'I started taking lessons to learn how to play the Saz.', translation: 'من دەست ب وەرگرتنا وانەیان کریە دا کو فێر ببم کا چەوا "ساز"ێ بقۆتینم (لێ بدەم).' },
      { speaker: 'Friend', text: 'That is wonderful. It has such a unique and soulful sound.', translation: 'ئەو نایەب بوو. دەنگەکێ مەیتی (تایبەت) و رحی یێ هەی.' },
      { speaker: 'Student', text: 'The finger positioning is quite challenging for complex melodies.', translation: 'دانانا تبیکان (رێکخستن) یا هندەکێ ب زەحمەتە بۆ مۆزیکێن ئاڵۆز.' },
      { speaker: 'Friend', text: 'Practice makes perfect. How often do you rehearse?', translation: 'کەیف و مەشق مرۆڤی بەرەڤ تەواویێ دبەت. تۆ چەند جاران راهێنانێ دکەی؟' },
      { speaker: 'Student', text: 'I try to practice for at least an hour every day after school.', translation: 'ئەز هەوڵ ددەم ل کێمتری دەمژمێرەکێ هەمی رۆژا پشتی قوتابخانەی مەشقێ بکەم.' }
    ],
    vocabulary: [
      { word: 'Lessons', translation: 'وانەکان' },
      { word: 'Unique', translation: 'تایبەت / بێ-وێنە' },
      { word: 'Melodies', translation: 'ئاوازەکان / میلۆدی' },
      { word: 'Rehearse', translation: 'راهێنان / مەشق' }
    ]
  },
  {
    id: 'b1-89',
    level: 'B1',
    title: 'The Benefits of Meditation',
    titleKurdish: 'مفایێن تێڕامانێ (مێدیتەیشن)',
    dialogue: [
      { speaker: 'Lana', text: 'I have been practicing meditation every morning to manage stress.', translation: 'ئەز هەمی سپێدەیا تێڕامانێ (مێدیتەیشن) دکەم دا کو فشارێ (سترێس) کۆنتڕۆڵ بکەم.' },
      { speaker: 'Aveen', text: 'I find it hard to sit still and quiet my mind.', translation: 'ئەز وێ ب بزەحمەت دبینم کو ب بێدەنگی بنیشم و مێشکێ خۆ ئارام کەم.' },
      { speaker: 'Lana', text: 'It takes time. You can start with just five minutes of mindful breathing.', translation: 'دەمی دگریت. تۆ دشێی تنێ ب پێنج خۆلەکان ژ بێهن-وەرگرتنا ب ئاگەهی دەستپێ بکەی.' },
      { speaker: 'Aveen', text: 'Does it actually improve your focus throughout the day?', translation: 'ئەرێ ب راستی ئەو ئاستێ سەرنجدانا تە د درێژاهیا رۆژێ دا باشتر دکەت؟' },
      { speaker: 'Lana', text: 'Yes, it helps me stay calm and more balanced when facing problems.', translation: 'بەلێ، ئەو هاریکاریا من دکەت کو یێ هێمن بم و پتر یێ هاوسەنگ بم دەمێ بەرامبەری ئاریشەیان دبم.' }
    ],
    vocabulary: [
      { word: 'Meditation', translation: 'تێڕامان / مێدیتەیشن' },
      { word: 'Mindful', translation: 'ب ئاگەهی / هۆشیار' },
      { word: 'Breathing', translation: 'بێهن-وەرگرتن' },
      { word: 'Calm', translation: 'ئارام / هێمن' }
    ]
  },
  {
    id: 'b1-90',
    level: 'B1',
    title: 'Future of Housing',
    titleKurdish: 'پاشەڕۆژا ئاڤاهییان (خانوبەران)',
    dialogue: [
      { speaker: 'Architect', text: 'We are designing energy-efficient smart homes with integrated solar storage.', translation: 'ئەم مۆدێلێن خانییێن زیرەک یێن کێم-وزە دیزاین دکەین دگەل کۆمکرنا وزەیا رۆژێ.' },
      { speaker: 'Buyer', text: 'CanThese systems be controlled automatically through a smartphone?', translation: 'ئەرێ ئەڤ سیستەمە دشێن ب شێوازەکێ خۆکار ب رێکا تەلەفۆنەکا زیرەک بهێنە کۆنتڕۆڵکردن؟' },
      { speaker: 'Architect', text: 'Yes, everything from lighting to climate control can be managed remotely.', translation: 'بەلێ، هەمی تشت ژ رۆناهیێ هەتا کۆنتڕۆڵکردنا سەقایی دشێت ژ دویر بهێتە برێڤەبرن.' },
      { speaker: 'Buyer', text: 'Is the initial investment significantly higher than a traditional house?', translation: 'ئەرێ سەرمایەگۆزارییا دەستپێکێ ب شێوەیەکێ بەرچاو بلندترە ژ خانییەکێ ئاسایی؟' },
      { speaker: 'Architect', text: 'While the upfront cost is higher, the long-term energy savings are substantial.', translation: 'هەرچەندە تێچوونا پێشوەخت گرانترە، لێ پاشەکەفتکرنا وزەی د دەمێ درێژ دا گەلەک زۆرە.' }
    ],
    vocabulary: [
      { word: 'Smart homes', translation: 'خانییێن زیرەک' },
      { word: 'Storage', translation: 'کۆمکرن / ئەنبارکردن' },
      { word: 'Upfront', translation: 'پێشوەخت / دەستپێکێ' },
      { word: 'Substantial', translation: 'بەرچاو / زۆر' }
    ]
  },
  {
    id: 'b1-91',
    level: 'B1',
    title: 'Discussing Literature',
    titleKurdish: 'گۆتۆبێژەک ل سەر ئەدەبیاتێ',
    dialogue: [
      { speaker: 'Writer', text: 'Kurdish literature has a rich oral tradition that transitioned into written forms.', translation: 'ئەدەبیاتا کوردی میراتەکێ دەڤۆکی (ئۆرال) یێ دەولەمەند هەبوویە کو گوهۆڕی بۆ شێوازێن نڤیسار.' },
      { speaker: 'Reader', text: 'I am reading more contemporary Kurdish novels lately.', translation: 'ئەز ڤێ دووماهییێ پتر رۆمانێن کوردی یێن سەردەم دخوینم.' },
      { speaker: 'Writer', text: 'Themes of identity and migration are very common in modern works.', translation: 'بابەتێن ناسنامە و مشەختیێ (کۆچبەرایەتی) گەلەک بەربلاڤن د کارێن نوکە دا.' },
      { speaker: 'Reader', text: 'It is important for our stories to be translated into other languages to reach a global audience.', translation: 'یا گرنگە چیرۆکێن مە بۆ زمانێن دی بهێنە وەرگێڕان دا کو بگەهنە جەماوەرەکێ جیهانی.' },
      { speaker: 'Writer', text: 'Translators play a vital role in bridge-building between cultures.', translation: 'وەرگێڕ رۆڵەکێ فەر دگێڕن د ئاڤاکرنا پران دا د ناڤبەرا کەلتووراندا.' }
    ],
    vocabulary: [
      { word: 'Literature', translation: 'ئەدەبیات' },
      { word: 'Contemporary', translation: 'سەردەم / هاوچەرخ' },
      { word: 'Migration', translation: 'مشەختی / کۆچبەرایەتی' },
      { word: 'Translators', translation: 'وەرگێڕەکان' }
    ]
  },
  {
    id: 'b1-92',
    level: 'B1',
    title: 'Health and Nutrition',
    titleKurdish: 'ساخلەمی و خوارن-ناسی (نوتریشن)',
    dialogue: [
      { speaker: 'Dietitian', text: 'A balanced diet should include fruits, vegetables, and lean proteins.', translation: 'سیستەمەکێ خوارنێ یێ هاوسەنگ پێتڤییە فێقی، کەسکاتی، و پرۆتینێن کێم-زەیت د ناڤ دا بن.' },
      { speaker: 'Client', text: 'I struggle with late-night snacking. Any advice?', translation: 'ئەز یێ هەوڵ ددەم خوە ژ خوارنا شەڤان (سناکینگ) بپارێزم. چو شیرەت هەنە؟' },
      { speaker: 'Dietitian', text: 'Try to have a satisfying dinner and stay hydrated throughout the evening.', translation: 'هەوڵ بدە ژیڤەکا (خوارنا نیڤرۆ یان شەڤ) تێرکەر هەبیت و د درێژاهیا تاریاتیێ دا ئاڤێ بخۆ.' },
      { speaker: 'Client', text: 'What about the importance of reducing refined sugar intake?', translation: 'پا گرنگییا کێمکرنا بکارئینانا شەکرێ چییە؟' },
      { speaker: 'Dietitian', text: 'It can significantly lower your risk of chronic diseases and improve energy levels.', translation: 'ئەو دشێت ب شێوەیەکێ بەرچاو مەترسییا نەخۆشییێن درێژخایەن کێم کەت و ئاستێ وزەی بلند کەت.' }
    ],
    vocabulary: [
      { word: 'Diet', translation: 'سیستەمێ خوارنێ / رجیم' },
      { word: 'Satisfying', translation: 'تێرکەر / دلخوەشکەر' },
      { word: 'Refined', translation: 'پاقژکری / چێکری' },
      { word: 'Chronic', translation: 'درێژخایەن' }
    ]
  },
  {
    id: 'b1-93',
    level: 'B1',
    title: 'The Philosophy of Happiness',
    titleKurdish: 'فەلسەفەیا بەختەوەریێ',
    dialogue: [
      { speaker: 'Viyan', text: 'Do you believe happiness is something you find or something you create?', translation: 'ئەرێ تۆ باور دکەی بەختەوەری تشتەکە مرۆڤ دبینیت یان تشتەکە مرۆڤ داهێنانێ (خلقکردن) تێدا دکەت؟' },
      { speaker: 'Alan', text: 'I think it is a combination of gratefulness and finding purpose in daily tasks.', translation: 'ئەز هزردکەم ئەو تێکەڵەکا سوپاسگوزاریێ و دیتنا ئارمانجێ یە د کارێن رۆژانە دا.' },
      { speaker: 'Viyan', text: 'Many people search for it in material possessions, but that is often temporary.', translation: 'گەلەک کەس لێ دگەڕێن د کەلوپەلێن ماددیدا، لێ ئەو زۆر جاران کاتی یە (وەقتی).' },
      { speaker: 'Alan', text: 'True. Meaningful relationships and community are more reliable sources.', translation: 'راستە. پەیوەندییێن ب مەرەم و جڤاك ژێدەرێن باوەڕپێکری ترن.' },
      { speaker: 'Viyan', text: 'Living in the present moment also seems to be a key factor.', translation: 'ژیان د خۆلەکا نوکە دا ژی دیارە فاکتەرەکێ سەرەکی بیت.' }
    ],
    vocabulary: [
      { word: 'Combination', translation: 'تێکەڵ / کۆمەڵە' },
      { word: 'Possessions', translation: 'مۆڵک / کەلوپەل' },
      { word: 'Temporary', translation: 'کاتی / وەقتی' },
      { word: 'Reliable', translation: 'باوەڕپێکری' }
    ]
  },
  {
    id: 'b1-94',
    level: 'B1',
    title: 'Urban Planning and Green Spaces',
    titleKurdish: 'پلاندانانا باژێڕی و جهێن کەسک',
    dialogue: [
      { speaker: 'Planner', text: 'We are prioritizing the development of parks and walking paths in the new zone.', translation: 'ئەم گرنگیێ ددەنە گەشەپێدانا پارکان و رێڕەوێن پیاسێ د ناوچەیا نوو دا.' },
      { speaker: 'Citizen', text: 'That will improve the quality of life for families living in apartments.', translation: 'ئەو دێ کوالیتییا ژیانێ بۆ وان خێزانێن ل شوقەیان دژین باشتر کەت.' },
      { speaker: 'Planner', text: 'Green spaces help mitigate the urban heat island effect.', translation: 'جهێن کەسک هاریکاری دکەن د کێمکرنا کارتێکرنا گەرمبوونا باژێڕی دا.' },
      { speaker: 'Citizen', text: 'Will there be sufficient public transport connections to these parks?', translation: 'ئەرێ دێ پەیوەندییێن ڤەگۆهاستنا گشتی یێن تەواو هەبن بۆ ڤان پارکان؟' },
      { speaker: 'Planner', text: 'Yes, we are integrating bike lanes and bus routes into the design.', translation: 'بەلێ، ئەم یێن رێڕەوێن پاسکیلان و رێکا پاسان د ناڤ دیزاینا خۆ دا جێگیر دکەین.' }
    ],
    vocabulary: [
      { word: 'Mitigate', translation: 'کێمکردن / سۆککردن' },
      { word: 'Sufficient', translation: 'تەواو / پێتڤی' },
      { word: 'Integrating', translation: 'تێکەڵکردن / جێگیرکردن' },
      { word: 'Lanes', translation: 'رێڕەو / جادە یێن بچووک' }
    ]
  },
  {
    id: 'b1-95',
    level: 'B1',
    title: 'Ethical Marketing',
    titleKurdish: 'مارکێتینگا ئەخلاقی',
    dialogue: [
      { speaker: 'Specialist', text: 'Companies are facing pressure to be more transparent about their supply chains.', translation: 'کۆمپانیا فشار ل سەرە دا کو زۆرتر د رۆهن و ئاشکرا بن ل سەر زنجیرەیا دابینکرنا خۆ.' },
      { speaker: 'Consumer', text: 'I always look for labels that certify fair labor and sustainable sourcing.', translation: 'ئەز هەردەم ل مارکان (لەیبڵان) دگەڕێم یێن کو پشتراستییا کار و دابینکرنا بەردەوام دکەن.' },
      { speaker: 'Specialist', text: 'Authentic marketing is about honesty and building long-term trust.', translation: 'مارکێتینگا راستەقینە دەربارەی دەسپاکی و ئاڤاکرنا باوەریێ یە بۆ دەمێ درێژ.' },
      { speaker: 'Consumer', text: 'Some brands practice greenwashing, which is very misleading.', translation: 'هندەک ناڤ و نیشان (براند) "گرین-واشینگ" (فێڵکرنا ژینگەیی) دکەن، کو ئەڤە زۆر خەڵەتکەرە.' },
      { speaker: 'Specialist', text: 'Educated consumers can see through superficial claims.', translation: 'بەکاربەرێن هوشیار دشێن د ناڤ وان داخوازێن بێ-بنەما دا راستیێ ببێنین.' }
    ],
    vocabulary: [
      { word: 'Transparent', translation: 'رۆهن / شەفاف' },
      { word: 'Certify', translation: 'پشتراستکردن / بڕوانامەدان' },
      { word: 'Misleading', translation: 'خەڵەتکەر' },
      { word: 'Superficial', translation: 'سەرەکی / نە-کویر' }
    ]
  },
  {
    id: 'b1-96',
    level: 'B1',
    title: 'The Future of AI and Jobs',
    titleKurdish: 'پاشەڕۆژا ژیرییا دەستکرد و کاران',
    dialogue: [
      { speaker: 'Economist', text: 'AI will likely automate routine tasks, but create new roles in management.', translation: 'ژیرییا دەستکرد ب گۆمان کارێن رۆتینی دێ بکەتە خۆکار، لێ دێ کارێن نوو د بوارێ برێڤەبرنێ دا درۆست کەت.' },
      { speaker: 'Worker', text: 'I am taking courses in data analysis to stay relevant in the job market.', translation: 'ئەز یێ خولێن (کۆرسێن) شیکارکرنا داتایان وەردگرم دا کو د بازاڕێ کاری دا ب مۆیی (ب پێویست) بمینم.' },
      { speaker: 'Economist', text: 'Soft skills like empathy and creativity will become even more valuable.', translation: 'بەهرەیێن نەرم وەک هەڤسۆزی و داهێنان دێ هێشتا ب بهاتر لێ هێن.' },
      { speaker: 'Worker', text: 'Will governments provide retraining programs for displaced workers?', translation: 'ئەرێ حکومەت دێ پڕۆگرامێن راهێنانا دووبارە دابین کەن بۆ وان کارمەندێن کارێن خۆ ژ دەست ددەن؟' },
      { speaker: 'Economist', text: 'Public policy needs to evolve quickly to address these transitions.', translation: 'سیاسەتا گشتی پێتڤییە ب زوویی پێش بکەڤیت دا کو سەردەریێ دگەل ڤان گوهۆڕینان بکەت.' }
    ],
    vocabulary: [
      { word: 'Routine', translation: 'رۆتینی / دووبارە' },
      { word: 'Relevant', translation: 'ب مۆیی / گونجای' },
      { word: 'Valuable', translation: 'ب بها' },
      { word: 'Transitions', translation: 'گوهۆڕینەکان' }
    ]
  },
  {
    id: 'b1-97',
    level: 'B1',
    title: 'Modern Kurdish Cuisine',
    titleKurdish: 'خوارنێن کوردی یێن سەردەم',
    dialogue: [
      { speaker: 'Chef', text: 'I am incorporating traditional Kurdish ingredients into modern fusion dishes.', translation: 'ئەز پێکهاتەیێن کەلتووری یێن کوردی دگەل خوارنێن تێکەڵ (فیوژن) یێن سەردەم کۆم دکەم.' },
      { speaker: 'Foodie', text: 'The presentation of your Dolma is very artistic and unique.', translation: 'شێوازێ پێشکێشکرنا (پریزێنتەیشنا) "دۆلمە"یا تە گەلەک هونەری و تایبەتە.' },
      { speaker: 'Chef', text: 'I use local herbs and spices to preserve the authentic flavors.', translation: 'ئەز گیایێن ناوخۆیی و بەهاراتان بکار دئینم دا کو تاما راستەقینە بپارێزم.' },
      { speaker: 'Foodie', text: 'It is great to see our culinary heritage evolving in such creative ways.', translation: 'زۆر باشە مرۆڤ میراتێ مە یێ خوارن-چێکرنێ ببینیت ب ڤی شێوازێ داهێنەرانە پێش بکەڤیت.' },
      { speaker: 'Chef', text: 'Food is a global bridge that connects us all.', translation: 'خوارن پرەکا جیهانی یە کو مە هەموویان پێکڤە گرێ ددەت.' }
    ],
    vocabulary: [
      { word: 'Ingredients', translation: 'پێکهاتەکان' },
      { word: 'Artistic', translation: 'هونەری' },
      { word: 'Culinary', translation: 'خوارن-چێکرنێ / چێشتخانەیی' },
      { word: 'Fusion', translation: 'تێکەڵ' }
    ]
  },
  {
    id: 'b1-98',
    level: 'B1',
    title: 'Protecting Wild Animals',
    titleKurdish: 'پاراستنا گیانەوەرێن کێڤی',
    dialogue: [
      { speaker: 'Conservationist', text: 'The leopard populations in our region are slowly recovering due to protection efforts.', translation: 'ژمارەیا پلنگان د ناوچەیا مە دا رۆژ ب رۆژ یا پتر دبیت ژ بەر هەوڵێن پاراستنێ.' },
      { speaker: 'Farmer', text: 'How can we prevent conflicts between wildlife and local communities?', translation: 'ئەم چەوا دشێین رێگریێ ل پێکدادانان بکەین د ناڤبەرا گیانەوەرێن کێڤی و خەڵکێ دەڤەرێ دا؟' },
      { speaker: 'Conservationist', text: 'Education and compensation programs for livestock loss are being implemented.', translation: 'پڕۆگرامێن هۆشیاری و قەرەبووکردنەوەی بۆ ژ دەستدانا تەرەش و کەوالی (ئاژەڵی) یێن دهێنە جێبەجێکرن.' },
      { speaker: 'Farmer', text: 'Preserving natural habitats is also essential for their survival.', translation: 'پاراستنا ژینگەیێن سرۆشتی ژی گەلەک فەرە بۆ مان و بەردەوامبوونا ژیانا وان.' },
      { speaker: 'Conservationist', text: 'Biodiversity is key to a healthy ecosystem for all of us.', translation: 'جۆراوجۆرییا بایۆلۆژی سەرەکی یە بۆ سیستەمەکێ ژینگەیی یێ ساخلەم بۆ مە هەموویان.' }
    ],
    vocabulary: [
      { word: 'Recovering', translation: 'باشبوونی / پتربوونی' },
      { word: 'Conflicts', translation: 'پێکدادان / کێشەکان' },
      { word: 'Wildlife', translation: 'ژیانا کێڤی' },
      { word: 'Habitats', translation: 'ژینگەیێن ژیانێ' }
    ]
  },
  {
    id: 'b1-99',
    level: 'B1',
    title: 'The Ethics of Genetic Engineering',
    titleKurdish: 'ئەخلاقییا ئەندازیارییا جیناتان',
    dialogue: [
      { speaker: 'Bioethicist', text: 'CRISPR technology allows us to edit DNA with high precision, but it raises serious ethical questions.', translation: 'تەکنەلۆژییا CRISPR رێ مە ددەت "DNA" ب ووردیەکا بلند دەستکاری بکەین، لێ گەلەک پرسیارێن ئەخلاقی یێن دژوار درۆست دکەت.' },
      { speaker: 'Researcher', text: 'It could potentially cure genetic diseases before a child is even born.', translation: 'ئەو دشێت ب شێوەیەکێ گۆمانلێکری نەخۆشییێن جیناتی چارەسەر بکەت بەری زارۆک ژ دایك ببیت.' },
      { speaker: 'Bioethicist', text: 'Where do we draw the line between therapy and human enhancement?', translation: 'ئەم دێ کیش سنووری دانین د ناڤبەرا چارەسەریێ و "باشترکردنا مرۆڤی" (ئینهانسمنت) دا؟' },
      { speaker: 'Researcher', text: 'Transparent regulations and global consensus are strictly necessary.', translation: 'رێنماییێن رۆهن و رێکەفتنا جیهانی ب توندی پێتڤینە.' },
      { speaker: 'Bioethicist', text: 'We must consider the long-term impact on the human gene pool.', translation: 'پێتڤییە ئەم ل کارتێکرنا دەم-درێژ تەماشە بکەین ل سەر کۆمە جینا مرۆڤی.' }
    ],
    vocabulary: [
      { word: 'Genetics', translation: 'جینات / بۆماوەیی' },
      { word: 'Precision', translation: 'ووردی / دەقیقی' },
      { word: 'Therapy', translation: 'چارەسەری' },
      { word: 'Consensus', translation: 'رێکەفتن / هاوڕایی' }
    ]
  },
  {
    id: 'b1-100',
    level: 'B1',
    title: 'The Philosophy of Time',
    titleKurdish: 'فەلسەفەیا دەمی',
    dialogue: [
      { speaker: 'Scholar', text: 'Some philosophers believe time is an illusion, while others see it as a linear progression.', translation: 'هندەک فەلسەفەزان باور دکەن دەم "خەیال"ـە (ئیلوژن)، د دەمەکێ دا یێن دی وەک پێشکێفتنەکا هەێلی دبینن.' },
      { speaker: 'Student', text: 'The way we perceive time changes based on our emotions and activity.', translation: 'ئەو شێوازێ ئەم هەست ب دەمی دکەین دگۆهۆڕیت ل سەر بنیاتێ هەست و کارێن مە.' },
      { speaker: 'Scholar', text: 'Einstein proved that time is relative and affected by gravity and speed.', translation: 'ئاینیشتاین سەلماند کو دەم تشتەکێ رێژەیی یە و کارتێکرن ل سەرە ژ لایێ کێشکردن و خێراییێ ڤە.' },
      { speaker: 'Student', text: 'If time is relative, does the concepts of "past" and "future" actually exist?', translation: 'ئەگەر دەم رێژەیی بیت، ئەرێ تێگەهێن "رابردوو" و "پاشەڕۆژ" ب راستی د هەبن؟' },
      { speaker: 'Scholar', text: 'That is one of the greatest mysteries of physics and philosophy.', translation: 'ئەو یەک ژ مەزنترین نهێنییێن فیزیک و فەلسەفەیێ یە.' }
    ],
    vocabulary: [
      { word: 'Illusion', translation: 'وەهم / خەیال' },
      { word: 'Linear', translation: 'هەێلی / رێک' },
      { word: 'Relative', translation: 'رێژەیی' },
      { word: 'Mysteries', translation: 'نهێنییەکان' }
    ]
  },
  // B2 Level
  {
    id: 'b2-1',
    level: 'B2',
    title: 'Advanced Business Negotiation',
    titleKurdish: 'گۆفتۆگۆیا بازرگانی یا پێشکەفتی',
    dialogue: [
      { speaker: 'CEO', text: 'We are looking for a strategic partner who can help us scale our logistics operations.', translation: 'ئەم ل هەڤپشکەکێ ستراتیژی دگەڕێین کو بشێت هاریکارییا مە بکەت د بەرفرهەکرنا کارێن لۆجستی دا.' },
      { speaker: 'Partner', text: 'Our firm has extensive experience in regional distribution networks.', translation: 'کۆمپانیا مە ئەزموونەکا بەرفرهە یا د تۆڕێن بەلاڤکرنا هەرێمی دا هەری.' },
      { speaker: 'CEO', text: 'What kind of revenue sharing model are you proposing?', translation: 'تو چ جۆرە مۆدێلەکێ پشکا داهاتی پێشنیازا دکەی؟' },
      { speaker: 'Partner', text: 'We suggest a tiered structure based on performance milestones.', translation: 'ئەم پێشنیازا پێکهاتەیەکا پلەبەندی دکەین ل سەر بنەمایێ هەنگاڤێن سەرکەفتنا کارامەییێ.' },
      { speaker: 'CEO', text: 'That seems equitable. Let’s draft a memorandum of understanding.', translation: 'ئەڤە ب دادپەروەری دیارە. با رەنوسی (درێفت) یاداشتنامەیەکا لێکتێگەهشتنێ ئامادە بکەین.' }
    ],
    vocabulary: [
      { word: 'Logistics', translation: 'لۆجستی / گواستنەڤە و دابینکردن' },
      { word: 'Extensive', translation: 'بەرفرهە' },
      { word: 'Revenue', translation: 'داهات' },
      { word: 'Equitable', translation: 'دادپەروەر / یەکسان' }
    ]
  },
  {
    id: 'b2-2',
    level: 'B2',
    title: 'Public Speaking Tips',
    titleKurdish: 'شیرەتێن دەربارەی ئاخفتنا گشتی (پوپلیک سپیکینگ)',
    dialogue: [
      { speaker: 'Coach', text: 'To master public speaking, you must first conquer your fear of judgment.', translation: 'بۆ شارەزابوون د ئاخفتنا گشتی دا، پێتڤییە بەری هەر تشتەکی تو ترسێ ژ بڕیاردانا خەڵکی بشکێنی.' },
      { speaker: 'Trainee', text: 'I always get anxious and my mind goes blank when I see a large crowd.', translation: 'ئەز هەردەم تووشی دڵەڕاوکێیێ دبم و مێشکێ من ڤالا دبیت دەمێ ئەز جەماوەرەکێ مەزن دبینم.' },
      { speaker: 'Coach', text: 'Practice focused breathing and visualize yourself succeeding. Preparation is 90% of the battle.', translation: 'مەشقا بێهن-هەڵکێشانا ب سەرنج بکە و وێنەیێ سەرکەفتنا خوە د مێشکێ خوە دا بکێشە. بەرهەڤی ٩٠٪ یا سەرکەفتنێ یە.' },
      { speaker: 'Trainee', text: 'How should I structure my presentation to keep the audience engaged?', translation: 'ئەز چەوا پێشکێشکرنا (پریزێنتەیشنا) خوە رێک بێخم دا کو جەماوەر یێ ب مەرەق بمینیت؟' },
      { speaker: 'Coach', text: 'Start with a compelling hook, use storytelling, and end with a clear call to action.', translation: 'ب بابەتەکێ سەرنجراکێش دەستپێ بکە، چیرۆکان بکاربینە، و ب داخوازەکا رۆهن بۆ کارکرنێ (کۆڵ تو ئاکشن) ب دوماهی بینە.' }
    ],
    vocabulary: [
      { word: 'Conquer', translation: 'سەرکەفتن ب سەر دا / شکاندن' },
      { word: 'Anxious', translation: 'دڵەڕاوکێ / نیگەران' },
      { word: 'Compelling', translation: 'سەرنجراکێش / ب هێز' },
      { word: 'Engaged', translation: 'بەژدار / ب مەرەق' }
    ]
  },
  {
    id: 'b2-3',
    level: 'B2',
    title: 'Financial Investments',
    titleKurdish: 'وەبەرهێنانێن دارایی',
    dialogue: [
      { speaker: 'Broker', text: 'Diversifying your portfolio is essential to mitigate potential risks in a volatile market.', translation: 'جۆراوجۆرکردنا پۆرتفۆلیۆیا تە تشتەکێ فەرە بۆ کێمکرنا مەترسییێن گۆمانلێکری د بازارەکێ نە-جێگێر دا.' },
      { speaker: 'Investor', text: 'What do you recommend for a long-term strategy involving sustainable funds?', translation: 'تۆ پێشنیازا چ دکەی بۆ ستراتیژییەتەکا دەم-درێژ کو تێدا سندووقێن بەردەوام (سەستەینەبڵ فەندز) هەبن؟' },
      { speaker: 'Broker', text: 'Index funds focusing on green energy and technology are currently performing very well.', translation: 'فەندێن ئیندێکسی یێن کو گرنگیێ ددەنە وزەیا کەسك و تەکنەلۆژیایێ نوکە ئەنجامێن زۆر باش نیشان ددەن.' },
      { speaker: 'Investor', text: 'I am concerned about the inflation rate eroding my savings.', translation: 'ئەز نیگەرانم ژ رێژەیا هەڵاوسانێ (ئینفلەیشن) کو پاشەکەفتێن من کێم بکەت.' },
      { speaker: 'Broker', text: 'Investing in assets that appreciate over time is the best hedge against inflation.', translation: 'وەبەرهێنان د وان مۆڵکان دا یێن کو بهایێ وان ب دەمی بلند دبیت، باشترین بەرگری یە دژی هەڵاوسانێ.' }
    ],
    vocabulary: [
      { word: 'Diversifying', translation: 'جۆراوجۆرکردن / تێکەڵکردن' },
      { word: 'Portfolio', translation: 'جانتاکێ وەبەرهێنانێ / پۆرتفۆلیۆ' },
      { word: 'Inflation', translation: 'هەڵاوسان / گرانبوونی نرخ' },
      { word: 'Hedge', translation: 'پاراستن / بەرگری' }
    ]
  },
  {
    id: 'b2-4',
    level: 'B2',
    title: 'Cybersecurity Awareness',
    titleKurdish: 'هۆشیاریا ئاسایشا ئەلیکترۆنی (سایبەر-سیکیوریتی)',
    dialogue: [
      { speaker: 'IT Tech', text: 'Phishing attacks are becoming increasingly sophisticated, targeting unsuspecting employees.', translation: 'هێرشێن "فیشینگ" (دزینا زانیارییان) رۆژ ب رۆژ ئاڵۆزتر دبن، و کارمەندێن بێ-ئاگەهـ دکەنە ئارمانج.' },
      { speaker: 'Staff', text: 'How can we distinguish between a legitimate email and a fraudulent one?', translation: 'ئەم چەوا دشێین جوداهیێ بکەین د ناڤبەرا ئیمەیلەکێ درۆست و ئێکێ یێ تەزویر دا؟' },
      { speaker: 'IT Tech', text: 'Check the sender\'s address carefully and avoid clicking on suspicious links or attachments.', translation: 'ناڤونیشانێ ناردەری ب ووردی بپشکنینە و خوە دویر بگرە ژ کلیک-کردنا ل سەر لینک یان پەیوەندییێن گۆمانلێکری.' },
      { speaker: 'Staff', text: 'Is two-factor authentication mandatory for all company accounts now?', translation: 'ئەرێ پشتراستکرنا دوو-قۆناغی (TFA) نوکە بۆ هەمی هەژمارێن کۆمپانیایێ یا فەرە؟' },
      { speaker: 'IT Tech', text: 'Yes, it provides an additional layer of security that is critical for data protection.', translation: 'بەلێ، ئەو تەبەقەکا زێدە یا ئاسایشێ دابین دکەت کو بۆ پاراستنا داتایان گەلەک یا گرنگە.' }
    ],
    vocabulary: [
      { word: 'Sophisticated', translation: 'ئاڵۆز / پێشکەفتی' },
      { word: 'Legitimate', translation: 'یاسایی / درۆست' },
      { word: 'Suspicious', translation: 'گۆمانلێکری' },
      { word: 'Authentication', translation: 'پشتراستکردن / سەلماندن' }
    ]
  },
  {
    id: 'b2-5',
    level: 'B2',
    title: 'Urban Architecture and Heritage',
    titleKurdish: 'تەلارسازییا باژێڕی و میرات',
    dialogue: [
      { speaker: 'Architect', text: 'The challenge is to integrate modern infrastructure without compromising the city\'s historic integrity.', translation: 'ئاستەنگ ئەوە کو ژێرخانەکا سەردەم جێگیر بکەین بێی کو زیان ب رەسەنایەتییا دیرۆکی یا باژێڕی بگۆهۆڕین.' },
      { speaker: 'Historian', text: 'Preserving these ancient facades is crucial for maintaining our cultural identity.', translation: 'پاراستنا ڤان بەرەبەرێن (فاسادێن) کەڤن گەلەک یا فەرە بۆ پاراستنا ناسنامەیا مە یا کەلتووری.' },
      { speaker: 'Architect', text: 'We are using "adaptive reuse" to turn old warehouses into vibrant community spaces.', translation: 'ئەم شێوازێ "دووبارە بکارئینانا گونجای" بکار دئینن دا کو ئەنبارێن کەڤن بگۆهۆڕین بۆ جهێن جڤاکی یێن ب جۆش و خرۆش.' },
      { speaker: 'Historian', text: 'That approach revitalizes the neighborhood while honoring its architectural past.', translation: 'ئەو شێوازە گەڕەکی نوو دکەتەڤە د دەمەکێ دا کو رێزێ ل رابردوویێ وێ یێ تەلارسازی ددەت.' },
      { speaker: 'Architect', text: 'It is a delicate balance between tradition and progress.', translation: 'ئەو هاوسەنگییەکا ناسکە د ناڤبەرا داب و نەریت و پێشکێفتنێ دا.' }
    ],
    vocabulary: [
      { word: 'Compromising', translation: 'زیان گەهاندن / تێکدان' },
      { word: 'Integrity', translation: 'رەسەنایەتی / درۆستی' },
      { word: 'Warehouses', translation: 'ئەنبارەکان' },
      { word: 'Revitalizes', translation: 'گیان پێبەخشینەووە / نووکردنەڤە' }
    ]
  },
  {
    id: 'b2-6',
    level: 'B2',
    title: 'The Future of Biotechnology',
    titleKurdish: 'پاشەڕۆژا بایۆتەکنەلۆژیایێ',
    dialogue: [
      { speaker: 'Scientist', text: 'Advances in gene editing are paving the way for personalized medicine.', translation: 'پێشکێفتنێن د بوارێ دەستکاریکردنا جیناتان دا رێکێ خۆش دکەن بۆ دەرمانێن تایبەت بۆ هەر کەسەکی (پێرسۆنالایزد).' },
      { speaker: 'Ethicist', text: 'However, manipulating the human genome raises significant moral dilemmas.', translation: 'لێ، دەستکاریکردنا جینۆمێ مرۆڤی گومان و ئاریشەیێن ئەخلاقی یێن مەزن درۆست دکەت.' },
      { speaker: 'Scientist', text: 'The potential to eradicate hereditary diseases is a goal worth pursuing.', translation: 'ئەو توانایا ژناڤبرنا نەخۆشییێن بۆماوەیی ئارمانجەکە کو مرۆڤ کار ل سەر بکەت.' },
      { speaker: 'Ethicist', text: 'We must ensure equitable access to these technologies to avoid a genetic divide.', translation: 'پێتڤییە ئەم ئایندەیەکی دابین بکەین کو هەموو کەس ب شێوەیەکێ یەکسان بگەهنە ڤان تەکنەلۆژیایان دا کو جوداهییا جیناتی پەیدا نەبیت.' },
      { speaker: 'Scientist', text: 'Rigorous regulation and transparent debate are essential.', translation: 'رێنماییێن توند و دەمێن گۆفتۆگۆیا رۆهن گەلەک فەرن.' }
    ],
    vocabulary: [
      { word: 'Genome', translation: 'جینۆم / کۆمەلا جیناتان' },
      { word: 'Eradicate', translation: 'بنبرکردن / ژناڤبرن' },
      { word: 'Equitable', translation: 'یەکسان / ب دادپەروەری' },
      { word: 'Hereditary', translation: 'بۆماوەیی' }
    ]
  },
  {
    id: 'b2-7',
    level: 'B2',
    title: 'Mastering Emotional Intelligence',
    titleKurdish: 'شارەزابوون د ژیرییا هەستی دا (EQ)',
    dialogue: [
      { speaker: 'Psychologist', text: 'Emotional intelligence is often a better predictor of success than IQ.', translation: 'ژیرییا هەستی (ئی-کیو) زۆربەیا جاران نیشاندەرەکێ باشترە بۆ سەرکەفتنێ ژ ژیرییا مێشکی (ئای-کیو).' },
      { speaker: 'Student', text: 'How can one actively improve self-awareness and empathy?', translation: 'مرۆڤ چەوا دشێت ب شێوازەکێ چالاکانە ئاستێ ئاگەهدارییا خوە و هەڤسۆزییا خوە باشتر کەت؟' },
      { speaker: 'Psychologist', text: 'Practice active listening and try to perceive situations from multiple perspectives.', translation: 'مەشقا گوهداریکردنا چالاکانە بکە و هەوڵ بدە بابەتان ژ چەندین لایەنێن جودا ببینی.' },
      { speaker: 'Student', text: 'It seems crucial for resolving conflicts in a professional environment.', translation: 'دیارە ئەڤە گەلەک فەر بێت بۆ چارەسەرکردنا کێشەیان د ژینگەیەکێ پیشەیی دا.' },
      { speaker: 'Psychologist', text: 'Indeed, managing your own emotions allows you to respond rationally rather than impulsively.', translation: 'راستە، کۆنتڕۆڵکردنا هەستێن تە رێ ددەتە تە ب شێوازەکێ عەقڵانی بدەیە جواب نەک ب پەلەکردن (هەستیانە).' }
    ],
    vocabulary: [
      { word: 'Predictor', translation: 'پێشبینیکەر / نیشاندەر' },
      { word: 'Perspectives', translation: 'دیدەگا / لایەنەکان' },
      { word: 'Rationally', translation: 'ژیرانە / ب عەقڵانە' },
      { word: 'Impulsively', translation: 'بێ-هزرکردن / هەستیانە' }
    ]
  },
  {
    id: 'b2-8',
    level: 'B2',
    title: 'Corporate Social Responsibility',
    titleKurdish: 'بەرپرسیارەتیا کۆمەڵایەتی یا کۆمپانیان (CSR)',
    dialogue: [
      { speaker: 'CEO', text: 'We need to align our business goals with community welfare through CSR initiatives.', translation: 'پێتڤییە ئەم ئارمانجێن کارێ خوە دگەل باشبوونا جڤاکی رێک بێخین ب رێکا پڕۆژەیێن بەرپرسیارەتیا کۆمەڵایەتی.' },
      { speaker: 'Director', text: 'Investors are increasingly looking at ESG metrics before committing capital.', translation: 'وەبەرهێنەر رۆژ ب رۆژ پتر ل پێوەرێن ژینگەیی و جڤاکی تەماشە دکەن بەری کو سەرمایێ خوە مەزێژن.' },
      { speaker: 'CEO', text: 'Reducing our carbon footprint and supporting local education are our top priorities.', translation: 'کێمکرنا کارتێکرنا مە یا کاربۆنی و پشتەڤانیکردنا پەروەردەیا ناوخۆیی ل سەری رێزبەندییا کارێن مەنە.' },
      { speaker: 'Director', text: 'It enhances our brand reputation and attracts socially conscious talent.', translation: 'ئەڤە ناڤودەنگییا مارکا (براندا) مە باشتر دکەت و کەسێن خودان بەهرە و هوشیار راکێش دکەت.' },
      { speaker: 'CEO', text: 'Success is not just about profit; it is about positive impact.', translation: 'سەرکەفتن تنێ قازانج نینە؛ بەڵکو کارتێکرنا پۆزەتیڤە.' }
    ],
    vocabulary: [
      { word: 'Welfare', translation: 'باشی / خۆشگوزەرانی' },
      { word: 'Metrics', translation: 'پێوەرەکان' },
      { word: 'Conscious', translation: 'هوشار / ب ئاگەهـ' },
      { word: 'Initiatives', translation: 'دەسپێشخەری / پڕۆژەکان' }
    ]
  },
  {
    id: 'b2-9',
    level: 'B2',
    title: 'The Philosophy of Science',
    titleKurdish: 'فەلسەفەیا زانستی',
    dialogue: [
      { speaker: 'Professor', text: 'The scientific method relies on the principle of falsifiability as proposed by Karl Popper.', translation: 'رێکارێ زانستی پشت ب پرەنسیپێ "ئەگەرێ خەڵەت دەرکەفتنا هزری" (falsifiability) دبەستیت وەک کارڵ پۆپەر پێشنیار کری.' },
      { speaker: 'Student', text: 'So, a theory is only scientific if it can be proven wrong?', translation: 'ئانکو، تیۆرییەک تنێ دەمێ زانستی یە ئەگەر ئەگەرێ هەبیت کو خەڵەت دەربکەڤیت؟' },
      { speaker: 'Professor', text: 'Precisely. If a hypothesis cannot be tested or refuted, it falls outside the realm of science.', translation: 'ب درۆستی. ئەگەر پێشبینیەک (هایپۆتێسس) نەهێتە تاقیکردن یان رەتکردن، ئەو دکەڤیتە دەرڤەی بوارێ زانستی.' },
      { speaker: 'Student', text: 'How do paradigm shifts change our understanding of scientific truths?', translation: 'پا چەوا "گوهۆڕینێن بنەڕەتی" (پارادایم شیفتس) تێگەهشتنا مە بۆ راستییێن زانستی دگوهۆڕن؟' },
      { speaker: 'Professor', text: 'As Thomas Kuhn explained, new discoveries often lead to entire new frameworks that replace old ones.', translation: 'وەک تۆماس کون روون کری، دیتنێن نوو زۆر جاران دبنە ئەگەرێ پەیدابوونا فریمورکێن نوو یێن کو جهێ یێن کەڤن دگرن.' }
    ],
    vocabulary: [
      { word: 'Refuted', translation: 'رەتکردن / سەلماندنا خەڵەتیێ' },
      { word: 'Hypothesis', translation: 'پێشبینی / هایپۆتێسیس' },
      { word: 'Paradigm', translation: 'نموونە / فریمورکێ بنەڕەتی' },
      { word: 'Falsifiability', translation: 'توانایا سەلماندنا خەڵەتیێ' }
    ]
  },
  {
    id: 'b2-10',
    level: 'B2',
    title: 'Global Supply Chain Management',
    titleKurdish: 'برێڤەبرنا زنجیرەیا دابینکرنا جیهانی',
    dialogue: [
      { speaker: 'Logistics Manager', text: 'The recent disruptions have highlighted the fragility of just-in-time manufacturing.', translation: 'گرێفتێن ئەڤێ دووماهییێ لاوازییا سیستەمێ Berرهەمهێنانا "دەمژمێر سێفر" (جست ئین تایم) دیار کر.' },
      { speaker: 'Analyst', text: 'Companies are now shifting toward "just-in-case" inventory to build resilience.', translation: 'کۆمپانیا نوکە کار دکەن بەرەڤ ئەنبارکرنا "بۆ هەر ئەگەرەکی" دا کو توانایا بەرگریێ ئاڤا بکەن.' },
      { speaker: 'Logistics Manager', text: 'However, this increases storage costs and ties up working capital.', translation: 'لێ، ئەڤە تێچوونا ئەنبارکردنێ بلند دکەت و سەرمایێ کارکرنێ دبەستیت.' },
      { speaker: 'Analyst', text: 'We need to leverage AI to predict demand cycles more accurately.', translation: 'پێتڤییە ئەم ژیرییا دەستکرد بکاربینن دا کو خولێن داخوازیێ ب درۆستی پێشبینی بکەین.' },
      { speaker: 'Logistics Manager', text: 'Diversifying suppliers across different geographic regions is also essential.', translation: 'جۆراوجۆرکردنا دابینکەران ل ناڤچەیێن جودا یێن جیهانێ ژی فەرە.' }
    ],
    vocabulary: [
      { word: 'Disruptions', translation: 'ئاریشە / بڕانەکان' },
      { word: 'Resilience', translation: 'بەرگری / خۆڕاگری' },
      { word: 'Inventory', translation: 'لیستا مەوادا ئەنبارکری' },
      { word: 'Leverage', translation: 'بکارئینان / مفا وەرگرتن' }
    ]
  },
  {
    id: 'b2-11',
    level: 'B2',
    title: 'Sustainable Tourism',
    titleKurdish: 'گەشتیارییا بەردەوام (ژینگەیی)',
    dialogue: [
      { speaker: 'Operator', text: 'Ecotourism should benefit local communities without exploiting their resources.', translation: 'گەشتیارییا ژینگەیی پێتڤییە مفا هەبیت بۆ جڤاکێن ناوخۆیی بێی کو مفایێ خراپ ژ ژێدەرێن وان بهێتە وەرگرتن (ئیستغلال).' },
      { speaker: 'Eco-tourist', text: 'I am looking for destinations that minimize their carbon footprint and promote conservation.', translation: 'ئەز ل وان جهان دگەڕێم یێن کو کارتێکرنا خوە یا کاربۆنی کێم دکەن و پشتەڤانییا پاراستنا سرۆشتی دکەن.' },
      { speaker: 'Operator', text: 'We offer guided tours that educate visitors about the local flora and fauna.', translation: 'ئەم گەشتێن رێبەریکری دابین دکەن کو گەشتیاران فێری گژوگیا و گیانەوەرێن ناوخۆیی دکەن.' },
      { speaker: 'Eco-tourist', text: 'Mass tourism often leads to habitat destruction and cultural erosion.', translation: 'گەشتیارییا مەزن زۆر جاران دبیتە ئەگەرێ ژناڤچوونا ژینگەیێن ژیانێ و تێکچوونا کەلتووری.' },
      { speaker: 'Operator', text: 'Limiting visitor numbers in sensitive areas is key to long-term sustainability.', translation: 'سنووردارکرنا ژمارەیا گەشتیاران ل ناڤچەیێن هەستیار تشتێ سەرەکی یە بۆ بەردەوامییا دەم-درێژ.' }
    ],
    vocabulary: [
      { word: 'Exploiting', translation: 'مفا وەرگرتنا خراپ / ئیستغلال' },
      { word: 'Conservation', translation: 'پاراستن / مانەوە' },
      { word: 'Erosion', translation: 'داخوران / تێکچوون' },
      { word: 'Flora and fauna', translation: 'گژوگیا و گیانەوەرەکان' }
    ]
  },
  {
    id: 'b2-12',
    level: 'B2',
    title: 'Artificial Intelligence Ethics',
    titleKurdish: 'ئەخلاقییا ژیرییا دەستکرد',
    dialogue: [
      { speaker: 'Researcher', text: 'Algorithmic bias is a significant concern when training AI on historical data.', translation: 'لایەنگیرییا سیستەمی (ئەلگۆریتمال بایاس) ئاریشەیەکا مەزنە دەمێ راهێنان ب ژیرییا دەستکرد دهێتە کرن ل سەر داتایێن کۆن.' },
      { speaker: 'Ethicist', text: 'It can perpetuate existing social inequalities if not carefully audited.', translation: 'ئەو دشێت جوداهیێن جڤاکی یێن هەبوویی بەردەوام کەت ئەگەر ب ووردی نەهێتە پشکنین.' },
      { speaker: 'Researcher', text: 'We are implementing transparency measures to explain how decisions are reached.', translation: 'ئەم رێکارێن رۆهن و ئاشکرا پەیڕەو دکەن دا کو روون بکەینەڤە کا چەوا بڕیار دهێنە وەرگرتن.' },
      { speaker: 'Ethicist', text: 'Autonomous weapons systems also raise profound legal and moral questions.', translation: 'سیستەمێن چەکێن خۆکار ژی پرسیارێن یاسایی و ئەخلاقی یێن کویر درۆست دکەن.' },
      { speaker: 'Researcher', text: 'The goal is to ensure AI remains human-centric and beneficial to all.', translation: 'ئارمانج ئەوە کو پشتراست بین ژ وێ چەندێ کو AI هەر مرۆڤ-سەنتەر و ب مفا بمینیت بۆ هەموو کەسان.' }
    ],
    vocabulary: [
      { word: 'Bias', translation: 'لایەنگیری / نە-دادپەروەری' },
      { word: 'Perpetuate', translation: 'بەردەوامکردن / مانەوە' },
      { word: 'Audited', translation: 'پشکنین / وردبینی' },
      { word: 'Human-centric', translation: 'مرۆڤ-سەنتەر' }
    ]
  },
  {
    id: 'b2-13',
    level: 'B2',
    title: 'Negotiation Strategies at Work',
    titleKurdish: 'ستراتیژییەتێن دانوستاندنێ ل سەر کاری',
    dialogue: [
      { speaker: 'Mentor', text: 'In a negotiation, you should always aim for a win-win outcome where both parties feel valued.', translation: 'د دانوستاندنێ دا، پێتڤییە هەر دەم ئارمانجا تە ئەنجامەکێ "برد-برد" (وین-وین) بیت کو تێدا هەردوو لایەن هەست ب رێزێ بکەن.' },
      { speaker: 'Employee', text: 'How do I handle a counterpart who is using aggressive tactics?', translation: 'ئەز چەوا سەدەریێ دگەل کەسەکی بکەم یێ کو شێوازێن فشارێ یێن توند بکار دئینیت؟' },
      { speaker: 'Mentor', text: 'Remain calm, focus on interests rather than positions, and don\'t be afraid to walk away.', translation: 'یێ ئارام بە، گرنگیێ بدە بەرژەوەندییان نەک پێگەهان، و نەترسە ژ وێ چەندێ کو دەست ژ دانوستاندنێ بەردەی.' },
      { speaker: 'Employee', text: 'Preparation is vital; I should know my "Best Alternative to a Negotiated Agreement".', translation: 'بەرهەڤی یا فەرە؛ پێتڤییە ئەز "باشترین بەدیلێ خوە" (BATNA) بزانم.' },
      { speaker: 'Mentor', text: 'Exactly. Understanding the other person\'s needs allows you to propose creative solutions.', translation: 'ب درۆستی. تێگەهشتن د پێتڤییاتیێن کەسێ بەرامبەر دا رێ ددەتە تە کو چارەسەریێن داهێنەرانە پێشکێش بکەی.' }
    ],
    vocabulary: [
      { word: 'Counterpart', translation: 'کەسێ بەرامبەر د کاریدا' },
      { word: 'Tactics', translation: 'تەکتیک / شێوازەکان' },
      { word: 'Interests', translation: 'بەرژەوەندییەکان' },
      { word: 'Propose', translation: 'پێشنیازکردن' }
    ]
  },
  {
    id: 'b2-14',
    level: 'B2',
    title: 'Modern Art and Minimalism',
    titleKurdish: 'هۆنەرێ سەردەم و مینیمالیزم',
    dialogue: [
      { speaker: 'Critic', text: 'The exhibition explores the essence of minimalism through negative space and raw materials.', translation: 'پێشانگەهـ ل رامانا مینیمالیزمێ دگەڕێت ب رێکا بۆشاییێن نەرێنی و کەرەستێن خاڤ.' },
      { speaker: 'Artist', text: 'I want my work to evoke thoughts without the clutter of excessive detail.', translation: 'من دڤێت کارێ من هزران پەیدا کەت بێی تێکەلبوونا ووردیاتیێن زێدە.' },
      { speaker: 'Critic', text: 'Some viewers find it too abstract and difficult to interpret.', translation: 'هندەک بینەر وێ زۆر ب "ئەبستراکت" (نە-دیار) و ب بزەحمەت دبینن بۆ روونکرنەڤە (تەفسیرکردن).' },
      { speaker: 'Artist', text: 'Art is subjective. It is about the viewer\'s personal reaction to the simplicity.', translation: 'هۆنەر تشتەکێ تاکەکەسی یە. ئەو دەربارەی کارلێکا کەسی یا بینەری یە بەرامبەر ساکاریێ.' },
      { speaker: 'Critic', text: 'The use of silence in visual form is quite powerful here.', translation: 'بکارئینانا بێدەنگیێ د شێوازێ وێنەیی دا ل ڤێرێ یا زۆر ب هێزە.' }
    ],
    vocabulary: [
      { word: 'Exhibition', translation: 'پێشانگەهـ' },
      { word: 'Evoke', translation: 'پەیداکردن / هێنانە سەر' },
      { word: 'Interpret', translation: 'تەفسیرکردن / روونکرنەڤە' },
      { word: 'Subjective', translation: 'تاکەکەسی / رێژەیی' }
    ]
  },
  {
    id: 'b2-15',
    level: 'B2',
    title: 'Renewable Resource Economics',
    titleKurdish: 'ئابوورا ژێدەرێن نوو-ببیتەڤە',
    dialogue: [
      { speaker: 'Economist', text: 'The levelized cost of energy for solar and wind has dropped below that of coal.', translation: 'تێچوونا گشتییا وزەیا رۆژێ و بای دابەزییە خوارێ ژ یا خەڵووزی.' },
      { speaker: 'Policy Maker', text: 'Then why are we still subsidizing fossil fuel industries?', translation: 'پا بۆچی ئەم هەتا نوکە پشتەڤانییا دارایی (سەبسیدی) ددەنە پیشەسازییێن سۆتەمنییێن کانی؟' },
      { speaker: 'Economist', text: 'Political lobbyists and the need to protect energy security maintain those outdated policies.', translation: 'لۆبیکەرێن سیاسی و پێتڤیاتی ب پاراستنا ئاسایشا وزەی وان سیاسەتێن کەڤن دپارێزن.' },
      { speaker: 'Policy Maker', text: 'We need a carbon tax to internalize the environmental externalities.', translation: 'مە پێتڤی ب باجەکا کاربۆنێ هەیە دا کو تێچوونا ژینگەیی وەک پشکەک ژ تێچوونا بەرهەمینانێ لێ بکەین.' },
      { speaker: 'Economist', text: 'Carbon credits can also incentivize corporations to transition more rapidly.', translation: 'کرێدیتێن کاربۆنی ژی دشێن کۆمپانیان هان بدەن کو ب زوویی بەرەڤ گوهۆڕینێ بڕون.' }
    ],
    vocabulary: [
      { word: 'Subsidizing', translation: 'پشتەڤانیکردنا دارایی / سەبسیدی' },
      { word: 'Lobbyists', translation: 'لۆبیکەر / فشار-کەرێن سیاسی' },
      { word: 'Externalities', translation: 'کارتێکرنێن دەرەکی' },
      { word: 'Incentivize', translation: 'هاندانی دارایی' }
    ]
  },
  {
    id: 'b2-16',
    level: 'B2',
    title: 'The Psychology of Habits',
    titleKurdish: 'دەروونناسییا خوەپێ-گرتنێ (عادات)',
    dialogue: [
      { speaker: 'Researcher', text: 'Habits are formed through a loop of a cue, a routine, and a reward.', translation: 'خوەپێ-گرتن (عادات) ب رێکا خولەکەکا نیشانەکێ، رۆتینەکێ، و خەلاتەکێ درۆست دبن.' },
      { speaker: 'Subject', text: 'So, to break a bad habit, I should identify the trigger and replace the routine?', translation: 'ئانکو، بۆ شکاندنا خوەپێ-گرتنەکا خراب، پێتڤییە ئەز ئەگەری ببێنم و رۆتینێ بگوهۆڕم؟' },
      { speaker: 'Researcher', text: 'Exactly. Small incremental changes are more sustainable than radical shifts.', translation: 'ب درۆستی. گوهۆڕینێن بچووک یێن پلە-پلە پتر د بەردەوامن ژ گوهۆڕینێن ئێکجاری یێن بنەڕەتی.' },
      { speaker: 'Subject', text: 'Does tracking my progress manually help reinforce the new behavior?', translation: 'ئەرێ تۆمارکرنا پێشکێفتنا من ب دەست، هاریکارە د بهێزکرنا رەفتارا نوو دا؟' },
      { speaker: 'Researcher', text: 'Yes, it provides immediate feedback and a sense of accomplishment.', translation: 'بەلێ، ئەو فیدباکەکا دەستپێجێ دابین دکەت و هەستا ئەنجامدانی ددەتە مرۆڤی.' }
    ],
    vocabulary: [
      { word: 'Incremental', translation: 'پلە-پلە / زێدەبووی' },
      { word: 'Sustainable', translation: 'بەردەوام' },
      { word: 'Reinforce', translation: 'بهێزکردن / چەسپاندن' },
      { word: 'Accomplishment', translation: 'دەستکەفت / ئەنجامدان' }
    ]
  },
  {
    id: 'b2-17',
    level: 'B2',
    title: 'Philosophy of Time Management',
    titleKurdish: 'فەلسەفەیا برێڤەبرنا دەمی',
    dialogue: [
      { speaker: 'Alan', text: 'We should stop thinking about time management and start focusing on energy management.', translation: 'پێتڤییە ئەم دەست ژ هزرا برێڤەبرنا دەمی بەردەن و دەست ب گرنگیدانێ ب برێڤەبرنا وزەیێ بکەین.' },
      { speaker: 'Dana', text: 'What do you mean? Time is finite, while energy seems renewable.', translation: 'مەرەما تە چییە؟ دەم یێ سنووردارە، د دەمەکێ دا وزە دیارە یا نوو-ببیتەڤە بیت.' },
      { speaker: 'Alan', text: 'You can have all the time in the world, but if you lack focus, you won\'t get anything done.', translation: 'تە دشێت هەمی دەمێ جیهانێ هەبیت، لێ ئەگەر تە سەرنج نەبیت، تو چو تشتان ب دوماهی نائینی.' },
      { speaker: 'Dana', text: 'So we should align our most demanding tasks with our peak performance hours.', translation: 'ئانکو پێتڤییە ئەم کارێن خوە یێن هەرە ب زەحمەت رێک بێخین دگەل دەمژمێرێن لۆوتکەیا کارامەییا خوە دا.' },
      { speaker: 'Alan', text: 'Precisely. Working against your biological clock leads to diminishing returns.', translation: 'ب درۆستی. کارکرن دژی دەمژمێرێ بایۆلۆژییا تە دبیتە ئەگەرێ کێمبوونا بەرهەمداریێ.' }
    ],
    vocabulary: [
      { word: 'Finite', translation: 'سنووردار' },
      { word: 'Demanding', translation: 'ب زەحمەت / پێویستی هەوڵ' },
      { word: 'Peak', translation: 'لووتکە / هەرە-باش' },
      { word: 'Diminishing', translation: 'کێم-بوونەوە' }
    ]
  },
  {
    id: 'b2-18',
    level: 'B2',
    title: 'Future of Space Colonization',
    titleKurdish: 'پاشەڕۆژا ئاوەدانکرنا گەردوونێ',
    dialogue: [
      { speaker: 'Astro-physicist', text: 'Establishing a self-sustaining colony on Mars requires a radical shift in propulsion technology.', translation: 'ئاڤاکرنا ئاوەدانییەکا خۆ-ژین ل سەر ماریخی پێتڤی ب گوهۆڕینەکا بنەڕەتی هەیە د تەکنەلۆژیا پاڵنەر (پروپولژن) دا.' },
      { speaker: 'Journalist', text: 'What are the main biological hurdles for long-term human habitation in micro-gravity?', translation: 'ئاستەنگێن بایۆلۆژی یێن سەرەکی چن بۆ ژیانا مرۆڤی یا دەم-درێژ د ناڤ جاذبییەکا کێم (مایکرۆ-گراڤیتی) دا؟' },
      { speaker: 'Astro-physicist', text: 'Bone density loss and radiation exposure are the most critical factors we currently face.', translation: 'ژ دەستدانا چڕییا هەستییان و تووشبوون ب تیشکدانێ (رادیەیشن) مەترسیدارترین قۆلێن مە یێن نوکەن.' },
      { speaker: 'Journalist', text: 'Could terraforming ever make Mars breathable for humans without life-support systems?', translation: 'ئەرێ "تێرافۆرمینگ" (دانانا ژینکەیا زەوی ل سەر هەسارەیێن دی) چو جاران دشێت ماریخی بکەتە جهەکێ بێهن-وەرگرتنێ بۆ مرۆڤان بێ سیستەمێن پاراستنا ژیانێ؟' },
      { speaker: 'Astro-physicist', text: 'It remains speculative fiction for now, as it would take thousands of years.', translation: 'ئەڤە ل ڤی دەمی هەر وەک خەیالا زانستی دەمێن، چونکی دێ چەندین هزار ساڵان کێشیت.' }
    ],
    vocabulary: [
      { word: 'Propulsion', translation: 'پاڵنەر / هێرشبەری' },
      { word: 'Hurdles', translation: 'ئاستەنگەکان' },
      { word: 'Colonization', translation: 'ئاوەدانکردن / کۆلۆنیالیزم' },
      { word: 'Speculative', translation: 'خەیالی / پێشبینیکەر' }
    ]
  },
  {
    id: 'b2-19',
    level: 'B2',
    title: 'Deepfake Technology Ethics',
    titleKurdish: 'ئەخلاقییا تەکنەلۆژیا "دیپ-فەیک" (تەزویرکرنا زیرەک)',
    dialogue: [
      { speaker: 'Lawyer', text: 'Deepfakes pose a severe threat to legal integrity and personal reputation.', translation: 'تەکنەلۆژیا "دیپ-فەیک" مەترسییەکا دژوار ل سەر درۆستییا یاسایی و ناڤودەنگییا کەسی پەیدا دکەت.' },
      { speaker: 'Technologist', text: 'We are developing digital watermarking to authenticate real media content.', translation: 'ئەم مۆرێن دیجیتالی (واتەرمارکینگ) گەشە پێ ددەن دا کو ناوەڕۆکا میدیایا راستی بسەلمینین.' },
      { speaker: 'Lawyer', text: 'The ease of creating disinformation could lead to widespread societal instability.', translation: 'ساناەیا چێکرنا زانیارییێن خەلات (دیس-ئینفۆرمەیشن) دشێت ببیتە ئەگەرێ نە-سەقامگیرییا جڤاکی یا بەرفرەهـ.' },
      { speaker: 'Technologist', text: 'It is a technical arms race between those creating deepfakes and those detecting them.', translation: 'ئەڤە هەڤرکییەکا چەکداری یا تەکنیکی یە د ناڤبەرا وان یێن دیپ-فەیکان چێ دکەن و وان یێن کو دۆز دکەنەڤە.' },
      { speaker: 'Lawyer', text: 'We need legislation that holds creators of malicious content accountable.', translation: 'مە پێتڤی ب یاسایەکێ هەیە کو وان کەسێن کو ناوەڕۆکا خراب چێ دکەن بەرپرسیار بکەت.' }
    ],
    vocabulary: [
      { word: 'Integrity', translation: 'رەسەنایەتی / درۆستی' },
      { word: 'Disinformation', translation: 'زانیارییێن خەڵەت' },
      { word: 'Detecting', translation: 'دۆزکرنەڤە / دۆزینەوە' },
      { word: 'Accountable', translation: 'بەرپرسیار' }
    ]
  },
  {
    id: 'b2-20',
    level: 'B2',
    title: 'Neurodiversity in Education',
    titleKurdish: 'جۆراوجۆرییا دەماری د پەروەردەیێ دا (نیورۆ-دایڤێرسیتی)',
    dialogue: [
      { speaker: 'Educator', text: 'We must move away from a "one-size-fits-all" approach to accommodate neurodiverse students.', translation: 'پێتڤییە ئەم دەست ژ شێوازێ "ئێک-جۆر بۆ هەموویان" بەردەن دا کو جهێ قوتابیێن خودان جۆراوجۆرییا دەماری بکە هەین.' },
      { speaker: 'Parent', text: 'Traditional assessment methods often overlook the unique strengths of autistic or dyslexic learners.', translation: 'رێکێن تاقیکرنێ یێن ئاسایی زۆر جاران گرنگیێ نادرنە خالێن ب هێز یێن قوتابیێن خودان ئۆتیزم یان دیسلێکسییا.' },
      { speaker: 'Educator', text: 'Universal Design for Learning provides flexible pathways for every student to demonstrate proficiency.', translation: 'دیزاینا جیهانی بۆ فێربوونێ رێکێن ئاسان دابین دکەت بۆ هەر قوتابییەک دا کو زیرەکییا خوە نیشان بدەت.' },
      { speaker: 'Parent', text: 'It creates a more inclusive environment where everyone feels they belong.', translation: 'ئەڤە ژینگەیەکا تێکەڵتر و گشتگیرتر چێ دکەت کو هەر کەسەک هەست بکەت یێ سەر ب وێڤە یە.' },
      { speaker: 'Educator', text: 'Celebrating differences fosters creativity and problem-solving skills in the classroom.', translation: 'پیرۆزکرنا جوداهییان داهێنان و بەهرەیێن چارەسەرکردنا کێشەیان ل ناڤ پۆلێ دا زێدە دکەت.' }
    ],
    vocabulary: [
      { word: 'Accommodate', translation: 'جهـ-کرنەوە / گونجاندن' },
      { word: 'Inclusive', translation: 'گشتگیر / تێکەڵ' },
      { word: 'Proficiency', translation: 'زیرەکی / کارامەیی' },
      { word: 'Fosters', translation: 'گەشەپێدان / هاندان' }
    ]
  },
  {
    id: 'b2-21',
    level: 'B2',
    title: 'The Impact of Fast Fashion',
    titleKurdish: 'کارتێکرنا مۆدێلا خێرا (فاست فاشن)',
    dialogue: [
      { speaker: 'Environmentalist', text: 'Fast fashion is responsible for a massive amount of water pollution and textile waste.', translation: 'مۆدێلا خێرا (فاست فاشن) بەرپرسیارە ژ رێژەیەکی گەلەکا پیسبوونی ئاوی و پاشمایێن قوماشی.' },
      { speaker: 'Shopper', text: 'It\'s hard to resist when trendy clothes are so affordable and accessible.', translation: 'مەحالە مرۆڤ بەرگریێ لێ بکەت دەمێ جۆانترین جلیبەرگ ب بهایەکێ هەرزان و ل بەر دەست بن.' },
      { speaker: 'Environmentalist', text: 'We need to shift toward a circular fashion economy where clothes are recycled and repurposed.', translation: 'پێتڤییە ئەم بەرەڤ ئابوورەکێ مۆدێلا بازنەیی بڕین کو تێدا جلیبەرگ دووبارە پاقژ ببن و بکاربهێنەڤە.' },
      { speaker: 'Shopper', text: 'I\'ll start by buying from second-hand stores and supporting ethical brands.', translation: 'ئەز دێ دەست پێ کەم ب کڕینێ ژ دۆکانێن جلیبەرگێن بکارئینای و پشتەڤانیکردنا مارکەیێن ئەخلاقی.' },
      { speaker: 'Environmentalist', text: 'Choosing quality over quantity is the most sustainable way to dress.', translation: 'هەلبژارتنا کوالێتیێ ل سەر رێژەیێ، باشترین رێکا بەردەوامە بۆ جلیبەرگ پۆشینێ.' }
    ],
    vocabulary: [
      { word: 'Fast fashion', translation: 'مۆدێلا خێرا' },
      { word: 'Affordable', translation: 'گونجاو / هەرزان' },
      { word: 'Repurposed', translation: 'بکارئینانەڤە بۆ مەبەستەکا دی' },
      { word: 'Sustainable', translation: 'بەردەوام' }
    ]
  },
  {
    id: 'b2-22',
    level: 'B2',
    title: 'The Ethics of Genetic Modification',
    titleKurdish: 'ئەخلاقییاتا دەستکاریکردنا جیناتی (جێنەتیک مۆدیفیکەیشن)',
    dialogue: [
      { speaker: 'Biologist', text: 'CRISPR technology allows us to precisely target and edit specific DNA sequences.', translation: 'تەکنەلۆژیا "کریسپەر" رێ ددەتە مە کو ب ووردی زنجیرەیێن دی-ئێن-ئەی یێن دەستنیشانکری بکەینە ئارمانج و دەستکاری بکەین.' },
      { speaker: 'Bioethicist', text: 'The ability to eliminate genetic disorders is groundbreaking, yet we must consider the risk of "designer babies".', translation: 'شیانا نەهێلانا تێکچوونێن جیناتی تشتەکێ مەزنە، لێ د هەمان دەم دا پێتڤییە ئەم ل مەترسییا "زارۆکێن دیزاینکری" ژی بمهزرین.' },
      { speaker: 'Biologist', text: 'Our focus is strictly on therapeutic applications for life-threatening conditions.', translation: 'گرنگیپێدانا مە ب توندی تنێ ل سەر بکارئینانێن چارەسەری یە بۆ حالەتێن کو مەترسی ل سەر ژیانێ هەی.' },
      { speaker: 'Bioethicist', text: 'Who determines the boundary between a medical necessity and an aesthetic enhancement?', translation: 'کێ سنوورێ د ناڤبەرا پێتڤیاتییا پزیشکی و جۆانکارییا جەستەیی دا دیار دکەت؟' },
      { speaker: 'Biologist', text: 'International regulatory bodies must establish clear guidelines to prevent misuse.', translation: 'پێتڤییە لژنەیێن رێکخستنا نێڤدەولەتی رێنماییێن رۆهن دانێن دا کو رێ ل بکارهێنانا خراب بگرن.' }
    ],
    vocabulary: [
      { word: 'Precisely', translation: 'ب ووردی' },
      { word: 'Therapeutic', translation: 'چارەسەری' },
      { word: 'Enhancement', translation: 'پێشڤەبرن / جوانکردن' },
      { word: 'Misuse', translation: 'بکارهێنانا خراب' }
    ]
  },
  {
    id: 'b2-23',
    level: 'B2',
    title: 'Digital Minimalism in a Hyper-Connected World',
    titleKurdish: 'مینیمالیزما دیجیتالی د جیهانەکا ب توندی پەیوەست دا',
    dialogue: [
      { speaker: 'Tech Expert', text: 'Digital minimalism is about using technology as a tool to support your values, not as a source of distraction.', translation: 'مینیمالیزما دیجیتالی ئەوە کو تو تەکنەلۆژیایێ وەک ئامرازەک بکاربینی بۆ پشتەڤانیکردنا بهایێن خۆ، نەک وەک ژێدەرەکێ مژوولبوونێ.' },
      { speaker: 'User', text: 'I feel overwhelmed by the constant influx of notifications and digital noise.', translation: 'ئەز هەست ب مۆلقیبوونێ (وەستیانێ) دکەم ژ بەر لێشاوێ بەردەوام یێ نۆتیفیکەیشن و دەنگەدەنگێ دیجیتالی.' },
      { speaker: 'Tech Expert', text: 'Start by auditing your apps and deleting those that don\'t add significant value to your life.', translation: 'دەست پێ بکە ب پشکنینا بەرنامەیێن خۆ و وان یێن کو چو مفایەکێ مەزن ناگەهیننە ژیانا تە ژێ ببە.' },
      { speaker: 'User', text: 'I am worried about missing out on important social connections.', translation: 'ئەز نیگەرانم کو پەیوەندیێن جڤاکی یێن گرنگ ژ دەست بدەم.' },
      { speaker: 'Tech Expert', text: 'Quality social interaction often happens offline. Reclaiming your attention is more rewarding.', translation: 'کارلێکا جڤاکی یا ب کوالێتی زۆربەیا جاران ل دەرڤەی ئۆنلاینێ روو ددەت. وەرگرتنەڤەیا سەرنجا تە پتر ب مفایە.' }
    ],
    vocabulary: [
      { word: 'Influx', translation: 'لێشاو / سرازیربوون' },
      { word: 'Auditing', translation: 'پشکنین / نێرینەڤە' },
      { word: 'Reclaiming', translation: 'وەرگرتنەڤە / داخوازی کردنەڤە' },
      { word: 'Distraction', translation: 'مژوولبوون / تێکچوونا سەرنجێ' }
    ]
  },
  {
    id: 'b2-24',
    level: 'B2',
    title: 'Behavioral Economics and Consumer Choice',
    titleKurdish: 'ئابوورا رەفتاری و هەلبژارتنا بەکاربەران',
    dialogue: [
      { speaker: 'Samer', text: 'Consumers often act irrationally due to cognitive biases like loss aversion.', translation: 'بەکاربەر زۆر جاران نە-عەقڵانی رەفتار دکەن ب ئەگەرێ لایەنگیرییێن مێشکی وەک "ترس ژ دەستدانێ" (loss aversion).' },
      { speaker: 'Lina', text: 'Marketing agencies leverage these psychological triggers to drive impulsive spending.', translation: 'ئاژانسێن مارکێتینگێ ڤان ئەگەرێن دەروونی بکار دئینن دا کو خەرجکردنا ب پەلە (impulsive spending) زێدە بکەن.' },
      { speaker: 'Samer', text: 'Choice architecture can nudge people toward healthier financial decisions.', translation: 'دیزاینکرنا رێکا هەلبژارتنێ دشێت خەڵکی پاڵ بدەت بەرەڤ بڕیارێن دارایی یێن درۆستتر.' },
      { speaker: 'Lina', text: 'Is it ethical to influence individual behavior through subtle environmental cues?', translation: 'ئەرێ ئەخلاقی یە کارتێکرنێ ل رەفتارێن تاکەکەسی بکەی ب رێکا نیشانێن ژینگەیی یێن نە-دیار؟' },
      { speaker: 'Samer', text: 'As long as the transparency is maintained, these "nudges" can benefit society as a whole.', translation: 'هەتا کو روونی و ئاشکرایی هەبیت، ئەڤ پاڵدانە دشێن مفای بگەهیننە هەمی جڤاکی.' }
    ],
    vocabulary: [
      { word: 'Irrational', translation: 'نە-عەقڵانی / بێ-مێشک' },
      { word: 'Nudge', translation: 'پاڵنەر / فشارەکا کێم' },
      { word: 'Subtle', translation: 'نە-دیار / نازک' },
      { word: 'Transparency', translation: 'روونی / ئاشکرایی' }
    ]
  },
  {
    id: 'b2-25',
    level: 'B2',
    title: 'The Philosophy of Stoicism',
    titleKurdish: 'فەلسەفەیا ستۆیزم (رەواقی)',
    dialogue: [
      { speaker: 'Philosopher', text: 'Stoicism teaches us to distinguish between what we can control and what we cannot.', translation: 'فەلسەفەیا ستۆیزم فێری مە دکەت کو جوداهیێ بکەین د ناڤبەرا وان تشتێن ئەم دشێین کۆنتڕۆڵ بکەین و وان یێن ئەم نەشێین.' },
      { speaker: 'Student', text: 'It sounds like emotional suppression. Doesn\'t it feel robotic?', translation: 'وەک کپکردنا هەستان دیارە. ئەرێ مرۆڤ هەست ب ڕۆبۆت-بوونێ ناکەت؟' },
      { speaker: 'Philosopher', text: 'Not at all. It is about emotional resilience. We acknowledge feelings but don\'t allow them to govern our reason.', translation: 'نەخێر ب هیچ رەنگەکی. ئەو دەربارەی خۆڕاگرییا هەستی یە. ئەم دانپێدانێ ب هەستێن خۆ دکەین لێ رێ نادەین ئەو حوکمێ ل سەر عەقڵێ مە بکەن.' },
      { speaker: 'Student', text: 'Focusing solely on virtue as the highest good seems like a solitary path.', translation: 'گرنگیدان تنێ ب رەوشتێ باش وەک بلندترین چاکە، وەکی رێگایەکا تەنێ (ئیکانە) دیار دکەت.' },
      { speaker: 'Philosopher', text: 'On the contrary, Stoics believe in "cosmopolitanism"—that we are all part of a larger human community.', translation: 'ب پێچەوانە، ستۆیک باوەر ب "جیهانی-بوونێ" هەبوو - کو ئەم هەمی پشکەکین ژ جڤاکێ مرۆڤایەتی یێ مەزنتر.' }
    ],
    vocabulary: [
      { word: 'Distinguish', translation: 'جوداهیکردن' },
      { word: 'Suppression', translation: 'کپکردن / بنبرکردن' },
      { word: 'Resilience', translation: 'خۆڕاگری / پشتگەرمی' },
      { word: 'Virtue', translation: 'رەوشت / چاکە' }
    ]
  },
  {
    id: 'b2-26',
    level: 'B2',
    title: 'The Impact of Social Media Algorithms',
    titleKurdish: 'کارتێکرنا ئەلگۆریتمێن سۆشیاڵ میدیایێ',
    dialogue: [
      { speaker: 'Lana', text: 'Algorithms are designed to maximize engagement, often leading to echo chambers.', translation: 'ئەلگۆریتم هاتیینە دیزاینکرن دا کو بەژداریکردنێ زێدە بکەن، کو زۆر جاران مرۆڤی دکەنە د ناڤ "ژوورێن دەنگڤەدانێ" (echo chambers) دا.' },
      { speaker: 'Dana', text: 'I\'ve noticed I only see content that reinforces my existing beliefs.', translation: 'من تێبینی کریە کو ئەز تنێ وان بابەتان دبینم یێن کو باوەریا من یێن هەین دبهێزینن.' },
      { speaker: 'Lana', text: 'This polarization is dangerous for democratic discourse and social cohesion.', translation: 'ئەڤ جەمسەربەندییە (پۆلارایزەیشن) مەترسیدارە بۆ گۆفتۆگۆیا دیمۆکراتی و تەبایییا جڤاکی.' },
      { speaker: 'Dana', text: 'How can we expose ourselves to more diverse perspectives online?', translation: 'ئەم چەوا دشێین خۆ بدەنە بەر دیارکرنا دیدەگایێن جوداتر ل سەر ئینتەرنێتێ؟' },
      { speaker: 'Lana', text: 'Actively searching for opposing viewpoints and critical evaluation of sources is a good start.', translation: 'گەڕیان ب شێوازەکێ چالاکانە ل دویڤ خالێن دژیایەتیێ و هەلسەنگاندنا رەخنەیی یا ژێدەران دەستپێکەکا باشە.' }
    ],
    vocabulary: [
      { word: 'Polarization', translation: 'جەمسەربەندی / پارچە-بوون' },
      { word: 'Cohesion', translation: 'تەبایی / پێکڤە-گرێدان' },
      { word: 'Diverse', translation: 'جۆراوجۆر / جیاواز' },
      { word: 'Discourse', translation: 'گۆفتۆگۆ / ئاخفتن' }
    ]
  },
  {
    id: 'b2-27',
    level: 'B2',
    title: 'Urban Planning and Sustainability',
    titleKurdish: 'پلاندانانا باژێڕی و بەردەوامی',
    dialogue: [
      { speaker: 'Planner', text: 'We are transitioning toward the "15-minute city" model to reduce reliance on cars.', translation: 'ئەم بەرەڤ مۆدێلێ "باژێڕێ ١٥ خۆلەکی" دچین دا کو پشتبەستنا ب ترۆمبێلان کێم بکەین.' },
      { speaker: 'Resident', text: 'Does that mean more pedestrian zones and reliable public transit?', translation: 'ئەرێ ئەڤە رامانا زێدەبوونا ناڤچەیێن پیادە و گواستنەوا گشتی یا باوەرپێکری یە؟' },
      { speaker: 'Planner', text: 'Exactly. Mixed-use development allows people to live, work, and play within a small radius.', translation: 'ب درۆستی. گەشەپێدانا تێکەڵ رێ ددەتە خەڵکی کو بژین، کار بکەن، و یاری بکەن د ناڤ بازنەیەکێ بچووک دا.' },
      { speaker: 'Resident', text: 'Gentrification is a concern; will long-term residents be priced out?', translation: 'گرانبوونا ناڤچەیان (جێنتریفیکەیشن) ئاریشەیە؛ ئەرێ دێ نرخێ ژیانێ نیشتەجێبوویێن دەم-درێژ ژ ناڤچەیێ دەرخەت؟' },
      { speaker: 'Planner', text: 'We are implementing rent controls and social housing quotas to maintain inclusivity.', translation: 'ئەم رێکارێن کۆنتڕۆڵکردنا کرێیان و لیستەیێن خانییێن جڤاکی جێبەجێ دکەن دا کو گشتگیریێ بپارێزین.' }
    ],
    vocabulary: [
      { word: 'Pedestrian', translation: 'پیادە / رێبوار' },
      { word: 'Radius', translation: 'نیوە-کۆتەرە / بازنە' },
      { word: 'Gentrification', translation: 'گۆهۆڕینا جڤاکی یا ناڤچەیێ ب گرانبوونێ' },
      { word: 'Inclusivity', translation: 'گشتگیری / گونجاندنا هەموویان' }
    ]
  },
  {
    id: 'b2-28',
    level: 'B2',
    title: 'The Great Resignation and Remote Work',
    titleKurdish: 'دەست-کێشانا مەزن و کارێ ژ دویر',
    dialogue: [
      { speaker: 'Manager', text: 'The "Great Resignation" has forced us to reconsider our employee value proposition.', translation: '"دەست-کێشانا مەزن" (Great Resignation) ئەم نەچار کرین کو ئەم دووبارە ل پێشنیازا بهایێ کارمەندێن خۆ بمهزرین.' },
      { speaker: 'HR Specialist', text: 'Employees are prioritizing flexibility and mental well-being over traditional benefits.', translation: 'کارمەند نوکە گرنگیێ ددەنە نەرمی و تەندروستییا دەروونی ل سەر مفایێن کولتۆری یێن جاران.' },
      { speaker: 'Manager', text: 'Is remote work sustainable for maintaining a strong company culture?', translation: 'ئەرێ کارکردن ژ دویر (ریمۆت وۆرک) یا بەردەوامە بۆ پاراستنا کەلتوورەکێ ب هێز یێ کۆمپانیایێ؟' },
      { speaker: 'HR Specialist', text: 'Hybrid models offer a balance, allowing for both autonomy and collaboration.', translation: 'مۆدێلێن تێکەڵ (هایبرید) هاوسەنگییەکێ دابین دکەن، کو رێ ددەتە سەربەخۆیی و هەماهەنگیێ ژی.' },
      { speaker: 'Manager', text: 'We need to invest in digital tools that facilitate seamless communication.', translation: 'پێتڤییە ئەم وەبەرهێنانێ د ئامرازێن دیجیتالی دا بکەین کو پەیوەندییەکا بێ-ئاریشە ئاسان بکەن.' }
    ],
    vocabulary: [
      { word: 'Resignation', translation: 'دەست-کێشان ژ کار' },
      { word: 'Proposition', translation: 'پێشنیاز / پێشکێشکردن' },
      { word: 'Autonomy', translation: 'سەربەخۆیی' },
      { word: 'Seamless', translation: 'بێ-ئاریشە / رێک' }
    ]
  },
  {
    id: 'b2-29',
    level: 'B2',
    title: 'Cyber Warfare and National Security',
    titleKurdish: 'شەڕێ ئەلیکترۆنی و ئاسایشا نیشتمانی',
    dialogue: [
      { speaker: 'Officer', text: 'Cyber warfare is no longer a hypothetical threat; it is an active theater of conflict.', translation: 'شەڕێ ئەلیکترۆنی ئێدی نە مەترسییەکا پێشبینیکری یە؛ بەڵکو گۆڕەپانەکا چالاکا پێکدادانێ یە.' },
      { speaker: 'Technician', text: 'State-sponsored hackers are targeting critical infrastructure like power grids and banks.', translation: 'هاکەرێن کو ژ لایێ دەولەتان ڤە پشتەڤانی لێ دهێتە کرن، ژێرخانێن هەستیار وەک تۆڕێن کارەبێ و بانکان دکەنە ئارمانج.' },
      { speaker: 'Officer', text: 'The lack of international norms makes attribution and retaliation difficult.', translation: 'کێمییا رێساێن نێڤدەولەتی ئەگەر-دیتن و تۆڵە-سەندنێ ب زەحمەت دکەن.' },
      { speaker: 'Technician', text: 'Encryption and zero-trust architecture are our primary lines of defense.', translation: 'بکۆدکردن (ئینکریپشن) و تەلارسازییا "پێ-باوەرنەبوونێ" (زیرۆ ترهەست) خەتێن مە یێن سەرەکی یێن بەرگریێ نە.' },
      { speaker: 'Officer', text: 'We must collaborate with the private sector to bridge the cybersecurity gap.', translation: 'پێتڤییە ئەم دگەل کەرتێ تایبەت هەماهەنگیێ بکەین دا کو ئەو کەلەمێ (گاپ) ئاسایشا ئەلیکترۆنی کێم بکەین.' }
    ],
    vocabulary: [
      { word: 'Hypothetical', translation: 'پێشبینیکری / خەیالی' },
      { word: 'Attribution', translation: 'سەلماندنا ئەگەر یان ناردەری' },
      { word: 'Retaliation', translation: 'تۆڵە-سەندن' },
      { word: 'Encryption', translation: 'تەشڤیرکردن / ب کۆدکردن' }
    ]
  },
  {
    id: 'b2-30',
    level: 'B2',
    title: 'The Philosophy of Language',
    titleKurdish: 'فەلسەفەیا زمانێ',
    dialogue: [
      { speaker: 'Linguist', text: 'Does language shape the way we think, or does thought exist independently of language?', translation: 'ئەرێ زمان شێوازێ هزرا مە دیار دکەت، یان هزر ب سەربەخۆیی ژ زمانێ هەیە؟' },
      { speaker: 'Student', text: 'The Sapir-Whorf hypothesis suggests that linguistic structures influence our perception of reality.', translation: 'پێشبینییا "ساپیر-وۆرف" دبێژیت کو پێکهاتەیێن زمانەوانی کارتێکرنێ ل تێگەهشتنا مە بۆ راستیێ دکەن.' },
      { speaker: 'Linguist', text: 'But universal grammar implies that all humans share an underlying innate structure for language.', translation: 'لێ رێزمانا جیهانی رامانا وێ ئەوە کو هەموو مرۆڤ پشکدارن د پێکهاتەیەکی بنەڕەتی یێ ژ زکماکی دا بۆ زمانێ.' },
      { speaker: 'Student', text: 'Untranslatable words prove that some concepts are unique to specific cultures.', translation: 'ئەو پەیڤێن کو ناهێنە وەرگێڕان د سەلمینن کو هندەک چەمک تنێ تایبەتن ب کەلتوورێن دەستنیشانکری.' },
      { speaker: 'Linguist', text: 'Language is a living organism, constantly evolving with human experience.', translation: 'زمان گیانەوەرەکێ زیندی یە، هەر دەم دگەل ئەزموونا مرۆڤی گەشە دکەت.' }
    ],
    vocabulary: [
      { word: 'Perception', translation: 'تێگەهشتن / هەست-پێکردن' },
      { word: 'Hypothesis', translation: 'پێشبینی / گومان' },
      { word: 'Innate', translation: 'ژ زکماکی / بنەڕەتی' },
      { word: 'Evolving', translation: 'گەشە-سەندن' }
    ]
  },
  {
    id: 'b2-31',
    level: 'B2',
    title: 'Precision Medicine and Data Privacy',
    titleKurdish: 'پزیشکییا وورد و پاراستنا داتایان',
    dialogue: [
      { speaker: 'Doctor', text: 'Precision medicine tailors treatments based on a patient\'s genetic profile.', translation: 'پزیشکییا وورد چارەسەریان تایبەت دکەت ل دووڤ پڕۆفایێ جیناتی یێ نەخۆشی.' },
      { speaker: 'Patient', text: 'I am concerned about my genomic data being leaked or misused by insurers.', translation: 'ئەز نیگەرانم کو داتایێن من یێن جینۆمی بهێنە دزین یان ب خراپی بهێنە بکارئینان ژ لایێ کۆمپانیێن دڵنیایی (ئەنسۆرانە).' },
      { speaker: 'Doctor', text: 'Legislation like GINA provides some protection, but data anonymization is still evolving.', translation: 'یاسایێن وەک GINA هندەک پاراستنێ دابین دکەن، لێ ڤەشارتنا ناڤونیشانان (ئەنۆنیمایزەیشن) هێشتا د قۆناغێن گەشەکردنێ دا یە.' },
      { speaker: 'Patient', text: 'Will these advancements be accessible only to the wealthy?', translation: 'ئەرێ ئەڤ پێشکێفتنە دێ تنێ بۆ کەسێن دەولەمەند بن؟' },
      { speaker: 'Doctor', text: 'Universal healthcare systems must incorporate genomic screening to ensure equity.', translation: 'سیستەمێن تەندروستی یێن جیهانی پێتڤییە پشکنینا جینۆمی بکاربینن دا کو دادپەروەریێ دابین بکەن.' }
    ],
    vocabulary: [
      { word: 'Genomic', translation: 'سەر ب جینۆمێ ڤە (پێکهاتەیا جیناتی)' },
      { word: 'Anonymization', translation: 'شاردنەوەی ناوونیشان / بێ-ناڤکردن' },
      { word: 'Incorporate', translation: 'تێکەڵکردن / پێکەوە-بەستن' },
      { word: 'Equity', translation: 'دادپەروەری / یەکسانی' }
    ]
  },
  {
    id: 'b2-32',
    level: 'B2',
    title: 'The Future of Renewable Energy Storage',
    titleKurdish: 'پاشەڕۆژا ئەنبارکردنا وزەیا نوو-ببیتەڤە',
    dialogue: [
      { speaker: 'Engineer', text: 'Intermittency is the biggest hurdle for solar and wind energy integration.', translation: 'نە-بەردەوامی (ئینتەرمیتێنسی) مەزترین ئاستەنگە بۆ تێکەڵکردنا وزەیا رۆژێ و بای.' },
      { speaker: 'Investor', text: 'Are solid-state batteries ready for commercial utility-scale deployment?', translation: 'ئەرێ پاترییێن حالەتێ ڕەق (سۆلید ستەیت) بەرهەڤن بۆ بەلاڤکردنا بازرگانی یا ئاست-مەزن؟' },
      { speaker: 'Engineer', text: 'We are making progress, but pumped hydro and green hydrogen are more viable for long-term storage.', translation: 'ئەم د پێشڤەچوونێ دا نە، لێ هایدرۆیا پۆمپکری و هایدرۆجینا کەسک باشترن بۆ ئەنبارکردنا دەم-درێژ.' },
      { speaker: 'Investor', text: 'What about the environmental cost of mining lithium and cobalt?', translation: 'پا دەربارەی تێچوونا ژینگەیی یا دەرئینانا لیسیۆم و کۆباڵتی؟' },
      { speaker: 'Engineer', text: 'A circular economy for battery materials is essential to mitigate these impacts.', translation: 'ئابوورەکێ بازنەیی بۆ کەرەستێن پاترییان فەرە بۆ کێمکرنا ڤان کارتێکرنان.' }
    ],
    vocabulary: [
      { word: 'Intermittency', translation: 'پچر-پچر بوون / نە-بەردەوامی' },
      { word: 'Utility-scale', translation: 'ئاستێ پڕۆژەیێن مەزن یێن گشتی' },
      { word: 'Viable', translation: 'ب کریار دبیت / گونجاو' },
      { word: 'Mining', translation: 'دەرئینانا کانییان / مینینگ' }
    ]
  },
  {
    id: 'b2-33',
    level: 'B2',
    title: 'Quantum Computing and Cryptography',
    titleKurdish: 'کۆمپیوتەرا کوانتەم و تەشفیرکردن',
    dialogue: [
      { speaker: 'IT Director', text: 'Quantum computers could render our current encryption methods obsolete within a decade.', translation: 'کۆمپیوتەرێن کوانتەم دشێن رێکێن مە یێن نوکە یێن تەشفیرکردنێ بکەنە تشتەکێ کۆن و بێ-مفا د ناڤ دە ساڵاندا.' },
      { speaker: 'Security Head', text: 'We need to migrate to post-quantum cryptography to secure our future communications.', translation: 'پێتڤییە ئەم بار بکەین بەرەڤ "تەشفیرکردنا دوای کوانتەمێ" دا کو پەیوەندییێن خوە یێن ئایندەی بپارێزین.' },
      { speaker: 'IT Director', text: 'The potential for quantum advantage in drug discovery is also staggering.', translation: 'شیانا مفایێ کوانتەمی د دۆزینەڤەیا دەرمانان دا ژی یا سەرسوورهێنەرە.' },
      { speaker: 'Security Head', text: 'However, the hardware is still highly sensitive to environmental decoherence.', translation: 'لێ، پارچێن کۆمپیوتەری هێشتا گەلەک هەستیارن بەرامبەر تێکچوونا ژینگەیی (دیکۆهێرێنس).' },
      { speaker: 'IT Director', text: 'Error correction algorithms are the key focus of current research.', translation: 'ئەلگۆریتمێن راستڤەکرنا خەلەتییان گرنگترین پشکا ژ لێگەڕیانێن نوکەن.' }
    ],
    vocabulary: [
      { word: 'Obsolete', translation: 'کۆن / بێ-مفا' },
      { word: 'Migrate', translation: 'بارکردن / گواستنەووە' },
      { word: 'Staggering', translation: 'سەرسوورهێنەر' },
      { word: 'Decoherence', translation: 'تێکچوونا بارودۆخی' }
    ]
  },
  {
    id: 'b2-34',
    level: 'B2',
    title: 'The Paradox of Choice',
    titleKurdish: 'دژایەتییا هەلبژارتنێ (پارادۆکس ئۆف چۆیس)',
    dialogue: [
      { speaker: 'Sama', text: 'Having too many choices can lead to decision paralysis and decreased satisfaction.', translation: 'هەبوونا هەلبژارتنێن زۆر دشێت ببیتە ئەگەرێ پەککەفتنا بڕیاردانێ و کێمبوونا رازیبوونێ.' },
      { speaker: 'Omar', text: 'I feel that daily when trying to pick a movie on streaming services.', translation: 'ئەز رۆژانە هەست ب وێ چەندێ دکەم دەمێ هەوڵ ددەم فیلمەک هەلبژێرم ل سەر خزمەتگوزاریێن ستریمی.' },
      { speaker: 'Sama', text: 'Social comparison also plays a role; we always worry we didn\'t pick the "best" option.', translation: 'بەراوردکرنا جڤاکی ژی دەورێ خوە هەیە؛ ئەم هەر دەم دترسین کو مە "باشترین" بژاردە هەڵنەبژاردبیت.' },
      { speaker: 'Omar', text: 'Maybe limiting our options intentionally can lead to more freedom and peace.', translation: 'بێگومان سنووردارکرنا بژاردەیێن مە ب مەرەم دشێت ببیتە ئەگەرێ ئازادی و ئارامییەکا پتر.' },
      { speaker: 'Sama', text: 'Selective ignorance and focusing on what truly matters is a vital skill.', translation: 'پشتگوێخستنا دەستنیشانکری و گرنگیدان ب وێ چەندێ یا ب راستی گرنگە، بەهرەیەکا فەرە.' }
    ],
    vocabulary: [
      { word: 'Paralysis', translation: 'ئیفلیجبوون / پەککەفتن' },
      { word: 'Satisfaction', translation: 'رازیبوون / دڵخۆشی' },
      { word: 'Comparison', translation: 'بەراوردکردن' },
      { word: 'Ignorance', translation: 'نە-زانی / پشتگوێخستن' }
    ]
  },
  {
    id: 'b2-35',
    level: 'B2',
    title: 'Gentrification and Community Identity',
    titleKurdish: 'گۆهۆڕینا جڤاکی یا ناڤچەیێ و ناسنامەیا جڤاکی',
    dialogue: [
      { speaker: 'Activist', text: 'New developments are erasing the cultural heritage of this historic neighborhood.', translation: 'گەشەپێدانێن نوو میراتێ کەلتووری یێ ڤێ گەڕەکا دیرۆکی ژ ناڤ دبن.' },
      { speaker: 'Developer', text: 'We are bringing investment and revitalizing dilapidated areas.', translation: 'ئەم وەبەرهێنانێ دئینن و ناوچەیێن وێرانبوویی دووبارە ئاڤا دکەن.' },
      { speaker: 'Activist', text: 'But you are displacing local residents who can no longer afford the rent.', translation: 'لێ تو نیشتەجێبوویێن ناوخۆیی ل جهێ وان دەردخەی یێن کو ئێدی نەشێن کرێیا خانی بدەن.' },
      { speaker: 'Developer', text: 'The increased property tax revenue benefits the city as a whole.', translation: 'زێدەبوونا داهاتێ باجا مۆڵکان مفا دگەهینتە هەمی باژێڕی.' },
      { speaker: 'Activist', text: 'Economic growth shouldn\'t come at the expense of social justice and inclusion.', translation: 'گەشەیا ئابووری نابیت ل سەر حیسابا دادپەروەرییا جڤاکی و گشتگیریێ بیت.' }
    ],
    vocabulary: [
      { word: 'Dilapidated', translation: 'وێرانبوویی / کەڤن و کۆن' },
      { word: 'Displacing', translation: 'دەرکێشان ژ جهـ / گواستنەووە' },
      { word: 'Revenue', translation: 'داهات / قازانجا گشتی' },
      { word: 'Expense', translation: 'تێچوون / باج' }
    ]
  },
  {
    id: 'b2-36',
    level: 'B2',
    title: 'The Psychology of Influence and Persuasion',
    titleKurdish: 'دەروونناسییا کارتێکرن و قەناعەت-پێکردنێ',
    dialogue: [
      { speaker: 'Speaker', text: 'Reciprocity is a powerful principle; people feel obligated to give back after receiving something.', translation: 'دووبارە-کرنەوە (ڕێسیپرۆسیتی) پرەنسیپەکێ ب هێزە؛ خەڵک هەست ب پێتڤیاتیێ دکەن کو تشتەکی بدەنەڤە پشتی تشتەک وەرگرتی.' },
      { speaker: 'Audience', text: 'How can we identify and resist unethical persuasion techniques in advertising?', translation: 'ئەم چەوا دشێین تەکنیکێن قەناعەت-پێکردنێ یێن نە-ئەخلاقی د ریکلامان دا بدۆزینەڤە و بەرگریێ لێ بکەین؟' },
      { speaker: 'Speaker', text: 'Look for "scarcity" tactics and false urgency designed to bypass your logical reasoning.', translation: 'ل دویڤ تەکتیکێن "کێم-بوونێ" و وەهمێ ب پەلە-بوونێ بگەڕێ یێن کو هاتیینە دیزاینکرن دا کو عەقڵێ تە یێ ژیر ببۆرینن.' },
      { speaker: 'Audience', text: 'Social proof also seems to influence our decisions unconsciously.', translation: 'بەڵگەیێ جڤاکی ژی دیارە ب شێوازەکێ نە-ئاگەهانە کارتێکرنێ ل بڕیارێن مە دکەت.' },
      { speaker: 'Speaker', text: 'Awareness of these psychological triggers is your best defense.', translation: 'ئاگەهداری ژ ڤان ئەگەرێن دەروونی باشترین بەرگرییا تە یە.' }
    ],
    vocabulary: [
      { word: 'Reciprocity', translation: 'بەرامبەر-بەرامبەر / کارلێکا دوقۆڵی' },
      { word: 'Obligated', translation: 'پێتڤی / مەجبوور' },
      { word: 'Scarcity', translation: 'کێم-بوون / دەگمەنی' },
      { word: 'Unconsciously', translation: 'بێ-ئاگەهانە' }
    ]
  },
  {
    id: 'b2-37',
    level: 'B2',
    title: 'Sustainable Agriculture and Food Security',
    titleKurdish: 'چاندنا بەردەوام و ئاسایشا خوارنێ',
    dialogue: [
      { speaker: 'Agronomist', text: 'Regenerative farming restores soil health and sequesters carbon.', translation: 'چاندنا دووبارە-ئاڤاکەر تەندروستییا ئاخێ دزڤڕینیتەڤە و کاربۆنێ کۆم دکەت.' },
      { speaker: 'Farmer', text: 'The initial cost of transitioning away from chemical pesticides is a deterrent.', translation: 'تێچوونا دەستپێکێ یا گوهۆڕینا شێوازی و دویرکەفتن ژ دەرمانێن کیمیاوی ئاستەنگەکا هاندەرە (دیتێرێنت).' },
      { speaker: 'Agronomist', text: 'Long-term yields are more stable and input costs decrease over time.', translation: 'بەرهەمێن دەم-درێژ جێگیرترن و تێچوونا ژێدەران ب دەمی کێم دبیت.' },
      { speaker: 'Farmer', text: 'Global supply chains are vulnerable to geopolitical shocks, affecting food security.', translation: 'زنجیرەیا دابینکرنا جیهانی لاوازە بەرامبەر شۆکێن جیۆ-سیاسی، کو کارتێکرنێ ل ئاسایشا خوارنێ دکەت.' },
      { speaker: 'Agronomist', text: 'Localized food systems and vertical farming can enhance community resilience.', translation: 'سیستەمێن خوارنێ یێن ناوخۆیی و چاندنا ستوونی دشێن خۆڕاگرییا جڤاکی پتر بکەن.' }
    ],
    vocabulary: [
      { word: 'Regenerative', translation: 'دووبارە-ئاڤاکەر / نوو-ببیتەڤە' },
      { word: 'Pesticides', translation: 'دەرمانێن قڕکەرێن مێشومۆران' },
      { word: 'Deterrent', translation: 'ئاستەنگ / رێگر' },
      { word: 'Resilience', translation: 'خۆڕاگری / توانایا بەرهەنگاریێ' }
    ]
  },
  {
    id: 'b2-38',
    level: 'B2',
    title: 'Philosophy of Ethics in Journalism',
    titleKurdish: 'فەلسەفەیا ئەخلاقێ د رۆژنامەڤانیێ دا',
    dialogue: [
      { speaker: 'Editor', text: 'The tension between the public\'s "right to know" and the individual\'s "right to privacy" is constant.', translation: 'گرژییا د ناڤبەرا "مافێ زانینا خەڵکی" و "مافێ تایبەتمەندییا تاکەکەسی" یا بەردەوامە.' },
      { speaker: 'Reporter', text: 'Our primary duty is to reveal the truth, regardless of the consequences for the subjects.', translation: 'ئەرکێ مە یێ سەرەکی ئاشکراکردنا راستیێ یە، چ ئەنجام هەبن بۆ وان کەسێن بابەت ل سەر.' },
      { speaker: 'Editor', text: 'But sensationalism for the sake of clicks undermines our credibility.', translation: 'لێ مەزنکرنا بابەتان (سێنسەیشنالیزم) تنێ بۆ کلیکان، باوەرییا مە ژ ناڤ دبەت.' },
      { speaker: 'Reporter', text: 'Investigative journalism requires protected whistleblowers to expose corruption.', translation: 'رۆژنامەڤانییا ڤەکۆڵینێ پێتڤی ب "راسپێرێن پاراستی" (ویستڵبلۆوێرز) هەیە دا کو گەندەڵیێ ئاشکرا کەن.' },
      { speaker: 'Editor', text: 'Verification is paramount; an unverified rumor can cause irreparable harm.', translation: 'پشتراستکردن ژ هەموو تشتەکی گرنگترە؛ گۆتگۆتکەکا بێ-پشتراستی دشێت زیانەکا نە-قەرەبوو پەیدا بکەت.' }
    ],
    vocabulary: [
      { word: 'Sensationalism', translation: 'مەزنکرنا بابەتان بۆ سەرنجراکێشانێ' },
      { word: 'Whistleblowers', translation: 'کەسێن نهێنییان ئاشکرا دکەن (راسپێر)' },
      { word: 'Paramount', translation: 'هەرە گرنگ / ل سەر هەموو تشتەکی' },
      { word: 'Irreparable', translation: 'نە-قەرەبووکرن / بێ-چارە' }
    ]
  },
  {
    id: 'b2-39',
    level: 'B2',
    title: 'The Future of Public Transit',
    titleKurdish: 'پاشەڕۆژا گواستنەوا گشتی',
    dialogue: [
      { speaker: 'Transit Planner', text: 'Integrating micro-mobility, like e-scooters, solves the "last-mile" problem of commuting.', translation: 'تێکەڵکردنا "مایکرۆ-مۆبیلیتی"، وەک سۆکۆتەرێن ئەلیکترۆنی، کێشەییا "مایلا دوماهییێ" یا گەشتێن رۆژانە چارەسەر دکەت.' },
      { speaker: 'Citizen', text: 'Are autonomous buses safer and more efficient than human-driven ones?', translation: 'ئەرێ پاسێن خۆکار (ئۆتۆنۆمۆس) ب سلامەتتر و ب کارامەترن ژ یێن کو مرۆڤ لێ دهاژۆت؟' },
      { speaker: 'Transit Planner', text: 'They eliminate human error and can optimize routes in real-time to reduce congestion.', translation: 'ئەو خەلەتییا مرۆڤی ناهێلن و دشێن رێیان ب رۆهن درۆستی دیار کەن دا کو جەنجاڵیێ کێم بکەن.' },
      { speaker: 'Citizen', text: 'Public infrastructure needs massive upgrades to support these new technologies.', translation: 'ژێرخانا گشتی پێتڤی ب پێشڤەبرنا مەزن هەیە دا کو پشتەڤانییا ڤان تەکنەلۆژیایێن نوو بکەت.' },
      { speaker: 'Transit Planner', text: 'The long-term benefits in terms of carbon reduction and urban space are immense.', translation: 'مفایێن دەم-درێژ د بوارێن کێمکرنا کاربۆنێ و پەیداکردنا جهێ باژێڕی دا گەلەک مەزنن.' }
    ],
    vocabulary: [
      { word: 'Commuting', translation: 'رێکا رۆژانە یا ناڤبەرا مال و کار' },
      { word: 'Autonomous', translation: 'خۆکار / سەربەخۆ' },
      { word: 'Congestion', translation: 'جەنجاڵی / قەرەباڵغی' },
      { word: 'Commute', translation: 'گەشتا رۆژانە' }
    ]
  },
  {
    id: 'b2-40',
    level: 'B2',
    title: 'Intercultural Communication at Work',
    titleKurdish: 'پەیوەندیا ناڤ-کەلتووری ل سەر کاری',
    dialogue: [
      { speaker: 'Consultant', text: 'Understanding high-context vs. low-context cultures is essential for global business.', translation: 'تێگەهشتن د ناڤبەرا کەلتوورێن "Context-یێ بلند" و "Context-یێ نزم" دا فەرە بۆ کارێن جیهانی.' },
      { speaker: 'Manager', text: 'In some cultures, silence is a sign of respect, while in others, it\'s awkward.', translation: 'د هندەک کەلتووران دا، بێدەنگی نیشانەکا رێزێ یە، د دەمەکێ دا د یێن دی دا تشتەکێ غەریبە.' },
      { speaker: 'Consultant', text: 'Avoid ethnocentrism; don\'t judge other behaviors by the standards of your own culture.', translation: 'خوە دویر بگرە ژ "نەتەوە-سەنتەری" (ئێسنۆسێنتریزم)؛ رەفتارێن یێن دی ب پێوەرێن کەلتوورێ خوە هەلسەنگاندن نەکە.' },
      { speaker: 'Manager', text: 'Active listening and seeking clarification can prevent many misunderstandings.', translation: 'گوهداریکردنا چالاکانە و داخوازکردنا روونکردنەڤەیان دشێت رێ ل گەلەک تێنەگەهشتنان بگریت.' },
      { speaker: 'Consultant', text: 'Empathy is the bridge that connects diverse teams together.', translation: 'هەڤسۆزی (ئێمپاسی) ئەو پرە یە یا کو تیمێن جۆراوجۆر ب ئێکڤە گرێ ددەت.' }
    ],
    vocabulary: [
      { word: 'Intercultural', translation: 'ناڤ-کەلتووری / نیوان کەلتووری' },
      { word: 'Ethnocentrism', translation: 'نەتەوە-سەنتەری / خۆ-گرنگی-پێدان' },
      { word: 'Clarification', translation: 'روونکردنەڤە / رۆهنکردن' },
      { word: 'Empathy', translation: 'هەڤسۆزی / هەست-پێکردن ب یێن دی' }
    ]
  },
  {
    id: 'b2-41',
    level: 'B2',
    title: 'AI and the Future of Art',
    titleKurdish: 'ژیرییا دەستکرد و پاشەڕۆژا هونەری',
    dialogue: [
      { speaker: 'Artist', text: 'Is AI-generated art a threat to human creativity or a new tool for expression?', translation: 'ئەرێ هونەرێ ژلایێ ژیرییا دەستکرد ڤە هاتییە درۆستکرن مەترسییە بۆ داهێنانا مرۆڤی یان ئامرازەکێ نوویە بۆ دیارکرنا هەستان؟' },
      { speaker: 'Technologist', text: 'I see it as a collaborator that can push boundaries of what is possible.', translation: 'ئەز وێ وەک هەڤکارەک دبینم کو دشێت سنووران تێپەرینیت بەرەڤ ئەو تشتێن کو د بنەرا دا د بەرکارن.' },
      { speaker: 'Artist', text: 'But can a machine ever truly understand the emotional depth of a masterpiece?', translation: 'لێ ئەرێ ئامیرەک هەر دشێت ب راستی تێبگەهیت ژ کویراتییا هەستی یا شاھکارەکی؟' },
      { speaker: 'Technologist', text: 'It analyzes patterns, but the "soul" of the art still comes from the human prompt.', translation: 'ئەو شێوازان شیکار دکەت، لێ "رۆحا" هونەری هێشتا ژ ئاراستەکرنا (پرۆمپتێ) مرۆڤی دهێت.' },
      { speaker: 'Artist', text: 'We must redefine what it means to be an "author" in this new age.', translation: 'پێتڤییە ئەم ژ نوو پێناسا هندێ بکەین کا رامانا "نووسەر-بوونێ" چییە د ڤی سەردەمێ نوو دا.' }
    ],
    vocabulary: [
      { word: 'Creativity', translation: 'داهێنان' },
      { word: 'Collaborator', translation: 'هەڤکار' },
      { word: 'Masterpiece', translation: 'شاھکار / کارێ نایاب' },
      { word: 'Prompt', translation: 'ئاراستەکردن / داخواز' }
    ]
  },
  {
    id: 'b2-42',
    level: 'B2',
    title: 'Biomimicry in Engineering',
    titleKurdish: 'لاساییکردنەوەیا زیندی (بایۆ-میمیکری) د ئەندازیاریێ دا',
    dialogue: [
      { speaker: 'Engineer', text: 'Biomimicry involves emulating nature\'s time-tested patterns and strategies to solve human challenges.', translation: 'لاساییکردنەوەیا زیندی (بایۆ-میمیکری) پێکدهێت ژ چاڤلێکرنا شێواز و ستراتیژییەتێن سرۆشتی یێن تاقیکری ب دەمی بۆ چارەسەرکردنا ئاستەنگێن مرۆڤی.' },
      { speaker: 'Student', text: 'Like how the Shinkansen train\'s design was inspired by the kingfisher\'s beak?', translation: 'وەکی چەوا دیزاینا شەمەندەفەرا شینکانسێن ئیلهام ژ دەنگێ بالندێ ماسیگر (کینگ فیشەر) وەرگرتی؟' },
      { speaker: 'Engineer', text: 'Exactly. It reduced noise and increased aerodynamics significantly.', translation: 'ب درۆستی. ئەوی دەنگە-دەنگ کێم کر و ئایرۆدینامیکا وێ ب شێوازەکێ بەرچاڤ زێدە کر.' },
      { speaker: 'Student', text: 'Nature is a billion-year-old laboratory with efficient, sustainable solutions.', translation: 'سرۆشت تاقیگەهەکا ملیار ساڵە دگەل چارەسەریێن ب کارامە و بەردەوام.' },
      { speaker: 'Engineer', text: 'Studying structural colors in butterflies could lead to dye-free fabrics.', translation: 'خواندنا رەنگێن پێکهاتەیی د پەپوولان دا دشێت ببیتە ئەگەرێ پەیدابوونا قوماشێن بێ-بۆیەیێن کیمیاوی.' }
    ],
    vocabulary: [
      { word: 'Emulating', translation: 'چاڤلێکرن / لاساییکردنەوە' },
      { word: 'Aerodynamics', translation: 'ئایرۆدینامیکا / جولانەوا هەوایێ' },
      { word: 'Efficient', translation: 'ب کارامە / ب مفا' },
      { word: 'Inspiration', translation: 'ئیلهام / هاندەری هزر' }
    ]
  },
  {
    id: 'b2-43',
    level: 'B2',
    title: 'The Sharing Economy and Regulation',
    titleKurdish: 'ئابوورا پشکداریکردنێ و رێکخستن',
    dialogue: [
      { speaker: 'Economist', text: 'The sharing economy has disrupted traditional industries like hospitality and transport.', translation: 'ئابوورا پشکداریکردنێ (شێرینگ ئیکۆنۆمی) پیشەسازییێن کەڤن یێن وەک مێوانداری و گواستنەووەی تێکدان.' },
      { speaker: 'Policy Maker', text: 'We need to regulate these platforms to ensure fair competition and worker protection.', translation: 'پێتڤییە ئەم ڤان پلاتفۆرمان رێک بێخین دا کو هەڤرکییا دادپەروەر و پاراستنا کارمەندان دابین بکەین.' },
      { speaker: 'Economist', text: 'But over-regulation might stifle the innovation that makes these services valuable.', translation: 'لێ زێدە-رێکخستن رەنگە نووگەرییا وێ خەندقینیت یا کو ڤان خزمەتگوزارییان ب مفا دکەت.' },
      { speaker: 'Policy Maker', text: 'True, but the gig economy often lacks social safety nets for its participants.', translation: 'راستە، لێ ئابوورا پارچە-کار (گیگ ئیکۆنۆمی) زۆربەیا جاران چو تۆرێن پاراستنا جڤاکی بۆ پشکداران نینن.' },
      { speaker: 'Economist', text: 'The challenge is finding a balance that fosters growth while protecting public interests.', translation: 'ئاستەنگ دیتنا هاوسەنگییەکێ یە کو گەشەیێ پێش بێخیت د دەمەکێ دا کو بەرژەوەندییێن گشتی بپارێزیت.' }
    ],
    vocabulary: [
      { word: 'Hospitality', translation: 'مێوانداری' },
      { word: 'Regulate', translation: 'رێکخستن / یاسایی کردن' },
      { word: 'Stifle', translation: 'خەندقاندن / رێگری' },
      { word: 'Innovation', translation: 'نووگەری' }
    ]
  },
  {
    id: 'b2-44',
    level: 'B2',
    title: 'Philosophy of Mind: Consciousness',
    titleKurdish: 'فەلسەفەیا مێشکی: ئاگەهداری (هۆشیاری)',
    dialogue: [
      { speaker: 'Philosopher', text: 'The "Hard Problem" of consciousness asks how physical processes in the brain give rise to subjective experience.', translation: '"ئاریشەیا ب زەحمەت" یا ئاگەهداریێ پرسێ دکەت کا چەوا کردارێن جەستەیی د مێشکی دا دبنە ئەگەرێ پەیدابوونا ئەزموونا تاکەکەسی (سەبجێکتیڤ).' },
      { speaker: 'Scientist', text: 'Neuroscience maps neural correlates, but it doesn\'t explain "qualia" yet.', translation: 'زانستێ دەماری (نیورۆساینس) نەخشەیێن پەیوەندیێن دەماری دکێشیت، لێ هێشتا نەشێت "کوالیا" (هەستێن جەوهەری) روون بکەتەڤە.' },
      { speaker: 'Philosopher', text: 'Could consciousness be a fundamental property of the universe, like mass or charge?', translation: 'ئەرێ دشێت ئاگەهداری تشتەکێ بنەڕەتی یێ گەردوونێ بیت، وەکی کێش یان بارگا ئەلیکترۆنی؟' },
      { speaker: 'Scientist', text: 'That view, known as panpsychism, avoids the problem of emergence but has its own hurdles.', translation: 'ئەو هزرە، کو ب "پانسایکیزم" دهێتە نیاسین، خوە ژ ئاریشەییا پەیدابوونێ دویر دکەت لێ مەرج و ئاستەنگێن خوە یێن هەین.' },
      { speaker: 'Philosopher', text: 'Until we bridging the gap between objective data and subjective feeling, the mystery remains.', translation: 'هەتا کو ئەم کەلەمێ د ناڤبەرا داتایێن رەها و هەستێن تاکەکەسی دا پڕ نەکەین، ئەڤ مەتەلە دێ هەر مینیت.' }
    ],
    vocabulary: [
      { word: 'Consciousness', translation: 'ئاگەهداری / هۆشیاری' },
      { word: 'Subjective', translation: 'تاکەکەسی / رێژەیی' },
      { word: 'Fundamental', translation: 'بنەڕەتی' },
      { word: 'Emergence', translation: 'دەرکەفتن / پەیدابوون' }
    ]
  },
  {
    id: 'b2-45',
    level: 'B2',
    title: 'The Future of Remote Medicine (Telehealth)',
    titleKurdish: 'پاشەڕۆژا پزیشکییا ژ دویر (تێلە-هێڵس)',
    dialogue: [
      { speaker: 'Doctor', text: 'Telehealth has bridged the gap for patients in rural areas without immediate specialist access.', translation: 'پزیشکییا ژ دویر کەلەم بڕی یە بۆ نەخۆشێن ل گوندان یێن کو نەشێن ب زوویی بگەهنە پزیشکێن پسپۆڕ.' },
      { speaker: 'Patient', text: 'Can a virtual consultation truly substitute for an in-person physical exam?', translation: 'ئەرێ روونشتنەکا ڤێرچوەڵ ب راستی دشێت ببیتە بەدیلێ پشکنینەکا ئاسایی یا جەستەیی؟' },
      { speaker: 'Doctor', text: 'Remote monitoring devices and AI diagnostics are narrowing that divide.', translation: 'ئامرازێن چاڤدێریا ژ دویر و دەستنیشانکردنا ژیرییا دەستکرد وێ جوداهیێ کێم دکەن.' },
      { speaker: 'Patient', text: 'Data security is my biggest concern regarding my sensitive medical history.', translation: 'ئاسایشا داتایان مەزترین نیگەرانییا منە دەربارەی دیرۆکا من یا پزیشکی یا هەستیار.' },
      { speaker: 'Doctor', text: 'Encrypted platforms and strict protocols are mandatory to maintain patient confidentiality.', translation: 'پلاتفۆرمێن تەشفیرکری و پڕۆتۆکۆلێن توند فەرن دا کو نهێنیا نەخۆشی بپارێزن.' }
    ],
    vocabulary: [
      { word: 'Telehealth', translation: 'پزیشکییا ژ دویر' },
      { word: 'Consultation', translation: 'راوێژکاری / گۆفتۆگۆ' },
      { word: 'Diagnostics', translation: 'دەستنیشانکردنا نەخۆشیێ' },
      { word: 'Confidentiality', translation: 'نهێنی-پارێزی' }
    ]
  },
  {
    id: 'b2-46',
    level: 'B2',
    title: 'Conflict Resolution and Active Listening',
    titleKurdish: 'چارەسەرکردنا پێکدادانان و گوهداریکردنا چالاکانە',
    dialogue: [
      { speaker: 'Mediator', text: 'The key to conflict resolution is validating the other party\'s feelings, even if you disagree with their logic.', translation: 'تشتێ سەرەکی بۆ چارەسەرکردنا کێشەیان ئەوە کو تو راستییا هەستێن لایەنێ بەرامبەر بسەلمینی، تەنانەت ئەگەر تو دگەل مێنتیقێ وان نەبی ژی.' },
      { speaker: 'Colleague', text: 'I struggle to remain neutral when the criticism feels personal.', translation: 'ئەز ب زەحمەت دشێم بێ-لایەن بمینم دەمێ رەخنە وەسا دیار دبیت کو یا "کەسی" یە.' },
      { speaker: 'Mediator', text: 'Use "I" statements instead of "you" statements to avoid triggering defensiveness.', translation: 'پەیڤێن "ئەز" بکاربینە ل شوینا "تۆ" دا کو رێ بگری ل پەیدابوونا هەستا بەرگریێ (دێفێنسێڤنێس).' },
      { speaker: 'Colleague', text: 'Active listening involves summarizing what the other person said to ensure accurate understanding.', translation: 'گوهداریکردنا چالاکانە پێکدهێت ژ کورتکرنا وێ چەندێ یا کەسێ دی گۆتی دا کو پشتراست بی ژ تێگەهشتنەکا درۆست.' },
      { speaker: 'Mediator', text: 'Finding common ground is the first step toward a collaborative solution.', translation: 'دیتنا کێلگەهەکێ هەڤپشک پێنگاڤا ئێکێ یە بەرەڤ چارەسەرییەکا هەڤپشک.' }
    ],
    vocabulary: [
      { word: 'Validating', translation: 'سەلماندنا راستیێ / رێزگرتن' },
      { word: 'Neutral', translation: 'بێ-لایەن' },
      { word: 'Defensiveness', translation: 'حاڵەتێ بەرگریێ' },
      { word: 'Collaborative', translation: 'هەڤپشک / کارێ ب کۆم' }
    ]
  },
  {
    id: 'b2-47',
    level: 'B2',
    title: 'The Ethics of Self-Driving Cars',
    titleKurdish: 'ئەخلاقییا ترۆمبێلێن بێ-شۆفێر',
    dialogue: [
      { speaker: 'Ethicist', text: 'The "Trolley Problem" is a classic thought experiment applied to autonomous vehicle algorithms.', translation: '"ئاریشەیا ترامێ" (ترۆلی پرۆبلێم) ئەزموونەکا هزری یا کلاسیکی یە کو ل سەر ئەلگۆریتمێن ترۆمبێلێن خۆکار دهێتە جێبەجێکرن.' },
      { speaker: 'Programmer', text: 'Should the car prioritize the safety of its passengers or minimize overall loss of life?', translation: 'ئەرێ پێتڤییە ترۆمبێل گرنگیێ بدەتە سلامەتییا سەرنشینێن خوە یان کێمکرنا گشتییا ژناڤچوونا ژیانێ؟' },
      { speaker: 'Ethicist', text: 'If consumers know a car might sacrifice them in a crisis, will they ever buy it?', translation: 'ئەگەر بەکاربەر بزانن کو رەنگە ترۆمبێلەک وان بکەتە قوربانی د قەیرانەکێ دا، ئەرێ چو جاران دێ وێ کڕن؟' },
      { speaker: 'Programmer', text: 'We are moving toward transparent frameworks that quantify these difficult moral choices.', translation: 'ئەم بەرەڤ فریمورکێن رۆهن دچین یێن کو ڤان هەلبژارتنێن ئەخلاقی یێن ب زەحمەت ب هژمار دیار دکەن.' },
      { speaker: 'Ethicist', text: 'Ultimately, we are delegating life-and-death decisions to lines of code.', translation: 'ل دوماهییێ، ئەم بڕیارێن ژیان و مرنێ رادەستی چەند خەتێن کۆدی دکەین.' }
    ],
    vocabulary: [
      { word: 'Autonomous', translation: 'خۆکار / بێ-شۆفێر' },
      { word: 'Sacrifice', translation: 'قوربانیکردن' },
      { word: 'Quantify', translation: 'ب رێژە یان هژمار دیارکردن' },
      { word: 'Delegating', translation: 'رادەستکرن / سپاردن' }
    ]
  },
  {
    id: 'b2-48',
    level: 'B2',
    title: 'Economic Globalization: Pros and Cons',
    titleKurdish: 'جیهانگیرییا ئابووری: باشی و خرابی',
    dialogue: [
      { speaker: 'Sarmed', text: 'Globalization has lifted millions out of poverty by integrating them into the global market.', translation: 'جیهانگیریێ ملیۆنان کەس ژ هەژاریێ رزگار کرینە ب رێکا تێکەڵکردنا وان د ناڤ بازارێ جیهانی دا.' },
      { speaker: 'Layla', text: 'However, it has also led to job displacement in developed nations and environmental degradation.', translation: 'لێ، هەروەسا دبیتە ئەگەرێ ژ دەستدانا کاران ل وەلاتێن پێشکەفتی و تێکچوونا ژینگەی.' },
      { speaker: 'Sarmed', text: 'The exchange of culture and technology is a significant benefit that cannot be denied.', translation: 'گوهۆڕینا کەلتوور و تەکنەلۆژیایێ مفایەکێ مەزنە کو ناهێتە نکولیکردن (رەتکردن).' },
      { speaker: 'Layla', text: 'But wealth inequality is widening, as capital moves more freely than labor across borders.', translation: 'لێ نە-یەکسانییا سامانی یا بەرفرەهـ دبیت، چونکی سەرمایە پتر ب ئازادی دجوولێت ژ هێزا کاری ل سەر سنووران.' },
      { speaker: 'Sarmed', text: 'The goal should be fair trade, not just free trade.', translation: 'ئارمانج پێتڤییە بازرگانییا دادپەروەر بیت، نەک تەنێ بازرگانییا ئازاد.' }
    ],
    vocabulary: [
      { word: 'Poverty', translation: 'هەژاری' },
      { word: 'Degradation', translation: 'تێکچوون / دابەزین' },
      { word: 'Inequality', translation: 'نە-یەکسانی' },
      { word: 'Capital', translation: 'سەرمایە / دارایی' }
    ]
  },
  {
    id: 'b2-49',
    level: 'B2',
    title: 'The Role of Cryptocurrencies',
    titleKurdish: 'دەورێ دراڤێن دیجیتالی (کریپتۆ-کەرێنسی)',
    dialogue: [
      { speaker: 'Trader', text: 'Decentralized finance (DeFi) challenges the traditional banking monopoly.', translation: 'دارایییا نە-ناوەندی (دی-فای) هەڤرکییا قۆرخکارییا (مۆنۆپۆلی) بانکی یا کلاسیکی دکەت.' },
      { speaker: 'Banker', text: 'Without regulation, cryptocurrencies are volatile and prone to illegal activities.', translation: 'بێی رێکخستن، دراڤێن دیجیتالی یێن نە-جێگێرن و بۆ کارێن نە-یاسایی دهێنە بکارئینان.' },
      { speaker: 'Trader', text: 'Blockchain technology provides transparency and immutability that banks lack.', translation: 'تەکنەلۆژیا "بلۆک-چەین" رۆهنی و جێگیرییەکێ دابین دکەت کو بانک بۆ وێ د هەژارن.' },
      { speaker: 'Banker', text: 'Central banks are developing their own digital currencies to maintain stability.', translation: 'بانکێن ناوەندی دراڤێن خوە یێن دیجیتالی گەشە پێ ددەن دا کو سەقامگیریێ بپارێزن.' },
      { speaker: 'Trader', text: 'The true value lies in financial sovereignty for the individual.', translation: 'بهایێ راستی د سەروەرییا دارایی (سۆڤرێنتی) دا یە بۆ تاکەکەسی.' }
    ],
    vocabulary: [
      { word: 'Decentralized', translation: 'نە-ناوەندی' },
      { word: 'Volatile', translation: 'نە-جێگێر / ب لەز دگوهۆڕێت' },
      { word: 'Immutability', translation: 'نە-گوهۆڕی / جێگیری' },
      { word: 'Sovereignty', translation: 'سەروەری / سەربەخۆیی' }
    ]
  },
  {
    id: 'b2-50',
    level: 'B2',
    title: 'Psychology: The Power of Vulnerability',
    titleKurdish: 'دەروونناسی: هێزا "نەرم-بوونێ" (ڤۆلنەرابیلیتی)',
    dialogue: [
      { speaker: 'Therapist', text: 'Vulnerability is not weakness; it is the birthplace of connection and courage.', translation: '"نەرم-بوون" (ڤۆلنەرابیلیتی) نە لاوازی یە؛ بەڵکو جهێ ژدایکبوونا پەیوەندی و قارەمانییێ یە.' },
      { speaker: 'Client', text: 'But being open makes me feel exposed to judgment and rejection.', translation: 'لێ ڤەکری-بوون وا ل من دکەت هەست بکەم ئەز یێ بەرچاڤم بۆ بڕیاردان و رەتکردنێ.' },
      { speaker: 'Therapist', text: 'Authenticity requires us to be seen for who we really are, including our imperfections.', translation: 'راستەقینەیی پێتڤی ب وێ چەندێ هەیە ئەم وەکی خۆ بهێینە دیتن، ب هەمی کێماسییێن مە ڤە.' },
      { speaker: 'Client', text: 'How can I practice vulnerability in a toxic work environment?', translation: 'ئەز چەوا دشێم "ڤۆلنەرابیلیتی" پەیڕەو بکەم د ژینگەیەکا کاری یا توند و خراب دا؟' },
      { speaker: 'Therapist', text: 'Boundaries are essential; vulnerability without boundaries is not healthy.', translation: 'سنوور-دانان فەرە؛ "ڤۆلنەرابیلیتی" بێ سنوور تشتەکێ تەندروست نینە.' }
    ],
    vocabulary: [
      { word: 'Vulnerability', translation: 'نەرنی / برینداری / ڤەکراوەیی' },
      { word: 'Exposed', translation: 'بەرچاڤ / بێ-بەرگری' },
      { word: 'Imperfections', translation: 'کێماسییەکان / نە-تەواوی' },
      { word: 'Toxic', translation: 'ژەهراوی / خراب' }
    ]
  },
  {
    id: 'b2-51',
    level: 'B2',
    title: 'The Philosophy of Altruism',
    titleKurdish: 'فەلسەفەیا دیترخوازی (ئاڵترویزیم)',
    dialogue: [
      { speaker: 'Alan', text: 'Effective altruism suggests we should use evidence and reason to maximize the good we do.', translation: '"دیترخوازییا ب مفا" (ئیفێکتیڤ ئاڵترویزیم) پێشنیاز دکەت کو پێتڤییە ئەم بەڵگە و عەقڵی بکاربینن بۆ زێدەکرنا وێ چاکەیێ یا ئەم دکەین.' },
      { speaker: 'Beri', text: 'Is it truly altruistic if we are calculating the impact instead of following our hearts?', translation: 'ئەرێ ب راستی ئەو دێ هەر وەک چاکە هێتە هەژمارتن ئەگەر ئەم ل سەر حسابا کارتێکرنێ کار بکەین ل شوینا دۆوچوونا دڵێ خۆ؟' },
      { speaker: 'Alan', text: 'The heart initiates the desire, but reason ensures the resources aren\'t wasted.', translation: 'دڵ ئارەزوویێ دەستپێ دکەت، لێ ژیری (عەقڵ) پشتراست دبیت کو ژێدەر خەسار نەبن.' },
      { speaker: 'Beri', text: 'Should we prioritize global poverty over local community issues?', translation: 'ئەرێ پێتڤییە ئەم هەژارییا جیهانی بەراهی بدەینە پێش جڤاکێ خوە یێ ناوخۆیی؟' },
      { speaker: 'Alan', text: 'From an impartial perspective, every life has equal value regardless of geography.', translation: 'ژ دیدەگایەکا بێ-لایەن، هەر ژیانەک بهایەکێ یەکسان یێ هەی بێ وێ چەندێ کا ل کیرێ یە.' }
    ],
    vocabulary: [
      { word: 'Altruism', translation: 'دیترخوازی / خۆ-نەکردنە-سەنتەر' },
      { word: 'Impartial', translation: 'بێ-لایەن / دادپەروەر' },
      { word: 'Initiates', translation: 'دەستپێکردن' },
      { word: 'Resources', translation: 'ژێدەرەکان / تواناکان' }
    ]
  },
  {
    id: 'b2-52',
    level: 'B2',
    title: 'Neuroscience: Plasticity of the Brain',
    titleKurdish: 'زانستێ دەماری: نەرمییا مێشکی (پلاستیسیتی)',
    dialogue: [
      { speaker: 'Lecturer', text: 'Neuroplasticity is the brain\'s ability to reorganize itself by forming new neural connections throughout life.', translation: '"نیورۆپلاستیسیتی" شیانا مێشکی یە بۆ رێکخستنەوا خوە ب رێکا درۆستکرنا پەیوەندیێن نوو یێن دەماری د درێژاهییا ژیانێ دا.' },
      { speaker: 'Student', text: 'Does that mean we can truly "rewire" our brains to learn complex new skills at any age?', translation: 'ئەرێ ئەڤە ب وێ رامانێ یە کو ئەم ب راستی دشێین مێشکێ خوە "دووبارە وایەر بکەین" دا کو بەهرەیێن ئاڵۆز فێربی د هەر تەمەنەکی دا؟' },
      { speaker: 'Lecturer', text: 'Yes, although the rate of plasticity decreases as we get older.', translation: 'بەلێ، هەرچەندە رێژەیا ڤێ "نەرمیێ" کێم دبیت دەمێ ئەم مەزن دبن.' },
      { speaker: 'Student', text: 'Does this apply to recovering from traumatic brain injuries as well?', translation: 'ئەرێ ئەڤە بۆ باشبوونا ژ زەحمەتییێن مێشکی (بریندارییان) ژی درستە؟' },
      { speaker: 'Lecturer', text: 'The brain can often compensate for damaged areas by redirecting functions to healthy regions.', translation: 'مێشک زۆربەیا جاران دشێت قەرەبوویا پارچێن زیان-گەهشتی بکەت ب رێکا گواستنەووەیا فەنکشنان بۆ پارچێن ساخلەم.' }
    ],
    vocabulary: [
      { word: 'Plasticity', translation: 'نەرمی / گۆهۆڕین-پەزیری' },
      { word: 'Rewire', translation: 'بەستنەووەی نوێ (د ناڤ مێشکیدا)' },
      { word: 'Trajectory', translation: 'ئاراستە / رێباز' },
      { word: 'Compensate', translation: 'قەرەبووکردن' }
    ]
  },
  {
    id: 'b2-53',
    level: 'B2',
    title: 'The Future of Vertical Farming',
    titleKurdish: 'پاشەڕۆژا چاندنا ستوونی (ڤێرتیکاڵ فارمینگ)',
    dialogue: [
      { speaker: 'Consultant', text: 'Vertical farming uses controlled-environment agriculture to optimize plant growth in urban settings.', translation: 'چاندنا ستوونی چاندنا ژینگەی-کۆنتڕۆڵکری بکار دئینیت دا کو گەشەیا رووەکان ل ناڤ باژێڕان باشتر بکەت.' },
      { speaker: 'Urbanist', text: 'It drastically reduces water usage and eliminates the need for long-distance transport.', translation: 'ئەو ب شێوازەکێ دژوار بکارئینانا ئاڤێ کێم دکەت و پێتڤیاتی ب گواستنەووەیا دوور-مەودا ناهێلیت.' },
      { speaker: 'Consultant', text: 'The high energy consumption for LED lighting is currently the main drawback.', translation: 'خەرجکردنا زێدە یا وزەیێ بۆ رووناهییا لێد (LED) نوکە ئاستەنگا سەرەکی یە.' },
      { speaker: 'Urbanist', text: 'If we power these farms with renewable energy, they become a truly sustainable solution.', translation: 'ئەگەر ئەم ڤان کێڵگەهان ب وزەیا نوو-ببیتەڤە بکاربێخین، ئەو دبنە چارەسەرییەکا ب راستی بەردەوام.' },
      { speaker: 'Consultant', text: 'They also provide year-round harvests regardless of seasonal climate change.', translation: 'هەروەسا ئەو بەرهەمێن هەمی سالێ دابین دکەن بێی هەژمارکردنا گوهۆڕینێن سەقای یێن وەرزان.' }
    ],
    vocabulary: [
      { word: 'Vertical', translation: 'ستوونی / بەرەو ژوور' },
      { word: 'Drawback', translation: 'لایەنێ نەرێنی / ئاریشە' },
      { word: 'Harvests', translation: 'بەرهەمێن چاندنێ' },
      { word: 'Urban', translation: 'باژێڕی' }
    ]
  },
  {
    id: 'b2-54',
    level: 'B2',
    title: 'Philosophy: Existentialism and Meaning',
    titleKurdish: 'فەلسەفە: هەبوون-گەرایی (ئێکزیستێنشالیزم) و رامان',
    dialogue: [
      { speaker: 'Student', text: 'If the universe has no inherent meaning, does that make our efforts futile?', translation: 'ئەگەر گەردوونێ چو رامانەکا بنەڕەتی نەبیت، ئەرێ ئەڤە هەوڵێن مە دکەتە تشتەکێ بێ-مفا؟' },
      { speaker: 'Professor', text: 'Existentialists argue that the absence of preordained meaning gives us the freedom to create our own.', translation: '"ئێکزیستێنشالیست" دبێژن کو نەبوونا رامانەکا پێشوەخت، ئازادیێ ددەتە مە دا کو ئەم یا خوە درۆست بکەین.' },
      { speaker: 'Student', text: 'But that responsibility is terrifying. We are "condemned to be free," as Sartre said.', translation: 'لێ ئەو بەرپرسیارەتییە یا ترسناکە. ئەم "مەجبوورین ئازاد بین"، وەک سارتەر گۆتی.' },
      { speaker: 'Professor', text: 'Terrifying, yes, but also empowering. We are the authors of our own lives.', translation: 'ترسناکە، بەلێ، لێ هەروەسا هێز-بەخش ژی یە. ئەم نووسەرێن ژیانا خوە نە.' },
      { speaker: 'Student', text: 'Authenticity means living in accordance with our chosen values, not societal expectations.', translation: 'راستەقینەیی رامانا وێ ئەوە کو ئەم ل دووڤ بهایێن خوە یێن هەلبژاردی بژین، نەک ل دووڤ پێشبینییێن جڤاکی.' }
    ],
    vocabulary: [
      { word: 'Inherent', translation: 'بنەڕەتی / تێدا-هەی' },
      { word: 'Futile', translation: 'بێ-مفا / بێ-سود' },
      { word: 'Condemned', translation: 'مەحکوم / مەجبوور' },
      { word: 'Authenticity', translation: 'راستەقینەیی / رەسەنایەتی' }
    ]
  },
  {
    id: 'b2-55',
    level: 'B2',
    title: 'The Gig Economy and Labor Rights',
    titleKurdish: 'ئابوورا پارچە-کار و مافێن کارمەندان',
    dialogue: [
      { speaker: 'Researcher', text: 'The gig economy offers flexibility but often exploits workers by classifying them as independent contractors.', translation: 'ئابوورا پارچە-کار (گیگ ئیکۆنۆمی) نەرمییێ ددەت لێ زۆر جاران مفایەکێ خراب ژ کارمەندان وەردگریت ب رێکا پۆلێنکردنا وان وەک بەڵێندەرێن سەربەخۆ.' },
      { speaker: 'Driver', text: 'I enjoy setting my own hours, but I lack health insurance and paid leave.', translation: 'ئەز کەیفێ ژ دیارکردنا دەمژمێرێن خوە وەردگرم، لێ دڵنیایییا تەندروستی و مۆڵەتا ب مووچە ل دەف من نینن.' },
      { speaker: 'Researcher', text: 'This creates a precarious workforce with very little financial stability.', translation: 'ئەڤە هێزەکا کاری یا نە-جێگیر درۆست دکەت دگەل سەقامگیرییەکا دارایی یا گەلەک کێم.' },
      { speaker: 'Driver', text: 'Should platforms be legally mandated to provide basic social security?', translation: 'ئەرێ پێتڤییە پلاتفۆرم ب یاسا مەجبوور ببن دا کو ئاسایشا جڤاکی یا سەرەکی دابین بکەن؟' },
      { speaker: 'Researcher', text: 'That is the core of the current legal debate in many countries.', translation: 'ئەڤە ناڤۆکا گۆفتۆگۆیا یاسایی یا نوکە یە ل گەلەک وەلاتان.' }
    ],
    vocabulary: [
      { word: 'Precarious', translation: 'نە-جێگیر / پڕ-مەترسی' },
      { word: 'Classifying', translation: 'پۆلێنکردن' },
      { word: 'Mandated', translation: 'فەرز / یاسایی کراو' },
      { word: 'Contractors', translation: 'بەڵێندەرەکان / کونتراکتۆر' }
    ]
  },
  {
    id: 'b2-56',
    level: 'B2',
    title: 'Cognitive Biases in Daily Life',
    titleKurdish: 'لایەنگیرییێن مێشکی د ژیانا رۆژانە دا',
    dialogue: [
      { speaker: 'Psychologist', text: 'Confirmation bias leads us to favor information that supports our existing beliefs while ignoring contradictions.', translation: '"لایەنگیرییا پشتراستکردنێ" وا ل مە دکەت ئەم گرنگیێ بدەینە وان زانیارییان یێن کو باوەریا مە یا هەبوویی دبهێزینن، د دەمەکێ دا دژیایەتییان پشتگۆێ دهاڤێژین.' },
      { speaker: 'Student', text: 'Is that why political discussions online are so polarized?', translation: 'ئەرێ لەما گۆفتۆگۆێن سیاسی ل سەر ئینتەرنێتێ ئەندازە جەمسەربەندی یێن هەین؟' },
      { speaker: 'Psychologist', text: 'Exactly. We surround ourselves with echo chambers that reinforce our worldview.', translation: 'ب درۆستی. ئەم دەوروبەرێن خۆ ب ژوورێن دەنگڤەدانێ تژی دکەن کو دیدا مە بۆ جیهانێ دبهێزینن.' },
      { speaker: 'Student', text: 'What about the "sunk cost fallacy"? Why do we stick with failing projects?', translation: 'پا دەربارەی "وەهما خەرجییا ژ دەستچووی" (sunk cost fallacy)؟ بۆچی ئەم دگەل پڕۆژەیێن شکستخوارتی دمینن؟' },
      { speaker: 'Psychologist', text: 'Because we hate the feeling of wasted investment, even if continuing costs more in the long run.', translation: 'چونکی ئەم حەژ هەستا وەبەرهێنانا خەساربووی ناکەن، تەنانەت ئەگەر بەردەوامبوون تێچوونا پتر هەبیت د ئایندەی دا.' }
    ],
    vocabulary: [
      { word: 'Confirmation', translation: 'پشتراستکردن' },
      { word: 'Contradictions', translation: 'دژیایەتییەکان / خەلات-بوونەکان' },
      { word: 'Polarized', translation: 'جەمسەربەند / دوو-جەمسەری' },
      { word: 'Fallacy', translation: 'وەهم / بیرکردنەوەی هەڵە' }
    ]
  },
  {
    id: 'b2-57',
    level: 'B2',
    title: 'The Ethics of Animal Testing',
    titleKurdish: 'ئەخلاقییا تاقیکرن ل سەر گیانەوەران',
    dialogue: [
      { speaker: 'Researcher', text: 'Animal testing is necessary to ensure the safety and efficacy of new medical treatments.', translation: 'تاقیکرن ل سەر گیانەوەران یا فەرە دا کو سلامەتی و کاریگەرییا چارەسەریێن پزیشکی یێن نوو بزانین.' },
      { speaker: 'Advocate', text: 'However, it causes immense suffering and alternatives like computer modeling are gaining ground.', translation: 'لێ، ئەو دبیتە ئەگەرێ ئازارەکا مەزن و چارەسەریێن دی وەک نموونە-پێکردنا کۆمپیوتەری د پێشڤەچوونێ دا نە.' },
      { speaker: 'Researcher', text: 'Some biological systems are too complex to be accurately simulated virtually.', translation: 'هندەک سیستەمێن بایۆلۆژی گەلەک یا ئاڵۆزن کو ب شێوازەکێ روهن د جیهانا ڤێرچوەڵ دا بهێنە چێکرن.' },
      { speaker: 'Advocate', text: 'We should follow the "3 Rs": Replace, Reduce, and Refine to minimize animal usage.', translation: 'پێتڤییە ئەم شوینگرتن، کێمکردن، و باشترکردن (3Rs) پەیڕەو بکەین دا کو بکارئینانا گیانەوەران کێم بکەین.' },
      { speaker: 'Researcher', text: 'I agree that ethical oversight is critical throughout the entire research process.', translation: 'ئەز هەڤڕام کو چاڤدێرییا ئەخلاقی یا فەرە د درێژاهییا هەمی لێگەڕیانێ دا.' }
    ],
    vocabulary: [
      { word: 'Efficacy', translation: 'کاریگەری / ب سوود بوون' },
      { word: 'Simulated', translation: 'نموونە-پێکردن / لاساییکردنەووە' },
      { word: 'Advocate', translation: 'پشتیوان / داکۆکیکار' },
      { word: 'Refine', translation: 'پاقژکردن / باشترکردن' }
    ]
  },
  {
    id: 'b2-58',
    level: 'B2',
    title: 'The Future of Augmented Reality (AR)',
    titleKurdish: 'پاشەڕۆژا راستییا زێدەکری (AR)',
    dialogue: [
      { speaker: 'Developer', text: 'Augmented reality overlays digital information onto the physical world, enhancing our daily interactions.', translation: 'راستییا زێدەکری زانیارییێن دیجیتالی ل سەر جیهانا راستی دادەنیت، کارلێکێن مە یێن رۆژانە پێش دێخیت.' },
      { speaker: 'Designer', text: 'Imagine mechanics seeing repair instructions directly on the machine they are fixing.', translation: 'خەیالا هندێ بکە کو مەکانیکی رێنماییێن چاککرنێ ب رۆهن ل سەر ئامیرێ کو چاک دکەت ببینیت.' },
      { speaker: 'Developer', text: 'Privacy concerns arise when glasses can record surroundings and identify faces in real-time.', translation: 'ئاریشەیێن تایبەت-بوونێ پەیدا دبن دەمێ چاڤیلکە دشێن دەوروبەران تۆمار بکەن و دەموچاوان ب زوویی ناس بکەن.' },
      { speaker: 'Designer', text: 'The interface should be intuitive and non-intrusive to prevent cognitive overload.', translation: 'رووکار (ئینتەرفەیس) پێتڤییە سادە و نە-بێزارکەر بیت دا کو مێشکی پەک نەکەت.' },
      { speaker: 'Developer', text: 'AR will likely become as essential as smartphones in the coming decade.', translation: 'رەنگە AR ببیتە تشتەکێ فەر وەکی مۆبایلێن زیرەک د دە ساڵێن بهێت دا.' }
    ],
    vocabulary: [
      { word: 'Augmented', translation: 'زێدەکری / پێشڤەبرن' },
      { word: 'Overlays', translation: 'رادی نیتە سەر / دادەنیتە سەر' },
      { word: 'Intrusive', translation: 'بێزارکەر / دەستێوەردەر' },
      { word: 'Intuitive', translation: 'سادە / بێ-فێربوون' }
    ]
  },
  {
    id: 'b2-59',
    level: 'B2',
    title: 'Minimalism and Mental Clarity',
    titleKurdish: 'مینیمالیزم و رۆهنبوونا مێشکی',
    dialogue: [
      { speaker: 'Aveen', text: 'Clutter in our physical environment often reflects clutter in our minds.', translation: 'پاشمایە د ژینگەی مە یێ جەستەیی دا زۆر جاران رەنگڤەدانا تێکچوونا مێشکێ مە یە.' },
      { speaker: 'Zana', text: 'I started decluttering my room, and I feel much more focused and at peace.', translation: 'من دەست ب پاقژکردنا ژورا خوە کر، و ئەز هەست ب سەرنجەکا پتر و ئارامییەکا مەزن دکەم.' },
      { speaker: 'Aveen', text: 'Minimalism is about prioritizing experiences and relationships over material possessions.', translation: 'مینیمالیزم ئەوە کو تو گرنگییێ بدەیە ئەزموون و پەیوەندییان ل شوینا مۆڵک و تشتێن مادی.' },
      { speaker: 'Zana', text: 'But it\'s hard in a culture that correlates success with how much you own.', translation: 'لێ یا ب زەحمەتە د کەلتوورەکی دا کو سەرکەفتنێ ب وێ چەندێ دپێڤیت کا تو خودانێ چەند تشتانی.' },
      { speaker: 'Aveen', text: 'Breaking free from that consumerist mindset is a journey toward true happiness.', translation: 'رزگاربوون ژ ئەوێ هزرکرنا بەکاربەرییێ گەشتەکە بەرەڤ خۆشییا راستی.' }
    ],
    vocabulary: [
      { word: 'Clutter', translation: 'تێکچوون / قەرەباڵغی' },
      { word: 'Possessions', translation: 'مۆڵکەکان / تشتەکان' },
      { word: 'Correlates', translation: 'پەیوەستکردن / پێکگەهاندن' },
      { word: 'Mindset', translation: 'هزرکردن / بیرکردنەوە' }
    ]
  },
  {
    id: 'b2-60',
    level: 'B2',
    title: 'The Philosophy of Work-Life Balance',
    titleKurdish: 'فەلسەفەیا هاوسەنگییا ناڤبەرا کار و ژیانێ',
    dialogue: [
      { speaker: 'Coach', text: 'We shouldn\'t live to work; we should work to live.', translation: 'پێتڤییە ئەم نەژین بۆ هندێ کار بکەین؛ بەلکو ئەم کار بکەین دا کو بژین.' },
      { speaker: 'Executive', text: 'In a competitive global economy, high performance often requires sacrifice.', translation: 'د ئابوورەکێ هەڤرک یێ جیهانی دا، ئەنجامێن بلند زۆر جاران پێتڤی ب قوربانیکردنێ نە.' },
      { speaker: 'Coach', text: 'Burnout is a real danger that ultimately leads to long-term inefficiency.', translation: '"برن ئاوت" (وەستیانا زێدە) مەترسییەکا راستی یە کو ل دوماهییێ دبیتە ئەگەرێ بێ-مفایییا دەم-درێژ.' },
      { speaker: 'Executive', text: 'How can I set boundaries when my team expects me to be available 24/7?', translation: 'ئەز چەوا سنووران دانێم دەمێ تیمێ من پێشبینی دکەن ئەز ٢٤ دەمژمێری ل بەر دەست بم؟' },
      { speaker: 'Coach', text: 'Model the behavior you want to see. Respecting your own time teaches others to do the same.', translation: 'ئەو رەفتارێ نیشان بدە یێ تو دخوازێ ببینی. رێزگرتن ل دەمێ تە، فێری یێن دی دکەت هەمان تشت بکەن.' }
    ],
    vocabulary: [
      { word: 'Sacrifice', translation: 'قوربانیکردن' },
      { word: 'Burnout', translation: 'وەستیانا زێدە / بڕان' },
      { word: 'Inefficiency', translation: 'نە-کارامەیی / بێ-مفایی' },
      { word: 'Boundaries', translation: 'سنوورەکان' }
    ]
  },
  {
    id: 'b2-61',
    level: 'B2',
    title: 'Job Interview',
    titleKurdish: 'چاوپێکەفتنا کاری',
    dialogue: [
      { speaker: 'Interviewer', text: 'Tell me about your previous work experience.', translation: 'بەحسێ ئەزموونا خۆ یا کاری یا بەری نوکە بۆ من بکە.' },
      { speaker: 'Candidate', text: 'I worked as a software developer for three years. I focused on developing robust web applications for international clients.', translation: 'من سێ سالان وەک گەشەپێدەرێ سۆفتوێری کار کریە. من گرنگی ب گەشەپێدانا بەرنامەیێن وێبێ یێن ب هێز ددا بۆ بریکارێن نێڤدەولەتی.' },
      { speaker: 'Interviewer', text: 'That sounds impressive. What technologies are you most proficient in?', translation: 'ئەفە زۆر یا باشە. تۆ د کین تەکنەلۆژیایان دا یێ زیرەکی؟' },
      { speaker: 'Candidate', text: 'I am very skilled in React, Node.js, and TypeScript. I have also experience with cloud services like AWS.', translation: 'ئەز گەلەک یێ زیرەکم د بوارێن React و Node.js و TypeScript دا. هەروەسا ئەزموونا من دگەل خزمەتگوزاریێن عەور (Cloud) وەک AWS ژی یا هەی.' },
      { speaker: 'Interviewer', text: 'Why do you want to work for our company specifically?', translation: 'بۆچی تو دخوازێ ل کۆمپانیا مە کار بکەی ب تایبەت؟' },
      { speaker: 'Candidate', text: 'Your company has a great reputation for innovation and pushing boundaries. I want to contribute my skills to your future success.', translation: 'کۆمپانیا هەوە ناڤودەنگیەکێ باش یێ هەی د بوارێ نووگەریێ و تێپەراندنا ئاستەنگان دا. ئەز دخوازم زیرەکییا خۆ د خزمەتا سەرکەفتنا هەوە دا بکاربینم.' },
      { speaker: 'Interviewer', text: 'How do you handle difficult challenges or deadlines in a team environment?', translation: 'تۆ چەوا سەرەدەریێ دگەل ئاستەنگێن ب زەحمەت یان دەمێن تەنگ دکەی د ناڤ تیمەکێ دا؟' },
      { speaker: 'Candidate', text: 'I prioritize tasks based on their impact and communicate clearly with my colleagues to ensure we are all aligned.', translation: 'ئەز کاران ب رێزبەندی ددانم ل دووڤ گرنگییا وان و ب رۆهن و ئاشکرا دگەل هەڤالێن خۆ باخڤم دا کو ئەم هەمی پێکڤە رێک بکەڤین.' },
      { speaker: 'Interviewer', text: 'Can you give me an example of a problem you solved in your last role?', translation: 'تو دشێی نموونەیەکێ ل سەر کێشەیەکێ بدەی یا کو تە د کارێ خۆ یێ بەری نوکە دا چارەسەر کری؟' },
      { speaker: 'Candidate', text: 'Once, we had a major bug during a product launch. I stayed late to debug the code and found a solution within hours.', translation: 'جارهەکێ، مە کێشەیەکا مەزن یێ تەکنیکی هەبوو د دەمێ بەلاڤکرنا بەرهەمەکی دا. ئەز درەنگ مام دا کو کێشەیێ چارەسەر بکەم و من د ناڤ چەند دەمژمێران دا چارەسەری دیت.' },
      { speaker: 'Interviewer', text: 'Excellent. What are your salary expectations for this position?', translation: 'زۆر نایابە. هزر و پێشبینیا تە بۆ مووچەی بۆ ڤی پوستی چییە؟' },
      { speaker: 'Candidate', text: 'Based on my experience and current market rates, I am looking for something competitive. We can discuss the details.', translation: 'ل دووڤ ئەزموونا من و نرخێن بازارێ، ئەز ل تشتەکێ هەڤرک دگەڕێم. ئەم دشێین پاشتر بەحسێ هوورکاتان بکەین.' },
      { speaker: 'Interviewer', text: 'Fair enough. Do you have any questions for us before we conclude?', translation: 'هزرەکا درۆستە. چو پرسیار ل دەف تە هەنە بەری ئەم ب دوماهیک بینین؟' },
      { speaker: 'Candidate', text: 'Yes, what does the typical career path look like for someone in this role at your company?', translation: 'بەلێ، شێوازێ پێشڤەچوونا پیشەیی بۆ کەسەکێ د ڤی کارێ دا ل کۆمپانیا هەوە دێ چەوا بیت؟' },
      { speaker: 'Interviewer', text: 'We encourage growth through continuous learning and mentorship. We will be in touch soon regarding our decision.', translation: 'ئەم پشتەڤانییا پێشڤەچوونێ دکەین ب رێکا فێربوونا بەردەوام و سەرپەرشتیاریکردنێ. ئەم دێ ب زووترین دەم پەیوەندیێ ب تە کەن ل سەر بڕیارا خۆ.' }
    ],
    vocabulary: [
      { word: 'Experience', translation: 'ئەزموون' },
      { word: 'Reputation', translation: 'ناڤودەنگ' },
      { word: 'Innovation', translation: 'نووگەری' },
      { word: 'Contribute', translation: 'پشکداربوون / هاریکاریکردن' }
    ]
  },
  {
    id: 'b2-62',
    level: 'B2',
    title: 'The Ethics of Genetic Engineering',
    titleKurdish: 'ئەخلاقییا ئەندازیارییا جیناتی',
    dialogue: [
      { speaker: 'Bioethicist', text: 'Gene editing tools like CRISPR raise complex ethical questions about "designer babies."', translation: 'ئامرازێن دەستکارییا جینی وەک CRISPR پرسیارێن ئەخلاقی یێن ئاڵۆز دەربارەی "زارۆکێن دیزاین کری" پەیدا دکەن.' },
      { speaker: 'Geneticist', text: 'But the potential to eradicate hereditary diseases is a massive breakthrough for humanity.', translation: 'لێ شیانێن ژناڤبرنا نەخۆشیێن بۆماوەیی (وەرسی) پێشکەفتنەکا مەزنە بۆ مرۆڤایەتیێ.' },
      { speaker: 'Bioethicist', text: 'Where do we draw the line between therapy and enhancement?', translation: 'ئەم دێ چەوا سنووری د ناڤبەرا چارەسەری و باشترکرنێ (گەشەپێدانێ) دا دەستنیشان کەین؟' },
      { speaker: 'Geneticist', text: 'Regulation is necessary, but we shouldn’t stifle innovation that saves lives.', translation: 'رێکخستن یا فەرە، لێ پێتڤییە ئەم رێگریێ ل نووگەرییێ نەکەین یا کو ژیانا مرۆڤان قورتال دکەت.' },
      { speaker: 'Bioethicist', text: 'Equitable access to these technologies is also a major concern.', translation: 'گەهشتنا یەکسان بۆ ڤان تەکنەلۆژیایان هەروەسا ئەگەرەکێ مەزن یێ نیگەرانیێ یە.' }
    ],
    vocabulary: [
      { word: 'Eradicate', translation: 'ژناڤبرن / رەگبڕکردن' },
      { word: 'Breakthrough', translation: 'پێشکەفتنەکا مەزن' },
      { word: 'Therapy', translation: 'چارەسەری' },
      { word: 'Stifle', translation: 'کۆشتن / رێگریکردن' }
    ]
  },
  {
    id: 'b2-63',
    level: 'B2',
    title: 'Global Economic Interdependence',
    titleKurdish: 'پشتبەستنا ئابووری یا جیهانی',
    dialogue: [
      { speaker: 'Economist', text: 'In our globalized world, a crisis in one region can trigger a domino effect across markets.', translation: 'د جیهانا مە یا گلۆبالیزە دا، قەیرانەک ل هەرێمەکێ دشێت ببیتە ئەگەرێ کارتێکرنەکا زنجیرەیی (دۆمینۆ) ل ناڤ هەمی بازاڕان دا.' },
      { speaker: 'Journalist', text: 'Does this interdependency undermine national sovereignty?', translation: 'ئەرێ ئەڤ پشتبەستنا ئێک و دوو سەروەرییا نیشتیمانی لاواز دکەت؟' },
      { speaker: 'Economist', text: 'It creates shared incentives for stability, but also increases vulnerability to external shocks.', translation: 'ئەو هاندەرێن هەڤپشک بۆ سەقامگیریێ درۆست دکەت، لێ هەروەسا مەترسییا ل بەرامبەر شۆکێن دەرەکی ژی زێدە دکەت.' },
      { speaker: 'Journalist', text: 'How can developing nations protect their local industries in such a system?', translation: 'وەلاتێن د قۆناغا پێشکەفتنێ دا چەوا دشێن پیشەسازییێن خۆ یێن ناوخۆیی بپارێزن د سیستەمەکێ هۆسا دا؟' },
      { speaker: 'Economist', text: 'Diversification and investment in human capital are the most strategic approaches.', translation: 'جۆراوجۆرکرن و وەبەرهێنان د شیانێن مرۆڤی دا ستراتیژیترین رێکارن.' }
    ],
    vocabulary: [
      { word: 'Interdependence', translation: 'پشتبەستنا ئێک و دوو' },
      { word: 'Sovereignty', translation: 'سەروەری' },
      { word: 'Vulnerability', translation: 'سستبوون / ناسکی ل بەرامبەر مەترسیێ' },
      { word: 'Diversification', translation: 'جۆراوجۆرکرن' }
    ]
  },
  {
    id: 'b2-64',
    level: 'B2',
    title: 'The Psychology of Influence',
    titleKurdish: 'دەروونناسییا کارتێکرنێ',
    dialogue: [
      { speaker: 'Marketer', text: 'Reciprocity is a powerful principle; people feel obligated to return favors.', translation: 'هەڤسەنگی (ریکێپڕۆسیتی) پرەنسیپەکێ ب هێزە؛ خەڵک هەست ب نەچاریێ دکەن کو چاکییان ڤەگێڕنەڤە.' },
      { speaker: 'Psychologist', text: 'It can be used ethically to build trust or manipulatively to force compliance.', translation: 'ئەو دشێت ب شێوازەکێ ئەخلاقی بۆ ئاڤاکرنا باوەریێ بهێتە بکارئینان یان ب فێڵبازی بۆ نەچارکردنا خەڵکی.' },
      { speaker: 'Marketer', text: 'Social proof is another one; we look to others to determine correct behavior.', translation: '"بەلگەیێ جڤاکی" (سۆشیال پرووف) یەکا دییە؛ ئەم تەماشای یێن دی دکەن دا کو رەفتارا درۆست دەستنیشان کەین.' },
      { speaker: 'Psychologist', text: 'That is why testimonials and influencer endorsements are so effective in advertising.', translation: 'لەوما گەواهیدان و پشتەڤانییا کەسێن خودان هەوادار (ئینفلۆنسەر) هۆسا کاریگەرن د ریکلامان دا.' },
      { speaker: 'Marketer', text: 'Scarcity also drives demand. People want what they might lose.', translation: '"کێمبوونا تشتان" ژی داخوازێ زێدە دکەت. خەڵک تشتەکی دخوازن یێ کو رەنگە ژ دەست بدەن.' }
    ],
    vocabulary: [
      { word: 'Reciprocity', translation: 'هەڤسەنگی ل سەر بنەمایێ چاکیێ' },
      { word: 'Compliance', translation: 'پەیڕەوکردن / گوهداری' },
      { word: 'Testimonials', translation: 'گەواهیدان / وەسفکرن' },
      { word: 'Scarcity', translation: 'کێمبوونا تشتان' }
    ]
  },
  {
    id: 'b2-65',
    level: 'B2',
    title: 'Sustainability in Modern Fashion',
    titleKurdish: 'بەردەوامی د مۆدێلا سەردەم دا',
    dialogue: [
      { speaker: 'Designer', text: 'Fast fashion is one of the most polluting industries in the world.', translation: 'مۆدێلا ب لەز (فێست فاشن) ئێکە ژ پیسکەرتریێن پیشەسازییان د جیهانێ دا.' },
      { speaker: 'Activist', text: 'The focus should shift from trend-driven consumption to durable, eco-friendly materials.', translation: 'پێتڤییە گرنگی ژ بەکاربرنا ل سەر بنەمایێ ترێندێ بگۆهۆڕیت بۆ کەرەستێن دەم-درێژ و پارێزەرێن ژینگەی.' },
      { speaker: 'Designer', text: 'We are experimenting with biodegradable fabrics and upcycled textiles.', translation: 'ئەم تاقیکرنان ل سەر قۆماشێن کو ب خوە دهەرفن (بایۆ-دیگرێدەبڵ) و نساجێن دووبارە-بکارئینای دکەین.' },
      { speaker: 'Activist', text: 'Transparency in the supply chain is essential to ensure ethical labor practices.', translation: 'شەفافییەت د زنجیرەیا دابینکردنێ دا فەرە دا کو پشتراست بین ژ رەفتارێن ئەخلاقی یێن کاری.' },
      { speaker: 'Designer', text: 'Consumer awareness is growing, which pressures brands to change.', translation: 'هۆشیاریا بەکاربەران د زێدەبووندانە، کو فشارێ دئێخیتە سەر براندان دا کو خۆ بگۆهۆڕن.' }
    ],
    vocabulary: [
      { word: 'Polluting', translation: 'پیسکەر' },
      { word: 'Biodegradable', translation: 'تێداچووی (ب شێوازەکێ سرۆشتی)' },
      { word: 'Transparency', translation: 'شەفافییەت / روونی' },
      { word: 'Awareness', translation: 'هۆشیاری' }
    ]
  },
  {
    id: 'b2-66',
    level: 'B2',
    title: 'The Future of Remote Work (Advanced)',
    titleKurdish: 'پاشەڕۆژا کارکرنا ژ دویر (پێشکەفتی)',
    dialogue: [
      { speaker: 'Manager', text: 'The transition to permanent remote work requires a complete overhaul of corporate culture.', translation: 'گوهۆڕین بۆ کارکرنا ژ دویر یا هەمیشەی پێتڤی ب پێداچوونەکا تەمام یا کەلتوورێ کۆمپانیایێ هەری.' },
      { speaker: 'HR Expert', text: 'Asynchronous communication helps bridge time-zone gaps and improves focus.', translation: 'پەیوەندیکردنا نە-هەردەم (ئەسینکرۆنۆس) هاریکارە د پڕکردنا بۆشاییا دەمژمێران و سەرنجێ باشتر دکەت.' },
      { speaker: 'Manager', text: 'How do we maintain team cohesion and spontaneous innovation virtually?', translation: 'ئەم چەوا دشێین هەڤگرتنا تیمێ و نووگەرییا خۆرسک ب شێوازەکێ ڤێرچوەڵ بپارێزین؟' },
      { speaker: 'HR Expert', text: 'Virtual "water cooler" moments and intentional social hours can mitigate isolation.', translation: '"خولەکێن ل سەر حەوزێ ئاڤێ" یێن گریمانەیی و دەمژمێرێن جڤاکی یێن ب مەرەم دشێن هەستا تەنهایێ کێم بکەن.' },
      { speaker: 'Manager', text: 'The hybrid model seems to be the most viable solution for most organizations.', translation: 'مۆدێلێ تێکەڵ دیارە can be the most viaable.' }
    ],
    vocabulary: [
      { word: 'Overhaul', translation: 'نۆژەنکرن / پێداچوونا گشتی' },
      { word: 'Asynchronous', translation: 'نە-هەردەم' },
      { word: 'Cohesion', translation: 'هەڤگرتن / پێکڤەبوون' },
      { word: 'Mitigate', translation: 'کێمکردن / سستکردن' }
    ]
  },
  {
    id: 'b2-67',
    level: 'B2',
    title: 'The Impact of Social Media on Democracy',
    titleKurdish: 'کارتێکرنا سۆشیال میدیایێ ل سەر دیمۆکراسیێ',
    dialogue: [
      { speaker: 'Political Scientist', text: 'Algorithms often prioritize inflammatory content, which can deepen societal polarization.', translation: 'ئەلگۆریتم زۆر جاران گرنگیێ ددەنە بابەتێن هاندەر (هەستیار)، کو دشێت جەمسەربەندییا جڤاکی کویرتر کەت.' },
      { speaker: 'Student', text: 'But it also allows marginalized voices to be heard without gatekeepers.', translation: 'لێ هەروەسا رێ ددەتە دەنگێن پەراوێزخستی کو بهێنە بهیستن بێی هەبوونا رێگریکەران.' },
      { speaker: 'Political Scientist', text: 'The spread of misinformation during elections is a significant threat to democratic integrity.', translation: 'بەلاڤبوونا زانیاریێن خەلەت د دەمێ هەلبژارتنان دا مەترسییەکا بەرچاوە بۆ سەر رەهایییا دیمۆکراسیێ.' },
      { speaker: 'Student', text: 'Should governments regulate tech giants to prevent the fallback of public discourse?', translation: 'ئەرێ پێتڤییە حکومەت زەبەلاحێن تەکنەلۆژیایێ رێک بێخن دا کو رێگریێ ل تێکچوونا گۆتارا گشتی بگرن؟' },
      { speaker: 'Political Scientist', text: 'It is a delicate balance between protecting free speech and preventing harm.', translation: 'ئەڤە هاوسەنگییەکا ناسکە د ناڤبەرا پاراستنا ئازادییا ڕادەربڕینێ و رێگریکردن ل زیانێ.' }
    ],
    vocabulary: [
      { word: 'Inflammatory', translation: 'هاندەر / ئاگرین' },
      { word: 'Marginalized', translation: 'پەراوێزخستی' },
      { word: 'Misinformation', translation: 'زانیاریێن خەلەت' },
      { word: 'Discourse', translation: 'گۆتار / باخێڤتن' }
    ]
  },
  {
    id: 'b2-68',
    level: 'B2',
    title: 'Advancements in Space Exploration',
    titleKurdish: 'پێشکەفتن د گەڕیان ل ناڤ بۆشایییا ئاسمان دا',
    dialogue: [
      { speaker: 'Astronomer', text: 'The deployment of the James Webb telescope has revolutionized our understanding of the early universe.', translation: 'دەستپێکردنا کارێ تەلەسکۆپێ جەیمس وێب شۆڕشەک د تێگەهشتنا مە دا دەربارەی دەستپێکا گەردوونی درۆست کر.' },
      { speaker: 'Student', text: 'Do you think humans will establish a permanent colony on Mars in our lifetime?', translation: 'ئەرێ تو هزردکەی مرۆڤ د ناڤ ژیانا مە دا دێ کۆلۆنییەکا هەمیشەیی ل سەر هەسارەیا مارس ئاڤا کەن؟' },
      { speaker: 'Astronomer', text: 'The challenges are immense, especially radiation and life support systems.', translation: 'ئاستەنگ گەلەک مەزنن، ب تایبەت تیشکدان (رادەیشن) و سیستەمێن پشتەڤانییا ژیانێ.' },
      { speaker: 'Student', text: 'Private companies like SpaceX are accelerating the development of rocket technology.', translation: 'کۆمپانیێن وەک SpaceX پێشکەفتنا تەکنەلۆژیاییا رۆکێتان خێراتر دکەن.' },
      { speaker: 'Astronomer', text: 'Space exploration also yields many spin-off technologies that benefit life on Earth.', translation: 'گەڕیان ل بۆشاییێ هەروەسا گەلەک تەکنەلۆژیایێن دی یێن لاوەکی پەیدا دکەت کو مفا بۆ ژیانێ ل سەر ئەردی هەری.' }
    ],
    vocabulary: [
      { word: 'Revolutionized', translation: 'شۆڕش درۆست کرد / گوهۆڕینەکا مەزن کر' },
      { word: 'Colony', translation: 'کۆلۆنی / جهێ ژیانێ یێ نوو' },
      { word: 'Radiation', translation: 'تیشکدان' },
      { word: 'Accelerating', translation: 'خێراکردن' }
    ]
  },
  {
    id: 'b2-69',
    level: 'B2',
    title: 'The Philosophy of Stoicism',
    titleKurdish: 'فەلسەفەیا ستۆیزیزم (سینه-فرهی)',
    dialogue: [
      { speaker: 'Scholar', text: 'Stoicism teaches us to focus on what we can control and remain indifferent to what we cannot.', translation: 'ستۆیزیزم فێری مە دکەت کو گرنگیێ بدەینە ئەو تشتێن ئەم دشێین کۆنترۆڵ بکەین و بێ-خەم بمینین بەرامبەر ئەو تشتێن ئەم نەشێین.' },
      { speaker: 'Student', text: 'Isn’t that just a way to suppress emotions and avoid growth?', translation: 'ئەرێ ئەڤە تەنێ رێیەک نینە بۆ کۆشتنا هەستان و خوە-دوویرکرن ژ پێشکەفتنێ؟' },
      { speaker: 'Scholar', text: 'On the contrary, it’s about emotional resilience and acting with virtue regardless of circumstances.', translation: 'ب پێچەوانە، ئەڤە دەربارەی خۆراگرییا هەستی و رەفتارکرن ب فەزیلەتە بێی گرنگی-پێدان ب رەوشێ.' },
      { speaker: 'Student', text: 'Can it really help with modern-day anxiety and stress?', translation: 'ئەرێ ب راستی دشێت هاریکار بیت دگەل قەلق و ستریسا سەردەم دا؟' },
      { speaker: 'Scholar', text: 'Many modern psychologists incorporate Stoic principles into cognitive behavioral therapy.', translation: 'گەلەک ژ دەروونناسان ل ڤی سەردەمی پرەنسیپێن ستۆیکی دکەنە ناڤ چارەسەرییا رەفتاری-مێشکی زانیاری.' }
    ],
    vocabulary: [
      { word: 'Indifferent', translation: 'بێ-خەم / گرنگی-پێنەدان' },
      { word: 'Suppress', translation: 'کۆشتن (هەستان) / بێ-دەنگ-کردن' },
      { word: 'Resilience', translation: 'خۆراگری' },
      { word: 'Virtue', translation: 'فەزیلەت / رەوشتێ بلند' }
    ]
  },
  {
    id: 'b2-70',
    level: 'B2',
    title: 'Digital Privacy and Data Security',
    titleKurdish: 'تایبەت-بوونا دیجیتالی و پاراستنا زانیارییان',
    dialogue: [
      { speaker: 'IT Security', text: 'Multi-factor authentication is the bare minimum for protecting sensitive accounts.', translation: 'سەلماندنا دوو-قۆناغی کێمتریین مەرجە بۆ پاراستنا هەژمارێن هەستیار.' },
      { speaker: 'User', text: 'I find managing dozens of complex passwords to be incredibly difficult.', translation: 'ئەز دبینم کو بڕێڤەبرنا دەهان پاسوۆردێن ئاڵۆز گەلەک کارەکێ ب زەحمەتە.' },
      { speaker: 'IT Security', text: 'A password manager is an essential tool for maintaining digital security without fatigue.', translation: 'بڕێڤەبەرێ پاسورۆدان ئامرازەکێ فەرە بۆ پاراستنا ئاسایشا دیجیتالی بێی وەستیان.' },
      { speaker: 'User', text: 'Are public Wi-Fi networks safe if I use a VPN?', translation: 'ئەرێ تۆڕێن گشتی یێن وای-فای د سلامەتن ئەگەر ئەز VPN بکاربینم؟' },
      { speaker: 'IT Security', text: 'A VPN encrypts your traffic, making it much harder for attackers to intercept your data.', translation: 'پێوەندیا VPN زانیاریێن تە دکەتە کڕاکری (ئینکریپت)، کو کارێ هێرشبەران زۆر ب زەحمەت دکەت بۆ دەستبەسەرداگرتنا زانیاریان.' }
    ],
    vocabulary: [
      { word: 'Authentication', translation: 'سەلماندن / دڵنیاکردنەوە' },
      { word: 'Sensitive', translation: 'هەستیار' },
      { word: 'Fatigue', translation: 'وەستیان / تاقەت-پڕوکان' },
      { word: 'Intercept', translation: 'دەستبەسەرداگرتن / رێگری' }
    ]
  },
  {
    id: 'b2-71',
    level: 'B2',
    title: 'The Impact of Artificial Intelligence on Art',
    titleKurdish: 'ژیرییا دەستکرد و پاشەڕۆژا هونەری',
    dialogue: [
      { speaker: 'Artist', text: 'Is AI-generated art a threat to human creativity or a new tool for expression?', translation: 'ئەرێ هونەرێ ژلایێ ژیرییا دەستکرد ڤە هاتییە درۆستکرن مەترسییە بۆ داهێنانا مرۆڤی یان ئامرازەکێ نوویە بۆ دیارکرنا هەستان؟' },
      { speaker: 'Technologist', text: 'I see it as a collaborator that can push boundaries of what is possible.', translation: 'ئەز وێ وەک هەڤکارەک دبینم کو دشێت سنووران تێپەرینیت بەرەڤ ئەو تشتێن کو د بنەرا دا د بەرکارن.' },
      { speaker: 'Artist', text: 'But can a machine ever truly understand the emotional depth of a masterpiece?', translation: 'لێ ئەرێ ئامیرەک هەر دشێت ب راستی تێبگەهیت ژ کویراتییا هەستی یا شاھکارەکی؟' },
      { speaker: 'Technologist', text: 'It analyzes patterns, but the "soul" of the art still comes from the human prompt.', translation: 'ئەو شێوازان شیکار دکەت، لێ "رۆحا" هونەری هێشتا ژ ئاراستەکرنا (پرۆمپتێ) مرۆڤی دهێت.' },
      { speaker: 'Artist', text: 'We must redefine what it means to be an "author" in this new age.', translation: 'پێتڤییە ئەم ژ نوو پێناسا هندێ بکەین کا رامانا "نووسەر-بوونێ" چییە د ڤی سەردەمێ نوو دا.' }
    ],
    vocabulary: [
      { word: 'Creativity', translation: 'داهێنان' },
      { word: 'Collaborator', translation: 'هەڤکار' },
      { word: 'Masterpiece', translation: 'شاھکار / کارێ نایاب' },
      { word: 'Prompt', translation: 'ئاراستەکردن / داخواز' }
    ]
  },
  {
    id: 'b2-72',
    level: 'B2',
    title: 'The Great Barrier Reef and Coral Bleaching',
    titleKurdish: 'دیوارێ مەزن یێ مەرجانی و سپیبوونا مەرجانان',
    dialogue: [
      { speaker: 'Biologist', text: 'Rising ocean temperatures are causing widespread coral bleaching in the Great Barrier Reef.', translation: 'بلندبوونا پلەیێن گەرمیا ئۆقیانووسان دبیتە ئەگەرێ سپیبوونا بەرفرهه یا مەرجانان ل دیوارێ مەزن یێ مەرجانی.' },
      { speaker: 'Diver', text: 'I noticed the vibrant colors are fading and being replaced by ghost-like white skeletons.', translation: 'من تێبینی کر کو رەنگێن گەش یێن کێم دبن و دهێنە گوهۆڕین ب هەیکەلێن سپی یێن وەکی شەبەنگان (گۆست).' },
      { speaker: 'Biologist', text: 'If the algae don\'t return within a few weeks, the coral will starve and die.', translation: 'ئەگەر قەوزە (ئالجی) د ناڤ چەند حەفتییان دا نەزڤڕن، مەرجان دێ ژ برسان ب میرن.' },
      { speaker: 'Diver', text: 'Can we do anything to restore these damaged ecosystems?', translation: 'ئەرێ ئەم دشێین چو تشتان بکەین بۆ نووژەنکردنا ڤان ژینگەیێن (ئیکۆسیستەم) زیانپێکەفتی؟' },
      { speaker: 'Biologist', text: 'Coral nurseries and stricter carbon emission limits are our best hope.', translation: 'کێڵگەهێن مەرجانان و دانانا سنوورێن توند بۆ دەردانی کاربۆن باشترین هیڤییا مەیە.' }
    ],
    vocabulary: [
      { word: 'Bleaching', translation: 'سپیبوون / رەنگ چوون' },
      { word: 'Vibrant', translation: 'گەش / تژی ژیان' },
      { word: 'Starve', translation: 'برسیبوون' },
      { word: 'Nurseries', translation: 'کێڵگەهێن بچووک / نەمامگە' }
    ]
  },
  {
    id: 'b2-73',
    level: 'B2',
    title: 'Behavioral Economics and Choice Architecture',
    titleKurdish: 'ئابوورا رەفتاری و تەلارسازییا هەلبژارتنێ',
    dialogue: [
      { speaker: 'Researcher', text: 'Choice architecture influences the decisions people make without restricting their freedom.', translation: 'تەلارسازییا هەلبژارتنێ کارتێکرنێ ل سەر بڕیارێن خەڵکی دکەت بێی کو ئازادییا وان سنووردار کەت.' },
      { speaker: 'Student', text: 'Is that what "nudging" is about? Like putting healthy snacks at eye level?', translation: 'ئەرێ ئەڤە ئەو تشتەیە یێ کو دبێژنێ "نۆجینگ" (پاڵدان یان هاندانا نەرمی)؟ وەک دانانا خوارنێن ساخلەم ل بەرچاڤان؟' },
      { speaker: 'Researcher', text: 'Exactly. Small changes in environment can lead to better long-term outcomes.', translation: 'ب درۆستی. گوهۆڕینێن بچووک د ژینگەهێ دا دشێن ببنە ئەگەرێ ئەنجامێن باشتر یێن دەم-درێژ.' },
      { speaker: 'Student', text: 'But could it be used to manipulate people into buying things they don’t need?', translation: 'لێ ئەرێ ئەو ناهێتە بکارئینان بۆ فێڵکردن ل خەڵکی دا کو تشتان بکڕن یێن کو پێتڤی پێ نینە؟' },
      { speaker: 'Researcher', text: 'That is the ethical danger. It must be used transparently and for the public good.', translation: 'ئەڤە ئەو مەترسییا ئەخلاقی یە. پێتڤییە ب شەفافی و بۆ مفایێ گشتی بهێتە بکارئینان.' }
    ],
    vocabulary: [
      { word: 'Influences', translation: 'کارتێکرن کر' },
      { word: 'Nudging', translation: 'پاڵدان / هاندانا نەرمی' },
      { word: 'Outcomes', translation: 'ئەنجامەکان' },
      { word: 'Manipulate', translation: 'فێڵکردن / بکارئینانا خراب' }
    ]
  },
  {
    id: 'b2-74',
    level: 'B2',
    title: 'The Future of Renewable Energy Storage',
    titleKurdish: 'پاشەڕۆژا عەمبارکردنا وزەیا نووکرار',
    dialogue: [
      { speaker: 'Engineer', text: 'The main hurdle for solar and wind power is intermittency—the sun doesn’t always shine.', translation: 'ئەگەرێ سەرەکی یێ راوەستانێ بۆ وزەیا رۆژێ و بای بریتییە ژ "پچڕپچڕی" - رۆژ هەردەم نادەرکەڤیت.' },
      { speaker: 'Policy Maker', text: 'We need massive investment in battery technology and grid storage solutions.', translation: 'ئەم پێتڤی ب وەبەرهێنانەکا مەزن د تەکنەلۆژیا پاتریان و چارەسەرییێن عەمبارکردنا تۆرێن کارەبێ دا نە.' },
      { speaker: 'Engineer', text: 'Green hydrogen is a promising carrier for long-term energy storage.', translation: 'هایدرۆجینا کەسک هەڵگرەکێ ب هیڤی یە بۆ عەمبارکردنا وزێ د دەمێ درێژ دا.' },
      { speaker: 'Policy Maker', text: 'What about pumped hydro or thermal storage systems?', translation: 'پا دەربارەی هایدرۆیا پەمپکری یان سیستەمێن عەمبارکرنا گەرمیێ؟' },
      { speaker: 'Engineer', text: 'They are effective but geographically dependent. Innovation in solid-state batteries is key.', translation: 'ئەو یێن ب مفانە لێ ب لایەنێ جوگرافی ڤە گرێدای نە. نووگەری د پاتریێن "سۆلید-ستێت" دا سەرەکییە.' }
    ],
    vocabulary: [
      { word: 'Hurdle', translation: 'کۆسپ / ئاستەنگ' },
      { word: 'Intermittency', translation: 'پچڕپچڕی' },
      { word: 'Carrier', translation: 'هەڵگر' },
      { word: 'Geographically', translation: 'ب شێوەیەکێ جوگرافی' }
    ]
  },
  {
    id: 'b2-75',
    level: 'B2',
    title: 'The Rise of Urban Farming',
    titleKurdish: 'پێشکەفتنا چاندنا باژێڕی',
    dialogue: [
      { speaker: 'Urbanist', text: 'Vertical farming allows us to grow produce in the heart of the city, reducing food miles.', translation: 'چاندنا ستوین (ڤێرتیکاڵ فارمینگ) رێ ددەتە مە کو بەرهەمان ل دڵێ باژێڕی دا بچینن، و دویراتییا گواستنەوەیا خوارنێ کێم دکەت.' },
      { speaker: 'Resident', text: 'It uses much less water than traditional agriculture, which is vital in drought-prone areas.', translation: 'ئەو گەلەک کێمتر ئاڤێ بکار دئینیت ژ چاندنا کەڤنار، کو ئەڤە یا فەرە بۆ ئەو جهێن مەترسییا هشکهاتیێ ل سەر هەی.' },
      { speaker: 'Urbanist', text: 'Hydroponics and aquaponics are at the forefront of this agricultural revolution.', translation: '"هایدرۆپۆنیکس" و "ئاکواپۆنیکس" د پێشییا ڤێ شۆڕشا چاندنێ دا نە.' },
      { speaker: 'Resident', text: 'Does carbon footprint decrease significantly with these methods?', translation: 'ئەرێ شوینوارا کاربۆنی (کاربۆن فووتپرێنت) ب ڤان رێکاران ب شێوەیەکێ بەرچاو کێم دبیت؟' },
      { speaker: 'Urbanist', text: 'Yes, because we eliminate the need for long-distance transport and pesticides.', translation: 'بەلێ، چونکی ئەم پێتڤیبوون ب گواستنەوەیا دویر و دەرمانێن مێشکوژان (پێستیساید) ناهێلن.' }
    ],
    vocabulary: [
      { word: 'Vertical', translation: 'ستوین / ستوونی' },
      { word: 'Agriculture', translation: 'چاندن' },
      { word: 'Vital', translation: 'زۆر گرنگ / فەر' },
      { word: 'Pesticides', translation: 'دەرمانی مێشکوژ / قڕکەر' }
    ]
  },
  {
    id: 'b2-76',
    level: 'B2',
    title: 'The Philosophy of Altruism',
    titleKurdish: 'فەلسەفەیا خێرخوازیێ (ئالتریوزم)',
    dialogue: [
      { speaker: 'Philosopher', text: 'Effective altruism uses evidence and reason to determine how to benefit others as much as possible.', translation: '"خێرخوازییا کاریگەر" بەڵگە و ئەقڵێ بکار دئینیت دا کو بزانین چەوا مفا بگێهینینە یێن دی ب زۆرترین رادە.' },
      { speaker: 'Student', text: 'Is pure altruism even possible, or do we always get self-satisfaction from helping?', translation: 'ئەرێ خێرخوازییا تەمام هەر یا بەرکارە، یان ئەم هەردەم رازیبوونا دەروونی ژ هاریکاریکردنێ دئینن؟' },
      { speaker: 'Philosopher', text: 'Even if we feel good, the act still benefits the recipient. The motive matters less than the impact.', translation: 'تەنانەت ئەگەر هەستا مە یا باش بیت ژی، کارێ مە مفا بگێهینیتە وەرگری. مەرەم کێمتر گرنگە ژ کارتێکرنێ.' },
      { speaker: 'Student', text: 'Should we prioritize the most urgent needs or the ones where we can have the most impact?', translation: 'ئەرێ پێتڤییە ئەم گرنگیێ بدەینە پێتڤییێن هەرە بلەز یان ئەوێن ئەم دشێین زۆرترین کارتێکرنێ لێ بکەین؟' },
      { speaker: 'Philosopher', text: 'That is the core debate in effective altruism circles.', translation: 'ئەو ناڤۆکا گۆتۆبێژانە د ناڤ بازنەیێن خێرخوازییا کاریگەر دا.' }
    ],
    vocabulary: [
      { word: 'Altruism', translation: 'خێرخوازی / حەز ژ دیان کردن' },
      { word: 'Recipient', translation: 'وەرگر / یێ مفای دبینیت' },
      { word: 'Motive', translation: 'مەرەم / پاڵنەر' },
      { word: 'Urgent', translation: 'بلەز / فەوری' }
    ]
  },
  {
    id: 'b2-77',
    level: 'B2',
    title: 'Digital Minimalism (Advanced)',
    titleKurdish: 'مینیمالیزما دیجیتالی (پێشکەفتی)',
    dialogue: [
      { speaker: 'Counselor', text: 'Digital minimalism is about using technology intentionally, not compulsively.', translation: 'مینیمالیزما دیجیتالی دەربارەی بکارئینانا تەکنەلۆژیایێ یە ب مەرەم، نە کو ب شێوەیەکێ نەویست (نەچار).' },
      { speaker: 'Teenager', text: 'I feel a constant need to check notifications; it’s like an addiction.', translation: 'ئەز هەست ب پێتڤییەکا بەردەوام دکەم بۆ کۆنترۆڵکردنا ئاگەهدارییان؛ ئەڤە وەک ئاڵوودەبوونەکێ یە.' },
      { speaker: 'Counselor', text: 'The apps are designed to exploit our dopamine release. A "digital detox" can help recalibrate.', translation: 'بەرنامە یێن هاتییە دیزاینکرن دا کو مفایەکێ خراب ژ دەردانی دۆپامینا مە ببینن. "دیجیتاڵ دیتۆکس" (پاقژکرنا دیجیتالی) دشێت هاریکار بیت بۆ رێکخستنەڤێ.' },
      { speaker: 'Teenager', text: 'How do I stay connected with friends without being constantly online?', translation: 'ئەز چەوا دشێی یا پەیوەست بم دگەل هەڤاڵان بێی کو هەردەم ل سەر هێڵ بم؟' },
      { speaker: 'Counselor', text: 'Prioritize high-quality offline interactions over shallow online engagements.', translation: 'گرنگیێ بدە پەیوەندییێن ئۆفلایێن یێن ب کۆالیەت بلند ل سەر کارلێکێن کێم-مفا یێن سەر ئینتەرنێتێ.' }
    ],
    vocabulary: [
      { word: 'Intentionally', translation: 'ب مەرەم / ب ئەنقەست' },
      { word: 'Compulsively', translation: 'ب شێوەیەکێ نەویست / نەچار' },
      { word: 'Addiction', translation: 'ئاڵوودەبوون' },
      { word: 'Detox', translation: 'پاقژکردن ژ ژەهرێ' }
    ]
  },
  {
    id: 'b2-78',
    level: 'B2',
    title: 'The Psychology of Habit Formation',
    titleKurdish: 'دەروونناسییا درۆستبوونا خوو و ڕەفتاران',
    dialogue: [
      { speaker: 'Expert', text: 'Habits are formed through a loop of cue, craving, response, and reward.', translation: 'خوو و ڕەفتار ب رێکا بازنەیەکا نیشانە، شەیدایی، وەلام، و پاداشت درۆست دبن.' },
      { speaker: 'Student', text: 'So if I want to break a bad habit, I should identify the cue first?', translation: 'ئانکو ئەگەر من بڤێت خێرەکا خراب بشکێنم، پێتڤییە بەری هەر تشتەکی نیشانێ (سیگناڵ) دەستنیشان بکەم؟' },
      { speaker: 'Expert', text: 'Exactly. Making the cue invisible or the response difficult is key.', translation: 'ب درۆستی. نەدیارکردنا نیشانێ یان زەحمەتکردنا وەلامێ رێکا سەرەکییە.' },
      { speaker: 'Student', text: 'What is "habit stacking"?', translation: 'تێگەهێ "هەڤکۆکردنا خوو " (habit stacking) چییە؟' },
      { speaker: 'Expert', text: 'It means attaching a new habit to an existing one to make it stick more easily.', translation: 'رامانا وێ ئەوە کو تو خوویەکا نوو ب ئێکەکا هەبوویی ڤە گرێ بدەی دا کو ب ساناهیتر بمینیت.' }
    ],
    vocabulary: [
      { word: 'Formation', translation: 'دروستبوون / پێک-هاتن' },
      { word: 'Craving', translation: 'شەیدایی / حەزەکا مەزن' },
      { word: 'Reward', translation: 'پاداشت' },
      { word: 'Stacking', translation: 'هەڤکۆکردن / کۆمکردن ل سەر ئێک' }
    ]
  },
  {
    id: 'b2-79',
    level: 'B2',
    title: 'Advancements in Telemedicine',
    titleKurdish: 'پێشکەفتن د پزیشکییا ژ دویر دا (تیلیمێدیسن)',
    dialogue: [
      { speaker: 'Doctor', text: 'Telemedicine has drastically expanded access to healthcare for rural populations.', translation: 'پزیشکییا ژ دویر (تیلیمێدیسن) ب شێوەیەکێ مەزن گەهشتنا ب خزمەتگوزاریێن تەندروستی بۆ دانیشتووانێن گوندەواری بەرفرهە کر.' },
      { speaker: 'Patient', text: 'It’s very convenient for follow-up appointments and prescription refills.', translation: 'ئەڤە گەلەک یا ساناهیە بۆ ژڤانێن بەردەوام (فۆلۆ-ئەپ) و نووکرنا رەچەتەیێن دەرمانان.' },
      { speaker: 'Doctor', text: 'Remote monitoring devices allow us to track vital signs of chronic patients in real-time.', translation: 'ئامرازێن چاڤدێرییا ژ دویر رێ ددەنە مە کو نیشانێن سەرەکی یێن ژیانا نەخۆشێن دومدرێژ ب زوویی ببینین.' },
      { speaker: 'Patient', text: 'Are there concerns about data security and patient confidentiality?', translation: 'ئەرێ نیگەرانی دەربارەی پاراستنا زانیارییان و نهێنییا نەخۆشی هەری؟' },
      { speaker: 'Doctor', text: 'We use high-level encryption to ensure all consultations remain private.', translation: 'ئەم کڕاکرییەکا (ئینکریپشن) ئاست بلند بکار دئینن دا کو پشتراست بین هەمی راوێژکاری ب نێهنی دمینن.' }
    ],
    vocabulary: [
      { word: 'Convenient', translation: 'سادە / گۆنجای' },
      { word: 'Refills', translation: 'تژی-کرنەڤە / نووکرنەڤە' },
      { word: 'Vital signs', translation: 'نیشانێن ژیانێ (وەک دلکۆتان و فشار)' },
      { word: 'Confidentiality', translation: 'نێهنی-پارێزی' }
    ]
  },
  {
    id: 'b2-80',
    level: 'B2',
    title: 'The Ethics of Self-Driving Cars',
    titleKurdish: 'ئەخلاقییا ترۆمبێلێن بێ-شۆفێر (خۆکار)',
    dialogue: [
      { speaker: 'Ethicist', text: 'How should an autonomous vehicle be programmed to act in an unavoidable accident?', translation: 'چەوا پێتڤییە ترۆمبێلەکا خۆکار بهێتە پڕۆگرامکردن دا کو رەفتارێ بکەت د روودانەکا نە-گریز دا؟' },
      { speaker: 'Engineer', text: 'This is the "trolley problem" for the AI age. Should it prioritize occupants or pedestrians?', translation: 'ئەڤە "ئاریشەیا ترۆلی" یە بۆ سەردەمێ ژیرییا دەستکرد. ئەرێ پێتڤییە گرنگیێ بدەتە سەرنشینان یان پیادەیان؟' },
      { speaker: 'Ethicist', text: 'Transparency in these algorithms is crucial for public trust.', translation: 'شەفافییەت د ڤان ئەلگۆریتمان دا یا فەرە بۆ باوەریا گشتی.' },
      { speaker: 'Engineer', text: 'We are working on framework that emphasizes minimizing harm above all else.', translation: 'ئەم ل سەر فریمۆرکەکی کار دکەین کو گرنگیێ ددەتە کێمکرنا زیانێ ل سەر هەر تشتەکی.' },
      { speaker: 'Ethicist', text: 'Liability questions also need clear legal answers before widespread adoption.', translation: 'پرسیارێن بەرپرسیاریەتیێ (لەیابیلیتی) ژی پێتڤی ب وەلامێن یاسایی یێن رۆهن هەنە بەریا بەکارئینانا بەرفرهه.' }
    ],
    vocabulary: [
      { word: 'Unavoidable', translation: 'نە-گریز / رێ لێ نەگریت' },
      { word: 'Occupants', translation: 'سەرنشینان / یێن د ناڤ دا' },
      { word: 'Pedestrians', translation: 'پیادە / رێبوارێن ل سەر پیا' },
      { word: 'Liability', translation: 'بەرپرسیاریەتییا یاسایی' }
    ]
  },
  {
    id: 'b2-81',
    level: 'B2',
    title: 'Advanced Project Management',
    titleKurdish: 'برێڤەبرنا پڕۆژەیان ب شێوازەکێ پێشکەفتی',
    dialogue: [
      { speaker: 'Senior PM', text: 'To ensure project success, we must carefully manage the critical path and resource allocation.', translation: 'بۆ مسۆگەرکرنا سەرکەفتنا پڕۆژەی، پێتڤییە ئەم ب هوشیاری "رێکا فەر" (کریتیکاڵ پاس) و دابەشکردنا ژێدەران بڕێڤە ببەین.' },
      { speaker: 'Junior PM', text: 'How do we handle scope creep when the client keeps adding requirements mid-sprint?', translation: 'ئەم چەوا سەرەدەریێ دگەل "بەرفرەهبوونا بێ-بەرنامەیا مەودایێ کار" (سکۆپ کریپ) بکەین دەمێ بریکار داخوازان ل ناڤەڕاستا کاریدا زێدە دکەت؟' },
      { speaker: 'Senior PM', text: 'Strict change control processes are essential to prevent budget overruns.', translation: 'رێکارێن توند یێن کۆنتڕۆڵکردنا گوهۆڕینان فەرن دا کو رێگریێ ل تێپەڕاندنا بودجەی بکەن.' },
      { speaker: 'Junior PM', text: 'Risk mitigation strategies should be updated weekly, right?', translation: 'ستراتیژییەتێن کێمکردنا مەترسییان پێتڤییە هەفتانە بهێنە نووکرن، وایە؟' },
      { speaker: 'Senior PM', text: 'Exactly. Proactive communication with stakeholders is the best defense against unforeseen issues.', translation: 'ب درۆستی. پەیوەندیکردنا چالاکانە دگەل خودان بەرژەوەندییان (ستەیک-هۆڵدێرز) باشترین بەرگرییە دژی کێشەیێن نەپێشبینیکری.' }
    ],
    vocabulary: [
      { word: 'Allocation', translation: 'دابەشکردن / تەرخانکردن' },
      { word: 'Scope creep', translation: 'بەرفرەهبوونا بێ-بەرنامەیا مەودایێ کار' },
      { word: 'Mitigation', translation: 'کێمکردن / سستکردن' },
      { word: 'Stakeholders', translation: 'خودان بەرژەوەندییان' }
    ]
  },
  {
    id: 'b2-82',
    level: 'B2',
    title: 'Corporate Mergers and Acquisitions',
    titleKurdish: 'هەڤگرتن و کڕینا کۆمپانییان (M&A)',
    dialogue: [
      { speaker: 'Analyst', text: 'The synergy between the two firms could lead to a dominant market share.', translation: 'هەماهەنگییا د ناڤبەرا هەردوو کۆمپانییان دا دشێت ببیتە ئەگەرێ پشکەکا زۆر یا بازاڕی.' },
      { speaker: 'Investor', text: 'Are there any antitrust concerns regarding this acquisition?', translation: 'ئەرێ چو مەترسییێن دژی-قۆرخکاریێ (ئەنتی-تراست) دەربارەی ڤێ کڕینێ هەین؟' },
      { speaker: 'Analyst', text: 'Regulators are conducting a thorough due diligence process to assess competition.', translation: 'رێکخەر یێن "لێکۆڵینەکا هوور" (دیو دیلیجێنس) ئەنجام ددەن بۆ هەلسەنگاندنا هەڤرکییێ.' },
      { speaker: 'Investor', text: 'The cultural integration of the workforces will be the biggest challenge.', translation: 'تێکەڵبوونا کەلتووری یا هێزا کاری دێ مەزترین ئاستەنگ بیت.' },
      { speaker: 'Analyst', text: 'True. Many mergers fail because of clashing management styles.', translation: 'راستە. گەلەک هەڤگرتن شکست دئینن ژ بەر هەڤدژبوونا شێوازێن بڕێڤەبرنێ.' }
    ],
    vocabulary: [
      { word: 'Synergy', translation: 'هەماهەنگی / تێکەڵبوونا ب هێز' },
      { word: 'Antitrust', translation: 'دژی قۆرخکاریێ' },
      { word: 'Acquisition', translation: 'کڕین / دەستکەفت' },
      { word: 'Due diligence', translation: 'لێکۆڵینەوا هوور / پشکنین' }
    ]
  },
  {
    id: 'b2-83',
    level: 'B2',
    title: 'Game Theory in Economics',
    titleKurdish: 'تیۆرییا کایەی (گەیم تیۆری) د ئابووریدا',
    dialogue: [
      { speaker: 'Professor', text: 'The "Prisoner\'s Dilemma" illustrates why two rational individuals might not cooperate, even if it is in their best interest.', translation: '"ئاریشەیا زیندانی" روون دکەتەڤە بۆچی دوو کەسێن خودان عەقڵ رەنگە هەماهەنگیێ نەکەن، تەنانەت ئەگەر د بەرژەوەندییا وان دا بیت.' },
      { speaker: 'Student', text: 'So reaching a "Nash Equilibrium" doesn\'t always lead to the most optimal social outcome?', translation: 'ئانکو گەهشتن ب "هاوسەنگییا ناش" هەردەم نابیتە ئەگەرێ باشترین ئەنجامێ جڤاکی؟' },
      { speaker: 'Professor', text: 'Exactly. It highlights the tension between individual rationality and collective benefit.', translation: 'ب درۆستی. ئەو توندوتیژییا د ناڤبەرا عەقڵانییەتا تاکەکەسی و مفایێ گشتی دا دیار دکەت.' },
      { speaker: 'Student', text: 'How is this applied to the current global arms race?', translation: 'ئەڤە چەوا ل سەر هەڤرکییا چەکداری یا جیهانی یا نوکە دهێتە جێبەجێکرن؟' },
      { speaker: 'Professor', text: 'Both sides keep investing in weapons to avoid being left behind, creating a cycle of escalating costs.', translation: 'هەردوو لایەن وەبەرهێنانێ د چەکی دا دکەن دا کو ل پاش نەمینن، کو ڤێ خولەکەکا تێچوونێن زێدەبووی درۆست دکەت.' }
    ],
    vocabulary: [
      { word: 'Dilemma', translation: 'ئاریشە / دوودلی' },
      { word: 'Cooperate', translation: 'هەماهەنگی / پێکڤەکارکردن' },
      { word: 'Equilibrium', translation: 'هاوسەنگی / جێگیری' },
      { word: 'Collective', translation: 'گشتی / ب کۆم' }
    ]
  },
  {
    id: 'b2-84',
    level: 'B2',
    title: 'Social Engineering Threats',
    titleKurdish: 'مەترسییێن ئەندازیارییا جڤاکی (سۆشیال ئینجینیێرینگ)',
    dialogue: [
      { speaker: 'Security Expert', text: 'Social engineering exploits human psychology rather than technical vulnerabilities.', translation: 'ئەندازیارییا جڤاکی مفایەکێ خراب ژ دەروونناسییا مرۆڤی وەردگریت ل شوینا کێماسییێن تەکنیکی.' },
      { speaker: 'Employee', text: 'I received a call from someone claiming to be from the IT department asking for my password.', translation: 'تێلەفۆنەک بۆ من هات ژ کەسەکی کو دگۆت ئەز یێ ل پشکا تەکنەلۆژیایێ (IT) و پاسوۆrda من دخواست.' },
      { speaker: 'Security Expert', text: 'That is a classic "vishing" attack. Legitimate IT staff will never ask for your credentials.', translation: 'ئەڤە هێرشەکا "فیشینگا دەنگی" (ڤیشینگ) یا کلاسیکییە. کارمەندێن IT یێن درۆست چو جاران داخوازییا ناڤ و نهێنییا تە ناکەن.' },
      { speaker: 'Employee', text: 'They sounded very convincing and urgent.', translation: 'وان ب شێوازەکێ زۆر باوەرپێکری و ب هەلەپەل قسە دکر.' },
      { speaker: 'Security Expert', text: 'Creating a sense of urgency is a common tactic to bypass critical thinking.', translation: 'درۆستکردنا هەستا بلەز-بوونێ (ئورجێنسی) تەکتیکەکا بەربڵاوە بۆ تێپەڕاندنا هزرا رەخنەگرانە.' }
    ],
    vocabulary: [
      { word: 'Exploits', translation: 'مفایێ خراب وەردگریت' },
      { word: 'Vulnerabilities', translation: 'خاڵێن لاواز / کێماسییەکان' },
      { word: 'Convincing', translation: 'باوەرپێکری' },
      { word: 'Bypass', translation: 'تێپەڕاندن / لابردن' }
    ]
  },
  {
    id: 'b2-85',
    level: 'B2',
    title: 'The Psychology of Branding',
    titleKurdish: 'دەروونناسییا براندینگێ (مارکەسازی)',
    dialogue: [
      { speaker: 'Marketer', text: 'Successful branding creates an emotional resonance with the target audience.', translation: 'مارکەسازییا سەرکەفتی رەنگڤەدانەکا هەستی دگەل جەماوەرێ ئارمانجکرێ درۆست دکەت.' },
      { speaker: 'Designer', text: 'Color theory plays a role; blue evokes trust, while red can stimulate appetite or urgency.', translation: 'تیۆرییا رەنگان دەورێ خوە هەیە؛ رەنگێ شین هەستا باوەریێ پەیدا دکەت، د دەمەکێ دا سۆر دشێت ئارەزوویا خوارنێ یان بلەز-بوونێ هان بدەت.' },
      { speaker: 'Marketer', text: 'It is also about consistency across every touchpoint of the customer journey.', translation: 'هەروەسا دەربارەی جێگیریێ (کۆنسیستێنسی) یە ل سەر هەر خالەکا پەیوەندییا مشتەری.' },
      { speaker: 'Designer', text: 'A strong visual identity helps a product stand out in a saturated market.', translation: 'ناسنامەیەکا وێنەیی یا ب هێز هاریکارە کو بەرهەمەک د بازارەکێ تژی دا دیار بیت.' },
      { speaker: 'Marketer', text: 'Ultimately, a brand is a promise of quality and experience.', translation: 'ل دوماهییێ، براند بەڵێندانییە بۆ جۆرایەتی (کۆالیتی) و ئەزموونێ.' }
    ],
    vocabulary: [
      { word: 'Resonance', translation: 'رەنگڤەدان / لەرە' },
      { word: 'Consistency', translation: 'جێگیری / بەردەوامی' },
      { word: 'Saturated', translation: 'تژی / تێر-بووی' },
      { word: 'Identity', translation: 'ناسنامە' }
    ]
  },
  {
    id: 'b2-86',
    level: 'B2',
    title: 'Existentialism in Literature',
    titleKurdish: 'فەلسەفەیا هەبوونی د ئەدەبیاتێ دا',
    dialogue: [
      { speaker: 'Professor', text: 'Kafka’s protagonists often find themselves trapped in absurd, incomprehensible bureaucracies.', translation: 'قارەمانێن بابەتێن کافکا زۆر جاران خۆ دبینن کو کەفتینە د ناڤ بێ-مادیاتی (ئەبسەرد) و بیرۆکراسییێن تێنەگەهشتی دا.' },
      { speaker: 'Student', text: 'Is that a reflection of the existential dread of the modern individual?', translation: 'ئەرێ ئەو رەنگڤەدانا ترسەکا هەبوونی (ئێکزیستێنشال درێد) یا مروڤێ سەردەمە؟' },
      { speaker: 'Professor', text: 'Very much so. The struggle to find meaning in a seemingly indifferent universe is a recurring theme.', translation: 'بەلێ ب رەنگەکێ زۆر. خەبات بۆ دیتنا رامانەکێ د گەردوونەکێ بێ-خەم دا بابەتەکێ دووبارەبوویە.' },
      { speaker: 'Student', text: 'Camus used the Myth of Sisyphus to describe this eternal struggle.', translation: 'کامۆ چیرۆکا "سیزیف" بکارئینا بۆ وەسفکرنا ڤێ خەباتا هەتا-هەتایی.' },
      { speaker: 'Professor', text: 'He concluded that one must imagine Sisyphus happy, finding joy in the struggle itself.', translation: 'ئەوی وەسا ب دوماهی ئینا کو مرۆڤ پێتڤییە سیزیفی ب دلخۆش بهزرینیت، کو د ناڤ خەباتێ دا تێر-بوونی ببینیت.' }
    ],
    vocabulary: [
      { word: 'Protagonists', translation: 'کەسایەتییێن سەرەکی / پاڵەوانەکان' },
      { word: 'Absurd', translation: 'بێ-ماتی / نە-عەقڵانی' },
      { word: 'Incomprehensible', translation: 'تێنەگەهشتی' },
      { word: 'Recurring', translation: 'دووبارەبووی' }
    ]
  },
  {
    id: 'b2-87',
    level: 'B2',
    title: 'Advanced Data Analytics',
    titleKurdish: 'شیکاریا داتایان ب شێوازەکێ پێشکەفتی',
    dialogue: [
      { speaker: 'Data Scientist', text: 'Predictive modeling allows us to anticipate customer behavior with high accuracy.', translation: 'مۆدێلکرنا پێشبینیکەر رێ ددەتە مە کو چاڤەڕێی رەفتارا کڕیار بکەین ب رادەیەکێ بلند یێ درۆستیێ.' },
      { speaker: 'Manager', text: 'Are we accounting for potential biases in our training datasets?', translation: 'ئەرێ ئەم بەحسێ لایەنگیرییێن (بایاس) گۆمانلێکری د داتایێن راهێنانێ دا دکەین؟' },
      { speaker: 'Data Scientist', text: 'We are using anomaly detection to filter out outliers that might skew the results.', translation: 'ئەم دۆزینەوەیا تشتێن سەیر (ئەنۆمالی) بکار دئینن دا کو داتایێن جودا یێن کو رەنگە ئەنجامان تێک بدەن جودا بکەین.' },
      { speaker: 'Manager', text: 'Visualizing these insights through interactive dashboards is essential for decision-making.', translation: 'پیشاندانا ڤان تێگەهشتنان ب رێکا تابلۆیێن کارلێکەر (داشبۆردز) یا فەرە بۆ بڕیاردانێ.' },
      { speaker: 'Data Scientist', text: 'Agreed. Data-driven organizations consistent outperform their competitors.', translation: 'هاوڕام. کۆمپانیایێن ل سەر بنەمایێ داتایان کار دکەن هەر جار ژ هەڤرکێن خوە باشترن.' }
    ],
    vocabulary: [
      { word: 'Predictive', translation: 'پێشبینیکەر' },
      { word: 'Biases', translation: 'لایەنگیرییەکان' },
      { word: 'Anomaly', translation: 'نە-ئاسایی / سەیر' },
      { word: 'Dashboards', translation: 'تابلۆیێن پیشاندانا زانیارییان' }
    ]
  },
  {
    id: 'b2-88',
    level: 'B2',
    title: 'Renewable Energy Policy',
    titleKurdish: 'سیاسەتا وزەیا نوو-ببیتەڤە',
    dialogue: [
      { speaker: 'Policy Maker', text: 'Fiscal incentives like feed-in tariffs have accelerated the adoption of solar power.', translation: 'هاندەرێن دارایی (فیسکاڵ ئینسیێنتیڤ) وەک کرێیا فرۆشتنا کارەبێ، گەهشتن ب وزەیا رۆژێ خێراتر کرینە.' },
      { speaker: 'Economist', text: 'However, grid stability remains an issue due to the intermittent nature of renewables.', translation: 'لێ جێگیریا تۆڕا کارەبێ هێشتا کێشەیە ژ بەر سرۆشتێ پچڕپچڕ یێ وزەیێن نوو-ببیتەڤە.' },
      { speaker: 'Policy Maker', text: 'We are exploring decentralized energy storage solutions to address this.', translation: 'ئەم ل چارەسەرییێن عەمبارکرنا وزەیا نە-ناوەندی دگەڕێیان بۆ چارەسەرکرنا ڤێ کێشەیێ.' },
      { speaker: 'Economist', text: 'The transition requires a massive overhaul of our aging infrastructure.', translation: 'ئەو گوهۆڕینە پێتڤی ب نووژەنکرنەکا گشتی یا ژێرخانا مەیە یا کەڤن.' },
      { speaker: 'Policy Maker', text: 'Public-private partnerships are the most viable way to fund these projects.', translation: 'هەڤپشکییا جڤاکی و تایبەت (PPP) گونجایترین رێکە بۆ دابینکردنا بودجەیا ڤان پڕۆژەیان.' }
    ],
    vocabulary: [
      { word: 'Fiscal', translation: 'دارایی' },
      { word: 'Transition', translation: 'گوهۆڕین / قۆناغا گوهۆڕینێ' },
      { word: 'Infrastructure', translation: 'ژێرخان' },
      { word: 'Viable', translation: 'گونجاو / یێ بشێت بهێتە کرن' }
    ]
  },
  {
    id: 'b2-89',
    level: 'B2',
    title: 'Urban Sprawl and City Planning',
    titleKurdish: 'بەرفرەهبوونا باژێڕی و پلانسازییا شارستانی',
    dialogue: [
      { speaker: 'Urbanist', text: 'Unchecked urban sprawl leads to increased car dependency and environmental degradation.', translation: 'بەرفرەهبوونا باژێڕی یا بێ-کۆنتڕۆڵ دبیتە ئەگەرێ زێدەبوونا پشتبەستنێ ب ترۆمبێلا و تێکچوونا ژینگەی.' },
      { speaker: 'Planner', text: 'We should promote high-density, mixed-use developments near public transit hubs.', translation: 'پێتڤییە ئەم پشتەڤانییا پێشڤەچوونێن چڕ و تێکەڵ بکەین ل نێزیک وێستگەیێن گواستنەووەی.' },
      { speaker: 'Urbanist', text: 'Creating "walkable cities" improves public health and community cohesion.', translation: 'درۆستکردنا "باژێڕێن رۆیشتنێ" (Walkable cities) ساخلەمییا گشتی و هەڤگرتنا جڤاکی باشتر دکەت.' },
      { speaker: 'Planner', text: 'Zoning laws often prevent the implementation of sustainable urban design.', translation: 'یاسایێن "زۆنینگ" (دابەشکردنا زەڤی) زۆر جاران رێگریێ ل جێبەجێکرنا دیزاینێن باژێڕی یێن بەردەوام دکەن.' },
      { speaker: 'Urbanist', text: 'Revitalizing the city center is more efficient than building on the outskirts.', translation: 'نووژەنکرنا سەنتەرێ باژێڕی مفا و کارامەییا وێ پترە ژ ئاڤاکرن ل دەراوێژێن باژێڕی.' }
    ],
    vocabulary: [
      { word: 'Sprawl', translation: 'بەلاڤبوون / زێدەبوونا بێ-سەرووبەر' },
      { word: 'Density', translation: 'چڕی' },
      { word: 'Cohesion', translation: 'هەڤگرتن / پێکڤەبوون' },
      { word: 'Outskirts', translation: 'دەراوێژ / قەراخێن باژێڕی' }
    ]
  },
  {
    id: 'b2-90',
    level: 'B2',
    title: 'Global Health Initiatives',
    titleKurdish: 'دەسپێشخەرییێن ساخلەمییا جیهانی',
    dialogue: [
      { speaker: 'WHO Rep', text: 'Our goal is to achieve universal health coverage by strengthening primary healthcare systems.', translation: 'ئارمانجا مە گەهشتنا ب دابینکردنا ساخلەمییا گشتییە ب رێکا ب هێزکردنا سیستەمێن ساخلەمییا سەرەکی.' },
      { speaker: 'Minister', text: 'Equitable distribution of vaccines remains a significant challenge for developing nations.', translation: 'دابەشکردنا دادپەروەرانە یا ڤاکسینان هێشتا ئاستەنگەکا مەزنە بۆ وەلاتێن د قۆناغا گەشەکرنێ دا.' },
      { speaker: 'WHO Rep', text: 'We are launching new programs to combat tropical diseases that are often neglected.', translation: 'ئەم بەرنامەیێن نوو رادەگەینین بۆ بەرهەنگارییا نەخۆشییێن کەمەری (تڕۆپیکاڵ) یێن کو زۆر جاران دهێنە پشتگوێخستن.' },
      { speaker: 'Minister', text: 'Funding these initiatives requires sustained international commitment.', translation: 'دابینکردنا بودجەی بۆ ڤان دەسپێشخەرییان پێتڤی ب بەڵێندانییەکا نێڤدەولەتی یا بەردەوام هەری.' },
      { speaker: 'WHO Rep', text: 'Public health emergencies like pandemics highlight the need for global cooperation.', translation: 'بارودۆخێن نەخوازراو یێن ساخلەمی وەک پەتا جیهانییێن (پاندمیکس) گرنگییا هەماهەنگییا جیهانی دیار دکەن.' }
    ],
    vocabulary: [
      { word: 'Universal', translation: 'گشتی / جیهانی' },
      { word: 'Equitable', translation: 'دادپەروەر' },
      { word: 'Neglected', translation: 'پشتگوێخراو' },
      { word: 'Commitment', translation: 'بەڵێندانی / پابەندبوون' }
    ]
  },
  {
    id: 'b2-91',
    level: 'B2',
    title: 'Behavioral Finance',
    titleKurdish: 'دارایییا رەفتاری (بێهێڤیۆراڵ فاینانس)',
    dialogue: [
      { speaker: 'Advisor', text: 'Behavioral finance studies how psychological influences affects market outcomes.', translation: 'دارایییا رەفتاری دکۆلیت کا چەوا کارتێکرنێن دەروونی کارتێکرنێ ل ئەنجامێن بازاڕی دکەن.' },
      { speaker: 'Investor', text: 'Does that explain why people panic sell during a market correction?', translation: 'ئەرێ ئەڤە روون دکەتەڤە بۆچی خەڵک ب ترس کار دکەن بۆ پێشوەخت-فرۆشتنێ (پانیک سێڵ) د دەمێ راستکردنەوا بازاڕی دا؟' },
      { speaker: 'Advisor', text: 'Yes, loss aversion often outweighs the potential for long-term gains in the human mind.', translation: 'بەلێ، هەستا ترسێ ژ خەسارەتێ زۆر جاران پترە ژ هیڤییا قازانجێن دەم-درێژ د مێشکێ مرۆڤی دا.' },
      { speaker: 'Investor', text: 'Understanding these biases is essential for maintaining a disciplined strategy.', translation: 'تێگەهشتن د ڤان لایەنگیرییان دا فەرە بۆ پاراستنا ستراتیژییەتەکا ب رێکوپێک.' },
      { speaker: 'Advisor', text: 'Automating investments can help mitigate emotional decision-making.', translation: 'ئۆتۆماتیک-کردنا وەبەرهێنانێ دشێت هاریکار بیت بۆ کێمکردنا بڕیاردانا ل سەر بنەمایێ هەستان.' }
    ],
    vocabulary: [
      { word: 'Aversion', translation: 'ترس / دوویرکەفتن' },
      { word: 'Correction', translation: 'راستکردنەوا بازاڕی' },
      { word: 'Disciplined', translation: 'ب رێ و جێ / رێکخراو' },
      { word: 'Mitigate', translation: 'کێمکردن / سستکردن' }
    ]
  },
  {
    id: 'b2-92',
    level: 'B2',
    title: 'Nanotechnology in Medicine',
    titleKurdish: 'نانۆتەکنەلۆژیا د پزیشکیێ دا',
    dialogue: [
      { speaker: 'Scientist', text: 'Nanobots could potentially deliver targeted drug therapy directly to cancerous cells.', translation: '"نانۆبۆت" دشێن دەرمانی ب شێوازەکێ ئارمانجکرێ بگەهیننە خانەیێن شێرپەنجێ ب شێوەیەکێ راستەوخۆ.' },
      { speaker: 'Doctor', text: 'This would drastically reduce the side effects associated with chemotherapy.', translation: 'ئەڤە دێ کارتێکرنێن لاوەکی یێن کیمیۆ-سێرەپیێ ب رەنگەکێ مەزن کێم کەت.' },
      { speaker: 'Scientist', text: 'The challenge lies in ensuring these particles don\'t accumulate in vital organs.', translation: 'ئاستەنگ ل وێرێ یە کو ئەم پشتراست بین ئەڤ گەردیلە د ئەندامێن سەرەکی یێن ژیانێ دا کۆم نابی.' },
      { speaker: 'Doctor', text: 'Biocompatibility is the most critical factor in legal approval processes.', translation: 'گونجانا بایۆلۆژی (بایۆ-کۆمباتەبیلیتی) مەزترین فاکتەرە د رێکارێن یاسایی یێن پەسەندکردنێ دا.' },
      { speaker: 'Scientist', text: 'Future diagnostic tools could use nanosensors to detect diseases at the molecular level.', translation: 'ئامرازێن دەستنیشانکردنێ یێن پاشەڕۆژێ دشێن "نانۆ-سێنسەران" بکاربینن بۆ دۆزینەوەیا نەخۆشییان د ئاستێ گەردیلەیی دا.' }
    ],
    vocabulary: [
      { word: 'Targeted', translation: 'ئارمانجکری' },
      { word: 'Accumulate', translation: 'کۆمبوون / پێکهاتن' },
      { word: 'Diagnostic', translation: 'دەستنیشانکردنی نەخۆشی' },
      { word: 'Molecular', translation: 'گەردیلەیی / مۆلیکولار' }
    ]
  },
  {
    id: 'b2-93',
    level: 'B2',
    title: 'Circular Economy in Fashion',
    titleKurdish: 'ئابوورا بازنەیی د بوارێ مۆدێلێ دا',
    dialogue: [
      { speaker: 'Designer', text: 'A circular economy aims to design out waste by keeping products and materials in use.', translation: 'ئابوورا بازنەیی ئارمانجا وێ ئەوە کو پاشمایان نێهێلیت ب رێکا هێلانا بەرهەم و کەرەستان د بکارئینانێ دا.' },
      { speaker: 'Manager', text: 'We are launching a "take-back" program where customers can return worn-out garments for recycling.', translation: 'ئەم بەرنامەیەکێ "وەرگرتنەڤە" رادگەینین کو تێدا کڕیار دشێن جلوبەرگێن کۆن بهیننەڤە بۆ دووبارە بکارئینانێ.' },
      { speaker: 'Designer', text: 'This reduces the demand for virgin raw materials and lowers our environmental impact.', translation: 'ئەڤە داخوازیێ ل سەر کەرەستێن خاڤ یێن نوو کێم دکەت و کارتێکرنا مە یا ژینگەی نزم دکەت.' },
      { speaker: 'Manager', text: 'It requires a fundamental redesign of our supply chain and logistics.', translation: 'ئەڤە پێتڤی ب دووبارە-دیزاینکرنەکا بنەڕەتی یا زنجیرەیا دابینکردن و لۆجستییا مەیە.' },
      { speaker: 'Designer', text: 'Durability and repairability should be the hallmarks of our new collections.', translation: 'بەرگری و شیانا چاککردنێ پێتڤییە نیشانێن سەرەکی یێن کۆلێکشنێن مە یێن نوو بن.' }
    ],
    vocabulary: [
      { word: 'Garments', translation: 'جلوبەرگەکان' },
      { word: 'Virgin raw materials', translation: 'کەرەستێن خاڤ یێن نوو / دەست لێ نەدای' },
      { word: 'Durability', translation: 'بەرگری / دەم-درێژی' },
      { word: 'Hallmarks', translation: 'نیشانێن سەرەکی' }
    ]
  },
  {
    id: 'b2-94',
    level: 'B2',
    title: 'Quantum Cryptography',
    titleKurdish: 'تەشفیرکرنا کوانتۆم (کوانتۆم کریپتۆگرافی)',
    dialogue: [
      { speaker: 'Expert', text: 'Quantum key distribution (QKD) uses physics rather than mathematics to secure communications.', translation: 'دابەشکردنا کلیلێن کوانتۆمی فیزیکێ بکار دئینیت ل شوینا بیرکاریێ بۆ پاراستنا پەیوەندییان.' },
      { speaker: 'Technician', text: 'Is it true that any attempt to intercept the message would instantly change its state?', translation: 'ئەرێ یا راستە کو هەر هەوڵەک بۆ دەستبەسەرداگرتنا پەیامێ دێ ب زوویی بارودۆخێ وێ گوهۆڕیت؟' },
      { speaker: 'Expert', text: 'Yes, according to the observer effect in quantum mechanics, the sender and receiver would detect the intrusion immediately.', translation: 'بەلێ، ل دووڤ کارتێکرنا بینەری د مێکانیکا کوانتۆم دا، ناردەر و وەرگر دێ ب زوویی هەست ب دەستێوەردانێ کەن.' },
      { speaker: 'Technician', text: 'This would make encryption effectively unhackable by conventional computers.', translation: 'ئەڤە دێ تەشفیرکردنێ بکەتە تشتەکێ کو کۆمپیوتەرێن ئاسایی چو جاران نەشێن لهەک (hack) بکەن.' },
      { speaker: 'Expert', text: 'Exactly. It is a vital field as we approach the era of quantum computing.', translation: 'ب درۆستی. ئەڤە بوارەکێ فەرە دەمێ ئەم نێزیک دبین ژ سەردەمێ کۆمپیوتەرێ کوانتۆم.' }
    ],
    vocabulary: [
      { word: 'Cryptography', translation: 'تەشفیرکردن / نھێنی نووسین' },
      { word: 'Intercept', translation: 'رێگریکردن / دەستبەسەرداگرتن' },
      { word: 'Intrusion', translation: 'دەستێوەردان / بێ-ئیجازە هاتن' },
      { word: 'Conventional', translation: 'ئاسایی / کلاسیکی' }
    ]
  },
  {
    id: 'b2-95',
    level: 'B2',
    title: 'The Psychology of Resilience',
    titleKurdish: 'دەروونناسییا خۆڕاگریێ (رێزیلیەنس)',
    dialogue: [
      { speaker: 'Therapist', text: 'Resilience is not about avoiding stress, but about how effectively we bounce back from it.', translation: 'خۆڕاگری نە دەربارەی دوورکەفتنێ یە ژ فشارێ، بەلکو دەربارەی وێ چەندێ یە کا چەوا ب کاریگەری ئەم دزڤڕینە بارێ ئاسایی.' },
      { speaker: 'Client', text: 'I feel overwhelmed by the constant pressure at work and home.', translation: 'ئەز هەست ب ماندیبوونەکا زۆر دکەم ژ فشارا بەردەوام ل سەر کار و مالی.' },
      { speaker: 'Therapist', text: 'Developing a "growth mindset" allows you to view challenges as opportunities for learning.', translation: 'گەشەپێدانا "هزرکرنا گەشەکردنی" رێ ددەتە تە کو ئاستەنگان وەک دەرفەت ببینێ بۆ فێربوونێ.' },
      { speaker: 'Client', text: 'Does practicing mindfulness really strengthen emotional resilience?', translation: 'ئەرێ کارکرن ل سەر "ئاگەهدارییا هۆشیارانە" (مایندفولنێس) ب راستی خۆڕاگرییا هەستی بهێز دکەت؟' },
      { speaker: 'Therapist', text: 'Yes, it helps you regulate your nervous system and respond rather than react impulsively.', translation: 'بەلێ، ئەو هاریکارییا تە دکەت سیستەمێ دەماری رێک بێخی و وەلام بدەی ل شوینا پەرچەکردارێن بێ-هزر.' }
    ],
    vocabulary: [
      { word: 'Resilience', translation: 'خۆڕاگری / توانایا زڤڕینێ' },
      { word: 'Overwhelmed', translation: 'ماندی / بن-فشار' },
      { word: 'Mindfulness', translation: 'ئاگەهدارییا هۆشیارانە' },
      { word: 'Impulsively', translation: 'بە-پەلە / بێ-هزر' }
    ]
  },
  {
    id: 'b2-96',
    level: 'B2',
    title: 'Urban Vertical Deserts and Food Security',
    titleKurdish: 'بیابانێن ستوین یێن باژێڕی و ئاسایشا خوارنێ',
    dialogue: [
      { speaker: 'Researcher', text: '"Food deserts" are urban areas where residents lack access to affordable, nutritious food.', translation: '"بیابانێن خوارنێ" ئەو ناڤچەیێن باژێڕی نە کو دانیشتووانێن وان دەستێ وان ناگەهیتە خوارنێن هەرزان و ب مفا.' },
      { speaker: 'Activist', text: 'This leads to higher rates of obesity and chronic diseases in marginalized communities.', translation: 'ئەڤە دبیتە ئەگەرێ بلندبوونا رێژەیا قەلەویێ و نەخۆشییێن دومدرێژ د جڤاکێن پەراوێزخراو دا.' },
      { speaker: 'Researcher', text: 'Community gardens and urban agriculture can help mitigate these disparities.', translation: 'باخچەیێن جڤاکی و چاندنا باژێڕی دشێن هاریکار بن د کێمکردنا ڤان جوداهییا دا.' },
      { speaker: 'Activist', text: 'We need policy changes to incentivize grocery stores to open in underserved neighborhoods.', translation: 'مە پێتڤی ب گوهۆڕینێن سیاسەتێ هەیە بۆ هاندانا مارکێتێن خوارنێ دا کو ل گەڕەکێن کێم-خزمەتگوزار ڤەبن.' },
      { speaker: 'Researcher', text: 'Food security is a fundamental human right that requires systemic solutions.', translation: 'ئاسایشا خوارنێ مافەکێ بنەڕەتی یێ مرۆڤی یە کو پێتڤی ب چارەسەرییێن سیستەمی هەری.' }
    ],
    vocabulary: [
      { word: 'Nutritious', translation: 'ب مفا / تژی ڤیتامین' },
      { word: 'Obesity', translation: 'قەلەوی / زێدەبوونا کێشێ' },
      { word: 'Disparities', translation: 'جوداهییەکان / نە-یەکسانی' },
      { word: 'Underserved', translation: 'کێم-خزمەتگوزار' }
    ]
  },
  {
    id: 'b2-97',
    level: 'B2',
    title: 'Philosophy: Utilitarianism vs. Deontology',
    titleKurdish: 'فەلسەفە: سودخوازی بەرامبەر ئەرکخوازی',
    dialogue: [
      { speaker: 'Philosopher', text: 'Utilitarianism argues that the moral action is the one that maximizes overall happiness.', translation: 'سودخوازی (یوتیلیتێریانزم) دبێژیت کو رەفتارا ئەخلاقی ئەو لایەنەیە کو زۆرترین خۆشییا گشتی پەیدا دکەت.' },
      { speaker: 'Ethics Student', text: 'But deontology suggests that certain rules are absolute, regardless of the consequences.', translation: 'لێ ئەرکخوازی (دیۆنتۆلۆژی) پێشنیاز دکەت کو هندەک یاسا یێن رەهانە، بێ وێ چەندێ کا ئەنجام چییە.' },
      { speaker: 'Philosopher', text: 'The "Trolley Problem" is often used to test these two frameworks.', translation: '"ئاریشەیا ترۆلی" زۆر جاران بۆ تاقیکرنا ڤان هەردوو فریمۆرکان دهێتە بکارئینان.' },
      { speaker: 'Ethics Student', text: 'A utilitarian would pull the lever to save five lives, even if it kills one person.', translation: 'کەسەکێ سودخواز دێ دەسکێ (لیڤەر) کێشیت بۆ پاراستنا پێنج کەسان، تەنانەت ئەگەر ب مری کەسەک ژی تێدا بچیت.' },
      { speaker: 'Philosopher', text: 'While a strict deontologist might argue that killing is inherently wrong, even to save others.', translation: 'د دەمەکێ دا کەسەکێ ئەرکخواز یێ توند رەنگە بێژیت کۆشتن ب بنەڕەتی خەلاتە، تەنانەت ئەگەر بۆ پاراستنا یێن دی ژی بیت.' }
    ],
    vocabulary: [
      { word: 'Utilitarianism', translation: 'سودخوازی / مفاخوازی' },
      { word: 'Deontology', translation: 'ئەرکخوازی / یاساخوازی' },
      { word: 'Consequences', translation: 'ئەنجامەکان' },
      { word: 'Inherent', translation: 'بنەڕەتی / تێدا-هەی' }
    ]
  },
  {
    id: 'b2-98',
    level: 'B2',
    title: 'High-Frequency Trading',
    titleKurdish: 'بازرگانییا خێرا-بەرز (HFT)',
    dialogue: [
      { speaker: 'Broker', text: 'High-frequency trading uses powerful algorithms to execute thousands of orders in milliseconds.', translation: 'بازرگانییا خێرا-بەرز ئەلگۆریتمێن ب هێز بکار دئینیت بۆ ئەنجامدانا هزاران داخوازییان د ناڤ سانییەیێن کێم دا.' },
      { speaker: 'Analyst', text: 'It provides liquidity to the market but can also contribute to "flash crashes."', translation: 'ئەو نەختینەیێ (لیکویدێتی) بۆ بازاڕی دابین دکەت لێ دشێت ببیتە ئەگەرێ "هەرفینێن ب پریسکە" (فلاش کراشز).' },
      { speaker: 'Broker', text: 'The speed advantage allows firms to profit from tiny price discrepancies.', translation: 'مفایێ خێرایێ رێ ددەتە کۆمپانییان کو قازانجێ ژ جوداهییێن بچووک یێن نرخی ببینن.' },
      { speaker: 'Analyst', text: 'Is it ethical for those with faster technology to have such a significant edge?', translation: 'ئەرێ ئەخلاقییە کو ئەوێن تەکنەلۆژیا وان خێراترە هۆسا مفایەکێ مەزن ببەن؟' },
      { speaker: 'Broker', text: 'Regulators are implementing "speed bumps" to ensure a level playing field.', translation: 'رێکخەر یێن "ئاستەنگێن خێرایێ" (سپید بەمپز) دادەنێن دا کو مەیدانەکا یەکسان دابین بکەن.' }
    ],
    vocabulary: [
      { word: 'Liquidity', translation: 'نەختینە / پارەیا بەر-دەست' },
      { word: 'Discrepancies', translation: 'جوداهییەکان / نە-هەماهەنگی' },
      { word: 'Edge', translation: 'مفا / سەرکەفتن' },
      { word: 'Implementing', translation: 'جێبەجێکردن' }
    ]
  },
  {
    id: 'b2-99',
    level: 'B2',
    title: 'Biodiversity Loss and Ecological Collapse',
    titleKurdish: 'ژ دەستدانا جۆراوجۆرییا بایۆلۆژی و هەرفینا ژینگەی',
    dialogue: [
      { speaker: 'Ecologist', text: 'The current rate of species extinction is hundreds of times higher than the natural background rate.', translation: 'رێژەیا نوکە یا ژناڤچوونا جۆرێن گیانەوەران ب سەدان جاران پترە ژ رێژەیا سرۆشتی یا بنەڕەتی.' },
      { speaker: 'Activist', text: 'If we lose key pollinators like bees, our entire food supply chain could collapse.', translation: 'ئەگەر ئەم گواستەرێن سەرەکی یێن گەردێ (پۆلینەیتەرز) وەک مێشەنگان ژ دەست بدەن، هەمی زنجیرەیا دابینکردنا خوارنا مە دێ هەرفیت.' },
      { speaker: 'Ecologist', text: 'Habitat fragmentation and climate change are the primary drivers of this crisis.', translation: 'پارچە-پارچەبوونا ژینگەهێ و گوهۆڕینا سەقای ئەگەرێن سەرەکی یێن ڤێ قەیرانێ نە.' },
      { speaker: 'Activist', text: 'We must protect biodiversity hotspots to ensure the resilience of our planet.', translation: 'پێتڤییە ئەم خالێن گەرم یێن جۆراوجۆرییا بایۆلۆژی بپارێزین دا کو خۆڕاگرییا هەسارەیا خوە مسۆگەر بکەین.' },
      { speaker: 'Ecologist', text: 'Nature is not a luxury; it is a vital life-support system.', translation: 'سرۆشت نەک تەنێ تشتەکێ خۆشگوزەرانییە؛ بەلکو سیستەمەکێ فەرێ ژیانێ یە.' }
    ],
    vocabulary: [
      { word: 'Extinction', translation: 'ژناڤچوون / نەمان' },
      { word: 'Pollinators', translation: 'گواستەرێن گەردێ' },
      { word: 'Fragmentation', translation: 'پارچە-پارچەبوون' },
      { word: 'Resilience', translation: 'خۆڕاگری / توانایا بەرگریێ' }
    ]
  },
  {
    id: 'b2-100',
    level: 'B2',
    title: 'The Future of Higher Education',
    titleKurdish: 'پاشەڕۆژا خواندنا بالا (زانکۆکان)',
    dialogue: [
      { speaker: 'Professor', text: 'Digital transformation is forcing universities to rethink the value of traditional campus-based learning.', translation: 'گوهۆڕینا دیجیتالی زانکۆیان نەچار دکەت کو دووبارە پەی ببەن ب بهایێ فێربوونا ل سەر بنەمایێ کەمپەسێ.' },
      { speaker: 'Student', text: 'Micro-credentials and online certifications are becoming more attractive to employers.', translation: 'بڕوانامەیێن بچووک و بڕوانامەیێن ئۆنلاین بۆ خاوەنکاران رۆژ ب رۆژ سەرنجراکێشتر دبن.' },
      { speaker: 'Professor', text: 'While online learning offer flexibility, it often lacks the networking and mentorship of in-person education.', translation: 'د دەمەکێ دا کو فێربوونا ئۆنلاین نەرمییێ دابین دکەت، لێ زۆر جاران نەبوونا پەیوەندی و سەرپەرشتیارییا خواندنا د جیوە-جیوە (ئین-پێرسن) دا هەری.' },
      { speaker: 'Student', text: 'Costs are also a major factor; many students are questioning the return on investment of a four-year degree.', translation: 'تێچوون ژی فاکتەرەکێ مەزنە؛ گەلەک قوتابی پرسێ دکەن دەربارەی مفایێ وەبەرهێنانێ د بڕوانامەیەکا چوار ساڵیدا.' },
      { speaker: 'Professor', text: 'Universities must adapt by integrating practical skills with lifelong learning opportunities.', translation: 'زانکۆ پێتڤییە خۆ بگونجینن ب رێکا تێکەڵکردنا بەهرەیێن کرداری دگەل دەرفەتێن فێربوونا هەمی تەمەنی.' }
    ],
    vocabulary: [
      { word: 'Transformation', translation: 'گوهۆڕین / وەرچەرخان' },
      { word: 'Certifications', translation: 'بڕوانامەکان' },
      { word: 'Mentorship', translation: 'سەرپەرشتیاری / رێنمایی' },
      { word: 'Integrating', translation: 'تێکەڵکردن / ئاوێتەکردن' }
    ]
  },
  {
    id: 'c1-1',
    level: 'C1',
    title: 'Environmental Discussion',
    titleKurdish: 'گۆتۆبێژەکا ژینگەیی',
    dialogue: [
      { speaker: 'Karwan', text: 'The impact of climate change is becoming increasingly evident in our region.', translation: 'کارتێکرنا گوهۆڕینا سەقای ب شێوازەکێ زێدەترێ دیار د دەڤەرا مە دا دەردکەڤیت.' },
      { speaker: 'Lana', text: 'Indeed. We need to implement more sustainable practices and reduce our reliance on fossil fuels.', translation: 'راستە. ئەم پێتڤی نە چەندین رێکارێن بەردەوام ئەنجام بدەین و پشتبەستنا خۆ ب سۆتەمنییێن کانی یێ کێم کەین.' },
      { speaker: 'Karwan', text: 'Government intervention is crucial, but individual responsibility cannot be overlooked either.', translation: 'دەستێوەردانا حکومەتێ یا فەرە، لێ بەرپرسیارەتیا تاکەکەسی ژی نابیت بهێتە پشتگوێخستن.' },
      { speaker: 'Lana', text: 'Education is also key. Younger generations need to understand the long-term consequences of their actions.', translation: 'پەروەردە ژی یا سەرەکییە. نەوەیێن گەنج پێتڤییە تێبگەهن ژ ئەنجامێن دوورمەودا یێن کارێن خۆ.' },
      { speaker: 'Karwan', text: 'True. But can we really make a difference if major corporations don\'t change their policies?', translation: 'راستە. لێ ئەرێ ئەم ب راستی دشێین گوهۆڕینێ چێکەین ئەگەر کۆمپانیێن مەزن سیاسەتێن خۆ نەگوهۆڕن؟' },
      { speaker: 'Lana', text: 'It\'s a valid concern. However, consumer demand drives corporate behavior. If we prioritize eco-friendly products, they will adapt.', translation: 'ئەڤە نیشانەکا درۆستە. لێ هەرچەندە، داخوازیا بەکاربەران سەرەدەریێ دگەل رەفتارێن کۆمپانیان دکەت. ئەگەر ئەم گرنگیێ بدەینە بەرهەمێن پارێزەرێن ژینگەی، ئەو دێ خۆ گونجینن.' },
      { speaker: 'Karwan', text: 'What about renewable energy resources in Kurdistan? We have plenty of sun and wind.', translation: 'پا دەربارەی ژێدەرێن ووزەیا نوو ل کوردستانێ؟ مە رۆژ و بایەکێ زۆر یێ هەی.' },
      { speaker: 'Lana', text: 'We do, but the infrastructure for solar and wind farms requires significant investment and political will.', translation: 'بەلێ مە یا هەی، لێ ژێرخانا کێلگەهێن رۆژێ و بای پێتڤی ب وەبەرهێنانەکا مەزن و ئیرادەکا سیاسی هەیە.' },
      { speaker: 'Karwan', text: 'I\'ve seen some small-scale solar projects in rural areas. They seem promising.', translation: 'من هندەک پرۆژەیێن بچووک یێن ووزەیا رۆژێ ل دەڤەرێن گوندەواری دیتینە. دیارە یێن ب هیڤی نە.' },
      { speaker: 'Lana', text: 'Small steps lead to big changes. We should also focus on reforestation to combat desertification.', translation: 'پێنگاڤێن بچووک دبنە ئەگەرێ گوهۆڕینێن مەزن. پێتڤییە ئەم گرنگیێ بدەینە دارچاندنێ ژی دا کو بەرهەنگارییا بیابانبوونێ بکەین.' },
      { speaker: 'Karwan', text: 'Planting more trees would definitely help with the rising temperatures during summer.', translation: 'چاندنا دارێن پتر بێگومان دێ هاریکار بیت دگەل بلندبوونا پلەیێن گەرمێ ل هاڤینێ.' },
      { speaker: 'Lana', text: 'And it would preserve biodiversity. We must protect our natural heritage for future generations.', translation: 'و دێ پارێزگاریێ ل جۆراوجۆرییا بایۆلۆژی ژی کەت. ئەم پێتڤی نە میراتێ خۆ یێ سروشتی بۆ نەوەیێن پاشەرۆژێ بپارێزین.' },
      { speaker: 'Karwan', text: 'It\'s a race against time. We need to act now before we reach a tipping point.', translation: 'ئەڤە هەڤرکییە دگەل دەمی. ئەم پێتڤی نە نوکە کار بکەین بەری ئەم بگەهنە خالەکا نەڤەگەر.' },
      { speaker: 'Lana', text: 'Agreed. Let\'s start by organizing a community awareness workshop next month.', translation: 'هاوڕام. بلا دەستپێ بکەین ب رێکخستنا وۆرک شۆپەکا هۆشیارییا جڤاکی ل مەها بهێت.' },
      { speaker: 'Karwan', text: 'Count me in. I\'ll help with the documentation and invitations.', translation: 'من ژی هەژمار بکە. ئەز دێ هاریکاریێ دگەل دۆکۆمێنتکرن و داخوازنامەیا کەم.' },
      { speaker: 'Lana', text: 'Excellent. Collective action is our most powerful tool against environmental degradation.', translation: 'نایابە. کارێ ب کۆم بهێزترین ئامرازا مە یە دژی تێکچوونا ژینگەی.' },
      { speaker: 'Karwan', text: 'I\'ve also heard about circular economy. Reusing materials instead of discarding them.', translation: 'من دەربارەی ئابووریا بازنەیی (circular economy) ژی گۆهـ لێ بوویە. دووبارە بکارئینانا کەرەستان ل شوینا هاڤێتنا وان.' },
      { speaker: 'Lana', text: 'That\'s a vital concept. It minimizes waste and reduces the demand for new raw materials.', translation: 'ئەڤە تێگەهەکێ زۆر فەرە. پاشمایان کێم دکەت و داخوازێ ل سەر کەرەستێن خاڤ یێن نوو کێم دکەت.' },
      { speaker: 'Karwan', text: 'We should encourage local artisans to use recycled materials in their crafts.', translation: 'پێتڤییە ئەم هاندانا دەستڕەنگینێن ناوخۆیی بکەین کو کەرەستێن دووبارە پاقژکری د کارێن خۆ دا بکاربینن.' },
      { speaker: 'Lana', text: 'Definitely. It would promote both sustainability and local culture.', translation: 'بێگومان. ئەڤە دێ هەمی بەردەوامیێ و کەلتوورێ ناوخۆیی ژی پێش ئێخیت.' }
    ],
    vocabulary: [
      { word: 'Impact', translation: 'کارتێکرن' },
      { word: 'Sustainable', translation: 'بەردەوام / ژینگەیی'
      },
      { word: 'Reliance', translation: 'پشتبەستن' },
      { word: 'Crucial', translation: 'زۆر فەر / گرینگ' }
    ]
  },
  {
    id: 'c1-2',
    level: 'C1',
    title: 'Quantum Supremacy Explained',
    titleKurdish: 'روونکرنەڤەیا بالادەستییا کوانتۆم (کوانتۆم سوپریمەسی)',
    dialogue: [
      { speaker: 'Physicist', text: 'Quantum supremacy refers to the point where a quantum computer can perform a calculation that is practically impossible for classical supercomputers.', translation: 'بالادەستییا کوانتۆم ئاماژەیە بۆ ئەو قۆناغا کو تێدا کۆمپیوتەرەکێ کوانتۆم دەست ب ئەنجامدانا کردارەکێ دکەت کو بۆ سۆپەر-کۆمپیوتەرێن کلاسیکی ب کرداری یا مەحالە.' },
      { speaker: 'Engineer', text: 'We recently achieved this using a processor with 53 superconducting qubits.', translation: 'مە ب ڤان نێزیکان ئەڤ چەندە ئەنجام دا ب رێکا بکارئینانا چارەسەرکەرەکێ (پرۆسێسەر) خودان ٥٣ کیوبیتێن سۆپەر-کۆندێکتەر.' },
      { speaker: 'Physicist', text: 'The implications for cryptography and material science are profound, as prime factorization becomes trivial.', translation: 'کارتێکرنێن ڤێ ژ بۆ بوارێن تەشفیرکردن و زانستێ کەرەستان گەلەک کویرن، چونکی جوداکردنا ژمارەیێن بنەڕەتی (پڕایم فاکتۆریزەیشن) دێ بیتە تشتەکێ سادە.' },
      { speaker: 'Engineer', text: 'However, scaling these systems while maintaining qubit coherence remains a monumental engineering challenge.', translation: 'لێ، مەزنکردنا ڤان سیستەمان د دەمەکێ دا کو ئەم پارێزگارییێ ل هەماهەنگییا کیوبیتان بکەین، هێشتا ئاستەنگەکا ئەندازیاری یا مەزنە.' },
      { speaker: 'Physicist', text: 'We are on the cusp of a computation revolution that will redefine the boundaries of human knowledge.', translation: 'ئەم ل سەر لێڤا شۆڕشەکا هژماری نە کو دێ سنوورێن زانینا مرۆڤی ژ نوو پێناسە کەتەڤە.' }
    ],
    vocabulary: [
      { word: 'Supremacy', translation: 'بالادەستی / سەروەری' },
      { word: 'Qubits', translation: 'کیوبیت (یەکەیەکا زانیارییان د کوانتۆمێ دا)' },
      { word: 'Coherence', translation: 'هەماهەنگی / پێکڤەگرێدان' },
      { word: 'Cusp', translation: 'لێڤ / سەروبەندی' }
    ]
  },
  {
    id: 'c1-3',
    level: 'C1',
    title: 'The Geopolitics of Semiconductors',
    titleKurdish: 'جیۆپۆلیتیکا نیوە-پێگەهێنەران (سێمیکۆندێکتەرز)',
    dialogue: [
      { speaker: 'Analyst', text: 'Semiconductors have become the "new oil," driving geopolitical tensions between major superpowers.', translation: 'نیوە-پێگەهێنەران بووینە "نەتا نوو"، کو فشارێن جیۆپۆلیتیک د ناڤبەرا زلهێزان دا درۆست دکەن.' },
      { speaker: 'Journalist', text: 'The concentration of advanced chip manufacturing in East Asia creates a significant supply chain vulnerability.', translation: 'کۆمبوونا کارخانەیێن چێکرنا چیپێن پێشکەفتی ل رۆژهەلاتا ئاسیایێ مەترسییەکا مەزن ل سەر زنجیرەیا دابینکردنێ پەیدا دکەت.' },
      { speaker: 'Analyst', text: 'Control over the lithography equipment required for 3-nanometer nodes is a key strategic leverage.', translation: 'کۆنتڕۆڵکردنا کەرەستێن "لیتۆگرافی" یێن پێتڤی بۆ بەرهەمهێنانا چیپێن ٣ نانۆمەتری، خالەکا ستراتیژی یا گرنگە.' },
      { speaker: 'Journalist', text: 'Are nations shifting toward "reshoring" production to ensure national security?', translation: 'ئەرێ وەلات بەرەڤ "ڤەگێڕانەوا بەرهەمهێنانێ" (ریشۆرینگ) بۆ ناڤ وەلاتێن خوە دچن دا کو ئاسایشا نیشتیمانی مسۆگەر بکەن؟' },
      { speaker: 'Analyst', text: 'Yes, but the capital expenditure and specialized labor required are enormous barriers.', translation: 'بەلێ، لێ خەرجیێن سەرمایەیی و هێزا کاری یا پسپۆڕ ئاستەنگێن گەلەک مەزنن.' }
    ],
    vocabulary: [
      { word: 'Semiconductors', translation: 'نیوە-پێگەهێنەر / سێمیکۆندێکتەر' },
      { word: 'Lithography', translation: 'لیتۆگرافی / نخشاندن ل سەر چیپ' },
      { word: 'Reshoring', translation: 'ڤەگێڕانەوا بەرهەمهێنانێ بۆ ناوۆ' },
      { word: 'Expenditure', translation: 'تێچوون / خەرجی' }
    ]
  },
  {
    id: 'c1-4',
    level: 'C1',
    title: 'Neuroplasticity and Recovery after Stroke',
    titleKurdish: 'نەرمی مێشکی و باشبوونا پشتی جەڵتا مێشکی',
    dialogue: [
      { speaker: 'Neurologist', text: 'Following a stroke, the brain exhibits a high degree of plasticity, allowing it to bypass damaged regions.', translation: 'پشتی جەڵتا مێشکی، مێشک ئاستەکێ بلندێ نەرمیێ نیشان ددەت، کو رێ ددەتێ ئەو پارچەیێن زیانپێکەفتی تێپەڕینیت.' },
      { speaker: 'Therapist', text: 'Intensive rehabilitation therapy capitalizes on this window of opportunity to reorganize neural circuits.', translation: 'چارەسەرییا راهێنانا چر و توند (رێهابیلیتەیشن) مفای ژ ڤێ دەرفەتێ وەردگریت بۆ رێکخستنەوا خولێن دەماری.' },
      { speaker: 'Neurologist', text: 'Constraint-induced movement therapy is particularly effective in encouraging functional recovery.', translation: 'چارەسەرییا جوولانێ ب رێکا نەچارکردنێ ب تایبەت کاریگەرە د هاندانا باشبوونا فەنکشنی دا.' },
      { speaker: 'Therapist', text: 'Can we enhance this process through non-invasive brain stimulation?', translation: 'ئەرێ ئەم دشێین ڤێ کردارێ پێش بێخین ب رێکا هاندانا مێشکی ب شێوازەکێ نە-نەشتەرگەری؟' },
      { speaker: 'Neurologist', text: 'Preliminary research suggests that transcranial magnetic stimulation (TMS) could potentially accelerate synaptic pruning and growth.', translation: 'لێکۆڵینەووەیێن دەستپێکی دیار دکەن کو هاندانا مێشکی ب رێکا مەگنەتیک (TMS) دشێت گەشەیا پەیوەندیێن دەماری خێراتر کەت.' }
    ],
    vocabulary: [
      { word: 'Exhibits', translation: 'نیشان ددەت / دیار دکەت' },
      { word: 'Rehabilitation', translation: 'راهێنانەوا / نووژەنکردن' },
      { word: 'Functional', translation: 'فەنکشنی / کرداری' },
      { word: 'Preliminary', translation: 'دەستپێکی / بەرایی' }
    ]
  },
  {
    id: 'c1-5',
    level: 'C1',
    title: 'The Ethics of Algorithmic Governance',
    titleKurdish: 'ئەخلاقییا برێڤەبرنا ئەلگۆریتمی',
    dialogue: [
      { speaker: 'Sociologist', text: 'We are increasingly delegating bureaucratic decision-making to black-box algorithms.', translation: 'ئەم ب شێوەیەکێ زێدەبەر بڕیاردانا بیرۆکراسی رادەستی ئەلگۆریتمێن "سندوقا رەش" دکەین (یێن کو تێنەگەهشتینە).' },
      { speaker: 'Legal Scholar', text: 'This raises profound questions about accountability when an automated system produces discriminatory outcomes.', translation: 'ئەڤە پرسیارێن کویر دەربارەی بەرپرسیاریەتیێ پەیدا دکەت دەمێ سیستەمەکێ خۆکار ئەنجامێن جوداکار (دیسکریمیناتۆری) بەرهەم دئینیت.' },
      { speaker: 'Sociologist', text: 'Algorithmic opacity prevents citizens from understanding or challenging decisions that affect their lives.', translation: 'لێلبوونا ئەلگۆریتمی رێگریێ ل هاووەلاتییان دکەت کو تێبگەهن یان دژی وان بڕیاران راوەستن یێن کو کارتێکرنێ ل ژیانا وان دکەن.' },
      { speaker: 'Legal Scholar', text: 'We need "explainable AI" frameworks that prioritize transparency and due process.', translation: 'مە پێتڤی ب فریمۆرکێن "AI یێ شیکارکراو" هەری کو گرنگیێ بدەنە شەفافیەت و رێکارێن یاسایی یێن درۆست.' },
      { speaker: 'Sociologist', text: 'The myth of algorithmic neutrality must be dismantled; data is inherently political.', translation: 'پێتڤییە وەهما بێ-لایەنییا ئەلگۆریتمی بهێتە هەرفاندن؛ داتا ب بنەڕەتی یا سیاسییە.' }
    ],
    vocabulary: [
      { word: 'Delegating', translation: 'سپاردن / رادەستکردن' },
      { word: 'Accountability', translation: 'بەرپرسیارسازی (موسائەلە)' },
      { word: 'Opacity', translation: 'لێلبوون / نا-روونی' },
      { word: 'Dismantled', translation: 'هەرفاندن / هەڵوەشاندنەوە' }
    ]
  },
  {
    id: 'c1-6',
    level: 'C1',
    title: 'Sustainable Urbanism in the Global South',
    titleKurdish: 'شارستانییەتا بەردەوام ل وەلاتێن باشووری جیهانی',
    dialogue: [
      { speaker: 'Urbanist', text: 'The challenge in rapidly growing megacities is to implement sustainable infrastructure without marginalizing poor residents.', translation: 'ئاستەنگ ل باژێڕە زەبەلاحێن ب لەز گەشە دکەن ئەوە کو ژێرخانەکا بەردەوام دابین بکەین بێی کو دانیشتووانێن هەژار پەراوێز بێخین.' },
      { speaker: 'Planner', text: 'Tactical urbanism, like temporary pedestrian zones, allows for low-cost testing of sustainable design.', translation: 'شارستانییەتا تەکتیکی، وەک ناوچەیێن پیادە یێن کاتی، رێ ددەتە مە بۆ تاقیکرنا دیزاینا بەردەوام ب تێچوونەکا کێم.' },
      { speaker: 'Urbanist', text: 'However, the legacy of colonial zoning often hampers integrated public transit networks.', translation: 'لێ، میراتێ دابەشکردنا زەڤی یا سەردەمێ کۆلۆنیالیزمێ زۆر جاران رێگریێ ل تۆڕێن گواستنەووەی یێن هەماهەنگ دکەت.' },
      { speaker: 'Planner', text: 'Informal settlements must be recognized as part of the solution, focusing on incremental upgrades.', translation: 'ئاڤاهییێن نە-یاسایی پێتڤییە وەک پشکەک ژ چارەسەریێ بهێنە قەبوولکردن، ب گرنگیدان ب باشترکردنا پلە-پلە.' },
      { speaker: 'Urbanist', text: 'Resilience toward climate-induced flooding is currently our top priority.', translation: 'بەرگری ل بەرامبەر لافاوێن ژ ئەگەرێ گوهۆڕینا سەقای پەیدا دبن، نوکە مەزترین کارێ مەیە.' }
    ],
    vocabulary: [
      { word: 'Marginalizing', translation: 'پەراوێز خستن' },
      { word: 'Tactical', translation: 'تەکتیکی / پلان بۆ داڕێژراو' },
      { word: 'Hampers', translation: 'رێگری لێ دکەت / ئاستەنگ دکەت' },
      { word: 'Settlements', translation: 'ئاڤادانییەکان / نیشتەجێبوونەكان' }
    ]
  },
  {
    id: 'c1-7',
    level: 'C1',
    title: 'The Psychology of Collective Trauma',
    titleKurdish: 'دەروونناسییا تراومایا جڤاکی (خەمۆکییا کۆم)',
    dialogue: [
      { speaker: 'Psychologist', text: 'Collective trauma occurs when a catastrophic event shatters the foundational beliefs of an entire community.', translation: 'تراومایا جڤاکی دەمێ روو ددەت کو روودانەکا کارەساتبار باوەرێن بنەڕەتی یێن هەمی جڤاکەکێ بشکێنیت.' },
      { speaker: 'Researcher', text: 'The intergenerational transmission of trauma can affect the behavioral patterns of descendants for decades.', translation: 'گواستنەوەیا تراومایێ د ناڤبەرا نەوەیان دا دشێت کارتێکرنێ ل سەر رەفتارێن نەوەیێن پاشەڕۆژێ بکەت بۆ دەهان سالان.' },
      { speaker: 'Psychologist', text: 'Narrative processing is essential for communal healing; the story must be told and validated.', translation: 'پرۆسەکرنا چیرۆکان (نەراتیڤ پرۆسێسینگ) یا فەرە بۆ چاکبوونا جڤاکی؛ پێتڤییە چیرۆک بهێتە گۆتن و رێز لێ بهێتە گرتن.' },
      { speaker: 'Researcher', text: 'How do structural inequalities exacerbate the impact of the initial trauma?', translation: 'نە-یەکسانییێن پێکهاتەیی چەوا کارتێکرنا تراومایا دەستپێکی خرابتر دکەن؟' },
      { speaker: 'Psychologist', text: 'They prevent access to support systems, leading to a state of complex, ongoing psychological distress.', translation: 'ئەو رێگریێ ل گەهشتنا ب سیستەمێن پشتەڤانیێ دکەن، کو ئەڤە دبیتە ئەگەرێ رەوشەکا ئاڵۆز و بەردەوام یا خەمۆکییا دەروونی.' }
    ],
    vocabulary: [
      { word: 'Catastrophic', translation: 'کارەساتبار / وێرانکەر' },
      { word: 'Intergenerational', translation: 'د ناڤبەرا نەوەیان دا' },
      { word: 'Communal', translation: 'کۆمەڵی / جڤاکی' },
      { word: 'Exacerbate', translation: 'خرابترکردن / زێدەکردن' }
    ]
  },
  {
    id: 'c1-8',
    level: 'C1',
    title: 'Decolonizing Higher Education',
    titleKurdish: 'رزگارکردنا خواندنا بالا ژ هزرا کۆلۆنیالیزمێ',
    dialogue: [
      { speaker: 'Scholar', text: 'Decolonizing the curriculum requires us to challenge the Eurocentric bias of Western academic knowledge.', translation: 'رزگارکردنا مەنهەجێ خواندنێ پێتڤی ب وێ چەندێ هەیە کو ئەم لایەنگیرییا ئەوروپی-سەنتەر یا زانینا ئەکادیمی یا رۆژهەلاتی پشتگوێ بێخین.' },
      { speaker: 'Student', text: 'It’s about incorporating indigenous epistemologies and marginalized perspectives.', translation: 'ئەڤە دەربارەی تێکەڵکردنا فەلسەفەیێن زانستی یێن رەسەن و دیدەگایێن پەراوێزخراوە.' },
      { speaker: 'Scholar', text: 'We must examine how institutional structures perpetuate historical power imbalances.', translation: 'پێتڤییە ئەم لێبپێچین کا چەوا پێکهاتەیێن دامەزراوەیی نە-هاوسەنگییێن هێزێ یێن دیرۆکی بەردەوام دکەن.' },
      { speaker: 'Student', text: 'Does this move toward "pluriversity" rather than "university"?', translation: 'ئەرێ ئەڤە بەرەڤ تێگەهێ "پلۆریڤێرسیتی" دچیت (جۆراوجۆرییا زانستێ) ل شوینا "یونیڤێرسیتی"؟' },
      { speaker: 'Scholar', text: 'Precisely. Recognizing that multiple valid forms of knowledge exist is the first step toward true cognitive emancipation.', translation: 'ب درۆستی. دانپێدان ب هندێ کو چەندین شێوازێن درۆست یێن زانینێ هەین، پێنگاڤا ئێکێ یە بەرەڤ ئازادبوونا مێشکی یا راستی.' }
    ],
    vocabulary: [
      { word: 'Eurocentric', translation: 'ئەوروپی-سەنتەر' },
      { word: 'Epistemologies', translation: 'زانستناسی / تیۆریا زانینێ' },
      { word: 'Indigenious', translation: 'رەسەن / خۆجێی' },
      { word: 'Emancipation', translation: 'ئازادبوون / رزگاربوون' }
    ]
  },
  {
    id: 'c1-9',
    level: 'C1',
    title: 'The Impact of CRISPR on Biodiversity',
    titleKurdish: 'کارتێکرنا CRISPR ل سەر جۆراوجۆرییا بایۆلۆژی',
    dialogue: [
      { speaker: 'Geneticist', text: 'Gene drive technology could potentially eliminate invasive species that threaten entire island ecosystems.', translation: 'تەکنەلۆژیا "جین درایڤ" دشێت ب شێوەیەکێ گۆمانلێکری وان جۆرێن داگیرکەر ژناڤ ببەت یێن کو مەترسیێ ل سەر ژینگەیێن هەمی دوورگان پەیدا دکەن.' },
      { speaker: 'Ecologist', text: 'But the ecological cascading effects are unpredictable; we might inadvertently dismantle a vital food web.', translation: 'لێ کارتێکرنێن ژینگەی یێن زنجیرەیی نەپێشبینیکرینە؛ رەنگە ئەم ب بێ-ئاگەهی تۆرەکا خوارنێ یا فەر ژناڤ ببەین.' },
      { speaker: 'Geneticist', text: 'We are developing safe-guard mechanisms to reverse or limit the spread of edited genes.', translation: 'ئەم سیستەمێن پاراستنێ گەشە پێ ددەن بۆ ڤەگەڕاندن یان سنووردارکردنا بەلاڤبوونا جینێن دەستکاریکراو.' },
      { speaker: 'Ecologist', text: 'The ethical oversight must be global, as gene drives respect no national borders.', translation: 'چاڤدێرییا ئەخلاقی پێتڤییە جیهانی بیت، چونکی "جین درایڤ" چو سنوورێن نیشتیمانی ناناسیت.' },
      { speaker: 'Geneticist', text: 'It is a balancing act between eradicating pests and maintaining the precautionary principle.', translation: 'ئەڤە هاوسەنگییەکا کارە د ناڤبەرا ژناڤبرنا مێش و مۆرێن خراب و پاراستنا پرەنسیپێن پارێزگارییێ.' }
    ],
    vocabulary: [
      { word: 'Invasive', translation: 'داگیرکەر / پەل هاوێژ' },
      { word: 'Cascading', translation: 'زنجیرەیی / دڵۆپ-دڵۆپ داهاتن' },
      { word: 'Inadvertently', translation: 'ب بێ-ئاگەهی / بێ ئەنقەست' },
      { word: 'Precautionary', translation: 'پارێزگاری / پێشوەخت-هۆشیاری' }
    ]
  },
  {
    id: 'c1-10',
    level: 'C1',
    title: 'The Future of Labor in a Post-AI World',
    titleKurdish: 'پاشەڕۆژا هێزا کاری د جیهانەکا پشتی-ژیرییا دەستکرد دا',
    dialogue: [
      { speaker: 'Economist', text: 'The automation of cognitive labor will lead to a significant structural shift in the employment market.', translation: 'ئۆتۆماتیک-کردنا کارێن مێشکی دێ بیتە ئەگەرێ گوهۆڕینەکا پێکهاتەیی یا مەزن د بازاڕێ کاری دا.' },
      { speaker: 'Sociologist', text: 'Universal Basic Income (UBI) is often proposed as a safety net for those displaced by AI.', translation: '"داهاتێ بنەڕەتی یێ گشتی" (UBI) زۆر جاران وەک تۆرەکا پاراستنێ بۆ وان کەسان پێشنیاز دهێتە کرن یێن کو AI جهێ وان دگریت.' },
      { speaker: 'Economist', text: 'However, UBI doesn’t address the psychological loss of purpose often derived from work.', translation: 'لێ، UBI چارەسەرییا ژ دەستدانا "ئامانجا دەروونی" ناکەت یا کو زۆربەیا جاران ژ کاری پەیدا دبیت.' },
      { speaker: 'Sociologist', text: 'We might need to decouple dignity and survival from employment entirely.', translation: 'رەنگە پێتڤی بیت ئەم کەرامەت و ژیانێ ب شێوەیەکێ گشتی ژ پڕۆسەیا کارکرنێ جودا بکەین.' },
      { speaker: 'Economist', text: 'This requires a paradigm shift in how we value human contribution to society.', translation: 'ئەڤە پێتڤی ب گوهۆڕینەکا بنەڕەتی (پارادایم شیفت) هەری د وێ چەندێ دا کا ئەم چەوا بهایێ پشکدارییا مرۆڤی د جڤاکی دا دپێڤین.' }
    ],
    vocabulary: [
      { word: 'Automation', translation: 'ئۆتۆماتیک-کردن / خۆکارکردن' },
      { word: 'Displaced', translation: 'جیهـ-گۆهۆڕین / ژ کار-مان' },
      { word: 'Decouple', translation: 'جوداکردن / لێک-کردنەوە' },
      { word: 'Paradigm', translation: 'نموونە / فریمۆرکێ هزری' }
    ]
  },
  {
    id: 'c1-11',
    level: 'C1',
    title: 'The Hard Problem of Consciousness',
    titleKurdish: 'ئاریشەیا ب زەحمەت یا هۆشیاریێ (کۆنشیەسنس)',
    dialogue: [
      { speaker: 'Philosopher', text: 'The "hard problem" of consciousness is explaining how and why we have subjective experiences (qualia).', translation: '"ئاریشەیا ب زەحمەت" یا هۆشیاریێ ئەوە کو ئەم روون بکەینەڤە چەوا و بۆچی ئەم خودان ئەزموونێن تاکەکەسی یێن هەستی (کوالیا) نە.' },
      { speaker: 'Neuroscientist', text: 'We can map neural correlates, but the transition from physical processes to subjective feeling remains elusive.', translation: 'ئەم دشێین پەیوەندیێن دەماری دەستنیشان بکەین، لێ گوهۆڕینا پرۆسەیێن فیزیایی بۆ هەستە یێن ناوخۆیی هێشتا یا لێڵە.' },
      { speaker: 'Philosopher', text: 'Does this imply that consciousness might be a fundamental property of the universe, rather than an emergent phenomenon?', translation: 'ئەرێ ئەڤە وێ چەندێ دگەهینیت کو رەنگە هۆشیاری تایبەتمەندییەکا بنەڕەتی بیت یا گەردوونی، ل شوینا هندێ کو دیاردەیەکا پەیدابووی بیت؟' },
      { speaker: 'Neuroscientist', text: 'Panpsychism is a controversial hypothesis, but it addresses the explanatory gap between matter and mind.', translation: '"پان-سایکزم" (هۆشیارییا گشتی) گریمانەیەکا جدییە، چونکی هەوڵا پڕکردنا ڤالاتییا شیکارکرنێ دکەت ل ناڤبەرا ماددە و مێشک دا.' },
      { speaker: 'Philosopher', text: 'Ultimately, we must distinguish between "easy problems" like data processing and the mystery of "being."', translation: 'ل دوماهییێ، پێتڤییە ئەم جوداهییێ بدەینە د ناڤبەرا "ئاریشەیێن ب سانەهی" وەک پرۆسەکرنا زانیارییان و پەنهانییا "هەبوونی".' }
    ],
    vocabulary: [
      { word: 'Subjective', translation: 'تاکەکەسی / ناوخۆیی' },
      { word: 'Qualia', translation: 'کوالیا (ئەزموونێن هەستی یێن تاکەکەسی)' },
      { word: 'Elusive', translation: 'لێڵ / ب سەرهاتی' },
      { word: 'Emergent', translation: 'پەیدابووی / سەرهەلدای' }
    ]
  },
  {
    id: 'c1-12',
    level: 'C1',
    title: 'Advances in Renewable Energy Storage',
    titleKurdish: 'پێشڤەچوون د عەمبارکرنا وزەیا نوو-ببیتەڤە دا',
    dialogue: [
      { speaker: 'Engineer', text: 'Solid-state batteries represent a significant leap over conventional lithium-ion technology in terms of energy density.', translation: 'پاتریێن بارێ-رەق (سۆلید-ستەیت) بازدانەکا مەزنن ل سەر تەکنەلۆژیا لیسیۆم-ئایۆن یا کلاسیکی ژ لایێ چڕییا وزەیێ ڤە.' },
      { speaker: 'Physicist', text: 'However, the scalability of solid electrolytes remains hindered by manufacturing complexities.', translation: 'لێ، مەزنکردنا ئەلیکترۆلایتێن رەق هێشتا یا ئاستەنگە ژ بەر ئاڵۆزییێن بەرهەمهێنانێ.' },
      { speaker: 'Engineer', text: 'We are also exploring gravity-based storage systems, using excess solar power to lift massive weights.', translation: 'ئەم هەروەسا ل سیستەمێن وەرگرتنا وزەیێ ب رێکا کێشکرنێ (گراڤیتی) دگەڕێیان، ب بکارئینانا وزەیا زێدەیا رۆژێ بۆ بلندکردنا کێشێن مەزن.' },
      { speaker: 'Physicist', text: 'Pumped hydro remains the most widespread solution, accounting for over 90% of global storage capacity.', translation: '"هایدرۆیێ پەمپکری" هێشتا بەربڵاوترین چارەسەرییە، کو پتر ژ ٪٩٠ یا شیانا عەمبارکردنا جیهانی پێک دئینیت.' },
      { speaker: 'Engineer', text: 'To reach "net zero," we must achieve a diverse portfolio of long-duration energy storage technologies.', translation: 'بۆ گەهشتنا ب "سفر-خاوێن" (نێت زیرۆ)، پێتڤییە ئەم بگەهنە جۆراوجۆرییەکا تەکنەلۆژیایێن عەمبارکردنا وزەیێ یێن دەم-درێژ.' }
    ],
    vocabulary: [
      { word: 'Solid-state', translation: 'بارێ-رەق' },
      { word: 'Electrolytes', translation: 'ئەلیکترۆلایت (ماددەیێن گواستەرێن کارەبێ)' },
      { word: 'Portfolio', translation: 'کۆمەڵە / کاتالۆگ' },
      { word: 'Capacity', translation: 'شیان / قەبارە' }
    ]
  },
  {
    id: 'c1-13',
    level: 'C1',
    title: 'Ethics of Human Germline Modification',
    titleKurdish: 'ئەخلاقییا گوهۆڕینا جینی یا مرۆڤی (جێرم-لاین)',
    dialogue: [
      { speaker: 'Bioethicist', text: 'Modifying the human germline means the changes will be inherited by all future generations.', translation: 'گوهۆڕینا "جێرم-لاین" (خانەیێن زاوزێ) یا مرۆڤی رامانا وێ ئەوە کو گوهۆڕین دێ هێنە ميراتبرن بۆ هەمی نەوەیێن داهاتی.' },
      { speaker: 'Geneticist', text: 'But it provides an unprecedented opportunity to eradicate hereditary diseases like Huntington’s from the gene pool.', translation: 'لێ ئەو دەرفەتەکا بێ-وێنە ددەت بۆ ژناڤبرنا نەخۆشییێن ميراتگر وەک "هەنتینگتۆن" ل ناڤ جێنە-پوول (کۆمەلا جینان) دا.' },
      { speaker: 'Bioethicist', text: 'The slippery slope toward "designer babies" and genetic inequality is a major societal concern.', translation: 'مەترسییا بەرەڤ-چوونا بۆ "زارۆکێن دیزاین-کری" و نە-یەکسانییا جینی ئاریشەکا مەزنا جڤاکی یە.' },
      { speaker: 'Geneticist', text: 'International consensus is leaning toward a moratorium on clinical applications until safety is guaranteed.', translation: 'کۆدەنگییا نێڤدەولەتی بەرەڤ راوەستاندنا (مۆراتۆریۆم) بەکارهێنانێن پزیشکی دچیت هەتا کو سلامەتی مسۆگەر دبیت.' },
      { speaker: 'Bioethicist', text: 'We must distinguish between therapeutic gene therapy and enhancements that could create a genetic elite.', translation: 'پێتڤییە ئەم جوداهییێ بدەینە د ناڤبەرا "جین-چارەسەری" بۆ نەخۆشییان و "باشترکردن" (ئینهانسیمێنت) یێن کو دشێن چینەکا جیناتی یا بالا درۆست بکەن.' }
    ],
    vocabulary: [
      { word: 'Inherited', translation: 'ميراتگیراو / گواستراوە' },
      { word: 'Unprecedented', translation: 'بێ-وێنە / پێشتر نەکراو' },
      { word: 'Moratorium', translation: 'راوەستاندنا کاتی / مۆراتۆریۆم' },
      { word: 'Elite', translation: 'بالا / نایاب / بژاردە' }
    ]
  },
  {
    id: 'c1-14',
    level: 'C1',
    title: 'Cyber Warfare and International Law',
    titleKurdish: 'شەڕێ سێبەر (سایبەر وار-فەیر) و یاسایا نێڤدەولەتی',
    dialogue: [
      { speaker: 'Diplomat', text: 'Attributing cyberattacks to specific state actors remains a formidable challenge in international diplomacy.', translation: 'پەیوەستکردنا هێرشێن سایبەری ب دەولەتێن دیارکری وەک ئاستەنگەکا مەزن د دیپلۆماسییا نێڤدەولەتیدا دمینیت.' },
      { speaker: 'Jurist', text: 'The Tallinn Manual attempts to apply current laws of armed conflict to the digital domain.', translation: '"نامێلکا تالین" هەوڵ ددەت یاسایێن شەڕی یێن نوکە ل سەر بووارێ دیجیتالی پەیڕەو بکەت.' },
      { speaker: 'Diplomat', text: 'Does a cyberattack that disables a national power grid constitute an "armed attack" justifying self-defense?', translation: 'ئەرێ هێرشەکا سایبەری کو تۆڕا کارەبا نیشتیمانی ژ کار بێخیت، وەک "هێرشەکا چەکداری" دهێتە هەژمارتن بۆ بەرگریێ ژ خوە؟' },
      { speaker: 'Jurist', text: 'It depends on the scale and effects; if the damage is equivalent to kinetic warfare, then yes.', translation: 'ئەڤە ب قەبارە و ئەنجامان ڤە گرێدایە؛ ئەگەر زیان وەک شەڕێ فیزیایی (کینێتیک) بیت، پا بەلێ.' },
      { speaker: 'Diplomat', text: 'The lack of transparent norms leads to a digital arms race that threatens global stability.', translation: 'نەبوونا بنەمایێن شەفاف دبیتە ئەگەرێ هەڤرکییەکا چەکداری یا دیجیتالی کو مەترسیێ ل سەر جێگیریا جیهانی پەیدا دکەت.' }
    ],
    vocabulary: [
      { word: 'Attributing', translation: 'پەیوەستکردن / گەڕاندنەووە' },
      { word: 'Kinetic', translation: 'جوولێنەر / فیزیایی (د شەڕیدا)' },
      { word: 'Norms', translation: 'بنەما / بڕیارێن جڤاکی یان یاسایی' },
      { word: 'Stability', translation: 'جێگیری' }
    ]
  },
  {
    id: 'c1-15',
    level: 'C1',
    title: 'Microplastics in Ocean Ecosystems',
    titleKurdish: 'مایکرۆ-پلاستیک د سیستەمێن ژینگەی یێن دەریاییدا',
    dialogue: [
      { speaker: 'Marine Biologist', text: 'Microplastics are now ubiquitous, found in everything from Arctic ice to the deepest ocean trenches.', translation: 'مایکرۆ-پلاستیک نوکە ل هەر جهەکی هەنە، د ناڤ بەستەلا کانی جەمسەری هەتا کویرترین خالێن زەریایان دا دهێنە دیتن.' },
      { speaker: 'Environmentalist', text: 'These particles bioaccumulate in the food chain, posing a risk to apex predators and humans.', translation: 'ئەو گەردیلە د زنجیرەیا خوارنێ دا کۆم دبن (بایۆ-ئەکومولەیشن)، و مەترسییێ ل سەر نێچیرڤانێن سەرەکی و مرۆڤان درۆست دکەن.' },
      { speaker: 'Marine Biologist', text: 'The chemical additives in plastic often act as endocrine disruptors when ingested by marine life.', translation: 'پێکهاتەیێن کیمیایی یێن د پلاستیکی دا زۆر جاران کار دکەن وەک تێکدەرێن سیستەمێ هۆرمۆنی دەمێ ژ لایێ گیانەوەرێن دەریایی ڤە دهێنە خوارن.' },
      { speaker: 'Environmentalist', text: 'We need to move beyond single-use bans and address the systemic issues of plastic production.', translation: 'پێتڤییە ئەم ژ قەدەغەکردنا پلاستیکێ ئێک-جار-بکارئینان دەرباز ببین و بچینە سەر ناڤکا کێشەیێن بەرهەمهێنانا پلاستیکی.' },
      { speaker: 'Marine Biologist', text: 'Biodegradable alternatives are promising, but they require specific industrial conditions to decompose.', translation: 'جێگرێن پارچە-پارچەبووی (بایۆ-دیگرەیدەبڵ) پاشەڕۆژەکا باش هەیە، لێ پێتڤی ب بارودۆخێن پیشەسازی یێن تایبەت هەری بۆ رزیبوونێ.' }
    ],
    vocabulary: [
      { word: 'Ubiquitous', translation: 'ل هەر جهەکی هەی' },
      { word: 'Bioaccumulate', translation: 'کۆمبوون د ناڤ جەستەیێ زیندوودا' },
      { word: 'Disruptors', translation: 'تێکدەرەکان' },
      { word: 'Decompose', translation: 'رزیبوون / لێک-هەڵوەشاندنەوە' }
    ]
  },
  {
    id: 'c1-16',
    level: 'C1',
    title: 'The Psychology of Extremism',
    titleKurdish: 'دەروونناسییا توندڕەوییێ (ئێکستریمزم)',
    dialogue: [
      { speaker: 'Sociologist', text: 'Radicalization often stems from a combination of perceived injustice and a search for significance.', translation: 'گۆهۆڕین بەرەڤ توندڕەوییێ (رادیکاڵیزەیشن) زۆر جاران ژ تێکەڵەیەکا هەستکردن ب زۆلمێ و گەڕیان ل دویڤ ناڤودەنگی پەیدا دبیت.' },
      { speaker: 'Psychologist', text: 'The "echo chamber" effect on social media exacerbates cognitive closure within extremist groups.', translation: 'کارتێکرنا "ژوورا لەرەلەر" (ئیکۆ چامبەر) د سوشیال میدیایێ دا دبیتە ئەگەرێ داخستنا مێشکی ل ناڤ گروپێن توندڕەو دا.' },
      { speaker: 'Sociologist', text: 'De-radicalization programs focus on creating alternative narratives and social reintegration.', translation: 'بەرنامەیێن دژی-توندڕەوییێ گرنگیێ ددەنە درۆستکردنا چیرۆکێن جێگر و زڤڕاندنەوا وان بۆ ناڤ جڤاکی.' },
      { speaker: 'Psychologist', text: 'Understanding the role of group identity is crucial; the line between "us" and "them" is weaponized.', translation: 'تێگەهشتن د دەورێ ناسنامەیا گروپی دا فەرە؛ سنوورێ د ناڤبەرا "مە" و "وان" دا دهێتە بکارئینان وەک چەک.' },
      { speaker: 'Sociologist', text: 'Sustainable prevention requires addressing the underlying systemic grievances that fuel these ideologies.', translation: 'بەرگرییا بەردەوام پێتڤی ب چارەسەرکرنا وان گۆمان و نارەزایەتی یێن سیستەمی هەری کو بڕبڕەیا ڤان ئایدیۆلۆژیایان پێک دئینن.' }
    ],
    vocabulary: [
      { word: 'Significance', translation: 'گرنگی / ناڤودەنگی / رامان' },
      { word: 'Exacerbates', translation: 'زێدەتر دکەت / توندتر دکەت' },
      { word: 'Reintegration', translation: 'زڤڕاندنەوا بۆ ناڤ جڤاکی' },
      { word: 'Grievances', translation: 'نارەزایەتییەکان / گلەییەکان' }
    ]
  },
  {
    id: 'c1-17',
    level: 'C1',
    title: 'The Future of Space Law',
    titleKurdish: 'پاشەڕۆژا یاسایا واڵایی (سپەیس لاو)',
    dialogue: [
      { speaker: 'Legal Scholar', text: 'The 1967 Outer Space Treaty states that space cannot be subject to national appropriation by claims of sovereignty.', translation: 'پەیماننامەیا بیرەوەریا واڵایی یا ١٩٦٧ دبێژیت کو واڵایی نابیت ببیته ملکێ چو نەتەوەیان ب ناڤێ سەروەرییێ (سۆڤرێنتی).' },
      { speaker: 'Space Entrepreneur', text: 'However, the rise of commercial mining of asteroids raises questions about property rights in space.', translation: 'لێ، زێدەبوونا کارێن دەرهێنانا کانزایان ل سەر پاشماوەیێن هەسارەیان (ئاستێرۆیدز) پرسیاران دەربارەی مافێ خاوەنداریەتیێ د واڵایی دا پەیدا دکەت.' },
      { speaker: 'Legal Scholar', text: 'Existing laws are ill-equipped to handle the potential conflict between private entities and sovereign states.', translation: 'یاسایێن نوکە نە د ئامادەنە بۆ سەرەدەریێ دگەل تێکچوونێن گۆمانلێکری د ناڤبەرا کۆمپانیایێن تایبەت و دەولەتێن خودان سەروەری دا.' },
      { speaker: 'Space Entrepreneur', text: 'We also need a framework for space debris mitigation to prevent the Kessler syndrome.', translation: 'ئەم هەروەسا پێتڤی ب فریمۆرکەکێ نە بۆ کێمکردنا پاشمایێن واڵایی دا کو رێگریێ ل نیشانەیێن "کێسلەر" بکەین.' },
      { speaker: 'Legal Scholar', text: 'The militarization of space is an even greater threat that requires new, binding international agreements.', translation: 'چەکدارکردنا واڵایی مەترسییەکا گەنجترە کو پێتڤی ب رێککەفتنێن نێڤدەولەتی یێن پابەندکەر یێن نوو هەری.' }
    ],
    vocabulary: [
      { word: 'Appropriation', translation: 'دەستبەسەرداگرتن / تەرخانکردن' },
      { word: 'Sovereignty', translation: 'سەروەری / سۆڤرێنتی' },
      { word: 'Debris', translation: 'پاشماوە / لاشەکان' },
      { word: 'Binding', translation: 'پابەندکەر' }
    ]
  },
  {
    id: 'c1-18',
    level: 'C1',
    title: 'Digital Sovereignty and Big Tech',
    titleKurdish: 'سەروەرییا دیجیتالی و کۆمپانیایێن تەکنەلۆژیا یێن مەزن',
    dialogue: [
      { speaker: 'Policy Expert', text: 'Digital sovereignty is the ability of a state to control its digital infrastructure and the data of its citizens.', translation: 'سەروەرییا دیجیتالی شیانا دەولەتێ یە بۆ کۆنتڕۆڵکردنا ژێرخانا خۆ یا دیجیتالی و داتایێن هاووەلاتیێن خۆ.' },
      { speaker: 'Tech CEO', text: 'The borderless nature of the internet makes traditional notions of sovereignty difficult to enforce.', translation: 'سرۆشتێ بێ-سنوور یێ ئینتەرنێتێ پێناسەیێن کلاسیکی یێن سەروەرییێ دکەتە تشتەکێ ب زەحمەت بۆ جێبەجێکردنێ.' },
      { speaker: 'Policy Expert', text: 'However, reliance on foreign-owned hyperscalers creates a strategic vulnerability for national security.', translation: 'لێ، پشتبەستن ب کۆمپانیایێن مەزن یێن بیانی (هایپەرسکەیلەرز) خالەکا لاوازا ستراتیژی بۆ ئاسایشا نیشتیمانی درۆست دکەت.' },
      { speaker: 'Tech CEO', text: 'Technological self-sufficiency is a noble goal, but it often leads to fragmentation and inefficiency.', translation: 'خۆ-ژێهاتیبوونا تەکنەلۆژی ئارمانجەکا بلندە، لێ زۆر جاران دبیتە ئەگەرێ پارچە-پارچەبوون و نە-کارامەیی.' },
      { speaker: 'Policy Expert', text: 'We must strike a balance between global connectivity and the protection of democratic values and data privacy.', translation: 'پێتڤییە ئەم هاوسەنگییەکێ درۆست بکەین د ناڤبەرا پەیوەندییا جیهانی و پاراستنا بهایێن دیمۆکراسی و تایبەتمەندییا داتایان دا.' }
    ],
    vocabulary: [
      { word: 'Sovereignty', translation: 'سەروەری' },
      { word: 'Hyperscalers', translation: 'کۆمپانیایێن تەکنەلۆژی یێن یەکجار مەزن' },
      { word: 'Self-sufficiency', translation: 'خۆ-ژێهاتیبوون / خۆبژێوی' },
      { word: 'Privacy', translation: 'تایبەتمەندی / نھێنی' }
    ]
  },
  {
    id: 'c1-19',
    level: 'C1',
    title: 'Social Media and Mental Health',
    titleKurdish: 'سوشیال میدیا و ساخلەمییا دەروونی',
    dialogue: [
      { speaker: 'Clinical Psychologist', text: 'We are seeing a correlation between excessive social media usage and increased rates of anxiety and depression.', translation: 'ئەم پەیوەندییەکێ (کۆریلیشن) دبینن د ناڤبەرا بکارئینانا زێدەیا سوشیال میدیایێ و بلندبوونا رێژەیا دوودلی و خەمۆکییێ دا.' },
      { speaker: 'Researcher', text: 'The intermittent reinforcement or "variable reward" nature of notifications triggers addictive behaviors.', translation: 'سیستەمێ "خەلاتێ گوهۆڕاو" یێ ئاگادارکردنەوان (نۆتیفیکەیشنز) دەست دکەت ب هاندانا رەفتارێن ئالوودەبوونێ.' },
      { speaker: 'Clinical Psychologist', text: 'The curated reality presented on these platforms also contributes to a distorted self-image among adolescents.', translation: 'ئەو راستییا "هەلبژێردراو" یا ل سەر ڤان پلاتفۆرمان دهێتە نیشاندان، دبیتە ئەگەرێ وێنەیەکێ شێواوی یێ خۆ-دیتنێ ل دەف مێرمناڵان.' },
      { speaker: 'Researcher', text: 'Algorithmically-driven feeds often traps users in negative feedback loops that amplify distress.', translation: '"فید" یێن ب ئەلگۆریتم کار دکەن، زۆر جاران بەکارهێنەران د ناڤ خوارنێن نەرێنی دا دگرن کو برینێن دەروونی مەزن دکەن.' },
      { speaker: 'Clinical Psychologist', text: 'Digital literacy and limits on screen time are necessary interventions, but we also need industry-wide design changes.', translation: 'ئاگەهدارییا دیجیتالی و سنووردارکردنا دەمێ شاشەیێ رێکارێن فەرن، لێ ئەم هەروەسا پێتڤی ب گوهۆڕینێن دیزاینێ نە ل سەر ئاستێ هەمی پیشەسازییێ.' }
    ],
    vocabulary: [
      { word: 'Correlation', translation: 'پەیوەندی / هەماهەنگی' },
      { word: 'Intermittent', translation: 'پچڕپچڕ / ناوە ناوە' },
      { word: 'Curated', translation: 'هەلبژێردراو / رێکخراو' },
      { word: 'Distorted', translation: 'شێواو / تێکچوو' }
    ]
  },
  {
    id: 'c1-20',
    level: 'C1',
    title: 'Radical Freedom and Responsibility',
    titleKurdish: 'ئازادییا بنەڕەتی و بەرپرسیاریەتی',
    dialogue: [
      { speaker: 'Philosopher A', text: 'In the existentialist view, man is condemned to be free because he did not create himself, yet he is free.', translation: 'د دیدەگا هەبوونخوازی دا، مرۆڤ مەحکومە ب ئازادیێ، چونکی ئەوی خوە دۆست نەکریە، لێ هەر یێ ئازادە.' },
      { speaker: 'Philosopher B', text: 'And once thrown into the world, he is responsible for everything he does.', translation: 'و دەمێ دهێتە هاڤێتن بۆ ناڤ ڤێ جیهانێ، ئەو یێ بەرپرسیارە ژ هەمی تشتێن کو ئەنجام ددەت.' },
      { speaker: 'Philosopher A', text: 'This "radical responsibility" means we cannot blame our circumstances or our nature for our failures.', translation: 'ئەڤ "بەرپرسیاریەتییا بنەڕەتی" رامانا وێ ئەوە کو ئەم نەشێین بارودۆخ یان سرۆشتێ خۆ تاوانبار بکەین بۆ شکستێن خۆ.' },
      { speaker: 'Philosopher B', text: 'But doesn’t this ignore the structural constraints that many people face daily?', translation: 'لێ ئەرێ ئەڤە پشتگوێخستنا وان ئاستەنگێن پێکهاتەیی نینە یێن کو گەلەک خەڵک رۆژانە رووبەڕووی دبن؟' },
      { speaker: 'Philosopher A', text: 'Existentialism acknowledges facticity, but it insists that our attitude toward those constraints is an act of freedom.', translation: 'هەبوونخوازی دانپێدانێ ب راستییێن سەپایی (فاکتیسیتی) دکەت، لێ جەختێ ل سەر هندێ دکەت کو شێوازێ سەرەدەریا مە دگەل وان ئاستەنگان کارەکێ ئازادییێ یە.' }
    ],
    vocabulary: [
      { word: 'Condemned', translation: 'مەحکوم / سزادراو' },
      { word: 'Radical', translation: 'بنەڕەتی / رادیکاڵ' },
      { word: 'Constraints', translation: 'ئاستەنگ / کۆسپەکان' },
      { word: 'Inaction', translation: 'بێدەنگی / بێکاری / نە-جولان' }
    ]
  },
  {
    id: 'c1-21',
    level: 'C1',
    title: 'The Sociology of Post-Truth Politics',
    titleKurdish: 'کۆمەڵناسییا سیاسەتا پشتی-راستیێ (پۆست-تروس)',
    dialogue: [
      { speaker: 'Sociologist', text: 'In a "post-truth" era, objective facts are less influential in shaping public opinion than appeals to emotion and personal belief.', translation: 'د سەردەمێ "پشتی-راستیێ" دا، راستییێن زانستی و رەها کارتێکرنا وان کێمترە ل سەر چێکرنا رای گشتی ب بەراورد دگەل هەست و باوەرێن تاکەکەسی.' },
      { speaker: 'Political Scientist', text: 'This shift is often driven by the fragmentation of media and the rise of populist rhetoric.', translation: 'ئەڤ گوهۆڕینە زۆر جاران ژ تێکچوون و پارچەبوونا میدیایێ و بلندبوونا درووشمێن پۆپۆلیستی پەیدا دبیت.' },
      { speaker: 'Sociologist', text: 'Social media algorithms prioritize engagement over accuracy, leading to the creation of alternative realities.', translation: 'ئەلگۆریتمێن سوشیال میدیایێ گرنگیێ ددەنە "بەشداریێ" (ئینگەیجمێنت) ل شوینا دروستیێ، کو ئەڤە دبیتە ئەگەرێ درۆستبوونا جیهانێن جێگر یێن راستیێ.' },
      { speaker: 'Political Scientist', text: 'When truth is subjective, the foundational trust required for a democratic society begins to erode.', translation: 'دەمێ راستی دبیته تشتەکێ تاکەکەسی، ئەو باوەرییا بنەڕەتی یا پێتڤی بۆ جڤاکەکێ دیمۆکراسی دەست ب تێکچوونێ دکەت.' },
      { speaker: 'Sociologist', text: 'We must develop "epistemic resilience" to navigate this information landscape effectively.', translation: 'پێتڤییە ئەم "خۆڕاگرییا زانستی" (ئەپیستێمیک رێزیلیەنس) گەشە پێ بدەن دا کو د ڤێ نەخشەیا پڕ زانیاری دا ب کاریگەری رێکا خۆ بدۆزینەڤە.' }
    ],
    vocabulary: [
      { word: 'Influential', translation: 'کارتێکەر' },
      { word: 'Rhetoric', translation: 'درووشم / رەوانبێژی' },
      { word: 'Engagement', translation: 'بەشداری / کارلێککردن' },
      { word: 'Erode', translation: 'تێکچوون / خوران / ژناڤچوون' }
    ]
  },
  {
    id: 'c1-22',
    level: 'C1',
    title: 'Biomimetics in Material Engineering',
    titleKurdish: 'بایۆ-میمیتاکس (چاڤلێکرنا سرۆشتی) د ئەندازیارییا کەرەستان دا',
    dialogue: [
      { speaker: 'Engineer', text: 'Biomimetics involves studying nature\'s models and then imitating these designs to solve human problems.', translation: 'بایۆ-میمیتاکس پێک دهێت ژ خواندنا نموونەیێن سرۆشتی و پاشان چاڤلێکرنا ڤان دیزاینان بۆ چارەسەرکرنا ئاریشەیێن مرۆڤی.' },
      { speaker: 'Biologist', text: 'The structural coloration of butterfly wings is being used to create pigment-free, fade-resistant paints.', translation: 'رەنگی پێکهاتەی یێ باڵێن پەپۆلان دهێتە بکارئینان بۆ درۆستکردنا بۆیەیێن بێ-میهر و دژی-کاڵبوونەوە.' },
      { speaker: 'Engineer', text: 'Similarly, the hydrophobic properties of the lotus leaf have inspired self-cleaning surfaces.', translation: 'ب هەمان رەنگ، تایبەتمەندییێن "نە-تەبایی دگەل ئاڤێ" (هایدرۆفۆبیک) یێن گەڵایێن لۆتۆسێ بووینە هاندەر بۆ درۆستکردنا ڕوویێن خۆ-پاقژکەر.' },
      { speaker: 'Biologist', text: 'Nature’s efficiency is the result of millions of years of evolutionary optimization.', translation: 'کارامەییا سرۆشتی ئەنجامێ ملیۆنان ساڵان یێ باشترکردنا (ئۆپتیمایزەیشن) پەرەسەندنێ یە.' },
      { speaker: 'Engineer', text: 'By synthesizing biological principles with advanced manufacturing, we can create truly revolutionary materials.', translation: 'ب تێکەڵکردنا پرەنسیپێن بایۆلۆژی دگەل بەرهەمهێنانا پێشکەفتی، ئەم دشێین کەرەستێن ب راستی شۆڕشگێڕ درۆست بکەین.' }
    ],
    vocabulary: [
      { word: 'Imitating', translation: 'چاڤلێکرن / لێک-کردنەوە' },
      { word: 'Pigment', translation: 'رەنگ / میهر' },
      { word: 'Hydrophobic', translation: 'ئاڤ-نەوەرگر / ئاڤ-تەوەر' },
      { word: 'Optimization', translation: 'باشترکردن / ئۆپتیمایزەیشن' }
    ]
  },
  {
    id: 'c1-23',
    level: 'C1',
    title: 'Permafrost Thawing and Climate Feedbacks',
    titleKurdish: 'توانەووەیا بەستەڵەکی و رەنگڤەدانێن سەقای',
    dialogue: [
      { speaker: 'Climatologist', text: 'The thawing of Arctic permafrost is releasing massive quantities of methane, a potent greenhouse gas.', translation: 'توانەووەیا بەستەڵەکێ سەر زەڤی (پێرمەفرۆست) د جەمسەری باکۆر دا دبیتە ئەگەرێ بەردانی بڕەکێ زۆر یێ میسانی، کو گازەکێ گەرمکەر یێ ب هێزە.' },
      { speaker: 'Environmental Scientist', text: 'This creates a positive feedback loop that accelerates global warming beyond our current models.', translation: 'ئەڤە خولەکەکا رەنگڤەدانا ئەرێنی (پۆزەتیڤ فیدباک لۆپ) درۆست دکەت کو گەرمبوونا جیهانی خێراتر دکەت پتر ژ مۆدێلێن مە یێن نوکە.' },
      { speaker: 'Climatologist', text: 'The organic matter trapped in the ice for millennia is now decomposing and entering the atmosphere.', translation: 'ئەو ماددەیێن ئۆرگانی یێن کو بۆ هزاران ساڵان د ناڤ سەهۆڵێ دا مابوون، نوکە دڕزێن و دچنە ناڤ بەرگەهێ هەوای.' },
      { speaker: 'Environmental Scientist', text: 'We are also seeing the re-emergence of ancient pathogens that have been dormant in the frozen soil.', translation: 'ئەم هەروەسا سێرهەلدانەووەیا نەخۆشییێن (پاسۆجینز) کۆن دبینن یێن کو د ناڤ ئاخا بەستی دا بێکار مابوون.' },
      { speaker: 'Climatologist', text: 'The cryosphere is a critical tipping point in the Earth\'s climate system.', translation: 'ناوچەیا بەستەڵەکی خالەکا وەرچەرخانێ یا فەرە د سیستەمێ سەقایێ زەڤیێ دا.' }
    ],
    vocabulary: [
      { word: 'Thawing', translation: 'توانەووە / بزاڤ' },
      { word: 'Potent', translation: 'ب هێز / کاریگەر' },
      { word: 'Dormant', translation: 'بێکار / خەفتووی' },
      { word: 'Tipping point', translation: 'خالا وەرچەرخانێ / خالا نەە-زڤڕین' }
    ]
  },
  {
    id: 'c1-24',
    level: 'C1',
    title: 'Zero-Knowledge Proofs in Cryptography',
    titleKurdish: 'بەڵگەیێن "بێ-زانیاری" د کریپتۆگرافیێ دا',
    dialogue: [
      { speaker: 'Cryptographer', text: 'Zero-knowledge proofs (ZKPs) allow one party to prove to another that they know a secret without revealing the secret itself.', translation: 'بەڵگەیێن بێ-زانیاری (ZKP) رێ ددەتە لایەنەکی کو بۆ لایەنێ دی بسەلمینیت کو ئەو نهێنییەکێ دزانیت بێی کو خودی نهێنییێ ئاشکرا بکەت.' },
      { speaker: 'Blockchain Developer', text: 'This has revolutionary implications for privacy in decentralized systems.', translation: 'ئەڤە کارتێکرنێن شۆڕشگێڕ دێ هەبن ل سەر تایبەتمەندییێ د سیستەمێن نە-ناوەندی دا.' },
      { speaker: 'Cryptographer', text: 'For example, you could prove you are over 18 without showing your birth date or identity document.', translation: 'بۆ نموونە، تو دشێی بسەلمینی کو تو یێ ژ ١٨ ساڵان مێزەتر بێی کو مێژوویا ژدایکبوونا خۆ یان بەڵگەیا خۆ یا ناسنامێ نیشان بدەی.' },
      { speaker: 'Blockchain Developer', text: 'The mathematical complexity of zk-SNARKs makes them computationally intensive but highly secure.', translation: 'ئاڵۆزییا بیرکارییا zk-SNARKs وان دکەتە تشتەکێ کو پێتڤی ب هێزەکا زۆرا کۆمپیوتەری هەری لێ د هەمان دەم دا گەلەک پارێزراون.' },
      { speaker: 'Cryptographer', text: 'It is the cornerstone of the next generation of privacy-preserving technologies.', translation: 'ئەڤە بەردێ بناغەیێ نەوەیا نوو یا تەکنەلۆژیایێن پارێزەرێن تایبەتمەندییێ یە.' }
    ],
    vocabulary: [
      { word: 'Revealing', translation: 'ئاشکراکردن' },
      { word: 'Decentralized', translation: 'نە-ناوەندی' },
      { word: 'Intensive', translation: 'توند / چر / پێتڤی ب زۆرا' },
      { word: 'Cornerstone', translation: 'بەردێ بناغە / خالەکا سەرەکی' }
    ]
  },
  {
    id: 'c1-25',
    level: 'C1',
    title: 'The Neurobiology of Addiction',
    titleKurdish: 'نەورو-بایۆلۆژییا ئالوودەبوونێ (ئەدیکشن)',
    dialogue: [
      { speaker: 'Neuroscientist', text: 'Addiction is primarily a disorder of the brain’s reward system, specifically the dopaminergic pathways.', translation: 'ئالوودەبوون ب بنەڕەتی تێکچوونەکە د سیستەمێ "خەڵاتی" یێ مێشکی دا، ب تایبەت د رێڕەوێن دۆپامینی دا.' },
      { speaker: 'Psychiatrist', text: 'Chronic substance abuse leads to neuroadaptive changes that diminish the brain\'s natural ability to experience pleasure.', translation: 'بکارئینانا بەردەوام یا ماددەیێن بێهۆشکەر دبیتە ئەگەرێ گوهۆڕینێن "خۆ-گونجاندنا دەماری" کو شیانا سرۆشتی یا مێشکی بۆ هەستکردن ب خۆشییێ کێم دکەن.' },
      { speaker: 'Neuroscientist', text: 'The prefrontal cortex, responsible for executive function and impulse control, becomes compromised.', translation: 'تێکچوون د تێکەڵاوا پێشەوە (پرێفرۆنتاڵ کۆرتێکس) دا پەیدا دبیت، کو بەرپرسیارە ژ کارێن کارگێڕی و کۆنتڕۆڵکردنا پەرچەکرداران.' },
      { speaker: 'Psychiatrist', text: 'This explains why self-will is often insufficient to overcome severe dependency.', translation: 'ئەڤە روون دکەتەڤە بۆچی ئیرادەیا تاکەکەسی زۆر جاران پچووکە بۆ تێپەڕاندنا وابەستەیییا (دیپێندێنسی) توند.' },
      { speaker: 'Neuroscientist', text: 'Effective treatment must integrate pharmacological interventions with behavioral therapy.', translation: 'چارەسەرییا کاریگەر پێتڤییە دەرمان (فارماکۆلۆژیا) دگەل چارەسەرییا رەفتاری تێکەڵ بکەت.' }
    ],
    vocabulary: [
      { word: 'Disorder', translation: 'تێکچوون / ناتەواوی' },
      { word: 'Diminish', translation: 'کێمکردن' },
      { word: 'Compromised', translation: 'تێکچوو / لاواز-بووی' },
      { word: 'Dependency', translation: 'وابەستەیی / پشتبەستن ب تشتەکی' }
    ]
  },
  {
    id: 'c1-26',
    level: 'C1',
    title: 'Existentialism and the City',
    titleKurdish: 'هەبوونخوازی و باژێڕ: گەڕیان د سەردەمێ نوو دا',
    dialogue: [
      { speaker: 'Literary Critic', text: 'The archetype of the "flâneur"—the urban wanderer—is central to Baudelaire’s exploration of modernity.', translation: 'نموونەیا "فڵانێر" (گەڕۆکێ باژێڕی) خالەکا سەرەکییە د دۆزینەوەیا بۆدێلێر دا بۆ سەردەمێ نوو (مۆدێرنیتی).' },
      { speaker: 'Philosopher', text: 'The flâneur experiences the city as a landscape of fleeting impressions and existential anonymity.', translation: '"فڵانێر" سەرەدەریێ دگەل باژێڕی دکەت وەک تابلۆیەکا هەستێن کاتی و ونبوونا هەبوونی (ئەنۆنیمێتی).' },
      { speaker: 'Literary Critic', text: 'The rapid pace of the metropolis can lead to a sense of alienation, as described by Simmel.', translation: 'خێراییا باژێڕێن مەزن دشێت ببیتە ئەگەرێ هەستکردن ب "نامۆبوونێ" (ئەیلیەنەیشن)، وەک سیمل بەحس دکەت.' },
      { speaker: 'Philosopher', text: 'Yet, the urban environment also provides the radical freedom to re-invent oneself away from communal observation.', translation: 'لێ، ژینگەیێ باژێڕی هەروەسا ئازادییەیا بنەڕەتی دابین دکەت بۆ دووبارە-درۆستکردنەوا خۆ، دوویر ژ چاڤدێرییا جڤاکی.' },
      { speaker: 'Literary Critic', text: 'The city remains the ultimate stage for the performance of identity in the modern age.', translation: 'باژێڕ وەک گەورەترین مەیدان دمینیت بۆ پیشاندانا ناسنامێ د سەردەمێ نوو دا.' }
    ],
    vocabulary: [
      { word: 'Archetype', translation: 'نموونەیەکا پێشەنگ / فۆرمێ سەرەکی' },
      { word: 'Fleeting', translation: 'کاتی / تێپەڕ' },
      { word: 'Alienation', translation: 'نامۆبوون' },
      { word: 'Observation', translation: 'چاڤدێری / تێبینی' }
    ]
  },
  {
    id: 'c1-27',
    level: 'C1',
    title: 'The Economics of Degrowth',
    titleKurdish: 'ئابوورا نە-گەشەکردنی (دی-گرۆس)',
    dialogue: [
      { speaker: 'Ecological Economist', text: 'Degrowth argues that infinite economic growth on a finite planet is physically impossible.', translation: 'ئابوورا نە-گەشەکردنی (دی-گرۆس) دەلێێت کو گەشەکردنا ئابووری یا بێ-سنوور ل سەر هەسارەیەکا سنووردار، ب شێوەیەکێ فیزیایی مەحالە.' },
      { speaker: 'Mainstream Economist', text: 'But wouldn’t that lead to massive unemployment and a collapse of the current financial system?', translation: 'لێ ئەرێ ئەو چەندە نابیتە ئەگەرێ بێکارییەکا زۆر و هەرفینا سیستەمێ دارایی یێ نوکە؟' },
      { speaker: 'Ecological Economist', text: 'It requires a transition to an economy that prioritizes well-being and ecological health over GDP.', translation: 'ئەو چەندە پێتڤی ب گوهۆڕینەکێ هەری بۆ ئابوورەیەکا کو گرنگیێ بدەتە خۆشگوزەرانی و ساخلەمییا ژینگەی ل شوینا "کۆمێ بەرهەمێ ناوخۆیی" (GDP).' },
      { speaker: 'Mainstream Economist', text: 'Innovation and decoupling might allow us to grow while reducing resource consumption.', translation: 'داهێنان و "جوداکردن" (دیکاپڵینگ) رەنگە رێ بدەتە مە گەشە بکەین د دەمەکێ دا کو بکارئینانا ژێدەران کێم بکەین.' },
      { speaker: 'Ecological Economist', text: 'The data shows that absolute decoupling is not happening fast enough to avoid ecological collapse.', translation: 'داتاکان پیشان ددەن کو جوداکردنا رەها ب وێ خێرایێ روو نادەت کو رێگریێ ل هەرفینا ژینگەی بکەت.' }
    ],
    vocabulary: [
      { word: 'Infinite', translation: 'بێ-سنوور / بێ-دوماهی' },
      { word: 'Mainstream', translation: 'بەردەوام / نەریتخواز / ئاسایی' },
      { word: 'Consumption', translation: 'بکارئینان / مەسرەفکردن' },
      { word: 'Decoupling', translation: 'جوداکردن / لێک-کردنەوە' }
    ]
  },
  {
    id: 'c1-28',
    level: 'C1',
    title: 'Transhumanism: Biology and Tech',
    titleKurdish: 'ترانس-هومانیزم (مرۆڤ-سەروو): بایۆلۆژیا و تەکنەلۆژیا',
    dialogue: [
      { speaker: 'Futurist', text: 'Transhumanism promotes the use of technology to enhance human intellectual and physical capabilities.', translation: 'ترانس-هومانیزم پشتەڤانییا بکارئینانا تەکنەلۆژیایێ دکەت بۆ باشترکردنا شیانێن عەقڵی و جەستەیی یێن مرۆڤی.' },
      { speaker: 'Bioethicist', text: 'This raises fundamental concerns about what it means to be human if we start merging with AI.', translation: 'ئەڤە مەترسییێن بنەڕەتی پەیدا دکەت دەربارەی وێ چەندێ کا مرۆڤبوون چییە ئەگەر ئەم دەست ب تێکەڵبوونێ دگەل ژیرییا دەستکرد بکەین.' },
      { speaker: 'Futurist', text: 'Neuralink and other brain-computer interfaces are just the beginning of this evolution.', translation: '"نیورالینک" و پەیوەندییێن دی یێن مێشک و کۆمپیوتەری تەنێ دەستپێکا ڤێ پەرەسەندنێ نە.' },
      { speaker: 'Bioethicist', text: 'Who will have access to these enhancements? We risk creating a Permanent Biological Class divide.', translation: 'کێ دێ دەستێ ب ڤان پێشکەفتنان گەهیت؟ مە مەترسییا درۆستکردنا چینەکا بایۆلۆژی یا جودا یا بەردەوام هەری.' },
      { speaker: 'Futurist', text: 'We must ensure that morphological freedom is protected as a fundamental right.', translation: 'پێتڤییە ئەم مسۆگەر بکەین کو ئازادییا گوهۆڕینا جەستەیی (مۆرفۆلۆژیکاڵ فریدم) وەک مافەکێ بنەڕەتی بهێتە پاراستن.' }
    ],
    vocabulary: [
      { word: 'Intellectual', translation: 'عەقڵی / فکری' },
      { word: 'Interfaces', translation: 'ناوەند / خالا پەیوەندیێ' },
      { word: 'Morphological', translation: 'جەستەیی / شێوەیی' },
      { word: 'Divide', translation: 'جوداهی / پارچەبوون' }
    ]
  },
  {
    id: 'c1-29',
    level: 'C1',
    title: 'The Ethics of Deepfakes',
    titleKurdish: 'ئەخلاقییا دیپ-فەیکان (Deepfakes)',
    dialogue: [
      { speaker: 'Media Researcher', text: 'Deepfakes use AI to generate highly realistic but entirely synthetic media of real people.', translation: 'دیپ-فەیکان ژیرییا دەستکرد بکار دئینن بۆ درۆستکردنا میدیایەکا زۆر راستەقینە لێ ب تەواوی دەستکرد دەربارەی کەسێن راستی.' },
      { speaker: 'Journalist', text: 'The potential for disinformation and character assassination is unprecedented in our digital history.', translation: 'مەترسییا بەلاڤکردنا زانیارییێن خەلات و ژناڤبرنا کەسایەتییان بێ-وێنەیه د دیرۆکا مە یا دیجیتالی دا.' },
      { speaker: 'Media Researcher', text: 'We are reaching a "reality apathy" where citizens simply stop believing anything they see online.', translation: 'ئەم دگەهنە قۆناغا "بێ-هەستی بەرامبەر راستیێ" کو تێدا هاووەلاتی ب سادەیی دەست ژ باوەرکردنا هەر تشتەکی بەردەدەن یێ کو ئۆنلاین دبینن.' },
      { speaker: 'Journalist', text: 'Digital forensic tools are struggling to keep up with the sophistication of generative models.', translation: 'ئامرازێن لێکۆڵینەوا دیجیتالی د هەوڵدانە خوە رابگرن بەرامبەر پێشکەفتنا مۆدێلێن داهێنەر (جێنەرەتیڤ).' },
      { speaker: 'Media Researcher', text: 'Verifying the provenance of media through watermarking or blockchain is becoming essential.', translation: 'پشتراستبوون ژ بنەڕەتا (پڕۆڤێنانس) میدیایێ ب رێکا کارەبا ئاڤی (واتەرمارکینگ) یان بلۆکچەینێ بوویە تشتەکێ فەر.' }
    ],
    vocabulary: [
      { word: 'Synthetic', translation: 'دەستکرد / درۆستکراو' },
      { word: 'Apathy', translation: 'بێباکی / بێ-هەستی' },
      { word: 'Sophistication', translation: 'پێشکەفتن / ئاڵۆزی' },
      { word: 'Provenance', translation: 'بنەڕەت / سەرچاوە' }
    ]
  },
  {
    id: 'c1-30',
    level: 'C1',
    title: 'Glacial Retreat and Water Security',
    titleKurdish: 'کشانەووەیا جەمسەری و ئاسایشا ئاڤێ',
    dialogue: [
      { speaker: 'Hydrologist', text: 'The retreat of high-altitude glaciers is threatening the water supply for billions of people in downstream regions.', translation: 'کشانەووەیا بەستەڵەکێن چیا بلندان هەڕەشێ ل دابینکردنا ئاڤێ بۆ ملیاران کەسان دکەت ل ناوچەیێن خوارێ.' },
      { speaker: 'Climatologist', text: 'Glaciers act as natural reservoirs, regulating seasonal water flow into major river systems.', translation: 'بەستەڵەک کار دکەن وەک کۆگەهێن سرۆشتی، و رژێما ئاڤا وەرزی د ناوچەیێن رووبارێن مەزن دا رێک دێخن.' },
      { speaker: 'Hydrologist', text: 'Once the "peak water" point is passed, the annual runoff will decline drastically, leading to chronic shortages.', translation: 'دەمێ خالا "وپەڕی ئاڤێ" (پیک واتەر) تێپەڕ بوو، رێژەیا سالانە یا ئاڤێ ب رەنگەکێ توند دێ کێم بیت، کو دێ ببیتە ئەگەرێ کێمییەکا بەردەوام.' },
      { speaker: 'Climatologist', text: 'This will likely trigger cross-border conflicts over riparian rights and dam construction.', translation: 'ئەڤە رەنگە ببیتە ئەگەرێ تێکچوونێن سەر-سنووری ل سەر مافێن رووباران و ئاڤاکرنا بەنداوان.' },
      { speaker: 'Hydrologist', text: 'Adapting to this new hydrological reality requires unprecedented international cooperation.', translation: 'خۆ-گونجاندن دگەل ڤێ راستییا هایدرۆلۆژی یا نوو پێتڤی ب هەماهەنگییەکا نێڤدەولەتی یا بێ-وێنە هەری.' }
    ],
    vocabulary: [
      { word: 'Retreat', translation: 'کشانەووە / پاشەکشە' },
      { word: 'Reservoirs', translation: 'عەمبار / کۆگەهێن ئاڤێ' },
      { word: 'Runoff', translation: 'ئاڤا زەوی / رێژەیا ئاڤێ' },
      { word: 'Riparian', translation: 'پەیوەندیدار ب کەنارێن رووبار' }
    ]
  },
  {
    id: 'c1-31',
    level: 'C1',
    title: 'Cognitive Dissonance',
    titleKurdish: 'دژایەتییا هزری (کۆگنتیڤ دیسۆنانس)',
    dialogue: [
      { speaker: 'Psychologist A', text: 'Cognitive dissonance occurs when an individual holds two conflicting beliefs simultaneously, causing psychological discomfort.', translation: 'دژایەتییا هزری دەمێ روو ددەت کو تاکەکەس د ئێک دەم دا خودان دوو باوەرێن هەڤدژ بیت، کو ئەڤە دبیتە ئەگەرێ نە-ئارامییا دەروونی.' },
      { speaker: 'Psychologist B', text: 'To reduce this tension, people often rationalize their behavior or change their beliefs to align with their actions.', translation: 'بۆ کێمکردنا ڤێ فشارێ، خەڵک زۆر جاران رەفتارێن خۆ "عەقڵانی" (راشناڵایز) دکەن یان باوەرێن خۆ دگوهۆڕن دا کو دگەل کارێن وان بگونجن.' },
      { speaker: 'Psychologist A', text: 'It’s a powerful driver of "confirmation bias," as we seek information that supports our existing views.', translation: 'ئەو هاندەرەکێ ب هێزە بۆ "لایەنگیرییا پشتراستکردنەووەی"، چونکی ئەم ل دویڤ وان زانیارییان دگەڕێیان یێن پشتەڤانییا دیتنێن مە یێن نوکە دکەن.' },
      { speaker: 'Psychologist B', text: 'The more invested someone is in a belief, the greater the dissonance when confronted with contradictory evidence.', translation: 'هەرچەندە مرۆڤ پتر گرێدای باوەرەکێ بیت، دژایەتییا هزری مەزنتر دبیت دەمێ رووبەڕووی بەڵگەیێن هەڤدژ دبیت.' },
      { speaker: 'Psychologist A', text: 'Understanding this mechanism is essential for promoting objective critical thinking.', translation: 'تێگەهشتن د ڤی سیستەمی دا فەرە بۆ گەشەپێدانا هزرا رەخنەگرانە یا بێ-لایەن.' }
    ],
    vocabulary: [
      { word: 'Simultaneously', translation: 'د ئێک دەم دا' },
      { word: 'Rationalize', translation: 'عەقڵانی-کردن / هێنانەوا هۆکار' },
      { word: 'Confronted', translation: 'رووبەڕوو بوونەووە' },
      { word: 'Contradictory', translation: 'هەڤدژ / دژ-بەیەک' }
    ]
  },
  {
    id: 'c1-32',
    level: 'C1',
    title: 'Structural Functionalism',
    titleKurdish: 'فەنکشنالیزمێ پێکهاتەیی (ستەرکچراڵ فەنکشنالیزم)',
    dialogue: [
      { speaker: 'Sociologist A', text: 'Structural functionalism views society as a complex system whose parts work together to promote solidarity and stability.', translation: 'فەنکشنالیزمێ پێکهاتەیی جڤاکی وەک سیستەمەکێ ئاڵۆز دبینیت کو پشکێن وێ پێکڤە کار دکەن بۆ بلندکردنا هەڤگرتن و جێگیرییێ.' },
      { speaker: 'Sociologist B', text: 'It emphasizes social institutions like family, education, and religion as vital organs maintaining the "social body."', translation: 'ئەو جەختێ ل سەر دامەزراوەیێن جڤاکی وەک خێزان، پەروەردە، و ئایین دکەت وەکی ئەندامێن فەر یێن پاراستنا "جەستەیێ جڤاکی".' },
      { speaker: 'Sociologist A', text: 'However, critics argue that it often patterns power imbalances as "natural" or "necessary" for order.', translation: 'لێ، رەخنەگر دبێژن کو ئەو زۆر جاران نە-هاوسەنگییێن هێزێ وەک تشتەکێ "سرۆشتی" یان "فەر" بۆ رێکوپێکییێ دیار دکەت.' },
      { speaker: 'Sociologist B', text: 'It struggles to account for social change and conflict, focusing instead on equilibrium.', translation: 'ئەو ب زەحمەت دشێت گوهۆڕینێن جڤاکی و تێکچوونان روون بکەتەووە، چونکی پتر گرنگیێ ددەتە هاوسەنگییێ.' },
      { speaker: 'Sociologist A', text: 'Despite this, it remains a foundational framework for understanding social cohesion.', translation: 'دگەل ڤێ چەندێ ژی، ئەو وەک فریمۆرکەکێ بناغەی دمینیت بۆ تێگەهشتن د هەڤگرتنا جڤاکی دا.' }
    ],
    vocabulary: [
      { word: 'Solidarity', translation: 'هەڤگرتن / پێکڤەبوون' },
      { word: 'Institutions', translation: 'دامەزراوەکان' },
      { word: 'Imbalances', translation: 'نە-هاوسەنگییەکان' },
      { word: 'Cohesion', translation: 'پێکڤەگرێدان / یەکبوونی جڤاکی' }
    ]
  },
  {
    id: 'c1-33',
    level: 'C1',
    title: 'Lethal Autonomous Weapons',
    titleKurdish: 'چەکێن خۆکار یێن کۆژەک (LAWS)',
    dialogue: [
      { speaker: 'Ethics Expert', text: 'The development of lethal autonomous weapons—often called "killer robots"—raises significant moral concerns.', translation: 'گەشەپێدانا چەکێن خۆکار یێن کۆژەک - کو زۆر جاران دبێژنێ "رۆبۆتێن کۆژەک" - گۆمانێن ئەخلاقی یێن مەزن پەیدا دکەت.' },
      { speaker: 'Military Strategist', text: 'These systems could potentially reduce friendly casualties by removing soldiers from the line of fire.', translation: 'ئەو سیستەمە دشێن ب رەنگەکێ گۆمانلێکری زیانێن گیانی یێن دۆست کێم کەن ب هیبەر دوویرخستنا سەربازان ژ هێلا شەڕی.' },
      { speaker: 'Ethics Expert', text: 'But can an algorithm truly distinguish between a combatant and a civilian in a chaotic urban environment?', translation: 'لێ ئەرێ ئەلگۆریتمەک ب راستی دشێت جوداهییێ بدەتە د ناڤبەرا جەنگاوەرەک و مەدەنییەکی دا د ژینگەیەکێ ئاڵۆز یێ باژێڕی دا؟' },
      { speaker: 'Military Strategist', text: 'We are implementing "human-in-the-loop" constraints to ensure ethical oversight of targeting decisions.', translation: 'ئەم ئاستەنگێن "مرۆڤ-د-خولێ-دا" (Human-in-the-loop) جێبەجێ دکەین دا کو چاڤدێرییا ئەخلاقی یا بڕیارێن ئارمانجکردنێ مسۆگەر بکەین.' },
      { speaker: 'Ethics Expert', text: 'A global ban might be necessary to prevent an uncontrolled digital arms race.', translation: 'رەنگە قەدەغەکردنەکا جیهانی یا فەر بیت بۆ رێگریکردنێ ژ هەڤرکییەکا چەکداری یا دیجیتالی یا بێ-کۆنتڕۆڵ.' }
    ],
    vocabulary: [
      { word: 'Autonomous', translation: 'خۆکار / بێ-فەرمان' },
      { word: 'Casualties', translation: 'زیانێن گیانی / قوربانییەکان' },
      { word: 'Combatant', translation: 'جەنگاوەر / شەڕکەر' },
      { word: 'Targeting', translation: 'ئارمانجکردن' }
    ]
  },
  {
    id: 'c1-34',
    level: 'C1',
    title: 'Proteomics and Personalized Medicine',
    titleKurdish: 'پڕۆتیۆمیکس و پزیشکییا تایبەتمەند (پیرسۆنالایزد)',
    dialogue: [
      { speaker: 'Biochemist', text: 'While genomics focuses on DNA, proteomics studies the entire set of proteins expressed by a cell or organism.', translation: 'د دەمەکێ دا جینۆمیکس گرنگیێ ددەتە DNA، پڕۆتیۆمیکس هەمی پڕۆتینێن کو ژ لایێ خانەیەک یان زیندەوەرەکی ڤە دهێنە بەرهەمهێنان دکۆلیت.' },
      { speaker: 'Physician', text: 'Proteins are the functional workhorses of the body, making them dynamic indicators of health and disease.', translation: 'پڕۆتین کارکەرێن فەنکشنی یێن جەستەی نە، کو وان دکەتە نیشاندەرێن گوهۆڕاو (داینامیک) بۆ ساخلەمی و نەخۆشییێ.' },
      { speaker: 'Biochemist', text: 'Mass spectrometry allows us to identify protein patterns that precede clinical symptoms.', translation: '"سپێکترۆمەترییا کێشێ" (Mass spectrometry) رێ ددەتە مە کێشێن پڕۆتینی دەستنیشان بکەین کو پێش نیشانەیێن پزیشکی دکەڤن.' },
      { speaker: 'Physician', text: 'This data-driven approach is the foundation of "precision medicine," tailoring treatments to an individual\'s molecular profile.', translation: 'ئەڤ شێوازێ ل سەر بنەمایێ داتایان، بناغەیێ "پزیشکییا درۆستە" (Precision medicine)، کو چارەسەرییان بۆ پڕۆفایلا مۆلیکولاری یا تاکەکەسی دگونجینیت.' },
      { speaker: 'Biochemist', text: 'The challenge remains the immense complexity and variability of the human proteome.', translation: 'ئاستەنگ هێشتا ل وێرێ یە کو پڕۆتیۆما مرۆڤی گەلەک ئاڵۆز و گوهۆڕاوە.' }
    ],
    vocabulary: [
      { word: 'Proteins', translation: 'پڕۆتینەکان' },
      { word: 'Workhorses', translation: 'کارکەرێن ب هێز' },
      { word: 'Spectrometry', translation: 'سپێکترۆمەتری / کێش-پێڤان' },
      { word: 'Tailoring', translation: 'گونجاندن / دورین (ب رامانا گونجاندن)' }
    ]
  },
  {
    id: 'c1-35',
    level: 'C1',
    title: 'The Geopolitics of the Arctic',
    titleKurdish: 'جیۆپۆلیتیکا جەمسەری باکۆر (ئارکتیک)',
    dialogue: [
      { speaker: 'Analyst', text: 'The melting of Arctic ice is opening new shipping routes and access to vast untapped fossil fuel reserves.', translation: 'توانەووەیا سەهۆڵا جەمسەری باکۆر رێڕەوێن نوو یێن بازرگانی و دەستگەهشتن ب کۆگەهێن مەزن یێن سۆتەمەنی بۆ مە ڤەدکەت.' },
      { speaker: 'Diplomat', text: 'This has triggered a "resource scramble" among Arctic nations, each asserting territorial claims to the continental shelf.', translation: 'ئەڤە بوویە ئەگەرێ "هەڤرکییا ژێدەران" د ناڤبەرا وەلاتێن جەمسەری دا، کو هەر ئێک داخوازا خاوەنداریەتییا جەمسەری دکەت.' },
      { speaker: 'Analyst', text: 'The UN Convention on the Law of the Sea (UNCLOS) is the primary framework for resolving these disputes.', translation: 'رێککەفتننامەی نەتەوەیێن یەکگرتوو بۆ یاسایا دەریا (UNCLOS) فریمۆرکێ سەرەکییە بۆ چارەسەرکرنا ڤان تێکچوونان.' },
      { speaker: 'Diplomat', text: 'However, increased militarization in the region threatens to undermine the "Arctic exceptionalism" of peaceful cooperation.', translation: 'لێ، زێدەبوونا چەکدارکردنێ د دەڤەرێ دا مەترسیێ ل سەر "تایبەتمەندییا جەمسەری" یا هەماهەنگییا ئاشتییانە درۆست دکەت.' },
      { speaker: 'Analyst', text: 'Protecting the fragile Arctic ecosystem must be prioritized over short-term economic gains.', translation: 'پاراستنا سیستەمێ ژینگەی یێ لاواز یێ جەمسەری پێتڤییە گرنگییا وێ پتر بیت ژ قازانجێن ئابووری یێن دەم-کورت.' }
    ],
    vocabulary: [
      { word: 'Untapped', translation: 'دەست-لێ-نەدای / بکارنەهاتی' },
      { word: 'Territorial', translation: 'نیشتیمانی / خاوەنداریەتییا زەڤی' },
      { word: 'Undermine', translation: 'لاوازکردن / تێکدان' },
      { word: 'Fragile', translation: 'لاواز / ناسک' }
    ]
  },
  {
    id: 'c1-36',
    level: 'C1',
    title: 'Quantum Entanglement',
    titleKurdish: 'ئاڵۆزییا کوانتۆم (کوانتۆم ئینتانگڵمێنت)',
    dialogue: [
      { speaker: 'Physicist A', text: 'Quantum entanglement occurs when two particles become linked such that the state of one instantaneously influences the other, regardless of distance.', translation: 'ئاڵۆزییا کوانتۆم دەمێ روو ددەت کو دوو گەردیلە وەسا ب هەڤ ڤە گرێدای بن کو بارودۆخێ ئێکێ ب زوویی کارتێکرنێ ل یێ دی بکەت، بێ وێ چەندێ کا دووری چەندە.' },
      { speaker: 'Physicist B', text: 'Einstein famously called this "spooky action at a distance" because it seemed to violate the speed of light limit.', translation: 'ئاینشتاین ب شێوەیەکێ ناودار ژ ڤێ رەوشێ دگۆت "کاریگەریا ترسناک ژ دوور ڤە" چونکی وەسا دیار دبوو کو یاسایا خێراییا رووناهیێ تێک ددەت.' },
      { speaker: 'Physicist A', text: 'In reality, no information is being transmitted faster than light; the two particles exist as a single quantum system.', translation: 'د راستی دا، چو زانیاری ب خێرایەکا پتر ژ رووناهیێ ناچن؛ هەر دوو گەردیلە وەک ئێک سیستەمێ کوانتۆم یێ تاکی هەنە.' },
      { speaker: 'Physicist B', text: 'This phenomenon is the basis for quantum teleportation and ultra-secure communication networks.', translation: 'ئەڤ دیاردەیە بناغەیێ گواستنەووەیا کوانتۆم (تێلێپۆرتەیشن) و تۆڕێن پەیوەندییێ یێن یەکجار پارێزراوە.' },
      { speaker: 'Physicist A', text: 'The experimental validation of Bell’s inequality has confirmed non-locality as a fundamental feature of reality.', translation: 'تاقیکرنێن پەسەندکراو یێن "نا-یەکسانییا بێڵ" (Bell’s inequality) سەلماند کو "نە-ناوچەیی" (non-locality) تایبەتمەندییەکا بنەڕەتی یا راستییێ یە.' }
    ],
    vocabulary: [
      { word: 'Entanglement', translation: 'ئاڵۆزی / تێکەڵکەفتن' },
      { word: 'Instantaneously', translation: 'ب زوویی / ل هەمان چرکە' },
      { word: 'Violate', translation: 'تێکدان / لادان از یاسا' },
      { word: 'Validation', translation: 'پەسەندکردن / سەلماندن' }
    ]
  },
  {
    id: 'c1-37',
    level: 'C1',
    title: 'Deforestation and Rainfall',
    titleKurdish: 'ژناڤبرنا دارستانان و بارانبارین',
    dialogue: [
      { speaker: 'Ecologist', text: 'Deforestation disrupt the "biotic pump" mechanism, where forests actively pull moisture from the ocean toward the continental interior.', translation: 'ژناڤبرنا دارستانان سیستەمێ "پەمپا زیندەوەر" تێک ددەت، کو تێدا دارستان ب شێوەیەکێ چالاک تەڕییێ (مۆیسچەر) ژ زەریایێ بەرەڤ ناڤخۆیا کیشوەران دکێشن.' },
      { speaker: 'Climatologist', text: 'Trees release water vapor through evapotranspiration, which contributes directly to local and regional rainfall patterns.', translation: 'دار ب رێکا "هەڵمبوون و ئارەقکردن" (ئیڤاپۆتڕانسپایرەیشن) هەڵما ئاڤێ بەردەدەن، کو ب شێوەیەکێ راستەوخۆ پشکدارییێ د بارانبارینا ناوچەیی دا دکەت.' },
      { speaker: 'Ecologist', text: 'Large-scale clearing leads to a decline in precipitation, triggering feedback loops that can turn forests into savannas.', translation: 'پاقژکردنا بەرفرەهـ دبیتە ئەگەرێ کێمبوونا بارانبارینێ، کو دەست دکەت ب خولێن رەنگڤەدانێ یێن کو دارستانان دکەنە دەشتێن ساڤانا.' },
      { speaker: 'Climatologist', text: 'The loss of the Amazon rainforest could potentially alter global atmospheric circulation.', translation: 'ژ دەستدانا دارستانێن ئەمەزۆنێ دشێت ب شێوەیەکێ گۆمانلێکری سووڕانا بەرگەهێ هەوای یێ جیهانی بگوهۆڕیت.' },
      { speaker: 'Ecologist', text: 'Forest conservation is not just about biodiversity; it is a critical component of hydrological stability.', translation: 'پاراستنا دارستانان تەنێ بۆ جۆراوجۆرییا بایۆلۆژی نینە؛ بەلکو بەشەکێ فەرە بۆ جێگیریا هایدرۆلۆژی (ئاڤێ).' }
    ],
    vocabulary: [
      { word: 'Moisture', translation: 'تەڕی / شێ' },
      { word: 'Evapotranspiration', translation: 'هەڵمبوون و ئارەقکردنا داران' },
      { word: 'Precipitation', translation: 'بارانبارین / دابەشبوونا ئاڤێ' },
      { word: 'Circulation', translation: 'سووڕانەووە / چەرخ' }
    ]
  },
  {
    id: 'c1-38',
    level: 'C1',
    title: 'Evolutionary Stable Strategies',
    titleKurdish: 'ستراتیژییەتێن جێگیر یێن پەرەسەندنی (ESS)',
    dialogue: [
      { speaker: 'Biologist', text: 'An evolutionary stable strategy (ESS) is a behavior which, if adopted by a population, cannot be invaded by any alternative strategy.', translation: 'ستراتیژییەتا جێگیر یا پەرەسەندنی (ESS) رەفتارەکە کو، ئەگەر ژ لایێ کۆمەڵەکێ ڤە بهێتە وەرگرتن، چو ستراتیژییەتەکا جێگر نەشێت دەستبەسەردا بگریت.' },
      { speaker: 'Game Theorist', text: 'John Maynard Smith applied game theory to biology to explain ritualized conflict and cooperation in nature.', translation: 'جۆن مەینارد سمیت تیۆرییا کایەی (گەیم تیۆری) ل سەر بایۆلۆژیایێ بکار ئینا بۆ روونکردنەوا توندوتیژییا رێکخراو و هەماهەنگییێ د سرۆشت دا.' },
      { speaker: 'Biologist', text: 'The "Hawk-Dove" game illustrates how balanced populations can maintain different behavioral phenotypes.', translation: 'کایەی "باز و کەوتر" (Hawk-Dove) دیار دکەت کا چەوا کۆمەڵێن هاوسەنگ دشێن شێوازێن جیاواز یێن رەفتاری بپارێزن.' },
      { speaker: 'Game Theorist', text: 'Is it true that an ESS is not necessarily the strategy that maximizes the total fitness of the group?', translation: 'ئەرێ یا راستە کو ESS نە مەرجە ئەو ستراتیژییەت بیت کو زۆرترین ساخلەمییا (فیتنێس) گشتی یا گرۆپی مسۆگەر بکەت؟' },
      { speaker: 'Biologist', text: 'Correct; it focuses on individual survival against a specific background of other strategies.', translation: 'دروستە؛ ئەو گرنگیێ ددەتە مانەوا تاکەکەسی د ناڤ دەقەکێ دیارکری دا یێ ستراتیژییەتێن دی.' }
    ],
    vocabulary: [
      { word: 'Invaded', translation: 'داگیرکراو / دەستبەسەرداگرتن' },
      { word: 'Ritualized', translation: 'رێکخراو / ب تاقیکردنەوە بووە' },
      { word: 'Phenotypes', translation: 'شێوازێن دیار یێن زیندەوەران' },
      { word: 'Fitness', translation: 'گونجاوی / شیانا مانەوە' }
    ]
  },
  {
    id: 'c1-39',
    level: 'C1',
    title: 'Smart Cities and Surveillance',
    titleKurdish: 'باژێڕێن هوشمەند و چاڤدێری',
    dialogue: [
      { speaker: 'Ethicist', text: 'The transition to "smart cities" offers efficiency but at the potential cost of pervasive surveillance.', translation: 'گوهۆڕین بەرەڤ "باژێڕێن هوشمەند" کارامەییێ دابین دکەت لێ ل سەر تێچوونەکا گۆمانلێکری یا چاڤدێرییا گشتی.' },
      { speaker: 'Urban Designer', text: 'IoT sensors and real-time data analytics can optimize traffic flow and energy consumption.', translation: 'سێنسەرێن IoT و شیکاریا داتایان د هەمان دەم دا دشێن رێڕەوێ هاتووچۆ و بکارئینانا وزەیێ باشتر بکەن.' },
      { speaker: 'Ethicist', text: 'However, the mass collection of biometrics and geolocation data erodes the right to anonymity in public spaces.', translation: 'لێ، کۆمکردنا ب کۆم یا داتایێن بایۆمێتری و جیۆ-لۆکەیشن مافێ "بێ-ناڤ-بوونێ" د جهێن گشتی دا ژناڤ دبەت.' },
      { speaker: 'Urban Designer', text: 'We can implement "privacy by design" and anonymize datasets before processing.', translation: 'ئەم دشێین "تایبەتمەندی د دیزاینێ دا" جێبەجێ بکەین و داتایان بێ-ناڤ بکەین بەری پرۆسەکرنێ.' },
      { speaker: 'Ethicist', text: 'Who owns this data? The risk of commercial or state misuse is a profound democratic challenge.', translation: 'کێ خاوەنێ ڤان داتایانە؟ مەترسییا بکارئینانا خراب یا بازرگانی یان دەولەتی ئاستەنگەکا دیمۆکراسی یا کویرە.' }
    ],
    vocabulary: [
      { word: 'Pervasive', translation: 'بەربڵاو / گشتی' },
      { word: 'Biometrics', translation: 'بایۆمێتری (پێڤانێن لاشەیی)' },
      { word: 'Anonymity', translation: 'بێ-ناڤ و نیشانی / ونبوون' },
      { word: 'Misuse', translation: 'بکارئینانا خراب / نادروست' }
    ]
  },
  {
    id: 'c1-40',
    level: 'C1',
    title: 'The Myth of Sisyphus',
    titleKurdish: 'ئەفسانەیا سیزیفی و بێ-مادیاتی (ئەبسەردیزم)',
    dialogue: [
      { speaker: 'Professor', text: 'Albert Camus uses the Myth of Sisyphus as a metaphor for the human condition.', translation: 'ئالبێرت کامۆ ئەفسانەیا سیزیفی بکار دئینیت وەک مەجازەک بۆ رەوشا مرۆڤایەتی.' },
      { speaker: 'Student', text: 'Sisyphus is condemned to roll a boulder up a hill for eternity, only for it to roll back down.', translation: 'سیزیف مەحکومە کو بەرەکێ مەزن ب هێز ببەتە سەرێ چیایەکێ بۆ هەتا-هەتایێ، و تەنێ بۆ هندێ کو ئەو بەرە دوبارە بهێتە خوار.' },
      { speaker: 'Professor', text: 'This represents the conflict between our search for meaning and the silent, indifferent universe.', translation: 'ئەڤە گوزارشتێ ژ تێکچوونا د ناڤبەرا گەڕیانا مە ل دویڤ رامانێ و جیهانەکا بێدەنگ و بێ-خەم دکەت.' },
      { speaker: 'Student', text: 'Camus concludes that "The struggle itself toward the heights is enough to fill a man\'s heart."', translation: 'کامۆ وەسا ب دوماهی دئینیت کو "خەبات ب خۆ بەرەڤ لوتکەیان بەسە بۆ پڕکردنا دلێ مرۆڤی."' },
      { speaker: 'Professor', text: 'Exactly; we must imagine Sisyphus happy. Finding joy in the process is the ultimate rebellion against the absurd.', translation: 'ب درۆستی؛ پێتڤییە ئەم سیزیفی ب دلخۆش بهزرینیت. دیتنا خۆشییێ د ناڤ پرۆسێ دا گەورەترین شۆڕشە دژی بێ-مادیاتییێ (ئەبسەردیزم).' }
    ],
    vocabulary: [
      { word: 'Metaphor', translation: 'مەجاز / نموونە' },
      { word: 'Eternity', translation: 'هەتا-هەتایێ / نەمری' },
      { word: 'Indifferent', translation: 'بێ-خەم / بێ-باک' },
      { word: 'Rebellion', translation: 'شۆڕش / یاخیبوون' }
    ]
  },
  {
    id: 'c1-41',
    level: 'C1',
    title: 'Language Games',
    titleKurdish: 'کایەیێن زمان (لینگویج گەیمز)',
    dialogue: [
      { speaker: 'Philosopher A', text: 'Wittgenstein argued that the meaning of a word is defined by its use within a specific "language game."', translation: 'ویتگنشتاین دگۆت کو رامانا هەر پەیڤەکێ ب بکارئینانا وێ د ناڤ "کایەیەکا زمان" یا دیارکری دا دهێتە پێناسەکرن.' },
      { speaker: 'Philosopher B', text: 'This means that there is no "essential" meaning outside of the social context of communication.', translation: 'ئەڤە رامانا وێ ئەوە کو چو رامانەکا "بنەڕەتی" نینە دوویر ژ دەقێ جڤاکی یێ پەیوەندییێ.' },
      { speaker: 'Philosopher A', text: 'Exactly; language is not a neutral mirror of reality, but a tool for performing specific social functions.', translation: 'ب درۆستی؛ زمان نە ئاوێنەیەکێ بێ-لایەن یێ راستییێ یە، بەلکو ئامرازەکە بۆ جێبەجێکردنا کارێن جڤاکی یێن دیارکری.' },
      { speaker: 'Philosopher B', text: 'Meaning is therefore a collective activity, governed by implicit rules that participants agree upon.', translation: 'ژ بەر ڤێ چەندێ، رامان چالاکییەکا ب کۆمە، کو ب یاسایێن نە-دیار دهێتە رێڤەبرن یێن کو بەشداربوویان ل سەر وێ هەڤدەنگن.' },
      { speaker: 'Philosopher A', text: 'To understand a concept, one must investigate its application in the various forms of life where it occurs.', translation: 'بۆ تێگەهشتن ل سەر تێگەهەکی، پێتڤییە مرۆڤ ل دویڤ بکارئینانا وێ دا بچیت د ناڤ وان شێوازن ژیانێ دا یێن کو تێدا روو ددەن.' }
    ],
    vocabulary: [
      { word: 'Essential', translation: 'بنەڕەتی / فەر' },
      { word: 'Neutral', translation: 'بێ-لایەن / ناڤین' },
      { word: 'Implicit', translation: 'نە-دیار / ڤەشارتی' },
      { word: 'Investigate', translation: 'لێکۆڵینەووەکردن' }
    ]
  },
  {
    id: 'c1-42',
    level: 'C1',
    title: 'Epigenetics and Memory',
    titleKurdish: 'ئێپی-جینێتیک و تێگەهێ بیرا بایۆلۆژی',
    dialogue: [
      { speaker: 'Geneticist', text: 'Epigenetics involves changes in gene expression that do not alter the underlying DNA sequence.', translation: 'ئێپی-جینێتیک پێک دهێت ژ گوهۆڕینێن د دەربرینا جینان دا کو رێزبەندییا DNA ناگوهۆڕن.' },
      { speaker: 'Biologist', text: 'These changes can be triggered by environmental factors like diet, stress, and pollutants.', translation: 'ئەڤ گوهۆڕینە دشێن ب هۆکارێن ژینگەی وەک سیستەمێ خوارنێ، فشار، و پیسکەران پەیدا ببن.' },
      { speaker: 'Geneticist', text: 'Fascinatingly, some of these epigenetic markers can be inherited across multiple generations.', translation: 'تشتێ مەراق ل دەڤ پەیدا دکەت ئەوە کو هەندەک ژ ڤان نیشانەیێن ئێپی-جینێتیک دشێن بۆ نەوەیێن دویڤدا بمینن.' },
      { speaker: 'Biologist', text: 'This suggests a form of "biological memory" of the ancestors\' environment and trauma.', translation: 'ئەڤە جۆرەکێ "بیرا بایۆلۆژی" دیار دکەت دەربارەی ژینگەی و ئازارێن (تراوما) باب و کالان.' },
      { speaker: 'Geneticist', text: 'Understanding this link is crucial for addressing the transgenerational effects of poverty and war.', translation: 'تێگەهشتن د ڤێ پەیوەندیێ دا فەرە بۆ چارەسەرکرنا کارتێکرنێن هەژاری و شەڕی یێن کو دچنە نەوەیێن داهاتی.' }
    ],
    vocabulary: [
      { word: 'Expression', translation: 'دەربرین' },
      { word: 'Pollutants', translation: 'پیسکەرەکان' },
      { word: 'Ancestors', translation: 'باب و کال / پێشینەکان' },
      { word: 'Transgenerational', translation: 'نەوە-بۆ-نەوە / گواستراوە بۆ نەوەکان' }
    ]
  },
  {
    id: 'c1-43',
    level: 'C1',
    title: 'Algorithmic Bias',
    titleKurdish: 'لایەنگیرییا ئەلگۆریتمی و دادپەروەرییا جڤاکی',
    dialogue: [
      { speaker: 'Data Scientist', text: 'Algorithmic bias occurs when AI systems produce results that are systematically prejudiced against certain groups.', translation: 'لایەنگیرییا ئەلگۆریتمی دەمێ روو ددەت کو سیستەمێن ژیرییا دەستکرد ئەنجامان درۆست کەن کو ب شێوەیەکێ رێکخراو لایەنگیریێ دژی گروپێن دیارکری دکەن.' },
      { speaker: 'Sociologist', text: 'This is often because the training data reflects existing historical injustices in society.', translation: 'ئەڤە زۆر جاران ژ بەر هندێ یە کو داتایێن مەشقپێکردنێ گوزارشتێ ژ نە-دادپەروەرییێن مێژوویی یێن د ناڤ جڤاکی دا دکەن.' },
      { speaker: 'Data Scientist', text: 'We must implement rigorous fairness audits and include diverse perspectives during model development.', translation: 'پێتڤییە ئەم وردبینییێن توند یێن دادپەروەرییێ جێبەجێ بکەین و دیتنێن جۆراوجۆر د دەمێ گەشەپێدانا مۆدێلی دا بکار بینین.' },
      { speaker: 'Sociologist', text: 'Without accountability, automated decision-making in hiring and policing can amplify systemic inequality.', translation: 'بێی هەبوونا لێکۆڵینەووەیێ، بڕیاردانا ئۆتۆماتیکی د دامەزراندن و کارێن پۆلیسی دا دشێت نە-یەکسانییا سیستەمی مەزنتر بکەت.' },
      { speaker: 'Data Scientist', text: 'Transparency in algorithmic logic is essential to ensure that AI serves the public interest fairly.', translation: 'شەفافیەت د ناڤ لۆژیکا ئەلگۆریتمی دا فەرە بۆ مسۆگەرکردنا هندێ کو ژیرییا دەستکرد خزمەتا بەرژەوەندییا گشتی ب دادپەروەری بکەت.' }
    ],
    vocabulary: [
      { word: 'Prejudiced', translation: 'لایەنگیر / خودان پێش-بڕیار' },
      { word: 'Rigorous', translation: 'توند / ورد' },
      { word: 'Accountability', translation: 'لێکۆڵینەووە / لێپرسینەووە' },
      { word: 'Amplify', translation: 'مەزنکردن / توندترکردن' }
    ]
  },
  {
    id: 'c1-44',
    level: 'C1',
    title: 'String Theory Foundations',
    titleKurdish: 'بناغەیێن تیۆرییا تەلان (ستڕینگ تیۆری)',
    dialogue: [
      { speaker: 'Physicist A', text: 'String theory proposes that all fundamental particles are actually one-dimensional "strings" vibrating at different frequencies.', translation: 'تیۆرییا تەلان پێشنیار دکەت کو هەمی گەردیلێن بنەڕەتی د راستی دا "تەلێن" ئێک-رەهەندین (وەک پەت) کو ب لەرەلەرێن جیاواز دلەرزن.' },
      { speaker: 'Physicist B', text: 'The main attraction of the theory is that it potentially reconciles general relativity with quantum mechanics.', translation: 'گرنگترین خال د ڤێ تیۆریێ دا ئەوە کو ئەو رەنگە بتوانێت سیستەمێ نیسبیەتێ دگەل میکانیکا کوانتۆم ب گونجینیت.' },
      { speaker: 'Physicist A', text: 'However, it requires the existence of ten or eleven spatial dimensions, most of which are "curled up" or compactified.', translation: 'لێ، ئەو پێتڤی ب هەبوونا دەهـ یان یانزدە رەهەندێن واڵایی هەری، کو زۆربەی وان "پێچرای" نە یان تەسک بووینە ڤە.' },
      { speaker: 'Physicist B', text: 'A major criticism is the lack of experimental evidence, as the strings are far too small to be directly observed.', translation: 'رەخنەیەکا مەزن ئەوە کو بەڵگەیێن تاقیکاری نینە، چونکی ئەو تەلە گەلەک پچووکن و ناهێنە دیتن ب شێوەیەکێ راستەوخۆ.' },
      { speaker: 'Physicist A', text: 'Nonetheless, the mathematical elegance of string theory continues to inspire theoretical research.', translation: 'دگەل هندێ ژی، جوانییا بیرکارییا تیۆرییا تەلان بەردەوامە د هاندانا ڤەکۆلینێن تیۆری دا.' }
    ],
    vocabulary: [
      { word: 'Vibrating', translation: 'دەلەرزێت / لەرەلەر دکەت' },
      { word: 'Reconciles', translation: 'ڕێک-خستنەوە / گونجاندن' },
      { word: 'Spatial', translation: 'واڵایی / رووبەری' },
      { word: 'Elegance', translation: 'جوانی / رێک_وپێکی' }
    ]
  },
  {
    id: 'c1-45',
    level: 'C1',
    title: 'Urban Sprawl and Gentrification',
    titleKurdish: 'بەرفرەهبوونا باژێڕی و گوهۆڕینا ناوچەی (جەنترفیکەیشن)',
    dialogue: [
      { speaker: 'Urban Planner', text: 'Urban sprawl leads to increased car dependency and the destruction of surrounding natural habitats.', translation: 'بەرفرەهبوونا باژێڕی دبیتە ئەگەرێ پشتبەستنا زێدە ب ترۆمبێلان و ژناڤچوونا ژینگەیێن سرۆشتی یێن دەوروبەر.' },
      { speaker: 'Sociologist', text: 'At the same time, gentrification in city centers often displaces long-term, low-income residents.', translation: 'ل هەمان دەم دا، گوهۆڕینا ناوچەی (جەنترفیکەیشن) د سەنتەرێن باژێڕان دا زۆر جاران دبیتە ئەگەرێ دوویرخستنا نیشتەجێبوویێن دەم-درێژ یێن خودان داهاتێ کێم.' },
      { speaker: 'Urban Planner', text: 'We need to promote high-density, mixed-use developments that are served by efficient public transit.', translation: 'پێتڤییە ئەم گەشەپێدانێن جڕ و تێکەڵ ب لایەنێن جیاواز بلند بکەین کو ب ترانزێتەکا گۆشتی رێڤە بچن.' },
      { speaker: 'Sociologist', text: 'But we must also include strict rent controls and affordable housing mandates to prevent displacement.', translation: 'لێ پێتڤییە ئەم هەروەسا کۆنتڕۆڵا کرێی و برۆیاردانێن خانییا یێن هەرزان جێبەجێ بکەین دا کو رێگریێ ل دوویرخستنێ بکەین.' },
      { speaker: 'Urban Planner', text: 'The goal is to create "complete neighborhoods" where everything is accessible within a short walk.', translation: 'ئارمانج ئەوە "گەڕەکێن تەواو" درۆست بکەین کو تێدا هەمی تشت ب رێکا پیادە یا کورت دەست-بەر دەست بن.' }
    ],
    vocabulary: [
      { word: 'Dependency', translation: 'وابەستەیی / پشتبەستن' },
      { word: 'Displaces', translation: 'دوویرخستنەوە / گوهۆڕینا جهـ' },
      { word: 'Affordable', translation: 'گونجاو / هەرزان' },
      { word: 'Mandates', translation: 'بڕیارنامەکان / فەرمانەکان' }
    ]
  },
  {
    id: 'c1-46',
    level: 'C1',
    title: 'Ethics of Organ Allocation',
    titleKurdish: 'ئەخلاقییا دابەشکرنا ئەندامێن لاشەی',
    dialogue: [
      { speaker: 'Ethicist', text: 'The scarcity of donor organs creates a difficult ethical dilemma regarding their allocation.', translation: 'کێمییا ئەندامێن لاشەی یێن بەخشین دبیتە ئەگەرێ ئاریشەیەکا ئەخلاقی یا زەحمەت دەربارەی دابەشکرنا وان.' },
      { speaker: 'Physician', text: 'Current systems prioritize medical urgency and the potential for a successful long-term outcome.', translation: 'سیستەمێن نوکە گرنگیێ ددەنە بلەزبوونا پزیشکی و شیانا ئەنجامەکێ سەرکەفتی یێ دەم-درێژ.' },
      { speaker: 'Ethicist', text: 'Should we also consider age or the patient\'s past lifestyle choices, like smoking or alcohol use?', translation: 'ئەرێ پێتڤییە ئەم هەروەسا تەمەن یان شێوازێ ژیانا نەخۆشی یێ جاران هەژمار بکەین، وەک کێشانا جگاران یان بکارئینانا کحولی؟' },
      { speaker: 'Physician', text: 'Including behavioral factors is controversial; it risks punishing patients for health issues that may have genetic roots.', translation: 'هەژمارکردنا رەفتاران تشتەکێ جدییە؛ مەترسییا سزادانا نەخۆشان هەیە بۆ ئاریشەیێن ساخلەمی یێن کو رەنگە رەگێن جیناتی هەبن.' },
      { speaker: 'Ethicist', text: 'Transparency and public trust are essential to maintaining the integrity of the transplant program.', translation: 'شەفافیەت و باوەرییا گشتی فەرن بۆ پاراستنا دەستپاکییا بەرنامەیێ چاندنا ئەندامان.' }
    ],
    vocabulary: [
      { word: 'Scarcity', translation: 'کێم-بوون / نەدەستکەفتن' },
      { word: 'Allocation', translation: 'دابەشکردن / تەرخانکردن' },
      { word: 'Outcome', translation: 'ئەنجام' },
      { word: 'Integrity', translation: 'دەستپاکی / تەواوەتی' }
    ]
  },
  {
    id: 'c1-47',
    level: 'C1',
    title: 'The Future of Work',
    titleKurdish: 'پاشەڕۆژا کاری: ئۆتۆماسیۆن و ئابوورا سەربەخۆ',
    dialogue: [
      { speaker: 'Economist', text: 'Automation is rapidly transforming the labor market, with AI increasingly performing cognitive tasks once thought uniquely human.', translation: 'ئۆتۆماسیۆن ب خێرایی بازاڕێ کاری دگوهۆڕیت، ب رادەیەکێ کو ژیرییا دەستکرد کارێن مێشکی یێن وەها دکەت کو جاران تەنێ وەک کارێ مرۆڤی دهاتنە هەژمارتن.' },
      { speaker: 'Labor Sociologist', text: 'The rise of the "gig economy" provides flexibility but often at the cost of job security and benefits.', translation: 'بلندبوونا "ئابوورا سەربەخۆ" (Gig economy) نەرمیێ ددەت لێ زۆر جاران ل سەر تێچوونا مسۆگەر نەبوونا کاری و سوودمەندییان.' },
      { speaker: 'Economist', text: 'We might need a new social contract that decouples survival from traditional full-time employment.', translation: 'رەنگە ئەم پێتڤی ب گرێبەستەکا جڤاکی یا نوو بن کو مانەوەیێ ژ دامەزراندنا تەواو یا کلاسیکی جودا بکەت.' },
      { speaker: 'Labor Sociologist', text: 'Policies like a Universal Basic Income could provide a safety net in an increasingly automated world.', translation: 'پۆلیسیێن وەک "داهاتێ بنەڕەتی یێ گشتی" (UBI) دشێن تۆڕەکا پاراستنێ دابین کەن د جیهانەکا ئۆتۆماتیک-کری دا.' },
      { speaker: 'Economist', text: 'Lifelong learning and reskilling are now essential for maintaining employability in the 21st century.', translation: 'فێربوونا بەردەوام و دووبارە-گەشەپێدانا کارامەییان نوکە فەرن بۆ پاراستنا شیانا دامەزراندنێ د سەدەیێ ٢١ دا.' }
    ],
    vocabulary: [
      { word: 'Transforming', translation: 'گوهۆڕین / وەرچەرخان' },
      { word: 'Flexibility', translation: 'نەرمی / گونجاوی' },
      { word: 'Decouples', translation: 'جودادەکاتەووە / لێک-دەکاتەوە' },
      { word: 'Reskilling', translation: 'فێربوونا کارامەیییا نوو' }
    ]
  },
  {
    id: 'c1-48',
    level: 'C1',
    title: 'The Bystander Effect',
    titleKurdish: 'کاریگەریا تەماشەڤانی (بایستەیندەر ئیفێکت)',
    dialogue: [
      { speaker: 'Psychologist A', text: 'The bystander effect describes how the presence of others inhibits an individual from intervening in an emergency.', translation: 'کاریگەریا تەماشەڤانی روون دکەتەڤە کا هەبوونا کەسێن دی چەوا رێگریێ ل تاکە کەسەکی دکەت کو د بارودۆخەکێ هەوارچوونێ دا دەستێوەردانێ بکەت.' },
      { speaker: 'Psychologist B', text: 'This is often due to "diffusion of responsibility," where each person assumes someone else will act.', translation: 'ئەڤە زۆر جاران ژ بەر "بەلاڤبوونا بەرپرسیاریەتیێ" یە، کو تێدا هەر کەسەک وەسا هزر دکەت کو کەسەکێ دی دێ کار کەت.' },
      { speaker: 'Psychologist A', text: 'Social influence also plays a role; if no one else is reacting, we may interpret the situation as non-urgent.', translation: 'کارتێکرنا جڤاکی ژی دەورەکێ هەیە؛ ئەگەر کەسێ دی کاردانەڤە نەبیت، رەنگە ئەم بارودۆخی وەک نە-پەلە هەژمار بکەین.' },
      { speaker: 'Psychologist B', text: 'Intervention rates increase significantly when the bystander feels they have a specific skill that can help.', translation: 'رێژەیا دەستێوەردانێ ب شێوەیەکێ بەرچاو بلند دبیت دەمێ تەماشەڤان هەست دکەت کو خودان کارامەییەکا تایبەتە کو دشێت هاریکار بیت.' },
      { speaker: 'Psychologist A', text: 'Teaching people about this psychological trap is the first step toward promoting pro-social behavior.', translation: 'فێرکردنا خەڵکی دەربارەی ڤێ داڤا دەروونی پێنگاڤا ئێکێ یە بەرەڤ بلندکردنا رەفتارێن جڤاکی یێن ئەرێنی.' }
    ],
    vocabulary: [
      { word: 'Inhibits', translation: 'رێگری دکەت / عەیب دزانیت' },
      { word: 'Diffusion', translation: 'بەلاڤبووەنا' },
      { word: 'Interpret', translation: 'وەرگێڕان / لێکدانەووە' },
      { word: 'Trap', translation: 'داڤ / تەڵە' }
    ]
  },
  {
    id: 'c1-49',
    level: 'C1',
    title: 'Carbon Taxes vs Cap-and-Trade',
    titleKurdish: 'باجێن کاربۆن بەرامبەر سیستەمێ سنووردارکرن و بازرگانی',
    dialogue: [
      { speaker: 'Policy Analyst', text: 'A carbon tax sets a fixed price on carbon emissions or the carbon content of fossil fuels.', translation: 'باجێ کاربۆنی نرخەکێ جێگیر ل سەر بەلاڤبوونا کاربۆنی یان رێژەیا کاربۆنێ د سۆتەمەنیێن بەردین دا دادەنێت.' },
      { speaker: 'Economist', text: 'In contrast, "cap-and-trade" sets a maximum limit on total emissions and allows companies to trade permits.', translation: 'بەروڤاژی، سیستەمێ "سنووردارکرن و بازرگانی" لوتکەیەکێ بۆ هەمی بەلاڤبوونان دادەنێت و رێ ددەتە کۆمپانیایان بازرگانیێ ب "مۆڵەتان" بکەن.' },
      { speaker: 'Policy Analyst', text: 'The tax provides price certainty, making it easier for businesses to plan long-term investments.', translation: 'باج دڵنیایی یا نرخی دابین دکەت، کو کارێ کۆمپانیایان ب سانەهیتر دکەت بۆ پلانداڕێژانا وەبەرھێنانێن دەم-درێژ.' },
      { speaker: 'Economist', text: 'However, cap-and-trade provides emission certainty, ensuring that the environmental goal is actually met.', translation: 'لێ، سیستەمێ سنووردارکرن و بازرگانی دڵنیایی یا رێژەیا بەلاڤبوونێ دابین دکەت، و مسۆگەر دکەت کو ئارمانجا ژینگەیی دهێتە دیارکرن.' },
      { speaker: 'Policy Analyst', text: 'The most effective approach might be a hybrid system that combines features of both.', translation: 'کاریگەرترین شێواز رەنگە سیستەمەکێ تێکەڵ بیت کو تایبەتمەندییێن هەردووکان پێکڤە کۆم بکەت.' }
    ],
    vocabulary: [
      { word: 'Emissions', translation: 'گازێن بەلاڤبووی / دەرهاویشتنەکان' },
      { word: 'Permits', translation: 'مۆڵەتەکان / رێپێدانەکان' },
      { word: 'Certainty', translation: 'دڵنیایی / پشتراستی' },
      { word: 'Hybrid', translation: 'تێکەڵ / هایبرید' }
    ]
  },
  {
    id: 'c1-50',
    level: 'C1',
    title: 'Constructivism vs Realism',
    titleKurdish: 'کۆنستراکتیڤیزم بەرامبەر ریالیزم (د پەیوەندییێن نێڤدەولەتی دا)',
    dialogue: [
      { speaker: 'Realist Scholar', text: 'Realism views international relations as a perpetual struggle for power in an anarchic world.', translation: 'ریالیزم (راستیگەری) پەیوەندییێن نێڤدەولەتی وەک هەڤرکییەکا بەردەوام دبینیت بۆ ب ب دەستڤەئینانا هێزێ د جیهانەکا بێ-سەروەر دا.' },
      { speaker: 'Constructivist', text: 'Constructivists argue that international relations are defined by shared ideas and social norms, not just material power.', translation: '"بنیاتخواز" (کۆنستراکتیڤیست) دبێژن کو پەیوەندییێن نێڤدەولەتی ب بیرۆکەیێن هاوبەش و بنەمایێن جڤاکی دهێنە ناسین، نە تەنێ هێزا مادی.' },
      { speaker: 'Realist Scholar', text: 'National interest and security are objective realities driven by the distribution of military capabilities.', translation: 'بەرژەوەندییا نیشتیمانی و ئاسایش راستییێن رەهانە کو دابەشبوونا شیانێن سەربازی وان بڕێڤە دبات.' },
      { speaker: 'Constructivist', text: 'But national interests are socially constructed; what a state wants depends on its identity and historical context.', translation: 'لێ بەرژەوەندییێن نیشتیمانی ب شێوەیەکێ جڤاکی دهێنە درۆستکردن؛ ئەوا دەولەتەک دخوازیت ب ئاستێ ناسنامە و دەقێ مێژوویی ڤە گرێدایە.' },
      { speaker: 'Realist Scholar', text: 'While norms matter, when survival is at stake, states will always revert to self-help and power politics.', translation: 'دەمێ بنەما گرنگ بن، لێ دەمێ مانەوە د مەترسیێ دا بیت، دەولەت هەردەم دێ زڤڕنە سەر سیاسەتا "پشتبەستن ب خۆ" و هیزێ.' }
    ],
    vocabulary: [
      { word: 'Perpetual', translation: 'بەردەوام / بێ-دوماهی' },
      { word: 'Anarchic', translation: 'بێ-یاسا / بێ-سەروەر' },
      { word: 'Distribution', translation: 'دابەشکردن' },
      { word: 'Revert', translation: 'زڤڕینەووە / گەڕانەوە' }
    ]
  },
  {
    id: 'c1-51',
    level: 'C1',
    title: 'Mirror Neurons and Empathy',
    titleKurdish: 'دەمەخانەیێن ئاوێنەیی و هەستپێکردن (ئێمپاسی)',
    dialogue: [
      { speaker: 'Neuroscientist A', text: 'Mirror neurons are a class of neurons that discharge both when an individual executes a motor act and when they observe another individual performing the same act.', translation: 'دەمەخانەیێن ئاوێنەیی (Mirror neurons) جۆرەکێ دەمەخانەیانە کو د دەمێ ئەنجامدانا کارەکێ لەرەیی دا ژ لایێ تاکەکەسی ڤە یان دەمێ تەماشەکرنا کەسەکێ دی دکەت کو هەمان کار ئەنجام ددەت، چالاک دبن.' },
      { speaker: 'Neuroscientist B', text: 'Some researchers suggest that these neurons form the neurological basis for empathy and understanding others\' intentions.', translation: 'هەندەک ڤەکۆڵەر پێشنیار دکەن کو ئەڤ دەمەخانەیە بناغەیێ دەماری یێ "هەستپێکردنێ" (ئێمپاسی) و تێگەهشتن ل سەر ئارمانجێن کەسێن دی پێک دئینن.' },
      { speaker: 'Neuroscientist A', text: 'By "internally simulating" the actions of others, we can gain an intuitive grasp of their emotional state.', translation: 'ب رێکا "هاوشێوەکرنا ناوخۆیی" یا کارێن کەسێن دی، ئەم دشێین تێگەهشتنەکا سرۆشتی دەربارەی بارێ وان یێ هەستی ب دەست ڤە بینن.' },
      { speaker: 'Neuroscientist B', text: 'However, the extent to which mirror neurons contribute to complex social cognition is still a subject of intense debate.', translation: 'لێ، رادەیێ پشکداریکردنا دەمەخانەیێن ئاوێنەیی د تێگەهشتنا جڤاکی یا ئاڵۆز دا هێشتا مژارەکا گۆتۆبێژا توندە.' },
      { speaker: 'Neuroscientist A', text: 'Understanding this link could provide insights into conditions like autism, where social mimicry and empathy are affected.', translation: 'تێگەهشتن د ڤێ پەیوەندیێ دا دشێت زانیارییان دەربارەی بارودۆخێن وەک "ئۆتیزم" دابین بکەت، کو تێدا چاڤلێکرنا جڤاکی و هەستپێکردن دکەڤنە ژ ژێر کارتێکرنێ.' }
    ],
    vocabulary: [
      { word: 'Discharge', translation: 'بەتاڵبوون / چالاکبوون (د دەمارناسی دا)' },
      { word: 'Intentions', translation: 'ئارمانج / نێتەکان' },
      { word: 'Simulating', translation: 'هاوشێوەکردن' },
      { word: 'Mimicry', translation: 'چاڤلێکرن / لێک-کردنەوە' }
    ]
  },
  {
    id: 'c1-52',
    level: 'C1',
    title: 'The Social Contract',
    titleKurdish: 'گرێبەستا جڤاکی (هۆبس بەرامبەر لۆک)',
    dialogue: [
      { speaker: 'Professor', text: 'Thomas Hobbes viewed the "state of nature" as a war of all against all, necessitating a powerful sovereign to maintain order.', translation: 'تۆماس هۆبس "بارودۆخێ سرۆشتی" وەک شەڕێ هەمووان دژی هەمووان ددیت، کو پێتڤی ب سەروەرەکێ ب هێز هەڕی بۆ پاراستنا رێکوپێکییێ.' },
      { speaker: 'Student', text: 'In contrast, John Locke believed that individuals possess natural rights to life, liberty, and property even before the state exists.', translation: 'بەروڤاژی، جۆن لۆک باوەر وەسا بوو کو تاکەکەس خودان مافێن سرۆشتی نە بۆ ژیان، ئازادی، و خاوەنداریەتیێ تەنانەت بەری دەولەت پەیدا ببیت.' },
      { speaker: 'Professor', text: 'For Locke, the social contract is a conditional agreement; if the state fails to protect these rights, citizens have a right to revolt.', translation: 'بۆ لۆکی، گرێبەستا جڤاکی رێککەفتنەکا ب مەرجە؛ ئەگەر دەولەت نەشێت ڤان مافان بپارێزیت، هاووەلاتی مافێ شۆڕشێ (ریڤۆڵت) هەیە.' },
      { speaker: 'Student', text: 'Hobbes prioritized security over liberty, while Locke saw government as a servant of the people.', translation: 'هۆبس گرنگی ددا ئاسایشێ ل سەر ئازادییێ، د دەمەکێ دا لۆک وەسا ددیت کو حکومەت خزمەتکارێ گەلە.' },
      { speaker: 'Professor', text: 'These two perspectives continue to shape modern debates about the limits of state power and individual autonomy.', translation: 'ئەڤ هەر دوو دیتنە بەردەوامن د درۆستکردنا گۆتۆبێژێن نوکە دا دەربارەی سنوورێن هێزا دەولەتێ و سەربەخۆیییا تاکەکەسی.' }
    ],
    vocabulary: [
      { word: 'Necessitating', translation: 'پێتڤی پێکردن' },
      { word: 'Sovereign', translation: 'سەروەر / ڕێبەرێ بالا' },
      { word: 'Conditional', translation: 'ب مەرج / گرێدای' },
      { word: 'Autonomy', translation: 'سەربەخۆیی / خۆبژێوی' }
    ]
  },
  {
    id: 'c1-53',
    level: 'C1',
    title: 'Ocean Acidification',
    titleKurdish: 'ترشبوونا زەریایان و بایۆلۆژیا دەریایی',
    dialogue: [
      { speaker: 'Marine Ecologist', text: 'Ocean acidification occurs as the ocean absorbs excess carbon dioxide from the atmosphere, lowering the pH of the water.', translation: 'ترشبوونا زەریایان (Ocean acidification) دەمێ روو ددەت کو زەریا رێژەیەکا زێدە یا دوو-ئۆکسیدا کاربۆنێ ژ بەرگەهێ هەوای دکێشیت، کو ئەڤە دبیتە ئەگەرێ کێمبوونا نمرەیا pH یا ئاڤێ.' },
      { speaker: 'Environmentalist', text: 'This process makes it increasingly difficult for calcifying organisms like corals and shellfish to build their skeletons and shells.', translation: 'ئەڤ پرۆسەیە کارێ زیندەوەرێن "کەلس-کەر" (calcifying) وەک مەرجان و سەدەفان ب زەحمەت دکەت کو ئێسک و قەباخێن خۆ درۆست بکەن.' },
      { speaker: 'Marine Ecologist', text: 'The collapse of coral reefs would have devastating effects on marine biodiversity and the livelihoods of coastal communities.', translation: 'هەرفینا "بەستێن مەرجانی" (Coral reefs) دێ کارتێکرنێن وێرانکەر هەبن ل سەر جۆراوجۆرییا بایۆلۆژی یا دەریایی و بژێوییا جڤاکێن کەنار دەریا.' },
      { speaker: 'Environmentalist', text: 'We are already seeing a decline in pteropods, which are a major food source for higher trophic levels.', translation: 'ئەم نوکە کێمبوونا "پتێرۆپۆدان" (Pteropods) دبینن، کو سەرچاوەیەکێ سەرەکی یێ خوارنێ نە بۆ ئاستێن بلندتر یێن زنجیرەیا خوارنێ.' },
      { speaker: 'Marine Ecologist', text: 'Without a rapid reduction in global emissions, the very foundations of the ocean\'s food web are at risk.', translation: 'بێی کێمکردنەکا بلەز د بەلاڤبوونا گازێن جیهانی دا، بناغەیێن تۆڕا خوارنێ یا زەریایان د مەترسیێ دان.' }
    ],
    vocabulary: [
      { word: 'Absorbs', translation: 'دەمژیت / هەڵدمژێت' },
      { word: 'Skeletons', translation: 'پیکەربەندی / ئێسکبەندی' },
      { word: 'Biodiversity', translation: 'جۆراوجۆرییا بایۆلۆژی' },
      { word: 'Livelihoods', translation: 'بژێوییا ژیانێ' }
    ]
  },
  {
    id: 'c1-54',
    level: 'C1',
    title: 'The Role of Central Banks',
    titleKurdish: 'دەورێ بانکێن ناوەندی د ئابووریێ دا',
    dialogue: [
      { speaker: 'Economist A', text: 'Central banks, like the Federal Reserve, use monetary policy to achieve price stability and maximum employment.', translation: 'بانکێن ناوەندی، وەک "فیدراڵ رێزێرڤ"، سیاسەتا دراڤی بکار دئینن بۆ ب دەستڤەئینانا جێگیریا نرخ و پەیابوونا زۆرترین دەرفەتێن کاری.' },
      { speaker: 'Economist B', text: 'Their primary tool is adjusting interest rates, which influences borrowing, spending, and investment across the economy.', translation: 'ئامرازێ وان یێ سەرەکی گوهۆڕینا رێژەیا سوویێ (Interest rates) یە، کو کارتێکرنێ دکەتە سەر قەرزکرن، مەسرەفکردن، و وەبەرھێنانێ د هەمی ئابووریێ دا.' },
      { speaker: 'Economist A', text: 'During a recession, a central bank may implement "quantitative easing" by purchasing assets to inject liquidity into the system.', translation: 'ل دەمێ داکەفتنا ئابووری (Recession)، رەنگە بانکا ناوەندی "ئاسانکارییا چەندایەتی" (Quantitative easing) ئەنجام بدەت ب رێکا کڕینا سامانی بۆ تێکردنا پارەیێ کاش (Liquidity) بۆ ناڤ سیستەمی.' },
      { speaker: 'Economist B', text: 'Critics argue that prolonged low interest rates can fuel asset bubbles and increase wealth inequality.', translation: 'رەخنەگر دبێژن کو نزمبوونا درێژ-خایەن یا رێژەیا سوویێ دشێت ببیتە ئەگەرێ پەیدابوونا "پفکێن سامانی" و زیادبوونا نە-یەکسانییا سامان.' },
      { speaker: 'Economist A', text: 'The independence of the central bank from political pressure is crucial for maintaining it’s credibility and effectiveness.', translation: 'سەربەخۆیییا بانکا ناوەندی ژ فشارێن سیاسی فەرە بۆ پاراستنا باوەری و کارامەیییا وێ.' }
    ],
    vocabulary: [
      { word: 'Monetary', translation: 'دراڤی / پارەیی' },
      { word: 'Liquidity', translation: 'پارەیێ کاش / نەختێنە' },
      { word: 'Recession', translation: 'داکەفتنا ئابووری / سستییا ئابووری' },
      { word: 'Credibility', translation: 'باوەری / جێی متمانە' }
    ]
  },
  {
    id: 'c1-55',
    level: 'C1',
    title: 'The Secularization Thesis',
    titleKurdish: 'تیۆرییا دنیایی-بوونێ (سیکولاریزەیشن)',
    dialogue: [
      { speaker: 'Sociologist A', text: 'The secularization thesis suggests that as societies modernize, religious institutions and beliefs lose their social significance.', translation: 'تیۆرییا دنیایی-بوونێ (Secularization thesis) پێشنیار دکەت کو دەمێ جڤاک مۆدێرن دبن، دامەزراوە و باوەرێن ئایینی گرنگییا خۆ یا جڤاکی ژ دەست ددەن.' },
      { speaker: 'Sociologist B', text: 'However, the rise of religious movements in many parts of the world has led scholars to question the universality of this trend.', translation: 'لێ، سەرهەلدانا بزاڤێن ئایینی ل گەلەک جهان د جیهانێ دا وای ل زانایان کری کو گۆمانێ ل سەر گشتگیرییا ڤێ ئاراستەیێ (ترێند) بکەن.' },
      { speaker: 'Sociologist A', text: 'It might not be a total disappearance, but a "privatization" of religion, where it becomes a personal matter rather than a public authority.', translation: 'رەنگە ئەڤە نە ونبوونا تەواو بیت، بەلکو "تایبەتکرنەووەیا" ئایینی بیت، کو تێدا دبیتە بابەتەکێ تاکەکەسی ل شوینا دەستهەلاتەکا گشتی.' },
      { speaker: 'Sociologist B', text: 'Peter Berger, once a proponent of the thesis, eventually argued that the modern world is as furiously religious as ever.', translation: 'پیتەر بێرگەر، کو جاران ژ پشتەڤانێن ڤێ تیۆریێ بوو، ل دوماهییێ گۆت کو جیهانا مۆدێرن وەک بەری نوکە یا ئایینی یە ب توندی.' },
      { speaker: 'Sociologist A', text: 'Understanding the complex interplay between modernity and spirituality remains a major challenge in sociology.', translation: 'تێگەهشتن د وان پەیوەندییێن ئاڵۆز یێن د ناڤبەرا مۆدێرنیتی و رووحیەتێ دا وەک ئاستەنگەکا مەزن د کۆمەڵناسیێ دا دمینیت.' }
    ],
    vocabulary: [
      { word: 'Modernize', translation: 'نەوی-بوون / مۆدێرن-بوون' },
      { word: 'Universality', translation: 'گشتگیری / جیهانبینی' },
      { word: 'Proponent', translation: 'پشتەڤان / لایەنگیر' },
      { word: 'Spirituality', translation: 'رووحیەت / مەعنەوییەت' }
    ]
  },
  {
    id: 'c1-56',
    level: 'C1',
    title: 'Designer Babies and Enhancement',
    titleKurdish: 'زارۆکێن دیزاین-کری و باشترکرنا جینی',
    dialogue: [
      { speaker: 'Bioethicist', text: 'The emergence of CRISPR technology has made the concept of "designer babies" a looming reality.', translation: 'سەرهەلدانا تەکنەلۆژیا CRISPR چەمکا "زارۆکێن دیزاین-کری" کرییە راستییەکا نێزیک.' },
      { speaker: 'Molecular Biologist', text: 'While the initial focus is on curing genetic defects, the line between therapy and enhancement is easily blurred.', translation: 'د دەمەکێ دا ئارمانجا سەرەکی چارەسەرکرنا کێماسییێن جیناتی یە، لێ سنوورێ د ناڤبەرا "چارەسەری" و "باشترکردنی" دا ب سانەهی تەڵخ دبیت.' },
      { speaker: 'Bioethicist', text: 'Selecting for traits like intelligence or athletic ability raises questions about natural diversity and human dignity.', translation: 'هەلبژاردنا سیفەتێن وەک ژیری یان شیانا وەرزشی پرسیاران دەربارەی جۆراوجۆرییا سرۆشتی و رامانا مرۆڤایەتی پەیدا دکەت.' },
      { speaker: 'Molecular Biologist', text: 'If we can prevent suffering and improve the human condition, do we have a moral obligation to do so?', translation: 'ئەگەر ئەم بشێین رێگریێ ل ئێشانێ بگرین و بارودۆخێ مرۆڤی باشتر بکەین، ئەرێ ئەرکەکێ ئەخلاقی ل سەر مە هەیە بۆ ڤێ چەندێ؟' },
      { speaker: 'Bioethicist', text: 'The potential for a "genetic divide" where only the wealthy can afford enhancements is a major societal risk.', translation: 'مەترسییا پەیدابوونا "پارچەبوونا جیناتی" کو تێدا تەنێ دەولەمەند دشێن تێچوونا گوهۆڕینان دابین کەن، مەترسییەکا مەزنا جڤاکی یە.' }
    ],
    vocabulary: [
      { word: 'Looming', translation: 'نێزیک / ل بەر دەرگەە' },
      { word: 'Defects', translation: 'کێماسی / ناتەواوەتیەکان' },
      { word: 'Blurred', translation: 'تەڵخ / نادیار' },
      { word: 'Obligation', translation: 'ئەرک / پابەندبوون' }
    ]
  },
  {
    id: 'c1-57',
    level: 'C1',
    title: 'The Future of Higher Education',
    titleKurdish: 'پاشەڕۆژا خواندنا بالا: MOOCs و فێربوونا دیجیتالی',
    dialogue: [
      { speaker: 'University Dean', text: 'The rise of MOOCs and online platforms is challenging the traditional brick-and-mortar model of higher education.', translation: 'بلندبوونا MOOCs و پلاتفۆرمێن ئۆنلاین تەحەدای مۆدێلا کلاسیکی یا "چیمەنتۆ و کەرپوچ" (Brick-and-mortar) یا خواندنا بالا دکەت.' },
      { speaker: 'Educational Technologist', text: 'Digital learning offers unprecedented accessibility and flexibility for students worldwide.', translation: 'فێربوونا دیجیتالی دەستکەفتن و نەرمیەکا بێ-وێنە دابی دکەت بۆ قوتابییان ل سەرتاسەری جیهانێ.' },
      { speaker: 'University Dean', text: 'However, the campus experience—mentorship, networking, and social development—is difficult to replicate online.', translation: 'لێ، ئەزموونا زانکۆیێ - وەک چاڤدێری، پەیوەندی، و گەشەپێدانا جڤاکی - ب زەحمەتە د ئۆنلاینێ دا دوبارە ببیتەڤە.' },
      { speaker: 'Educational Technologist', text: 'A hybrid approach that combines digital resources with in-person interaction seems the most likely future.', translation: 'شێوازەکێ تێکەڵ کو سەرچاوەیێن دیجیتالی دگەل هەڤدیتنا راستەوخۆ کۆم بکەت، وەسا دیارە دەستپێکا پاشەڕۆژێ بیت.' },
      { speaker: 'University Dean', text: 'We must also address the "credentialing" aspect; providing recognized value for skills learned outside formal degree programs.', translation: 'پێتڤییە ئەم هەروەسا چارەسەریا بابەتێ "بەڵگەنامەدانێ" (Credentialing) بکەین؛ ب رێکا دابینکرنا بهایەکێ ناسراو بۆ وان کارامەییێن کو دوویر ژ پڕۆگرامێن فەرمی تێنە فێربوون.' }
    ],
    vocabulary: [
      { word: 'Mentorship', translation: 'رێبەرایەتی / چاڤدێری' },
      { word: 'Replicate', translation: 'دوبارە-کردنەوە / کلۆن-کردن' },
      { word: 'Credentialing', translation: 'بڕوانامەدان / بەڵگەنامەدان' },
      { word: 'Recognized', translation: 'ناسراو / پەسندکراو' }
    ]
  },
  {
    id: 'c1-58',
    level: 'C1',
    title: 'The Milgram Experiment',
    titleKurdish: 'تاقیکرنا میڵگرام و گوهداری (ئۆبیدیێنس)',
    dialogue: [
      { speaker: 'Psychology Professor', text: 'The Milgram experiment investigated the conflict between obedience to authority and personal conscience.', translation: 'تاقیکرنا میڵگرام لێکۆڵینەووە د تێکچوونا د ناڤبەرا گوهداریکردنا دەستهەلاتێ و ویژدانێ تاکەکەسی دا دکر.' },
      { speaker: 'Student', text: 'It revealed that a high percentage of participants were willing to administer what they believed were painful electric shocks to another person if ordered by an expert.', translation: 'تاقیکرنێ ئەوە ئاشکرا کر کو رێژەیەکا بلند یا بەشداربووان د ئامادە بوون شۆکێن کارەبێ یێن ب ئێش بدەنە کەسەکێ دی ئەگەر ژ لایێ شارەزایەکی ڤە فەرمان ل سەر بهێتەکرن.' },
      { speaker: 'Psychology Professor', text: 'Milgram concluded that ordinary people can become agents in a terrible destructive process out of a sense of duty.', translation: 'میڵگرام گەهشتە وێ ئەنجامێ کو خەڵکێن ئاسایی دشێن ببنە بەشەک ژ پرۆسەیەکا وێرانکەرا مەزن ژ بەر هەستکردن ب ئەرکی.' },
      { speaker: 'Student', text: 'The ethical concerns regarding the psychological distress caused to the "teachers" led to stricter regulations for human experiments.', translation: 'گۆمانێن ئەخلاقی دەربارەی ئەو فشارا دەروونی یا کو بۆ "مامۆستایان" (بەشداربووان) پەیدا بووی، بوویە ئەگەرێ دانانا یاسایێن توندتر بۆ تاقیکرنێن ل سەر مرۆڤی.' },
      { speaker: 'Psychology Professor', text: 'It remains bit of a chilling reminder of the fragility of individual moral autonomy under pressure.', translation: 'ئەو وەک بیرهێنانەکا ترسناک دمینیت دەربارەی لاوازییا سەربەخۆیییا ئەخلاقی یا تاکەکەسی ل ژێر فشارێ دا.' }
    ],
    vocabulary: [
      { word: 'Obedience', translation: 'گوهداری / مل-کەچ بوون' },
      { word: 'Conscience', translation: 'ویژدان' },
      { word: 'Destructive', translation: 'وێرانکەر / تێکدەر' },
      { word: 'Regulations', translation: 'یاسا / رێنمایییەکان' }
    ]
  },
  {
    id: 'c1-59',
    level: 'C1',
    title: 'Wetlands and Carbon Sequestration',
    titleKurdish: 'زۆنگاوەکان و کۆمکردنا کاربۆنێ (سیکوێسترەیشن)',
    dialogue: [
      { speaker: 'Ecologist', text: 'Wetlands, like peatlands and mangroves, are disproportionately effective at sequestering carbon from the atmosphere.', translation: 'زۆنگاوەکان (Wetlands)، وەک ناوچەیێن پیتلاند و مانگڕۆڤ، ب شێوەیەکێ بەرچاو کاریگەرن د کێشانا کاربۆنێ دا ژ بەرگەهێ هەوای.' },
      { speaker: 'Environmental Scientist', text: 'They act as "carbon sinks," storing vast amounts of organic matter in waterlogged, anaerobic conditions.', translation: 'ئەو وەک "کۆگەهێن کاربۆنێ" کار دکەن، و بڕەکێ زۆر یێ ماددەیێن ئۆرگانی د بارودۆخێن بێ-ئۆکسجین و پڕ-ئاڤ دا عەمبار دکەن.' },
      { speaker: 'Ecologist', text: 'When these ecosystems are drained or degraded, they release stored carbon back into the atmosphere as carbon dioxide.', translation: 'دەمێ ئەڤ سیستەمانە دهێنە هشککردن یان تێکدان، کاربۆنا عەمبارکری دوبارە وەک دوو-ئۆکسیدا کاربۆنێ بەلاڤ دکەنەووە د ناڤ هەوای دا.' },
      { speaker: 'Environmental Scientist', text: 'Restoring wetlands is one of the most cost-effective nature-based solutions for climate mitigation.', translation: 'دووبارە ئاڤاکردنەووا زۆنگاوەکان ئێکە ژ باشترین و هەرزانترین چارەسەریێن سرۆشتی بۆ کێمکردنا کارتێکرنێن سەقای.' },
      { speaker: 'Ecologist', text: 'Furthermore, they provide critical ecosystem services like flood control and habitat for endangered species.', translation: 'زێدەباری ڤێ چەندێ، ئەو خزمەتگۆزارییێن گرنگ یێن ژینگەیی دابین دکەن وەک کۆنتڕۆڵکردنا لافاوان و دابینکردنا ژینگەی بۆ گیانەوەرێن د مەترسییا قڕبوونێ دا.' }
    ],
    vocabulary: [
      { word: 'Sequestering', translation: 'کۆمکردن / دوویرخستنەوە (بۆ کاربۆن)' },
      { word: 'Waterlogged', translation: 'پڕ-ئاڤ / تێر-ئاڤ بووی' },
      { word: 'Anaerobic', translation: 'بێ-هەوا / بێ-ئۆکسجین' },
      { word: 'Mitigation', translation: 'کێمکردنەوە / سستکردن' }
    ]
  },
  {
    id: 'c1-60',
    level: 'C1',
    title: 'The Responsibility to Protect (R2P)',
    titleKurdish: 'بەرپرسیاریەتییا پاراستنێ (R2P)',
    dialogue: [
      { speaker: 'International Jurist', text: 'The Responsibility to Protect (R2P) is a global political commitment to prevent genocide, war crimes, and crimes against humanity.', translation: 'بەرپرسیاریەتییا پاراستنێ (R2P) پابەندبوونەکا سیاسی یا جیهانی یە بۆ رێگریێ ل جینۆساید، تاوانێن جەنگی، و تاوانێن دژی مرۆڤایەتی.' },
      { speaker: 'Diplomat', text: 'It challenges the traditional concept of absolute state sovereignty if a government fails to protect its own population.', translation: 'ئەگەر حکومەتەک نەشێت هاووەلاتیێن خۆ بپارێزیت، ئەڤ پرەنسیپە جەنگی تێگەهێ کلاسیکی یێ سەروەرییا دەولەتێ دکەت.' },
      { speaker: 'International Jurist', text: 'The "third pillar" of R2P allows for collective international action, including military intervention as a last resort.', translation: '"ستوینا سێیێ" یا R2P رێ ددەتە کارێ نێڤدەولەتی یێ ب کۆم، ب هەبوونا دەستێوەردانا سەربازی وەک چارەسەرییا دوماهییێ.' },
      { speaker: 'Diplomat', text: 'However, the selective application of R2P has led to accusations of Western imperialism and double standards.', translation: 'لێ، جێبەجێکردنا هەلبژێردراو یا R2P بوویە ئەگەرێ تاوانبارکردنا ئیمپریالیزما رۆژئاوایی و هەبوونا ستانداردێن دوو-فەقی.' },
      { speaker: 'International Jurist', text: 'The challenge is to balance the protection of individual human rights with the principles of international stability.', translation: 'ئاستەنگ ئەوە هاوسەنگییەکێ درۆست بکەین د ناڤبەرا پاراستنا مافێن مرۆڤی یێن تاکەکەسی و بنەمایێن جێگیریا نێڤدەولەتی دا.' }
    ],
    vocabulary: [
      { word: 'Commitment', translation: 'پابەندبوون / بەڵێن' },
      { word: 'Genocide', translation: 'کۆمەڵکوژی / جینۆساید' },
      { word: 'Imperialism', translation: 'ئیمپریالیزم / داگیرکاری' },
      { word: 'Intervention', translation: 'دەستێوەردان' }
    ]
  },
  {
    id: 'c1-61',
    level: 'C1',
    title: 'Sleep and Circadian Rhythms',
    titleKurdish: 'خەو و لەرەلەرێن شەبانەرۆژی (سێرکەدیان ریدمز)',
    dialogue: [
      { speaker: 'Sleep Scientist A', text: 'Circadian rhythms are internally driven 24-hour cycles that regulate sleep-wake patterns and other physiological processes.', translation: 'لەرەلەرێن شەبانەرۆژی (Circadian rhythms) خولێن ٢٤ دەمژمێری نە یێن ناوخۆیی کو رێژەیا کارێن خەو-هشیاری و پرۆسەیێن دی یێن فیزیایی رێک دێخن.' },
      { speaker: 'Sleep Scientist B', text: 'The suprachiasmatic nucleus in the hypothalamus acts as the body\'s master clock, synchronized by light exposure.', translation: '"ناوکا سوپراکیاسماتیک" د هایپۆتالامۆسێ دا کار دکەت وەک دەمژمێرا سەرەکییا جەستەی، کو ب رێکا بەرکەفتنا رووناهیێ دهێتە رێکخستن.' },
      { speaker: 'Sleep Scientist A', text: 'Disruption of these rhythms, common in shift work, is linked to metabolic disorders and cardiovascular disease.', translation: 'تێکچوونا ڤان لەرەلەران، کو د کارێن "شیفت" دا بەربڵاوە، گرێدایە ب تێکچوونێن میتابۆلیکی و نەخۆشییێن دل و دەماران.' },
      { speaker: 'Sleep Scientist B', text: 'Sleep is not a passive state but an active period of neural restoration and memory consolidation.', translation: 'خەو نەک تەنێ رەوشەکا بێدەنگە، بەلکو قۆناغەکا چالاکە بۆ نووژەنکرنا دەماران و جێگیرکردنا بیرا مێشکی.' },
      { speaker: 'Sleep Scientist A', text: 'Prioritizing sleep hygiene is essential for maintaining both cognitive performance and long-term health.', translation: 'گرنگیدان ب پاقژییا خەوێ (Sleep hygiene) فەرە بۆ پاراستنا هەر دوو شیانێن مێشکی و ساخلەمییا دەم-درێژ.' }
    ],
    vocabulary: [
      { word: 'Physiological', translation: 'فیزیایی / پەیوەندیدار ب ئەندامێن لاشەی' },
      { word: 'Synchronized', translation: 'هەماهەنگی-کری' },
      { word: 'Metabolic', translation: 'میتابۆلیکی / سووتەمەنییا جەستەی' },
      { word: 'Consolidation', translation: 'جێگیرکردن / کۆمکردنەووە' }
    ]
  },
  {
    id: 'c1-62',
    level: 'C1',
    title: 'The Resource Curse',
    titleKurdish: 'نەفرەتا ژێدەران (پارادۆکسا زۆربوونی)',
    dialogue: [
      { speaker: 'Political Scientist', text: 'The "resource curse" describes the phenomenon where countries with an abundance of natural resources often experience lower economic growth and higher corruption.', translation: '"نەفرەتا ژێدەران" (Resource curse) وەسفا وێ دیاردێ دکەت کو وەلاتێن خودان ژێدەرێن سرۆشتی یێن زۆر، زۆر جاران گەشەیا ئابووری یا کێمتر و گەندەڵییا بلندتر دبینن.' },
      { speaker: 'Economist', text: 'This is often due to "Dutch Disease," where a surge in commodity exports leads to a decline in other sectors like manufacturing.', translation: 'ئەڤە زۆر جاران ژ بەر "نەخۆشییا هۆڵەندی" (Dutch Disease) یە، کو تێدا بلندبوونا هەناردەکرنا کەلوپەلان دبیتە ئەگەرێ داکەفتنا کەرتێن دی وەک پیشەسازی.' },
      { speaker: 'Political Scientist', text: 'Reliance on natural resource rents can also weaken democratic institutions and fuel civil conflict.', translation: 'پشتبەستن ب داهاتێ ژێدەرێن سرۆشتی دشێت دامەزراوەیێن دیمۆکراسی لاواز بکەت و شەڕێ ناوخۆیی توندتر بکەت.' },
      { speaker: 'Economist', text: 'Diversifying the economy and creating transparent wealth funds are essential strategies to mitigate this risk.', translation: 'جۆراوجۆرکردنا ئابووری و درۆستکردنا سندوقێن سامانی یێن شەفاف ستراتیژییەتێن فەرن بۆ کێمکردنا ڤێ مەترسیێ.' },
      { speaker: 'Political Scientist', text: 'Strong governance and accountability are the most effective antidotes to the resource curse.', translation: 'حو کمدارییا ب هێز و لێپرسینەووە کاریگەرترین دەرمانن بۆ نەفرەتا ژێدەران.' }
    ],
    vocabulary: [
      { word: 'Abundance', translation: 'زۆری / فرەهی' },
      { word: 'Commodity', translation: 'کەلوپەل / کاڵا' },
      { word: 'Manufacturing', translation: 'پیشەسازی / بەرهەمهێنان' },
      { word: 'Antidote', translation: 'دەمان / دژە-ژەهر' }
    ]
  },
  {
    id: 'c1-63',
    level: 'C1',
    title: 'Deforestation and Zoonotic Disease',
    titleKurdish: 'ژناڤبرنا دارستانان و نەخۆشییێن زۆنۆتیک (ئاژەڵی بۆ مرۆڤی)',
    dialogue: [
      { speaker: 'Epidemiologist', text: 'Deforestation increases the contact between humans and wildlife, facilitating the "spillover" of zoonotic diseases.', translation: 'ژناڤبرنا دارستانان پەیوەندییا د ناڤبەرا مرۆڤ و ژیانا کێوی زێدە دکەت، کو رێخۆشکەرە بۆ "تێپەڕبوونا" نەخۆشییێن زۆنۆتیک بۆ مرۆڤی.' },
      { speaker: 'Ecologist', text: 'As natural habitats fragment, species that are resilient to human disturbance often harbor pathogens that can infect humans.', translation: 'دەمی ژینگەیێن سرۆشتی پڕچە-پارچە دبن، ئەو جۆرێن کو بەرامبەر تێکدانا مرۆڤی خۆڕاگرن، زۆر جاران نەخۆشییەکێ هەڵدگرن کو دشێت مرۆڤی تووش بکەت.' },
      { speaker: 'Epidemiologist', text: 'Biodiversity acts as a "dilution effect," reducing the prevalence of these pathogens in their natural environment.', translation: 'جۆراوجۆرییا بایۆلۆژی وەک "کاریگەریا روونکردنەووەیێ" (Dilution effect) کار دکەت، و بەربڵاوبوونا وان نەخۆشییان د ناڤ ژینگەیێ سرۆشتی دا کێم دکەت.' },
      { speaker: 'Ecologist', text: 'Protecting intact forests is therefore a critical component of global pandemic prevention.', translation: 'پاراستنا دارستانێن ساخلەم، ژ بەر ڤێ چەندێ، بەشەکێ فەرە ژ رێگریکردنا جیهانی دژی پەتایان (پاندمیک).' },
      { speaker: 'Epidemiologist', text: 'A "One Health" approach, integrating human, animal, and environmental health, is necessary to address these risks.', translation: 'شێوازێ "ئێک ساخلەمی"، کو ساخلەمییا مرۆڤ، ئاژەڵ، و ژینگەی پێکڤە گرێ ددەت، فەرە بۆ چارەسەرکرنا ڤان مەترسییان.' }
    ],
    vocabulary: [
      { word: 'Spillover', translation: 'تێپەڕبوون / رژان / تەشەنەکردن' },
      { word: 'Resilient', translation: 'خۆڕاگر / نەرم' },
      { word: 'Prevalence', translation: 'بەربڵاوبوون' },
      { word: 'Intact', translation: 'سەلامەت / دەست-تێنەدای / تەواو' }
    ]
  },
  {
    id: 'c1-64',
    level: 'C1',
    title: 'Market Failures and Externalities',
    titleKurdish: 'شکستێن بازاڕی و کارتێکرنێن دەرەکی (ئێکستێرنالیتیز)',
    dialogue: [
      { speaker: 'Economist A', text: 'Market failure occurs when the free market fails to allocate resources efficiently, often due to externalities.', translation: 'شکستا بازاڕی دەمێ روو ددەت کو بازاڕێ ئازاد نەشێت ژێدەران ب شێوەیەکێ کارامە دابەش بکەت، کو زۆر جاران ژ بەر "کارتێکرنێن دەرەکی" یە.' },
      { speaker: 'Economist B', text: 'Externalities are costs or benefits experienced by third parties who are not involved in a transaction.', translation: '"کارتێکرنێن دەرەکی" تێچوون یان سوودن کو ژ لایێ لایەنێن سێیێ ڤە دبینرێن یێن کو بەژدار نینن د پرۆسەیا کڕین و فرۆتنێ دا.' },
      { speaker: 'Economist A', text: 'Pollution is a classic negative externality; the producer does not pay for the environmental damage they cause.', translation: 'پیسبوونا ژینگەی نموونەیەکا کلاسیکی یا "کارتێکرنا دەرەکی یا نەرێنی" یە؛ بەرهەمهێنەر پارێ وی زیانێ نادەت یێ کو دگەهینیتە ژینگەی.' },
      { speaker: 'Economist B', text: 'Government intervention, such as taxes or regulations, can internalize these costs and improve social welfare.', translation: 'دەستێوەردانا حکومەتێ، وەک باج یان یاسایان، دشێت ڤان تێچوونان بکەتە "ناوخۆیی" و باشییا گشتی باشتر بکەت.' },
      { speaker: 'Economist A', text: 'However, government failure is also a risk, where intervention leads to even greater inefficiencies.', translation: 'لێ، شکستا حکومەتێ ژی مەترسییەکە، کو تێدا دەستێوەردان دبیتە ئەگەرێ نە-کارامەیییا پتر.' }
    ],
    vocabulary: [
      { word: 'Externalities', translation: 'کارتێکرنێن دەرەکی' },
      { word: 'Transaction', translation: 'گرێبەست / مامەڵەیا بازرگانی' },
      { word: 'Internalize', translation: 'ناوخۆیی-کردن / کێشانەووە بۆ ناڤخۆ' },
      { word: 'Intervention', translation: 'دەستێوەردان' }
    ]
  },
  {
    id: 'c1-65',
    level: 'C1',
    title: 'Sociology of Leisure',
    titleKurdish: 'کۆمەڵناسییا کەیف و مەسرەفکرنێ (لێژەر)',
    dialogue: [
      { speaker: 'Sociologist A', text: 'Leisure is often defined as the time remaining after labor and obligatory tasks are completed.', translation: 'کەیف و بێهنڤەدان (Leisure) زۆر جاران وەک ئەو دەمە دهێتە پێناسەکرن یێ کو پشتی کار و ئەرکێن پابەندکەر دمینیت.' },
      { speaker: 'Sociologist B', text: 'However, in consumer societies, leisure has become increasingly commodified through commercial entertainment and media.', translation: 'لێ، د جڤاکێن مەسرەفکار دا، کەیف و بێهنڤەدان ب شێوەیەکێ زێدە بوویە تشتەکێ بازرگانی ب رێکا کەیفخۆشییێن بازرگانی و میدیایێ.' },
      { speaker: 'Sociologist A', text: 'Veblen explored the concept of "conspicuous consumption," where leisure activities are used to signal social status.', translation: 'ڤێبلێن تێگەهێ "مەسرەفکرنا بەرچاو" کۆلیت، کو تێدا چالاکییێن کەیفێ دهێنە بکارئینان بۆ پیشاندانا ئاستێ جڤاکی.' },
      { speaker: 'Sociologist B', text: 'The boundary between work and leisure is blurring in the digital age, as we are constantly connected to labor networks.', translation: 'سنوورێ د ناڤبەرا کار و کەیفێ دا د سەردەمێ دیجیتالی دا تەڵخ دبیت، چونکی ئەم بەردەوام د گرێدای تۆڕێن کاری نە.' },
      { speaker: 'Sociologist A', text: 'We must rediscover the value of "slow leisure" and non-commercial modes of social interaction.', translation: 'پێتڤییە ئەم دووبارە نرخێ "کەیفا هێدی" و شێوازێن نە-بازرگانی یێن پەیوەندییا جڤاکی بدۆزینەووە.' }
    ],
    vocabulary: [
      { word: 'Obligatory', translation: 'فەر / پابەندکەر' },
      { word: 'Commodified', translation: 'بازرگانی-کری / کراوە ب کاڵا' },
      { word: 'Conspicuous', translation: 'دیار / بەرچاو' },
      { word: 'Blurring', translation: 'تەڵخبوون / نادیاربوون' }
    ]
  },
  {
    id: 'c1-66',
    level: 'C1',
    title: 'End-of-Life Care Ethics',
    titleKurdish: 'ئەخلاقییا چاونێریکرنا دوماهییا ژیانێ',
    dialogue: [
      { speaker: 'Bioethicist', text: 'The ethics of end-of-life care involves balancing the duty to preserve life with the duty to respect patient autonomy.', translation: 'ئەخلاقییا چاونێریکرنا دوماهییا ژیانێ پێک دهێت ژ هاوسەنگکردنا ئەرکێ پاراستنا ژیانێ دگەل ئەرکێ رێزگرتن ل سەربەخۆیییا نەخۆشی.' },
      { speaker: 'Palliative Care Physician', text: 'We focus on alleviating suffering and improving quality of life, rather than simply extending it indefinitely.', translation: 'ئەم گرنگیێ ددەنە کێمکردنا ئێشێ و باشترکردنا کواڵێتی ژیانێ، ل شوینا هندێ کو ب تەنێ ژیانێ درێژ بکەین ب بێ-سەرووبەر.' },
      { speaker: 'Bioethicist', text: 'The distinction between "active euthanasia" and "withdrawing treatment" is a central point of legal and moral debate.', translation: 'جوداهییا د ناڤبەرا "کۆشتنا ب بەزەیی یا چالاک" و "کێشانەووا چارەسەریێ" خالا سەرەکییا گۆتۆبێژێن یاسایی و ئەخلاقی یە.' },
      { speaker: 'Palliative Care Physician', text: 'Advanced directives allow patients to state their preferences for care before they lose decision-making capacity.', translation: 'بریارێن پشەینە (Advanced directives) رێ ددەتە نەخۆشان کو ئارەزوویێن خۆ بۆ چارەسەریێ دیار کەن بەری کو شیانا بڕیاردانێ ژ دەست بدەن.' },
      { speaker: 'Bioethicist', text: 'Ensuring dignity and compassion during the dying process is a fundamental aspect of ethical healthcare.', translation: 'مسۆگەرکردنا کەرامەت و بەزەییێ د دەمێ پرۆسەیا مرنێ دا لایەنەکێ بنەڕەتی یێ ساخلەمییا ئەخلاقی یە.' }
    ],
    vocabulary: [
      { word: 'Alleviating', translation: 'کێمکردنەوە / سووککردن (بۆ ئێشێ)' },
      { word: 'Euthanasia', translation: 'مرنا ب بەزەیی' },
      { word: 'Directives', translation: 'بڕیارنامە / فەرمانەکان' },
      { word: 'Compassion', translation: 'بەزەیی / دڵسۆزی' }
    ]
  },
  {
    id: 'c1-67',
    level: 'C1',
    title: 'The Future of Food',
    titleKurdish: 'پاشەڕۆژا خوارنێ: گۆشتێ تاقیگەهی و جۆتیارییا ستونی',
    dialogue: [
      { speaker: 'Food Scientist', text: 'Lab-grown meat, or cultured meat, offers a way to produce animal protein without the environmental impact of industrial farming.', translation: 'گۆشتێ تاقیگەهی، یان نیشانکراو، رێیەکێ دابین دکەت بۆ بەرهەمهێنانا پڕۆتینێن ئاژەڵ بێی ئەو کارتێکرنا ژینگەیی یا کو جۆتیارییا پیشەسازی هەری.' },
      { speaker: 'Agriculturalist', text: 'Vertical farming can also produce fresh produce in urban centers, significantly reducing water usage and transport emissions.', translation: 'جۆتیارییا ستونی (Vertical farming) دشێت بەرهەمێ تازی د سەنتەرێن باژێڕان دا بەرهەم بینیت، و ب شێوەیەکێ بەرچاو بکارئینانا ئاڤێ و بەلاڤبوونا گازان د دەمێ گواستنێ دا کێم دکەت.' },
      { speaker: 'Food Scientist', text: 'These technologies could revolutionize food security in a world with a growing population and shrinking arable land.', translation: 'ئەو تەکنەلۆژیایە دشێن شۆڕشەکێ د ئاسایشا خوارنێ دا پەیدا کەن د جیهانەکێ دا کو هەژمارا دانیشتووان زیاد دبیت و ئەردێ جۆتیاریێ کێم دبیت.' },
      { speaker: 'Agriculturalist', text: 'The main hurdle is achieving cost parity with traditional food production and gaining consumer acceptance.', translation: 'ئاستەنگا سەرەکی گەهشتنا ب هەمان بهایێ بەرهەمهێنانا خوارنا کلاسیکی یە و بدەستڤەئینانا رازیبوونا مەسرەفکاران.' },
      { speaker: 'Food Scientist', text: 'Scaling up these systems requires significant infrastructure investment and regulatory approval.', translation: 'مەزنکردنا ڤان سیستەمان پێتڤی ب وەبەرھێنانەکا مەزن د ژێرخانێ دا و رێپێدانێن یاسایی هەری.' }
    ],
    vocabulary: [
      { word: 'Cultured', translation: 'نیشانکراو / چێکراو د تاقیگەهێ دا' },
      { word: 'Arable', translation: 'شیاوی جۆتیاریێ' },
      { word: 'Hurdle', translation: 'ئاستەنگ / کۆسپ' },
      { word: 'Parity', translation: 'هەمان ئاست / یەکسانی' }
    ]
  },
  {
    id: 'c1-68',
    level: 'C1',
    title: 'The Spotlight Effect',
    titleKurdish: 'کاریگەریا جیهانی (سپۆتلایت ئیفێکت)',
    dialogue: [
      { speaker: 'Psychologist A', text: 'The spotlight effect is the tendency for individuals to overestimate how much others notice their appearance or behavior.', translation: 'کاریگەریا جیهانی (Spotlight effect) ئەو حەزا تاکەکەسەکی یە بۆ زێدە-هەژمارتنا هندێ کا خەڵکێ دی چەند سەرنجا رەفتار یان شێوازێ وی ددەن.' },
      { speaker: 'Psychologist B', text: 'This is a form of egocentrism; we assume that since we are the center of our own world, we must be the center of everyone else’s.', translation: 'ئەڤە جۆرەکێ "خۆ-ناوەندخوازی" یە؛ ئەم وەسا هزر دکەین چونکی ئەم د سەنتەرێ جیهانا خۆ دا نە، پا پێتڤییە ئەم د سەنتەرێ جیهانا هەمووان بن.' },
      { speaker: 'Psychologist A', text: 'In reality, most people are far too focused on their own "spotlight" to notice the minor blunders of others.', translation: 'د راستی دا، زۆربەی خەڵکی گەلەک پتر مژویلی "رووناهییا" (سپۆتلایت) خۆ نە پتر ژ هندێ کو سەرنجا شکستیێن پچووک یێن کەسێن دی بدەن.' },
      { speaker: 'Psychologist B', text: 'This effect is a major driver of social anxiety, as people fear negative evaluation for things that others don’t even see.', translation: 'ئەڤ کاریگەرییە هاندەرەکێ سەرەکی یێ دوودلییا جڤاکی یە، چونکی خەڵک ژ هەڵسەنگاندنا نەرێنی دترسن بۆ تشتێن کو خەڵکێ دی تەنانەت نابینن ژی.' },
      { speaker: 'Psychologist A', text: 'Learning that we are less noticeable than we think is a powerful tool for liberation and social confidence.', translation: 'فێربوون ل سەر هندێ کو ئەم کێمتر بەرچاڤن ژ وێ چەندێ یا کو ئەم هزر دکەین، ئامرازەکێ ب هێزە بۆ رزگاربوون و باوەری بخۆبوونا جڤاکی.' }
    ],
    vocabulary: [
      { word: 'Tendency', translation: 'حەز / مەیل' },
      { word: 'Egocentrism', translation: 'خۆ-ناوەندخوازی / خۆویستی' },
      { word: 'Blunders', translation: 'شکست / هەڵە یێن پچووک' },
      { word: 'Noticeable', translation: 'بەرچاو / دیار' }
    ]
  },
  {
    id: 'c1-69',
    level: 'C1',
    title: 'Soil Health and Sustainability',
    titleKurdish: 'ساخلەمییا ئاخێ و بەردەوامی',
    dialogue: [
      { speaker: 'Soil Scientist', text: 'Soil is not just dirt; it is a complex living ecosystem that is fundamental to all life on land.', translation: 'ئاخ نەک تەنێ وەک بێستانە؛ بەلکو سیستەمەکێ ژینگەی یێ ئاڵۆز و زیندوویە کو بناغەیێ هەمی ژیانێ یە ل سەر عەردی.' },
      { speaker: 'Sustainable Farmer', text: 'Industrial agriculture has led to massive soil degradation through erosion and the loss of organic matter.', translation: 'جۆتیارییا پیشەسازی بوویە ئەگەرێ تێکچوونا مەزن یا ئاخێ ب رێکا خورانێ (ئیرۆژن) و ژ دەستدانا ماددەیێن ئۆرگانی.' },
      { speaker: 'Soil Scientist', text: 'Regenerative practices like no-till farming and cover cropping aim to rebuild soil structure and biodiversity.', translation: 'رێکارێن "نووژەنکەر" وەک جۆتیارییا بێ-کێڵان و چاندنا داپۆشەر ئارمانجا وان ئاڤاکرنەووا پێکهاتەیێ ئاخێ و جۆراوجۆرییا بایۆلۆژی یە.' },
      { speaker: 'Sustainable Farmer', text: 'Healthy soil also acts as a massive carbon sink, helping to mitigate climate change while increasing crop yields.', translation: 'ئاخا ساخلەم هەروەسا وەک کۆگەهەکا مەزن یا کاربۆنێ کار دکەت، و هاریکاریێ دکەت د کێمکردنا گوهۆڕینا سەقای دا د دەمەکێ دا کو بەرهەمێ جۆتیاریێ زیاد دکەت.' },
      { speaker: 'Soil Scientist', text: 'We must treat soil as a non-renewable resource that requires careful stewardship for future generations.', translation: 'پێتڤییە ئەم سەرەدەریێ دگەل ئاخێ بکەین وەکی ژێدەرەکێ نە-نووبکەر کو پێتڤی ب چاڤدێریەکا هویر هەری بۆ نەوەیێن داهاتی.' }
    ],
    vocabulary: [
      { word: 'Degradation', translation: 'تێکچوون / داکەفتن' },
      { word: 'Regenerative', translation: 'نووژەنکەر' },
      { word: 'Yields', translation: 'بەرهەم / قازانج' },
      { word: 'Stewardship', translation: 'چاڤدێری / بەرپرسیاریەتییا پاراستنێ' }
    ]
  },
  {
    id: 'c1-70',
    level: 'C1',
    title: 'Non-State Actors in IR',
    titleKurdish: 'لائەنێن نە-دەولەتی د پەیوەندییێن نێڤدەولەتی دا',
    dialogue: [
      { speaker: 'Diplomat', text: 'While states remain the primary actors, non-state actors like NGOs and multinational corporations (MNCs) are increasingly influential.', translation: 'د دەمەکێ دا کە دەولەت لایەنێ سەرەکی نە، لایەنێن نە-دەولەتی وەک رێکخراوێن نە-حکومی (NGOs) و کۆمپانیایێن نێڤدەولەتی (MNCs) ب شێوەیەکێ زێدە کارتێکەرن.' },
      { speaker: 'International Journalist', text: 'Corporations like Apple or Amazon now possess economic resources greater than those of many sovereign states.', translation: 'کۆمپانیایێن وەک ئەپل یان ئەمەزۆن نوکە خودان ژێدەرێن ئابووری نە کو گەورەترن ژ یێن زۆر دەولەتێن خودان سەروەری.' },
      { speaker: 'Diplomat', text: 'NGOs play a crucial role in advocacy and providing humanitarian aid where states are unwilling or unable to act.', translation: 'رێکخراوێن نە-حکومی دەورەکێ فەر دبینن د بەرگریێ و دابینکردنا هاریکارییێن مرۆڤایەتی دا ل ئەو جهان یێن کو دەولەت تێدا ناخوازن یان نەشێن کار بکەن.' },
      { speaker: 'International Journalist', text: 'This leads to a "diffusion of power," where the hierarchy of the international system is becoming more horizontal.', translation: 'ئەڤە دبیتە ئەگەرێ "بەلاڤبوونا هێزێ"، کو تێدا پلەبەندییا سیستەمێ نێڤدەولەتی بەرەڤ ئاستەکێ ئاسۆیی (هوریزۆنتاڵ) دچیت.' },
      { speaker: 'Diplomat', text: 'However, the lack of formal accountability for non-state actors raises concerns about democratic legitimacy.', translation: 'لێ، نەبوونا لێپرسینەووا فەرمی بۆ لایەنێن نە-دەولەتی مەترسییێن دەربارەی رەوایەتییا دیمۆکراسی پەیدا دکەت.' }
    ],
    vocabulary: [
      { word: 'Influential', translation: 'کارتێکەر' },
      { word: 'Advocacy', translation: 'بەرگری / پشتەڤانی' },
      { word: 'Horizontal', translation: 'ئاسۆیی' },
      { word: 'Legitimacy', translation: 'رەوایەتی / یاساییبوون' }
    ]
  },
  {
    id: 'c1-71',
    level: 'C1',
    title: 'The Neurobiology of Addiction',
    titleKurdish: 'دەماری-بایۆلۆژییا ئالوودەبوونێ',
    dialogue: [
      { speaker: 'Neurobiologist', text: 'Addiction is fundamentally a disorder of the brain\'s reward system, primarily involving the neurotransmitter dopamine.', translation: 'ئالوودەبوون (Addiction) ب بنەڕەت تێکچوونەکا سیستەمێ خەلاتکردنا مێشکی یە، کو ب شێوەیەکێ سەرەکی ماددەیا گواستنەووا دەماری یا "دۆپامین" تێدا بەشدارە.' },
      { speaker: 'Clinical Psychologist', text: 'Drugs of abuse hijack this system, producing a massive surge of dopamine that reinforces drug-seeking behavior.', translation: 'ماددەیێن هۆشبەر دەست بسەر ڤی سیستەمی دا دگرن، و بڕەکێ زۆر یێ دۆپامینی بەرهەم دئینن کو رەفتارا گەڕیان ل دویف ماددەیێن هۆشبەر ب هێز دکەت.' },
      { speaker: 'Neurobiologist', text: 'Over time, the brain adapts by reducing the number of dopamine receptors, leading to tolerance and a diminished ability to feel pleasure from natural rewards.', translation: 'ب تێپەڕبوونا دەمی، مێشک خۆ دگونجینیت ب رێکا کێمکردنا هەژمارا وەرگرێن دۆپامینی، کو ئەڤە دبیتە ئەگەرێ "بەرگەهگرتن" (Tolerance) و کێمبوونا شیانا هەستکردن ب کەیفێ ژ خەلاتێن سرۆشتی.' },
      { speaker: 'Clinical Psychologist', text: 'This is why recovery is so difficult; the brain requires significant time to recalibrate its chemistry.', translation: 'هەر ژ بەر ڤێ چەندێ یە باشتربوونا (Recovery) زۆر ب زەحمەتە؛ مێشک پێتڤی ب دەمەکێ درێژ هەری بۆ دووبارە رێکخستنەووا کیمیایا خۆ.' },
      { speaker: 'Neurobiologist', text: 'Understanding addiction as a chronic brain disease is crucial for reducing stigma and improving treatment outcomes.', translation: 'تێگەهشتن ل سەر ئالوودەبوونێ وەک نەخۆشییەکا درێژخایەن یا مێشکی کلیلە بۆ کێمکردنا "لکەیێ" (Stigma) و باشترکردنا ئەنجامێن چارەسەریێ.' }
    ],
    vocabulary: [
      { word: 'Neurotransmitter', translation: 'گواستنەووە یا دەماری' },
      { word: 'Hijack', translation: 'دەست-بەسەر داگرتن / ڕفاندن' },
      { word: 'Tolerance', translation: 'بەرگەهگرتن / تەحەمول' },
      { word: 'Recalibrate', translation: 'دووبارە رێکخستنەووە / کیڵ-کردنەوە' }
    ]
  },
  {
    id: 'c1-72',
    level: 'C1',
    title: 'Cosmopolitanism vs. Nationalism',
    titleKurdish: 'جیهان-نیشتیمانی (کۆسمۆپۆلیتانیزم) بەرامبەر نەتەوەخوازی',
    dialogue: [
      { speaker: 'Philosopher A', text: 'Cosmopolitanism suggests that all human beings, regardless of their political affiliation, are citizens of a single community.', translation: 'جیهان-نیشتیمانی (Cosmopolitanism) پێشنیار دکەت کو هەمی مرۆڤ، بێ گویدانە سەر ب کێ ڤە بن، هاووەلاتیێن جڤاکەکێ تاک و تەنێ نە.' },
      { speaker: 'Philosopher B', text: 'Nationalism, on the other hand, argues that our primary moral and political obligations are toward our own nation-state.', translation: 'بەروڤاژی، نەتەوەخوازی (Nationalism) دبێژیت کو ئەرکێن مە یێن ئەخلاقی و سیاسی یێن سەرەکی بەرەڤ دەولەت-نەتەوەیا مە نە.' },
      { speaker: 'Philosopher A', text: 'A cosmopolitan perspective is necessary to address global challenges like climate change and economic inequality.', translation: 'دیتنەکا جیهان-گری پێتڤییە بۆ چارەسەرکرنا تەحەدایێن جیهانی وەک گوهۆڕینا سەقای و نە-یەکسانییا ئابووری.' },
      { speaker: 'Philosopher B', text: 'But nationalism provides a sense of identity, solidarity, and belonging that is essential for social cohesion.', translation: 'لێ نەتەوەخوازی هەستێ ناسنامە، پشتەڤانی، و سەر ب شوێنێک بوونێ دابین دکەت کو فەرە بۆ یەکگرتوویییا جڤاکی.' },
      { speaker: 'Philosopher A', text: 'The tension between these two ideals shapes much of contemporary geopolitics and human rights discourse.', translation: 'گرژییا د ناڤبەرا ڤان هەر دوو جۆران دا زۆربەی جیۆپۆلیتیکا سەردەم و گۆتارا مافێن مرۆڤی درۆست دکەت.' }
    ],
    vocabulary: [
      { word: 'Affiliation', translation: 'پەیوەندی / سەر ب لایەنەکی بوون' },
      { word: 'Solidarity', translation: 'پشتەڤانی / هاوپشتی' },
      { word: 'Cohesion', translation: 'یەکگرتوویی / پێکەوە-بەستراوی' },
      { word: 'Discourse', translation: 'گۆتار / ئاخافتنا زانستی' }
    ]
  },
  {
    id: 'c1-73',
    level: 'C1',
    title: 'Plastic Pollution and Marine Life',
    titleKurdish: 'پیسبوونا پلاستیکی و ژیانا دەریایی',
    dialogue: [
      { speaker: 'Marine Biologist', text: 'Plastic pollution has reached catastrophic levels, with microplastics now found in the deepest parts of the ocean.', translation: 'پیسبوونا پلاستیکی گەهشتییە ئاستەکێ کارەساتبار، و نوکە "مایکرۆپلاستیک" د کویرترین خالێن زەریایان دا تێنە دیتن.' },
      { speaker: 'Oceanographer', text: 'These tiny particles are ingested by marine life, entering the food chain and potentially accumulating in humans.', translation: 'ئەو پارچە گەلەک پچووکە ژ لایێ زیندەوەرێن دەریایی ڤە دهێنە مێژتن، و دکەڤنە ناڤ زنجیرەیا خوارنێ و رەنگە د لاشێ مرۆڤی دا کۆم ببن.' },
      { speaker: 'Marine Biologist', text: 'Larger plastic debris causes entanglement and ingestion issues for turtles, whales, and seabirds.', translation: 'پاشماوەیێن پلاستیکی یێن مەزنتر دببنە ئەگەرێ ئاڵۆزی و قوتدانێ بۆ کیسەڵ، نەهەنگ، و تەیورێن دەریایی.' },
      { speaker: 'Oceanographer', text: 'Addressing this crisis requires a fundamental shift away from single-use plastics and toward a circular economy.', translation: 'چارەسەرکرنا ڤێ قەیرانێ پێتڤی ب گوهۆڕینەکا بنەڕەتی هەری دوویر ژ پلاستیکێن ئێک-جار بەکارهێنان و بەرەڤ ئابوورییەکا خولانەووەیی (Circular economy).' },
      { speaker: 'Marine Biologist', text: 'International cooperation is essential to manage the vast "garbage patches" circulating in the open ocean.', translation: 'هەماهەنگییا نێڤدەولەتی فەرە بۆ کۆنتڕۆڵکردنا ئەو "پارچە گەندەڵییێن" مەزن یێن کو د ناڤ زەریایێن ئازاد دا دزڤڕن.' }
    ],
    vocabulary: [
      { word: 'Catastrophic', translation: 'کارەساتبار' },
      { word: 'Ingested', translation: 'قوتدان / خوارن' },
      { word: 'Debris', translation: 'پاشماوە / داروپەردوو' },
      { word: 'Entanglement', translation: 'ئاڵۆزبوون / تێوەگلان' }
    ]
  },
  {
    id: 'c1-74',
    level: 'C1',
    title: 'Nudge Theory and Choice',
    titleKurdish: 'تیۆرییا پالدانێ (نەج تیۆری) و هەلبژاردن',
    dialogue: [
      { speaker: 'Behavioral Economist A', text: 'Nudge theory suggests that subtle changes in how choices are presented can significantly influence human behavior.', translation: 'تیۆرییا پالدانێ (Nudge theory) پێشنیار دکەت کو گوهۆڕینێن هویر د شێوازێ ناڤ-نیشاندانا هەلبژاردنان دا دشێن ب شێوەیەکێ بەرچاو کارتێکرنێ بکەنە سەر رەفتارا مرۆڤی.' },
      { speaker: 'Behavioral Economist B', text: 'This "choice architecture" respects individual freedom while gently steering people toward better outcomes, like saving for retirement.', translation: 'ئەڤ "تەلارسازییا هەلبژاردنێ" رێزێ ل ئازادییا تاکەکەسی دگریت د دەمەکێ دا کو ب نەرمی خەڵکی ئاراستە دکەت بەرەڤ ئەنجامێن باشتر، وەک پاشکەوتکرنا پارەی بۆ خانەنشینیێ.' },
      { speaker: 'Behavioral Economist A', text: 'For example, making organ donation the "default" option significantly increases participation rates.', translation: 'بۆ نموونە، دانانا بەخشینا ئەندامێن لاشەی وەک بژاردەکا "بەرۆک" (Default) ب شێوەیەکێ مەزن رێژەیا بەشداریێ زێدە دکەت.' },
      { speaker: 'Behavioral Economist B', text: 'Critics argue that nudging can be manipulative or paternalistic if overseen by the government.', translation: 'رەخنەگر دبێژن کو پالدان دشێت ببیتە دەستکاریکردن یان "باوکانە" ئەگەر ژ لایێ حکومەتێ ڤە چاڤدێری ل سەر هەبیت.' },
      { speaker: 'Behavioral Economist A', text: 'The goal is "libertarian paternalism"—designing environments that promote welfare without mandates.', translation: 'ئارمانج ئەوە "باوکانەیا لیبێرتی" بیت - دیزاینکرنا ژینگەیەکێ کو باشییا گشتی پەرە پێ بدەت بێی فەرمانێن توند.' }
    ],
    vocabulary: [
      { word: 'Architecture', translation: 'تەلارسازی / پێکهاتە' },
      { word: 'Steering', translation: 'ئاراستەکردن / ئاژۆتن' },
      { word: 'Manipulative', translation: 'فێڵباز / دەستکاریکەر' },
      { word: 'Mandates', translation: 'فەرمان / راسپاردەکان' }
    ]
  },
  {
    id: 'c1-75',
    level: 'C1',
    title: 'Sociology of Health',
    titleKurdish: 'کۆمەڵناسییا ساخلەمی و نەخۆشییێ',
    dialogue: [
      { speaker: 'Sociologist of Medicine', text: 'Sociologists argue that health and illness are not just biological states, but social constructions.', translation: 'کۆمەڵناس دبێژن کو ساخلەمی و نەخۆشی نەک تەنێ بارودۆخێن بایۆلۆژین، بەلکو بنیاتێن جڤاکین.' },
      { speaker: 'Medical Student', text: 'Wht do you mean? Surely a virus is a biological reality regardless of social context.', translation: 'رامانا تە چییە؟ بێگۆمان ڤایرۆس راستییەکا بایۆلۆژی یە بێ گویدانە ژینگەیێ جڤاکی.' },
      { speaker: 'Sociologist of Medicine', text: 'The virus is biological, but how we label, experience, and treat the "disease" is shaped by social norms and power structures.', translation: 'ڤایرۆس بایۆلۆژی یە، لێ چەوانیا ئەم ناڤ لێ دێخین، هەست پێ دکەین، و سەرەدەریێ دگەل "نەخۆشییێ" دکەین، ژ لایێ نەریتێن جڤاکی و پەیکەرێن دەستهەلاتێ تێ درۆستکردن.' },
      { speaker: 'Medical Student', text: 'So, the "sick role" is a socially defined set of expectations and responsibilities.', translation: 'ئانکو، "رۆڵێ نەخۆشی" کۆمەکا دیارکری یا وێنەکێش و بەرپرسیاریەتیێن جڤاکی یە.' },
      { speaker: 'Sociologist of Medicine', text: 'Precisely. Access to healthcare, the stigma associated with certain conditions, and the definition of what constitutes "normal" are all social factors.', translation: 'رێک وەسا. دەستگەهشتن ب ساخلەمیێ، ئەو لکەیا ب هەندەک بارودۆخان ڤە گرێدای، و پێناسەیا تشتێ "ئاسایی" هەمی فاکتەرێن جڤاکین.' }
    ],
    vocabulary: [
      { word: 'Constructions', translation: 'بنیات / درۆستکراوەکان' },
      { word: 'Context', translation: 'بارودۆخ / دەق / ژینگە' },
      { word: 'Norms', translation: 'نەریت / رێسا جڤاکییەکان' },
      { word: 'Constitutes', translation: 'پێکدێخیت / بنەڕەت درۆست دکەت' }
    ]
  },
  {
    id: 'c1-76',
    level: 'C1',
    title: 'Xenotransplantation Ethics',
    titleKurdish: 'ئەخلاقییا گواستنەووا ئەندامان د ناڤبەرا جۆرەکان دا',
    dialogue: [
      { speaker: 'Bioethicist A', text: 'Xenotransplantation—the transplanting of animal organs into humans—could solve the global organ shortage.', translation: 'گواستنەووا ئەندامان د ناڤبەرا جۆرەکان دا (Xenotransplantation) - کو گواستنەووا ئەندامێن ئاژەلانە بۆ مرۆڤان - دشێت کێشەیا جیهانی یا کێمییا ئەندامان چارەسەر بکەت.' },
      { speaker: 'Bioethicist B', text: 'However, it raises profound ethical concerns regarding animal welfare and the potential for new zoonotic diseases to emerge.', translation: 'لێ، ئەڤە گۆمانێن ئەخلاقی یێن کویر دەربارەی بەرژەوەندییا ئاژەلان و مەترسییا سەرهەلدانا نەخۆشییێن نوی یێن زۆنۆتیک پەیدا دکەت.' },
      { speaker: 'Bioethicist A', text: 'Genetically modifying pigs to be more compatible with the human immune system is the current focus of research.', translation: 'گوهۆڕینا جیناتییا بەرازان بۆ هندێ کو گونجاوتر بن دگەل سیستەمێ بەرگرییا مرۆڤی، ئارمانجا نوکە یا ڤەکۆڵینانە.' },
      { speaker: 'Bioethicist B', text: 'We must also consider the psychological impact on patients and the social perception of "human-animal hybrids."', translation: 'پێتڤییە ئەم هەروەسا هەژمارا کارتێکرنا دەروونی ل سەر نەخۆشان و تێگەهشتنا جڤاکی بۆ "تێکەڵێن مرۆڤ و ئاژەڵ" بکەین.' },
      { speaker: 'Bioethicist A', text: 'The potential to save thousands of lives must be weighed against these complex risks and philosophical questions.', translation: 'پێتڤییە شیانا پاراستنا ب هەزاران ژیانان ل هەمبەر ڤان مەترسییە ئاڵۆزان و پرسیارێن فەلسەفی بهێتە هەڵسەنگاندن.' }
    ],
    vocabulary: [
      { word: 'Shortage', translation: 'کورتی / کێمی' },
      { word: 'Profound', translation: 'کویر / بنەڕەتی' },
      { word: 'Compatible', translation: 'گونجاو / گونجای' },
      { word: 'Hybrids', translation: 'تێکەڵ / جۆرێن تێکەوڵ بووی' }
    ]
  },
  {
    id: 'c1-77',
    level: 'C1',
    title: 'The Future of Transportation',
    titleKurdish: 'پاشەڕۆژا گواستنەووەیێ',
    dialogue: [
      { speaker: 'Urban Planner', text: 'The concept of the "Hyperloop" promises near-supersonic travel through low-pressure tubes.', translation: 'چەمکا "Hyperloop" بەڵێنا گەشتەکا نێزیک د خێراییا دەنگی دا ددەت ب رێکا بۆرییێن فشارا نزم.' },
      { speaker: 'Tech Journalist', text: 'Meanwhile, "flying taxis" or eVTOL aircraft are being developed to reduce congestion in major urban centers.', translation: 'د هەمان دەم دا، "تەکسیێن فڕینەر" یان فڕۆکەیێن eVTOL تێنە گەشەپێدان بۆ کێمکردنا جەنجەڵیێ د سەنتەرێن مەزن یێن باژێڕان دا.' },
      { speaker: 'Urban Planner', text: 'While exciting, these technologies face immense challenges in terms of infrastructure costs and safety regulations.', translation: 'د دەمەکێ دا کو سەرنجڕاکێشن، ئەڤ تەکنەلۆژیایە رووبەڕووی ئاستەنگێن مەزن دبن ژ لایێ تێچوونا ژێرخانێ و یاسایێن سەلامەتیێ ڤە.' },
      { speaker: 'Tech Journalist', text: 'Autonomous vehicles will also fundamentally reshape how we think about car ownership and urban design.', translation: 'ئۆتۆمبێلێن سەربەخۆ (Autonomous) ژی ب شێوەیەکێ بنەڕەتی دێ تێگەهشتنا مە بۆ خاوەنداریەتییا ئۆتۆمبێلێ و دیزاینا باژێڕی گوهۆڕن.' },
      { speaker: 'Urban Planner', text: 'The ultimate goal is an integrated, multi-modal system that prioritizes efficiency and sustainability over individual car use.', translation: 'ئارمانجا سەرەکی سیستەمەکێ یەکگرتوویێ جۆراوجۆرە کو گرنگیێ بدەتە کارامەیی و بەردەوامیێ ل سەر بکارئینانا ئۆتۆمبێلا تاکەکەسی.' }
    ],
    vocabulary: [
      { word: 'Supersonic', translation: 'خێراتر ژ دەنگی' },
      { word: 'Congestion', translation: 'جەنجەڵی / قەرەباڵغی' },
      { word: 'Autonomous', translation: 'سەربەخۆ / خود-ئاژۆت' },
      { word: 'Sustainability', translation: 'بەردەوامی' }
    ]
  },
  {
    id: 'c1-78',
    level: 'C1',
    title: 'The Bystander Effect',
    titleKurdish: 'کاریگەریا تەمەشەوانان (بایستۆندەر ئیفێکت)',
    dialogue: [
      { speaker: 'Social Psychologist', text: 'The bystander effect occurs when individuals are less likely to offer help in an emergency situation if other people are present.', translation: 'کاریگەریا تەمەشەوانان (Bystander effect) دەمێ روو ددەت کو تاکەکەس کێمتر ئامادە بن هاریکارییێ د بارودۆخەکێ نائاسایی دا بکەن ئەگەر خەڵکێن دی ل وێرێ هەبن.' },
      { speaker: 'Student', text: 'Is this due to a "diffusion of responsibility"? Everyone assumes that someone else will take action.', translation: 'ئەرێ ئەڤە ژ بەر "بەلاڤبوونا بەرپرسیاریەتیێ" یە؟ هەموو کەس وەسا هزر دکەن کو کەسەکێ دی دێ کارەکی کەت.' },
      { speaker: 'Social Psychologist', text: 'Exactly. There is also "pluralistic ignorance," where people look to others to gauge whether the situation is actually an emergency.', translation: 'رێک وەسا. هەروەسا "نەزانییا کۆمەڵایەتی" ژی هەیە، کو تێدا خەڵک تەماشەی یەکدی دکەن بۆ هندێ کا بارودۆخ ب راستی یێ نائاسایی یە یان نە.' },
      { speaker: 'Student', text: 'The famous case of Kitty Genovese in 1964 is often cited as a classic example of this phenomenon.', translation: 'کەیسا ناودارا کیتی جینۆڤێسی د ساڵا ١٩٦٤ دا زۆر جاران وەک نموونەیەکا کلاسیکی یا ڤێ دیاردێ دهێتە باسکرن.' },
      { speaker: 'Social Psychologist', text: 'Understanding these social pressures can help individuals overcome their hesitation and intervene during critical moments.', translation: 'تێگەهشتن د ڤان فشارێن جڤاکی دا دشێت هاریکارییا تاکەکەس بکەت کو دوودلییا خۆ بشکێنیت و د دەمێن گرنگ دا دەستێوەردانێ بکەت.' }
    ],
    vocabulary: [
      { word: 'Emergency', translation: 'بارودۆخێ نائاسایی / هەوار' },
      { word: 'Ignorance', translation: 'نەزانی / بێ-ئاگایی' },
      { word: 'Gauge', translation: 'پێوانە-کردن / هەڵسەنگاندن' },
      { word: 'Hesitation', translation: 'دوودلی / سستی کردن' }
    ]
  },
  {
    id: 'c1-79',
    level: 'C1',
    title: 'Mycelium and Soil Health',
    titleKurdish: 'مایسیلیۆم (تۆڕا کارگیان) و ساخلەمییا ئاخێ',
    dialogue: [
      { speaker: 'Mycologist', text: 'Mycelium is the underground network of fungal threads that forms the "internet" of the forest.', translation: 'مایسیلیۆم (Mycelium) ئەو تۆڕا ل ژێر عەردی یا گونجێن کارگیانە کو "ئینتەرنێت"ا دارستانێ پێک دئینیت.' },
      { speaker: 'Environmental Scientist', text: 'It plays a critical role in nutrient cycling and decomposing organic matter, turning wastes back into soil.', translation: 'ئەو دەورەکێ فەر دبینیت د خولا ماددەیێن خوارنێ دا و شیکردنەووا ماددەیێن ئۆرگانی، و پاشماوەیان زڤڕینیتەووە بۆ ناو ئاخێ.' },
      { speaker: 'Mycologist', text: 'Mycelium can also be used for "mycoremediation," using fungi to break down toxins and heavy metals in contaminated soil.', translation: 'مایسیلیۆم دشێت بهێتە بکارئینان بۆ "چارەسەرییا کارگیاتی"، ب رێکا بکارئینانا کارگیان بۆ شکاندنا ژەهر و کانزایێن گران د ناڤ ئاخا پیسبووی دا.' },
      { speaker: 'Environmental Scientist', text: 'Furthermore, it creates symbiotic relationships with plant roots, helping them absorb water and minerals.', translation: 'زێدەباری ڤێ چەندێ، ئەو پەیوەندییێن هەڤپشک (Symbiotic) دگەل رەهێن رووەکان درۆست دکەت، و هاریکارییا وان دکەت بۆ مێژتنا ئاڤ و کانزایان.' },
      { speaker: 'Mycologist', text: 'Protecting the fungal biodiversity in our soil is essential for carbon sequestration and food security.', translation: 'پاراستنا جۆراوجۆرییا بایۆلۆژی یا کارگیان د ناڤ ئاخا مە دا فەرە بۆ کۆمکردنا کاربۆنێ و ئاسایشا خوارنێ.' }
    ],
    vocabulary: [
      { word: 'Decomposing', translation: 'شیکردنەوە / لەناوبردن (بۆ ماددەیێن ئۆرگانی)' },
      { word: 'Contaminated', translation: 'پیسبووی / هەوکردوو' },
      { word: 'Symbiotic', translation: 'هەڤپشک / ژیان ب هەڤڕا' },
      { word: 'Sequestration', translation: 'کۆمکردن / عەمبارکردن (بۆ کاربۆن)' }
    ]
  },
  {
    id: 'c1-80',
    level: 'C1',
    title: 'The ICC and War Crimes',
    titleKurdish: 'دادگەها تاوانان یا نێڤدەولەتی (ICC) و تاوانێن جەنگی',
    dialogue: [
      { speaker: 'Human Rights Lawyer', text: 'The International Criminal Court (ICC) is a court of last resort for the prosecution of the most serious international crimes.', translation: 'دادگەها تاوانان یا نێڤدەولەتی (ICC) دادگەها دوماهییێ یە بۆ سزادانا مەزنترین تاوانێن نێڤدەولەتی.' },
      { speaker: 'Political Analyst', text: 'Its jurisdiction includes genocide, crimes against humanity, war crimes, and the crime of aggression.', translation: 'دەستهەلاتا وێ جینۆساید، تاوانێن دژی مرۆڤایەتی، تاوانێن جەنگی، و تاوانا دەستدرێژیێ دگریتە خۆ.' },
      { speaker: 'Human Rights Lawyer', text: 'The ICC aims to end impunity for leaders who commit atrocities, regardless of their rank or position.', translation: 'ئارمانجا ICC ئەوە کو دوماهییێ بینیتە "دەربازبوون ژ سزای" بۆ ئەو سەرکردەیێن کو تاوانێن مەزن ئەنجام ددەن، بێ گویدانە پلە و پایەیا وان.' },
      { speaker: 'Political Analyst', text: 'However, the court faces challenges from powerful nations that refuse to recognize its authority or ratify its treaty.', translation: 'لێ، دادگەە رووبەڕووی ئاستەنگان دبیت ژ لایێ وەلاتێن ب هێز ڤە ئەوێن کو وێ رەت دکەن دان ب دەستهەلاتا وێ دا بنێن یان پەیماننامەیا وێ پەسند بکەن.' },
      { speaker: 'Human Rights Lawyer', text: 'Despite these difficulties, the ICC remains a vital symbol of the global quest for international justice and accountability.', translation: 'دگەل ڤان هەمی زەحمەتییان، ICC هێشتا هێمایەکێ زیندوویێ گەڕیانێ یە ل دویف دادپەروەرییا نێڤدەولەتی و لێپرسینەووەیێ.' }
    ],
    vocabulary: [
      { word: 'Prosecution', translation: 'دادگاییکردن / سزادان' },
      { word: 'Jurisdiction', translation: 'دەستهەلاتا دادوەری' },
      { word: 'Impunity', translation: 'دەربازبوون ژ سزا' },
      { word: 'Atrocities', translation: 'تاوانێن دڕندانە / کارەسات' }
    ]
  },
  {
    id: 'c1-81',
    level: 'C1',
    title: 'Creative Thinking and Flow',
    titleKurdish: 'هزرکرنا داهێنەرانە و بارێ لێشاوێ (فلۆو ستەیت)',
    dialogue: [
      { speaker: 'Neurobiologist', text: 'Creative thinking involves the dynamic interaction between the default mode network and the executive control network of the brain.', translation: 'هزرکرنا داهێنەرانە (Creative thinking) پێک دهێت ژ کارلێککرنا چالاک د ناڤبەرا تۆڕا بارێ بنەڕەتی (default mode) و تۆڕا کۆنتڕۆڵا جێبەجێکار یا مێشکی.' },
      { speaker: 'Psychologist', text: 'This often peaks during a "flow state," where an individual is fully immersed in a task and loses their sense of time.', translation: 'ئەڤە زۆر جاران د "بارێ لێشاوێ" (Flow state) دا دگەهیتە لوتکەیێ، کو تێدا تاکەکەس ب تەواوی د ناڤ کارەکی دا نوقم دبیت و هەستێ خۆ ب دەمی ژ دەست ددەت.' },
      { speaker: 'Neurobiologist', text: 'In flow, the prefrontal cortex—the part of the brain responsible for self-criticism—temporarily deactivates.', translation: 'د بارێ لێشاوێ دا، توێکلا پێش-ناڤچاوان (prefrontal cortex) - ئەو پشکە یا مێشکی یا کو بەرپرسیارە ژ رەخنەگرتن ژ خۆ - ب شێوەیەکێ کاتی چالاکییا وێ دکەڤیت.' },
      { speaker: 'Psychologist', text: 'This allows for a state of "effortless effort," where complex skills are executed with peak efficiency.', translation: 'ئەڤە رێ ددەتە بارودۆخێ "هەوڵدانا بێ-هەوڵ"، کو تێدا کارامەییێن ئاڵۆز ب کارامەییەکا لوتکە تێنە ئەنجامدان.' },
      { speaker: 'Neurobiologist', text: 'Cultivating environments that encourage flow is essential for fostering innovation in science and the arts.', translation: 'درۆستکردنا ژینگەیێن کو هانی بارێ لێشاوێ بدەن فەرە بۆ گەشەپێدانا داهێنانێ د زانست و هونەر دا.' }
    ],
    vocabulary: [
      { word: 'Immersed', translation: 'نوقم-بووی / مژوویلی تەواو' },
      { word: 'Deactivates', translation: 'لەکار-کەفتن / ناچالاک بوون' },
      { word: 'Innovation', translation: 'داهێنان / نووگەری' },
      { word: 'Efficiency', translation: 'کارامەیی / ئەنجامدانا باش' }
    ]
  },
  {
    id: 'c1-82',
    level: 'C1',
    title: 'Rawls and the Theory of Justice',
    titleKurdish: 'ڕۆڵز و تیۆرییا دادپەروەریێ',
    dialogue: [
      { speaker: 'Political Philosopher A', text: 'John Rawls proposed the "veil of ignorance" as a way to determine the principles of a just society.', translation: 'جۆن ڕۆڵز "پەردەیا نەزانیێ" (Veil of ignorance) وەک رێیەک پێشنیار کر بۆ دیارکرنا بنەمایێن جڤاکەکێ دادپەروەر.' },
      { speaker: 'Political Philosopher B', text: 'The idea is that if you don\'t know your social status, wealth, or talents, you would choose rules that protect the least advantaged.', translation: 'هزرا وێ ئەوە کو ئەگەر تو پۆستێ خۆ یێ جڤاکی، سامان، یان بەهرەیێن خۆ نەزانی، تو دێ ئەو یاسایان هەلبژێری یێن کو پاراستنا کەسێن هەرە هەژار دکەن.' },
      { speaker: 'Political Philosopher A', text: 'This leads to his "difference principle," which states that inequalities are only justified if they benefit the worst-off members of society.', translation: 'ئەڤە بەرەڤ "پرەنسیپێ جوداهیێ" دچیت، کو دبێژیت نە-یەکسانی تەنێ دەمێ رەوایە ئەگەر مفا بگەهیتە هەژارترین ئەندامێن جڤاکی.' },
      { speaker: 'Political Philosopher B', text: 'Critics argue that this approach ignores the importance of individual effort and property rights.', translation: 'رەخنەگر دبێژن کو ئەڤ شێوازە گرنگییا هەوڵدانا تاکەکەسی و مافێن خاوەنداریەتیێ پشت-گوێ دهاڤێژیت.' },
      { speaker: 'Political Philosopher A', text: 'Nonetheless, Rawls redefined contemporary liberal thought by placing fairness at the heart of political morality.', translation: 'تەنانەت دگەل ڤێ چەندێ ژی، ڕۆڵز هزرکرنا لیبراڵ یا سەردەم دووبارە پێناسە کرەووە ب رێکا دانانا دادپەروەریێ د دڵێ ئەخلاقییا سیاسی دا.' }
    ],
    vocabulary: [
      { word: 'Veil', translation: 'پەردە / ڕووبەند' },
      { word: 'Advantaged', translation: 'کەسێن خودان دەرفەت / سەرکەفتی' },
      { word: 'Justified', translation: 'رەوا / ب-بەڵگە کراو' },
      { word: 'Liberal', translation: 'لیبراڵ / ئازادیخواز' }
    ]
  },
  {
    id: 'c1-83',
    level: 'C1',
    title: 'Desertification and Food Security',
    titleKurdish: 'بەرەڤ-چۆڵبوون (دێزێرتیفیکەیشن) و ئاسایشا خوارنێ',
    dialogue: [
      { speaker: 'Environmental Scientist', text: 'Desertification is the process by which fertile land becomes desert, typically as a result of drought, deforestation, or inappropriate agriculture.', translation: 'بەرەڤ-چۆڵبوون (Desertification) ئەو پرۆسەیە کو تێدا ئەردێ ب-بەرەک بیتە چۆڵ (بیابان)، ب گشتی وەک ئەنجامێ ووشکەسالی، ژناڤبرنا دارستانان، یان جۆتیارییا نەگۆنجای.' },
      { speaker: 'Agricultural Economist', text: 'This poses a direct threat to global food security, as millions of hectares of arable land are lost every year.', translation: 'ئەڤە مەترسییەکا راستەوخۆ ل سەر ئاسایشا خوارنێ یا جیهانی پەیدا دکەت، چونکی ب ملیۆنان هێکتار ژ ئەردێ جۆتیاریێ سالانە ژ دەست دچن.' },
      { speaker: 'Environmental Scientist', text: 'Climate change is accelerating this trend, leading to mass migrations and resource-based conflicts in vulnerable regions.', translation: 'گوهۆڕینا سەقای ئەڤ ئاراستەیە خێراتر دکەت، و دبیتە ئەگەرێ کۆچەرییا ب کۆم و شەڕێن ل سەر ژێدەران د ناوچەیێن هەستیار دا.' },
      { speaker: 'Agricultural Economist', text: 'Implementing sustainable land management techniques is crucial to reversing this degradation.', translation: 'جێبەجێکردنا تەکنیکێن رێکخستنا ئەردی یا بەردەوام کلیلە بۆ زڤڕاندنەووا ڤێ تێکچوونێ.' },
      { speaker: 'Environmental Scientist', text: 'The "Great Green Wall" initiative in Africa is an ambitious example of large-scale restoration efforts.', translation: 'دەستپێشخەرییا "دیوارێ کەسکێ مەزن" ل ئەفریقیا نموونەیەکا ئازایانە یە یا هەوڵێن ئاڤاکرنەووا بەرفراوان.' }
    ],
    vocabulary: [
      { word: 'Fertile', translation: 'ب-بەرەک / پیتدار' },
      { word: 'Accelerating', translation: 'خێراکردن' },
      { word: 'Vulnerable', translation: 'لاواز / هەستیار / بێ-بەرگری' },
      { word: 'Ambitious', translation: 'ئازایانە / خودان خەون' }
    ]
  },
  {
    id: 'c1-84',
    level: 'C1',
    title: 'The Phillips Curve and Inflation',
    titleKurdish: 'منحنییا فیلیپس و هەلاوسان (ئینفلەیشن)',
    dialogue: [
      { speaker: 'Macroeconomist A', text: 'The Phillips curve historically suggested an inverse relationship between unemployment and inflation.', translation: 'منحنییا فیلیپس (Phillips curve) ب شێوەیەکێ مێژوویی پێشنیار دکر کو پەیوەندییەکا بەروڤاژی د ناڤبەرا بێکاری و هەلاوسانێ دا هەری.' },
      { speaker: 'Macroeconomist B', text: 'The theory was that when unemployment is low, wages rise, which in turn leads to higher prices.', translation: 'تیۆری ئەوە بوو کو دەمێ بێکاری کێم دبیت، مووچە زیاد دبیت، کو ئەڤە ژی دبیتە ئەگەرێ بلندبوونا نرخەکان.' },
      { speaker: 'Macroeconomist A', text: 'However, the "stagflation" of the 1970s showed that high inflation and high unemployment can occur simultaneously.', translation: 'لێ، "ستاگفلەیشن"ا ساڵێن ١٩٧٠ نیشان دا کو هەلاوسانا بلند و بێکارییا بلند دشێن پێکڤە د هەمان دەم دا روو بدەن.' },
      { speaker: 'Macroeconomist B', text: 'This led to the idea of the "Natural Rate of Unemployment," where inflation expectation plays a crucial role.', translation: 'ئەڤە بوویە ئەگەرێ پەیدابوونا هزرا "رێژەیا سرۆشتییا بێکاریێ"، کو تێدا چاڤەڕێکردنا هەلاوسانێ دەورەکێ فەر دبینیت.' },
      { speaker: 'Macroeconomist A', text: 'Modern central banks closely monitor this relationship when deciding whether to raise or lower interest rates.', translation: 'بانکێن ناوەندی یێن سەردەم ب هویربینی چاڤدێرییا ڤێ پەیوەندیێ دکەن دەمێ بڕیارێ ددەن کا ئەرێ رێژەیا سوویێ بلند بکەن یان نزم بکەن.' }
    ],
    vocabulary: [
      { word: 'Inverse', translation: 'بەروڤاژی / پێچەوانە' },
      { word: 'Stagflation', translation: 'سستبوونا ئابووری دگەل هەلاوسانێ' },
      { word: 'Simultaneously', translation: 'د هەمان دەم دا / پێکەوە' },
      { word: 'Monitor', translation: 'چاڤدێری کردن' }
    ]
  },
  {
    id: 'c1-85',
    level: 'C1',
    title: 'Deviance and Social Control',
    titleKurdish: 'لادان (دێڤیانس) و کۆنتڕۆڵا جڤاکی',
    dialogue: [
      { speaker: 'Sociologist A', text: 'Deviance is redefined as any behavior that violates social norms, but what is considered deviant changes over time.', translation: 'لادان (Deviance) وەک هەر رەفتارەک کو یاسایێن جڤاکی بشکێنیت دهێتە پێناسەکرن، بەلام تشتێ کو وەک لادان دهێتە هەژمارتن ب تێپەڕبوونا دەمی دگوهۆڕیت.' },
      { speaker: 'Sociologist B', text: 'Labeling theory suggests that an act is only deviant because people have reacted to it in a certain way.', translation: 'تیۆرییا "لەیبلینگ" پێشنیار دکەت کو کارەک تەنێ برێکێ لادانە چونکی خەڵکی ب شێوەیەکێ دیارکری سەرەدەری دگەل دا کری.' },
      { speaker: 'Sociologist A', text: 'Powerful groups often use the label of "deviant" to marginalize and control those who challenge the status quo.', translation: 'کۆمێن ب هێز زۆر جاران تێگەهێ "لادەر" بکار دئینن بۆ پەراوێزخستن و کۆنتڕۆڵکردنا وان کەسانێن کو تەحەدای بارودۆخێ هەری دکەن.' },
      { speaker: 'Sociologist B', text: 'Social control mechanisms, from laws to subtle social disapproval, maintain order by discouraging non-conformity.', translation: 'ئامرازێن کۆنتڕۆڵا جڤاکی، ژ یاسایان بگرە هەتا بێئۆمێدییا جڤاکییا نە دیار، رێکوپێکیێ دپارێزن ب رێکا سستکردنا نە-هەماهەنگیێ.' },
      { speaker: 'Sociologist A', text: 'Understanding deviance helps us analyze the boundaries of a society and the power dynamics within it.', translation: 'تێگەهشتن د لادانێ دا هاریکارییا مە دکەت کو سنوورێن جڤاکی و هێزێن چالاک د ناڤبەرا وان دا شرۆڤە بکەین.' }
    ],
    vocabulary: [
      { word: 'Violates', translation: 'پێشێل-دکەت / دەبەزێنیت' },
      { word: 'Marginalize', translation: 'پەراوێزخستن / کێشانەووە بۆ لایەک' },
      { word: 'Conformity', translation: 'گونجاندن / شوێنکەفتن' },
      { word: 'Dynamics', translation: 'هێزێن چالاک / داینامیکی' }
    ]
  },
  {
    id: 'c1-86',
    level: 'C1',
    title: 'Organ Trafficking Ethics',
    titleKurdish: 'ئەخلاقییا بازرگانیکردن ب ئەندامێن لاشەی',
    dialogue: [
      { speaker: 'Bioethicist', text: 'Organ trafficking involves the illegal sale and purchase of human organs, often exploiting the world\'s most vulnerable populations.', translation: 'بازرگانیکردن ب ئەندامێن لاشەی پێک دهێت ژ فرۆشتن و کڕینا نەیاسایی یا ئەندامێن مرۆڤی، کو زۆر جاران مفا ژ هەژارترین خەڵکێ جیهانێ تێ وەرگرتن (ئیستغلال کردن).' },
      { speaker: 'Medical Jurist', text: 'This black market flourishes due to the extreme shortage of legal organ donations and the high demand for transplants.', translation: 'ئەو بازاڕێ رەش گەشە دکەت ژ بەر کێمییا زۆر یا بەخشینا یاسایی یا ئەندامان و داخوازا بلند بۆ چاندنا ئەندامان.' },
      { speaker: 'Bioethicist', text: 'Critics of a regulated market for organs argue that it would inevitably lead to the "commodification" of the human body.', translation: 'رەخنەگرێن بازاڕەکێ رێکخستی بۆ ئەندامان دبێژن کو ئەڤە دێ دەرەنجام ببیتە ئەگەرێ "بازرگانی-کردن" ب جەستەیێ مرۆڤی.' },
      { speaker: 'Medical Jurist', text: 'However, proponents argue that a legal, regulated compensation system could eliminate the black market and save lives.', translation: 'لێ، پشتەڤان دبێژن کو سیستەمەکێ قەرهەبووکرنێ یێ یاسایی و رێکخستی دشێت بازاڕێ رەش نێهێلیت و ژیانان بپارێزیت.' },
      { speaker: 'Bioethicist', text: 'This remains one of the most contentious issues in bioethics, balancing utilitarian benefits against moral principles of bodily integrity.', translation: 'ئەڤە وەک ئێک ژ کێشەدارترین بابەتان د ئەخلاقییا پزیشکی دا دمینیت، کو تێدا هاوسەنگی دهێتەکرن د ناڤبەرا سوودێن گشتی و پرەنسیپێن ئەخلاقی یێن پاراستنا جەستەی.' }
    ],
    vocabulary: [
      { word: 'Exploiting', translation: 'مفا-وەرگرتن (ب نەخۆشی) / ئیستغلال کردن' },
      { word: 'Flourishes', translation: 'گەشە دکەت / گەشە دکاتەوە' },
      { word: 'Inevitably', translation: 'ب شێوەیەکێ بێ-گومان / ناچارە' },
      { word: 'Contentious', translation: 'کێشەدار / ململانێ-لەسەر' }
    ]
  },
  {
    id: 'c1-87',
    level: 'C1',
    title: 'Fusion Power and the Future',
    titleKurdish: 'هێزا ناوەکی (فیوژن) و پاشەڕۆژ',
    dialogue: [
      { speaker: 'Nuclear Physicist', text: 'Fusion power aims to replicate the process that powers the sun, merging light nuclei to release vast amounts of energy.', translation: 'هێزا ناوەکی (Nuclear fusion) ئارمانجا وێ ئەوە کو دوبارە ئەو پرۆسەیە درۆست بکەت یا کو رۆژێ بڕێڤە دبات، کو تێدا ناوکا ئەتۆمێن سڤک ب هەڤ رە کۆم دبن بۆ بەلاڤکردنا بڕەکێ زۆر یێ وزەی.' },
      { speaker: 'Energy Consultant', text: 'Unlike fission, fusion produces no long-lived radioactive waste and carries no risk of meltdown.', translation: 'بەروڤاژی پڕۆسەیا "فیشێن" (پەقینی)، فیوژن پاشماوەیێن تیشکدەر یێن درێژخایەن بەرهەم نائینیت و مەترسییا تێکچوونا بێ-کۆنتڕۆڵ (Meltdown) نینە.' },
      { speaker: 'Nuclear Physicist', text: 'The challenge is achieving "ignition"—maintaining a stable plasma at temperatures hotter than the core of the sun.', translation: 'ئاستەنگ ئەوە بگەهنە "داگیرسانێ" (Ignition) - پاراستنا پلازمایەکا جێگیر د پلەیێن گەرمییێ دا کو گەرمتر بن ژ ناڤکا رۆژێ.' },
      { speaker: 'Energy Consultant', text: 'Recent breakthroughs in laser fusion and magnetic confinement have brought us closer to a "limitless" clean energy source.', translation: 'سەرکەفتنێن دوماهییێ د فیوژنا لایزەری و بەستنا مێگنێتی دا مە نێزیکتر کرینە ژ سەرچاوەیەکێ وزەیێ یێ پاقژ و بێ-سنوور.' },
      { speaker: 'Nuclear Physicist', text: 'While commercial viability is still decades away, it remains the "holy grail" of energy research.', translation: 'د دەمەکێ دا کو بکارئینانا بازرگانی هێشتا ب دەهان ساڵان دوویرە، لێ ئەو وەک "ئامانجا هەرە مەزنا" ڤەکۆڵینێن وزەی دمینیت.' }
    ],
    vocabulary: [
      { word: 'Merging', translation: 'کۆم-بوون / تێکەڵ-بوون' },
      { word: 'Radioactive', translation: 'تیشکدەر' },
      { word: 'Breakthroughs', translation: 'سەرکەفتنێن مەزن / وەرچەرخانەکان' },
      { word: 'Viability', translation: 'شیانا جێبەجێکردنێ / سەرکەفتن' }
    ]
  },
  {
    id: 'c1-88',
    level: 'C1',
    title: 'The Zeigarnik Effect',
    titleKurdish: 'کاریگەریا زێگارنیک و تەمامکرنا کاران',
    dialogue: [
      { speaker: 'Psychologist A', text: 'The Zeigarnik effect states that people remember uncompleted or interrupted tasks better than completed ones.', translation: 'کاریگەریا زێگارنیک دبێژیت کو خەڵک کارێن تەمام-نەکری یان پچڕاویی باشتر ل بیر دمینن ژ کارێن تەمام-کری.' },
      { speaker: 'Psychologist B', text: 'This is because an incomplete task creates "psychic tension," which keeps the information active in our working memory.', translation: 'ئەڤە ژ بەر هندێ یە کو کارەکێ ناتەواو "فشارەکا دەروونی" پەیدا دکەت، کو زانیارییان د بیرا "کارکەر" یا مە دا چالاک دێلیت.' },
      { speaker: 'Psychologist A', text: 'Once the task is finished, the tension is released, and the memory of the task fades rapidly.', translation: 'هەر کو کار تەمام بوو، ئەو فشارە لادچیت، و بیرا وی کاری ب خێرایی نامینیت.' },
      { speaker: 'Psychologist B', text: 'This effect is utilized in storytelling, through "cliffhangers" that keep the audience engaged and wanting more.', translation: 'ئەڤ کاریگەرییە د چیرۆک نووسینێ دا دهێتە بکارئینان، ب رێکا "کۆتاییێن هەڵواسراو" (Cliffhangers) کو سەرنجا بینەران رادکێشن بۆ پتر.' },
      { speaker: 'Psychologist A', text: 'It can also be a source of stress, leading to "cognitive itch" when we have too many open loops in our professional lives.', translation: 'ئەو دشێت ببیتە سەرچاوەیەکێ دڵەڕاوکێیێ ژی، کو دبیتە ئەگەرێ "خوریا مێشکی" دەمێ مە گەلەک کارێن ناتەواو د ژیانا مە یا کار دا هەبن.' }
    ],
    vocabulary: [
      { word: 'Interrupted', translation: 'پسپاردن / پچڕاو' },
      { word: 'Tension', translation: 'فشار / دڵەڕاوکێ' },
      { word: 'Fades', translation: 'نامینیت / کەم دەبێتەوە (بەرەبرە)' },
      { word: 'Utilized', translation: 'بکارئینان / بکار-هاتن' }
    ]
  },
  {
    id: 'c1-89',
    level: 'C1',
    title: 'Permafrost and Methane Loops',
    titleKurdish: 'پێرمافرۆست (ئەردێ بەستی) و خولێن میسانێ',
    dialogue: [
      { speaker: 'Climate Scientist', text: 'Permafrost is ground that remains frozen for at least two consecutive years, primarily located in the Arctic.', translation: 'پێرمافرۆست (Permafrost) ئەو عەردە یێ کو بۆ ماوێ کێمتری دوو ساڵێن ل دویف ئێک ب بەستی دمینیت، و ب شێوەیەکێ سەرەکی ل جەمسەرێ باکوورە.' },
      { speaker: 'Environmental Researcher', text: 'As global temperatures rise, the permafrost is thawing, releasing vast amounts of trapped organic carbon.', translation: 'دەمێ گەرماتییا جیهانی زیاد دبیت، پێرمافرۆست دحەلیێت (Thawing)، و بڕەکێ مەزن یێ کاربۆنا ئۆرگانی یا عەمبارکری بەلاڤ دکەت.' },
      { speaker: 'Climate Scientist', text: 'When this carbon decomposes in anaerobic conditions, it produces methane, a greenhouse gas far more potent than CO2.', translation: 'دەمێ ئەڤ کاربۆنە د بارودۆخێن بێ-ئۆکسجین دا شیکار دبیت، غازا میسانێ بەرهەم دئینیت، غازەکا گەرمکەر کو گەلەک ب هێزترە ژ CO2.' },
      { speaker: 'Environmental Researcher', text: 'This creates a dangerous "positive feedback loop," where warming leads to more methane, which leads to further warming.', translation: 'ئەڤە "خولەکا فیدباک یا ئەرێنی" یا مەترسیدار درۆست دکەت، کو تێدا گەرم-بوون دبیتە ئەگەرێ میسانێ پتر، و ئەو ژی دبیتە ئەگەرێ گەرم-بوونەکا زێدەتر.' },
      { speaker: 'Climate Scientist', text: 'Preventing the large-scale destabilization of Arctic permafrost is a critical tipping point for the global climate system.', translation: 'رێگریکردن ل تێکچوونا بەرفراوان یا پێرمافرۆستا جەمسەری خالەکا وەرچەرخانێ یا فەرە بۆ سیستەمێ سەقایێ جیهانی.' }
    ],
    vocabulary: [
      { word: 'Consecutive', translation: 'ل دویف ئێک / بەردەوام' },
      { word: 'Thawing', translation: 'حەلیان / توانەوە (بۆ بەفر و عەردێ بەستی)' },
      { word: 'Potent', translation: 'ب هێز / کاریگەر' },
      { word: 'Destabilization', translation: 'تێکچوونی جێگیربوون' }
    ]
  },
  {
    id: 'c1-90',
    level: 'C1',
    title: 'The Thucydides Trap',
    titleKurdish: 'داڤا توسییدیدس (سوسیدیدس تراپ)',
    dialogue: [
      { speaker: 'International Relations Scholar', text: 'The "Thucydides Trap" describes the structural stress that occurs when a rising power threatens to displace an existing superpower.', translation: '"داڤا توسییدیدس" (Thucydides Trap) وەسفا وێ فشارا پێکهاتەیی دکەت کو دەمێ روو ددەت کاتێ هێزەکا نوی یا سەرکەفتی هەڕەشەیێ ل شوینگرتنا زلهێزەکا هەری دکەت.' },
      { speaker: 'Diplomat', text: 'Thucydides originally noted this in ancient Greece, regarding the rivalry between the rising Athens and the established Sparta.', translation: 'توسییدیدس ب بنەڕەت ئەڤە ل یونانا کۆن تێبینی کر، دەربارەی ململانێیا د ناڤبەرا ئەتینایا سەرکەفتی و سپارتایا جێگیر دا.' },
      { speaker: 'International Relations Scholar', text: 'In such scenarios, war often becomes more likely, not because of a specific dispute, but because of mutual fear and insecurity.', translation: 'د بارودۆخێن وەسا دا، جەنگ زۆر جاران پتر ئەگەرێ روودانی هەری، نەک ژ بەر کێشەیەکا دیارکری، بەلکو ژ بەر ترسا هەڤپشک و نە-ئارامیێ.' },
      { speaker: 'Diplomat', text: 'Many analysts today apply this concept to the relationship between the United States and China.', translation: 'زۆر ژ شرۆڤەکاران نوکە ئەڤ تێگەهە بۆ پەیوەندییا د ناڤبەرا ئەمریکا و چینێ دا بکار دئینن.' },
      { speaker: 'International Relations Scholar', text: 'Avoiding this trap requires masterful diplomacy and the creation of "guardrails" to manage competition without conflict.', translation: 'دوویرکەفتن ژ ڤێ داڤێ پێتڤی ب دیپلۆماسییەتەکا شارەزایانە و درۆستکردنا "پارێزەران" هەری بۆ رێکخستنا کێبڕکێیێ بێی شەڕ و پێکدادان.' }
    ],
    vocabulary: [
      { word: 'Displace', translation: 'گۆهۆڕین / شوێن-پێ گرتن' },
      { word: 'Rivalry', translation: 'کێبڕکێ / ململانێ' },
      { word: 'Dispute', translation: 'کێشە / ناکۆکی' },
      { word: 'Guardrails', translation: 'سنوورێن پاراستنێ / پەرژین' }
    ]
  },
  {
    id: 'c1-91',
    level: 'C1',
    title: 'Mindfulness and the Brain',
    titleKurdish: 'هۆشیاری (مایندفۆلنێس) و مێشک',
    dialogue: [
      { speaker: 'Neuroscientist', text: 'Regular mindfulness practice has been shown to increase the gray matter density in the hippocampus, which is vital for learning and memory.', translation: 'نیساندراوە کو مەشقکرنا بەردەوام یا هۆشیاریێ (Mindfulness) چڕییا ماددەیا گۆری د هایپۆکەمپسێ دا زیاد دکەت، کو ئەڤە گرنگە بۆ فێربوون و بیر-هاتنەووەیێ.' },
      { speaker: 'Mental Health Advocate', text: 'It also reduces the activity of the amygdala, the brain\'s "alarm bell," leading to a better regulation of the stress response.', translation: 'ئەو هەروەسا چالاکییا ئەمەگدالایێ (Amygdala) کێم دکەت، کو وەک "زەنگا ئاگەهداریکردنێ" یا مێشکی یە، و دبیتە ئەگەرێ رێکخستنەکا باشتر بۆ بەرسڤدانا فشارێ.' },
      { speaker: 'Neuroscientist', text: 'Mindfulness works by strengthening the connections between the prefrontal cortex and the emotional centers of the brain.', translation: 'هۆشیاری ب رێکا ب هێزکردنا پەیوەندییێن د ناڤبەرا توێکلا پێش-ناڤچاوان و سەنتەرێن هەستی یێن مێشکی دا کار دکەت.' },
      { speaker: 'Mental Health Advocate', text: 'This provides a "biological buffers" against anxiety and depression, promoting overall emotional resilience.', translation: 'ئەڤە "پارێزەرەکێ بایۆلۆژی" (Biological buffer) دژی دوودلی و خەمۆکیێ دابین دکەت، و خۆڕاگرییا هەستی یا گشتی پەرە پێ ددەت.' },
      { speaker: 'Neuroscientist', text: 'It is a powerful example of neuroplasticity—the brain\'s ability to change its structure and function through experience.', translation: 'ئەڤە نموونەیەکا ب هێزە یا "نەرماتییا دەماری" (Neuroplasticity) - ئانکو شیانا مێشکی بۆ گوهۆڕینا پێکهاتە و کارێ خۆ ب رێکا ئەزموونان.' }
    ],
    vocabulary: [
      { word: 'Density', translation: 'چڕی' },
      { word: 'Regulation', translation: 'رێکخستن / کۆنتڕۆڵ کردن' },
      { word: 'Buffers', translation: 'پارێزەر / رێگر (بۆ کێمکردنا شەپۆلان)' },
      { word: 'Resilience', translation: 'خۆڕاگری / نەرمی' }
    ]
  },
  {
    id: 'c1-92',
    level: 'C1',
    title: 'Two Concepts of Liberty',
    titleKurdish: 'دوو تێگەهێن ئازادییێ (ئایزایا بێرلین)',
    dialogue: [
      { speaker: 'Political Scholar A', text: 'Isaiah Berlin famously distinguished between "negative liberty" and "positive liberty."', translation: 'ئایزایا بێرلین ب ناوداری جوداهی د ناڤبەرا "ئازادییا نەرێنی" و "ئازادییا ئەرێنی" دا کر.' },
      { speaker: 'Political Scholar B', text: 'Negative liberty is the absence of obstacles; it is the freedom "from" interference by others.', translation: 'ئازادییا نەرێنی نەبوونا کۆسپانە؛ ئانکو ئازادی "ژ" دەستێوەردانا کەسێن دی.' },
      { speaker: 'Political Scholar A', text: 'Positive liberty is the possibility of acting—or the fact of acting—in such a way as to take control of one’s life.', translation: 'ئازادییا ئەرێنی شیانا کارکردنێ یە - یان راستییا کارکردنێ یە - ب شێوەیەکێ کو کۆنتڕۆڵا ژیانا خۆ بگریە دەست.' },
      { speaker: 'Political Scholar B', text: 'Berlin warned that positive liberty could be hijacked by authoritarian regimes to justify oppression for a "higher" cause.', translation: 'بێرلین هۆشداری دا کو ئازادییا ئەرێنی دشێت ژ لایێ ڕژێمێن دیکتاتۆر ڤە بهێتە ڕفاندن بۆ رەواکردنا چەوسانەووەیێ لە پێناو "ئارمانجەکا بلندتر".' },
      { speaker: 'Political Scholar A', text: 'Both concepts remain central to liberal political theory, balancing individual rights against collective aspirations.', translation: 'هەر دوو تێگەهە وەک بنەڕەت د تیۆرییا سیاسییا لیبراڵ دا دمینن، کو تێدا مافێن تاکەکەسی ل هەمبەر خەونێن جڤاکی دهێنە هاوسەنگکردن.' }
    ],
    vocabulary: [
      { word: 'Interference', translation: 'دەستێوەردان / تێوەگلان' },
      { word: 'Authoritarian', translation: 'دیکتاتۆر / دەستهەلاتخواز' },
      { word: 'Oppression', translation: 'چەوسانەوە / زۆرداری' },
      { word: 'Aspirations', translation: 'خەون / ئاوات / هێڤی' }
    ]
  },
  {
    id: 'c1-93',
    level: 'C1',
    title: 'AI and Intellectual Property',
    titleKurdish: 'ژیرییا دەستکرد و خاوەنداریەتییا فکری (IP)',
    dialogue: [
      { speaker: 'Legal Expert', text: 'The rise of generative AI raises unprecedented questions about copyright and intellectual property.', translation: 'پەیدابوونا ژیرییا دەستکرد یا بەرهەمهێنەر (Generative AI) پرسیارێن بێ-وێنە دەربارەی مافێ بڵاوکردنەووە (کۆپیرایت) و خاوەنداریەتییا فکری پەیدا دکەت.' },
      { speaker: 'Tech Developer', text: 'Can an AI be considered an "author" of a work? Current law typically requires a human creator.', translation: 'ئەرێ ژیرییا دەستکرد دشێت وەک "نووسەر" یێ کارەکی بهێتە هەژمارتن؟ یاسایا نوکە ب گشتی پێتڤی ب مرۆڤەکی وەک درۆستکەر هەیە.' },
      { speaker: 'Legal Expert', text: 'Furthermore, the training of these models on vast amounts of copyrighted data is being challenged in the courts.', translation: 'زێدەباری ڤێ، راهێنانکرنا ڤان مۆدێلان ل سەر بڕەکێ زۆر یێ زانیارییان کو خاوەنداریەتییا وان پاراستی یە، ل دادگەهان تەحەدا ل سەر دهێتەکرن.' },
      { speaker: 'Tech Developer', text: 'We need new legal frameworks that balance the protection of creators with the need to encourage innovation.', translation: 'ئەم پێتڤی ب چارچۆڤەیێن یاسایی یێن نوی نە یێن کو هاوسەنگییێ د ناڤبەرا پاراستنا داهێنەران و هاندان بۆ نووگەریێ دا درۆست بکەن.' },
      { speaker: 'Legal Expert', text: 'The outcome of these legal battles will define the creative landscape of the 21st century.', translation: 'ئەنجامێ ڤان شەڕێن یاسایی دێ دیمەنێ داهێنەرانە یێ سەدەیێ ٢١ێ دیار کەت.' }
    ],
    vocabulary: [
      { word: 'Generative', translation: 'بەرهەمهێنەر / درۆستکەر' },
      { word: 'Copyright', translation: 'مافێ پاراستنا بەرهەمی / کۆپیرایت' },
      { word: 'Frameworks', translation: 'چارچۆڤە / سیستەمەکان' },
      { word: 'Landscape', translation: 'دیمەن / رووبەر' }
    ]
  },
  {
    id: 'c1-94',
    level: 'C1',
    title: 'Game Theory and Strategy',
    titleKurdish: 'تیۆرییا یارییان (گیم تیۆری) و ستراتیژی',
    dialogue: [
      { speaker: 'Economist A', text: 'Game theory is the study of mathematical models of strategic interaction among rational agents.', translation: 'تیۆرییا یارییان (Game theory) ڤەکۆڵینە ل سەر مۆدێلێن بیرکاری یێن کارلێککرنا ستراتیژی د ناڤبەرا لایەنێن ژیری دا.' },
      { speaker: 'Economist B', text: 'The "Prisoner\'s Dilemma" is a classic example, where individuals fail to cooperate even if it is in their best interest.', translation: '"تەنگاڤییا زیندانی (Prisoner\'s Dilemma)" نموونەیەکا کلاسیکی یە، کو تێدا تاکەکەس نەشێن هەماهەنگیێ بکەن تەنانەت ئەگەر د بەرژەوەندییا وان دا بیت ژی.' },
      { speaker: 'Economist A', text: 'The "Nash Equilibrium" describes a situation where no player can benefit by changing their strategy unilaterally.', translation: '"هاوسەنگییا ناش (Nash Equilibrium)" وەسفا بارودۆخەکی دکەت کو چ یاریزان نەشێن سوودمەند ببن ب گوهۆڕینا ستراتیژییا خۆ ب شێوەیەکێ تاک-لایەنە.' },
      { speaker: 'Economist B', text: 'These models are used in everything from nuclear deterrence to auction design and evolutionary biology.', translation: 'ئەڤ مۆدێلانە د هەمی تشتاندا دهێنە بکارئینان، ژ کێمکردنا مەترسییا ئەتۆمی بگرە هەتا دیزاینکرنا مەزادان و بایۆلۆژیا پەرەسەندنێ.' },
      { speaker: 'Economist A', text: 'Understanding how interests collide and align is crucial for navigating complex social and political systems.', translation: 'تێگەهشتن ل سەر هندێ کا چەوان بەرژەوەندی دکەڤنە دۆژایەتییا یەک یان دگەل یەک دگونجن، کلیلە بۆ بڕێڤەچوون د سیستەمێن جڤاکی و سیاسی یێن ئاڵۆز دا.' }
    ],
    vocabulary: [
      { word: 'Strategic', translation: 'ستراتیژی / پلان-بۆ-داڕێژراو' },
      { word: 'Equilibrium', translation: 'هاوسەنگی / جێگیری' },
      { word: 'Unilaterally', translation: 'ب شێوەیەکێ تاک-لایەنە' },
      { word: 'Deterrence', translation: 'رێگری / پاشەکشە-پێکردن' }
    ]
  },
  {
    id: 'c1-95',
    level: 'C1',
    title: 'Global Cities and Urbanization',
    titleKurdish: 'باژێڕێن جیهانی و باژێڕنشینی (ئوربانیزەیشن)',
    dialogue: [
      { speaker: 'Urban Sociologist', text: 'Global cities like New York and London act as command centers for the global economy, concentrating finance and high-level services.', translation: 'باژێڕێن جیهانی وەک نیویۆرک و لەندەن وەک سەنتەرێن فەرماندەیی بۆ ئابوورییا جیهانی کار دکەن، و دارایی و خزمەتگۆزارییێن ئاست-بلند کۆم دکەن.' },
      { speaker: 'Urban Planner', text: 'However, this concentration leads to extreme spatial inequality and the "gentrification" of historic neighborhoods.', translation: 'لێ، ئەڤ کۆمبوونە دبیتە ئەگەرێ نە-یەکسانییا جهی یا مەزن و "گۆنتەریکردن" (Gentrification) - گوهۆڕینا گەڕەکێن مێژوویی بۆ گەڕەکێن دەولەمەندان.' },
      { speaker: 'Urban Sociologist', text: 'The "megacity" is becoming the dominant human habitat, particularly in the Global South, often characterized by informal settlements.', translation: '"زەبەلاحە-باژێڕ" (Megacity) دبیتە شوینەوارێ سەرەکی یێ مرۆڤی، ب تایبەتی ل باشوورێ جیهانێ، کو زۆر جاران ب ئاڤاهییێن نە-فەرمی (سەوزە) دهێتە ناسین.' },
      { speaker: 'Urban Planner', text: 'Ensuring urban sustainability and social inclusion is the defining challenge for 21st-century urbanism.', translation: 'مسۆگەرکردنا بەردەوامییا باژێڕی و بەشداریکردنا جڤاکی، تەحەدایەکا دیارکەرە بۆ باژێڕنشینییا سەدەی ب ٢١ێ.' },
      { speaker: 'Urban Sociologist', text: 'We must redesign cities to be "smart" and "resilient," prioritizing public transit and green infrastructure.', translation: 'پێتڤییە ئەم باژێڕان دووبارە دیزاین بکەین بۆ هندێ کو "ژیر" و "خۆڕاگر" بن، و گرنگیێ بدەنە گواستنەووا گشتی و ژێرخانا کەسک.' }
    ],
    vocabulary: [
      { word: 'Spatial', translation: 'جهی / پەیوەندیدار ب شوێنێ' },
      { word: 'Dominant', translation: 'سەردەست / زالبووی' },
      { word: 'Settlements', translation: 'نیشتمان / کۆمەڵە خانوو' },
      { word: 'Inclusion', translation: 'بەشداریکردن / تێوەگلان' }
    ]
  },
  {
    id: 'c1-96',
    level: 'C1',
    title: 'Stem Cells and Regeneration',
    titleKurdish: 'دەمەخانەیێن بنەڕەتی (ستێم سێلز) و نووژەنکردنەووە',
    dialogue: [
      { speaker: 'Biomedical Scientist', text: 'Stem cells possess the unique ability to differentiate into various cell types, offering immense potential for regenerative medicine.', translation: 'دەمەخانەیێن بنەڕەتی (Stem cells) خودان شیانەکا تایبەتن کو ببەنە جۆرێن جیاواز یێن دەمەخانەیان، کو دەرفەتەکا مەزن بۆ پزیشکییا نووژەنکەر دابین دکەن.' },
      { speaker: 'Bioethicist', text: 'The use of embryonic stem cells has historically been controversial, raising questions about the moral status of the embryo.', translation: 'بکارئینانا دەمەخانەیێن "کۆرپەلەیی" ب شێوەیەکێ مێژوویی کێشەدار بوویە، و پرسیاران دەربارەی ئاستێ ئەخلاقی یێ کۆرپەلەی پەیدا دکەت.' },
      { speaker: 'Biomedical Scientist', text: 'However, the discovery of induced pluripotent stem cells (iPSCs) has bypassed many of these ethical concerns by using adult cells.', translation: 'لێ، دۆزینەووا دەمەخانەیێن هاندراو یێن جۆراوجۆر (iPSCs) گەلەک ژ وان کێشەیێن ئەخلاقی تێپەڕاندن ب رێکا بکارئینانا دەمەخانەیێن پێگەهشتی.' },
      { speaker: 'Bioethicist', text: 'We are now on the verge of treating conditions like Parkinson\'s and spinal cord injuries through cellular therapies.', translation: 'ئەم نوکە ل بەر لێڤا چارەسەرکردنا بارودۆخێن وەک پارکینسۆن و برینێن پڕکەستەکێ نە ب رێکا چارەسەرییێن خانەیی.' },
      { speaker: 'Biomedical Scientist', text: 'The core challenge is ensuring safety and preventing the formation of tumors from transplanted cells.', translation: 'ئاستەنگا بنەڕەتی مسۆگەرکردنا سەلامەتیێ یە و رێگریکردنە ل درۆستبوونا گرێیان ژ خانەیێن گواستراوە.' }
    ],
    vocabulary: [
      { word: 'Differentiate', translation: 'جیاوازبوون / گوهۆڕین بۆ جۆرەکێ دی' },
      { word: 'Embryo', translation: 'کۆرپەلە' },
      { word: 'Pluripotent', translation: 'فرە-شیاو / خودان شیانا زۆر' },
      { word: 'Verge', translation: 'لێڤ / نزیکی' }
    ]
  },
  {
    id: 'c1-97',
    level: 'C1',
    title: 'Colonizing Mars',
    titleKurdish: 'ئاڤاکردنا نیشتمانی ل سەر مەریخێ',
    dialogue: [
      { speaker: 'Astrobiologist', text: 'The colonization of Mars is no longer science fiction but a serious long-term objective for space agencies and private companies.', translation: 'ئاڤاکردنا نیشتمانی ل سەر مەریخێ ئێدی نە چیرۆکەکا زانستی یە، بەلکو ئارمانجەکا رژد و دەم-درێژە بۆ ئاژانسێن بۆشاییێ و کۆمپانیایێن تایبەت.' },
      { speaker: 'Aerospace Engineer', text: 'The technical challenges are staggering: from radiation shielding to the "terraforming" of a cold, thin atmosphere.', translation: 'ئاستەنگێن تەکنیکی مەزنن: ژ پاراستن دژی تیشکان (رادیاسیۆن) بگرە هەتا "زەوی-کردن"ا (Terraforming) هەوایەکێ سار و تەنک.' },
      { speaker: 'Astrobiologist', text: 'The search for indigenous life on Mars remains a priority; we must ensure we don’t contaminate the planet with Earth microbes.', translation: 'پێتڤییە گەڕیان ل دویف ژیانا خۆجهی ل مەریخێ ئارمانجا سەرەکی بیت؛ پێتڤییە ئەم مسۆگەر بکەین کو مەس مەریخ ب میکرۆبێن زەوی پیس نەکەین.' },
      { speaker: 'Aerospace Engineer', text: 'In-situ resource utilization, such as producing oxygen and fuel from the Martian atmosphere, is essential for a sustainable presence.', translation: 'بکارئینانا ژێدەرێن وێرێ (In-situ)، وەک بەرهەمهێنانا ئۆکسجین و سووتەمەنیێ ژ هەوایێ مەریخێ، فەرە بۆ هەبوونا بەردەوام.' },
      { speaker: 'Astrobiologist', text: 'Mars could serve as a "backup plan" for humanity, but we must not treat it as an escape from our environmental responsibilities on Earth.', translation: 'مەریخ دشێت وەک "پلانەکا شوینگەر" بیت بۆ مرۆڤایەتی، لێ پێتڤییە ئەم ب چاڤێ رەڤین ژ بەرپرسیاریەتیێن ژینگەیی ل سەر زەوی تەماشەی نەکەین.' }
    ],
    vocabulary: [
      { word: 'Staggering', translation: 'مەزن / هۆشبەر / ئەوەندەی کات-کێش' },
      { word: 'Indigenous', translation: 'خۆجهی / نیشتمانی / ئەسلی' },
      { word: 'Microbes', translation: 'میکرۆب / زیندەوەرە هویرەکان' },
      { word: 'Utilization', translation: 'بکارئینان / بکار-هێنان' }
    ]
  },
  {
    id: 'c1-98',
    level: 'C1',
    title: 'The Dunning-Kruger Effect',
    titleKurdish: 'کاریگەریا دشە-ناینگ کڕۆگەر و مێتا-کۆگنییشن',
    dialogue: [
      { speaker: 'Cognitive Psychologist A', text: 'The Dunning-Kruger effect is a cognitive bias where individuals with low ability at a task overestimate their competence.', translation: 'کاریگەریا دونیینگ-کڕۆگەر لایەنگیرییەکا مێشکی یە کو تێدا ئەو کەسێن خودان شیانێن کێم د کارەکی دا، شارەزایییا خۆ زێدە دبینن.' },
      { speaker: 'Cognitive Psychologist B', text: 'Conversely, highly competent people often underestimate their relative ability, assuming that tasks easy for them are easy for everyone.', translation: 'بەروڤاژی، کەسێن گەلەک شارەزا زۆر جاران جاران شیانا خۆ کێم دبینن، و وەسا هزر دکەن کارێن بۆ وان ب سانەهی بن، بۆ هەمووان ب سانەهین.' },
      { speaker: 'Cognitive Psychologist A', text: 'This stems from a lack of "meta-cognition"—the ability to think about one\'s own thinking and evaluate one\'s own knowledge accurately.', translation: 'ئەڤە ژ نەبوونا "کۆگنییشنا بالا" (Meta-cognition) پەیدا دبیت - ئانکو شیانا هزرکردنێ د ناڤ هزرکرنا مرۆڤی دا و هەڵسەنگاندنا زانیارییێن مرۆڤی ب شێوەیەکێ درۆست.' },
      { speaker: 'Cognitive Psychologist B', text: '"The trouble with the world is that the stupid are cocksure and the intelligent are full of doubt," as Bertrand Russell once noted.', translation: '"کێشەیا جیهانێ ئەوە کو نەزان ب باوەرن و ژیر پڕن ژ گۆمانێ،" وەک بێرتراند رەسڵ جارەکێ گۆتی.' },
      { speaker: 'Cognitive Psychologist A', text: 'Fostering intellectual humility and a commitment to lifelong learning are the only ways to mitigate this bias.', translation: 'پەرەپێدانا سادەیییا فکری و پابەندبوون ب فێربوونا درێژخایەن تەنێ رێکانە بۆ کێمکردنا ئەوی لایەنگیرییێ.' }
    ],
    vocabulary: [
      { word: 'Bias', translation: 'لایەنگیری / کێشانەووە بۆ لایەک' },
      { word: 'Competence', translation: 'شیان / شارەزایی' },
      { word: 'Conversely', translation: 'ب بێچەوانەوە / بەروڤاژی' },
      { word: 'Humility', translation: 'سادەیی / خۆ-کێم دیتن (ب رامانا باش)' }
    ]
  },
  {
    id: 'c1-99',
    level: 'C1',
    title: 'Ocean Currents and Climate',
    titleKurdish: 'تەزووەکانی زەریا و سەقا',
    dialogue: [
      { speaker: 'Oceanographer', text: 'Ocean currents, like the Gulf Stream, act as a massive conveyor belt, transporting heat from the equator to the poles.', translation: 'تەزووەکانی زەریا، وەک "گۆڵف ستریم"، وەک قایشەکا مەزن یا گواستنەووەیێ کار دکەن، و گەرمییێ ژ هێلا کەمەرەیی ڤە دگوهۆزن بۆ جەمسەران.' },
      { speaker: 'Climate Modeler', text: 'This "thermohaline circulation" is driven by differences in temperature and salinity, which affect the density of the water.', translation: 'ئەڤ "زڤڕینەووا گەرمی-سوێری" ب رێکا جوداهییا پلەیێن گەرمی و سوێرییێ دهێتە ڕێڤەبرن، کو کارتێکرنێ ل چڕییا ئاڤێ دکەت.' },
      { speaker: 'Oceanographer', text: 'A major concern is the melting of Arctic ice, which dilutes the saltiness of the water and could potentially shut down this circulation.', translation: 'مەترسییەکا سەرەکی حەلیانا بەفرا جەمسەری یە، کو سوێرییا ئاڤێ روون دکەت و رەنگە ئەڤێ زڤڕینێ رابگریت.' },
      { speaker: 'Climate Modeler', text: 'The collapse of the AMOC would have catastrophic consequences for the climate of Europe and North America.', translation: 'هەرفینا AMOC دێ کارتێکرنێن کارەساتبار ل سەر سەقایێ ئەوروپا و ئەمریکای باکوور هەبن.' },
      { speaker: 'Oceanographer', text: 'Understanding the complex feedback loops between the atmosphere and the ocean is critical for accurate climate predictions.', translation: 'تێگەهشتن د وان خولێن فیدباک یێن ئاڵۆز یێن د ناڤبەرا هەوا و زەریای دا فەرە بۆ پێشبینییێن درۆست یێن سەقای.' }
    ],
    vocabulary: [
      { word: 'Conveyor', translation: 'گواستنەوە / بار-هەڵگر' },
      { word: 'Salinity', translation: 'سوێری / رێژەیا خوێی د ئاب دا' },
      { word: 'Dilutes', translation: 'روون-کردنەوە / ناتێر-کردن' },
      { word: 'Predictions', translation: 'پێشبینی / پێشگوێی' }
    ]
  },
  {
    id: 'c1-100',
    level: 'C1',
    title: 'The Future of Global Governance',
    titleKurdish: 'پاشەڕۆژا حو کمدارییا جیهانی (رێفرۆما UN)',
    dialogue: [
      { speaker: 'Political Scientist', text: 'The current structure of the UN Security Council reflects the geopolitical realities of 1945, not the 21st century.', translation: 'پێکهاتەیێ نوکە یێ ئەنجوومەنێ ئاسایشا نەتەوە یەکگرتووەکان رەنگدانەووا راستییێن جیۆپۆلیتیکی یێن ساڵا ١٩٤٥ە، نەک سەدەیێ ٢١ێ.' },
      { speaker: 'Diplomat', text: 'Calls for reform emphasize the need for greater representation for emerging powers and the Global South.', translation: 'داخوازێن بۆ چاکسازیێ (رێفۆرما) جەخت ل سەر پێتڤیبوونا نوێنەرایەتییەکا مەزنتر بۆ هێزێن نوکە و باشوورێ جیهانێ دکەن.' },
      { speaker: 'Political Scientist', text: 'The veto power of the five permanent members often leads to paralysis in the face of major international crises.', translation: 'مافێ "ڤیتۆ" یێ هەر پێنج ئەندامێن هەمیشەیی زۆر جاران دبیتە ئەگەرێ پەکنەخستنێ (ئیفلیج بوون) ل هەمبەر قەیرانێن مەزن یێن نێڤدەولەتی.' },
      { speaker: 'Diplomat', text: 'However, achieving consensus on reform is incredibly difficult, as no permanent member wants to surrender their privilege.', translation: 'لێ، گەهشتن ب رێککەفتن ل سەر چاکسازیێ گەلەک ب زەحمەتە، چونکی چ ئەندامێن هەمیشەیی ناخوازن ژ دەستهەلاتا خۆ دوویر بکەڤن.' },
      { speaker: 'Political Scientist', text: 'Unless we can evolve our global institutions, they risk becoming obsolete in an increasingly multi-polar world.', translation: 'ئەگەر ئەم نەشێین دامەزراوەیێن خۆ یێن جیهانی پەرە پێ بدەین، مەترسی هەیە بببنە تشتێن کەڤن و بێ-مفا د جیهانەکا گەلەک-جەمسەری دا.' }
    ],
    vocabulary: [
      { word: 'Reform', translation: 'چاکسازی / رێفۆرم' },
      { word: 'Paralysis', translation: 'ئیفلیجی / پەکنەخستن' },
      { word: 'Privilege', translation: 'مافی تایبەت / ئیمتیاز' },
      { word: 'Obsolete', translation: 'کەڤن / بەسەرچوو / بێ-مفا' }
    ]
  },
  // C2 Level
  {
    id: 'c2-1',
    level: 'C2',
    title: 'Philosophy of Existence',
    titleKurdish: 'فەلسەفەیا هەبوونی',
    dialogue: [
      { speaker: 'Professor', text: 'Existentialism posited that individuals define their own meaning in life, emphasizing personal freedom and choice over preordained destiny.', translation: 'فەلسەفەیا هەبوونی (Existentialism) دبێژیت کو تاکەکەسی ب خۆ رامانا ژیانا خۆ دەستنیشان دکەت، و گرنگییێ ب ئازادییا تاکەکەسی و هەلبژارتنێ ددەت ل سەر چارەنڤیسێ پێشوەخت.' },
      { speaker: 'Student', text: 'But doesn\'t that lead to an overwhelming sense of nihilism if there is no inherent objective purpose or divine framework guiding us?', translation: 'لێ ئەرێ ئەڤە نابیتە ئەگەرێ هەستا "نەمانێ" (nihilism) ئەگەر چو مەرهەمەکا رەها و ئامانجەکا بنەرەتی یان فریمورکەکێ خودایی نەبیت یێ کو مە رێنمایی بکەت؟' },
      { speaker: 'Professor', text: 'On the contrary, philosophers like Sartre argued that this "radical freedom" allows us to create our own essence through action. We are what we do.', translation: 'ب پێچەوانە، فەلسەفەزانێن وەک سارتەر دبێژن کو ئەڤ "ئازادییا بنەرەتی" رێکا مە خۆش دکەت کو ب هەبوونا خۆ رامانێ درۆست بکەین ب رێکا کارکرنێ. ئەم تشتەنە یێن کو ئەم دکەین.' },
      { speaker: 'Student', text: 'Then the weight of responsibility must be immense. Every choice we make defines who we are and, by extension, affects our humanity.', translation: 'پا ب ڤی رەنگی گرانییا بەرپرسیاریەتیێ پێتڤییە یا گەلەک مەزن بیت. هەر هەلبژارتنەکا ئەم دکەین مە دەستنیشان دکەت و، ب ئەنجام، کارتێکرنێ ل مرۆڤایەتییا مە دکەت.' },
      { speaker: 'Professor', text: 'Exactly. It is what Heidegger referred to as "being-in-the-world." We are fundamentally embedded in a context of meaning that we constantly negotiate.', translation: 'ب درۆستی. ئەفە ئەو تشتە یێ "هایدێگەر" ناڤ کری ب "هەبوون-د-جیهانێ-دا". ئەم ب بنەرەتی د ناڤ دەقەکێ رامانێ دا نە یێ کو ئەم هەر دەم گۆتۆبێژێ ل سەر دکەین.' },
      { speaker: 'Student', text: 'So, meaning is not discovered, but rather constructed through our engagement with existence. Does this mean morality is also subjective then?', translation: 'ئانکو، رامان ناهێتە دیتن، لێ پتر دهێتە ئاڤاکرن ب رێکا پەیوەندیا مە دگەل هەبوونی. ئەرێ ئەڤە رامانا وێ ئەوە کو ئەخلاق ژی تشتەکێ تاکەکەسییە (subjective)؟' },
      { speaker: 'Professor', text: 'That is a profound question. While individual values vary, the pursuit of authenticity requires us to act in accordance with our beliefs while acknowledging the freedom of others.', translation: 'ئەفە پرسیارەکا کویرە. هەرچەندە بهایێن تاکەکەسی جیاواز بن، لێ ل دویڤ چوون بۆ راستەقینەییێ پێتڤی ب مە دکەت کو ئەم ل دویڤ باوەریا خۆ کار بکەین د دەمەکێ دا کو ئەم دانپێدانێ ب ئازادییا یێن دی بکەین.' },
      { speaker: 'Student', text: 'It seems existentialism is as much about ethics as it is about the nature of being. It challenges us to live deliberately.', translation: 'دیارە فەلسەفەیا هەبوونی هندێ کو ل سەر ئەخلاقییە، هندێ ژی ل سەر سرۆشتێ هەبوونییە. مە هان ددەت کو ئەم ب ئیرادە و مەرەم بژین.' },
      { speaker: 'Professor', text: 'Precisely. It avoids the despair of emptiness by filling existence with the courage to create. It is a philosophy of active engagement.', translation: 'ب درۆستی. خوە ژ بێهیڤیبوونا ڤالایێ ددەتە پاش ب پڕکرنا هەبوونی ب وێ قارەمانییێ دا کو مەرەمان چێبکەت. ئەفە فەلسەفەیەکا پشکدارییا ب هێزە.' },
      { speaker: 'Student', text: 'I see. But let\'s delve deeper into "Angst" or "Existential Dread." It\'s not a negative state but a realization of one\'s absolute freedom.', translation: 'تێگەهشتم. لێ بلا پتر بچینە ناڤ تێگەهێ "دڵەڕاوکی" (Angst) یان "ترسا هەبوونی". ئەڤە نە بارودۆخەکێ نەرێنییە، لێ تێگەهشتنا مرۆڤی یە بۆ ئازادییا خۆ یا رەها.' },
      { speaker: 'Professor', text: 'Kierkegaard called it "the dizziness of freedom." It\'s the moment we realize we have no excuses for our choices.', translation: 'کیەرکێگۆرد ناڤ لێ کربوو "گێژبوونا ئازادیێ". ئەڤە ئەو دەمەیە یێ کو ئەم تێدە دگەهین کو چو مەرهەم بۆ هەلبژارتنێن مە نینن.' },
      { speaker: 'Student', text: 'That\'s a terrifying thought, yet somehow liberating. It means we aren\'t victims of circumstance.', translation: 'ئەڤە هزرەکا ترسناکە، لێ ب رەنگەکێ دی مرۆڤی ئازاد دکەت. رامانا وێ ئەوە کو ئەم نە قوربانییێن دەوروبەرێن خۆ نە.' },
      { speaker: 'Professor', text: 'True. Although we must acknowledge "Facticity"—the things we cannot change, like our place of birth or biology.', translation: 'راستە. هەرچەندە پێتڤییە ئەم دانپێدانێ ب "راستییێن سەپایی" (Facticity) بکەین - ئەو تشتێن ئەم نەشێین بگۆهۆڕین، وەک جهێ ژدایکبوونێ یان بایۆلۆژیا مە.' },
      { speaker: 'Student', text: 'How does facticity interact with our freedom then?', translation: 'پا چەوا ئەڤ راستییانە کارلێکێ دگەل ئازادییا مە دکەن؟' },
      { speaker: 'Professor', text: 'Facticity provides the canvas, but our freedom chooses the colors. We cannot choose our starting point, but we choose our direction.', translation: 'راستییەکان تەختەیێ وێنەکێشانێ دابین دکەن، لێ ئازادییا مە رەنگان هەڵدەبژێریت. ئەم نەشێین خالەیا دەستپێکێ هەلبژێرین، لێ ئەم ئاراستەیا خۆ هەڵدەبژێرین.' },
      { speaker: 'Student', text: 'Living like this forces us to question whether we are living "authentically" or just following the "They-self," as Heidegger put it.', translation: 'ژیان ب ڤی رەنگی مە نەچار دکەت کو پرس بکەین کا ئەرێ ئەم ب "راستی" دژین یان تەنیا ل دووڤ "ئەوێن دی" دچین، وەک هایدێگەر دبێژیت.' },
      { speaker: 'Professor', text: 'The "They-self" is the comfortable, anonymous way of being where one does what "one" does, avoiding the burden of individual choice.', translation: '"ئەوێن دی" رێکەکا گونجای و بێ ناڤ و نیشانە بۆ هەبوونێ، کو مرۆڤ تشتەکێ دکەت یێ کو "خەلک" دکەت، و خوە ژ گرانیا بەرپرسیارەتیا هەلبژارتنێن تاکەکەسی ددوویر دکەت.' },
      { speaker: 'Student', text: 'Thank you, Professor. This perspective transforms my understanding of human agency and the significance of our choices.', translation: 'سوپاس، پڕۆفیسۆر. ئەڤ دیدەگا گوهۆڕینێ د تێگەهشتنا من دا دکەت بۆ شیانێن مرۆڤی و گرنگییا هەلبژارتنێن مە.' },
      { speaker: 'Professor', text: 'One last point: Sartre emphasized "Commitment" (Engagement). Without it, freedom is just a void. By choosing a cause, we give structure to our existence.', translation: 'خالەکا دوماهیکێ: سارتەر گرنگی ددا ب "پەیمان" (Engagement). بێی وێ، ئازادی تەنیا ڤالاتییەکە. ب هەلبژارتنا مەرەمەکێ، ئەم رێکوپێکییێ ددەینە هەبوونا خۆ.' },
      { speaker: 'Student', text: 'Does this mean that even a mistake is better than inaction?', translation: 'ئەرێ ئەڤە رامانا وێ ئەوە کو تەنانەت خەلەتی ژی باشترە ژ بێدەنگی و بێکاریێ؟' },
      { speaker: 'Professor', text: 'In a sense, yes. Inaction is also a choice, but it\'s a choice to be passive. Actively choosing is an assertion of one\'s being.', translation: 'ب رەنگەکی، بەلێ. بێکاری ژی هەلبژاردنەکە، لێ هەلبژاردنەکە کو مرۆڤ یێ نەرێنی بیت. هەلبژاردنا چالاکانە سەلماندنا هەبوونا مرۆڤی یە.' },
      { speaker: 'Student', text: 'I recently read about "Existential Despair." How does it differ from ordinary sadness?', translation: 'من ئەڤ دووماهییە دەربارەی "بێهیڤیبوونا هەبوونی" خواند. ئەڤە چ جیاوازی دگەل خەمگینیا ئاسایی هەیە؟' },
      { speaker: 'Professor', text: 'Despair arises when our "project"—the thing we built our life around—collapses. It\'s the loss of our primary meaning.', translation: '"بێهیڤیبوون" دەمێ پەیدا دبیت کو "پرۆژێ" مە یێ ژیانێ - ئەو تشتێ مە ژیانا خۆ ل دەور ئاڤاکری - دهەرفیت. ئەڤە ژ دەستدانا رامانا مە یا سەرەکییە.' },
      { speaker: 'Student', text: 'And the way out is to build a new project? To re-invent oneself?', translation: 'و رێکا دەربازبوونێ ئەوە کو ئەم پرۆژەکێ نوو ئاڤا بکەین؟ دا کو مرۆڤ خۆ ژ نوو درۆست بکەتەڤە؟' },
      { speaker: 'Professor', text: 'Exactly. It requires what Nietzsche called "self-overcoming." Treating one\'s life as a creative work of art.', translation: 'ب درۆستی. ئەڤە پێتڤی ب وێ چەندێ هەیە یا نیچە دبێژیتێ "خۆ-تێپەراندن". مرۆڤ سەرهدەریێ دگەل ژیانا خۆ بکەت وەک کارەکێ هونەری یێ داهێنەرانە.' },
      { speaker: 'Student', text: 'It\'s a beautiful and challenging way to live. I will carry these reflections with me on my path.', translation: 'ئەڤە رێگایەکا جوان و ب زەحمەتە بۆ ژیانێ. ئەز دێ ڤان هزران دگەل خۆ بەم د ژیانا خۆ دا.' }
    ],
    vocabulary: [
      { word: 'Posited', translation: 'دانان / پێشنیارکرن' },
      { word: 'Inherent', translation: 'بنەرەتی / تێدا هەی' },
      { word: 'Empowers', translation: 'هێزپێدان' },
      { word: 'Transcends', translation: 'تێپەراندن / چوونە سەرتر' }
    ]
  },
  {
    id: 'c2-2',
    level: 'C2',
    title: 'Quantum Entanglement and Locality',
    titleKurdish: 'ئاڵۆزییا کوانتەم و جهی بوون (لۆکالیتی)',
    dialogue: [
      { speaker: 'Theoretical Physicist', text: 'Quantum entanglement suggests that particles can remain connected such that the state of one instantaneously influences the other, regardless of distance.', translation: 'ئاڵۆزییا کوانتەم پێشنیاز دکەت کو تەنۆلکە دشێن ب رەنگەکی ب هەڤ ڤە گرێدای ب مینن کو رەوشا ئێک ژ وان ب شێوەیەکێ دەستبەجێ کارتێکرنێ ل یێ دی بکەت، بێی کو دووراتی گرنگییێ هەبیت.' },
      { speaker: 'Philosopher of Science', text: 'Einstein famously derided this as "spooky action at a distance," as it seemed to defy the principle of local causality.', translation: 'ئاینیشتاین ب ناوداری ب گاڵتەڤە ناڤ ل ڤێ کربوو "کارکرنا ترسناک ژ دوور ڤە"، چونکی دیار بوو کو دژی پرەنسیپێن سەبەبییەتا جهی (local causality) یە.' },
      { speaker: 'Theoretical Physicist', text: 'Indeed, but Bell\'s theorem and subsequent experiments have vindicated the non-local nature of the quantum world.', translation: 'ب درۆستی، لێ تیۆرییا بێڵ و تاقیکردنەوەیێن دووڤ دا ئاشکرا کر کو سرۆشتێ جیهانا کوانتەمێ نە-جهی یە (non-local).' },
      { speaker: 'Philosopher of Science', text: 'This forces us to re-evaluate our fundamental ontological assumptions about the separability of physical systems.', translation: 'ئەڤە مە نەچار دکەت کو گۆمانێن خۆ یێن ئۆنتۆلۆژی یێن بنەڕەتی دەربارەی جودابوونا سیستەمێن فیزیکی دووبارە هەڵسەنگینین.' }
    ],
    vocabulary: [
      { word: 'Entanglement', translation: 'ئاڵۆزی / تێوەگلان' },
      { word: 'Instantaneously', translation: 'ب شێوەیەکێ دەستبەجێ' },
      { word: 'Derided', translation: 'گاڵتە پێکرن / ب کێم دیتن' },
      { word: 'Vindicated', translation: 'سەلماندن / راست-دەرکەفتن' }
    ]
  },
  {
    id: 'c2-3',
    level: 'C2',
    title: 'The Post-Truth Era and Objective Reality',
    titleKurdish: 'سەردەمێ پاش-راستی و راستییا بابەتی (Objectivity)',
    dialogue: [
      { speaker: 'Media Critic', text: 'The proliferation of misinformation has ushered in a "post-truth" era where emotional appeals carry more weight than objective facts.', translation: 'بەلاڤبوونا گەلەکا زانیارییێن خەلەت سەردەمەکێ "پاش-راستی" ئینایە پێش کو تێدا هەست و سۆز مفا و سەنگەکا زێدەتر هەیە ژ راستییێن بابەتی.' },
      { speaker: 'Political Analyst', text: 'Social media algorithms exacerbate this by creating echo chambers that polarize public discourse and erode common ground.', translation: 'ئەلگۆریتمێن سۆشیال میدیایێ ڤێ چەندێ زێدەتر دکەن ب رێکا درۆستکردنا "ژوورێن دەنگڤەدانێ" کو گۆتۆبێژێن گشتی لایەنگیر دکەن و بنەمایێن هەڤپشک ژ ناڤ دبەن.' },
      { speaker: 'Media Critic', text: 'When truth becomes tribal, the democratic process is undermined, as policy debates are no longer grounded in shared reality.', translation: 'دەمێ راستی دبیتە تشتەکێ عەشایەری، پرۆسەیا دیموکراسی کێم دهێتە سەلماندن، چونکی گۆتۆبێژێن سیاسی ئێدی ل سەر ئەردەکێ راستی یێ هەڤپشک نینن.' },
      { speaker: 'Political Analyst', text: 'The challenge lies in reinvigorating critical thinking skills and establishing robust verification mechanisms for digital content.', translation: 'ئاستەنگ ل وێرێ یە کو هزرکرنا رەخنەگرانە دووبارە ب هێز بکەین و سیستەمێن بهێز یێن پشتڕاستکردنەووەیێ بۆ ناڤەرۆکا دیجیتاڵی دابین بکەین.' }
    ],
    vocabulary: [
      { word: 'Proliferation', translation: 'زێدەبوونا خێرا / تەشەنە-سەندن' },
      { word: 'Exacerbate', translation: 'خراپتر کردن / زیاد کردن' },
      { word: 'Erode', translation: 'ژ ناڤ برن / شۆرانەوە (بەرەبرە)' },
      { word: 'Robust', translation: 'ب هێز / جێگیر' }
    ]
  },
  {
    id: 'c2-4',
    level: 'C2',
    title: 'Epigenetics and Transgenerational Trauma',
    titleKurdish: 'ئیپی-جێنێتیک و زەحمەتییێن (تراوما) نەوەیان',
    dialogue: [
      { speaker: 'Geneticist', text: 'Epigenetics reveals that environmental factors can modify gene expression without changing the underlying DNA sequence.', translation: 'ئیپی-جێنێتیک (Epigenetics) دیار دکەت کو فاکتەرێن ژینگەیی دشێن دەربڕینا جینی (gene expression) بگۆهۆڕن بێی کو ڕێزبەندییا بنەڕەتی یا DNA بگۆهۆڕن.' },
      { speaker: 'Psychologist', text: 'The implications for mental health are profound, particularly concerning the biological transmission of transgenerational trauma.', translation: 'کارتێکرنێن ڤێ ل سەر ساخلەمییا دەروونی گەلەک کویرن، ب تایبەتی دەربارەی گواستنەووا بایۆلۆژییا تراومایێ د ناڤبەرا نەوەیان دا.' },
      { speaker: 'Geneticist', text: 'Studies on the offspring of survivors of extreme stress suggest that epigenetic marks can be inherited, affecting stress resilience levels.', translation: 'ڤەکۆڵینێن ل سەر زارۆیێن وان کەسێن کو د ناڤ فشارەکا مەزن دا ژیاینە، ئاماژە ب هندێ دکەن کو نیشانێن ئیپی-جێنێتیکی دشێن بهێنە وەرگرتن، و کارتێکرنێ ل ئاستێ خۆڕاگرییا فشارێ بکەن.' },
      { speaker: 'Psychologist', text: 'Understanding this link allows for more targeted therapeutic interventions that address both the biological and psychological aspects of trauma.', translation: 'تێگەهشتن د ڤێ پەیوەندیێ دا رێ خۆش دکەت بۆ چارەسەرییێن دیارکری کو هند بەرێ خۆ بدەنە لایەنێ بایۆلۆژی، هند ژی لایەنێ دەروونی یێ تراومایێ.' }
    ],
    vocabulary: [
      { word: 'Expression', translation: 'دەربڕین / دەرکەفتنا سیفەتەکی' },
      { word: 'Transmission', translation: 'گواستنەوە' },
      { word: 'Offspring', translation: 'نەوە / وەچە' },
      { word: 'Interventions', translation: 'دەستێوەردان / هەولێن چارەسەریێ' }
    ]
  },
  {
    id: 'c2-5',
    level: 'C2',
    title: 'The Ethical Landscape of CRISPR',
    titleKurdish: 'دیمەنێ ئەخلاقی یێ تێکنۆلۆژییا CRISPR',
    dialogue: [
      { speaker: 'Bioethicist', text: 'CRISPR-Cas9 technology offers unprecedented precision in genome editing, yet it raises haunting ethical dilemmas.', translation: 'تێکنۆلۆژییا CRISPR-Cas9 ورداتییەکا بێ-وێنە د دەستکارییکردنا جینۆمی دا دابین دکەت، لێ کێشەیێن ئەخلاقی یێن ترسناک ژی پەیدا دکەت.' },
      { speaker: 'Molecular Biologist', text: 'The ability to eradicate hereditary diseases is a moral imperative, but the prospect of "designer babies" is where we must draw the line.', translation: 'شیانا ژناڤبرنا نەخۆشییێن وەرگیراو (هەرێدیتی) ئەرکەکێ ئەخلاقی یە، لێ مەترسییا "زارۆیێن دیزاین-کری" ئەو جهە یێ کو پێتڤییە ئەم سنوورەکی بۆ دابنێین.' },
      { speaker: 'Bioethicist', text: 'Germline editing is particularly controversial because changes are passed down to future generations who cannot consent.', translation: 'دەستکارییکردنا هێلا خانەیێن زاوزێیێ (Germline) ب تایبەتی کێشەدارە چونکی گوهۆڕین دگۆهۆزن بۆ نەوەیێن داهاتی یێن کو نەشێن ڕەزامەندییا خۆ بدەن.' },
      { speaker: 'Molecular Biologist', text: 'We need international regulatory frameworks to ensure that these powerful tools are used responsibly and equitably.', translation: 'ئەم پێتڤی ب چارچۆڤەیێن رێکخستنا نێڤدەولەتی نە بۆ هندێ کو ئەڤ کەرەستە یێن ب هێز ب بەرپرسیاریەتی و ب یەکسانی بهێنە بکارئینان.' }
    ],
    vocabulary: [
      { word: 'Genome', translation: 'جینۆم / کۆما جینان' },
      { word: 'Eradicate', translation: 'ژناڤبرن / ریشەکێشک کردن' },
      { word: 'Prospect', translation: 'مەترسی / ئەگەرێ پەیدابوونێ د داهاتی دا' },
      { word: 'Equitably', translation: 'ب یەکسانی / ب شێوەیەکێ دادپەروەرانە' }
    ]
  },
  {
    id: 'c2-6',
    level: 'C2',
    title: 'Post-Structuralism and Linguistic Deconstruction',
    titleKurdish: 'پاش-بونیاتگەری و هەلوەشاندنا زمانەوانی (Deconstruction)',
    dialogue: [
      { speaker: 'Literary Theorist', text: 'Derrida\'s deconstruction challenges the notion that texts have a stable, unified meaning, arguing instead for perpetual "différance."', translation: 'تێگەهێ هەلوەشاندنێ یێ دێریدا تەحەدایێ ل وێ هزرا دکەت کو دەق خاوەن رامانەکا جێگیر و ئێکگرتی نە، بەلکو دبێژیت کو رامان هەر دەم د گوهۆڕینێ دا یە (différance).' },
      { speaker: 'Linguist', text: 'This suggests that language is inherently unstable, and meanings are constantly deferred through a web of signifiers.', translation: 'ئەڤە وێ چەندێ دیار دکەت کو زمان ب شێوەیەکێ بنەڕەتی نە-جێگیرە، و رامان هەر دەم دهێنە پاشخستن ب رێکا تۆرەکا نیشانە-دەران (signifiers).' },
      { speaker: 'Literary Theorist', text: 'By deconstructing binary oppositions—like presence/absence or speech/writing—we reveal the underlying hierarchies and biases in thought.', translation: 'ب هەلوەشاندنا دژبەرە دوو-یی (binary oppositions) - وەک هەبوون/نەبوون یان ئاخفتن/نووسین - ئەم ئەو چینایەتی و لایەنگیرییێن د ناڤ هزرێ دا ئاشکرا دکەین.' },
      { speaker: 'Linguist', text: 'Critically, this doesn\'t mean that texts mean "nothing," but rather that they are open to infinite interpretive possibilities.', translation: 'ب رەخنەگرانە، ئەڤە ب وێ رامانێ نینە کو دەق "چو" ناگەهینن، بەلکو پتر ب وێ رامانێ یە کو ئەوان شیانا هەمی شرۆڤەکرنێن بێ-سنوور هەین.' }
    ],
    vocabulary: [
      { word: 'Perpetual', translation: 'بەردەوام / بێ-کۆتایی' },
      { word: 'Deferred', translation: 'پاشخستن' },
      { word: 'Hierarchies', translation: 'پلەبەندی / چینایەتی' },
      { word: 'Interpretive', translation: 'شرۆڤەکارانە' }
    ]
  },
  {
    id: 'c2-7',
    level: 'C2',
    title: 'The Fermi Paradox and the Great Filter',
    titleKurdish: 'پارادۆکسا فێرمی و پاڵێوەرێ مەزن (The Great Filter)',
    dialogue: [
      { speaker: 'Astronomer', text: 'The Fermi Paradox highlights the contradiction between the high probability of extraterrestrial life and the lack of evidence for its existence.', translation: 'پارادۆکسا فێرمی گرنگیێ ددەتە وێ دژبەرییا د ناڤبەرا ئەگەرێ زۆر یێ هەبوونا ژیانێ ل دەرڤەی زەوی و نەبوونا چ بەڵگە بۆ هەبوونا وێ.' },
      { speaker: 'Astrobiologist', text: 'One potential explanation is the "Great Filter"—a hurdle in evolutionary history that is incredibly difficult to overcome.', translation: 'ئێک ژ شرۆڤەکارییێن گۆمانلێکری "پاڵێوەرێ مەزن"ە - کۆسپەک ل مێژوویا پەرەسەندنێ دا کو تێپەڕاندنا وێ گەلەک یا ب زەحمەتە.' },
      { speaker: 'Astronomer', text: 'If the filter is behind us, we may be alone; if it is ahead of us, the survival of our civilization may be in jeopardy.', translation: 'ئەگەر ئەو کۆسپە ل پشت مە بیت، رەنگە ئەم ب تەنێ بین؛ لێ ئەگەر ل پێش مە بیت، تەمەنێ شارستانییەتا مە دشێت د مەترسیێ دا بیت.' },
      { speaker: 'Astrobiologist', text: 'This existential uncertainty compels us to pursue space exploration with both curiosity and caution.', translation: 'ئەڤ نە-دیاربوونا هەبوونی مە نەچار دکەت کو ئەم گەڕیانێن بۆشاییێ ب چالاکی و ب هایداری ئەنجام بدەین.' }
    ],
    vocabulary: [
      { word: 'Contradiction', translation: 'دژبەری' },
      { word: 'Hurdle', translation: 'کۆسپ / ئاستەنگ' },
      { word: 'Jeopardy', translation: 'مەترسی' },
      { word: 'Compels', translation: 'نەچار کردن' }
    ]
  },
  {
    id: 'c2-8',
    level: 'C2',
    title: 'Algorithmic Bias and Social Justice',
    titleKurdish: 'لایەنگیرییا ئەلگۆریتمی و دادپەروەرییا جڤاکی',
    dialogue: [
      { speaker: 'Data Scientist', text: 'Machine learning models often inherit the biases present in their training data, leading to discriminatory outcomes.', translation: 'مۆدێلێن فێربوونا ئامێری زۆر جاران ئەو لایەنگیرییێن د ناڤ داتایێن راهێنانێ دا هەین ل سەر خۆ هەڵدگرن، کو دبیتە ئەگەرێ ئەنجامێن جیاوازکار (discrimination).' },
      { speaker: 'Sociologist', text: 'This is particularly concerning in automated decision-making systems for hiring, lending, and criminal justice.', translation: 'ئەڤە ب تایبەتی جێگایێ مەترسیێ یە د وان سیستەمێن بڕیاردانا ئۆتۆماتیکی دا بۆ وەرگرتنا کارمەندان، قەرزدان، و دادپەروەرییا تاوانباری.' },
      { speaker: 'Data Scientist', text: 'The "black box" nature of complex algorithms makes it difficult to audit their logic and ensure fairness.', translation: '"سندوقا رەش" یا ئەلگۆریتمێن ئاڵۆز وێ چەندێ ب زەحمەت دکەت کو ئەم بشێین چاودێرییا لۆژیکا وان بکەین و دادپەروەریێ مسۆگەر بکەین.' },
      { speaker: 'Sociologist', text: 'True algorithmic accountability requires transparency, diversity in development teams, and rigorous impact assessments.', translation: 'بەرپرسیاریەتییا ڕاستەقینە یا ئەلگۆریتمی پێتڤی ب شەفافیەت، جۆراوجۆری د تیمێن داهێنانێ دا، و هەڵسەنگاندنا کاریگەرییان ب شێوەیەکێ رژد هەیە.' }
    ],
    vocabulary: [
      { word: 'Discriminatory', translation: 'جیاوازکار / لایەنگیرانە' },
      { word: 'Audit', translation: 'چاودێری کردن / پشکنیین' },
      { word: 'Accountability', translation: 'بەرپرسیارێتی / لێپێچینەوە' },
      { word: 'Rigorous', translation: 'سەخت / رژد / ب وردی' }
    ]
  },
  {
    id: 'c2-9',
    level: 'C2',
    title: 'The Paradox of Choice in Modernity',
    titleKurdish: 'پارادۆکسا هەڵبژارتنێ د سەردەمێ نوو (مۆدێرنیتێ) دا',
    dialogue: [
      { speaker: 'Sociologist', text: 'While modernity promises liberation through infinite choice, Barry Schwartz argues it often leads to anxiety and paralysis.', translation: 'د دەمەکێ دا کو مۆدێرنیتە بەڵێنا ئازادیێ ددەت ب رێکا هەڵبژارتنێن بێ-سنوور، باری شوارتز دبێژیت کو ئەڤە زۆر جاران دبیتە ئەگەرێ دڵەڕاوکێ و پەکنەخستنێ (paralysis).' },
      { speaker: 'Psychologist', text: 'The constant pressure to maximize every decision creates "decision fatigue" and a lingering sense of regret.', translation: 'فشارا بەردەوام بۆ هندێ کو مرۆڤ هەمی بڕیارێن خۆ ب باشترین شێواز بدەت، دبیتە ئەگەرێ "وەستیانا بڕیاردانێ" و هەستەکێ بەردەوام یێ پەشیمانیێ.' },
      { speaker: 'Sociologist', text: 'We end up comparing our reality to an idealized version of what "could have been" if we had chosen differently.', translation: 'ئەم ل کۆتاییێ راستییا خۆ بەراورد دکەین دگەل وێنەکێ نموونەیی یێ وێ چەندێ کو "دکاربوو ب دووی دا بێت" ئەگەر مە ب رێگایەکا دی هەڵبژاردبا.' },
      { speaker: 'Psychologist', text: 'Learning to be a "satisficer"—choosing what is good enough rather than seeking the optimum—is key to subjective well-being.', translation: 'فێربوون بۆ هندێ کو مرۆڤ "satisficer" بیت - ئانکو هەڵبژارتنا تشتێ کو بەسە نەک هندێ یێ هەرە باش - کلیلە بۆ خوشحالییا تاکەکەسی.' }
    ],
    vocabulary: [
      { word: 'Paralysis', translation: 'پەکنەخستن / ئیفلیجی' },
      { word: 'Lingering', translation: 'بەردەوام / ماوە-درێژ' },
      { word: 'Optimum', translation: 'باشترین ئاست / هەرە-باش' },
      { word: 'Well-being', translation: 'خۆشحاڵی / تەبا هەبوون' }
    ]
  },
  {
    id: 'c2-10',
    level: 'C2',
    title: 'The Anthropocene and Geological Agency',
    titleKurdish: 'سەردەمێ ئەنترۆپۆسین و هێزا جیۆلۆژی',
    dialogue: [
      { speaker: 'Geologist', text: 'The Anthropocene marks a new epoch where human activity has become the dominant driver of environmental change on a planetary scale.', translation: 'ئەنترۆپۆسین ئاماژەیە بۆ سەردەمەکێ نوو کو تێدا چالاکییا مرۆڤی بوویە فاکتەرێ سەرەکی یێ گوهۆڕینێن ژینگەیی ل سەر ئاستێ هەسارەیێ.' },
      { speaker: 'Environmental Philosopher', text: 'This challenges the traditional nature-culture binary, as we are now an integral part of the geological processes we once merely observed.', translation: 'ئەڤە تەحەدایێ ل دژبەرییا کلاسیکی یا "سرۆشت-کەلتۆر" دکەت، چونکی ئەم نوکە بەشەکێ سەرەکین ژ وان پرۆسەیێن جیۆلۆژی یێن کو مە جاران بتنێ تەماشا دکرن.' },
      { speaker: 'Geologist', text: 'From plastic-infused rock layers to altered atmospheric chemistry, our impact is being etched into the permanent geological record.', translation: 'ژ تەبەقێن کەڤرێن ب پلاستیک تێکەڵ بووی بگرە هەتا گوهۆڕینا کیمیایا هەوای، کارتێکرنا مە د ناڤ تۆمارێن جیۆلۆژی یێن هەمیشەیی دا دهێتە نووسین.' },
      { speaker: 'Environmental Philosopher', text: 'Recognizing our geological agency requires a radical shift in ethical focus, from short-term interests to deep-time responsibility.', translation: 'دانپێدان ب هێزا مە یا جیۆلۆژی پێتڤی ب گوهۆڕینەکا ریشەیی هەیە د ئاراستەیا ئەخلاقی دا، ژ بەرژەوەندییێن کورت-خایەن بەرەڤ بەرپرسیاریەتییا دەم-درێژ (deep-time).' }
    ],
    vocabulary: [
      { word: 'Epoch', translation: 'سەردەم / چاخ' },
      { word: 'Integral', translation: 'سەرەکی / دانەبڕاو' },
      { word: 'Etched', translation: 'کۆڵراو / نەخش-کراو' },
      { word: 'Agency', translation: 'هێز / کارتێکرن / دەستهەلات' }
    ]
  },
  {
    id: 'c2-11',
    level: 'C2',
    title: 'Cybersecurity and the Zero Trust Model',
    titleKurdish: 'ئاسایشا کایبەر (سایبەر) و مۆدێلێ بێ-باوەرییا رەها (Zero Trust)',
    dialogue: [
      { speaker: 'Security Architect', text: 'Traditional perimeter defense is no longer sufficient; the modern landscape requires a "Zero Trust" architecture.', translation: 'بەرگرییا کلاسیکی یا ل سەر سنووران ئێدی بەس نینە؛ دیمەنێ نوکە پێتڤی ب بونیاتەکێ "بێ-باوەرییا رەها" (Zero Trust) هەیە.' },
      { speaker: 'CTO', text: 'Does that mean every single interaction—whether internal or external—must be continuously verified?', translation: 'ئەڤە ب وێ رامانێ یە کو هەر کارلێکەک - چ یا ناڤخۆیی بیت یان یا دەرەکی - پێتڤییە ب بەردەوامی پشتڕاست ببیت؟' },
      { speaker: 'Security Architect', text: 'Exactly. "Never trust, always verify" is the core tenet, assuming that the network is already compromised.', translation: 'ب درۆستی. "چ دەم جێگایێ باوەریێ نینە، هەر دەم ل ژێر پشکنیینێ یە" بنەمایێ سەرەکییە، ب وێ هزرێ کو ئەڤ تۆڕە جاران تێکچوویە.' },
      { speaker: 'CTO', text: 'While it enhances security, it also introduces significant friction for users and requires a fundamental cultural shift within the organization.', translation: 'د دەمەکێ دا کو ئاسایشێ ب هێز دکەت، هەروەسا هندەک ئاستەنگان (friction) بۆ بەکارهێنەران درۆست دکەت و پێتڤی ب گوهۆڕینەکا کەلتۆری یا بنەڕەتی هەیە د ناڤ رێکخراوێ دا.' }
    ],
    vocabulary: [
      { word: 'Perimeter', translation: 'دەوروبەر / دەورە-دان' },
      { word: 'Tenet', translation: 'بنەما / بڕوا' },
      { word: 'Compromised', translation: 'تێکچوو / هێرش-ل-سەر-کراو' },
      { word: 'Friction', translation: 'ئاستەنگ / پێک-هە ل-کەوتن' }
    ]
  },
  {
    id: 'c2-12',
    level: 'C2',
    title: 'Epistemological Relativism',
    titleKurdish: 'رێژەییا مەعریفەیی (Epistemological Relativism)',
    dialogue: [
      { speaker: 'Philosopher A', text: 'Epistemological relativism posits that knowledge and truth are not absolute but rather relative to social, cultural, and historical contexts.', translation: 'رێژەییا مەعریفەیی (Epistemological relativism) دبێژیت کو زانیاری و راستی نە تشتێن رەهاین، بەلکو گرێدایی بارودۆخێن جڤاکی، کەلتۆری و مێژوویین.' },
      { speaker: 'Philosopher B', text: 'But doesn\'t that lead to a self-refuting position? If all truth is relative, then the statement "truth is relative" must also be relative.', translation: 'لێ ئەرێ ئەڤە نابیتە ئەگەرێ هەڵویستەکێ خۆ-هەلوەشێن (self-refuting)؟ ئەگەر هەمی راستی رێژەیی بن، پا دەستەواژەییا "راستی رێژەییە" ژی پێتڤییە رێژەیی بیت.' },
      { speaker: 'Philosopher A', text: 'Proponents argue that it simply acknowledges the perspective-bound nature of human understanding, denying the possibility of a "God\'s-eye view."', translation: 'پشتەڤان دبێژن کو ئەڤە تەنێ دانپێدانەکە ب سرۆشتێ گرێدایی-دیتنێ یێ تێگەهشتنا مرۆڤی، و نکوولیێ ل هەبوونا دیتنەکا "بێ-لایەن و خودایی" دکەن.' },
      { speaker: 'Philosopher B', text: 'Yet without some objective standard, we lose the ability to adjudicate between competing truth claims, leading to intellectual anarchy.', translation: 'لێ بێی هەبوونا هندەک پیوەرێن بابەتی، ئەم شیانا بڕیاردانێ د ناڤبەرا داخوازکارییێن راستیێ یێن دژبەر دا ژ دەست ددەین، کو ئەڤە دبیتە ئەگەرێ پاشاگەرانییا فکری.' }
    ],
    vocabulary: [
      { word: 'Absolute', translation: 'رەها / بێ-مەرج' },
      { word: 'Refuting', translation: 'رەت-کردنەوە / نکوولی-لێ-کردن' },
      { word: 'Perspective', translation: 'دیدەگا / گۆشە-نیگا' },
      { word: 'Adjudicate', translation: 'بڕیار-دان / ناوبژیوانی-کردن' }
    ]
  },
  {
    id: 'c2-13',
    level: 'C2',
    title: 'Geopolitical Realism vs. Liberalism',
    titleKurdish: 'ڕیالیزما جیۆپۆلیتیکی ل هەمبەر لیبرالیزمێ',
    dialogue: [
      { speaker: 'Political Scientist A', text: 'Realism views international relations as a perpetual struggle for power in an anarchic global system, prioritizing national interest above all.', translation: 'ڕیالیزم تەماشەی پەیوەندییێن نێڤدەولەتی دکەت وەک هەولەکا بەردەوام بۆ دەستهەلاتێ د سیستەمەکێ جیهانی یێ بێ-سەروبەر دا، و بەرژەوەندییا نیشتمانی دئیخیتە پێش هەمی تشتان.' },
      { speaker: 'Political Scientist B', text: 'Liberalism, however, emphasizes the role of international institutions, trade, and shared values in fostering cooperation and mitigating conflict.', translation: 'لێ لیبرالیزم گرنگیێ ددەتە رۆڵێ دامەزراوەیێن نێڤدەولەتی، بازرگانی، و بهایێن هەڤپشک بۆ پەرەپێدانا هەماهەنگیێ و کێمکردنا شەڕان.' },
      { speaker: 'Political Scientist A', text: 'But international law is fragile; when interests clash, states invariably revert to self-help and power projections.', translation: 'لێ یاسایا نێڤدەولەتی یا لاوازە؛ دەمێ بەرژەوەندی دکەڤنە د هەڤڕکیێ دا، دەولەت هەر دەم ڤە دگەڕن بۆ پشت-بەستن ب خۆ و نیشاندانا هێزا خۆ.' },
      { speaker: 'Political Scientist B', text: 'Nonetheless, the historical trend shows that interdependent economies and democratic alliances create a more stable and peaceful global order.', translation: 'سەرەڕای ڤێ ژی، مێژوو دیار دکەت کو ئابوورییێن ب هەڤ ڤە گرێدای و هەڤپەیمانییێن دیموکراسی سیستەمەکێ جیهانی یێ ئارامتر و ئاشتیخوازتر درۆست دکەن.' }
    ],
    vocabulary: [
      { word: 'Anarchic', translation: 'پاشاگەرانی / بێ-قانوون' },
      { word: 'Interdependent', translation: 'ب هەڤ ڤە گرێدای / پشتبەستوو ب هەڤ' },
      { word: 'Mitigating', translation: 'کێم-کردنەوە / کەم-کردنی کاریگەری' },
      { word: 'Invariably', translation: 'هەر دەم / بێ-گوهۆڕین' }
    ]
  },
  {
    id: 'c2-14',
    level: 'C2',
    title: 'The Technological Singularity',
    titleKurdish: 'تاکێتییا تەکنۆلۆژی (The Singularity)',
    dialogue: [
      { speaker: 'Futurist', text: 'The singularity refers to a hypothetical point in the future where artificial intelligence surpasses human intelligence, leading to runaway technological growth.', translation: '"تاکێتی" (Singularity) ئاماژەیە بۆ خالەکا گۆمانلێکری د داهاتی دا کو تێدا ژیرییا دەستکرد ژ ژیرییا مرۆڤی پتر دبیت، کو دبیتە ئەگەرێ گەشەکردنەکا تەکنۆلۆژی یا بێ-کۆنتڕۆڵ.' },
      { speaker: 'Skeptic', text: 'Many experts argue that the limitations of current hardware and our lack of understanding of biological consciousness make this a remote possibility.', translation: 'گەلەک شارەزا دبێژن کو سنوورداربوونا ئامێرێن نوکە (hardware) و نەبوونا تێگەهشتن د هۆشیارییا بایۆلۆژی دا ڤێ چەندێ دکەتە ئەگەرەکێ دوویر.' },
      { speaker: 'Futurist', text: 'But exponential growth in computing power suggests that the transition could happen much faster than we anticipate.', translation: 'لێ گەشەکردنا بازدەر (exponential) د شیانێن کۆمپیۆتەران دا ئاماژە ب هندێ دکەت کو ئەڤ وەرچەرخانە دشێت گەلەک خێراتر روو بدەت ژ وێ چەندێ یا ئەم چاڤەڕێ دکەین.' },
      { speaker: 'Skeptic', text: 'The risks are existential; an ASI—Artificial Super Intelligence—whose goals are not aligned with human values could be catastrophic.', translation: 'مەترسییێن وێ هەبوونی نە؛ ژیرییەکا زەبەلاحا دەستکرد (ASI) کو ئارمانجێن وێ دگەل بهایێن مرۆڤی نە گونجن، دشێت بیتە کارەساتبار.' }
    ],
    vocabulary: [
      { word: 'Hypothetical', translation: 'گریمانەیی / گۆمان-لێ-کراو' },
      { word: 'Exponential', translation: 'خێرا و بازدەر' },
      { word: 'Anticipate', translation: 'چاڤەڕێ کردن / پێشبینی کردن' },
      { word: 'Aligned', translation: 'گونجاو / هاوئاهەنگ' }
    ]
  },
  {
    id: 'c2-15',
    level: 'C2',
    title: 'Quantum Computing and Cryptography',
    titleKurdish: 'کۆمپیۆتەرا کوانتەم و زانستێ نهێنی-نووسینێ (Cryptography)',
    dialogue: [
      { speaker: 'Cryptographer', text: 'Quantum computers have the potential to render our current encryption standards obsolete by solving complex mathematical problems instantaneously.', translation: 'کۆمپیۆتەرێن کوانتەم شیانێن وێ یێ هەین کو سیستەمێن پاراستنا (شێفرە) نوکە بکەنە تشتێن بێ-مفا ب رێکا چارەسەرکردنا کێشەیێن ئاڵۆز یێن بیرکاری ب شێوەیەکێ دەستبەجێ.' },
      { speaker: 'Cybersecurity Expert', text: 'This has triggered a race to develop "post-quantum cryptography" that can withstand attacks from quantum adversaries.', translation: 'ئەڤە بوویە ئەگەرێ کێبڕکێیەکێ بۆ پەرەپێدانا "زانستێ نهێنی-نووسینا پاش-کوانتەم" کو بشێت ل هەمبەر هێرشێن دۆژمنێن کوانتەمی خۆڕاگر بیت.' },
      { speaker: 'Cryptographer', text: 'Lattice-based cryptography is one of the leading candidates for creating these quantum-resistant algorithms.', translation: '"زانستێ نهێنی-نووسینا ل سەر بونیاتێ ماتریسێ" (Lattice-based) ئێکە ژ بەربژارێن سەرەکی بۆ درۆستکردنا ئەوان ئەلگۆریتمێن دژی کوانتەمێ بن.' },
      { speaker: 'Cybersecurity Expert', text: 'The transition will be massive, requiring updates to everything from financial systems to state secrets across the globe.', translation: 'ئەڤ وەرچەرخانە دێ یا مەزن بیت، و پێتڤی ب نووژەنکردنەووا هەمی تشتان هەیە، ژ سیستەمێن دارایی بگرە هەتا نهێنییێن دەولەتێ ل سەرانسەری جیهانێ.' }
    ],
    vocabulary: [
      { word: 'Obsolete', translation: 'بەسەرچوو / بێ-مفا' },
      { word: 'Withstand', translation: 'خۆڕاگری کردن / ل هەمبەر وەستان' },
      { word: 'Adversaries', translation: 'دۆژمن / نەیار' },
      { word: 'Lattice', translation: 'تۆڕ / بونیاتەکێ ماتریسی' }
    ]
  },
  {
    id: 'c2-16',
    level: 'C2',
    title: 'Universal Basic Income (UBI)',
    titleKurdish: 'داهاتێ بنەڕەتی یێ گشتی (UBI)',
    dialogue: [
      { speaker: 'Economist A', text: 'Universal Basic Income provides a guaranteed monthly payment to every citizen, regardless of their employment status or wealth.', translation: 'داهاتێ بنەڕەتی یێ گشتی (UBI) مووچەیەکی پاراستی یێ هەریەکی دابین دکەت بۆ هەر وەڵاتەکی، بێی کو سەح کەنە رەوشا وان یا کاری یان دەولەمەندیێ.' },
      { speaker: 'Economist B', text: 'Critics argue that it would disincentivize work and lead to massive inflation due to increased public spending.', translation: 'رەخنەگر دبێژن کو ئەڤە دێ هێزا کارکردنێ کێم کەت و بیتە ئەگەرێ هەڵاوسانەکا مەزن ژ بەر زیادبوونا خەرجییێن گشتی.' },
      { speaker: 'Economist A', text: 'However, in an age of automation and AI-driven job displacement, UBI could prevent widespread poverty and maintain social stability.', translation: 'لێ، د سەردەمێ ئۆتۆماتیک-کردن و لادانا کاران ب رێکا ژیرییا دەستکرد، UBI دشێت رێگریێ ل هەژارییا بەرفراوان بگریت و ئارامییا جڤاکی ب پارێزیت.' },
      { speaker: 'Economist B', text: 'The funding mechanism is the primary hurdle; would it require drastic tax increases or a fundamental restructuring of the social safety net?', translation: 'شێوازێ دابینکرنا بودجەی کۆسپا سەرەکییە؛ ئەرێ پێتڤی ب زیادکردنەکا زەبەلاحا باجان هەیە یان گوهۆڕینا بنەڕەتی د سیستەمێ پاراستنا جڤاکی دا؟' }
    ],
    vocabulary: [
      { word: 'Disincentivize', translation: 'قورسی-کردن / هاندان کەم کردن' },
      { word: 'Displacement', translation: 'لادان / شوێن-پێ گرتن' },
      { word: 'Hurdle', translation: 'کۆسپ / ئاستەنگ' },
      { word: 'Safety net', translation: 'تۆڕا پاراستنێ (جڤاکی)' }
    ]
  },
  {
    id: 'c2-17',
    level: 'C2',
    title: 'Liquid Democracy and Decentralization',
    titleKurdish: 'دیموکراسییا شل (Liquid Democracy) و نە-ناوەندی بوون',
    dialogue: [
      { speaker: 'Political Theorist', text: 'Liquid democracy is a hybrid model that allows voters to either vote directly or delegate their vote to a trusted intermediary.', translation: 'دیموکراسییا شل مۆدێلەکێ تێکەڵە (hybrid) کو رێ ددەتە دەنگدەران یان ب شێوەیەکێ راستەوخۆ دەنگ بدەن یان دەنگێ خۆ بدەنە نوێنەرەکی کو جهێ باوەریێ بیت.' },
      { speaker: 'Governance Expert', text: 'This provides more flexibility than traditional representative democracy, as proxies can be revoked or changed at any time.', translation: 'ئەڤە نەرمیّەکا زێدەتر دابین دکەت ژ دیموکراسییا نوێنەرایەتییا کلاسیکی، چونکی بریکاری دشێن هەر دەم بهێنە هەلوەشاندن یان گوهۆڕین.' },
      { speaker: 'Political Theorist', text: 'The integration of blockchain technology could ensure the integrity and transparency of the voting process in such a decentralized system.', translation: 'تێکەڵکردنا تەکنۆلۆژییا بلۆکچەین (blockchain) دشێت دەستپاکیی و شەفافییەتا پرۆسەیا دەنگدانێ مسۆگەر بکەت د سیستەمەکێ وەسا یێ نە-ناوەندی دا.' },
      { speaker: 'Governance Expert', text: 'However, the danger lies in the potential for data manipulation and the digital divide, which could exclude marginalized populations.', translation: 'لێ، مەترسی ل وێرێ یە کو دکارن دەستکاری د زانیارییان دا بکەن و هەروەسا جوداهییا دیجیتاڵی، کو دشێت ببیتە ئەگەرێ دوویرخستنا چینێن هەژار و پەراوێزخراو.' }
    ],
    vocabulary: [
      { word: 'Hybrid', translation: 'تێکەڵ / دوو-رەگ' },
      { word: 'Delegate', translation: 'سپاردن / نوێنەرایەتی-پێدان' },
      { word: 'Integrity', translation: 'دەستپاکیی / درۆستی' },
      { word: 'Marginalized', translation: 'پەراوێزخراو / بی-بەهری' }
    ]
  },
  {
    id: 'c2-18',
    level: 'C2',
    title: 'Philosophy of Mind and AI Consciousness',
    titleKurdish: 'فەلسەفەیا عەقڵی و هۆشیارییا ژیرییا دەستکرد',
    dialogue: [
      { speaker: 'Cognitive Philosopher', text: 'The "Hard Problem" of consciousness asks how physical processes in the brain give rise to subjective experience.', translation: '"کێشەیا سەخت" یا هۆشیاریێ دبێژیت کا چەوان پرۆسەیێن فیزیکی د مێشکی دا دبنە ئەگەرێ ئەزموونا تاکەکەسی (subjective experience).' },
      { speaker: 'AI Researcher', text: 'If we create a machine that perfectly mimics human neural architecture, would it truly "feel" or just simulate feeling?', translation: 'ئەگەر ئەم ئامێرەکی درۆست بکەین کو ب درۆستی چاڤ ل بونیاتێ دەماری یێ مرۆڤی بکەت، ئەرێ ئەو دێ ب راستی "هەست" کەت یان تەنێ دێ چاڤ-لێ-کەوتنا هەستی کەت؟' },
      { speaker: 'Cognitive Philosopher', text: 'That is the difference between "weak AI" and "strong AI." A simulation of pain is not the same as the sensation of pain.', translation: 'ئەو جوداهییا د ناڤبەرا "AI یا لاواز" و "AI یا ب هێز" دایە. چاڤ-لێ-کەوتنا ئێشێ نە وەک هەستکردنا ب ئێشێ یە.' },
      { speaker: 'AI Researcher', text: 'Yet, functionalism posits that if a system performs the same functions as the human brain, we must attribute consciousness to it.', translation: 'لێ، فەنکشناڵیزم دبێژیت ئەگەر سیستەمەک هەر هەمان کارێن مێشکێ مرۆڤی ئەنجام بدەت، پێتڤییە ئەم هۆشیاریێ بدەینە پاڵ وی.' }
    ],
    vocabulary: [
      { word: 'Subjective', translation: 'تاکەکەسی / نە-بابەتی' },
      { word: 'Mimics', translation: 'چاڤ-لێ-کەوتن / تەقڵید کردن' },
      { word: 'Sensation', translation: 'هەست پێکردن' },
      { word: 'Attribute', translation: 'دانە-پاڵ / بڕێ-دادان' }
    ]
  },
  {
    id: 'c2-19',
    level: 'C2',
    title: 'Dark Matter and Dark Energy',
    titleKurdish: 'ماددەیا تاری و وزەیا تاری',
    dialogue: [
      { speaker: 'Astrophysicist A', text: 'Dark matter does not emit, absorb, or reflect light, making it invisible, yet it exerts a gravitational pull on visible matter.', translation: 'ماددەیا تاری رۆناهیێ بەلاڤ ناکەت، نامژییت، و ڤەراناگوهێزیت، کو ئەڤە وێ دکەتە نە-دیار، لێ ئەو هێزا کێشکرنێ ل سەر ماددەیێن دیار بکار دئینیت.' },
      { speaker: 'Astrophysicist B', text: 'Even more mysterious is dark energy, which appears to be driving the accelerated expansion of the entire universe.', translation: 'نێهێنی تر وزەیا تارییە، یا کو دیارە دبیتە ئەگەرێ خێراکرنا بەرفراوان بوونا هەمی گەردوونێ.' },
      { speaker: 'Astrophysicist A', text: 'Combined, they account for approximately 95% of the total energy-matter budget of the cosmos, leaving us in the dark about most of reality.', translation: 'ئەڤ هەر دوو پێکڤە نێزیکی ٩٥٪ ژ هەمی بودجەیا وزە-ماددەیا گەردوونێ پێکدئینن، کو مە د ناڤ تارێ دا دێلیت دەربارەی زۆربەیا راستیێ.' },
      { speaker: 'Astrophysicist B', text: 'The search for the "WIMP" or other particles is the high-stakes frontier of modern particle physics.', translation: 'گەڕیان ل دویف "WIMP" یان تەنۆلکەیێن دی، خالەکا مەترسیدار و پێشکەفتی یا فیزیکا تەنۆلکەیی یا نوکە یە.' }
    ],
    vocabulary: [
      { word: 'Emit', translation: 'بەلاڤ کردن (وەک رۆناهی یان گەرمی)' },
      { word: 'Exerts', translation: 'بکار-هێنان (وەک هێز)' },
      { word: 'Accelerated', translation: 'خێرا بوو' },
      { word: 'Frontier', translation: 'خالێن هەرە دوویر و پێشکەفتی (د زانست دا)' }
    ]
  },
  {
    id: 'c2-20',
    level: 'C2',
    title: 'The Gut-Brain Axis and Microbiome',
    titleKurdish: 'تەوەرێ مێشک-ریخۆڵە و میکرۆبایۆم',
    dialogue: [
      { speaker: 'Neurobiologist', text: 'The gut-brain axis is a bidirectional communication network linking the enteric nervous system with the central nervous system.', translation: 'تەوەرێ مێشک-ریخۆڵە تۆرەکا پەیوەندییا دوو-ئاراستەیی یە کو سیستەمێ دەماری یێ ریخۆڵەی ب سیستەمێ دەماری یێ ناڤەندی ڤە دبەستیت.' },
      { speaker: 'Gastroenterologist', text: 'Recent evidence suggests that the gut microbiome plays a crucial role in regulating mood, anxiety, and even neurological health.', translation: 'بەڵگەیێن دوماهییێ دیار دکەن کو میکرۆبایۆما ریخۆڵەی رۆڵەکێ سەرەکی دبینیت د رێکخستنا میزاج، دڵەڕاوکێ، و تەنانەت ساخلەمییا دەماری دا.' },
      { speaker: 'Neurobiologist', text: 'The production of neurotransmitters like serotonin primarily occurs in the gut, highlighting the importance of dietary habits for mental well-being.', translation: 'بەرهەمهێنانا ڤەگوهێزەرێن دەماری وەک سیرۆتۆنین ب شێوەیەکێ سەرەکی د ریخۆڵەدا روو ددەت، کو گرنگییا عادەتێن خوارنێ بۆ باشبوونا دەروونی دیار دکەت.' },
      { speaker: 'Gastroenterologist', text: 'Dysiosis, or an imbalance in gut flora, has been linked to a variety of conditions, from depression to Parkinson\'s disease.', translation: '"دایسیۆسیس"، یان نە-هاوسەنگی د پێکهاتەیا ریخۆڵەدا، ب گەلەک بارودۆخان ڤە هاتییە گرێدان، ژ خەمۆکیێ بگرە هەتا نەخۆشییا پارکینسۆن.' }
    ],
    vocabulary: [
      { word: 'Bidirectional', translation: 'دوو-ئاراستەیی' },
      { word: 'Enteric', translation: 'ریخۆڵەیی / پەیوەندیدار ب هەناڤان' },
      { word: 'Neurotransmitters', translation: 'ڤەگوهێزەرێن دەماری' },
      { word: 'Imbalance', translation: 'نە-هاوسەنگی' }
    ]
  },
  {
    id: 'c2-21',
    level: 'C2',
    title: 'Sustainable Architecture and Biomimicry',
    titleKurdish: 'تەلارسازییا بەردەوام و چاڤ-لێ-کەوتنا سرۆشتی (Biomimicry)',
    dialogue: [
      { speaker: 'Architect', text: 'Biomimicry in architecture involves emulating nature\'s time-tested patterns and strategies to create more sustainable buildings.', translation: 'چاڤ-لێ-کەوتنا سرۆشتی (Biomimicry) د تەلارسازیێ دا بریتییە ژ چاڤ لێکرنا شێواز و ستراتیژییێن سرۆشتی یێن سەلماندکار بۆ درۆستکردنا ئاڤاهییێن بەردەوامتر.' },
      { speaker: 'Sustainability Consultant', text: 'The Eastgate Centre in Zimbabwe, for example, uses passive cooling inspired by the ventilation systems of termite mounds.', translation: 'سەنتەرێ "ئیستگەیت" ل زیمبابوی، بۆ نموونە، ساردکەرهێنەرێن نەرێنی بکار دئینیت کو ژ سیستمێن هەوادارکرنا تلێن تێمرووکان (termites) هاتییە وەرگرتن.' },
      { speaker: 'Architect', text: 'Beyond energy efficiency, we are looking at self-healing materials and carbon-sequestering concrete inspired by coral reefs.', translation: 'زێدەباری کارایییا وزەی، ئەم ل دویف ماددەیێن خۆ-چارەسەرکەر و کۆنکریتێ مژینەووا کاربۆنێ دگەڕێین کو ژ کەنداوێن مەرجانی هاتییە وەرگرتن.' },
      { speaker: 'Sustainability Consultant', text: 'Merging biology with engineering allows us to move from parasitic urbanism to regenerative architecture.', translation: 'تێکەڵکردنا بایۆلۆژیێ دگەل ئەندازیاریێ رێ مە ددەت کو ژ باژێڕنشینییا مێشەخۆر (parasitic) بەرەڤ تەلارسازییا نووژەنکەر بچین.' }
    ],
    vocabulary: [
      { word: 'Emulating', translation: 'چاڤ-لێ-کەوتن / تەقڵید کردن' },
      { word: 'Ventilation', translation: 'هەوادارکرن / گۆهۆڕینا هەوای' },
      { word: 'Sequestering', translation: 'عەمبار کردن / مژین و گرتن' },
      { word: 'Regenerative', translation: 'نووژەنکەر / ژیاندەرەووە' }
    ]
  },
  {
    id: 'c2-22',
    level: 'C2',
    title: 'The Gig Economy and Labor Rights',
    titleKurdish: 'ئابوورییا کارێن کاتی (Gig Economy) و مافێن کارمەندان',
    dialogue: [
      { speaker: 'Sociologist', text: 'The gig economy offers unprecedented flexibility for workers, but it often comes at the cost of job security and benefits.', translation: 'ئابوورییا کارێن کاتی (Gig economy) نەرمیّەکا بێ-وێنە بۆ کارمەندان دابین دکەت، لێ زۆر جاران ئەڤە ل سەر حسێبا جێگیرییا کار و ئیمتیازایە.' },
      { speaker: 'Labor Union Representative', text: 'Classifying gig workers as independent contractors allows companies to bypass labor laws and standard wage protections.', translation: 'ناڤبردنا کارمەندێن کاتی وەک بەڵێندەرێن سەربەخۆ، رێ ددەتە کۆمپانیایان کو یاسایێن کار و پاراستنا مووچەی تێپەڕێنن.' },
      { speaker: 'Sociologist', text: 'Algorithms now act as supervisors, managing performance through data points and ratings, often without human oversight.', translation: 'ئەلگۆریتم نوکە وەک سەرپەرشتیار کار دکەن، و ب رێکا خالێن داتا و هەڵسەنگاندنان کار بڕێڤە دبن، بێی هەبوونا چاودێرییا مرۆڤی.' },
      { speaker: 'Labor Union Representative', text: 'We need new legal definitions that protect the "precariat"—a growing class of workers with little stability and few rights.', translation: 'ئەم پێتڤی ب پێناسەیێن یاسایی یێن نوو نە بۆ پاراستنا "پڕیکاریات" - چینەکا کارمەندان یا بەرەڤ زیادبوونێ کو جێگیری و مافێن وان د کێمن.' }
    ],
    vocabulary: [
      { word: 'Gig', translation: 'کارێ کاتی یان کورت' },
      { word: 'Contractors', translation: 'بەڵێندەر' },
      { word: 'Oversight', translation: 'چاودێری / سەرپەرشتی' },
      { word: 'Stability', translation: 'جێگیری' }
    ]
  },
  {
    id: 'c2-23',
    level: 'C2',
    title: 'Genetic Privacy in the Age of Big Data',
    titleKurdish: 'نهێنییا جیناتی د سەردەمێ داتایێن زەبەلاح دا',
    dialogue: [
      { speaker: 'Ethics Researcher', text: 'The popularity of direct-to-consumer genetic testing kits creates vast databases of highly personal biological information.', translation: 'نەریتبوونا تاقیکردنەوەیێن جیناتی یێن راستەوخۆ بۆ بەکارهێنەران، داتابەیسێن زەبەلاح یێن زانیارییێن بایۆلۆژی یێن تایبەت درۆست دکەت.' },
      { speaker: 'Cyber-Lawyer', text: 'The concern is not just about the individual, but also their relatives, who may share DNA segments and thus their privacy is also at risk.', translation: 'مەترسی تەنێ ل سەر تاکەکەسی نینە، بەلکو ل سەر کەس و کارێن وان ژی یە، یێن کو دکارن پشکەکا DNA یا وان د هەڤپشک بن و ب ڤێ رەنگی نهێنییا وان ژی د مەترسیێ دایە.' },
      { speaker: 'Ethics Researcher', text: 'Could this data be used by insurance companies or employers for genetic discrimination in the future?', translation: 'ئەرێ ئەڤ داتایە دشێت ژ لایێ کۆمپانیایێن دڵنیایی یان خاوەن کاران ڤە بۆ جیاوازکارییا جیناتی د داهاتی دا بهێتە بکارئینان؟' },
      { speaker: 'Cyber-Lawyer', text: 'Legislation like GINA in the US provides some protection, but the rapid pace of technology often outstrips existing legal frameworks.', translation: 'یاسایێن وەک GINA ل ئەمریکا هندەک پاراستنێ دابین دکەن، لێ خێرایییا خێرا یا تەکنۆلۆژیایێ زۆر جاران چارچۆڤەیێن یاسایی یێن نوکە تێپەڕ دکەت.' }
    ],
    vocabulary: [
      { word: 'Direct-to-consumer', translation: 'راستەوخۆ بۆ بەکارهێنەر' },
      { word: 'Segments', translation: 'پشک / پارچە' },
      { word: 'Legislation', translation: 'یاسادانان' },
      { word: 'Outstrips', translation: 'تێپەڕاندن / پێش-کەفتن' }
    ]
  },
  {
    id: 'c2-24',
    level: 'C2',
    title: 'Space Debris and the Kessler Syndrome',
    titleKurdish: 'پاشماوەیێن بۆشاییێ و تووشبوونا (سیندۆما) کێسلەر',
    dialogue: [
      { speaker: 'Space Scientist', text: 'Low Earth Orbit is becoming increasingly congested with space debris, including defunct satellites and fragments from collisions.', translation: 'خۆلا نێزیکی زەویێ بەرەبرە پڕ دبیت ژ پاشماوەیێن بۆشاییێ، ژ وان مانگێن دەستکرد یێن کارنەکەر و پارچەیێن پەیدابووی ژ لێککەفتنان.' },
      { speaker: 'Space Policy Analyst', text: 'The Kessler Syndrome predicts a cascade effect where one collision creates more debris, leading to a chain reaction that makes orbit unusable.', translation: '"سیندۆما کێسلەر" پێشبینییا کاریگەرییەکا زنجیرەیی دکەت کو تێدا هەر لێککەفتنەک پاشماوەیێن زێدەتر درۆست دکەت، کو دبیتە ئەگەرێ کاردانەوەیەکێ کو خۆلا زەویێ نەکێرهاتی بکەت.' },
      { speaker: 'Space Scientist', text: 'Removing large pieces of debris—Active Debris Removal—is technically complex but necessary to ensure the sustainability of space activities.', translation: 'لادانا پارچەیێن مەزن یێن پاشماوەیان - لادانا پاشماوەیێن چالاک - ژ لایێ تەکنیکی ڤە ئاڵۆزە لێ فەرە بۆ مسۆگەرکردنا بەردەوامییا کارێن بۆشاییێ.' },
      { speaker: 'Space Policy Analyst', text: 'We need international treaties to govern space traffic and mandate the de-orbiting of satellites at the end of their lives.', translation: 'ئەم پێتڤی ب پەیماننامەیێن نێڤدەولەتی نە بۆ رێکخستنا هاتنوچۆنا بۆشاییێ و نەچارکردنا لادانا مانگێن دەستکرد ل کۆتایییا ژیانا وان.' }
    ],
    vocabulary: [
      { word: 'Congested', translation: 'قەرەباڵغ / پڕ' },
      { word: 'Defunct', translation: 'کارنەکەر / لەکارکەوتوو' },
      { word: 'Cascade', translation: 'زنجیرەیی / یەک-ل-دوو-یەک' },
      { word: 'Mandate', translation: 'نەچار کردن / ب فەرمی کردنی ئەرکەک' }
    ]
  },
  {
    id: 'c2-25',
    level: 'C2',
    title: 'Modern Monetary Theory (MMT)',
    titleKurdish: 'تیۆرییا دراوی یا نوو (MMT)',
    dialogue: [
      { speaker: 'Macroeconomist A', text: 'MMT posits that countries that issue their own currency cannot go bankrupt because they can always create more money to pay off debts.', translation: 'MMT دەردبڕیت کو ئەو وەڵاتێن کو پارێ خۆ درۆست دکەن نا-فەوتێن چونکی هەر دەم دشێن پارێ زێدەتر چاپ بکەن بۆ دانا قەرزێن خۆ.' },
      { speaker: 'Macroeconomist B', text: 'The constraint, therefore, isn\'t revenue but inflation; the government can spend until the economy hits its productive capacity.', translation: 'لێ تێبینی ل سەر داهات نینە بەلکو ل سەر هەڵاوسانێ (ئینفلاشێن) یە؛ حکومەت دشێت خەرج بکەت هەتا ئابووری دگەهیتە ئاستێ هەرە بلندی یێ بەرهەمهێنانێ.' },
      { speaker: 'Macroeconomist A', text: 'This suggests that deficits don\'t matter in the same way for sovereign currency issuers as they do for households or businesses.', translation: 'ئەڤە وێ چەندێ دیار دکەت کو کورتهێنانا بودجەی بۆ دەولەتێن خودان دراو وەک مال یان بازرگانییان مەترسیدار نینە.' },
      { speaker: 'Macroeconomist B', text: 'Critics argue that this approach risks hyperinflation and undermines the independence of central banks, leading to political instability.', translation: 'رەخنەگر دبێژن کو ئەڤ رێبازە مەترسییا هەڵاوسانەکا زۆر پەیدا دکەت و سەربەخۆیییا بانقێن ناڤەندی تێک ددەت، کو دبیتە ئەگەرێ نە-ئارامییا سیاسی.' }
    ],
    vocabulary: [
      { word: 'Bankrupt', translation: 'فەوتان / ئیفلاس' },
      { word: 'Constraint', translation: 'سنوور / ئاستەنگ' },
      { word: 'Sovereign', translation: 'سەروەر / خودان دەستهەلات' },
      { word: 'Hyperinflation', translation: 'هەڵاوسانی زۆر و خێرا' }
    ]
  },
  {
    id: 'c2-26',
    level: 'C2',
    title: 'The Ethics of Geoengineering',
    titleKurdish: 'ئەخلاقییاتا ئەندازیارییا عەردی (Geoengineering)',
    dialogue: [
      { speaker: 'Climate Scientist', text: 'Geoengineering strategies, like solar radiation management, could provide a last-resort intervention to counteract global warming.', translation: 'ستراتیژییێن ئەندازیارییا عەردی، وەک رێکخستنا تیشکا رۆژێ، دشێن وەک هەولەکا دوماهییێ بن بۆ بەرەنگاربوونا گەرمبوونا جیهانی.' },
      { speaker: 'Ethicist', text: 'The moral hazard is immense; it might encourage political inertia regarding the necessary transition away from fossil fuels.', translation: 'مەترسییا ئەخلاقی یا مەزنە؛ رەنگە ببیتە ئەگەرێ سستییا سیاسی دەربارەی وەرچەرخانەووا پێتڤی ژ سووتەمەنییێن کانی (فۆسیل).' },
      { speaker: 'Climate Scientist', text: 'Indeed, and the unintended consequences—such as altering global precipitation patterns—could be more devastating than the warming itself.', translation: 'ب درۆستی، و کارتێکرنێن نە-وەسا (نە-دیارکردی) - وەک گوهۆڕینا شێوازێن بارانبارینا جیهانی - دشێن کارەساتبارتر بن ژ خودێ گەرمبوونێ.' },
      { speaker: 'Ethicist', text: 'We must avoid a "techno-fix" mentality that ignores the systemic root causes of our environmental crisis.', translation: 'پێتڤییە ئەم ژ مێشکییەتا "چارەسەریا تەکنیکی" دوویر بکەڤین یا کو ئەگەرێن بنەڕەتی یێن قەیرانا مە یا ژینگەیی نادیت.' }
    ],
    vocabulary: [
      { word: 'Inertia', translation: 'سستی / بێ-کاری' },
      { word: 'Counteract', translation: 'بەرەنگار بوون / کارتێکرن کەم کردن' },
      { word: 'Precipitation', translation: 'بارانبارین / دابارین' },
      { word: 'Systemic', translation: 'سیستەمی / گشتگیر' }
    ]
  },
  {
    id: 'c2-27',
    level: 'C2',
    title: 'Transhumanism and Mind Uploading',
    titleKurdish: 'ترانس-هیومانیزم و بارکردنا عەقڵی (Mind Uploading)',
    dialogue: [
      { speaker: 'Futurist', text: 'Transhumanism envisions a future where humans transcend their biological limitations through cybernetic and genetic enhancements.', translation: 'ترانس-هیومانیزم (Transhumanism) وەسفا داهاتییەکی دکەت کو تێدا مرۆڤ ژ سنوورێن بایۆلۆژی یێن خۆ دەرباز دبن ب رێکا پێشکەفتنێن کایبەرنێتیکی و جیناتی.' },
      { speaker: 'Philosopher', text: 'The prospect of mind uploading raises fundamental questions about personal identity: is the "upload" really you, or just a digital duplicate?', translation: 'ئەگەرێ بارکردنا عەقڵی پرسیارێن بنەڕەتی دەربارەی ناسنامەیا تاکەکەسی پەیدا دکەت: ئەرێ ئەو "بارکردنە" ب راستی تۆیی، یان تەنێ کۆپییەکا دیجیتاڵییە؟' },
      { speaker: 'Futurist', text: 'If continuity of consciousness is maintained, the medium shouldn\'t matter. We are patterns of information, not just biological matter.', translation: 'ئەگەر بەردەوامییا هۆشیاریێ بهێتە پاراستن، پێتڤییە ناڤەند (medium) گرنگی پێ نەهێتە دان. ئەم شێوازێن زانیاریین، نەک تەنێ ماددەیێن بایۆلۆژی.' },
      { speaker: 'Philosopher', text: 'However, this "biological chauvinism" might be correct—our physical embodiment may be essential to our subjective experience of being.', translation: 'لێ، رەنگە ئەڤ "لایەنگیرییا بایۆلۆژی" یا درۆست بیت - هەبوونا مە یا فیزیکی رەنگە فەر بیت بۆ ئەزموونا مە یا تاکەکەسی یا هەبوونێ.' }
    ],
    vocabulary: [
      { word: 'Transcend', translation: 'تێپەڕاندن / چوونە سەرتر' },
      { word: 'Embededness', translation: 'تێکەڵ-بوون / جێگیر-بوون' },
      { word: 'Continuity', translation: 'بەردەوامبوون' },
      { word: 'Duplicate', translation: 'کۆپی / دووبارە' }
    ]
  },
  {
    id: 'c2-28',
    level: 'C2',
    title: 'Blockchain and the Future of Trust',
    titleKurdish: 'بلۆکچەین و پاشەڕۆژا باوەرییێ',
    dialogue: [
      { speaker: 'Tech Visionary', text: 'Blockchain technology enables "trustless" transactions by replacing centralized authorities with a decentralized, immutable ledger.', translation: 'تەکنۆلۆژییا بلۆکچەین رێ ددەتە ئەنجامدانا کاران بێی پێتڤیبوون ب باوەرییا کەسی ب رێکا گۆهۆڕینا دەستهەلاتێن ناڤەندی ب دەفتەرەکا نە-ناوەندی و نە-گوهۆڕ.' },
      { speaker: 'Regulator', text: 'While this enhances transparency, it also complicates consumer protection and the enforcement of financial laws.', translation: 'د دەمەکێ دا کو ئەڤە شەفافیەتێ زیاد دکەت، هەروەسا پاراستنا بەکارهێنەران و جێبەجێکردنا یاسایێن دارایی ئاڵۆز دکەت.' },
      { speaker: 'Tech Visionary', text: 'Smart contracts could automate complex legal and financial processes, reducing the need for expensive intermediaries like lawyers and banks.', translation: 'پەیمانێن ژیر دشێن پرۆسەیێن یاسایی و دارایی یێن ئاڵۆز ب شێوەیەکێ ئۆتۆماتیکی ئەنجام بدەن، کو پێتڤیبوون ب ناڤبژیوانییێن گران وەک پارێزەر و بانقان کێم دکەت.' },
      { speaker: 'Regulator', text: 'The challenge is that "code is law" can be rigid; how do we handle errors, hacks, or unforeseen circumstances in such an automated system?', translation: 'ئاستەنگ ئەوە کو "کۆد یاسایە" دشێت توند بیت (نە-شل)؛ ئەم چەوان سەرهدەریێ دگەل خەلەتییان، هاککردن، یان بارودۆخێن چاڤەڕێ-نەکری دکەین د سیستەمەکێ وەسا یێ ئۆتۆماتیکی دا؟' }
    ],
    vocabulary: [
      { word: 'Immutable', translation: 'نە-گوهۆڕ / نە-گۆڕاو' },
      { word: 'Ledger', translation: 'دەفتەرا تۆمارکردنێ' },
      { word: 'Intermediaries', translation: 'ناڤبژیوانی / دەستێ-ناڤێن' },
      { word: 'Rigid', translation: 'توند / بێ-نەرمی' }
    ]
  },
  {
    id: 'c2-29',
    level: 'C2',
    title: 'Synthetic Biology and De-extinction',
    titleKurdish: 'بایۆلۆژیا دەستکرد و زیندەکردنەوە یێن فەوتایی',
    dialogue: [
      { speaker: 'Conservation Biologist', text: 'Synthetic biology might soon enable the de-extinction of species like the woolly mammoth or the passenger pigeon.', translation: 'بایۆلۆژیا دەستکرد رەنگە نێزیک رێ خۆش بکەت بۆ زیندەکردنەووا جۆرێن فەوتایی وەک مامۆسی پیژدار یان کەفتەرا گەڕۆک.' },
      { speaker: 'Ecologist', text: 'The ecological impact could be unpredictable; would these re-introduced species disrupt current ecosystems or facilitate their restoration?', translation: 'کارتێکرنا ژینگەیی دشێت یا چاڤەڕێ-نەکری بیت؛ ئەرێ ئەڤ جۆرێن نوو هاتینە زیندەکردن دێ سیستەمێن ژینگەیی یێن نوکە تێک دەن یان دێ هاریکارییا چاکبوونا وان کەن؟' },
      { speaker: 'Conservation Biologist', text: 'The goal isn\'t just to bring back individual animals, but to restore the ecological functions they once performed.', translation: 'ئارمانج تەنێ زیندەکردنەووا ئاژەلێن تاکەکەسی نینە، بەلکو ڤەگەڕاندنا کارێن ژینگەیی یە یێن کو وان جاران ئەنجام ددان.' },
      { speaker: 'Ecologist', text: 'We must weigh the aesthetic and scientific appeal of de-extinction against the urgent need to protect currently endangered species.', translation: 'پێتڤییە ئەم هاوسەنگییێ بکەین د ناڤبەرا جوانی و سەرەنجا زانستییا زیندەکردنەووەیێ و پێتڤیبوونا بلەز بۆ پاراستنا وەرارێن نوکە د مەترسییا فەوتانێ دا.' }
    ],
    vocabulary: [
      { word: 'De-extinction', translation: 'زیندەکردنەوە یێن فەوتایی' },
      { word: 'Disrupt', translation: 'تێک-دان / پچڕاندن' },
      { word: 'Restoration', translation: 'ڤەگەڕاندن / چاککردنەووە' },
      { word: 'Endangered', translation: 'د مەترسییا فەوتانێ دا' }
    ]
  },
  {
    id: 'c2-30',
    level: 'C2',
    title: 'Cognitive Dissonance and Belief Systems',
    titleKurdish: 'نە-هاوسەنگییا مێشکی (Cognitive Dissonance) و سیستەمێن باوەریێ',
    dialogue: [
      { speaker: 'Psychologist A', text: 'Cognitive dissonance occurs when an individual holds contradictory beliefs or experiences a conflict between their values and actions.', translation: 'نە-هاوسەنگییا مێشکی (Cognitive dissonance) روو ددەت دەمێ تاکەکەسی باوەرییێن دژبەر هەبن یان تووشی کێشەیەکێ ببیت د ناڤبەرا بهایێن خۆ و کارێن خۆ دا.' },
      { speaker: 'Psychologist B', text: 'To mitigate the discomfort, we often resort to motivated reasoning, selectively interpreting evidence to support our existing worldview.', translation: 'بۆ کێمکردنا وێ نە-خۆشییێ، ئەم زۆر جاران پەنا دبەینە بەر هزرکرنا ئاراستەکری، ب رەنگەکی کو بەڵگەیان ب شێوەیەکێ دەستنیشانکری شرۆڤە دکەین بۆ پشتەڤانیکردنا دیتنا مە یا جیهانێ.' },
      { speaker: 'Psychologist A', text: 'This explains why people double down on their beliefs even when faced with overwhelming contradictory facts.', translation: 'ئەڤە وێ چەندێ شرۆڤە دکەت کا بۆچی خەڵک پتر پابەندی باوەرییێن خۆ دبن تەنانەت دەمێ رووبەڕوویێ راستییێن دژبەر یێن مەزن دبن.' },
      { speaker: 'Psychologist B', text: 'True intellectual growth requires the uncomfortable ability to sit with dissonance and remain open to revising our core assumptions.', translation: 'گەشەکرنا فکری یا ڕاستەقینە پێتڤی ب وێ شیانا نە-خۆش هەیە کو مرۆڤ بشێت دگەل وێ نە-هاوسەنگییێ بژیت و یێ ئامادە بیت بۆ گوهۆڕینا گۆمانێن خۆ یێن بنەڕەتی.' }
    ],
    vocabulary: [
      { word: 'Contradictory', translation: 'دژبەر / ناکۆک' },
      { word: 'Mitigate', translation: 'کێم-کردنەوە' },
      { word: 'Resort', translation: 'پەنا-بردن' },
      { word: 'Assumptions', translation: 'گۆمان / گریمانە' }
    ]
  },
  {
    id: 'c2-31',
    level: 'C2',
    title: 'Gravitational Waves and the New Astronomy',
    titleKurdish: 'شەپۆلێن کێشکرنێ و ئەستێرەناسییا نوو',
    dialogue: [
      { speaker: 'Astrophysicist', text: 'The detection of gravitational waves—ripples in the fabric of spacetime caused by cataclysmic events—has opened a new window onto the universe.', translation: 'دیتنا شەپۆلێن کێشکرنێ - ئەو پێلێن د پێکهاتەیا جهـ-دەم دا کو ژ بەر روودانێن کارەساتبار پەیدا دبن - پەنجەرەیەکا نوو ل سەر ڕوویێ گەردوونێ ڤەکر.' },
      { speaker: 'Science Journalist', text: 'Previously, we could only see light; now, we can effectively "hear" the merging of black holes and neutron stars.', translation: 'بەری نوکە مە تەنێ دکاربوو رۆناهیێ ببینین؛ نوکە ئەم دشێین ب شێوەیەکێ کاریگەر "گوه ببیستین" ژ کۆمبوون و تێکەڵبوونا کونا رەش و ئەستێرەیێن نیۆترۆنی.' },
      { speaker: 'Astrophysicist', text: 'This allows us to test General Relativity in extreme gravitational regimes where light-based observations are insufficient.', translation: 'ئەڤە رێ مە ددەت کو رێژەییا گشتی (General Relativity) د بارودۆخێن کێشکرنێ یێن هەرە زۆر دا تاقی بکەین، کو تێبینییێن ل سەر بونیاتێ رۆناهیێ بەس نینن.' },
      { speaker: 'Science Journalist', text: 'Multi-messenger astronomy, combining gravitational waves with electromagnetic signals, provides a much more comprehensive understanding of cosmic phenomena.', translation: 'ئەستێرەناسییا "گەلەک-پەیامبەر"، کو شەپۆلێن کێشکرنێ دگەل ئاماژەیێن کارۆموگناتیسی تێکەڵ دکەت، تێگەهشتنەکا گشتگیر دابین دکەت بۆ دیاردەیێن گەردوونێ.' }
    ],
    vocabulary: [
      { word: 'Ripples', translation: 'پێلێن بچووک / دەنگڤەدان' },
      { word: 'Cataclysmic', translation: 'کارەساتبار / وێرانکەر' },
      { word: 'Comprehensive', translation: 'گشتگیر / تێروتەسەل' },
      { word: 'Phenomena', translation: 'دیاردە' }
    ]
  },
  {
    id: 'c2-32',
    level: 'C2',
    title: 'The Concept of "The Sublime" in Aesthetics',
    titleKurdish: 'تێگەهێ "سەبلایم" (The Sublime) د جوانی-ناسیێ د هەستی-ناسیێ دا',
    dialogue: [
      { speaker: 'Art Historian', text: 'The concept of the "sublime" refers to an experience of greatness beyond all possibility of calculation or imitation, often inspiring awe and terror.', translation: 'تێگەهێ "سەبلایم" (The Sublime) ئاماژەیە بۆ ئەزموونەکا مەزناتییێ کو ژ دەرڤەی هەمی شیانێن هەژمارکردن یان چاڤ-لێ-کەوتنێ یە، و زۆر جاران هەستێ لۆتکەیی و ترسا مەزن پەیدا دکەت.' },
      { speaker: 'Philosopher of Art', text: 'Edmund Burke distinguished the sublime from the "beautiful," the latter being rooted in pleasure and harmony, while the former is linked to the vast and the overwhelming.', translation: 'ئیدمۆند بێرک جوداهی د ناڤبەرا "سەبلایم" و "جوان" دا کر، کو یا دووماهییێ ریشا وێ د خۆشی و هاوئاهەنگیێ دایە، لێ یا ئێکێ ب تشتێن زەبەلاح و مەزن ڤە گرێدایی یە.' },
      { speaker: 'Art Historian', text: 'Romantic painters like Caspar David Friedrich sought to capture the sublime in nature, depicting tiny human figures against immense landscapes.', translation: 'وێنەکێشێن ڕۆمانسی وەک کاسپەر دەیڤید فریدریش هەوڵ ددان سەبلایم د سرۆشت دا دیار بکەن، ب نیشاندانا مرۆڤێن بچووک ل هەمبەر دیمەنێن زەبەلاح.' },
      { speaker: 'Philosopher of Art', text: 'Kant argued that the sublime is not actually in nature, but in our internal realization of our own reason\'s superiority over physical magnitude.', translation: 'کاند دبێژیت کو سەبلایم ب راستی د سرۆشت دا نینە، بەلکو د تێگەهشتنا مە یا ناڤخۆیی دایە بۆ سەردەستییا ئەقڵێ مە ل سەر مەزنییا فیزیکی.' }
    ],
    vocabulary: [
      { word: 'Sublime', translation: 'مەزناتییا بێ-وێنە / لۆتکەیی' },
      { word: 'Awe', translation: 'شۆک / سەرسوڕمان دگەل مەزناتیێ' },
      { word: 'Immense', translation: 'زەبەلاح / مەزن' },
      { word: 'Magnitude', translation: 'مەزنی / قەبارە' }
    ]
  },
  {
    id: 'c2-33',
    level: 'C2',
    title: 'Neoliberalism and Economic Crisis',
    titleKurdish: 'نیۆ-لیبرالیزم و قەیرانا ئابووری',
    dialogue: [
      { speaker: 'Economic Historian', text: 'Neoliberalism, characterized by deregulation and privatization, has been the dominant economic paradigm for several decades.', translation: 'نیۆ-لیبرالیزم، کو تایبەتمەندییا وێ کێمکردنا رێسا و رێنماییان و بیبا-کردنا (privatization) کەرتێ گشتی یە، مۆدێلێ ئابووری یێ زالبوویە بۆ چەندین دەهساڵان.' },
      { speaker: 'Sociologist', text: 'Critics argue that this has led to systemic instability and record levels of wealth inequality, as the benefits of growth fail to "trickle down."', translation: 'رەخنەگر دبێژن کو ئەڤە بوویە ئەگەرێ نە-جێگیرییا سیستەمی و ئاستێن بێ-وێنە یێن نە-یەکسانییا سامانی، چونکی مفایێن گەشەکردنێ ناگەهنە چینێن خوارێ.' },
      { speaker: 'Economic Historian', text: 'The recurring financial crises suggest that markets are not as self-correcting as neoliberal theory assumes.', translation: 'قەیرانێن دارایی یێن دووبارە دیار دکەن کو بازاڕ هند خۆ-چاککەر نینن وەک چەوان تیۆرییا نیۆ-لیبرال دبێژیت.' },
      { speaker: 'Sociologist', text: 'We are now seeing a shift back towards more interventionist policies and a renewed focus on the role of the state in providing social public goods.', translation: 'ئەم نوکە وەرچرخانەکێ دبینین بەرەڤ سیاستێن دەستێوەردانێ و گرنگیپێدانەکا نوو ب رۆڵێ دەولەتێ بۆ دابینکرنا خزمەتگۆزارییێن گشتی یێن جڤاکی.' }
    ],
    vocabulary: [
      { word: 'Paradigm', translation: 'مۆدێل / نموونەیەکا سەرەکی' },
      { word: 'Recurring', translation: 'دووبارە' },
      { word: 'Interventionist', translation: 'دەستێوەردانخواز' },
      { word: 'Inequality', translation: 'نە-یەکسانی' }
    ]
  },
  {
    id: 'c2-34',
    level: 'C2',
    title: 'The Resource Curse in Developing Nations',
    titleKurdish: 'نەفرەتا ژێدەران (Resource Curse) د وەڵاتێن پەرەسەندوو دا',
    dialogue: [
      { speaker: 'Development Economist', text: 'The "Resource Curse" refers to the paradox that countries with abundant natural resources often have less economic growth and worse development outcomes.', translation: '"نەفرەتا ژێدەران" (Resource Curse) ئاماژەیە بۆ وێ پارادۆکسا کو ئەو وەڵاتێن خودان ژێدەرێن سرۆشتی یێن زۆرن، زۆر جاران گەشەکردنەکا ئابووری یا کێمتر و ئەنجامێن پەرەسەندنا خراپتر هەین.' },
      { speaker: 'Political Scientist', text: 'This is often due to "Dutch Disease," where a booming resource sector attracts all investment, starving other industries like manufacturing.', translation: 'ئەڤە زۆر جاران ژ بەر "نەخۆشییا هۆڵەندی" (Dutch Disease) یە، کو تێدا کەرتێ ژێدەران هەمی وەبەرهێنانێ بۆ لایێ خۆ رادکێشیت و وان کەرتێن دی وەک پیشەسازیێ فەقیر دکەت.' },
      { speaker: 'Development Economist', text: 'Furthermore, reliance on resource rents can foster corruption and authoritarianism, as governments don\'t need to rely on taxation.', translation: 'زێدەباری ڤێ، پشت-بەستن ب داهاتێ ژێدەران دشێت ببیتە ئەگەرێ گەندەڵی و دیکتاتۆرییەتێ، چونکی حکومەت پێتڤی ب باجێن خەڵکی نینە.' },
      { speaker: 'Political Scientist', text: 'Breaking the curse requires strong institutions, transparency in revenue management, and economic diversification.', translation: 'شکاندنا ڤێ نەفرەتێ پێتڤی ب دامەزراوەیێن ب هێز، شەفافیەت د بڕێڤەبرنا داهات دا، و جۆراوجۆرکردنا ئابووری هەیە.' }
    ],
    vocabulary: [
      { word: 'Abundant', translation: 'زۆر / تێر' },
      { word: 'Booming', translation: 'گەشەکردوو / خێرا' },
      { word: 'Diversification', translation: 'جۆراوجۆر کردن' },
      { word: 'Authoritarianism', translation: 'دیکتاتۆرییەت / دەستهەلاتخوازی' }
    ]
  },
  {
    id: 'c2-35',
    level: 'C2',
    title: 'Sustainable Urbanism and Sponge Cities',
    titleKurdish: 'باژێڕنشینییا بەردەوام و باژێڕێن سفنجی (Sponge Cities)',
    dialogue: [
      { speaker: 'Urban Planner', text: 'The concept of "Sponge Cities" aims to manage urban flooding by creating infrastructure that absorbs and reuses rainwater.', translation: 'تێگەهێ "باژێڕێن سفنجی" ئارمانجا وێ بڕێڤەبرنا لافاوێن باژێڕی یە ب رێکا درۆستکردنا ژێرخانەیەکێ کو ئاڤا بارانێ بمژییت و دووبارە بکار بهینیت.' },
      { speaker: 'Civil Engineer', text: 'This involves replacing impermeable concrete with permeable surfaces, green roofs, and urban wetlands.', translation: 'ئەڤە ب رێکا گۆهۆڕینا کۆنکریتێ نە-مژەر ب ئەردەکێ مژەر، سەربانێن کەسک، و زۆنگاوێن ناڤ باژێڕی روو ددەت.' },
      { speaker: 'Urban Planner', text: 'It not only mitigates flood risk but also improves water quality and helps combat the "urban heat island" effect.', translation: 'ئەو تەنێ مەترسییا لافاوێ کێم ناکەت، بەلکو جۆرییا ئاڤێ باشتر دکەت و هاریکارییا بەرەنگاربوونا کاریگەریا "دورگەیا گەرماتییا باژێڕی" دکەت.' },
      { speaker: 'Civil Engineer', text: 'Integrating these nature-based solutions into aging urban grids requires significant investment and long-term strategic planning.', translation: 'تێکەڵکردنا ڤان چارەسەرییێن ل سەر بونیاتێ سرۆست د ناڤ تۆڕێن باژێڕی یێن کەڤن دا پێتڤی ب وەبەرهێنانەکا مەزن و پلاندانانەکا ستراتیژی یا دەم-درێژ هەیە.' }
    ],
    vocabulary: [
      { word: 'Sponge', translation: 'سفنج / مژەر' },
      { word: 'Impermeable', translation: 'نە-مژەر / نە-تێپەڕبوو' },
      { word: 'Wetlands', translation: 'زۆنگاو / جهێ ئاڤ-لێ-مای' },
      { word: 'Combat', translation: 'بەرەنگار بوون / شەڕ-کردن' }
    ]
  },
  {
    id: 'c2-36',
    level: 'C2',
    title: 'Digital Twins in Engineering',
    titleKurdish: 'جمکێن دیجیتاڵی (Digital Twins) د ئەندازیاریێ دا',
    dialogue: [
      { speaker: 'Systems Engineer', text: 'A digital twin is a virtual representation of a physical object or system that is updated in real-time from sensor data.', translation: 'جمکەکێ دیجیتاڵی (Digital twin) نیشاندانی نموونەیی یێ (ڤێرچوەل) ئۆبژێکتەکێ فیزیکی یە یان سیستەمەکی یە کو ب شێوەیەکێ دەستبەجێ ب رێکا داتایێن هەستەوەران (sensors) نووژەن دبیت.' },
      { speaker: 'Operations Manager', text: 'By running simulations on the digital twin, we can predict maintenance needs and optimize performance without interrupting operations.', translation: 'ب ئەنجامدانا تاقیکردنەوەیێن نموونەیی ل سەر جمکێ دیجیتاڵی، ئەم دشێین پێتڤییێن چاکسازیێ پێشبینی بکەین و کاراییێ باشتر بکەین بێی کو کار رابگرین.' },
      { speaker: 'Systems Engineer', text: 'This is revolutionizing everything from aircraft engine maintenance to the management of smart cities.', translation: 'ئەڤە شۆڕشەکێ د هەمی تشتاندا درۆست دکەت، ژ چاکسازکرنا مەکینەیێن فڕۆکەیان بگرە هەتا بڕێڤەبرنا باژێڕێن ژیر.' },
      { speaker: 'Operations Manager', text: 'The data challenges are immense, as maintaining high-fidelity synchronization between the physical and digital states requires massive computing power.', translation: 'ئاستەنگێن داتای گەلەک مەزنن، چونکی پاراستنا هاوئاهەنگییا ورد د ناڤبەرا بارودۆخێن فیزیکی و دیجیتاڵی دا پێتڤی ب هێزەرەکا مەزن یا کۆمپیۆتەری هەیە.' }
    ],
    vocabulary: [
      { word: 'Twin', translation: 'جمک / دووانە' },
      { word: 'Fidelity', translation: 'ورداتی / دڵسۆزی (لێرە ب رامانا وردییا زۆر)' },
      { word: 'Synchronization', translation: 'هاوئاهەنگی / هاوزەمان-کردن' },
      { word: 'Optimize', translation: 'باشترین کردن / گەهاندنە باشترین ئاست' }
    ]
  },
  {
    id: 'c2-37',
    level: 'C2',
    title: 'Universal Design and Accessibility',
    titleKurdish: 'دیزاینا گشتی و گەهیشتن (Accessibility)',
    dialogue: [
      { speaker: 'UX Designer', text: 'Universal design is an approach that aims to create products and environments that are accessible to all people, regardless of age or ability.', translation: 'دیزاینا گشتی رێبازەکە کو ئارمانجا وێ درۆستکردنا بەرهەم و ژینگەیانە کو بۆ هەمی خەڵکی کێرهاتبن، بێی سەح کەنە تەمەن یان شیانان.' },
      { speaker: 'Architect', text: 'It goes beyond mere compliance with disability laws, focusing on creating a seamless and inclusive experience for everyone.', translation: 'ئەڤە ژ تەنێ پابەندبوون ب یاسایێن کێم-ئەندامان دەرباز دبیت، و گرنگیێ ددەتە درۆستکردنا ئەزموونەکا بێ-کۆسپ و گشتگیر بۆ هەمییان.' },
      { speaker: 'UX Designer', text: 'Principles like "equitable use" and "simple and intuitive" ensure that navigation is effortless for someone with a visual impairment or a temporary injury.', translation: 'پرەنسیپێن وەک "بکارئینانا یەکسان" و "سادە و ئاسان" مسۆگەر دکەن کو هاتنوچۆن بێ-زەحمەت بیت بۆ کەسەکی کو کێشەیا دیتنێ هەبیت یان برینەکا کاتی.' },
      { speaker: 'Architect', text: 'By designing for the margins, we actually create a better experience for the "typical" user as well.', translation: 'ب دیزاینکرن بۆ وان کەسێن ل پەراوێزێ، ئەم ب راستی ئەزموونەکا باشتر بۆ بەکارهێنەرێ "ئاسایی" ژی درۆست دکەین.' }
    ],
    vocabulary: [
      { word: 'Seamless', translation: 'بێ-دوورمان / بێ-کۆسپ' },
      { word: 'Intuitive', translation: 'بێ-هزرکردن / ئاشکرا' },
      { word: 'Impairment', translation: 'کێشە / کێماسی (د ئەندامێن لەش دا)' },
      { word: 'Margins', translation: 'پەراوێز / قەراغ' }
    ]
  },
  {
    id: 'c2-38',
    level: 'C2',
    title: 'Circular Economy vs. Linear Economy',
    titleKurdish: 'ئابوورییا بازنەیی ل هەمبەر ئابوورییا هێلی',
    dialogue: [
      { speaker: 'Sustainability Expert', text: 'Our current "take-make-waste" linear economy is fundamentally unsustainable due to resource depletion and pollution.', translation: 'ئابوورییا مە یا هێلی یا نوکە کو ل سەر بونیاتێ "وەرگرە-دروستکە-فڕێبدە" یە ب بنەڕەتی یا نە-بەردەوامە ژ بەر خەلاسبوونا ژێدەران و پیسبوونا ژینگەیی.' },
      { speaker: 'Business Consultant', text: 'The circular economy, by contrast, aims to decouple economic growth from resource consumption by designing out waste.', translation: 'بەروڤاژی وێ، ئابوورییا بازنەیی ئارمانجا وێ جوداکردنا گەشەکردنا ئابوورییە ژ مەسرەفکردنا ژێدەران ب رێکا لادانا پاشماوەیان ژ بنەڕەت دا.' },
      { speaker: 'Sustainability Expert', text: 'This involves prioritizing repair, refurbishment, and recycling, effectively keeping materials in use for as long as possible.', translation: 'ئەڤە ب رێکا گرنگیپێدان ب چاککرنەووە، نووژەنکردن، و ریسایکلینێ دبیت، کو ب شێوەیەکێ کاریگەر ماددەیان بۆ دەمەکێ درێژ د ناڤ بکارئینانێ دا دێلیت.' },
      { speaker: 'Business Consultant', text: 'Transitioning to a circular model requires a total redesign of supply chains and a shift in consumer behavior from ownership to access.', translation: 'وەرچەرخان بۆ مۆدێلەکێ بازنەیی پێتڤی ب دووبارە دیزاینکرنا زنجیرەیێن دابینکردنێ و گوهۆڕینا رەفتارا بەکارهێنەری هەیە ژ خاوەنداریەتیێ بەرەڤ گەهیشتن ب خزمەتگۆزاری.' }
    ],
    vocabulary: [
      { word: 'Depletion', translation: 'خەلاس-بوون / کەم-بوون' },
      { word: 'Decouple', translation: 'جودا-کردن / جیا-کردنەوە' },
      { word: 'Refurbishment', translation: 'نووژەن-کردنەوە' },
      { word: 'Ownership', translation: 'خاوەنداریەتی' }
    ]
  },
  {
    id: 'c2-39',
    level: 'C2',
    title: 'The Great Stagnation in Innovation',
    titleKurdish: 'سستییا مەزن (Stagnation) د داهێنانێ دا',
    dialogue: [
      { speaker: 'Historian of Science', text: 'Some economists argue we are in a "Great Stagnation," where major breakthroughs in productivity have slowed down significantly since the mid-20th century.', translation: 'هندەک ئابووریناس دبێژن ئەم د "سستییەکا مەزن" دا نە، کو تێدا پێشکەفتنێن سەرەکی د بەرهەمهێنانێ دا ب شێوەیەکێ دیار خاو بووینە ژ ناڤەراستا سەدەیێ ٢٠ێ وەرە.' },
      { speaker: 'Tech Enthusiast', text: 'But what about the digital revolution? The speed of advancement in computing and internet features is unprecedented.', translation: 'پا دەربارەی شۆڕشا دیجیتاڵی چی؟ خێرایییا پێشکەفتنێ د کۆمپیۆتەر و ئینتەرنێتێ دا بێ-وێنە یە.' },
      { speaker: 'Historian of Science', text: 'True, but critics say the digital world hasn\'t translated into the same broad-based physical improvements—like energy or transport—that we saw during the industrial era.', translation: 'راستە، لێ رەخنەگر دبێژن جیهانا دیجیتاڵی نەبوویە ئەگەرێ هەمان باشتبوونا فیزیکییا گشتگیر - وەک د وزە یان گواستنەووەیێ دا - یا کو مە د سەردەمێ پیشەسازیێ دا دیتی.' },
      { speaker: 'Tech Enthusiast', text: 'Perhaps the gains are just latent. We are on the cusp of revolutions in AI, biotech, and fusion that will redefine productivity entirely.', translation: 'رەنگە ئەو دەستکەفتنە تەنێ یێن ڤەشارتی بن. ئەم ل سەر لێڤا شۆڕشەکێ نە د ژیرییا دەستکرد، بایۆتەکنۆلۆژی، و وزەیا ناوەکی دا کو دێ بەرهەمهێنانێ ب تەواوی پێناسە کەنەووە.' }
    ],
    vocabulary: [
      { word: 'Stagnation', translation: 'وەستان / سستی / راوەستان' },
      { word: 'Breakthroughs', translation: 'سەرکەفتنێن مەزن / داهێنانێن نوو' },
      { word: 'Latent', translation: 'ڤەشارتی / نە-دیار' },
      { word: 'Cusp', translation: 'سەرەتا / لێڤ / دەستپێک' }
    ]
  },
  {
    id: 'c2-40',
    level: 'C2',
    title: 'Game Theory and Nuclear Deterrence',
    titleKurdish: 'تیۆرییا یارییان (Game Theory) و رێگرییا ئەتۆمی',
    dialogue: [
      { speaker: 'Strategic Analyst', text: 'Nuclear deterrence relies on the logic of Mutually Assured Destruction (MAD), a classic game theory scenario where neither side can win a nuclear war.', translation: 'رێگرییا ئەتۆمی پشت ب لۆژیکا "ژناڤچوونا هەڤپشکا مسۆگەربووی" (MAD) دبەسیتت، کو مۆدێلەکێ کلاسیکی یێ تیۆرییا یارییانە و تێدا چو لایەن نەشێن د شەڕێ ئەتۆمی دا سەرکەڤن.' },
      { speaker: 'Peace Researcher', text: 'The stability of this system depends on "rational actors," but history shows that miscalculation and human error are persistent risks.', translation: 'ئارامییا ڤی سیستەمی ب "لایەنێن عاقڵ" ڤە گرێدایی یە، لێ مێژوو دیار دکەت کو خەلەت هەژمارکردن و خەلەتییێن مرۆڤی مەترسییێن بەردەوامن.' },
      { speaker: 'Strategic Analyst', text: 'Escalation dominance and the need to maintain a "credible threat" create a precarious balance that must be constantly managed.', translation: 'سەردەستی د توندکرنێ دا (Escalation dominance) و پێتڤیبوونا پاراستنا "هەڕەشەکا باورپێکراو" هاوسەنگییەکا ل سەر لێڤا مەترسیێ درۆست دکەت کو پێتڤییە ب بەردەوامی بڕێڤە بچیت.' },
      { speaker: 'Peace Researcher', text: 'The emergence of cyber warfare and hypersonic missiles further complicates this balance, potentially shortening the decision-making window during a crisis.', translation: 'پەیدابوونا شەڕێ کایبەر و مووشەکێن هایپەرسۆنیک ڤێ هاوسەنگییێ ئاڵۆزتر دکەت، و رەنگە ماوێ بڕیاردانێ د دەمێ قەیرانان دا کورت بکەت.' }
    ],
    vocabulary: [
      { word: 'Deterrence', translation: 'رێگری / پاشەکشە-پێکردن' },
      { word: 'Precarious', translation: 'مەترسیدار / نە-جێگیر' },
      { word: 'Escalation', translation: 'توند کردن / زیاد-بوونی ئاستێ ململانێیێ' },
      { word: 'Credible', translation: 'باورپێکراو / جهێ باوەریێ' }
    ]
  },
  {
    id: 'c2-41',
    level: 'C2',
    title: 'The Fermi Paradox',
    titleKurdish: 'پارادۆکسا فێرمی (Fermi Paradox)',
    dialogue: [
      { speaker: 'Astronomer A', text: 'The Fermi Paradox highlights the apparent contradiction between the high probability of extraterrestrial civilizations and our lack of contact with them.', translation: 'پارادۆکسا فێرمی ئاماژەیە بۆ دژبەرییا دیار د ناڤبەرا پێشبینییا زۆر یا هەبوونا شارستانییەتێن دەرەکی و نەبوونا چ هەمانگییەکێ دگەل وان دا.' },
      { speaker: 'Astronomer B', text: 'One explanation is the "Great Filter"—the idea that there is an evolutionary hurdle that is almost impossible to surpass.', translation: 'ئێک ژ شرۆڤەیان "فلتەرێ مەزن"ە - ئەو فکرا کو دبێژیت کۆسپەکا پەرەسەندنێ یا هەری کو تێپەڕاندنا وێ نێزیکی مۆستەحیلە.' },
      { speaker: 'Astronomer A', text: 'If the filter is behind us, we might be the first to reach this level of technology. If it\'s ahead, our future might be very grim.', translation: 'ئەگەر فلتەر ل پاش مە بیت، رەنگە ئەم یێن ئێکێ بین بگەهینە ئەڤی ئاستێ تەکنۆلۆژیایێ. لێ ئەگەر ل پێش مە بیت، رەنگە پاشەڕۆژا مە گەلەک تار بیت.' },
      { speaker: 'Astronomer B', text: 'Other theories suggest we are in a "Galactic Zoo" or that advanced civilizations inevitably transition to a virtual existence we can\'t detect.', translation: 'تیۆرییێن دی دبێژن ئەم د "باخچەیەکێ ئاژەڵان یێ گەردوونێ" دا نە یان ژی شارستانییەتێن پێشکەفتی ب شێوەیەکێ نەچار بەرەڤ هەبوونەکا خەیالی (ڤێرچوەل) دچن کو ئەم نەشێین هەست پێ بکەین.' }
    ],
    vocabulary: [
      { word: 'Contradiction', translation: 'دژبەری / ناکۆکی' },
      { word: 'Extraterrestrial', translation: 'دەرەکی (ژ دەرڤەی زەویێ)' },
      { word: 'Hurdle', translation: 'کۆسپ / ئاستەنگ' },
      { word: 'Grim', translation: 'خراپ / توند / بێ-هیوا' }
    ]
  },
  {
    id: 'c2-42',
    level: 'C2',
    title: 'Post-Truth Politics and Information Warfare',
    titleKurdish: 'سیاسەتا پاش-راستیێ و شەڕێ زانیارییان',
    dialogue: [
      { speaker: 'Political Commentator', text: 'In post-truth politics, objective facts are less influential in shaping public opinion than appeals to emotion and personal belief.', translation: 'د سیاسەتا پاش-راستیێ دا، راستییێن بابەتی کارتێکرنا وان کێمترە ل سەر درۆستکرنا رایا گشتی ژ کارتێکرنا ل سەر هەست و باوەرێن تاکەکەسی.' },
      { speaker: 'Data Scientist', text: 'Social media algorithms exacerbate this by creating "echo chambers" where users are only exposed to information that confirms their existing biases.', translation: 'ئەلگۆریتمێن سۆشیال میدیایێ ڤێ چەندێ توندتر دکەن ب رێکا درۆستکرنا "ژوورێن دەنگڤەدانێ" (echo chambers) کو تێدا بەکارهێنەر تەنێ دبینن چ یا باوەریا وان پشت-راست دکەت.' },
      { speaker: 'Political Commentator', text: 'When shared reality dissolves, meaningful democratic debate becomes nearly impossible, as there is no common ground for discussion.', translation: 'دەمێ راستییا هەڤپشک نامینیت، گفتووگۆیا دیموکراسی یا ب رامان دبیتە تشیتەکێ مەستەحیل، چونکی چو ئەردەکێ هەڤپشک بۆ باحثکرنێ نامینیت.' },
      { speaker: 'Data Scientist', text: 'Combating this requires a combination of algorithmic transparency, media literacy, and a renewed emphasis on institutional credibility.', translation: 'بەرەنگاربوونا ڤێ پێتڤی ب شەفافیەت نێ ئەلگۆریتمان، رۆشنبیرییا میدیایی، و گرنگیپێدانەکا نوو ب باوەرییا دامەزراوەیی هەیە.' }
    ],
    vocabulary: [
      { word: 'Dissolves', translation: 'نامینیت / بەڵاڤ دەبێت' },
      { word: 'Exacerbate', translation: 'خراپتر کردن / توندتر کردن' },
      { word: 'Biases', translation: 'لایەنگیری / پێش-داوەریکردن' },
      { word: 'Credibility', translation: 'باوەرپێکراوی / جهێ باوەریێ' }
    ]
  },
  {
    id: 'c2-43',
    level: 'C2',
    title: 'The Trolley Problem in Autonomous Vehicles',
    titleKurdish: 'کێشەیا تڕێنمایبی (Trolley Problem) د ئۆتۆمبێلێن بێ-شۆفێر دا',
    dialogue: [
      { speaker: 'Software Engineer', text: 'The Trolley Problem is no longer a philosophical thought experiment; it\'s a practical challenge for programming autonomous vehicles.', translation: 'کێشەیا تڕێنمایبی (Trolley Problem) ئێدی تەنێ تاقیکردنەوەیەکا فەلسەفی نینە؛ بەلکو ئالنگارییەکا پراکتیکییە بۆ پڕۆگرامکرنا ئۆتۆمبێلێن بێ-شۆفێر.' },
      { speaker: 'Ethicist', text: 'Should a self-driving car prioritize the safety of its passengers or minimize overall casualties in an unavoidable accident?', translation: 'ئەرێ پێتڤییە ئۆتۆمبێلەکا بێ-شۆفێر ساخلەمییا سەرنشینێن خۆ بدەتە پێش یان ژمارەیا قوربانییان کێم کەت د روودانەکا بێ-رێگری دا؟' },
      { speaker: 'Software Engineer', text: 'Programming these dilemmas requires us to quantify human value, which is ethically fraught and subject to cultural variation.', translation: 'پڕۆگرامکرنا ڤان کێشەیان پێتڤی ب هندێ هەیە کو ئەم بهایێ مرۆڤی ب هەژمار دیار بکەین، کو ئەڤە ژ لایێ ئەخلاقی ڤە یا ئاڵۆزە و ل دویف کەلتۆران دگوهۆڕیت.' },
      { speaker: 'Ethicist', text: 'Ultimately, we need a legal and ethical framework that avoids arbitrary decisions and ensures accountability for algorithmic outcomes.', translation: 'د کۆتایی دا، ئەم پێتڤی ب چارچۆڤەیەکێ یاسایی و ئەخلاقی نە کو ژ بڕیارێن سەرپێ (arbitrary) دوویر بکەڤیت و بەرپرسیاریەتێ مسۆگەر بکەت بۆ ئەنجامێن ئەلگۆریتمان.' }
    ],
    vocabulary: [
      { word: 'Casualties', translation: 'قوربانی / زیانێن گیانی' },
      { word: 'Fraught', translation: 'پڕ / ئاڵۆز (ب کێشەیان)' },
      { word: 'Arbitrary', translation: 'سەرپێ / بێ-سەروبەر' },
      { word: 'Accountability', translation: 'بەرپرسیاریەت / لێپرسینەوە' }
    ]
  },
  {
    id: 'c2-44',
    level: 'C2',
    title: 'Behavioral Economics: Nudge Theory',
    titleKurdish: 'ئابوورییا رەفتاری: تیۆرییا پاڵنان (Nudge Theory)',
    dialogue: [
      { speaker: 'Policy Advisor', text: 'Nudge theory suggests that subtle changes in "choice architecture" can significantly influence people\'s behavior without restricting their freedom.', translation: 'تیۆرییا پاڵنان (Nudge theory) دبێژیت کو گوهۆڕینێن بچووک د "دیزاینا هەڵبژارتنان" دا دشێن ب شێوەیەکێ مەزن کارتێکرنێ ل سەر رەفتارا خەڵکی بکەن بێی کو ئازادییا وان سنووردار بکەن.' },
      { speaker: 'Psychologist', text: 'For example, making organ donation an "opt-out" rather than "opt-in" choice drastically increases participation rates.', translation: 'بۆ نموونە، ئەگەر بەخشینا ئەندامێن لەشی بکەنە هەڵبژارتنەک کو تێدا پێتڤی ب رەتکردنەوەیێ (opt-out) هەبیت نەک قەبوولکردنێ (opt-in)، رێژەیا پشکداریێ گەلەک زیاد دبیت.' },
      { speaker: 'Policy Advisor', text: 'This "libertarian paternalism" allows governments to encourage healthier or more sustainable choices while still respecting individual autonomy.', translation: 'ئەڤ "پاتێرنالیزما لیبرتاری" رێ ددەتە حکومەتان کو هانی هەڵبژارتنێن ساخلەمتر یان بەردەوامتر بدەن و هەر د هەمان دەم دا رێزێ ل سەربەخۆیییا تاکەکەسی بگرن.' },
      { speaker: 'Psychologist', text: 'However, critics raise concerns about manipulation and the transparency of who decides what constitutes a "good" nudge.', translation: 'لێ، رەخنەگر گۆمانان دەربارەی دەستکاری (manipulation) و شەفافیەتا وی کەسێ بڕیارێ ددەت کا "پاڵنانەکا باش" چییە، پەیدا دکەن.' }
    ],
    vocabulary: [
      { word: 'Subtle', translation: 'نە-دیار / هویر / بچووک' },
      { word: 'Architecture', translation: 'بونیات / دیزاین' },
      { word: 'Paternalism', translation: 'بابانە-بڕیاردان / دەستێوەردان بۆ مفای' },
      { word: 'Opt-out', translation: 'رەت-کردنەوەی پشکداری' }
    ]
  },
  {
    id: 'c2-45',
    level: 'C2',
    title: 'The Sapir-Whorf Hypothesis',
    titleKurdish: 'گریمانەیا ساپیر-وۆرف (Sapir-Whorf Hypothesis)',
    dialogue: [
      { speaker: 'Linguist A', text: 'The Sapir-Whorf hypothesis, or linguistic relativity, posits that the structure of a language influences the way its speakers conceptualize the world.', translation: 'گریمانەیا ساپیر-وۆرف، یان رێژەییا زمانەوانی، دبێژیت کو بونیاتێ زمانەکی کارتێکرنێ ل سەر رەنگێ تێگەهشتنا ئاخێوەران بۆ جیهانێ دکەت.' },
      { speaker: 'Linguist B', text: 'The "strong" version, linguistic determinism, suggests that language dictates thought, but it has been largely debunked.', translation: '"وەشانەیا ب هێز"، یان حەتمییەتا زمانەوانی، دبێژیت کو زمان فکری دیار دکەت، لێ ئەڤە ب شێوەیەکێ مەزن هاتییە رەتکرن.' },
      { speaker: 'Linguist A', text: 'The "weak" version is more widely accepted—that language categorizes reality in ways that make certain thoughts easier or more frequent.', translation: '"وەشانەیا لاواز" پتر دهێتە قەبوولکردن - کو زمان راستیێ وەسا پۆلین دکەت کو هندەک هزران ئاسانتر یان پتر بکەت.' },
      { speaker: 'Linguist B', text: 'For example, languages with gendered nouns or different ways of describing spatial orientation can subtly shape cognition over time.', translation: 'بۆ نموونە، ئەو زمانێن ناڤێن نێر و مێ تێدا هەین یان رێکێن جودا یێن وەسفکردنا ئاراستەیان، دشێن ب شێوەیەکێ هویر کار ل سەر شیانێن مێشکی بکەن ب دەمی را.' }
    ],
    vocabulary: [
      { word: 'Conceptualize', translation: 'تێگەهشتن / درۆستکردنا فکرا تشتەکی' },
      { word: 'Dictates', translation: 'سەپاندن / فەرمان-دان' },
      { word: 'Debunked', translation: 'پووچکردنەوە / رەت-کردنەوە ب بەڵگە' },
      { word: 'Spatial', translation: 'جهی / پەیوەندیدار ب جهی ڤە' }
    ]
  },
  {
    id: 'c2-46',
    level: 'C2',
    title: 'Universal Grammar and Chomsky',
    titleKurdish: 'رێزمانا گشتی (Universal Grammar) و چۆمسکی',
    dialogue: [
      { speaker: 'Linguistics Student', text: 'Chomsky\'s theory of Universal Grammar suggests that humans are born with an innate, biological template for acquiring language.', translation: 'تیۆرییا چۆمسکی دەربارەی رێزمانا گشتی دبێژیت کو مرۆڤ یێ ژ دایک بوویە ب قالبەکێ بایۆلۆژی یێ سرۆشتی (innate) بۆ فێربوونا زمانی.' },
      { speaker: 'Professor', text: 'This "LAD"—Language Acquisition Device—explains why children can master complex grammar far more rapidly than general learning would permit.', translation: 'ئەڤ "LAD" یە - ئامێرێ وەرگرتنا زمانی - شرۆڤە دکەت کا بۆچی زارۆک دشێن فێری رێزمانا ئاڵۆز ببن گەلەک خێراتر ژ وێ چەندێ یا فێربوونا گشتی رێ ددەت.' },
      { speaker: 'Linguistics Student', text: 'Critics, however, argue that linguistic diversity is too vast to be constrained by a single biological template.', translation: 'لێ رەخنەگر دبێژن کو جۆراوجۆرییا زمانەوانی یا زۆر زەبەلاحە بۆ هندێ کو ب تەنێ قالبەکێ بایۆلۆژی بهێتە سنووردارکردن.' },
      { speaker: 'Professor', text: 'The debate now focuses on whether there are true "linguistic universals" or if language is purely a product of cultural evolution and general cognition.', translation: 'گفتووگۆ نوکە ل سەر هندێ یە کا ئەرێ ب راستی "تشتێن گشتی یێن زمانەوانی" یێن هەین یان زمان تەنێ بەرهەمێ پەرەسەندنا کەلتۆری و هزرکرنا گشتییە.' }
    ],
    vocabulary: [
      { word: 'Innate', translation: 'سرۆشتی / زایەندی / خوداکرد' },
      { word: 'Template', translation: 'قالب / نموونە' },
      { word: 'Acquisition', translation: 'وەرگرتن / فێربوون' },
      { word: 'Constrained', translation: 'سنووردار-کراو' }
    ]
  },
  {
    id: 'c2-47',
    level: 'C2',
    title: 'String Theory and the Multiverse',
    titleKurdish: 'تیۆرییا تەنوورکە (String Theory) و گەردوونێن زۆربەر (Multiverse)',
    dialogue: [
      { speaker: 'Theoretical Physicist', text: 'String theory proposes that fundamental particles are actually one-dimensional strings vibrating at different frequencies.', translation: 'تیۆرییا تەنوورکە (String theory) پێشنیار دکەت کو تەنۆلکەیێن بنەڕەتی ب راستی "تەشوێیێن" (تەنوورکەیێن) یەک-رەهەندی نە کو ب لەرەلەرێن جودا دڤەلەرن.' },
      { speaker: 'Science Writer', text: 'One of its implications is the existence of extra dimensions—up to ten or eleven—beyond the three spatial ones we experience.', translation: 'ئێک ژ ئەنجامێن وێ هەبوونا رەهەندێن زێدەترە - هەتا دە یان یازدە رەهەندان - ژ دەرڤەی ئەو سێ رەهەندێن ئەم هەست پێ دکەین.' },
      { speaker: 'Theoretical Physicist', text: 'This leads to the "Landscape" of string theory, suggesting a vast multiverse of universes with entirely different physical constants.', translation: 'ئەڤە مە دگەهینیتە "دیمەنێ" تیۆرییا تەشوێیان، کو ئاماژە ب گەردوونەکێ زۆربەر (multiverse) یێ مەزن دکەت کو تێدا هەر گەردوونەک یاسایێن فیزیکی یێن جودا هەبن.' },
      { speaker: 'Science Writer', text: 'The main criticism is the lack of testability; how can a theory be truly scientific if it cannot be falsified by experiment?', translation: 'رەخنەیا سەرەکی ئەوە کو تاقیکردنەوەیا ل سەر نابیت؛ چەوان تیۆرییەک دێ بیتە زانستییا ڕاستەقینە ئەگەر نەشێن ب تاقیکردنەوەیێ رەت بکەین (فالسفیکەیشن)؟' }
    ],
    vocabulary: [
      { word: 'Fundamental', translation: 'بنەڕەتی' },
      { word: 'Vibrating', translation: 'ڤەلەرزین' },
      { word: 'Multiverse', translation: 'گەردوونێن زۆربەر / کۆمە-گەردوون' },
      { word: 'Falsified', translation: 'سەلماندنی چەوتیێ / رەت-کردنەوە' }
    ]
  },
  {
    id: 'c2-48',
    level: 'C2',
    title: 'Behavioral Psychology: Crowd Mentality',
    titleKurdish: 'دەروونناسییا رەفتاری: مێشکییەتا قەرەباڵغیێ',
    dialogue: [
      { speaker: 'Sociologist', text: 'Gustave Le Bon\'s "The Crowd" argues that individuals lose their rational self-consciousness when they are part of a large group.', translation: 'گۆستاف لۆ بۆن د پەرتووکا "قەرەباڵغی" دا دبێژیت کو تاکەکەسی تێگەهشتنا خۆ یا عاقڵانە ژ دەست ددەن دەمێ دبنە پشکەک ژ کۆمەکا مەزن.' },
      { speaker: 'Social Psychologist', text: 'This "collective mind" is driven by primal instincts and can lead to impulsive, often destructive behaviors that no individual would perform alone.', translation: 'ئەڤ "مێشکێ ب کۆم" ل دویف غەریزێن سەرەتایی دچیت و دشێت ببیتە ئەگەرێ کارێن بێ-هزر و زۆر جاران وێرانکەر کو چو کەس ب تنێ ئەنجام نادەت.' },
      { speaker: 'Sociologist', text: 'Anonymity and contagion play a role; emotions spread rapidly through the crowd, overriding personal moral judgment.', translation: 'نە-دیاربوونی ناڤی و "تەشبەنە" (contagion) رۆڵ دبینن؛ هەست ب خێرایی د ناڤ قەرەباڵغیێ دا بەلاڤ دبن و بڕیارا ئەخلاقی یا تاکەکەسی ژ کار دێخن.' },
      { speaker: 'Social Psychologist', text: 'Modern research on "deindividuation" confirms many of these insights, especially in the context of online mob behavior.', translation: 'ڤەکۆلینێن نوکە ل سەر "نە-تاکەکەسی کرن" (deindividuation) گەلەک ژ ڤان تێگەهشتنان پشت-راست دکەن، ب تایبەت د رەفتارا قەرەباڵغییا ئەلەکترۆنی دا.' }
    ],
    vocabulary: [
      { word: 'Anonymity', translation: 'نە-دیاربوونی ناسنامێ' },
      { word: 'Contagion', translation: 'گواستنەووا خێرا (وەک نەخۆشی یان هەستان)' },
      { word: 'Impulsive', translation: 'بێ-هزر / بێ-پلاندانان' },
      { word: 'Primal', translation: 'سەرەتایی / بنەڕەتی' }
    ]
  },
  {
    id: 'c2-49',
    level: 'C2',
    title: 'Social Capital and Community Resilience',
    titleKurdish: 'سەرمایەیا جڤاکی و خۆڕاگرییا کۆمەڵایەتی',
    dialogue: [
      { speaker: 'Community Organizer', text: 'Social capital refers to the networks of relationships, trust, and shared values that enable a society to function effectively.', translation: 'سەرمایەیا جڤاکی (Social capital) ئاماژەیە بۆ تۆرێن پەیوەندییان، باوەری، و بهایێن هەڤپشک کو رێ ددەنە جڤاکی ب شێوەیەکێ کاریگەر کار بکەت.' },
      { speaker: 'Urban Sociologist', text: 'Robert Putnam\'s "Bowling Alone" warned about the decline of civic engagement and its negative impact on community resilience.', translation: 'رۆبێرت پۆتنام د پەرتووکا "تەنێ بژین" دا هایداری دا دەربارەی کێمبوونا پشکدارییا جڤاکی و کارتێکرنا وێ یا خراب ل سەر خۆڕاگرییا کۆمەڵایەتی.' },
      { speaker: 'Community Organizer', text: 'Strong "bonding" social capital connects people within a group, while "bridging" capital creates links between different diverse communities.', translation: 'سەرمایەیا جڤاکی یا "بەستەر" (bonding) خەڵکی د ناڤ کۆمەکێ دا ب هەڤ ڤە گرێدەت، لێ سەرمایەیا "کۆپڕی" (bridging) بەستەران د ناڤبەرا جڤاکێن جودا دا درۆست دکەت.' },
      { speaker: 'Urban Sociologist', text: 'In times of crisis, communities with high social capital recover faster because they can self-organize and support vulnerable members more effectively.', translation: 'د دەمێ قەیرانان دا، ئەو جڤاکێن سەرمایەیا جڤاکی یا بلند هەین خێراتر چاک دبن چونکی دشێن خۆ رێک بکەن و پشتەڤانییا ئەندامێن لاواز بکەن ب کاریگەری.' }
    ],
    vocabulary: [
      { word: 'Resilience', translation: 'خۆڕاگری / توانای ڤەگەڕان بۆ رەوشا جاران' },
      { word: 'Civic', translation: 'مەدەنی / شارستانی' },
      { word: 'Engagement', translation: 'پشکداری / تێوەگلان' },
      { word: 'Vulnerable', translation: 'لاواز / ئەوێ مەترسی ل سەر' }
    ]
  },
  {
    id: 'c2-50',
    level: 'C2',
    title: 'Algorithmic Bias in Justice Systems',
    titleKurdish: 'لایەنگیرییا ئەلگۆریتمی د سیستەمێن دادوەری دا',
    dialogue: [
      { speaker: 'Civil Rights Lawyer', text: 'The use of predictive algorithms in sentencing and bail decisions risks institutionalizing historical biases present in the data.', translation: 'بکارئینانا ئەلگۆریتمێن پێشبینیکەر د بڕیارێن زیندانیکردن و کەفالەتێ دا مەترسییا ئەوەی هەیە کو لایەنگیرییێن مێژوویی یێن د ناڤ داتایان دا "بەرەسمی" بکەن.' },
      { speaker: 'AI Ethicist', text: 'Algorithms are "black boxes"; we often don\'t understand how they arrive at a "high-risk" score, making it difficult to challenge the decision.', translation: 'ئەلگۆریتم "سندووقێن رەشن"؛ ئەم زۆر جاران تێناگەهین کا چەوان گەهشتنە نمرەیەکا "مەترسییا بلند"، کو ئەڤە رەخنەگرتنا ل سەر بڕیارێ زەحمەت دکەت.' },
      { speaker: 'Civil Rights Lawyer', text: 'If the training data is skewed by biased policing practices, the algorithm will simply reproduce and even amplify those inequities.', translation: 'ئەگەر داتایێن مەشقپێدانێ ژ لایێ رەفتارێن پۆلیسی یێن لایەنگیر ڤە تێکچووبن، ئەلگۆریتم دێ تەنێ وان نەیەکسانییان دووبارە بەرهەم ئینیت و تەنانەت پتر کەت.' },
      { speaker: 'AI Ethicist', text: 'We need "algorithmic auditing" and a human-in-the-loop approach to ensure that automated tools are transparent and fair.', translation: 'ئەم پێتڤی ب "وردبینیا ئەلگۆریتمی" و رێبازەکێ نە کو مرۆڤ تێدا رۆڵ هەبیت بۆ مسۆگەرکردنا هندێ کو ئامێرێن ئۆتۆماتیکی شەفاف و دادپەروەر بن.' }
    ],
    vocabulary: [
      { word: 'Sentencing', translation: 'بڕیاردانا سزای' },
      { word: 'Institutionalizing', translation: 'بەرەسمی کردن / کردنە دامەزراوە' },
      { word: 'Skewed', translation: 'تێکچوو / لایەنگیر / نە-راست' },
      { word: 'Audit', translation: 'وردبینی / پشکنین' }
    ]
  },
  {
    id: 'c2-51',
    level: 'C2',
    title: 'The Precautionary Principle',
    titleKurdish: 'پرەنسیپێ پێشوەختە-هایداری (Precautionary Principle)',
    dialogue: [
      { speaker: 'Environmentalist', text: 'The precautionary principle states that if an action or policy has a suspected risk of causing harm, the burden of proof falls on those proposing the action.', translation: 'پرەنسیپێ پێشوەختە-هایداری دبێژیت ئەگەر کارەک یان سیاسەتەک گۆمانا مەترسییا زیانێ ل سەر هەبیت، ئەرکێ سەلماندنێ دکەڤیتە سەر ملێ وان کەسێن پێشنیارا وی کاری دکەن.' },
      { speaker: 'Innovation Consultant', text: 'While well-intentioned, over-applying this principle can stifle innovation and prevent the development of beneficial technologies like GMOs or nanotech.', translation: 'هەرچەندە ئارمانج یا باشە، لێ بکارئینانا زێدە یا ڤی پرەنسیپی دشێت داهێنان کێم کەت و رێگریێ ل پەرەپێدانا تەکنۆلۆژیایێن ب مفاک وەک گوهۆڕینا جیناتی یان نانۆتەکنۆلۆژی بگریت.' },
      { speaker: 'Environmentalist', text: 'But "waiting for absolute scientific certainty" can be an excuse for inaction while irreversible ecological damage occurs.', translation: 'لێ "چاڤەڕێکرن بۆ پشتباستبوونا زانستی یا رەها" دشێت ببیتە ئەگەرەک بۆ بێ-کاریێ دەمێ تێکچوونێن ژینگەیی یێن نە-ڤەگەڕ دەست پێ دکەن.' },
      { speaker: 'Innovation Consultant', text: 'The challenge is defining "proportional" responses; we need a balance between risk mitigation and the pursuit of progress.', translation: 'ئالنگاری ل وێرێ یە کو پێناسەیا کاردانەوەیێن "گونجاو" بکەین؛ ئەم پێتڤی ب هاوسەنگییەکا نە د ناڤبەرا کێمکرنا مەترسیێ و هەوڵدان بۆ پێشکەفتنێ.' }
    ],
    vocabulary: [
      { word: 'Precautionary', translation: 'پێشوەختە-هایداری / پارێزەری' },
      { word: 'Stifle', translation: 'خنکاندن / رێگیری-لێ-کردن' },
      { word: 'Irreversible', translation: 'نە-ڤەگەڕ / بێ-گەڕانەوە' },
      { word: 'Proportional', translation: 'گونجاو / هاوڕێژە' }
    ]
  },
  {
    id: 'c2-52',
    level: 'C2',
    title: 'Cognitive Biases in Decision Making',
    titleKurdish: 'لایەنگیرییێن مێژکی د بڕیاردانێ دا',
    dialogue: [
      { speaker: 'Business Manager', text: 'The "sunk cost fallacy" often leads us to continue investing in a failing project just because we\'ve already spent significant resources on it.', translation: '"خەلەتییا تێچوونا خوارتی" (Sunk cost fallacy) زۆر جاران مە پالپێدەن کو بەردەوام بین د وەبەرهێنانێ دا د پرۆژەیەکێ فەشل دا، تەنێ ژ بەر هندێ کو مە ژێدەرێن زۆر تێدا خەرج کرینە.' },
      { speaker: 'Strategic Analyst', text: 'Confirmation bias is another hurdle; we tend to seek out information that validates our hypotheses while ignoring evidence that contradicts them.', translation: 'لایەنگیرییا پشت-راستکردنەوە ئاستەنگەکا دییە؛ ئەم مەیلا هندێ مە هەیە گەڕیێ ل دویف وان زانیارییان بکەین کو گریمانەیێن مە پشت-راست دکەن و چاڤێ خۆ ل دویف وان بەڵگەیان دگرین کو دژی مە رادوەستن.' },
      { speaker: 'Business Manager', text: 'How do we institutionalize objective decision-making? Is "red-teaming" or assigning a "devil\'s advocate" enough?', translation: 'ئەم چەوان دشێین بڕیاردانا بابەتی "بەرەسمی" بکەین؟ ئەرێ درۆستکردنا "تیمەکا سوور" (نەیار) یان دیارکردنا "پارێزەرێ شەیتانی" بەسە؟' },
      { speaker: 'Strategic Analyst', text: 'It requires a culture of "intellectual humility" where leaders are encouraged to seek out dissenting views to avoid groupthink.', translation: 'ئەڤە پێتڤی ب کەلتۆرەکێ "دلنزمییا فکری" هەیە کو تێدا رێبەر بهێنە هاندان گەڕیێ ل دویف دیتنێن جودا بکەن بۆ هندێ ژ "هزرکرنا ب کۆم" دوویر بکەڤن.' }
    ],
    vocabulary: [
      { word: 'Fallacy', translation: 'خەلەتیێ / بیرۆکەیەکا چەوت' },
      { word: 'Hypotheses', translation: 'گریمانە' },
      { word: 'Humility', translation: 'دلنزمی / خۆ-ب-کێم-زانین' },
      { word: 'Dissenting', translation: 'نەیار / دژبەر (د دیتن دا)' }
    ]
  },
  {
    id: 'c2-53',
    level: 'C2',
    title: 'The Great Silk Road and Globalization',
    titleKurdish: 'رێکا ئاوریشمی یا مەزن و جیهانگیری',
    dialogue: [
      { speaker: 'Historian A', text: 'The Silk Road was not just a trade route for luxury goods; it was the world\'s first great corridor for cultural and technological exchange.', translation: 'رێکا ئاوریشمی تەنێ رێکا بازرگانییا تشتێن گران-بەها نەبوو؛ بەلکو یەکەم رێڕەوێ مەزن یێ جیهانێ بوو بۆ گۆهۆڕینا کەلتۆری و تەکنۆلۆژی.' },
      { speaker: 'Historian B', text: 'Paper-making, gunpowder, and even religions spread from East to West, while philosophical ideas flowed the other way.', translation: 'بەرهەمهێنانا کاغەزێ، باروود، و تەنانەت ئایین ژ روژهەلات بەرەڤ روژئاڤا بەلاڤ بوون، د دەمەکێ دا بیۆکیێن فەلسەفی ب ئاراستەیەکێ دی دبەزین.' },
      { speaker: 'Historian A', text: 'It was a "proto-globalization" that linked disparate civilizations and demonstrated the power of interconnectedness long before the modern era.', translation: 'ئەو "کۆنە-جیهانگیری" (proto-globalization) بوو کو شارستانییەتێن ژێک-جودا ب هەڤ ڤە گرێدان و هێزا هەڤبەستییێ نیشان دا گەلەک بەری سەردەمێ نوکە.' },
      { speaker: 'Historian B', text: 'However, it also facilitated the spread of pathogens, like the Black Death, illustrating the double-edged sword of global connectivity.', translation: 'لێ، هەروەسا رێ خۆش کر بۆ بەلاڤبوونا میکرۆبێن نەخۆشییان، وەک "مرنا ڕەش"، کو نیشاندەرا شمشێرێ دوو-سەرە یێ پەیوەندییا جیهانییە.' }
    ],
    vocabulary: [
      { word: 'Corridor', translation: 'رێڕەو' },
      { word: 'Disparate', translation: 'ژێک-جودا / جیاواز' },
      { word: 'Pathogens', translation: 'میکرۆبێن نەخۆشی-پەیداکەر' },
      { word: 'Connectivity', translation: 'پەیوەندی / بەستەری' }
    ]
  },
  {
    id: 'c2-54',
    level: 'C2',
    title: 'Cyber-Espionage and Statecraft',
    titleKurdish: 'جاسووسییا ئەلەکترۆنی و هونەرێ دەولەتداریێ',
    dialogue: [
      { speaker: 'Security Analyst', text: 'Cyber-espionage has become a core component of modern statecraft, allowing nations to steal intellectual property and undermine adversaries without firing a shot.', translation: 'جاسووسییا ئەلەکترۆنی بووەیە پشکەکا سەرەکی یا هونەرێ دەولەتداریێ یێ نوکە، کو رێ ددەتە دەولەتان سامانێن فکری بدزن و نەیارێن خۆ لاواز بکەن بێی تەقاندنا چ فیشەکان.' },
      { speaker: 'Diplomat', text: 'The lack of clear international norms in cyberspace makes it a "Grey Zone" where actions often hover just below the threshold of traditional warfare.', translation: 'نەبوونا یاسایێن نێڤدەولەتی یێن روون د بۆشایییا ئەلەکترۆنی دا وێ دکەتە "زۆنەکا خۆڵەمێشی" کو تێدا کار زۆر جاران تەنێ کێمەک خوارترن ژ ئاستێ شەڕێ کلاسیکی.' },
      { speaker: 'Security Analyst', text: 'The "attribution problem" is a major hurdle; it\'s technically difficult to definitively prove which state actor is behind a sophisticated cyberattack.', translation: '"کێشەیا دیارکردنا هێرشبەری" کۆسپەکا مەزنە؛ ژ لایێ تەکنیکی ڤە یا ب زەحمەتە ب شێوەیەکێ دوماهیی بسەلمینین کا کیژ دەولەت ل پشت هێرشەکا ئەلەکترۆنی یا ئاڵۆزە.' },
      { speaker: 'Diplomat', text: 'This creates a strategic environment of plausible deniability, increasing the risk of miscalculation and unintended escalation.', translation: 'ئەڤە ژینگەیەکا ستراتیژی یا "نکوولییا لۆژیکی" درۆست دکەت، کو مەترسییا خەلەت هەژمارکردنێ و توندبوونا چاڤەڕێ-نەکری زیاد دکەت.' }
    ],
    vocabulary: [
      { word: 'Espionage', translation: 'جاسووسی' },
      { word: 'Undermine', translation: 'لاواز-کردن / بنکۆڵ-کردن' },
      { word: 'Threshold', translation: 'ئاست / لێڤ / بەربەست' },
      { word: 'Attribution', translation: 'دانە-پاڵ / دیارکردنا ئەنجامدەر' }
    ]
  },
  {
    id: 'c2-55',
    level: 'C2',
    title: 'The Psychology of Language and Thought',
    titleKurdish: 'دەروونناسییا زمان و فکرێ',
    dialogue: [
      { speaker: 'Cognitive Scientist A', text: 'Do we think in words, or is there a "mentalese"—a pre-linguistic language of thought common to all humans?', translation: 'ئەرێ ئەم ب پەیڤان هزر دکەین، یان تشەتەک ب ناڤێ "مێنتالیز" (mentalese) یێ هەین - زمانەکێ هزری یێ بەری زمانەوانی کو هەمی مرۆڤ تێدا هەڤپشکن؟' },
      { speaker: 'Cognitive Scientist B', text: 'Aphasia patients often retain complex reasoning abilities despite losing their command of language, suggesting that thought is independent of speech.', translation: 'ئەو نەخۆشێن تووشی "ئەفازیا" (سستییا ئاخفتنێ) دبن، زۆر جاران شیانێن هزرکرنا ئاڵۆز دپارێزن سەرەڕای ژ دەستدانا زمانی، کو ئەڤە ئاماژەیە بۆ هندێ کو فکر ژ پەیڤینێ جودایە.' },
      { speaker: 'Cognitive Scientist A', text: 'Yet, the development of inner speech in childhood seems crucial for self-regulation and executive function.', translation: 'لێ، گەشەکرنا ئاخفتنا ناڤخۆیی د زارۆکینیێ دا دیارە یا فەرە بۆ رێکخستنا بڕیاران و کارێن مێشکی یێن بلەز.' },
      { speaker: 'Cognitive Scientist B', text: 'Language might act as a "cognitive tool" that reshapes and enhances our innate mental abilities rather than just expressing them.', translation: 'زمان رەنگە وەک "ئامێرەکێ هزرینێ" کار بکەت کو شیانێن مە یێن مێشکی یێن بنەڕەتی دووبارە دیزاین بکەت و پتر بکەت، نەک تەنێ دەرببڕیت.' }
    ],
    vocabulary: [
      { word: 'Independent', translation: 'سەربەخۆ / جودا' },
      { word: 'Inner speech', translation: 'ئاخفتنا ناڤخۆیی' },
      { word: 'Executive function', translation: 'کارێن بڕێڤەبرنا مێشکی' },
      { word: 'Innate', translation: 'سرۆشتی / زایەندی' }
    ]
  },
  {
    id: 'c2-56',
    level: 'C2',
    title: 'The "Death of the Author" in Literary Theory',
    titleKurdish: '"مرنا نڤیسەری" د تیۆرییا ئەدەبی دا',
    dialogue: [
      { speaker: 'Literary Critic A', text: 'Roland Barthes\' "The Death of the Author" argues that the author\'s intentions and biography are irrelevant to the interpretation of a text.', translation: 'رۆلاند بارت د تێزێ "مرنا نڤیسەری" دا دبێژیت کو مەرەم و ژیاننامەیا نڤیسەری چو پەیوەندی ب شرۆڤەکرنا تێکستی ڤە نینە.' },
      { speaker: 'Literary Critic B', text: 'Instead, the meaning is generated by the reader in the act of reading, making the text a site of infinite possibilities.', translation: 'بەروڤاژی وێ، واتا ژ لایێ خواندەڤانی ڤە د دەمێ خواندنێ دا پەیدا دبیت، کو ئەڤە تێکستی دکەتە جهەک بۆ ئەگەرێن بێ-دوماهی.' },
      { speaker: 'Literary Critic A', text: 'This shift from author-centric to reader-centric criticism allows for multiple, often contradictory, valid interpretations.', translation: 'ئەڤ وەرچەرخانە ژ رەخنەیا نڤیسەر-تەوەر بەرەڤ خواندەڤان-تەوەر رێ ددەتە هەبوونا گەلەک شرۆڤەکرنێن جودا و زۆر جاران دژبەر لێ هەر درۆست.' },
      { speaker: 'Literary Critic B', text: 'However, some argue that ignoring the historical and social context of the author risks missing the political substance of the work.', translation: 'لێ هندەک دبێژن کو پشتگوێخستنا بارودۆخێ مێژوویی و جڤاکی یێ نڤیسەری مەترسییا هندێ هەیە کو ناڤەرۆکا سیاسی یا بەرهەمی بهێتە ون-کردن.' }
    ],
    vocabulary: [
      { word: 'Irrelevant', translation: 'بێ-پەیوەندی' },
      { word: 'Interpretation', translation: 'شرۆڤەکرن / لێکدانەوە' },
      { word: 'Centric', translation: 'ناوەندی / تەوەر' },
      { word: 'Substance', translation: 'ناڤەرۆک / جەوهەر' }
    ]
  },
  {
    id: 'c2-57',
    level: 'C2',
    title: 'Quantum Entanglement and Non-locality',
    titleKurdish: 'ئاڵۆزییا کوانتەم (Quantum Entanglement) و نە-جهی بوون',
    dialogue: [
      { speaker: 'Physicist A', text: 'Quantum entanglement occurs when two particles become linked such that the state of one instantaneously influences the other, regardless of distance.', translation: 'ئاڵۆزییا کوانتەم روو ددەت دەمێ دوو تەنۆلکە وەسا ب هەڤ ڤە گرێدای ببن کو بارودۆخێ ئێکی ب شێوەیەکێ دەستبەجێ کارتێکرنێ ل یێ دی بکەت، بێی سەح کەنە دوویریێ.' },
      { speaker: 'Physicist B', text: 'Einstein famously called this "spooky action at a distance" because it seemed to violate the speed limit of light set by relativity.', translation: 'ئاینیشتاین ئەڤەیە بناڤ کر ب "کارێ ترسێنەر یێ جودا" چونکی وەسا دیار بوو کو توندوتیژییێ دگەل سنوورێ خێرایییا رۆناهیێ دکەت یا کو رێژەییێ دیار کری.' },
      { speaker: 'Physicist A', text: 'Yet, experiments have consistently confirmed this non-locality, suggesting that information at the quantum level is interconnected in ways we still don\'t fully grasp.', translation: 'لێ تاقیکردنەوان ب بەردەوامی ئەڤ نە-جهی بوونە (non-locality) پشت-راست کرییە، کو ئاماژە ب هندێ دکەت کو زانیاری د ئاستێ کوانتەمی دا ب شێوازێن وەسا ب هەڤ ڤە گرێدایی نە کو ئەم هێژ ب تەواوی تێناگەهین.' },
      { speaker: 'Physicist B', text: 'This doesn\'t allow for faster-than-light communication, but it challenges our fundamental perception of space and causality.', translation: 'ئەڤە رێ نادەتە پەیوەندییکرنەکا خێراتر ژ رۆناهیێ، لێ ئالنگارییێ دگەل تێگەهشتنا مە یا بنەڕەتی یا جهـ و هۆکار-ئەنجام (causality) دا دکەت.' }
    ],
    vocabulary: [
      { word: 'Entanglement', translation: 'ئاڵۆزی / تێکەڵ-بوون' },
      { word: 'Spooky', translation: 'ترسێنەر / سەیر' },
      { word: 'Grasp', translation: 'تێگەهشتن / مژین' },
      { word: 'Causality', translation: 'هۆکار-ئەنجام' }
    ]
  },
  {
    id: 'c2-58',
    level: 'C2',
    title: 'The Hegemony of English in Global Science',
    titleKurdish: 'سەردەستییا زمانی ئینگلیزی د زانستێ جیهانی دا',
    dialogue: [
      { speaker: 'Academic A', text: 'English has become the undisputed lingua franca of global science, enabling seamless cross-border collaboration.', translation: 'ئینگلیزی بوویە زمانێ سەرەکی و بێ-کێبڕکێ یێ زانستێ جیهانی، کو رێ ددەتە هەماهەنگییەکا بێ-کۆسپ د ناڤبەرا وەڵاتان دا.' },
      { speaker: 'Academic B', text: 'While convenient, this hegemony can marginalize non-native speakers and lead to a bias against research published in other languages.', translation: 'سەرەڕای هندێ کو ئەڤە ئاسانکاريیە، لێ ئەڤ سەردەستییە دشێت ئاخێوەرێن نە-رەسەن پەراوێز بئیخیت و بیتە ئەگەرێ لایەنگیرییەکێ دژی وان ڤەکۆلینێن ب زمانێن دی دهێنە بەلاڤکرن.' },
      { speaker: 'Academic A', text: 'It also shapes the conceptual frameworks of research, potentially narrowing the intellectual diversity of the global scientific community.', translation: 'هەروەسا چارچۆڤەیێن تێگەهشتنێ یێن ڤەکۆلینان دیار دکەت، کو رەنگە جۆراوجۆرییا فکری یا جڤاکێ زانستی یێ جیهانی بەرتەنگ بکەت.' },
      { speaker: 'Academic B', text: 'We must promote multilingualism and provide more support for translations to ensure that scientific knowledge remains a truly global commons.', translation: 'پێتڤییە ئەم پشتەڤانییا فرە-زمانی بکەین و هاریکارییا زێدەتر دابین بکەین بۆ وەرگێڕانێ بۆ هندێ مسۆگەر بکەین کو زانیارییا زانستی وەک تشەتەکێ نیشتمانی یێ جیهانی بمینیت.' }
    ],
    vocabulary: [
      { word: 'Hegemony', translation: 'سەردەستی / هەژموون' },
      { word: 'Undisputed', translation: 'بێ-کێبڕکێ / بێ-شەک' },
      { word: 'Lingua franca', translation: 'زمانێ هەڤپشکێ پەیوەندیێ' },
      { word: 'Commons', translation: 'سامانێن هەڤپشک / تشتێن گشتی' }
    ]
  },
  {
    id: 'c2-59',
    level: 'C2',
    title: 'Zero-Knowledge Proofs (ZKP)',
    titleKurdish: 'بەڵگەیێن بێ-زانیاری (Zero-Knowledge Proofs - ZKP)',
    dialogue: [
      { speaker: 'Cryptographer A', text: 'Zero-Knowledge Proofs allow one party to prove to another that they know a specific piece of information without actually revealing the information itself.', translation: 'بەڵگەیێن بێ-زانیاری رێ ددەتە لایەنەکی کو بۆ لایەنەکێ دی بسەلمینیت کو ئەو زانیارییەکا دەستنیشانکری دزانیت بێی کو ب راستی زانیارییێ ب خۆ ئاشکرا بکەت.' },
      { speaker: 'Privacy Advocate', text: 'This is a game-changer for digital privacy, enabling everything from anonymous voting to secure identity verification.', translation: 'ئەڤە وەرچەرخانەکا مەزنە بۆ نهێنییا دیجیتاڵی، کو رێ ددەتە هەمی تشتان، ژ دەنگدانا نە-دیار بگرە هەتا پشت-راستکرنەووا ناسنامێ ب شێوەیەکێ پاراستی.' },
      { speaker: 'Cryptographer A', text: 'Zk-SNARKs are a type of ZKP used in blockchains to ensure transaction validity while keeping the sender and amount private.', translation: 'Zk-SNARKs جۆرەکێ ZKP نە کو د بلۆکچەینان دا دهێنە بکارئینان بۆ مسۆگەرکردنا درۆستییا کاران و هەر د هەمان دەم دا ڤەشارتی هێلانا نێرەر و بڕێ پارەی.' },
      { speaker: 'Privacy Advocate', text: 'The computational overhead is currently high, but optimizations are rapidly making ZKP practical for widespread adoption.', translation: 'خەرجییا ژمارەکاری (computational overhead) نوکە یا بلندە، لێ چاکسازی ب خێرایی ZKP دکەنە تشەتەکێ پراکتیکی بۆ بکارئینانەکا بەرفراوان.' }
    ],
    vocabulary: [
      { word: 'Reveal', translation: 'ئاشکرا کردن / نیشان-دان' },
      { word: 'Validity', translation: 'درۆستی / کێرهاتن' },
      { word: 'Overhead', translation: 'خەرجییا زێدە / باری زیادی' },
      { word: 'Adoption', translation: 'وەرگرتن / جێبەجێکردن' }
    ]
  },
  {
    id: 'c2-60',
    level: 'C2',
    title: 'The Ethics of CRISPR and Gene Drives',
    titleKurdish: 'ئەخلاقییاتا کریسپەر (CRISPR) و توندییا جیناتی (Gene Drives)',
    dialogue: [
      { speaker: 'Bioethicist', text: 'CRISPR technology allows for precise editing of DNA, but "Gene Drives" could force a specific trait through a whole population in the wild.', translation: 'تەکنۆلۆژییا "کریسپەر" رێ ددەتە دەستکارییا ورد د DNA دا، لێ "Gene Drives" دشێن سیفەتەکێ دەستنیشانکری ب هێز د ناڤ لایەنێن جودا یێن سرۆشتی دا بەلاڤ بکەن.' },
      { speaker: 'Geneticist', text: 'This could be used to eradicate malaria by making mosquitoes unable to carry the parasite, saving millions of lives.', translation: 'ئەڤە دشێت بهێتە بکارئینان بۆ ژناڤبرنا مەلاریا ب رێکا برێ نە-کێرهاتنی کردنا پێشوویێن مژی یێن هەڵگرێن پاراسایتان، کو ژیانا ملیۆنان خەڵکی دپارێزیت.' },
      { speaker: 'Bioethicist', text: 'But the unintended ecological consequences are terrifying. Once released, we might not be able to stop or reverse the genetic change.', translation: 'لێ کاردانەوەیێن ژینگەیی یێن نە-چاڤەڕێکری د ترسێنەرن. دەمێ دەست پێ دکەت، رەنگە ئەم نەشێین راگرین یان گوهۆڕینا جیناتی ڤەگێڕین.' },
      { speaker: 'Geneticist', text: 'We need robust international governance and "kill switches" to ensure that we don\'t accidentally cause an ecological collapse.', translation: 'ئەم پێتڤی ب بڕێڤەبرنەکا نێڤدەولەتی یا ب هێزن و "سویچێ کوشتنێ" (kill switches) بۆ مسۆگەرکردنا هندێ کو ب رێکەفت نەبینە ئەگەرێ هەرەسهێنانەکا ژینگەیی.' }
    ],
    vocabulary: [
      { word: 'Precise', translation: 'ورد / تەواو' },
      { word: 'Eradicate', translation: 'ژناڤبرن / ریشەکێش-کردن' },
      { word: 'Unintended', translation: 'نە-خواستی / نە-بۆ-مەرەم' },
      { word: 'Collapse', translation: 'هەرەس-هێنان / تێکچوون' }
    ]
  },
  {
    id: 'c2-61',
    level: 'C2',
    title: 'Martin Heidegger and the Concept of "Being"',
    titleKurdish: 'مارتین هایدێگەر و تێگەهێ "هەبوونێ"',
    dialogue: [
      { speaker: 'Philosophy Student', text: 'Heidegger\'s "Being and Time" seeks to redefine our understanding of existence by focusing on "Dasein"—the human being-in-the-world.', translation: 'مارتین هایدێگەر د "هەبوون و دەم" دا هەوڵ ددەت تێگەهشتنا مە بۆ هەبوونێ (existence) دووبارە پێناسە بکەت ب رێکا گرنگیپێدان ب "دازایین" (Dasein) - مرۆڤ وەک هەبوونەک د جیهانێ دا.' },
      { speaker: 'Professor', text: 'He argues that for centuries, Western philosophy has experienced a "forgetfulness of Being," treating existence as just another object to be analyzed.', translation: 'ئەو دبێژیت کو بۆ چەندین سەدەیە، فەلسەفەیا روژئاڤا تووشی "ژبیرکرنا هەبوونێ" بوویە، و سەرەدەریێ دگەل هەبوونێ دکەت تەنێ وەک پارچەیەکا دی بۆ شرۆڤەکرنێ.' },
      { speaker: 'Philosophy Student', text: 'Dasein is characterized by "thrownness"—the fact that we find ourselves already in a specific historical context we didn\'t choose.', translation: '"دازایین" تایبەتمەندییا وێ "هاڤێتن" (thrownness) یە - ئەو راستییا کو ئەم کەتینە د بارودۆخەکی مێژوویی یێ دەستنیشانکری دا کو مە هەڵنەبژارتییە.' },
      { speaker: 'Professor', text: 'Authentic existence requires facing our own mortality and making choices based on our own possibilities, rather than following the crowd.', translation: 'هەبوونا ڕاستەقینە پێتڤی ب رووبەڕووبوونا مرنا مە و بڕیارێن ل سەر بونیاتێ ئەگەرێن مە یە، نەک تەنێ چاڤ ل قەرەباڵغیێ بکەین.' }
    ],
    vocabulary: [
      { word: 'Existence', translation: 'هەبوون' },
      { word: 'Authentic', translation: 'ڕاستەقینە / رەسەن' },
      { word: 'Mortality', translation: 'فەنابوون / مرن' },
      { word: 'Possibilities', translation: 'ئەگەر / شیان' }
    ]
  },
  {
    id: 'c2-62',
    level: 'C2',
    title: 'Complexity Theory and Emergence',
    titleKurdish: 'تیۆرییا ئاڵۆزیێ (Complexity Theory) و پەیدابوون (Emergence)',
    dialogue: [
      { speaker: 'Systems Scientist', text: 'Complexity theory studies systems where the interactions between individual parts produce complex, unpredictable behaviors at a global level.', translation: 'تیۆرییا ئاڵۆزیێ (Complexity theory) ل وان سیستەمان دەکۆلیت کو تێدا هەماهەنگییا د ناڤبەرا پارچێن تاکەکەسی دا رەفتارێن ئاڵۆز و چاڤەڕێ-نەکری د ئاستەکێ گشتی دا پەیدا دکەن.' },
      { speaker: 'Biologist', text: 'This is the essence of "emergence"—as seen in ant colonies or the human brain—where the whole is greater than the sum of its parts.', translation: 'ئەڤە جەوهەرێ "پەیدابوونێ" (emergence) یە - وەک چەوان د مێریان یان مێشکێ مرۆڤی دا دهێتە دیتن - کو تێدا کۆم (تەواو) مەزنترە ژ کۆما پارچەیێن خۆ.' },
      { speaker: 'Systems Scientist', text: 'Such systems are often "self-organizing" and operate near the "edge of chaos," balancing stability with adaptability.', translation: 'ئەڤ جۆرە سیستەمە زۆر جاران "خۆ-رێکخەر"ن و ل سەر "لێڤا ئاژاوێ" کار دکەن، و هاوسەنگییێ د ناڤبەرا جێگیری و گونجاو-بوونیێ دا دکەن.' },
      { speaker: 'Biologist', text: 'Understanding emergence is crucial for tackling global challenges like climate change or pandemics, which are more than the sum of local events.', translation: 'تێگەهشتن د پەیدابوونێ دا یا فەرە بۆ رووبەڕووبوونا ئالنگارییێن جیهانی وەک گوهۆڕینا تەمەسا یان پەتایان، کو ئەو زێدەترن ژ تەنێ کۆما روودانێن ناوخۆیی.' }
    ],
    vocabulary: [
      { word: 'Interactions', translation: 'هەماهەنگی / کارتێکرنا تێکەڵ' },
      { word: 'Unpredictable', translation: 'چاڤەڕێ-نەکری' },
      { word: 'Sum', translation: 'کۆم / ئەنجامێ کۆمکردنێ' },
      { word: 'Adaptability', translation: 'توانای گونجان' }
    ]
  },
  {
    id: 'c2-63',
    level: 'C2',
    title: 'Sovereign Citizen Movement and Legal Myths',
    titleKurdish: 'بزاڤێن هاووەڵاتییێن سەروەر و خورافاتێن یاسایی',
    dialogue: [
      { speaker: 'Legal Scholar', text: 'The Sovereign Citizen movement is based on the pseudolegal belief that individuals can exempt themselves from government authority through specific verbal formulas.', translation: 'بزاڤا هاووەڵاتییێن سەروەر (Sovereign Citizen) ل سەر باوەرەکا یاسایییا چەوت (pseudolegal) ئاڤا بوویە کو دبێژیت تاکەکەسی دشێن خۆ ژ دەستهەلاتا حکومەتێ قورتال کەن ب رێکا هندەک رەستەیێن تایبەت.' },
      { speaker: 'Police Officer', text: 'They often use confusing legalistic gibberish, like the "strawman theory," during traffic stops or in court to deny jurisdiction.', translation: 'ئەو زۆر جاران هندەک پەیڤێن یاسایی یێن ئاڵۆز بکار دئینن، وەک تیۆرییا "پیاوێ پڕکا" (strawman)، د دەمێ هاتنوچۆنێ یان دادگەهێ دا بۆ نکوولیکردن ژ دەستهەلاتا دادگەهێ.' },
      { speaker: 'Legal Scholar', text: 'Despite these claims being consistently rejected by every court, the movement has grown, fueled by conspiracy theories and anti-government sentiment.', translation: 'سەرەڕای هندێ کو ئەڤ داخوازکارییە ب بەردەوامی ژ لایێ هەمی دادگەهان ڤە دهێنە رەتکردن، لێ بزاڤەکە یا مەزن بووی کر ب هێزا تیۆرییێن پیلانگێڕیی و هەستێن دژی حکومەتێ.' },
      { speaker: 'Police Officer', text: 'It creates dangerous situations for law enforcement, as these individuals often believe the laws they are breaking simply don\'t apply to them.', translation: 'ئەڤە بارودۆخێن مەترسیدار بۆ جێبەجێکەرێن یاسایێ پەیدا دکەت، چونکی ئەڤ کەسە زۆر جاران باوەر دکەن کو ئەو یاسایێن ئەو دەشکێنن چو پەیوەندی ب وان ڤە نینە.' }
    ],
    vocabulary: [
      { word: 'Exempt', translation: 'بەخشین / قورتال-کردن (ژ ئەرکەکی)' },
      { word: 'Jurisdiction', translation: 'دەستهەلاتا یاسایی / چوارچۆڤەیا دەستهەلاتێ' },
      { word: 'Sentiment', translation: 'بایۆ / هەست / مەیول' },
      { word: 'Enforcement', translation: 'جێبەجێکردن' }
    ]
  },
  {
    id: 'c2-64',
    level: 'C2',
    title: 'The Gaia Hypothesis and Planetary Health',
    titleKurdish: 'گریمانەیا گایا (Gaia Hypothesis) و ساخلەمییا هەسارەیی',
    dialogue: [
      { speaker: 'Ecologist A', text: 'James Lovelock\'s Gaia hypothesis proposes that the Earth functions as a single, self-regulating biological organism.', translation: 'گریمانەیا گایای یا جەیمس لۆڤلۆک پێشنیار دکەت کو زەوی وەک زیندەوەرەکێ بایۆلۆژی یێ تەنێ و خۆ-رێکخەر کار دکەت.' },
      { speaker: 'Ecologist B', text: 'Critics initialy dismissed it as "New Age mysticism," but many of its core ideas about feedback loops are now fundamental to Earth System Science.', translation: 'رەخنەگر ل دەستپێکێ ئەڤ گریمانەیە وەک "خەیالێن ئایینی یێن نوو" رەت کر، لێ نوکە گەلەک ژ بیرۆکەیێن وێ یێن بنەڕەتی دەربارەی زڤڕینێن کارتێکرنا بەرامبەر د زانستێ سیستەمێ زەویێ دا بنەڕەتین.' },
      { speaker: 'Ecologist A', text: 'Life doesn\'t just inhabit the environment; it actively shapes the atmosphere and oceans to maintain conditions suitable for its own survival.', translation: 'ژیان تەنێ د ژینگەیێ دا ناژیت؛ بەلکو ب شێوەیەکێ چالاک بەرگەهێ هەوای و ئۆقیانووسان درۆست دکەت بۆ پاراستنا بارودۆخەکێ گونجاو بۆ مانا خۆ.' },
      { speaker: 'Ecologist B', text: 'The danger of human activity is that we may disrupt these complex regulatory systems beyond their capacity for self-repair.', translation: 'مەترسییا کارێن مرۆڤی ئەوە کو ئەم رەنگە ڤان سیستەمێن رێکخەر یێن ئاڵۆز تێک بدەین زێدەتر ژ شیانا وان بۆ خۆ-چاککردنێ.' }
    ],
    vocabulary: [
      { word: 'Organism', translation: 'زیندەوەر' },
      { word: 'Inhabit', translation: 'نیشتەجێ-بوون / ژیان تێدا' },
      { word: 'Survival', translation: 'مان / رزگاربوون' },
      { word: 'Regulatory', translation: 'رێکخەر / رێسا-دانەر' }
    ]
  },
  {
    id: 'c2-65',
    level: 'C2',
    title: 'The Longevity Revolution and Aging',
    titleKurdish: 'شۆڕشا درێژبوونا تەمەنی و پیربوون',
    dialogue: [
      { speaker: 'Biogerontologist', text: 'We are moving from treating specific diseases of age to treating aging itself as a modifiable biological process.', translation: 'ئەم ژ چارەسەرکرنا نەخۆشییێن پیربوونێ بەرەڤ چارەسەرکرنا پیربوونێ ب خۆ وەک پرۆسەیەکا بایۆلۆژی یا گوهۆڕاو دچین.' },
      { speaker: 'Sociologist', text: 'If we significantly extend the human lifespan, we will face unprecedented social challenges, from intergenerational equity to the restructuring of pensions.', translation: 'ئەگەر ئەم تەمەنێ مرۆڤی ب شێوەیەکێ دیار درێژ بکەین، ئەم دێ تووشی ئالنگارییێن جینگەیی یێن بێ-وێنە بین، ژ یەکسانییا د ناڤبەرا نەوەیان بگرە هەتا دووبارە رێکخستنا سیستەمێ خانەنشینیێ.' },
      { speaker: 'Biogerontologist', text: 'The goal is "healthspan"—ensuring the extra years are lived in good physical and cognitive health, rather than just prolonging suffering.', translation: 'ئارمانج "ماوێ ساخلەمی"یە (healthspan) - مسۆگەرکردنا هندێ کو ئەو ساڵێن زێدە ب ساخلەمییا جەستەیی و مێشکی یێ باش ڤە بهێنە ژیان، نەک تەنێ درێژکردنا ئازارێ.' },
      { speaker: 'Sociologist', text: 'However, if these technologies are only available to the wealthy, we risk creating a biological stratification that mirrors and magnifies economic inequality.', translation: 'لێ، ئەگەر ئەڤ تەکنۆلۆژیایە تەنێ بۆ دەولەمەندان هەبن، مەترسییا هندێ هەیە ئەم چینایەتییەکا بایۆلۆژی درۆست بکەین کو نە-یەکسانییا ئابووری دووبارە بکەتەووە و مەزنتر بکەت.' }
    ],
    vocabulary: [
      { word: 'Longevity', translation: 'درێژبوونا تەمەنی' },
      { word: 'Modifiable', translation: 'گونجاو بۆ گوهۆڕین' },
      { word: 'Equity', translation: 'دادپەروەری / یەکسانی' },
      { word: 'Stratification', translation: 'چینایەتی / پلە-پلە-کردن' }
    ]
  },
  {
    id: 'c2-66',
    level: 'C2',
    title: 'Algorithmic Stablecoins in DeFi',
    titleKurdish: 'دراوێن جێگیر یێن ئەلگۆریتمی (Stablecoins) د دارایییا نە-ناوەندی دا',
    dialogue: [
      { speaker: 'Crypto Analyst', text: 'Algorithmic stablecoins attempt to maintain a peg to a fiat currency using smart contracts to expand or contract supply based on demand.', translation: 'دراوێن جێگیر یێن ئەلگۆریتمی هەوڵ ددەن بهاێ خۆ ب دراوەکی فەرمی (وەک دۆلار) ڤە گرێدەن ب رێکا بکارئینانا پەیمانێن ژیر بۆ زیادکردن یان کێمکردنا دابینکردنێ ل دویف داخوازکارییێ.' },
      { speaker: 'Economist', text: 'The problem is that unlike collateralized stablecoins, they rely on market sentiment. If trust vanishes, a "death spiral" can occur.', translation: 'کێشە ئەوە کو بەروڤاژی دراوێن جێگیر یێن پشت-بەستو ب رەهین (collateral)، ئەڤە پشت ب هەستێ بازاڕی دبەستن. ئەگەر باوەری نەما، "زڤڕینا مرنێ" (death spiral) دشێت روو بدەت.' },
      { speaker: 'Crypto Analyst', text: 'Terra/Luna is a classic example of this vulnerability, where the algorithm failed to stop a rapid de-pegging during a market panic.', translation: 'دراوێ "تێرا/لونا" نموونەیەکا کلاسیکی یا ڤێ لاوازییێ یە، کو تێدا ئەلگۆریتم نەشیا رێ ل تێکچوونا بهای بگریت د دەمێ ترسەکا مەزن یا بازاڕی دا.' },
      { speaker: 'Economist', text: 'Regulators are now closely scrutinizing these "unbacked" assets because of the systemic risk they pose to the broader financial ecosystem.', translation: 'رێکخەر نوکە ب هوێری ل ڤان سامانێن "بێ-پشتەڤان" دنێرن ژ بەر وێ مەترسییا گشتی یا ئەو بۆ سیستەمێ دارایی یێ بەرفراوان درۆست دکەن.' }
    ],
    vocabulary: [
      { word: 'Peg', translation: 'بەستن / گرێدان (ب بهایەکی ڤە)' },
      { word: 'Collateralized', translation: 'دانانی رەهین / پشت-بەستوو ب سامانەکێ دی' },
      { word: 'Spiral', translation: 'زڤڕین / لوولە-خواردن' },
      { word: 'Scrutinizing', translation: 'پشکنین ب هوێری / وردبینی' }
    ]
  },
  {
    id: 'c2-67',
    level: 'C2',
    title: 'Speculative Realism in Modern Philosophy',
    titleKurdish: 'ڕیالیزما گۆمانەیی (Speculative Realism) د فەلسەفەیا نوو دا',
    dialogue: [
      { speaker: 'Philosopher A', text: 'Speculative realism rejects the "correlationist" tradition that limits philosophy to the relationship between the human mind and the world.', translation: 'ڕیالیزما گۆمانەیی (Speculative realism) نەریتێ "کۆریلیشنیزم" رەت دکەت کو فەلسەفەیێ سنووردار دکەت ب پەیوەندییا د ناڤبەرا عەقڵێ مرۆڤی و جیهانێ دا.' },
      { speaker: 'Philosopher B', text: 'It seeks to think about the "Great Outdoors"—a reality that exists independently of human thought or perception.', translation: 'ئەو هەوڵ ددەت دەربارەی "جیهانا دەرڤەیا مەزن" هزر بکەت - راستییەک کو سەربەخۆ ژ فکر یان تێگەهشتنا مرۆڤی هەبیت.' },
      { speaker: 'Philosopher A', text: 'Object-Oriented Ontology (OOO), a branch of this movement, argues that objects withdraw from each other and are never fully defined by their relations.', translation: '"ئۆنتۆلۆژییا ئۆبژێکت-تەوەر" (OOO)، کو لایەنەکێ ڤێ بزاڤێ یە، دبێژیت کو ئۆبژێکت (تشت) ژ هەڤدوو ڤەدەکێشن و چو جار ب تەواوی ب پەیوەندییێن خۆ نا‌هێنە پێناسەکرن.' },
      { speaker: 'Philosopher B', text: 'This perspective decenters the human, giving equal philosophical status to stones, computers, and microbes.', translation: 'ئەڤ دیتنە مرۆڤی ژ سەنتەری دئیخیت، و هەمان رەوشا فەلسەفی ددەتە بەران، کۆمپیۆتەران، و میکرۆبان.' }
    ],
    vocabulary: [
      { word: 'Correlation', translation: 'پێوەندی / هەماهەنگی' },
      { word: 'Independently', translation: 'سەربەخۆ / جودا' },
      { word: 'Ontology', translation: 'بوون-ناسی / ئۆنتۆلۆژی' },
      { word: 'Decenters', translation: 'ژ-ناوەند-خستن' }
    ]
  },
  {
    id: 'c2-68',
    level: 'C2',
    title: 'The Great Oxidation Event',
    titleKurdish: 'روودانا ئۆکسینێ یا مەزن (The Great Oxidation Event)',
    dialogue: [
      { speaker: 'Paleobiologist', text: 'The Great Oxidation Event, about 2.4 billion years ago, marks the first time oxygen accumulated in Earth\'s atmosphere due to cyanobacteria.', translation: 'روودانا ئۆکسینێ یا مەزن، نێزیکی ٢.٤ ملیار ساڵ پێش نوکە، سەلماندنا یەکەم جارە کو ئۆکسجین د بەرگەهێ زەویێ دا کۆم بووی ژ بەر "سایانۆباکتریا".' },
      { speaker: 'Geochemist', text: 'This was a catastrophe for the existing anaerobic organisms, likely causing the planet\'s first mass extinction.', translation: 'ئەڤە کارەسات بوو بۆ زیندەوەرێن "بێ-ئۆکسجین" (anaerobic) یێن وی سەردەمی، و دبیت ببیتە ئەگەرێ یەکەم فەوتانا ب کۆم یا هەسارەیێ.' },
      { speaker: 'Paleobiologist', text: 'However, it also paved the way for more complex life forms that use aerobic respiration, leading to the evolution of multicellular organisms.', translation: 'لێ، هەروەسا رێ خۆش کر بۆ بوونەوەرێن ئاڵۆزتر کو هەناسەیا ئۆکسجینی بکار دئینن، کو گەهشتە پەرەسەندنا زیندەوەرێن فرە-خانە.' },
      { speaker: 'Geochemist', text: 'It illustrates how biological innovation can fundamentally transform the geochemistry of an entire planet.', translation: 'ئەڤە نیشان ددەت کا چەوان داهێنانا بایۆلۆژی دشێت ب شێوەیەکێ بنەڕەتی جیۆکیمیایا هەمی هەسارەیەکێ بگوهۆڕیت.' }
    ],
    vocabulary: [
      { word: 'Accumulated', translation: 'کۆم-بوو / کەلەکە-بوو' },
      { word: 'Catastrophe', translation: 'کارەسات' },
      { word: 'Respiration', translation: 'هەناسەدان' },
      { word: 'Multicellular', translation: 'فرە-خانە' }
    ]
  },
  {
    id: 'c2-69',
    level: 'C2',
    title: 'Ethics of Autonomous Weapon Systems',
    titleKurdish: 'ئەخلاقییاتا سیستەمێن چەکداری یێن سەربەخۆ',
    dialogue: [
      { speaker: 'Military Ethicist', text: 'Lethal Autonomous Weapon Systems (LAWS)—or "killer robots"—can select and engage targets without human intervention.', translation: 'سیستەمێن چەکداری یێن بکوژ یێن سەربەخۆ (LAWS) - یان "رۆبۆتێن بکوژ" - دشێن ئارمانجان دەستنیشان بکەن و هێرش بکەن بێی دەستێوەردانا مرۆڤی.' },
      { speaker: 'Human Rights Advocate', text: 'The lack of "meaningful human control" raises profound moral and legal accountability issues. Who is responsible if the machine commits a war crime?', translation: 'نەبوونا "کۆنتڕۆڵا مرۆڤی یا ب رامان" کێشەیێن ئەخلاقی و یاسایی یێن قویل پەیدا دکەت. کێ بەرپرسە ئەگەر مەکینە تاوانەکا جەنگی ئەنجام بدەت؟' },
      { speaker: 'Military Ethicist', text: 'Proponents argue they are more precise than humans and could reduce "collateral damage" by removing fear and emotion from the battlefield.', translation: 'پشتەڤان دبێژن کو ئەو ژ مرۆڤان وردترن و دشێن "زیانێن لاوەکی" کێم بکەن ب رێکا لادانا ترس و هەستان ژ گۆڕەپانا شەڕی.' },
      { speaker: 'Human Rights Advocate', text: 'But delegating the decision to kill to an algorithm is inherently dehumanizing and could lower the threshold for going to war.', translation: 'لێ سپاردنا بڕیارا کوشتنێ بۆ ئەلگۆریتمەکێ ب بنەڕەتی نە-مرۆڤی کردنە و دشێت رێگرییان بۆ چوونە ناڤ شەڕی کێم کەت.' }
    ],
    vocabulary: [
      { word: 'Lethal', translation: 'بکوژ / کوشندە' },
      { word: 'Intervention', translation: 'دەستێوەردان' },
      { word: 'Collateral', translation: 'لاوەکی / تەنیشت' },
      { word: 'Threshold', translation: 'ئاست / لێڤ / بەربەست' }
    ]
  },
  {
    id: 'c2-70',
    level: 'C2',
    title: 'The Great Divergence in History',
    titleKurdish: 'جوداهییا مەزن د مێژوویێ دا (The Great Divergence)',
    dialogue: [
      { speaker: 'Economic Historian A', text: 'The "Great Divergence" refers to the process by which Europe emerged as the world\'s leading economic power starting in the 19th century.', translation: '"جوداهییا مەزن" ئاماژەیە بۆ وێ پرۆسەیا کو تێدا ئەوروپا وەک هێزا ئابووری یا سەرەکی یا جیهانێ پەیدا بوو ژ دەستپێکا سەدەیێ ١٩ێ وەرە.' },
      { speaker: 'Economic Historian B', text: 'Scholars debate whether this was due to geography, institutional development, or the exploitation of resources from the New World.', translation: 'ڤەکۆلەر ل سەر وێ چەندێ د ناڤ کێبڕکێیێ دانە کا ئەرێ ئەڤە ژ بەر جوگرافیایێ بوو، یان گەشەکرنا دامەزراوەیان، یان ژی ئێشاندنا ژێدەرێن جیهانا نوو (ئەمریکا).' },
      { speaker: 'Economic Historian A', text: 'Kenneth Pomeranz argued that access to coal and the ecological relief provided by colonies were the decisive factors.', translation: 'کێنیس پۆمیرانز دبێژیت کو گەهیشتن ب کانیێن رەژی و مفایێ ژینگەیی یێ کو کۆلۆنییان دایێ، هۆکارێن بڕیاردەر بوون.' },
      { speaker: 'Economic Historian B', text: 'Others emphasize the "European Miracle"—the unique combination of political fragmentation and scientific competition that drove innovation.', translation: 'هندەکێن دی گرنگیێ ددەنە "مۆعجیزەیا ئەوروپی" - ئەو تێکەڵەیا تایبەت یا پارچەبوونا سیاسی و کێبڕکێیا زانستی یا کو داهێنان پالدا.' }
    ],
    vocabulary: [
      { word: 'Divergence', translation: 'جوداهی / لێک-دوویرکەفتن' },
      { word: 'Exploitation', translation: 'ئێشاندن / مژین / بکارئینانا خراپ' },
      { word: 'Fragmentation', translation: 'پارچە-پارچە-بوون' },
      { word: 'Relief', translation: 'ئارامی / مفایەک بۆ کێمکرنا بارگرانیێ' }
    ]
  },
  {
    id: 'c2-71',
    level: 'C2',
    title: 'The Scarcity Mindset',
    titleKurdish: 'مێشکییەتا کێماسیێ (Scarcity Mindset)',
    dialogue: [
      { speaker: 'Psychologist', text: 'A scarcity mindset occurs when an individual feels that their resources—whether time, money, or social connection—are insufficient.', translation: 'مێشکییەتا کێماسیێ (Scarcity mindset) دەمێ پەیدا دبیت کو تاکەکەسی هەست بکەت کو ژێدەرێن وی - چ دەم بیت، یان پارە، یان پەیوەندییێن جڤاکی - نە بەسن.' },
      { speaker: 'Economist', text: 'This creates a "cognitive tax," where the brain\'s bandwidth is consumed by worrying about the deficiency, leading to poor decision-making.', translation: 'ئەڤە "بایەکێ مێشکی" (cognitive tax) درۆست دکەت، کو تێدا پشکەکا مەزن یا شیانێن مێشکی ب خەما وێ کێماسیێ ڤە تێ دچیت، کو دبیتە ئەگەرێ بڕیاردانەکا خراپ.' },
      { speaker: 'Psychologist', text: 'It can cause "tunneling"—a narrow focus on immediate needs while neglecting long-term consequences and opportunities.', translation: 'ئەڤە دبیتە ئەگەرێ "تۆنێل-کرنێ" (tunneling) - کو مێشک تەنێ فۆکەسێ دئیخیتە سەر پێتڤییێن بلەز و چاڤێ خۆ ل دویف پاشەڕۆژێ و دەلیڤەیان دگریت.' },
      { speaker: 'Economist', text: 'Understanding this helps us design better social policies by recognizing that poverty is not just a lack of funds, but an immense cognitive burden.', translation: 'تێگەهشتن د ڤێ دا هاریکارییا مە دکەت سیاستێن جڤاکی یێن باشتر داییریژن ب دانپێدان ب وێ راستیێ کو هەژاری تەنێ کێمییا پارەی نینە، بەلکو بارەکێ مێشکی یێ زەبەلاحە.' }
    ],
    vocabulary: [
      { word: 'Deficiency', translation: 'کێماسی' },
      { word: 'Bandwidth', translation: 'شیان / فەزایا کارکردنێ (د مێشکی دا)' },
      { word: 'Neglecting', translation: 'پشتگوهۆێ-خستن' },
      { word: 'Burden', translation: 'بارگەرانی / بار' }
    ]
  },
  {
    id: 'c2-72',
    level: 'C2',
    title: 'The Anthropocene Epoch',
    titleKurdish: 'سەردەمێ ئەنترۆپۆسین (The Anthropocene Epoch)',
    dialogue: [
      { speaker: 'Geologist', text: 'The Anthropocene is a proposed geological epoch dating from the commencement of significant human impact on Earth\'s geology and ecosystems.', translation: '"ئەنترۆپۆسین" ناڤێ سەردەمەکێ پێشنیارکری یێ زەویناسییە کو ژ دەستپێکا کارتێکرنا مەزن یا مرۆڤی ل سەر جیۆلۆجیا زەویێ و سیستەمێن وێ دەست پێ دکەت.' },
      { speaker: 'Environmentalist', text: 'While the exact start date is debated—ranging from the Agricultural Revolution to the first nuclear tests—the influence is undeniable.', translation: 'هەرچەندە ل سەر دەستپێکا وێ یا درۆست گفتووگۆ هەیە - ژ شۆڕشا چاندنێ بگرە هەتا تاقیکردنەوەیێن ئەتۆمی یێن ئێکێ - لێ کارتێکرنا وێ یا ئاشکرایە.' },
      { speaker: 'Geologist', text: 'Our signature will be written in the rock strata through microplastics, carbon isotopes, and the mass extinction of other species.', translation: 'شوێن-پێیا مە دێ د تەبەقەیێن بەران دا نڤیسین ب رێکا پارچەیێن مایکرۆ-پلاستیک، ئایزۆتۆپێن کاربۆنی، و فەوتانا ب کۆم یا جۆرێن دی یێن زیندەوەران.' },
      { speaker: 'Environmentalist', text: 'Recognizing the Anthropocene forces us to confront our role as a planetary force, requiring a fundamental shift in how we govern our relationship with nature.', translation: 'دانپێدان ب ئەنترۆپۆسینێ مە نەچار دکەت کو ئەم رووبەڕوویێ رۆڵێ خۆ ببین وەک هێزەکا هەسارەیی، کو پێتڤی ب وەرچەرخانەکا بنەڕەتی هەیە د چەوانیا رێکخستنا پەیوەندییا مە دگەل سرۆشتی دا.' }
    ],
    vocabulary: [
      { word: 'Commencement', translation: 'دەستپێک / دەستپێکردن' },
      { word: 'Undeniable', translation: 'نکۆڵی-لێ-نەکراو / ئاشکرا' },
      { word: 'Strata', translation: 'تەبەقە / چین' },
      { word: 'Confront', translation: 'رووبەڕوو بوونەوە' }
    ]
  },
  {
    id: 'c2-73',
    level: 'C2',
    title: 'Epigenetics and Inheritance',
    titleKurdish: 'ئێپی-جیناتیک (Epigenetics) و میراتگری',
    dialogue: [
      { speaker: 'Geneticist A', text: 'Epigenetics studies how environmental factors can influence gene expression without changing the underlying DNA sequence.', translation: '"ئێپی-جیناتیک" دیراسا وێ چەندێ دکەت کا چەوان هۆکارێن ژینگەیی دشێن کارتێکرنێ ل سەر دەرکەفتنا جینان بکەن بێی کو زنجیرەیا DNA یا بنەڕەتی بگوهۆڕن.' },
      { speaker: 'Geneticist B', text: 'These changes act as "tags" or switches that can turn genes on or off, and some can even be passed down to subsequent generations.', translation: 'ئەو گوهۆڕینە وەک "نیشان" یان سویچان کار دکەن کو دشێن جینان کارا (on) یان نا-کارا (off) بکەن، و هندەک ژ وان تەنانەت بۆ نەوەیێن داهاتی ژی دهێنە گواستنەوە.' },
      { speaker: 'Geneticist A', text: 'This means that the experiences of our ancestors—like famine or trauma—might leave a biological mark on our own health and behavior.', translation: 'ئەڤە ب وێ رامانێ یە کو ئەزموونێن باب و کالێن مە - وەک برسییەتی یان شوکا دەروونی - رەنگە نیشانەکا بایۆلۆژی ل سەر ساخلەمی و رەفتارا مە جێ بێلن.' },
      { speaker: 'Geneticist B', text: 'It blurs the line between "nature" and "nurture," showing that our environment and lifestyle can have a much deeper impact than we previously thought.', translation: 'ئەڤە سینۆرێ د ناڤبەرا "سرۆشتی" و "پەروەردێ" (nature and nurture) تێک ددەت، و نیشان ددەت کو ژینگەهـ و شێوازێ ژیانا مە دشێت کارتێکرنەکا گەلەک قویلتر هەبیت ژ وێ یا مە بەری نوکە هزر دکر.' }
    ],
    vocabulary: [
      { word: 'Underlying', translation: 'بنەڕەتی / ژێرزەمینی' },
      { word: 'Subsequent', translation: 'داهاتی / یێ دویفرا' },
      { word: 'Famine', translation: 'برسییەتی / گرانی' },
      { word: 'Nurture', translation: 'پەروەردە / خودان-کردن' }
    ]
  },
  {
    id: 'c2-74',
    level: 'C2',
    title: 'The Paradox of Choice',
    titleKurdish: 'پارادۆکسا هەڵبژارتنێ (The Paradox of Choice)',
    dialogue: [
      { speaker: 'Psychologist A', text: 'The paradox of choice suggests that while having options is generally good, having too many can lead to anxiety and decision paralysis.', translation: 'پارادۆکسا هەڵبژارتنێ دبێژیت کو سەرەڕای هندێ کو هەبوونا بژاردەیان تشەتەکێ باشە، لێ هەبوونا گەلەک بژاردەیان دشێت ببیتە ئەگەرێ دڵەڕاوکێ و سستی (ئیفلیجی) د بڕیاردانێ دا.' },
      { speaker: 'Psychologist B', text: 'Barry Schwartz argues that "maximizers"—people who always seek the best possible option—tend to be less happy than "satisficers" who settle for "good enough."', translation: 'باری شوارتز دبێژیت کو "مەزنخواز" (maximizers) - ئەوێن هەر گەڕیێ ل باشترین بژاردە دکەن - مەیلا وان یا کێمترە بۆ دلخۆشیێ ژ "قەناعەت-داران" (satisficers) ئەویًن دبێژن "ئەڤە بەسە".' },
      { speaker: 'Psychologist A', text: 'Abundant choice also creates "opportunity cost" regret; the more options we have, the easier it is to imagine that one of the discarded ones was better.', translation: 'هەڵبژارتنا زۆر هەروەسا پەشیمانییا "تێچوونا دەلیڤەیێ" پەیدا دکەت؛ چەند بژاردێن مە زێدەتر بن، هێندە ئاسانترە ئەم خەیال بکەین کو ئێک ژ وان بژاردێن مە رەتکرین باشتر بوو.' },
      { speaker: 'Psychologist B', text: 'Ironically, the freedom of choice we value so highly can ultimately undermine our well-being and satisfaction with the choices we actually make.', translation: 'ب شێوەیەکێ سەیر، ئەو ئازادییا هەڵبژارتنێ یا ئەم گەلەک سوپاسییا وێ دکەین، دشێت د ئەنجام دا دلخۆشی و قەناعەتا مە ب وێ بڕیارا مە دای کێم بکەت.' }
    ],
    vocabulary: [
      { word: 'Paralysis', translation: 'سست-بوون / ئیفلیج-بوون' },
      { word: 'Settle', translation: 'رازی-بوون / بڕیار-دان ل سەر تشتەکی' },
      { word: 'Discarded', translation: 'فڕێدای / رەت-کراو' },
      { word: 'Ironically', translation: 'ب شێوەیەکێ سەیر و دژبەر' }
    ]
  },
  {
    id: 'c2-75',
    level: 'C2',
    title: 'The Tragedy of the Commons',
    titleKurdish: 'کارەساتێ پشکێن گشتی (The Tragedy of the Commons)',
    dialogue: [
      { speaker: 'Environmental Economist', text: 'The "Tragedy of the Commons" describes a situation where individual users, acting independently according to their own self-interest, deplete a shared resource.', translation: '"کارەساتا پشکێن گشتی" وەسفا بارودۆخەکی دکەت کو تێدا بەکارهێنەرێن تاکەکەسی، ب شێوەیەکێ سەربەخۆ و ل سەر بونیاتێ بەرژەوەندییا خۆ، سامانەکێ هەڤپشک (گشتی) خەلاس دکەن.' },
      { speaker: 'Sustainability Expert', text: 'This applies to everything from overfishing in the oceans to the accumulation of greenhouse gases in the atmosphere.', translation: 'ئەڤە ل سەر هەمی تشتان جێبەجێ دبیت، ژ راوکردنا زێدە د ئۆقیانووسان دا بگرە هەتا کۆمبوونا گازێن گەرمکەر د بەرگەهێ هەوای دا.' },
      { speaker: 'Environmental Economist', text: 'Garrett Hardin argued that without private property rights or government regulation, the ruin of the commons is inevitable.', translation: 'گارێت هاردین دبێژیت کو بێی هەبوونا مافێن خاوەنداریەتیێ یێن تایبەت یان رێکارێن حکومی، وێرانبوونا پشکێن گشتی یا مسۆگەرە.' },
      { speaker: 'Sustainability Expert', text: 'However, Elinor Ostrom showed that local communities can effectively manage shared resources through self-governance and shared norms, challenging the need for top-down control.', translation: 'لێ، ئەلینۆر ئۆسترۆم نیشان دا کو جڤاکێن ناوخۆیی دشێن ب شێوەیەکێ کاریگەر سامانێن هەڤپشک بڕێڤە ببەن ب رێکا خۆ-بڕێڤەبرن و ریسایێن هەڤپشک، کو ئالنگارییا پێتڤیبوونا کۆنتڕۆلا ژ سەر-بۆ-خوار دکەت.' }
    ],
    vocabulary: [
      { word: 'Deplete', translation: 'خەلاس-کردن / کەم-کردن تا کۆتایی' },
      { word: 'Inevitable', translation: 'مسۆگەر / بێ-رێگری' },
      { word: 'Regulation', translation: 'رێسا-دانان / رێکخستن' },
      { word: 'Ruin', translation: 'وێرانبوون / ژناڤچوون' }
    ]
  },
  {
    id: 'c2-76',
    level: 'C2',
    title: 'Biophilic Design in Architecture',
    titleKurdish: 'دیزاینا ژین-دۆست (Biophilic Design) د تەلارسازیێ دا',
    dialogue: [
      { speaker: 'Architect', text: 'Biophilic design seeks to connect building occupants more closely to nature by incorporating natural lighting, ventilation, and biological patterns.', translation: 'دیزاینا ژین-دۆست هەوڵ ددەت نیشتەجێیێن ئاڤاهییان پتر ب سرۆشتی ڤە گرێ بدەت ب رێکا بکارئینانا رۆناهییا سرۆشتی، هەوادارکردن، و شێوازێن بایۆلۆژی.' },
      { speaker: 'Environmental Psychologist', text: 'The psychological benefits are significant; exposure to natural elements can reduce stress, improve cognitive function, and enhance overall well-being.', translation: 'مفایێن دەروونی یێن مەزنن؛ رووبەڕووبوونا رەگەزێن سرۆشتی دشێت فشارێ کێم بکەت، کارێن مێشکی باشتر بکەت، و دلخۆشییا گشتی زیاد بکەت.' },
      { speaker: 'Architect', text: 'It\'s not just about adding plants; it\'s about creating "living environments" that mimic the fractals and textures found in the wild.', translation: 'ئەڤە تەنێ زێدەکرنا گول و گیا نینە؛ بەلکو درۆستکردنا "ژینگەیێن زیندی"یە کو چاڤ ل شێوازێن ئەندازەیی و پێکهاتەیێن د سرۆشت دا دکەن.' },
      { speaker: 'Environmental Psychologist', text: 'As we spend more time indoors, integrating these organic elements into our urban spaces is essential for our evolutionary health.', translation: 'دەمێ ئەم پتر دەمێ خۆ د ناڤ ئاڤاهییان دا دبۆرینین، تێکەڵکرنا ڤان رەگەزێن ئۆرگانیک د بۆشایییێن باژێڕی یێن مە دا یا فەرە بۆ ساخلەمییا مە یا پەرەسەندوو.' }
    ],
    vocabulary: [
      { word: 'Occupants', translation: 'نیشتەجێ / دانیشتوو' },
      { word: 'Incorporating', translation: 'تێکەڵ-کردن / جێگیر-کردن' },
      { word: 'Fractals', translation: 'شێوازێن ئەندازەیی یێن دووبارە' },
      { word: 'Living environment', translation: 'ژینگەیێ زیندی' }
    ]
  },
  {
    id: 'c2-77',
    level: 'C2',
    title: 'The Simulation Hypothesis',
    titleKurdish: 'گریمانەیا شۆبهاندنێ (The Simulation Hypothesis)',
    dialogue: [
      { speaker: 'Computer Scientist', text: 'The simulation hypothesis suggests that our entire reality is a sophisticated computer simulation created by a more advanced civilization.', translation: 'گریمانەیا شۆبهاندنێ (Simulation hypothesis) دبێژیت کو هەمی ڕاستییا مە شوێهاندنەکا کۆمپیۆتەری یا ئاڵۆزە کو ژ لایێ شارستانییەتەکا پێشکەفتی تر ڤە هاتییە درۆستکردن.' },
      { speaker: 'Philosopher', text: 'Nick Bostrom argues that if advanced civilizations inevitably develop the power to create realistic ancestor simulations, we are statistically likely to be in one.', translation: 'نیک بۆسترۆم دبێژیت ئەگەر شارستانییەتێن پێشکەفتی ب ئاراستەیەکێ بچن کو بشێن شۆبهاندنێن ڕاستەقینە یێن باب و کالێن خۆ درۆست بکەن، پا ژ لایێ ئاماری ڤە ئەم ب راستی د ئێک ژ وان داینە.' },
      { speaker: 'Computer Scientist', text: 'Critics say the computational requirements for simulating a whole universe are gargantuan and beyond even theoretical limits.', translation: 'رەخنەگر دبێژن کو پێتڤییێن ژمارەکاری بۆ شۆبهاندنا هەمی گەردوونێ یێن زەبەلاحن و ژ سنوورێن تیۆری ژی دەرباز دبن.' },
      { speaker: 'Philosopher', text: 'Yet, the existence of "glitches" in quantum physics, like quantization or discretization, might be interpreted as evidence of an underlying digital code.', translation: 'لێ، هەبوونا هندەک "خەلەتییان" یان "گرێیان" د فیزیکا کوانتەمی دا، وەک پارچە-پارچە بوونی (quantization)، رەنگە وەک بەڵگەیەک بهێتە هەژمارکردن بۆ کۆدەکێ دیجیتاڵی یێ بنەڕەتی.' }
    ],
    vocabulary: [
      { word: 'Sophisticated', translation: 'ئاڵۆز / پێشکەفتی' },
      { word: 'Gargantuan', translation: 'زەبەلاح / مەزن' },
      { word: 'Glitches', translation: 'خەلەتییێن تەکنیکی یێن بچووک' },
      { word: 'Statistically', translation: 'ژ لایێ ئاماری ڤە' }
    ]
  },
  {
    id: 'c2-78',
    level: 'C2',
    title: 'Deep Ecology and Biocentrism',
    titleKurdish: 'ئیکۆلۆژییا قویل و ژین-تەوەر (Biocentrism)',
    dialogue: [
      { speaker: 'Environmentalist A', text: 'Deep ecology rejects the human-centered "shallow" environmentalism that only values nature for its utility to humans.', translation: 'ئیکۆلۆژییا قویل پاراستنا ژینگەیێ یا "سەرپێ" یا مرۆڤ-تەوەر رەت دکەت، یا کو تەنێ بهایێ سرۆشتی بۆ مفا گەهاندن ب مرۆڤی دبینیت.' },
      { speaker: 'Environmentalist B', text: 'It promotes biocentrism—the idea that all living beings have inherent worth, independent of their usefulness to mankind.', translation: 'ئەو پشتەڤانییا "ژین-تەوەر" (biocentrism) دکەت - ئەو فکرا کو هەمی زیندەوەران بهایێ وان یێ بنەڕەتی یێ هەین، سەربەخۆ ژ مفا گەهاندن ب مرۆڤی.' },
      { speaker: 'Environmentalist A', text: 'This requires a radical restructuring of modern society to respect the ecological integrity of the biosphere.', translation: 'ئەڤە پێتڤی ب دووبارە رێکخستنەکا توند (رادیکاڵ) یا جڤاکێ نوو هەیە بۆ رێزگرتن ل درۆستییا ژینگەیییا نیڤەکێ ژیانێ (biosphere).' },
      { speaker: 'Environmentalist B', text: 'The challenge is moving beyond the "resource" mentality and recognizing our role as interconnected parts of a larger whole.', translation: 'ئالنگاری ل وێرێ یە کو مرۆڤ ژ مێشکییەتا "ژێدەر" (resource) دەرباز ببیت و رۆڵێ خۆ وەک پشکێن ب هەڤ ڤە گرێدای ژ کۆمەکا مەزن ببینیت.' }
    ],
    vocabulary: [
      { word: 'Shallow', translation: 'سەرپێ / نە-قویل' },
      { word: 'Inherent', translation: 'بنەڕەتی / د زات دا هەبوو' },
      { word: 'Integrity', translation: 'درۆستی / پاکی' },
      { word: 'Biosphere', translation: 'نیڤەکێ ژیانێ / بایۆسفیر' }
    ]
  },
  {
    id: 'c2-79',
    level: 'C2',
    title: 'The Ethics of Surveillance Capitalism',
    titleKurdish: 'ئەخلاقییاتا سەرمایەدارییا چاودێریێ',
    dialogue: [
      { speaker: 'Social Critic', text: 'Surveillance capitalism involves the commodification of personal data, where our behaviors are predicted and sold for profit.', translation: 'سەرمایەدارییا چاودێریێ (Surveillance capitalism) بریتییە ژ بازرگانیکردن ب داتایێن تایبەت، کو تێدا رەفتارێن مە دهێنە پێشبینیکردن و بۆ قازانجی دهێنە فروتن.' },
      { speaker: 'Tech Executive', text: 'But these services are provided for free; data collection is the price users pay for access to powerful digital tools.', translation: 'لێ ئەڤ خزمەتگۆزارییە ب بێ-بەرامبەر دهێنە دابینکردن؛ کۆمکردنا داتایان ئەو بهایە یێ بەکارهێنەر ددەن بۆ گەهیشتن ب ئامێرێن دیجیتاڵی یێن ب هێز.' },
      { speaker: 'Social Critic', text: 'The problem is the asymmetry of power; individuals lose control over their narratives while corporations effectively engineer social outcomes.', translation: 'کێشە نە-هاوسەنگییا دەستهەلاتێ یە؛ تاکەکەسی کۆنتڕۆلا ل سەر چیرۆکێن (narratives) خۆ ژ دەست ددەن د دەمەکێ دا کۆمپانیا ب شێوەیەکێ کاریگەر ئەنجامێن جڤاکی دیزاین دکەن.' },
      { speaker: 'Tech Executive', text: 'We just need better transparency and consent mechanisms, not an entire rejection of the data-driven economy.', translation: 'ئەم تەنێ پێتڤی ب شەفافیەتەکا باشتر و رێکارێن رازیبوونێ نە، نەک رەتکردنەووا تەواو یا ئابوورییا ل سەر بونیاتێ داتای.' }
    ],
    vocabulary: [
      { word: 'Commodification', translation: 'کردنە کاڵا / بازرگانی-پێوە-کردن' },
      { word: 'Asymmetry', translation: 'نە-هاوسەنگی / نە-جوتیار' },
      { word: 'Consent', translation: 'رازیبوون' },
      { word: 'Engineer', translation: 'ئەندازیاری-کردن / دیزاین-کردن ب مەرەم' }
    ]
  },
  {
    id: 'c2-80',
    level: 'C2',
    title: 'Chaos Theory and the Butterfly Effect',
    titleKurdish: 'تیۆرییا ئاژاوێ (Chaos Theory) و کاریگەرییا پەپوولێ',
    dialogue: [
      { speaker: 'Mathematician', text: 'Chaos theory studies systems that are highly sensitive to initial conditions, making long-term prediction impossible.', translation: 'تیۆرییا ئاژاوێ (Chaos theory) ل وان سیستەمان دەکۆلیت کو گەلەک پەرۆشن (sensitive) بۆ بارودۆخێن دەستپێکێ، کو ئەڤە پێشبینییا دەم-درێژ مۆستەحیل دکەت.' },
      { speaker: 'Science Teacher', text: 'The "Butterfly Effect" illustrates this—the idea that a tiny change like a butterfly flapping its wings could eventually cause a storm elsewhere.', translation: '"کاریگەرییا پەپوولێ" نموونەیەکا ڤێ چەندێ یە - ئەو فکرا کو دبێژیت گوهۆڕینەکا بچووک وەک لێکدانا شەپەڕێن پەپوولەیەکێ دشێت د پاشەڕۆژێ دا ببیتە ئەگەرێ باهۆزەکێ ل جهەکێ دی.' },
      { speaker: 'Mathematician', text: 'It\'s not that the systems are random, but that they are "deterministic chaos"—the math is precise, but the outcomes diverge rapidly.', translation: 'نە کو سیستەم هەرەمەکی (random) بن، بەلکو ئەو "ئاژاوەیا دیارکری" (deterministic chaos) نە - بیرکاری یا وردە، لێ ئەنجام ب خێرایی ل هەڤدوو جودا دبن.' },
      { speaker: 'Science Teacher', text: 'This challenges our belief in a totally predictable universe and highlights the limits of scientific modeling for complex real-world events.', translation: 'ئەڤە ل هەمبەر باوەریا مە رادوەستیت کو گەردوون یێ تەمام پێشبینیکراوە و سنوورێن مۆدێلێن زانستی بۆ روودانێن جیهانی یێن ئاڵۆز دیار دکەت.' }
    ],
    vocabulary: [
      { word: 'Initial', translation: 'دەستپێک / سەرەتا' },
      { word: 'Deterministic', translation: 'حەتمی / دیار-کراو مسبەقەن' },
      { word: 'Diverge', translation: 'جودا بون / ل هەڤدوو دوویرکەفتن' },
      { word: 'Flapping', translation: 'لێکدان (شەپەرا)' }
    ]
  },
  {
    id: 'c2-81',
    level: 'C2',
    title: 'Historical Materialism',
    titleKurdish: 'ماددییەت مێژوویی (Historical Materialism)',
    dialogue: [
      { speaker: 'Sociologist A', text: 'Historical materialism posits that the economic base of a society—the mode of production—determines its social and political superstructure.', translation: 'ماددییەت مێژوویی (Historical materialism) دبێژیت کو بونیاتێ ئابووری یێ جڤاکی - شێوازێ بەرهەمهێنانێ - سەرخانەیا (superstructure) سیاسی و جڤاکی دیار دکەت.' },
      { speaker: 'Sociologist B', text: 'So, shifts in technology and labor relations are the primary drivers of historical change and social evolution.', translation: 'کەواتە، گوهۆڕین د تەکنۆلۆژیا و پەیوەندییێن کار دا هاندەرێن سەرەکی یێن گوهۆڕینێن مێژوویی و پەرەسەندنا جڤاکی نە.' },
      { speaker: 'Sociologist A', text: 'Essentially, "it is not the consciousness of men that determines their existence, but their social existence that determines their consciousness."', translation: 'ب کورتی، "نە هۆشیارییا مرۆڤانە کو هەبوونا وان دیار دکەت، بەلکو هەبوونا وان یا جڤاکی یە کو هۆشیارییا وان دیار دکەت."' },
      { speaker: 'Sociologist B', text: 'Critics argue that this focuses too much on economics, neglecting the independent power of ideas, culture, and individual agency.', translation: 'رەخنەگر دبێژن کو ئەڤە گەلەک فۆکۆسێ دئیخیتە سەر ئابووریێ، و پشتگوهۆێ دئیخیت هێزا سەربەخۆیا بیرۆکەیان، کەلتۆری، و ئیرادەیا تاکەکەسی.' }
    ],
    vocabulary: [
      { word: 'Base', translation: 'بونیات / بنکە' },
      { word: 'Superstructure', translation: 'سەرخانە / بونیاتێ سەرەکی' },
      { word: 'Agency', translation: 'ئیرادە / توانای کارکردن' },
      { word: 'Materialism', translation: 'ماددییەت' }
    ]
  },
  {
    id: 'c2-82',
    level: 'C2',
    title: 'The Social Construction of Reality',
    titleKurdish: 'بونیاتنان جڤاکی یا راستیێ',
    dialogue: [
      { speaker: 'Sociologist', text: 'Berger and Luckmann argued that reality is socially constructed through the process of externalization, objectivation, and internalization.', translation: 'بێرگەر و لوکمان دبێژن کو راستی ب شێوەیەکێ جڤاکی دهێتە ئاڤاکردن ب رێکا پرۆسەیا "دەرەکی-کرن، تشت-کرن، و ناڤخۆیی-کرنێ".' },
      { speaker: 'Undergrad Student', text: 'Wait, so things like money or marriage only exist because we collectively agree that they do?', translation: 'بوەستە، کەواتە تشتێن وەک پارە یان هەڤژینیێ تەنێ هەین چونکی ئەم ب کۆم ل سەر هندێ رازیین؟' },
      { speaker: 'Sociologist', text: 'Exactly. They are "institutionalized" over time until they seem like objective, natural facts, even though they are human creations.', translation: 'ب درۆستی. ئەوان دهێنە "دامەزراندن" (institutionalized) ب دەمی را هەتا وەسا دیار دبن کو راستییێن سرۆشتی و بابەتی نە، هەرچەندە ئەو درۆستکرییێن مرۆڤین.' },
      { speaker: 'Undergrad Student', text: 'This means that society is a human product, but humans are also social products, shaped by the very structures they created.', translation: 'ئەڤە ب وێ رامانێ یە کو جڤاک بەرهەمێ مرۆڤە، لێ مرۆڤ ژی بەرهەمێ جڤاکە، کو ژ لایێ وان بونیاتان ڤە دهێنە درۆستکرن یێن وان ب خۆ ئاڤا کرین.' }
    ],
    vocabulary: [
      { word: 'Constructed', translation: 'ئاڤا-کراو / بونیات-نان' },
      { word: 'Externalization', translation: 'دەرەکی-کرن' },
      { word: 'Objectivation', translation: 'تشت-کردن / کرنە تشتێ بابەتی' },
      { word: 'Internalization', translation: 'ناڤخۆیی-کرن / وەرگرتن د ناڤخۆ دا' }
    ]
  },
  {
    id: 'c2-83',
    level: 'C2',
    title: 'Brutalist Architecture and its Legacy',
    titleKurdish: 'تەلارسازییا برۆتالیزم (Brutalism) و میراسا وێ',
    dialogue: [
      { speaker: 'Architectural Historian', text: 'Brutalism, characterized by raw concrete and stark geometric forms, emerged as a functional and honest style in the post-war era.', translation: 'برۆتالیزم (Brutalism)، کو تایبەتمەندییا وێ کۆنکریتێ تاف و شێوازێن ئەندازەییێن توندن، پەیدا بوو وەک ستایلەکێ کاریگەر و "راستگۆ" د سەردەمێ پاش جەنگی دا.' },
      { speaker: 'Architecture Student', text: 'Many people find it cold and oppressive today, associating it with decaying urban blocks or uninviting institutions.', translation: 'گەلەک کەس نوکە ب ستایلەکێ تەزی و زۆردار دبینن، و ب ئاڤاهییێن باژێڕی یێن تێکچووی یان دامەزراوەیێن نە-سەرەنجکێش ڤە گرێ ددەن.' },
      { speaker: 'Architectural Historian', text: 'Yet, the term "brut" actually refers to "raw" (béton brut), signifying an honesty of materials and a rejection of superficial decoration.', translation: 'لێ، پەیڤا "برۆت" ب راستی ئاماژەیە بۆ "تاف" یان "خام" (béton brut)، کو نیشاندەرا راستگۆیییا ماددەیانە و رەتکردنەووا خەملاندنێن سەرپێیە.' },
      { speaker: 'Architecture Student', text: 'There is a renewed appreciation for its monumental honesty and the utopian social ideals that often motivated its creators.', translation: 'ئارەزوویەکا نوو پەیدا بوویە بۆ راستگۆیییا وێ یا مەزن و ئەو ئارمانجێن جڤاکی یێن نموونەیی (utopian) یێن کو زۆر جاران هاندەر بوون بۆ درۆستکەرێن وان.' }
    ],
    vocabulary: [
      { word: 'Raw', translation: 'تاف / خام / نە-پێختە' },
      { word: 'Stark', translation: 'تەزی / سادە و توند' },
      { word: 'Superficial', translation: 'سەرپێ / نە-قویل' },
      { word: 'Utopian', translation: 'نموونەیی / خەیالی' }
    ]
  },
  {
    id: 'c2-84',
    level: 'C2',
    title: 'The Great Famine and Historical Memory',
    titleKurdish: 'گرانییا مەزن (برسیەتی) و بیرەوەرییا مێژوویی',
    dialogue: [
      { speaker: 'Historian', text: 'The Great Famine in Ireland in the 1840s was not just a natural disaster; it was exacerbated by political failure and laissez-faire economic ideology.', translation: 'گرانییا مەزن (برسیەتی) ل ئیرلەندا د ساڵێن ١٨٤٠ێ دا تەنێ کارەساتەکا سرۆشتی نەبوو؛ بەلکو ب شکەستنا سیاسی و ئایدۆلۆژییا ئابووری یا "لێگەڕێ بژیت" توندتر بوو.' },
      { speaker: 'Sociologist', text: 'The trauma of the famine led to massive emigration, permanently altering the island\'s demographics and creating a global diaspora.', translation: 'شۆکا وێ برسیەتییێ بوو ئەگەرێ کۆچەرییا ب کۆم، کو ب شێوەیەکێ هەمیشەیی دیمۆگرافیا گزیرتەی بگوهۆڕیت و جڤاکەکێ جیهانی یێ کۆچبەری درۆست بکەت.' },
      { speaker: 'Historian', text: 'Historical memory of such events can be a site of ongoing political struggle, as nations seek to assign blame or seek reparations.', translation: 'بیرەوەرییا مێژوویی یا روودانێن وەسا دشێت ببیتە جهێ کێشەیا سیاسی یا بەردەوام، دەمێ دەولەت هەول ددەن تاوانبارییێ بئیخنە سەر لایەکێ دی یان داخوازا قەرەبۆکردنێ دکەن.' },
      { speaker: 'Sociologist', text: 'It also shapes national identity, acting as a foundational trauma that continues to influence modern social and political attitudes.', translation: 'هەروەسا ناسنامەیا نیشتمانی درۆست دکەت، و وەک شوکەکا بنەڕەتی کار دکەت کو بەردەوام کارتێکرنێ ل سەر هەڵوێستێن جڤاکی و سیاسی یێن نوکە دکەت.' }
    ],
    vocabulary: [
      { word: 'Exacerbated', translation: 'خراپتر-کردن / توندتر-کردن' },
      { word: 'Demographics', translation: 'دیمۆگرافیا / تایبەتمەندییێن ئاکنجیان' },
      { word: 'Reparations', translation: 'قەرەبۆکردنەوە' },
      { word: 'Foundational', translation: 'بنەڕەتی / بنکەیی' }
    ]
  },
  {
    id: 'c2-85',
    level: 'C2',
    title: 'Post-Colonial Theory and Subaltern Voice',
    titleKurdish: 'تیۆرییا پاش-کۆلۆنیالیزم و دەنگێ بێ-دەستهەلاتان (Subaltern)',
    dialogue: [
      { speaker: 'Scholar A', text: 'Post-colonial theory examines the lasting cultural, political, and psychological impacts of colonial rule on former subject nations.', translation: 'تیۆرییا پاش-کۆلۆنیالیزم ڤەکۆلینێ د کارتێکرنێن بەردەوام یێن کەلتۆری، سیاسی، و دەروونی یێن دەستهەلاتا کۆلۆنیالی دا دکەت ل سەر ئەو مللەتان یێن جاران ژ بن دەست بوون.' },
      { speaker: 'Scholar B', text: 'Gayatri Spivak\'s "Can the Subaltern Speak?" explores the difficulty of marginalized groups finding their own voice within dominant colonial structures.', translation: 'گایاتری سپیڤاک د تێزێ "ئەرێ بێ-دەستهەلات دشێن باخڤن؟" دا ئالنگارییا چینێن پەراوێزخراو نیشان ددەت د دیتنا دەنگێ خۆ دا د ناڤ بونیاتێن کۆلۆنیالی یێن زالبوو دا.' },
      { speaker: 'Scholar A', text: 'The goal is to "decolonize the mind," challenging the Western-centric knowledge production that often silences local narratives.', translation: 'ئارمانج "کۆلۆنیال-لادان ژ مێشکی" یە، ب رێکا ئالنگارییکرن دگەل بەرهەمهێنانا زانیارییا روژئاڤا-تەوەر یا کو زۆر جاران چیرۆکێن ناوخۆیی بێ-دەنگ دکەت.' },
      { speaker: 'Scholar B', text: 'This requires a radical critical approach to history and literature, uncovering the hidden perspectives of those who were oppressed.', translation: 'ئەڤە پێتڤی ب رێبازەکا رەخنەیی یا توند هەیە بەرەڤ مێژوو و ئەدەبیاتێ، بۆ ئاشکراکردنا دیتنێن ڤەشارتی یێن وان کەسێن کو هاتبوونە چەوساندن.' }
    ],
    vocabulary: [
      { word: 'Subaltern', translation: 'بێ-دەستهەلات / بن-دەست' },
      { word: 'Decolonize', translation: 'کۆلۆنیال-لادان' },
      { word: 'Oppressed', translation: 'چەوساوه / زولم-لێ-کراو' },
      { word: 'Narratives', translation: 'چیرۆک / گێڕانەوە' }
    ]
  },
  {
    id: 'c2-86',
    level: 'C2',
    title: 'The Digital Divide and Accessibility',
    titleKurdish: 'پارچەبوونا دیجیتاڵی و گەهیشتن ب زانیارییان',
    dialogue: [
      { speaker: 'IT Policy Expert', text: 'The "digital divide" refers to the gap between those who have access to modern information technology and those who do not.', translation: '"پارچەبوونا دیجیتاڵی" ئاماژەیە بۆ وێ جوداهییا د ناڤبەرا وان کەسان دا یێن کو دەستێ وان دگەهیتە تەکنۆلۆژییا زانیارییان یا نوو و وان یێن کو ناگەهیتێ.' },
      { speaker: 'Social Advocate', text: 'This isn\'t just about internet access; it\'s about the skills and hardware needed to participate fully in a digital society.', translation: 'ئەڤە تەنێ دەربارەی گەهیشتن ب ئینتەرنێتێ نینە؛ بەلکو دەربارەی ئەو شارەزایی و کەرەستەیانە ژی یێن پێتڤی بۆ پشکداریکردنا تەمام د جڤاکەکێ دیجیتاڵی دا.' },
      { speaker: 'IT Policy Expert', text: 'Without intervention, the divide reinforces existing social inequalities, limiting educational and economic opportunities for the marginalized.', translation: 'بێی دەستێوەردان، ئەڤ پارچەبوونە نە-یەکسانییێن جڤاکی یێن هەین ب هێزتر دکەت، و دەلیڤەیێن خواندن و ئابووری بۆ چینێن پەراوێزخراو سنووردار دکەت.' },
      { speaker: 'Social Advocate', text: 'Bridging this gap requires significant investment in infrastructure, but also in digital literacy programs that empower all citizens.', translation: 'چارەسەرکردنا ڤێ جوداهیێ پێتڤی ب وەبەرهێنانەکا مەزن د ژێرخانێ دا هەیە، لێ هەروەسا د پرۆگرامێن هوشیارییا دیجیتاڵی دا کو هەمی هاووەڵاتییان ب هێز بکەن.' }
    ],
    vocabulary: [
      { word: 'Divide', translation: 'جوداهی / پارچەبوون' },
      { word: 'Hardware', translation: 'کەرەستە / ئامێرێن رەق' },
      { word: 'Literacy', translation: 'خۆیندەواری / شارەزایی' },
      { word: 'Empower', translation: 'ب هێز-کردن / متمانە-دان' }
    ]
  },
  {
    id: 'c2-87',
    level: 'C2',
    title: 'Existential Risks for Humanity',
    titleKurdish: 'مەترسییێن بوون-کێش (Existential Risks) بۆ مرۆڤایەتیێ',
    dialogue: [
      { speaker: 'Futurist A', text: 'Existential risks are events that could permanently and drastically curtail the potential of Earth-originating intelligent life.', translation: 'مەترسییێن بوون-کێش (Existential risks) ئەو روودانن یێن کو دشێن ب شێوەیەکێ هەمیشەیی و توند پاشەڕۆژا ژیانا ژیر یا زەوی بهەژینن یان مەترسییێ ل سەر درۆست کەن.' },
      { speaker: 'Futurist B', text: 'These range from natural disasters like super-volcanic eruptions to human-made threats like nuclear war or misaligned AI.', translation: 'ئەڤە ژ کارەساتێن سرۆشتی وەک تەقینا ڤۆڵکانۆیان دەست پێ دکەن هەتا مەترسییێن دەستکردێن مرۆڤی وەک جەنگێ ئەتۆمی یان ژیرییا دەستکرد یا نە-رێکخراو.' },
      { speaker: 'Futurist A', text: 'The likelihood of these events is low in the short term, but as our technological power increases, the impact of a single failure becomes catastrophic.', translation: 'ئەگەرێ ڤان روودانان د دەمێ کورت دا یێ کێمە، لێ چەند هێزا مە یا تەکنۆلۆژی زێدە ببیت، کارتێکرنا تەنێ شکەستنەکێ دێ بیتە کارەسات.' },
      { speaker: 'Futurist B', text: 'We must prioritize research into risk mitigation and develop global governance structures capable of managing these high-stakes challenges.', translation: 'پێتڤییە ئەم گرنگیێ بدەینە ڤەکۆلینان د کێمکرنا مەترسییان دا و بونیاتێن بڕێڤەبرنا جیهانی ئاوا بکەین یێن کو بشێن ڤان ئالنگارییێن مەزن بڕێڤە ببەن.' }
    ],
    vocabulary: [
      { word: 'Curtail', translation: 'کێم-کردن / سنووردار-کردن' },
      { word: 'Misaligned', translation: 'نە-رێکخراو / نە-تەبا (دگەل ئارمانجان)' },
      { word: 'Mitigation', translation: 'کێم-کردن / سۆک-کردن (یا تشتەکێ خراپ)' },
      { word: 'High-stakes', translation: 'مەترسییێن مەزن / مەترسیدار' }
    ]
  },
  {
    id: 'c2-88',
    level: 'C2',
    title: 'The Philosophy of Language (Wittgenstein)',
    titleKurdish: 'فەلسەفەیا زمانی (ویتگنشتاین)',
    dialogue: [
      { speaker: 'Philosophy Professor', text: 'Ludwig Wittgenstein\'s later work suggests that the meaning of a word is not an object it refers to, but its "use" in a "language game."', translation: 'کارێن پاشتری یێن لودڤیگ ویتگنشتاین ئاماژە ب هندێ دکەن کو واتایا پەیڤەکی نە ئەو تشتە یێ ئەو ئاماژەیێ بۆ دکەت، بەلکو "بکارئینانا" وێ یە د "یارییەکا زمانی" دا.' },
      { speaker: 'Philosophy Student', text: 'So, language is shared social activity, and the limits of my language mean the limits of my world.', translation: 'کەواتە، زمان چالاکییەکا جڤاکی یا هەڤپشکە، و سنوورێن زمانی من ب واتایا سنوورێن جیهانا منن.' },
      { speaker: 'Philosophy Professor', text: 'Exactly. Most philosophical problems arise when language "goes on holiday"—when words are used outside their original context.', translation: 'ب درۆستی. زۆربەی کێشەیێن فەلسەفی دەمێ سەرهەلددەن کو زمان "دچیتە بێهنڤەدانێ" - دەمێ پەیڤ د ژ دەرڤەی چوارچۆڤەیا خۆ یا رەسەن دهێنە بکارئینان.' },
      { speaker: 'Philosophy Student', text: 'Our task then is to "show the fly the way out of the fly-bottle"—to dissolve conceptual confusions by clarifying grammar.', translation: 'ئەرکێ مە ئەو دشێت بیت کو "رێکا دەرکەفتنێ نیشان بدەینە مێشێ ژ شیشەیا مێشان" - ب رێکا روون-کرنا رێزمانێ، ئاڵۆزییێن تێگەهشتنێ چارەسەر بکەین.' }
    ],
    vocabulary: [
      { word: 'Refers', translation: 'ئاماژە بۆ دکەت' },
      { word: 'Dissolve', translation: 'چارەسەر-کردن / ژناڤبرن (ب رێکا لێکدانێ)' },
      { word: 'Confusion', translation: 'ئاڵۆزی / سەرلێشێواوی' },
      { word: 'Original', translation: 'رەسەن / ئەسلی' }
    ]
  },
  {
    id: 'c2-89',
    level: 'C2',
    title: 'Intersectionality in Modern Activism',
    titleKurdish: 'ئینتەرسێکشنالیتی (Intersectionality) د خەباتا نوو دا',
    dialogue: [
      { speaker: 'Sociologist A', text: 'Intersectionality is a framework for understanding how various social identities—race, class, gender—overlap to create unique modes of discrimination.', translation: '"ئینتەرسێکشنالیتی" چارچۆڤەیەکە بۆ تێگەهشتن کا چەوان ناسنامەیێن جڤاکی یێن جودا - ڕەگەز، چین، جێندەر - ب سەر هەڤ دا دکەڤن بۆ درۆستکردنا شێوازێن تایبەت یێن ژێگرتنێ (discrimination).' },
      { speaker: 'Sociologist B', text: 'Kimberlé Crenshaw developed the term to highlight that a black woman experiences sexism differently than a white woman due to racism.', translation: 'کیمبەرلی کرێنشۆ ئەڤ دەستەواژەیە گەشە پێ دا بۆ نیشاندانا هندێ کو ژنەکا رەش-پێست تووشی جوداکارییا جێندەری (sexism) دبیت ب شێوەیەکێ جودا ژ ژنەکا سپی-پێست ژ بەر ڕەگەز-پەرێستیێ.' },
      { speaker: 'Sociologist A', text: 'It challenges the "single-axis" approach to social justice, which often ignores the complexities of multi-layered oppression.', translation: 'ئەو ئالنگارییا ئاراستەیێ "تەنێ-تەوەر" دکەت بۆ دادپەروەرییا جڤاکی، یا کو زۆر جاران چاڤێ خۆ ل ئاڵۆزییێن چەوساندنا چەند-تەبەقەی دگریت.' },
      { speaker: 'Sociologist B', text: 'By embracing intersectionality, movements can become more inclusive and address the specific needs of the most marginalized individuals.', translation: 'ب وەرگرتنا ڤێ هزری، بزاڤ دشێن پتر هەمی-لایەنە بن و چارەسەرییا پێتڤییێن تایبەت یێن وان کەسێن کو هەرە پتر پەراوێزخراون بکەن.' }
    ],
    vocabulary: [
      { word: 'Overlap', translation: 'ب سەر هەڤ دا کەتن / تێکەڵ-بوون' },
      { word: 'Axis', translation: 'تەوەر / ئاراستە' },
      { word: 'Inclusive', translation: 'هەمی-لایەنە / گشتگیر' },
      { word: 'Discrimination', translation: 'جوداکاری / ژێگرتن' }
    ]
  },
  {
    id: 'c2-90',
    level: 'C2',
    title: 'The Ethics of Geoengineering',
    titleKurdish: 'ئەخلاقییاتا جیۆ-ئەندازیاریێ (Geoengineering)',
    dialogue: [
      { speaker: 'Climate Scientist', text: 'Geoengineering involves large-scale interventions in the Earth\'s climate system to counteract global warming, such as solar radiation management.', translation: 'جیۆ-ئەندازیاری (Geoengineering) ب واتایا دەستێوەردانێن مەزن د سیستەمێ تەمەسا زەویێ دا دهێت بۆ بەڕەنگاربوونا گەرمبوونا جیهانی، وەک کۆنترۆڵکردنا تیشکا رۆژێ.' },
      { speaker: 'Ethicist', text: 'While it might save us from climate catastrophe, it raises massive ethical concerns about "moral hazard"—will it reduce the urgency to cut emissions?', translation: 'سەرەڕای هندێ کو رەنگە مە ژ کارەساتێن تەمەسایێ رزگار بکەت، لێ کێشەیێن ئەخلاقی یێن مەزن دەربارەی "مەترسییا ئەخلاقی" پەیدا دکەت - ئەرێ ئەڤە دێ بلەزکرنا بڕینا گازێن پیسکەر کێم کەت؟' },
      { speaker: 'Climate Scientist', text: 'There is also the risk of "termination shock"—if the geoengineering system fails, the planet could experience sudden, extreme warming.', translation: 'هەروەسا مەترسییا "شوکا راگرتنێ" هەیه - ئەگەر سیستەمێ جیۆ-ئەندازیاریێ بشکێت، هەسارە دێ تووشی گەرمبوونەکا ژ نشکافە و توند بیت.' },
      { speaker: 'Ethicist', text: 'Furthermore, who decides what the "ideal" global temperature is? It could lead to international conflicts over planetary control.', translation: 'زێدەبارى ڤێ، کێ بڕیارێ ددەت کا پلەیەکا گەرمیا جیهانی یا "باش" چییە؟ ئەڤە دشێت ببیتە ئەگەرێ کێشەیێن نێڤدەولەتی ل سەر کۆنتڕۆلا هەسارەیێ.' }
    ],
    vocabulary: [
      { word: 'Counteract', translation: 'بەرەنگار-بوونەوە / پووچەڵ-کردنەوە' },
      { word: 'Hazard', translation: 'مەترسی' },
      { word: 'Urgency', translation: 'پێتڤییا بلەز / فەر-بوون' },
      { word: 'Termination', translation: 'کۆتایی-پێ-هێنان / راگرتن' }
    ]
  },
  {
    id: 'c2-91',
    level: 'C2',
    title: 'Post-Truth and the Role of Fact-Checking',
    titleKurdish: 'پاش-راستی (Post-Truth) و رۆڵێ پشکنینا راستییان',
    dialogue: [
      { speaker: 'Journalist A', text: 'In the "post-truth" era, objective facts are less influential in shaping public opinion than appeals to emotion and personal belief.', translation: 'د سەردەمێ "پاش-راستی" (post-truth) دا، ڕاستییێن بابەتی کارتێکرنا وان کێمترە ل سەر چێکردنا رایا گشتی ژ "پەنابرن بۆ هەست" و "باوەرییێن تایبەت".' },
      { speaker: 'Social Media Expert', text: 'Algorithms often amplify sensationalist misinformation because it generates more engagement than nuanced policy debate.', translation: 'ئەلگۆریتم زۆر جاران زانیارییێن خەلەت یێن تەزویر گەورە دکەن چونکی ئەو پتر کارلێکرنێ (engagement) پەیدا دکەن ژ گۆتفگۆ یێن سیاسەت یێن ورد.' },
      { speaker: 'Journalist A', text: 'Fact-checking has become an essential tool for democracy, but it faces the challenge of "backfire effects," where people dig in deeper when their beliefs are challenged.', translation: 'پشکنینا ڕاستییان بوویە ئامرازەکێ فەر بۆ دیمۆکراسیێ، لێ تووشی ئالنگارییا "کارتێکرنا بەروڤاژی" دبیت، کو تێدا خەڵک پتر سور دبن ل سەر باوەرییێن خۆ دەمێ بەرهەنگاریی ب وان دهێتە کرن.' },
      { speaker: 'Social Media Expert', text: 'We need to foster "information hygiene" and critical thinking skills to help citizens navigate this complex epistemological landscape.', translation: 'ئەم پێتڤی بە "ساخلەمییا زانیارییان" و شارەزایییا فکرا رەخنەیی نە بۆ هاریکاریکردنا هاووەڵاتییان د رێکرنا ڤی دیمەنێ زانستی یێ ئاڵۆز دا.' }
    ],
    vocabulary: [
      { word: 'Sensationalist', translation: 'هاندەر / پارەیەکی ب مەرەما پەیداکرنا هەستی مەزن' },
      { word: 'Nuanced', translation: 'ورد / خودان-گرنگی' },
      { word: 'Epistemological', translation: 'زانست-ناسی / ئەپیستیمۆلۆژی' },
      { word: 'Hygiene', translation: 'ساخلەمی / پاقژکەیی' }
    ]
  },
  {
    id: 'c2-92',
    level: 'C2',
    title: 'The Psychology of Crowds',
    titleKurdish: 'دەروونناسییا قەرەباڵغیێ (کۆمەلان)',
    dialogue: [
      { speaker: 'Psychologist A', text: 'Gustave Le Bon\'s "The Crowd" suggests that individuals lose their rational self-identity when they become part of a large group.', translation: 'گۆستاڤ لۆبۆن د "کۆمەلان" (The Crowd) دا دبێژیت کو تاکەکەسی ناسنامەیا خۆ یا عەقڵانی ژ دەست ددەن دەمێ دبنە پشکەک ژ کۆمەکا مەزن.' },
      { speaker: 'Psychologist B', text: 'The crowd is driven by primal instincts and "contagion," where emotions spread rapidly from person to person.', translation: 'قەرەباڵغی (کۆمەڵ) ب رێکا دەستپێکێن سەرەتایی و "پەتا-بوونێ" (contagion) دهێتە پالدان، کو تێدا هەست ب خێرایی ژ کەسەکێ بۆ یێ دی بەلاڤ دبن.' },
      { speaker: 'Psychologist A', text: 'This can lead to "mob mentality" and destructive behavior, as the sense of individual responsibility evaporates.', translation: 'ئەڤە دشێت ببیتە ئەگەرێ "مێشکێ ناهەمیێ" (mob mentality) و رەفتارێن وێرانکەر، چونکی هەستکرن ب بەرپرسیارەتییا تاکەکەسی نامینیت.' },
      { speaker: 'Psychologist B', text: 'However, more modern research suggests that crowds can also demonstrate "collective intelligence" and prosocial behavior if they share a positive goal.', translation: 'لێ، ڤەکۆلینێن نووتر ئاماژە ب هندێ دکەن کو کۆمەڵ دشێن "ژیمارییا کۆم" (collective intelligence) و رەفتارێن ئەرێنی یێن جڤاکی نیشان بدەن ئەگەر ئارمانجەکا باش هەبیت.' }
    ],
    vocabulary: [
      { word: 'Rational', translation: 'عەقڵانی / ژیر' },
      { word: 'Contagion', translation: 'پەتا / گواستنەوەیا نەخۆشیێ یان هەستەکی' },
      { word: 'Evaporates', translation: 'نامینیت / بەخار-دبیت (دچیتە هەوای)' },
      { word: 'Prosocial', translation: 'ئەرێنیێ جڤاکی / هاریکاری-پێدەر' }
    ]
  },
  {
    id: 'c2-93',
    level: 'C2',
    title: 'Transhumanism and the Future of the Body',
    titleKurdish: 'ترانسهیومانزم (Transhumanism) و پاشەڕۆژا جەستەى',
    dialogue: [
      { speaker: 'Transhumanist', text: 'Transhumanism advocates for the use of technology to enhance human intellectual and physical capabilities beyond current biological limits.', translation: '"ترانسهیومانزم" پشتەڤانییا بکارئینانا تەکنۆلۆژیایێ دکەت بۆ باشترکردنا شیانێن عەقڵانی و جەستەیی یێن مرۆڤی تێپەڕکردنا سنوورێن بایۆلۆژی یێن نوکە.' },
      { speaker: 'Bioethicist', text: 'This raises fundamental questions about what it means to be human. If we replace our limbs and augment our brains, are we still the same species?', translation: 'ئەڤە پرسیارێن بنەڕەتی دەربارەی وێ چەندێ پەیدا دکەت کا واتا مرۆڤ بونێ چییە. ئەگەر ئەم ئەندامێن جەستەیێ خۆ بگوهۆڕین و مێشکێ خۆ زێدە بکەین, ئەرێ ئەم هێژ هەمان جۆرێ زیندەوەرین؟' },
      { speaker: 'Transhumanist', text: 'Evolution has always been a process of self-transcendence; technology is simply the next phase of our natural development.', translation: 'پەرەسەندن (Evolution) هەر دەم پرۆسەیەک بویە بۆ "خۆ-تێپەڕاندن"؛ تەکنۆلۆژیا تەنێ قۆناغا دویفرا یا گەشەکرنا مە یا سرۆشتییە.' },
      { speaker: 'Bioethicist', text: 'But it also risks creating a profound divide between the "augmented" and the "unaugmented," potentially leading to new forms of inequality.', translation: 'لێ, هەروەسا مەترسییا هندێ هەیە کو جوداهییەکا قویل د ناڤبەرا "زێدە-کری" و "نە-زێدە-کری" دا پەیدا ببیت، کو رەنگە ببیتە ئەگەرێ جۆرێن نوو یێن نە-یەکسانیێ.' }
    ],
    vocabulary: [
      { word: 'Advocates', translation: 'پشتەڤانی دکەت / بەرەڤانی لێ دکەت' },
      { word: 'Augment', translation: 'زێدە-کردن / گەشە-پێ-دان' },
      { word: 'Species', translation: 'جۆر (یێ زیندەوەران)' },
      { word: 'Transcendence', translation: 'تێپەڕاندن / سەرکەفتن ب سەر تشەتەکی دا' }
    ]
  },
  {
    id: 'c2-94',
    level: 'C2',
    title: 'Modern Slavery and Supply Chains',
    titleKurdish: 'کۆیلایەتییا نوو و زنجیرەیێن دابینکردنێ',
    dialogue: [
      { speaker: 'Human Rights Critic', text: 'Modern slavery—including forced labor and human trafficking—is often hidden within the complex global supply chains of major brands.', translation: 'کۆیلایەتییا نوو - ب گرتنا بەری کارێ ب هێز و بازرگانیکردن ب مرۆڤان - زۆر جاران د ناڤ زنجیرەیێن دابینکردنێ یێن ئاڵۆز یێن براندێن مەزن دا ڤەشارتییە.' },
      { speaker: 'Business Consultant', text: 'Companies are facing increasing pressure from consumers and regulators to ensure their products are "slavery-free."', translation: 'کۆمپانیا رووبەڕوویێ فشارەکا زێدە دبن ژ لایێ بەکارهێنەران و رێکخەران ڤە بۆ هندێ کو مسۆگەر بکەن بەرهەمێن وان "بێ-کۆیلایەتی" بن.' },
      { speaker: 'Human Rights Critic', text: 'However, auditing thousands of subcontractors in different countries is incredibly difficult and often fails to uncover systemic exploitation.', translation: 'لێ، پشکنینا هزاران بەڵێندەرێن فرعی د وەڵاتێن جودا دا گەلەک یا بزەحمەتە و زۆر جاران شکەستنێ دئینیت د ئاشکراکردنا ئێشاندنا (exploitation) سیستەماتیك دا.' },
      { speaker: 'Business Consultant', text: 'We need better transparency and tougher legislation, like the UK\'s Modern Slavery Act, to hold corporations accountable.', translation: 'ئەم پێتڤی ب شەفافیەتەکا باشتر و یاسایێن توندتر نە، وەک "یاسایا کۆیلایەتییا نوو" یا بەریتانیا، بۆ هندێ کو کۆمپانیا بەرپرسار کەن.' }
    ],
    vocabulary: [
      { word: 'Trafficking', translation: 'بازرگانیکردنا نە-یاسایی (ب تایبەت مرۆڤ)' },
      { word: 'Auditing', translation: 'پشکنین / وردبینی' },
      { word: 'Subcontractors', translation: 'بەڵێندەرێن لاوەکی' },
      { word: 'Legislation', translation: 'یاسا-دانان / یاسادانای' }
    ]
  },
  {
    id: 'c2-95',
    level: 'C2',
    title: 'The "End of History" Revisited',
    titleKurdish: '"دوماهییا مێژوویێ" دووبارە سەحکرنەووە',
    dialogue: [
      { speaker: 'Political Scientist A', text: 'Francis Fukuyama\'s "End of History" thesis proposed that liberal democracy was the final form of human government.', translation: 'تێزێ فرانسیس فۆکۆیاما یێ "دوماهییا مێژوویێ" پێشنیار دکر کو دیمۆکراسییا لیبڕاڵ دێ بیتە شێوازێ دوماهیێ یێ حکومرانییا مرۆڤی.' },
      { speaker: 'Political Scientist B', text: 'With the rise of authoritarianism and global populism, it seems that history hasn\'t ended, but has instead taken a volatile turn.', translation: 'ب سەرهەلدانا زۆرداریێ (authoritarianism) و پۆپیولیزما جیهانی، وەسا دیار دبیت کو مێژوو ب دوماهی نەهاتییە، بەلکو وەرچەرخانەکا نە-جێگیر وەرگرتییە.' },
      { speaker: 'Political Scientist A', text: 'Fukuyama himself has adjusted his view, emphasizing the importance of strong institutions and political order over mere democratic procedures.', translation: 'فۆکۆیاما ب خۆ ژی دیتنا خۆ گوهۆڕییە، و زێدەتر گرنگیێ ددەتە دامەزراوەیێن ب هێز و رێساێن سیاسی نەک تەنێ رێکارێن دیمۆکراسی.' },
      { speaker: 'Political Scientist B', text: 'The challenge now is whether liberal democracy can adapt to the pressures of globalization and the digital information environment.', translation: 'ئالنگاری نوکە ئەوە کا ئەرێ دیمۆکراسییا لیبڕاڵ دشێت خۆ دگەل فشارێن جیهانی بونێ و ژینگەیێ زانیاری یێ دیجیتاڵی بگونجینیت.' }
    ],
    vocabulary: [
      { word: 'Thesis', translation: 'تێز / نامەیا زانستی / بیرۆکەیەکا رەسەن' },
      { word: 'Volatile', translation: 'نە-جێگیر / ب خێرایی بگوهۆڕ' },
      { word: 'Adjusted', translation: 'رێست-کری / گوهۆڕین دایێ بۆ باشترکردنێ' },
      { word: 'Procedures', translation: 'رێکار / شێوازێن کارکردنێ' }
    ]
  },
  {
    id: 'c2-96',
    level: 'C2',
    title: 'The Sharing Economy: Pros and Cons',
    titleKurdish: 'ئابوورییا هەڤپشک (Sharing Economy): مفای و زیان',
    dialogue: [
      { speaker: 'Economist A', text: 'The sharing economy, through platforms like Uber and Airbnb, has unlocked the value of underutilized assets.', translation: 'ئابوورییا هەڤپشک (Sharing economy)، ب رێکا سەکۆێن وەک ئۆبەر و ئێر-بی-ئین-بی، بهایێ سامانێن کێم-بکارئینای ئاشکرا کرییە.' },
      { speaker: 'Labour Advocate', text: 'But it has also led to the "gigification" of work, where employees lose the benefits and stability of traditional employment.', translation: 'لێ هەروەسا بوویە ئەگەرێ "گیگ-کردن" (gigification) یا کاران، کو تێدا فەرمانبەران مفای و جێگیرییا کارێ تەقلیدی ژ دەست ددەن.' },
      { speaker: 'Economist A', text: 'It increases efficiency and provides flexible earn-as-you-go opportunities for millions of people.', translation: 'ئەو کاریگەرییا ئابووری زیاد دکەت و دەلیڤەیێن قازانجی یێن گونجاو (flexible) بۆ ملیۆنان خەڵکی دابین دکەت.' },
      { speaker: 'Labour Advocate', text: 'Yet it often shifts the risk and costs—like insurance and maintenance—from the corporation onto the individual worker.', translation: 'لێ زۆر جاران مەترسی و خەرجییان - وەک دڵنیایی و مەیینتێنانس - ژ سەر کۆمپانیایێ بۆ سەر کرێکاری تاکەکەسی دگوهۆڕیت.' }
    ],
    vocabulary: [
      { word: 'Underutilized', translation: 'کێم-بکارئینای' },
      { word: 'Gigification', translation: 'بوونە کارێ کاتی و پارچە-پارچە' },
      { word: 'Maintenance', translation: 'چاڤخشاندن / مەیینتێنانس' },
      { word: 'Flexible', translation: 'گونجاو / نەرم' }
    ]
  },
  {
    id: 'c2-97',
    level: 'C2',
    title: 'Quantum Computing and Cryptography',
    titleKurdish: 'ژمارەکارییا کوانتەم و کریپتۆگرافی',
    dialogue: [
      { speaker: 'Computer Scientist', text: 'Quantum computers use qubits to perform certain types of calculations exponentially faster than classical computers.', translation: 'کۆمپیۆتەرێن کوانتەم "کیوبیت" (qubits) بکار دئینن بۆ ئەنجامدانا هندەک جۆرێن ژمارەکارییان ب شێوەیەکێ زۆر خێراتر ژ کۆمپیۆتەرێن کلاسیک.' },
      { speaker: 'Security Expert', text: 'This represents a major threat to current encryption methods, like RSA, which rely on the difficulty of factoring large numbers.', translation: 'ئەڤە مەترسییەکا مەزنە بۆ رێکێن نوکە یێن شفره-کردنێ (encryption)، وەک RSA، یێن پشت ب زەحمەتییا لێکدانا ژمارەیێن مەزن دبه ستن.' },
      { speaker: 'Computer Scientist', text: 'The race is on to develop "post-quantum cryptography" that can withstand attacks from quantum machines.', translation: 'کێبڕکێیەکا مەزن هەیە بۆ پەرەپێدانا "شفره-کردنا پاش-کوانتەم" یا کو بشێت ل هەمبەر هێرشێن ئامێرێن کوانتەمی رابوەستیت.' },
      { speaker: 'Security Expert', text: 'While full-scale quantum computers are still years away, we must start migrating our sensitive data to quantum-resistant standards now.', translation: 'هەرچەندە کۆمپیۆتەرێن کوانتەم یێن تەمام هێژ گەلەک ساڵ پێ دڤێن، لێ پێتڤییە ئەم ژ نوکە وەرە دەست ب گواستنەووا داتایێن خۆ یێن هەستیار بکەین بۆ ستاندەردێن بەرگری-کوانتەم.' }
    ],
    vocabulary: [
      { word: 'Exponentially', translation: 'ب شێوەیەکێ زۆر و خێرا (دووبارە-بوو)' },
      { word: 'Encryption', translation: 'شفره-کردن / نهێنی-کردن' },
      { word: 'Withstand', translation: 'بەرگری-کردن / راوەستان ل هەمبەر' },
      { word: 'Migrating', translation: 'گواستنەوە (ژ سیستەمەکی بۆ ئێدی)' }
    ]
  },
  {
    id: 'c2-98',
    level: 'C2',
    title: 'The Philosophy of Play (Homo Ludens)',
    titleKurdish: 'فەلسەفەیا یاریێ (Homo Ludens)',
    dialogue: [
      { speaker: 'Cultural Historian', text: 'Johan Huizinga\'s "Homo Ludens" argues that play is a primary element in the development of human culture and society.', translation: 'جۆهان هۆیزینگا د "Homo Ludens" دا دبێژیت کو یاری رەگەزەکێ سەرەکییە د گەشەکرنا کەلتۆر و جڤاکێ مرۆڤی دا.' },
      { speaker: 'Philosopher', text: 'Play isn\'t just recreation; it\'s a "magic circle" where rules are created and meaning is generated outside of life\'s biological necessities.', translation: 'یاری تەنێ بێهنڤەدان نینە؛ بەلکو "بازنەیەکێ جادوویی" یە کو تێدا یاسا دهێنە درۆستکردن و واتا پەیدا دبیت ژ دەرڤەی پێتڤییێن بایۆلۆژی یێن ژیانێ.' },
      { speaker: 'Cultural Historian', text: 'Everything from law and politics to war and art has its roots in the formal structures and competitive spirits of play.', translation: 'هەمی تشت، ژ یاسا و سیاسەتێ بگرە هەتا شەڕ و هونەری، ریشالێن وان د بونیاتێن فەرمی و هەستێ کێبڕکێیێ یێ یاریێ دا یە.' },
      { speaker: 'Philosopher', text: 'In our productivity-obsessed world, we risk losing this essential playfulness, which is the source of all imaginative and symbolic activity.', translation: 'د جیهانا مەیا تووشی "بەرهەمهێنانێ" بووی، مەترسییا هندێ هەیە ئەم ڤێ "یاری-گەرییا" فەر ژ دەست بدەین، یا کو ژێدەرێ هەمی چالاکییێن خەیالی و رەمزی نە.' }
    ],
    vocabulary: [
      { word: 'Recreation', translation: 'بێهنڤەدان / کەیف و خۆشی' },
      { word: 'Obsessed', translation: 'تووش-بوو (ب عەشقەکا زۆر) / گرتو' },
      { word: 'Playfulness', translation: 'یاری-گەری / هەستێ یاریێ' },
      { word: 'Imaginative', translation: 'خەیالی' }
    ]
  },
  {
    id: 'c2-99',
    level: 'C2',
    title: 'Future Cities: Smart vs. Sustainable',
    titleKurdish: 'باژێڕێن پاشەڕۆژێ: ژیر یان بەردەوام (Sustainable)',
    dialogue: [
      { speaker: 'Urban Planner A', text: 'The "smart city" uses sensors and big data to optimize urban services, from traffic flow to waste management.', translation: '"باژێڕێ ژیر" هەستەوەر (sensors) و داتایێن مەزن بکار دئینیت بۆ باشترکردنا خزمەتگۆزارییێن باژێڕی، ژ هاتنوچۆنێ بگرە هەتا بڕێڤەبرنا بەرهەما پاشمایان.' },
      { speaker: 'Urban Planner B', text: 'But "smart" doesn\'t always mean "sustainable." We must focus on reducing the carbon footprint and creating green, walkable spaces.', translation: 'لێ "ژیر" هەر دەم ب رامان "بەردەوام" (sustainable) نینە. پێتڤییە ئەم فۆکەسێ بئیخینە سەر کێمکردنا کاربۆنێ و درۆستکردنا جهێن کەسک و گونجاو بۆ پیاسەکرنێ.' },
      { speaker: 'Urban Planner A', text: 'The two are not mutually exclusive. Data can help us manage resources more efficiently to achieve environmental goals.', translation: 'هەردوو دژبەرێن هەڤ نینن. داتایە دشێت هاریکاریا مە بکەت سامانێن خۆ ب شێوەیەکێ کاریگەرتر بڕێڤە ببەین بۆ گەهیشتن ب ئارمانجێن ژینگەیی.' },
      { speaker: 'Urban Planner B', text: 'True, but we must ensure that high-tech solutions don\'t lead to "surveillance urbanism" or the exclusion of low-income residents.', translation: 'درۆستە، لێ پێتڤییە ئەم مسۆگەر بکەن کو رێکارێن تەکنۆلۆژی یێن بلند نەبنە ئەگەرێ "باژێڕ-دارییا چاودێریێ" یان پەراوێزخستنا ئاکنجیێن هەژار.' }
    ],
    vocabulary: [
      { word: 'Optimize', translation: 'باشترین بکارئینان / گەهاندنە ئاستێ هەرە باش' },
      { word: 'Footprint', translation: 'شێن-پێ / کارتێکرن ل سەر ژینگەیێ' },
      { word: 'Exclusion', translation: 'پەراوێز-خستن / رەت-کردن' },
      { word: 'Residents', translation: 'ئاکنجی / دانیشتوو' }
    ]
  },
  {
    id: 'c2-100',
    level: 'C2',
    title: 'The Great Silk Road: Then and Now',
    titleKurdish: 'رێکا حەریر یا مەزن: جاران و نوکە',
    dialogue: [
      { speaker: 'Historian', text: 'The ancient Silk Road was a network of trade routes connecting East and West, facilitating the exchange of goods, ideas, and cultures.', translation: 'رێکا حەریر یا کەڤن تۆرەکا رێیێن بازرگانی بوو کو روژهەلات و روژئاڤا ب هەڤ ڤە گرێ ددان، و رێ خۆش دکر بۆ گوهۆڕینا کەلوپەل، بیرۆکە، و کەلتۆران.' },
      { speaker: 'Geopolitical Analyst', text: 'Today, the "Belt and Road Initiative" seeks to recreate these connections through massive infrastructure projects across Eurasia.', translation: 'نوکە، دەستپێشخەرییا "قاییش و رێ" (Belt and Road) هەوڵ ددەت ئەوان پەیوەندییان دووبارە درۆست بکەتەوە ب رێکا پڕۆژەیێن ژێرخانێ یێن زەبەلاح ل سەرتاسەری ئەوراسیا.' },
      { speaker: 'Historian', text: 'The original Silk Road spread Buddhism and Islam; the new one spreads technology and economic influence.', translation: 'رێکا حەریر یا رەسەن ئایینێن بودیزم و ئیسلامێ بەلاڤ کرن؛ یا نوو تەکنۆلۆژیا و هەژموونا ئابووری بەلاڤ دکەت.' },
      { speaker: 'Geopolitical Analyst', text: 'It remains a powerful symbol of global interconnectedness, but it also raises concerns about "debt-trap diplomacy" and shifting power balances.', translation: 'ئەو وەک رەمزەکێ ب هێز یێ پێکڤە-گرێداییا جیهانی دمینیت، لێ هەروەسا دڵەڕاوکێیێ دەربارەی "دیپلۆماسییەتا داڤا قەرزان" و گوهۆڕینا هاوسەنگییا هێزێ پەیدا دکەت.' }
    ],
    vocabulary: [
      { word: 'Facilitating', translation: 'ئاسان-کردن / رێ-خۆش-کردن' },
      { word: 'Initiative', translation: 'دەستپێشخەری / دەسپێشخەری' },
      { word: 'Interconnectedness', translation: 'پێکڤە-گرێدایی' },
      { word: 'Diplomacy', translation: 'دیپلۆماسییەت / سیاسەتا پەیوەندییان' }
    ]
  },
];
