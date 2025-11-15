import { useEffect, useRef, useState } from 'react'
import './App.css'
import heroSlideOne from './assets/29928c4a071cb4f74476e91a3e43fc85.jpg'
import heroSlideTwo from './assets/6dc6758e044489ee9d73b2f8deda4c35.jpg'
import heroSlideThree from './assets/c94173562472c9c29813b9cba7c8d8e2.jpg'
import galleryImageIndoor from './assets/481007477_1037131591768619_8146029210013551240_n.jpg'
import galleryImageArena from './assets/481710442_1038078748340570_3768271913350946832_n.jpg'
import galleryImageAwards from './assets/482069166_1042713017877143_1166654843613532211_n.jpg'
import galleryImageOutdoor from './assets/503440501_1109185541229890_1560595072047730165_n.jpg'
import logoEmblem from './assets/bgfree.jpg'
import galleryImagePortrait from './assets/mainana.jpg'
import galleryImageCup from './assets/kupa.jpg'
import galleryImageLfc from './assets/lfc.jpg'
import galleryImageCfc from './assets/cfc.jpg'
import galleryImageTrt from './assets/trt.jpg'

const heroSlides = [heroSlideOne, heroSlideTwo, heroSlideThree]
const galleryImages = [
  {
    src: galleryImageIndoor,
    caption: {
      lv: 'Individuāls darbs ar treneri manēžā',
      en: 'One-on-one coaching inside the arena',
      ru: 'Индивидуальное занятие с тренером в манеже',
    },
  },
  {
    src: galleryImageArena,
    caption: {
      lv: 'Sacensību atmosfēra Jauno jātnieku skolā',
      en: 'Competition atmosphere at the school',
      ru: 'Соревновательная атмосфера в школе',
    },
  },
  {
    src: galleryImageAwards,
    caption: {
      lv: 'Apbalvošana un prieks par sasniegumiem',
      en: 'Award ceremony celebrating achievements',
      ru: 'Награждение и радость от побед',
    },
  },
  {
    src: heroSlideOne,
    caption: {
      lv: 'Jātnieks gatavojas startam manēžā',
      en: 'Rider preparing for an arena start',
      ru: 'Всадник готовится к старту в манеже',
    },
  },
  {
    src: heroSlideTwo,
    caption: {
      lv: 'Treniņš plašajos mūsu laukumos',
      en: 'Training on our spacious outdoor fields',
      ru: 'Тренировка на просторных полях школы',
    },
  },
  {
    src: heroSlideThree,
    caption: {
      lv: 'Sadarbība starp zirgu un jātnieku',
      en: 'Connection between horse and rider',
      ru: 'Связь между лошадью и всадником',
    },
  },
  {
    src: galleryImageOutdoor,
    caption: {
      lv: 'Jātnieku stundas svaigā gaisā',
      en: 'Riding lesson in the fresh air',
      ru: 'Занятие верховой ездой на свежем воздухе',
    },
  },
  {
    src: galleryImagePortrait,
    caption: {
      lv: 'Zirga portrets pirms treniņa',
      en: 'Horse portrait before training',
      ru: 'Портрет лошади перед тренировкой',
    },
  },
  {
    src: galleryImageCup,
    caption: {
      lv: 'Jauno jātnieku kausa trofeja',
      en: 'Young Riders Cup trophy',
      ru: 'Трофей Кубка юных всадников',
    },
  },
  {
    src: galleryImageLfc,
    caption: {
      lv: 'Komandas kopbilde pēc uzvaras',
      en: 'Team photo after victory',
      ru: 'Командное фото после победы',
    },
  },
  {
    src: galleryImageCfc,
    caption: {
      lv: 'Partneru un atbalstītāju godināšana',
      en: 'Honouring partners and supporters',
      ru: 'Отмечаем партнёров и друзей школы',
    },
  },
  {
    src: galleryImageTrt,
    caption: {
      lv: 'Treniņš pie jūras saullēktā',
      en: 'Sunrise training by the sea',
      ru: 'Тренировка у моря на рассвете',
    },
  },
]

