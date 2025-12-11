import { useState, useEffect, useRef } from 'react'
import './ChatBot.css'

const faqData = {
  lv: {
    welcome: 'Sveiki! Laipni lūdzam Asnates JSK! Es esmu jūsu atbalsta asistents. Kā es varu jums palīdzēt?',
    greeting: 'Labdien! Kā es varu jums palīdzēt šodien?',
    headerTitle: 'Atbalsta asistents',
    headerSubtitle: 'Mēs atbildēsim tūlīt',
    inputPlaceholder: 'Rakstiet savu jautājumu...',
    greetings: {
      hello: 'Labdien! Kā es varu jums palīdzēt šodien?',
      hi: 'Sveiki! Kā es varu jums palīdzēt?',
      hey: 'Sveiki! Kā es varu jums palīdzēt?'
    },
    responses: {
      thanks: 'Liels paldies! Ja jums ir vēl kādi jautājumi, esmu šeit, lai palīdzētu. Veiksmi jūsu jāšanas ceļojumā!',
      thankYou: 'Liels paldies! Ja jums ir vēl kādi jautājumi, esmu šeit, lai palīdzētu. Veiksmi jūsu jāšanas ceļojumā!',
      okay: 'Lieliski! Ja jums ir vēl kādi jautājumi par Asnates JSK, droši jautājiet. Esmu šeit, lai palīdzētu.',
      ok: 'Lieliski! Ja jums ir vēl kādi jautājumi par Asnates JSK, droši jautājiet. Esmu šeit, lai palīdzētu.',
      yes: 'Lieliski! Kā es varu jums tālāk palīdzēt?',
      no: 'Saprotu. Ja jums būs jautājumi, esmu šeit, lai palīdzētu.'
    },
    questions: [
      {
        id: 1,
        question: 'Kā es varu reģistrēties uz nodarbībām?',
        answer: 'Jūs varat reģistrēties uz nodarbībām, aizpildot rezervācijas formu mūsu mājaslapā vai sazinoties ar mums pa tālruni. Mēs ar prieku palīdzēsim jums izvēlēties piemērotāko laiku un nodarbības veidu.',
        keywords: ['reģistrēties', 'nodarbības', 'rezervācija', 'reģistrācija', 'pieteikties']
      },
      {
        id: 2,
        question: 'Kādi ir nodarbību cenas?',
        answer: 'Ātrā kopsavilkuma cenas (pilnais cenrādis pakalpojumu sadaļā):\n\n• Treniņi: grupas 25 € / 1h, 15 € / 30min; individuāli 45 € / 1h, 25 € / 30min.\n• Izjādes/ekskursijas: iepazīšanās 5–10 €; pastaiga līdz jūrai 20 €; grupas izjāde 30 € / 1h (20 € / 30min); individuāla 45 € / 1h (25 € / 30min); pajūgs 60 € / 1h (40 € / 30min).\n• Fotosesijas: Nr.1 50 €; Nr.2 40 €; 2 zirgi 85/75 €; 3 zirgi 115/105 €; Monta Zile 130/80 €; amatieris 50/30 €.\n• Jātnieka svara limits 100 kg. Detalizēti jautājumi un rezervācijas: +371 28352881.',
        keywords: ['cena', 'cenas', 'cenu', 'maksa', 'maksājums', 'cik maksā', 'cik maksā', 'cenu saraksts']
      },
      {
        id: 9,
        question: 'Kas ir Asnates JSK?',
        answer: 'Asnates JSK (Asnates Jātnieku Sporta Klubs) ir moderns jāšanas sporta centrs, kas atrodas Ventspils novada Vārves pagastā, Glužos. Mēs piedāvājam pilnvērtīgu jāšanas izglītību bērniem un pieaugušajiem, apvienojot Eiropas līmeņa infrastruktūru, pieredzējušus trenerus un individuālu pieeju katram jātniekam. Mūsu mērķis ir attīstīt gan iesācējus, gan profesionālus sportistus, veidojot drošu un atbalstošu vidi visiem zirgu un jāšanas mīļotājiem.',
        keywords: ['kas ir', 'kas ir asnates', 'asnates jsk', 'par skolu', 'par mums', 'about', 'hakkında', 'okul hakkında', 'who is', 'kas ir asnates jsk']
      },
      {
        id: 10,
        question: 'Kā es varu iegūt jāšanas ekipamentu?',
        answer: 'Mēs piedāvājam ekipamenta nomu mūsu skolā. Mums ir pieejami drošības cepures, zābaki, biksītes un citi nepieciešamie priekšmeti. Jūs varat iznomāt ekipamentu tieši nodarbību laikā. Lūdzu, informējiet mūs iepriekš, ja jums nepieciešams ekipaments, lai mēs varētu to sagatavot. Mēs arī varam ieteikt, kur iegādāties savu ekipamentu, ja vēlaties.',
        keywords: ['ekipaments', 'ekipamentu', 'cepure', 'zābaki', 'biksītes', 'aprīkojums', 'kā iegūt', 'kur iegādāties', 'ekipamenta noma', 'iznomāt ekipamentu']
      },
      {
        id: 3,
        question: 'Vai es varu sākt, ja man nav pieredzes?',
        answer: 'Protams! Mēs pieņemam dalībniekus ar jebkādu pieredzes līmeni - no pilnīgiem iesācējiem līdz pieredzējušiem jātniekiem. Mūsu kvalificētie treneri pielāgos nodarbības jūsu prasmju līmenim un nodrošinās drošu un patīkamu mācību procesu.',
        keywords: ['iesācējs', 'pieredze', 'sākt', 'jauns', 'pirmo reizi', 'nav pieredzes']
      },
      {
        id: 4,
        question: 'Kāda vecuma bērni var sākt mācīties?',
        answer: 'Mēs pieņemam bērnus no 5 gadu vecuma. Mums ir īpašas nodarbības mazākajiem jātniekiem ar pieredzējušiem treneriem un piemērotiem zirgiem. Visas nodarbības notiek drošā vidē ar visu nepieciešamo aprīkojumu.',
        keywords: ['vecums', 'bērni', 'bērns', 'cik vecs', 'mazs', 'jauns bērns']
      },
      {
        id: 5,
        question: 'Kādi ir darba laiki?',
        answer: 'Mēs strādājam visu nedēļu. Darba laiki var atšķirties atkarībā no sezonas. Lūdzu, sazinieties ar mums, lai uzzinātu precīzus darba laikus un pieejamos laikus nodarbībām.',
        keywords: ['laiks', 'darba laiki', 'kad', 'atvērts', 'darba stundas', 'laiks']
      },
      {
        id: 7,
        question: 'Kā es varu sazināties ar jums?',
        answer: 'Jūs varat sazināties ar mums pa tālruni, e-pastu vai aizpildot kontaktu formu mūsu mājaslapā. Mēs atbildēsim jums pēc iespējas ātrāk. Jūs varat arī apmeklēt mūsu skolu un runāt ar mums tieši.',
        keywords: ['kontakti', 'sazināties', 'tālrunis', 'e-pasts', 'adrese', 'kur atrast']
      },
      {
        id: 8,
        question: 'Vai notiek sacensības?',
        answer: 'Jā, mūsu skolā regulāri notiek treniņsacensības un mēs piedalāmies arī ārējās sacensībās. Mūsu sportisti regulāri sasniedz izcilus rezultātus. Informāciju par gaidāmajām sacensībām varat atrast mūsu mājaslapā vai sazinoties ar mums.',
        keywords: ['sacensības', 'sacīkstes', 'treniņsacensības', 'sporta', 'rezultāti']
      },
      {
        id: 11,
        question: 'Kādi pakalpojumi ir pieejami?',
        answer: 'Mēs piedāvājam četrus galvenos pakalpojumus:\n\n1. Zirgu uzturēšana - Pilnvērtīga barošana, ikdienas pastaigas, solārijs, pakaiši un individuāla aprūpe modernās stallēs.\n\n2. Jāšanas treniņi - Individuālas un grupu nodarbības bērniem un pieaugušajiem, konkūra programma un droša iepazīšanās ar zirgiem.\n\n3. Pasākumi un ekskursijas - Korpozīciju programmas, ekskursijas pa kompleksu, dāvanu kartes un sezonāli piedzīvojumi visai ģimenei.\n\n4. Fotosesija - Profesionāla fotosesija ar zirgiem un jātniekiem. Individuālas un ģimenes fotosesijas, komerciālie projekti un portreti.\n\nVisi pakalpojumi atbilst Eiropas drošības un aprūpes standartiem ar sertificētiem treneriem.',
        keywords: ['pakalpojumi', 'pakalpojums', 'hizmetler', 'services', 'kādi pakalpojumi', 'kas ir pieejams', 'ko piedāvājat']
      },
      {
        id: 12,
        question: 'Kur atrodas Asnates JSK?',
        answer: 'Asnates JSK atrodas Ventspils novada Vārves pagastā, Glužos. Mūsu adrese ir pieejama kontaktu sadaļā mūsu mājaslapā. Lūdzu, sazinieties ar mums, lai uzzinātu precīzu adresi un kā mūs atrast.',
        keywords: ['kur', 'adrese', 'vieta', 'location', 'kur atrodas', 'adrese', 'kur atrast', 'where', 'address']
      },
      {
        id: 13,
        question: 'Vai ir pieejama autostāvvieta?',
        answer: 'Jā, mums ir pieejama autostāvvieta mūsu kompleksā. Lūdzu, informējiet mūs, ja plānojat ierasties ar automašīnu, lai mēs varētu nodrošināt vietu.',
        keywords: ['autostāvvieta', 'parking', 'stāvvieta', 'mašīna', 'auto', 'parking', 'parking lot']
      }
    ],
    noMatch: 'Piedodiet, es nevaru atbildēt uz šo jautājumu. Lūdzu, sazinieties ar mums tieši, un mēs ar prieku palīdzēsim jums.',
    contact: 'Sazinieties ar mums:',
    quickReplies: [
      'Kas ir Asnates JSK?',
      'Kādi pakalpojumi ir pieejami?',
      'Kā reģistrēties?',
      'Kādas ir cenas?'
    ]
  },
  en: {
    welcome: 'Hello! Welcome to Asnates JSK! I am your support assistant. How can I help you?',
    greeting: 'Good day! How can I help you today?',
    headerTitle: 'Support Assistant',
    headerSubtitle: 'We will reply immediately',
    inputPlaceholder: 'Type your question...',
    greetings: {
      hello: 'Hello! How can I help you today?',
      hi: 'Hi! How can I help you?',
      hey: 'Hey! How can I help you?'
    },
    responses: {
      thanks: 'Thank you very much! If you have any more questions, I\'m here to help. Good luck on your riding journey!',
      thankYou: 'Thank you very much! If you have any more questions, I\'m here to help. Good luck on your riding journey!',
      okay: 'Great! If you have any more questions about Asnates JSK, feel free to ask. I\'m here to help.',
      ok: 'Great! If you have any more questions about Asnates JSK, feel free to ask. I\'m here to help.',
      yes: 'Great! How can I help you further?',
      no: 'I understand. If you have any questions, I\'m here to help.'
    },
    questions: [
      {
        id: 1,
        question: 'How can I register for lessons?',
        answer: 'You can register for lessons by filling out the booking form on our website or contacting us by phone. We will be happy to help you choose the most suitable time and type of lesson.',
        keywords: ['register', 'registration', 'lessons', 'booking', 'sign up', 'enroll']
      },
      {
        id: 2,
        question: 'What are the lesson prices?',
        answer: 'Quick price snapshot (full table in Services):\n\n• Training: group €25 / 1h, €15 / 30min; private €45 / 1h, €25 / 30min.\n• Rides / tours: intro €5–10; lead walk to the sea €20; group ride €30 / 1h (€20 / 30min); private ride €45 / 1h (€25 / 30min); carriage €60 / 1h (€40 / 30min).\n• Photoshoots: No.1 €50; No.2 €40; 2 horses €85/75; 3 horses €115/105; Monta Zile €130/80; amateur €50/30.\n• Rider weight limit 100 kg. For details and bookings: +371 28352881.',
        keywords: ['price', 'prices', 'cost', 'payment', 'fee', 'how much', 'pricing']
      },
      {
        id: 9,
        question: 'Who is Asnates JSK?',
        answer: 'Asnates JSK (Asnates Equestrian Sports Club) is a modern equestrian sports center located in Gluži, Vārves parish, Ventspils region. We offer comprehensive equestrian education for children and adults, combining European-level infrastructure, experienced trainers, and an individual approach to each rider. Our goal is to develop both beginners and professional athletes, creating a safe and supportive environment for all horse and riding enthusiasts.',
        keywords: ['who is', 'who is asnates', 'asnates jsk', 'about school', 'about us', 'what is asnates', 'who are you']
      },
      {
        id: 10,
        question: 'How can I get riding equipment?',
        answer: 'We offer equipment rental at our school. We have safety helmets, boots, breeches, and other necessary items available. You can rent equipment directly during lessons. Please let us know in advance if you need equipment so we can prepare it. We can also recommend where to purchase your own equipment if you wish.',
        keywords: ['equipment', 'gear', 'helmet', 'boots', 'breeches', 'how to get', 'where to buy', 'equipment rental', 'rent equipment']
      },
      {
        id: 3,
        question: 'Can I start if I have no experience?',
        answer: 'Of course! We accept participants with any level of experience - from complete beginners to experienced riders. Our qualified trainers will adapt the lessons to your skill level and ensure a safe and enjoyable learning process.',
        keywords: ['beginner', 'experience', 'start', 'new', 'first time', 'no experience']
      },
      {
        id: 4,
        question: 'What age can children start learning?',
        answer: 'We accept children from 5 years of age. We have special lessons for the youngest riders with experienced trainers and suitable horses. All lessons take place in a safe environment with all necessary equipment.',
        keywords: ['age', 'children', 'child', 'how old', 'young', 'kids']
      },
      {
        id: 5,
        question: 'What are the working hours?',
        answer: 'We work all week. Working hours may vary depending on the season. Please contact us to find out the exact working hours and available times for lessons.',
        keywords: ['hours', 'working hours', 'when', 'open', 'hours', 'time']
      },
      {
        id: 7,
        question: 'How can I contact you?',
        answer: 'You can contact us by phone, email or by filling out the contact form on our website. We will respond to you as soon as possible. You can also visit our school and talk to us directly.',
        keywords: ['contact', 'phone', 'email', 'address', 'where', 'reach']
      },
      {
        id: 8,
        question: 'Do competitions take place?',
        answer: 'Yes, our school regularly hosts training competitions and we also participate in external competitions. Our athletes regularly achieve excellent results. Information about upcoming competitions can be found on our website or by contacting us.',
        keywords: ['competitions', 'competition', 'training', 'sports', 'results']
      },
      {
        id: 11,
        question: 'What services are available?',
        answer: 'We offer four main services:\n\n1. Horse boarding - Complete feeding plan, daily turnout, solarium, bedding, and tailored care in modern stables.\n\n2. Riding lessons - Individual and group sessions for children and adults, show-jumping programmes, and a safe introduction to horses.\n\n3. Events & tours - Corporate programmes, guided tours, gift cards, and seasonal experiences for the whole family.\n\n4. Photoshoot - Professional photoshoots with horses and riders. Individual and family sessions, commercial projects, and portraits.\n\nAll services meet European safety and care standards with accredited trainers.',
        keywords: ['services', 'service', 'what services', 'what do you offer', 'available services', 'pakalpojumi']
      },
      {
        id: 12,
        question: 'Where is Asnates JSK located?',
        answer: 'Asnates JSK is located in Gluži, Vārves parish, Ventspils region. Our address is available in the contacts section of our website. Please contact us to find out the exact address and how to find us.',
        keywords: ['where', 'address', 'location', 'where is', 'address', 'how to find', 'location']
      },
      {
        id: 13,
        question: 'Is parking available?',
        answer: 'Yes, we have parking available at our complex. Please let us know if you plan to arrive by car so we can ensure a space.',
        keywords: ['parking', 'car', 'vehicle', 'parking lot', 'parking space']
      }
    ],
    noMatch: 'Sorry, I cannot answer this question. Please contact us directly, and we will be happy to help you.',
    contact: 'Contact us:',
    quickReplies: [
      'Who is Asnates JSK?',
      'What services are available?',
      'How to register?',
      'What are the prices?'
    ]
  },
  ru: {
    welcome: 'Здравствуйте! Добро пожаловать в Asnates JSK! Я ваш помощник поддержки. Как я могу вам помочь?',
    greeting: 'Добрый день! Как я могу вам помочь сегодня?',
    headerTitle: 'Помощник поддержки',
    headerSubtitle: 'Мы ответим сразу',
    inputPlaceholder: 'Напишите ваш вопрос...',
    greetings: {
      hello: 'Здравствуйте! Как я могу вам помочь сегодня?',
      hi: 'Привет! Как я могу вам помочь?',
      hey: 'Привет! Как я могу вам помочь?'
    },
    responses: {
      thanks: 'Большое спасибо! Если у вас есть еще вопросы, я здесь, чтобы помочь. Удачи в вашем путешествии верховой езды!',
      thankYou: 'Большое спасибо! Если у вас есть еще вопросы, я здесь, чтобы помочь. Удачи в вашем путешествии верховой езды!',
      okay: 'Отлично! Если у вас есть еще вопросы о Asnates JSK, не стесняйтесь спрашивать. Я здесь, чтобы помочь.',
      ok: 'Отлично! Если у вас есть еще вопросы о Asnates JSK, не стесняйтесь спрашивать. Я здесь, чтобы помочь.',
      yes: 'Отлично! Чем еще я могу вам помочь?',
      no: 'Понятно. Если у вас будут вопросы, я здесь, чтобы помочь.'
    },
    questions: [
      {
        id: 1,
        question: 'Как я могу записаться на занятия?',
        answer: 'Вы можете записаться на занятия, заполнив форму бронирования на нашем сайте или связавшись с нами по телефону. Мы с радостью поможем вам выбрать наиболее подходящее время и тип занятия.',
        keywords: ['записаться', 'регистрация', 'занятия', 'бронирование', 'запись']
      },
      {
        id: 2,
        question: 'Какие цены на занятия?',
        answer: 'Кратко по ценам (полный прайс в разделе услуг):\n\n• Тренировки: группа 25 € / 1ч, 15 € / 30мин; индивидуально 45 € / 1ч, 25 € / 30мин.\n• Прогулки / экскурсии: знакомство 5–10 €; до моря в поводу 20 €; групповая выездка 30 € / 1ч (20 € / 30мин); индивидуальная 45 € / 1ч (25 € / 30мин); экипаж 60 € / 1ч (40 € / 30мин).\n• Фотосессии: №1 50 €; №2 40 €; 2 лошади 85/75 €; 3 лошади 115/105 €; Monta Zile 130/80 €; любитель 50/30 €.\n• Лимит веса всадника 100 кг. Детали и запись: +371 28352881.',
        keywords: ['цена', 'цены', 'стоимость', 'оплата', 'сколько стоит', 'прайс']
      },
      {
        id: 9,
        question: 'Кто такой Asnates JSK?',
        answer: 'Asnates JSK (Asnates Jātnieku Sporta Klubs) — современный центр конного спорта, расположенный в Глужи, волость Варве, Вентспилсский край. Мы предлагаем комплексное обучение верховой езде для детей и взрослых, сочетая инфраструктуру европейского уровня, опытных тренеров и индивидуальный подход к каждому всаднику. Наша цель — развивать как начинающих, так и профессиональных спортсменов, создавая безопасную и поддерживающую среду для всех любителей лошадей и верховой езды.',
        keywords: ['кто такой', 'кто такой asnates', 'asnates jsk', 'о школе', 'о нас', 'что такое asnates', 'кто вы']
      },
      {
        id: 10,
        question: 'Как я могу получить экипировку для верховой езды?',
        answer: 'Мы предлагаем аренду экипировки в нашей школе. У нас есть защитные шлемы, сапоги, бриджи и другие необходимые предметы. Вы можете арендовать экипировку непосредственно во время занятий. Пожалуйста, сообщите нам заранее, если вам нужна экипировка, чтобы мы могли ее подготовить. Мы также можем порекомендовать, где приобрести собственную экипировку, если вы хотите.',
        keywords: ['экипировка', 'снаряжение', 'шлем', 'сапоги', 'бриджи', 'как получить', 'где купить', 'аренда экипировки', 'арендовать экипировку']
      },
      {
        id: 3,
        question: 'Могу ли я начать, если у меня нет опыта?',
        answer: 'Конечно! Мы принимаем участников с любым уровнем опыта - от полных новичков до опытных всадников. Наши квалифицированные тренеры адаптируют занятия к вашему уровню навыков и обеспечат безопасный и приятный процесс обучения.',
        keywords: ['новичок', 'опыт', 'начать', 'новый', 'впервые', 'без опыта']
      },
      {
        id: 4,
        question: 'С какого возраста дети могут начать обучение?',
        answer: 'Мы принимаем детей с 5 лет. У нас есть специальные занятия для самых юных всадников с опытными тренерами и подходящими лошадьми. Все занятия проходят в безопасной обстановке со всем необходимым оборудованием.',
        keywords: ['возраст', 'дети', 'ребенок', 'сколько лет', 'маленький', 'дети']
      },
      {
        id: 5,
        question: 'Какие рабочие часы?',
        answer: 'Мы работаем всю неделю. Рабочие часы могут различаться в зависимости от сезона. Пожалуйста, свяжитесь с нами, чтобы узнать точные рабочие часы и доступное время для занятий.',
        keywords: ['часы', 'рабочие часы', 'когда', 'открыто', 'время']
      },
      {
        id: 7,
        question: 'Как я могу с вами связаться?',
        answer: 'Вы можете связаться с нами по телефону, электронной почте или заполнив контактную форму на нашем сайте. Мы ответим вам как можно скорее. Вы также можете посетить нашу школу и поговорить с нами напрямую.',
        keywords: ['контакты', 'связаться', 'телефон', 'почта', 'адрес', 'где найти']
      },
      {
        id: 8,
        question: 'Проводятся ли соревнования?',
        answer: 'Да, в нашей школе регулярно проводятся тренировочные соревнования, и мы также участвуем во внешних соревнованиях. Наши спортсмены регулярно достигают отличных результатов. Информацию о предстоящих соревнованиях можно найти на нашем сайте или связавшись с нами.',
        keywords: ['соревнования', 'соревнование', 'тренировки', 'спорт', 'результаты']
      },
      {
        id: 11,
        question: 'Какие услуги доступны?',
        answer: 'Мы предлагаем четыре основных услуги:\n\n1. Содержание лошадей - Полноценное кормление, ежедневный выгул, солярий, подстилка и индивидуальный уход в современных конюшнях.\n\n2. Тренировки верховой езды - Индивидуальные и групповые занятия для детей и взрослых, тренировки по прыжкам и программа для начинающих.\n\n3. Мероприятия и экскурсии - Корпоративные программы, экскурсии по комплексу, подарочные сертификаты и сезонные мероприятия для всей семьи.\n\n4. Фотосессия - Профессиональная фотосессия с лошадьми и всадниками. Индивидуальные и семейные фотосессии, коммерческие проекты и портреты.\n\nВсе услуги соответствуют европейским стандартам безопасности и ухода с сертифицированными тренерами.',
        keywords: ['услуги', 'услуга', 'какие услуги', 'что вы предлагаете', 'доступные услуги', 'pakalpojumi']
      },
      {
        id: 12,
        question: 'Где находится Asnates JSK?',
        answer: 'Asnates JSK находится в Глужи, волость Варве, Вентспилсский край. Наш адрес доступен в разделе контактов на нашем сайте. Пожалуйста, свяжитесь с нами, чтобы узнать точный адрес и как нас найти.',
        keywords: ['где', 'адрес', 'место', 'location', 'где находится', 'адрес', 'как найти', 'where', 'address']
      },
      {
        id: 13,
        question: 'Есть ли парковка?',
        answer: 'Да, у нас есть парковка в нашем комплексе. Пожалуйста, сообщите нам, если вы планируете приехать на машине, чтобы мы могли обеспечить место.',
        keywords: ['парковка', 'машина', 'автомобиль', 'parking', 'parking lot']
      }
    ],
    noMatch: 'Извините, я не могу ответить на этот вопрос. Пожалуйста, свяжитесь с нами напрямую, и мы с радостью поможем вам.',
    contact: 'Свяжитесь с нами:',
    quickReplies: [
      'Кто такой Asnates JSK?',
      'Какие услуги доступны?',
      'Как записаться?',
      'Какие цены?'
    ]
  }
}

