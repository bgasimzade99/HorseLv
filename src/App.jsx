import { useEffect, useRef, useState } from 'react'
import './App.css'
import heroSlideOne from './assets/29928c4a071cb4f74476e91a3e43fc85.jpg'
import heroSlideTwo from './assets/6dc6758e044489ee9d73b2f8deda4c35.jpg'
import heroSlideThree from './assets/c94173562472c9c29813b9cba7c8d8e2.jpg'

const heroSlides = [heroSlideOne, heroSlideTwo, heroSlideThree]
const translations = {
  lv: {
    logo: {
      title: 'Jauno Jātnieku',
      subtitle: 'Latvian Horses Skola',
    },
    languages: {
      lv: 'Latviešu',
      en: 'Angļu',
      ru: 'Krievu',
    },
    navigation: [
      { href: '#hero', label: 'Sākums' },
      { href: '#services', label: 'Pakalpojumi' },
      { href: '#about', label: 'Par mums' },
      { href: '#competitions', label: 'Sacensības' },
      { href: '#prices', label: 'Cenas' },
      { href: '#news', label: 'Jaunumi' },
      { href: '#contacts', label: 'Kontakti' },
    ],
    navCta: 'Pieteikties',
    hero: {
      eyebrow: 'Jauno Jātnieku skola',
      title: 'Vieta, kur cilvēki satiekas ar zirgiem',
      lead:
        'Mēs veidojam vidi profesionāļiem un iesācējiem: modernas stallis, treniņi ar pieredzējušiem treneriem un Eiropas līmeņa sacensības.',
      primaryCta: 'Pieteikties',
      secondaryCta: 'Uzzināt vairāk',
    },
    services: {
      heading: {
        eyebrow: 'Pakalpojumi',
        title: 'Viss cilvēka un zirga harmonijai',
        description:
          'Eiropas drošības un aprūpes standarti, sertificēti treneri un infrastruktūra nodarbībām visa gada garumā.',
      },
      cards: [
        {
          title: 'Zirgu uzturēšana',
          description:
            'No 345€ mēnesī: pilnvērtīga barošana, ikdienas pastaigas, solārijs, pakaiši un individuāla aprūpe modernās stallēs.',
          cta: 'Uzzināt vairāk',
        },
        {
          title: 'Jāšanas treniņi',
          description:
            'Individuālas un grupu nodarbības bērniem un pieaugušajiem, konkūra programma un droša iepazīšanās ar zirgiem.',
          cta: 'Uzzināt vairāk',
        },
        {
          title: 'Laukumu un manēžu īre',
          description:
            'Atklātie un slēgtie laukumi ar profesionālu segumu, apgaismojumu un infrastruktūru sacensību norisei.',
          cta: 'Uzzināt vairāk',
        },
        {
          title: 'Pasākumi un ekskursijas',
          description:
            'Korpozīciju programmas, ekskursijas pa kompleksu, dāvanu kartes un sezonāli piedzīvojumi visai ģimenei.',
          cta: 'Uzzināt vairāk',
        },
      ],
    },
    about: {
      eyebrow: 'Par mums',
      title: 'Mērķis — kļūt par vadošo jāšanas sporta centru Baltijā',
      body:
        'Mēs ticam, ka interese par jāšanas sportu sākas ar pirmo satikšanos. Tāpēc apvienojam pieredzējušus trenerus, rūpīgu aprūpi un draudzīgu atmosfēru, lai katrs jātnieks turpinātu attīstīties.',
      bullets: [
        'Nacionālā sporta bāze ar Eiropas standartiem',
        'Spēcīga treneru un partneru komanda',
        'Attīstām bērnu un jauniešu programmas',
        'Regulāras sacensības un treniņu nometnes',
      ],
      primaryCta: 'Sazināties',
      secondaryCta: 'Jaunumi',
      mediaCard: {
        eyebrow: 'Kopš 2001. gada',
        title: 'Vairāk nekā 120 absolventu',
        text: 'Mūsu audzēkņi kļūst par nacionālo un starptautisko čempionātu laureātiem.',
      },
    },
    competitions: {
      heading: {
        eyebrow: 'Sacensības',
        title: 'Gaidāmie starti un pasākumi',
        cta: 'Pieteikties',
      },
      timeline: [
        {
          date: '15.–16. novembris 2025',
          title: 'Ziemas kauss konkūrā — Fināls',
          description:
            'Manēža 35×60 m, atsevišķs iesildīšanās laukums 25×60 m. Pieteikšanās līdz 13.11., starts plkst. 09:00. Organizatoru komanda nodrošina augstāko sacensību kvalitāti.',
          cta: 'Uzzināt vairāk',
        },
        {
          date: '2025. gada decembris',
          title: 'Ziemas treniņnometne',
          description:
            'Intensīva nedēļa iejādes un konkūra disciplīnās – teorija, prakse un individuāli attīstības plāni.',
          cta: 'Uzzināt vairāk',
        },
        {
          date: '2026. gada janvāris',
          title: 'Jauno jātnieku kauss',
          description:
            'Startu sērija bērniem un jauniešiem, kas veido sacensību pieredzi un pārliecību arēnā.',
          cta: 'Uzzināt vairāk',
        },
      ],
    },
    prices: {
      heading: {
        eyebrow: 'Cenas',
        title: 'Izvēlieties sev piemērotāko programmu',
      },
      cards: [
        {
          title: 'Zirgu uzturēšana',
          price: 'no 345€ / mēnesī',
          perks: ['Barošana 3 reizes dienā', 'Ikdienas boksa uzkopšana', 'Pastaiga aplokā', 'Manēžu un lauku izmantošana'],
          cta: 'Pieteikties',
        },
        {
          title: 'Treniņi',
          price: 'no 30€ / nodarbība',
          perks: ['Iepazīšanās ar zirgu', 'Individuālās un grupu nodarbības', 'Sacensību sagatavošana', 'Elastīgs grafiks'],
          cta: 'Pieteikties',
        },
        {
          title: 'Dāvanu kartes',
          price: 'no 25€',
          perks: ['Der jebkuram pakalpojumam', 'Spēkā 12 mēnešus', 'Iespēja iegādāties tiešsaistē', 'Lieliska dāvana'],
          cta: 'Pasūtīt',
        },
      ],
    },
    news: {
      heading: {
        eyebrow: 'Jaunumi',
        title: 'Notikumi un sasniegumi skolā',
      },
      items: [
        {
          date: '29. aprīlis 2025',
          title: 'Lielā Talka 2025 Jauno jātnieku skolā',
          description:
            '26. aprīlī pulcējām brīvprātīgos un draugus, lai sakoptu teritoriju un pavadītu laiku dabā. Kopā paveicām lielisku darbu!',
          cta: 'Lasīt vairāk',
        },
        {
          date: '18. jūnijs 2023',
          title: 'Jauniešu kauss 2023 norisināsies jūnija beigās',
          description:
            'Drīzumā startē Jauniešu kausa sezona – sportisti gatavojas jaunām uzvarām un rekordiem.',
          cta: 'Lasīt vairāk',
        },
        {
          date: '15. jūnijs 2023',
          title: 'Elegance un komandas gars Iejādes festivālā',
          description:
            'Divu dienu garumā vērojām elegantus jātniekus dažādās grūtības pakāpēs – no vieglākajām programmām līdz Grand Prix.',
          cta: 'Lasīt vairāk',
        },
      ],
    },
    booking: {
      eyebrow: 'Pieteikties',
      title: 'Gatavi spert soli pretī sapnim?',
      description:
        'Pastāstiet mums par sevi un mērķiem – palīdzēsim izvēlēties ideālu programmu, sākot ar pirmajiem soļiem līdz profesionālai sagatavošanai.',
      form: {
        nameLabel: 'Vārds',
        namePlaceholder: 'Marija Ivanova',
        phoneLabel: 'Tālrunis',
        phonePlaceholder: '+371 28 677 177',
        serviceLabel: 'Vēlamais pakalpojums',
        servicePlaceholder: 'Izvēlieties pakalpojumu',
        services: [
          { value: 'boarding', label: 'Zirgu uzturēšana' },
          { value: 'training', label: 'Treniņi' },
          { value: 'competitions', label: 'Sacensības' },
          { value: 'events', label: 'Pasākumi' },
        ],
        messageLabel: 'Komentārs',
        messagePlaceholder: 'Aprakstiet savas gaidas',
        submit: 'Nosūtīt',
        disclaimer:
          'Nospiežot “Nosūtīt”, jūs piekrītat personas datu apstrādei un privātuma politikas noteikumiem.',
      },
      highlight: {
        eyebrow: 'Korpozīciju pasākumi',
        title: 'Izbraukuma komandas saliedēšanās',
        text: 'Ieniriet zirgu pasaulē un radiet neaizmirstamu pieredzi savai komandai.',
      },
    },
    footer: {
      intro:
        'Laipni lūdzam Jauno Jātnieku skolā – vietā, kur ikviens var atklāt mīlestību pret zirgiem un attīstīt sportiskās prasmes.',
      contacts: {
        title: 'Kontakti',
        items: ['info@latvianhorses.lv', '+371 28 677 177', '“Zustrenes”, Inčukalns, LV-2141, Latvija'],
      },
      services: {
        title: 'Pakalpojumi',
        items: [
          { label: 'Zirgu uzturēšana', href: '#services' },
          { label: 'Jāšanas treniņi', href: '#services' },
          { label: 'Laukumu īre', href: '#services' },
          { label: 'Dāvanu kartes', href: '#booking' },
        ],
      },
      billing: {
        title: 'Rēķinu dati',
        items: ['Reģ. Nr.: 40008114442', 'AS Swedbank', 'SWIFT: HABALV22', 'IBAN: LV19HABA0551017883565'],
      },
      bottom: {
        rights: '© 2025 Jauno Jātnieku Skola. Visas tiesības aizsargātas.',
        privacy: 'Privātuma politika',
        terms: 'Lietošanas noteikumi',
      },
    },
  },
  en: {
    logo: {
      title: 'Jauno Jātnieku',
      subtitle: 'Latvian Horses School',
    },
    languages: {
      lv: 'Latvian',
      en: 'English',
      ru: 'Russian',
    },
    navigation: [
      { href: '#hero', label: 'Home' },
      { href: '#services', label: 'Services' },
      { href: '#about', label: 'About' },
      { href: '#competitions', label: 'Competitions' },
      { href: '#prices', label: 'Prices' },
      { href: '#news', label: 'News' },
      { href: '#contacts', label: 'Contacts' },
    ],
    navCta: 'Sign up',
    hero: {
      eyebrow: 'School of Young Riders',
      title: 'Where people meet horses',
      lead:
        'We create a space for professionals and beginners alike: modern stables, coaching by experienced trainers, and competitions of European standard.',
      primaryCta: 'Book now',
      secondaryCta: 'Discover more',
    },
    services: {
      heading: {
        eyebrow: 'Services',
        title: 'Everything for rider and horse harmony',
        description:
          'European safety and care standards, accredited trainers, and year-round infrastructure for equestrian activities.',
      },
      cards: [
        {
          title: 'Horse boarding',
          description:
            'From €345 per month: complete feeding plan, daily turnout, solarium, bedding, and tailored care in modern stables.',
          cta: 'Learn more',
        },
        {
          title: 'Riding lessons',
          description:
            'Individual and group sessions for children and adults, show-jumping programmes, and a safe introduction to horses.',
          cta: 'Learn more',
        },
        {
          title: 'Arena & field rental',
          description:
            'Indoor and outdoor arenas with professional footing, lighting, and facilities ready for competition-level events.',
          cta: 'Learn more',
        },
        {
          title: 'Events & tours',
          description:
            'Corporate programmes, guided tours, gift cards, and seasonal experiences for the whole family.',
          cta: 'Learn more',
        },
      ],
    },
    about: {
      eyebrow: 'About us',
      title: 'Aiming to be the leading equestrian centre in the Baltics',
      body:
        'We believe passion for riding begins with the first encounter. We unite expert coaches, attentive care, and a welcoming atmosphere so every rider can progress with confidence.',
      bullets: [
        'National sports base with European standards',
        'Experienced coaches and trusted partners',
        'Strong focus on youth and junior programmes',
        'Regular competitions and training camps',
      ],
      primaryCta: 'Contact us',
      secondaryCta: 'News',
      mediaCard: {
        eyebrow: 'Since 2001',
        title: '120+ graduates',
        text: 'Our riders become medalists at national and international championships.',
      },
    },
    competitions: {
      heading: {
        eyebrow: 'Competitions',
        title: 'Upcoming events and highlights',
        cta: 'Apply now',
      },
      timeline: [
        {
          date: '15–16 November 2025',
          title: 'Winter Cup Show Jumping — Final',
          description:
            '35×60 m indoor arena with a dedicated 25×60 m warm-up. Entries until 13.11, start 09:00. The organising team ensures top-level competition experience.',
          cta: 'Learn more',
        },
        {
          date: 'December 2025',
          title: 'Winter training camp',
          description:
            'A week of intensive dressage and show-jumping practice, theory sessions, and individual development plans.',
          cta: 'Learn more',
        },
        {
          date: 'January 2026',
          title: 'Young Riders Cup',
          description:
            'Competition series for children and teens designed to build confidence and experience in the arena.',
          cta: 'Learn more',
        },
      ],
    },
    prices: {
      heading: {
        eyebrow: 'Pricing',
        title: 'Choose the programme that suits you best',
      },
      cards: [
        {
          title: 'Horse boarding',
          price: 'from €345 / month',
          perks: ['Feeding 3 times per day', 'Daily stall cleaning', 'Turnout in paddock', 'Use of arenas and fields'],
          cta: 'Apply now',
        },
        {
          title: 'Training',
          price: 'from €30 / session',
          perks: ['Intro to horses and ponies', 'Private and group lessons', 'Competition preparation', 'Flexible schedules'],
          cta: 'Book now',
        },
        {
          title: 'Gift cards',
          price: 'from €25',
          perks: ['Valid for any service', '12-month validity', 'Available online', 'Thoughtful gift idea'],
          cta: 'Order now',
        },
      ],
    },
    news: {
      heading: {
        eyebrow: 'News',
        title: 'Stories and achievements from the school',
      },
      items: [
        {
          date: '29 April 2025',
          title: 'The Big Cleanup 2025 at the School',
          description:
            'On 26 April volunteers and friends joined us to tidy up the grounds and enjoy nature together. A great effort by everyone!',
          cta: 'Read more',
        },
        {
          date: '18 June 2023',
          title: 'Youth Cup 2023 coming this June',
          description:
            'The Youth Cup 2023 season kicks off soon – athletes are preparing for new victories and personal bests.',
          cta: 'Read more',
        },
        {
          date: '15 June 2023',
          title: 'Elegance & team spirit at the Dressage Festival',
          description:
            'A two-day festival featuring riders of all levels – from introductory programmes to Grand Prix performances.',
          cta: 'Read more',
        },
      ],
    },
    booking: {
      eyebrow: 'Book now',
      title: 'Ready to take the next step?',
      description:
        'Tell us about yourself and your goals – we will help tailor the ideal programme, from first rides to professional preparation.',
      form: {
        nameLabel: 'Name',
        namePlaceholder: 'Maria Ivanova',
        phoneLabel: 'Phone',
        phonePlaceholder: '+371 28 677 177',
        serviceLabel: 'Service of interest',
        servicePlaceholder: 'Choose a service',
        services: [
          { value: 'boarding', label: 'Horse boarding' },
          { value: 'training', label: 'Training' },
          { value: 'competitions', label: 'Competitions' },
          { value: 'events', label: 'Events' },
        ],
        messageLabel: 'Message',
        messagePlaceholder: 'Describe your expectations',
        submit: 'Send',
        disclaimer:
          'By clicking “Send” you agree to the processing of personal data and accept the privacy policy terms.',
      },
      highlight: {
        eyebrow: 'Corporate programmes',
        title: 'Off-site team building',
        text: 'Immerse your team in the world of horses and create an unforgettable shared experience.',
      },
    },
    footer: {
      intro:
        'Welcome to the School of Young Riders – a place where everyone can discover a love for horses and develop athletic skills.',
      contacts: {
        title: 'Contacts',
        items: ['info@latvianhorses.lv', '+371 28 677 177', '“Zustrenes”, Inčukalns, LV-2141, Latvia'],
      },
      services: {
        title: 'Services',
        items: [
          { label: 'Horse boarding', href: '#services' },
          { label: 'Riding lessons', href: '#services' },
          { label: 'Field rental', href: '#services' },
          { label: 'Gift cards', href: '#booking' },
        ],
      },
      billing: {
        title: 'Billing',
        items: ['Reg. No.: 40008114442', 'AS Swedbank', 'SWIFT: HABALV22', 'IBAN: LV19HABA0551017883565'],
      },
      bottom: {
        rights: '© 2025 Jauno Jātnieku Skola. All rights reserved.',
        privacy: 'Privacy policy',
        terms: 'Terms of use',
      },
    },
  },
  ru: {
    logo: {
      title: 'Школа юных всадников',
      subtitle: 'Latvian Horses Skola',
    },
    languages: {
      lv: 'Латвийский',
      en: 'Английский',
      ru: 'Русский',
    },
    navigation: [
      { href: '#hero', label: 'Главная' },
      { href: '#services', label: 'Услуги' },
      { href: '#about', label: 'О нас' },
      { href: '#competitions', label: 'Соревнования' },
      { href: '#prices', label: 'Цены' },
      { href: '#news', label: 'Новости' },
      { href: '#contacts', label: 'Контакты' },
    ],
    navCta: 'Записаться',
    hero: {
      eyebrow: 'Школа молодых всадников',
      title: 'Место, где люди встречаются с лошадьми',
      lead:
        'Мы создаём пространство для профессионалов и новичков: современные конюшни, тренировки с опытными тренерами и соревнования европейского уровня.',
      primaryCta: 'Записаться',
      secondaryCta: 'Узнать больше',
    },
    services: {
      heading: {
        eyebrow: 'Услуги',
        title: 'Всё для гармонии человека и лошади',
        description:
          'Европейские стандарты безопасности и ухода, сертифицированные тренеры и инфраструктура для круглогодичных занятий верховой ездой.',
      },
      cards: [
        {
          title: 'Содержание лошадей',
          description:
            'От 345€ в месяц: полноценное кормление, ежедневный выгул, солярий, подстилка и индивидуальный уход в современных конюшнях.',
          cta: 'Подробнее',
        },
        {
          title: 'Тренировки верховой езды',
          description:
            'Индивидуальные и групповые занятия для детей и взрослых, тренировки по прыжкам и программа для начинающих.',
          cta: 'Подробнее',
        },
        {
          title: 'Аренда полей и манежей',
          description:
            'Открытые и крытые площадки с профессиональным покрытием, освещением и инфраструктурой для соревнований.',
          cta: 'Подробнее',
        },
        {
          title: 'Мероприятия и экскурсии',
          description:
            'Корпоративные программы, экскурсии по комплексу, подарочные сертификаты и сезонные мероприятия для всей семьи.',
          cta: 'Подробнее',
        },
      ],
    },
    about: {
      eyebrow: 'О нас',
      title: 'Цель — быть ведущим центром конного спорта в Балтии',
      body:
        'Мы верим, что интерес к верховой езде начинается с первого знакомства. Поэтому объединяем профессиональных тренеров, бережный уход и дружелюбную атмосферу, чтобы каждый всадник продолжал развиваться.',
      bullets: [
        'Национальная спортивная база с европейскими стандартами',
        'Сильная команда тренеров и партнёров',
        'Развитие детских и молодёжных программ',
        'Регулярные соревнования и тренировочные лагеря',
      ],
      primaryCta: 'Связаться',
      secondaryCta: 'Новости',
      mediaCard: {
        eyebrow: 'С 2001 года',
        title: 'Более 120 выпускников',
        text: 'Наши ученики становятся призёрами национальных и международных чемпионатов.',
      },
    },
    competitions: {
      heading: {
        eyebrow: 'Соревнования',
        title: 'Грядущие старты и мероприятия',
        cta: 'Подать заявку',
      },
      timeline: [
        {
          date: '15–16 ноября 2025',
          title: 'Ziemas kauss konkūrā — Финал',
          description:
            'Манеж 35×60 м, отдельное поле 25×60 м для разминки. Приём заявок до 13.11, старт в 09:00. Команда организаторов гарантирует высокий уровень соревнований.',
          cta: 'Узнать больше',
        },
        {
          date: 'Декабрь 2025',
          title: 'Зимний тренировочный лагерь',
          description:
            'Неделя интенсивной подготовки по дисциплинам выездки и конкур, теория, практика и индивидуальные планы развития.',
          cta: 'Узнать больше',
        },
        {
          date: 'Январь 2026',
          title: 'Кубок юных всадников',
          description:
            'Серия стартов для детей и подростков, направленная на развитие соревновательного опыта и уверенности на арене.',
          cta: 'Узнать больше',
        },
      ],
    },
    prices: {
      heading: {
        eyebrow: 'Цены',
        title: 'Выбирайте формат, который подходит именно вам',
      },
      cards: [
        {
          title: 'Содержание лошадей',
          price: 'от 345€ / месяц',
          perks: ['Кормление 3 раза в день', 'Ежедневная уборка бокса', 'Прогулка по загону', 'Использование манежа и полей'],
          cta: 'Оставить заявку',
        },
        {
          title: 'Тренировки',
          price: 'от 30€ / занятие',
          perks: ['Знакомство с пони и лошадьми', 'Индивидуальные и групповые занятия', 'Подготовка к соревнованиям', 'Гибкий график'],
          cta: 'Записаться',
        },
        {
          title: 'Подарочные карты',
          price: 'от 25€',
          perks: ['Подходит для любой услуги', 'Действует 12 месяцев', 'Можно купить онлайн', 'Отличный подарок'],
          cta: 'Заказать',
        },
      ],
    },
    news: {
      heading: {
        eyebrow: 'Новости',
        title: 'События и достижения школы',
      },
      items: [
        {
          date: '29 апреля 2025',
          title: 'Lielā Talka 2025 в Школе молодых всадников',
          description:
            '26 апреля мы собрали волонтёров и друзей, чтобы привести в порядок территорию и провести время на природе. Общими усилиями сделали столько полезного!',
          cta: 'Читать далее',
        },
        {
          date: '18 июня 2023',
          title: 'Молодёжный кубок 2023 состоится в конце июня',
          description:
            'Совсем скоро стартует сезон Jauniešu kauss 2023 — спортсмены готовятся к новым победам и рекордам.',
          cta: 'Читать далее',
        },
        {
          date: '15 июня 2023',
          title: 'Элегантность и командный дух на фестивале выездки',
          description:
            'Двухдневный фестиваль собрал всадников разных уровней — от самых простых программ до выступлений уровня Гран-при.',
          cta: 'Читать далее',
        },
      ],
    },
    booking: {
      eyebrow: 'Записаться',
      title: 'Готовы сделать шаг навстречу мечте?',
      description:
        'Расскажите о себе и своих целях — мы подберём идеальную программу: от первых уроков до профессиональной подготовки.',
      form: {
        nameLabel: 'Имя',
        namePlaceholder: 'Мария Иванова',
        phoneLabel: 'Телефон',
        phonePlaceholder: '+371 28 677 177',
        serviceLabel: 'Цель визита',
        servicePlaceholder: 'Выберите услугу',
        services: [
          { value: 'boarding', label: 'Содержание лошадей' },
          { value: 'training', label: 'Тренировки' },
          { value: 'competitions', label: 'Соревнования' },
          { value: 'events', label: 'Мероприятия' },
        ],
        messageLabel: 'Комментарий',
        messagePlaceholder: 'Опишите ваши ожидания',
        submit: 'Отправить',
        disclaimer:
          'Нажимая «Отправить», вы соглашаетесь с обработкой персональных данных и принимаете условия политики конфиденциальности.',
      },
      highlight: {
        eyebrow: 'Корпоративные мероприятия',
        title: 'Выездные тимбилдинги',
        text: 'Погрузитесь в атмосферу общения с лошадьми и создайте незабываемый опыт для своей команды.',
      },
    },
    footer: {
      intro:
        'Добро пожаловать в Школу молодых всадников — место, где каждый может раскрыть любовь к лошадям и развить спортивные навыки.',
      contacts: {
        title: 'Контакты',
        items: ['info@latvianhorses.lv', '+371 28 677 177', '“Zustrenes”, Инчукалнс, LV-2141, Латвия'],
      },
      services: {
        title: 'Услуги',
        items: [
          { label: 'Содержание лошадей', href: '#services' },
          { label: 'Тренировки верховой езды', href: '#services' },
          { label: 'Аренда полей', href: '#services' },
          { label: 'Подарочные карты', href: '#booking' },
        ],
      },
      billing: {
        title: 'Реквизиты',
        items: ['Рег. №: 40008114442', 'AS Swedbank', 'SWIFT: HABALV22', 'IBAN: LV19HABA0551017883565'],
      },
      bottom: {
        rights: '© 2025 Jauno Jātnieku Skola. Все права защищены.',
        privacy: 'Политика конфиденциальности',
        terms: 'Условия использования',
      },
    },
  },
}
const languageOrder = ['lv', 'en', 'ru']

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [selectedLanguage, setSelectedLanguage] = useState('ru')
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const languageDropdownRef = useRef(null)
  const headerRef = useRef(null)
  const t = translations[selectedLanguage] ?? translations.ru

  useEffect(() => {
    document.body.classList.toggle('no-scroll', isMenuOpen)
    const handleResize = () => {
      if (window.innerWidth >= 960 && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      document.body.classList.remove('no-scroll')
    }
  }, [isMenuOpen])

  useEffect(() => {
    document.documentElement.lang = selectedLanguage
  }, [selectedLanguage])

  useEffect(() => {
    const animatedElements = Array.from(document.querySelectorAll('[data-animate]'))
    if (!animatedElements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          } else {
            entry.target.classList.remove('is-visible')
          }
        })
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -120px 0px',
      },
    )

    animatedElements.forEach((element) => {
      element.classList.remove('is-visible')
      observer.observe(element)
    })

    return () => observer.disconnect()
  }, [selectedLanguage])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isLanguageOpen &&
        languageDropdownRef.current &&
        !languageDropdownRef.current.contains(event.target)
      ) {
        setIsLanguageOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isLanguageOpen])

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCurrentSlide((prevIndex) => (prevIndex + 1) % heroSlides.length)
    }, 6500)

    return () => {
      window.clearInterval(intervalId)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (!headerRef.current) return
      if (window.scrollY > 12) {
        headerRef.current.classList.add('is-scrolled')
      } else {
        headerRef.current.classList.remove('is-scrolled')
      }
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => {
    setIsMenuOpen(false)
    setIsLanguageOpen(false)
  }

  const navLinks = t.navigation

  return (
    <div className={`page ${isMenuOpen ? 'page--menu-open' : ''}`}>
      <header
        className={`site-header ${isMenuOpen ? 'is-open' : ''}`}
        data-scroll-watch
        ref={headerRef}
      >
        <div className="announcement">
          <div className="announcement__content container">
            <span className="announcement__item">
              <svg aria-hidden="true" focusable="false" viewBox="0 0 20 20">
                <path d="M2.5 4.5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1V15a1 1 0 0 1-1 1h-13a1 1 0 0 1-1-1V4.5zm2 1V14h9.9l-5.45-5.45a.75.75 0 0 1 1.06-1.06l5.46 5.45V5.5H4.5z" />
              </svg>
              <a href="mailto:info@latvianhorses.lv">info@latvianhorses.lv</a>
            </span>
            <span className="announcement__item">
              <svg aria-hidden="true" focusable="false" viewBox="0 0 20 20">
                <path d="M5.7 2.7c.2-.4.7-.6 1.1-.4l2.7 1.3c.4.2.6.6.4 1l-1.2 2.7c-.2.4-.6.6-1 .4l-1-.4a11 11 0 0 0 5.2 5.2l-.3-.9c-.2-.4 0-.8.3-1l2.7-1.2c.4-.2.8 0 1 .4l1.3 2.7c.2.4 0 .9-.4 1.1l-2.1 1c-.4.2-.9.2-1.3 0a13.5 13.5 0 0 1-7.4-7.4c-.2-.4-.2-.9 0-1.3l1-2.1z" />
              </svg>
              <a href="tel:+37128677177">+371 28 677 177</a>
            </span>
          </div>
        </div>
        <div className="nav-bar container">
          <a className="logo" href="#hero" aria-label="Школа молодых всадников" onClick={closeMenu}>
            <svg className="logo__mark" viewBox="0 0 120 120" aria-hidden="true" focusable="false">
              <defs>
                <radialGradient id="brandGradient" cx="25%" cy="20%" r="80%">
                  <stop offset="0%" stop-color="#f6ddc4" />
                  <stop offset="45%" stop-color="#e59b63" />
                  <stop offset="100%" stop-color="#9f3d21" />
                </radialGradient>
              </defs>
              <circle cx="60" cy="60" r="54" fill="url(#brandGradient)" />
              <circle cx="60" cy="60" r="56" fill="none" stroke="rgba(255, 255, 255, 0.35)" strokeWidth="2" />
              <path
                className="logo__mark-horse"
                d="M78.5 46.2c-4.1-2.8-10.1-4.7-16.4-4.7-9.7 0-17.6 4.4-21.9 11.7L36 61.8c-1.9 3.3-1 7.4 2 9.7c4.3 3.4 12 4.1 16.6-2.7l3.9-5.8c1.7-2.5 4.5-4 7.6-4c2.3 0 4.6 0.5 6.5 1.6l6 3.1c2.9 1.5 6.4 0.3 7.9-2.6C88 56.5 84.6 50.4 78.5 46.2Z"
              />
              <path
                className="logo__mark-ribbon"
                d="M30 80c10.5 6.5 22.8 10 35.5 10c12.7 0 25-3.5 35.5-10l-3.5-6c-9 5.2-19.9 8.1-32 8.1c-12.1 0-23.1-2.9-32-8.1Z"
              />
            </svg>
            <div className="logo__text">
              <span className="logo__title">{t.logo.title}</span>
              <span className="logo__subtitle">{t.logo.subtitle}</span>
            </div>
          </a>
          <div className="nav-bar__middle">
            <nav className={`main-nav ${isMenuOpen ? 'is-open' : ''}`} id="main-nav">
              <ul>
                {navLinks.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} onClick={closeMenu}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="nav-controls">
                <div
                  className={`language-switcher ${isLanguageOpen ? 'is-open' : ''}`}
                  ref={languageDropdownRef}
                >
                  <button
                    className="language-switcher__button"
                    type="button"
                    aria-haspopup="listbox"
                    aria-expanded={isLanguageOpen}
                    onClick={(event) => {
                      event.stopPropagation()
                      setIsLanguageOpen((prev) => !prev)
                    }}
                  >
                    {t.languages[selectedLanguage]}
                    <span aria-hidden="true" className="language-switcher__chevron" />
                  </button>
                  <ul className="language-switcher__list" role="listbox">
                    {languageOrder.map((code) => (
                      <li key={code}>
                        <button
                          type="button"
                          role="option"
                          aria-selected={selectedLanguage === code}
                          onClick={(event) => {
                            event.stopPropagation()
                            setSelectedLanguage(code)
                            setIsLanguageOpen(false)
                          }}
                        >
                          {t.languages[code]}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                <a className="btn btn--outline nav-cta" href="#booking" onClick={closeMenu}>
                  {t.navCta}
                </a>
              </div>
            </nav>
          </div>
          <button
            className={`nav-toggle ${isMenuOpen ? 'is-open' : ''}`}
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="main-nav"
            onClick={() => {
              setIsMenuOpen((prev) => !prev)
              setIsLanguageOpen(false)
            }}
          >
            <span className="nav-toggle__line" />
            <span className="nav-toggle__line" />
            <span className="nav-toggle__line" />
          </button>
        </div>
      </header>

      <main>
        <section id="hero" className="hero">
          <div className="hero__media" role="presentation">
            {heroSlides.map((imageSrc, index) => (
              <div
                key={imageSrc}
                className={`hero__slide ${index === currentSlide ? 'is-active' : ''}`}
                style={{ backgroundImage: `url(${imageSrc})` }}
              />
            ))}
            <div className="hero__overlay" />
          </div>
          <div className="hero__content container" data-animate="fade-up">
            <p className="eyebrow">{t.hero.eyebrow}</p>
            <h1>{t.hero.title}</h1>
            <p className="hero__lead">{t.hero.lead}</p>
            <div className="hero__actions">
              <a className="btn btn--primary" href="#booking">
                {t.hero.primaryCta}
              </a>
              <a className="btn btn--ghost" href="#about">
                {t.hero.secondaryCta}
              </a>
            </div>
          </div>
        </section>

        <section id="services" className="section section--light">
          <div className="container">
            <div className="section__heading">
              <p className="eyebrow">{t.services.heading.eyebrow}</p>
              <h2>{t.services.heading.title}</h2>
              <p>{t.services.heading.description}</p>
            </div>
            <div className="service-grid">
              {t.services.cards.map((card, index) => (
                <article
                  className="card"
                  key={card.title}
                  data-animate="fade-up"
                  style={{ transitionDelay: `${index * 90 + 120}ms` }}
                >
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <a className="card__link" href="#booking">
                    {card.cta}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section section--split">
          <div className="container section--split__wrapper">
            <div className="section--split__content" data-animate="fade-right">
              <p className="eyebrow">{t.about.eyebrow}</p>
              <h2>{t.about.title}</h2>
              <p>{t.about.body}</p>
              <ul className="checklist">
                {t.about.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="section__actions">
                <a className="btn btn--primary" href="#contacts">
                  {t.about.primaryCta}
                </a>
                <a className="btn btn--ghost" href="#news">
                  {t.about.secondaryCta}
                </a>
              </div>
            </div>
            <div className="section--split__media" role="presentation" data-animate="fade-left">
              <div className="about-gallery" data-animate="fade-left" style={{ transitionDelay: '120ms' }}>
                {heroSlides.map((imageSrc) => (
                  <div
                    key={`about-${imageSrc}`}
                    className="about-gallery__item"
                    style={{ backgroundImage: `url(${imageSrc})` }}
                  />
                ))}
              </div>
              <div className="media-card" data-animate="fade-up" style={{ transitionDelay: '220ms' }}>
                <span className="media-card__eyebrow">{t.about.mediaCard.eyebrow}</span>
                <strong className="media-card__title">{t.about.mediaCard.title}</strong>
                <p className="media-card__text">{t.about.mediaCard.text}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="competitions" className="section">
          <div className="container">
            <div className="section__heading section__heading--inline">
              <div>
                <p className="eyebrow">{t.competitions.heading.eyebrow}</p>
                <h2>{t.competitions.heading.title}</h2>
              </div>
              <a className="btn btn--outline" href="#booking">
                {t.competitions.heading.cta}
              </a>
            </div>
            <div className="timeline">
              {t.competitions.timeline.map((item, index) => (
                <article
                  className="timeline__item"
                  key={item.title}
                  data-animate="fade-up"
                  style={{ transitionDelay: `${index * 100 + 140}ms` }}
                >
                  <span className="timeline__date">{item.date}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <a className="timeline__link" href="#booking">
                    {item.cta}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="prices" className="section section--light">
          <div className="container">
            <div className="section__heading">
              <p className="eyebrow">{t.prices.heading.eyebrow}</p>
              <h2>{t.prices.heading.title}</h2>
            </div>
            <div className="pricing-grid">
              {t.prices.cards.map((card, index) => (
                <article
                  className="pricing-card"
                  key={card.title}
                  data-animate="fade-up"
                  style={{ transitionDelay: `${index * 90 + 120}ms` }}
                >
                  <h3>{card.title}</h3>
                  <p className="pricing-card__price">{card.price}</p>
                  <ul>
                    {card.perks.map((perk) => (
                      <li key={perk}>{perk}</li>
                    ))}
                  </ul>
                  <a className="btn btn--outline" href="#booking">
                    {card.cta}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="news" className="section">
          <div className="container">
            <div className="section__heading">
              <p className="eyebrow">{t.news.heading.eyebrow}</p>
              <h2>{t.news.heading.title}</h2>
            </div>
            <div className="news-grid">
              {t.news.items.map((item, index) => (
                <article
                  className="news-card"
                  key={item.title}
                  data-animate="fade-up"
                  style={{ transitionDelay: `${index * 100 + 120}ms` }}
                >
                  <span className="news-card__date">{item.date}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <a className="news-card__link" href="#news">
                    {item.cta}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="booking" className="section section--split section--accent">
          <div className="container section--split__wrapper section--split__wrapper--reverse">
            <div className="section--split__content" data-animate="fade-up">
              <p className="eyebrow">{t.booking.eyebrow}</p>
              <h2>{t.booking.title}</h2>
              <p>{t.booking.description}</p>
              <form className="lead-form" action="#" method="post" data-animate="fade-up" style={{ transitionDelay: '140ms' }}>
                <div className="form-grid">
                  <label>
                    <span>{t.booking.form.nameLabel}</span>
                    <input required type="text" name="name" placeholder={t.booking.form.namePlaceholder} />
                  </label>
                  <label>
                    <span>{t.booking.form.phoneLabel}</span>
                    <input required type="tel" name="phone" placeholder={t.booking.form.phonePlaceholder} />
                  </label>
                  <label className="form-grid__wide">
                    <span>{t.booking.form.serviceLabel}</span>
                    <select name="service" required defaultValue="">
                      <option value="" disabled>
                        {t.booking.form.servicePlaceholder}
                      </option>
                      {t.booking.form.services.map((service) => (
                        <option key={service.value} value={service.value}>
                          {service.label}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="form-grid__wide">
                    <span>{t.booking.form.messageLabel}</span>
                    <textarea name="message" rows="3" placeholder={t.booking.form.messagePlaceholder} />
                  </label>
                </div>
                <button className="btn btn--primary" type="submit">
                  {t.booking.form.submit}
                </button>
                <p className="form-disclaimer">
                  {t.booking.form.disclaimer}
                </p>
              </form>
            </div>
            <div className="section--split__media section--split__media--accent" role="presentation" data-animate="fade-left">
              <div className="media-card media-card--accent" data-animate="fade-up" style={{ transitionDelay: '200ms' }}>
                <span className="media-card__eyebrow">{t.booking.highlight.eyebrow}</span>
                <strong className="media-card__title">{t.booking.highlight.title}</strong>
                <p className="media-card__text">{t.booking.highlight.text}</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="contacts" className="site-footer">
        <div className="container">
          <div className="footer__top">
            <div className="footer__brand">
              <a className="logo" href="#hero" aria-label="Школа молодых всадников" onClick={closeMenu}>
                <svg className="logo__mark" viewBox="0 0 120 120" aria-hidden="true" focusable="false">
                  <defs>
                    <radialGradient id="brandGradientFooter" cx="25%" cy="20%" r="80%">
                      <stop offset="0%" stop-color="#f6ddc4" />
                      <stop offset="45%" stop-color="#e59b63" />
                      <stop offset="100%" stop-color="#9f3d21" />
                    </radialGradient>
                  </defs>
                  <circle cx="60" cy="60" r="54" fill="url(#brandGradientFooter)" />
                  <circle cx="60" cy="60" r="56" fill="none" stroke="rgba(255, 255, 255, 0.35)" strokeWidth="2" />
                  <path
                    className="logo__mark-horse"
                    d="M78.5 46.2c-4.1-2.8-10.1-4.7-16.4-4.7-9.7 0-17.6 4.4-21.9 11.7L36 61.8c-1.9 3.3-1 7.4 2 9.7c4.3 3.4 12 4.1 16.6-2.7l3.9-5.8c1.7-2.5 4.5-4 7.6-4c2.3 0 4.6 0.5 6.5 1.6l6 3.1c2.9 1.5 6.4 0.3 7.9-2.6C88 56.5 84.6 50.4 78.5 46.2Z"
                  />
                  <path
                    className="logo__mark-ribbon"
                    d="M30 80c10.5 6.5 22.8 10 35.5 10c12.7 0 25-3.5 35.5-10l-3.5-6c-9 5.2-19.9 8.1-32 8.1c-12.1 0-23.1-2.9-32-8.1Z"
                  />
                </svg>
                <div className="logo__text">
                  <span className="logo__title">{t.logo.title}</span>
                  <span className="logo__subtitle">{t.logo.subtitle}</span>
                </div>
              </a>
              <p>{t.footer.intro}</p>
            </div>
            <div className="footer__grid">
              <div>
                <h4>{t.footer.contacts.title}</h4>
                <ul>
                  {t.footer.contacts.items.map((item) => (
                    <li key={item}>{item.includes('@') || item.startsWith('+') ? <a href={item.includes('@') ? `mailto:${item}` : `tel:${item.replace(/\s+/g, '')}`}>{item}</a> : item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4>{t.footer.services.title}</h4>
                <ul>
                  {t.footer.services.items.map((service) => (
                    <li key={service.label}>
                      <a href={service.href}>{service.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4>{t.footer.billing.title}</h4>
                <ul>
                  {t.footer.billing.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="footer__bottom">
            <p>
              {t.footer.bottom.rights}{' '}
              <span className="footer__made-by">
                · Made by{' '}
                <a href="https://bgdevofficial.com/" target="_blank" rel="noreferrer">
                  BGdev
                </a>
              </span>
            </p>
            <div className="footer__links">
              <a href="#hero">{t.footer.bottom.privacy}</a>
              <a href="#hero">{t.footer.bottom.terms}</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