const GOOGLE_MAPS_EMBED_URL =
  'https://www.google.com/maps?q=57.357472,21.537444&output=embed'
const GOOGLE_MAPS_DIRECTIONS_URL =
  'https://www.google.com/maps/place/57.357472,21.537444'
const APPLE_MAPS_DIRECTIONS_URL =
  'https://maps.apple.com/?address=Glu%C5%BEi,%20V%C4%81rves%20pag.,%20Latvia&auid=6050258041662745356&ll=57.357617,21.537482&lsp=6489&q=Glu%C5%BEi&_ext=EiYpcNTANjOtTEAxHHBcsnaHNUA57qnmklmuTEBBfvDbJLqLNUBQBA%3D%3D&t=m'
const translations = {
  lv: {
    logo: {
      title: 'Asnates JSK',
      subtitle: 'asnatesjsk.lv',
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
      eyebrow: 'Asnātes JSK',
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
          price: 'Pēc pieprasījuma',
          perks: ['Barošana 3 reizes dienā', 'Ikdienas boksa uzkopšana', 'Pastaiga aplokā', 'Manēžu un lauku izmantošana'],
          cta: 'Sazinieties ar mums',
        },
        {
          title: 'Treniņi',
          price: 'Pēc pieprasījuma',
          perks: ['Iepazīšanās ar zirgu', 'Individuālās un grupu nodarbības', 'Sacensību sagatavošana', 'Elastīgs grafiks'],
          cta: 'Sazinieties ar mums',
        },
        {
          title: 'Dāvanu kartes',
          price: 'Pēc pieprasījuma',
          perks: ['Der jebkuram pakalpojumam', 'Spēkā 12 mēnešus', 'Iespēja iegādāties tiešsaistē', 'Lieliska dāvana'],
          cta: 'Sazinieties ar mums',
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
        phonePlaceholder: '+371 2 8352881',
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
        submitting: 'Nosūta...',
        successMessage: 'Paldies! Jūsu pieteikums ir nosūtīts. Mēs ar jums sazināsimies drīzumā.',
        errorMessage: 'Radās kļūda. Lūdzu, mēģiniet vēlāk vai sazinieties tieši ar mums.',
        fallbackMessage: 'Tiek atvērts jūsu e-pasta klientu. Lūdzu, pabeidziet nosūtīšanu.',
        disclaimer:
          'Nospiežot "Nosūtīt", jūs piekrītat personas datu apstrādei un privātuma politikas noteikumiem.',
      },
      highlight: {
        eyebrow: 'Korpozīciju pasākumi',
        title: 'Izbraukuma komandas saliedēšanās',
        text: 'Ieniriet zirgu pasaulē un radiet neaizmirstamu pieredzi savai komandai.',
      },
    },
    gallery: {
      eyebrow: 'Galerija',
      title: 'Brīži no manēžas un stallī',
      description: 'Iepazīstiet mūsu atmosfēru: treniņi, sacensības un ikdienas dzīve kopā ar zirgiem.',
    },
    testimonials: {
      eyebrow: 'Atsauksmes',
      title: 'Ko saka mūsu klienti',
      description: 'Mūsu audzēkņu un viņu ģimeņu pieredze ar mums.',
      items: [
        {
          name: 'Anna Bērziņa',
          role: 'Mamma',
          rating: 5,
          text: 'Mana meita sāka jāt pirms diviem gadiem, un es redzēju, kā viņa kļuva drošāka un disciplinētāka. Treneri ir profesionāli un uzmanīgi.',
        },
        {
          name: 'Jānis Kalniņš',
          role: 'Jātnieks',
          rating: 5,
          text: 'Nesagādāju savu zirgu citur. Infrastruktūra ir lieliska, aprūpe ir augstā līmenī. Ļoti apmierināts ar pakalpojumu kvalitāti.',
        },
        {
          name: 'Marija Ozola',
          role: 'Bērna vecāki',
          rating: 5,
          text: 'Mūsu dēls ir tik priecīgs, ka var trenēties šeit. Atmosfēra ir draudzīga un droša, un mēs redzam lieliskus rezultātus.',
        },
        {
          name: 'Pēteris Siliņš',
          role: 'Uzņēmējs',
          rating: 5,
          text: 'Organizējām korporatīvu pasākumu šeit. Komanda bija profesionāla, programma interesanta. Visi bija apmierināti!',
        },
        {
          name: 'Elīna Zariņa',
          role: 'Jātniece',
          rating: 5,
          text: 'Es trenējos šeit jau vairākus gadus. Manēža ir modernā, zirgi ir labi aprūpēti, un treneri palīdz sasniegt mērķus.',
        },
        {
          name: 'Andris Vītols',
          role: 'Vectēvs',
          rating: 5,
          text: 'Mana mazmeita apmeklē nometnes un ir ļoti priecīga. Personāls ir uzmanīgs pret bērniem un nodrošina drošību.',
        },
      ],
    },
    map: {
      eyebrow: 'Kur mūs atrast',
      title: 'Atrodi Asnātes JSK kartē',
      description:
        'Mūsu jātnieku bāze atrodas klusajā Ventspils novada Vārves pagastā. Droši plānojiet vizīti – pie mums ērti nokļūt ar auto vai kopā ar komandu.',
      addressLabel: 'Adrese',
      address: 'Gluži, Vārves pagasts, Ventspils novads, LV-3623',
      googleCta: 'Atvērt Google Maps',
      appleCta: 'Atvērt Apple Maps',
    },
    footer: {
      intro:
        'Laipni lūdzam Asnātes JSK — vietā, kur ikviens var atklāt mīlestību pret zirgiem un attīstīt sportiskās prasmes.',
      contacts: {
        title: 'Kontakti',
        items: [
          'asnatesjsk@inbox.lv',
          '+371 2 8352881',
          'Gluži, Vārves pagasts, Ventspils novads, LV-3623',
        ],
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
        items: [
          'Biedrība "Asnates Jātnieku Sporta Klubs"',
          'Reģ. Nr.: 40008302784',
          '"Saime", Pope, Popes pag., Ventspils nov., LV-3614',
          'Banka: SWEDBANK',
          'Konta Nr: LV75HABA0551050198107',
        ],
      },
      bottom: {
        rights: '© 2025 Asnātes JSK. Visas tiesības aizsargātas.',
        privacy: 'Privātuma politika',
        terms: 'Lietošanas noteikumi',
      },
    },
  },
  en: {
    logo: {
      title: 'Asnates JSK',
      subtitle: 'asnatesjsk.lv',
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
      eyebrow: 'Asnates JSK',
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
          price: 'Available on request',
          perks: ['Feeding 3 times per day', 'Daily stall cleaning', 'Turnout in paddock', 'Use of arenas and fields'],
          cta: 'Contact us',
        },
        {
          title: 'Training',
          price: 'Available on request',
          perks: ['Intro to horses and ponies', 'Private and group lessons', 'Competition preparation', 'Flexible schedules'],
          cta: 'Contact us',
        },
        {
          title: 'Gift cards',
          price: 'Available on request',
          perks: ['Valid for any service', '12-month validity', 'Available online', 'Thoughtful gift idea'],
          cta: 'Contact us',
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
        phonePlaceholder: '+371 2 8352881',
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
        submitting: 'Sending...',
        successMessage: 'Thank you! Your request has been sent. We will contact you soon.',
        errorMessage: 'An error occurred. Please try again later or contact us directly.',
        fallbackMessage: 'Opening your email client. Please complete the submission.',
        disclaimer:
          'By clicking "Send" you agree to the processing of personal data and accept the privacy policy terms.',
      },
      highlight: {
        eyebrow: 'Corporate programmes',
        title: 'Off-site team building',
        text: 'Immerse your team in the world of horses and create an unforgettable shared experience.',
      },
    },
    gallery: {
      eyebrow: 'Gallery',
      title: 'Moments from the arena and the stable',
      description: 'Immerse yourself in our atmosphere: training sessions, competitions, and daily life with horses.',
    },
    testimonials: {
      eyebrow: 'Testimonials',
      title: 'What our clients say',
      description: 'The experience of our students and their families with us.',
      items: [
        {
          name: 'Anna Berzina',
          role: 'Parent',
          rating: 5,
          text: 'My daughter started riding two years ago, and I saw her become more confident and disciplined. The trainers are professional and attentive.',
        },
        {
          name: 'Janis Kalnins',
          role: 'Rider',
          rating: 5,
          text: 'I would not board my horse anywhere else. The infrastructure is excellent, care is top-level. Very satisfied with the service quality.',
        },
        {
          name: 'Maria Ozola',
          role: 'Parent',
          rating: 5,
          text: 'Our son is so happy to train here. The atmosphere is friendly and safe, and we see great results.',
        },
        {
          name: 'Peteris Silins',
          role: 'Business owner',
          rating: 5,
          text: 'We organized a corporate event here. The team was professional, the program interesting. Everyone was satisfied!',
        },
        {
          name: 'Elina Zarina',
          role: 'Rider',
          rating: 5,
          text: 'I have been training here for several years. The arena is modern, horses are well cared for, and trainers help achieve goals.',
        },
        {
          name: 'Andris Vitols',
          role: 'Grandparent',
          rating: 5,
          text: 'My granddaughter attends camps and is very happy. The staff is attentive to children and ensures safety.',
        },
      ],
    },
    map: {
      eyebrow: 'Visit us',
      title: 'Find Asnates JSK on the map',
      description:
        'Our equestrian campus is nestled in the peaceful Ventspils region of Latvia. Plan your visit easily by car or coordinate group transport with our team.',
      addressLabel: 'Address',
      address: 'Gluži, Vārve parish, Ventspils municipality, LV-3623',
      googleCta: 'Open Google Maps',
      appleCta: 'Open Apple Maps',
    },
    footer: {
      intro:
        'Welcome to Asnates JSK — a place where everyone can discover a love for horses and develop athletic skills.',
      contacts: {
        title: 'Contacts',
        items: [
          'asnatesjsk@inbox.lv',
          '+371 2 8352881',
          'Gluži, Vārve parish, Ventspils municipality, LV-3623',
        ],
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
        items: [
          'Biedrība "Asnates Jātnieku Sporta Klubs"',
          'Reg. No.: 40008302784',
          '"Saime", Pope, Popes parish, Ventspils region, LV-3614',
          'Bank: SWEDBANK',
          'Account: LV75HABA0551050198107',
        ],
      },
      bottom: {
        rights: '© 2025 Asnates JSK. All rights reserved.',
        privacy: 'Privacy policy',
        terms: 'Terms of use',
      },
    },
  },
  ru: {
    logo: {
      title: 'Asnates JSK',
      subtitle: 'asnatesjsk.lv',
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
      eyebrow: 'Asnates JSK',
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
          price: 'По запросу',
          perks: ['Кормление 3 раза в день', 'Ежедневная уборка бокса', 'Прогулка по загону', 'Использование манежа и полей'],
          cta: 'Связаться с нами',
        },
        {
          title: 'Тренировки',
          price: 'По запросу',
          perks: ['Знакомство с пони и лошадьми', 'Индивидуальные и групповые занятия', 'Подготовка к соревнованиям', 'Гибкий график'],
          cta: 'Связаться с нами',
        },
        {
          title: 'Подарочные карты',
          price: 'По запросу',
          perks: ['Подходит для любой услуги', 'Действует 12 месяцев', 'Можно купить онлайн', 'Отличный подарок'],
          cta: 'Связаться с нами',
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
        phonePlaceholder: '+371 2 8352881',
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
        submitting: 'Отправка...',
        successMessage: 'Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.',
        errorMessage: 'Произошла ошибка. Пожалуйста, попробуйте позже или свяжитесь с нами напрямую.',
        fallbackMessage: 'Открывается ваш почтовый клиент. Пожалуйста, завершите отправку.',
        disclaimer:
          'Нажимая «Отправить», вы соглашаетесь с обработкой персональных данных и принимаете условия политики конфиденциальности.',
      },
      highlight: {
        eyebrow: 'Корпоративные мероприятия',
        title: 'Выездные тимбилдинги',
        text: 'Погрузитесь в атмосферу общения с лошадьми и создайте незабываемый опыт для своей команды.',
      },
    },
    gallery: {
      eyebrow: 'Галерея',
      title: 'Моменты из манежа и конюшни',
      description: 'Окунитесь в нашу атмосферу: тренировки, соревнования и ежедневная жизнь рядом с лошадьми.',
    },
    testimonials: {
      eyebrow: 'Отзывы',
      title: 'Что говорят наши клиенты',
      description: 'Опыт наших учеников и их семей с нами.',
      items: [
        {
          name: 'Анна Берзиня',
          role: 'Родитель',
          rating: 5,
          text: 'Моя дочь начала заниматься два года назад, и я вижу, как она стала увереннее и дисциплинированнее. Тренеры профессиональны и внимательны.',
        },
        {
          name: 'Янис Калниньш',
          role: 'Всадник',
          rating: 5,
          text: 'Я не стал бы размещать свою лошадь нигде в другом месте. Инфраструктура отличная, уход на высоком уровне. Очень доволен качеством обслуживания.',
        },
        {
          name: 'Мария Озола',
          role: 'Родитель',
          rating: 5,
          text: 'Наш сын так рад тренироваться здесь. Атмосфера дружелюбная и безопасная, мы видим отличные результаты.',
        },
        {
          name: 'Петерис Силиньш',
          role: 'Предприниматель',
          rating: 5,
          text: 'Мы организовали корпоративное мероприятие здесь. Команда была профессиональной, программа интересной. Все остались довольны!',
        },
        {
          name: 'Элина Зариня',
          role: 'Всадница',
          rating: 5,
          text: 'Я тренируюсь здесь уже несколько лет. Манеж современный, лошади хорошо ухожены, тренеры помогают достигать целей.',
        },
        {
          name: 'Андрис Витолс',
          role: 'Дедушка',
          rating: 5,
          text: 'Моя внучка посещает лагеря и очень довольна. Персонал внимателен к детям и обеспечивает безопасность.',
        },
      ],
    },
    map: {
      eyebrow: 'Как нас найти',
      title: 'Asnates JSK на карте',
      description:
        'Наша школа расположена в тихом уголке Вентспилсского края, в волости Варве. Мы будем рады гостям — планируйте визит на автомобиле или договоритесь о трансфере с нашей командой.',
      addressLabel: 'Адрес',
      address: 'Глужи, волость Варве, Вентспилсский край, LV-3623',
      googleCta: 'Открыть в Google Maps',
      appleCta: 'Открыть в Apple Maps',
    },
    footer: {
      intro:
        'Добро пожаловать в Asnates JSK — место, где каждый может раскрыть любовь к лошадям и развить спортивные навыки.',
      contacts: {
        title: 'Контакты',
        items: [
          'asnatesjsk@inbox.lv',
          '+371 2 8352881',
          'Глужи, волость Варве, Вентспилсский край, LV-3623',
        ],
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
        items: [
          'Biedrība "Asnates Jātnieku Sporta Klubs"',
          'Рег. №: 40008302784',
          '"Saime", Pope, волость Попе, Вентспилсский край, LV-3614',
          'Банк: SWEDBANK',
          'Счёт: LV75HABA0551050198107',
        ],
      },
      bottom: {
        rights: '© 2025 Asnates JSK. Все права защищены.',
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
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(null)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [formStatus, setFormStatus] = useState({ type: null, message: null })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const scrollPositionRef = useRef(0)
  const languageDropdownRef = useRef(null)
  const headerRef = useRef(null)
  const t = translations[selectedLanguage] ?? translations.ru

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 960)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('no-scroll')
      document.documentElement.classList.add('page--menu-open')
      document.getElementById('root')?.classList.add('page--menu-open')
    } else {
      document.body.classList.remove('no-scroll')
      document.documentElement.classList.remove('page--menu-open')
      document.getElementById('root')?.classList.remove('page--menu-open')
    }
    const handleResize = () => {
      if (window.innerWidth >= 960 && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      document.body.classList.remove('no-scroll')
      document.documentElement.classList.remove('page--menu-open')
      document.getElementById('root')?.classList.remove('page--menu-open')
    }
  }, [isMenuOpen])

  useEffect(() => {
    document.documentElement.lang = selectedLanguage
  }, [selectedLanguage])

  useEffect(() => {
    if (activeGalleryIndex !== null) {
      // Save scroll position before opening lightbox
      scrollPositionRef.current = window.pageYOffset || document.documentElement.scrollTop
      
      const handleKeydown = (event) => {
        if (event.key === 'Escape') {
          setActiveGalleryIndex(null)
        }
        if (event.key === 'ArrowRight') {
          setActiveGalleryIndex((prev) => (prev === null ? 0 : (prev + 1) % galleryImages.length))
        }
        if (event.key === 'ArrowLeft') {
          setActiveGalleryIndex((prev) =>
            prev === null ? 0 : (prev - 1 + galleryImages.length) % galleryImages.length,
          )
        }
      }
      document.body.classList.add('no-scroll')
      document.body.style.top = `-${scrollPositionRef.current}px`
      window.addEventListener('keydown', handleKeydown)
      return () => {
        window.removeEventListener('keydown', handleKeydown)
        document.body.classList.remove('no-scroll')
        document.body.style.top = ''
        // Restore scroll position after closing lightbox
        window.scrollTo(0, scrollPositionRef.current)
      }
    }
    return undefined
  }, [activeGalleryIndex])

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
        setShowScrollTop(true)
      } else {
        headerRef.current.classList.remove('is-scrolled')
        setShowScrollTop(false)
      }
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Smooth scroll for anchor links
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const href = e.target.closest('a')?.getAttribute('href')
      if (href && href.startsWith('#')) {
        const targetId = href.substring(1)
        const targetElement = document.getElementById(targetId)
        if (targetElement) {
          e.preventDefault()
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }
    }
    document.addEventListener('click', handleAnchorClick)
    return () => document.removeEventListener('click', handleAnchorClick)
  }, [])

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormStatus({ type: null, message: null })

    const formData = new FormData(e.target)
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      service: formData.get('service'),
      message: formData.get('message'),
      language: selectedLanguage,
    }

    try {
      // EmailJS integration - you'll need to set up EmailJS and replace with your service ID
      // For now, we'll use a fallback to mailto
      const mailtoLink = `mailto:asnatesjsk@inbox.lv?subject=Pieteikums: ${data.service}&body=Vārds: ${data.name}%0ATālrunis: ${data.phone}%0APakalpojums: ${data.service}%0AKomentārs: ${data.message || 'Nav komentāra'}`
      
      // Try to use EmailJS if available (you'll need to add EmailJS script)
      if (window.emailjs) {
        await window.emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
          from_name: data.name,
          phone: data.phone,
          service: data.service,
          message: data.message,
          language: selectedLanguage,
        })
        setFormStatus({ type: 'success', message: t.booking.form.successMessage || 'Paldies! Jūsu pieteikums ir nosūtīts.' })
        e.target.reset()
      } else {
        // Fallback: open mailto
        window.location.href = mailtoLink
        setFormStatus({ type: 'info', message: t.booking.form.fallbackMessage || 'Atveriet savu e-pasta klientu, lai nosūtītu ziņojumu.' })
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setFormStatus({ type: 'error', message: t.booking.form.errorMessage || 'Radās kļūda. Lūdzu, mēģiniet vēlāk vai sazinieties tieši ar mums.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

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
              <a href="mailto:asnatesjsk@inbox.lv">asnatesjsk@inbox.lv</a>
            </span>
            <span className="announcement__item">
              <svg aria-hidden="true" focusable="false" viewBox="0 0 20 20">
                <path d="M5.7 2.7c.2-.4.7-.6 1.1-.4l2.7 1.3c.4.2.6.6.4 1l-1.2 2.7c-.2.4-.6.6-1 .4l-1-.4a11 11 0 0 0 5.2 5.2l-.3-.9c-.2-.4 0-.8.3-1l2.7-1.2c.4-.2.8 0 1 .4l1.3 2.7c.2.4 0 .9-.4 1.1l-2.1 1c-.4.2-.9.2-1.3 0a13.5 13.5 0 0 1-7.4-7.4c-.2-.4-.2-.9 0-1.3l1-2.1z" />
              </svg>
              <a href="tel:+37128352881">+371 2 8352881</a>
            </span>
          </div>
        </div>
        <div className="nav-bar container">
              <a className="logo" href="#hero" aria-label="Škola mladých jezdců" onClick={closeMenu}>
                <span className="logo__badge">
                  <img className="logo__emblem" src={logoEmblem} alt="Asnates JSK Emblem" />
                </span>
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
                {isMobile && (
                  <li className="nav-menu-cta">
                    <a className="btn btn--outline nav-menu-cta__button" href="#booking" onClick={closeMenu}>
                      {t.navCta}
                    </a>
                    <div className="nav-language-flags">
                      {languageOrder.map((code) => (
                        <button
                          key={code}
                          type="button"
                          className={`nav-language-flag nav-language-flag--${code} ${selectedLanguage === code ? 'is-active' : ''}`}
                          onClick={() => setSelectedLanguage(code)}
                          aria-label={`Switch to ${t.languages[code]}`}
                          title={t.languages[code]}
                        >
                        </button>
                      ))}
                    </div>
                  </li>
                )}
              </ul>
              {!isMobile && (
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
                  <a className="btn btn--outline nav-cta" href="#booking">
                    {t.navCta}
                  </a>
                </div>
              )}
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

        <section id="testimonials" className="section section--light">
          <div className="container">
            <div className="section__heading">
              <p className="eyebrow">{t.testimonials.eyebrow}</p>
              <h2>{t.testimonials.title}</h2>
              <p>{t.testimonials.description}</p>
            </div>
            <div className="testimonials-grid">
              {t.testimonials.items.map((testimonial, index) => (
                <article
                  className="testimonial-card"
                  key={index}
                  data-animate="fade-up"
                  style={{ transitionDelay: `${index * 90 + 120}ms` }}
                >
                  <div className="testimonial-card__rating">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`testimonial-card__star ${i < testimonial.rating ? 'is-filled' : ''}`}
                        aria-hidden="true"
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <blockquote className="testimonial-card__text">
                    "{testimonial.text}"
                  </blockquote>
                  <footer className="testimonial-card__footer">
                    <cite className="testimonial-card__author">
                      <strong className="testimonial-card__name">{testimonial.name}</strong>
                      <span className="testimonial-card__role">{testimonial.role}</span>
                    </cite>
                  </footer>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="section gallery">
          <div className="container">
            <div className="section__heading">
              <p className="eyebrow">{t.gallery.eyebrow}</p>
              <h2>{t.gallery.title}</h2>
              <p>{t.gallery.description}</p>
            </div>
            <div className="gallery-grid">
              {galleryImages.map((image, index) => (
                <figure
                  className="gallery-card"
                  key={image.src}
                  data-animate="fade-up"
                  style={{ transitionDelay: `${index * 70 + 100}ms` }}
                >
                  <button
                    type="button"
                    className="gallery-card__media"
                    onClick={() => setActiveGalleryIndex(index)}
                    aria-label={image.caption[selectedLanguage] ?? image.caption.ru}
                  >
                    <img
                      src={image.src}
                      alt={image.caption[selectedLanguage] ?? image.caption.ru}
                      loading="lazy"
                    />
                    <span className="gallery-card__overlay" />
                  </button>
                  <figcaption className="gallery-card__caption">
                    {image.caption[selectedLanguage] ?? image.caption.ru}
                  </figcaption>
                </figure>
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
              <form className="lead-form" onSubmit={handleFormSubmit} data-animate="fade-up" style={{ transitionDelay: '140ms' }}>
                <div className="form-grid">
                  <label>
                    <span>{t.booking.form.nameLabel}</span>
                    <input required type="text" name="name" placeholder={t.booking.form.namePlaceholder} disabled={isSubmitting} />
                  </label>
                  <label>
                    <span>{t.booking.form.phoneLabel}</span>
                    <input required type="tel" name="phone" placeholder={t.booking.form.phonePlaceholder} disabled={isSubmitting} />
                  </label>
                  <label className="form-grid__wide">
                    <span>{t.booking.form.serviceLabel}</span>
                    <select name="service" required defaultValue="" disabled={isSubmitting}>
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
                    <textarea name="message" rows="3" placeholder={t.booking.form.messagePlaceholder} disabled={isSubmitting} />
                  </label>
                </div>
                {formStatus.message && (
                  <div className={`form-status form-status--${formStatus.type}`} role="alert">
                    {formStatus.message}
                  </div>
                )}
                <button className="btn btn--primary" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? (t.booking.form.submitting || 'Nosūta...') : t.booking.form.submit}
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

        <section id="contacts" className="section map-section">
          <div className="container map-section__wrapper">
            <div className="map-section__content" data-animate="fade-right">
              <p className="eyebrow">{t.map.eyebrow}</p>
              <h2>{t.map.title}</h2>
              <p>{t.map.description}</p>
              <div className="map-section__address">
                <span className="map-section__label">{t.map.addressLabel}</span>
                <address>{t.map.address}</address>
              </div>
              <div className="map-section__actions">
                <a
                  className="btn btn--primary"
                  href={GOOGLE_MAPS_DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.map.googleCta}
                </a>
                <a className="btn btn--ghost" href={APPLE_MAPS_DIRECTIONS_URL} target="_blank" rel="noopener noreferrer">
                  {t.map.appleCta}
                </a>
              </div>
            </div>
            <div className="map-section__frame" data-animate="fade-left" style={{ transitionDelay: '140ms' }}>
              <iframe
                title="Asnates JSK map"
                src={GOOGLE_MAPS_EMBED_URL}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="footer__top">
            <div className="footer__brand">
              <a className="logo" href="#hero" aria-label="Škola mladých jezdců" onClick={closeMenu}>
                <span className="logo__badge">
                  <img className="logo__emblem" src={logoEmblem} alt="Asnates JSK Emblem" />
                </span>
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
                <div className="social-links">
                  <a
                    href="https://www.tiktok.com/@asnates_jsk"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                    className="social-link"
                  >
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" fill="currentColor"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/asnates_jsk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="social-link"
                  >
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="currentColor"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com/asnatesjsk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="social-link"
                  >
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="currentColor"/>
                    </svg>
                  </a>
                </div>
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

      {showScrollTop && (
        <button
          className="scroll-top"
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}

      {activeGalleryIndex !== null && (
        <div className="lightbox" role="dialog" aria-modal="true">
          <button
            type="button"
            className="lightbox__close"
            onClick={() => {
              setActiveGalleryIndex(null)
              // Restore scroll position immediately
              requestAnimationFrame(() => {
                window.scrollTo(0, scrollPositionRef.current)
              })
            }}
            aria-label="Close gallery view"
          >
            ×
          </button>
          <button
            type="button"
            className="lightbox__nav lightbox__nav--prev"
            aria-label="Previous image"
            onClick={() =>
              setActiveGalleryIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
            }
          >
            ‹
          </button>
          <figure className="lightbox__content">
            <img
              src={galleryImages[activeGalleryIndex].src}
              alt={galleryImages[activeGalleryIndex].caption[selectedLanguage] ?? galleryImages[activeGalleryIndex].caption.ru}
            />
            <figcaption>{galleryImages[activeGalleryIndex].caption[selectedLanguage] ?? galleryImages[activeGalleryIndex].caption.ru}</figcaption>
          </figure>
          <button
            type="button"
            className="lightbox__nav lightbox__nav--next"
            aria-label="Next image"
            onClick={() => setActiveGalleryIndex((prev) => (prev + 1) % galleryImages.length)}
          >
            ›
          </button>
        </div>
      )}
    </div>
  )
}

export default App