const serviceIntents = {
  lv: {
    photoshoot: {
      keywords: ['foto', 'fotoses', 'fotopiedz', 'photo'],
      answer:
        'Fotosesijas: Nr.1 (jūra+foto) 50 €; Nr.2 (pie jūras, mugurā) 40 €; 2 zirgi 85/75 €; 3 zirgi 115/105 €; papildu zirgs +30 € (4–7 zirgi); Monta Zile 130/80 €; amatieris 50/30 €. Rezervācijas: +371 28352881. Svara limits 100 kg.',
    },
    training: {
      keywords: ['treni', 'trenēj', 'lessons', 'nodarb'],
      answer:
        'Treniņi: grupas 25 € / 1h, 15 € / 30min; individuāli 45 € / 1h, 25 € / 30min. Sertificēts treneris, droša iepazīšanās ar zirgiem. Rezervācijas: +371 28352881.',
    },
    events: {
      keywords: ['pasāk', 'ekskurs', 'izjāde', 'ride', 'tour'],
      answer:
        'Pasākumi / ekskursijas: iepazīšanās 5–10 €; pastaiga līdz jūrai 20 €; grupas izjāde 30 € / 1h (20 € / 30min); individuāla 45 € / 1h (25 € / 30min); pajūgs 60 € / 1h (40 € / 30min); pajūgā līdz 4 pers 60 € / 1h (40 € / 30min). Svara limits 100 kg. Rezervācijas: +371 28352881.',
    },
    boarding: {
      keywords: ['pansija', 'uztur', 'stall', 'boarding'],
      answer:
        'Zirgu uzturēšana: pilna pansija (barošana, boksa uzkopšana, pastaigas, manēža) – cena pēc vienošanās. Pieejama arī izbraukuma noma pasākumiem. Sertificēta aprūpe; dāvanu kartes. Sazinieties: +371 28352881.',
    },
  },
  en: {
    photoshoot: {
      keywords: ['photo', 'photoshoot', 'shoot', 'foto'],
      answer:
        'Photoshoots: No.1 (sea ride + photos) €50; No.2 (beach + mounted) €40; 2 horses €85/75; 3 horses €115/105; extra horse +€30 (4–7 horses); Monta Zile €130/80; amateur €50/30. Booking: +371 28352881. Rider limit 100 kg.',
    },
    training: {
      keywords: ['train', 'lesson', 'class', 'coaching'],
      answer:
        'Training: group €25 / 1h, €15 / 30min; private €45 / 1h, €25 / 30min. Certified coach, safe intros. Booking: +371 28352881.',
    },
    events: {
      keywords: ['event', 'tour', 'excursion', 'ride', 'sea'],
      answer:
        'Events / rides: intro €5–10; lead walk to the sea €20; group ride €30 / 1h (€20 / 30min); private ride €45 / 1h (€25 / 30min); carriage €60 / 1h (€40 / 30min); carriage up to 4 ppl €60 / 1h (€40 / 30min). Weight limit 100 kg. Booking: +371 28352881.',
    },
    boarding: {
      keywords: ['boarding', 'stable', 'board', 'pension'],
      answer:
        'Horse boarding: full board (feeding, stall care, turnout, arena access) — price on request. Off-site horse/pony rental available. Certified care; gift cards. Contact: +371 28352881.',
    },
  },
  ru: {
    photoshoot: {
      keywords: ['фото', 'фотос', 'photoshoot'],
      answer:
        'Фотосессии: №1 (к морю + фото) 50 €; №2 (у моря + верхом) 40 €; 2 лошади 85/75 €; 3 лошади 115/105 €; доп. лошадь +30 € (4–7); Monta Zile 130/80 €; любитель 50/30 €. Бронь: +371 28352881. Лимит веса всадника 100 кг.',
    },
    training: {
      keywords: ['трен', 'занят', 'урок', 'lesson'],
      answer:
        'Тренировки: групповые 25 € / 1ч, 15 € / 30мин; индивидуальные 45 € / 1ч, 25 € / 30мин. Сертифицированный тренер, безопасное знакомство. Запись: +371 28352881.',
    },
    events: {
      keywords: ['экскурс', 'прогул', 'выезд', 'ride', 'event'],
      answer:
        'Мероприятия / прогулки: знакомство 5–10 €; до моря в поводу 20 €; групповая выездка 30 € / 1ч (20 € / 30мин); индивидуальная 45 € / 1ч (25 € / 30мин); экипаж 60 € / 1ч (40 € / 30мин); упряжка до 4 чел 60 € / 1ч (40 € / 30мин). Лимит веса 100 кг. Бронь: +371 28352881.',
    },
    boarding: {
      keywords: ['панс', 'конюш', 'boarding', 'содерж'],
      answer:
        'Содержание: полный пансион (кормление, уборка денника, выгул, манеж) — цена по договоренности. Выездная аренда лошадей/пони. Сертифицированный уход; подарочные карты. Связь: +371 28352881.',
    },
  },
}

