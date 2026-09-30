import { Story } from '../types';

export const STORIES: Story[] = [
  {
    id: 'story-1',
    title: 'The Brave Little Bird',
    titleKurdish: 'چویکێ ئازا و بچویک',
    content: 'Once upon a time, there was a little bird named Pip. Pip was very small, but he had a big heart. One day, a strong wind blew the other birds away from their nests. Pip stayed behind to help the younger birds who could not fly well. He brought them food and kept them warm until the wind stopped. Everyone called him the bravest bird in the forest.',
    contentKurdish: 'جارەکێ ژ جاران، چویکەکێ بچویک هەبوو بناڤێ پیپ. پیپ گەلەک یێ بچویک بوو، بەلێ دلەکێ مەزن هەبوو. روژەکێ، بایەکێ ب هێز هات و چویکێن دی ژ هێلینێن وان دویر ئێخستن. پیپ ل پاش ما دا هاریکاریا چویکێن بچویکتر بکەت یێن کو نەدشیا باش بفڕن. وی خارن بو وان دبر و ئەو گەرم دکرن هەتا بای راوەستیای. هەمی کەسان دگوتێ ئازاترین چویک ل دارستانێ.',
    level: 'A1',
    questions: [
      {
        id: 'q1-1',
        question: 'What was the bird\'s name?',
        options: ['Pop', 'Pip', 'Peep', 'Puff'],
        correctAnswer: 1
      },
      {
        id: 'q1-2',
        question: 'Was Pip a big bird?',
        options: ['Yes, he was huge', 'No, he was very small', 'He was medium-sized', 'He was a giant'],
        correctAnswer: 1
      },
      {
        id: 'q1-3',
        question: 'What happened one day?',
        options: ['It rained', 'A strong wind blew', 'A cat came', 'The sun disappeared'],
        correctAnswer: 1
      },
      {
        id: 'q1-4',
        question: 'Why did Pip stay behind?',
        options: ['He was lazy', 'He was scared', 'To help younger birds', 'He was sleeping'],
        correctAnswer: 2
      },
      {
        id: 'q1-5',
        question: 'What did Pip bring to the younger birds?',
        options: ['Water', 'Toys', 'Food', 'Leaves'],
        correctAnswer: 2
      },
      {
        id: 'q1-6',
        question: 'How did Pip keep the birds warm?',
        options: ['With a blanket', 'By staying with them', 'With fire', 'With a heater'],
        correctAnswer: 1
      },
      {
        id: 'q1-7',
        question: 'Where did Pip live?',
        options: ['In a house', 'In the forest', 'In a cage', 'In the city'],
        correctAnswer: 1
      },
      {
        id: 'q1-8',
        question: 'What did people call Pip at the end?',
        options: ['The smallest bird', 'The bravest bird', 'The fastest bird', 'The loudest bird'],
        correctAnswer: 1
      },
      {
        id: 'q1-9',
        question: 'Could the younger birds fly well?',
        options: ['Yes, they were experts', 'No, they could not fly well', 'They didn\'t have wings', 'They were too fast'],
        correctAnswer: 1
      },
      {
        id: 'q1-10',
        question: 'What is the moral of the story?',
        options: ['Size doesn\'t matter for bravery', 'Always fly away from wind', 'Birds are small', 'Forests are dangerous'],
        correctAnswer: 0
      }
    ]
  },
  {
    id: 'story-2',
    title: 'The Magic Garden',
    titleKurdish: 'باخچێ سێحرى',
    content: 'Sarah found a hidden door in her grandmother\'s backyard. Behind the door was a magic garden where flowers could talk. A blue rose told Sarah that the garden needed water to keep its magic. Sarah watered the plants every day. In return, the flowers sang beautiful songs to her every evening.',
    contentKurdish: 'سارایێ دەرگەهەکێ ڤەشارتی د حەوشا پشتێ یا داپیر خۆ دا دیت. ل پشت دەرگەهی باخچەکێ سێحری هەبوو کو گولان دشیا باخڤن. گولەکا شین ژ سارایێ را گوت کو باخچە پێدڤی ب ئاڤێ یە دا سێحرا خۆ بپارێزیت. سارایێ هەر روژ ئاڤ ددا رووەکان. ل بەرامبەر دا، گولان هەر ئێڤاری سترانێن جوان بو وێ دگوتن.',
    level: 'A1',
    questions: [
      {
        id: 'q2-1',
        question: 'Where did Sarah find the door?',
        options: ['In her school', 'In her grandmother\'s backyard', 'In the park', 'In the forest'],
        correctAnswer: 1
      },
      {
        id: 'q2-2',
        question: 'What was behind the door?',
        options: ['A treasure', 'A magic garden', 'A dark room', 'A playground'],
        correctAnswer: 1
      },
      {
        id: 'q2-3',
        question: 'What was special about the flowers?',
        options: ['They were giant', 'They could talk', 'They were made of gold', 'They could fly'],
        correctAnswer: 1
      },
      {
        id: 'q2-4',
        question: 'What color was the rose that talked to Sarah?',
        options: ['Red', 'Blue', 'Yellow', 'White'],
        correctAnswer: 1
      },
      {
        id: 'q2-5',
        question: 'What did the garden need to keep its magic?',
        options: ['Sunlight', 'Water', 'Music', 'Love'],
        correctAnswer: 1
      },
      {
        id: 'q2-6',
        question: 'How often did Sarah water the plants?',
        options: ['Once a week', 'Every day', 'Never', 'Once a month'],
        correctAnswer: 1
      },
      {
        id: 'q2-7',
        question: 'What did the flowers do for Sarah in return?',
        options: ['Gave her gold', 'Sang beautiful songs', 'Danced for her', 'Told her jokes'],
        correctAnswer: 1
      },
      {
        id: 'q2-8',
        question: 'When did the flowers sing to Sarah?',
        options: ['In the morning', 'At noon', 'Every evening', 'At night'],
        correctAnswer: 2
      },
      {
        id: 'q2-9',
        question: 'Who owned the backyard?',
        options: ['Sarah', 'Her mother', 'Her grandmother', 'Her friend'],
        correctAnswer: 2
      },
      {
        id: 'q2-10',
        question: 'Was the door easy to see?',
        options: ['Yes, it was bright red', 'No, it was hidden', 'It was a giant door', 'There was no door'],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 'story-3',
    title: 'The Helpful Robot',
    titleKurdish: 'رۆبۆتێ هاریکار',
    content: 'In a small town, there was a robot named Bolt. Bolt was built to help people with their chores. He could clean houses, wash cars, and even cook dinner. One day, the town\'s water pipe broke. Bolt used his strong arms to hold the pipe together until the repairman arrived. The people were very thankful for their robotic friend.',
    contentKurdish: 'ل باژێرەکێ بچویک، رۆبۆتەک هەبوو بناڤێ بۆڵت. بۆڵت هاتبوو دروستکرن دا هاریکاریا خەلکی بکەت د کارێن وان یێن مالێ دا. وی دشیا مالان پاقژ بکەت، ترومبێلان بشوت، و تەنانەت خوارنا ئێڤاری ژی چێبکەت. روژەکێ، بۆڕیا ئاڤێ یا باژێری شکا. بۆڵتی دەستێن خۆ یێن ب هێز بکارئینان دا بۆڕیێ پێکڤە بگریت هەتا وەستایێ چێکرنێ هات. خەلک گەلەک سوپاسگوزار بوون بو هەڤالێ خۆ یێ رۆبۆت.',
    level: 'A2',
    questions: [
      {
        id: 'q3-1',
        question: 'What was the robot\'s name?',
        options: ['Nut', 'Bolt', 'Screw', 'Gear'],
        correctAnswer: 1
      },
      {
        id: 'q3-2',
        question: 'What was Bolt built for?',
        options: ['To play games', 'To help with chores', 'To fight', 'To drive'],
        correctAnswer: 1
      },
      {
        id: 'q3-3',
        question: 'What could Bolt do?',
        options: ['Clean houses', 'Wash cars', 'Cook dinner', 'All of the above'],
        correctAnswer: 3
      },
      {
        id: 'q3-4',
        question: 'What broke in the town?',
        options: ['The electricity', 'The water pipe', 'The bridge', 'The road'],
        correctAnswer: 1
      },
      {
        id: 'q3-5',
        question: 'How did Bolt help with the broken pipe?',
        options: ['He called the police', 'He held it together', 'He fixed it with tape', 'He ignored it'],
        correctAnswer: 1
      },
      {
        id: 'q3-6',
        question: 'Who arrived to fix the pipe permanently?',
        options: ['The mayor', 'The repairman', 'The doctor', 'The teacher'],
        correctAnswer: 1
      },
      {
        id: 'q3-7',
        question: 'Where did Bolt live?',
        options: ['In a big city', 'In a small town', 'In a factory', 'In space'],
        correctAnswer: 1
      },
      {
        id: 'q3-8',
        question: 'Were the people happy with Bolt?',
        options: ['No, they were scared', 'Yes, they were thankful', 'They didn\'t care', 'They wanted to sell him'],
        correctAnswer: 1
      },
      {
        id: 'q3-9',
        question: 'What kind of arms did Bolt have?',
        options: ['Weak arms', 'Long arms', 'Strong arms', 'No arms'],
        correctAnswer: 2
      },
      {
        id: 'q3-10',
        question: 'Is Bolt a human?',
        options: ['Yes', 'No, he is a robot', 'Maybe', 'He is an alien'],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 'story-4',
    title: 'The Lost Key',
    titleKurdish: 'کلیلێن بەرزەبوویی',
    content: 'Tom lost his house key while playing in the park. He looked everywhere: under the benches, near the fountain, and in the grass. He was very sad because he could not go home. Suddenly, his dog, Max, started digging near a big oak tree. Max found the key! Tom was so happy and gave Max a big treat.',
    contentKurdish: 'تۆمی کلیلێن خانیێ خۆ بەرزەکرن دەما یێ دناڤ پارکی دا یاری دکرن. وی ل هەمی جهان گەڕیا: ل بن کورسیان، نێزیک نافوورێ، و دناڤ گیای دا. ئەو گەلەک یێ خەمگین بوو چونکی نەدشیا بچیتە مال. ژ نیشکەکێ ڤە، سەگێ وی، ماکس، دەست ب کولانێ کر نێزیک دارەکا مەزن یا بەڕوویێ. ماکسی کلیل دیتن! تۆم گەلەک کەیفخۆش بوو و خوارنەکا خوش دا ماکسی.',
    level: 'A1',
    questions: [
      {
        id: 'q4-1',
        question: 'What did Tom lose?',
        options: ['His phone', 'His house key', 'His wallet', 'His ball'],
        correctAnswer: 1
      },
      {
        id: 'q4-2',
        question: 'Where was Tom playing?',
        options: ['At school', 'In the park', 'At the beach', 'In the garden'],
        correctAnswer: 1
      },
      {
        id: 'q4-3',
        question: 'Where did Tom look for the key?',
        options: ['Under benches', 'Near the fountain', 'In the grass', 'All of the above'],
        correctAnswer: 3
      },
      {
        id: 'q4-4',
        question: 'How did Tom feel when he couldn\'t find the key?',
        options: ['Happy', 'Angry', 'Sad', 'Excited'],
        correctAnswer: 2
      },
      {
        id: 'q4-5',
        question: 'What is the dog\'s name?',
        options: ['Buddy', 'Max', 'Charlie', 'Rocky'],
        correctAnswer: 1
      },
      {
        id: 'q4-6',
        question: 'Where did Max start digging?',
        options: ['Near the fountain', 'Under a bench', 'Near a big oak tree', 'In the sand'],
        correctAnswer: 2
      },
      {
        id: 'q4-7',
        question: 'What did Max find?',
        options: ['A bone', 'A ball', 'The key', 'A toy'],
        correctAnswer: 2
      },
      {
        id: 'q4-8',
        question: 'What did Tom give Max?',
        options: ['A bath', 'A big treat', 'A toy', 'A hug'],
        correctAnswer: 1
      },
      {
        id: 'q4-9',
        question: 'Could Tom go home without the key?',
        options: ['Yes', 'No', 'Maybe', 'He lived in the park'],
        correctAnswer: 1
      },
      {
        id: 'q4-10',
        question: 'Was Max a helpful dog?',
        options: ['Yes', 'No', 'He was lazy', 'He was mean'],
        correctAnswer: 0
      }
    ]
  },
  {
    id: 'story-5',
    title: 'A Trip to the Moon',
    titleKurdish: 'گەشتەک بو سەر هەیڤێ',
    content: 'In the year 2050, children can go to the moon for school trips. Leo was very excited for his first trip. He wore a silver space suit and jumped into a rocket. On the moon, he saw many craters and collected moon rocks. He even played football with his friends in low gravity. It was the best day of his life.',
    contentKurdish: 'ل سالا ٢٠٥٠، زارۆک دشێن بچنە سەر هەیڤێ بو گەشتێن قوتابخانێ. لیۆ گەلەک یێ ب پەرۆش بوو بو گەشتا خۆ یا ئێکێ. وی جلیەکێ فەزایی یێ زیڤی پۆشی و چوو دناڤ راکێتەکێ دا. ل سەر هەیڤێ، وی گەلەک چاڵ دیتن و بەردێن هەیڤێ کۆمکرن. وی تەنانەت تەپا پێ دگەل هەڤالێن خۆ کر دناڤ کێم کێشێ دا. ئەو خوشترین روژ بوو د ژیانا وی دا.',
    level: 'B1',
    questions: [
      {
        id: 'q5-1',
        question: 'In what year does the story take place?',
        options: ['2020', '2050', '3000', '1990'],
        correctAnswer: 1
      },
      {
        id: 'q5-2',
        question: 'Where can children go for school trips?',
        options: ['To the zoo', 'To the moon', 'To Mars', 'To the ocean'],
        correctAnswer: 1
      },
      {
        id: 'q5-3',
        question: 'How did Leo feel about the trip?',
        options: ['Scared', 'Bored', 'Excited', 'Tired'],
        correctAnswer: 2
      },
      {
        id: 'q5-4',
        question: 'What color was Leo\'s space suit?',
        options: ['Gold', 'Silver', 'White', 'Blue'],
        correctAnswer: 1
      },
      {
        id: 'q5-5',
        question: 'What did Leo jump into?',
        options: ['A plane', 'A rocket', 'A car', 'A boat'],
        correctAnswer: 1
      },
      {
        id: 'q5-6',
        question: 'What did Leo see on the moon?',
        options: ['Trees', 'Craters', 'Rivers', 'Animals'],
        correctAnswer: 1
      },
      {
        id: 'q5-7',
        question: 'What did Leo collect?',
        options: ['Flowers', 'Moon rocks', 'Shells', 'Coins'],
        correctAnswer: 1
      },
      {
        id: 'q5-8',
        question: 'What sport did Leo play on the moon?',
        options: ['Basketball', 'Football', 'Tennis', 'Golf'],
        correctAnswer: 1
      },
      {
        id: 'q5-9',
        question: 'Why was playing football different on the moon?',
        options: ['It was cold', 'Low gravity', 'No air', 'Too much dust'],
        correctAnswer: 1
      },
      {
        id: 'q5-10',
        question: 'Was it a bad day for Leo?',
        options: ['Yes', 'No, it was the best day', 'It was an okay day', 'He hated it'],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 'story-6',
    title: 'The Golden Fish',
    titleKurdish: 'ماسیێ زێرین',
    content: 'An old fisherman caught a golden fish in his net. The fish spoke and asked to be set free. In return, the fish promised to grant three wishes. The fisherman asked for a new boat, a big house, and a feast for his village. The fish granted all the wishes. The fisherman lived happily and never caught the golden fish again.',
    contentKurdish: 'ماسیگرەکێ پیر ماسیەکێ زێرین دناڤ تۆڕا خۆ دا گرت. ماسیێ ئاخفت و داخواز کر کو بهێتە ئازادکرن. ل بەرامبەر دا، ماسیێ سۆز دا کو سێ داخوازیا بجه بینیت. ماسیگری داخوازا بەلەمەکا نوی، خانیەکێ مەزن، و خوارنەکا مەزن بو گوندێ خۆ کر. ماسیێ هەمی داخوازی بجه ئینان. ماسیگر ب کەیفخۆشی ژیا و چ جاران ماسیێ زێرین دیسا نەگرت.',
    level: 'A2',
    questions: [
      { id: 'q6-1', question: 'What did the fisherman catch?', options: ['A shark', 'A golden fish', 'A boot', 'A turtle'], correctAnswer: 1 },
      { id: 'q6-2', question: 'What was special about the fish?', options: ['It was huge', 'It could talk', 'It could fly', 'It was invisible'], correctAnswer: 1 },
      { id: 'q6-3', question: 'How many wishes did the fish promise?', options: ['One', 'Two', 'Three', 'Five'], correctAnswer: 2 },
      { id: 'q6-4', question: 'What was the first wish?', options: ['A new car', 'A new boat', 'A new net', 'A new hat'], correctAnswer: 1 },
      { id: 'q6-5', question: 'What was the second wish?', options: ['A big house', 'A castle', 'A farm', 'A shop'], correctAnswer: 0 },
      { id: 'q6-6', question: 'Who was the feast for?', options: ['Just the fisherman', 'His family', 'His village', 'His cats'], correctAnswer: 2 },
      { id: 'q6-7', question: 'Did the fish grant the wishes?', options: ['Yes', 'No', 'Only one', 'He lied'], correctAnswer: 0 },
      { id: 'q6-8', question: 'How did the fisherman live after that?', options: ['He was poor', 'He was sad', 'He lived happily', 'He was angry'], correctAnswer: 2 },
      { id: 'q6-9', question: 'Did he catch the golden fish again?', options: ['Yes, every day', 'No, never again', 'He tried but failed', 'The fish died'], correctAnswer: 1 },
      { id: 'q6-10', question: 'What did the fish ask for?', options: ['Food', 'To be set free', 'Money', 'Water'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-7',
    title: 'The Clever Fox',
    titleKurdish: 'ڕێویێ ژیر',
    content: 'A hungry fox saw a crow with a piece of cheese in its beak. The fox wanted the cheese. He started praising the crow\'s beautiful voice. He asked the crow to sing a song. When the crow opened its beak to sing, the cheese fell down. The fox caught the cheese and ran away, laughing. The crow learned not to trust flatterers.',
    contentKurdish: 'ڕێویەکێ برسی قەلەشکەک دیت کو پارچەکا پەنیری د دەڤی دا بوو. ڕێوی ئەو پەنیرە دڤیا. وی دەست ب مەدحکرنا دەنگێ قەلەشکی یێ جوان کر. وی داخواز ژ قەلەشکی کر کو سترانەکێ بێژیت. دەما قەلەشکی دەڤێ خۆ ڤەکری دا سترانێ بێژیت، پەنیر کەفتە خوارێ. ڕێوی پەنیر گرت و ڕەڤی، و دکەنی. قەلەشکی فێربوو کو باوەریا خۆ ب کەسێن مەدحکەر نەکەت.',
    level: 'B1',
    questions: [
      { id: 'q7-1', question: 'What did the crow have in its beak?', options: ['A worm', 'A piece of cheese', 'A grape', 'A key'], correctAnswer: 1 },
      { id: 'q7-2', question: 'What did the fox want?', options: ['To eat the crow', 'The cheese', 'To hear a song', 'To be friends'], correctAnswer: 1 },
      { id: 'q7-3', question: 'What did the fox praise?', options: ['The crow\'s feathers', 'The crow\'s voice', 'The crow\'s eyes', 'The crow\'s nest'], correctAnswer: 1 },
      { id: 'q7-4', question: 'What did the fox ask the crow to do?', options: ['To dance', 'To fly', 'To sing a song', 'To close its eyes'], correctAnswer: 2 },
      { id: 'q7-5', question: 'What happened when the crow opened its beak?', options: ['It sang beautifully', 'The cheese fell down', 'It flew away', 'It bit the fox'], correctAnswer: 1 },
      { id: 'q7-6', question: 'Did the fox share the cheese?', options: ['Yes', 'No, he ran away', 'He gave it back', 'He ate it with the crow'], correctAnswer: 1 },
      { id: 'q7-7', question: 'How did the fox feel at the end?', options: ['Sad', 'Angry', 'Laughing/Happy', 'Scared'], correctAnswer: 2 },
      { id: 'q7-8', question: 'What did the crow learn?', options: ['How to sing', 'Not to trust flatterers', 'Foxes are nice', 'Cheese is bad'], correctAnswer: 1 },
      { id: 'q7-9', question: 'Was the fox really interested in the song?', options: ['Yes', 'No, it was a trick', 'Maybe', 'He loved music'], correctAnswer: 1 },
      { id: 'q7-10', question: 'Is the fox clever in this story?', options: ['Yes', 'No', 'He was lucky', 'He was stupid'], correctAnswer: 0 }
    ]
  },
  {
    id: 'story-8',
    title: 'The First Day of School',
    titleKurdish: 'رۆژا ئێکێ یا قوتابخانێ',
    content: 'Today is Ali\'s first day of school. He has a new backpack and a blue pencil case. He feels a little nervous but also excited. His mother walks him to the classroom. He meets his teacher, Miss Rose, and many new friends. They draw pictures and listen to a story. Ali likes school very much.',
    contentKurdish: 'ئەڤرۆ رۆژا ئێکێ یا عەلی یە ل قوتابخانێ. وی جانتایەکێ نوی و قەلەمدانەکێ شین یێ هەین. ئەو تۆزەکێ یێ ب ترسە بەلێ یێ ب پەرۆش ژی یە. دایکا وی دگەل وی دچیتە دناڤ پۆلی دا. ئەو مامۆستایا خۆ دبینیت، خودێ رۆز، و گەلەک هەڤالێن نوی. ئەو وێنەیان دکێشن و گوه ل چیرۆکەکێ دبن. عەلی گەلەک حەز ژ قوتابخانێ دکەت.',
    level: 'A1',
    questions: [
      { id: 'q8-1', question: 'Whose first day of school is it?', options: ['Ahmed', 'Ali', 'Sara', 'Omar'], correctAnswer: 1 },
      { id: 'q8-2', question: 'What color is Ali\'s pencil case?', options: ['Red', 'Blue', 'Green', 'Yellow'], correctAnswer: 1 },
      { id: 'q8-3', question: 'How does Ali feel?', options: ['Only scared', 'Only excited', 'Nervous and excited', 'Angry'], correctAnswer: 2 },
      { id: 'q8-4', question: 'Who walks Ali to the classroom?', options: ['His father', 'His mother', 'His brother', 'His friend'], correctAnswer: 1 },
      { id: 'q8-5', question: 'What is the teacher\'s name?', options: ['Miss Lily', 'Miss Rose', 'Miss Daisy', 'Miss Jasmine'], correctAnswer: 1 },
      { id: 'q8-6', question: 'What do the children do in class?', options: ['Sleep', 'Draw pictures', 'Fight', 'Eat lunch'], correctAnswer: 1 },
      { id: 'q8-7', question: 'Does Ali meet new friends?', options: ['Yes', 'No', 'He already knew them', 'He was alone'], correctAnswer: 0 },
      { id: 'q8-8', question: 'What do they listen to?', options: ['Music', 'A story', 'The radio', 'The wind'], correctAnswer: 1 },
      { id: 'q8-9', question: 'Does Ali like school?', options: ['No', 'Yes, very much', 'He hates it', 'He is bored'], correctAnswer: 1 },
      { id: 'q8-10', question: 'What does Ali have that is new?', options: ['Shoes', 'Backpack', 'Bicycle', 'Watch'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-9',
    title: 'The Ant and the Grasshopper',
    titleKurdish: 'مێری و کوللى',
    content: 'All summer, the ant worked hard to collect food for winter. The grasshopper played music and danced. When winter came, the ant had plenty of food, but the grasshopper was hungry. The grasshopper asked the ant for help. The ant shared some food but told the grasshopper to work hard next time. It is important to prepare for the future.',
    contentKurdish: 'هەمی هاوینێ، مێریێ ب زەحمەت کار دکر دا خوارنێ بو زڤستانێ کۆم بکەت. کوللی ستران دگوتن و دیلان دکر. دەما زڤستان هات، مێریێ گەلەک خوارن هەبوو، بەلێ کوللی یێ برسی بوو. کوللی داخوازا هاریکاریێ ژ مێریێ کر. مێریێ هندەک خوارن داێ بەلێ ژ کوللی را گوت کو جارەکا دی ب زەحمەت کار بکەت. یا گرنگە مروڤ خۆ بو پاشەرۆژێ بەرهەڤ بکەت.',
    level: 'A2',
    questions: [
      { id: 'q9-1', question: 'What did the ant do all summer?', options: ['Slept', 'Worked hard to collect food', 'Played music', 'Went on vacation'], correctAnswer: 1 },
      { id: 'q9-2', question: 'What did the grasshopper do?', options: ['Collected food', 'Played music and danced', 'Built a house', 'Studied'], correctAnswer: 1 },
      { id: 'q9-3', question: 'When did the grasshopper become hungry?', options: ['In summer', 'In spring', 'In winter', 'In autumn'], correctAnswer: 2 },
      { id: 'q9-4', question: 'Did the ant have food in winter?', options: ['Yes, plenty', 'No, none', 'Only a little', 'He lost it'], correctAnswer: 0 },
      { id: 'q9-5', question: 'Who asked for help?', options: ['The ant', 'The grasshopper', 'A bird', 'A spider'], correctAnswer: 1 },
      { id: 'q9-6', question: 'Did the ant help the grasshopper?', options: ['No', 'Yes, shared some food', 'He laughed at him', 'He gave him money'], correctAnswer: 1 },
      { id: 'q9-7', question: 'What advice did the ant give?', options: ['To keep dancing', 'To work hard next time', 'To sleep more', 'To go away'], correctAnswer: 1 },
      { id: 'q9-8', question: 'What is the lesson of the story?', options: ['Dancing is good', 'Prepare for the future', 'Ants are mean', 'Winter is short'], correctAnswer: 1 },
      { id: 'q9-9', question: 'Was the grasshopper lazy?', options: ['Yes', 'No', 'He was busy', 'He was tired'], correctAnswer: 0 },
      { id: 'q9-10', question: 'What season comes after summer in the story?', options: ['Spring', 'Winter', 'Autumn', 'None'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-10',
    title: 'The Giant Pumpkin',
    titleKurdish: 'کولەکا زەبەلاح',
    content: 'Farmer Joe planted a pumpkin seed in his garden. He watered it every day and gave it plenty of sunlight. The pumpkin grew and grew until it was as big as a car! Joe won first prize at the county fair. He shared the pumpkin with everyone in the town, and they made many pumpkin pies.',
    contentKurdish: 'جوتیار جۆ تۆڤەکێ کولەکێ د باخچێ خۆ دا چاند. وی هەر روژ ئاڤ دداێ و بەر تیشکا روژێ ددانا. کولەک مەزن بوو و مەزن بوو هەتا بوویە هندێ ترومبێلەکێ! جۆ خەلاتێ ئێکێ د پێشبڕکێیا باژێری دا بر. وی کولەک دگەل هەمی کەسێن باژێری بەشکر، و وان گەلەک پایێن کولەکێ چێکرن.',
    level: 'B1',
    questions: [
      { id: 'q10-1', question: 'What did Farmer Joe plant?', options: ['An apple tree', 'A pumpkin seed', 'A flower', 'A tomato'], correctAnswer: 1 },
      { id: 'q10-2', question: 'How often did he water it?', options: ['Once a month', 'Every day', 'Never', 'Once a week'], correctAnswer: 1 },
      { id: 'q10-3', question: 'How big did the pumpkin grow?', options: ['As big as a house', 'As big as a car', 'As big as a ball', 'As big as a mountain'], correctAnswer: 1 },
      { id: 'q10-4', question: 'Where did Joe take the pumpkin?', options: ['To the market', 'To the county fair', 'To the school', 'To the forest'], correctAnswer: 1 },
      { id: 'q10-5', question: 'What prize did Joe win?', options: ['Second prize', 'First prize', 'Third prize', 'No prize'], correctAnswer: 1 },
      { id: 'q10-6', question: 'Did Joe keep the pumpkin for himself?', options: ['Yes', 'No, he shared it', 'He sold it', 'He threw it away'], correctAnswer: 1 },
      { id: 'q10-7', question: 'What did the townspeople make?', options: ['Pumpkin soup', 'Pumpkin pies', 'Pumpkin juice', 'Pumpkin bread'], correctAnswer: 1 },
      { id: 'q10-8', question: 'What did the pumpkin need to grow?', options: ['Water and sunlight', 'Milk and honey', 'Music and dance', 'Rain and snow'], correctAnswer: 0 },
      { id: 'q10-9', question: 'Was Joe a doctor?', options: ['Yes', 'No, he was a farmer', 'He was a teacher', 'He was a pilot'], correctAnswer: 1 },
      { id: 'q10-10', question: 'Is a pumpkin a fruit or a vegetable?', options: ['Fruit', 'Vegetable', 'Meat', 'Drink'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-11',
    title: 'The Rain Forest',
    titleKurdish: 'دارستانا بارانێ',
    content: 'The rain forest is home to many colorful animals. Bright parrots fly through the trees, and slow sloths hang from the branches. It rains almost every day, which helps the plants grow tall and green. We must protect the rain forest because it helps the Earth breathe. It is a beautiful and important place.',
    contentKurdish: 'دارستانا بارانێ مالا گەلەک گیانەوەرێن رەنگاوڕەنگە. تێتیێن گەش دناڤ داران دا دفرن، و تەمبەلێن هێدی ب چقێن داران ڤە دکەڤن. نێزیک هەمی روژان باران دباریت، کو هاریکاریا رووەکان دکەت دا بلند و کەسک ببن. ئەوا پێدڤی یە ئەم دارستانا بارانێ بپارێزین چونکی هاریکاریا ئەردی دکەت دا بێهنێ وەربگریت. ئەو جهەکێ جوان و گرنگە.',
    level: 'A2',
    questions: [
      { id: 'q11-1', question: 'What kind of animals live in the rain forest?', options: ['Only brown animals', 'Colorful animals', 'No animals', 'Desert animals'], correctAnswer: 1 },
      { id: 'q11-2', question: 'What do parrots do?', options: ['Swim', 'Fly through trees', 'Sleep all day', 'Run fast'], correctAnswer: 1 },
      { id: 'q11-3', question: 'How do sloths move?', options: ['Fast', 'Slow', 'They don\'t move', 'They jump'], correctAnswer: 1 },
      { id: 'q11-4', question: 'How often does it rain in the rain forest?', options: ['Never', 'Once a year', 'Almost every day', 'Only in winter'], correctAnswer: 2 },
      { id: 'q11-5', question: 'Why do the plants grow tall?', options: ['Because of the rain', 'Because of the sand', 'Because of the snow', 'Because of the wind'], correctAnswer: 0 },
      { id: 'q11-6', question: 'Why should we protect the rain forest?', options: ['It is scary', 'It helps the Earth breathe', 'It is too big', 'It has no food'], correctAnswer: 1 },
      { id: 'q11-7', question: 'What color are the plants in the rain forest?', options: ['Yellow', 'Red', 'Green', 'Blue'], correctAnswer: 2 },
      { id: 'q11-8', question: 'Where do sloths hang?', options: ['From the ground', 'From the branches', 'From the clouds', 'From the water'], correctAnswer: 1 },
      { id: 'q11-9', question: 'Is the rain forest important?', options: ['Yes', 'No', 'Only for birds', 'Maybe'], correctAnswer: 0 },
      { id: 'q11-10', question: 'What is another name for a rain forest?', options: ['Desert', 'Jungle', 'Mountain', 'Ocean'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-12',
    title: 'The Moon Cheese Myth',
    titleKurdish: 'ئەفسانا پەنیری ل سەر هەیڤێ',
    content: 'Long ago, some people believed the moon was made of green cheese. They thought the craters were holes in the cheese. Of course, we know now that the moon is made of rock and dust. But it is still fun to look at the moon and imagine it is a giant snack in the sky. What would you do if the moon was really cheese?',
    contentKurdish: 'بەری گەلەک دەمان، هندەک کەسان باوەر دکر کو هەیڤ ژ پەنیری هاتیە دروستکرن. وان هزردکر کو چاڵێن سەر هەیڤێ کونێن پەنیری نە. ب درستی، ئەم نوکە دزانین کو هەیڤ ژ بەرد و تۆزێ هاتیە دروستکرن. بەلێ هێشتا یا خوشە مروڤ سەیری هەیڤێ بکەت و هزر بکەت کو ئەو خوارنەکا مەزنە د ئەسمانی دا. تە دا چی کەی ئەگەر هەیڤ ب راستی پەنیر با؟',
    level: 'B1',
    questions: [
      { id: 'q12-1', question: 'What did some people believe the moon was made of?', options: ['Gold', 'Green cheese', 'Cotton candy', 'Ice'], correctAnswer: 1 },
      { id: 'q12-2', question: 'What did they think the craters were?', options: ['Mountains', 'Holes in the cheese', 'Volcanoes', 'Lakes'], correctAnswer: 1 },
      { id: 'q12-3', question: 'What is the moon actually made of?', options: ['Cheese', 'Rock and dust', 'Water', 'Gas'], correctAnswer: 1 },
      { id: 'q12-4', question: 'Is it still fun to imagine the moon is cheese?', options: ['Yes', 'No', 'It is boring', 'It is scary'], correctAnswer: 0 },
      { id: 'q12-5', question: 'Where is the moon?', options: ['In the ocean', 'In the sky', 'Under the ground', 'In a box'], correctAnswer: 1 },
      { id: 'q12-6', question: 'When did people believe this myth?', options: ['Long ago', 'Yesterday', 'In the future', 'Never'], correctAnswer: 0 },
      { id: 'q12-7', question: 'What color was the cheese in the myth?', options: ['Yellow', 'Green', 'White', 'Blue'], correctAnswer: 1 },
      { id: 'q12-8', question: 'What are the marks on the moon called?', options: ['Spots', 'Craters', 'Lines', 'Stars'], correctAnswer: 1 },
      { id: 'q12-9', question: 'Is the moon a giant snack?', options: ['Yes', 'No, but it\'s fun to imagine', 'It is a real snack', 'It is a pizza'], correctAnswer: 1 },
      { id: 'q12-10', question: 'What is this story about?', options: ['Science', 'A myth/imagination', 'Cooking', 'History'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-13',
    title: 'The Busy Bee',
    titleKurdish: 'مێشا هنگڤینی یا ب کار',
    content: 'Buzzy the bee flies from flower to flower all day. She collects nectar to make honey in her hive. Buzzy is very important because she helps flowers grow by carrying pollen. Without bees, we would not have many fruits and vegetables. Buzzy works hard, but she loves her job. She always hums a happy tune.',
    contentKurdish: 'بازی مێشا هنگڤینی هەمی روژێ ژ گولەکێ بو گولەکا دی دفڕیت. ئەو شیلەیێ گولان کۆم دکەت دا هنگڤینی د شانێ خۆ دا چێبکەت. بازی گەلەک یا گرنگە چونکی ئەو هاریکاریا گولان دکەت دا مەزن ببن ب رێکا هەلگرتنا گەردێن گولان. بێ مێشێن هنگڤینی، مە دا گەلەک فێقی و کەسکاتی نەبن. بازی ب زەحمەت کار دکەت، بەلێ حەز ژ کارێ خۆ دکەت. ئەو هەردەم دەنگەکێ خوش یێ کەیفخۆشیێ ژ خۆ دئینیت.',
    level: 'A1',
    questions: [
      { id: 'q13-1', question: 'What is the bee\'s name?', options: ['Buzzy', 'Fuzzy', 'Dizzy', 'Lazy'], correctAnswer: 0 },
      { id: 'q13-2', question: 'What does Buzzy collect?', options: ['Water', 'Nectar', 'Leaves', 'Sticks'], correctAnswer: 1 },
      { id: 'q13-3', question: 'Where does Buzzy make honey?', options: ['In a house', 'In her hive', 'In a tree', 'In the ground'], correctAnswer: 1 },
      { id: 'q13-4', question: 'Why are bees important?', options: ['They are loud', 'They help flowers grow', 'They are small', 'They can sting'], correctAnswer: 1 },
      { id: 'q13-5', question: 'What do bees carry to help flowers?', options: ['Honey', 'Pollen', 'Water', 'Seeds'], correctAnswer: 1 },
      { id: 'q13-6', question: 'What would we miss without bees?', options: ['Rocks', 'Fruits and vegetables', 'Cars', 'Toys'], correctAnswer: 1 },
      { id: 'q13-7', question: 'Does Buzzy like her job?', options: ['No', 'Yes', 'She hates it', 'She is bored'], correctAnswer: 1 },
      { id: 'q13-8', question: 'What sound does Buzzy make?', options: ['Bark', 'Meow', 'Hum', 'Roar'], correctAnswer: 2 },
      { id: 'q13-9', question: 'How long does Buzzy fly?', options: ['One hour', 'All day', 'Only at night', 'Never'], correctAnswer: 1 },
      { id: 'q13-10', question: 'Is Buzzy a lazy bee?', options: ['Yes', 'No, she is busy', 'Maybe', 'She sleeps all day'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-14',
    title: 'The Brave Firefighter',
    titleKurdish: 'ئاگرکوژێن ئازا',
    content: 'Leo is a firefighter. He wears a heavy coat and a red helmet. When the alarm rings, he jumps into the big red fire truck. He uses a long hose to put out fires and saves people and animals. Leo is a hero in his city. He practices every day to be ready for emergencies. Everyone feels safe when Leo is around.',
    contentKurdish: 'لیۆ ئاگرکوژێنە. ئەو چاکەتەکێ گران و کڵاوەکێ سور دپۆشیت. دەما زەنگ لێ ددەت، ئەو دچیتە دناڤ ترومبێلا سور یا مەزن یا ئاگرکوژێنێ دا. ئەو سۆندەکا درێژ بکار دئینیت دا ئاگری ڤەمرینیت و کەسان و گیانەوەران رزگار بکەت. لیۆ قارەمانە ل باژێرێ خۆ. ئەو هەر روژ راهێنانان دکەت دا یێ بەرهەڤ بیت بو حالەتێن نەکاڤ. هەمی کەس هەست ب تەناهیێ دکەن دەما لیۆ ل وێرێ بیت.',
    level: 'A2',
    questions: [
      { id: 'q14-1', question: 'What is Leo\'s job?', options: ['Doctor', 'Firefighter', 'Teacher', 'Pilot'], correctAnswer: 1 },
      { id: 'q14-2', question: 'What color is Leo\'s helmet?', options: ['Blue', 'Red', 'Yellow', 'Black'], correctAnswer: 1 },
      { id: 'q14-3', question: 'What happens when the alarm rings?', options: ['Leo goes to sleep', 'Leo jumps into the fire truck', 'Leo eats lunch', 'Leo goes home'], correctAnswer: 1 },
      { id: 'q14-4', question: 'What does Leo use to put out fires?', options: ['A bucket', 'A long hose', 'A fan', 'A shovel'], correctAnswer: 1 },
      { id: 'q14-5', question: 'Who does Leo save?', options: ['Only people', 'Only animals', 'People and animals', 'Nobody'], correctAnswer: 2 },
      { id: 'q14-6', question: 'Is Leo a hero?', options: ['Yes', 'No', 'He is a villain', 'Maybe'], correctAnswer: 0 },
      { id: 'q14-7', question: 'How often does Leo practice?', options: ['Once a month', 'Every day', 'Never', 'Once a year'], correctAnswer: 1 },
      { id: 'q14-8', question: 'What color is the fire truck?', options: ['Green', 'Red', 'Blue', 'White'], correctAnswer: 1 },
      { id: 'q14-9', question: 'How do people feel when Leo is around?', options: ['Scared', 'Safe', 'Angry', 'Sad'], correctAnswer: 1 },
      { id: 'q14-10', question: 'What kind of coat does Leo wear?', options: ['Light coat', 'Heavy coat', 'No coat', 'Rain coat'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-15',
    title: 'The Magic Umbrella',
    titleKurdish: 'سەوانا سێحرى',
    content: 'Mina found an old umbrella in the attic. When she opened it, she started to float in the air! The umbrella could take her anywhere she wanted. She flew over the mountains and across the sea. She visited many beautiful countries and met new people. When she closed the umbrella, she landed softly back in her garden. It was a wonderful adventure.',
    contentKurdish: 'مینایێ سەوانەکا پیر د سەربانێ خانی دا دیت. دەما وێ ڤەکری، وێ دەست ب فڕینێ کر د هەوای دا! سەوانێ دشیا وێ ببەتە هەر جهەکێ وێ بڤێت. ئەو ل سەر چیایان و ل سەر دەریایێ فڕی. وێ سەرەدانا گەلەک وەلاتێن جوان کر و کەسێن نوی دیتن. دەما وێ سەوان گرت، ئەو ب هێدی ل باخچێ خۆ نیشتە خوار. ئەو سەرکێشیەکا نایاب بوو.',
    level: 'B1',
    questions: [
      { id: 'q15-1', question: 'Where did Mina find the umbrella?', options: ['In the park', 'In the attic', 'In the school', 'In the shop'], correctAnswer: 1 },
      { id: 'q15-2', question: 'What happened when Mina opened the umbrella?', options: ['It rained', 'She started to float', 'It broke', 'It turned red'], correctAnswer: 1 },
      { id: 'q15-3', question: 'Where could the umbrella take her?', options: ['Only to school', 'Anywhere she wanted', 'Nowhere', 'Only to the park'], correctAnswer: 1 },
      { id: 'q15-4', question: 'What did Mina fly over?', options: ['Houses', 'Mountains and the sea', 'Clouds', 'Trees'], correctAnswer: 1 },
      { id: 'q15-5', question: 'Did Mina meet new people?', options: ['Yes', 'No', 'She was alone', 'She met animals'], correctAnswer: 0 },
      { id: 'q15-6', question: 'What happened when she closed the umbrella?', options: ['She fell fast', 'She landed softly', 'She disappeared', 'She started crying'], correctAnswer: 1 },
      { id: 'q15-7', question: 'Where did she land?', options: ['In the forest', 'In her garden', 'On the moon', 'In the sea'], correctAnswer: 1 },
      { id: 'q15-8', question: 'Was the umbrella new?', options: ['Yes', 'No, it was old', 'It was a gift', 'She bought it'], correctAnswer: 1 },
      { id: 'q15-9', question: 'How was the adventure?', options: ['Boring', 'Wonderful', 'Scary', 'Sad'], correctAnswer: 1 },
      { id: 'q15-10', question: 'Is this a real story or a fantasy?', options: ['Real', 'Fantasy/Magic', 'History', 'Science'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-16',
    title: 'The Little Chef',
    titleKurdish: 'چێلێ بچویک',
    content: 'Maya loves to cook with her father. Every Sunday, they make a special breakfast together. Maya cracks the eggs and stirs the batter. Her father flips the pancakes. They add blueberries and maple syrup. The whole house smells like sweet pancakes. Maya feels proud when her family enjoys the meal. She wants to be a chef one day.',
    contentKurdish: 'مایا حەز دکەت دگەل بابێ خۆ خوارنێ چێبکەت. هەر ئێکشەمبیەکێ، ئەو خوارنەکا تێشتێ یا تایبەت پێکڤە چێدکەن. مایا هێکان دشکێنیت و هەڤیرێ تێک ددەت. بابێ وێ پانکەیکان وەردگێڕیت. ئەو بلوبێری و دۆشاڤا مەیپڵ لێ زێدە دکەن. هەمی خانى بێنا پانکەیکێن شرین ژێ دهێت. مایا هەست ب شانازیێ دکەت دەما خێزانا وێ خوارنێ دخۆن. ئەو دڤێت روژەکێ ببیتە چێشتچێکرەکا مەزن.',
    level: 'A1',
    questions: [
      { id: 'q16-1', question: 'Who does Maya cook with?', options: ['Her mother', 'Her father', 'Her brother', 'Her friend'], correctAnswer: 1 },
      { id: 'q16-2', question: 'When do they cook together?', options: ['Every Saturday', 'Every Sunday', 'Every day', 'Once a month'], correctAnswer: 1 },
      { id: 'q16-3', question: 'What do they make for breakfast?', options: ['Pizza', 'Pancakes', 'Soup', 'Sandwiches'], correctAnswer: 1 },
      { id: 'q16-4', question: 'What does Maya do with the eggs?', options: ['She eats them', 'She cracks them', 'She throws them', 'She paints them'], correctAnswer: 1 },
      { id: 'q16-5', question: 'Who flips the pancakes?', options: ['Maya', 'Her father', 'Her mother', 'The cat'], correctAnswer: 1 },
      { id: 'q16-6', question: 'What do they add to the pancakes?', options: ['Salt and pepper', 'Blueberries and syrup', 'Cheese', 'Onions'], correctAnswer: 1 },
      { id: 'q16-7', question: 'How does the house smell?', options: ['Like smoke', 'Like sweet pancakes', 'Like flowers', 'Like rain'], correctAnswer: 1 },
      { id: 'q16-8', question: 'How does Maya feel when the family eats?', options: ['Sad', 'Proud', 'Angry', 'Tired'], correctAnswer: 1 },
      { id: 'q16-9', question: 'What does Maya want to be in the future?', options: ['A doctor', 'A chef', 'A teacher', 'A pilot'], correctAnswer: 1 },
      { id: 'q16-10', question: 'Is Maya a good helper?', options: ['Yes', 'No', 'She is lazy', 'She breaks things'], correctAnswer: 0 }
    ]
  },
  {
    id: 'story-17',
    title: 'The Snowman',
    titleKurdish: 'پیاوێ بەفرى',
    content: 'It snowed all night. In the morning, the ground was white. Sam and his sister went outside to build a snowman. They rolled three big balls of snow. They used carrots for the nose and coal for the eyes. They put a red scarf around its neck. The snowman looked very friendly. They played in the snow until the sun went down.',
    contentKurdish: 'هەمی شەڤێ باران باری. سپێدێ، ئەرد هەمی سپی بوو. سام و خوشکا وی چوونە دەرڤە دا پیاوەکێ بەفری چێبکەن. وان سێ گۆپالێن مەزن یێن بەفرێ چێکرن. وان گێزەر بو لووتێ وی و رەژوو بو چاڤێن وی بکارئینان. وان لەفکەکا سور ل دەورێ ستوویێ وی ئاڵاند. پیاوێ بەفری گەلەک یێ دلۆڤان دیار دکر. وان دناڤ بەفرێ دا یاری کرن هەتا روژ ئاڤا بووی.',
    level: 'A1',
    questions: [
      { id: 'q17-1', question: 'When did it snow?', options: ['In the morning', 'All night', 'At noon', 'Never'], correctAnswer: 1 },
      { id: 'q17-2', question: 'What color was the ground?', options: ['Green', 'White', 'Brown', 'Blue'], correctAnswer: 1 },
      { id: 'q17-3', question: 'Who went outside?', options: ['Sam and his dog', 'Sam and his sister', 'Sam and his father', 'Sam alone'], correctAnswer: 1 },
      { id: 'q17-4', question: 'How many balls of snow did they use?', options: ['One', 'Two', 'Three', 'Four'], correctAnswer: 2 },
      { id: 'q17-5', question: 'What did they use for the nose?', options: ['A potato', 'A carrot', 'A stick', 'A stone'], correctAnswer: 1 },
      { id: 'q17-6', question: 'What did they use for the eyes?', options: ['Buttons', 'Coal', 'Grapes', 'Coins'], correctAnswer: 1 },
      { id: 'q17-7', question: 'What color was the scarf?', options: ['Blue', 'Red', 'Green', 'Yellow'], correctAnswer: 1 },
      { id: 'q17-8', question: 'How long did they play?', options: ['One hour', 'Until the sun went down', 'Five minutes', 'All day and night'], correctAnswer: 1 },
      { id: 'q17-9', question: 'Was the snowman scary?', options: ['Yes', 'No, it looked friendly', 'It was a monster', 'Maybe'], correctAnswer: 1 },
      { id: 'q17-10', question: 'What season is it in the story?', options: ['Summer', 'Winter', 'Spring', 'Autumn'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-18',
    title: 'The Library Adventure',
    titleKurdish: 'سەرکێشیا کتێبخانێ',
    content: 'The library is a quiet place full of books. You can find stories about dragons, space, and history. To borrow a book, you need a library card. The librarian, Mr. Page, helps you find what you need. Remember to return the books on time so others can read them too. Reading is a great way to learn new things.',
    contentKurdish: 'کتێبخانە جهەکێ بێدەنگە و تژیە ژ کتێبان. تو دشێی چیرۆکێن ل سەر ئەژدەهایان، فەزا، و دیرۆکێ ل وێرێ ببینی. بو قەرزکرنا کتێبەکێ، تو پێدڤی ب کارتا کتێبخانێ یی. بەرپرسێ کتێبخانێ، خودێ پەیج، هاریکاریا تە دکەت دا تشتێ تە بڤێت ببینی. ژبیر نەکە کتێبان ل دەمێ وان یێ درست بزڤڕینە دا کەسێن دی ژی بشێن بخوینن. خویندن رێگەکا نایابە بو فێربوونا تشتێن نوی.',
    level: 'A2',
    questions: [
      { id: 'q18-1', question: 'What is the library full of?', options: ['Toys', 'Books', 'Food', 'Clothes'], correctAnswer: 1 },
      { id: 'q18-2', question: 'What kind of stories can you find?', options: ['Only about cats', 'Dragons, space, and history', 'No stories', 'Only about cars'], correctAnswer: 1 },
      { id: 'q18-3', question: 'What do you need to borrow a book?', options: ['Money', 'A library card', 'A phone', 'A bag'], correctAnswer: 1 },
      { id: 'q18-4', question: 'Who is the librarian?', options: ['Mr. Book', 'Mr. Page', 'Mr. Read', 'Mr. Story'], correctAnswer: 1 },
      { id: 'q18-5', question: 'Is the library a loud place?', options: ['Yes', 'No, it is quiet', 'It is very noisy', 'Maybe'], correctAnswer: 1 },
      { id: 'q18-6', question: 'Why should you return books on time?', options: ['To get money', 'So others can read them', 'To keep them clean', 'To make the librarian happy'], correctAnswer: 1 },
      { id: 'q18-7', question: 'What is reading a great way for?', options: ['Sleeping', 'Learning new things', 'Eating', 'Running'], correctAnswer: 1 },
      { id: 'q18-8', question: 'Can you find history books in the library?', options: ['Yes', 'No', 'Only science books', 'Maybe'], correctAnswer: 0 },
      { id: 'q18-9', question: 'Does Mr. Page help people?', options: ['No', 'Yes', 'He is mean', 'He is always sleeping'], correctAnswer: 1 },
      { id: 'q18-10', question: 'What should you do in a library?', options: ['Shout', 'Be quiet and read', 'Run', 'Eat pizza'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-19',
    title: 'The Friendly Whale',
    titleKurdish: 'نەهەنگێ دلۆڤان',
    content: 'Wally is a giant blue whale living in the deep ocean. He loves to sing songs that travel for miles under the water. One day, Wally helped a small boat find its way back to the shore during a thick fog. The sailors waved at Wally as he swam away. Wally is the biggest animal on Earth, but he is also very kind.',
    contentKurdish: 'واڵی نەهەنگەکێ شین یێ زەبەلاحە و دناڤ دەریایا کویر دا دژیت. ئەو حەز دکەت سترانان بێژیت کو ب کیلومەتران دناڤ ئاڤێ دا دچن. روژەکێ، واڵی هاریکاریا بەلەمەکا بچویک کر دا رێکا خۆ بزڤڕیتە کەناری دناڤ مژەکا ستویر دا. دەریاڤانان دەستێن خۆ بو واڵی بلند کرن دەما ئەو مەلە دکرن و دویر دکەفت. واڵی مەزنترین گیانەوەرە ل سەر ئەردی، بەلێ ئەو گەلەک یێ دلۆڤانە ژی.',
    level: 'B1',
    questions: [
      { id: 'q19-1', question: 'What kind of whale is Wally?', options: ['Killer whale', 'Blue whale', 'Humpback whale', 'Small whale'], correctAnswer: 1 },
      { id: 'q19-2', question: 'Where does Wally live?', options: ['In a river', 'In the deep ocean', 'In a lake', 'In a pool'], correctAnswer: 1 },
      { id: 'q19-3', question: 'What does Wally love to do?', options: ['To dance', 'To sing songs', 'To fight', 'To sleep'], correctAnswer: 1 },
      { id: 'q19-4', question: 'How far do Wally\'s songs travel?', options: ['One meter', 'For miles', 'Nowhere', 'Only to the surface'], correctAnswer: 1 },
      { id: 'q19-5', question: 'What did Wally help during the fog?', options: ['A shark', 'A small boat', 'A plane', 'A swimmer'], correctAnswer: 1 },
      { id: 'q19-6', question: 'What was the weather like when the boat was lost?', options: ['Sunny', 'Thick fog', 'Snowy', 'Windy'], correctAnswer: 1 },
      { id: 'q19-7', question: 'What did the sailors do?', options: ['They were scared', 'They waved at Wally', 'They tried to catch him', 'They cried'], correctAnswer: 1 },
      { id: 'q19-8', question: 'Is Wally the smallest animal on Earth?', options: ['Yes', 'No, he is the biggest', 'He is medium-sized', 'Maybe'], correctAnswer: 1 },
      { id: 'q19-9', question: 'Is Wally kind?', options: ['No, he is mean', 'Yes, very kind', 'He is dangerous', 'Maybe'], correctAnswer: 1 },
      { id: 'q19-10', question: 'What color is Wally?', options: ['Red', 'Blue', 'Green', 'Yellow'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-20',
    title: 'The Bicycle Race',
    titleKurdish: 'پێشبڕکێیا بایسکلان',
    content: 'Every year, the town has a bicycle race. This year, Hana is participating for the first time. She practiced every afternoon for a month. On the day of the race, she wore her yellow helmet and checked her tires. She pedaled as fast as she could. She didn\'t win first place, but she finished the race and felt very happy. She received a medal for her hard work.',
    contentKurdish: 'هەر سال، باژێر پێشبڕکێیەکا بایسکلان ئەنجام ددەت. ئەڤ سالە، هانا بو جارا ئێکێ پشکداریێ دکەت. وێ هەر ئێڤاری بو ماوێ مەهەکێ راهێنان دکرن. ل روژا پێشبڕکێیێ، وێ کڵاوێ خۆ یێ زەرد پۆشی و تایەیێن بایسکلا خۆ پشکنی کرن. وێ ب هندێ هێزا خۆ هەبوو ل پایدەری دا. وێ پلەیا ئێکێ نەبر، بەلێ وێ پێشبڕکێ ب دوماهیک ئینا و هەست ب کەیفخۆشیەکا مەزن کر. وێ مەدالیەک وەرگرت بو کارێ خۆ یێ ب زەحمەت.',
    level: 'A2',
    questions: [
      { id: 'q20-1', question: 'What event does the town have every year?', options: ['A car race', 'A bicycle race', 'A swimming race', 'A dance contest'], correctAnswer: 1 },
      { id: 'q20-2', question: 'Is it Hana\'s first time participating?', options: ['Yes', 'No', 'She won last year', 'Maybe'], correctAnswer: 0 },
      { id: 'q20-3', question: 'How long did Hana practice?', options: ['One day', 'A month', 'A week', 'A year'], correctAnswer: 1 },
      { id: 'q20-4', question: 'What color was Hana\'s helmet?', options: ['Red', 'Blue', 'Yellow', 'Black'], correctAnswer: 2 },
      { id: 'q20-5', question: 'What did Hana check before the race?', options: ['Her watch', 'Her tires', 'Her phone', 'Her bag'], correctAnswer: 1 },
      { id: 'q20-6', question: 'Did Hana win first place?', options: ['Yes', 'No', 'She was second', 'She was last'], correctAnswer: 1 },
      { id: 'q20-7', question: 'How did Hana feel at the end?', options: ['Sad', 'Happy', 'Angry', 'Tired'], correctAnswer: 1 },
      { id: 'q20-8', question: 'What did Hana receive?', options: ['A trophy', 'A medal', 'Money', 'A new bicycle'], correctAnswer: 1 },
      { id: 'q20-9', question: 'When did Hana practice?', options: ['In the morning', 'Every afternoon', 'At night', 'Never'], correctAnswer: 1 },
      { id: 'q20-10', question: 'Did Hana finish the race?', options: ['Yes', 'No', 'She stopped halfway', 'She got lost'], correctAnswer: 0 }
    ]
  },
  {
    id: 'story-21',
    title: 'The Secret Treehouse',
    titleKurdish: 'خانیێ دارێ یێ ڤەشارتی',
    content: 'Ben and his friends built a secret treehouse in the big oak tree. They used old wood and a rope ladder. Inside, they have a small table and some chairs. They keep their favorite books and games there. It is their favorite place to hang out after school. No adults are allowed unless they know the secret password.',
    contentKurdish: 'بێن و هەڤالێن خۆ خانیەکێ دارێ یێ ڤەشارتی دناڤ دارەکا مەزن یا بەڕوویێ دا دروستکر. وان تەختێن پیر و پەیژەکا حەبڵ بکارئینان. دناڤ دا، مێزەکا بچویک و هندەک کورسی یێن هەین. ئەو کتێب و یاریێن خۆ یێن دلخواز ل وێرێ دپارێزن. ئەو جهێ وان یێ هەرە خوشە بو مانا پێکڤە پشتی قوتابخانێ. چ کەسێن مەزن رێ پێ نەهاتیە دان بچنە ژوور مەگەر پەیڤا نهێنی بزانن.',
    level: 'A2',
    questions: [
      { id: 'q21-1', question: 'Where did Ben and his friends build the treehouse?', options: ['In a pine tree', 'In a big oak tree', 'In a garden', 'On a hill'], correctAnswer: 1 },
      { id: 'q21-2', question: 'What did they use to climb up?', options: ['Stairs', 'A rope ladder', 'An elevator', 'A slide'], correctAnswer: 1 },
      { id: 'q21-3', question: 'What is inside the treehouse?', options: ['A bed', 'A table and chairs', 'A kitchen', 'A TV'], correctAnswer: 1 },
      { id: 'q21-4', question: 'What do they keep there?', options: ['Food', 'Books and games', 'Clothes', 'Money'], correctAnswer: 1 },
      { id: 'q21-5', question: 'When do they go to the treehouse?', options: ['Before school', 'After school', 'Only at night', 'Never'], correctAnswer: 1 },
      { id: 'q21-6', question: 'Are adults allowed in?', options: ['Yes, always', 'No, unless they know the password', 'Only teachers', 'Only parents'], correctAnswer: 1 },
      { id: 'q21-7', question: 'What kind of wood did they use?', options: ['New wood', 'Old wood', 'Metal', 'Plastic'], correctAnswer: 1 },
      { id: 'q21-8', question: 'Is the treehouse a secret?', options: ['Yes', 'No', 'Everyone knows', 'It is a public park'], correctAnswer: 0 },
      { id: 'q21-9', question: 'How many friends built it?', options: ['Ben alone', 'Ben and his friends', 'Only his sister', 'The neighbors'], correctAnswer: 1 },
      { id: 'q21-10', question: 'What do they need to enter?', options: ['A key', 'A secret password', 'A ticket', 'A gift'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-22',
    title: 'The Starry Night',
    titleKurdish: 'شەڤا پڕ ئەستێرە',
    content: 'On a clear night, you can see thousands of stars in the sky. Some stars are bigger than the sun, but they look small because they are very far away. People used to tell stories about the shapes the stars make, called constellations. Looking at the stars makes us feel small but also curious about the universe. Have you ever seen a shooting star?',
    contentKurdish: 'د شەڤەکا زەلال دا، تو دشێی ب هزاران ئەستێرەیان د ئەسمانی دا ببینی. هندەک ئەستێرە ژ رۆژێ مەزنترن، بەلێ ئەو بچویک دیار دکەن چونکی ئەو گەلەک د دویرن. کەسان بەری نوکە چیرۆک ل سەر وان شێوەیان دگوتن یێن ئەستێرە دروست دکەن، کو پێ دگۆتن کۆمە ئەستێرە. سەیرکرنا ئەستێرەیان مە توشی هەستەکێ دکەت کو ئەم د بچویکین بەلێ د هەمان دەم دا مە یێ ب پەرۆش دکەت بو زانینا گەردوونی. تە چ جاران ئەستێرەکا دکەڤیت دیتیە؟',
    level: 'B1',
    questions: [
      { id: 'q22-1', question: 'When can you see stars?', options: ['During the day', 'On a clear night', 'When it is raining', 'Only in winter'], correctAnswer: 1 },
      { id: 'q22-2', question: 'Are some stars bigger than the sun?', options: ['Yes', 'No', 'They are all the same', 'The sun is the biggest'], correctAnswer: 0 },
      { id: 'q22-3', question: 'Why do stars look small?', options: ['They are tiny', 'They are very far away', 'They are cold', 'They are hidden'], correctAnswer: 1 },
      { id: 'q22-4', question: 'What are the shapes made by stars called?', options: ['Clusters', 'Constellations', 'Galaxies', 'Planets'], correctAnswer: 1 },
      { id: 'q22-5', question: 'How does looking at stars make us feel?', options: ['Angry', 'Small and curious', 'Tired', 'Bored'], correctAnswer: 1 },
      { id: 'q22-6', question: 'Is the sun a star?', options: ['Yes', 'No', 'It is a planet', 'It is a moon'], correctAnswer: 0 },
      { id: 'q22-7', question: 'Can you see stars when it is cloudy?', options: ['Yes', 'No', 'Only the big ones', 'Maybe'], correctAnswer: 1 },
      { id: 'q22-8', question: 'What is the universe?', options: ['A city', 'Everything that exists', 'A book', 'A movie'], correctAnswer: 1 },
      { id: 'q22-9', question: 'What is a shooting star?', options: ['A star that shoots guns', 'A meteor entering the atmosphere', 'A star that is dying', 'A planet'], correctAnswer: 1 },
      { id: 'q22-10', question: 'Did people tell stories about stars in the past?', options: ['Yes', 'No', 'Only about the moon', 'Never'], correctAnswer: 0 }
    ]
  },
  {
    id: 'story-23',
    title: 'The Friendly Scarecrow',
    titleKurdish: 'داهۆڵێ دلۆڤان',
    content: 'Barnaby is a scarecrow in a cornfield. He has a straw body and a hat made of felt. His job is to keep the birds away from the corn. But Barnaby is too friendly. Instead of scaring the birds, he lets them sit on his shoulders and tells them jokes. The farmer doesn\'t mind because the birds are happy and don\'t eat much corn.',
    contentKurdish: 'بارنابی داهۆڵەکە دناڤ کێلگەکا گەنمەشامیێ دا. ئەو جەستەیەکێ کا و کڵاوەکێ فێڵت یێ هەین. کارێ وی ئەوە کو چویکان ژ گەنمەشامیێ دویر بێخیت. بەلێ بارنابی گەلەک یێ دلۆڤانە. ل شوینا ترساندنا چویکان، ئەو رێ پێ ددەت ل سەر ملێن وی بنیشن و نوکتەیان بو وان دبێژیت. جوتیار خەمێ ناخۆت چونکی چویک د کەیفخۆشن و گەلەک گەنمەشامیێ ناخۆن.',
    level: 'A2',
    questions: [
      { id: 'q23-1', question: 'What is Barnaby?', options: ['A farmer', 'A scarecrow', 'A bird', 'A robot'], correctAnswer: 1 },
      { id: 'q23-2', question: 'Where does Barnaby live?', options: ['In a house', 'In a cornfield', 'In a forest', 'In a city'], correctAnswer: 1 },
      { id: 'q23-3', question: 'What is Barnaby\'s body made of?', options: ['Wood', 'Straw', 'Metal', 'Plastic'], correctAnswer: 1 },
      { id: 'q23-4', question: 'What is his job?', options: ['To plant corn', 'To keep birds away', 'To water the plants', 'To sleep'], correctAnswer: 1 },
      { id: 'q23-5', question: 'Does Barnaby scare the birds?', options: ['Yes, always', 'No, he is too friendly', 'He tries but fails', 'He hates birds'], correctAnswer: 1 },
      { id: 'q23-6', question: 'What does Barnaby tell the birds?', options: ['Stories', 'Jokes', 'Secrets', 'News'], correctAnswer: 1 },
      { id: 'q23-7', question: 'Where do the birds sit?', options: ['On his head', 'On his shoulders', 'On the ground', 'On the fence'], correctAnswer: 1 },
      { id: 'q23-8', question: 'Does the farmer mind?', options: ['Yes, he is angry', 'No, he doesn\'t mind', 'He wants to fire Barnaby', 'He is scared'], correctAnswer: 1 },
      { id: 'q23-9', question: 'What kind of hat does Barnaby have?', options: ['A straw hat', 'A felt hat', 'A red hat', 'No hat'], correctAnswer: 1 },
      { id: 'q23-10', question: 'Do the birds eat a lot of corn?', options: ['Yes, all of it', 'No, not much', 'They only eat seeds', 'They don\'t eat at all'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-24',
    title: 'The Magic Paintbrush',
    titleKurdish: 'فرچێ وێنەکێشانێ یێ سێحرى',
    content: 'Li Wei found a magic paintbrush. Everything he painted became real! He painted food for the hungry and clothes for the poor. A greedy king heard about the brush and wanted it for himself. He ordered Li Wei to paint a mountain of gold. Instead, Li Wei painted a big ocean and a boat. He escaped from the king and continued to help people.',
    contentKurdish: 'لی وێی فرچەیەکێ سێحری یێ وێنەکێشانێ دیت. هەر تشتێ وی وێنە دکێشا دبوو راستی! وی وێنێ خوارنێ بو برسیان و جلان بو هەژاران دکێشا. پاشایەکێ چاڤبرسی گوه ل ڤی فرچەی بوو و ئەو بو خۆ دڤیا. وی فەرمان ل لی وێی کر کو چیایەکێ زێری وێنە بکەت. ل شوینا وێ، لی وێی وێنێ دەریایەکا مەزن و بەلەمەکێ کێشا. ئەو ژ دەستێ پاشای ڕەڤی و بەردەوام بوو ل سەر هاریکاریا خەلکی.',
    level: 'B1',
    questions: [
      { id: 'q24-1', question: 'What did Li Wei find?', options: ['A magic wand', 'A magic paintbrush', 'A gold coin', 'A secret map'], correctAnswer: 1 },
      { id: 'q24-2', question: 'What happened to the things Li Wei painted?', options: ['They disappeared', 'They became real', 'They turned blue', 'Nothing happened'], correctAnswer: 1 },
      { id: 'q24-3', question: 'What did he paint for the poor?', options: ['Gold', 'Clothes', 'Toys', 'Houses'], correctAnswer: 1 },
      { id: 'q24-4', question: 'Who wanted the paintbrush?', options: ['A poor man', 'A greedy king', 'A teacher', 'A dragon'], correctAnswer: 1 },
      { id: 'q24-5', question: 'What did the king order Li Wei to paint?', options: ['A palace', 'A mountain of gold', 'A big army', 'A feast'], correctAnswer: 1 },
      { id: 'q24-6', question: 'What did Li Wei paint instead of gold?', options: ['A forest', 'A big ocean and a boat', 'A dragon', 'A wall'], correctAnswer: 1 },
      { id: 'q24-7', question: 'Did the king get the paintbrush?', options: ['Yes', 'No, Li Wei escaped', 'He stole it', 'Li Wei gave it to him'], correctAnswer: 1 },
      { id: 'q24-8', question: 'Was the king kind?', options: ['Yes', 'No, he was greedy', 'He was very old', 'He was funny'], correctAnswer: 1 },
      { id: 'q24-9', question: 'How did Li Wei use his gift?', options: ['To become rich', 'To help people', 'To fight', 'To hide'], correctAnswer: 1 },
      { id: 'q24-10', question: 'Is this a real story?', options: ['Yes', 'No, it is a legend/fairy tale', 'It is a news report', 'It is a biography'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-25',
    title: 'The Little Penguin',
    titleKurdish: 'پەنگوینێ بچویک',
    content: 'Pippin is a little penguin living in Antarctica. He loves to slide on the ice and swim in the cold water. Most penguins eat fish, and Pippin is a great fisherman. He has thick feathers to keep him warm in the snow. Pippin lives with thousands of other penguins in a big colony. They all huddle together to stay warm during the winter.',
    contentKurdish: 'پیپین پەنگوینەکێ بچویکە و ل ئەنتارکتیکا دژیت. ئەو حەز دکەت ل سەر جەمدێ بخلیسیت و دناڤ ئاڤا سار دا مەلە بکەت. پتریا پەنگوینان ماسیان دخۆن، و پیپین ماسیگرەکێ نایابە. ئەو پەڕێن ستویر یێن هەین دا وی دناڤ بەفرێ دا گەرم بپارێزن. پیپین دگەل ب هزاران پەنگوینێن دی دناڤ کۆمەلەکا مەزن دا دژیت. ئەو هەمی پێکڤە کۆم دبن دا د زڤستانێ دا گەرم بمینن.',
    level: 'A1',
    questions: [
      { id: 'q25-1', question: 'Where does Pippin live?', options: ['In the desert', 'In Antarctica', 'In a forest', 'In a zoo'], correctAnswer: 1 },
      { id: 'q25-2', question: 'What does Pippin love to do on the ice?', options: ['Run', 'Slide', 'Jump', 'Dance'], correctAnswer: 1 },
      { id: 'q25-3', question: 'What do penguins eat?', options: ['Plants', 'Fish', 'Fruit', 'Bread'], correctAnswer: 1 },
      { id: 'q25-4', question: 'Is Pippin a good fisherman?', options: ['No', 'Yes', 'He is okay', 'He hates fish'], correctAnswer: 1 },
      { id: 'q25-5', question: 'Why does Pippin have thick feathers?', options: ['To fly high', 'To keep him warm', 'To look pretty', 'To swim faster'], correctAnswer: 1 },
      { id: 'q25-6', question: 'Does Pippin live alone?', options: ['Yes', 'No, with thousands of others', 'Only with his mom', 'With a polar bear'], correctAnswer: 1 },
      { id: 'q25-7', question: 'What is a group of penguins called in the story?', options: ['A pack', 'A colony', 'A herd', 'A school'], correctAnswer: 1 },
      { id: 'q25-8', question: 'How do penguins stay warm in winter?', options: ['They wear coats', 'They huddle together', 'They build fires', 'They go south'], correctAnswer: 1 },
      { id: 'q25-9', question: 'Is the water in Antarctica warm?', options: ['Yes', 'No, it is cold', 'It is boiling', 'Maybe'], correctAnswer: 1 },
      { id: 'q25-10', question: 'Can penguins fly?', options: ['Yes', 'No', 'Only at night', 'Some can'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-26',
    title: 'The Missing Sock',
    titleKurdish: 'گۆرەیا بەرزەبوویی',
    content: 'Amy could not find her favorite red sock. She looked in the laundry basket, under the bed, and behind the sofa. She found a toy car, a lost coin, and an old book, but no sock. Finally, she saw her cat, Whiskers, sleeping in a corner. Whiskers was using the red sock as a soft pillow! Amy laughed and let Whiskers keep it.',
    contentKurdish: 'ئەیمیێ نەدشیا گۆرەیا خۆ یا سور یا دلخواز ببینیت. وێ ل سەیلا جلان، ل بن تەختی، و ل پشت قەنەفێ گەڕیا. وێ ترومبێلەکا یاریێ، دراڤەکێ بەرزەبوویی، و کتێبەکا پیر دیتن، بەلێ چ گۆرە نەدیتن. ل دوماهیکێ، وێ پشیکا خۆ دیت، ویسکەرس، کو ل سوینجەکێ نڤستی بوو. ویسکەرس گۆرەیا سور وەک بالیفەکا نەرم بکار دئینا! ئەیمیێ کەنی و هێلا ویسکەرس بو خۆ بگریت.',
    level: 'A1',
    questions: [
      { id: 'q26-1', question: 'What color was Amy\'s favorite sock?', options: ['Blue', 'Red', 'Green', 'Yellow'], correctAnswer: 1 },
      { id: 'q26-2', question: 'Where did Amy look for the sock?', options: ['Laundry basket', 'Under the bed', 'Behind the sofa', 'All of the above'], correctAnswer: 3 },
      { id: 'q26-3', question: 'What did she find under the bed?', options: ['A sock', 'A toy car', 'A cat', 'A shoe'], correctAnswer: 1 },
      { id: 'q26-4', question: 'Who is Whiskers?', options: ['Amy\'s brother', 'Amy\'s cat', 'Amy\'s dog', 'Amy\'s friend'], correctAnswer: 1 },
      { id: 'q26-5', question: 'What was Whiskers doing?', options: ['Playing', 'Sleeping', 'Eating', 'Running'], correctAnswer: 1 },
      { id: 'q26-6', question: 'How was Whiskers using the sock?', options: ['As a toy', 'As a pillow', 'As a blanket', 'As a hat'], correctAnswer: 1 },
      { id: 'q26-7', question: 'Did Amy find her sock?', options: ['No', 'Yes', 'She bought a new one', 'She didn\'t care'], correctAnswer: 1 },
      { id: 'q26-8', question: 'How did Amy feel when she saw the cat?', options: ['Angry', 'Sad', 'She laughed', 'Scared'], correctAnswer: 2 },
      { id: 'q26-9', question: 'Did Amy take the sock back?', options: ['Yes', 'No, she let the cat keep it', 'She threw it away', 'She hid it'], correctAnswer: 1 },
      { id: 'q26-10', question: 'What else did Amy find?', options: ['A lost coin', 'An old book', 'A toy car', 'All of the above'], correctAnswer: 3 }
    ]
  },
  {
    id: 'story-27',
    title: 'The Solar System',
    titleKurdish: 'کۆمەلا رۆژێ',
    content: 'Our solar system has eight planets that travel around the sun. Mercury is the closest planet to the sun, and Neptune is the farthest. Earth is the third planet and the only one known to have life. Jupiter is the biggest planet, and Saturn has beautiful rings made of ice and rock. Space is a vast and mysterious place that we are still exploring.',
    contentKurdish: 'کۆمەلا مە یا رۆژێ هەشت هەسارەیێن هەین کو ل دەورێ رۆژێ دزڤڕن. مێرکوری نێزیکترین هەسارەیە ژ رۆژێ، و نێپتون دویرترینە. ئەرد هەسارەیا سێیێ یە و تاکە هەسارەیە کو ژیان ل سەر دهێتە زانین. جۆپیتەر مەزنترین هەسارەیە، و ساتورن بازنێن جوان یێن هەین کو ژ جەمد و بەردان هاتینە دروستکرن. فەزا جهەکێ بەرفرەه و نهێنی یە کو ئەم هێشتا ل سەر دکۆلین.',
    level: 'B1',
    questions: [
      { id: 'q27-1', question: 'How many planets are in our solar system?', options: ['Seven', 'Eight', 'Nine', 'Ten'], correctAnswer: 1 },
      { id: 'q27-2', question: 'What do the planets travel around?', options: ['The moon', 'The sun', 'The Earth', 'The stars'], correctAnswer: 1 },
      { id: 'q27-3', question: 'Which planet is closest to the sun?', options: ['Venus', 'Mercury', 'Mars', 'Earth'], correctAnswer: 1 },
      { id: 'q27-4', question: 'Which planet is the farthest from the sun?', options: ['Jupiter', 'Neptune', 'Saturn', 'Uranus'], correctAnswer: 1 },
      { id: 'q27-5', question: 'Which planet is the third from the sun?', options: ['Mars', 'Earth', 'Venus', 'Mercury'], correctAnswer: 1 },
      { id: 'q27-6', question: 'What is special about Earth?', options: ['It is the biggest', 'It has life', 'It has rings', 'It is red'], correctAnswer: 1 },
      { id: 'q27-7', question: 'Which planet is the biggest?', options: ['Earth', 'Jupiter', 'Saturn', 'Neptune'], correctAnswer: 1 },
      { id: 'q27-8', question: 'What are Saturn\'s rings made of?', options: ['Gold', 'Ice and rock', 'Gas', 'Water'], correctAnswer: 1 },
      { id: 'q27-9', question: 'Is space a small place?', options: ['Yes', 'No, it is vast', 'It is a room', 'Maybe'], correctAnswer: 1 },
      { id: 'q27-10', question: 'Are we still exploring space?', options: ['Yes', 'No, we know everything', 'Only on Mondays', 'Never'], correctAnswer: 0 }
    ]
  },
  {
    id: 'story-28',
    title: 'The Brave Knight',
    titleKurdish: 'سوارچاکێ ئازا',
    content: 'Sir Cedric was a brave knight who lived in a stone castle. He wore shiny armor and carried a strong shield. One day, a dragon was scaring the villagers. Sir Cedric rode his horse to the dragon\'s cave. Instead of fighting, he found out the dragon had a thorn in its paw. He helped the dragon, and they became friends. The dragon never scared the village again.',
    contentKurdish: 'سێر سێدریک سوارچاکەکێ ئازا بوو کو د قەسرەکا بەری دا دژیا. وی جلیەکێ ئاسنی یێ گەش دپۆشی و مەگنەکێ ب هێز دگەل خۆ هەلدگرت. روژەکێ، ئەژدەهایەکێ خەلکێ گوندی دترساند. سێر سێدریک ل سەر ئەسپێ خۆ چوو بو ئەشکەفتا ئەژدەهایی. ل شوینا شەڕی، وی دیت کو ستریکەک د دەستێ ئەژدەهایی دا بوو. وی هاریکاریا ئەژدەهایی کر، و ئەو بوونە هەڤال. ئەژدەهایی چ جاران دیسا گوند نەترساند.',
    level: 'A2',
    questions: [
      { id: 'q28-1', question: 'Who was Sir Cedric?', options: ['A king', 'A knight', 'A farmer', 'A wizard'], correctAnswer: 1 },
      { id: 'q28-2', question: 'Where did Sir Cedric live?', options: ['In a tent', 'In a stone castle', 'In a forest', 'In a ship'], correctAnswer: 1 },
      { id: 'q28-3', question: 'What did he wear?', options: ['A suit', 'Shiny armor', 'A dress', 'A cloak'], correctAnswer: 1 },
      { id: 'q28-4', question: 'What was scaring the villagers?', options: ['A wolf', 'A dragon', 'A giant', 'A ghost'], correctAnswer: 1 },
      { id: 'q28-5', question: 'Where did the dragon live?', options: ['In a house', 'In a cave', 'In a tree', 'In the water'], correctAnswer: 1 },
      { id: 'q28-6', question: 'Did Sir Cedric fight the dragon?', options: ['Yes', 'No, he helped it', 'He ran away', 'He hid'], correctAnswer: 1 },
      { id: 'q28-7', question: 'What was wrong with the dragon?', options: ['It was hungry', 'It had a thorn in its paw', 'It was lost', 'It was cold'], correctAnswer: 1 },
      { id: 'q28-8', question: 'Did they become friends?', options: ['No', 'Yes', 'They hated each other', 'Maybe'], correctAnswer: 1 },
      { id: 'q28-9', question: 'What did Sir Cedric carry?', options: ['A sword and shield', 'A book', 'A bag', 'A flower'], correctAnswer: 0 },
      { id: 'q28-10', question: 'Did the dragon scare the village again?', options: ['Yes', 'No, never again', 'Only on Sundays', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-29',
    title: 'The Magic Seeds',
    titleKurdish: 'تۆڤێن سێحرى',
    content: 'Jack traded his cow for five magic seeds. His mother was angry and threw them out the window. Overnight, a giant beanstalk grew up to the clouds! Jack climbed the beanstalk and found a giant\'s castle. He found a hen that laid golden eggs. Jack took the hen and climbed back down. He and his mother were never poor again.',
    contentKurdish: 'جاکی چێلا خۆ گوهۆڕی ب پێنج تۆڤێن سێحری. دایکا وی توڕە بوو و ئەو ژ پەنجەرێ هاڤێتنە دەرڤە. د شەڤەکێ دا، دارەکا مەزن یا فاصولیێ شین بوو هەتا گەهشتیە عەوران! جاک سەرکەفتە سەر دارێ و قەسرا زەبەلاحەکی دیت. وی مریشکەک دیت کو هێکێن زێرین دکرن. جاکی مریشک بر و هاتە خوارێ. ئەو و دایکا وی چ جاران دیسا هەژار نەبوون.',
    level: 'B1',
    questions: [
      { id: 'q29-1', question: 'What did Jack trade his cow for?', options: ['Money', 'Magic seeds', 'A horse', 'Food'], correctAnswer: 1 },
      { id: 'q29-2', question: 'How many seeds did Jack get?', options: ['Three', 'Five', 'Ten', 'One'], correctAnswer: 1 },
      { id: 'q29-3', question: 'Was Jack\'s mother happy?', options: ['Yes', 'No, she was angry', 'She didn\'t care', 'She was excited'], correctAnswer: 1 },
      { id: 'q29-4', question: 'Where did the seeds go?', options: ['In a pot', 'Out the window', 'In the bin', 'In Jack\'s pocket'], correctAnswer: 1 },
      { id: 'q29-5', question: 'What grew overnight?', options: ['A flower', 'A giant beanstalk', 'A tree', 'Grass'], correctAnswer: 1 },
      { id: 'q29-6', question: 'Where did the beanstalk reach?', options: ['The roof', 'The clouds', 'The moon', 'The sun'], correctAnswer: 1 },
      { id: 'q29-7', question: 'What did Jack find at the top?', options: ['A park', 'A giant\'s castle', 'A school', 'A shop'], correctAnswer: 1 },
      { id: 'q29-8', question: 'What was special about the hen?', options: ['It could talk', 'It laid golden eggs', 'It could fly', 'It was giant'], correctAnswer: 1 },
      { id: 'q29-9', question: 'Did Jack take the hen?', options: ['Yes', 'No', 'He left it there', 'The giant gave it to him'], correctAnswer: 0 },
      { id: 'q29-10', question: 'Were Jack and his mother poor at the end?', options: ['Yes', 'No, never again', 'They were even poorer', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-30',
    title: 'The Friendly Ghost',
    titleKurdish: 'تەبا (جنۆکێ) دلۆڤان',
    content: 'Casper is a friendly ghost who lives in an old house. Unlike other ghosts, he doesn\'t like to scare people. He wants to have friends. One day, a little girl named Wendy moved into the house. Casper showed her where the hidden toys were. They played together every day. Casper was finally happy because he had a real friend.',
    contentKurdish: 'کاسپەر تەبایەکێ (جنۆکەکێ) دلۆڤانە کو د خانیەکێ پیر دا دژیت. بەروڤاژی تەبایێن دی، ئەو حەز ناکەت خەلکی بترسینیت. ئەو دڤێت هەڤالێن وی هەبن. روژەکێ، کچەکا بچویک بناڤێ وێندی هاتە دناڤ خانی دا. کاسپەری نیشا وێ دا کا یاریێن ڤەشارتی ل کیرێنە. وان هەر روژ پێکڤە یاری دکرن. کاسپەر ل دوماهیکێ کەیفخۆش بوو چونکی هەڤالەکا راستی هەبوو.',
    level: 'A2',
    questions: [
      { id: 'q30-1', question: 'Who is Casper?', options: ['A boy', 'A friendly ghost', 'A cat', 'A monster'], correctAnswer: 1 },
      { id: 'q30-2', question: 'Where does Casper live?', options: ['In a new house', 'In an old house', 'In a castle', 'In a cave'], correctAnswer: 1 },
      { id: 'q30-3', question: 'Does Casper like to scare people?', options: ['Yes', 'No', 'Sometimes', 'Only at night'], correctAnswer: 1 },
      { id: 'q30-4', question: 'What does Casper want?', options: ['Money', 'Friends', 'Food', 'To be scary'], correctAnswer: 1 },
      { id: 'q30-5', question: 'Who moved into the house?', options: ['A boy', 'A little girl named Wendy', 'A dog', 'A teacher'], correctAnswer: 1 },
      { id: 'q30-6', question: 'What did Casper show Wendy?', options: ['The kitchen', 'Hidden toys', 'The garden', 'The exit'], correctAnswer: 1 },
      { id: 'q30-7', question: 'Did they play together?', options: ['Yes, every day', 'No', 'Only once', 'They fought'], correctAnswer: 0 },
      { id: 'q30-8', question: 'Was Casper happy at the end?', options: ['No', 'Yes', 'He was sad', 'He was angry'], correctAnswer: 1 },
      { id: 'q30-9', question: 'Is Casper like other ghosts?', options: ['Yes', 'No, he is friendly', 'He is scarier', 'Maybe'], correctAnswer: 1 },
      { id: 'q30-10', question: 'What is the girl\'s name?', options: ['Sara', 'Wendy', 'Maya', 'Amy'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-31',
    title: 'The Helpful Robot',
    titleKurdish: 'رۆبۆتێ هاریکار',
    content: 'Robo is a small robot designed to help in the kitchen. He can chop vegetables, wash dishes, and even make toast. He has a shiny silver body and blue eyes that light up when he is working. One day, the family went on vacation and forgot to turn Robo off. When they came back, the kitchen was perfectly clean and Robo had baked a cake!',
    contentKurdish: 'رۆبۆ رۆبۆتەکێ بچویکە و هاتیە دروستکرن دا د چێشتخانێ دا هاریکاریێ بکەت. ئەو دشێت کەسکاتیان هویر بکەت، دەوریان بشۆت، و هەتا نانێ برژاندنێ دروست بکەت. ئەو جەستەیەکێ زیڤی یێ گەش و چاڤێن شین یێن هەین کو دەمێ کار دکەت گەش دبن. روژەکێ، خێزان چوونە گەشتەکێ و ژ بیر کر رۆبۆ ڤەمرینن. دەمێ ئەو زڤڕین، چێشتخانە ب تمامی یا پاقژ بوو و رۆبۆ کێکەک ژی چێکر بوو!',
    level: 'A2',
    questions: [
      { id: 'q31-1', question: 'What is Robo?', options: ['A chef', 'A robot', 'A toy', 'A computer'], correctAnswer: 1 },
      { id: 'q31-2', question: 'Where does Robo help?', options: ['In the garden', 'In the kitchen', 'In the bedroom', 'In the garage'], correctAnswer: 1 },
      { id: 'q31-3', question: 'What can Robo do?', options: ['Chop vegetables', 'Wash dishes', 'Make toast', 'All of the above'], correctAnswer: 3 },
      { id: 'q31-4', question: 'What color are Robo\'s eyes?', options: ['Red', 'Blue', 'Green', 'Yellow'], correctAnswer: 1 },
      { id: 'q31-5', question: 'What happens to his eyes when he works?', options: ['They close', 'They light up', 'They change color', 'They spin'], correctAnswer: 1 },
      { id: 'q31-6', question: 'Where did the family go?', options: ['To school', 'On vacation', 'To the park', 'To work'], correctAnswer: 1 },
      { id: 'q31-7', question: 'Did they turn Robo off?', options: ['Yes', 'No, they forgot', 'Robo turned himself off', 'The neighbor did'], correctAnswer: 1 },
      { id: 'q31-8', question: 'How was the kitchen when they returned?', options: ['Messy', 'Perfectly clean', 'On fire', 'Full of water'], correctAnswer: 1 },
      { id: 'q31-9', question: 'What did Robo bake?', options: ['Bread', 'A cake', 'Cookies', 'Pizza'], correctAnswer: 1 },
      { id: 'q31-10', question: 'What is Robo\'s body made of?', options: ['Plastic', 'Silver/Metal', 'Wood', 'Glass'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-32',
    title: 'The Giant Pumpkin',
    titleKurdish: 'کولەکا زەبەلاح',
    content: 'Farmer Brown planted a special seed in his garden. He watered it every day and gave it plenty of sunlight. Soon, a tiny pumpkin appeared. It grew bigger and bigger every week. By October, the pumpkin was as big as a car! Farmer Brown won first prize at the county fair. He shared the pumpkin with the whole town, and they made hundreds of pies.',
    contentKurdish: 'جوتیار براون تۆڤەکێ تایبەت د باخچێ خۆ دا چاند. وی هەر روژ ئاڤ ددا و رۆناهیا رۆژێ یا پێدڤی دداێ. زوو، کولەکەکا بچویک دیار بوو. ئەو هەر هەفتە مەزنتر و مەزنتر لێ دهات. ل مەها ئۆکتۆبەرێ، کولەک ب قەدەر ترومبێلەکێ مەزن بوو! جوتیار براون خەلاتێ ئێکێ ل پێشانگەها ناوچەیێ بدەستخست. وی کولەک دگەل هەمی خەلکێ باژێری پشکدار کر، و وان ب سەدان پای (کێکێن کولەکێ) چێکرن.',
    level: 'A2',
    questions: [
      { id: 'q32-1', question: 'Who planted the seed?', options: ['Farmer Brown', 'A little boy', 'A scientist', 'A queen'], correctAnswer: 0 },
      { id: 'q32-2', question: 'What did he give the plant?', options: ['Milk', 'Water and sunlight', 'Juice', 'Soda'], correctAnswer: 1 },
      { id: 'q32-3', question: 'When did the pumpkin become as big as a car?', options: ['In May', 'In October', 'In January', 'In July'], correctAnswer: 1 },
      { id: 'q32-4', question: 'How big was the pumpkin eventually?', options: ['As big as a ball', 'As big as a car', 'As big as a house', 'As big as a cat'], correctAnswer: 1 },
      { id: 'q32-5', question: 'What did Farmer Brown win?', options: ['A new tractor', 'First prize', 'A gold medal', 'A blue ribbon'], correctAnswer: 1 },
      { id: 'q32-6', question: 'Where did he win the prize?', options: ['At school', 'At the county fair', 'In a race', 'At the market'], correctAnswer: 1 },
      { id: 'q32-7', question: 'Did he keep the pumpkin for himself?', options: ['Yes', 'No, he shared it', 'He sold it', 'He threw it away'], correctAnswer: 1 },
      { id: 'q32-8', question: 'What did the town make with the pumpkin?', options: ['Soup', 'Pies', 'Juice', 'Salad'], correctAnswer: 1 },
      { id: 'q32-9', question: 'How many pies did they make?', options: ['Ten', 'Hundreds', 'One', 'None'], correctAnswer: 1 },
      { id: 'q32-10', question: 'Was the seed special?', options: ['Yes', 'No', 'It was a regular seed', 'It was a magic bean'], correctAnswer: 0 }
    ]
  },
  {
    id: 'story-33',
    title: 'The Busy Bees',
    titleKurdish: 'مێشێن هنگڤینی یێن ب کار',
    content: 'Bees are very important for our environment. They fly from flower to flower to collect nectar. While they do this, they help pollinate the plants so they can grow fruit and seeds. Inside the beehive, the bees work together to make honey. There is one queen bee, and thousands of worker bees. Without bees, we would have much less food to eat.',
    contentKurdish: 'مێشێن هنگڤینی گەلەک د گرنگن بو ژینگەها مە. ئەو ژ گولەکێ بو گولەکا دی دفرن دا شیلەیێ کۆم بکەن. دەمێ ئەو ڤێ چەندێ دکەن، ئەو هاریکاریا پیتاندنا رووەکان دکەن دا کو ئەو بشێن فێقی و تۆڤان بەرهەم بینن. دناڤ مێشەخانێ دا، مێش پێکڤە کار دکەن دا هنگڤینی چێبکەن. ئێک مێشا شاهژن یا هەی، و ب هزاران مێشێن کرێکار. بێی مێشان، مە دێ گەلەک کێمتر خوارن هەبیت بو خوارنێ.',
    level: 'B1',
    questions: [
      { id: 'q33-1', question: 'Why are bees important?', options: ['They are pretty', 'They help the environment', 'They sleep a lot', 'They are loud'], correctAnswer: 1 },
      { id: 'q33-2', question: 'What do bees collect from flowers?', options: ['Water', 'Nectar', 'Leaves', 'Dirt'], correctAnswer: 1 },
      { id: 'q33-3', question: 'What process do bees help with?', options: ['Digging', 'Pollination', 'Swimming', 'Cooking'], correctAnswer: 1 },
      { id: 'q33-4', question: 'What do plants grow with the help of bees?', options: ['Rocks', 'Fruit and seeds', 'Clouds', 'Ice'], correctAnswer: 1 },
      { id: 'q33-5', question: 'Where do bees make honey?', options: ['In a nest', 'In a beehive', 'In a tree', 'In a house'], correctAnswer: 1 },
      { id: 'q33-6', question: 'How many queen bees are in a hive?', options: ['One', 'Ten', 'Hundreds', 'None'], correctAnswer: 0 },
      { id: 'q33-7', question: 'What are the other bees called?', options: ['Soldier bees', 'Worker bees', 'Lazy bees', 'Baby bees'], correctAnswer: 1 },
      { id: 'q33-8', question: 'What would happen if we had no bees?', options: ['More flowers', 'Less food', 'More honey', 'Nothing'], correctAnswer: 1 },
      { id: 'q33-9', question: 'Do bees work alone?', options: ['Yes', 'No, they work together', 'Only the queen works', 'They never work'], correctAnswer: 1 },
      { id: 'q33-10', question: 'Is honey made by bees?', options: ['Yes', 'No', 'It comes from trees', 'It is made in factories'], correctAnswer: 0 }
    ]
  },
  {
    id: 'story-34',
    title: 'The First Airplane',
    titleKurdish: 'ئێکەمین فرۆکە',
    content: 'Orville and Wilbur Wright were two brothers who loved machines. They spent years studying how birds fly. In 1903, they built the first successful airplane. It was made of wood and fabric. Orville made the first flight, which lasted only 12 seconds. It was a short flight, but it changed the world forever. Today, we can travel across oceans in just a few hours.',
    contentKurdish: 'ئۆرڤیل و ویلبور ڕایت دوو برا بوون کو حەز ژ ئامیران دکر. وان ب سالان دەمێ خۆ بوراند ل سەر خواندنا وێ چەندێ کا چویک چەوا دفرن. ل سالا ١٩٠٣، وان ئێکەمین فرۆکا سەرکەفتی دروستکر. ئەو ژ تەخت و قوماشی هاتبوو دروستکرن. ئۆرڤیلی ئێکەم گەشت ئەنجامدا، کو تەنێ ١٢ چرکەیان ڤەکێشا. ئەو گەشتەکا کورت بوو، بەلێ جیهان بو هەتا هەتا گوهۆڕی. ئەڤرۆ، ئەم دشێین د چەند دەمژمێرەکێن کێم دا ل سەر دەریایان گەشت بکەین.',
    level: 'B1',
    questions: [
      { id: 'q34-1', question: 'Who were the Wright brothers?', options: ['Farmers', 'Orville and Wilbur', 'Doctors', 'Kings'], correctAnswer: 1 },
      { id: 'q34-2', question: 'What did they study to learn about flight?', options: ['Clouds', 'Birds', 'Kites', 'Insects'], correctAnswer: 1 },
      { id: 'q34-3', question: 'In what year was the first flight?', options: ['1803', '1903', '1950', '2000'], correctAnswer: 1 },
      { id: 'q34-4', question: 'What was the first airplane made of?', options: ['Metal', 'Wood and fabric', 'Plastic', 'Glass'], correctAnswer: 1 },
      { id: 'q34-5', question: 'Who made the first flight?', options: ['Wilbur', 'Orville', 'Their father', 'A pilot'], correctAnswer: 1 },
      { id: 'q34-6', question: 'How long did the first flight last?', options: ['12 minutes', '12 seconds', '1 hour', '5 seconds'], correctAnswer: 1 },
      { id: 'q34-7', question: 'Was the first flight long?', options: ['Yes', 'No, it was short', 'It was across the ocean', 'It lasted all day'], correctAnswer: 1 },
      { id: 'q34-8', question: 'Did the flight change the world?', options: ['No', 'Yes, forever', 'Only a little', 'Maybe'], correctAnswer: 1 },
      { id: 'q34-9', question: 'How do we travel today because of them?', options: ['By horse', 'By airplane', 'By train', 'By foot'], correctAnswer: 1 },
      { id: 'q34-10', question: 'Did they spend a lot of time studying?', options: ['Yes, years', 'No, only a week', 'They didn\'t study', 'Only one day'], correctAnswer: 0 }
    ]
  },
  {
    id: 'story-35',
    title: 'The Lost Puppy',
    titleKurdish: 'تەوتکێ بەرزەبوویی',
    content: 'Toby is a small puppy with brown spots. One day, he chased a butterfly and got lost in the park. He felt scared and started to whimper. A kind boy named Sam found Toby sitting under a bench. Sam looked at Toby\'s collar and saw a phone number. He called Toby\'s owners, and they came to pick him up. Toby wagged his tail happily.',
    contentKurdish: 'تۆبی تەوتکەکێ بچویکە و خالێن قاوەیی یێن هەین. روژەکێ، وی دویڤچوونا پەپوولەکێ کر و دناڤ پارکی دا بەرزە بوو. وی هەست ب ترسێ کر و دەست ب گریێ کر. کورەکێ دلۆڤان بناڤێ سام تۆبی دیت کو ل بن کورسیەکێ نڤستی بوو. سامی سەحکرە ملبەندێ تۆبی و ژمارەکا تەلەفۆنێ دیت. وی تەلەفۆن بو خودانێن تۆبی کر، و ئەو هاتن و ئەو برن. تۆبی ب کەیفخۆشی کلکێ خۆ هەژاند.',
    level: 'A1',
    questions: [
      { id: 'q35-1', question: 'What color are Toby\'s spots?', options: ['Black', 'Brown', 'White', 'Red'], correctAnswer: 1 },
      { id: 'q35-2', question: 'What did Toby chase?', options: ['A cat', 'A butterfly', 'A ball', 'A car'], correctAnswer: 1 },
      { id: 'q35-3', question: 'Where did Toby get lost?', options: ['In the forest', 'In the park', 'In the city', 'At school'], correctAnswer: 1 },
      { id: 'q35-4', question: 'How did Toby feel when he was lost?', options: ['Happy', 'Scared', 'Angry', 'Bored'], correctAnswer: 1 },
      { id: 'q35-5', question: 'Who found Toby?', options: ['A girl', 'A kind boy named Sam', 'A policeman', 'A teacher'], correctAnswer: 1 },
      { id: 'q35-6', question: 'Where was Toby sitting?', options: ['On a tree', 'Under a bench', 'In a fountain', 'On the grass'], correctAnswer: 1 },
      { id: 'q35-7', question: 'What did Sam find on Toby\'s collar?', options: ['A name', 'A phone number', 'A key', 'A bell'], correctAnswer: 1 },
      { id: 'q35-8', question: 'What did Sam do?', options: ['He kept Toby', 'He called Toby\'s owners', 'He left Toby there', 'He gave Toby food'], correctAnswer: 1 },
      { id: 'q35-9', question: 'How did Toby react when his owners came?', options: ['He ran away', 'He wagged his tail happily', 'He barked angrily', 'He slept'], correctAnswer: 1 },
      { id: 'q35-10', question: 'Is Toby a big dog?', options: ['Yes', 'No, he is a small puppy', 'He is a wolf', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-36',
    title: 'The Great Wall of China',
    titleKurdish: 'دیوارێ مەزن یێ چینێ',
    content: 'The Great Wall of China is one of the most famous structures in the world. It was built thousands of years ago to protect China from invaders. The wall is made of stone, brick, and wood. It stretches for thousands of miles across mountains and deserts. You can even see parts of it from space! Millions of people visit the wall every year to see its history.',
    contentKurdish: 'دیوارێ مەزن یێ چینێ ئێکە ژ ناڤدارترین تەلاران ل جیهانێ. ئەو بەری هزاران سالان هاتبوو دروستکرن دا چینێ ژ هێرشبەران بپارێزیت. دیوار ژ بەری، خشتی، و تەختی هاتبوو دروستکرن. ئەو ب هزاران میلان ل سەر چیا و بیابانان درێژ دبیت. تو دشێی هندەک پشکێن وی هەتا ژ فەزای ژی ببینی! ب ملیۆنان خەلک هەر سال سەرەدانا دیوارێ دکەن دا مێژوویا وی ببینن.',
    level: 'B1',
    questions: [
      { id: 'q36-1', question: 'Where is the Great Wall located?', options: ['Japan', 'China', 'India', 'USA'], correctAnswer: 1 },
      { id: 'q36-2', question: 'Why was the wall built?', options: ['To keep animals in', 'To protect China from invaders', 'To be a road', 'To show off'], correctAnswer: 1 },
      { id: 'q36-3', question: 'What is the wall made of?', options: ['Plastic', 'Stone, brick, and wood', 'Glass', 'Ice'], correctAnswer: 1 },
      { id: 'q36-4', question: 'How long is the wall?', options: ['Ten miles', 'Thousands of miles', 'One mile', 'A hundred miles'], correctAnswer: 1 },
      { id: 'q36-5', question: 'Can you see it from space?', options: ['Yes, parts of it', 'No', 'Only at night', 'Maybe'], correctAnswer: 0 },
      { id: 'q36-6', question: 'When was it built?', options: ['Last year', 'Thousands of years ago', 'In 1990', 'In 2020'], correctAnswer: 1 },
      { id: 'q36-7', question: 'What kind of places does the wall cross?', options: ['Only cities', 'Mountains and deserts', 'Only oceans', 'Only forests'], correctAnswer: 1 },
      { id: 'q36-8', question: 'How many people visit it every year?', options: ['Hundreds', 'Millions', 'Ten', 'None'], correctAnswer: 1 },
      { id: 'q36-9', question: 'Is it a famous structure?', options: ['No', 'Yes, very famous', 'Only in China', 'Maybe'], correctAnswer: 1 },
      { id: 'q36-10', question: 'Is the wall made of only one material?', options: ['Yes', 'No, stone, brick, and wood', 'Only wood', 'Only stone'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-37',
    title: 'The Rain Cycle',
    titleKurdish: 'خولا بارانێ',
    content: 'Have you ever wondered where rain comes from? It starts with the sun heating up the water in oceans and lakes. The water turns into invisible gas called water vapor. This vapor rises into the sky and cools down to form clouds. When the clouds get too heavy, the water falls back to the ground as rain. This is called the water cycle, and it happens over and over again.',
    contentKurdish: 'تە چ جاران هزر کریە کا باران ژ کیرێ دهێت؟ ئەو ب رێکا رۆژێ دەستپێدکەت کو ئاڤا دناڤ دەریا و گۆلان دا گەرم دکەت. ئاڤ دگوهۆڕیت بو گازەکا نەدیار کو پێ دبێژن هەلما ئاڤێ. ئەڤ هەلمە بو ئەسمانی بلند دبیت و سار دبیت دا عەوران دروست بکەت. دەمێ عەور گەلەک گران دبن، ئاڤ دزڤڕیتە سەر ئەردی وەک باران. ئەڤە پێ دبێژن خولا ئاڤێ، و ئەو جار و جار دووبارە دبیت.',
    level: 'B1',
    questions: [
      { id: 'q37-1', question: 'What heats up the water in the oceans?', options: ['The moon', 'The sun', 'The wind', 'The clouds'], correctAnswer: 1 },
      { id: 'q37-2', question: 'What is the invisible gas called?', options: ['Smoke', 'Water vapor', 'Oxygen', 'Air'], correctAnswer: 1 },
      { id: 'q37-3', question: 'Where does the vapor go?', options: ['Into the ground', 'Into the sky', 'Into the ocean', 'Nowhere'], correctAnswer: 1 },
      { id: 'q37-4', question: 'What forms when the vapor cools down?', options: ['Rain', 'Clouds', 'Ice', 'Stars'], correctAnswer: 1 },
      { id: 'q37-5', question: 'When does rain fall?', options: ['When clouds are light', 'When clouds get too heavy', 'When it is sunny', 'At night'], correctAnswer: 1 },
      { id: 'q37-6', question: 'What is this process called?', options: ['The rain dance', 'The water cycle', 'The sun cycle', 'The cloud cycle'], correctAnswer: 1 },
      { id: 'q37-7', question: 'Does it happen only once?', options: ['Yes', 'No, over and over again', 'Only in winter', 'Never'], correctAnswer: 1 },
      { id: 'q37-8', question: 'Where does the water come from initially?', options: ['The moon', 'Oceans and lakes', 'Factories', 'The desert'], correctAnswer: 1 },
      { id: 'q37-9', question: 'Is water vapor visible?', options: ['Yes', 'No, it is invisible', 'Only in the morning', 'Maybe'], correctAnswer: 1 },
      { id: 'q37-10', question: 'Does rain fall from the sun?', options: ['Yes', 'No, from the clouds', 'From the stars', 'From the moon'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-38',
    title: 'The Library Adventure',
    titleKurdish: 'سەرهاتییا کتێبخانێ',
    content: 'Leo loves going to the library. It is a quiet place full of thousands of books. He likes to read about dinosaurs, space, and magic. One day, he found a very old book with a golden key on the cover. When he opened it, a small map fell out. The map showed a secret room in the library! Leo followed the map and found a room full of comfortable chairs and his favorite stories.',
    contentKurdish: 'لیۆ حەز دکەت بچیتە کتێبخانێ. ئەو جهەکێ بێدەنگە و پڕە ژ هزاران کتێبان. ئەو حەز دکەت ل سەر دایناسۆران، فەزای، و سێحرێ بخوینیت. روژەکێ، وی کتێبەکا گەلەک پیر دیت کو کلیلەکا زێرین ل سەر بەرگی هەبوو. دەمێ وی ڤەکری، نەخشەیەکێ بچویک ژێ کەفت. نەخشەی ژوورەکا نهێنی د کتێبخانێ دا نیشا ددا! لیۆ دویڤ نەخشەی چوو و ژوورەکا پڕ ژ کورسیێن ئارام و چیرۆکێن خۆ یێن دلخواز دیت.',
    level: 'A2',
    questions: [
      { id: 'q38-1', question: 'Where does Leo love to go?', options: ['The park', 'The library', 'The cinema', 'The zoo'], correctAnswer: 1 },
      { id: 'q38-2', question: 'What kind of place is the library?', options: ['Loud', 'Quiet', 'Scary', 'Small'], correctAnswer: 1 },
      { id: 'q38-3', question: 'What does Leo like to read about?', options: ['Sports', 'Dinosaurs, space, and magic', 'Cooking', 'Cars'], correctAnswer: 1 },
      { id: 'q38-4', question: 'What was on the cover of the old book?', options: ['A flower', 'A golden key', 'A dragon', 'A star'], correctAnswer: 1 },
      { id: 'q38-5', question: 'What fell out of the book?', options: ['A coin', 'A small map', 'A bookmark', 'A photo'], correctAnswer: 1 },
      { id: 'q38-6', question: 'What did the map show?', options: ['A treasure', 'A secret room in the library', 'A park', 'A school'], correctAnswer: 1 },
      { id: 'q38-7', question: 'Did Leo follow the map?', options: ['No', 'Yes', 'He threw it away', 'He gave it to the librarian'], correctAnswer: 1 },
      { id: 'q38-8', question: 'What was in the secret room?', options: ['Gold', 'Comfortable chairs and stories', 'Ghosts', 'Dust'], correctAnswer: 1 },
      { id: 'q38-9', question: 'Is the library small?', options: ['Yes', 'No, it has thousands of books', 'It only has ten books', 'Maybe'], correctAnswer: 1 },
      { id: 'q38-10', question: 'Was the book new?', options: ['Yes', 'No, it was very old', 'It was a magazine', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-39',
    title: 'The First Day of Spring',
    titleKurdish: 'رۆژا ئێکێ یا بهارێ',
    content: 'Spring is a beautiful season. The weather gets warmer, and the flowers start to bloom. You can see green leaves on the trees and hear the birds singing. Many animals have their babies in the spring. People like to go outside and have picnics in the park. It is a time of new beginnings and colorful nature. What is your favorite thing about spring?',
    contentKurdish: 'بهار وەرزەکێ جوانە. سەقا گەرمتر لێ دهێت، و گول دەست ب گەشەکرنێ دکەن. تو دشێی گەلایێن کەسک ل سەر داران ببینی و گوه ل دەنگێ چویکان ببیت کو دچڕن. گەلەک ئاژەل بێچوویێن خۆ د بهارێ دا دئینن. خەلک حەز دکەن بچنە دەرڤە و گەشتان دناڤ پارکی دا بکەن. ئەو دەمێ دەستپێکێن نوو و سروشتێ رەنگینە. تشتێ تە یێ دلخواز چیە ل سەر بهارێ؟',
    level: 'A1',
    questions: [
      { id: 'q39-1', question: 'What happens to the weather in spring?', options: ['It gets colder', 'It gets warmer', 'It stays the same', 'It snows'], correctAnswer: 1 },
      { id: 'q39-2', question: 'What do flowers do in spring?', options: ['They die', 'They start to bloom', 'They turn brown', 'They disappear'], correctAnswer: 1 },
      { id: 'q39-3', question: 'What color are the leaves on the trees?', options: ['Red', 'Green', 'Yellow', 'Blue'], correctAnswer: 1 },
      { id: 'q39-4', question: 'What can you hear in the spring?', options: ['Thunder', 'Birds singing', 'Cars honking', 'Silence'], correctAnswer: 1 },
      { id: 'q39-5', question: 'When do many animals have babies?', options: ['In winter', 'In spring', 'In autumn', 'In summer'], correctAnswer: 1 },
      { id: 'q39-6', question: 'What do people like to do in the park?', options: ['Sleep', 'Have picnics', 'Work', 'Study'], correctAnswer: 1 },
      { id: 'q39-7', question: 'Is spring a time of new beginnings?', options: ['No', 'Yes', 'Only for birds', 'Maybe'], correctAnswer: 1 },
      { id: 'q39-8', question: 'Is the nature colorful in spring?', options: ['No', 'Yes', 'Only in the desert', 'Maybe'], correctAnswer: 1 },
      { id: 'q39-9', question: 'Is spring a season?', options: ['Yes', 'No', 'It is a month', 'It is a day'], correctAnswer: 0 },
      { id: 'q39-10', question: 'Do people stay inside all the time in spring?', options: ['Yes', 'No, they like to go outside', 'Only when it rains', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-40',
    title: 'The Clever Crow',
    titleKurdish: 'قەلەباژێ ژیر',
    content: 'A thirsty crow found a pitcher with a little water at the bottom. He could not reach the water with his beak. He thought for a moment and had an idea. He picked up small pebbles and dropped them into the pitcher one by one. The water level rose higher and higher. Finally, the crow could reach the water and drink. He was very happy and flew away.',
    contentKurdish: 'قەلەباژەکێ تێنی مەسینەک دیت کو هندەک ئاڤ ل بنێ وێ دا هەبوو. وی نەدشیا ب دەنووکێ خۆ بگەهیتە ئاڤێ. وی بو دەمەکێ کێم هزر کر و هزرهەک بو هات. وی بەرێن بچویک هەلگرتن و ئێک ب ئێک هاڤێتنە دناڤ مەسینێ دا. ئاستێ ئاڤێ بلندتر و بلندتر لێ هات. ل دوماهیکێ، قەلەباژ شیا بگەهیتە ئاڤێ و ڤەخۆت. ئەو گەلەک کەیفخۆش بوو و فڕی و چوو.',
    level: 'A2',
    questions: [
      { id: 'q30-1', question: 'What was the crow looking for?', options: ['Food', 'Water', 'A friend', 'A nest'], correctAnswer: 1 },
      { id: 'q30-2', question: 'Where was the water?', options: ['In a lake', 'At the bottom of a pitcher', 'In a cup', 'On the ground'], correctAnswer: 1 },
      { id: 'q30-3', question: 'Could the crow reach the water at first?', options: ['Yes', 'No', 'Only a little', 'Maybe'], correctAnswer: 1 },
      { id: 'q30-4', question: 'What did the crow use to raise the water?', options: ['Leaves', 'Small pebbles', 'Sand', 'Twigs'], correctAnswer: 1 },
      { id: 'q30-5', question: 'How did he drop the pebbles?', options: ['All at once', 'One by one', 'He didn\'t drop them', 'The wind did'], correctAnswer: 1 },
      { id: 'q30-6', question: 'What happened to the water level?', options: ['It went down', 'It rose higher', 'It stayed the same', 'It turned into ice'], correctAnswer: 1 },
      { id: 'q30-7', question: 'Did the crow drink the water?', options: ['No', 'Yes', 'He spilled it', 'He gave it to another bird'], correctAnswer: 1 },
      { id: 'q30-8', question: 'Was the crow clever?', options: ['No', 'Yes', 'He was lucky', 'He was lazy'], correctAnswer: 1 },
      { id: 'q30-9', question: 'How did the crow feel at the end?', options: ['Sad', 'Happy', 'Angry', 'Tired'], correctAnswer: 1 },
      { id: 'q30-10', question: 'What is a pitcher?', options: ['A bird', 'A container for liquids', 'A stone', 'A tree'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-41',
    title: 'The Great Barrier Reef',
    titleKurdish: 'کۆمەلا مەرجانان یا مەزن',
    content: 'The Great Barrier Reef is the largest coral reef system in the world. It is located in the Coral Sea, off the coast of Australia. It is home to thousands of species of fish, sea turtles, and sharks. The reef is so big that it can be seen from outer space! It is a beautiful and colorful underwater world, but it is also very fragile and needs protection.',
    contentKurdish: 'کۆمەلا مەرجانان یا مەزن مەزنترین سیستەمێ مەرجانی یە ل جیهانێ. ئەو ل دەریایا مەرجانان، ل نێزیک کەنارێن ئوسترالیا هەلکەفتیە. ئەو مالا ب هزاران جورێن ماسیان، کیسەلێن دەریایی، و کوسەجانە. کۆمەلا مەرجانان هند یا مەزنە کو دشێت ژ فەزایێ دەرڤە بهێتە دیتن! ئەو جیهانەکا جوان و رەنگینە ل بن ئاڤێ، بەلێ ئەو هەروەسا گەلەک یا ناسکە و پێدڤی ب پاراستنێ یە.',
    level: 'B1',
    questions: [
      { id: 'q41-1', question: 'What is the Great Barrier Reef?', options: ['A mountain range', 'A coral reef system', 'A desert', 'A forest'], correctAnswer: 1 },
      { id: 'q41-2', question: 'Where is it located?', options: ['In the Atlantic Ocean', 'In the Coral Sea, Australia', 'In the Mediterranean Sea', 'In the Arctic Ocean'], correctAnswer: 1 },
      { id: 'q41-3', question: 'What animals live there?', options: ['Lions and tigers', 'Fish, sea turtles, and sharks', 'Bears and wolves', 'Eagles and hawks'], correctAnswer: 1 },
      { id: 'q41-4', question: 'Can it be seen from space?', options: ['No', 'Yes', 'Only at night', 'Maybe'], correctAnswer: 1 },
      { id: 'q41-5', question: 'Is the reef small?', options: ['Yes', 'No, it is the largest in the world', 'It is medium-sized', 'Maybe'], correctAnswer: 1 },
      { id: 'q41-6', question: 'Is the underwater world colorful?', options: ['No', 'Yes, very colorful', 'Only grey', 'Maybe'], correctAnswer: 1 },
      { id: 'q41-7', question: 'Does the reef need protection?', options: ['No', 'Yes, it is fragile', 'It is indestructible', 'Maybe'], correctAnswer: 1 },
      { id: 'q41-8', question: 'What is a coral reef?', options: ['A pile of rocks', 'An underwater structure made of coral', 'A type of fish', 'A boat'], correctAnswer: 1 },
      { id: 'q41-9', question: 'Is it in Australia?', options: ['Yes', 'No', 'In Africa', 'In Europe'], correctAnswer: 0 },
      { id: 'q41-10', question: 'Are there sharks in the reef?', options: ['No', 'Yes', 'Only small ones', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-42',
    title: 'The First Moon Landing',
    titleKurdish: 'ئێکەمین نیشتن ل سەر هەیڤێ',
    content: 'In 1969, Neil Armstrong became the first human to walk on the moon. He traveled in a spacecraft called Apollo 11 with two other astronauts. When he stepped onto the moon\'s surface, he said, "That\'s one small step for man, one giant leap for mankind." This was a historic moment that showed what humans can achieve with science and courage.',
    contentKurdish: 'ل سالا ١٩٦٩، نیل ئارمسترۆنگ بوو ئێکەم مرۆڤ کو ل سەر هەیڤێ بپیاسە بکەت. وی دناڤ کەشتیەکا فەزایی دا گەشت کر کو پێ دگۆتن ئەپۆلۆ ١١ دگەل دوو فەزانوورێن دی. دەمێ وی پێ ل سەر روویێ هەیڤێ دانا، وی گۆت: "ئەڤە گاڤەکا بچویکە بو مرۆڤی، بەلێ بازدانەکا مەزنە بو مرۆڤایەتیێ." ئەڤە ساتەکا مێژوویی بوو کو نیشا دا کا مرۆڤ دشێت چ بدەست بێخیت ب رێکا زانست و ئازایەتیێ.',
    level: 'B1',
    questions: [
      { id: 'q42-1', question: 'Who was the first human to walk on the moon?', options: ['Buzz Aldrin', 'Neil Armstrong', 'Yuri Gagarin', 'Elon Musk'], correctAnswer: 1 },
      { id: 'q42-2', question: 'In what year did the moon landing happen?', options: ['1959', '1969', '1979', '1989'], correctAnswer: 1 },
      { id: 'q42-3', question: 'What was the name of the spacecraft?', options: ['Discovery', 'Apollo 11', 'Challenger', 'Sputnik'], correctAnswer: 1 },
      { id: 'q42-4', question: 'How many astronauts were in the spacecraft?', options: ['One', 'Two', 'Three', 'Four'], correctAnswer: 2 },
      { id: 'q42-5', question: 'What did Neil Armstrong say when he stepped on the moon?', options: ['"Hello world"', '"One small step for man..."', '"I am on the moon"', '"It is cold here"'], correctAnswer: 1 },
      { id: 'q42-6', question: 'Was this a historic moment?', options: ['No', 'Yes', 'Only for the USA', 'Maybe'], correctAnswer: 1 },
      { id: 'q42-7', question: 'What did this achievement show?', options: ['That space is dark', 'What humans can achieve with science', 'That the moon is made of cheese', 'Nothing'], correctAnswer: 1 },
      { id: 'q42-8', question: 'Is Neil Armstrong an astronaut?', options: ['Yes', 'No', 'He is a doctor', 'He is a teacher'], correctAnswer: 0 },
      { id: 'q42-9', question: 'Did they go to the moon in a car?', options: ['Yes', 'No, in a spacecraft', 'In a plane', 'In a balloon'], correctAnswer: 1 },
      { id: 'q42-10', question: 'Is the moon landing real?', options: ['No', 'Yes', 'It was a movie', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-43',
    title: 'The Ant and the Grasshopper',
    titleKurdish: 'مێری و کوللى',
    content: 'All summer, the ant worked hard to collect food for the winter. The grasshopper spent his time singing and playing. When winter came, the ant had plenty of food, but the grasshopper was hungry. He asked the ant for help. The ant said, "I worked while you played. Now you must learn that it is important to prepare for the future." The grasshopper learned his lesson.',
    contentKurdish: 'هەمی هاڤینێ، مێریێ ب دژواری کار دکر دا خوارنێ بو زڤستانێ کۆم بکەت. کوللی دەمێ خۆ ب سترانگۆتن و یاریێ دبرە سەر. دەمێ زڤستان هات، مێریێ خوارنەکا زۆر هەبوو، بەلێ کوللی یێ برسی بوو. وی داخوازا هاریکاریێ ژ مێریێ کر. مێریێ گۆت: "من کار دکر دەمێ تە یاری دکر. نوکە تو پێدڤیە فێرببی کو گرنگە خۆ بو پاشەرۆژێ بەرهەڤ بکەی." کوللی وانەیا خۆ وەرگرت.',
    level: 'A2',
    questions: [
      { id: 'q43-1', question: 'What did the ant do during the summer?', options: ['Sang and played', 'Worked hard to collect food', 'Slept all day', 'Went on vacation'], correctAnswer: 1 },
      { id: 'q43-2', question: 'What did the grasshopper do during the summer?', options: ['Collected food', 'Sang and played', 'Built a house', 'Studied'], correctAnswer: 1 },
      { id: 'q43-3', question: 'When did the grasshopper become hungry?', options: ['In summer', 'In winter', 'In spring', 'In autumn'], correctAnswer: 1 },
      { id: 'q43-4', question: 'Did the ant have food in winter?', options: ['No', 'Yes, plenty', 'Only a little', 'Maybe'], correctAnswer: 1 },
      { id: 'q43-5', question: 'Who did the grasshopper ask for help?', options: ['The farmer', 'The ant', 'The queen', 'The birds'], correctAnswer: 1 },
      { id: 'q43-6', question: 'What was the ant\'s message?', options: ['Always play', 'Prepare for the future', 'Don\'t work too hard', 'Sing every day'], correctAnswer: 1 },
      { id: 'q43-7', question: 'Did the grasshopper learn a lesson?', options: ['No', 'Yes', 'He didn\'t care', 'Maybe'], correctAnswer: 1 },
      { id: 'q43-8', question: 'Is this a fable?', options: ['Yes', 'No', 'It is a news story', 'It is a biography'], correctAnswer: 0 },
      { id: 'q43-9', question: 'Was the ant lazy?', options: ['Yes', 'No, hard-working', 'Sometimes', 'Maybe'], correctAnswer: 1 },
      { id: 'q43-10', question: 'Was the grasshopper hard-working?', options: ['Yes', 'No, he was lazy/playful', 'Only in winter', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-44',
    title: 'The Invention of the Telephone',
    titleKurdish: 'داهێنانا تەلەفۆنێ',
    content: 'Alexander Graham Bell invented the telephone in 1876. He wanted to find a way for people to talk to each other over long distances. The first words spoken over the telephone were, "Mr. Watson, come here, I want to see you." Today, we have smartphones that can do much more than just make calls. We can use them to browse the internet, take photos, and play games.',
    contentKurdish: 'ئەلێکساندەر گراهام بێل تەلەفۆن داهێنا ل سالا ١٨٧٦. وی دڤیا رێیەکێ ببینیت دا خەلک بشێن دگەل ئێک باخڤن ل سەر دویراتیێن درێژ. ئێکەم پەیڤێن د تەلەفۆنێ دا هاتینە گۆتن ئەڤە بوون: "مستەر واتسۆن، وەرە ڤێرێ، من دڤێت تە ببینم." ئەڤرۆ، مە مۆبایلێن زیرەک یێن هەین کو دشێن گەلەک کارێن دی بکەن ژبلی تەنێ تەلەفۆنکرنێ. ئەم دشێین وان بکاربینین بو گەڕیان د ئینتەرنێتێ دا، وێنەگرتن، و یاریێ.',
    level: 'B1',
    questions: [
      { id: 'q44-1', question: 'Who invented the telephone?', options: ['Thomas Edison', 'Alexander Graham Bell', 'Albert Einstein', 'Isaac Newton'], correctAnswer: 1 },
      { id: 'q44-2', question: 'In what year was the telephone invented?', options: ['1776', '1876', '1976', '2000'], correctAnswer: 1 },
      { id: 'q44-3', question: 'What was the purpose of the telephone?', options: ['To take photos', 'To talk over long distances', 'To play games', 'To cook food'], correctAnswer: 1 },
      { id: 'q44-4', question: 'Who was the first person Bell called?', options: ['His mother', 'Mr. Watson', 'The president', 'His friend'], correctAnswer: 1 },
      { id: 'q44-5', question: 'What were the first words spoken?', options: ['"Hello"', '"Mr. Watson, come here..."', '"Can you hear me?"', '"Goodbye"'], correctAnswer: 1 },
      { id: 'q44-6', question: 'What do we have today instead of old telephones?', options: ['Radios', 'Smartphones', 'Telegraphs', 'Typewriters'], correctAnswer: 1 },
      { id: 'q44-7', question: 'Can smartphones browse the internet?', options: ['No', 'Yes', 'Only on Sundays', 'Maybe'], correctAnswer: 1 },
      { id: 'q44-8', question: 'Is Alexander Graham Bell a famous inventor?', options: ['No', 'Yes', 'Only in Scotland', 'Maybe'], correctAnswer: 1 },
      { id: 'q44-9', question: 'Did people talk over long distances before the telephone?', options: ['Yes, easily', 'No, it was difficult', 'They used smartphones', 'Maybe'], correctAnswer: 1 },
      { id: 'q44-10', question: 'Is the telephone still used today?', options: ['No', 'Yes, in different forms', 'Only in museums', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-45',
    title: 'The Little Red Hen',
    titleKurdish: 'مریشکا سور یا بچویک',
    content: 'The little red hen found some grains of wheat. She asked her friends, the dog, the cat, and the duck, to help her plant them. They all said, "Not I." She planted, harvested, and baked the bread all by herself. When the bread was ready, they all wanted to help her eat it. She said, "No, I will eat it myself because I did all the work." And she did.',
    contentKurdish: 'مریشکا سور یا بچویک هندەک تۆڤێن گەنمی دیتن. وێ داخواز ژ هەڤالێن خۆ کر، کو سە، پشیک، و مریشکا ئاڤێ بوون، دا هاریکاریا وێ بکەن د چاندنا وان دا. وان هەمی گۆت: "نە ئەز." وێ ب تنێ چاند، دروینی، و نانێ برژاندی چێکر. دەمێ نان بەرهەڤ بوو، وان هەمی دڤیا هاریکاریا وێ بکەن د خوارنا وی دا. وێ گۆت: "نەخێر، ئەز دێ ب تنێ خوم چونکی من هەمی کار کریە." و وێ وەسا کر.',
    level: 'A1',
    questions: [
      { id: 'q45-1', question: 'What did the little red hen find?', options: ['Corn', 'Wheat grains', 'Bread', 'Money'], correctAnswer: 1 },
      { id: 'q45-2', question: 'Who were her friends?', options: ['Lion, tiger, bear', 'Dog, cat, duck', 'Cow, pig, horse', 'Bird, fish, frog'], correctAnswer: 1 },
      { id: 'q45-3', question: 'Did her friends help her plant the wheat?', options: ['Yes', 'No, they said "Not I"', 'Only the dog', 'Only the cat'], correctAnswer: 1 },
      { id: 'q45-4', question: 'Who did all the work?', options: ['The dog', 'The little red hen', 'The cat', 'The duck'], correctAnswer: 1 },
      { id: 'q45-5', question: 'What did she make with the wheat?', options: ['Cake', 'Bread', 'Soup', 'Pizza'], correctAnswer: 1 },
      { id: 'q45-6', question: 'Did the friends want to eat the bread?', options: ['No', 'Yes', 'They didn\'t like it', 'Maybe'], correctAnswer: 1 },
      { id: 'q45-7', question: 'Did she share the bread?', options: ['Yes', 'No, she ate it herself', 'She gave it to the farmer', 'Maybe'], correctAnswer: 1 },
      { id: 'q45-8', question: 'Why didn\'t she share?', options: ['She was mean', 'Because they didn\'t help', 'She was too hungry', 'Maybe'], correctAnswer: 1 },
      { id: 'q45-9', question: 'Is this a children\'s story?', options: ['Yes', 'No', 'It is a horror story', 'It is a biography'], correctAnswer: 0 },
      { id: 'q45-10', question: 'What is the color of the hen?', options: ['Blue', 'Red', 'Yellow', 'Black'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-46',
    title: 'The Statue of Liberty',
    titleKurdish: 'پەیکەرێ ئازادیێ',
    content: 'The Statue of Liberty is a giant copper statue on Liberty Island in New York Harbor. It was a gift from France to the United States to celebrate friendship and freedom. The statue holds a torch in one hand and a tablet in the other. It is a symbol of hope for millions of people who come to America seeking a better life.',
    contentKurdish: 'پەیکەرێ ئازادیێ پەیکەرەکێ زەبەلاح یێ مسە ل سەر دوورگەیا ئازادیێ ل بەندەرێ نیویۆرکێ. ئەو دیاریەک بوو ژ فەرەنسا بو ویلایەتێن یەکگرتی دا کو ئاهەنگا هەڤالینی و ئازادیێ بگێڕن. پەیکەر مەشخەلەک د دەستەکی دا و تابلۆتەک د دەستێ دی دا هەلگرتیە. ئەو سیمبۆلێ ئۆمێدێ یە بو ملیۆنان خەلک یێن دهێنە ئەمریکا دا ل دویڤ ژیانەکا باشتر بگەڕێن.',
    level: 'B1',
    questions: [
      { id: 'q46-1', question: 'Where is the Statue of Liberty located?', options: ['Paris', 'New York Harbor', 'London', 'Washington D.C.'], correctAnswer: 1 },
      { id: 'q46-2', question: 'What is the statue made of?', options: ['Gold', 'Copper', 'Silver', 'Stone'], correctAnswer: 1 },
      { id: 'q46-3', question: 'Which country gave the statue as a gift?', options: ['England', 'France', 'Germany', 'Spain'], correctAnswer: 1 },
      { id: 'q46-4', question: 'What does the statue celebrate?', options: ['War', 'Friendship and freedom', 'A birthday', 'A new year'], correctAnswer: 1 },
      { id: 'q46-5', question: 'What does the statue hold in its hands?', options: ['A sword and shield', 'A torch and a tablet', 'A book and a pen', 'A flower and a flag'], correctAnswer: 1 },
      { id: 'q46-6', question: 'What is the statue a symbol of?', options: ['Fear', 'Hope', 'Wealth', 'Power'], correctAnswer: 1 },
      { id: 'q46-7', question: 'Is the statue small?', options: ['Yes', 'No, it is giant', 'It is medium-sized', 'Maybe'], correctAnswer: 1 },
      { id: 'q46-8', question: 'Where exactly is the statue?', options: ['On a mountain', 'On Liberty Island', 'In a park', 'On a bridge'], correctAnswer: 1 },
      { id: 'q46-9', question: 'Do many people visit it?', options: ['No', 'Yes, millions', 'Only ten', 'None'], correctAnswer: 1 },
      { id: 'q46-10', question: 'Is it in the United States?', options: ['Yes', 'No', 'In France', 'In Canada'], correctAnswer: 0 }
    ]
  },
  {
    id: 'story-47',
    title: 'The Life of a Butterfly',
    titleKurdish: 'ژیانا پەپوولەکێ',
    content: 'A butterfly starts its life as a tiny egg on a leaf. When the egg hatches, a caterpillar comes out. The caterpillar eats many leaves and grows quickly. Then, it builds a hard shell called a chrysalis. Inside the chrysalis, the caterpillar changes into a butterfly. Finally, it comes out, dries its wings, and flies away to look for flowers.',
    contentKurdish: 'پەپوولە ژیانا خۆ وەک هێکەکا بچویک ل سەر گەلایەکی دەستپێدکەت. دەمێ هێک دکەڤیت، کرمەک (کەتەرپیلەر) ژێ دەردکەڤیت. کرم گەلەک گەلایان دخۆت و ب زوویی مەزن دبیت. پاشان، ئەو قەفتەکا بهێز دروست دکەت کو پێ دبێژن کریسالیس. دناڤ کریسالیسێ دا، کرم دگوهۆڕیت بو پەپوولەکێ. ل دوماهیکێ، ئەو دەردکەڤیت، بالێن خۆ هشک دکەت، و دفڕیت دا ل گولان بگەڕێت.',
    level: 'A2',
    questions: [
      { id: 'q47-1', question: 'How does a butterfly start its life?', options: ['As a bird', 'As a tiny egg', 'As a worm', 'As a flower'], correctAnswer: 1 },
      { id: 'q47-2', question: 'What comes out of the egg?', options: ['A butterfly', 'A caterpillar', 'A bee', 'An ant'], correctAnswer: 1 },
      { id: 'q47-3', question: 'What does the caterpillar eat?', options: ['Fruit', 'Leaves', 'Insects', 'Bread'], correctAnswer: 1 },
      { id: 'q47-4', question: 'What is the hard shell called?', options: ['A nest', 'A chrysalis', 'A house', 'A box'], correctAnswer: 1 },
      { id: 'q47-5', question: 'What happens inside the chrysalis?', options: ['The caterpillar sleeps', 'The caterpillar changes into a butterfly', 'The caterpillar eats', 'Nothing'], correctAnswer: 1 },
      { id: 'q47-6', question: 'What does the butterfly do after coming out?', options: ['It eats leaves', 'It dries its wings and flies', 'It goes back to the egg', 'It sleeps'], correctAnswer: 1 },
      { id: 'q47-7', question: 'Does the caterpillar grow slowly?', options: ['Yes', 'No, quickly', 'It doesn\'t grow', 'Maybe'], correctAnswer: 1 },
      { id: 'q47-8', question: 'Where does the butterfly fly to?', options: ['To the moon', 'To look for flowers', 'To the ocean', 'To the desert'], correctAnswer: 1 },
      { id: 'q47-9', question: 'Is this a life cycle?', options: ['Yes', 'No', 'It is a recipe', 'It is a game'], correctAnswer: 0 },
      { id: 'q47-10', question: 'How many stages are mentioned?', options: ['Two', 'Four', 'Six', 'Eight'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-48',
    title: 'The Amazon Rainforest',
    titleKurdish: 'دارستانا بارانا یا ئەمازۆن',
    content: 'The Amazon Rainforest is the largest tropical rainforest in the world. it is located in South America and covers many countries. It is often called the "lungs of the planet" because it produces a lot of oxygen. Millions of species of plants and animals live there. However, the rainforest is in danger because of deforestation, and we must work together to save it.',
    contentKurdish: 'دارستانا بارانا یا ئەمازۆن مەزنترین دارستانا بارانا یا کێمەرەیی یە ل جیهانێ. ئەو ل ئەمریکایا باشوور هەلکەفتیە و گەلەک وەلاتان دگریتە خۆ. گەلەک جاران پێ دبێژن "سیهێن هەسارەیێ" چونکی ئەو بڕەکێ زۆر یێ ئۆکسجینێ بەرهەم دئینیت. ملیۆنان جورێن رووەک و ئاژەلان ل وێرێ دژین. بەلێ، دارستان د مەترسیێ دایە ژبەر بڕینا داران، و ئەم پێدڤیە پێکڤە کار بکەین دا وێ بپارێزین.',
    level: 'B1',
    questions: [
      { id: 'q48-1', question: 'What is the Amazon Rainforest?', options: ['A desert', 'The largest tropical rainforest', 'A mountain', 'A city'], correctAnswer: 1 },
      { id: 'q48-2', question: 'Where is it located?', options: ['Africa', 'South America', 'Asia', 'Europe'], correctAnswer: 1 },
      { id: 'q48-3', question: 'What is it often called?', options: ['The heart of the world', 'The lungs of the planet', 'The green giant', 'The rain maker'], correctAnswer: 1 },
      { id: 'q48-4', question: 'Why is it called the "lungs of the planet"?', options: ['It is shaped like a lung', 'It produces a lot of oxygen', 'It is very old', 'It is very big'], correctAnswer: 1 },
      { id: 'q48-5', question: 'How many species live there?', options: ['Hundreds', 'Millions', 'Ten', 'None'], correctAnswer: 1 },
      { id: 'q48-6', question: 'Is the rainforest in danger?', options: ['No', 'Yes, because of deforestation', 'Only a little', 'Maybe'], correctAnswer: 1 },
      { id: 'q48-7', question: 'What is deforestation?', options: ['Planting trees', 'Cutting down trees', 'Watering plants', 'Studying animals'], correctAnswer: 1 },
      { id: 'q48-8', question: 'Should we save the rainforest?', options: ['No', 'Yes, we must work together', 'It doesn\'t matter', 'Maybe'], correctAnswer: 1 },
      { id: 'q48-9', question: 'Does it cover only one country?', options: ['Yes', 'No, many countries', 'Only Brazil', 'Maybe'], correctAnswer: 1 },
      { id: 'q48-10', question: 'Is it a tropical rainforest?', options: ['Yes', 'No', 'It is a cold forest', 'Maybe'], correctAnswer: 0 }
    ]
  },
  {
    id: 'story-49',
    title: 'The First Day of School',
    titleKurdish: 'رۆژا ئێکێ یا قوتابخانێ',
    content: 'Tim was nervous about his first day of school. He put on his new backpack and walked to the bus stop. When he arrived at school, he saw many other children. His teacher, Ms. Green, was very kind and showed him his desk. Tim made a new friend named Ben, and they played together during recess. By the end of the day, Tim was excited to come back tomorrow.',
    contentKurdish: 'تیم یێ ب ترس بوو ل سەر رۆژا خۆ یا ئێکێ یا قوتابخانێ. وی جانتایێ خۆ یێ نوو یێ پشتێ دانا و چوو بو راوەستگەها پاسێ. دەمێ ئەو گەهشتیە قوتابخانێ، وی گەلەک زارۆکێن دی دیتن. مامۆستایا وی، خاتین گرین، گەلەک یا دلۆڤان بوو و مێزا وی نیشا دا. تیمی هەڤالەکێ نوو بناڤێ بێن پەیداکر، و وان پێکڤە یاری دکر د دەمێ بێهنڤەدانێ دا. ل دوماهیکا رۆژێ، تیم یێ ب پەرۆش بوو کو سوبەهی بزڤڕیتە قوتابخانێ.',
    level: 'A1',
    questions: [
      { id: 'q49-1', question: 'How did Tim feel about his first day?', options: ['Happy', 'Nervous', 'Angry', 'Bored'], correctAnswer: 1 },
      { id: 'q49-2', question: 'What did Tim put on?', options: ['A hat', 'A new backpack', 'A coat', 'Shoes'], correctAnswer: 1 },
      { id: 'q49-3', question: 'How did Tim get to school?', options: ['He walked', 'He took the bus', 'His dad drove him', 'He cycled'], correctAnswer: 1 },
      { id: 'q49-4', question: 'Who was Tim\'s teacher?', options: ['Mr. White', 'Ms. Green', 'Mrs. Blue', 'Miss Red'], correctAnswer: 1 },
      { id: 'q49-5', question: 'Was the teacher kind?', options: ['No', 'Yes, very kind', 'She was scary', 'Maybe'], correctAnswer: 1 },
      { id: 'q49-6', question: 'What did the teacher show Tim?', options: ['The door', 'His desk', 'The playground', 'The library'], correctAnswer: 1 },
      { id: 'q49-7', question: 'Who did Tim make friends with?', options: ['Sam', 'Ben', 'Leo', 'Jack'], correctAnswer: 1 },
      { id: 'q49-8', question: 'When did Tim and Ben play?', options: ['During class', 'During recess', 'After school', 'Never'], correctAnswer: 1 },
      { id: 'q49-9', question: 'How did Tim feel at the end of the day?', options: ['Sad', 'Excited to come back', 'Tired', 'Angry'], correctAnswer: 1 },
      { id: 'q49-10', question: 'Did Tim see other children?', options: ['No', 'Yes, many', 'Only one', 'None'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-50',
    title: 'The Moon and the Tides',
    titleKurdish: 'هەیڤ و هەلکێشان و داکێشان (مەد و جەزر)',
    content: 'The moon is not just a light in the sky; it also affects the Earth\'s oceans. The gravity of the moon pulls on the water, causing it to rise and fall. This is called the tides. When the water rises, it is called high tide, and when it falls, it is called low tide. Most places have two high tides and two low tides every day. This is a natural cycle of our planet.',
    contentKurdish: 'هەیڤ تەنێ رۆناهیەک نینە د ئەسمانی دا؛ ئەو هەروەسا کارتێکرنێ ل سەر دەریایێن ئەردی دکەت. کێشکرنا هەیڤێ ئاڤێ رادکێشیت، و دبیتە ئەگەر کو ئاڤ بلند ببیت و داکەڤیت. ئەڤە پێ دبێژن هەلکێشان و داکێشان (مەد و جەزر). دەمێ ئاڤ بلند دبیت، پێ دبێژن هەلکێشان، و دەمێ داکەڤیت، پێ دبێژن داکێشان. پتریا جەهان دوو هەلکێشان و دوو داکێشانێن هەین هەر روژ. ئەڤە خولەکا سروشتی یا هەسارەیا مە یە.',
    level: 'B1',
    questions: [
      { id: 'q50-1', question: 'What affects the Earth\'s oceans?', options: ['The stars', 'The moon', 'The clouds', 'The birds'], correctAnswer: 1 },
      { id: 'q50-2', question: 'What pulls on the water?', options: ['The wind', 'The gravity of the moon', 'The fish', 'The boats'], correctAnswer: 1 },
      { id: 'q50-3', question: 'What is the rising and falling of water called?', options: ['Waves', 'Tides', 'Storms', 'Rain'], correctAnswer: 1 },
      { id: 'q50-4', question: 'What is it called when the water rises?', options: ['Low tide', 'High tide', 'Big wave', 'Flood'], correctAnswer: 1 },
      { id: 'q50-5', question: 'What is it called when the water falls?', options: ['High tide', 'Low tide', 'Small wave', 'Dryness'], correctAnswer: 1 },
      { id: 'q50-6', question: 'How many high tides do most places have every day?', options: ['One', 'Two', 'Three', 'Four'], correctAnswer: 1 },
      { id: 'q50-7', question: 'Is this a natural cycle?', options: ['No', 'Yes', 'Only in summer', 'Maybe'], correctAnswer: 1 },
      { id: 'q50-8', question: 'Does the moon only provide light?', options: ['Yes', 'No, it also affects the oceans', 'It provides heat', 'Maybe'], correctAnswer: 1 },
      { id: 'q50-9', question: 'Is the moon a planet?', options: ['Yes', 'No, it is a satellite of Earth', 'It is a star', 'Maybe'], correctAnswer: 1 },
      { id: 'q50-10', question: 'Does the sun also affect tides?', options: ['No', 'Yes, but less than the moon', 'Only at night', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-51',
    title: 'The First Computer',
    titleKurdish: 'ئێکەمین کۆمپیۆتەر',
    content: 'The first electronic computer, called ENIAC, was built in 1945. It was huge and filled an entire room! It used thousands of vacuum tubes and could perform calculations much faster than humans. Today, we have computers that fit in our pockets and are millions of times more powerful. Computers have changed how we work, learn, and communicate with each other.',
    contentKurdish: 'ئێکەمین کۆمپیۆتەرێ ئەلیکترۆنی، کو پێ دگۆتن ئینیاک (ENIAC)، ل سالا ١٩٤٥ هاتبوو دروستکرن. ئەو گەلەک یێ مەزن بوو و ژوورەکا تمامی پڕ دکر! وی ب هزاران بۆریێن ڤاکۆمێ بکار دئینان و دشیا هەژماران گەلەک خێراتر ژ مرۆڤان ئەنجام بدەت. ئەڤرۆ، مە کۆمپیۆتەرێن هەین کو دناڤ بەڕیکێن مە دا جێگیر دبن و ب ملیۆنان جاران ب هێزترن. کۆمپیۆتەران شێوازێ کارکرن، خواندن، و پەیوەندیکرنا مە دگەل ئێک گوهۆڕیە.',
    level: 'B1',
    questions: [
      { id: 'q51-1', question: 'What was the name of the first electronic computer?', options: ['Apple I', 'ENIAC', 'IBM PC', 'Windows'], correctAnswer: 1 },
      { id: 'q51-2', question: 'In what year was ENIAC built?', options: ['1935', '1945', '1955', '1965'], correctAnswer: 1 },
      { id: 'q51-3', question: 'How big was the first computer?', options: ['As big as a book', 'It filled an entire room', 'As big as a desk', 'As big as a car'], correctAnswer: 1 },
      { id: 'q51-4', question: 'What did ENIAC use to work?', options: ['Microchips', 'Vacuum tubes', 'Batteries', 'Solar power'], correctAnswer: 1 },
      { id: 'q51-5', question: 'Was ENIAC faster than humans at calculations?', options: ['No', 'Yes', 'Only a little', 'Maybe'], correctAnswer: 1 },
      { id: 'q51-6', question: 'How powerful are today\'s computers compared to ENIAC?', options: ['Less powerful', 'Millions of times more powerful', 'The same', 'Maybe'], correctAnswer: 1 },
      { id: 'q51-7', question: 'Where can modern computers fit?', options: ['Only in big rooms', 'In our pockets', 'Only in offices', 'Nowhere'], correctAnswer: 1 },
      { id: 'q51-8', question: 'Have computers changed how we communicate?', options: ['No', 'Yes, a lot', 'Only a little', 'Maybe'], correctAnswer: 1 },
      { id: 'q51-9', question: 'Is ENIAC still used today?', options: ['Yes', 'No, it is in museums', 'Only in schools', 'Maybe'], correctAnswer: 1 },
      { id: 'q51-10', question: 'Is a smartphone a computer?', options: ['No', 'Yes', 'Only for games', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-52',
    title: 'The Brave Firefighter',
    titleKurdish: 'ئاگرکوژێنێ ئازا',
    content: 'Mark is a firefighter who works at the city fire station. He wears a heavy yellow suit and a red helmet to stay safe. When the alarm rings, he quickly slides down the pole and jumps into the big red fire truck. Mark uses a long hose to spray water on fires and rescue people and animals. He is a hero who helps keep our community safe every day.',
    contentKurdish: 'مارک ئاگرکوژێنەکە کو ل بنگەهێ ئاگرکوژاندنا باژێری کار دکەت. ئەو جلیەکێ زەرد یێ گران و کڵاوەکێ سور دپۆشیت دا یێ پاراستی بیت. دەمێ زەنگ لێ ددەت، ئەو ب زوویی ب ستوینێ دا دهێتە خوار و دکەڤیتە دناڤ ترومبێلا مەزن یا سور یا ئاگرکوژاندنێ دا. مارک سۆندەکا درێژ بکار دئینیت دا ئاڤێ ل سەر ئاگران بڕەشینیت و مرۆڤ و ئاژەلان رزگار بکەت. ئەو قارەمانەکە کو هاریکاریا پاراستنا جڤاکێ مە دکەت هەر روژ.',
    level: 'A2',
    questions: [
      { id: 'q52-1', question: 'Where does Mark work?', options: ['At a hospital', 'At the city fire station', 'At a school', 'At a park'], correctAnswer: 1 },
      { id: 'q52-2', question: 'What color is Mark\'s suit?', options: ['Red', 'Yellow', 'Blue', 'Green'], correctAnswer: 1 },
      { id: 'q52-3', question: 'What does Mark wear on his head?', options: ['A hat', 'A red helmet', 'A crown', 'Nothing'], correctAnswer: 1 },
      { id: 'q52-4', question: 'What does Mark do when the alarm rings?', options: ['He sleeps', 'He slides down the pole', 'He eats lunch', 'He goes home'], correctAnswer: 1 },
      { id: 'q52-5', question: 'What color is the fire truck?', options: ['Yellow', 'Red', 'White', 'Black'], correctAnswer: 1 },
      { id: 'q52-6', question: 'What does Mark use to spray water?', options: ['A bucket', 'A long hose', 'A cup', 'A bottle'], correctAnswer: 1 },
      { id: 'q52-7', question: 'Who does Mark rescue?', options: ['Only people', 'People and animals', 'Only cars', 'Nobody'], correctAnswer: 1 },
      { id: 'q52-8', question: 'Is Mark a hero?', options: ['No', 'Yes', 'He is a villain', 'Maybe'], correctAnswer: 1 },
      { id: 'q52-9', question: 'Is the firefighter\'s suit light?', options: ['Yes', 'No, it is heavy', 'It is made of paper', 'Maybe'], correctAnswer: 1 },
      { id: 'q52-10', question: 'Does Mark work alone?', options: ['Yes', 'No, with other firefighters', 'Only with his dog', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-53',
    title: 'The Life of a Frog',
    titleKurdish: 'ژیانا بوقەکێ',
    content: 'A frog starts its life as a tiny egg in the water. When the egg hatches, a tadpole comes out. The tadpole has a long tail and breathes through gills, just like a fish. As it grows, it develops legs and its tail disappears. It also develops lungs so it can breathe air. Finally, it becomes an adult frog that can live both on land and in water.',
    contentKurdish: 'بوق ژیانا خۆ وەک هێکەکا بچویک دناڤ ئاڤێ دا دەستپێدکەت. دەمێ هێک دکەڤیت، سەرەسۆتکەک (تادپۆل) ژێ دەردکەڤیت. سەرەسۆتکێ کلکەکێ درێژ یێ هەین و ب رێکا کێمێن (گێڵز) خۆ بێهنێ وەردگریت، هەر وەک ماسیەکێ. دەمێ مەزن دبیت، لنگێن وی پەیدا دبن و کلکێ وی نامینیت. هەروەسا سیهێن وی پەیدا دبن دا بشێت بێهنا هەوای وەربگریت. ل دوماهیکێ، ئەو دبیتە بوقەکا مەزن کو دشێت هەم ل سەر ئەردی و هەم دناڤ ئاڤێ دا بژیت.',
    level: 'A2',
    questions: [
      { id: 'q53-1', question: 'Where does a frog start its life?', options: ['In a tree', 'In the water', 'In the desert', 'In a nest'], correctAnswer: 1 },
      { id: 'q53-2', question: 'What is the baby frog called?', options: ['A puppy', 'A tadpole', 'A kitten', 'A chick'], correctAnswer: 1 },
      { id: 'q53-3', question: 'How does a tadpole breathe?', options: ['Through lungs', 'Through gills', 'Through its nose', 'It doesn\'t breathe'], correctAnswer: 1 },
      { id: 'q53-4', question: 'What does a tadpole have that a frog doesn\'t?', options: ['Legs', 'A long tail', 'Eyes', 'A mouth'], correctAnswer: 1 },
      { id: 'q53-5', question: 'What happens to the tail as the tadpole grows?', options: ['It gets longer', 'It disappears', 'It turns into a leg', 'It stays the same'], correctAnswer: 1 },
      { id: 'q53-6', question: 'Why does a frog need lungs?', options: ['To swim faster', 'To breathe air', 'To eat food', 'To jump high'], correctAnswer: 1 },
      { id: 'q53-7', question: 'Can an adult frog live on land?', options: ['No', 'Yes', 'Only in winter', 'Maybe'], correctAnswer: 1 },
      { id: 'q53-8', question: 'Is a frog an amphibian?', options: ['No', 'Yes', 'It is a mammal', 'It is a bird'], correctAnswer: 1 },
      { id: 'q53-9', question: 'Does a frog start as an egg?', options: ['No', 'Yes', 'It is born alive', 'Maybe'], correctAnswer: 1 },
      { id: 'q53-10', question: 'Does a tadpole look like a fish?', options: ['No', 'Yes', 'Only a little', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-54',
    title: 'The Great Pyramids',
    titleKurdish: 'ئەهرامێن مەزن',
    content: 'The Great Pyramids of Giza are ancient structures located in Egypt. They were built thousands of years ago as tombs for the Pharaohs, the kings of ancient Egypt. The pyramids are made of millions of heavy stone blocks. They are one of the Seven Wonders of the Ancient World. Even today, scientists are still studying how they were built without modern machines.',
    contentKurdish: 'ئەهرامێن مەزن یێن جیزە تەلارێن کەڤنارن و ل مسرێ هەلکەفتینە. ئەو بەری هزاران سالان هاتبوون دروستکرن وەک گۆڕ بو فیرعەونان، کو پاشایێن مسرا کەڤن بوون. ئەهرام ژ ملیۆنان بلۆکێن بەری یێن گران هاتینە دروستکرن. ئەو ئێک ژ حەفت سەیروسەمەرێن جیهانا کەڤنارن. هەتا ئەڤرۆ ژی، زانای هێشتا ل سەر دکۆلین کا چەوا هاتینە دروستکرن بێی ئامیرێن سەردەم.',
    level: 'B1',
    questions: [
      { id: 'q54-1', question: 'Where are the Great Pyramids located?', options: ['Greece', 'Egypt', 'Italy', 'Mexico'], correctAnswer: 1 },
      { id: 'q54-2', question: 'Why were the pyramids built?', options: ['As houses', 'As tombs for Pharaohs', 'As schools', 'As markets'], correctAnswer: 1 },
      { id: 'q54-3', question: 'Who were the Pharaohs?', options: ['Farmers', 'Kings of ancient Egypt', 'Scientists', 'Priests'], correctAnswer: 1 },
      { id: 'q54-4', question: 'What are the pyramids made of?', options: ['Wood', 'Heavy stone blocks', 'Brick', 'Glass'], correctAnswer: 1 },
      { id: 'q54-5', question: 'Are the pyramids one of the Seven Wonders?', options: ['No', 'Yes', 'Only in Egypt', 'Maybe'], correctAnswer: 1 },
      { id: 'q54-6', question: 'When were they built?', options: ['Last century', 'Thousands of years ago', 'In 1900', 'In 2000'], correctAnswer: 1 },
      { id: 'q54-7', question: 'Are scientists still studying them?', options: ['No', 'Yes', 'Only on weekends', 'Maybe'], correctAnswer: 1 },
      { id: 'q54-8', question: 'Did they have modern machines to build them?', options: ['Yes', 'No', 'Only a few', 'Maybe'], correctAnswer: 1 },
      { id: 'q54-9', question: 'Is Giza a place in Egypt?', options: ['No', 'Yes', 'In France', 'In India'], correctAnswer: 1 },
      { id: 'q54-10', question: 'Are the stone blocks light?', options: ['Yes', 'No, they are heavy', 'They are made of foam', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-55',
    title: 'The Little Seed',
    titleKurdish: 'تۆڤێ بچویک',
    content: 'A little seed fell on the ground. It was covered with soil and watered by the rain. Soon, a tiny green sprout came out. The sprout grew taller and stronger every day. It grew leaves and then beautiful flowers. The flowers produced more seeds, and the cycle started again. Nature is full of amazing transformations that happen right under our feet.',
    contentKurdish: 'تۆڤەکێ بچویک کەفتە سەر ئەردی. ب ئاخێ هاتە داپۆشین و ب بارانێ هاتە ئاڤدان. زوو، شینکاتیەکا کەسک یا بچویک ژێ دەرکەفت. شینکاتی هەر روژ بلندتر و ب هێزتر لێ دهات. وێ گەلا شینکرن و پاشان گولێن جوان. گولان تۆڤێن زێدەتر بەرهەم ئینان، و خول دیسا دەستپێکرەڤە. سروشت پڕە ژ گوهۆڕینێن سەیر کو درست ل بن پێیێن مە روو ددەن.',
    level: 'A1',
    questions: [
      { id: 'q55-1', question: 'Where did the little seed fall?', options: ['In the water', 'On the ground', 'On a rock', 'In a box'], correctAnswer: 1 },
      { id: 'q55-2', question: 'What covered the seed?', options: ['Leaves', 'Soil', 'Snow', 'Sand'], correctAnswer: 1 },
      { id: 'q55-3', question: 'What watered the seed?', options: ['A boy', 'The rain', 'The sun', 'The wind'], correctAnswer: 1 },
      { id: 'q55-4', question: 'What came out of the seed?', options: ['A flower', 'A tiny green sprout', 'A fruit', 'A worm'], correctAnswer: 1 },
      { id: 'q55-5', question: 'Did the sprout grow every day?', options: ['No', 'Yes, taller and stronger', 'Only on Mondays', 'Maybe'], correctAnswer: 1 },
      { id: 'q55-6', question: 'What grew after the leaves?', options: ['Fruit', 'Beautiful flowers', 'More leaves', 'Nothing'], correctAnswer: 1 },
      { id: 'q55-7', question: 'What did the flowers produce?', options: ['Honey', 'More seeds', 'Water', 'Soil'], correctAnswer: 1 },
      { id: 'q55-8', question: 'Did the cycle start again?', options: ['No', 'Yes', 'Only once', 'Maybe'], correctAnswer: 1 },
      { id: 'q55-9', question: 'Is nature amazing?', options: ['No', 'Yes', 'It is boring', 'Maybe'], correctAnswer: 1 },
      { id: 'q55-10', question: 'Does this happen under our feet?', options: ['No', 'Yes', 'Only in space', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-56',
    title: 'The First Moon Landing (Part 2)',
    titleKurdish: 'ئێکەمین نیشتن ل سەر هەیڤێ (پشکا ٢)',
    content: 'After Neil Armstrong, Buzz Aldrin also walked on the moon. They collected rocks and soil to bring back to Earth. They also left an American flag and a plaque on the moon. The third astronaut, Michael Collins, stayed in the spacecraft to make sure they could return safely. Their mission was a success, and they returned to Earth as heroes.',
    contentKurdish: 'پشتی نیل ئارمسترۆنگی، بەز ئۆلدرین ژی ل سەر هەیڤێ بپیاسە کر. وان بەرد و ئاخ کۆم کرن دا بزڤڕینن بو سەر ئەردی. وان هەروەسا ئالایەکێ ئەمریکی و تابلۆتەک ل سەر هەیڤێ هێلان. فەزانوورێ سێیێ، مایکڵ کۆلینز، دناڤ کەشتیێ دا ما دا پشتراست بیت کو ئەو دێ ب سەلامەتی زڤڕن. ئەرکێ وان یێ سەرکەفتی بوو، و ئەو وەک قارەمان زڤڕینە سەر ئەردی.',
    level: 'B1',
    questions: [
      { id: 'q56-1', question: 'Who walked on the moon after Neil Armstrong?', options: ['Michael Collins', 'Buzz Aldrin', 'Yuri Gagarin', 'Elon Musk'], correctAnswer: 1 },
      { id: 'q56-2', question: 'What did they collect on the moon?', options: ['Water', 'Rocks and soil', 'Plants', 'Gold'], correctAnswer: 1 },
      { id: 'q56-3', question: 'What did they leave on the moon?', options: ['A car', 'An American flag and a plaque', 'A book', 'A camera'], correctAnswer: 1 },
      { id: 'q56-4', question: 'Who stayed in the spacecraft?', options: ['Neil Armstrong', 'Michael Collins', 'Buzz Aldrin', 'Nobody'], correctAnswer: 1 },
      { id: 'q56-5', question: 'Why did Michael Collins stay in the spacecraft?', options: ['He was tired', 'To make sure they could return safely', 'He was scared', 'He had to cook'], correctAnswer: 1 },
      { id: 'q56-6', question: 'Was the mission a success?', options: ['No', 'Yes', 'Only a little', 'Maybe'], correctAnswer: 1 },
      { id: 'q56-7', question: 'How did they return to Earth?', options: ['As villains', 'As heroes', 'As regular people', 'They didn\'t return'], correctAnswer: 1 },
      { id: 'q56-8', question: 'How many astronauts were on the moon\'s surface?', options: ['One', 'Two', 'Three', 'None'], correctAnswer: 1 },
      { id: 'q56-9', question: 'Did they bring anything back to Earth?', options: ['No', 'Yes, rocks and soil', 'Only the flag', 'Maybe'], correctAnswer: 1 },
      { id: 'q56-10', question: 'Is Michael Collins an astronaut?', options: ['Yes', 'No', 'He is a pilot', 'Maybe'], correctAnswer: 0 }
    ]
  },
  {
    id: 'story-57',
    title: 'The Helpful Elephant',
    titleKurdish: 'فیلێ هاریکار',
    content: 'Ellie is a big elephant living in the savanna. She has a long trunk that she uses to drink water and pick up food. One day, a small bird fell out of its nest. Ellie used her trunk to gently pick up the bird and put it back in the nest. The bird\'s mother was very happy and sang a song for Ellie. Ellie smiled and continued her walk.',
    contentKurdish: 'ئێلی فیلەکا مەزنە و ل ساڤانایێ دژیت. وێ خەرتوومەکێ درێژ یێ هەین کو بکار دئینیت دا ئاڤێ ڤەخۆت و خوارنێ هەلگریت. روژەکێ، چویکەکێ بچویک ژ هێلینا خۆ کەفتە خوارێ. ئێلیێ خەرتوومێ خۆ بکار ئینا دا ب نەرمی چویکی هەلگریت و بزڤڕینیتە دناڤ هێلینێ دا. دایکا چویکی گەلەک کەیفخۆش بوو و سترانەک بو ئێلیێ گۆت. ئێلیێ کەیف کر و بەردەوام بوو ل سەر پیاسەیا خۆ.',
    level: 'A1',
    questions: [
      { id: 'q57-1', question: 'What is Ellie?', options: ['A lion', 'An elephant', 'A bird', 'A giraffe'], correctAnswer: 1 },
      { id: 'q57-2', question: 'Where does Ellie live?', options: ['In a forest', 'In the savanna', 'In a zoo', 'In a house'], correctAnswer: 1 },
      { id: 'q57-3', question: 'What does Ellie use her trunk for?', options: ['To fly', 'To drink water and pick up food', 'To sleep', 'To run'], correctAnswer: 1 },
      { id: 'q57-4', question: 'What happened to the small bird?', options: ['It flew away', 'It fell out of its nest', 'It was hungry', 'It was cold'], correctAnswer: 1 },
      { id: 'q57-5', question: 'How did Ellie help the bird?', options: ['She gave it food', 'She put it back in the nest with her trunk', 'She sang a song', 'She ignored it'], correctAnswer: 1 },
      { id: 'q57-6', question: 'Was the bird\'s mother happy?', options: ['No', 'Yes, very happy', 'She was scared', 'Maybe'], correctAnswer: 1 },
      { id: 'q57-7', question: 'What did the bird\'s mother do?', options: ['She bit Ellie', 'She sang a song for Ellie', 'She flew away', 'She cried'], correctAnswer: 1 },
      { id: 'q57-8', question: 'Did Ellie smile?', options: ['No', 'Yes', 'She cried', 'She was angry'], correctAnswer: 1 },
      { id: 'q57-9', question: 'Is an elephant\'s trunk long?', options: ['No', 'Yes', 'It is short', 'Maybe'], correctAnswer: 1 },
      { id: 'q57-10', question: 'Is the savanna a place where elephants live?', options: ['No', 'Yes', 'Only in winter', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-58',
    title: 'The Invention of the Light Bulb',
    titleKurdish: 'داهێنانا گڵۆپێ',
    content: 'Thomas Edison invented the first practical light bulb in 1879. Before the light bulb, people used candles and oil lamps to see at night. Edison tried thousands of different materials before he found the right one. His invention changed the world by allowing people to work and play safely after dark. Today, we use light bulbs in our homes, schools, and streets.',
    contentKurdish: 'تۆماس ئەدیسۆن ئێکەم گڵۆپا پراکتیکی داهێنا ل سالا ١٨٧٩. بەری گڵۆپێ، خەلکی مۆم و چرایێن نەفتێ بکار دئینان دا د شەڤێ دا ببینن. ئەدیسۆنی ب هزاران کەرەستێن جودا تاقی کرن بەری یێ درست ببینیت. داهێنانا وی جیهان گوهۆڕی ب رێکا رێدان ب خەلکی کو ب سەلامەتی کار و یاریێ بکەن پشتی تاریێ. ئەڤرۆ، ئەم گڵۆپان د مال، قوتابخانە، و جادەیێن مە دا بکار دئینین.',
    level: 'B1',
    questions: [
      { id: 'q58-1', question: 'Who invented the first practical light bulb?', options: ['Alexander Graham Bell', 'Thomas Edison', 'Albert Einstein', 'Isaac Newton'], correctAnswer: 1 },
      { id: 'q58-2', question: 'In what year was the light bulb invented?', options: ['1779', '1879', '1979', '2000'], correctAnswer: 1 },
      { id: 'q58-3', question: 'What did people use before the light bulb?', options: ['Flashlights', 'Candles and oil lamps', 'Smartphones', 'Nothing'], correctAnswer: 1 },
      { id: 'q58-4', question: 'Did Edison find the right material quickly?', options: ['Yes', 'No, he tried thousands', 'He found it on the first try', 'Maybe'], correctAnswer: 1 },
      { id: 'q58-5', question: 'How did the light bulb change the world?', options: ['It made food taste better', 'It allowed people to work/play after dark', 'It made cars faster', 'Nothing'], correctAnswer: 1 },
      { id: 'q58-6', question: 'Where do we use light bulbs today?', options: ['Only in museums', 'Homes, schools, and streets', 'Only in cars', 'Nowhere'], correctAnswer: 1 },
      { id: 'q58-7', question: 'Is Thomas Edison a famous inventor?', options: ['No', 'Yes', 'Only in the USA', 'Maybe'], correctAnswer: 1 },
      { id: 'q58-8', question: 'Was it safe to work after dark before the light bulb?', options: ['Yes', 'No, it was difficult/unsafe', 'They used electricity', 'Maybe'], correctAnswer: 1 },
      { id: 'q58-9', question: 'Is the light bulb still used today?', options: ['No', 'Yes', 'Only in winter', 'Maybe'], correctAnswer: 1 },
      { id: 'q58-10', question: 'Did Edison work alone?', options: ['Yes', 'No, he had a team', 'Only with his wife', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-59',
    title: 'The Little Star',
    titleKurdish: 'ئەستێرەیا بچویک',
    content: 'Twinkle is a little star in the night sky. She loves to shine bright and watch the world below. One night, she saw a little boy who was afraid of the dark. Twinkle shone her brightest light right into his window. The boy saw the star and felt safe. He smiled and fell asleep. Twinkle was happy to help and continued to shine all night long.',
    contentKurdish: 'توینکڵ ئەستێرەکا بچویکە د ئەسمانێ شەڤێ دا. ئەو حەز دکەت ب گەشی بدرەوشیت و تەماشەی جیهانا ل خوارێ بکەت. شەڤەکێ، وێ کورەکێ بچویک دیت کو ژ تاریێ دترسیا. توینکڵێ گەشترین رۆناهیا خۆ درست هاڤێشتە دناڤ پەنجەرەیا وی دا. کوری ئەستێرە دیت و هەست ب سەلامەتیێ کر. وی کەیف کر و نڤست. توینکڵ کەیفخۆش بوو کو هاریکاری کر و بەردەوام بوو ل سەر درەوشینێ هەمی شەڤێ.',
    level: 'A1',
    questions: [
      { id: 'q59-1', question: 'Who is Twinkle?', options: ['A moon', 'A little star', 'A sun', 'A planet'], correctAnswer: 1 },
      { id: 'q59-2', question: 'Where is Twinkle?', options: ['In the ocean', 'In the night sky', 'In a house', 'In a tree'], correctAnswer: 1 },
      { id: 'q59-3', question: 'What does Twinkle love to do?', options: ['To sleep', 'To shine bright', 'To eat', 'To run'], correctAnswer: 1 },
      { id: 'q59-4', question: 'Who was afraid of the dark?', options: ['A girl', 'A little boy', 'A cat', 'A dog'], correctAnswer: 1 },
      { id: 'q59-5', question: 'How did Twinkle help the boy?', options: ['She sang a song', 'She shone her brightest light', 'She gave him a toy', 'She talked to him'], correctAnswer: 1 },
      { id: 'q59-6', question: 'How did the boy feel when he saw the star?', options: ['Scared', 'Safe', 'Angry', 'Bored'], correctAnswer: 1 },
      { id: 'q59-7', question: 'Did the boy fall asleep?', options: ['No', 'Yes', 'He stayed awake', 'Maybe'], correctAnswer: 1 },
      { id: 'q59-8', question: 'Was Twinkle happy?', options: ['No', 'Yes', 'She was sad', 'She was angry'], correctAnswer: 1 },
      { id: 'q59-9', question: 'Did Twinkle shine all night long?', options: ['No', 'Yes', 'Only for a minute', 'Maybe'], correctAnswer: 1 },
      { id: 'q59-10', question: 'Is the name of the star Twinkle?', options: ['No', 'Yes', 'It is Starry', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-60',
    title: 'The Great Wall of China (Part 2)',
    titleKurdish: 'دیوارێ مەزن یێ چینێ (پشکا ٢)',
    content: 'The Great Wall was built by many different dynasties over hundreds of years. It has watchtowers where soldiers used to stay and look for enemies. They used smoke signals to communicate quickly over long distances. Today, the wall is a symbol of China\'s strength and history. It is a UNESCO World Heritage site and is visited by people from all over the world.',
    contentKurdish: 'دیوارێ مەزن ژ لایێ گەلەک خێزانێن پاشایەتی یێن جودا ڤە هاتبوو دروستکرن ل سەر سەدان سالان. بورجێن چاڤدێریێ یێن هەین کو سەرباز ل وێرێ دمان دا ل دوژمنان بگەڕێن. وان ئاماژەیێن دویکێ بکار دئینان دا ب زوویی دگەل ئێک باخڤن ل سەر دویراتیێن درێژ. ئەڤرۆ، دیوار سیمبۆلێ هێز و مێژوویا چینێ یە. ئەو جهەکێ کەلەپوورێ جیهانی یێ یونسکۆیە و خەلک ژ هەمی جیهانێ سەرەدانا وی دکەن.',
    level: 'B1',
    questions: [
      { id: 'q60-1', question: 'Was the Great Wall built by only one dynasty?', options: ['Yes', 'No, by many different dynasties', 'Only by farmers', 'Maybe'], correctAnswer: 1 },
      { id: 'q60-2', question: 'What are the towers on the wall called?', options: ['Houses', 'Watchtowers', 'Castles', 'Schools'], correctAnswer: 1 },
      { id: 'q60-3', question: 'Who used to stay in the watchtowers?', options: ['Farmers', 'Soldiers', 'Kings', 'Teachers'], correctAnswer: 1 },
      { id: 'q60-4', question: 'How did they communicate quickly?', options: ['By telephone', 'By smoke signals', 'By letters', 'By shouting'], correctAnswer: 1 },
      { id: 'q60-5', question: 'What is the wall a symbol of today?', options: ['Weakness', 'China\'s strength and history', 'Modern technology', 'Nothing'], correctAnswer: 1 },
      { id: 'q60-6', question: 'Is the wall a UNESCO World Heritage site?', options: ['No', 'Yes', 'Only in China', 'Maybe'], correctAnswer: 1 },
      { id: 'q60-7', question: 'Do people from all over the world visit the wall?', options: ['No', 'Yes', 'Only from Asia', 'Maybe'], correctAnswer: 1 },
      { id: 'q60-8', question: 'Did it take a long time to build the wall?', options: ['Yes, hundreds of years', 'No, only one year', 'It was built in a week', 'Maybe'], correctAnswer: 0 },
      { id: 'q60-9', question: 'Were smoke signals used for communication?', options: ['No', 'Yes', 'Only at night', 'Maybe'], correctAnswer: 1 },
      { id: 'q60-10', question: 'Is the Great Wall in Japan?', options: ['Yes', 'No, in China', 'In India', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-61',
    title: 'The Smart Crow',
    titleKurdish: 'قەلەباشێ زیرەک',
    content: 'A thirsty crow found a pitcher with a little water at the bottom. He couldn\'t reach the water with his beak. He saw some pebbles on the ground and had an idea. He picked up the pebbles one by one and dropped them into the pitcher. The water level rose until he could drink it. His patience and intelligence saved his life.',
    contentKurdish: 'قەلەباشەکێ تێهنی مەسینەک دیت کو هندەک ئاڤ ل بنی هەبوو. وی نەدشیا ب دەنووکێ خۆ بگەهیتە ئاڤێ. وی هندەک بەرک ل سەر ئەردی دیتن و هزره‌ک بو هات. وی بەرک ئێک ب ئێک هەلگرتن و هاڤێشتنە دناڤ مەسینێ دا. ئاستێ ئاڤێ بلند بوو هەتا کو شیا ڤەخۆت. بێهنفەرهی و زیرەکیا وی ژیانا وی پاراست.',
    level: 'A2',
    questions: [
      { id: 'q61-1', question: 'What was the crow looking for?', options: ['Food', 'Water', 'A nest', 'A friend'], correctAnswer: 1 },
      { id: 'q61-2', question: 'Where was the water?', options: ['In a lake', 'At the bottom of a pitcher', 'In a bottle', 'On the ground'], correctAnswer: 1 },
      { id: 'q61-3', question: 'Could the crow reach the water at first?', options: ['Yes', 'No', 'Only a little', 'Maybe'], correctAnswer: 1 },
      { id: 'q61-4', question: 'What did the crow see on the ground?', options: ['Food', 'Pebbles', 'Money', 'Leaves'], correctAnswer: 1 },
      { id: 'q61-5', question: 'What did the crow do with the pebbles?', options: ['He ate them', 'He dropped them into the pitcher', 'He threw them away', 'He built a nest'], correctAnswer: 1 },
      { id: 'q61-6', question: 'What happened to the water level?', options: ['It went down', 'It rose', 'It stayed the same', 'It disappeared'], correctAnswer: 1 },
      { id: 'q61-7', question: 'Was the crow able to drink the water?', options: ['No', 'Yes', 'Only a little', 'Maybe'], correctAnswer: 1 },
      { id: 'q61-8', question: 'What saved the crow\'s life?', options: ['His speed', 'His patience and intelligence', 'His strength', 'His friends'], correctAnswer: 1 },
      { id: 'q61-9', question: 'Is a crow a bird?', options: ['No', 'Yes', 'It is a mammal', 'Maybe'], correctAnswer: 1 },
      { id: 'q61-10', question: 'Is a pitcher a container for water?', options: ['No', 'Yes', 'It is a tool', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-62',
    title: 'The Invention of the Telephone',
    titleKurdish: 'داهێنانا تەلەفۆنێ',
    content: 'Alexander Graham Bell invented the telephone in 1876. He wanted to find a way to send voices over wires. His first successful message was to his assistant: "Mr. Watson, come here, I want to see you." This invention changed communication forever. Today, we use smartphones that can do much more than just make calls.',
    contentKurdish: 'ئەلێکساندەر گراهام بێڵ تەلەفۆن داهێنا ل سالا ١٨٧٦. وی دڤیا رێیەکێ ببینیت دا دەنگان ب رێکا تەلان ب هنێریت. ئێکەم نامەیا وی یا سەرکەفتی بو هاریکارێ وی بوو: "مستەر واتسۆن، وەرە ڤێرێ، ئەز دڤێم تە ببینم." ئەڤێ داهێنانێ پەیوەندیکردن بو هەتا هەتایێ گوهۆڕی. ئەڤرۆ، ئەم مۆبایلێن زیرەک بکار دئینین کو دشێن گەلەک کارێن زێدەتر بکەن ژ تەنێ تەلەفۆنکرنێ.',
    level: 'B1',
    questions: [
      { id: 'q62-1', question: 'Who invented the telephone?', options: ['Thomas Edison', 'Alexander Graham Bell', 'Albert Einstein', 'Steve Jobs'], correctAnswer: 1 },
      { id: 'q62-2', question: 'In what year was the telephone invented?', options: ['1776', '1876', '1976', '2000'], correctAnswer: 1 },
      { id: 'q62-3', question: 'What did Bell want to send over wires?', options: ['Electricity', 'Voices', 'Water', 'Light'], correctAnswer: 1 },
      { id: 'q62-4', question: 'Who was Bell\'s assistant?', options: ['Mr. Edison', 'Mr. Watson', 'Mr. Smith', 'Mr. Jones'], correctAnswer: 1 },
      { id: 'q62-5', question: 'What was the first message?', options: ['"Hello"', '"Mr. Watson, come here, I want to see you."', '"Goodbye"', '"Where are you?"'], correctAnswer: 1 },
      { id: 'q62-6', question: 'Did the telephone change communication?', options: ['No', 'Yes, forever', 'Only a little', 'Maybe'], correctAnswer: 1 },
      { id: 'q62-7', question: 'What do we use today instead of old telephones?', options: ['Computers', 'Smartphones', 'Radios', 'Letters'], correctAnswer: 1 },
      { id: 'q62-8', question: 'Can smartphones do more than just calls?', options: ['No', 'Yes', 'Only for games', 'Maybe'], correctAnswer: 1 },
      { id: 'q62-9', question: 'Is Alexander Graham Bell a famous inventor?', options: ['No', 'Yes', 'Only in the UK', 'Maybe'], correctAnswer: 1 },
      { id: 'q62-10', question: 'Is the telephone still important today?', options: ['No', 'Yes', 'Only in offices', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-63',
    title: 'The Busy Bee',
    titleKurdish: 'مێشا هنگڤینی یا بزاڤ',
    content: 'Buzzy is a worker bee who lives in a hive. She flies from flower to flower collecting nectar. She uses the nectar to make honey for the hive. Buzzy also helps flowers grow by carrying pollen from one flower to another. Bees are very important for our environment because they help produce the food we eat.',
    contentKurdish: 'بەزی مێشەکا هنگڤینی یا کارکەرە و دناڤ شانەکێ دا دژیت. ئەو ژ گولەکێ بو گولەکا دی دفرت و شیلەیێ (نێکتار) کۆم دکەت. ئەو شیلەیێ بکار دئینیت دا هنگڤینی بو شانێ دروست بکەت. بەزی هەروەسا هاریکاریا گولان دکەت دا مەزن ببن ب رێکا هەلگرتنا گەردێن گولان (پۆلین) ژ گولەکێ بو گولەکا دی. مێشێن هنگڤینی گەلەک د گرنگن بو ژینگه‌ها مە چونکی هاریکاریا بەرهەمهێنانا خوارنا مە دکەن.',
    level: 'A2',
    questions: [
      { id: 'q63-1', question: 'What is Buzzy?', options: ['A butterfly', 'A worker bee', 'An ant', 'A bird'], correctAnswer: 1 },
      { id: 'q63-2', question: 'Where does Buzzy live?', options: ['In a nest', 'In a hive', 'In a hole', 'In a tree'], correctAnswer: 1 },
      { id: 'q63-3', question: 'What does Buzzy collect from flowers?', options: ['Water', 'Nectar', 'Soil', 'Leaves'], correctAnswer: 1 },
      { id: 'q63-4', question: 'What does Buzzy make with nectar?', options: ['Milk', 'Honey', 'Juice', 'Bread'], correctAnswer: 1 },
      { id: 'q63-5', question: 'How does Buzzy help flowers grow?', options: ['By watering them', 'By carrying pollen', 'By eating them', 'By sleeping on them'], correctAnswer: 1 },
      { id: 'q63-6', question: 'Are bees important for the environment?', options: ['No', 'Yes, very important', 'Only in summer', 'Maybe'], correctAnswer: 1 },
      { id: 'q63-7', question: 'Do bees help produce our food?', options: ['No', 'Yes', 'Only honey', 'Maybe'], correctAnswer: 1 },
      { id: 'q63-8', question: 'Is Buzzy a worker bee?', options: ['No', 'Yes', 'She is a queen', 'Maybe'], correctAnswer: 1 },
      { id: 'q63-9', question: 'Do bees fly to many flowers?', options: ['No', 'Yes', 'Only one', 'Maybe'], correctAnswer: 1 },
      { id: 'q63-10', question: 'Is honey made in a hive?', options: ['No', 'Yes', 'In a factory', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-64',
    title: 'The Amazon Rainforest',
    titleKurdish: 'دارستانا ئامازۆن یا بارانی',
    content: 'The Amazon Rainforest is the largest rainforest in the world. It is located in South America and is home to millions of species of plants and animals. It is often called the "lungs of the planet" because it produces a lot of oxygen. However, the rainforest is in danger because of deforestation. Protecting the Amazon is important for the health of our entire planet.',
    contentKurdish: 'دارستانا ئامازۆن یا بارانی مەزنترین دارستانا بارانی یە ل جیهانێ. ئەو ل ئەمریکایا باشوور هەلکەفتیە و مالا ملیۆنان جورێن روەک و ئاژەلانە. زۆرجاران پێ دهێتە گۆتن "سیهێن هەسارەیێ" چونکی رێژەیەکا زۆرا ئۆکسجینێ بەرهەم دئینیت. لێ بەلێ، دارستان د مەترسیێ دایە ژبەر داربڕینێ. پاراستنا ئامازۆنێ یا گرنگە بو ساخلەمیا هەمی هەسارەیا مە.',
    level: 'B1',
    questions: [
      { id: 'q64-1', question: 'What is the largest rainforest in the world?', options: ['Congo', 'Amazon', 'Daintree', 'Southeast Asian'], correctAnswer: 1 },
      { id: 'q64-2', question: 'Where is the Amazon Rainforest located?', options: ['Africa', 'South America', 'Asia', 'Europe'], correctAnswer: 1 },
      { id: 'q64-3', question: 'What is it often called?', options: ['The heart of the world', 'The lungs of the planet', 'The green giant', 'The wet place'], correctAnswer: 1 },
      { id: 'q64-4', question: 'Why is it called the "lungs of the planet"?', options: ['It breathes', 'It produces a lot of oxygen', 'It is shaped like a lung', 'It is very big'], correctAnswer: 1 },
      { id: 'q64-5', question: 'Why is the rainforest in danger?', options: ['Too much rain', 'Deforestation', 'Too many animals', 'Cold weather'], correctAnswer: 1 },
      { id: 'q64-6', question: 'Is protecting the Amazon important?', options: ['No', 'Yes, for the whole planet', 'Only for Brazil', 'Maybe'], correctAnswer: 1 },
      { id: 'q64-7', question: 'Are there many species in the Amazon?', options: ['No', 'Yes, millions', 'Only a few', 'Maybe'], correctAnswer: 1 },
      { id: 'q64-8', question: 'Is the Amazon a dry place?', options: ['Yes', 'No, it is a rainforest', 'Only in summer', 'Maybe'], correctAnswer: 1 },
      { id: 'q64-9', question: 'Does the Amazon produce oxygen?', options: ['No', 'Yes', 'Only at night', 'Maybe'], correctAnswer: 1 },
      { id: 'q64-10', question: 'Is deforestation good for the environment?', options: ['Yes', 'No', 'Only for farmers', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-65',
    title: 'The Brave Little Tailor',
    titleKurdish: 'خەیاتێ بچویک یێ ئازا',
    content: 'A little tailor was working in his shop. He killed seven flies with one blow of his cloth. He was so proud that he made a belt that said "Seven at one blow." People thought he had killed seven giants! The king heard about his bravery and asked him to help the kingdom. Through his cleverness, the little tailor defeated real giants and became a hero.',
    contentKurdish: 'خەیاتەکێ بچویک د دۆکانا خۆ دا کار دکر. وی حەفت مێش ب ئێک جاران کوشتن ب پارچە پەڕۆکێ خۆ. ئەو هند یێ شانازی بوو کو قایشەک دروست کر کو ل سەر نڤێسی بوو "حەفت ب ئێک جاران". خەلکی هزر کر کو وی حەفت زەبەلاح کوشتینە! پاشای دەنگوباسێ ئازایەتیا وی بهیست و داخواز ژێ کر کو هاریکاریا شانشینی بکەت. ب رێکا زیرەکیا خۆ، خەیاتێ بچویک زەبەلاحێن راستی بەزاندن و بوو قارەمان.',
    level: 'B1',
    questions: [
      { id: 'q65-1', question: 'What was the man\'s job?', options: ['Farmer', 'Tailor', 'Baker', 'Soldier'], correctAnswer: 1 },
      { id: 'q65-2', question: 'What did he kill with one blow?', options: ['Seven giants', 'Seven flies', 'Seven birds', 'Seven mice'], correctAnswer: 1 },
      { id: 'q65-3', question: 'What did he write on his belt?', options: ['"I am the best"', '"Seven at one blow"', '"Giant killer"', '"King of tailors"'], correctAnswer: 1 },
      { id: 'q65-4', question: 'What did people think he killed?', options: ['Flies', 'Giants', 'Lions', 'Soldiers'], correctAnswer: 1 },
      { id: 'q65-5', question: 'Who heard about his bravery?', options: ['A giant', 'The king', 'A dragon', 'His mother'], correctAnswer: 1 },
      { id: 'q65-6', question: 'Did he defeat real giants?', options: ['No', 'Yes, using his cleverness', 'He ran away', 'Maybe'], correctAnswer: 1 },
      { id: 'q65-7', question: 'Did he become a hero?', options: ['No', 'Yes', 'He stayed a tailor', 'Maybe'], correctAnswer: 1 },
      { id: 'q65-8', question: 'Was the tailor a big man?', options: ['Yes', 'No, he was little', 'He was a giant', 'Maybe'], correctAnswer: 1 },
      { id: 'q65-9', question: 'Was he proud of killing the flies?', options: ['No', 'Yes', 'He was sad', 'Maybe'], correctAnswer: 1 },
      { id: 'q65-10', question: 'Is this a fairy tale?', options: ['No', 'Yes', 'It is a news story', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-66',
    title: 'The Solar System',
    titleKurdish: 'کۆما رۆژی',
    content: 'Our solar system consists of the Sun and everything that travels around it. This includes eight planets: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune. The Sun is a star and is at the center of the system. Earth is the third planet from the Sun and is the only one known to have life. Each planet is unique and has its own characteristics.',
    contentKurdish: 'کۆما مە یا رۆژی پێک دهێت ژ رۆژێ و هەر تشتەکێ کو ل دۆر وێ دزڤڕیت. ئەڤە هەشت هەسارەیان ب خۆڤە دگریت: عەتارد، زوهرە، ئەرد، مەریخ، موشتەری، زوحەل، ئورانۆس، و نیپتۆن. رۆژ ئەستێرەیەکە و ل سەنتەرێ کۆمێ یە. ئەرد هەسارەیا سێیێ یە ژ رۆژێ و تاکە هەسارەیە کو ژیان ل سەر دهێتە زانین. هەر هەسارەیەک یا تایبەتە و تایبەتمەندیێن خۆ یێن هەین.',
    level: 'A2',
    questions: [
      { id: 'q66-1', question: 'What is at the center of our solar system?', options: ['Earth', 'The Sun', 'Jupiter', 'The Moon'], correctAnswer: 1 },
      { id: 'q66-2', question: 'How many planets are in our solar system?', options: ['Seven', 'Eight', 'Nine', 'Ten'], correctAnswer: 1 },
      { id: 'q66-3', question: 'What is the Sun?', options: ['A planet', 'A star', 'A moon', 'A comet'], correctAnswer: 1 },
      { id: 'q66-4', question: 'Which planet is the third from the Sun?', options: ['Mars', 'Earth', 'Venus', 'Mercury'], correctAnswer: 1 },
      { id: 'q66-5', question: 'Is Earth the only planet known to have life?', options: ['No', 'Yes', 'Mars has life too', 'Maybe'], correctAnswer: 1 },
      { id: 'q66-6', question: 'Is Jupiter a planet?', options: ['No', 'Yes', 'It is a star', 'Maybe'], correctAnswer: 1 },
      { id: 'q66-7', question: 'Is Mercury close to the Sun?', options: ['No', 'Yes, it is the first', 'It is the last', 'Maybe'], correctAnswer: 1 },
      { id: 'q66-8', question: 'Are all planets the same?', options: ['Yes', 'No, each is unique', 'Only Earth and Mars', 'Maybe'], correctAnswer: 1 },
      { id: 'q66-9', question: 'Is Saturn known for its rings?', options: ['No', 'Yes', 'Only in winter', 'Maybe'], correctAnswer: 1 },
      { id: 'q66-10', question: 'Is Pluto still considered a major planet?', options: ['Yes', 'No, it is a dwarf planet', 'It is a moon', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-67',
    title: 'The Invention of the Airplane',
    titleKurdish: 'داهێنانا فرۆکێ',
    content: 'Orville and Wilbur Wright, known as the Wright brothers, invented the first successful airplane. Their first flight was in 1903 in Kitty Hawk, North Carolina. The flight only lasted 12 seconds and covered 120 feet, but it changed the world. Today, airplanes can fly across oceans and carry hundreds of people at a time. Travel has become much faster and easier.',
    contentKurdish: 'ئۆرڤێڵ و ویلبەر رایت، کو ب برایێن رایت دهێنە نیاسین، ئێکەم فرۆکا سەرکەفتی داهێنا. ئێکەم فڕینا وان ل سالا ١٩٠٣ بوو ل کیتی هۆک، کارۆلینایا باکوور. فڕینێ تەنێ ١٢ چرکە کێشا و ١٢٠ پێیان بڕین، لێ وێ جیهان گوهۆڕی. ئەڤرۆ، فرۆکە دشێن ل سەر ئۆقیانووسان بفرن و ب سەدان مرۆڤان ب ئێک جاران هەلگرن. گەشتکرن گەلەک خێراتر و ب ساناهیتر لێ هاتیە.',
    level: 'B1',
    questions: [
      { id: 'q67-1', question: 'Who invented the first successful airplane?', options: ['The Smith brothers', 'The Wright brothers', 'The Jones brothers', 'The Bell brothers'], correctAnswer: 1 },
      { id: 'q67-2', question: 'In what year was the first flight?', options: ['1803', '1903', '1923', '1953'], correctAnswer: 1 },
      { id: 'q67-3', question: 'Where did the first flight take place?', options: ['New York', 'Kitty Hawk, North Carolina', 'London', 'Paris'], correctAnswer: 1 },
      { id: 'q67-4', question: 'How long did the first flight last?', options: ['12 minutes', '12 seconds', '1 hour', '12 days'], correctAnswer: 1 },
      { id: 'q67-5', question: 'How far did the first flight travel?', options: ['120 miles', '120 feet', '120 kilometers', '120 inches'], correctAnswer: 1 },
      { id: 'q67-6', question: 'Did the airplane change the world?', options: ['No', 'Yes', 'Only a little', 'Maybe'], correctAnswer: 1 },
      { id: 'q67-7', question: 'Can modern airplanes fly across oceans?', options: ['No', 'Yes', 'Only small ones', 'Maybe'], correctAnswer: 1 },
      { id: 'q67-8', question: 'Is travel faster today because of airplanes?', options: ['No', 'Yes', 'It is slower', 'Maybe'], correctAnswer: 1 },
      { id: 'q67-9', question: 'Were there two Wright brothers?', options: ['No', 'Yes', 'There were three', 'Maybe'], correctAnswer: 1 },
      { id: 'q67-10', question: 'Was the first flight very long?', options: ['Yes', 'No, it was short', 'It was medium', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-68',
    title: 'The Life of a Butterfly',
    titleKurdish: 'ژیانا پەپوولەکێ',
    content: 'A butterfly starts its life as a tiny egg on a leaf. When the egg hatches, a caterpillar comes out. The caterpillar eats many leaves and grows very quickly. Then, it forms a hard shell called a chrysalis. Inside the chrysalis, amazing changes happen. Finally, the shell opens, and a beautiful butterfly comes out. It dries its wings and flies away.',
    contentKurdish: 'پەپوولە ژیانا خۆ وەک هێکەکا بچویک ل سەر گەلەکێ دەستپێدکەت. دەمێ هێک دکەڤیت، کرمەک (کەتەرپیلەر) ژێ دەردکەڤیت. کرم گەلەک گەلان دخۆت و گەلەک ب زوویی مەزن دبیت. پاشان، ئەو قەفتەکا رەق دروست دکەت کو پێ دهێتە گۆتن کریسالیس (Chrysalis). دناڤ کریسالیسێ دا، گوهۆڕینێن سەیر روو ددەن. ل دوماهیکێ، قەفت ڤەدبیت، و پەپوولەکا جوان ژێ دەردکەڤیت. ئەو بالێن خۆ هشک دکەت و دفریت.',
    level: 'A2',
    questions: [
      { id: 'q68-1', question: 'Where does a butterfly start its life?', options: ['In the water', 'As an egg on a leaf', 'In a nest', 'In the ground'], correctAnswer: 1 },
      { id: 'q68-2', question: 'What comes out of the egg?', options: ['A bird', 'A caterpillar', 'A bee', 'A fly'], correctAnswer: 1 },
      { id: 'q68-3', question: 'What does the caterpillar eat?', options: ['Fruit', 'Leaves', 'Insects', 'Flowers'], correctAnswer: 1 },
      { id: 'q68-4', question: 'What is the hard shell called?', options: ['A house', 'A chrysalis', 'A box', 'A nest'], correctAnswer: 1 },
      { id: 'q68-5', question: 'What happens inside the chrysalis?', options: ['The caterpillar sleeps', 'Amazing changes happen', 'Nothing', 'It eats more'], correctAnswer: 1 },
      { id: 'q68-6', question: 'What comes out of the chrysalis?', options: ['A worm', 'A beautiful butterfly', 'A moth', 'A bird'], correctAnswer: 1 },
      { id: 'q68-7', question: 'What does the butterfly do before flying?', options: ['It eats', 'It dries its wings', 'It sleeps', 'It sings'], correctAnswer: 1 },
      { id: 'q68-8', question: 'Does a caterpillar grow quickly?', options: ['No', 'Yes', 'Only in winter', 'Maybe'], correctAnswer: 1 },
      { id: 'q68-9', question: 'Is a butterfly an insect?', options: ['No', 'Yes', 'It is a bird', 'Maybe'], correctAnswer: 1 },
      { id: 'q68-10', question: 'Does a butterfly have wings?', options: ['No', 'Yes', 'Only some', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-69',
    title: 'The Great Barrier Reef',
    titleKurdish: 'کۆمەبەردێن مەزن یێن مەرجانی',
    content: 'The Great Barrier Reef is the world\'s largest coral reef system. It is located in the Coral Sea, off the coast of Australia. It is so large that it can be seen from outer space! The reef is home to thousands of species of fish, turtles, and sharks. It is a beautiful and important part of the ocean, but it is threatened by climate change and pollution.',
    contentKurdish: 'کۆمەبەردێن مەزن یێن مەرجانی (Great Barrier Reef) مەزنترین سیستەمێ کۆمەبەردێن مەرجانی یە ل جیهانێ. ئەو ل دەریایا مەرجانی هەلکەفتیە، ل نێزیک کەنارێن ئوسترالیا. ئەو هند یا مەزنە کو دشێت ژ بۆشاییا ئەسمانی بهێتە دیتن! کۆمەبەرد مالا هزاران جورێن ماسی، کیسەل، و کوسەجانە. ئەو پشکەکا جوان و گرنگە ژ ئۆقیانووسی، لێ ب ئەگەرێ گوهۆڕینا سەقای و پیسبوونی د مەترسیێ دایە.',
    level: 'B1',
    questions: [
      { id: 'q69-1', question: 'What is the Great Barrier Reef?', options: ['A mountain', 'The world\'s largest coral reef system', 'A forest', 'An island'], correctAnswer: 1 },
      { id: 'q69-2', question: 'Where is it located?', options: ['Off the coast of Africa', 'Off the coast of Australia', 'In the Atlantic Ocean', 'In the Mediterranean'], correctAnswer: 1 },
      { id: 'q69-3', question: 'Can it be seen from outer space?', options: ['No', 'Yes', 'Only with a telescope', 'Maybe'], correctAnswer: 1 },
      { id: 'q69-4', question: 'What animals live in the reef?', options: ['Lions and tigers', 'Fish, turtles, and sharks', 'Bears and wolves', 'Elephants'], correctAnswer: 1 },
      { id: 'q69-5', question: 'Is the reef threatened?', options: ['No', 'Yes, by climate change and pollution', 'Only by fish', 'Maybe'], correctAnswer: 1 },
      { id: 'q69-6', question: 'Is the reef in the Coral Sea?', options: ['No', 'Yes', 'In the Red Sea', 'Maybe'], correctAnswer: 1 },
      { id: 'q69-7', question: 'Is it a small system?', options: ['Yes', 'No, it is the largest', 'It is medium', 'Maybe'], correctAnswer: 1 },
      { id: 'q69-8', question: 'Are there sharks in the reef?', options: ['No', 'Yes', 'Only in winter', 'Maybe'], correctAnswer: 1 },
      { id: 'q69-9', question: 'Is it important for the ocean?', options: ['No', 'Yes', 'Only for Australia', 'Maybe'], correctAnswer: 1 },
      { id: 'q69-10', question: 'Is Australia a country?', options: ['No', 'Yes', 'It is a city', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-70',
    title: 'The Invention of the Internet',
    titleKurdish: 'داهێنانا ئینتەرنێتێ',
    content: 'The internet was developed over many years by many different scientists and engineers. It started as a way for researchers to share information between computers. In the 1990s, the World Wide Web was created, making the internet easy for everyone to use. Today, the internet connects billions of people and has changed almost every part of our lives.',
    contentKurdish: 'ئینتەرنێت ل سەر گەلەک سالان ژ لایێ گەلەک زانا و ئەندازیارێن جودا ڤە هاتە گەشەپێدان. ئەو دەستپێکر وەک رێیەک بو ڤەکۆلەران دا پێزانینان دناڤبەرا کۆمپیۆتەران دا بەلاڤ بکەن. ل سالێن ١٩٩٠دا، تۆرەیا جیهانی (World Wide Web) هاتە دروستکرن، کو ئینتەرنێت بو هەمی کەسان ب ساناهی کر. ئەڤرۆ، ئینتەرنێت ب ملیاران کەسان ب ئێک ڤە گرێدەت و نێزیک هەمی پشکێن ژیانا مە گوهۆڕینە.',
    level: 'B1',
    questions: [
      { id: 'q70-1', question: 'Was the internet invented by only one person?', options: ['Yes', 'No, by many scientists and engineers', 'Only by Bill Gates', 'Maybe'], correctAnswer: 1 },
      { id: 'q70-2', question: 'How did the internet start?', options: ['As a game', 'As a way to share information between computers', 'As a shopping site', 'As a movie'], correctAnswer: 1 },
      { id: 'q70-3', question: 'When was the World Wide Web created?', options: ['1970s', '1980s', '1990s', '2000s'], correctAnswer: 2 },
      { id: 'q70-4', question: 'Did the World Wide Web make the internet easier to use?', options: ['No', 'Yes', 'Only for scientists', 'Maybe'], correctAnswer: 1 },
      { id: 'q70-5', question: 'How many people does the internet connect today?', options: ['Millions', 'Billions', 'Thousands', 'Hundreds'], correctAnswer: 1 },
      { id: 'q70-6', question: 'Has the internet changed our lives?', options: ['No', 'Yes, almost every part', 'Only a little', 'Maybe'], correctAnswer: 1 },
      { id: 'q70-7', question: 'Is the internet still growing?', options: ['No', 'Yes', 'It is shrinking', 'Maybe'], correctAnswer: 1 },
      { id: 'q70-8', question: 'Can we use the internet on smartphones?', options: ['No', 'Yes', 'Only on computers', 'Maybe'], correctAnswer: 1 },
      { id: 'q70-9', question: 'Is the internet important for education?', options: ['No', 'Yes', 'Only for games', 'Maybe'], correctAnswer: 1 },
      { id: 'q70-10', question: 'Is "WWW" short for World Wide Web?', options: ['No', 'Yes', 'It is a secret code', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-71',
    title: 'The First Automobile',
    titleKurdish: 'ئێکەمین ترومبێل',
    content: 'Karl Benz is credited with inventing the first practical automobile in 1885. It was a three-wheeled vehicle powered by an internal combustion engine. Before cars, people used horses and carriages to travel. The first cars were very slow and noisy, but they changed transportation forever. Today, we have millions of cars that are fast, safe, and comfortable.',
    contentKurdish: 'کارڵ بێنز ب داهێنەرێ ئێکەمین ترومبێلا پراکتیکی دهێتە نیاسین ل سالا ١٨٨٥. ئەو گالیسکەکا سێ-تایە بوو کو ب بزوێنەرەکێ سۆتەنی یێ ناڤخۆیی کار دکر. بەری ترومبێلان، خەلکی ئەسپ و گالیسکە بکار دئینان دا گەشت بکەن. ئێکەمین ترومبێل گەلەک خاڤ و ب دەنگ بوون، لێ وان ڤەگوهاستن بو هەتا هەتایێ گوهۆڕی. ئەڤرۆ، مە ملیۆنان ترومبێلێن هەین کو خێرا، سەلامەت، و ئارامن.',
    level: 'B1',
    questions: [
      { id: 'q71-1', question: 'Who invented the first practical automobile?', options: ['Henry Ford', 'Karl Benz', 'Elon Musk', 'Thomas Edison'], correctAnswer: 1 },
      { id: 'q71-2', question: 'In what year was the first car invented?', options: ['1785', '1885', '1985', '2000'], correctAnswer: 1 },
      { id: 'q71-3', question: 'How many wheels did the first car have?', options: ['Two', 'Three', 'Four', 'Six'], correctAnswer: 1 },
      { id: 'q71-4', question: 'What did people use before cars?', options: ['Bicycles', 'Horses and carriages', 'Airplanes', 'Trains'], correctAnswer: 1 },
      { id: 'q71-5', question: 'Were the first cars fast?', options: ['Yes', 'No, they were very slow', 'They were medium', 'Maybe'], correctAnswer: 1 },
      { id: 'q71-6', question: 'Did cars change transportation?', options: ['No', 'Yes, forever', 'Only a little', 'Maybe'], correctAnswer: 1 },
      { id: 'q71-7', question: 'Are modern cars comfortable?', options: ['No', 'Yes', 'Only some', 'Maybe'], correctAnswer: 1 },
      { id: 'q71-8', question: 'Was the first car noisy?', options: ['No', 'Yes', 'It was silent', 'Maybe'], correctAnswer: 1 },
      { id: 'q71-9', question: 'Is Karl Benz a famous inventor?', options: ['No', 'Yes', 'Only in Germany', 'Maybe'], correctAnswer: 1 },
      { id: 'q71-10', question: 'Do we have millions of cars today?', options: ['No', 'Yes', 'Only a few', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-72',
    title: 'The Life of a Penguin',
    titleKurdish: 'ژیانا پەنگوینەکی',
    content: 'Penguins are flightless birds that live in the Southern Hemisphere, especially in Antarctica. They are excellent swimmers and spend half of their lives in the ocean. They have black and white feathers that help them stay safe from predators. Penguins live in large groups called colonies and work together to stay warm in the cold weather.',
    contentKurdish: 'پەنگوین بالندەنە کو نافڕن و ل نیڤەکۆما باشوور دژین، ب تایبەتی ل جەمسەرێ باشوور. ئەو مەلەڤانێن نایابن و نیڤەکا ژیانا خۆ دناڤ ئۆقیانووسی دا دەرباز دکەن. پەڕێن وان یێن رەش و سپی هاریکاریا وان دکەن دا ژ نێچیرڤانان یێ پاراستی بن. پەنگوین د کۆمێن مەزن دا دژین کو پێ دهێتە گۆتن کۆلۆنی و پێکڤە کار دکەن دا د سەقایێ سار دا یێ گەرم بن.',
    level: 'A2',
    questions: [
      { id: 'q72-1', question: 'Can penguins fly?', options: ['Yes', 'No, they are flightless', 'Only in winter', 'Maybe'], correctAnswer: 1 },
      { id: 'q72-2', question: 'Where do most penguins live?', options: ['In the desert', 'In the Southern Hemisphere (Antarctica)', 'In the jungle', 'In Europe'], correctAnswer: 1 },
      { id: 'q72-3', question: 'Are penguins good swimmers?', options: ['No', 'Yes, excellent', 'Only a little', 'Maybe'], correctAnswer: 1 },
      { id: 'q72-4', question: 'What color are a penguin\'s feathers?', options: ['Red and blue', 'Black and white', 'Green and yellow', 'Brown'], correctAnswer: 1 },
      { id: 'q72-5', question: 'What is a large group of penguins called?', options: ['A pack', 'A colony', 'A flock', 'A school'], correctAnswer: 1 },
      { id: 'q72-6', question: 'Why do penguins stay in groups?', options: ['To play games', 'To stay warm', 'To find food', 'To fight'], correctAnswer: 1 },
      { id: 'q72-7', question: 'Do penguins spend time in the ocean?', options: ['No', 'Yes, half of their lives', 'Only on weekends', 'Maybe'], correctAnswer: 1 },
      { id: 'q72-8', question: 'Is Antarctica a cold place?', options: ['No', 'Yes, very cold', 'It is hot', 'Maybe'], correctAnswer: 1 },
      { id: 'q72-9', question: 'Are penguins mammals?', options: ['Yes', 'No, they are birds', 'They are fish', 'Maybe'], correctAnswer: 1 },
      { id: 'q72-10', question: 'Do their colors help them stay safe?', options: ['No', 'Yes', 'Only for beauty', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-73',
    title: 'The Invention of the Microscope',
    titleKurdish: 'داهێنانا میکرۆسکۆپێ',
    content: 'The first microscope was invented in the late 1500s. It allowed scientists to see things that are too small for the human eye to see. This led to the discovery of cells, bacteria, and viruses. Microscopes have been essential for medical research and the development of medicines. Today, we have powerful electron microscopes that can see even smaller details.',
    contentKurdish: 'ئێکەمین میکرۆسکۆپ ل دوماهیا سالێن ١٥٠٠دا هاتە داهێنان. وێ رێ ب زانایان دا کو تشتێن هند بچویک ببینن کو چاڤێ مرۆڤی نەشێت ببینیت. ئەڤێ چەندێ رێ خۆش کر بو دیتنا خانە، بەکتریا، و ڤایرۆسان. میکرۆسکۆپ گەلەک د گرنگ بووینە بو ڤەکۆلینێن پزیشکی و گەشەپێدانا دەرمانان. ئەڤرۆ، مە میکرۆسکۆپێن ئەلیکترۆنی یێن ب هێز هەین کو دشێن هویرکاریێن هێشتا بچویکتر ببینن.',
    level: 'B1',
    questions: [
      { id: 'q73-1', question: 'When was the first microscope invented?', options: ['Late 1500s', 'Late 1800s', 'Late 1900s', '2000s'], correctAnswer: 0 },
      { id: 'q73-2', question: 'What does a microscope allow us to see?', options: ['Stars', 'Things too small for the human eye', 'Mountains', 'The ocean floor'], correctAnswer: 1 },
      { id: 'q73-3', question: 'What was discovered using the microscope?', options: ['Planets', 'Cells, bacteria, and viruses', 'New continents', 'Dinosaurs'], correctAnswer: 1 },
      { id: 'q73-4', question: 'Is the microscope important for medicine?', options: ['No', 'Yes, essential', 'Only for eyes', 'Maybe'], correctAnswer: 1 },
      { id: 'q73-5', question: 'What kind of microscopes do we have today?', options: ['Only simple ones', 'Powerful electron microscopes', 'None', 'Maybe'], correctAnswer: 1 },
      { id: 'q73-6', question: 'Can we see cells with our eyes alone?', options: ['Yes', 'No', 'Only if they are big', 'Maybe'], correctAnswer: 1 },
      { id: 'q73-7', question: 'Did the microscope help develop medicines?', options: ['No', 'Yes', 'Only for colds', 'Maybe'], correctAnswer: 1 },
      { id: 'q73-8', question: 'Is a microscope a scientific tool?', options: ['No', 'Yes', 'It is a toy', 'Maybe'], correctAnswer: 1 },
      { id: 'q73-9', question: 'Are electron microscopes more powerful than early ones?', options: ['No', 'Yes, much more', 'They are the same', 'Maybe'], correctAnswer: 1 },
      { id: 'q73-10', question: 'Is a virus smaller than a cell?', options: ['No', 'Yes', 'They are the same size', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-74',
    title: 'The Statue of Liberty',
    titleKurdish: 'پەیکەرێ ئازادیێ',
    content: 'The Statue of Liberty is a famous monument in New York City. It was a gift from France to the United States to celebrate friendship and freedom. The statue is made of copper and has turned green over time. It holds a torch in one hand and a tablet in the other. Millions of people visit the statue every year as a symbol of hope and democracy.',
    contentKurdish: 'پەیکەرێ ئازادیێ مۆنۆمێنتەکێ ناڤدارە ل باژێرێ نیویۆرک. ئەو دیاریەک بوو ژ فەرەنسا بو ویلایەتێن یەکگرتی دا پیرۆزباهیا هەڤالینی و ئازادیێ بکەن. پەیکەر ژ مسێ هاتیە دروستکرن و ب تێپەربوونا دەمی رەنگێ وی بوویە کەسک. ئەو مەشخەلەک د دەستەکێ دا و تابلۆتەک د دەستێ دی دا هەلگرتیە. ملیۆنان کەس هەر سال سەرەدانا پەیکەری دکەن وەک سیمبۆلێ هیڤی و دیموکراسیێ.',
    level: 'A2',
    questions: [
      { id: 'q74-1', question: 'Where is the Statue of Liberty located?', options: ['Paris', 'New York City', 'London', 'Washington D.C.'], correctAnswer: 1 },
      { id: 'q74-2', question: 'Which country gave the statue as a gift?', options: ['Germany', 'France', 'Italy', 'Spain'], correctAnswer: 1 },
      { id: 'q74-3', question: 'What is the statue made of?', options: ['Gold', 'Copper', 'Silver', 'Stone'], correctAnswer: 1 },
      { id: 'q74-4', question: 'Why did the statue turn green?', options: ['It was painted', 'Because of copper aging over time', 'It was always green', 'Maybe'], correctAnswer: 1 },
      { id: 'q74-5', question: 'What does the statue hold in its hands?', options: ['A sword and a shield', 'A torch and a tablet', 'A book and a pen', 'Nothing'], correctAnswer: 1 },
      { id: 'q74-6', question: 'What is the statue a symbol of?', options: ['War', 'Hope and democracy', 'Wealth', 'Power'], correctAnswer: 1 },
      { id: 'q74-7', question: 'Do many people visit the statue?', options: ['No', 'Yes, millions', 'Only a few', 'Maybe'], correctAnswer: 1 },
      { id: 'q74-8', question: 'Is the statue in the USA?', options: ['No', 'Yes', 'In Canada', 'Maybe'], correctAnswer: 1 },
      { id: 'q74-9', question: 'Was it a gift to celebrate friendship?', options: ['No', 'Yes', 'Only for money', 'Maybe'], correctAnswer: 1 },
      { id: 'q74-10', question: 'Is the Statue of Liberty small?', options: ['Yes', 'No, it is very large', 'It is medium', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-75',
    title: 'The Invention of the Printing Press',
    titleKurdish: 'داهێنانا ئامیرێ چاپکرنێ',
    content: 'Johannes Gutenberg invented the printing press in the 1440s. Before this, books were copied by hand, which took a long time and was very expensive. The printing press allowed books to be produced quickly and cheaply. This led to a massive increase in literacy and the spread of knowledge. It is considered one of the most important inventions in history.',
    contentKurdish: 'یۆهانێس گۆتنبێرگ ئامیرێ چاپکرنێ داهێنا ل سالێن ١٤٤٠دا. بەری ڤێ، پەرتووک ب دەستی دهاتنە نڤێسین، کو دەمەکێ درێژ دکێشا و گەلەک گران بوون. ئامیرێ چاپکرنێ رێ دا کو پەرتووک ب زوویی و ئەرزانی بهێنە بەرهەمهێنان. ئەڤێ چەندێ رێ خۆش کر بو زێدەبوونا خواندەواریێ و بەلاڤبوونا زانست و زانیاریان. ئەو وەک ئێک ژ گرنگترین داهێنانێن مێژوویێ دهێتە هەژمارتن.',
    level: 'B1',
    questions: [
      { id: 'q75-1', question: 'Who invented the printing press?', options: ['Leonardo da Vinci', 'Johannes Gutenberg', 'Isaac Newton', 'Thomas Edison'], correctAnswer: 1 },
      { id: 'q75-2', question: 'When was the printing press invented?', options: ['1240s', '1440s', '1640s', '1840s'], correctAnswer: 1 },
      { id: 'q75-3', question: 'How were books made before the printing press?', options: ['By machines', 'Copied by hand', 'They didn\'t exist', 'By computers'], correctAnswer: 1 },
      { id: 'q75-4', question: 'Did the printing press make books cheaper?', options: ['No', 'Yes', 'Only for kings', 'Maybe'], correctAnswer: 1 },
      { id: 'q75-5', question: 'What was a result of the printing press?', options: ['Less reading', 'Increase in literacy and spread of knowledge', 'More wars', 'Nothing'], correctAnswer: 1 },
      { id: 'q75-6', question: 'Is it considered an important invention?', options: ['No', 'Yes, one of the most important', 'Only in Europe', 'Maybe'], correctAnswer: 1 },
      { id: 'q75-7', question: 'Could books be produced quickly with the press?', options: ['No', 'Yes', 'Only small books', 'Maybe'], correctAnswer: 1 },
      { id: 'q75-8', question: 'Was copying books by hand expensive?', options: ['No', 'Yes', 'It was free', 'Maybe'], correctAnswer: 1 },
      { id: 'q75-9', question: 'Is Johannes Gutenberg famous?', options: ['No', 'Yes', 'Only in Germany', 'Maybe'], correctAnswer: 1 },
      { id: 'q75-10', question: 'Do we still use printing today?', options: ['No', 'Yes, but with modern machines', 'Only for newspapers', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-76',
    title: 'The Life of a Dolphin',
    titleKurdish: 'ژیانا دۆلفینەکی',
    content: 'Dolphins are highly intelligent marine mammals. They live in groups called pods and communicate using a variety of sounds and whistles. Dolphins are known for their playful behavior and their ability to jump high out of the water. They use echolocation to find food and navigate in the ocean. They are very social animals and often help each other.',
    contentKurdish: 'دۆلفین شیردەرێن دەریایی یێن گەلەک زیرەکن. ئەو د کۆمێن ب ناڤێ (پۆدز) دا دژین و ب رێکا دەنگ و فیکێن جودا پەیوەندیێ دگەل ئێک دکەن. دۆلفین ب رەفتارێن خۆ یێن یاریپێکەر و شیانا خۆ یا بازدانا بلند ژ ئاڤێ دهێنە نیاسین. ئەو (ئیکۆلۆکەیشن) بکار دئینن دا خوارنێ ببینن و دناڤ ئۆقیانووسی دا رێکا خۆ بدۆزن. ئەو ئاژەلێن گەلەک جڤاکینە و زۆرجاران هاریکاریا ئێک دکەن.',
    level: 'A2',
    questions: [
      { id: 'q76-1', question: 'What are dolphins?', options: ['Fish', 'Highly intelligent marine mammals', 'Birds', 'Reptiles'], correctAnswer: 1 },
      { id: 'q76-2', question: 'What is a group of dolphins called?', options: ['A pack', 'A pod', 'A school', 'A flock'], correctAnswer: 1 },
      { id: 'q76-3', question: 'How do dolphins communicate?', options: ['By writing', 'Using sounds and whistles', 'By dancing', 'They don\'t communicate'], correctAnswer: 1 },
      { id: 'q76-4', question: 'Are dolphins playful?', options: ['No', 'Yes', 'Only when hungry', 'Maybe'], correctAnswer: 1 },
      { id: 'q76-5', question: 'What do dolphins use to find food?', options: ['Eyes only', 'Echolocation', 'Their hands', 'Smell only'], correctAnswer: 1 },
      { id: 'q76-6', question: 'Are dolphins social animals?', options: ['No', 'Yes, very social', 'They like to be alone', 'Maybe'], correctAnswer: 1 },
      { id: 'q76-7', question: 'Can dolphins jump out of the water?', options: ['No', 'Yes', 'Only small ones', 'Maybe'], correctAnswer: 1 },
      { id: 'q76-8', question: 'Do dolphins help each other?', options: ['No', 'Yes', 'Only in winter', 'Maybe'], correctAnswer: 1 },
      { id: 'q76-9', question: 'Are dolphins intelligent?', options: ['No', 'Yes, highly intelligent', 'They are stupid', 'Maybe'], correctAnswer: 1 },
      { id: 'q76-10', question: 'Do dolphins live in the ocean?', options: ['No', 'Yes', 'In rivers only', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-77',
    title: 'The Invention of the Steam Engine',
    titleKurdish: 'داهێنانا بزوێنەرێ هەلمێ',
    content: 'James Watt improved the steam engine in the late 1700s. This invention was a key part of the Industrial Revolution. It allowed factories to produce goods much faster and led to the development of steam-powered trains and ships. The steam engine changed how people lived and worked, moving many from farms to cities.',
    contentKurdish: 'جەیمس وات بزوێنەرێ هەلمێ پێشخست ل دوماهیا سالێن ١٧٠٠دا. ئەڤ داهێنانە پشکەکا سەرەکی بوو ژ شۆرەشا پیشەسازی. وێ رێ دا کارگەهان کو کەلوپەلان گەلەک خێراتر بەرهەم بینن و رێ خۆش کر بو گەشەپێدانا شەمەندەفەر و کەشتیێن ب هەلمێ کار دکەن. بزوێنەرێ هەلمێ شێوازێ ژیان و کارکرنا خەلکی گوهۆڕی، و گەلەک کەس ژ کێلگەهان بو باژێران ڤەگوهاستن.',
    level: 'B1',
    questions: [
      { id: 'q75-1', question: 'Who improved the steam engine?', options: ['Thomas Edison', 'James Watt', 'Isaac Newton', 'Albert Einstein'], correctAnswer: 1 },
      { id: 'q75-2', question: 'When was the steam engine improved?', options: ['Late 1500s', 'Late 1700s', 'Late 1900s', '2000s'], correctAnswer: 1 },
      { id: 'q75-3', question: 'What revolution was the steam engine part of?', options: ['French Revolution', 'Industrial Revolution', 'American Revolution', 'Digital Revolution'], correctAnswer: 1 },
      { id: 'q75-4', question: 'What did the steam engine allow factories to do?', options: ['Close down', 'Produce goods much faster', 'Use less water', 'Nothing'], correctAnswer: 1 },
      { id: 'q75-5', question: 'What transport used the steam engine?', options: ['Airplanes', 'Trains and ships', 'Bicycles', 'Cars'], correctAnswer: 1 },
      { id: 'q75-6', question: 'Did the steam engine move people to cities?', options: ['No', 'Yes', 'Only in winter', 'Maybe'], correctAnswer: 1 },
      { id: 'q75-7', question: 'Is James Watt a famous engineer?', options: ['No', 'Yes', 'Only in the UK', 'Maybe'], correctAnswer: 1 },
      { id: 'q75-8', question: 'Was the steam engine important for history?', options: ['No', 'Yes, very important', 'Only for trains', 'Maybe'], correctAnswer: 1 },
      { id: 'q75-9', question: 'Did factories become faster with steam?', options: ['No', 'Yes', 'They became slower', 'Maybe'], correctAnswer: 1 },
      { id: 'q75-10', question: 'Is steam made from boiling water?', options: ['No', 'Yes', 'From ice', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-78',
    title: 'The Grand Canyon',
    titleKurdish: 'گراند کانیۆن (گەلیێ مەزن)',
    content: 'The Grand Canyon is a massive canyon carved by the Colorado River in Arizona, USA. It is about 277 miles long and over a mile deep. The canyon shows millions of years of Earth\'s history through its colorful rock layers. It is one of the most famous natural wonders in the world and is visited by millions of tourists every year.',
    contentKurdish: 'گراند کانیۆن گەلیەکێ مەزنە کو ژ لایێ رووبارێ کۆلۆرادۆ ڤە هاتیە کۆلان ل ویلایەتا ئەریزۆنا، ئەمریکا. درێژیا وی نێزیک ٢٧٧ میلە و کویریا وی زێدەتر ژ میلەکی یە. گەلی ب ملیۆنان سالێن مێژوویا ئەردی نیشان ددەت ب رێکا تەبەقێن بەری یێن رەنگاوڕەنگ. ئەو ئێک ژ ناڤدارترین سەیروسەمەرێن سروشتی یە ل جیهانێ و هەر سال ب ملیۆنان گەشتیار سەرەدانا وی دکەن.',
    level: 'B1',
    questions: [
      { id: 'q78-1', question: 'What carved the Grand Canyon?', options: ['The wind', 'The Colorado River', 'An earthquake', 'Humans'], correctAnswer: 1 },
      { id: 'q78-2', question: 'Where is the Grand Canyon located?', options: ['California', 'Arizona, USA', 'Texas', 'Florida'], correctAnswer: 1 },
      { id: 'q78-3', question: 'How long is the Grand Canyon?', options: ['27 miles', '277 miles', '2777 miles', '2 miles'], correctAnswer: 1 },
      { id: 'q78-4', question: 'How deep is it?', options: ['10 feet', 'Over a mile deep', '100 meters', 'It is shallow'], correctAnswer: 1 },
      { id: 'q78-5', question: 'What does the canyon show through its rock layers?', options: ['The future', 'Millions of years of Earth\'s history', 'Only sand', 'Nothing'], correctAnswer: 1 },
      { id: 'q78-6', question: 'Is it a famous natural wonder?', options: ['No', 'Yes', 'Only in Arizona', 'Maybe'], correctAnswer: 1 },
      { id: 'q78-7', question: 'Do many tourists visit it?', options: ['No', 'Yes, millions', 'Only a few', 'Maybe'], correctAnswer: 1 },
      { id: 'q78-8', question: 'Are the rock layers colorful?', options: ['No', 'Yes', 'Only black and white', 'Maybe'], correctAnswer: 1 },
      { id: 'q78-9', question: 'Is the Colorado River in the canyon?', options: ['No', 'Yes', 'Only in winter', 'Maybe'], correctAnswer: 1 },
      { id: 'q78-10', question: 'Is Arizona a state in the USA?', options: ['No', 'Yes', 'It is a city', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-79',
    title: 'The Invention of the Camera',
    titleKurdish: 'داهێنانا کامیرێ',
    content: 'The first permanent photograph was taken in 1826. Early cameras were very large and required people to sit still for a long time. Over time, cameras became smaller, faster, and easier to use. Today, almost everyone has a high-quality camera on their smartphone. Photography allows us to capture special moments and share them with others.',
    contentKurdish: 'ئێکەمین وێنێ هەمیشەیی ل سالا ١٨٢٦ هاتە گرتن. کامیرێن دەستپێکێ گەلەک مەزن بوون و پێدڤی بوو خەلک بو دەمەکێ درێژ بێ لڤین روینن. ب تێپەربوونا دەمی، کامیرە بچویکتر، خێراتر، و ب ساناهیتر لێ هاتن. ئەڤرۆ، نێزیک هەمی کەسان کامیرەکا کوالێتی بلند ل سەر مۆبایلێن خۆ یێن هەین. وێنەگری رێ ددەتە مە کو دەمێن تایبەت تۆمار بکەین و دگەل کەسێن دی بەلاڤ بکەین.',
    level: 'B1',
    questions: [
      { id: 'q79-1', question: 'When was the first permanent photograph taken?', options: ['1726', '1826', '1926', '2000'], correctAnswer: 1 },
      { id: 'q79-2', question: 'Were early cameras small?', options: ['Yes', 'No, they were very large', 'They were medium', 'Maybe'], correctAnswer: 1 },
      { id: 'q79-3', question: 'Did people have to sit still for early photos?', options: ['No', 'Yes, for a long time', 'Only for a second', 'Maybe'], correctAnswer: 1 },
      { id: 'q79-4', question: 'What happened to cameras over time?', options: ['They became bigger', 'They became smaller, faster, and easier', 'They disappeared', 'Nothing'], correctAnswer: 1 },
      { id: 'q79-5', question: 'Where do most people have cameras today?', options: ['Only in studios', 'On their smartphones', 'In their pockets only', 'Nowhere'], correctAnswer: 1 },
      { id: 'q79-6', question: 'What does photography allow us to do?', options: ['To eat better', 'To capture special moments', 'To run faster', 'Nothing'], correctAnswer: 1 },
      { id: 'q79-7', question: 'Is photography important for sharing memories?', options: ['No', 'Yes', 'Only for news', 'Maybe'], correctAnswer: 1 },
      { id: 'q79-8', question: 'Are smartphone cameras high-quality?', options: ['No', 'Yes, many are', 'They are bad', 'Maybe'], correctAnswer: 1 },
      { id: 'q79-9', question: 'Was 1826 a long time ago?', options: ['No', 'Yes', 'Only 10 years ago', 'Maybe'], correctAnswer: 1 },
      { id: 'q79-10', question: 'Can we take videos with modern cameras?', options: ['No', 'Yes', 'Only on Sundays', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-80',
    title: 'The Great Wall of China (Part 3)',
    titleKurdish: 'دیوارێ مەزن یێ چینێ (پشکا ٣)',
    content: 'The Great Wall is not just one long wall, but a collection of walls and fortifications. It stretches over 13,000 miles across northern China. While it was built for defense, it also helped control trade and travel. Today, it is one of the most visited tourist attractions in the world. It is a testament to human engineering and perseverance.',
    contentKurdish: 'دیوارێ مەزن تەنێ ئێک دیوارێ درێژ نینە، بەلکو کۆمەکا دیوار و قاییمکاریانە. ئەو زێدەتر ژ ١٣،٠٠٠ میلان ل باکوورێ چینێ درێژ دبیت. هەرچەندە ئەو بو بەرگریێ هاتبوو دروستکرن، لێ هەروەسا هاریکاریا کۆنترۆڵکرنا بازرگانی و گەشتکرنێ ژی دکر. ئەڤرۆ، ئەو ئێک ژ پڕسەردانترین جهێن گەشتیاری یە ل جیهانێ. ئەو بەلگەیەکە بو ئەندازیاری و بێهنفەرهیا مرۆڤی.',
    level: 'B1',
    questions: [
      { id: 'q80-1', question: 'Is the Great Wall only one single wall?', options: ['Yes', 'No, it is a collection of walls', 'It is a bridge', 'Maybe'], correctAnswer: 1 },
      { id: 'q80-2', question: 'How long is the Great Wall?', options: ['1,300 miles', '13,000 miles', '130,000 miles', '13 miles'], correctAnswer: 1 },
      { id: 'q80-3', question: 'Where is the wall located?', options: ['Southern China', 'Northern China', 'Japan', 'India'], correctAnswer: 1 },
      { id: 'q80-4', question: 'What was the main reason for building the wall?', options: ['For beauty', 'For defense', 'For exercise', 'For farming'], correctAnswer: 1 },
      { id: 'q80-5', question: 'Did the wall help control trade?', options: ['No', 'Yes', 'Only for food', 'Maybe'], correctAnswer: 1 },
      { id: 'q80-6', question: 'Is it a popular tourist attraction?', options: ['No', 'Yes, one of the most visited', 'Only for Chinese people', 'Maybe'], correctAnswer: 1 },
      { id: 'q80-7', question: 'Is the wall a testament to human engineering?', options: ['No', 'Yes', 'It was built by nature', 'Maybe'], correctAnswer: 1 },
      { id: 'q80-8', question: 'Does it stretch across northern China?', options: ['No', 'Yes', 'Only in Beijing', 'Maybe'], correctAnswer: 1 },
      { id: 'q80-9', question: 'Is 13,000 miles very long?', options: ['No', 'Yes, very long', 'It is short', 'Maybe'], correctAnswer: 1 },
      { id: 'q80-10', question: 'Is the wall still standing today?', options: ['No', 'Yes', 'Only in pictures', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-81',
    title: 'The Invention of the X-ray',
    titleKurdish: 'داهێنانا تیشکا ئێکس (X-ray)',
    content: 'Wilhelm Röntgen discovered X-rays in 1895. This amazing discovery allowed doctors to see inside the human body without surgery. X-rays are used to find broken bones and diagnose diseases. This invention revolutionized medicine and has saved countless lives. Today, X-ray technology is used in hospitals and airports all over the world.',
    contentKurdish: 'ویلهێلم رۆنتگن تیشکا ئێکس داهێنا ل سالا ١٨٩٥. ئەڤ داهێنانا سەیر رێ دا پزیشکان کو دناڤ جەستێ مرۆڤی دا ببینن بێی نەشتەرگەری. تیشکا ئێکس دهێتە بکارئینان بو دیتنا هەستیێن شکەستی و دەستنیشانکرنا نەخۆشیان. ئەڤێ داهێنانێ پزیشکی گوهۆڕی و بێ هەژمار ژیان پاراستینە. ئەڤرۆ، تەکنۆلۆژیایا تیشکا ئێکس ل نەخۆشخانە و فرۆکەخانەیێن هەمی جیهانێ دهێتە بکارئینان.',
    level: 'B1',
    questions: [
      { id: 'q81-1', question: 'Who discovered X-rays?', options: ['Thomas Edison', 'Wilhelm Röntgen', 'Marie Curie', 'Albert Einstein'], correctAnswer: 1 },
      { id: 'q81-2', question: 'In what year were X-rays discovered?', options: ['1795', '1895', '1995', '2000'], correctAnswer: 1 },
      { id: 'q81-3', question: 'What do X-rays allow doctors to do?', options: ['To see through walls', 'To see inside the human body without surgery', 'To hear heartbeats', 'To smell diseases'], correctAnswer: 1 },
      { id: 'q81-4', question: 'What are X-rays used to find?', options: ['Lost keys', 'Broken bones', 'Gold', 'Water'], correctAnswer: 1 },
      { id: 'q81-5', question: 'Did this invention revolutionize medicine?', options: ['No', 'Yes', 'Only a little', 'Maybe'], correctAnswer: 1 },
      { id: 'q81-6', question: 'Where is X-ray technology used today?', options: ['Only in schools', 'Hospitals and airports', 'Only in cars', 'Nowhere'], correctAnswer: 1 },
      { id: 'q81-7', question: 'Has it saved many lives?', options: ['No', 'Yes, countless', 'Only a few', 'Maybe'], correctAnswer: 1 },
      { id: 'q81-8', question: 'Is Wilhelm Röntgen a famous scientist?', options: ['No', 'Yes', 'Only in Germany', 'Maybe'], correctAnswer: 1 },
      { id: 'q81-9', question: 'Can X-rays see through skin?', options: ['No', 'Yes', 'Only if it is thin', 'Maybe'], correctAnswer: 1 },
      { id: 'q81-10', question: 'Is X-ray technology used in airports for security?', options: ['No', 'Yes', 'Only for food', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-82',
    title: 'The Life of a Polar Bear',
    titleKurdish: 'ژیانا ورچەکێ سپی',
    content: 'Polar bears are the largest land carnivores and live in the Arctic. They have thick white fur and a layer of fat called blubber to stay warm in the freezing cold. They are excellent swimmers and hunt seals on the sea ice. Polar bears are threatened by climate change because the sea ice they depend on is melting.',
    contentKurdish: 'ورچێن سپی مەزنترین گوشتخۆرێن ل سەر ئەردینە و ل جەمسەرێ باکوور دژین. وان فەرووەکا سپی یا ستویر و تەبەقەکا چەوریێ یا ب ناڤێ (بلەبەر) یا هەین دا د سەقایێ گەلەک سار دا یێ گەرم بن. ئەو مەلەڤانێن نایابن و نێچیرا فۆکان (سیلز) دکەن ل سەر جەمدێ دەریایی. ورچێن سپی د مەترسیێ دایە ژبەر گوهۆڕینا سەقای چونکی جەمدێ دەریایی یێ ئەو پشتبەستنێ ل سەر دکەن یێ دحەلیێت.',
    level: 'A2',
    questions: [
      { id: 'q82-1', question: 'Where do polar bears live?', options: ['In the desert', 'In the Arctic', 'In the jungle', 'In Australia'], correctAnswer: 1 },
      { id: 'q82-2', question: 'What color is a polar bear\'s fur?', options: ['Black', 'White', 'Brown', 'Blue'], correctAnswer: 1 },
      { id: 'q82-3', question: 'What helps polar bears stay warm?', options: ['Clothes', 'Thick fur and blubber', 'Fire', 'Hot water'], correctAnswer: 1 },
      { id: 'q82-4', question: 'Are polar bears good swimmers?', options: ['No', 'Yes, excellent', 'Only a little', 'Maybe'], correctAnswer: 1 },
      { id: 'q82-5', question: 'What do polar bears hunt?', options: ['Fish only', 'Seals', 'Birds', 'Penguins'], correctAnswer: 1 },
      { id: 'q82-6', question: 'Why are polar bears threatened?', options: ['Too much food', 'Climate change and melting ice', 'Too many people', 'Cold weather'], correctAnswer: 1 },
      { id: 'q82-7', question: 'Is a polar bear a carnivore?', options: ['No', 'Yes', 'It eats only plants', 'Maybe'], correctAnswer: 1 },
      { id: 'q82-8', question: 'Is the Arctic a cold place?', options: ['No', 'Yes, freezing cold', 'It is hot', 'Maybe'], correctAnswer: 1 },
      { id: 'q82-9', question: 'Do polar bears live in the Southern Hemisphere?', options: ['Yes', 'No, in the Northern Hemisphere', 'Only in zoos', 'Maybe'], correctAnswer: 1 },
      { id: 'q82-10', question: 'Is blubber a layer of fat?', options: ['No', 'Yes', 'It is a type of hair', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-83',
    title: 'The Invention of the Television',
    titleKurdish: 'داهێنانا تەلەفزیۆنێ',
    content: 'The first electronic television was invented in 1927 by Philo Farnsworth. Before television, people listened to the radio for news and entertainment. Early televisions were small and showed black and white pictures. Over time, they became larger, showed color, and eventually became the high-definition smart TVs we use today.',
    contentKurdish: 'ئێکەمین تەلەفزیۆنا ئەلیکترۆنی ل سالا ١٩٢٧ هاتە داهێنان ژ لایێ فیلۆ فارنسوۆرس ڤە. بەری تەلەفزیۆنێ، خەلکی گوهداریێ ل رادیۆیێ دکر بو دەنگوباس و کەیفخۆشیێ. تەلەفزیۆنێن دەستپێکێ بچویک بوون و وێنەیێن رەش و سپی نیشان ددان. ب تێپەربوونا دەمی، ئەو مەزنتر لێ هاتن، رەنگ نیشان دان، و ل دوماهیکێ بوونە تەلەفزیۆنێن زیرەک یێن کوالێتی بلند یێن کو ئەم ئەڤرۆ بکار دئینین.',
    level: 'B1',
    questions: [
      { id: 'q83-1', question: 'Who invented the first electronic television?', options: ['Thomas Edison', 'Philo Farnsworth', 'Alexander Graham Bell', 'Steve Jobs'], correctAnswer: 1 },
      { id: 'q83-2', question: 'In what year was the electronic television invented?', options: ['1907', '1927', '1957', '1987'], correctAnswer: 1 },
      { id: 'q83-3', question: 'What did people use before television?', options: ['Computers', 'Radio', 'Smartphones', 'Nothing'], correctAnswer: 1 },
      { id: 'q83-4', question: 'Were early televisions in color?', options: ['Yes', 'No, they were black and white', 'They were blue', 'Maybe'], correctAnswer: 1 },
      { id: 'q83-5', question: 'What happened to televisions over time?', options: ['They became smaller', 'They became larger and showed color', 'They disappeared', 'Nothing'], correctAnswer: 1 },
      { id: 'q83-6', question: 'What do we use today?', options: ['Only radios', 'High-definition smart TVs', 'Only black and white TVs', 'Nowhere'], correctAnswer: 1 },
      { id: 'q83-7', question: 'Is Philo Farnsworth a famous inventor?', options: ['No', 'Yes', 'Only in the USA', 'Maybe'], correctAnswer: 1 },
      { id: 'q83-8', question: 'Was the first television big?', options: ['Yes', 'No, it was small', 'It was medium', 'Maybe'], correctAnswer: 1 },
      { id: 'q83-9', question: 'Is television still popular today?', options: ['No', 'Yes', 'Only in winter', 'Maybe'], correctAnswer: 1 },
      { id: 'q83-10', question: 'Can we watch the internet on smart TVs?', options: ['No', 'Yes', 'Only on Sundays', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-84',
    title: 'The Eiffel Tower',
    titleKurdish: 'بورجێ ئیفێل',
    content: 'The Eiffel Tower is a famous iron tower in Paris, France. It was built in 1889 for the World\'s Fair to celebrate the 100th anniversary of the French Revolution. At first, many people thought it was ugly, but today it is a symbol of France and one of the most visited monuments in the world. It is 330 meters tall and has three levels for visitors.',
    contentKurdish: 'بورجێ ئیفێل بورجەکێ ئاسنی یێ ناڤدارە ل پاریس، فەرەنسا. ئەو ل سالا ١٨٨٩ هاتبوو دروستکرن بو پێشانگەها جیهانی دا پیرۆزباهیا ١٠٠ سالیا شۆرەشا فەرەنسی بکەن. ل دەستپێکێ، گەلەک کەسان هزر دکر کو یێ کرێتە، لێ ئەڤرۆ ئەو سیمبۆلێ فەرەنسایە و ئێک ژ پڕسەردانترین مۆنۆمێنتێن جیهانێ یە. درێژیا وی ٣٣٠ مەترن و سێ تەبەقێن هەین بو گەشتیاران.',
    level: 'A2',
    questions: [
      { id: 'q84-1', question: 'Where is the Eiffel Tower located?', options: ['London', 'Paris, France', 'Rome', 'Berlin'], correctAnswer: 1 },
      { id: 'q84-2', question: 'When was it built?', options: ['1789', '1889', '1989', '2000'], correctAnswer: 1 },
      { id: 'q84-3', question: 'What is the tower made of?', options: ['Wood', 'Iron', 'Stone', 'Glass'], correctAnswer: 1 },
      { id: 'q84-4', question: 'Why was it built?', options: ['As a house', 'For the World\'s Fair', 'As a school', 'As a prison'], correctAnswer: 1 },
      { id: 'q84-5', question: 'Did everyone like it at first?', options: ['Yes', 'No, many thought it was ugly', 'Only children liked it', 'Maybe'], correctAnswer: 1 },
      { id: 'q84-6', question: 'How tall is the Eiffel Tower?', options: ['100 meters', '330 meters', '500 meters', '1000 meters'], correctAnswer: 1 },
      { id: 'q84-7', question: 'How many levels does it have for visitors?', options: ['One', 'Two', 'Three', 'Four'], correctAnswer: 2 },
      { id: 'q84-8', question: 'Is it a symbol of France today?', options: ['No', 'Yes', 'Only in Paris', 'Maybe'], correctAnswer: 1 },
      { id: 'q84-9', question: 'Is it a popular monument?', options: ['No', 'Yes, one of the most visited', 'Only for French people', 'Maybe'], correctAnswer: 1 },
      { id: 'q84-10', question: 'Is Paris the capital of France?', options: ['No', 'Yes', 'It is a city in Italy', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-85',
    title: 'The Invention of the Microscope (Part 2)',
    titleKurdish: 'داهێنانا میکرۆسکۆپێ (پشکا ٢)',
    content: 'Anton van Leeuwenhoek is often called the "father of microbiology" because he was the first to see tiny living things through a microscope. He called them "animalcules," but today we know them as bacteria and protozoa. His work opened up a whole new world of science that was previously invisible. Today, microscopes are used in every field of science and medicine.',
    contentKurdish: 'ئەنتۆن ڤان لیوێنھۆک زۆرجاران پێ دهێتە گۆتن "بابێ مایکرۆبایۆلۆژیێ" چونکی ئەو ئێکەم کەس بوو کو تشتێن زیندی یێن بچویک ب رێکا میکرۆسکۆپێ ببینیت. وی ناڤێ وان نابوو (animalcules)، لێ ئەڤرۆ ئەم وان وەک بەکتەریا و پرۆتۆزوا دناسین. کارێ وی جیهانەکا تمامی یا نووی یا زانستی ڤەکر کو بەری هینگێ نەدهاتە دیتن. ئەڤرۆ، میکرۆسکۆپ د هەمی بوارێن زانست و پزیشکی دا دهێنە بکارئینان.',
    level: 'B1',
    questions: [
      { id: 'q85-1', question: 'Who is called the "father of microbiology"?', options: ['Thomas Edison', 'Anton van Leeuwenhoek', 'Isaac Newton', 'Albert Einstein'], correctAnswer: 1 },
      { id: 'q85-2', question: 'What did he call the tiny living things he saw?', options: ['Bacteria', 'Animalcules', 'Viruses', 'Insects'], correctAnswer: 1 },
      { id: 'q85-3', question: 'What do we call those tiny things today?', options: ['Animals', 'Bacteria and protozoa', 'Plants', 'Rocks'], correctAnswer: 1 },
      { id: 'q85-4', question: 'Was this world of science visible before?', options: ['Yes', 'No, it was invisible', 'Only with glasses', 'Maybe'], correctAnswer: 1 },
      { id: 'q85-5', question: 'Where are microscopes used today?', options: ['Only in schools', 'Every field of science and medicine', 'Only in kitchens', 'Nowhere'], correctAnswer: 1 },
      { id: 'q85-6', question: 'Is Anton van Leeuwenhoek a famous scientist?', options: ['No', 'Yes', 'Only in the Netherlands', 'Maybe'], correctAnswer: 1 },
      { id: 'q85-7', question: 'Did he use a microscope for his work?', options: ['No', 'Yes', 'He used a telescope', 'Maybe'], correctAnswer: 1 },
      { id: 'q85-8', question: 'Are bacteria very small?', options: ['No', 'Yes, invisible to the eye', 'They are big', 'Maybe'], correctAnswer: 1 },
      { id: 'q85-9', question: 'Is microbiology the study of tiny organisms?', options: ['No', 'Yes', 'It is the study of stars', 'Maybe'], correctAnswer: 1 },
      { id: 'q85-10', question: 'Did his work open a new world of science?', options: ['No', 'Yes', 'Only for him', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-86',
    title: 'The Life of a Sea Turtle',
    titleKurdish: 'ژیانا کیسەلەکێ دەریایی',
    content: 'Sea turtles spend most of their lives in the ocean, but they come to the beach to lay their eggs. They bury their eggs in the sand and return to the water. When the baby turtles hatch, they crawl as fast as they can to the ocean. Sea turtles can live for a very long time, sometimes over 100 years. They are beautiful creatures that need our protection.',
    contentKurdish: 'کیسەلێن دەریایی پڕانیا ژیانا خۆ دناڤ ئۆقیانووسی دا دەرباز دکەن، لێ ئەو دهێنە سەر کەنارێن دەریایێ دا هێکێن خۆ دابنێن. ئەو هێکێن خۆ دناڤ لمێ دا ڤەدشێرن و دزڤڕنە ناڤ ئاڤێ. دەمێ کیسەلێن بچویک ژ هێکێ دەردکەڤن، ئەو ب خێرایی بەرەڤ ئۆقیانووسی دچن. کیسەلێن دەریایی دشێن بو دەمەکێ گەلەک درێژ بژین، هندەک جاران زێدەتر ژ ١٠٠ سالان. ئەو گیانەوەرێن جوانن کو پێدڤی ب پاراستنا مە نە.',
    level: 'A2',
    questions: [
      { id: 'q86-1', question: 'Where do sea turtles spend most of their lives?', options: ['On the beach', 'In the ocean', 'In a lake', 'In a forest'], correctAnswer: 1 },
      { id: 'q86-2', question: 'Why do they come to the beach?', options: ['To sleep', 'To lay their eggs', 'To eat sand', 'To play'], correctAnswer: 1 },
      { id: 'q86-3', question: 'Where do they bury their eggs?', options: ['In the water', 'In the sand', 'In a nest', 'In a tree'], correctAnswer: 1 },
      { id: 'q86-4', question: 'What do baby turtles do after hatching?', options: ['They sleep', 'They crawl to the ocean', 'They fly away', 'They stay on the beach'], correctAnswer: 1 },
      { id: 'q86-5', question: 'How long can sea turtles live?', options: ['10 years', 'Over 100 years', '1 year', '500 years'], correctAnswer: 1 },
      { id: 'q86-6', question: 'Are sea turtles beautiful creatures?', options: ['No', 'Yes', 'They are ugly', 'Maybe'], correctAnswer: 1 },
      { id: 'q86-7', question: 'Do they need our protection?', options: ['No', 'Yes', 'Only in winter', 'Maybe'], correctAnswer: 1 },
      { id: 'q86-8', question: 'Do sea turtles live in the water?', options: ['No', 'Yes', 'Only on land', 'Maybe'], correctAnswer: 1 },
      { id: 'q86-9', question: 'Is the sand a safe place for their eggs?', options: ['No', 'Yes, they bury them there', 'Only in summer', 'Maybe'], correctAnswer: 1 },
      { id: 'q86-10', question: 'Are sea turtles reptiles?', options: ['No', 'Yes', 'They are fish', 'They are birds'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-87',
    title: 'The Invention of the Radio',
    titleKurdish: 'داهێنانا رادیۆیێ',
    content: 'Guglielmo Marconi is credited with inventing the radio in the late 1890s. He found a way to send messages through the air using radio waves. Before the radio, people used the telegraph, which required wires. The radio allowed information to be shared quickly over long distances, even to ships at sea. It was a major step forward in communication technology.',
    contentKurdish: 'گۆگلیێلمۆ مارکۆنی ب داهێنەرێ رادیۆیێ دهێتە هەژمارتن ل دوماهیا سالێن ١٨٩٠دا. وی رێیەک دیت دا نامەیان ب رێکا هەوای ب هنێریت ب بکارئینانا پێلێن رادیۆیێ. بەری رادیۆیێ، خەلکی تەلەگراف بکار دئینان، کو پێدڤی ب تەلان هەبوو. رادیۆیێ رێ دا کو پێزانین ب زوویی ل سەر دویراتیێن درێژ بهێنە بەلاڤکرن، هەتا بو کەشتیێن دناڤ دەریایێ دا. ئەو گاڤەکا مەزن بوو بەرەڤ پێش د تەکنۆلۆژیایا پەیوەندیکردنێ دا.',
    level: 'B1',
    questions: [
      { id: 'q87-1', question: 'Who invented the radio?', options: ['Thomas Edison', 'Guglielmo Marconi', 'Alexander Graham Bell', 'Albert Einstein'], correctAnswer: 1 },
      { id: 'q87-2', question: 'When was the radio invented?', options: ['Late 1790s', 'Late 1890s', 'Late 1990s', '2000s'], correctAnswer: 1 },
      { id: 'q87-3', question: 'How did Marconi send messages?', options: ['Through wires', 'Through the air using radio waves', 'By birds', 'By shouting'], correctAnswer: 1 },
      { id: 'q87-4', question: 'What did people use before the radio?', options: ['Smartphones', 'Telegraph', 'Television', 'Nothing'], correctAnswer: 1 },
      { id: 'q87-5', question: 'Did the radio require wires?', options: ['Yes', 'No', 'Only for long distances', 'Maybe'], correctAnswer: 1 },
      { id: 'q87-6', question: 'Could the radio send messages to ships at sea?', options: ['No', 'Yes', 'Only small ships', 'Maybe'], correctAnswer: 1 },
      { id: 'q87-7', question: 'Was the radio a major step in communication?', options: ['No', 'Yes', 'Only a little', 'Maybe'], correctAnswer: 1 },
      { id: 'q87-8', question: 'Is Guglielmo Marconi a famous inventor?', options: ['No', 'Yes', 'Only in Italy', 'Maybe'], correctAnswer: 1 },
      { id: 'q87-9', question: 'Are radio waves invisible?', options: ['No', 'Yes', 'Only at night', 'Maybe'], correctAnswer: 1 },
      { id: 'q87-10', question: 'Is the radio still used today?', options: ['No', 'Yes', 'Only in cars', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-88',
    title: 'The Great Wall of China (Part 4)',
    titleKurdish: 'دیوارێ مەزن یێ چینێ (پشکا ٤)',
    content: 'The Great Wall is a masterpiece of ancient engineering. It was built using stone, brick, wood, and even rice flour in the mortar! Millions of workers, including soldiers and farmers, helped build the wall over many centuries. Today, it is a symbol of China\'s rich history and a reminder of the hard work and dedication of the people who built it.',
    contentKurdish: 'دیوارێ مەزن شاهکارەکا ئەندازیاریا کەڤنارە. ئەو ب بکارئینانا بەری، بلۆک، تەختە، و هەتا ئارێ برنجێ دناڤ چیمەنتۆیێ دا هاتبوو دروستکرن! ملیۆنان کارکەر، ژ وان ژی سەرباز و جوتیار، هاریکاریا دروستکرنا دیواری کر ل سەر گەلەک سەدان سالان. ئەڤرۆ، ئەو سیمبۆلێ مێژوویا دەولەمەندا چینێ یە و بیرهینەرەکا کارێ گران و دلسۆزیا وان کەسانە یێن کو ئەو دروستکری.',
    level: 'B1',
    questions: [
      { id: 'q88-1', question: 'What materials were used to build the wall?', options: ['Only wood', 'Stone, brick, wood, and rice flour', 'Only glass', 'Plastic'], correctAnswer: 1 },
      { id: 'q88-2', question: 'Who helped build the wall?', options: ['Only kings', 'Millions of workers, soldiers, and farmers', 'Only foreigners', 'Nobody'], correctAnswer: 1 },
      { id: 'q88-3', question: 'Was rice flour used in the mortar?', options: ['No', 'Yes', 'Only for food', 'Maybe'], correctAnswer: 1 },
      { id: 'q88-4', question: 'How long did it take to build the wall?', options: ['One year', 'Many centuries', 'A week', '10 years'], correctAnswer: 1 },
      { id: 'q88-5', question: 'What is the wall a symbol of today?', options: ['Modern technology', 'China\'s rich history', 'Weakness', 'Nothing'], correctAnswer: 1 },
      { id: 'q88-6', question: 'Is the wall a masterpiece of engineering?', options: ['No', 'Yes', 'It is a simple wall', 'Maybe'], correctAnswer: 1 },
      { id: 'q88-7', question: 'Did millions of people work on it?', options: ['No', 'Yes', 'Only a few', 'Maybe'], correctAnswer: 1 },
      { id: 'q88-8', question: 'Is the wall in China?', options: ['No', 'Yes', 'In India', 'Maybe'], correctAnswer: 1 },
      { id: 'q88-9', question: 'Is it a reminder of hard work?', options: ['No', 'Yes', 'Only of war', 'Maybe'], correctAnswer: 1 },
      { id: 'q88-10', question: 'Is the Great Wall a UNESCO site?', options: ['No', 'Yes', 'Only in China', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-89',
    title: 'The Invention of the Compass',
    titleKurdish: 'داهێنانا قیبلەنەمایێ (کۆمپاس)',
    content: 'The compass was invented in China over 2,000 years ago. It uses a magnetic needle that always points north. This allowed sailors to navigate the oceans even when they couldn\'t see the stars or land. The compass was essential for the Age of Discovery and helped explorers find new lands. Today, we use digital compasses on our smartphones.',
    contentKurdish: 'قیبلەنەما (کۆمپاس) ل چینێ هاتە داهێنان بەری زێدەتر ژ ٢،٠٠٠ سالان. ئەو دەرزیەکا مەگنەتیکی بکار دئینیت کو هەردەم بەرەڤ باکووری نیشان ددەت. ئەڤێ چەندێ رێ دا دەریاڤانان کو دناڤ ئۆقیانووسان دا رێکا خۆ بدۆزن هەتا دەمێ وان نەدشیا ئەستێرە یان ئەردی ببینن. قیبلەنەما گەلەک یا گرنگ بوو بو سەردەمێ دۆزینەوان و هاریکاریا گەڕۆکان کر دا ئەردێن نووی بدۆزن. ئەڤرۆ، ئەم قیبلەنەمایێن دیجیتاڵ ل سەر مۆبایلێن خۆ بکار دئینین.',
    level: 'B1',
    questions: [
      { id: 'q89-1', question: 'Where was the compass invented?', options: ['Greece', 'China', 'Egypt', 'Italy'], correctAnswer: 1 },
      { id: 'q89-2', question: 'How long ago was it invented?', options: ['200 years ago', '2,000 years ago', '20 years ago', 'Last year'], correctAnswer: 1 },
      { id: 'q89-3', question: 'What does the magnetic needle always point to?', options: ['South', 'North', 'East', 'West'], correctAnswer: 1 },
      { id: 'q89-4', question: 'Who used the compass to navigate oceans?', options: ['Farmers', 'Sailors', 'Teachers', 'Doctors'], correctAnswer: 1 },
      { id: 'q89-5', question: 'Was the compass important for explorers?', options: ['No', 'Yes, essential', 'Only in winter', 'Maybe'], correctAnswer: 1 },
      { id: 'q89-6', question: 'What do we use today instead of old compasses?', options: ['Nothing', 'Digital compasses on smartphones', 'Only maps', 'Maybe'], correctAnswer: 1 },
      { id: 'q89-7', question: 'Does a compass work without stars?', options: ['No', 'Yes', 'Only during the day', 'Maybe'], correctAnswer: 1 },
      { id: 'q89-8', question: 'Is a compass a magnetic tool?', options: ['No', 'Yes', 'It is electric', 'Maybe'], correctAnswer: 1 },
      { id: 'q89-9', question: 'Did the compass help find new lands?', options: ['No', 'Yes', 'Only in China', 'Maybe'], correctAnswer: 1 },
      { id: 'q89-10', question: 'Is "North" a direction?', options: ['No', 'Yes', 'It is a place', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-90',
    title: 'The Life of a Lion',
    titleKurdish: 'ژیانا شێرەکی',
    content: 'Lions are known as the "kings of the jungle," although they mostly live in the savanna. They live in social groups called prides. Male lions have a thick mane around their necks, while females do most of the hunting. Lions are powerful predators and play an important role in the ecosystem. They are beautiful and majestic animals that are respected all over the world.',
    contentKurdish: 'شێر ب "پاشایێن دارستانێ" دهێنە نیاسین، هەرچەندە ئەو پڕانیا جاران ل ساڤانایێ دژین. ئەو د کۆمێن جڤاکی دا دژین کو پێ دهێتە گۆتن (پرایدز). شێرێن نێر فەرووەکا ستویر (مان) ل دۆر ستۆیێ وان یێ هەین، لێ مێ پڕانیا نێچیرێ دکەن. شێر نێچیرڤانێن ب هێزن و رۆلەکێ گرنگ د سیستەمێ ژینگەیی دا دگێڕن. ئەو ئاژەلێن جوان و ب شکۆن کو ل هەمی جیهانێ رێز لێ دهێتە گرتن.',
    level: 'A2',
    questions: [
      { id: 'q90-1', question: 'What are lions often called?', options: ['Kings of the ocean', 'Kings of the jungle', 'Kings of the desert', 'Kings of the sky'], correctAnswer: 1 },
      { id: 'q90-2', question: 'Where do lions mostly live?', options: ['In the jungle', 'In the savanna', 'In the city', 'In a house'], correctAnswer: 1 },
      { id: 'q90-3', question: 'What is a group of lions called?', options: ['A pack', 'A pride', 'A colony', 'A flock'], correctAnswer: 1 },
      { id: 'q90-4', question: 'Which lion has a thick mane?', options: ['The female', 'The male', 'The baby', 'None'], correctAnswer: 1 },
      { id: 'q90-5', question: 'Who does most of the hunting?', options: ['The male lions', 'The female lions', 'The babies', 'Nobody'], correctAnswer: 1 },
      { id: 'q90-6', question: 'Are lions powerful predators?', options: ['No', 'Yes', 'They are weak', 'Maybe'], correctAnswer: 1 },
      { id: 'q90-7', question: 'Do lions play an important role in the ecosystem?', options: ['No', 'Yes', 'Only in zoos', 'Maybe'], correctAnswer: 1 },
      { id: 'q90-8', question: 'Are lions respected animals?', options: ['No', 'Yes', 'Only in Africa', 'Maybe'], correctAnswer: 1 },
      { id: 'q90-9', question: 'Is a lion a carnivore?', options: ['No', 'Yes', 'It eats plants', 'Maybe'], correctAnswer: 1 },
      { id: 'q90-10', question: 'Is the savanna a place where lions live?', options: ['No', 'Yes', 'Only in winter', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-91',
    title: 'The Invention of the Steam Engine',
    titleKurdish: 'داهێنانا بزوێنەرێ هەلمێ',
    content: 'The steam engine was improved by James Watt in the 1760s. It used steam to create power and was a key part of the Industrial Revolution. Steam engines were used in factories, mines, and eventually in trains and ships. This invention changed how goods were produced and how people traveled. It marked the beginning of the modern industrial age.',
    contentKurdish: 'بزوێنەرێ هەلمێ هاتە پێشخستن ژ لایێ جەیمس وات ڤە ل سالێن ١٧٦٠دا. وی هەلم بکار دئینا دا هێزێ دروست بکەت و پشکەکا سەرەکی بوو ژ شۆرەشا پیشەسازی. بزوێنەرێن هەلمێ ل کارگەهان، کانزایان، و ل دوماهیکێ ل شەمەندەفەر و کەشتیان دا دهاتنە بکارئینان. ئەڤێ داهێنانێ شێوازێ بەرهەمئینانا کەلوپەلان و گەشتکرنا خەلکی گوهۆڕی. ئەو نیشانا دەستپێکا سەردەمێ پیشەسازی یێ مۆدێرن بوو.',
    level: 'B1',
    questions: [
      { id: 'q91-1', question: 'Who improved the steam engine?', options: ['Thomas Edison', 'James Watt', 'Isaac Newton', 'Albert Einstein'], correctAnswer: 1 },
      { id: 'q91-2', question: 'When was the steam engine improved?', options: ['1660s', '1760s', '1860s', '1960s'], correctAnswer: 1 },
      { id: 'q91-3', question: 'What did the steam engine use to create power?', options: ['Electricity', 'Steam', 'Gasoline', 'Wind'], correctAnswer: 1 },
      { id: 'q91-4', question: 'What major event was the steam engine a part of?', options: ['The French Revolution', 'The Industrial Revolution', 'The Digital Revolution', 'The Space Age'], correctAnswer: 1 },
      { id: 'q91-5', question: 'Where were steam engines used?', options: ['Only in homes', 'Factories, mines, trains, and ships', 'Only in schools', 'Nowhere'], correctAnswer: 1 },
      { id: 'q91-6', question: 'Did this invention change how people traveled?', options: ['No', 'Yes', 'Only a little', 'Maybe'], correctAnswer: 1 },
      { id: 'q91-7', question: 'Did it mark the beginning of the industrial age?', options: ['No', 'Yes', 'Only in England', 'Maybe'], correctAnswer: 1 },
      { id: 'q91-8', question: 'Is James Watt a famous inventor?', options: ['No', 'Yes', 'Only in Scotland', 'Maybe'], correctAnswer: 1 },
      { id: 'q91-9', question: 'Is steam made from hot water?', options: ['No', 'Yes', 'It is made from ice', 'Maybe'], correctAnswer: 1 },
      { id: 'q91-10', question: 'Are steam engines still used in most trains today?', options: ['Yes', 'No, they use electricity or diesel', 'Only on Sundays', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-92',
    title: 'The Life of a Dolphin',
    titleKurdish: 'ژیانا دۆلفینەکی',
    content: 'Dolphins are highly intelligent marine mammals. They live in social groups called pods and communicate using a variety of sounds and clicks. They are known for their playful behavior and their ability to jump out of the water. Dolphins use echolocation to find food and navigate. They are beloved by people all over the world for their friendly nature.',
    contentKurdish: 'دۆلفین مەمکدارێن دەریایی یێن گەلەک زیرەکن. ئەو د کۆمێن جڤاکی دا دژین کو پێ دهێتە گۆتن (پۆدز) و پەیوەندیێ دکەن ب بکارئینانا چەندین دەنگ و کلیکان. ئەو ب رەفتارێن خۆ یێن کەیفخۆشیێ و شیانا وان یا بازدانێ ژ دەرڤەی ئاڤێ دهێنە نیاسین. دۆلفین (ئیکۆلۆکەیشن) بکار دئینن دا خوارنێ بدۆزن و رێکا خۆ بدۆزن. ئەو ل هەمی جیهانێ ژ لایێ خەلکی ڤە دهێنە خۆشویستن ژبەر سروشتێ وان یێ هەڤالینیێ.',
    level: 'A2',
    questions: [
      { id: 'q92-1', question: 'Are dolphins fish?', options: ['Yes', 'No, they are mammals', 'They are birds', 'They are reptiles'], correctAnswer: 1 },
      { id: 'q92-2', question: 'What is a group of dolphins called?', options: ['A pride', 'A pod', 'A flock', 'A pack'], correctAnswer: 1 },
      { id: 'q92-3', question: 'How do dolphins communicate?', options: ['By writing', 'Using sounds and clicks', 'By dancing', 'They don\'t communicate'], correctAnswer: 1 },
      { id: 'q92-4', question: 'What are dolphins known for?', options: ['Being mean', 'Playful behavior and jumping', 'Sleeping all day', 'Eating trees'], correctAnswer: 1 },
      { id: 'q92-5', question: 'What do dolphins use to find food?', options: ['Eyes only', 'Echolocation', 'Smell', 'Nothing'], correctAnswer: 1 },
      { id: 'q92-6', question: 'Are dolphins intelligent?', options: ['No', 'Yes, highly intelligent', 'Only a little', 'Maybe'], correctAnswer: 1 },
      { id: 'q92-7', question: 'Do people like dolphins?', options: ['No', 'Yes, they are beloved', 'Only in summer', 'Maybe'], correctAnswer: 1 },
      { id: 'q92-8', question: 'Do dolphins live in the water?', options: ['No', 'Yes', 'Only on land', 'Maybe'], correctAnswer: 1 },
      { id: 'q92-9', question: 'Is echolocation a way to find things using sound?', options: ['No', 'Yes', 'It is a type of food', 'Maybe'], correctAnswer: 1 },
      { id: 'q92-10', question: 'Are dolphins friendly?', options: ['No', 'Yes', 'They are dangerous', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-93',
    title: 'The Invention of the Printing Press (Part 2)',
    titleKurdish: 'داهێنانا چاپخانەیێ (پشکا ٢)',
    content: 'Johannes Gutenberg\'s printing press allowed books to be produced much faster and cheaper than ever before. This led to a huge increase in literacy as more people could afford to buy and read books. Knowledge spread quickly across Europe, leading to the Renaissance and the Scientific Revolution. It is considered one of the most important inventions in human history.',
    contentKurdish: 'چاپخانەیا یۆهانیس گۆتێنبێرگ رێ دا کو پەرتووک ب خێراییەکا زێدەتر و ب بهایەکێ ئەرزانتر ژ جاران بهێنە بەرهەمئینان. ئەڤێ چەندێ بوو ئەگەرێ زیادبوونا خواندەواریێ چونکی کەسێن زێدەتر دشیان پەرتووکان بکڕن و بخوینن. زانیاری ب خێرایی ل هەمی ئەوروپا بەلاڤ بوون، کو بوو ئەگەرێ سەرهەلدانا (رێنیسانس) و شۆرەشا زانستی. ئەو وەک ئێک ژ گرنگترین داهێنانێن مێژوویا مرۆڤایەتیێ دهێتە هەژمارتن.',
    level: 'B1',
    questions: [
      { id: 'q93-1', question: 'What did Gutenberg\'s printing press allow?', options: ['Books to be produced faster and cheaper', 'People to fly', 'Cars to be built', 'Nothing'], correctAnswer: 0 },
      { id: 'q93-2', question: 'What did this lead to?', options: ['Less reading', 'Increase in literacy', 'More wars', 'Nothing'], correctAnswer: 1 },
      { id: 'q93-3', question: 'Did knowledge spread quickly?', options: ['No', 'Yes, across Europe', 'Only in one city', 'Maybe'], correctAnswer: 1 },
      { id: 'q93-4', question: 'What major events did it lead to?', options: ['The Ice Age', 'The Renaissance and Scientific Revolution', 'The Stone Age', 'Nothing'], correctAnswer: 1 },
      { id: 'q93-5', question: 'Is it an important invention?', options: ['No', 'Yes, one of the most important', 'Only for printers', 'Maybe'], correctAnswer: 1 },
      { id: 'q93-6', question: 'Could more people afford books?', options: ['No', 'Yes', 'Only the rich', 'Maybe'], correctAnswer: 1 },
      { id: 'q93-7', question: 'Is Johannes Gutenberg famous?', options: ['No', 'Yes', 'Only in Germany', 'Maybe'], correctAnswer: 1 },
      { id: 'q93-8', question: 'Did the printing press help science?', options: ['No', 'Yes', 'Only math', 'Maybe'], correctAnswer: 1 },
      { id: 'q93-9', question: 'Was literacy low before the printing press?', options: ['No', 'Yes', 'It was high', 'Maybe'], correctAnswer: 1 },
      { id: 'q93-10', question: 'Is a book a collection of pages?', options: ['No', 'Yes', 'It is a type of food', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-94',
    title: 'The Statue of Liberty',
    titleKurdish: 'پەیکەرێ ئازادیێ',
    content: 'The Statue of Liberty is a giant copper statue on Liberty Island in New York Harbor. It was a gift from the people of France to the people of the United States to celebrate the 100th anniversary of American independence. It represents freedom and democracy. The statue was designed by Frédéric Auguste Bartholdi and dedicated in 1886.',
    contentKurdish: 'پەیکەرێ ئازادیێ پەیکەرەکێ مس یێ مەزنە ل سەر گزیرتا ئازادیێ ل بەندەرا نیویۆرکێ. ئەو دیاریەک بوو ژ لایێ خەلکێ فەرەنسا ڤە بو خەلکێ ویلایەتێن یەکگرتی دا پیرۆزباهیا ١٠٠ سالیا سەربەخۆیا ئەمریکا بکەن. ئەو نیشانا ئازادی و دیموکراسیێ یە. پەیکەر ژ لایێ فرێدریک ئۆگێست بارتۆلدی ڤە هاتبوو دیزاینکرن و ل سالا ١٨٨٦ هاتە ڤەکرن.',
    level: 'A2',
    questions: [
      { id: 'q94-1', question: 'Where is the Statue of Liberty located?', options: ['Paris', 'New York Harbor', 'London', 'Washington D.C.'], correctAnswer: 1 },
      { id: 'q94-2', question: 'What is the statue made of?', options: ['Gold', 'Copper', 'Stone', 'Wood'], correctAnswer: 1 },
      { id: 'q94-3', question: 'Who gave the statue to the United States?', options: ['The UK', 'France', 'Germany', 'Italy'], correctAnswer: 1 },
      { id: 'q94-4', question: 'What does the statue represent?', options: ['War', 'Freedom and democracy', 'Money', 'Power'], correctAnswer: 1 },
      { id: 'q94-5', question: 'When was it dedicated?', options: ['1776', '1886', '1986', '2000'], correctAnswer: 1 },
      { id: 'q94-6', question: 'Who designed the statue?', options: ['Thomas Edison', 'Frédéric Auguste Bartholdi', 'Leonardo da Vinci', 'Steve Jobs'], correctAnswer: 1 },
      { id: 'q94-7', question: 'Is it a giant statue?', options: ['No', 'Yes', 'It is small', 'Maybe'], correctAnswer: 1 },
      { id: 'q94-8', question: 'Is New York in the USA?', options: ['No', 'Yes', 'In Canada', 'Maybe'], correctAnswer: 1 },
      { id: 'q94-9', question: 'Is the statue on an island?', options: ['No', 'Yes, Liberty Island', 'In a forest', 'Maybe'], correctAnswer: 1 },
      { id: 'q94-10', question: 'Was it a gift for independence?', options: ['No', 'Yes', 'For a birthday', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-95',
    title: 'The Invention of the Internet (Part 2)',
    titleKurdish: 'داهێنانا ئینتەرنێتێ (پشکا ٢)',
    content: 'Tim Berners-Lee invented the World Wide Web in 1989 while working at CERN. He wanted a way for scientists to share information more easily. The web allowed people to access information using websites and browsers. Today, the internet and the web are essential parts of our lives, used for everything from communication to shopping and education.',
    contentKurdish: 'تیم بێرنەرز-لی (World Wide Web) داهێنا ل سالا ١٨٨٩ دەمێ ل (CERN) کار دکر. وی دڤیا رێیەکێ ببینیت دا زانایان پێزانینان ب ساناهیتر بەلاڤ بکەن. وێبێ رێ دا خەلکی کو بگەهنە پێزانینان ب بکارئینانا وێبسایت و براوزەران. ئەڤرۆ، ئینتەرنێت و وێب پشکێن سەرەکینە ژ ژیانا مە، بو هەمی تشتان دهێنە بکارئینان ژ پەیوەندیکردنێ بگرە هەتا بازاڕکرن و پەروەردێ.',
    level: 'B1',
    questions: [
      { id: 'q95-1', question: 'Who invented the World Wide Web?', options: ['Bill Gates', 'Tim Berners-Lee', 'Steve Jobs', 'Mark Zuckerberg'], correctAnswer: 1 },
      { id: 'q95-2', question: 'In what year was the web invented?', options: ['1969', '1989', '1999', '2009'], correctAnswer: 1 },
      { id: 'q95-3', question: 'Where was Tim Berners-Lee working?', options: ['NASA', 'CERN', 'Google', 'Apple'], correctAnswer: 1 },
      { id: 'q95-4', question: 'Why did he invent the web?', options: ['To play games', 'For scientists to share information', 'To sell things', 'To watch movies'], correctAnswer: 1 },
      { id: 'q95-5', question: 'What did the web allow people to use?', options: ['Only phones', 'Websites and browsers', 'Only radios', 'Nothing'], correctAnswer: 1 },
      { id: 'q95-6', question: 'Is the internet essential today?', options: ['No', 'Yes', 'Only for young people', 'Maybe'], correctAnswer: 1 },
      { id: 'q95-7', question: 'Can we use the internet for education?', options: ['No', 'Yes', 'Only for shopping', 'Maybe'], correctAnswer: 1 },
      { id: 'q95-8', question: 'Is Tim Berners-Lee a famous computer scientist?', options: ['No', 'Yes', 'Only in the UK', 'Maybe'], correctAnswer: 1 },
      { id: 'q95-9', question: 'Is a website a place on the web?', options: ['No', 'Yes', 'It is a type of book', 'Maybe'], correctAnswer: 1 },
      { id: 'q95-10', question: 'Do we use browsers to see websites?', options: ['No', 'Yes', 'Only on Sundays', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-96',
    title: 'The Life of a Penguin',
    titleKurdish: 'ژیانا پەنگوینەکی',
    content: 'Penguins are flightless birds that live in the Southern Hemisphere, especially in Antarctica. They are excellent swimmers and spend most of their time in the ocean hunting for fish and krill. Penguins have black and white feathers that provide camouflage while they swim. They live in large colonies and are known for their unique waddling walk.',
    contentKurdish: 'پەنگوین بالندێن نەفڕۆکن کو ل نیڤەکا باشوورێ جیهانێ دژین، ب تایبەتی ل جەمسەرێ باشوور (ئەنتارکتیکا). ئەو مەلەڤانێن نایابن و پڕانیا دەمێ خۆ دناڤ ئۆقیانووسی دا دەرباز دکەن بو نێچیرا ماسی و (کریل). پەنگوینان پەڕێن رەش و سپی یێن هەین کو دبنە ئەگەرێ خۆڤەشارتنێ (کەمۆفلاج) دەمێ مەلەڤانیێ دکەن. ئەو د کۆمێن مەزن دا دژین و ب رێڤەچوونا خۆ یا تایبەت دهێنە نیاسین.',
    level: 'A2',
    questions: [
      { id: 'q96-1', question: 'Can penguins fly?', options: ['Yes', 'No, they are flightless', 'Only a little', 'Maybe'], correctAnswer: 1 },
      { id: 'q96-2', question: 'Where do most penguins live?', options: ['In the Arctic', 'In Antarctica', 'In the jungle', 'In the desert'], correctAnswer: 1 },
      { id: 'q96-3', question: 'Are penguins good swimmers?', options: ['No', 'Yes, excellent', 'Only in summer', 'Maybe'], correctAnswer: 1 },
      { id: 'q96-4', question: 'What do penguins hunt?', options: ['Birds', 'Fish and krill', 'Plants', 'Insects'], correctAnswer: 1 },
      { id: 'q96-5', question: 'What color are a penguin\'s feathers?', options: ['Blue and red', 'Black and white', 'Green', 'Yellow'], correctAnswer: 1 },
      { id: 'q96-6', question: 'Do penguins live in large colonies?', options: ['No', 'Yes', 'Only in pairs', 'Maybe'], correctAnswer: 1 },
      { id: 'q96-7', question: 'What is unique about a penguin\'s walk?', options: ['They run fast', 'They waddle', 'They jump', 'They don\'t walk'], correctAnswer: 1 },
      { id: 'q96-8', question: 'Is Antarctica a cold place?', options: ['No', 'Yes, very cold', 'It is hot', 'Maybe'], correctAnswer: 1 },
      { id: 'q96-9', question: 'Does their color help them hide?', options: ['No', 'Yes, camouflage', 'Only at night', 'Maybe'], correctAnswer: 1 },
      { id: 'q96-10', question: 'Are penguins birds?', options: ['No', 'Yes', 'They are fish', 'They are mammals'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-97',
    title: 'The Invention of the Airplane (Part 2)',
    titleKurdish: 'داهێنانا فرۆکەیێ (پشکا ٢)',
    content: 'The Wright brothers\' first flight lasted only 12 seconds, but it changed the world forever. Their success led to the rapid development of aviation. Within a few decades, airplanes were being used for travel, mail delivery, and even in wars. Today, millions of people fly every day, making the world feel much smaller and more connected.',
    contentKurdish: 'ئێکەمین فڕینا برایێن رایت تەنێ ١٢ چرکە یا درێژ بوو، لێ وێ جیهان بو هەردەم گوهۆڕی. سەرکەفتنا وان بوو ئەگەرێ پێشکەفتنا ب خێرایی یا فرۆکەوانیێ. دناڤ چەند دەه سالان دا، فرۆکە دهاتنە بکارئینان بو گەشتکرنێ، گەهاندنا پۆستەی، و هەتا د شەڕان دا. ئەڤرۆ، ملیۆنان کەس هەمی رۆژان دفرن، کو وای ل جیهانێ دکەت کو گەلەک بچویکتر و پتر ب هەڤ ڤە گرێدای دیار ببیت.',
    level: 'B1',
    questions: [
      { id: 'q97-1', question: 'How long did the first flight last?', options: ['12 minutes', '12 seconds', '1 hour', '1 day'], correctAnswer: 1 },
      { id: 'q97-2', question: 'Did it change the world?', options: ['No', 'Yes, forever', 'Only a little', 'Maybe'], correctAnswer: 1 },
      { id: 'q97-3', question: 'What did their success lead to?', options: ['End of flying', 'Rapid development of aviation', 'More cars', 'Nothing'], correctAnswer: 1 },
      { id: 'q97-4', question: 'What were airplanes used for after a few decades?', options: ['Only for fun', 'Travel, mail, and war', 'Only for food', 'Nothing'], correctAnswer: 1 },
      { id: 'q97-5', question: 'Do many people fly today?', options: ['No', 'Yes, millions every day', 'Only the rich', 'Maybe'], correctAnswer: 1 },
      { id: 'q97-6', question: 'Does flying make the world feel smaller?', options: ['No', 'Yes', 'It makes it feel larger', 'Maybe'], correctAnswer: 1 },
      { id: 'q97-7', question: 'Are the Wright brothers famous?', options: ['No', 'Yes', 'Only in Ohio', 'Maybe'], correctAnswer: 1 },
      { id: 'q97-8', question: 'Is aviation the study of flying?', options: ['No', 'Yes', 'It is the study of cars', 'Maybe'], correctAnswer: 1 },
      { id: 'q97-9', question: 'Was the first flight very short?', options: ['No', 'Yes, only 12 seconds', 'It was long', 'Maybe'], correctAnswer: 1 },
      { id: 'q97-10', question: 'Is an airplane a type of vehicle?', options: ['No', 'Yes', 'It is a type of house', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-98',
    title: 'The Great Barrier Reef (Part 2)',
    titleKurdish: 'کۆمە کەندێن مەزن یێن مەرجانی (پشکا ٢)',
    content: 'The Great Barrier Reef is home to thousands of species of fish, corals, and other marine life. It is so large that it can be seen from space! However, the reef is in danger due to rising ocean temperatures and pollution. Protecting the reef is important to maintain the health of the ocean and preserve its incredible beauty for future generations.',
    contentKurdish: 'کۆمە کەندێن مەزن یێن مەرجانی مالێ هزاران جورێن ماسیان، مەرجانان، و ژیانا دەریایی یا دی یە. ئەو هند یا مەزنە کو دشێت ژ بۆشاییا ئاسمان بهێتە دیتن! لێ، ئەڤ کەندە د مەترسیێ دایە ژبەر بلندبوونا پلەیێن گەرمیا ئۆقیانووسی و پیسبوونا ژینگەی. پاراستنا کەندی یا گرنگە دا ساخلەمیا ئۆقیانووسی بپارێزین و جوانیا وێ یا سەیر بو نەوەیێن پاشەرۆژێ بهێلین.',
    level: 'B1',
    questions: [
      { id: 'q98-1', question: 'What lives in the Great Barrier Reef?', options: ['Only sharks', 'Thousands of species of fish and corals', 'Only birds', 'Nothing'], correctAnswer: 1 },
      { id: 'q98-2', question: 'Can it be seen from space?', options: ['No', 'Yes', 'Only with a telescope', 'Maybe'], correctAnswer: 1 },
      { id: 'q98-3', question: 'Why is the reef in danger?', options: ['Too much fish', 'Rising temperatures and pollution', 'Too many tourists', 'Cold weather'], correctAnswer: 1 },
      { id: 'q98-4', question: 'Is protecting the reef important?', options: ['No', 'Yes', 'Only for Australia', 'Maybe'], correctAnswer: 1 },
      { id: 'q98-5', question: 'Does it help the health of the ocean?', options: ['No', 'Yes', 'Only a little', 'Maybe'], correctAnswer: 1 },
      { id: 'q98-6', question: 'Is the reef beautiful?', options: ['No', 'Yes, incredible beauty', 'It is ugly', 'Maybe'], correctAnswer: 1 },
      { id: 'q98-7', question: 'Are corals animals?', options: ['No', 'Yes', 'They are rocks', 'They are plants'], correctAnswer: 1 },
      { id: 'q98-8', question: 'Is pollution bad for the ocean?', options: ['No', 'Yes', 'It is good', 'Maybe'], correctAnswer: 1 },
      { id: 'q98-9', question: 'Are future generations the people of the future?', options: ['No', 'Yes', 'The people of the past', 'Maybe'], correctAnswer: 1 },
      { id: 'q98-10', question: 'Is the ocean very large?', options: ['No', 'Yes', 'It is small', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-99',
    title: 'The Invention of the Light Bulb (Part 2)',
    titleKurdish: 'داهێنانا گلۆپێ (پشکا ٢)',
    content: 'Thomas Edison\'s light bulb brought light into homes and factories, allowing people to work and study after dark. This led to a major change in how people lived their lives. Before the light bulb, people used candles and oil lamps, which were dim and dangerous. Today, we use energy-efficient LED bulbs that last a long time and save electricity.',
    contentKurdish: 'گلۆپا تۆماس ئەدیسۆنی رووناهی ئینا ناڤ مال و کارگەهان، کو رێ دا خەلکی کو کار بکەن و بخوینن پشتی تاریێ. ئەڤێ چەندێ بوو ئەگەرێ گوهۆڕینەکا مەزن د شێوازێ ژیانا خەلکی دا. بەری گلۆپێ، خەلکی مۆم و چرایێن نەفتێ بکار دئینان، کو کێم رووناهی بوون و ب مەترسی بوون. ئەڤرۆ، ئەم گلۆپێن (LED) یێن ب هێز بکار دئینین کو بو دەمەکێ درێژ دمینن و کارەبێ دپارێزن.',
    level: 'B1',
    questions: [
      { id: 'q95-1', question: 'What did the light bulb allow people to do?', options: ['Sleep more', 'Work and study after dark', 'Fly', 'Nothing'], correctAnswer: 1 },
      { id: 'q95-2', question: 'What did people use before the light bulb?', options: ['Flashlights', 'Candles and oil lamps', 'Electricity', 'Nothing'], correctAnswer: 1 },
      { id: 'q95-3', question: 'Were candles dim and dangerous?', options: ['No', 'Yes', 'They were very bright', 'Maybe'], correctAnswer: 1 },
      { id: 'q95-4', question: 'What do we use today?', options: ['Only candles', 'Energy-efficient LED bulbs', 'Only oil lamps', 'Nothing'], correctAnswer: 1 },
      { id: 'q95-5', question: 'Do LED bulbs save electricity?', options: ['No', 'Yes', 'Only a little', 'Maybe'], correctAnswer: 1 },
      { id: 'q95-6', question: 'Did the light bulb change how people lived?', options: ['No', 'Yes', 'Only in the USA', 'Maybe'], correctAnswer: 1 },
      { id: 'q95-7', question: 'Is Thomas Edison a famous inventor?', options: ['No', 'Yes', 'Only for phones', 'Maybe'], correctAnswer: 1 },
      { id: 'q95-8', question: 'Is light important for reading?', options: ['No', 'Yes', 'Only in winter', 'Maybe'], correctAnswer: 1 },
      { id: 'q95-9', question: 'Is a factory a place where things are made?', options: ['No', 'Yes', 'It is a type of house', 'Maybe'], correctAnswer: 1 },
      { id: 'q95-10', question: 'Is electricity used for light bulbs?', options: ['No', 'Yes', 'Only for cars', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-100',
    title: 'The Future of Technology',
    titleKurdish: 'پاشەرۆژا تەکنۆلۆژیایێ',
    content: 'Technology is constantly changing and improving. In the future, we might see self-driving cars, advanced artificial intelligence, and even trips to Mars! These inventions will continue to change our lives in ways we can only imagine. It is an exciting time to be alive and see how technology will shape the world of tomorrow. The possibilities are endless!',
    contentKurdish: 'تەکنۆلۆژیا هەردەم یا د گوهۆڕین و پێشکەفتنێ دایە. د پاشەرۆژێ دا، رەنگە ئەم فرۆکەیێن بێ شوفێر، ژیرییا دەستکرد یا پێشکەفتی، و هەتا گەشتێن بو هەسارەیا مەریخ ببینین! ئەڤ داهێنانە دێ بەردەوام بن ل سەر گوهۆڕینا ژیانا مە ب شێوازێن کو ئەم تەنێ دشێین خەیال بکەین. دەمەکێ ب کەیفە کو مرۆڤ یێ زیندی بیت و ببینیت کا دێ چەوان تەکنۆلۆژیا جیهانا سوبەهی دروست کەت. ئەگەر گەلەکن و بێ دوماهیکن!',
    level: 'B1',
    questions: [
      { id: 'q100-1', question: 'Is technology constantly changing?', options: ['No', 'Yes', 'Only a little', 'Maybe'], correctAnswer: 1 },
      { id: 'q100-2', question: 'What might we see in the future?', options: ['Only old cars', 'Self-driving cars and advanced AI', 'Nothing new', 'Only radios'], correctAnswer: 1 },
      { id: 'q100-3', question: 'Where might people travel to in the future?', options: ['Only to the moon', 'To Mars', 'Only to the beach', 'Nowhere'], correctAnswer: 1 },
      { id: 'q100-4', question: 'Will technology continue to change our lives?', options: ['No', 'Yes', 'Only in the city', 'Maybe'], correctAnswer: 1 },
      { id: 'q100-5', question: 'Is it an exciting time to be alive?', options: ['No', 'Yes', 'It is boring', 'Maybe'], correctAnswer: 1 },
      { id: 'q100-6', question: 'Are the possibilities of technology endless?', options: ['No', 'Yes', 'They are limited', 'Maybe'], correctAnswer: 1 },
      { id: 'q100-7', question: 'Is artificial intelligence (AI) a type of technology?', options: ['No', 'Yes', 'It is a type of food', 'Maybe'], correctAnswer: 1 },
      { id: 'q100-8', question: 'Is Mars a planet?', options: ['No', 'Yes', 'It is a star', 'Maybe'], correctAnswer: 1 },
      { id: 'q100-9', question: 'Does technology shape the world?', options: ['No', 'Yes', 'Only in movies', 'Maybe'], correctAnswer: 1 },
      { id: 'q100-10', question: 'Is "tomorrow" the future?', options: ['No', 'Yes', 'It is the past', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-101',
    title: 'The Little Cat',
    titleKurdish: 'پشیکا بچویک',
    content: 'Mimi is a small white cat. She likes to play with a red ball. Every morning, she drinks milk and sits by the window. She watches the birds in the garden. Mimi is very happy when her owner pets her. She purrs loudly and falls asleep on the sofa.',
    contentKurdish: 'میمی پشیکەکا سپی یا بچویکە. ئەو حەز دکەت یاریێ ب تەپەکا سور بکەت. هەر سپێدێ، ئەو شیرێ دخۆت و ل نێزیک پەنجەرێ دنیشیت. ئەو تەماشەی چویکان دکەت د باخچەی دا. میمی گەلەک یا کەیفخۆشە دەما خودانێ وێ دەستێ خۆ ب سەر دا دئینیت. ئەو دەنگەکێ خوش ژ خۆ دئینیت و ل سەر قەنەفێ دنڤیت.',
    level: 'A1',
    questions: [
      { id: 'q101-1', question: 'What color is Mimi?', options: ['Black', 'White', 'Brown', 'Grey'], correctAnswer: 1 },
      { id: 'q101-2', question: 'What does Mimi like to play with?', options: ['A blue ball', 'A red ball', 'A toy mouse', 'A stick'], correctAnswer: 1 },
      { id: 'q101-3', question: 'What does she drink in the morning?', options: ['Water', 'Milk', 'Juice', 'Tea'], correctAnswer: 1 },
      { id: 'q101-4', question: 'Where does she sit?', options: ['On the table', 'By the window', 'Under the bed', 'In the kitchen'], correctAnswer: 1 },
      { id: 'q101-5', question: 'What does she watch in the garden?', options: ['Dogs', 'Birds', 'Cats', 'Flowers'], correctAnswer: 1 },
      { id: 'q101-6', question: 'How does Mimi feel when petted?', options: ['Sad', 'Happy', 'Angry', 'Scared'], correctAnswer: 1 },
      { id: 'q101-7', question: 'Where does she fall asleep?', options: ['On the floor', 'On the sofa', 'In her bed', 'In the garden'], correctAnswer: 1 },
      { id: 'q101-8', question: 'Is Mimi a big cat?', options: ['Yes', 'No, she is small', 'She is a giant', 'Maybe'], correctAnswer: 1 },
      { id: 'q101-9', question: 'Does she like the red ball?', options: ['No', 'Yes', 'She hates it', 'Maybe'], correctAnswer: 1 },
      { id: 'q101-10', question: 'What sound does she make when happy?', options: ['Bark', 'Purr', 'Meow', 'Roar'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-102',
    title: 'The Big Apple Tree',
    titleKurdish: 'دارا سێڤان یا مەزن',
    content: 'In our garden, there is a big apple tree. In autumn, the apples are red and sweet. My brother and I pick the apples and put them in a basket. My mother makes a delicious apple pie. We love to eat the pie with some cream. The tree is very old and tall.',
    contentKurdish: 'د باخچێ مە دا، دارەکا سێڤان یا مەزن هەیه. د پایزێ دا، سێڤ یێن سور و شرینن. ئەز و برایێ خۆ سێڤان کۆم دکەین و دکەینە دناڤ سەبەتەکێ دا. دایکا من پایەکا سێڤان یا خوش چێدکەت. ئەم حەز دکەین پایێ دگەل هندەک کریمێ بخۆین. دار گەلەک یا پیر و بلندە.',
    level: 'A1',
    questions: [
      { id: 'q102-1', question: 'What kind of tree is in the garden?', options: ['Orange tree', 'Apple tree', 'Pear tree', 'Lemon tree'], correctAnswer: 1 },
      { id: 'q102-2', question: 'When are the apples red and sweet?', options: ['Spring', 'Summer', 'Autumn', 'Winter'], correctAnswer: 2 },
      { id: 'q102-3', question: 'Who picks the apples?', options: ['The father', 'The brother and I', 'The sister', 'The neighbor'], correctAnswer: 1 },
      { id: 'q102-4', question: 'Where do they put the apples?', options: ['In a bag', 'In a basket', 'In a box', 'On the floor'], correctAnswer: 1 },
      { id: 'q102-5', question: 'What does the mother make?', options: ['Apple juice', 'Apple pie', 'Apple cake', 'Apple jam'], correctAnswer: 1 },
      { id: 'q102-6', question: 'What do they eat with the pie?', options: ['Milk', 'Cream', 'Sugar', 'Honey'], correctAnswer: 1 },
      { id: 'q102-7', question: 'Is the tree new?', options: ['Yes', 'No, it is old', 'It was planted yesterday', 'Maybe'], correctAnswer: 1 },
      { id: 'q102-8', question: 'Is the tree short?', options: ['Yes', 'No, it is tall', 'It is very small', 'Maybe'], correctAnswer: 1 },
      { id: 'q102-9', question: 'What color are the apples?', options: ['Green', 'Red', 'Yellow', 'Blue'], correctAnswer: 1 },
      { id: 'q102-10', question: 'Do they like the apple pie?', options: ['No', 'Yes', 'They hate it', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-103',
    title: 'A Day at the Beach',
    titleKurdish: 'روژەک ل کەنارێ دەریایێ',
    content: 'Last Saturday, we went to the beach. The sun was shining and the water was blue. I built a big sandcastle with my sister. My father went swimming in the sea. We ate sandwiches and drank cold water. In the evening, we saw a beautiful sunset. It was a perfect day.',
    contentKurdish: 'شەمبیا بووری، ئەم چوونە کەنارێ دەریایێ. روژێ ددرەوشا و ئاڤ یا شین بوو. من قەسرەکا لمێ یا مەزن دگەل خوشکا خۆ چێکر. بابێ من چوو مەلەڤانیێ د دەریایێ دا. مە سەندەویچ خوارن و ئاڤا سار ڤەخوار. ئێڤاری، مە ئاڤابوونا روژێ یا جوان دیت. ئەو روژەکا نایاب بوو.',
    level: 'A1',
    questions: [
      { id: 'q103-1', question: 'When did they go to the beach?', options: ['Friday', 'Saturday', 'Sunday', 'Monday'], correctAnswer: 1 },
      { id: 'q103-2', question: 'What was the weather like?', options: ['Rainy', 'Sunny', 'Cloudy', 'Snowy'], correctAnswer: 1 },
      { id: 'q103-3', question: 'What color was the water?', options: ['Green', 'Blue', 'Grey', 'Black'], correctAnswer: 1 },
      { id: 'q103-4', question: 'What did the narrator build?', options: ['A boat', 'A sandcastle', 'A house', 'A bridge'], correctAnswer: 1 },
      { id: 'q103-5', question: 'Who did the narrator build it with?', options: ['The brother', 'The sister', 'The mother', 'The friend'], correctAnswer: 1 },
      { id: 'q103-6', question: 'What did the father do?', options: ['Slept', 'Went swimming', 'Read a book', 'Played football'], correctAnswer: 1 },
      { id: 'q103-7', question: 'What did they eat?', options: ['Pizza', 'Sandwiches', 'Burgers', 'Pasta'], correctAnswer: 1 },
      { id: 'q103-8', question: 'What did they drink?', options: ['Juice', 'Cold water', 'Milk', 'Tea'], correctAnswer: 1 },
      { id: 'q103-9', question: 'What did they see in the evening?', options: ['The moon', 'A beautiful sunset', 'Stars', 'Rain'], correctAnswer: 1 },
      { id: 'q103-10', question: 'Was it a bad day?', options: ['Yes', 'No, it was perfect', 'It was okay', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-104',
    title: 'The Fast Rabbit',
    titleKurdish: 'کێروشکێ خێرا',
    content: 'The rabbit is very fast. He can run and jump in the field. He likes to eat carrots and green grass. He has long ears and a small tail. In the afternoon, he hides in the bushes to sleep. He is very scared of big dogs. He always runs away when he hears a loud noise.',
    contentKurdish: 'کێروشک گەلەک یێ خێرایە. ئەو دشێت بڕەڤیت و باز بدەت د دەشتێ دا. ئەو حەز دکەت گێزەران و گیایێ کەسک بخۆت. ئەو گوهێن درێژ و کلکەکێ بچویک یێ هەین. پشتی نیڤرۆ، ئەو خۆ دناڤ دەوەنان دا ڤەشێریت دا بنڤیت. ئەو گەلەک ژ سەگێن مەزن دترسیت. ئەو هەردەم دڕەڤیت دەما گوه ل دەنگەکێ بلند دبیت.',
    level: 'A1',
    questions: [
      { id: 'q104-1', question: 'Is the rabbit slow?', options: ['Yes', 'No, he is fast', 'He is medium', 'Maybe'], correctAnswer: 1 },
      { id: 'q104-2', question: 'Where can he run and jump?', options: ['In the house', 'In the field', 'In the water', 'On the road'], correctAnswer: 1 },
      { id: 'q104-3', question: 'What does he like to eat?', options: ['Meat', 'Carrots and grass', 'Bread', 'Fruit'], correctAnswer: 1 },
      { id: 'q104-4', question: 'What kind of ears does he have?', options: ['Short', 'Long', 'Small', 'No ears'], correctAnswer: 1 },
      { id: 'q104-5', question: 'What kind of tail does he have?', options: ['Long', 'Small', 'Big', 'No tail'], correctAnswer: 1 },
      { id: 'q104-6', question: 'When does he sleep?', options: ['In the morning', 'In the afternoon', 'At night', 'Never'], correctAnswer: 1 },
      { id: 'q104-7', question: 'Where does he hide to sleep?', options: ['In a house', 'In the bushes', 'In a tree', 'In a hole'], correctAnswer: 1 },
      { id: 'q104-8', question: 'What is he scared of?', options: ['Cats', 'Big dogs', 'Birds', 'Mice'], correctAnswer: 1 },
      { id: 'q104-9', question: 'What does he do when he hears a loud noise?', options: ['He sleeps', 'He runs away', 'He fights', 'He sings'], correctAnswer: 1 },
      { id: 'q104-10', question: 'Is the rabbit brave?', options: ['Yes', 'No, he is scared', 'Maybe', 'He is a hero'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-105',
    title: 'The New School Bag',
    titleKurdish: 'جانتا قوتابخانێ یێ نوی',
    content: 'Sara has a new school bag. It is blue and has many pockets. She puts her books, pencils, and notebooks inside. She also has a small lunchbox with an apple. Sara is very happy to go to school with her new bag. Her friends like the bag too. It is very strong and can carry many things.',
    contentKurdish: 'سارایێ جانتایەکێ نوی یێ قوتابخانێ یێ هەى. ئەو یێ شینە و گەلەک جێبێن هەین. ئەو کتێب، قەلەم، و دەفتەرێن خۆ دکەتە دناڤ دا. هەروەسا قۆتیکەکا تێشتێ یا بچویک یا دگەل سێڤەکێ. سارا گەلەک یا کەیفخۆشە بچیتە قوتابخانێ دگەل جانتایێ خۆ یێ نوی. هەڤالێن وێ ژی حەز ژ جانتای دکەن. ئەو گەلەک یێ ب هێزە و دشێت گەلەک تشتان هەلگریت.',
    level: 'A1',
    questions: [
      { id: 'q105-1', question: 'What does Sara have?', options: ['A new bike', 'A new school bag', 'A new toy', 'A new dress'], correctAnswer: 1 },
      { id: 'q105-2', question: 'What color is the bag?', options: ['Red', 'Blue', 'Green', 'Yellow'], correctAnswer: 1 },
      { id: 'q105-3', question: 'Does the bag have pockets?', options: ['No', 'Yes, many', 'Only one', 'Maybe'], correctAnswer: 1 },
      { id: 'q105-4', question: 'What does she put inside?', options: ['Toys', 'Books, pencils, and notebooks', 'Clothes', 'Food only'], correctAnswer: 1 },
      { id: 'q105-5', question: 'What is in her lunchbox?', options: ['A banana', 'An apple', 'An orange', 'A pear'], correctAnswer: 1 },
      { id: 'q105-6', question: 'How does Sara feel?', options: ['Sad', 'Happy', 'Angry', 'Tired'], correctAnswer: 1 },
      { id: 'q105-7', question: 'Do her friends like the bag?', options: ['No', 'Yes', 'They hate it', 'Maybe'], correctAnswer: 1 },
      { id: 'q105-8', question: 'Is the bag weak?', options: ['Yes', 'No, it is strong', 'It is broken', 'Maybe'], correctAnswer: 1 },
      { id: 'q105-9', question: 'Can the bag carry many things?', options: ['No', 'Yes', 'Only one thing', 'Maybe'], correctAnswer: 1 },
      { id: 'q105-10', question: 'Where is Sara going?', options: ['To the park', 'To school', 'To the shop', 'To the beach'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-106',
    title: 'The Rain',
    titleKurdish: 'باران',
    content: 'Today it is raining. The sky is grey and the clouds are big. I wear my yellow raincoat and my boots. I like to jump in the puddles. The flowers and trees are happy because they need water. After the rain, we can see a beautiful rainbow in the sky. I love the smell of the earth after it rains.',
    contentKurdish: 'ئەڤرۆ باران دباریت. ئەسمان یێ ڕەساسی یە و عەور یێن مەزنن. ئەز چاکەتێ خۆ یێ بارانێ یێ زەرد و پووتێن خۆ دپۆشم. ئەز حەز دکەم باز بدەمە دناڤ گۆلێن ئاڤێ دا. گول و دار د کەیفخۆشن چونکی ئەو پێدڤی ب ئاڤێ نە. پشتی بارانێ، ئەم دشێین کەسک و سۆرەکا جوان د ئەسمانی دا ببینین. ئەز حەز ژ بێنا ئەردی دکەم پشتی باران دباریت.',
    level: 'A1',
    questions: [
      { id: 'q106-1', question: 'What is the weather like today?', options: ['Sunny', 'Raining', 'Snowing', 'Windy'], correctAnswer: 1 },
      { id: 'q106-2', question: 'What color is the sky?', options: ['Blue', 'Grey', 'White', 'Black'], correctAnswer: 1 },
      { id: 'q106-3', question: 'What color is the raincoat?', options: ['Red', 'Yellow', 'Blue', 'Green'], correctAnswer: 1 },
      { id: 'q106-4', question: 'What does the narrator like to jump in?', options: ['Mud', 'Puddles', 'The sea', 'The pool'], correctAnswer: 1 },
      { id: 'q106-5', question: 'Why are the flowers and trees happy?', options: ['They like the sun', 'They need water', 'They are sleeping', 'They are growing'], correctAnswer: 1 },
      { id: 'q106-6', question: 'What can be seen after the rain?', options: ['The moon', 'A rainbow', 'Stars', 'The sun only'], correctAnswer: 1 },
      { id: 'q106-7', question: 'Does the narrator like the smell of the earth?', options: ['No', 'Yes', 'It smells bad', 'Maybe'], correctAnswer: 1 },
      { id: 'q106-8', question: 'Are the clouds small?', options: ['Yes', 'No, they are big', 'There are no clouds', 'Maybe'], correctAnswer: 1 },
      { id: 'q106-9', question: 'What does the narrator wear on their feet?', options: ['Shoes', 'Boots', 'Sandals', 'Socks only'], correctAnswer: 1 },
      { id: 'q106-10', question: 'Is it a sunny day?', options: ['Yes', 'No', 'Maybe', 'It is very hot'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-107',
    title: 'The Little Bird\'s Nest',
    titleKurdish: 'هێلینا چویکێ بچویک',
    content: 'A little bird is building a nest in the tree. She uses small sticks and dry grass. She works very hard all day. Soon, she will lay her eggs in the nest. She will keep the eggs warm. After some time, the baby birds will come out. They will be very hungry and the mother bird will bring them food.',
    contentKurdish: 'چویکەکا بچویک هێلینەکێ د دارێ دا دروست دکەت. ئەو چقێن بچویک و گیایێ هشک بکار دئینیت. ئەو هەمی روژێ ب زەحمەت کار دکەت. نێزیک، ئەو دێ هێکێن خۆ د هێلینێ دا کەت. ئەو دێ هێکان گەرم پارێزیت. پشتی دەمەکی، چویکێن بچویک دێ دەرکەڤن. ئەو دێ گەلەک برسی بن و دایکا وان دێ خوارنێ بو وان ئینیت.',
    level: 'A1',
    questions: [
      { id: 'q107-1', question: 'What is the bird building?', options: ['A house', 'A nest', 'A cage', 'A box'], correctAnswer: 1 },
      { id: 'q107-2', question: 'Where is she building it?', options: ['On the ground', 'In the tree', 'On the roof', 'In the garden'], correctAnswer: 1 },
      { id: 'q107-3', question: 'What does she use?', options: ['Stones', 'Small sticks and dry grass', 'Paper', 'Cloth'], correctAnswer: 1 },
      { id: 'q107-4', question: 'Does she work hard?', options: ['No', 'Yes', 'She is lazy', 'Maybe'], correctAnswer: 1 },
      { id: 'q107-5', question: 'What will she lay in the nest?', options: ['Food', 'Eggs', 'Toys', 'Stones'], correctAnswer: 1 },
      { id: 'q107-6', question: 'How will she keep the eggs?', options: ['Cold', 'Warm', 'Wet', 'Dry'], correctAnswer: 1 },
      { id: 'q107-7', question: 'What will come out of the eggs?', options: ['Snakes', 'Baby birds', 'Lizards', 'Insects'], correctAnswer: 1 },
      { id: 'q107-8', question: 'Will the baby birds be hungry?', options: ['No', 'Yes', 'They will be full', 'Maybe'], correctAnswer: 1 },
      { id: 'q107-9', question: 'Who will bring them food?', options: ['The father bird', 'The mother bird', 'The children', 'The farmer'], correctAnswer: 1 },
      { id: 'q107-10', question: 'Is the bird big?', options: ['Yes', 'No, it is little', 'It is a giant', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-108',
    title: 'The Red Bicycle',
    titleKurdish: 'بایسکلا سور',
    content: 'Ahmed has a red bicycle. He rides it to the park every afternoon. He wears a black helmet to be safe. He likes to go fast down the hill. Sometimes he rides with his friends. They have a lot of fun together. Ahmed takes good care of his bicycle and keeps it clean.',
    contentKurdish: 'ئەحمەدی بایسکلەکا سور یا هەى. ئەو هەر ئێڤاری پێ دچیتە پارکی. ئەو کڵاوەکێ رەش دپۆشیت دا یێ پاراستی بیت. ئەو حەز دکەت ب خێرایی ل گردی بێتە خوار. جاران ئەو دگەل هەڤالێن خۆ دچیت. ئەو پێکڤە گەلەک کەیفێ دکەن. ئەحمەد باش هایداری بایسکلا خۆ دبیت و یا پاقژ دپارێزیت.',
    level: 'A1',
    questions: [
      { id: 'q108-1', question: 'What color is Ahmed\'s bicycle?', options: ['Blue', 'Red', 'Green', 'Yellow'], correctAnswer: 1 },
      { id: 'q108-2', question: 'Where does he ride it?', options: ['To school', 'To the park', 'To the shop', 'To the beach'], correctAnswer: 1 },
      { id: 'q108-3', question: 'When does he ride it?', options: ['Every morning', 'Every afternoon', 'At night', 'Never'], correctAnswer: 1 },
      { id: 'q108-4', question: 'What color is his helmet?', options: ['Red', 'Black', 'White', 'Blue'], correctAnswer: 1 },
      { id: 'q108-5', question: 'Why does he wear a helmet?', options: ['To look cool', 'To be safe', 'To keep warm', 'Because it is raining'], correctAnswer: 1 },
      { id: 'q108-6', question: 'Does he like to go fast?', options: ['No', 'Yes', 'He is scared', 'Maybe'], correctAnswer: 1 },
      { id: 'q108-7', question: 'Who does he ride with sometimes?', options: ['His parents', 'His friends', 'His teacher', 'Alone only'], correctAnswer: 1 },
      { id: 'q108-8', question: 'Do they have fun?', options: ['No', 'Yes', 'They are bored', 'Maybe'], correctAnswer: 1 },
      { id: 'q108-9', question: 'Does Ahmed take care of his bike?', options: ['No', 'Yes', 'He breaks it', 'Maybe'], correctAnswer: 1 },
      { id: 'q108-10', question: 'Does he keep it clean?', options: ['No', 'Yes', 'It is always dirty', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-109',
    title: 'The Big Blue Whale',
    titleKurdish: 'نەهەنگێ شین یێ مەزن',
    content: 'The blue whale is the biggest animal in the world. It lives in the ocean and eats small fish. It is very strong and can swim for a long time. The blue whale is not a fish, it is a mammal. It needs to come to the surface to breathe air. We must protect these beautiful animals.',
    contentKurdish: 'نەهەنگێ شین مەزنترین گیانەوەرە ل جیهانێ. ئەو د دەریایێ دا دژیت و ماسیێن بچویک دخۆت. ئەو گەلەک یێ ب هێزە و دشێت بو دەمەکێ درێژ مەلە بکەت. نەهەنگێ شین نە ماسی یە، ئەو مەمکدارە. ئەو پێدڤی یە بێتە سەر ئاڤێ دا بێهنێ وەربگریت. ئەم پێدڤی یە ڤان گیانەوەرێن جوان بپارێزین.',
    level: 'A2',
    questions: [
      { id: 'q109-1', question: 'Which is the biggest animal in the world?', options: ['Elephant', 'Blue whale', 'Shark', 'Giraffe'], correctAnswer: 1 },
      { id: 'q109-2', question: 'Where does it live?', options: ['In a river', 'In the ocean', 'In a lake', 'On land'], correctAnswer: 1 },
      { id: 'q109-3', question: 'What does it eat?', options: ['Plants', 'Small fish', 'Big sharks', 'Bread'], correctAnswer: 1 },
      { id: 'q109-4', question: 'Is it strong?', options: ['No', 'Yes', 'It is weak', 'Maybe'], correctAnswer: 1 },
      { id: 'q109-5', question: 'Is the blue whale a fish?', options: ['Yes', 'No, it is a mammal', 'Maybe', 'It is a bird'], correctAnswer: 1 },
      { id: 'q109-6', question: 'Why does it come to the surface?', options: ['To sleep', 'To breathe air', 'To eat', 'To play'], correctAnswer: 1 },
      { id: 'q109-7', question: 'Can it swim for a long time?', options: ['No', 'Yes', 'Only for five minutes', 'Maybe'], correctAnswer: 1 },
      { id: 'q109-8', question: 'What color is the whale?', options: ['Grey', 'Blue', 'Black', 'White'], correctAnswer: 1 },
      { id: 'q109-9', question: 'Should we protect it?', options: ['No', 'Yes', 'It is dangerous', 'Maybe'], correctAnswer: 1 },
      { id: 'q109-10', question: 'Is it a small animal?', options: ['Yes', 'No, it is the biggest', 'It is medium', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-110',
    title: 'The Garden Flowers',
    titleKurdish: 'گولێن باخچەی',
    content: 'My grandmother has a beautiful garden. There are many flowers like roses, lilies, and tulips. They are red, yellow, and white. My grandmother waters them every evening. She talks to the flowers and says they are her friends. The garden smells very nice. I like to sit there and read a book.',
    contentKurdish: 'داپیرا من باخچەکێ جوان یێ هەى. گەلەک گولێن وەک جۆری، لۆلۆ، و لالا ل وێرێ هەین. ئەو یێن سور، زەرد، و سپینە. داپیرا من هەر ئێڤاری ئاڤ ددەتە وان. ئەو دگەل گولان دئاخڤیت و دبێژیت ئەو هەڤالێن وێنە. باخچە بێنا وی گەلەک یا خوشە. ئەز حەز دکەم ل وێرێ بنیشم و کتێبەکێ بخوینم.',
    level: 'A1',
    questions: [
      { id: 'q110-1', question: 'Who has a beautiful garden?', options: ['The mother', 'The grandmother', 'The teacher', 'The neighbor'], correctAnswer: 1 },
      { id: 'q110-2', question: 'What kind of flowers are there?', options: ['Roses, lilies, and tulips', 'Only roses', 'Only trees', 'No flowers'], correctAnswer: 0 },
      { id: 'q110-3', question: 'What colors are the flowers?', options: ['Blue and green', 'Red, yellow, and white', 'Black and grey', 'Purple only'], correctAnswer: 1 },
      { id: 'q110-4', question: 'When does the grandmother water them?', options: ['Every morning', 'Every evening', 'At night', 'Never'], correctAnswer: 1 },
      { id: 'q110-5', question: 'Does she talk to the flowers?', options: ['No', 'Yes', 'She is scared of them', 'Maybe'], correctAnswer: 1 },
      { id: 'q110-6', question: 'Who are the flowers to her?', options: ['Enemies', 'Friends', 'Food', 'Nothing'], correctAnswer: 1 },
      { id: 'q110-7', question: 'How does the garden smell?', options: ['Bad', 'Very nice', 'Like smoke', 'No smell'], correctAnswer: 1 },
      { id: 'q110-8', question: 'What does the narrator like to do there?', options: ['Sleep', 'Read a book', 'Play football', 'Eat lunch'], correctAnswer: 1 },
      { id: 'q110-9', question: 'Is the garden ugly?', options: ['Yes', 'No, it is beautiful', 'It is okay', 'Maybe'], correctAnswer: 1 },
      { id: 'q110-10', question: 'Are there tulips in the garden?', options: ['No', 'Yes', 'Only roses', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-111',
    title: 'The Little Dog',
    titleKurdish: 'سەگێ بچویک',
    content: 'Buddy is a little brown dog. He has a short tail and big ears. He likes to bark at the mailman. Every afternoon, we go for a walk in the park. Buddy runs fast and catches a ball. He is very friendly and loves children. At night, he sleeps in a small basket near my bed.',
    contentKurdish: 'بەدی سەگەکێ قاوەیی یێ بچویکە. ئەو کلکەکێ کورت و گوهێن مەزن یێن هەین. ئەو حەز دکەت ل بەر پۆستەچی بڕەئیت. هەر ئێڤاری، ئەم دچینە پیاسەکێ دناڤ پارکی دا. بەدی ب خێرایی دڕەڤیت و تەپەکێ دگریت. ئەو گەلەک یێ دلۆڤانە و حەز ژ زارۆکان دکەت. ب شەڤ، ئەو دناڤ سەبەتەکا بچویک دا ل نێزیک تەختێ من دنڤیت.',
    level: 'A1',
    questions: [
      { id: 'q111-1', question: 'What color is Buddy?', options: ['Black', 'Brown', 'White', 'Grey'], correctAnswer: 1 },
      { id: 'q111-2', question: 'What kind of tail does he have?', options: ['Long', 'Short', 'No tail', 'Big'], correctAnswer: 1 },
      { id: 'q111-3', question: 'Who does he bark at?', options: ['The cat', 'The mailman', 'The children', 'The birds'], correctAnswer: 1 },
      { id: 'q111-4', question: 'Where do they go every afternoon?', options: ['To school', 'To the park', 'To the shop', 'To the beach'], correctAnswer: 1 },
      { id: 'q111-5', question: 'What does Buddy catch?', options: ['A bird', 'A ball', 'A stick', 'A cat'], correctAnswer: 1 },
      { id: 'q111-6', question: 'Is Buddy friendly?', options: ['No', 'Yes', 'He is mean', 'Maybe'], correctAnswer: 1 },
      { id: 'q111-7', question: 'Does he love children?', options: ['No', 'Yes', 'He is scared of them', 'Maybe'], correctAnswer: 1 },
      { id: 'q111-8', question: 'Where does he sleep at night?', options: ['On the sofa', 'In a small basket', 'Outside', 'On the bed'], correctAnswer: 1 },
      { id: 'q111-9', question: 'Is Buddy a big dog?', options: ['Yes', 'No, he is little', 'He is a giant', 'Maybe'], correctAnswer: 1 },
      { id: 'q111-10', question: 'What color are his ears?', options: ['Small', 'Big', 'No ears', 'Long'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-112',
    title: 'The Morning Sun',
    titleKurdish: 'روژا سپێدێ',
    content: 'The sun comes up in the morning. It is bright and warm. The birds start to sing in the trees. I wake up and open my window. I see the blue sky and the green grass. I eat my breakfast and get ready for school. The morning is a beautiful time of the day. I feel happy and full of energy.',
    contentKurdish: 'روژ سپێدێ دهێتە دەر. ئەو یا گەش و گەرمە. چویک دەست ب ستران گۆتنێ دکەن دناڤ داران دا. ئەز رادبم و پەنجەرا خۆ ڤەدکەم. ئەز ئەسمانێ شین و گیایێ کەسک دبینم. ئەز تێشتێ دخۆم و خۆ بو قوتابخانێ بەرهەڤ دکەم. سپێدە دەمەکێ جوانە ژ روژێ. ئەز هەست ب کەیفخۆشیێ و وزەیەکا مەزن دکەم.',
    level: 'A1',
    questions: [
      { id: 'q112-1', question: 'When does the sun come up?', options: ['In the evening', 'In the morning', 'At night', 'At noon'], correctAnswer: 1 },
      { id: 'q112-2', question: 'Is the sun cold?', options: ['Yes', 'No, it is warm', 'It is freezing', 'Maybe'], correctAnswer: 1 },
      { id: 'q112-3', question: 'Who starts to sing?', options: ['The cats', 'The birds', 'The dogs', 'The people'], correctAnswer: 1 },
      { id: 'q112-4', question: 'What does the narrator open?', options: ['The door', 'The window', 'A book', 'A box'], correctAnswer: 1 },
      { id: 'q112-5', question: 'What color is the sky?', options: ['Grey', 'Blue', 'Red', 'Black'], correctAnswer: 1 },
      { id: 'q112-6', question: 'What color is the grass?', options: ['Yellow', 'Green', 'Brown', 'Blue'], correctAnswer: 1 },
      { id: 'q112-7', question: 'What does the narrator eat?', options: ['Lunch', 'Breakfast', 'Dinner', 'Snack'], correctAnswer: 1 },
      { id: 'q112-8', question: 'Where is the narrator going?', options: ['To the park', 'To school', 'To the shop', 'To the beach'], correctAnswer: 1 },
      { id: 'q112-9', question: 'How does the narrator feel?', options: ['Sad', 'Happy', 'Angry', 'Tired'], correctAnswer: 1 },
      { id: 'q112-10', question: 'Is the morning a beautiful time?', options: ['No', 'Yes', 'It is ugly', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-113',
    title: 'The Toy Shop',
    titleKurdish: 'دوکانا یاریان',
    content: 'There is a big toy shop in the city. It has many toys like dolls, cars, and puzzles. I like to go there with my father. I want a new robot for my birthday. The shop is very colorful and loud. Many children are there with their parents. It is a very happy place for everyone.',
    contentKurdish: 'دوکانەکا مەزن یا یاریان ل باژێری هەى. گەلەک یاریێن وەک بویک، ترومبێل، و پەزل ل وێرێ هەین. ئەز حەز دکەم دگەل بابێ خۆ بچمە وێرێ. ئەز رۆبۆتەکێ نوی بو روژبوونا خۆ دڤێت. دوکان گەلەک یا رەنگاوڕەنگ و ب دەنگە. گەلەک زارۆک ل وێرێ نە دگەل دایک و بابێن خۆ. ئەو جهەکێ گەلەک یێ کەیفخۆشە بو هەمی کەسان.',
    level: 'A1',
    questions: [
      { id: 'q113-1', question: 'Where is the toy shop?', options: ['In a village', 'In the city', 'In a forest', 'At the beach'], correctAnswer: 1 },
      { id: 'q113-2', question: 'What kind of toys are there?', options: ['Dolls, cars, and puzzles', 'Only dolls', 'Only cars', 'No toys'], correctAnswer: 0 },
      { id: 'q113-3', question: 'Who does the narrator go with?', options: ['The mother', 'The father', 'The teacher', 'The friend'], correctAnswer: 1 },
      { id: 'q113-4', question: 'What does the narrator want for their birthday?', options: ['A doll', 'A new robot', 'A car', 'A puzzle'], correctAnswer: 1 },
      { id: 'q113-5', question: 'Is the shop quiet?', options: ['Yes', 'No, it is loud', 'It is very silent', 'Maybe'], correctAnswer: 1 },
      { id: 'q113-6', question: 'Is the shop colorful?', options: ['No', 'Yes', 'It is only black and white', 'Maybe'], correctAnswer: 1 },
      { id: 'q113-7', question: 'Who are the children with?', options: ['Their teachers', 'Their parents', 'Their friends', 'Alone'], correctAnswer: 1 },
      { id: 'q113-8', question: 'Is it a sad place?', options: ['Yes', 'No, it is happy', 'It is boring', 'Maybe'], correctAnswer: 1 },
      { id: 'q113-9', question: 'Does the shop have puzzles?', options: ['No', 'Yes', 'Only dolls', 'Maybe'], correctAnswer: 1 },
      { id: 'q113-10', question: 'What is the shop full of?', options: ['Food', 'Toys', 'Clothes', 'Books'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-114',
    title: 'The Little Fish',
    titleKurdish: 'ماسیێ بچویک',
    content: 'Finny is a little orange fish. He lives in a big glass bowl. He has small fins and a long tail. He likes to swim around the green plants in the bowl. Every morning, I give him some fish food. He comes to the surface to eat. Finny is very quiet and beautiful to watch.',
    contentKurdish: 'فینی ماسیەکێ پرتەقالی یێ بچویکە. ئەو دناڤ قۆتیکەکا جامی یا مەزن دا دژیت. ئەو پەڕەکێن بچویک و کلکەکێ درێژ یێ هەین. ئەو حەز دکەت ل دەورێ رووەکێن کەسک یێن دناڤ قۆتیکێ دا مەلە بکەت. هەر سپێدێ، ئەز هندەک خوارنا ماسیان ددەمێ. ئەو دهێتە سەر ئاڤێ دا بخۆت. فینی گەلەک یێ بێدەنگ و جوانە بو تەماشەکرنێ.',
    level: 'A1',
    questions: [
      { id: 'q114-1', question: 'What color is Finny?', options: ['Blue', 'Orange', 'Red', 'Yellow'], correctAnswer: 1 },
      { id: 'q114-2', question: 'Where does he live?', options: ['In a river', 'In a big glass bowl', 'In the ocean', 'In a lake'], correctAnswer: 1 },
      { id: 'q114-3', question: 'What kind of fins does he have?', options: ['Big', 'Small', 'No fins', 'Long'], correctAnswer: 1 },
      { id: 'q114-4', question: 'What kind of tail does he have?', options: ['Short', 'Long', 'No tail', 'Small'], correctAnswer: 1 },
      { id: 'q114-5', question: 'What does he swim around?', options: ['Stones', 'Green plants', 'Toys', 'Other fish'], correctAnswer: 1 },
      { id: 'q114-6', question: 'When does the narrator give him food?', options: ['Every evening', 'Every morning', 'At night', 'Never'], correctAnswer: 1 },
      { id: 'q114-7', question: 'Why does he come to the surface?', options: ['To sleep', 'To eat', 'To play', 'To breathe air'], correctAnswer: 1 },
      { id: 'q114-8', question: 'Is Finny loud?', options: ['Yes', 'No, he is quiet', 'He is very noisy', 'Maybe'], correctAnswer: 1 },
      { id: 'q114-9', question: 'Is he beautiful to watch?', options: ['No', 'Yes', 'He is ugly', 'Maybe'], correctAnswer: 1 },
      { id: 'q114-10', question: 'Is Finny a big fish?', options: ['Yes', 'No, he is little', 'He is a giant', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-115',
    title: 'The Green Park',
    titleKurdish: 'پارکێ کەسک',
    content: 'The park is very green and big. There are many trees and flowers. Children like to play on the swings and slides. Some people sit on the benches and read newspapers. I like to walk my dog in the park. The air is fresh and clean. It is a great place to relax and have fun with friends.',
    contentKurdish: 'پارک گەلەک یێ کەسک و مەزنە. گەلەک دار و گول ل وێرێ هەین. زارۆک حەز دکەن ل سەر جۆلانک و خلیسۆکان یاریێ بکەن. هندەک کەس ل سەر کورسیان دنیشن و روژنامان دخوینن. ئەز حەز دکەم سەگێ خۆ ببەمە پیاسەکێ دناڤ پارکی دا. هەوا یا فێنک و پاقژە. ئەو جهەکێ نایابە بو بێهنڤەدانێ و کەیفکرنێ دگەل هەڤالان.',
    level: 'A1',
    questions: [
      { id: 'q115-1', question: 'Is the park small?', options: ['Yes', 'No, it is big', 'It is tiny', 'Maybe'], correctAnswer: 1 },
      { id: 'q115-2', question: 'What color is the park?', options: ['Brown', 'Green', 'Grey', 'Yellow'], correctAnswer: 1 },
      { id: 'q115-3', question: 'What do children play on?', options: ['Tables', 'Swings and slides', 'Cars', 'Bicycles'], correctAnswer: 1 },
      { id: 'q115-4', question: 'Where do some people sit?', options: ['On the grass', 'On the benches', 'On the floor', 'On the trees'], correctAnswer: 1 },
      { id: 'q115-5', question: 'What do they read?', options: ['Books', 'Newspapers', 'Magazines', 'Letters'], correctAnswer: 1 },
      { id: 'q115-6', question: 'What does the narrator do in the park?', options: ['Sleeps', 'Walks the dog', 'Plays football', 'Eats lunch'], correctAnswer: 1 },
      { id: 'q115-7', question: 'How is the air?', options: ['Dirty', 'Fresh and clean', 'Hot', 'Cold'], correctAnswer: 1 },
      { id: 'q115-8', question: 'Is it a good place to relax?', options: ['No', 'Yes', 'It is stressful', 'Maybe'], correctAnswer: 1 },
      { id: 'q115-9', question: 'Are there flowers in the park?', options: ['No', 'Yes', 'Only trees', 'Maybe'], correctAnswer: 1 },
      { id: 'q115-10', question: 'Who can you have fun with in the park?', options: ['Teachers', 'Friends', 'Strangers', 'Nobody'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-116',
    title: 'The Yellow Bus',
    titleKurdish: 'پاسا زەرد',
    content: 'Every morning, the yellow bus comes to my house. It takes me to school. The bus is very big and has many seats. My friends are on the bus too. We talk and laugh on the way to school. The driver is very kind and always says hello. I like to sit near the window and look outside.',
    contentKurdish: 'هەر سپێدێ، پاسا زەرد دهێتە بەر دەرگەهێ مالا مە. ئەو من دبەتە قوتابخانێ. پاس گەلەک یا مەزنە و گەلەک کورسی یێن هەین. هەڤالێن من ژی ل سەر پاسێ نە. ئەم دئاخڤین و دکەنین ل سەر رێکا قوتابخانێ. شوفێر گەلەک یێ دلۆڤانە و هەردەم دبێژیت سلاڤ. ئەز حەز دکەم ل نێزیک پەنجەرێ بنیشم و تەماشەی دەرڤە بکەم.',
    level: 'A1',
    questions: [
      { id: 'q116-1', question: 'What color is the bus?', options: ['Red', 'Yellow', 'Blue', 'Green'], correctAnswer: 1 },
      { id: 'q116-2', question: 'When does the bus come?', options: ['In the evening', 'Every morning', 'At night', 'At noon'], correctAnswer: 1 },
      { id: 'q116-3', question: 'Where does it take the narrator?', options: ['To the park', 'To school', 'To the shop', 'To the beach'], correctAnswer: 1 },
      { id: 'q116-4', question: 'Is the bus small?', options: ['Yes', 'No, it is big', 'It is tiny', 'Maybe'], correctAnswer: 1 },
      { id: 'q116-5', question: 'Who else is on the bus?', options: ['The teacher', 'The friends', 'The parents', 'The neighbors'], correctAnswer: 1 },
      { id: 'q116-6', question: 'What do they do on the way?', options: ['Sleep', 'Talk and laugh', 'Fight', 'Eat'], correctAnswer: 1 },
      { id: 'q116-7', question: 'How is the driver?', options: ['Mean', 'Kind', 'Angry', 'Scared'], correctAnswer: 1 },
      { id: 'q116-8', question: 'What does the driver always say?', options: ['Goodbye', 'Hello', 'Stop', 'Go'], correctAnswer: 1 },
      { id: 'q116-9', question: 'Where does the narrator like to sit?', options: ['Near the driver', 'Near the window', 'At the back', 'On the floor'], correctAnswer: 1 },
      { id: 'q116-10', question: 'Does the bus have seats?', options: ['No', 'Yes, many', 'Only one', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-117',
    title: 'The Birthday Cake',
    titleKurdish: 'کێکێ روژبوونا',
    content: 'Today is my birthday. My mother made a big chocolate cake. It has ten candles on top. My friends came to my house. We sang the birthday song and I blew out the candles. We ate the cake and played many games. I received many presents like books and toys. It was a very happy day for me.',
    contentKurdish: 'ئەڤرۆ روژبوونا منە. دایکا من کێکەکا شوکولاتێ یا مەزن چێکر. دەهـ مۆم ل سەر هەین. هەڤالێن من هاتنە مالا مە. مە سترانا روژبوونا گۆت و من مۆم ڤەمراندن. مە کێک خوار و گەلەک یاری کرن. من گەلەک دیاری وەرگرتن وەک کتێب و یاریان. ئەو روژەکا گەلەک یا کەیفخۆش بوو بو من.',
    level: 'A1',
    questions: [
      { id: 'q117-1', question: 'What day is it today?', options: ['Monday', 'The narrator\'s birthday', 'Friday', 'New Year'], correctAnswer: 1 },
      { id: 'q117-2', question: 'Who made the cake?', options: ['The father', 'The mother', 'The sister', 'The baker'], correctAnswer: 1 },
      { id: 'q117-3', question: 'What kind of cake is it?', options: ['Vanilla', 'Chocolate', 'Fruit', 'Lemon'], correctAnswer: 1 },
      { id: 'q117-4', question: 'How many candles are on top?', options: ['Five', 'Ten', 'Seven', 'Twelve'], correctAnswer: 1 },
      { id: 'q117-5', question: 'Who came to the house?', options: ['The teachers', 'The friends', 'The neighbors', 'The cousins only'], correctAnswer: 1 },
      { id: 'q117-6', question: 'What did they sing?', options: ['A school song', 'The birthday song', 'A pop song', 'A lullaby'], correctAnswer: 1 },
      { id: 'q117-7', question: 'What did the narrator do to the candles?', options: ['Lit them', 'Blew them out', 'Threw them', 'Ate them'], correctAnswer: 1 },
      { id: 'q117-8', question: 'What did they do after eating cake?', options: ['Slept', 'Played many games', 'Went home', 'Watched TV'], correctAnswer: 1 },
      { id: 'q117-9', question: 'What kind of presents did the narrator get?', options: ['Clothes', 'Books and toys', 'Money', 'Food'], correctAnswer: 1 },
      { id: 'q117-10', question: 'Was it a sad day?', options: ['Yes', 'No, it was happy', 'It was boring', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-118',
    title: 'The Little Star',
    titleKurdish: 'ئەستێرەیا بچویک',
    content: 'At night, I look at the sky. I see a little star. It is very bright and far away. It looks like a small diamond. I wonder what the star is. Is it a big ball of fire? My father says stars are very big but look small from Earth. I like to count the stars before I go to sleep. They are very beautiful.',
    contentKurdish: 'ب شەڤ، ئەز تەماشەی ئەسمانی دکەم. ئەز ئەستێرەکا بچویک دبینم. ئەو گەلەک یا گەش و دویرە. ئەو وەک ئەلماسکا بچویک دیار دکەت. ئەز دمینمە ب حێبەتی کا ئەستێرە چیە. ئەرێ ئەو گۆپالەکێ مەزن یێ ئاگری یە؟ بابێ من دبێژیت ئەستێرە گەلەک یێن مەزنن بەلێ ژ ئەردی بچویک دیار دکەن. ئەز حەز دکەم ئەستێرەیان بژمێرم بەری ئەز بنڤم. ئەو گەلەک یێن جوانن.',
    level: 'A1',
    questions: [
      { id: 'q118-1', question: 'When does the narrator look at the sky?', options: ['In the morning', 'At night', 'At noon', 'In the afternoon'], correctAnswer: 1 },
      { id: 'q118-2', question: 'What does the narrator see?', options: ['The sun', 'A little star', 'A plane', 'A bird'], correctAnswer: 1 },
      { id: 'q118-3', question: 'Is the star bright?', options: ['No', 'Yes', 'It is dark', 'Maybe'], correctAnswer: 1 },
      { id: 'q118-4', question: 'What does the star look like?', options: ['A ball', 'A small diamond', 'A square', 'A flower'], correctAnswer: 1 },
      { id: 'q118-5', question: 'Are stars really small?', options: ['Yes', 'No, they are very big', 'They are medium', 'Maybe'], correctAnswer: 1 },
      { id: 'q118-6', question: 'Why do they look small?', options: ['They are tiny', 'They are far away', 'They are cold', 'Maybe'], correctAnswer: 1 },
      { id: 'q118-7', question: 'What does the narrator do before sleep?', options: ['Eats', 'Counts the stars', 'Plays', 'Reads'], correctAnswer: 1 },
      { id: 'q118-8', question: 'Who tells the narrator about stars?', options: ['The mother', 'The father', 'The teacher', 'The friend'], correctAnswer: 1 },
      { id: 'q118-9', question: 'Are stars beautiful?', options: ['No', 'Yes', 'They are ugly', 'Maybe'], correctAnswer: 1 },
      { id: 'q118-10', question: 'Is the star close to Earth?', options: ['Yes', 'No, it is far away', 'It is on Earth', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-119',
    title: 'The Cold Winter',
    titleKurdish: 'زڤستانا سار',
    content: 'In winter, it is very cold. Sometimes it snows and the ground is white. I wear a warm coat, a hat, and gloves. I like to make a snowman in the garden. My sister and I have a snowball fight. We drink hot chocolate when we come inside. Winter is a fun season, but we must stay warm.',
    contentKurdish: 'د زڤستانێ دا، گەلەک سارە. جاران بەفر دباریت و ئەرد هەمی سپی دبیت. ئەز چاکەتەکێ گەرم، کڵاوەک، و دەستکێشان دپۆشم. ئەز حەز دکەم پیاوەکێ بەفری د باخچەی دا چێبکەم. ئەز و خوشکا خۆ یاریێ ب بەفرێ دکەین. ئەم شوکولاتا گەرم ڤەدخۆین دەما ئەم دهێینە ژوور. زڤستان وەرزەکێ خوشە، بەلێ ئەم پێدڤی یە خۆ گەرم بپارێزین.',
    level: 'A1',
    questions: [
      { id: 'q119-1', question: 'How is the weather in winter?', options: ['Hot', 'Cold', 'Warm', 'Sunny'], correctAnswer: 1 },
      { id: 'q119-2', question: 'What color is the ground when it snows?', options: ['Green', 'White', 'Brown', 'Blue'], correctAnswer: 1 },
      { id: 'q119-3', question: 'What does the narrator wear?', options: ['A t-shirt', 'A warm coat, hat, and gloves', 'Sandals', 'A swimsuit'], correctAnswer: 1 },
      { id: 'q119-4', question: 'What does the narrator make in the garden?', options: ['A house', 'A snowman', 'A fire', 'A pool'], correctAnswer: 1 },
      { id: 'q119-5', question: 'Who does the narrator play with?', options: ['The brother', 'The sister', 'The dog', 'The neighbor'], correctAnswer: 1 },
      { id: 'q119-6', question: 'What kind of fight do they have?', options: ['A real fight', 'A snowball fight', 'A word fight', 'No fight'], correctAnswer: 1 },
      { id: 'q119-7', question: 'What do they drink inside?', options: ['Cold water', 'Hot chocolate', 'Juice', 'Tea'], correctAnswer: 1 },
      { id: 'q119-8', question: 'Is winter a fun season?', options: ['No', 'Yes', 'It is boring', 'Maybe'], correctAnswer: 1 },
      { id: 'q119-9', question: 'Should they stay cold?', options: ['Yes', 'No, they must stay warm', 'Maybe', 'It doesn\'t matter'], correctAnswer: 1 },
      { id: 'q119-10', question: 'Does it always snow in winter?', options: ['Yes', 'Sometimes', 'Never', 'Only on Mondays'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-120',
    title: 'The Friendly Elephant',
    titleKurdish: 'فیلێ دلۆڤان',
    content: 'The elephant is a very big animal. It has a long trunk and big ears. It lives in the forest and eats leaves and fruit. The elephant is very strong and can carry heavy things. It is also very kind and helps other animals. I saw an elephant at the zoo. It was very amazing to see such a big animal.',
    contentKurdish: 'فیل گیانەوەرەکێ گەلەک یێ مەزنە. ئەو خرطومەکێ درێژ و گوهێن مەزن یێن هەین. ئەو دناڤ دارستانێ دا دژیت و گەلەک گیای و فێقی دخۆت. فیل گەلەک یێ ب هێزە و دشێت تشتێن گران هەلگریت. ئەو هەروەسا گەلەک یێ دلۆڤانە و هاریکاریا گیانەوەرێن دی دکەت. من فیلەک ل باخچێ گیانەوەران دیت. گەلەک یا سەیر بوو دیتنا گیانەوەرەکێ وەسا مەزن.',
    level: 'A2',
    questions: [
      { id: 'q120-1', question: 'Is the elephant a small animal?', options: ['Yes', 'No, it is very big', 'It is tiny', 'Maybe'], correctAnswer: 1 },
      { id: 'q120-2', question: 'What kind of trunk does it have?', options: ['Short', 'Long', 'No trunk', 'Small'], correctAnswer: 1 },
      { id: 'q120-3', question: 'What kind of ears does it have?', options: ['Small', 'Big', 'No ears', 'Short'], correctAnswer: 1 },
      { id: 'q120-4', question: 'Where does it live?', options: ['In the ocean', 'In the forest', 'In a house', 'In the desert'], correctAnswer: 1 },
      { id: 'q120-5', question: 'What does it eat?', options: ['Meat', 'Leaves and fruit', 'Bread', 'Fish'], correctAnswer: 1 },
      { id: 'q120-6', question: 'Is the elephant strong?', options: ['No', 'Yes', 'It is weak', 'Maybe'], correctAnswer: 1 },
      { id: 'q120-7', question: 'Can it carry heavy things?', options: ['No', 'Yes', 'Only light things', 'Maybe'], correctAnswer: 1 },
      { id: 'q120-8', question: 'Is the elephant kind?', options: ['No', 'Yes', 'It is mean', 'Maybe'], correctAnswer: 1 },
      { id: 'q120-9', question: 'Where did the narrator see an elephant?', options: ['In the park', 'At the zoo', 'At school', 'In the garden'], correctAnswer: 1 },
      { id: 'q120-10', question: 'Was it amazing to see the elephant?', options: ['No', 'Yes', 'It was boring', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-121',
    title: 'The Magic Forest',
    titleKurdish: 'دارستانا سێحرى',
    content: 'Deep in the magic forest, the trees can talk. They tell stories about the old days when dragons flew in the sky. A small fairy named Lila lives in a hollow tree. She uses her magic wand to help the animals. One day, she saved a lost deer by showing it the way home. The forest is a place of wonder and mystery.',
    contentKurdish: 'ل کویراتیا دارستانا سێحری دا، دار دشێن باخڤن. ئەو چیرۆکان ل سەر روژێن کەڤن دبێژن دەما ئەژدەها ل ئەسمانی دفرین. پەریەکا بچویک بناڤێ لیلا دناڤ دارەکا کول دا دژیت. ئەو چۆپێ خۆ یێ سێحری بکار دئینیت دا هاریکاریا گیانەوەران بکەت. روژەکێ، وێ ئاسکەکێ بەرزەبوویی رزگار کر ب نیشاندانا رێکا مال. دارستان جهێ حێبەتی و نهێنیانە.',
    level: 'A2',
    questions: [
      { id: 'q121-1', question: 'What can the trees do in the magic forest?', options: ['Walk', 'Talk', 'Sing', 'Dance'], correctAnswer: 1 },
      { id: 'q121-2', question: 'What stories do the trees tell?', options: ['About cars', 'About the old days and dragons', 'About school', 'About the city'], correctAnswer: 1 },
      { id: 'q121-3', question: 'Who is Lila?', options: ['A bird', 'A fairy', 'A deer', 'A tree'], correctAnswer: 1 },
      { id: 'q121-4', question: 'Where does Lila live?', options: ['In a house', 'In a hollow tree', 'In a cave', 'In the water'], correctAnswer: 1 },
      { id: 'q121-5', question: 'What does Lila use to help animals?', options: ['A book', 'A magic wand', 'A map', 'A phone'], correctAnswer: 1 },
      { id: 'q121-6', question: 'Who did Lila save one day?', options: ['A dragon', 'A lost deer', 'A bird', 'A cat'], correctAnswer: 1 },
      { id: 'q121-7', question: 'How did she help the deer?', options: ['Gave it food', 'Showed it the way home', 'Gave it magic', 'Slept with it'], correctAnswer: 1 },
      { id: 'q121-8', question: 'Is the forest a boring place?', options: ['Yes', 'No, it is full of wonder', 'It is very quiet', 'Maybe'], correctAnswer: 1 },
      { id: 'q121-9', question: 'Did dragons fly in the sky in the old days?', options: ['No', 'Yes', 'Only at night', 'Maybe'], correctAnswer: 1 },
      { id: 'q121-10', question: 'Is Lila big?', options: ['Yes', 'No, she is small', 'She is a giant', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-122',
    title: 'The Brave Fireman',
    titleKurdish: 'ئاگرکوژێنێ ئازا',
    content: 'Tom is a brave fireman. He works at the fire station. When the alarm rings, he puts on his heavy suit and helmet. He drives the big red fire truck very fast. He uses a long hose to put out fires. Tom saves people and animals from burning buildings. Everyone in the city knows Tom is a hero.',
    contentKurdish: 'تۆم ئاگرکوژێنەکێ ئازایە. ئەو ل بنگەهێ ئاگرکوژێنێ کار دکەت. دەما زەنگ لێ ددەت، ئەو جلیێ خۆ یێ گران و کڵاوێ خۆ دپۆشیت. ئەو ترومبێلا سور یا مەزن یا ئاگرکوژێنێ ب خێرایی دهاژۆت. ئەو سۆندەکا درێژ بکار دئینیت دا ئاگری ڤەمرینیت. تۆم کەسان و گیانەوەران ژ ئاڤاهیێن دسوژن رزگار دکەت. هەمی کەس ل باژێری دزانن تۆم قارەمانە.',
    level: 'A2',
    questions: [
      { id: 'q122-1', question: 'What is Tom\'s job?', options: ['Doctor', 'Fireman', 'Teacher', 'Police officer'], correctAnswer: 1 },
      { id: 'q122-2', question: 'Where does he work?', options: ['At a school', 'At the fire station', 'At a hospital', 'In a shop'], correctAnswer: 1 },
      { id: 'q122-3', question: 'What happens when the alarm rings?', options: ['Tom goes to sleep', 'Tom puts on his suit and helmet', 'Tom eats lunch', 'Tom goes home'], correctAnswer: 1 },
      { id: 'q122-4', question: 'What color is the fire truck?', options: ['Blue', 'Red', 'Green', 'Yellow'], correctAnswer: 1 },
      { id: 'q122-5', question: 'What does Tom use to put out fires?', options: ['A bucket', 'A long hose', 'A fan', 'A shovel'], correctAnswer: 1 },
      { id: 'q122-6', question: 'Who does Tom save?', options: ['Only people', 'People and animals', 'Only cats', 'Nobody'], correctAnswer: 1 },
      { id: 'q122-7', question: 'Is Tom a hero?', options: ['No', 'Yes', 'He is a villain', 'Maybe'], correctAnswer: 1 },
      { id: 'q122-8', question: 'How does he drive the fire truck?', options: ['Slowly', 'Very fast', 'Carefully only', 'Maybe'], correctAnswer: 1 },
      { id: 'q122-9', question: 'What kind of suit does he wear?', options: ['Light suit', 'Heavy suit', 'No suit', 'Swimsuit'], correctAnswer: 1 },
      { id: 'q122-10', question: 'Does everyone know Tom?', options: ['No', 'Yes', 'Only his family', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-123',
    title: 'The Clever Crow',
    titleKurdish: 'قەلەشکێ ژیر',
    content: 'A thirsty crow found a pitcher with a little water at the bottom. He could not reach the water with his beak. He saw some small stones on the ground. He picked them up one by one and dropped them into the pitcher. The water level rose until he could drink it. The crow was very clever and saved his life.',
    contentKurdish: 'قەلەشکەکێ تێنی مەسینەک دیت کو هندەک ئاڤ ل بنی هەبوو. وی نەدشیا ب دەڤێ خۆ بگەهیتە ئاڤێ. وی هندەک بەردێن بچویک ل سەر ئەردی دیتن. وی ئێک ئێکە هەلگرتن و هاڤێتنە دناڤ مەسینێ دا. ئاستێ ئاڤێ بلند بوو هەتا وی دشیا ڤەخۆت. قەلەشک گەلەک یێ ژیر بوو و ژیانا خۆ پاراست.',
    level: 'A2',
    questions: [
      { id: 'q123-1', question: 'How did the crow feel?', options: ['Hungry', 'Thirsty', 'Tired', 'Happy'], correctAnswer: 1 },
      { id: 'q123-2', question: 'What did the crow find?', options: ['A glass', 'A pitcher', 'A bowl', 'A bottle'], correctAnswer: 1 },
      { id: 'q123-3', question: 'Could he reach the water at first?', options: ['Yes', 'No', 'Maybe', 'He didn\'t try'], correctAnswer: 1 },
      { id: 'q123-4', question: 'What did he see on the ground?', options: ['Food', 'Small stones', 'Water', 'Leaves'], correctAnswer: 1 },
      { id: 'q123-5', question: 'How did he pick up the stones?', options: ['With his feet', 'With his beak', 'With his wings', 'He didn\'t'], correctAnswer: 1 },
      { id: 'q123-6', question: 'Where did he drop the stones?', options: ['On the ground', 'Into the pitcher', 'In the river', 'In his nest'], correctAnswer: 1 },
      { id: 'q123-7', question: 'What happened to the water level?', options: ['It went down', 'It rose', 'It stayed the same', 'It disappeared'], correctAnswer: 1 },
      { id: 'q123-8', question: 'Could the crow drink the water at the end?', options: ['No', 'Yes', 'He was still thirsty', 'Maybe'], correctAnswer: 1 },
      { id: 'q123-9', question: 'Was the crow clever?', options: ['No', 'Yes', 'He was lucky', 'Maybe'], correctAnswer: 1 },
      { id: 'q123-10', question: 'What is the moral of the story?', options: ['Never give up', 'Stones are useful', 'Crows are black', 'Water is good'], correctAnswer: 0 }
    ]
  },
  {
    id: 'story-124',
    title: 'The First Airplane',
    titleKurdish: 'فڕۆکا ئێکێ',
    content: 'The Wright brothers, Orville and Wilbur, wanted to fly like birds. They built many gliders and finally a powered airplane. In 1903, they made the first successful flight in North Carolina. The flight lasted only 12 seconds, but it changed the world forever. Today, millions of people travel by airplane every day.',
    contentKurdish: 'برایێن ڕایت، ئۆرڤیل و ویلبۆر، دڤیا وەک چویکان بفرن. وان گەلەک فڕۆکێن بێ مۆتۆر دروستکرن و ل دوماهیکێ فڕۆکەکا ب مۆتۆر. ل سالا ١٩٠٣، وان ئێکەم گەشتا سەرکەفتی ل باکورێ کارۆلاینا ئەنجام دا. گەشتێ تەنێ ١٢ چرکە کێشا، بەلێ وێ جیهان بو هەتا هەتا گوهۆڕی. ئەڤرۆ، ب ملیۆنان کەس هەر روژ ب فڕۆکێ گەشتێ دکەن.',
    level: 'B1',
    questions: [
      { id: 'q124-1', question: 'Who wanted to fly like birds?', options: ['The Smith brothers', 'The Wright brothers', 'The Ford brothers', 'The Miller brothers'], correctAnswer: 1 },
      { id: 'q124-2', question: 'What did they build first?', options: ['Cars', 'Gliders', 'Boats', 'Trains'], correctAnswer: 1 },
      { id: 'q124-3', question: 'In what year was the first successful flight?', options: ['1800', '1903', '1950', '2000'], correctAnswer: 1 },
      { id: 'q124-4', question: 'Where did the flight take place?', options: ['New York', 'North Carolina', 'California', 'Texas'], correctAnswer: 1 },
      { id: 'q124-5', question: 'How long did the first flight last?', options: ['One hour', '12 seconds', '10 minutes', 'One day'], correctAnswer: 1 },
      { id: 'q124-6', question: 'Did the flight change the world?', options: ['No', 'Yes, forever', 'Only a little', 'Maybe'], correctAnswer: 1 },
      { id: 'q124-7', question: 'How many people travel by airplane today?', options: ['Hundreds', 'Millions', 'Thousands', 'Nobody'], correctAnswer: 1 },
      { id: 'q124-8', question: 'What were the brothers\' names?', options: ['John and Paul', 'Orville and Wilbur', 'Tom and Jerry', 'Jack and Jill'], correctAnswer: 1 },
      { id: 'q124-9', question: 'Was the first airplane powered?', options: ['No', 'Yes', 'It used sails', 'Maybe'], correctAnswer: 1 },
      { id: 'q124-10', question: 'Is air travel common today?', options: ['No', 'Yes', 'Only for rich people', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-125',
    title: 'The Great Wall of China',
    titleKurdish: 'دیوارێ مەزن یێ چینێ',
    content: 'The Great Wall of China is one of the most famous structures in the world. It was built thousands of years ago to protect China from invaders. The wall is thousands of miles long and is made of stone, brick, and wood. It is so big that some people say it can be seen from space. Millions of tourists visit the wall every year.',
    contentKurdish: 'دیوارێ مەزن یێ چینێ ئێکە ژ ناڤدارترین ئاڤاهیێن جیهانێ. ئەو بەری ب هزاران سالان هاتبوو ئاڤاکرن دا چینێ ژ هێرشکەران بپارێزیت. دیوار ب هزاران میلان یێ درێژە و ژ بەرد، کەرپۆچ، و تەختەی هاتیە دروستکرن. ئەو هندێ مەزنە کو هندەک کەس دبێژن دشێت ژ فەزایێ بهێتە دیتن. ب ملیۆنان گەشتیار هەر سال سەرەدانا دیوارى دکەن.',
    level: 'B1',
    questions: [
      { id: 'q125-1', question: 'Where is the Great Wall located?', options: ['Japan', 'China', 'India', 'USA'], correctAnswer: 1 },
      { id: 'q125-2', question: 'Why was the wall built?', options: ['To keep animals in', 'To protect China from invaders', 'For decoration', 'To help people walk'], correctAnswer: 1 },
      { id: 'q125-3', question: 'When was it built?', options: ['Yesterday', 'Thousands of years ago', 'In 1900', 'In 2000'], correctAnswer: 1 },
      { id: 'q125-4', question: 'What materials were used to build the wall?', options: ['Only plastic', 'Stone, brick, and wood', 'Only glass', 'Only metal'], correctAnswer: 1 },
      { id: 'q125-5', question: 'How long is the wall?', options: ['One mile', 'Thousands of miles', 'Ten miles', 'One hundred miles'], correctAnswer: 1 },
      { id: 'q125-6', question: 'Can it be seen from space according to some people?', options: ['No', 'Yes', 'Only at night', 'Maybe'], correctAnswer: 1 },
      { id: 'q125-7', question: 'How many tourists visit the wall every year?', options: ['Hundreds', 'Millions', 'Thousands', 'Nobody'], correctAnswer: 1 },
      { id: 'q125-8', question: 'Is the wall famous?', options: ['No', 'Yes', 'Only in China', 'Maybe'], correctAnswer: 1 },
      { id: 'q125-9', question: 'Is the wall made of only one material?', options: ['Yes', 'No', 'Maybe', 'It is made of gold'], correctAnswer: 1 },
      { id: 'q125-10', question: 'Is the wall a new structure?', options: ['Yes', 'No, it is very old', 'Maybe', 'It was built last year'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-126',
    title: 'The Brave Astronaut',
    titleKurdish: 'فەزاگەڕێ ئازا',
    content: 'Neil Armstrong was the first person to walk on the moon. In 1969, he traveled in the Apollo 11 spacecraft. When he stepped on the moon, he said, "That\'s one small step for man, one giant leap for mankind." He collected moon rocks and took many photos. His journey inspired many people to study space.',
    contentKurdish: 'نیل ئارمسترۆنگ ئێکەم کەس بوو کو ل سەر هەیڤێ پیاسە کری. ل سالا ١٩٦٩، وی ب کەشتییا فەزایی یا ئەپۆلۆ ١١ گەشت کر. دەما وی پێ ل سەر هەیڤێ دانا، وی گۆت: "ئەو گاڤەکا بچویکە بو مروڤی، بەلێ بازدانەکا زەبەلاحە بو مروڤایەتیێ." وی بەردێن هەیڤێ کۆمکرن و گەلەک وێنە گرتن. گەشتا وی بوو ئەگەرێ هندێ کو گەلەک کەس فەزایێ بخوینن.',
    level: 'B1',
    questions: [
      { id: 'q126-1', question: 'Who was the first person to walk on the moon?', options: ['Buzz Aldrin', 'Neil Armstrong', 'Yuri Gagarin', 'Elon Musk'], correctAnswer: 1 },
      { id: 'q126-2', question: 'In what year did he walk on the moon?', options: ['1950', '1969', '1980', '2000'], correctAnswer: 1 },
      { id: 'q126-3', question: 'What was the name of the spacecraft?', options: ['Apollo 1', 'Apollo 11', 'Discovery', 'Challenger'], correctAnswer: 1 },
      { id: 'q126-4', question: 'What did he say when he stepped on the moon?', options: ['"Hello world"', '"One small step for man..."', '"It is cold here"', '"I am home"'], correctAnswer: 1 },
      { id: 'q126-5', question: 'What did he collect on the moon?', options: ['Flowers', 'Moon rocks', 'Water', 'Cheese'], correctAnswer: 1 },
      { id: 'q126-6', question: 'Did he take photos?', options: ['No', 'Yes', 'Only one', 'Maybe'], correctAnswer: 1 },
      { id: 'q126-7', question: 'Did his journey inspire people?', options: ['No', 'Yes', 'Only a few', 'Maybe'], correctAnswer: 1 },
      { id: 'q126-8', question: 'Was he the first person to go to space?', options: ['Yes', 'No', 'Maybe', 'He was the second'], correctAnswer: 1 },
      { id: 'q126-9', question: 'Is the moon close to Earth?', options: ['Yes', 'No', 'It is on Earth', 'Maybe'], correctAnswer: 1 },
      { id: 'q126-10', question: 'What did people study because of him?', options: ['Cooking', 'Space', 'History', 'Math'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-127',
    title: 'The Helpful Dolphin',
    titleKurdish: 'دۆلفینێ هاریکار',
    content: 'Dolphins are very smart and friendly animals. They live in the ocean and breathe air. One day, a dolphin saw a swimmer who was very tired. The dolphin swam under the person and helped them stay above the water. The dolphin stayed with the swimmer until a boat arrived. Dolphins often help humans and other sea animals.',
    contentKurdish: 'دۆلفین گیانەوەرێن گەلەک ژیر و دلۆڤانن. ئەو د دەریایێ دا دژیت و بێهنێ وەردگرن. روژەکێ، دۆلفینەکێ مەلەڤانەک دیت کو گەلەک یێ ماندی بوو. دۆلفین چوو بن کەسی و هاریکاریا وی کر دا ل سەر ئاڤێ بمینیت. دۆلفین دگەل مەلەڤانی ما هەتا بەلەمەک هات. دۆلفین زۆربەی جاران هاریکاریا مروڤان و گیانەوەرێن دی یێن دەریایێ دکەن.',
    level: 'A2',
    questions: [
      { id: 'q127-1', question: 'Are dolphins smart?', options: ['No', 'Yes', 'They are stupid', 'Maybe'], correctAnswer: 1 },
      { id: 'q127-2', question: 'Where do dolphins live?', options: ['In a river', 'In the ocean', 'In a lake', 'On land'], correctAnswer: 1 },
      { id: 'q127-3', question: 'Do dolphins breathe air?', options: ['No', 'Yes', 'They breathe water', 'Maybe'], correctAnswer: 1 },
      { id: 'q127-4', question: 'Who did the dolphin help one day?', options: ['A shark', 'A tired swimmer', 'A bird', 'A cat'], correctAnswer: 1 },
      { id: 'q127-5', question: 'How did the dolphin help the swimmer?', options: ['Gave them food', 'Helped them stay above water', 'Bit them', 'Ignored them'], correctAnswer: 1 },
      { id: 'q127-6', question: 'How long did the dolphin stay with the swimmer?', options: ['One minute', 'Until a boat arrived', 'All night', 'One hour'], correctAnswer: 1 },
      { id: 'q127-7', question: 'Do dolphins help humans often?', options: ['No', 'Yes', 'Only once', 'Never'], correctAnswer: 1 },
      { id: 'q127-8', question: 'Are dolphins friendly?', options: ['No', 'Yes', 'They are mean', 'Maybe'], correctAnswer: 1 },
      { id: 'q127-9', question: 'Can dolphins swim?', options: ['No', 'Yes', 'Only slowly', 'Maybe'], correctAnswer: 1 },
      { id: 'q127-10', question: 'Is a dolphin a fish?', options: ['Yes', 'No, it is a mammal', 'Maybe', 'It is a bird'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-128',
    title: 'The Magic Seeds',
    titleKurdish: 'تۆڤێن سێحرى',
    content: 'Jack traded his cow for some magic seeds. His mother was very angry and threw the seeds out the window. The next morning, a giant beanstalk had grown into the clouds. Jack climbed the beanstalk and found a castle in the sky. Inside the castle, there was a giant and a hen that laid golden eggs. Jack took the hen and became rich.',
    contentKurdish: 'جاکی چێلا خۆ گوهۆڕی ب هندەک تۆڤێن سێحری. دایکا وی گەلەک تووڕە بوو و تۆڤ ژ پەنجەرێ هاڤێتنە دەرڤە. سپێدەیا پاشتر، دارەکا مەزن یا فاصولیێ شین ببوو هەتا دناڤ عەوران دا. جاک سەرکەفتە سەر دارێ و قەسرەک د ئەسمانی دا دیت. دناڤ قەسرێ دا، زەبەلاحەک و مریشکەک هەبوون کو هێکێن زێری دکرن. جاکی مریشک بر و بوو دەولەمەند.',
    level: 'A2',
    questions: [
      { id: 'q128-1', question: 'What did Jack trade his cow for?', options: ['Money', 'Magic seeds', 'Food', 'A horse'], correctAnswer: 1 },
      { id: 'q128-2', question: 'Was Jack\'s mother happy?', options: ['Yes', 'No, she was angry', 'She was sad', 'Maybe'], correctAnswer: 1 },
      { id: 'q128-3', question: 'Where did the mother throw the seeds?', options: ['In the bin', 'Out the window', 'In the garden', 'In the fire'], correctAnswer: 1 },
      { id: 'q128-4', question: 'What grew the next morning?', options: ['A flower', 'A giant beanstalk', 'A tree', 'Grass'], correctAnswer: 1 },
      { id: 'q128-5', question: 'Where did the beanstalk grow to?', options: ['The roof', 'The clouds', 'The moon', 'The sun'], correctAnswer: 1 },
      { id: 'q128-6', question: 'What did Jack find in the sky?', options: ['A plane', 'A castle', 'A bird', 'A cloud'], correctAnswer: 1 },
      { id: 'q128-7', question: 'Who lived in the castle?', options: ['A king', 'A giant', 'A fairy', 'A dragon'], correctAnswer: 1 },
      { id: 'q128-8', question: 'What was special about the hen?', options: ['It could talk', 'It laid golden eggs', 'It could fly', 'It was giant'], correctAnswer: 1 },
      { id: 'q128-9', question: 'Did Jack take the hen?', options: ['No', 'Yes', 'He left it', 'Maybe'], correctAnswer: 1 },
      { id: 'q128-10', question: 'Did Jack become rich?', options: ['No', 'Yes', 'He stayed poor', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-129',
    title: 'The Invention of the Telephone',
    titleKurdish: 'داهێنانا تەلەفۆنێ',
    content: 'Alexander Graham Bell invented the telephone in 1876. He wanted to help people talk to each other over long distances. The first words spoken on the telephone were, "Mr. Watson, come here, I want to see you." Today, we have mobile phones that can do many things like taking photos and browsing the internet. Communication has changed a lot.',
    contentKurdish: 'ئەلێکساندەر گراهام بێڵ تەلەفۆن داهێنا ل سالا ١٨٧٦. وی دڤیا هاریکاریا خەلکی بکەت دا دگەل ئێک باخڤن ل سەر دویراتیێن درێژ. ئێکەم پەیڤێن ل سەر تەلەفۆنێ هاتینە گۆتن ئەڤە بوون: "خودێ واتسۆن، وەرە ڤێرێ، ئەز دڤێت تە ببینم." ئەڤرۆ، مە تەلەفۆنێن موبایل یێن هەین کو دشێن گەلەک تشتان بکەن وەک وێنەگرتن و گەڕیان د ئینتەرنێتێ دا. پەیوەندی گەلەک گوهۆڕیە.',
    level: 'B1',
    questions: [
      { id: 'q129-1', question: 'Who invented the telephone?', options: ['Thomas Edison', 'Alexander Graham Bell', 'Isaac Newton', 'Albert Einstein'], correctAnswer: 1 },
      { id: 'q129-2', question: 'In what year was the telephone invented?', options: ['1800', '1876', '1900', '1950'], correctAnswer: 1 },
      { id: 'q129-3', question: 'Why did he invent the telephone?', options: ['To play games', 'To help people talk over long distances', 'To listen to music', 'To take photos'], correctAnswer: 1 },
      { id: 'q129-4', question: 'Who was the first person called on the telephone?', options: ['Mr. Bell', 'Mr. Watson', 'Mr. Smith', 'Mr. Jones'], correctAnswer: 1 },
      { id: 'q129-5', question: 'What were the first words spoken?', options: ['"Hello"', '"Mr. Watson, come here..."', '"How are you?"', '"Goodbye"'], correctAnswer: 1 },
      { id: 'q129-6', question: 'Do we have mobile phones today?', options: ['No', 'Yes', 'Only in some countries', 'Maybe'], correctAnswer: 1 },
      { id: 'q129-7', question: 'What can mobile phones do today?', options: ['Only talk', 'Take photos and browse internet', 'Nothing', 'Only send letters'], correctAnswer: 1 },
      { id: 'q129-8', question: 'Has communication changed?', options: ['No', 'Yes, a lot', 'Only a little', 'Maybe'], correctAnswer: 1 },
      { id: 'q129-9', question: 'Was the first telephone mobile?', options: ['Yes', 'No', 'Maybe', 'It was wireless'], correctAnswer: 1 },
      { id: 'q129-10', question: 'Is the telephone important?', options: ['No', 'Yes', 'Only for business', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-130',
    title: 'The Brave Firefighter',
    titleKurdish: 'ئاگرکوژێنێ ئازا',
    content: 'Sarah is a firefighter. She wears a yellow suit and a red helmet. When there is a fire, she drives a big red truck. She uses a long hose to spray water on the flames. Sarah is very brave and saves many people. She also teaches children about fire safety. Everyone in the town is proud of Sarah.',
    contentKurdish: 'سارا ئاگرکوژێنە. ئەو جلیەکێ زەرد و کڵاوەکێ سور دپۆشیت. دەما ئاگر هەبیت، ئەو ترومبێلەکا سور یا مەزن دهاژۆت. ئەو سۆندەکا درێژ بکار دئینیت دا ئاڤێ بڕێژیتە سەر ئاگری. سارا گەلەک یا ئازایە و گەلەک کەسان رزگار دکەت. ئەو هەروەسا فێری زارۆکان دکەت ل سەر سلامەتیا ژ ئاگری. هەمی کەس ل باژێری شانازیێ ب سارایێ دکەن.',
    level: 'A2',
    questions: [
      { id: 'q130-1', question: 'What is Sarah\'s job?', options: ['Doctor', 'Firefighter', 'Teacher', 'Nurse'], correctAnswer: 1 },
      { id: 'q130-2', question: 'What color is her suit?', options: ['Red', 'Yellow', 'Blue', 'Green'], correctAnswer: 1 },
      { id: 'q130-3', question: 'What color is her helmet?', options: ['Yellow', 'Red', 'Black', 'White'], correctAnswer: 1 },
      { id: 'q130-4', question: 'What does she drive?', options: ['A car', 'A big red truck', 'A bike', 'A bus'], correctAnswer: 1 },
      { id: 'q130-5', question: 'What does she use to spray water?', options: ['A bucket', 'A long hose', 'A bottle', 'A glass'], correctAnswer: 1 },
      { id: 'q130-6', question: 'Is Sarah brave?', options: ['No', 'Yes', 'She is scared', 'Maybe'], correctAnswer: 1 },
      { id: 'q130-7', question: 'Does she save people?', options: ['No', 'Yes', 'Only animals', 'Maybe'], correctAnswer: 1 },
      { id: 'q130-8', question: 'What does she teach children?', options: ['Math', 'Fire safety', 'English', 'Science'], correctAnswer: 1 },
      { id: 'q130-9', question: 'Is the town proud of her?', options: ['No', 'Yes', 'They don\'t know her', 'Maybe'], correctAnswer: 1 },
      { id: 'q130-10', question: 'What does she spray on the flames?', options: ['Oil', 'Water', 'Sand', 'Milk'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-131',
    title: 'The Little Ant',
    titleKurdish: 'مێرییا بچویک',
    content: 'An ant is very small but very strong. It can carry things that are much bigger than itself. Ants live in large groups called colonies. They work together to find food and build their homes. Each ant has a specific job to do. We can learn a lot about teamwork from watching ants.',
    contentKurdish: 'مێری گەلەک یا بچویکە بەلێ گەلەک یا ب هێزە. ئەو دشێت تشتێن گەلەک ژ خۆ مەزنتر هەلگریت. مێری دناڤ کۆمەلێن مەزن دا دژین کو پێ دبێژن کۆلۆنی. ئەو پێکڤە کار دکەن دا خوارنێ ببینن و خانیێن خۆ ئاڤا بکەن. هەر مێریەکێ کارەکێ تایبەت یێ هەى ئەنجام بدەت. ئەم دشێین گەلەک تشتان ل سەر کارێ ب کۆم فێرببین ب تەماشەکرنا مێریان.',
    level: 'A2',
    questions: [
      { id: 'q131-1', question: 'Is an ant weak?', options: ['Yes', 'No, it is strong', 'Maybe', 'It is very big'], correctAnswer: 1 },
      { id: 'q131-2', question: 'What can an ant carry?', options: ['Only small things', 'Things bigger than itself', 'Nothing', 'Only food'], correctAnswer: 1 },
      { id: 'q131-3', question: 'What are large groups of ants called?', options: ['Packs', 'Colonies', 'Herds', 'Schools'], correctAnswer: 1 },
      { id: 'q131-4', question: 'Do ants work alone?', options: ['Yes', 'No, they work together', 'Maybe', 'Only the queen works'], correctAnswer: 1 },
      { id: 'q131-5', question: 'What do they build?', options: ['Nests', 'Homes', 'Bridges', 'Roads'], correctAnswer: 1 },
      { id: 'q131-6', question: 'Does each ant have a job?', options: ['No', 'Yes, a specific job', 'Only some ants', 'Maybe'], correctAnswer: 1 },
      { id: 'q131-7', question: 'What can we learn from ants?', options: ['How to sleep', 'Teamwork', 'How to fight', 'How to run'], correctAnswer: 1 },
      { id: 'q131-8', question: 'Are ants big animals?', options: ['Yes', 'No, they are small', 'Maybe', 'They are giants'], correctAnswer: 1 },
      { id: 'q131-9', question: 'Do ants find food?', options: ['No', 'Yes', 'They make it', 'Maybe'], correctAnswer: 1 },
      { id: 'q131-10', question: 'Is teamwork important for ants?', options: ['No', 'Yes', 'Maybe', 'Only in winter'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-132',
    title: 'The First Moon Landing',
    titleKurdish: 'ئێکەم نیشتنا سەر هەیڤێ',
    content: 'In 1969, the Apollo 11 mission landed on the moon. Neil Armstrong and Buzz Aldrin were the first humans to walk on its surface. They collected moon rocks and performed experiments. This event was watched by millions of people on television. It was a historic moment for all of humanity.',
    contentKurdish: 'ل سالا ١٩٦٩، ئەرکێ ئەپۆلۆ ١١ ل سەر هەیڤێ نیشتە خوار. نیل ئارمسترۆنگ و بەز ئاڵدرین ئێکەم مروڤ بوون کو ل سەر روویێ وێ پیاسە کری. وان بەردێن هەیڤێ کۆمکرن و تاقیکردن ئەنجام دان. ئەڤ رووداوە ژ لایێ ب ملیۆنان کەسان ڤە ل سەر تەلەفزیۆنێ هاتە دیتن. ئەو دەمەکێ دیرۆکی بوو بو هەمی مروڤایەتیێ.',
    level: 'B1',
    questions: [
      { id: 'q132-1', question: 'In what year did the moon landing happen?', options: ['1950', '1969', '1980', '2000'], correctAnswer: 1 },
      { id: 'q132-2', question: 'What was the mission name?', options: ['Apollo 1', 'Apollo 11', 'Discovery', 'Challenger'], correctAnswer: 1 },
      { id: 'q132-3', question: 'Who were the first humans on the moon?', options: ['Neil Armstrong and Buzz Aldrin', 'Elon Musk', 'Yuri Gagarin', 'John Glenn'], correctAnswer: 0 },
      { id: 'q132-4', question: 'What did they collect?', options: ['Flowers', 'Moon rocks', 'Water', 'Cheese'], correctAnswer: 1 },
      { id: 'q132-5', question: 'What did they perform?', options: ['Songs', 'Experiments', 'Dances', 'Plays'], correctAnswer: 1 },
      { id: 'q132-6', question: 'How did people watch the event?', options: ['On the radio', 'On television', 'In person', 'In books'], correctAnswer: 1 },
      { id: 'q132-7', question: 'Was it a historic moment?', options: ['No', 'Yes', 'Only for America', 'Maybe'], correctAnswer: 1 },
      { id: 'q132-8', question: 'How many people watched it?', options: ['Hundreds', 'Millions', 'Thousands', 'Nobody'], correctAnswer: 1 },
      { id: 'q132-9', question: 'Did they walk on the moon?', options: ['No', 'Yes', 'They stayed in the ship', 'Maybe'], correctAnswer: 1 },
      { id: 'q132-10', question: 'Is the moon a planet?', options: ['Yes', 'No, it is a satellite', 'Maybe', 'It is a star'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-133',
    title: 'The Helpful Robot',
    titleKurdish: 'رۆبۆتێ هاریکار',
    content: 'In the future, every home might have a robot. These robots can help with chores like cleaning and cooking. They can also help elderly people with their daily tasks. Some robots can even talk and play games with children. Technology is making our lives easier and more comfortable.',
    contentKurdish: 'د پاشەرۆژێ دا، رەنگە هەر مالەکێ رۆبۆتەک هەبیت. ئەڤ رۆبۆتە دشێن هاریکاریێ د کارێن مالێ دا بکەن وەک پاقژکرن و خوارن چێکرن. ئەو هەروەسا دشێن هاریکاریا کەسێن پیر بکەن د کارێن وان یێن روژانە دا. هندەک رۆبۆت تەنانەت دشێن باخڤن و یاریان دگەل زارۆکان بکەن. تەکنەلۆژیا ژیانا مە ب ساناهیتر و خوشتر لێ دکەت.',
    level: 'A2',
    questions: [
      { id: 'q133-1', question: 'Where might every home have a robot?', options: ['In the past', 'In the future', 'Now', 'Never'], correctAnswer: 1 },
      { id: 'q133-2', question: 'What chores can robots help with?', options: ['Cleaning and cooking', 'Sleeping', 'Watching TV', 'Nothing'], correctAnswer: 0 },
      { id: 'q133-3', question: 'Who can robots help with daily tasks?', options: ['Only children', 'Elderly people', 'Only pets', 'Nobody'], correctAnswer: 1 },
      { id: 'q133-4', question: 'Can some robots talk?', options: ['No', 'Yes', 'Only in movies', 'Maybe'], correctAnswer: 1 },
      { id: 'q133-5', question: 'What can robots play with children?', options: ['Football', 'Games', 'Music', 'Nothing'], correctAnswer: 1 },
      { id: 'q133-6', question: 'Is technology making life harder?', options: ['Yes', 'No, easier and more comfortable', 'Maybe', 'It is not changing anything'], correctAnswer: 1 },
      { id: 'q133-7', question: 'Are robots real today?', options: ['No', 'Yes, some are', 'Only in space', 'Maybe'], correctAnswer: 1 },
      { id: 'q133-8', question: 'Can robots cook?', options: ['No', 'Yes', 'Only eggs', 'Maybe'], correctAnswer: 1 },
      { id: 'q133-9', question: 'Is a robot a human?', options: ['Yes', 'No', 'Maybe', 'It is an animal'], correctAnswer: 1 },
      { id: 'q133-10', question: 'Do robots need electricity?', options: ['No', 'Yes', 'They eat food', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-134',
    title: 'The Discovery of Fire',
    titleKurdish: 'دیتنا ئاگری',
    content: 'Long ago, early humans discovered how to make fire. Fire was very important for survival. It provided warmth during cold nights and kept dangerous animals away. Humans also learned that cooked food tasted better and was easier to digest. Fire changed the way humans lived and helped them develop new tools.',
    contentKurdish: 'بەری دەمەکێ درێژ، مروڤێن دەسپێکێ فێربوون کا دێ چەوا ئاگری دروست کەن. ئاگر گەلەک یێ گرنگ بوو بو مانێ. وی گەرمی ددا د شەڤێن سار دا و گیانەوەرێن مەترسیدار دویر دئێخستن. مروڤان هەروەسا زانی کو خوارنا چێکری خوشترە و ب ساناهیتر دهێتە هەرسکرن. ئاگری شێوازێ ژیانا مروڤان گوهۆڕی و هاریکاریا وان کر دا ئامیرێن نوی دروست کەن.',
    level: 'B1',
    questions: [
      { id: 'q134-1', question: 'Who discovered how to make fire?', options: ['Modern humans', 'Early humans', 'Scientists', 'Aliens'], correctAnswer: 1 },
      { id: 'q134-2', question: 'Was fire important for survival?', options: ['No', 'Yes', 'Only a little', 'Maybe'], correctAnswer: 1 },
      { id: 'q134-3', question: 'What did fire provide during cold nights?', options: ['Light only', 'Warmth', 'Food', 'Water'], correctAnswer: 1 },
      { id: 'q134-4', question: 'Did fire keep animals away?', options: ['No', 'Yes, dangerous animals', 'Only birds', 'Maybe'], correctAnswer: 1 },
      { id: 'q134-5', question: 'What did humans learn about cooked food?', options: ['It was bad', 'It tasted better and was easier to digest', 'It was poisonous', 'Nothing'], correctAnswer: 1 },
      { id: 'q134-6', question: 'Did fire change the way humans lived?', options: ['No', 'Yes', 'Only a little', 'Maybe'], correctAnswer: 1 },
      { id: 'q134-7', question: 'Did fire help develop new tools?', options: ['No', 'Yes', 'Maybe', 'Only in the future'], correctAnswer: 1 },
      { id: 'q134-8', question: 'Is fire hot?', options: ['No', 'Yes', 'It is cold', 'Maybe'], correctAnswer: 1 },
      { id: 'q134-9', question: 'When was fire discovered?', options: ['Yesterday', 'Long ago', 'In 1900', 'In 2000'], correctAnswer: 1 },
      { id: 'q134-10', question: 'Can fire be dangerous?', options: ['No', 'Yes', 'Only in summer', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-135',
    title: 'The Invention of the Light Bulb',
    titleKurdish: 'داهێنانا گڵۆپێ',
    content: 'Thomas Edison invented the first practical light bulb in 1879. Before the light bulb, people used candles and oil lamps to see at night. Edison tried thousands of different materials before he found the right one. The light bulb changed the way we live and work, allowing us to be active after the sun goes down.',
    contentKurdish: 'تۆماس ئێدیسۆن ئێکەم گڵۆپا پراکتیکی داهێنا ل سالا ١٨٧٩. بەری گڵۆپێ، خەلکی مۆم و چرایێن نەفتێ بکار دئینان دا ب شەڤ ببینن. ئێدیسۆنی ب هزاران کەرەستەیێن جودا تاقیکردن هەتا وی یێ درست دیتى. گڵۆپێ شێوازێ ژیانا مە و کارێ مە گوهۆڕی، و رێ دا مە کو ئەم پشتی روژ ئاڤا دچیت ژی یێن چالاک بین.',
    level: 'B1',
    questions: [
      { id: 'q135-1', question: 'Who invented the light bulb?', options: ['Alexander Graham Bell', 'Thomas Edison', 'Isaac Newton', 'Albert Einstein'], correctAnswer: 1 },
      { id: 'q135-2', question: 'In what year was the light bulb invented?', options: ['1800', '1879', '1900', '1950'], correctAnswer: 1 },
      { id: 'q135-3', question: 'What did people use before the light bulb?', options: ['Flashlights', 'Candles and oil lamps', 'Nothing', 'Electricity'], correctAnswer: 1 },
      { id: 'q135-4', question: 'How many materials did Edison try?', options: ['Ten', 'Thousands', 'One', 'One hundred'], correctAnswer: 1 },
      { id: 'q135-5', question: 'Did the light bulb change the way we live?', options: ['No', 'Yes', 'Only a little', 'Maybe'], correctAnswer: 1 },
      { id: 'q135-6', question: 'Does the light bulb allow us to be active at night?', options: ['No', 'Yes', 'Only in winter', 'Maybe'], correctAnswer: 1 },
      { id: 'q135-7', question: 'Is Thomas Edison famous?', options: ['No', 'Yes', 'Only in America', 'Maybe'], correctAnswer: 1 },
      { id: 'q135-8', question: 'Is the light bulb important today?', options: ['No', 'Yes', 'Only in cities', 'Maybe'], correctAnswer: 1 },
      { id: 'q135-9', question: 'Was it easy to invent the light bulb?', options: ['Yes', 'No, it took many tries', 'Maybe', 'It was a mistake'], correctAnswer: 1 },
      { id: 'q135-10', question: 'What does a light bulb use to work?', options: ['Water', 'Electricity', 'Gas', 'Oil'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-136',
    title: 'The First Computer',
    titleKurdish: 'کۆمپیوتەرێ ئێکێ',
    content: 'The first computers were very large and filled entire rooms. They were used for complex calculations and were very expensive. Today, we have small computers that can fit in our pockets, like smartphones. Computers are used for almost everything, from education to entertainment. They have become an essential part of our daily lives.',
    contentKurdish: 'کۆمپیوتەرێن ئێکێ گەلەک یێن مەزن بوون و ژوورێن تژی دگرتن. ئەو بو هەژمارکرنێن ئالۆز دهاتنە بکارئینان و گەلەک یێن گران بوون. ئەڤرۆ، مە کۆمپیوتەرێن بچویک یێن هەین کو د جێبێن مە دا جێدبن، وەک سمارتفۆنان. کۆمپیوتەر بو نێزیک هەمی تشتان دهێنە بکارئینان، ژ پەروەردێ هەتا کەیفخۆشیێ. ئەو بوونە بەشەکێ سەرەکی یێ ژیانا مە یا روژانە.',
    level: 'B1',
    questions: [
      { id: 'q136-1', question: 'How big were the first computers?', options: ['Small', 'Filled entire rooms', 'Like a book', 'Like a phone'], correctAnswer: 1 },
      { id: 'q136-2', question: 'What were they used for?', options: ['Playing games', 'Complex calculations', 'Watching movies', 'Cooking'], correctAnswer: 1 },
      { id: 'q136-3', question: 'Were they expensive?', options: ['No', 'Yes', 'They were free', 'Maybe'], correctAnswer: 1 },
      { id: 'q136-4', question: 'What is an example of a small computer today?', options: ['A TV', 'A smartphone', 'A radio', 'A car'], correctAnswer: 1 },
      { id: 'q136-5', question: 'Are computers used for education?', options: ['No', 'Yes', 'Only in the future', 'Maybe'], correctAnswer: 1 },
      { id: 'q136-6', question: 'Are they part of our daily lives?', options: ['No', 'Yes, essential part', 'Only for some people', 'Maybe'], correctAnswer: 1 },
      { id: 'q136-7', question: 'Can computers fit in pockets today?', options: ['No', 'Yes', 'Only big ones', 'Maybe'], correctAnswer: 1 },
      { id: 'q136-8', question: 'What is entertainment?', options: ['Studying', 'Fun activities like movies/games', 'Working', 'Sleeping'], correctAnswer: 1 },
      { id: 'q136-9', question: 'Was the first computer portable?', options: ['Yes', 'No', 'Maybe', 'It was wireless'], correctAnswer: 1 },
      { id: 'q136-10', question: 'Are computers important?', options: ['No', 'Yes', 'Only for scientists', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-137',
    title: 'The Solar System',
    titleKurdish: 'کۆمەلا رۆژێ',
    content: 'Our solar system consists of the sun and eight planets. The sun is a giant star that provides light and heat. Earth is the third planet from the sun and is the only planet known to have life. Other planets like Mars and Jupiter are very different from Earth. Scientists are still exploring the mysteries of our solar system.',
    contentKurdish: 'کۆمەلا مە یا رۆژێ پێکدهێت ژ رۆژێ و هەشت هەسارەیان. رۆژ ئەستێرەکا زەبەلاحە کو رووناهی و گەرمیێ ددەت. ئەرد هەسارەیا سێیێ یە ژ رۆژێ و تاکە هەسارەیە کو ژیان ل سەر دهێتە زانین. هەسارەیێن دی وەک مارس و جۆپیتەر گەلەک ژ ئەردی جودانە. زانای هێشتا ل سەر نهێنیێن کۆمەلا مە یا رۆژێ دکۆلین.',
    level: 'B1',
    questions: [
      { id: 'q137-1', question: 'How many planets are in our solar system?', options: ['Seven', 'Eight', 'Nine', 'Ten'], correctAnswer: 1 },
      { id: 'q137-2', question: 'What is the sun?', options: ['A planet', 'A giant star', 'A moon', 'A cloud'], correctAnswer: 1 },
      { id: 'q137-3', question: 'What does the sun provide?', options: ['Water', 'Light and heat', 'Food', 'Air'], correctAnswer: 1 },
      { id: 'q137-4', question: 'Which planet is the third from the sun?', options: ['Mars', 'Earth', 'Venus', 'Jupiter'], correctAnswer: 1 },
      { id: 'q137-5', question: 'Is Earth the only planet known to have life?', options: ['No', 'Yes', 'Maybe', 'Mars has life too'], correctAnswer: 1 },
      { id: 'q137-6', question: 'Are Mars and Jupiter like Earth?', options: ['Yes', 'No, they are very different', 'Maybe', 'They are exactly the same'], correctAnswer: 1 },
      { id: 'q137-7', question: 'Are scientists still exploring the solar system?', options: ['No', 'Yes', 'They finished', 'Maybe'], correctAnswer: 1 },
      { id: 'q137-8', question: 'Is the sun small?', options: ['Yes', 'No, it is giant', 'Maybe', 'It is tiny'], correctAnswer: 1 },
      { id: 'q137-9', question: 'Is the moon a planet?', options: ['Yes', 'No', 'Maybe', 'It is a star'], correctAnswer: 1 },
      { id: 'q137-10', question: 'Is the solar system big?', options: ['No', 'Yes', 'Maybe', 'It is small'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-138',
    title: 'The Great Pyramid of Giza',
    titleKurdish: 'ئەهراما مەزن یا جیزە',
    content: 'The Great Pyramid of Giza is the oldest of the Seven Wonders of the Ancient World. It was built as a tomb for the Pharaoh Khufu thousands of years ago. The pyramid is made of millions of large stone blocks. It is a masterpiece of engineering and is still standing today in Egypt. Millions of people visit it every year.',
    contentKurdish: 'ئەهراما مەزن یا جیزە کەڤنترینە ژ حەفت سەیروسەمەرەیێن جیهانا کەڤن. ئەو وەک گۆڕەک بو فیرعەون خۆفۆ بەری ب هزاران سالان هاتبوو ئاڤاکرن. ئەهرام ژ ب ملیۆنان بەردێن مەزن هاتیە دروستکرن. ئەو کارەکێ نایاب یێ ئەندازیاریێ یە و هێشتا ل میسرێ یا مایى. ب ملیۆنان کەس هەر سال سەرەدانا وێ دکەن.',
    level: 'B1',
    questions: [
      { id: 'q138-1', question: 'Where is the Great Pyramid located?', options: ['China', 'Egypt', 'Italy', 'Mexico'], correctAnswer: 1 },
      { id: 'q138-2', question: 'Why was it built?', options: ['As a palace', 'As a tomb for Pharaoh Khufu', 'As a temple', 'As a library'], correctAnswer: 1 },
      { id: 'q138-3', question: 'Is it one of the Seven Wonders of the Ancient World?', options: ['No', 'Yes', 'Maybe', 'It is a new wonder'], correctAnswer: 1 },
      { id: 'q138-4', question: 'What is it made of?', options: ['Brick', 'Large stone blocks', 'Wood', 'Metal'], correctAnswer: 1 },
      { id: 'q138-5', question: 'Is it still standing today?', options: ['No', 'Yes', 'Only a part of it', 'Maybe'], correctAnswer: 1 },
      { id: 'q138-6', question: 'How many people visit it every year?', options: ['Hundreds', 'Millions', 'Thousands', 'Nobody'], correctAnswer: 1 },
      { id: 'q138-7', question: 'Is it a masterpiece of engineering?', options: ['No', 'Yes', 'Maybe', 'It is a simple building'], correctAnswer: 1 },
      { id: 'q138-8', question: 'When was it built?', options: ['Yesterday', 'Thousands of years ago', 'In 1900', 'In 2000'], correctAnswer: 1 },
      { id: 'q138-9', question: 'Was Khufu a king?', options: ['Yes, a Pharaoh', 'No', 'Maybe', 'He was a doctor'], correctAnswer: 0 },
      { id: 'q138-10', question: 'Is the pyramid small?', options: ['Yes', 'No, it is great/large', 'Maybe', 'It is tiny'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-139',
    title: 'The Invention of the Internet',
    titleKurdish: 'داهێنانا ئینتەرنێتێ',
    content: 'The internet was developed in the late 20th century. It allows computers all over the world to connect and share information. The internet has changed the way we communicate, learn, and do business. Today, billions of people use the internet every day. It is an essential tool for modern life and continues to evolve.',
    contentKurdish: 'ئینتەرنێت ل دوماهیکا سەدێ ٢٠ێ هاتە گەشەپێدان. ئەو رێ ددەتە کۆمپیوتەران ل هەمی جیهانێ کو پێکڤە گرێدای بن و پێزانینان بەش بکەن. ئینتەرنێتێ شێوازێ پەیوەندیێن مە، فێربوونا مە، و کارێ مە گوهۆڕی. ئەڤرۆ، ب ملیاران کەس هەر روژ ئینتەرنێتێ بکار دئینان. ئەو ئامیرەکێ سەرەکی یە بو ژیانا مۆدێرن و بەردەوام یێ گەشە دکەت.',
    level: 'B1',
    questions: [
      { id: 'q139-1', question: 'When was the internet developed?', options: ['Late 19th century', 'Late 20th century', 'Early 21st century', '1800'], correctAnswer: 1 },
      { id: 'q139-2', question: 'What does the internet allow computers to do?', options: ['Sleep', 'Connect and share information', 'Nothing', 'Break'], correctAnswer: 1 },
      { id: 'q139-3', question: 'Has the internet changed communication?', options: ['No', 'Yes', 'Only a little', 'Maybe'], correctAnswer: 1 },
      { id: 'q139-4', question: 'How many people use the internet today?', options: ['Millions', 'Billions', 'Thousands', 'Nobody'], correctAnswer: 1 },
      { id: 'q139-5', question: 'Is the internet an essential tool?', options: ['No', 'Yes', 'Only for some', 'Maybe'], correctAnswer: 1 },
      { id: 'q139-6', question: 'Does the internet continue to evolve?', options: ['No', 'Yes', 'It stopped', 'Maybe'], correctAnswer: 1 },
      { id: 'q139-7', question: 'Can we learn using the internet?', options: ['No', 'Yes', 'Only in the future', 'Maybe'], correctAnswer: 1 },
      { id: 'q139-8', question: 'Is the internet only for business?', options: ['Yes', 'No, for many things', 'Maybe', 'Only for games'], correctAnswer: 1 },
      { id: 'q139-9', question: 'Is the internet a modern invention?', options: ['No', 'Yes', 'It is ancient', 'Maybe'], correctAnswer: 1 },
      { id: 'q139-10', question: 'Do you use the internet?', options: ['No', 'Yes', 'Maybe', 'Never'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-140',
    title: 'The Future of Technology',
    titleKurdish: 'پاشەرۆژا تەکنەلۆژیایێ',
    content: 'Technology is constantly changing and improving. In the future, we might see self-driving cars and advanced artificial intelligence. People might even travel to other planets like Mars. Technology has the potential to solve many of the world\'s problems. It is an exciting time to be alive and see what the future holds.',
    contentKurdish: 'تەکنەلۆژیا بەردەوام یا دهێتە گوهۆڕین و باشترکرن. د پاشەرۆژێ دا، رەنگە ئەم ترومبێلێن بێ شوفێر و ژیرییا دەستکرد یا پێشکەفتی ببینین. رەنگە کەس تەنانەت گەشتێ بو هەسارەیێن دی بکەن وەک مارس. تەکنەلۆژیا دشێت گەلەک ژ کێشەیێن جیهانێ چارەسەر بکەت. ئەڤە دەمەکێ ب پەرۆشە مروڤ تێدا بژیت و ببینیت کا پاشەرۆژ دێ چی دگەل خۆ ئینیت.',
    level: 'B1',
    questions: [
      { id: 'q140-1', question: 'Is technology constantly changing?', options: ['No', 'Yes', 'Only a little', 'Maybe'], correctAnswer: 1 },
      { id: 'q140-2', question: 'What might we see in the future?', options: ['Only old cars', 'Self-driving cars and advanced AI', 'Nothing new', 'Only radios'], correctAnswer: 1 },
      { id: 'q140-3', question: 'Where might people travel to in the future?', options: ['Only to the moon', 'To Mars', 'Only to the beach', 'Nowhere'], correctAnswer: 1 },
      { id: 'q140-4', question: 'Will technology continue to change our lives?', options: ['No', 'Yes', 'Only in the city', 'Maybe'], correctAnswer: 1 },
      { id: 'q140-5', question: 'Is it an exciting time to be alive?', options: ['No', 'Yes', 'It is boring', 'Maybe'], correctAnswer: 1 },
      { id: 'q140-6', question: 'Are the possibilities of technology endless?', options: ['No', 'Yes', 'They are limited', 'Maybe'], correctAnswer: 1 },
      { id: 'q140-7', question: 'Is artificial intelligence (AI) a type of technology?', options: ['No', 'Yes', 'It is a type of food', 'Maybe'], correctAnswer: 1 },
      { id: 'q140-8', question: 'Is Mars a planet?', options: ['No', 'Yes', 'It is a star', 'Maybe'], correctAnswer: 1 },
      { id: 'q140-9', question: 'Does technology shape the world?', options: ['No', 'Yes', 'Only in movies', 'Maybe'], correctAnswer: 1 },
      { id: 'q140-10', question: 'Is "tomorrow" the future?', options: ['No', 'Yes', 'It is the past', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-141',
    title: 'The Brave Knight',
    titleKurdish: 'سۆارچاکێ ئازا',
    content: 'Long ago, a brave knight named Arthur lived in a big castle. He wore shiny armor and carried a sharp sword. One day, a dragon attacked the village. Arthur rode his horse and fought the dragon. He was very brave and saved the people. The king gave him a gold medal for his courage.',
    contentKurdish: 'بەری دەمەکێ درێژ، سوارچاکەکێ ئازا بناڤێ ئارسەر د قەسرەکا مەزن دا دژیا. وی جلیەکێ ئاسنی یێ بریقەدار دپۆشی و شیشەکێ تیژ هەلگرتبوو. روژەکێ، ئەژدەهایەکێ هێرش کرە سەر گوندی. ئارسەر سواری ئەسپێ خۆ بوو و شەڕێ ئەژدەهایی کر. ئەو گەلەک یێ ئازا بوو و خەلک رزگار کر. پاشای مەدالیەکا زێری دا وی بو ئازایەتیا وی.',
    level: 'A2',
    questions: [
      { id: 'q141-1', question: 'Who was Arthur?', options: ['A king', 'A knight', 'A dragon', 'A farmer'], correctAnswer: 1 },
      { id: 'q141-2', question: 'Where did he live?', options: ['In a house', 'In a castle', 'In a cave', 'In a forest'], correctAnswer: 1 },
      { id: 'q141-3', question: 'What did he wear?', options: ['A suit', 'Shiny armor', 'A dress', 'A hat'], correctAnswer: 1 },
      { id: 'q141-4', question: 'What did he carry?', options: ['A book', 'A sharp sword', 'A bag', 'A shield'], correctAnswer: 1 },
      { id: 'q141-5', question: 'What attacked the village?', options: ['A giant', 'A dragon', 'A wolf', 'A lion'], correctAnswer: 1 },
      { id: 'q141-6', question: 'What did Arthur ride?', options: ['A bike', 'A horse', 'A car', 'A dragon'], correctAnswer: 1 },
      { id: 'q141-7', question: 'Did he save the people?', options: ['No', 'Yes', 'Only some', 'Maybe'], correctAnswer: 1 },
      { id: 'q141-8', question: 'What did the king give him?', options: ['A house', 'A gold medal', 'Money', 'A sword'], correctAnswer: 1 },
      { id: 'q141-9', question: 'Was Arthur scared?', options: ['Yes', 'No, he was brave', 'Maybe', 'A little'], correctAnswer: 1 },
      { id: 'q141-10', question: 'Is this a true story?', options: ['Yes', 'No, it is a legend', 'Maybe', 'It happened yesterday'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-142',
    title: 'The Wise Owl',
    titleKurdish: 'کوندێ دانەیا',
    content: 'In the middle of the forest, there lived a wise old owl. All the animals went to him for advice. One day, a rabbit asked, "How can I be happy?" The owl replied, "Be kind to others and enjoy the little things." The rabbit followed the advice and became the happiest animal in the forest.',
    contentKurdish: 'ل ناڤەڕاستا دارستانێ، کوندەکێ پیر و دانەیا دژیا. هەمی گیانەوەران قەستا وی دکر بو وەرگرتنا ئامۆژگاریان. روژەکێ، کێروشکەکێ پرسیار کر: "ئەز دێ چەوا یێ کەیفخۆش بم؟" کوندی بەرسڤ دا: "دگەل یێن دی یێ دلۆڤان بە و کەیفا خۆ ب تشتێن بچویک بینە." کێروشکی دویڤچوونا ئامۆژگاریێ کر و بوو کەیفخۆشترین گیانەوەر د دارستانێ دا.',
    level: 'A2',
    questions: [
      { id: 'q142-1', question: 'Where did the owl live?', options: ['In the city', 'In the forest', 'In a house', 'In a zoo'], correctAnswer: 1 },
      { id: 'q142-2', question: 'Was the owl wise?', options: ['No', 'Yes', 'He was young', 'Maybe'], correctAnswer: 1 },
      { id: 'q142-3', question: 'Why did animals go to him?', options: ['For food', 'For advice', 'To play', 'To sleep'], correctAnswer: 1 },
      { id: 'q142-4', question: 'Who asked for advice one day?', options: ['A fox', 'A rabbit', 'A bear', 'A bird'], correctAnswer: 1 },
      { id: 'q142-5', question: 'What was the rabbit\'s question?', options: ['Where is food?', 'How can I be happy?', 'What time is it?', 'Who are you?'], correctAnswer: 1 },
      { id: 'q142-6', question: 'What was the owl\'s advice?', options: ['Run fast', 'Be kind and enjoy little things', 'Eat more', 'Sleep all day'], correctAnswer: 1 },
      { id: 'q142-7', question: 'Did the rabbit follow the advice?', options: ['No', 'Yes', 'Maybe', 'He forgot'], correctAnswer: 1 },
      { id: 'q142-8', question: 'Did the rabbit become happy?', options: ['No', 'Yes, the happiest', 'He was still sad', 'Maybe'], correctAnswer: 1 },
      { id: 'q142-9', question: 'Is an owl a bird?', options: ['No', 'Yes', 'Maybe', 'It is a mammal'], correctAnswer: 1 },
      { id: 'q142-10', question: 'Do owls sleep at night?', options: ['Yes', 'No, they are nocturnal', 'Maybe', 'Only in winter'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-143',
    title: 'The First Bicycle',
    titleKurdish: 'بایسکلێ ئێکێ',
    content: 'The first bicycle was invented in the early 19th century. It did not have pedals, and people had to push it with their feet. Later, pedals and chains were added to make it faster. Today, bicycles are used for exercise, travel, and fun. They are a great way to stay healthy and protect the environment.',
    contentKurdish: 'ئێکەم بایسکل ل دەسپێکا سەدێ ١٩ێ هاتە داهێنان. وێ پەدال نەبوون، و خەلکی دڤیا ب پێیێن خۆ پاڵ بدەن. پاشتر، پەدال و زنجیر هاتنە زێدەکرن دا خێراتر لێ بهێت. ئەڤرۆ، بایسکل بو وەرزشێ، گەشتێ، و کەیفخۆشیێ دهێنە بکارئینان. ئەو رێگەکا نایابن بو مانەوە ب ساخلەمی و پاراستنا ژینگەیێ.',
    level: 'B1',
    questions: [
      { id: 'q143-1', question: 'When was the first bicycle invented?', options: ['18th century', 'Early 19th century', '20th century', 'Yesterday'], correctAnswer: 1 },
      { id: 'q143-2', question: 'Did the first bicycle have pedals?', options: ['Yes', 'No', 'Maybe', 'Only one'], correctAnswer: 1 },
      { id: 'q143-3', question: 'How did people move the first bicycle?', options: ['With a motor', 'By pushing with their feet', 'With their hands', 'With a horse'], correctAnswer: 1 },
      { id: 'q143-4', question: 'What was added later to make it faster?', options: ['A motor', 'Pedals and chains', 'Wings', 'A sail'], correctAnswer: 1 },
      { id: 'q143-5', question: 'What are bicycles used for today?', options: ['Only for kids', 'Exercise, travel, and fun', 'Only for racing', 'Nothing'], correctAnswer: 1 },
      { id: 'q143-6', question: 'Are bicycles good for health?', options: ['No', 'Yes', 'Maybe', 'Only for young people'], correctAnswer: 1 },
      { id: 'q143-7', question: 'Do bicycles protect the environment?', options: ['No', 'Yes', 'Maybe', 'They cause pollution'], correctAnswer: 1 },
      { id: 'q143-8', question: 'Do bicycles use petrol?', options: ['Yes', 'No', 'Maybe', 'Only big ones'], correctAnswer: 1 },
      { id: 'q143-9', question: 'Is cycling a sport?', options: ['No', 'Yes', 'Maybe', 'Only in France'], correctAnswer: 1 },
      { id: 'q143-10', question: 'Can you ride a bicycle?', options: ['No', 'Yes', 'Maybe', 'Never'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-144',
    title: 'The Giant Panda',
    titleKurdish: 'پاندایا زەبەلاح',
    content: 'Giant pandas are famous for their black and white fur. They live in the mountains of China and eat mostly bamboo. Pandas are very good at climbing trees and swimming. They are an endangered species, which means there are not many left in the wild. Many people work hard to protect them and their habitat.',
    contentKurdish: 'پاندایێن زەبەلاح ب فەروویا خۆ یا رەش و سپی دناڤدارن. ئەو ل چیاێن چینێ دژین و زۆربەی جاران قامیشێ بامبۆ دخۆن. پاندا گەلەک د باشن د سەرکەفتنا سەر داران و مەلەڤانیێ دا. ئەو جورەکێ د مەترسییا نەمانێ دانە، کو رامانا وێ ئەوە گەلەک ژ وان د سروشتێ دا نەماینە. گەلەک کەس ب زەحمەت کار دکەن دا وان و جهێ ژیانا وان بپارێزن.',
    level: 'B1',
    questions: [
      { id: 'q144-1', question: 'What color is a panda\'s fur?', options: ['Brown', 'Black and white', 'Grey', 'Yellow'], correctAnswer: 1 },
      { id: 'q144-2', question: 'Where do giant pandas live?', options: ['In Japan', 'In the mountains of China', 'In Africa', 'In the USA'], correctAnswer: 1 },
      { id: 'q144-3', question: 'What do pandas mostly eat?', options: ['Meat', 'Bamboo', 'Fruit', 'Fish'], correctAnswer: 1 },
      { id: 'q144-4', question: 'Are pandas good at climbing trees?', options: ['No', 'Yes', 'Maybe', 'Only small ones'], correctAnswer: 1 },
      { id: 'q144-5', question: 'Can pandas swim?', options: ['No', 'Yes', 'Maybe', 'Only in winter'], correctAnswer: 1 },
      { id: 'q144-6', question: 'What does "endangered species" mean?', options: ['They are dangerous', 'Not many left in the wild', 'They are very common', 'They are extinct'], correctAnswer: 1 },
      { id: 'q144-7', question: 'Do people try to protect pandas?', options: ['No', 'Yes', 'Only in China', 'Maybe'], correctAnswer: 1 },
      { id: 'q144-8', question: 'Is a panda a bear?', options: ['No', 'Yes', 'Maybe', 'It is a cat'], correctAnswer: 1 },
      { id: 'q144-9', question: 'Are pandas big?', options: ['No', 'Yes, they are giant', 'Maybe', 'They are tiny'], correctAnswer: 1 },
      { id: 'q144-10', question: 'Do pandas live in groups?', options: ['Yes', 'No, they are mostly solitary', 'Maybe', 'Only in winter'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-145',
    title: 'The Invention of the Steam Engine',
    titleKurdish: 'داهێنانا مۆتۆرێ هەلمێ',
    content: 'The steam engine was improved by James Watt in the 18th century. It used the power of steam to move machinery. This invention led to the Industrial Revolution, which changed the way goods were made. Steam engines were used in factories, trains, and ships. It was a major step in human history and technology.',
    contentKurdish: 'مۆتۆرێ هەلمێ ژ لایێ جەیمس وات ڤە هاتە پێشخستن د سەدێ ١٨ێ دا. وی هێزا هەلمێ بکار دئینا دا ئامیران بجولینیت. ئەڤ داهێنانە بوو ئەگەرێ شورەشا پیشەسازی، کو شێوازێ دروستکرنا کەلوپەلان گوهۆڕی. مۆتۆرێن هەلمێ د کارگەهـ، شەمەندەفەر، و کەشتیان دا دهاتنە بکارئینان. ئەو گاڤەکا مەزن بوو د دیرۆکا مروڤایەتی و تەکنەلۆژیایێ دا.',
    level: 'B1',
    questions: [
      { id: 'q145-1', question: 'Who improved the steam engine?', options: ['Thomas Edison', 'James Watt', 'Isaac Newton', 'Albert Einstein'], correctAnswer: 1 },
      { id: 'q145-2', question: 'In what century was it improved?', options: ['17th century', '18th century', '19th century', '20th century'], correctAnswer: 1 },
      { id: 'q145-3', question: 'What did the engine use for power?', options: ['Electricity', 'Steam', 'Oil', 'Gas'], correctAnswer: 1 },
      { id: 'q145-4', question: 'What revolution did this invention lead to?', options: ['French Revolution', 'Industrial Revolution', 'Digital Revolution', 'Green Revolution'], correctAnswer: 1 },
      { id: 'q145-5', question: 'Where were steam engines used?', options: ['Only in homes', 'Factories, trains, and ships', 'Only in cars', 'Nowhere'], correctAnswer: 1 },
      { id: 'q145-6', question: 'Did it change the way goods were made?', options: ['No', 'Yes', 'Only a little', 'Maybe'], correctAnswer: 1 },
      { id: 'q145-7', question: 'Was it an important invention?', options: ['No', 'Yes', 'Maybe', 'Only for trains'], correctAnswer: 1 },
      { id: 'q145-8', question: 'Is steam made from water?', options: ['No', 'Yes', 'Maybe', 'It is made from air'], correctAnswer: 1 },
      { id: 'q145-9', question: 'Was James Watt a scientist?', options: ['No', 'Yes, an engineer/inventor', 'Maybe', 'He was a doctor'], correctAnswer: 1 },
      { id: 'q145-10', question: 'Are steam engines common today?', options: ['Yes', 'No, they are replaced by other engines', 'Maybe', 'Only in space'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-146',
    title: 'The Amazon Rainforest',
    titleKurdish: 'دارستانا ئەمازۆن',
    content: 'The Amazon rainforest is the largest tropical rainforest in the world. it is home to millions of species of plants and animals. The Amazon River flows through the forest and is one of the longest rivers on Earth. The rainforest is often called the "lungs of the planet" because it produces a lot of oxygen. Protecting the Amazon is vital for the Earth\'s climate.',
    contentKurdish: 'دارستانا ئەمازۆن مەزنترین دارستانا کێمەربەندی یە ل جیهانێ. ئەو مالا ب ملیۆنان جورێن رووەک و گیانەوەرانە. رویبارێ ئەمازۆن دناڤ دارستانێ دا دبۆریت و ئێکە ژ درێژترین رویبارێن سەر ئەردی. دارستان زۆربەی جاران پێ دبێژن "سیهێن هەسارەیێ" چونکی ئەو گەلەک ئۆکسجینێ بەرهەم دئینیت. پاراستنا ئەمازۆنێ گەلەک یا گرنگە بو سەقایێ ئەردی.',
    level: 'B1',
    questions: [
      { id: 'q146-1', question: 'What is the largest tropical rainforest in the world?', options: ['Congo', 'Amazon', 'Daintree', 'Borneo'], correctAnswer: 1 },
      { id: 'q146-2', question: 'How many species live in the Amazon?', options: ['Hundreds', 'Millions', 'Thousands', 'Ten'], correctAnswer: 1 },
      { id: 'q146-3', question: 'What is the name of the river that flows through it?', options: ['Nile', 'Amazon', 'Mississippi', 'Yangtze'], correctAnswer: 1 },
      { id: 'q146-4', question: 'What is the rainforest often called?', options: ['The heart of the planet', 'The lungs of the planet', 'The brain of the planet', 'The skin of the planet'], correctAnswer: 1 },
      { id: 'q146-5', question: 'What does the rainforest produce a lot of?', options: ['Carbon dioxide', 'Oxygen', 'Water', 'Food'], correctAnswer: 1 },
      { id: 'q146-6', question: 'Is protecting the Amazon important?', options: ['No', 'Yes, vital', 'Only for Brazil', 'Maybe'], correctAnswer: 1 },
      { id: 'q146-7', question: 'Is the Amazon River short?', options: ['Yes', 'No, it is one of the longest', 'Maybe', 'It is the shortest'], correctAnswer: 1 },
      { id: 'q146-8', question: 'Where is the Amazon located?', options: ['Africa', 'South America', 'Asia', 'Europe'], correctAnswer: 1 },
      { id: 'q146-9', question: 'Are there many plants in the Amazon?', options: ['No', 'Yes, millions of species', 'Maybe', 'Only trees'], correctAnswer: 1 },
      { id: 'q146-10', question: 'Does the Amazon affect the Earth\'s climate?', options: ['No', 'Yes', 'Maybe', 'Only in summer'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-147',
    title: 'The Discovery of Penicillin',
    titleKurdish: 'دیتنا پەنیسلینێ',
    content: 'Alexander Fleming discovered penicillin in 1928 by accident. He noticed that a type of mold killed bacteria in his laboratory. Penicillin became the first antibiotic and has saved millions of lives from infections. This discovery revolutionized medicine and led to the development of many other life-saving drugs.',
    contentKurdish: 'ئەلێکساندەر فلیمینگ پەنیسلین دیت ل سالا ١٩٢٨ ب رێکەفت. وی تێبینی کر کو جورەکێ کەڕوویێ بەکتریا د تاقیگەها وی دا کوشتن. پەنیسلین بوو ئێکەم ئەنتی بایۆتیک و ب ملیۆنان ژیان ژ هەوکردنێ رزگار کرینە. ئەڤ داهێنانە شورەشەک د پزیشکیێ دا دروستکر و بوو ئەگەرێ گەشەپێدانا گەلەک دەرمانێن دی یێن ژیان پارێز.',
    level: 'B1',
    questions: [
      { id: 'q147-1', question: 'Who discovered penicillin?', options: ['Louis Pasteur', 'Alexander Fleming', 'Marie Curie', 'Isaac Newton'], correctAnswer: 1 },
      { id: 'q147-2', question: 'In what year was it discovered?', options: ['1900', '1928', '1950', '2000'], correctAnswer: 1 },
      { id: 'q147-3', question: 'How was it discovered?', options: ['On purpose', 'By accident', 'In a book', 'By a dream'], correctAnswer: 1 },
      { id: 'q147-4', question: 'What killed the bacteria in the lab?', options: ['Water', 'A type of mold', 'Heat', 'Cold'], correctAnswer: 1 },
      { id: 'q147-5', question: 'What was penicillin the first of?', options: ['Vaccine', 'Antibiotic', 'Vitamin', 'Surgery'], correctAnswer: 1 },
      { id: 'q147-6', question: 'How many lives has it saved?', options: ['Hundreds', 'Millions', 'Thousands', 'Ten'], correctAnswer: 1 },
      { id: 'q147-7', question: 'Did this discovery change medicine?', options: ['No', 'Yes, revolutionized it', 'Only a little', 'Maybe'], correctAnswer: 1 },
      { id: 'q147-8', question: 'Is penicillin still used today?', options: ['No', 'Yes', 'Only in space', 'Maybe'], correctAnswer: 1 },
      { id: 'q147-9', question: 'Was Fleming a doctor/scientist?', options: ['No', 'Yes', 'Maybe', 'He was a farmer'], correctAnswer: 1 },
      { id: 'q147-10', question: 'What are infections?', options: ['Healthy states', 'Illnesses caused by bacteria/germs', 'Types of food', 'Exercises'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-148',
    title: 'The First Marathon',
    titleKurdish: 'ماراسۆنا ئێکێ',
    content: 'The marathon is a long-distance race named after a Greek legend. According to the story, a messenger named Pheidippides ran from Marathon to Athens to deliver news of a victory. He ran about 26 miles without stopping. Today, marathons are held all over the world, and thousands of people participate in them every year.',
    contentKurdish: 'ماراسۆن پێشبڕکێیەکا درێژە کو ناڤێ وێ ژ ئەفسانەیەکا یۆنانی هاتیە. ل دویڤ چیرۆکێ، پەیامبەرەک بناڤێ فیدیپیدس ژ ماراسۆن بو ئەسینا بەزی دا نووچەیێ سەرکەفتنەکێ بگەهینیت. ئەو نێزیکەی ٢٦ میلان بەزی بێی راوەستیان. ئەڤرۆ، ماراسۆن ل هەمی جیهانێ دهێنە ئەنجام دان، و ب هزاران کەس هەر سال تێدا پشکدار دبن.',
    level: 'B1',
    questions: [
      { id: 'q148-1', question: 'What is a marathon?', options: ['A short race', 'A long-distance race', 'A swim', 'A bike ride'], correctAnswer: 1 },
      { id: 'q148-2', question: 'Where does the name come from?', options: ['A Roman legend', 'A Greek legend', 'A French story', 'A movie'], correctAnswer: 1 },
      { id: 'q148-3', question: 'Who was Pheidippides?', options: ['A king', 'A messenger', 'A soldier', 'A doctor'], correctAnswer: 1 },
      { id: 'q148-4', question: 'Where did he run from and to?', options: ['Athens to Sparta', 'Marathon to Athens', 'Rome to Paris', 'London to New York'], correctAnswer: 1 },
      { id: 'q148-5', question: 'How far did he run?', options: ['One mile', 'About 26 miles', '100 miles', 'Ten miles'], correctAnswer: 1 },
      { id: 'q148-6', question: 'Did he stop while running?', options: ['Yes', 'No', 'Maybe', 'Only for water'], correctAnswer: 1 },
      { id: 'q148-7', question: 'Are marathons popular today?', options: ['No', 'Yes, all over the world', 'Only in Greece', 'Maybe'], correctAnswer: 1 },
      { id: 'q148-8', question: 'How many people participate today?', options: ['Hundreds', 'Thousands', 'Ten', 'Nobody'], correctAnswer: 1 },
      { id: 'q148-9', question: 'Is running good for health?', options: ['No', 'Yes', 'Maybe', 'Only for kids'], correctAnswer: 1 },
      { id: 'q148-10', question: 'Is 26 miles a long distance?', options: ['No', 'Yes', 'Maybe', 'It is very short'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-149',
    title: 'The Statue of Liberty',
    titleKurdish: 'پەیکەرێ ئازادیێ',
    content: 'The Statue of Liberty is a giant statue in New York Harbor. It was a gift from France to the United States in 1886. The statue represents freedom and democracy. It is made of copper and has turned green over time. Millions of people visit the statue every year to see this symbol of hope.',
    contentKurdish: 'پەیکەرێ ئازادیێ پەیکەرەکێ زەبەلاحە ل بەندەرێ نیویۆرکێ. ئەو دیاریەک بوو ژ فەرەنسا بو ویلایەتێن یەکگرتی ل سالا ١٨٨٦. پەیکەر نیشانا ئازادی و دیموکراسیێ یە. ئەو ژ مسێ هاتیە دروستکرن و ب بورینا دەمی بوویە کەسک. ب ملیۆنان کەس هەر سال سەرەدانا پەیکەری دکەن دا ڤێ نیشانا هیڤیێ ببینن.',
    level: 'B1',
    questions: [
      { id: 'q149-1', question: 'Where is the Statue of Liberty?', options: ['Paris', 'New York Harbor', 'London', 'Washington DC'], correctAnswer: 1 },
      { id: 'q149-2', question: 'Who gave the statue to the USA?', options: ['UK', 'France', 'Germany', 'Italy'], correctAnswer: 1 },
      { id: 'q149-3', question: 'In what year was it given?', options: ['1776', '1886', '1900', '1950'], correctAnswer: 1 },
      { id: 'q149-4', question: 'What does the statue represent?', options: ['War', 'Freedom and democracy', 'Wealth', 'Power'], correctAnswer: 1 },
      { id: 'q149-5', question: 'What material is it made of?', options: ['Gold', 'Copper', 'Stone', 'Iron'], correctAnswer: 1 },
      { id: 'q149-6', question: 'What color has it turned over time?', options: ['Red', 'Green', 'Blue', 'Black'], correctAnswer: 1 },
      { id: 'q149-7', question: 'How many people visit it every year?', options: ['Hundreds', 'Millions', 'Thousands', 'Nobody'], correctAnswer: 1 },
      { id: 'q149-8', question: 'Is it a small statue?', options: ['Yes', 'No, it is giant', 'Maybe', 'It is tiny'], correctAnswer: 1 },
      { id: 'q149-9', question: 'Is it a symbol of hope?', options: ['No', 'Yes', 'Maybe', 'Only for France'], correctAnswer: 1 },
      { id: 'q149-10', question: 'Is it in the water?', options: ['Yes, on an island in the harbor', 'No', 'Maybe', 'In a park'], correctAnswer: 0 }
    ]
  },
  {
    id: 'story-150',
    title: 'The Invention of the Radio',
    titleKurdish: 'داهێنانا رادیۆیێ',
    content: 'Guglielmo Marconi is credited with inventing the radio in the late 19th century. He used radio waves to send signals without wires. The radio allowed people to listen to news and music from far away. It was a major breakthrough in communication. Today, we still use radio for broadcasting and communication in many ways.',
    contentKurdish: 'گۆگلیێلمۆ مارکۆنی ب داهێنەرێ رادیۆیێ دهێتە نیاسین ل دوماهیکا سەدێ ١٩ێ. وی پێلێن رادیۆیێ بکار دئینان دا ئاماژان بێی تەل بنێریت. رادیۆیێ رێ دا خەلکی کو گوهـ ل نووچە و مۆزیکێ بگرن ژ دویراتیێن درێژ. ئەو پێشکەفتنەکا مەزن بوو د پەیوەندیان دا. ئەڤرۆ، ئەم هێشتا رادیۆیێ بو پەخشکرن و پەیوەندیان ب گەلەک شێوازان بکار دئینین.',
    level: 'B1',
    questions: [
      { id: 'q150-1', question: 'Who is credited with inventing the radio?', options: ['Thomas Edison', 'Guglielmo Marconi', 'Alexander Bell', 'Nikola Tesla'], correctAnswer: 1 },
      { id: 'q150-2', question: 'When was it invented?', options: ['Early 19th century', 'Late 19th century', '20th century', 'Yesterday'], correctAnswer: 1 },
      { id: 'q150-3', question: 'What did he use to send signals?', options: ['Wires', 'Radio waves', 'Light', 'Sound'], correctAnswer: 1 },
      { id: 'q150-4', question: 'What did the radio allow people to do?', options: ['Watch movies', 'Listen to news and music from far away', 'Take photos', 'Cook'], correctAnswer: 1 },
      { id: 'q150-5', question: 'Was it a major breakthrough?', options: ['No', 'Yes', 'Only a little', 'Maybe'], correctAnswer: 1 },
      { id: 'q150-6', question: 'Do we still use radio today?', options: ['No', 'Yes', 'Only in cars', 'Maybe'], correctAnswer: 1 },
      { id: 'q150-7', question: 'Is radio used for broadcasting?', options: ['No', 'Yes', 'Maybe', 'Only in the past'], correctAnswer: 1 },
      { id: 'q150-8', question: 'Was Marconi an inventor?', options: ['No', 'Yes', 'Maybe', 'He was a singer'], correctAnswer: 1 },
      { id: 'q150-9', question: 'Can radio waves travel through air?', options: ['No', 'Yes', 'Maybe', 'Only through water'], correctAnswer: 1 },
      { id: 'q150-10', question: 'Is radio important for communication?', options: ['No', 'Yes', 'Maybe', 'Only for music'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-151',
    title: 'The Life of a Honeybee',
    titleKurdish: 'ژیانا مێشەنگێ',
    content: 'Honeybees are very busy and important insects. They live in hives and work together to make honey. Bees fly from flower to flower to collect nectar. While doing this, they also help pollinate plants, which is vital for growing food. A hive has one queen bee and thousands of worker bees. We should protect bees because they help our environment.',
    contentKurdish: 'مێشەنگ مێشێن گەلەک مژوول و گرنگن. ئەو دناڤ پوران دا دژین و پێکڤە کار دکەن دا هنگڤینی دروست کەن. مێش ژ گولەکێ بو گولەکا دی دفرن دا شیلانێ کۆم بکەن. دەما ڤێ کارى دکەن، ئەو هەروەسا هاریکاریا پیتاندنا رووەکان دکەن، کو ئەڤە گەلەک یا گرنگە بو شینبوونا خوارنێ. هەر پورەکێ مێشەکا شاهژن و ب هزاران مێشێن کارکەر یێن هەین. دڤێت ئەم مێشان بپارێزین چونکی ئەو هاریکاریا ژینگەیێ مە دکەن.',
    level: 'A2',
    questions: [
      { id: 'q151-1', question: 'Where do honeybees live?', options: ['In nests', 'In hives', 'In holes', 'In trees'], correctAnswer: 1 },
      { id: 'q151-2', question: 'What do they make?', options: ['Milk', 'Honey', 'Sugar', 'Bread'], correctAnswer: 1 },
      { id: 'q151-3', question: 'What do they collect from flowers?', options: ['Water', 'Nectar', 'Leaves', 'Seeds'], correctAnswer: 1 },
      { id: 'q151-4', question: 'What important job do they do for plants?', options: ['Eat them', 'Pollinate them', 'Cut them', 'Water them'], correctAnswer: 1 },
      { id: 'q151-5', question: 'How many queen bees are in a hive?', options: ['Ten', 'One', 'Hundreds', 'None'], correctAnswer: 1 },
      { id: 'q151-6', question: 'What are the other bees called?', options: ['King bees', 'Worker bees', 'Soldier bees', 'Baby bees'], correctAnswer: 1 },
      { id: 'q151-7', question: 'Should we protect bees?', options: ['No', 'Yes', 'Maybe', 'Only some of them'], correctAnswer: 1 },
      { id: 'q151-8', question: 'Are bees important for growing food?', options: ['No', 'Yes', 'Maybe', 'Only for flowers'], correctAnswer: 1 },
      { id: 'q151-9', question: 'Are bees busy?', options: ['No', 'Yes', 'They sleep all day', 'Maybe'], correctAnswer: 1 },
      { id: 'q151-10', question: 'Is honey sweet?', options: ['No', 'Yes', 'It is sour', 'It is salty'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-152',
    title: 'The First Moon Walk',
    titleKurdish: 'ئێکەم پیاسە ل سەر هەیڤێ',
    content: 'On July 20, 1969, Neil Armstrong became the first human to step on the moon. He was part of the Apollo 11 mission. As he stepped onto the lunar surface, he said, "That\'s one small step for man, one giant leap for mankind." This event was a huge achievement in science and exploration. It showed that humans could travel to other worlds.',
    contentKurdish: 'ل ٢٠ێ تەمموزا ١٩٦٩، نیل ئارمسترۆنگ بوو ئێکەم مروڤ کو پێ ل سەر هەیڤێ دانیت. ئەو بەشەک بوو ژ ئەرکێ ئەپۆلۆ ١١. دەما وی پێ ل سەر روویێ هەیڤێ دانی، وی گۆت: "ئەو گاڤەکا بچویکە بو مروڤی، بەلێ بازدانەکا زەبەلاحە بو مروڤایەتیێ." ئەڤ رووداوە دەستکەفتەکێ مەزن بوو د زانست و گەڕیانێ دا. وێ نیشان دا کو مروڤ دشێن گەشتێ بو جیهانێن دی بکەن.',
    level: 'B1',
    questions: [
      { id: 'q152-1', question: 'Who was the first human to walk on the moon?', options: ['Buzz Aldrin', 'Neil Armstrong', 'Yuri Gagarin', 'John Glenn'], correctAnswer: 1 },
      { id: 'q152-2', question: 'What was the date of the moon walk?', options: ['July 4, 1776', 'July 20, 1969', 'August 15, 1945', 'January 1, 2000'], correctAnswer: 1 },
      { id: 'q152-3', question: 'What was the mission name?', options: ['Apollo 1', 'Apollo 11', 'Discovery', 'Challenger'], correctAnswer: 1 },
      { id: 'q152-4', question: 'What did Neil Armstrong say?', options: ['"Hello moon"', '"One small step for man..."', '"It is beautiful"', '"I am home"'], correctAnswer: 1 },
      { id: 'q152-5', question: 'Was it a small achievement?', options: ['Yes', 'No, it was a huge achievement', 'Maybe', 'Only for America'], correctAnswer: 1 },
      { id: 'q152-6', question: 'What did it show about humans?', options: ['They can\'t fly', 'They can travel to other worlds', 'They are small', 'Nothing'], correctAnswer: 1 },
      { id: 'q152-7', question: 'Is the moon a world?', options: ['Yes', 'No', 'Maybe', 'It is a star'], correctAnswer: 1 },
      { id: 'q152-8', question: 'Did he walk alone at first?', options: ['No', 'Yes', 'Maybe', 'With a dog'], correctAnswer: 1 },
      { id: 'q152-9', question: 'Is there air on the moon?', options: ['Yes', 'No', 'Maybe', 'Only in caves'], correctAnswer: 1 },
      { id: 'q152-10', question: 'Was it a historic event?', options: ['No', 'Yes', 'Maybe', 'Only for scientists'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-153',
    title: 'The Invention of the Printing Press',
    titleKurdish: 'داهێنانا ئامیرێ چاپێ',
    content: 'Johannes Gutenberg invented the printing press in the 15th century. Before this, books were written by hand and were very rare and expensive. The printing press allowed books to be made quickly and cheaply. This led to a huge increase in literacy and the spread of knowledge. It is considered one of the most important inventions in history.',
    contentKurdish: 'یۆهانیس گۆتنبێرگ ئامیرێ چاپێ داهێنا ل سەدێ ١٥ێ. بەری ڤێ، پەرتووک ب دەستی دهاتنە نڤیسین و گەلەک یێن دەگمەن و گران بوون. ئامیرێ چاپێ رێ دا کو پەرتووک ب خێرایی و ئەرزانی بهێنە دروستکرن. ئەڤە بوو ئەگەرێ زێدەبوونا خواندەواریێ و بەلاڤبوونا زانستى. ئەو ب ئێک ژ گرنگترین داهێنانێن دیرۆکێ دهێتە هەژمارتن.',
    level: 'B1',
    questions: [
      { id: 'q153-1', question: 'Who invented the printing press?', options: ['Thomas Edison', 'Johannes Gutenberg', 'Leonardo da Vinci', 'Isaac Newton'], correctAnswer: 1 },
      { id: 'q153-2', question: 'In what century was it invented?', options: ['12th century', '15th century', '18th century', '20th century'], correctAnswer: 1 },
      { id: 'q153-3', question: 'How were books made before the printing press?', options: ['By machines', 'By hand', 'They didn\'t exist', 'By computers'], correctAnswer: 1 },
      { id: 'q153-4', question: 'Were books expensive before the invention?', options: ['No', 'Yes, very rare and expensive', 'Maybe', 'They were free'], correctAnswer: 1 },
      { id: 'q153-5', question: 'What did the printing press allow?', options: ['Books to be made quickly and cheaply', 'People to fly', 'Cars to be built', 'Nothing'], correctAnswer: 0 },
      { id: 'q153-6', question: 'What did it lead to?', options: ['Decrease in reading', 'Increase in literacy and spread of knowledge', 'War', 'Nothing'], correctAnswer: 1 },
      { id: 'q153-7', question: 'Is it an important invention?', options: ['No', 'Yes, one of the most important', 'Maybe', 'Only for writers'], correctAnswer: 1 },
      { id: 'q153-8', question: 'Did Gutenberg live in the 20th century?', options: ['Yes', 'No', 'Maybe', 'He is still alive'], correctAnswer: 1 },
      { id: 'q153-9', question: 'Can we print many books today?', options: ['No', 'Yes', 'Maybe', 'Only one a day'], correctAnswer: 1 },
      { id: 'q153-10', question: 'Is literacy important?', options: ['No', 'Yes', 'Maybe', 'Only for teachers'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-154',
    title: 'The Great Barrier Reef',
    titleKurdish: 'بەربەستێ مەزن یێ مەرجانی',
    content: 'The Great Barrier Reef is the world\'s largest coral reef system. It is located in the Coral Sea, off the coast of Australia. The reef is home to thousands of species of fish, turtles, and sharks. It is so large that it can be seen from space. Climate change is a big threat to the reef, and many people are working to save it.',
    contentKurdish: 'بەربەستێ مەزن یێ مەرجانی مەزنترین سیستەمێ مەرجانی یە ل جیهانێ. ئەو ل دەریایا مەرجانی، ل نێزیک کەنارێن ئۆسترالیا هەلکەفتیە. بەربەست مالا ب هزاران جورێن ماسی، کیسەل، و کوسەیانە. ئەو هندێ مەزنە کو دشێت ژ فەزایێ بهێتە دیتن. گوهۆڕینا سەقایێ مەترسیەکا مەزنە بو سەر بەربەستی، و گەلەک کەس کار دکەن دا وی بپارێزن.',
    level: 'B1',
    questions: [
      { id: 'q154-1', question: 'What is the Great Barrier Reef?', options: ['A forest', 'A coral reef system', 'A mountain', 'A desert'], correctAnswer: 1 },
      { id: 'q154-2', question: 'Where is it located?', options: ['Off the coast of USA', 'Off the coast of Australia', 'In Africa', 'In Europe'], correctAnswer: 1 },
      { id: 'q154-3', question: 'How many species live there?', options: ['Hundreds', 'Thousands', 'Ten', 'None'], correctAnswer: 1 },
      { id: 'q154-4', question: 'Can it be seen from space?', options: ['No', 'Yes', 'Maybe', 'Only at night'], correctAnswer: 1 },
      { id: 'q154-5', question: 'What is a big threat to the reef?', options: ['Fishing', 'Climate change', 'Tourism', 'Boats'], correctAnswer: 1 },
      { id: 'q154-6', question: 'Are there sharks in the reef?', options: ['No', 'Yes', 'Maybe', 'Only small ones'], correctAnswer: 1 },
      { id: 'q154-7', question: 'Is it the largest reef in the world?', options: ['No', 'Yes', 'Maybe', 'It is the smallest'], correctAnswer: 1 },
      { id: 'q154-8', question: 'Is it in the ocean?', options: ['No', 'Yes, in the Coral Sea', 'Maybe', 'In a lake'], correctAnswer: 1 },
      { id: 'q154-9', question: 'Do people try to save it?', options: ['No', 'Yes', 'Maybe', 'Nobody cares'], correctAnswer: 1 },
      { id: 'q154-10', question: 'Are corals plants or animals?', options: ['Plants', 'Animals', 'Rocks', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-155',
    title: 'The Invention of the Camera',
    titleKurdish: 'داهێنانا کامیرێ',
    content: 'The first permanent photograph was taken in 1826. Early cameras were very large and took a long time to take a single photo. Today, we have digital cameras and smartphones that can take high-quality photos instantly. Photography allows us to capture memories and share them with others. It has become a popular hobby and profession.',
    contentKurdish: 'ئێکەم وێنەیێ هەمیشەیی ل سالا ١٨٢٦ هاتە گرتن. کامیرێن دەسپێکێ گەلەک یێن مەزن بوون و دەمەکێ درێژ دڤیا دا ئێک وێنە بگریت. ئەڤرۆ، مە کامیرێن دیجیتاڵ و سمارتفۆن یێن هەین کو دشێن وێنەیێن ب کوالێتیەکا بلند ب خێرایی بگرن. وێنەگری رێ ددەتە مە کو بیرهاتنان تۆمار بکەین و دگەل یێن دی بەش بکەین. ئەو بوویە خولیایەک و پیشەیەکێ ناڤدار.',
    level: 'B1',
    questions: [
      { id: 'q155-1', question: 'When was the first permanent photograph taken?', options: ['1700', '1826', '1900', '2000'], correctAnswer: 1 },
      { id: 'q155-2', question: 'Were early cameras small?', options: ['Yes', 'No, they were very large', 'Maybe', 'Like a phone'], correctAnswer: 1 },
      { id: 'q155-3', question: 'Did it take a long time to take a photo back then?', options: ['No', 'Yes', 'Maybe', 'It was instant'], correctAnswer: 1 },
      { id: 'q155-4', question: 'What do we use today to take photos?', options: ['Only big cameras', 'Digital cameras and smartphones', 'Nothing', 'Radios'], correctAnswer: 1 },
      { id: 'q155-5', question: 'What does photography allow us to do?', options: ['Forget things', 'Capture memories and share them', 'Nothing', 'Cook'], correctAnswer: 1 },
      { id: 'q155-6', question: 'Is photography a popular hobby?', options: ['No', 'Yes', 'Maybe', 'Only for old people'], correctAnswer: 1 },
      { id: 'q155-7', question: 'Can smartphones take high-quality photos?', options: ['No', 'Yes', 'Maybe', 'Only some of them'], correctAnswer: 1 },
      { id: 'q155-8', question: 'Is 1826 in the 19th century?', options: ['No', 'Yes', 'Maybe', 'It is in the 20th'], correctAnswer: 1 },
      { id: 'q155-9', question: 'Do you like taking photos?', options: ['No', 'Yes', 'Maybe', 'Never'], correctAnswer: 1 },
      { id: 'q155-10', question: 'Is a camera an electronic device today?', options: ['No', 'Yes', 'Maybe', 'It is a book'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-156',
    title: 'The Life of a Butterfly',
    titleKurdish: 'ژیانا پەپوولێ',
    content: 'A butterfly starts its life as a tiny egg. It hatches into a caterpillar, which eats a lot of leaves. Then, it forms a chrysalis and undergoes a transformation called metamorphosis. Finally, a beautiful butterfly emerges. Butterflies have colorful wings and fly from flower to flower. Their life cycle is a wonder of nature.',
    contentKurdish: 'پەپوولە ژیانا خۆ وەک هێکەکا بچویک دەسپێ دکەت. ئەو دبیتە کرمەک، کو گەلەک گەلایان دخۆت. پاشان، ئەو قۆزاخەکێ دروست دکەت و گوهۆڕینەکێ ب ناڤێ گوهۆڕینا شێوەی (metamorphosis) ئەنجام ددەت. ل دوماهیکێ، پەپوولەکا جوان دەردکەڤیت. پەپوولە بالێن رەنگاوڕەنگ یێن هەین و ژ گولەکێ بو گولەکا دی دفرن. خولا ژیانا وان حێبەتیەکا سروشتی یە.',
    level: 'A2',
    questions: [
      { id: 'q156-1', question: 'How does a butterfly start its life?', options: ['As a bird', 'As a tiny egg', 'As a caterpillar', 'As a flower'], correctAnswer: 1 },
      { id: 'q156-2', question: 'What does a caterpillar eat?', options: ['Meat', 'Leaves', 'Fruit', 'Bread'], correctAnswer: 1 },
      { id: 'q156-3', question: 'What does it form after being a caterpillar?', options: ['A nest', 'A chrysalis', 'A house', 'A hole'], correctAnswer: 1 },
      { id: 'q156-4', question: 'What is the transformation called?', options: ['Growth', 'Metamorphosis', 'Change', 'Sleep'], correctAnswer: 1 },
      { id: 'q156-5', question: 'What emerges at the end?', options: ['A bird', 'A beautiful butterfly', 'A bee', 'A fly'], correctAnswer: 1 },
      { id: 'q156-6', question: 'Do butterflies have colorful wings?', options: ['No', 'Yes', 'Maybe', 'Only black wings'], correctAnswer: 1 },
      { id: 'q156-7', question: 'Where do butterflies fly?', options: ['To the moon', 'From flower to flower', 'In the water', 'Nowhere'], correctAnswer: 1 },
      { id: 'q156-8', question: 'Is the life cycle a wonder of nature?', options: ['No', 'Yes', 'Maybe', 'It is boring'], correctAnswer: 1 },
      { id: 'q156-9', question: 'Is a butterfly an insect?', options: ['No', 'Yes', 'Maybe', 'It is a mammal'], correctAnswer: 1 },
      { id: 'q156-10', question: 'Can butterflies fly fast?', options: ['No', 'Yes', 'Maybe', 'Only some of them'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-157',
    title: 'The Invention of the Car',
    titleKurdish: 'داهێنانا ترومبێلێ',
    content: 'The first modern car was invented by Karl Benz in 1886. It had three wheels and a small engine. Before cars, people used horses and carriages to travel. Cars have changed the way we live, making it easier to travel long distances. Today, we have electric cars that are better for the environment. Transportation continues to improve.',
    contentKurdish: 'ئێکەم ترومبێلا مۆدێرن ژ لایێ کارڵ بێنز ڤە هاتە داهێنان ل سالا ١٨٨٦. وێ سێ تایر و مۆتۆرەکێ بچویک هەبوو. بەری ترومبێلان، خەلکی ئەسپ و عەرەبانە بکار دئینان بو گەشتێ. ترومبێلان شێوازێ ژیانا مە گوهۆڕی، و گەشتکرن بو دویراتیێن درێژ ب ساناهیتر لێ کر. ئەڤرۆ، مە ترومبێلێن کارەبێ یێن هەین کو بو ژینگەیێ باشترن. ڤەگوهۆستن بەردەوام یا بەرەڤ پێش دچیت.',
    level: 'B1',
    questions: [
      { id: 'q157-1', question: 'Who invented the first modern car?', options: ['Henry Ford', 'Karl Benz', 'Thomas Edison', 'Elon Musk'], correctAnswer: 1 },
      { id: 'q157-2', question: 'In what year was it invented?', options: ['1800', '1886', '1900', '1950'], correctAnswer: 1 },
      { id: 'q157-3', question: 'How many wheels did the first car have?', options: ['Four', 'Three', 'Two', 'Five'], correctAnswer: 1 },
      { id: 'q157-4', question: 'What did people use before cars?', options: ['Planes', 'Horses and carriages', 'Bikes', 'Nothing'], correctAnswer: 1 },
      { id: 'q157-5', question: 'Have cars changed the way we live?', options: ['No', 'Yes', 'Only a little', 'Maybe'], correctAnswer: 1 },
      { id: 'q157-6', question: 'What kind of cars are better for the environment today?', options: ['Petrol cars', 'Electric cars', 'Diesel cars', 'Old cars'], correctAnswer: 1 },
      { id: 'q157-7', question: 'Is transportation improving?', options: ['No', 'Yes', 'Maybe', 'It stopped'], correctAnswer: 1 },
      { id: 'q157-8', question: 'Was the first car engine big?', options: ['Yes', 'No, it was small', 'Maybe', 'It didn\'t have an engine'], correctAnswer: 1 },
      { id: 'q157-9', question: 'Is Karl Benz famous?', options: ['No', 'Yes', 'Maybe', 'Only in Germany'], correctAnswer: 1 },
      { id: 'q157-10', question: 'Do you have a car?', options: ['No', 'Yes', 'Maybe', 'Never'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-158',
    title: 'The Solar System',
    titleKurdish: 'کۆمەلا رۆژێ',
    content: 'Our solar system has eight planets that orbit the sun. The sun is a giant star at the center. Earth is the only planet known to have life. Other planets like Mars and Jupiter are very different. Jupiter is the largest planet, and Saturn has beautiful rings. Exploring space helps us understand our place in the universe.',
    contentKurdish: 'کۆمەلا مە یا رۆژێ هەشت هەسارەیێن هەین کو ل دۆڕ رۆژێ دزڤڕن. رۆژ ئەستێرەکا زەبەلاحە ل ناڤەڕاستێ. ئەرد تاکە هەسارەیە کو ژیان ل سەر دهێتە زانین. هەسارەیێن دی وەک مارس و جۆپیتەر گەلەک جودانە. جۆپیتەر مەزنترین هەسارەیە، و شەبت (Saturn) بازنێن جوان یێن هەین. گەڕیان د فەزایێ دا هاریکاریا مە دکەت دا جهێ خۆ د گەردوونێ دا تێبگەهین.',
    level: 'B1',
    questions: [
      { id: 'q158-1', question: 'How many planets are in our solar system?', options: ['Seven', 'Eight', 'Nine', 'Ten'], correctAnswer: 1 },
      { id: 'q158-2', question: 'What is at the center of the solar system?', options: ['Earth', 'The sun', 'The moon', 'Mars'], correctAnswer: 1 },
      { id: 'q158-3', question: 'Which planet has life?', options: ['Mars', 'Earth', 'Venus', 'Jupiter'], correctAnswer: 1 },
      { id: 'q158-4', question: 'Which is the largest planet?', options: ['Earth', 'Jupiter', 'Saturn', 'Neptune'], correctAnswer: 1 },
      { id: 'q158-5', question: 'Which planet has beautiful rings?', options: ['Mars', 'Saturn', 'Venus', 'Mercury'], correctAnswer: 1 },
      { id: 'q158-6', question: 'What is the sun?', options: ['A planet', 'A giant star', 'A moon', 'A comet'], correctAnswer: 1 },
      { id: 'q158-7', question: 'Does exploring space help us?', options: ['No', 'Yes', 'Maybe', 'Only scientists'], correctAnswer: 1 },
      { id: 'q158-8', question: 'Is the moon a planet?', options: ['Yes', 'No', 'Maybe', 'It is a star'], correctAnswer: 1 },
      { id: 'q158-9', question: 'Is the solar system big?', options: ['No', 'Yes, very big', 'Maybe', 'It is small'], correctAnswer: 1 },
      { id: 'q158-10', question: 'Are all planets the same?', options: ['Yes', 'No, they are different', 'Maybe', 'Only Earth is different'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-159',
    title: 'The Great Wall of China',
    titleKurdish: 'دیوارێ مەزن یێ چینێ',
    content: 'The Great Wall of China is one of the most famous structures in the world. It was built thousands of years ago to protect China from invaders. The wall is thousands of miles long and is made of stone, brick, and wood. It is a symbol of China\'s history and strength. Millions of tourists visit it every year.',
    contentKurdish: 'دیوارێ مەزن یێ چینێ ئێکە ژ ناڤدارترین ئاڤاهیێن جیهانێ. ئەو بەری ب هزاران سالان هاتبوو ئاڤاکرن دا چینێ ژ هێرشکەران بپارێزیت. دیوار ب هزاران میلان یێ درێژە و ژ بەرد، کەرپۆچ، و تەختەی هاتیە دروستکرن. ئەو نیشانا دیرۆک و هێزا چینێ یە. ب ملیۆنان گەشتیار هەر سال سەرەدانا وی دکەن.',
    level: 'B1',
    questions: [
      { id: 'q159-1', question: 'Where is the Great Wall?', options: ['Japan', 'China', 'India', 'USA'], correctAnswer: 1 },
      { id: 'q159-2', question: 'Why was it built?', options: ['For fun', 'To protect China from invaders', 'To help people walk', 'For decoration'], correctAnswer: 1 },
      { id: 'q159-3', question: 'How long is the wall?', options: ['One mile', 'Thousands of miles', 'Ten miles', 'One hundred miles'], correctAnswer: 1 },
      { id: 'q159-4', question: 'What materials were used?', options: ['Only plastic', 'Stone, brick, and wood', 'Only glass', 'Only metal'], correctAnswer: 1 },
      { id: 'q159-5', question: 'Is it a symbol of China\'s history?', options: ['No', 'Yes', 'Maybe', 'Only for tourists'], correctAnswer: 1 },
      { id: 'q159-6', question: 'How many people visit it every year?', options: ['Hundreds', 'Millions', 'Thousands', 'Nobody'], correctAnswer: 1 },
      { id: 'q159-7', question: 'When was it built?', options: ['Yesterday', 'Thousands of years ago', 'In 1900', 'In 2000'], correctAnswer: 1 },
      { id: 'q159-8', question: 'Is it famous?', options: ['No', 'Yes', 'Maybe', 'Only in Asia'], correctAnswer: 1 },
      { id: 'q159-9', question: 'Is the wall straight?', options: ['Yes', 'No, it follows the mountains', 'Maybe', 'It is a circle'], correctAnswer: 1 },
      { id: 'q159-10', question: 'Can you see it from space?', options: ['No', 'Yes, according to some', 'Maybe', 'Only at night'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-160',
    title: 'The Invention of the Telephone',
    titleKurdish: 'داهێنانا تەلەفۆنێ',
    content: 'Alexander Graham Bell invented the telephone in 1876. He wanted to help people talk to each other over long distances. The first words spoken were, "Mr. Watson, come here, I want to see you." Today, we have smartphones that can do many things. Communication has changed a lot since the first telephone was invented.',
    contentKurdish: 'ئەلێکساندەر گراهام بێڵ تەلەفۆن داهێنا ل سالا ١٨٧٦. وی دڤیا هاریکاریا خەلکی بکەت دا دگەل ئێک باخڤن ل سەر دویراتیێن درێژ. ئێکەم پەیڤێن هاتینە گۆتن ئەڤە بوون: "خودێ واتسۆن، وەرە ڤێرێ، ئەز دڤێت تە ببینم." ئەڤرۆ، مە سمارتفۆن یێن هەین کو دشێن گەلەک تشتان بکەن. پەیوەندی گەلەک گوهۆڕیە ژ دەما داهێنانا ئێکەم تەلەفۆنێ وەرە.',
    level: 'B1',
    questions: [
      { id: 'q160-1', question: 'Who invented the telephone?', options: ['Thomas Edison', 'Alexander Graham Bell', 'Isaac Newton', 'Albert Einstein'], correctAnswer: 1 },
      { id: 'q160-2', question: 'In what year was it invented?', options: ['1800', '1876', '1900', '1950'], correctAnswer: 1 },
      { id: 'q160-3', question: 'Why did he invent it?', options: ['To play games', 'To help people talk over long distances', 'To listen to music', 'To take photos'], correctAnswer: 1 },
      { id: 'q160-4', question: 'Who was the first person called?', options: ['Mr. Bell', 'Mr. Watson', 'Mr. Smith', 'Mr. Jones'], correctAnswer: 1 },
      { id: 'q160-5', question: 'What were the first words?', options: ['"Hello"', '"Mr. Watson, come here..."', '"How are you?"', '"Goodbye"'], correctAnswer: 1 },
      { id: 'q160-6', question: 'Do we have smartphones today?', options: ['No', 'Yes', 'Maybe', 'Only in some countries'], correctAnswer: 1 },
      { id: 'q160-7', question: 'Has communication changed?', options: ['No', 'Yes, a lot', 'Only a little', 'Maybe'], correctAnswer: 1 },
      { id: 'q160-8', question: 'Was the first telephone mobile?', options: ['Yes', 'No', 'Maybe', 'It was wireless'], correctAnswer: 1 },
      { id: 'q160-9', question: 'Is the telephone important?', options: ['No', 'Yes', 'Maybe', 'Only for business'], correctAnswer: 1 },
      { id: 'q160-10', question: 'Can you use a telephone?', options: ['No', 'Yes', 'Maybe', 'Never'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-161',
    title: 'The Brave Little Tailor',
    titleKurdish: 'خەیاتێ بچویک یێ ئازا',
    content: 'A little tailor killed seven flies with one blow. He was so proud that he made a belt that said "Seven at one blow." He traveled the world and met a giant. The giant thought the tailor had killed seven men. Through his cleverness, the tailor outsmarted the giant and eventually married a princess. He proved that being smart is better than being strong.',
    contentKurdish: 'خەیاتەکێ بچویک حەفت مێش ب ئێک جەربە کوشتن. ئەو هندێ ب خۆ شانازی دکر کو قایشەک دروستکر کو ل سەر نڤیسابوو "حەفت ب ئێک جەربە." ئەو ل جیهانێ گەڕیا و گەهشتە زەبەلاحەکێ. زەبەلاحی هزر کر کو خەیاتی حەفت مروڤ کوشتینە. ب ژیرییا خۆ، خەیاتی زەبەلاح خاپاند و ل دوماهیکێ کچا پاشای ماره کر. وی سەلماند کو ژیری باشترە ژ هێزێ.',
    level: 'A2',
    questions: [
      { id: 'q161-1', question: 'How many flies did the tailor kill?', options: ['One', 'Seven', 'Ten', 'Five'], correctAnswer: 1 },
      { id: 'q161-2', question: 'What did his belt say?', options: ['"I am a tailor"', '"Seven at one blow"', '"I am strong"', '"Hello world"'], correctAnswer: 1 },
      { id: 'q161-3', question: 'Who did he meet on his travels?', options: ['A king', 'A giant', 'A dragon', 'A wolf'], correctAnswer: 1 },
      { id: 'q161-4', question: 'What did the giant think the tailor had killed?', options: ['Flies', 'Seven men', 'Animals', 'Nothing'], correctAnswer: 1 },
      { id: 'q161-5', question: 'Was the tailor stronger than the giant?', options: ['Yes', 'No, but he was smarter', 'Maybe', 'They were the same'], correctAnswer: 1 },
      { id: 'q161-6', question: 'Who did the tailor marry?', options: ['A giantess', 'A princess', 'A tailor', 'Nobody'], correctAnswer: 1 },
      { id: 'q161-7', question: 'What did the tailor prove?', options: ['Strength is everything', 'Smart is better than strong', 'Tailors are rich', 'Giants are nice'], correctAnswer: 1 },
      { id: 'q161-8', question: 'Did he travel the world?', options: ['No', 'Yes', 'Only his village', 'Maybe'], correctAnswer: 1 },
      { id: 'q161-9', question: 'Is a tailor someone who makes clothes?', options: ['No', 'Yes', 'Maybe', 'He makes shoes'], correctAnswer: 1 },
      { id: 'q161-10', question: 'Was the giant clever?', options: ['Yes', 'No', 'Maybe', 'He was a genius'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-162',
    title: 'The First Computer Programmer',
    titleKurdish: 'ئێکەم پرۆگرامەرێ کۆمپیوتەری',
    content: 'Ada Lovelace is considered the first computer programmer. She lived in the 19th century and worked with Charles Babbage on his Analytical Engine. She wrote the first algorithm intended to be carried out by a machine. Ada saw the potential for computers to do more than just math. Her work inspired future generations of scientists.',
    contentKurdish: 'ئادا لۆڤلێیس ب ئێکەم پرۆگرامەرێ کۆمپیوتەری دهێتە هەژمارتن. ئەو د سەدێ ١٩ێ دا دژیا و دگەل چارڵز بابیج کار دکر ل سەر ئامیرێ وی یێ شیکاری (Analytical Engine). وێ ئێکەم ئەلگۆریتم نڤیسی کو مەبەست ژێ ئەوە ژ لایێ ئامیرەکی ڤە بهێتە ئەنجام دان. ئادای دیت کو کۆمپیوتەر دشێن پتر ژ تەنێ هەژمارکرنێ بکەن. کارێ وێ بوو ئیلهام بو نەوەیێن پاشەرۆژێ یێن زانایان.',
    level: 'B1',
    questions: [
      { id: 'q162-1', question: 'Who was the first computer programmer?', options: ['Bill Gates', 'Ada Lovelace', 'Steve Jobs', 'Alan Turing'], correctAnswer: 1 },
      { id: 'q162-2', question: 'In what century did she live?', options: ['18th century', '19th century', '20th century', '21st century'], correctAnswer: 1 },
      { id: 'q162-3', question: 'Who did she work with?', options: ['Thomas Edison', 'Charles Babbage', 'Albert Einstein', 'Isaac Newton'], correctAnswer: 1 },
      { id: 'q162-4', question: 'What did she write?', options: ['A book', 'The first algorithm for a machine', 'A song', 'A poem'], correctAnswer: 1 },
      { id: 'q162-5', question: 'Did she think computers could do more than math?', options: ['No', 'Yes', 'Maybe', 'She didn\'t care'], correctAnswer: 1 },
      { id: 'q162-6', question: 'Did her work inspire others?', options: ['No', 'Yes', 'Only a few', 'Maybe'], correctAnswer: 1 },
      { id: 'q162-7', question: 'Was the Analytical Engine a type of computer?', options: ['No', 'Yes, an early design', 'Maybe', 'It was a car'], correctAnswer: 1 },
      { id: 'q162-8', question: 'Is programming important today?', options: ['No', 'Yes', 'Maybe', 'Only for games'], correctAnswer: 1 },
      { id: 'q162-9', question: 'Was Ada a woman?', options: ['No', 'Yes', 'Maybe', 'She was a robot'], correctAnswer: 1 },
      { id: 'q162-10', question: 'Is an algorithm a set of instructions?', options: ['No', 'Yes', 'Maybe', 'It is a type of food'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-163',
    title: 'The Great Fire of London',
    titleKurdish: 'ئاگری مەزن یێ لەندەنێ',
    content: 'In 1666, a huge fire broke out in London. It started in a bakery on Pudding Lane and spread quickly through the wooden houses. The fire lasted for four days and destroyed most of the city. After the fire, London was rebuilt with wider streets and brick houses to prevent another disaster. It was a turning point in the city\'s history.',
    contentKurdish: 'ل سالا ١٦٦٦، ئاگرەکێ مەزن ل لەندەنێ دروست بوو. ئەو ل نانپێژیەکێ ل سەر جادەیا پودینگ لەین دەسپێکر و ب خێرایی دناڤ خانیێن تەختەی دا بەلاڤ بوو. ئاگر چار روژان ڤەکێشا و زۆربەی باژێری وێران کر. پشتی ئاگری، لەندەن هاتە ئاڤاکرن ب جادەیێن فرەهتر و خانیێن کەرپۆچی دا رێگریێ ل کارەساتەکا دی بکەن. ئەو دەمەکێ گوهۆڕینێ بوو د دیرۆکا باژێری دا.',
    level: 'B1',
    questions: [
      { id: 'q163-1', question: 'In what year did the Great Fire of London happen?', options: ['1555', '1666', '1777', '1888'], correctAnswer: 1 },
      { id: 'q163-2', question: 'Where did the fire start?', options: ['In a school', 'In a bakery', 'In a park', 'In a church'], correctAnswer: 1 },
      { id: 'q163-3', question: 'Why did the fire spread quickly?', options: ['Because of rain', 'Because of wooden houses', 'Because of wind only', 'Maybe'], correctAnswer: 1 },
      { id: 'q163-4', question: 'How long did the fire last?', options: ['One day', 'Four days', 'One week', 'One month'], correctAnswer: 1 },
      { id: 'q163-5', question: 'Was the city rebuilt after the fire?', options: ['No', 'Yes', 'Maybe', 'Only a small part'], correctAnswer: 1 },
      { id: 'q163-6', question: 'What materials were used for new houses?', options: ['Wood', 'Brick', 'Straw', 'Paper'], correctAnswer: 1 },
      { id: 'q163-7', question: 'Were the new streets wider?', options: ['No', 'Yes', 'Maybe', 'They were narrower'], correctAnswer: 1 },
      { id: 'q163-8', question: 'Did the fire destroy most of the city?', options: ['No', 'Yes', 'Only a little', 'Maybe'], correctAnswer: 1 },
      { id: 'q163-9', question: 'Is London the capital of England?', options: ['No', 'Yes', 'Maybe', 'It is in France'], correctAnswer: 1 },
      { id: 'q163-10', question: 'Was the fire a disaster?', options: ['No', 'Yes', 'Maybe', 'It was a celebration'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-164',
    title: 'The Life of a Sea Turtle',
    titleKurdish: 'ژیانا کیسەلێ دەریایێ',
    content: 'Sea turtles spend most of their lives in the ocean. They are excellent swimmers and can travel thousands of miles. Female turtles come to the beach to lay their eggs in the sand. When the babies hatch, they crawl to the water. Sea turtles are endangered because of pollution and hunting. We must protect them to keep the oceans healthy.',
    contentKurdish: 'کیسەلێن دەریایێ زۆربەی ژیانا خۆ د دەریایێ دا دبۆرینن. ئەو مەلەڤانێن نایابن و دشێن ب هزاران میلان گەشتێ بکەن. کیسەلێن مێ دهێنە کەنارێن دەریایێ دا هێکێن خۆ دناڤ لمێ دا دانن. دەما بچویک ژ هێکێ دەردکەڤن، ئەو بەرەڤ ئاڤێ دخوشن. کیسەلێن دەریایێ د مەترسییا نەمانێ دانە ژبەر پیسبوونا ژینگەیێ و نێچیرێ. دڤێت ئەم وان بپارێزین دا دەریایان ب ساخلەمی بهێلین.',
    level: 'B1',
    questions: [
      { id: 'q164-1', question: 'Where do sea turtles spend most of their lives?', options: ['On land', 'In the ocean', 'In the sky', 'In a lake'], correctAnswer: 1 },
      { id: 'q164-2', question: 'Are they good swimmers?', options: ['No', 'Yes, excellent', 'Maybe', 'Only slow ones'], correctAnswer: 1 },
      { id: 'q164-3', question: 'Where do female turtles lay their eggs?', options: ['In the water', 'In the sand on the beach', 'In trees', 'In nests'], correctAnswer: 1 },
      { id: 'q164-4', question: 'What do baby turtles do when they hatch?', options: ['Sleep', 'Crawl to the water', 'Fly away', 'Eat the sand'], correctAnswer: 1 },
      { id: 'q164-5', question: 'Why are sea turtles endangered?', options: ['Because of cold', 'Because of pollution and hunting', 'Because they are old', 'Maybe'], correctAnswer: 1 },
      { id: 'q164-6', question: 'Should we protect sea turtles?', options: ['No', 'Yes', 'Maybe', 'Only big ones'], correctAnswer: 1 },
      { id: 'q164-7', question: 'Can they travel long distances?', options: ['No', 'Yes, thousands of miles', 'Only one mile', 'Maybe'], correctAnswer: 1 },
      { id: 'q164-8', question: 'Is a turtle a reptile?', options: ['No', 'Yes', 'Maybe', 'It is a fish'], correctAnswer: 1 },
      { id: 'q164-9', question: 'Do turtles have shells?', options: ['No', 'Yes', 'Maybe', 'Only some of them'], correctAnswer: 1 },
      { id: 'q164-10', question: 'Is the ocean important for them?', options: ['No', 'Yes', 'Maybe', 'Only in summer'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-165',
    title: 'The Invention of the Airplane',
    titleKurdish: 'داهێنانا فڕۆکێ',
    content: 'The Wright brothers, Orville and Wilbur, made the first successful flight in 1903. They built their own airplane and tested it in North Carolina. The flight lasted only 12 seconds, but it was a historic moment. This invention changed the way people travel and connect with each other. Today, airplanes can fly across the world in a few hours.',
    contentKurdish: 'برایێن ڕایت، ئۆرڤیل و ویلبۆر، ئێکەم گەشتا سەرکەفتی ئەنجام دا ل سالا ١٩٠٣. وان فڕۆکا خۆ دروستکر و ل باکورێ کارۆلاینا تاقی کر. گەشتێ تەنێ ١٢ چرکە کێشا، بەلێ ئەو دەمەکێ دیرۆکی بوو. ئەڤ داهێنانە شێوازێ گەشتکرنا خەلکی و پەیوەندیا وان دگەل ئێک گوهۆڕی. ئەڤرۆ، فڕۆکە دشێن د جەند دەمژمێرەکێن کێم دا ل هەمی جیهانێ بفرن.',
    level: 'B1',
    questions: [
      { id: 'q165-1', question: 'Who made the first successful flight?', options: ['The Smith brothers', 'The Wright brothers', 'The Ford brothers', 'The Miller brothers'], correctAnswer: 1 },
      { id: 'q165-2', question: 'In what year was the first flight?', options: ['1800', '1903', '1950', '2000'], correctAnswer: 1 },
      { id: 'q165-3', question: 'Where did they test their airplane?', options: ['New York', 'North Carolina', 'California', 'Texas'], correctAnswer: 1 },
      { id: 'q165-4', question: 'How long did the first flight last?', options: ['One hour', '12 seconds', '10 minutes', 'One day'], correctAnswer: 1 },
      { id: 'q165-5', question: 'Did the invention change travel?', options: ['No', 'Yes', 'Only a little', 'Maybe'], correctAnswer: 1 },
      { id: 'q165-6', question: 'Can airplanes fly across the world today?', options: ['No', 'Yes', 'Only in some countries', 'Maybe'], correctAnswer: 1 },
      { id: 'q165-7', question: 'Was it a historic moment?', options: ['No', 'Yes', 'Maybe', 'Only for the brothers'], correctAnswer: 1 },
      { id: 'q165-8', question: 'Did they build their own airplane?', options: ['No', 'Yes', 'Maybe', 'They bought it'], correctAnswer: 1 },
      { id: 'q165-9', question: 'Are there many types of airplanes today?', options: ['No', 'Yes', 'Maybe', 'Only one'], correctAnswer: 1 },
      { id: 'q165-10', question: 'Is air travel fast?', options: ['No', 'Yes', 'Maybe', 'It is very slow'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-166',
    title: 'The Great Pyramid of Giza',
    titleKurdish: 'ئەهراما مەزن یا جیزە',
    content: 'The Great Pyramid of Giza is one of the Seven Wonders of the Ancient World. It was built for the Pharaoh Khufu thousands of years ago. The pyramid is made of millions of large stone blocks. It is a masterpiece of engineering and is still standing today in Egypt. Millions of tourists visit it every year to see its greatness.',
    contentKurdish: 'ئەهراما مەزن یا جیزە ئێکە ژ حەفت سەیروسەمەرەیێن جیهانا کەڤن. ئەو بو فیرعەون خۆفۆ بەری ب هزاران سالان هاتبوو ئاڤاکرن. ئەهرام ژ ب ملیۆنان بەردێن مەزن هاتیە دروستکرن. ئەو کارەکێ نایاب یێ ئەندازیاریێ یە و هێشتا ل میسرێ یا مایى. ب ملیۆنان گەشتیار هەر سال سەرەدانا وێ دکەن دا مەزناتییا وێ ببینن.',
    level: 'B1',
    questions: [
      { id: 'q166-1', question: 'Where is the Great Pyramid located?', options: ['China', 'Egypt', 'Italy', 'Mexico'], correctAnswer: 1 },
      { id: 'q166-2', question: 'Who was it built for?', options: ['A king', 'Pharaoh Khufu', 'A queen', 'A soldier'], correctAnswer: 1 },
      { id: 'q166-3', question: 'Is it one of the Seven Wonders of the Ancient World?', options: ['No', 'Yes', 'Maybe', 'It is a new wonder'], correctAnswer: 1 },
      { id: 'q166-4', question: 'What is it made of?', options: ['Brick', 'Large stone blocks', 'Wood', 'Metal'], correctAnswer: 1 },
      { id: 'q166-5', question: 'Is it still standing today?', options: ['No', 'Yes', 'Only a part of it', 'Maybe'], correctAnswer: 1 },
      { id: 'q166-6', question: 'How many people visit it every year?', options: ['Hundreds', 'Millions', 'Thousands', 'Nobody'], correctAnswer: 1 },
      { id: 'q166-7', question: 'Is it a masterpiece of engineering?', options: ['No', 'Yes', 'Maybe', 'It is a simple building'], correctAnswer: 1 },
      { id: 'q166-8', question: 'When was it built?', options: ['Yesterday', 'Thousands of years ago', 'In 1900', 'In 2000'], correctAnswer: 1 },
      { id: 'q166-9', question: 'Is it big?', options: ['No', 'Yes, it is great/large', 'Maybe', 'It is tiny'], correctAnswer: 1 },
      { id: 'q166-10', question: 'Are there other pyramids in Egypt?', options: ['No', 'Yes', 'Maybe', 'Only one'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-167',
    title: 'The Invention of the Internet',
    titleKurdish: 'داهێنانا ئینتەرنێتێ',
    content: 'The internet was developed in the late 20th century. It allows computers all over the world to connect and share information. The internet has changed the way we communicate, learn, and do business. Today, billions of people use the internet every day. It is an essential tool for modern life and continues to grow.',
    contentKurdish: 'ئینتەرنێت ل دوماهیکا سەدێ ٢٠ێ هاتە گەشەپێدان. ئەو رێ ددەتە کۆمپیوتەران ل هەمی جیهانێ کو پێکڤە گرێدای بن و پێزانینان بەش بکەن. ئینتەرنێتێ شێوازێ پەیوەندیێن مە، فێربوونا مە، و کارێ مە گوهۆڕی. ئەڤرۆ، ب ملیاران کەس هەر روژ ئینتەرنێتێ بکار دئینان. ئەو ئامیرەکێ سەرەکی یە بو ژیانا مۆدێرن و بەردەوام یێ گەشە دکەت.',
    level: 'B1',
    questions: [
      { id: 'q167-1', question: 'When was the internet developed?', options: ['Late 19th century', 'Late 20th century', 'Early 21st century', '1800'], correctAnswer: 1 },
      { id: 'q167-2', question: 'What does the internet allow computers to do?', options: ['Sleep', 'Connect and share information', 'Nothing', 'Break'], correctAnswer: 1 },
      { id: 'q167-3', question: 'Has the internet changed communication?', options: ['No', 'Yes', 'Only a little', 'Maybe'], correctAnswer: 1 },
      { id: 'q167-4', question: 'How many people use the internet today?', options: ['Millions', 'Billions', 'Thousands', 'Nobody'], correctAnswer: 1 },
      { id: 'q167-5', question: 'Is the internet an essential tool?', options: ['No', 'Yes', 'Only for some', 'Maybe'], correctAnswer: 1 },
      { id: 'q167-6', question: 'Does the internet continue to grow?', options: ['No', 'Yes', 'It stopped', 'Maybe'], correctAnswer: 1 },
      { id: 'q167-7', question: 'Can we learn using the internet?', options: ['No', 'Yes', 'Only in the future', 'Maybe'], correctAnswer: 1 },
      { id: 'q167-8', question: 'Is the internet only for business?', options: ['Yes', 'No, for many things', 'Maybe', 'Only for games'], correctAnswer: 1 },
      { id: 'q167-9', question: 'Is the internet a modern invention?', options: ['No', 'Yes', 'It is ancient', 'Maybe'], correctAnswer: 1 },
      { id: 'q167-10', question: 'Do you use the internet?', options: ['No', 'Yes', 'Maybe', 'Never'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-168',
    title: 'The Life of a Honeybee',
    titleKurdish: 'ژیانا مێشەنگێ',
    content: 'Honeybees are very busy and important insects. They live in hives and work together to make honey. Bees fly from flower to flower to collect nectar. While doing this, they also help pollinate plants, which is vital for growing food. A hive has one queen bee and thousands of worker bees. We should protect bees because they help our environment.',
    contentKurdish: 'مێشەنگ مێشێن گەلەک مژوول و گرنگن. ئەو دناڤ پوران دا دژین و پێکڤە کار دکەن دا هنگڤینی دروست کەن. مێش ژ گولەکێ بو گولەکا دی دفرن دا شیلانێ کۆم بکەن. دەما ڤێ کارى دکەن، ئەو هەروەسا هاریکاریا پیتاندنا رووەکان دکەن، کو ئەڤە گەلەک یا گرنگە بو شینبوونا خوارنێ. هەر پورەکێ مێشەکا شاهژن و ب هزاران مێشێن کارکەر یێن هەین. دڤێت ئەم مێشان بپارێزین چونکی ئەو هاریکاریا ژینگەیێ مە دکەن.',
    level: 'A2',
    questions: [
      { id: 'q168-1', question: 'Where do honeybees live?', options: ['In nests', 'In hives', 'In holes', 'In trees'], correctAnswer: 1 },
      { id: 'q168-2', question: 'What do they make?', options: ['Milk', 'Honey', 'Sugar', 'Bread'], correctAnswer: 1 },
      { id: 'q168-3', question: 'What do they collect from flowers?', options: ['Water', 'Nectar', 'Leaves', 'Seeds'], correctAnswer: 1 },
      { id: 'q168-4', question: 'What important job do they do for plants?', options: ['Eat them', 'Pollinate them', 'Cut them', 'Water them'], correctAnswer: 1 },
      { id: 'q168-5', question: 'How many queen bees are in a hive?', options: ['Ten', 'One', 'Hundreds', 'None'], correctAnswer: 1 },
      { id: 'q168-6', question: 'What are the other bees called?', options: ['King bees', 'Worker bees', 'Soldier bees', 'Baby bees'], correctAnswer: 1 },
      { id: 'q168-7', question: 'Should we protect bees?', options: ['No', 'Yes', 'Maybe', 'Only some of them'], correctAnswer: 1 },
      { id: 'q168-8', question: 'Are bees important for growing food?', options: ['No', 'Yes', 'Maybe', 'Only for flowers'], correctAnswer: 1 },
      { id: 'q168-9', question: 'Are bees busy?', options: ['No', 'Yes', 'They sleep all day', 'Maybe'], correctAnswer: 1 },
      { id: 'q168-10', question: 'Is honey sweet?', options: ['No', 'Yes', 'It is sour', 'It is salty'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-169',
    title: 'The Discovery of Fire',
    titleKurdish: 'دیتنا ئاگری',
    content: 'Long ago, early humans discovered how to make fire. Fire was very important for survival. It provided warmth during cold nights and kept dangerous animals away. Humans also learned that cooked food tasted better and was easier to digest. Fire changed the way humans lived and helped them develop new tools.',
    contentKurdish: 'بەری دەمەکێ درێژ، مروڤێن دەسپێکێ فێربوون کا دێ چەوا ئاگری دروست کەن. ئاگر گەلەک یێ گرنگ بوو بو مانێ. وی گەرمی ددا د شەڤێن سار دا و گیانەوەرێن مەترسیدار دویر دئێخستن. مروڤان هەروەسا زانی کو خوارنا چێکری خوشترە و ب ساناهیتر دهێتە هەرسکرن. ئاگری شێوازێ ژیانا مروڤان گوهۆڕی و هاریکاریا وان کر دا ئامیرێن نوی دروست کەن.',
    level: 'B1',
    questions: [
      { id: 'q169-1', question: 'Who discovered how to make fire?', options: ['Modern humans', 'Early humans', 'Scientists', 'Aliens'], correctAnswer: 1 },
      { id: 'q169-2', question: 'Was fire important for survival?', options: ['No', 'Yes', 'Only a little', 'Maybe'], correctAnswer: 1 },
      { id: 'q169-3', question: 'What did fire provide during cold nights?', options: ['Light only', 'Warmth', 'Food', 'Water'], correctAnswer: 1 },
      { id: 'q169-4', question: 'Did fire keep animals away?', options: ['No', 'Yes, dangerous animals', 'Only birds', 'Maybe'], correctAnswer: 1 },
      { id: 'q169-5', question: 'What did humans learn about cooked food?', options: ['It was bad', 'It tasted better and was easier to digest', 'It was poisonous', 'Nothing'], correctAnswer: 1 },
      { id: 'q169-6', question: 'Did fire change the way humans lived?', options: ['No', 'Yes', 'Only a little', 'Maybe'], correctAnswer: 1 },
      { id: 'q169-7', question: 'Did fire help develop new tools?', options: ['No', 'Yes', 'Maybe', 'Only in the future'], correctAnswer: 1 },
      { id: 'q169-8', question: 'Is fire hot?', options: ['No', 'Yes', 'It is cold', 'Maybe'], correctAnswer: 1 },
      { id: 'q169-9', question: 'When was fire discovered?', options: ['Yesterday', 'Long ago', 'In 1900', 'In 2000'], correctAnswer: 1 },
      { id: 'q169-10', question: 'Can fire be dangerous?', options: ['No', 'Yes', 'Only in summer', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-170',
    title: 'The Invention of the Light Bulb',
    titleKurdish: 'داهێنانا گڵۆپێ',
    content: 'Thomas Edison invented the first practical light bulb in 1879. Before the light bulb, people used candles and oil lamps to see at night. Edison tried thousands of different materials before he found the right one. The light bulb changed the way we live and work, allowing us to be active after the sun goes down.',
    contentKurdish: 'تۆماس ئێدیسۆن ئێکەم گڵۆپا پراکتیکی داهێنا ل سالا ١٨٧٩. بەری گڵۆپێ، خەلکی مۆم و چرایێن نەفتێ بکار دئینان دا ب شەڤ ببینن. ئێدیسۆنی ب هزاران کەرەستەیێن جودا تاقیکردن هەتا وی یێ درست دیتى. گڵۆپێ شێوازێ ژیانا مە و کارێ مە گوهۆڕی، و رێ دا مە کو ئەم پشتی روژ ئاڤا دچیت ژی یێن چالاک بین.',
    level: 'B1',
    questions: [
      { id: 'q170-1', question: 'Who invented the light bulb?', options: ['Alexander Graham Bell', 'Thomas Edison', 'Isaac Newton', 'Albert Einstein'], correctAnswer: 1 },
      { id: 'q170-2', question: 'In what year was the light bulb invented?', options: ['1800', '1879', '1900', '1950'], correctAnswer: 1 },
      { id: 'q170-3', question: 'What did people use before the light bulb?', options: ['Flashlights', 'Candles and oil lamps', 'Nothing', 'Electricity'], correctAnswer: 1 },
      { id: 'q170-4', question: 'How many materials did Edison try?', options: ['Ten', 'Thousands', 'One', 'One hundred'], correctAnswer: 1 },
      { id: 'q170-5', question: 'Did the light bulb change the way we live?', options: ['No', 'Yes', 'Only a little', 'Maybe'], correctAnswer: 1 },
      { id: 'q170-6', question: 'Does the light bulb allow us to be active at night?', options: ['No', 'Yes', 'Only in winter', 'Maybe'], correctAnswer: 1 },
      { id: 'q170-7', question: 'Is Thomas Edison famous?', options: ['No', 'Yes', 'Only in America', 'Maybe'], correctAnswer: 1 },
      { id: 'q170-8', question: 'Is the light bulb important today?', options: ['No', 'Yes', 'Only in cities', 'Maybe'], correctAnswer: 1 },
      { id: 'q170-9', question: 'Was it easy to invent the light bulb?', options: ['Yes', 'No, it took many tries', 'Maybe', 'It was a mistake'], correctAnswer: 1 },
      { id: 'q170-10', question: 'What does a light bulb use to work?', options: ['Water', 'Electricity', 'Gas', 'Oil'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-171',
    title: 'The First Computer',
    titleKurdish: 'کۆمپیوتەرێ ئێکێ',
    content: 'The first computers were very large and filled entire rooms. They were used for complex calculations and were very expensive. Today, we have small computers that can fit in our pockets, like smartphones. Computers are used for almost everything, from education to entertainment. They have become an essential part of our daily lives.',
    contentKurdish: 'کۆمپیوتەرێن ئێکێ گەلەک یێن مەزن بوون و ژوورێن تژی دگرتن. ئەو بو هەژمارکرنێن ئالۆز دهاتنە بکارئینان و گەلەک یێن گران بوون. ئەڤرۆ، مە کۆمپیوتەرێن بچویک یێن هەین کو د جێبێن مە دا جێدبن، وەک سمارتفۆنان. کۆمپیوتەر بو نێزیک هەمی تشتان دهێنە بکارئینان، ژ پەروەردێ هەتا کەیفخۆشیێ. ئەو بوونە بەشەکێ سەرەکی یێ ژیانا مە یا روژانە.',
    level: 'B1',
    questions: [
      { id: 'q171-1', question: 'How big were the first computers?', options: ['Small', 'Filled entire rooms', 'Like a book', 'Like a phone'], correctAnswer: 1 },
      { id: 'q171-2', question: 'What were they used for?', options: ['Playing games', 'Complex calculations', 'Watching movies', 'Cooking'], correctAnswer: 1 },
      { id: 'q171-3', question: 'Were they expensive?', options: ['No', 'Yes', 'They were free', 'Maybe'], correctAnswer: 1 },
      { id: 'q171-4', question: 'What is an example of a small computer today?', options: ['A TV', 'A smartphone', 'A radio', 'A car'], correctAnswer: 1 },
      { id: 'q171-5', question: 'Are computers used for education?', options: ['No', 'Yes', 'Only in the future', 'Maybe'], correctAnswer: 1 },
      { id: 'q171-6', question: 'Are they part of our daily lives?', options: ['No', 'Yes, essential part', 'Only for some people', 'Maybe'], correctAnswer: 1 },
      { id: 'q171-7', question: 'Can computers fit in pockets today?', options: ['No', 'Yes', 'Only big ones', 'Maybe'], correctAnswer: 1 },
      { id: 'q171-8', question: 'What is entertainment?', options: ['Studying', 'Fun activities like movies/games', 'Working', 'Sleeping'], correctAnswer: 1 },
      { id: 'q171-9', question: 'Was the first computer portable?', options: ['Yes', 'No', 'Maybe', 'It was wireless'], correctAnswer: 1 },
      { id: 'q171-10', question: 'Are computers important?', options: ['No', 'Yes', 'Only for scientists', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-172',
    title: 'The Solar System',
    titleKurdish: 'کۆمەلا رۆژێ',
    content: 'Our solar system consists of the sun and eight planets. The sun is a giant star that provides light and heat. Earth is the third planet from the sun and is the only planet known to have life. Other planets like Mars and Jupiter are very different from Earth. Scientists are still exploring the mysteries of our solar system.',
    contentKurdish: 'کۆمەلا مە یا رۆژێ پێکدهێت ژ رۆژێ و هەشت هەسارەیان. رۆژ ئەستێرەکا زەبەلاحە کو رووناهی و گەرمیێ ددەت. ئەرد هەسارەیا سێیێ یە ژ رۆژێ و تاکە هەسارەیە کو ژیان ل سەر دهێتە زانین. هەسارەیێن دی وەک مارس و جۆپیتەر گەلەک ژ ئەردی جودانە. زانای هێشتا ل سەر نهێنیێن کۆمەلا مە یا رۆژێ دکۆلین.',
    level: 'B1',
    questions: [
      { id: 'q172-1', question: 'How many planets are in our solar system?', options: ['Seven', 'Eight', 'Nine', 'Ten'], correctAnswer: 1 },
      { id: 'q172-2', question: 'What is the sun?', options: ['A planet', 'A giant star', 'A moon', 'A cloud'], correctAnswer: 1 },
      { id: 'q172-3', question: 'What does the sun provide?', options: ['Water', 'Light and heat', 'Food', 'Air'], correctAnswer: 1 },
      { id: 'q172-4', question: 'Which planet is the third from the sun?', options: ['Mars', 'Earth', 'Venus', 'Jupiter'], correctAnswer: 1 },
      { id: 'q172-5', question: 'Is Earth the only planet known to have life?', options: ['No', 'Yes', 'Maybe', 'Mars has life too'], correctAnswer: 1 },
      { id: 'q172-6', question: 'Are Mars and Jupiter like Earth?', options: ['Yes', 'No, they are very different', 'Maybe', 'They are exactly the same'], correctAnswer: 1 },
      { id: 'q172-7', question: 'Are scientists still exploring the solar system?', options: ['No', 'Yes', 'They finished', 'Maybe'], correctAnswer: 1 },
      { id: 'q172-8', question: 'Is the sun small?', options: ['Yes', 'No, it is giant', 'Maybe', 'It is tiny'], correctAnswer: 1 },
      { id: 'q172-9', question: 'Is the moon a planet?', options: ['Yes', 'No', 'Maybe', 'It is a star'], correctAnswer: 1 },
      { id: 'q172-10', question: 'Is the solar system big?', options: ['No', 'Yes', 'Maybe', 'It is small'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-173',
    title: 'The Great Pyramid of Giza',
    titleKurdish: 'ئەهراما مەزن یا جیزە',
    content: 'The Great Pyramid of Giza is the oldest of the Seven Wonders of the Ancient World. It was built as a tomb for the Pharaoh Khufu thousands of years ago. The pyramid is made of millions of large stone blocks. It is a masterpiece of engineering and is still standing today in Egypt. Millions of people visit it every year.',
    contentKurdish: 'ئەهراما مەزن یا جیزە کەڤنترینە ژ حەفت سەیروسەمەرەیێن جیهانا کەڤن. ئەو وەک گۆڕەک بو فیرعەون خۆفۆ بەری ب هزاران سالان هاتبوو ئاڤاکرن. ئەهرام ژ ب ملیۆنان بەردێن مەزن هاتیە دروستکرن. ئەو کارەکێ نایاب یێ ئەندازیاریێ یە و هێشتا ل میسرێ یا مایى. ب ملیۆنان کەس هەر سال سەرەدانا وێ دکەن.',
    level: 'B1',
    questions: [
      { id: 'q173-1', question: 'Where is the Great Pyramid located?', options: ['China', 'Egypt', 'Italy', 'Mexico'], correctAnswer: 1 },
      { id: 'q173-2', question: 'Why was it built?', options: ['As a palace', 'As a tomb for Pharaoh Khufu', 'As a temple', 'As a library'], correctAnswer: 1 },
      { id: 'q173-3', question: 'Is it one of the Seven Wonders of the Ancient World?', options: ['No', 'Yes', 'Maybe', 'It is a new wonder'], correctAnswer: 1 },
      { id: 'q173-4', question: 'What is it made of?', options: ['Brick', 'Large stone blocks', 'Wood', 'Metal'], correctAnswer: 1 },
      { id: 'q173-5', question: 'Is it still standing today?', options: ['No', 'Yes', 'Only a part of it', 'Maybe'], correctAnswer: 1 },
      { id: 'q173-6', question: 'How many people visit it every year?', options: ['Hundreds', 'Millions', 'Thousands', 'Nobody'], correctAnswer: 1 },
      { id: 'q173-7', question: 'Is it a masterpiece of engineering?', options: ['No', 'Yes', 'Maybe', 'It is a simple building'], correctAnswer: 1 },
      { id: 'q173-8', question: 'When was it built?', options: ['Yesterday', 'Thousands of years ago', 'In 1900', 'In 2000'], correctAnswer: 1 },
      { id: 'q173-9', question: 'Was Khufu a king?', options: ['Yes, a Pharaoh', 'No', 'Maybe', 'He was a doctor'], correctAnswer: 0 },
      { id: 'q173-10', question: 'Is the pyramid small?', options: ['Yes', 'No, it is great/large', 'Maybe', 'It is tiny'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-174',
    title: 'The Invention of the Internet',
    titleKurdish: 'داهێنانا ئینتەرنێتێ',
    content: 'The internet was developed in the late 20th century. It allows computers all over the world to connect and share information. The internet has changed the way we communicate, learn, and do business. Today, billions of people use the internet every day. It is an essential tool for modern life and continues to evolve.',
    contentKurdish: 'ئینتەرنێت ل دوماهیکا سەدێ ٢٠ێ هاتە گەشەپێدان. ئەو رێ ددەتە کۆمپیوتەران ل هەمی جیهانێ کو پێکڤە گرێدای بن و پێزانینان بەش بکەن. ئینتەرنێتێ شێوازێ پەیوەندیێن مە، فێربوونا مە، و کارێ مە گوهۆڕی. ئەڤرۆ، ب ملیاران کەس هەر روژ ئینتەرنێتێ بکار دئینان. ئەو ئامیرەکێ سەرەکی یە بو ژیانا مۆدێرن و بەردەوام یێ گەشە دکەت.',
    level: 'B1',
    questions: [
      { id: 'q174-1', question: 'When was the internet developed?', options: ['Late 19th century', 'Late 20th century', 'Early 21st century', '1800'], correctAnswer: 1 },
      { id: 'q174-2', question: 'What does the internet allow computers to do?', options: ['Sleep', 'Connect and share information', 'Nothing', 'Break'], correctAnswer: 1 },
      { id: 'q174-3', question: 'Has the internet changed communication?', options: ['No', 'Yes', 'Only a little', 'Maybe'], correctAnswer: 1 },
      { id: 'q174-4', question: 'How many people use the internet today?', options: ['Millions', 'Billions', 'Thousands', 'Nobody'], correctAnswer: 1 },
      { id: 'q174-5', question: 'Is the internet an essential tool?', options: ['No', 'Yes', 'Only for some', 'Maybe'], correctAnswer: 1 },
      { id: 'q174-6', question: 'Does the internet continue to evolve?', options: ['No', 'Yes', 'It stopped', 'Maybe'], correctAnswer: 1 },
      { id: 'q174-7', question: 'Can we learn using the internet?', options: ['No', 'Yes', 'Only in the future', 'Maybe'], correctAnswer: 1 },
      { id: 'q174-8', question: 'Is the internet only for business?', options: ['Yes', 'No, for many things', 'Maybe', 'Only for games'], correctAnswer: 1 },
      { id: 'q174-9', question: 'Is the internet a modern invention?', options: ['No', 'Yes', 'It is ancient', 'Maybe'], correctAnswer: 1 },
      { id: 'q174-10', question: 'Do you use the internet?', options: ['No', 'Yes', 'Maybe', 'Never'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-175',
    title: 'The Future of Technology',
    titleKurdish: 'پاشەرۆژا تەکنەلۆژیایێ',
    content: 'Technology is constantly changing and improving. In the future, we might see self-driving cars and advanced artificial intelligence. People might even travel to other planets like Mars. Technology has the potential to solve many of the world\'s problems. It is an exciting time to be alive and see what the future holds.',
    contentKurdish: 'تەکنەلۆژیا بەردەوام یا دهێتە گوهۆڕین و باشترکرن. د پاشەرۆژێ دا، رەنگە ئەم ترومبێلێن بێ شوفێر و ژیرییا دەستکرد یا پێشکەفتی ببینین. رەنگە کەس تەنانەت گەشتێ بو هەسارەیێن دی بکەن وەک مارس. تەکنەلۆژیا دشێت گەلەک ژ کێشەیێن جیهانێ چارەسەر بکەت. ئەڤە دەمەکێ ب پەرۆشە مروڤ تێدا بژیت و ببینیت کا پاشەرۆژ دێ چی دگەل خۆ ئینیت.',
    level: 'B1',
    questions: [
      { id: 'q175-1', question: 'Is technology constantly changing?', options: ['No', 'Yes', 'Only a little', 'Maybe'], correctAnswer: 1 },
      { id: 'q175-2', question: 'What might we see in the future?', options: ['Only old cars', 'Self-driving cars and advanced AI', 'Nothing new', 'Only radios'], correctAnswer: 1 },
      { id: 'q175-3', question: 'Where might people travel to in the future?', options: ['Only to the moon', 'To Mars', 'Only to the beach', 'Nowhere'], correctAnswer: 1 },
      { id: 'q175-4', question: 'Will technology continue to change our lives?', options: ['No', 'Yes', 'Only in the city', 'Maybe'], correctAnswer: 1 },
      { id: 'q175-5', question: 'Is it an exciting time to be alive?', options: ['No', 'Yes', 'It is boring', 'Maybe'], correctAnswer: 1 },
      { id: 'q175-6', question: 'Are the possibilities of technology endless?', options: ['No', 'Yes', 'They are limited', 'Maybe'], correctAnswer: 1 },
      { id: 'q175-7', question: 'Is artificial intelligence (AI) a type of technology?', options: ['No', 'Yes', 'It is a type of food', 'Maybe'], correctAnswer: 1 },
      { id: 'q175-8', question: 'Is Mars a planet?', options: ['No', 'Yes', 'It is a star', 'Maybe'], correctAnswer: 1 },
      { id: 'q175-9', question: 'Does technology shape the world?', options: ['No', 'Yes', 'Only in movies', 'Maybe'], correctAnswer: 1 },
      { id: 'q175-10', question: 'Is "tomorrow" the future?', options: ['No', 'Yes', 'It is the past', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-176',
    title: 'The Brave Fireman',
    titleKurdish: 'ئاگرکوژێنێ ئازا',
    content: 'Tom is a brave fireman. He works at the fire station. When the alarm rings, he puts on his heavy suit and helmet. He drives the big red fire truck very fast. He uses a long hose to put out fires. Tom saves people and animals from burning buildings. Everyone in the city knows Tom is a hero.',
    contentKurdish: 'تۆم ئاگرکوژێنەکێ ئازایە. ئەو ل بنگەهێ ئاگرکوژێنێ کار دکەت. دەما زەنگ لێ ددەت، ئەو جلیێ خۆ یێ گران و کڵاوێ خۆ دپۆشیت. ئەو ترومبێلا سور یا مەزن یا ئاگرکوژێنێ ب خێرایی دهاژۆت. ئەو سۆندەکا درێژ بکار دئینیت دا ئاگری ڤەمرینیت. تۆم کەسان و گیانەوەران ژ ئاڤاهیێن دسوژن رزگار دکەت. هەمی کەس ل باژێری دزانن تۆم قارەمانە.',
    level: 'A2',
    questions: [
      { id: 'q176-1', question: 'What is Tom\'s job?', options: ['Doctor', 'Fireman', 'Teacher', 'Police officer'], correctAnswer: 1 },
      { id: 'q176-2', question: 'Where does he work?', options: ['At a school', 'At the fire station', 'At a hospital', 'In a shop'], correctAnswer: 1 },
      { id: 'q176-3', question: 'What happens when the alarm rings?', options: ['Tom goes to sleep', 'Tom puts on his suit and helmet', 'Tom eats lunch', 'Tom goes home'], correctAnswer: 1 },
      { id: 'q176-4', question: 'What color is the fire truck?', options: ['Blue', 'Red', 'Green', 'Yellow'], correctAnswer: 1 },
      { id: 'q176-5', question: 'What does Tom use to put out fires?', options: ['A bucket', 'A long hose', 'A fan', 'A shovel'], correctAnswer: 1 },
      { id: 'q176-6', question: 'Who does Tom save?', options: ['Only people', 'People and animals', 'Only cats', 'Nobody'], correctAnswer: 1 },
      { id: 'q176-7', question: 'Is Tom a hero?', options: ['No', 'Yes', 'He is a villain', 'Maybe'], correctAnswer: 1 },
      { id: 'q176-8', question: 'How does he drive the fire truck?', options: ['Slowly', 'Very fast', 'Carefully only', 'Maybe'], correctAnswer: 1 },
      { id: 'q176-9', question: 'What kind of suit does he wear?', options: ['Light suit', 'Heavy suit', 'No suit', 'Swimsuit'], correctAnswer: 1 },
      { id: 'q176-10', question: 'Does everyone know Tom?', options: ['No', 'Yes', 'Only his family', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-177',
    title: 'The Clever Crow',
    titleKurdish: 'قەلەشکێ ژیر',
    content: 'A thirsty crow found a pitcher with a little water at the bottom. He could not reach the water with his beak. He saw some small stones on the ground. He picked them up one by one and dropped them into the pitcher. The water level rose until he could drink it. The crow was very clever and saved his life.',
    contentKurdish: 'قەلەشکەکێ تێنی مەسینەک دیت کو هندەک ئاڤ ل بنی هەبوو. وی نەدشیا ب دەڤێ خۆ بگەهیتە ئاڤێ. وی هندەک بەردێن بچویک ل سەر ئەردی دیتن. وی ئێک ئێکە هەلگرتن و هاڤێتنە دناڤ مەسینێ دا. ئاستێ ئاڤێ بلند بوو هەتا وی دشیا ڤەخۆت. قەلەشک گەلەک یێ ژیر بوو و ژیانا خۆ پاراست.',
    level: 'A2',
    questions: [
      { id: 'q177-1', question: 'How did the crow feel?', options: ['Hungry', 'Thirsty', 'Tired', 'Happy'], correctAnswer: 1 },
      { id: 'q177-2', question: 'What did the crow find?', options: ['A glass', 'A pitcher', 'A bowl', 'A bottle'], correctAnswer: 1 },
      { id: 'q177-3', question: 'Could he reach the water at first?', options: ['Yes', 'No', 'Maybe', 'He didn\'t try'], correctAnswer: 1 },
      { id: 'q177-4', question: 'What did he see on the ground?', options: ['Food', 'Small stones', 'Water', 'Leaves'], correctAnswer: 1 },
      { id: 'q177-5', question: 'How did he pick up the stones?', options: ['With his feet', 'With his beak', 'With his wings', 'He didn\'t'], correctAnswer: 1 },
      { id: 'q177-6', question: 'Where did he drop the stones?', options: ['On the ground', 'Into the pitcher', 'In the river', 'In his nest'], correctAnswer: 1 },
      { id: 'q177-7', question: 'What happened to the water level?', options: ['It went down', 'It rose', 'It stayed the same', 'It disappeared'], correctAnswer: 1 },
      { id: 'q177-8', question: 'Could the crow drink the water at the end?', options: ['No', 'Yes', 'He was still thirsty', 'Maybe'], correctAnswer: 1 },
      { id: 'q177-9', question: 'Was the crow clever?', options: ['No', 'Yes', 'He was lucky', 'Maybe'], correctAnswer: 1 },
      { id: 'q177-10', question: 'What is the moral of the story?', options: ['Never give up', 'Stones are useful', 'Crows are black', 'Water is good'], correctAnswer: 0 }
    ]
  },
  {
    id: 'story-178',
    title: 'The First Airplane',
    titleKurdish: 'فڕۆکا ئێکێ',
    content: 'The Wright brothers, Orville and Wilbur, wanted to fly like birds. They built many gliders and finally a powered airplane. In 1903, they made the first successful flight in North Carolina. The flight lasted only 12 seconds, but it changed the world forever. Today, millions of people travel by airplane every day.',
    contentKurdish: 'برایێن ڕایت، ئۆرڤیل و ویلبۆر، دڤیا وەک چویکان بفرن. وان گەلەک فڕۆکێن بێ مۆتۆر دروستکرن و ل دوماهیکێ فڕۆکەکا ب مۆتۆر. ل سالا ١٩٠٣، وان ئێکەم گەشتا سەرکەفتی ل باکورێ کارۆلاینا ئەنجام دا. گەشتێ تەنێ ١٢ چرکە کێشا، بەلێ وێ جیهان بو هەتا هەتا گوهۆڕی. ئەڤرۆ، ب ملیۆنان کەس هەر روژ ب فڕۆکێ گەشتێ دکەن.',
    level: 'B1',
    questions: [
      { id: 'q178-1', question: 'Who wanted to fly like birds?', options: ['The Smith brothers', 'The Wright brothers', 'The Ford brothers', 'The Miller brothers'], correctAnswer: 1 },
      { id: 'q178-2', question: 'What did they build first?', options: ['Cars', 'Gliders', 'Boats', 'Trains'], correctAnswer: 1 },
      { id: 'q178-3', question: 'In what year was the first successful flight?', options: ['1800', '1903', '1950', '2000'], correctAnswer: 1 },
      { id: 'q178-4', question: 'Where did the flight take place?', options: ['New York', 'North Carolina', 'California', 'Texas'], correctAnswer: 1 },
      { id: 'q178-5', question: 'How long did the first flight last?', options: ['One hour', '12 seconds', '10 minutes', 'One day'], correctAnswer: 1 },
      { id: 'q178-6', question: 'Did the flight change the world?', options: ['No', 'Yes, forever', 'Only a little', 'Maybe'], correctAnswer: 1 },
      { id: 'q178-7', question: 'How many people travel by airplane today?', options: ['Hundreds', 'Millions', 'Thousands', 'Nobody'], correctAnswer: 1 },
      { id: 'q178-8', question: 'What were the brothers\' names?', options: ['John and Paul', 'Orville and Wilbur', 'Tom and Jerry', 'Jack and Jill'], correctAnswer: 1 },
      { id: 'q178-9', question: 'Was the first airplane powered?', options: ['No', 'Yes', 'It used sails', 'Maybe'], correctAnswer: 1 },
      { id: 'q178-10', question: 'Is air travel common today?', options: ['No', 'Yes', 'Only for rich people', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-179',
    title: 'The Great Wall of China',
    titleKurdish: 'دیوارێ مەزن یێ چینێ',
    content: 'The Great Wall of China is one of the most famous structures in the world. It was built thousands of years ago to protect China from invaders. The wall is thousands of miles long and is made of stone, brick, and wood. It is so big that some people say it can be seen from space. Millions of tourists visit the wall every year.',
    contentKurdish: 'دیوارێ مەزن یێ چینێ ئێکە ژ ناڤدارترین ئاڤاهیێن جیهانێ. ئەو بەری ب هزاران سالان هاتبوو ئاڤاکرن دا چینێ ژ هێرشکەران بپارێزیت. دیوار ب هزاران میلان یێ درێژە و ژ بەرد، کەرپۆچ، و تەختەی هاتیە دروستکرن. ئەو هندێ مەزنە کو هندەک کەس دبێژن دشێت ژ فەزایێ بهێتە دیتن. ب ملیۆنان گەشتیار هەر سال سەرەدانا دیوارى دکەن.',
    level: 'B1',
    questions: [
      { id: 'q179-1', question: 'Where is the Great Wall located?', options: ['Japan', 'China', 'India', 'USA'], correctAnswer: 1 },
      { id: 'q179-2', question: 'Why was the wall built?', options: ['To keep animals in', 'To protect China from invaders', 'For decoration', 'To help people walk'], correctAnswer: 1 },
      { id: 'q179-3', question: 'When was it built?', options: ['Yesterday', 'Thousands of years ago', 'In 1900', 'In 2000'], correctAnswer: 1 },
      { id: 'q179-4', question: 'What materials were used to build the wall?', options: ['Only plastic', 'Stone, brick, and wood', 'Only glass', 'Only metal'], correctAnswer: 1 },
      { id: 'q179-5', question: 'How long is the wall?', options: ['One mile', 'Thousands of miles', 'Ten miles', 'One hundred miles'], correctAnswer: 1 },
      { id: 'q179-6', question: 'Can it be seen from space according to some people?', options: ['No', 'Yes', 'Only at night', 'Maybe'], correctAnswer: 1 },
      { id: 'q179-7', question: 'How many tourists visit the wall every year?', options: ['Hundreds', 'Millions', 'Thousands', 'Nobody'], correctAnswer: 1 },
      { id: 'q179-8', question: 'Is the wall famous?', options: ['No', 'Yes', 'Only in China', 'Maybe'], correctAnswer: 1 },
      { id: 'q179-9', question: 'Is the wall made of only one material?', options: ['Yes', 'No', 'Maybe', 'It is made of gold'], correctAnswer: 1 },
      { id: 'q179-10', question: 'Is the wall a new structure?', options: ['Yes', 'No, it is very old', 'Maybe', 'It was built last year'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-180',
    title: 'The Brave Astronaut',
    titleKurdish: 'فەزاگەڕێ ئازا',
    content: 'Neil Armstrong was the first person to walk on the moon. In 1969, he traveled in the Apollo 11 spacecraft. When he stepped on the moon, he said, "That\'s one small step for man, one giant leap for mankind." He collected moon rocks and took many photos. His journey inspired many people to study space.',
    contentKurdish: 'نیل ئارمسترۆنگ ئێکەم کەس بوو کو ل سەر هەیڤێ پیاسە کری. ل سالا ١٩٦٩، وی ب کەشتییا فەزایی یا ئەپۆلۆ ١١ گەشت کر. دەما وی پێ ل سەر هەیڤێ دانا، وی گۆت: "ئەو گاڤەکا بچویکە بو مروڤی، بەلێ بازدانەکا زەبەلاحە بو مروڤایەتیێ." وی بەردێن هەیڤێ کۆمکرن و گەلەک وێنە گرتن. گەشتا وی بوو ئەگەرێ هندێ کو گەلەک کەس فەزایێ بخوینن.',
    level: 'B1',
    questions: [
      { id: 'q180-1', question: 'Who was the first person to walk on the moon?', options: ['Buzz Aldrin', 'Neil Armstrong', 'Yuri Gagarin', 'Elon Musk'], correctAnswer: 1 },
      { id: 'q180-2', question: 'In what year did he walk on the moon?', options: ['1950', '1969', '1980', '2000'], correctAnswer: 1 },
      { id: 'q180-3', question: 'What was the name of the spacecraft?', options: ['Apollo 1', 'Apollo 11', 'Discovery', 'Challenger'], correctAnswer: 1 },
      { id: 'q180-4', question: 'What did he say when he stepped on the moon?', options: ['"Hello world"', '"One small step for man..."', '"It is cold here"', '"I am home"'], correctAnswer: 1 },
      { id: 'q180-5', question: 'What did he collect on the moon?', options: ['Flowers', 'Moon rocks', 'Water', 'Cheese'], correctAnswer: 1 },
      { id: 'q180-6', question: 'Did he take photos?', options: ['No', 'Yes', 'Only one', 'Maybe'], correctAnswer: 1 },
      { id: 'q180-7', question: 'Did his journey inspire people?', options: ['No', 'Yes', 'Only a few', 'Maybe'], correctAnswer: 1 },
      { id: 'q180-8', question: 'Was he the first person to go to space?', options: ['Yes', 'No', 'Maybe', 'He was the second'], correctAnswer: 1 },
      { id: 'q180-9', question: 'Is the moon close to Earth?', options: ['Yes', 'No', 'It is on Earth', 'Maybe'], correctAnswer: 1 },
      { id: 'q180-10', question: 'What did people study because of him?', options: ['Cooking', 'Space', 'History', 'Math'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-181',
    title: 'The First Telephone',
    titleKurdish: 'تەلەفۆنا ئێکێ',
    content: 'Alexander Graham Bell invented the first telephone in 1876. He wanted to help people communicate over long distances. His first words on the telephone were, "Mr. Watson, come here, I want to see you." This invention changed the world and led to the smartphones we use today. Communication became much faster and easier.',
    contentKurdish: 'ئەلێکساندەر گراهام بێل ئێکەم تەلەفۆن داهێنا ل سالا ١٨٧٦. وی دڤیا هاریکاریا خەلکی بکەت دا ژ دویراتیێن درێژ پەیوەندیێ بکەن. ئێکەم پەیڤێن وی ل سەر تەلەفۆنێ ئەڤە بوون: "بەرێز واتسۆن، وەرە ڤێرێ، من دڤێت تە ببینم." ئەڤ داهێنانە جیهان گوهۆڕی و بوو ئەگەرێ دروستبوونا سمارتفۆنێن کو ئەم ئەڤرۆ بکار دئینین. پەیوەندیکردن گەلەک ب خێراییتر و ب ساناهیتر لێ هات.',
    level: 'B1',
    questions: [
      { id: 'q181-1', question: 'Who invented the telephone?', options: ['Thomas Edison', 'Alexander Graham Bell', 'Isaac Newton', 'Albert Einstein'], correctAnswer: 1 },
      { id: 'q181-2', question: 'In what year was the telephone invented?', options: ['1800', '1876', '1900', '1950'], correctAnswer: 1 },
      { id: 'q181-3', question: 'What were the first words spoken on the telephone?', options: ['"Hello world"', '"Mr. Watson, come here..."', '"Can you hear me?"', '"I am hungry"'], correctAnswer: 1 },
      { id: 'q181-4', question: 'Did the telephone change the world?', options: ['No', 'Yes', 'Only a little', 'Maybe'], correctAnswer: 1 },
      { id: 'q181-5', question: 'What did the telephone lead to today?', options: ['Radios', 'Smartphones', 'Televisions', 'Computers'], correctAnswer: 1 },
      { id: 'q181-6', question: 'Did communication become faster?', options: ['No', 'Yes', 'It became slower', 'Maybe'], correctAnswer: 1 },
      { id: 'q181-7', question: 'Was Bell a scientist?', options: ['No', 'Yes', 'Maybe', 'He was a singer'], correctAnswer: 1 },
      { id: 'q181-8', question: 'Is the telephone important today?', options: ['No', 'Yes', 'Only for some', 'Maybe'], correctAnswer: 1 },
      { id: 'q181-9', question: 'Who was Mr. Watson?', options: ['Bell\'s brother', 'Bell\'s assistant', 'A king', 'A doctor'], correctAnswer: 1 },
      { id: 'q181-10', question: 'Is "smartphone" a type of telephone?', options: ['No', 'Yes', 'Maybe', 'It is a book'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-182',
    title: 'The Life of a Penguin',
    titleKurdish: 'ژیانا پەنگوینەکێ',
    content: 'Penguins are flightless birds that live in the Southern Hemisphere, especially in Antarctica. They are excellent swimmers and spend half of their lives in the water. They eat fish and squid. Penguins live in large groups called colonies. They have thick feathers and a layer of fat to keep them warm in the cold weather.',
    contentKurdish: 'پەنگوین چویکێن بێ فڕینن کو ل نیڤا باشوورێ جیهانێ دژین، ب تایبەتی ل جەمسەرێ باشوور (Antarctica). ئەو مەلەڤانێن نایابن و نیڤا ژیانا خۆ دناڤ ئاڤێ دا دبۆرینن. ئەو ماسی و سەکالایان (squid) دخۆن. پەنگوین دناڤ کۆمێن مەزن دا دژین کو دبێژنێ کۆلۆنی. پەڕێن وان یێن ستویرن و تەخەکا چەوریێ یا هەین دا وان د سەرمایێ دا ب گەرمی بهێلیت.',
    level: 'A2',
    questions: [
      { id: 'q182-1', question: 'Can penguins fly?', options: ['Yes', 'No', 'Only a little', 'Maybe'], correctAnswer: 1 },
      { id: 'q182-2', question: 'Where do most penguins live?', options: ['In the desert', 'In Antarctica', 'In the jungle', 'In the city'], correctAnswer: 1 },
      { id: 'q182-3', question: 'Are they good swimmers?', options: ['No', 'Yes, excellent', 'Maybe', 'Only slow ones'], correctAnswer: 1 },
      { id: 'q182-4', question: 'What do they eat?', options: ['Plants', 'Fish and squid', 'Bread', 'Insects'], correctAnswer: 1 },
      { id: 'q182-5', question: 'What are groups of penguins called?', options: ['Nests', 'Colonies', 'Schools', 'Packs'], correctAnswer: 1 },
      { id: 'q182-6', question: 'How do they stay warm?', options: ['With blankets', 'Thick feathers and fat', 'By running', 'With fire'], correctAnswer: 1 },
      { id: 'q182-7', question: 'Do they spend time in the water?', options: ['No', 'Yes, half of their lives', 'Only once a year', 'Maybe'], correctAnswer: 1 },
      { id: 'q182-8', question: 'Is a penguin a bird?', options: ['No', 'Yes', 'Maybe', 'It is a fish'], correctAnswer: 1 },
      { id: 'q182-9', question: 'Is Antarctica cold?', options: ['No', 'Yes, very cold', 'It is hot', 'Maybe'], correctAnswer: 1 },
      { id: 'q182-10', question: 'Do penguins have feathers?', options: ['No', 'Yes', 'Maybe', 'Only some of them'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-183',
    title: 'The Discovery of Penicillin',
    titleKurdish: 'دیتنا پەنیسلینێ',
    content: 'Alexander Fleming discovered penicillin in 1928. It was the first antibiotic and helped save millions of lives by treating infections. Fleming found it by accident when he saw mold growing in a petri dish. This discovery revolutionized medicine and led to the development of many other life-saving drugs.',
    contentKurdish: 'ئەلێکساندەر فلیمینگ پەنیسلین دیت ل سالا ١٩٢٨. ئەو ئێکەم دژەبەکتریا (antibiotic) بوو و هاریکاریا پاراستنا ب ملیۆنان ژیانان کر ب چارەسەرکرنا هەوکرنان (infections). فلیمینگی ئەو ب رێکەفت دیت دەما وی کەڕوویەک (mold) دیتى دناڤ دەفرەکا تاقیگەهێ دا شین دبیت. ئەڤ دیتنە شۆرەشەک د پزیشکیێ دا دروستکر و بوو ئەگەرێ گەشەپێدانا گەلەک دەرمانێن دی یێن پاراستنا ژیانێ.',
    level: 'B1',
    questions: [
      { id: 'q183-1', question: 'Who discovered penicillin?', options: ['Louis Pasteur', 'Alexander Fleming', 'Marie Curie', 'Isaac Newton'], correctAnswer: 1 },
      { id: 'q183-2', question: 'In what year was it discovered?', options: ['1900', '1928', '1950', '2000'], correctAnswer: 1 },
      { id: 'q183-3', question: 'What was penicillin?', options: ['A vaccine', 'The first antibiotic', 'A vitamin', 'A poison'], correctAnswer: 1 },
      { id: 'q183-4', question: 'How did Fleming find it?', options: ['By careful planning', 'By accident', 'He bought it', 'Someone gave it to him'], correctAnswer: 1 },
      { id: 'q183-5', question: 'What did he see growing in a petri dish?', options: ['Flowers', 'Mold', 'Insects', 'Water'], correctAnswer: 1 },
      { id: 'q183-6', question: 'Did penicillin help save lives?', options: ['No', 'Yes, millions', 'Only a few', 'Maybe'], correctAnswer: 1 },
      { id: 'q183-7', question: 'Did this discovery change medicine?', options: ['No', 'Yes, revolutionized it', 'Only a little', 'Maybe'], correctAnswer: 1 },
      { id: 'q183-8', question: 'What are infections?', options: ['Healthy states', 'Illnesses caused by germs', 'Exercises', 'Foods'], correctAnswer: 1 },
      { id: 'q183-9', question: 'Is penicillin still used today?', options: ['No', 'Yes', 'Maybe', 'Only for animals'], correctAnswer: 1 },
      { id: 'q183-10', question: 'Was Fleming a doctor/scientist?', options: ['No', 'Yes', 'Maybe', 'He was a teacher'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-184',
    title: 'The Invention of the Steam Engine',
    titleKurdish: 'داهێنانا مۆتۆرێ هەلمێ',
    content: 'James Watt improved the steam engine in the 18th century. This invention was a key part of the Industrial Revolution. It allowed factories to produce goods faster and led to the development of steam trains and ships. The steam engine changed the way people worked and traveled, making the world more connected.',
    contentKurdish: 'جەیمس وات مۆتۆرێ هەلمێ باشتر کر د سەدێ ١٨ێ دا. ئەڤ داهێنانە بەشەکێ سەرەکی بوو ژ شۆرەشا پیشەسازی. وێ رێ دا کارگەهان کو کەلوپەلان ب خێراییتر بەرهەم بینن و بوو ئەگەرێ گەشەپێدانا شەمەندەفەر و کەشتیێن هەلمێ. مۆتۆرێ هەلمێ شێوازێ کارکرنا خەلکی و گەشتکرنا وان گوهۆڕی، و جیهان پتر پێکڤە گرێدا.',
    level: 'B1',
    questions: [
      { id: 'q184-1', question: 'Who improved the steam engine?', options: ['Thomas Edison', 'James Watt', 'Isaac Newton', 'George Stephenson'], correctAnswer: 1 },
      { id: 'q184-2', question: 'In what century did this happen?', options: ['17th century', '18th century', '19th century', '20th century'], correctAnswer: 1 },
      { id: 'q184-3', question: 'What major event was the steam engine part of?', options: ['The French Revolution', 'The Industrial Revolution', 'The Space Age', 'The Digital Age'], correctAnswer: 1 },
      { id: 'q184-4', question: 'What did it allow factories to do?', options: ['Close down', 'Produce goods faster', 'Nothing', 'Sleep'], correctAnswer: 1 },
      { id: 'q184-5', question: 'What types of transport used steam engines?', options: ['Cars and bikes', 'Trains and ships', 'Airplanes', 'Horses'], correctAnswer: 1 },
      { id: 'q184-6', question: 'Did the steam engine change travel?', options: ['No', 'Yes', 'Only a little', 'Maybe'], correctAnswer: 1 },
      { id: 'q184-7', question: 'Did it make the world more connected?', options: ['No', 'Yes', 'Maybe', 'It made it less connected'], correctAnswer: 1 },
      { id: 'q184-8', question: 'Is steam made from water?', options: ['No', 'Yes', 'Maybe', 'It is made from oil'], correctAnswer: 1 },
      { id: 'q184-9', question: 'Was the Industrial Revolution important?', options: ['No', 'Yes', 'Maybe', 'Only for some'], correctAnswer: 1 },
      { id: 'q184-10', question: 'Is James Watt famous?', options: ['No', 'Yes', 'Only in Scotland', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-185',
    title: 'The Life of a Butterfly',
    titleKurdish: 'ژیانا پەپوولەکێ',
    content: 'A butterfly starts its life as a tiny egg. When the egg hatches, a caterpillar comes out. The caterpillar eats many leaves and grows big. Then, it makes a hard shell called a chrysalis. Inside the chrysalis, the caterpillar changes into a butterfly. Finally, a beautiful butterfly comes out and flies away to find flowers.',
    contentKurdish: 'پەپوولە ژیانێ وەک هێکەکا بچویک دەسپێدکەت. دەما هێک دەردکەڤیت، کرمەک (caterpillar) ژێ دەردکەڤیت. کرم گەلەک گەلایان دخۆت و مەزن دبیت. پاشان، ئەو قەفتەکا بهێز دروست دکەت کو دبێژنێ (chrysalis). دناڤ وێ قەفتێ دا، کرم دهێتە گوهۆڕین بو پەپوولەکێ. ل دوماهیکێ، پەپوولەکا جوان دەردکەڤیت و دفریت دا گولان ببینیت.',
    level: 'A2',
    questions: [
      { id: 'q185-1', question: 'How does a butterfly start its life?', options: ['As a bird', 'As a tiny egg', 'As a flower', 'As a bee'], correctAnswer: 1 },
      { id: 'q185-2', question: 'What comes out of the egg?', options: ['A butterfly', 'A caterpillar', 'A spider', 'A fly'], correctAnswer: 1 },
      { id: 'q185-3', question: 'What does the caterpillar eat?', options: ['Insects', 'Leaves', 'Fruit', 'Candy'], correctAnswer: 1 },
      { id: 'q185-4', question: 'What is the hard shell called?', options: ['A nest', 'A chrysalis', 'A house', 'A box'], correctAnswer: 1 },
      { id: 'q185-5', question: 'What happens inside the chrysalis?', options: ['The caterpillar sleeps', 'The caterpillar changes into a butterfly', 'The caterpillar dies', 'Nothing'], correctAnswer: 1 },
      { id: 'q185-6', question: 'What comes out of the chrysalis at the end?', options: ['A worm', 'A beautiful butterfly', 'A bird', 'A bee'], correctAnswer: 1 },
      { id: 'q185-7', question: 'Does the butterfly fly away?', options: ['No', 'Yes', 'Maybe', 'It crawls'], correctAnswer: 1 },
      { id: 'q185-8', question: 'Is a caterpillar long and thin?', options: ['No', 'Yes', 'Maybe', 'It is round'], correctAnswer: 1 },
      { id: 'q185-9', question: 'Are butterflies colorful?', options: ['No', 'Yes, often', 'Maybe', 'Only black'], correctAnswer: 1 },
      { id: 'q185-10', question: 'Is this process called metamorphosis?', options: ['No', 'Yes', 'Maybe', 'It is called cooking'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-186',
    title: 'The Invention of the Printing Press',
    titleKurdish: 'داهێنانا ئامیرێ چاپکرنێ',
    content: 'Johannes Gutenberg invented the printing press in the 15th century. Before this, books were written by hand and were very rare. The printing press allowed books to be made quickly and cheaply. This led to a spread of knowledge and education across the world. It was one of the most important inventions in history.',
    contentKurdish: 'یۆهانیس گۆتنبێرگ ئامیرێ چاپکرنێ داهێنا د سەدێ ١٥ێ دا. بەری ڤێ، پەرتووک ب دەستی دهاتنە نڤیسین و گەلەک کێم بوون. ئامیرێ چاپکرنێ رێ دا کو پەرتووک ب خێرایی و ب ئەرزانی بهێنە دروستکرن. ئەڤە بوو ئەگەرێ بەلاڤبوونا زانین و پەروەردێ ل هەمی جیهانێ. ئەو ئێک بوو ژ گرنگترین داهێنانێن دیرۆکێ.',
    level: 'B1',
    questions: [
      { id: 'q186-1', question: 'Who invented the printing press?', options: ['Leonardo da Vinci', 'Johannes Gutenberg', 'Isaac Newton', 'Galileo'], correctAnswer: 1 },
      { id: 'q186-2', question: 'In what century was it invented?', options: ['14th century', '15th century', '16th century', '17th century'], correctAnswer: 1 },
      { id: 'q186-3', question: 'How were books made before the printing press?', options: ['By machines', 'By hand', 'They didn\'t exist', 'Maybe'], correctAnswer: 1 },
      { id: 'q186-4', question: 'Did the printing press make books cheaper?', options: ['No', 'Yes', 'Maybe', 'It made them more expensive'], correctAnswer: 1 },
      { id: 'q186-5', question: 'What did the printing press lead to?', options: ['Spread of knowledge and education', 'War', 'Nothing', 'Less reading'], correctAnswer: 0 },
      { id: 'q186-6', question: 'Was it an important invention?', options: ['No', 'Yes, one of the most important', 'Maybe', 'Only for some'], correctAnswer: 1 },
      { id: 'q186-7', question: 'Can we print many books today?', options: ['No', 'Yes', 'Maybe', 'Only a few'], correctAnswer: 1 },
      { id: 'q186-8', question: 'Is Gutenberg famous?', options: ['No', 'Yes', 'Only in Germany', 'Maybe'], correctAnswer: 1 },
      { id: 'q186-9', question: 'Were books rare before?', options: ['No', 'Yes', 'Maybe', 'They were everywhere'], correctAnswer: 1 },
      { id: 'q186-10', question: 'Is printing used for newspapers too?', options: ['No', 'Yes', 'Maybe', 'Only for books'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-187',
    title: 'The Discovery of Gravity',
    titleKurdish: 'دیتنا کێشکرنێ',
    content: 'Isaac Newton is famous for discovering the law of gravity. Legend says he was sitting under an apple tree when an apple fell on his head. He wondered why the apple fell straight down instead of going up. He realized that a force called gravity pulls everything toward the center of the Earth. This discovery helped us understand how the universe works.',
    contentKurdish: 'ئیساک نیوتن ناڤدارە ب دیتنا قانوونا کێشکرنێ. ئەفسانە دبێژن ئەو ل بن دارەکا سێڤێ روینشتبوو دەما سێڤەک ل سەرێ وی کەفتی. وی هزر کر کا بوچی سێڤ راستەوخۆ بەرەڤ خوارێ کەفت ل شوینا کو بەرەڤ سەرێ بچیت. وی زانی کو هێزەک ب ناڤێ کێشکرن هەمی تشتان بەرەڤ سەنتەرێ ئەردی رادکێشیت. ئەڤ دیتنە هاریکاریا مە کر دا تێبگەهین کا گەردوون چەوا کار دکەت.',
    level: 'B1',
    questions: [
      { id: 'q187-1', question: 'Who discovered the law of gravity?', options: ['Albert Einstein', 'Isaac Newton', 'Galileo', 'Charles Darwin'], correctAnswer: 1 },
      { id: 'q187-2', question: 'What fruit is associated with Newton\'s discovery?', options: ['Banana', 'Apple', 'Orange', 'Grape'], correctAnswer: 1 },
      { id: 'q187-3', question: 'What did Newton wonder about the apple?', options: ['If it was sweet', 'Why it fell straight down', 'If it was red', 'Nothing'], correctAnswer: 1 },
      { id: 'q187-4', question: 'What is the force that pulls things down?', options: ['Wind', 'Gravity', 'Magnetism', 'Electricity'], correctAnswer: 1 },
      { id: 'q187-5', question: 'Where does gravity pull everything toward?', options: ['The sky', 'The center of the Earth', 'The moon', 'The sun'], correctAnswer: 1 },
      { id: 'q187-6', question: 'Did this discovery help us understand the universe?', options: ['No', 'Yes', 'Maybe', 'Only a little'], correctAnswer: 1 },
      { id: 'q187-7', question: 'Was Newton a scientist?', options: ['No', 'Yes', 'Maybe', 'He was a farmer'], correctAnswer: 1 },
      { id: 'q187-8', question: 'Does gravity exist on the moon?', options: ['No', 'Yes, but it is weaker', 'Maybe', 'It is stronger'], correctAnswer: 1 },
      { id: 'q187-9', question: 'Is gravity important for keeping us on the ground?', options: ['No', 'Yes', 'Maybe', 'Only in summer'], correctAnswer: 1 },
      { id: 'q187-10', question: 'Was the apple story a legend?', options: ['No', 'Yes', 'Maybe', 'It was a movie'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-188',
    title: 'The First Moon Landing',
    titleKurdish: 'ئێکەم نیشتن ل سەر هەیڤێ',
    content: 'In 1969, Neil Armstrong became the first person to walk on the moon. He traveled in the Apollo 11 spacecraft with Buzz Aldrin and Michael Collins. When he stepped on the moon, he said, "That\'s one small step for man, one giant leap for mankind." This was a historic moment for all of humanity and showed that anything is possible.',
    contentKurdish: 'ل سالا ١٩٦٩، نیل ئارمسترۆنگ بوو ئێکەم کەس کو ل سەر هەیڤێ پیاسە کری. ئەو ب کەشتییا فەزایی یا ئەپۆلۆ ١١ گەشت کر دگەل باز ئۆڵدرین و مایکڵ کۆلینز. دەما وی پێ ل سەر هەیڤێ دانا، وی گۆت: "ئەو گاڤەکا بچویکە بو مروڤی، بەلێ بازدانەکا زەبەلاحە بو مروڤایەتیێ." ئەڤە دەمەکێ دیرۆکی بوو بو هەمی مروڤایەتیێ و نیشان دا کو هەر تشتەک یێ گونجایە.',
    level: 'B1',
    questions: [
      { id: 'q188-1', question: 'In what year did the first moon landing happen?', options: ['1950', '1969', '1980', '2000'], correctAnswer: 1 },
      { id: 'q188-2', question: 'Who was the first person to walk on the moon?', options: ['Buzz Aldrin', 'Neil Armstrong', 'Michael Collins', 'Yuri Gagarin'], correctAnswer: 1 },
      { id: 'q188-3', question: 'What was the name of the spacecraft?', options: ['Apollo 1', 'Apollo 11', 'Discovery', 'Challenger'], correctAnswer: 1 },
      { id: 'q188-4', question: 'What did Armstrong say?', options: ['"Hello moon"', '"One small step for man..."', '"I am home"', '"It is cold"'], correctAnswer: 1 },
      { id: 'q188-5', question: 'Was it a historic moment?', options: ['No', 'Yes', 'Maybe', 'Only for America'], correctAnswer: 1 },
      { id: 'q188-6', question: 'How many people were in the spacecraft?', options: ['One', 'Three', 'Five', 'Ten'], correctAnswer: 1 },
      { id: 'q188-7', question: 'Did they go to the moon?', options: ['No', 'Yes', 'Maybe', 'They went to Mars'], correctAnswer: 1 },
      { id: 'q188-8', question: 'Is the moon a planet?', options: ['Yes', 'No', 'Maybe', 'It is a star'], correctAnswer: 1 },
      { id: 'q188-9', question: 'Is space exploration exciting?', options: ['No', 'Yes', 'Maybe', 'It is boring'], correctAnswer: 1 },
      { id: 'q188-10', question: 'Can we see the moon at night?', options: ['No', 'Yes, usually', 'Maybe', 'Never'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-189',
    title: 'The Life of an Elephant',
    titleKurdish: 'ژیانا فیلەکێ',
    content: 'Elephants are the largest land animals on Earth. They are very intelligent and have great memories. They live in groups called herds, led by an older female. Elephants use their long trunks to breathe, drink, and pick up food. They are social animals and care for each other. We must protect them from hunting and habitat loss.',
    contentKurdish: 'فیل مەزنترین گیانەوەرێن ئەردی نە ل سەر جیهانێ. ئەو گەلەک یێن ژیرن و بیردانکەکا نایاب یا هەین. ئەو دناڤ کۆمێن ب ناڤێ (herds) دا دژین، کو ژ لایێ مێیەکا دانعەمر ڤە دهێنە رێڤەبرن. فیل خرطومێ (trunk) خۆ یێ درێژ بکار دئینن دا بێهنێ بکێشن، ئاڤێ ڤەخۆن، و خوارنێ هەلگرن. ئەو گیانەوەرێن جڤاکینە و خەمێ ژ ئێک و دو دخۆن. دڤێت ئەم وان ژ نێچیرێ و ژ دەستدانا جهێ ژیانێ بپارێزین.',
    level: 'A2',
    questions: [
      { id: 'q189-1', question: 'Are elephants the largest land animals?', options: ['No', 'Yes', 'Maybe', 'Whales are larger land animals'], correctAnswer: 1 },
      { id: 'q189-2', question: 'Are they intelligent?', options: ['No', 'Yes', 'Maybe', 'They are very slow'], correctAnswer: 1 },
      { id: 'q189-3', question: 'What are groups of elephants called?', options: ['Packs', 'Herds', 'Schools', 'Flocks'], correctAnswer: 1 },
      { id: 'q189-4', question: 'What do they use their trunks for?', options: ['Only to play', 'To breathe, drink, and pick up food', 'Nothing', 'To fly'], correctAnswer: 1 },
      { id: 'q189-5', question: 'Who leads the herd?', options: ['A young male', 'An older female', 'A king', 'Nobody'], correctAnswer: 1 },
      { id: 'q189-6', question: 'Do they have good memories?', options: ['No', 'Yes', 'Maybe', 'They forget everything'], correctAnswer: 1 },
      { id: 'q189-7', question: 'Should we protect elephants?', options: ['No', 'Yes', 'Maybe', 'Only small ones'], correctAnswer: 1 },
      { id: 'q189-8', question: 'Are elephants social animals?', options: ['No', 'Yes', 'Maybe', 'They like to be alone'], correctAnswer: 1 },
      { id: 'q189-9', question: 'Is an elephant\'s skin thick?', options: ['No', 'Yes', 'Maybe', 'It is very thin'], correctAnswer: 1 },
      { id: 'q189-10', question: 'Do elephants have tusks?', options: ['No', 'Yes, many do', 'Maybe', 'Only in movies'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-190',
    title: 'The Invention of the Automobile',
    titleKurdish: 'داهێنانا ترومبێلێ',
    content: 'Karl Benz is credited with inventing the first modern automobile in 1886. Before cars, people used horses and carriages to travel. The first cars were slow and noisy, but they slowly became more popular. Henry Ford later made cars affordable for many people with his assembly line. Today, cars are an essential part of transportation.',
    contentKurdish: 'کارڵ بێنز ب داهێنەرێ ئێکەم ترومبێلا مۆدێرن دهێتە هەژمارتن ل سالا ١٨٨٦. بەری ترومبێلان، خەلکی ئەسپ و گالیسکە بکار دئینان دا گەشتێ بکەن. ترومبێلێن ئێکێ یێن خاڤ و ب دەنگ بوون، بەلێ هێدی هێدی پتر بەلاڤ بوون. هێنری فۆرد پاشان ترومبێل بو گەلەک کەسان ب ئەرزانی دروستکرن ب رێکا هێلا جێبەجێکرنێ (assembly line). ئەڤرۆ، ترومبێل بەشەکێ سەرەکی نە ژ ڤەگوهاستنێ.',
    level: 'B1',
    questions: [
      { id: 'q190-1', question: 'Who invented the first modern automobile?', options: ['Henry Ford', 'Karl Benz', 'Thomas Edison', 'Elon Musk'], correctAnswer: 1 },
      { id: 'q190-2', question: 'In what year was it invented?', options: ['1800', '1886', '1900', '1950'], correctAnswer: 1 },
      { id: 'q190-3', question: 'What did people use before cars?', options: ['Bicycles', 'Horses and carriages', 'Airplanes', 'Nothing'], correctAnswer: 1 },
      { id: 'q190-4', question: 'Were the first cars fast?', options: ['Yes', 'No, they were slow', 'Maybe', 'They were very fast'], correctAnswer: 1 },
      { id: 'q190-5', question: 'Who made cars affordable for many people?', options: ['Karl Benz', 'Henry Ford', 'Steve Jobs', 'Bill Gates'], correctAnswer: 1 },
      { id: 'q190-6', question: 'Is the automobile essential today?', options: ['No', 'Yes', 'Maybe', 'Only in cities'], correctAnswer: 1 },
      { id: 'q190-7', question: 'What is an assembly line?', options: ['A type of car', 'A way to make things quickly in a row', 'A road', 'A map'], correctAnswer: 1 },
      { id: 'q190-8', question: 'Are there many types of cars today?', options: ['No', 'Yes', 'Maybe', 'Only one'], correctAnswer: 1 },
      { id: 'q190-9', question: 'Do cars use fuel or electricity?', options: ['Only fuel', 'Only electricity', 'Both', 'Neither'], correctAnswer: 2 },
      { id: 'q190-10', question: 'Is driving a car a common skill?', options: ['No', 'Yes', 'Maybe', 'Only for racers'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-191',
    title: 'The Discovery of America',
    titleKurdish: 'دیتنا ئەمریکا',
    content: 'Christopher Columbus is often credited with discovering America in 1492, although indigenous people had lived there for thousands of years. He sailed from Spain with three ships: the Niña, the Pinta, and the Santa María. He was looking for a new route to Asia but landed in the Caribbean instead. This event led to more exploration and change.',
    contentKurdish: 'کریستۆفەر کۆڵۆمبۆس زۆربەی جاران ب داهێنەرێ دیتنا ئەمریکا دهێتە هەژمارتن ل سالا ١٤٩٢، هەرچەندە خەلکێ رەسەن ب هزاران سالان ل وێرێ دژیان. ئەو ژ ئیسپانیا ب سێ کەشتییان ب رێ کەفت: نینیا، پینتا، و سانتا ماریا. ئەو ل دویڤ رێکەکا نوی دگەڕیا بو ئاسیا بەلێ ل شوینا وێ گەهشتە کارایبی. ئەڤ رویدانە بوو ئەگەرێ پتر لێگەرین و گوهۆڕینان.',
    level: 'B1',
    questions: [
      { id: 'q191-1', question: 'In what year did Columbus sail to America?', options: ['1400', '1492', '1500', '1600'], correctAnswer: 1 },
      { id: 'q191-2', question: 'How many ships did he have?', options: ['One', 'Three', 'Five', 'Ten'], correctAnswer: 1 },
      { id: 'q191-3', question: 'Where did he sail from?', options: ['England', 'Spain', 'France', 'Italy'], correctAnswer: 1 },
      { id: 'q191-4', question: 'What was he looking for?', options: ['America', 'A new route to Asia', 'Gold only', 'Nothing'], correctAnswer: 1 },
      { id: 'q191-5', question: 'Where did he actually land?', options: ['China', 'The Caribbean', 'India', 'Africa'], correctAnswer: 1 },
      { id: 'q191-6', question: 'Had people lived in America before him?', options: ['No', 'Yes, indigenous people', 'Maybe', 'Only animals'], correctAnswer: 1 },
      { id: 'q191-7', question: 'What were the names of his ships?', options: ['Niña, Pinta, Santa María', 'Titanic', 'Discovery', 'Mayflower'], correctAnswer: 0 },
      { id: 'q191-8', question: 'Did his journey lead to more exploration?', options: ['No', 'Yes', 'Maybe', 'It was the last journey'], correctAnswer: 1 },
      { id: 'q191-9', question: 'Is Columbus famous?', options: ['No', 'Yes', 'Only in Italy', 'Maybe'], correctAnswer: 1 },
      { id: 'q191-10', question: 'Was the journey dangerous?', options: ['No', 'Yes', 'Maybe', 'It was very easy'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-192',
    title: 'The Life of a Lion',
    titleKurdish: 'ژیانا شێرەکێ',
    content: 'Lions are known as the "kings of the jungle," although they mostly live in grasslands. They live in groups called prides. Male lions have a thick mane around their necks. Female lions, or lionesses, do most of the hunting. Lions are very strong and can roar very loudly. They are majestic animals and are respected by many.',
    contentKurdish: 'شێر ب "پاشایێن دارستانێ" دهێنە نیاسین، هەرچەندە ئەو زۆربەی جاران ل دەشتێن گیایی دژین. ئەو دناڤ کۆمێن ب ناڤێ (prides) دا دژین. شێرێن نێر پرچەکا ستویر (mane) ل دەورێ ستۆیا وان یا هەى. شێرێن مێ زۆربەی نێچیرێ دکەن. شێر گەلەک یێن ب هێزن و دشێن ب دەنگەکێ گەلەک بلند بڕەندن. ئەو گیانەوەرێن مەزنن و ژ لایێ گەلەک کەسان ڤە دهێنە رێزگرتن.',
    level: 'A2',
    questions: [
      { id: 'q192-1', question: 'What are lions often called?', options: ['Kings of the jungle', 'Kings of the desert', 'Kings of the ocean', 'Kings of the sky'], correctAnswer: 0 },
      { id: 'q192-2', question: 'Where do they mostly live?', options: ['In the jungle', 'In grasslands', 'In the mountains', 'In the city'], correctAnswer: 1 },
      { id: 'q192-3', question: 'What are groups of lions called?', options: ['Packs', 'Prides', 'Herds', 'Schools'], correctAnswer: 1 },
      { id: 'q192-4', question: 'Which lion has a mane?', options: ['Female', 'Male', 'Baby', 'None'], correctAnswer: 1 },
      { id: 'q192-5', question: 'Who does most of the hunting?', options: ['Male lions', 'Lionesses (females)', 'Baby lions', 'Nobody'], correctAnswer: 1 },
      { id: 'q192-6', question: 'Can lions roar loudly?', options: ['No', 'Yes', 'Maybe', 'Only small ones'], correctAnswer: 1 },
      { id: 'q192-7', question: 'Are lions strong?', options: ['No', 'Yes', 'Maybe', 'They are weak'], correctAnswer: 1 },
      { id: 'q192-8', question: 'Is a lion a cat?', options: ['No', 'Yes, a big cat', 'Maybe', 'It is a dog'], correctAnswer: 1 },
      { id: 'q192-9', question: 'Do lions sleep a lot?', options: ['No', 'Yes, often', 'Maybe', 'Never'], correctAnswer: 1 },
      { id: 'q192-10', question: 'Are lions respected?', options: ['No', 'Yes', 'Maybe', 'Only by other lions'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-193',
    title: 'The Invention of the Radio',
    titleKurdish: 'داهێنانا رادیۆیێ',
    content: 'Guglielmo Marconi is credited with inventing the radio in the late 19th century. He used radio waves to send messages through the air without wires. This was a major breakthrough in communication. The radio allowed news and music to be broadcast to many people at once. It was very important before the invention of television.',
    contentKurdish: 'گۆگلیێلمۆ مارکۆنی ب داهێنەرێ رادیۆیێ دهێتە هەژمارتن ل دوماهیکا سەدێ ١٩ێ. وی پێلێن رادیۆیێ بکار ئینان دا پەیامان ب رێکا هەوایێ بێ تەل بنێریت. ئەڤە پێشکەفتنەکا مەزن بوو د پەیوەندیکردنێ دا. رادیۆیێ رێ دا کو نووچە و مۆزیک بو گەلەک کەسان ب ئێکجار بهێنە بەلاڤکرن. ئەو گەلەک یا گرنگ بوو بەری داهێنانا تەلەفزیۆنێ.',
    level: 'B1',
    questions: [
      { id: 'q193-1', question: 'Who invented the radio?', options: ['Thomas Edison', 'Guglielmo Marconi', 'Alexander Graham Bell', 'Nikola Tesla'], correctAnswer: 1 },
      { id: 'q193-2', question: 'When was the radio invented?', options: ['Early 19th century', 'Late 19th century', 'Early 20th century', '1800'], correctAnswer: 1 },
      { id: 'q193-3', question: 'How did the radio send messages?', options: ['Through wires', 'Through radio waves in the air', 'By birds', 'By mail'], correctAnswer: 1 },
      { id: 'q193-4', question: 'What did the radio allow to be broadcast?', options: ['Only news', 'News and music', 'Only movies', 'Nothing'], correctAnswer: 1 },
      { id: 'q193-5', question: 'Was the radio important before television?', options: ['No', 'Yes', 'Maybe', 'It was invented after TV'], correctAnswer: 1 },
      { id: 'q193-6', question: 'Is Marconi famous?', options: ['No', 'Yes', 'Only in Italy', 'Maybe'], correctAnswer: 1 },
      { id: 'q193-7', question: 'Do we still use radios today?', options: ['No', 'Yes', 'Maybe', 'Only in cars'], correctAnswer: 1 },
      { id: 'q193-8', question: 'Is a radio wave invisible?', options: ['No', 'Yes', 'Maybe', 'It is red'], correctAnswer: 1 },
      { id: 'q193-9', question: 'Was the invention a breakthrough?', options: ['No', 'Yes', 'Maybe', 'It was a mistake'], correctAnswer: 1 },
      { id: 'q193-10', question: 'Can you listen to music on the radio?', options: ['No', 'Yes', 'Maybe', 'Only talk'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-194',
    title: 'The Discovery of Oxygen',
    titleKurdish: 'دیتنا ئۆکسجینێ',
    content: 'Joseph Priestley and Carl Wilhelm Scheele independently discovered oxygen in the 1770s. Oxygen is a gas that is essential for life on Earth. Humans and animals need it to breathe, and it is also needed for fire to burn. This discovery helped scientists understand how our bodies use air and how chemical reactions work.',
    contentKurdish: 'جۆزێف پریستلی و کارڵ ویلهێلم شیلی ب جودا ئۆکسجین دیت ل سالێن ١٧٧٠ێ. ئۆکسجین گازەکە کو یا سەرەکی یە بو ژیانێ ل سەر ئەردی. مروڤ و گیانەوەر پێدڤی پێ نە دا بێهنێ بکێشن، و هەروەسا پێدڤی یە دا ئاگر بسوژیت. ئەڤ دیتنە هاریکاریا زانایان کر دا تێبگەهین کا جەستەیێ مە چەوا هەوای بکار دئینیت و کارلێکێن کیمیایی چەوا کار دکەن.',
    level: 'B1',
    questions: [
      { id: 'q194-1', question: 'Who discovered oxygen?', options: ['Isaac Newton', 'Joseph Priestley and Carl Wilhelm Scheele', 'Albert Einstein', 'Charles Darwin'], correctAnswer: 1 },
      { id: 'q194-2', question: 'When was it discovered?', options: ['1600s', '1770s', '1800s', '1900s'], correctAnswer: 1 },
      { id: 'q194-3', question: 'What is oxygen?', options: ['A liquid', 'A gas', 'A solid', 'A food'], correctAnswer: 1 },
      { id: 'q194-4', question: 'Is oxygen essential for life?', options: ['No', 'Yes', 'Maybe', 'Only for plants'], correctAnswer: 1 },
      { id: 'q194-5', question: 'What do humans need oxygen for?', options: ['To eat', 'To breathe', 'To sleep', 'To run'], correctAnswer: 1 },
      { id: 'q194-6', question: 'Is oxygen needed for fire to burn?', options: ['No', 'Yes', 'Maybe', 'Fire doesn\'t need air'], correctAnswer: 1 },
      { id: 'q194-7', question: 'Did this discovery help scientists?', options: ['No', 'Yes', 'Maybe', 'Only a little'], correctAnswer: 1 },
      { id: 'q194-8', question: 'Is oxygen in the air?', options: ['No', 'Yes', 'Maybe', 'Only in water'], correctAnswer: 1 },
      { id: 'q194-9', question: 'Do plants produce oxygen?', options: ['No', 'Yes', 'Maybe', 'Only at night'], correctAnswer: 1 },
      { id: 'q194-10', question: 'Is oxygen invisible?', options: ['No', 'Yes', 'Maybe', 'It is blue'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-195',
    title: 'The Invention of the Microscope',
    titleKurdish: 'داهێنانا میکرۆسکۆپێ',
    content: 'The microscope was invented in the late 16th century. It allows us to see things that are too small for the human eye, like cells and bacteria. This invention revolutionized biology and medicine. Scientists can now study diseases and find cures by looking at tiny organisms. The microscope opened up a whole new world of discovery.',
    contentKurdish: 'میکرۆسکۆپ ل دوماهیکا سەدێ ١٦ێ هاتە داهێنان. ئەو رێ ددەتە مە کو تشتێن هندە بچویک ببینین کو چاڤێ مروڤی نابینیت، وەک خانە و بەکتریایان. ئەڤ داهێنانە شۆرەشەک د بایۆلۆژی و پزیشکیێ دا دروستکر. زانای ئەڤرۆ دشێن ل سەر نەخۆشیان بکۆلن و چارەسەریان ببینن ب نێڕینا ل زیندەوەرێن بچویک. میکرۆسکۆپێ جیهانەکا نوی یا دیتنان ڤەکر.',
    level: 'B1',
    questions: [
      { id: 'q195-1', question: 'When was the microscope invented?', options: ['Late 15th century', 'Late 16th century', 'Late 17th century', '1800'], correctAnswer: 1 },
      { id: 'q195-2', question: 'What does a microscope allow us to see?', options: ['Stars', 'Things too small for the human eye', 'Mountains', 'The moon'], correctAnswer: 1 },
      { id: 'q195-3', question: 'What are examples of tiny things seen with a microscope?', options: ['Trees', 'Cells and bacteria', 'Cars', 'Birds'], correctAnswer: 1 },
      { id: 'q195-4', question: 'Did the microscope change biology?', options: ['No', 'Yes, revolutionized it', 'Only a little', 'Maybe'], correctAnswer: 1 },
      { id: 'q195-5', question: 'Can scientists study diseases with it?', options: ['No', 'Yes', 'Maybe', 'Only in the future'], correctAnswer: 1 },
      { id: 'q195-6', question: 'Is a microscope a scientific tool?', options: ['No', 'Yes', 'Maybe', 'It is a toy'], correctAnswer: 1 },
      { id: 'q195-7', question: 'Are cells very small?', options: ['No', 'Yes', 'Maybe', 'They are big'], correctAnswer: 1 },
      { id: 'q195-8', question: 'Is a microscope useful for medicine?', options: ['No', 'Yes', 'Maybe', 'Only for plants'], correctAnswer: 1 },
      { id: 'q195-9', question: 'Can you see bacteria with your eyes alone?', options: ['Yes', 'No', 'Maybe', 'Only if they are many'], correctAnswer: 1 },
      { id: 'q195-10', question: 'Is the microscope important?', options: ['No', 'Yes', 'Only for some', 'Maybe'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-196',
    title: 'The Life of a Shark',
    titleKurdish: 'ژیانا قرشەکێ',
    content: 'Sharks are powerful fish that live in the oceans. They have been around for millions of years. Sharks have skeletons made of cartilage instead of bone, which makes them flexible. They are excellent hunters and have many rows of sharp teeth. While some people are afraid of them, most sharks are not dangerous to humans.',
    contentKurdish: 'قرش ماسیێن ب هێزن کو د زەریایان دا دژین. ئەو ب ملیۆنان سالانە یێن هەین. پەیکەرێ هەستیێ قرشان ژ کڕکڕاگێ (cartilage) هاتیە دروستکرن ل شوینا هەستی، کو ئەڤە وان نەرم دکەت. ئەو نێچیرڤانێن نایابن و گەلەک رێزێن ددانێن تیژ یێن هەین. هەرچەندە هندەک کەس ژ وان دترسن، بەلێ زۆربەی قرشان بو مروڤان نە مەترسیدارن.',
    level: 'B1',
    questions: [
      { id: 'q196-1', question: 'Where do sharks live?', options: ['In rivers', 'In oceans', 'In lakes', 'In the sky'], correctAnswer: 1 },
      { id: 'q196-2', question: 'How long have sharks been around?', options: ['Hundreds of years', 'Millions of years', 'Ten years', 'One thousand years'], correctAnswer: 1 },
      { id: 'q196-3', question: 'What is a shark\'s skeleton made of?', options: ['Bone', 'Cartilage', 'Metal', 'Wood'], correctAnswer: 1 },
      { id: 'q196-4', question: 'Are they good hunters?', options: ['No', 'Yes, excellent', 'Maybe', 'Only slow ones'], correctAnswer: 1 },
      { id: 'q196-5', question: 'Do they have many rows of teeth?', options: ['No', 'Yes', 'Only one row', 'Maybe'], correctAnswer: 1 },
      { id: 'q196-6', question: 'Are most sharks dangerous to humans?', options: ['Yes', 'No', 'Maybe', 'Only big ones'], correctAnswer: 1 },
      { id: 'q196-7', question: 'Is a shark a fish?', options: ['No', 'Yes', 'Maybe', 'It is a mammal'], correctAnswer: 1 },
      { id: 'q196-8', question: 'Is cartilage flexible?', options: ['No', 'Yes', 'Maybe', 'It is very hard'], correctAnswer: 1 },
      { id: 'q196-9', question: 'Do sharks breathe underwater?', options: ['No', 'Yes', 'Maybe', 'They hold their breath'], correctAnswer: 1 },
      { id: 'q196-10', question: 'Are sharks important for the ocean?', options: ['No', 'Yes', 'Maybe', 'Only for fish'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-197',
    title: 'The Invention of the Telescope',
    titleKurdish: 'داهێنانا تەلەسکۆپێ',
    content: 'The telescope was invented in the early 17th century. Galileo Galilei was one of the first to use it to look at the stars and planets. He discovered that the moon has craters and that Jupiter has moons. The telescope changed our understanding of the universe and our place in it. Today, we have giant telescopes in space.',
    contentKurdish: 'تەلەسکۆپ ل دەسپێکا سەدێ ١٧ێ هاتە داهێنان. گالیلۆ گالیلەی ئێک بوو ژ ئێکەم کەسان کو ئەو بکار ئینا دا ل ئەستێرە و هەسارەیان بنێریت. وی زانی کو هەیڤێ چاڵ (craters) یێن هەین و جۆپیتەر هەیڤێن هەین. تەلەسکۆپێ تێگەهشتنا مە بو گەردوونی و جهێ مە تێدا گوهۆڕی. ئەڤرۆ، مە تەلەسکۆپێن زەبەلاح د فەزایێ دا یێن هەین.',
    level: 'B1',
    questions: [
      { id: 'q197-1', question: 'When was the telescope invented?', options: ['Early 16th century', 'Early 17th century', 'Early 18th century', '1900'], correctAnswer: 1 },
      { id: 'q197-2', question: 'Who was one of the first to use it for astronomy?', options: ['Isaac Newton', 'Galileo Galilei', 'Albert Einstein', 'Thomas Edison'], correctAnswer: 1 },
      { id: 'q197-3', question: 'What did Galileo discover about the moon?', options: ['It is made of cheese', 'It has craters', 'It is flat', 'Nothing'], correctAnswer: 1 },
      { id: 'q197-4', question: 'What did he discover about Jupiter?', options: ['It has rings', 'It has moons', 'It is hot', 'It is small'], correctAnswer: 1 },
      { id: 'q197-5', question: 'Did the telescope change our understanding of the universe?', options: ['No', 'Yes', 'Maybe', 'Only a little'], correctAnswer: 1 },
      { id: 'q197-6', question: 'Are there telescopes in space today?', options: ['No', 'Yes', 'Maybe', 'Only on Earth'], correctAnswer: 1 },
      { id: 'q197-7', question: 'Is a telescope used to see far away things?', options: ['No', 'Yes', 'Maybe', 'Only small things'], correctAnswer: 1 },
      { id: 'q197-8', question: 'Is astronomy the study of space?', options: ['No', 'Yes', 'Maybe', 'It is the study of plants'], correctAnswer: 1 },
      { id: 'q197-9', question: 'Was Galileo a scientist?', options: ['No', 'Yes', 'Maybe', 'He was a king'], correctAnswer: 1 },
      { id: 'q197-10', question: 'Is the universe big?', options: ['No', 'Yes', 'Maybe', 'It is small'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-198',
    title: 'The Discovery of Electricity',
    titleKurdish: 'دیتنا کارەبێ',
    content: 'Electricity was not invented but discovered. Benjamin Franklin is famous for his experiments with lightning and a kite. He showed that lightning is a form of electricity. Later, scientists like Michael Faraday and Thomas Edison learned how to generate and use electricity. Today, electricity powers our homes, schools, and cities.',
    contentKurdish: 'کارەب نەهاتیە داهێنان بەلێ هاتیە دیتن. بێنجامین فرانکلین ناڤدارە ب تاقیکرنێن خۆ دگەل برۆسی و تەیارەکا کاغەزی. وی نیشان دا کو برۆسی جورەکێ کارەبێ یە. پاشان، زانایێن وەک مایکڵ فارادای و تۆماس ئێدیسۆن فێربوون کا دێ چەوا کارەبێ بەرهەم ئینن و بکار ئینن. ئەڤرۆ، کارەب هێزێ ددەتە خانی، قوتابخانە، و باژێڕێن مە.',
    level: 'B1',
    questions: [
      { id: 'q198-1', question: 'Was electricity invented or discovered?', options: ['Invented', 'Discovered', 'Neither', 'Maybe'], correctAnswer: 1 },
      { id: 'q198-2', question: 'Who is famous for the kite experiment?', options: ['Thomas Edison', 'Benjamin Franklin', 'Isaac Newton', 'Albert Einstein'], correctAnswer: 1 },
      { id: 'q198-3', question: 'What did Franklin show about lightning?', options: ['It is water', 'It is a form of electricity', 'It is fire', 'Nothing'], correctAnswer: 1 },
      { id: 'q198-4', question: 'Who learned how to generate and use electricity later?', options: ['Only farmers', 'Scientists like Faraday and Edison', 'Only kings', 'Nobody'], correctAnswer: 1 },
      { id: 'q198-5', question: 'What does electricity power today?', options: ['Only toys', 'Homes, schools, and cities', 'Nothing', 'Only cars'], correctAnswer: 1 },
      { id: 'q198-6', question: 'Is electricity important?', options: ['No', 'Yes', 'Maybe', 'Only in winter'], correctAnswer: 1 },
      { id: 'q198-7', question: 'Is lightning dangerous?', options: ['No', 'Yes', 'Maybe', 'Only for birds'], correctAnswer: 1 },
      { id: 'q198-8', question: 'Can we live without electricity today?', options: ['Yes, easily', 'No, it would be very hard', 'Maybe', 'We don\'t use it'], correctAnswer: 1 },
      { id: 'q198-9', question: 'Was Benjamin Franklin an American?', options: ['No', 'Yes', 'Maybe', 'He was French'], correctAnswer: 1 },
      { id: 'q198-10', question: 'Is a battery a source of electricity?', options: ['No', 'Yes', 'Maybe', 'It is a type of food'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-199',
    title: 'The Life of a Polar Bear',
    titleKurdish: 'ژیانا ورچەکێ جەمسەری',
    content: 'Polar bears are the largest bears in the world and live in the Arctic. They have thick white fur and a layer of fat to keep them warm in the freezing cold. Polar bears are excellent swimmers and hunt for seals on the sea ice. They are threatened by climate change because the ice is melting. We must protect their habitat.',
    contentKurdish: 'ورچێن جەمسەری مەزنترین ورچن ل جیهانێ و ل جەمسەرێ باکور (Arctic) دژین. ئەو فەروەکا سپی یا ستویر و تەخەکا چەوریێ یا هەین دا وان د سەرمایێ دا ب گەرمی بهێلیت. ورچێن جەمسەری مەلەڤانێن نایابن و نێچیرا فۆکان (seals) دکەن ل سەر جەمدێ دەریایێ. ئەو د مەترسیێ دانە ژبەر گوهۆڕینا سەقای چونکی جەمد یێ دحەلیت. دڤێت ئەم جهێ ژیانا وان بپارێزین.',
    level: 'B1',
    questions: [
      { id: 'q199-1', question: 'Where do polar bears live?', options: ['In the desert', 'In the Arctic', 'In the jungle', 'In the city'], correctAnswer: 1 },
      { id: 'q199-2', question: 'Are they the largest bears in the world?', options: ['No', 'Yes', 'Maybe', 'Panda bears are larger'], correctAnswer: 1 },
      { id: 'q199-3', question: 'What color is their fur?', options: ['Brown', 'White', 'Black', 'Grey'], correctAnswer: 1 },
      { id: 'q199-4', question: 'How do they stay warm?', options: ['With blankets', 'Thick fur and fat', 'By running', 'With fire'], correctAnswer: 1 },
      { id: 'q199-5', question: 'What do they hunt for?', options: ['Fish only', 'Seals', 'Plants', 'Birds'], correctAnswer: 1 },
      { id: 'q199-6', question: 'Why are they threatened?', options: ['Because of cold', 'Because of climate change and melting ice', 'Because they are old', 'Maybe'], correctAnswer: 1 },
      { id: 'q199-7', question: 'Are they good swimmers?', options: ['No', 'Yes, excellent', 'Maybe', 'Only slow ones'], correctAnswer: 1 },
      { id: 'q199-8', question: 'Is the Arctic cold?', options: ['No', 'Yes, freezing cold', 'It is hot', 'Maybe'], correctAnswer: 1 },
      { id: 'q199-9', question: 'Should we protect their habitat?', options: ['No', 'Yes', 'Maybe', 'Only for some'], correctAnswer: 1 },
      { id: 'q199-10', question: 'Is a polar bear a mammal?', options: ['No', 'Yes', 'Maybe', 'It is a fish'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-200',
    title: 'The Invention of the Television',
    titleKurdish: 'داهێنانا تەلەفزیۆنێ',
    content: 'The television was developed by several inventors in the early 20th century. It allows us to see moving images and hear sound from far away. The television changed the way we get news and entertainment. Today, we have high-definition and smart televisions. It remains one of the most popular ways to share information and stories.',
    contentKurdish: 'تەلەفزیۆن ژ لایێ جەند داهێنەرەکان ڤە هاتە گەشەپێدان ل دەسپێکا سەدێ ٢٠ێ. ئەو رێ ددەتە مە کو وێنەیێن لڤۆک ببینین و دەنگی ژ دویراتیێ ببهیسین. تەلەفزیۆنێ شێوازێ وەرگرتنا نووچە و کەیفخۆشیێ گوهۆڕی. ئەڤرۆ، مە تەلەفزیۆنێن زیرەک و کوالێتی بلند یێن هەین. ئەو وەک ئێک ژ ناڤدارترین رێکان بو بەلاڤکرنا پێزانین و چیرۆکان یا مایى.',
    level: 'B1',
    questions: [
      { id: 'q200-1', question: 'When was the television developed?', options: ['Early 19th century', 'Early 20th century', 'Early 21st century', '1800'], correctAnswer: 1 },
      { id: 'q200-2', question: 'What does the television allow us to see?', options: ['Only photos', 'Moving images and sound', 'Nothing', 'Only text'], correctAnswer: 1 },
      { id: 'q200-3', question: 'Did the television change news and entertainment?', options: ['No', 'Yes', 'Only a little', 'Maybe'], correctAnswer: 1 },
      { id: 'q200-4', question: 'What kind of televisions do we have today?', options: ['Only black and white', 'High-definition and smart TVs', 'Only small ones', 'Nothing new'], correctAnswer: 1 },
      { id: 'q200-5', question: 'Is the television still popular?', options: ['No', 'Yes', 'Maybe', 'Nobody watches it'], correctAnswer: 1 },
      { id: 'q200-6', question: 'Does a TV use electricity?', options: ['No', 'Yes', 'Maybe', 'It uses water'], correctAnswer: 1 },
      { id: 'q200-7', question: 'Can we watch movies on TV?', options: ['No', 'Yes', 'Maybe', 'Only news'], correctAnswer: 1 },
      { id: 'q200-8', question: 'Is a "smart TV" connected to the internet?', options: ['No', 'Yes, usually', 'Maybe', 'Never'], correctAnswer: 1 },
      { id: 'q200-9', question: 'Was the TV invented by one person?', options: ['Yes', 'No, by several inventors', 'Maybe', 'It was a mistake'], correctAnswer: 1 },
      { id: 'q200-10', question: 'Is the TV a source of information?', options: ['No', 'Yes', 'Maybe', 'Only for fun'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-201',
    title: 'The Legend of the Mountain Eagle',
    titleKurdish: 'ئەفسانەیا تەیرێ چیایی',
    content: 'Deep in the rugged mountains of Kurdistan, there is a legend of a golden-eyed eagle that only appears to those who show true courage and resilience. The people of the surrounding villages believe the eagle is a guardian of the peak. A young mountaineer named Alan decided to climb the highest summit during a severe autumn storm, hoping to verify the legendary tales. At the apex of his challenging journey, as the wind roared fiercely, he locked eyes with a magnificent eagle perched on a frozen cliff, teaching him that strength is born out of adversity.',
    contentKurdish: 'ل قوڵاییا چیاین سەخت یێن کوردستانێ، ئەفسانەیەکا تەیرێ چاڤ-زێرین هەیە کو تەنێ بۆ وان دیار دجیت یێن نەرمی و ئازایەتیا دروست نیشان ددەن. خەلکێ گوندێن دەوروبەر باوەر دکەن کو ئەو تەیرە زێرەڤانێ لوتکێ یە. جحێلەکێ چیاڤان بناڤێ ئالان بڕیار دا سەرکەڤیتە سەر بلنترین لوتکە د دەمێ باهۆزەکا دژوار یا پایزێ دا، ب هیڤیا هندێ کو راستییا چیرۆکێن ئەفسانەیی بسەلمینیت. د لوتکەیا گەشتا وی یا دژوار دا، دەما بای ب هێز دهاوار لێ دکر، وی چاڤێن خۆ ب چاڤێن تەیرەکێ مەزن و شکۆدار ڤە گرێدان کو یێ ل سەر تاشەبەردەکێ بەستی نیشتی بوو، و فێربوو کو هێز ژ ناڤ نەخۆشیاندا ژ دایک دبیت.',
    level: 'B2',
    questions: [
      { id: 'q201-1', question: 'Who is the main character in this B2 story?', options: ['Ahmed', 'Alan', 'Karwan', 'Sherwan'], correctAnswer: 1 },
      { id: 'q201-2', question: 'What season does the storm take place in?', options: ['Summer', 'Winter', 'Spring', 'Autumn'], correctAnswer: 3 },
      { id: 'q201-3', question: 'Where is the legend said to be set?', options: ['The plains of Erbil', 'The mountains of Kurdistan', 'The deserts of Garmian', 'The city of Duhok'], correctAnswer: 1 },
      { id: 'q201-4', question: 'What feature does the legendary eagle have?', options: ['Blue wings', 'Silver talons', 'Golden eyes', 'Emerald feathers'], correctAnswer: 2 },
      { id: 'q201-5', question: 'What is the theme of this story?', options: ['Nature is peaceful', 'Strength is born out of adversity', 'Mountains are too high to climb', 'Eagles fly fast'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-202',
    title: 'The Silent Forest and Climate Change',
    titleKurdish: 'دارستانا بێدەنگ و گۆهۆڕینا سەقایى',
    content: 'Environmental scientists have documented an alarming silence in the high-altitude forests of our region. For decades, these dense woodlands were vibrating with the diverse symphonies of migratory birds and wildlife. However, the unexpected shifts in average annual temperatures have disrupted the ecological balance, forcing many fragile species to migrate further north. Local conservationist Karwan has initiated a reforestation project, aiming to restore the native flora and bring the joyful sounds of nature back to these quiet valleys.',
    contentKurdish: 'زانایێن ژینگەهێ بێدەنگیەکا مەترسیدار د دارستانێن بلند یێن دەڤەرا مە دا تۆمار کرینە. بۆ دەهان سالان، ئەڤ دارستانێن چڕ ب ئاوازێن جودا یێن بالندەیێن کۆچبەر و ژیانا کێوی لەرزی دکرن. لێ بەلێ، گوهۆڕینێن نەچاڤەڕێکری د پلەیێن گەرمیێ یێن سالانە دا هاوسەنگییا ژینگەهێ تێکدایە، و هندەک جۆرێن لاواز نەچار کرینە کو بەرەڤ باکوری کۆچ بکەن. کاروان، کو دۆستەکێ سروشتی یێ لۆکالی یە، پرۆژەیەکێ چاندنا داران دەستپێکریە، ب مەرەما زڤڕاندنا گژوگیایێ ڕەسەن و هینانا دەنگێن کەیفخۆش یێن سروشتی بۆ ڤان نهالێن بێدەنگ.',
    level: 'B2',
    questions: [
      { id: 'q202-1', question: 'What alert have environmental scientists documented?', options: ['Air pollution', 'An alarming silence', 'Overpopulation', 'Water scarcity'], correctAnswer: 1 },
      { id: 'q202-2', question: 'Who initiated the reforestation project?', options: ['Alan', 'Karwan', 'Dara', 'Saman'], correctAnswer: 1 },
      { id: 'q202-3', question: 'What did these woodlands previously vibrate with?', options: ['The sounds of chainsaws', 'Heavy rainfall', 'Symphonies of migratory birds and wildlife', 'Wind power'], correctAnswer: 2 },
      { id: 'q202-4', question: 'Why did fragile species migrate north?', options: ['To find cities', 'Shifts in annual temperatures', 'To escape predators', 'Because of the ocean'], correctAnswer: 1 },
      { id: 'q202-5', question: 'What is Karwan\'s goal?', options: ['To build houses', 'To bring back natural sounds and restore native flora', 'To capture wild animals', 'To study rocks'], correctAnswer: 1 }
    ]
  },
  {
    id: 'story-203',
    title: 'Cognitive Dissonance in Modern Society',
    titleKurdish: 'سەرسۆڕیا مەعریفی د جڤاکێ نوی دا',
    content: 'Cognitive dissonance is a psychological phenomenon that occurs when an individual holds two contradictory beliefs simultaneously. In our hyper-connected modern era, this discomfort has become increasingly prevalent as humans struggle to reconcile their ethical values with their daily habits, particularly concerning fast-paced consumerism and digital surveillance. Addressing this paradox requires a profound willingness to question our subconscious behaviors, engage in self-reflection, and embrace intellectual humility in the face of complex world problems.',
    contentKurdish: 'دژبەرییا ناسینێ (سەرسۆڕیا مەعریفی) تشتەکێ دەروونی یە کو دەمێ چێدبیت دەما مرۆڤ دوو باوەریێن دژبەیەک د ئێک کات دا هەلبگریت. د سەردەمێ مە یێ نوی یێ هەڤبەستکری دا، ئەڤ بێزارکەرە گەلەک زێدەتر بوویە چونکی مرۆڤ د ناڤبەرا پاراستنا بەهایێن خۆ یێن ئەخلاقی و رەفتارێن خۆ یێن رۆژانە دا دکوڵن، نەخاسمە د بابەتێ مەسرەفگەریا بلەز و چاودێریا دیجیتالی دا. چارەسەرکرنا ڤێ دژبەرییێ پێدڤی ب ئامادەباشیەکا مەزن هەیە بۆ پسیارکرن ژ رەفتارێن مە یێن ژبن هۆش دا، ئەنجامدانا خۆ-پێداچوونێ، و هەلگرتنا دلنزمییا رۆشنبیری د رووبەڕووبوونا کێشەیێن ئاڵۆز یێن جیهانێ دا.',
    level: 'C1',
    questions: [
      { id: 'q203-1', question: 'What is cognitive dissonance?', options: ['A speech impediment', 'A brain disease', 'Holding two contradictory beliefs simultaneously', 'A physical environment'], correctAnswer: 2 },
      { id: 'q203-2', question: 'When does this discomfort become prevalent?', options: ['In ancient times', 'In the hyper-connected modern era', 'In childhood only', 'When buying a car'], correctAnswer: 1 },
      { id: 'q203-3', question: 'What daily habits conflict with ethical values in this text?', options: ['Healthy eating and sleeping', 'Fast consumerism and digital surveillance', 'Studying and playing sports', 'Traveling and reading books'], correctAnswer: 1 },
      { id: 'q203-4', question: 'What is required to address this paradox?', options: ['Ignoring the problems', 'Changing physical appearance', 'Self-reflection and questioning subconscious behaviors', 'Increasing screen time'], correctAnswer: 2 },
      { id: 'q203-5', question: 'What type of humility is advocated?', options: ['Intellectual humility', 'Social humility', 'Physical humility', 'Spiritual humility'], correctAnswer: 0 }
    ]
  },
  {
    id: 'story-204',
    title: 'The Evolution of Language and Identity',
    titleKurdish: 'گەشەکرنا زمان و ناسنامەیێ',
    content: 'Language is not merely a static medium for transmitting information; rather, it is a dynamic, living entity that evolves alongside human history and defines social identity. When dialects interact through cultural exchange, lexical boundaries expand, enriching the linguistic landscape. In Kurdistan, the preservation of the Badini dialect represents a crucial act of heritage protection, as words possess historical memory. Safeguarding regional dialects ensures that the unique nuances of local perspectives are not swallowed by the waves of global homogenization.',
    contentKurdish: 'زمان تەنێ ئامرازەکێ جێگیر نینە بۆ ڤەگوهاستنا پێزانینان؛ بەلکو ئەو تشتەکێ داینامیکی و زیندی یە کو دگەل دیرۆکا مرۆڤایەتیێ گەشە دکەت و ناسنامەیا جڤاکی دیار دکەت. دەما دیالێکت ب رێکا ئاڵوگۆڕا کلتووری کار تێکرنێ دکەن، سنوورێن زمانڤانی بەرفەهـ دبن و بەژن و بالا زمان زەنگین دکەن. ل کوردستانێ، پاراستنا دیالێکتا بادینی نیشانەکا فەرە بۆ پاراستنا کەلەپوورێ نەتەوەیی، چونکی پەیڤ ژ یادگەها دیرۆکی پێکدهێن. پاراستنا دیالێکتێن دەڤەری گەرەنتی دکەت کو جیاوازیێن نایاب یێن دۆست جڤاکی د بن شەپۆلێن جیهانبوونێ دا بەرزە نەبن.',
    level: 'C1',
    questions: [
      { id: 'q204-1', question: 'How is language characterized in this text?', options: ['As a biological function', 'As a static medium', 'As a dynamic, living entity', 'As a mathematical code'], correctAnswer: 2 },
      { id: 'q204-2', question: 'What happens when dialects interact?', options: ['They slowly disappear', 'Lexical boundaries expand', 'They cause severe confusion', 'They stop evolving'], correctAnswer: 1 },
      { id: 'q204-3', question: 'What does the preservation of Badini represent?', options: ['A legal requirement', 'An economic necessity', 'Crucial act of heritage protection', 'A recent trend'], correctAnswer: 2 },
      { id: 'q204-4', question: 'What do words possess according to the story?', options: ['Magical qualities', 'Physical weight', 'Historical memory', 'No relation to identity'], correctAnswer: 2 },
      { id: 'q204-5', question: 'What danger does global homogenization pose to regional dialects?', options: ['Swallowing unique nuances of local perspectives', 'Increasing spelling difficulties', 'Causing computer translate errors', 'Overpopulating words'], correctAnswer: 0 }
    ]
  },
  {
    id: 'story-205',
    title: 'The Philosophical Paradigm of Free Will',
    titleKurdish: 'چوارچۆڤێ فەلسەفی یێ ئیرادەیا ئازاد',
    content: 'For millennia, philosophers have debated whether human agency operates under absolute determinism or possesses genuine free will. Proponents of biological determinism argue that our neurochemical substrates and evolutionary trajectories dictate all human decisions, rendering independent choice an elaborate illusion. Conversely, existentialists assert that humans are intrinsically condemned to be free, bearing complete moral responsibility for their subjective actions. This intellectual deadlock continues to underpin modern judicial philosophy, challenge technological frameworks, and provoke deep introspective inquiries into the true nature of human consciousness.',
    contentKurdish: 'بۆ هزاران سالان، فەیلەسۆفان گەنگەشە ل سەر وێ چەندێ کرینە کا بریارا مرۆڤی د بن جێگیربونا رەها (Determinism) دا کار دکەت یان خودان ئیرادەیەکا ئازاد یا راستەقینەیە. لایەنگرێن جێگیربوونا بایۆلۆژی ل سەر وێ چەندێ دکۆڵن کو نەخشەیێن مە یێن دمار-کیمیایی و گەشەسەندنا مە کار تێکرنێ ل سەر بریارێن مرۆڤی دکەن، و بریاردانا سەربەخۆ دکەنە خەیالەکا دەستکرد. بەروڤاژی ڤێ چەندێ، مەزهەبێ فەلسەفیا هەبوونگەرایی (Existentialism) دبێژن مرۆڤ ب شێوەیەکێ بنەرەتی هاتینە مەحکومکرن کو د ئازاد بن، و بەرپرسیارییا ئەخلاقی یا رەها یا رەفتارێن وان یێن خودی دکەڤیتە سەر ستوویێ وان. ئەڤ بەربەستا هزری بەردەوامە د بنیاتنانا فەلسەفەیا دادوەری یا نوی دا، کێشەی دگەل سیستەمێن تەکنۆلۆژی دروست دکەت، و پسیارێن کوور یێن ناخی د رووبەرووبونا ڕاستییا هۆشیارییا مرۆڤی دا دروست دکەت.',
    level: 'C2',
    questions: [
      { id: 'q205-1', question: 'What internal debate has persisted for millennia?', options: ['Language versus art', 'Real free will versus absolute determinism', 'Theology versus economics', 'Mind versus body physical fitness'], correctAnswer: 1 },
      { id: 'q205-2', question: 'What do existentialists assert?', options: ['Humans have no choice', 'Humans are condemned to be free', 'Free will is defined by computers', 'Decisions are fully pre-determined'], correctAnswer: 1 },
      { id: 'q205-3', question: 'How do biological determinists view independent choice?', options: ['As a divine right', 'As an elaborate illusion', 'As a unique human organ', 'As an absolute certainty'], correctAnswer: 1 },
      { id: 'q205-4', question: 'What modern field is underpinned by this deadlock?', options: ['Modern judicial philosophy', 'Quantum computer engineering', 'Astrophysics research', 'Traditional agriculture'], correctAnswer: 0 },
      { id: 'q205-5', question: 'What evolutionary trajectories are cited by determinists?', options: ['Social interactions', 'Economic variables', 'Biological determinism', 'Space explorations'], correctAnswer: 2 }
    ]
  },
  {
    id: 'story-206',
    title: 'Artificial Intelligence and the Future of Consciousness',
    titleKurdish: 'زانیاریێ دەستکرد و پاشەرۆژا هۆشیاریێ',
    content: 'The rapid ascendancy of sophisticated neural networks has propelled humanity toward an unprecedented technological threshold, threatening to dissolve the boundary between simulated intellect and biological consciousness. As algorithms manifest capabilities that mimic higher cognitive functions—such as creative reasoning, artistic generation, and semantic comprehension—the definition of sentience is fiercely contested. Philosophers and physicists grapple with whether artificial substrates can ever harbor subjective experience or if they merely execute complex syntax devoid of objective meaning, highlighting the existential necessity of defining human distinctiveness.',
    contentKurdish: 'دەسهەلاتا بلەز یا تۆڕێن دماران یێن ئاڵۆز مرۆڤایەتی بەرەڤ دەستپێکەکا تەکنۆلۆژی یا بێ وێنە بریە، د مەترسیێ دا کو سنوورێ د ناڤبەرا عەقڵێ چاڤلێکری و هۆشیارییا بایۆلۆژی دا نەهێلیت. دەما ئەلگۆریتم شیانێن هاوشێوەی کارێن ناسینی یێن بلندر پیشان ددەن—وەک لۆژیکا داهێنەرانە، مانا هونەری، و تێگەهشتنا زمانڤانی—پێناسا هۆشیاربوونێ ب دژواری دکەڤیتە بەر مشتومڕان. فەیلەسۆف و فیزیاناس بەرهەڤ دبن بۆ وێ چەندێ کا ئایا کارتێن دەستکرد دێ چ جاران بنەمایێ ئەزمونا خودی ب خودان کەن یانژی تەنێ یاسایێن ئاڵۆز یێن زمانڤانی جێبەجێ دکەن بێی کو چ واتا هەبیت، کو ئەڤە گرنگیا هەبوونا پێناسا جوداهییا مروڤی دیار دکەت.',
    level: 'C2',
    questions: [
      { id: 'q206-1', question: 'What has the rapid ascendancy of neural networks threatened to dissolve?', options: ['Human physical strength', 'Scientific journals', 'The boundary between simulated intellect and biological consciousness', 'Global electrical grid system'], correctAnswer: 2 },
      { id: 'q206-2', question: 'What cognitive functions can modern algorithms mimic?', options: ['Digestive systems', 'Atmospheric pressures', 'Creative reasoning, artistic generation, and semantic comprehension', 'Volcanic eruptions'], correctAnswer: 2 },
      { id: 'q206-3', question: 'How is the definition of sentience described here?', options: ['Fiercely contested', 'Universally accepted', 'Simple to calculate', 'Completely irrelevant'], correctAnswer: 0 },
      { id: 'q206-4', question: 'What do algorithms execute under syntax-only theories?', options: ['Mechanical movements', 'Physical computations', 'Complex syntax devoid of objective meaning', 'Emotional expressions'], correctAnswer: 2 },
      { id: 'q206-5', question: 'What existential necessity is highlighted?', options: ['Designing faster processors', 'Defining human distinctiveness', 'Replacing physical jobs', 'Eliminating old algorithms'], correctAnswer: 1 }
    ]
  }
];