function ChatBot({ selectedLanguage = 'lv' }) {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  const currentLang = faqData[selectedLanguage] || faqData.lv

  // Initialize with welcome message only (no localStorage)
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage = {
        id: Date.now(),
        text: currentLang.welcome,
        isBot: true,
        timestamp: new Date()
      }
      setMessages([welcomeMessage])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, selectedLanguage])

  useEffect(() => {
    if (isOpen) {
      scrollToBottom()
      setTimeout(() => {
        inputRef.current?.focus()
      }, 100)
    }
  }, [isOpen, messages, isTyping])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const findAnswer = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase().trim()
    const serviceLang = serviceIntents[selectedLanguage] || serviceIntents.lv

    // Service-intent matcher
    for (const serviceKey of Object.keys(serviceLang)) {
      const intent = serviceLang[serviceKey]
      const matched = intent.keywords.some((kw) => lowerMessage.includes(kw))
      if (matched) {
        return intent.answer
      }
    }
    
    // Check for greetings first
    if (currentLang.greetings) {
      if (lowerMessage === 'hello' || lowerMessage === 'hi' || lowerMessage === 'hey' || 
          lowerMessage === 'sveiki' || lowerMessage === 'labdien' || 
          lowerMessage === 'здравствуйте' || lowerMessage === 'привет' ||
          lowerMessage.startsWith('hello ') || lowerMessage.startsWith('hi ') ||
          lowerMessage.startsWith('hey ')) {
        return currentLang.greetings.hello || currentLang.greeting
      }
    }

    // Check for general responses
    if (currentLang.responses) {
      // Check for thanks variations
      if (lowerMessage.includes('thank') || lowerMessage.includes('paldies') || 
          lowerMessage.includes('спасибо') || lowerMessage.includes('teşekkür')) {
        return currentLang.responses.thanks || currentLang.responses.thankYou
      }
      // Check for okay variations
      if (lowerMessage === 'okay' || lowerMessage === 'ok' || 
          lowerMessage === 'labi' || lowerMessage === 'хорошо' || 
          lowerMessage === 'tamam' || lowerMessage === 'okej') {
        return currentLang.responses.okay || currentLang.responses.ok
      }
      // Check for yes
      if (lowerMessage === 'yes' || lowerMessage === 'jā' || 
          lowerMessage === 'да' || lowerMessage === 'evet' ||
          lowerMessage === 'yeah' || lowerMessage === 'yep') {
        return currentLang.responses.yes
      }
      // Check for no
      if (lowerMessage === 'no' || lowerMessage === 'nē' || 
          lowerMessage === 'нет' || lowerMessage === 'hayır' ||
          lowerMessage === 'nope') {
        return currentLang.responses.no
      }
    }
    
    // Check for exact matches first
    for (const q of currentLang.questions) {
      if (lowerMessage === q.question.toLowerCase()) {
        return q.answer
      }
    }

    // Check for keyword matches (prioritize by number of matched keywords)
    let bestMatch = null
    let maxMatches = 0
    
    for (const q of currentLang.questions) {
      const matchedKeywords = q.keywords.filter(keyword => 
        lowerMessage.includes(keyword.toLowerCase())
      )
      if (matchedKeywords.length > maxMatches) {
        maxMatches = matchedKeywords.length
        bestMatch = q.answer
      }
    }
    
    if (bestMatch) {
      return bestMatch
    }

    return null
  }

  // Function to format text with links and line breaks
  const formatMessage = (text) => {
    if (!text) return text
    
    const urlRegex = /(https?:\/\/[^\s]+)/g
    const parts = text.split(urlRegex)
    const result = []
    
    parts.forEach((part, index) => {
      if (part.match(urlRegex)) {
        result.push(
          <a
            key={`link-${index}`}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#d18d42', textDecoration: 'underline' }}
          >
            {part}
          </a>
        )
      } else {
        // Handle line breaks
        const lines = part.split('\n')
        lines.forEach((line, lineIndex) => {
          if (lineIndex > 0) {
            result.push(<br key={`br-${index}-${lineIndex}`} />)
          }
          if (line) {
            result.push(<span key={`text-${index}-${lineIndex}`}>{line}</span>)
          }
        })
      }
    })
    
    return result.length > 0 ? result : text
  }

  const handleSendMessage = (text = null) => {
    const messageText = text || inputValue.trim()
    if (!messageText) return

    const userMessage = {
      id: Date.now(),
      text: messageText,
      isBot: false,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate bot thinking with typing indicator
    const thinkingTime = Math.min(800, messageText.length * 50) // Dynamic delay based on message length
    
    setTimeout(() => {
      const answer = findAnswer(messageText)
      setIsTyping(false)
      
      setTimeout(() => {
        const botMessage = {
          id: Date.now() + 1,
          text: answer || currentLang.noMatch,
          isBot: true,
          timestamp: new Date()
        }
        setMessages(prev => [...prev, botMessage])
      }, 300)
    }, thinkingTime)
  }

  const handleQuickReply = (reply) => {
    handleSendMessage(reply)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {!isOpen && (
        <button
          className="chatbot__toggle"
          onClick={() => setIsOpen(true)}
          aria-label="Open chat"
          type="button"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="chatbot__notification"></span>
        </button>
      )}

      {isOpen && (
        <div className="chatbot__window">
          <div className="chatbot__header">
            <div className="chatbot__header-info">
              <div className="chatbot__avatar">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="12"
                    cy="7"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h3>{currentLang.headerTitle}</h3>
                <p>{currentLang.headerSubtitle}</p>
              </div>
            </div>
            <button
              className="chatbot__close"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              type="button"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="chatbot__messages">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`chatbot__message ${message.isBot ? 'chatbot__message--bot' : 'chatbot__message--user'}`}
              >
                <div className="chatbot__message-content">
                  {formatMessage(message.text)}
                </div>
                <div className="chatbot__message-time">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="chatbot__message chatbot__message--bot">
                <div className="chatbot__message-content chatbot__typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {messages.length === 1 && (
            <div className="chatbot__quick-replies">
              {currentLang.quickReplies.map((reply, index) => (
                <button
                  key={index}
                  className="chatbot__quick-reply"
                  onClick={() => handleQuickReply(reply)}
                  type="button"
                >
                  {reply}
                </button>
              ))}
            </div>
          )}

          <div className="chatbot__input-container">
            <input
              ref={inputRef}
              type="text"
              className="chatbot__input"
              placeholder={currentLang.inputPlaceholder}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button
              className="chatbot__send"
              onClick={() => handleSendMessage()}
              aria-label="Send message"
              type="button"
              disabled={!inputValue.trim()}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default ChatBot

