import { useEffect, useRef, useState } from 'react'
import './App.css'
import ChatBot from './ChatBot'
import heroSlideOne from './assets/29928c4a071cb4f74476e91a3e43fc85.jpg'
import heroSlideTwo from './assets/6dc6758e044489ee9d73b2f8deda4c35.jpg'
import heroSlideThree from './assets/c94173562472c9c29813b9cba7c8d8e2.jpg'
import galleryImageOutdoor from './assets/503440501_1109185541229890_1560595072047730165_n.jpg'
import logoEmblem from './assets/bgfree.jpg'
import galleryImagePortrait from './assets/mainana.jpg'
import galleryImageCup from './assets/kupa.jpg'
import galleryImageKuboku from './assets/kuboku.jpg'
import galleryImageLfc from './assets/lfc.jpg'
import galleryImagePicss from './assets/picss.jpg'
import galleryImageKids from './assets/kids.jpg'
import galleryImageCfc from './assets/cfc.jpg'
import galleryImageTrt from './assets/trt.jpg'
import galleryImageFestival from './assets/festival.jpg'
import atimImage from './assets/atim.png'
import news1Image from './assets/news1.jpg'

const heroSlides = [heroSlideOne, heroSlideTwo, heroSlideThree]
const galleryImages = [
  {
    src: galleryImageLfc,
    caption: {
      lv: 'LJF rudens sacensības',
      en: 'LJF Autumn Competition',
      ru: 'Осенние соревнования LJF',
    },
    date: {
      lv: '01.11.2025',
      en: '1st November 2025',
      ru: '1 ноября 2025',
    },
    fullDescription: {
      lv: '📌 Šodien 1.novembrī Natālija Žubure ar poniju Kandava devās uz LJF rudens sacensībām konkūrā!\n\n🏅👏 80cm poniju maršrutā mūsu duets ierindojās godalgotajā 5.VIETĀ. 🥳\n\n🥇👏 Savu kārt, 80cm atvērtajā maršrutā starp 44 dalībniekiem, viņas palika nepārspētas iegūstot 1.VIETU!🥳 LEPOJAMIES!👏👏👏\n\nPaldies sacensību organizētājiem!🙏',
      en: '📌 Today, November 1st, Natālija Žubure with her pony Kandava went to the LJF autumn competition!\n\n🏅👏 In the 80cm pony route, our duo placed in the honorable 5th PLACE. 🥳\n\n🥇👏 In turn, in the 80cm open route among 44 participants, they remained undefeated by getting 1st PLACE!🥳 WE ARE PROUD!👏👏👏\n\nThanks to the competition organizers!🙏',
      ru: '📌 Сегодня, 1 ноября, Наталия Жубуре со своим пони Кандава отправилась на осенние соревнования LJF!\n\n🏅👏 В маршруте 80см для пони наша пара заняла почетное 5-е МЕСТО. 🥳\n\n🥇👏 В свою очередь, в открытом маршруте 80см среди 44 участников они остались непобежденными, заняв 1-е МЕСТО!🥳 МЫ ГОРДИМСЯ!👏👏👏\n\nСпасибо организаторам соревнований!🙏',
    },
  },
  {
    src: galleryImageKids,
    caption: {
      lv: 'JSK Montepals rudens sacensības',
      en: 'JSK Montepals Autumn Competition',
      ru: 'Осенние соревнования JSK Montepals',
    },
    date: {
      lv: '11.10.2025',
      en: '11th October 2025',
      ru: '11 октября 2025',
    },
    fullDescription: {
      lv: 'Vakar 11.oktobrī mūsu kluba jaunie sportisti piedalījās JSK Montepals rīkotajās rudens treniņsacensībās!\n\nIevērojamākie rezultāti:\n\n🏅4.VIETA Pārsla Balode ar Neo 50/60cm maršrutā👏\n\n🎀 Bez soda punktiem kārtiņu un krustiņu maršrutā nostartēja mūsu jaunākie dalībnieki:\n\nSavā debijā,Amēlija Roze Pētersone ar Neo👏\n\nAnna Bunclere ar Katalīnu👏\n\nKā arī Natālija Žubure ar savu jauno cīņas biedri Dāldera Pērli un Čilliju.👏\n\nVisi šie sportisti tika pie jaukām dāvaniņām!🎁\n\nJāatzīmē, ka skaisti nostartēja arī mūsu treneres audzēkne no Muižkalna staļļi Rebeka Grīniņa ar Sansu!\n\n🥉Iegūstot godalgoto 3.VIETU 60/80cm maršrutā.\n\nApsveicam mūsu sportistus un novēlam cītīgi gatavoties nākošajai sezonai!💪👏👏👏\n\nLiels paldies sacensību organizētājiem par doto iespēju jaunajiem jātniekiem un jaunajiem zirgiem ,nepiespiestā gaisotnē, gūt pieredzi un mācīties!🙏Paldies arī par saldumiņiem😋Kuri mūsu klubam tika piešķirti kā par otro lielāko maršrutu skaitu!💪😅',
      en: 'Yesterday, October 11th, young athletes of our club took part in the autumn training competition organized by JSK Montepals!\n\nThe most notable results:\n\n🏅4th PLACE Parsla Balode with Neo in the 50/60cm route👏\n\n🎀 Our youngest participants started the cards and crosses route without penalty points:\n\nIn her debut, Amelia Rose Pattersone with Neo👏\n\nAnna Bunclere with Catalina 👏\n\nAs well as Natālija Žubure with her new wrestling partner Dalder Pearl and Chilli.👏\n\nAll of these athletes got some nice gifts!🎁\n\nIt should be noted that our coaching student from Muižkalna staļļi Rebeka Grīniņa with Sansa had a beautiful start!\n\n🥉Getting the prize 3rd PLACE in the 60/80cm route.\n\nCongratulations to our athletes and wish them to prepare hard for the coming season!💪👏👏👏\n\nMany thanks to the competition organizers for giving the opportunity to young riders and young horses in an unpressured atmosphere, to gain experience and learn!🙏Thanks also for the sweets😋Which were awarded to our club as the second highest number of routes!💪😅',
      ru: 'Вчера, 11 октября, молодые спортсмены нашего клуба приняли участие в осенних тренировочных соревнованиях, организованных JSK Montepals!\n\nНаиболее заметные результаты:\n\n🏅4-е МЕСТО Парсла Балоде с Нео в маршруте 50/60см👏\n\n🎀 Без штрафных очков в маршруте карточек и крестиков стартовали наши самые юные участники:\n\nВ своем дебюте, Амелия Роуз Паттерсон с Нео👏\n\nАнна Бунклере с Каталиной 👏\n\nА также Наталия Жубуре со своим новым боевым партнером Далдером Перлом и Чилли.👏\n\nВсе эти спортсмены получили приятные подарки!🎁\n\nСледует отметить, что красиво стартовала и наша ученица тренера из Муйжкална сталли Ребека Грининя с Сансой!\n\n🥉Получив призовое 3-е МЕСТО в маршруте 60/80см.\n\nПоздравляем наших спортсменов и желаем им усердно готовиться к предстоящему сезону!💪👏👏👏\n\nБольшое спасибо организаторам соревнований за предоставленную возможность молодым всадникам и молодым лошадям в непринужденной атмосфере получить опыт и учиться!🙏Спасибо также за сладости😋Которые были присуждены нашему клубу за второе по количеству маршрутов!💪😅',
    },
  },
  {
    src: galleryImageCfc,
    caption: {
      lv: 'Jauniešu kauss 2025',
      en: 'Young Riders Cup 2025',
      ru: 'Кубок молодых всадников 2025',
    },
    date: {
      lv: '2025',
      en: '2025',
      ru: '2025',
    },
    fullDescription: {
      lv: 'Ir noslēdzies Jauniešu kauss 2025 Jauno Jātnieku Skolā.\n\n📌Mūsu trešās dienas rezultāti!\n\n🏅6.VIETA Pārsla Balode ar Neo 50cm ideālā laikā maršrutā.👏\n\n🥇🏆1.VIETA Natālija Žubure ar Kandavu un\n\n🥉3.VIETA  Marta Lāma ar Sidabras  75cm maršrutā divās fāzēs bez ierobežojumiem.\n\n🥈 2.VIETA Natālijai ar Kandavu 90cm ātruma maršrutā starp 2.grupas ponijiem.\n\n🥇🏆 1.VIETA Rēzija Ēce ar Katalīnu 90cm 2 fāzēs bez ierobežojumiem!\n\n📌Kopvērtējumā sīvā cīņā starp 2.grupas ponijiem uzvarēja:\n\n🥇🏆 1.VIETA Bille Pušinska ar Carmina Burana,\n\n🥈🏆 2.VIETA Lauma Saide ar Armute,\n\n🥉🏆 3.VIETĀ  Marta Lāma ar Sidabras.\n\n..bet 4.vietā ierindojās Natālija Žubure ar Kandavu!👏\n\nApsveicam visus sportistus!\n\nLai veiksmīgi starti arī turpmāk!\n\n✨ Liels paldies Young Riders School un pārējiem  sacensību organizatoriem par ieguldīto darbu, enerģiju un rūpēm!🙏\n\nPateicoties jums, varējām baudīt aizraujošu atmosfēru un patiesu sporta garu. 🏆💪😁',
      en: 'The Young Riders Cup 2025 has concluded at the Young Riders School.\n\n📌Our third day results!\n\n🏅6th PLACE Parsla Balode with Neo in the 50cm route with ideal time.👏\n\n🥇🏆1st PLACE Natālija Žubure with Kandava and\n\n🥉3rd PLACE Marta Lāma with Sidabras in the 75cm route in two phases without restrictions.\n\n🥈 2nd PLACE Natālija with Kandava in the 90cm speed route among 2nd group ponies.\n\n🥇🏆 1st PLACE Rēzija Ēce with Katalīna in the 90cm route in 2 phases without restrictions!\n\n📌In the overall standings, in a fierce battle among 2nd group ponies, the winners were:\n\n🥇🏆 1st PLACE Bille Pušinska with Carmina Burana,\n\n🥈🏆 2nd PLACE Lauma Saide with Armute,\n\n🥉🏆 3rd PLACE Marta Lāma with Sidabras.\n\n..but in 4th place was Natālija Žubure with Kandava!👏\n\nCongratulations to all athletes!\n\nMay successful starts continue in the future!\n\n✨ Many thanks to Young Riders School and the other competition organizers for their invested work, energy, and care!🙏\n\nThanks to you, we were able to enjoy an exciting atmosphere and true sportsmanship. 🏆💪😁',
      ru: 'Завершился Кубок молодых всадников 2025 в Школе молодых всадников.\n\n📌Результаты нашего третьего дня!\n\n🏅6-е МЕСТО Парсла Балоде с Нео в маршруте 50см с идеальным временем.👏\n\n🥇🏆1-е МЕСТО Наталия Жубуре с Кандавой и\n\n🥉3-е МЕСТО Марта Лама с Сидабрас в маршруте 75см в двух фазах без ограничений.\n\n🥈 2-е МЕСТО Наталии с Кандавой в скоростном маршруте 90см среди пони 2-й группы.\n\n🥇🏆 1-е МЕСТО Резия Эце с Каталиной в маршруте 90см в 2 фазах без ограничений!\n\n📌В общем зачете, в ожесточенной борьбе среди пони 2-й группы победили:\n\n🥇🏆 1-е МЕСТО Билле Пушинска с Кармина Бурана,\n\n🥈🏆 2-е МЕСТО Лаума Сайде с Армуте,\n\n🥉🏆 3-е МЕСТО Марта Лама с Сидабрас.\n\n..но на 4-м месте оказалась Наталия Жубуре с Кандавой!👏\n\nПоздравляем всех спортсменов!\n\nПусть успешные старты продолжаются и в будущем!\n\n✨ Большое спасибо Школе молодых всадников и другим организаторам соревнований за вложенный труд, энергию и заботу!🙏\n\nБлагодаря вам мы смогли насладиться захватывающей атмосферой и истинным спортивным духом. 🏆💪😁',
    },
  },
  {
    src: galleryImageKuboku,
    caption: {
      lv: 'Jauniešu kauss 2025 - 2. diena',
      en: 'Young Riders Cup 2025 - Day 2',
      ru: 'Кубок молодых всадников 2025 - День 2',
    },
    date: {
      lv: '20.09.2025',
      en: '20th September 2025',
      ru: '20 сентября 2025',
    },
    fullDescription: {
      lv: 'Vakar, 20.septembrī noritēja 2.diena Jauniešu kausā 2025 Jauno jātnieku skola\n\nMūsu rezultāti!\n\n‼️70cm ātruma maršrutā Natālija Žubure ar Kandavu  un Marta Lāma ar Sidabras ļoti sīvā cīņā cīnījās par uzvaru!Tikai pāris sekundes daļas šķīra mūsu sportiskos pārus!\n\nRezultātā 🏆🥇1.VIETU izcīnīja Natālija ar savu cīņas biedru,bet Marta ar savu kompanjonu palika godpilnajā 2.VIETĀ!💪👏\n\n80cm ātruma maršrutā starp 2.grupas ponijiem 3.VIETU izcīnīja  Marta ar Sidabras,bet godpilnā 🏅👏\n\n5.VIETA  Natālijai ar Kandavu!\n\nJāpiebilst ka Rēzija Ēce ar Katalīnu pirmo reiz  cīnījās maršrutā 105/110 augstiem šķēršļiem.Rezultāts bija Apsveicam! Tikai viena gāzta kārtiņa atturēja meitenes no godalgas!\n\nApsveicam savus sportistus!👏👏👏\n\nNovēlam veiksmīgus startus arī šodien un ar Dievpalīgu tikai uz priekšu!💪',
      en: 'Yesterday, September 20th, the 2nd day of the Young Riders Cup 2025 took place at the Young Riders School.\n\nOur results!\n\n‼️In the 70cm speed route, Natālija Žubure with Kandava and Marta Lāma with Sidabras fought very fiercely for victory! Only a few seconds separated our sports pairs!\n\nAs a result 🏆🥇1st PLACE was won by Natālija with her fighting partner, but Marta with her companion remained in the honorable 2nd PLACE!💪👏\n\nIn the 80cm speed route among 2nd group ponies, 3rd PLACE was won by Marta with Sidabras, but in the honorable 🏅👏\n\n5th PLACE for Natālija with Kandava!\n\nIt should be noted that Rēzija Ēce with Katalīna competed for the first time in a route with 105/110cm high obstacles. The result was Congratulations! Only one knocked down pole kept the girls from a prize!\n\nCongratulations to our athletes!👏👏👏\n\nWe wish successful starts today as well and with God\'s help, only forward!💪',
      ru: 'Вчера, 20 сентября, прошёл 2-й день Кубка молодых всадников 2025 в Школе молодых всадников.\n\nНаши результаты!\n\n‼️В скоростном маршруте 70см Наталия Жубуре с Кандавой и Марта Лама с Сидабрас очень ожесточенно боролись за победу! Всего несколько секунд разделяли наши спортивные пары!\n\nВ результате 🏆🥇1-е МЕСТО завоевала Наталия со своим боевым партнером, а Марта со своим компаньоном осталась на почетном 2-м МЕСТЕ!💪👏\n\nВ скоростном маршруте 80см среди пони 2-й группы 3-е МЕСТО завоевала Марта с Сидабрас, а на почетном 🏅👏\n\n5-м МЕСТЕ Наталия с Кандавой!\n\nСледует отметить, что Резия Эце с Каталиной впервые соревновалась в маршруте с препятствиями высотой 105/110см. Результат был Поздравляем! Только один сбитый шест удержал девушек от награды!\n\nПоздравляем наших спортсменов!👏👏👏\n\nЖелаем успешных стартов сегодня и с Божьей помощью, только вперед!💪',
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
      lv: 'Jauniešu kauss 2025 - 1. diena',
      en: 'Young Riders Cup 2025 - Day 1',
      ru: 'Кубок молодых всадников 2025 - День 1',
    },
    date: {
      lv: '19.09.2025',
      en: '19th September 2025',
      ru: '19 сентября 2025',
    },
    fullDescription: {
      lv: 'Šodien 19.septembrī ņēmām dalību  Jauniešu kausā 2025. Young Riders School.\n\nMūsu ievērojamākie rezultāti.\n\n🥈2.VIETA Pārsla Balode  ar poniju Neo  krustiņu maršrutā uz ideālo laiku.\n\n🏆🥇 1.VIETA Marta Lāma ar poniju Sidabras 60/70cm atvērtajā ātruma maršrutā.\n\n🥈2.VIETA Natālija Žubure ar poniju Kandava.\n\n🏆🥇 1.VIETA  Natālijai Žuburei ar Kandavu  80/90 cm augstajā ātruma  maršrutā starp 2.grupas ponijiem.\n\n🏅5.VIETA Marta Lāma ar Sidabras.\n\n🏆🥇1.VIETA Rēzija Ēce ar zirgu Katalīna 80/90 cm atvērtajā 2 fāžu maršrutā.\n\nApsveicam mūsu sportistus !👏👏👏 Lai Dievs dod un tik pat veiksmīgi starti arī turpmāk!🙏',
      en: 'Today, September 19th, we took part in the Young Riders Cup 2025. Young Riders School.\n\nOur most notable results.\n\n🥈2nd PLACE Parsla Balode with pony Neo in the crosses route with ideal time.\n\n🏆🥇 1st PLACE Marta Lāma with pony Sidabras in the 60/70cm open speed route.\n\n🥈2nd PLACE Natālija Žubure with pony Kandava.\n\n🏆🥇 1st PLACE for Natālija Žubure with Kandava in the 80/90 cm high speed route among 2nd group ponies.\n\n🏅5th PLACE Marta Lāma with Sidabras.\n\n🏆🥇1st PLACE Rēzija Ēce with horse Katalīna in the 80/90 cm open 2-phase route.\n\nCongratulations to our athletes!👏👏👏 May God grant and may starts be just as successful in the future!🙏',
      ru: 'Сегодня, 19 сентября, мы приняли участие в Кубке молодых всадников 2025. Школа молодых всадников.\n\nНаши наиболее заметные результаты.\n\n🥈2-е МЕСТО Парсла Балоде с пони Нео в маршруте крестиков с идеальным временем.\n\n🏆🥇 1-е МЕСТО Марта Лама с пони Сидабрас в открытом скоростном маршруте 60/70см.\n\n🥈2-е МЕСТО Наталия Жубуре с пони Кандава.\n\n🏆🥇 1-е МЕСТО для Наталии Жубуре с Кандавой в высоком скоростном маршруте 80/90 см среди пони 2-й группы.\n\n🏅5-е МЕСТО Марта Лама с Сидабрас.\n\n🏆🥇1-е МЕСТО Резия Эце с лошадью Каталина в открытом 2-фазном маршруте 80/90 см.\n\nПоздравляем наших спортсменов!👏👏👏 Пусть Бог даст и пусть старты будут столь же успешными в будущем!🙏',
    },
  },
  {
    src: galleryImagePicss,
    caption: {
      lv: 'Fotosesija',
      en: 'Photoshoot',
      ru: 'Фотосессия',
    },
    date: {
      lv: '2025',
      en: '2025',
      ru: '2025',
    },
    fullDescription: {
      lv: 'Profesionāla fotosesija ar zirgiem un jātniekiem. Individuālas un ģimenes fotosesijas, komerciālie projekti un portreti.',
      en: 'Professional photoshoots with horses and riders. Individual and family sessions, commercial projects, and portraits.',
      ru: 'Профессиональная фотосессия с лошадьми и всадниками. Индивидуальные и семейные фотосессии, коммерческие проекты и портреты.',
    },
  },
  {
    src: galleryImageFestival,
    caption: {
      lv: 'Bērnu svētki Ventspils bērnu pilsētiņā',
      en: 'Children\'s Festival in Ventspils Children\'s Town',
      ru: 'Детский праздник в Детском городке Вентспилса',
    },
    date: {
      lv: '2025',
      en: '2025',
      ru: '2025',
    },
    fullDescription: {
      lv: 'Bērnu svētkos, Ventspils bērnu pilsētiņā!',
      en: 'At the Children\'s Festival in Ventspils Children\'s Town!',
      ru: 'На детском празднике в Детском городке Вентспилса!',
    },
  },
  {
    src: galleryImageTrt,
    caption: {
      lv: 'Izjāde ar zirgiem uz jūru',
      en: 'Horseback riding to the sea',
      ru: 'Верховая прогулка к морю',
    },
    date: {
      lv: '2025',
      en: '2025',
      ru: '2025',
    },
    fullDescription: {
      lv: '‼️PIEDĀVĀJAM IZJĀDES AR ZIRGIEM UZ JŪRU!‼️\n\n🐴 Vai sapņo par mierpilnu izjādi cauri mežam  līdz pat jūras krastam? Mēs piedāvājam aizraujošu  piedzīvojumu gan iesācējiem,gan pieredzējošiem jātniekiem! Izbaudi dabas skaistumu zirga mugurā!🏇😍\n\nIEKĻAUTS:\n\n*Izjāde 1-2h (mežs+jūras krasts)\n\n*Draudzīgi un pieredzējuši zirgi\n\n*Profesionāls pavadonis un drošības instrukcija\n\n*Pēc vēlēšanās iespēja pavadīt laiku kopā ar zirgiem/ponijiem arī pirms/pēc izjādes.',
      en: '‼️WE OFFER HORSEBACK RIDES TO THE SEA!‼️\n\n🐴 Do you dream of a peaceful ride through the forest to the seashore? We offer an exciting adventure for both beginners and experienced riders! Enjoy the beauty of nature on horseback!🏇😍\n\nINCLUDED:\n\n*Riding 1-2h (forest+seashore)\n\n*Friendly and experienced horses\n\n*Professional guide and safety instruction\n\n*Optional opportunity to spend time with horses/ponies also before/after riding.',
      ru: '‼️ПРЕДЛАГАЕМ ВЕРХОВЫЕ ПРОГУЛКИ К МОРЮ!‼️\n\n🐴 Мечтаете о спокойной прогулке через лес к морскому берегу? Мы предлагаем захватывающее приключение как для начинающих, так и для опытных всадников! Наслаждайтесь красотой природы верхом на лошади!🏇😍\n\nВКЛЮЧЕНО:\n\n*Прогулка 1-2ч (лес+морской берег)\n\n*Дружелюбные и опытные лошади\n\n*Профессиональный проводник и инструктаж по безопасности\n\n*По желанию возможность провести время с лошадьми/пони также до/после прогулки.',
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
      { href: '#about', label: 'Par mums' },
      { href: '#services', label: 'Pakalpojumi' },
      { href: '#gallery', label: 'Galerija' },
      { href: '#news', label: 'Jaunumi' },
      { href: '#contacts', label: 'Kontakti' },
    ],
    navCta: 'Pieteikties',
    hero: {
      eyebrow: 'Asnates JSK',
      title: 'Šeit sākas ceļš uz draudzību ar zirgiem',
      primaryCta: 'Pieteikties',
      secondaryCta: 'Uzzināt vairāk',
    },
    services: {
      heading: {
        eyebrow: 'Pakalpojumi',
        title: 'Tur kur dzimst uzticība starp cilvēku un zirgu',
      },
      cards: [
        {
          title: 'Zirgu uzturēšana',
          description:
            'Pilnvērtīga barošana, ikdienas pastaigas, solārijs, pakaiši un individuāla aprūpe modernās stallēs.',
          cta: 'Uzzināt vairāk',
        },
        {
          title: 'Jāšanas treniņi',
          description:
            'Individuālas un grupu nodarbības bērniem un pieaugušajiem, konkūra programma un droša iepazīšanās ar zirgiem.',
          cta: 'Uzzināt vairāk',
        },
        {
          title: 'Pasākumi un ekskursijas',
          description:
            'Korpozīciju programmas, ekskursijas pa kompleksu, dāvanu kartes un sezonāli piedzīvojumi visai ģimenei.',
          cta: 'Uzzināt vairāk',
        },
        {
          title: 'Fotosesija',
          description:
            'Profesionāla fotosesija ar zirgiem un jātniekiem. Individuālas un ģimenes fotosesijas, komerciālie projekti un portreti.',
          cta: 'Uzzināt vairāk',
        },
      ],
    },
    about: {
      eyebrow: 'Par mums',
      title: 'Asnates Jātnieku Sporta Klubs — profesionāla jāšanas skola',
      body:
        'Asnates JSK ir moderns jāšanas sporta centrs, kas atrodas Ventspils novada Vārves pagastā, Glužos. Mēs piedāvājam pilnvērtīgu jāšanas izglītību bērniem un pieaugušajiem, apvienojot Eiropas līmeņa infrastruktūru, pieredzējušus trenerus un individuālu pieeju katram jātniekam. Mūsu mērķis ir attīstīt gan iesācējus, gan profesionālus sportistus, veidojot drošu un atbalstošu vidi visiem zirgu un jāšanas mīļotājiem.',
      bullets: [
        'Profesionāla jāšanas skola ar modernu infrastruktūru',
        'Pieredzējuši un sertificēti treneri',
        'Individuālas un grupu nodarbības visām vecuma grupām',
        'Nacionālā sporta bāze ar Eiropas standartiem',
        'Regulāras sacensības un treniņu nometnes',
        'Pilnvērtīga zirgu uzturēšana un aprūpe',
      ],
      primaryCta: 'Sazināties',
      secondaryCta: 'Jaunumi',
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
        description: 'Mūsu kluba dzīve ir piepildīta ar elpu aizraujošiem startiem, sirsnīgām tikšanās reizēm un kopīgu prieku par panākumiem.',
      },
      items: [
        {
          date: '25. decembris 2025',
          title: 'Ziemassvētku labdarības pasākums — jāšanas nodarbības',
          description:
            'Pievienojieties mums 25. decembrī īpašajam Ziemassvētku labdarības pasākumam! Organizējam jāšanas nodarbības visai ģimenei, kurās varēsiet izbaudīt brīnišķīgu laiku kopā ar zirgiem un vienlaikus atbalstīt labdarību. Pasākums ir piemērots gan iesācējiem, gan pieredzējušiem jātniekiem.',
          image: news1Image,
          cta: 'Pieteikties',
        },
        {
          date: '07. decembris 2025',
          title: 'Asnates JSK 5 gadu jubileja',
          description:
            'Svinam īpašu brīdi — Asnates Jātnieku Sporta Kluba 5 gadu jubileju! 7. decembrī aicinām visus draugus, audzēkņus un ģimenes uz svinīgām aktivitātēm, demonstrācijām un īpašām nodarbībām. Kopā atzīmēsim mūsu kopīgo ceļu un sasniegumus!',
          cta: 'Uzzināt vairāk',
        },
        {
          date: '29. aprīlis 2025',
          title: 'Lielā Talka 2025 Jauno jātnieku skolā',
          description:
            '26. aprīlī pulcējām brīvprātīgos un draugus, lai sakoptu teritoriju un pavadītu laiku dabā. Kopā paveicām lielisku darbu!',
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
        emailLabel: 'E-pasts',
        emailPlaceholder: 'marija@example.com',
        phoneLabel: 'Tālrunis',
        phonePlaceholder: '+371 2 8352881',
        serviceLabel: 'Vēlamais pakalpojums',
        servicePlaceholder: 'Izvēlieties pakalpojumu',
        services: [
          { value: 'boarding', label: 'Zirgu uzturēšana' },
          { value: 'excursion', label: 'Ekskursija' },
          { value: 'walk', label: 'Pastaiga' },
          { value: 'ride', label: 'Izjāde' },
          { value: 'carriage', label: 'Vizināšanās' },
          { value: 'training', label: 'Treniņš' },
          { value: 'photoshoot', label: 'Fotosesija' },
          { value: 'photo-adventure', label: 'Zirgu fotopiedzīvojums' },
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
          name: 'Paula – Laits',
          role: 'Zirgu saimniece',
          rating: 5,
          text: 'Man patīk apstākļi, tie tur ir piemēroti tieši manam zirgam. Visvairāk man patīk atmosfēra un vide. Mana zirga ikdienas aprūpe ir ideāla, jo manam zirgam nekas netrūkst, ir pieskatīts, aprūpēts un apčubināts. Manuprāt atšķiras ar to, ka zirgiem vienmēr ir pievērsta 100% uzmanība un vienmēr tiks paziņots, ja kaut kas nebūs tā. Es noteikti ieteiktu Asnates JSK arī citiem, jo 100% par Jūsu zirgu parūpēsies, apčubinās un nekad nekas netrūks.',
        },
        {
          name: 'Linda – Masarati, Čillijs',
          role: 'Zirgu saimniece',
          rating: 5,
          text: 'Jo plašas ganības, treniņu laukums, laba aprūpe. Vieta, cilvēki. Aprūpe ir laba – tīrība, labs siens, papildbarības, svaigs ūdens, regulāri tiek piesaistīti veterinārārsti. Zirgi noteikti jūtas labi, jo daudz zirgu, un zirgs ir bara dzīvnieks, kā arī plašums kur izskrieties. Nav pieredzes ar citiem zirgu staļļiem, bet domāju ka aprūpe ir augstā līmenī un pieņemamas turēšanas cenas. Jā, ieteiktu. Jo laba aprūpe, Asnatei ir liela pieredze un zināšanas par zirgiem.',
        },
        {
          name: 'Anastasija – Advokāts',
          role: 'Zirgu saimniece',
          rating: 5,
          text: 'Asnati jau zinu kopš Tērvetes laikiem.. viņa ir ļoti zinošs zirdzinieks ar labu dvēseli, pēdējo atdos lai tikai zirgiem būtu labi, pārdzīvo par katru zirgu. Ar Asnati var visu sarunāt.. viņas siltā attieksme pret zirgiem, cilvēkiem un darbu, priekš manis ir pirmajā vietā. Pie Asnates IR tā individuālā zirgu aprūpe, viņa par katru zirgu rūpējas kā par savu. Pirmais jau tas ir tas, ka Asnatei ir milzīga pieredze ar zirgiem, it īpaši ar jaunzirgiem. Otrais tas ir tas, ka te ir katram zirgam individuāla pieeja.. un trešais ir tas, ka Asnatei pie visa ko viņa dara ir profesionāla attieksme.',
        },
        {
          name: 'Baiba - Sparta',
          role: 'Zirgu saimniece',
          rating: 5,
          text: 'Mēs zirgu nopirkām no Asnates. Ļoti patīk, ka zirgi 24/7 var dzīvot ārā savā vidē ar pieeju nojumēm. Zirgi ir paēduši, izlutināti, samīļoti. Visvairāk mums patīk vide, cilvēki un atmosfēra. Atmosfēra tāda, ka var justies kā mājās. Cilvēki- bez uzpūtībām, bez iedomīgumu – mīļi cilvēki. Pie Asnates ir ļooti laba zirgu aprūpe. Daudz staļļos es neesmu bijusi, bet tajos kuros esmu varu salīdzināt, ka pie Asnates zirgi ir aprūpēti, pabaroti… pie Asnates zirgs ir vērtīgāks par cilvēku.',
        },
        {
          name: 'Rēzija',
          role: 'Jātniece, 16 gadi',
          rating: 5,
          text: 'Es nodarbojos jau astoņus gadus. Kad man bija 8 gadi, Ventspilī bija pasākums ,,Vakara pastaiga" un Asnate ar zirgiem vizināja bērnus. Mēs piegājām, pajautājām, vai ir iespēja pie viņas jāt ar zirgu, un tā sākās manas gaitas pie Asnates.',
        },
        {
          name: 'Samanta',
          role: 'Jātniece, 23 gadi',
          rating: 5,
          text: 'Uz treniņiem eju jau labu laiku pie Asnates JSK. Man ļoti patīk tā atmosfēra, kas tur valda. Visi ir draudzīgi un izpalīdzīgi. Esmu ievērojusi, ka daudzos staļļos tā nav, manā uztverē tas ir ļoti svarīgi. Manuprāt Asnate ir ļoti zinoša un izglītota trenere. Liels plus manā skatījumā ir, ka trenere nešķiro zirgus, tajā nozīmē, vai savs personīgais, vai kāda privātais, visus aprūpē un samīļo vienādi. Treniņos man ļoti patīk, ka trenere pievērš uzmanību visiem, un pārredzēs katru jātnieku.',
        },
        {
          name: 'Sāra',
          role: 'Jātniece, 14 gadi',
          rating: 5,
          text: 'ES jau pie Asnates jāju piecus gadus, drīz būs sestais. Mani draudzene Elīza, kura arī brauc pie Asnates, paņēma līdzi uz treniņu Popē, un man ļoti iepatikās. Tā es uzsāku trenēties pie Asnates un tā vēl turpinu. Tagad jau man ir pašai savs personīgais zirgs – Sparta.',
        },
        {
          name: 'Anna',
          role: 'Jātniece, 8 gadi',
          rating: 5,
          text: 'Es pie Asnates trenējos divus gadus. Man te ir daudz jauni draugi un mana mīlulīte Adele. Es esmu iemīlējusi zirgus pateicoties Asnatei, kuru iepazinām, jo gāja ar zirgiem uz jūru gar mūsu māju, tad tētis mani šeit atveda.',
        },
        {
          name: 'Pārsla',
          role: 'Jātniece, 14 gadi',
          rating: 5,
          text: 'Es jāju vienu gadu. Es pie Asnates eju, tāpēc, ka kamēr es šeit nāku esmu iepazinusi tik daudz jaunus cilvēkus un ieguvusi tik daudz jaunus draugus. Viss Asnates JSK klubs ir mana, kā otrā ģimene. Asnate pati ir ļoti fantastiska trenere, mēs viss klubiņš viņu tik ļoti mīlam. Un bez Asnates mēs nebūtu sasnieguši to, ko mēs esam tagad sasnieguši zirgu jāšanā.',
        },
        {
          name: 'Zane',
          role: 'Elizabetes mamma',
          rating: 5,
          text: 'Asnates JSK Elizabetes dzīvē ienāca tieši tajā laikā, kad to vajadzēja dvēselītei. Šie treniņi un kopā būšana ar zirgiem viņai ir gan mierinājums, gan sirds lieta. Milzīgs Paldies Asnatei par šo milzīgo darbu, un sirds ieguldījumu. Kad mans bērns ir pie Asnates, es zinu, ka ar viņu viss ir labi, un tiek arī iemācītas lietas, kas dzīves laikā ļoti noderēs.',
        },
        {
          name: 'Jolanta',
          role: 'Vecāki',
          rating: 5,
          text: 'Mana sirdslieta vienmēr ir bijuši zirgi, lai gan ne vienmēr izdodas sevi palutināt ar izjādēm. Tieši tāpēc katra reize pie Asnates ir īpaša. Pie Asnates vienmēr esam mīļi gaidīti – viņa patiesi rūpējas par saviem jātniekiem un to jūt ik solī. Asnate rada drošības sajūtu, viņa vienmēr apjautājas, vai viss ir kārtībā, vai visi tiek līdzi un jūtas ērti. Izjādes pie viņas sniedz tikai pozitīvas emocijas – gan mieru, gan prieku, gan patiesu saikni ar zirgiem.',
        },
      ],
    },
    map: {
      eyebrow: 'Kur mūs atrast',
      title: 'Atrodi Asnates JSK kartē',
      description:
        'Mūsu jātnieku bāze atrodas klusajā Ventspils novada Vārves pagastā. Droši plānojiet vizīti – pie mums ērti nokļūt ar auto vai kopā ar komandu.',
      addressLabel: 'Adrese',
      address: 'Gluži, Vārves pagasts, Ventspils novads, LV-3623',
      googleCta: 'Atvērt Google Maps',
      appleCta: 'Atvērt Apple Maps',
    },
    footer: {
      intro:
        'Laipni lūdzam Asnates JSK — vietā, kur ikviens var atklāt mīlestību pret zirgiem un attīstīt sportiskās prasmes.',
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
          { label: 'Pasākumi un ekskursijas', href: '#services' },
          { label: 'Fotosesija', href: '#services' },
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
        rights: '© 2025 Asnates JSK. Visas tiesības aizsargātas.',
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
      { href: '#about', label: 'About' },
      { href: '#services', label: 'Services' },
      { href: '#gallery', label: 'Gallery' },
      { href: '#news', label: 'News' },
      { href: '#contacts', label: 'Contacts' },
    ],
    navCta: 'Sign up',
    hero: {
      eyebrow: 'Asnates JSK',
      title: 'Here begins the journey to friendship with horses',
      primaryCta: 'Book now',
      secondaryCta: 'Discover more',
    },
    services: {
      heading: {
        eyebrow: 'Services',
        title: 'Where trust is born between human and horse',
      },
      cards: [
        {
          title: 'Horse boarding',
          description:
            'Complete feeding plan, daily turnout, solarium, bedding, and tailored care in modern stables.',
          cta: 'Learn more',
        },
        {
          title: 'Riding lessons',
          description:
            'Individual and group sessions for children and adults, show-jumping programmes, and a safe introduction to horses.',
          cta: 'Learn more',
        },
        {
          title: 'Events & tours',
          description:
            'Corporate programmes, guided tours, gift cards, and seasonal experiences for the whole family.',
          cta: 'Learn more',
        },
        {
          title: 'Photoshoot',
          description:
            'Professional photoshoots with horses and riders. Individual and family sessions, commercial projects, and portraits.',
          cta: 'Learn more',
        },
      ],
    },
    about: {
      eyebrow: 'About us',
      title: 'Asnates Equestrian Sports Club — Professional Riding School',
      body:
        'Asnates JSK is a modern equestrian sports center located in Gluži, Vārves parish, Ventspils region. We offer comprehensive equestrian education for children and adults, combining European-level infrastructure, experienced trainers, and an individual approach to each rider. Our goal is to develop both beginners and professional athletes, creating a safe and supportive environment for all horse and riding enthusiasts.',
      bullets: [
        'Professional riding school with modern infrastructure',
        'Experienced and certified trainers',
        'Individual and group lessons for all age groups',
        'National sports base with European standards',
        'Regular competitions and training camps',
        'Complete horse boarding and care services',
      ],
      primaryCta: 'Contact us',
      secondaryCta: 'News',
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
        description: 'Our club life is filled with breathtaking starts, heartfelt meetings and shared joy for achievements.',
      },
      items: [
        {
          date: '25 December 2025',
          title: 'Christmas Charity Event — Horse Riding',
          description:
            'Join us on December 25th for a special Christmas charity event! We are organizing horse riding lessons for the whole family, where you can enjoy wonderful time with horses while supporting a good cause. The event is suitable for both beginners and experienced riders.',
          image: news1Image,
          cta: 'Sign up',
        },
        {
          date: '07 December 2025',
          title: 'Asnates JSK 5 Year Anniversary',
          description:
            'We are celebrating a special milestone — Asnates Equestrian Sports Club\'s 5 year anniversary! On December 7th, we invite all friends, students, and families to festive activities, demonstrations, and special lessons. Together we will celebrate our shared journey and achievements!',
          cta: 'Learn more',
        },
        {
          date: '29 April 2025',
          title: 'The Big Cleanup 2025 at the School',
          description:
            'On 26 April volunteers and friends joined us to tidy up the grounds and enjoy nature together. A great effort by everyone!',
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
        emailLabel: 'Email',
        emailPlaceholder: 'maria@example.com',
        phoneLabel: 'Phone',
        phonePlaceholder: '+371 2 8352881',
        serviceLabel: 'Service of interest',
        servicePlaceholder: 'Choose a service',
        services: [
          { value: 'boarding', label: 'Horse boarding' },
          { value: 'excursion', label: 'Excursion' },
          { value: 'walk', label: 'Walk' },
          { value: 'ride', label: 'Ride' },
          { value: 'carriage', label: 'Riding/Carriage Ride' },
          { value: 'training', label: 'Training' },
          { value: 'photoshoot', label: 'Photoshoot' },
          { value: 'photo-adventure', label: 'Horse Photo Adventure' },
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
      title: 'Moments from the stable and Competitions',
      description: 'Immerse yourself in our atmosphere: training sessions, competitions, and daily life with horses.',
    },
    testimonials: {
      eyebrow: 'Testimonials',
      title: 'What our clients say',
      description: 'The experience of our students and their families with us.',
      items: [
        {
          name: 'Paula – Laits',
          role: 'Horse owner',
          rating: 5,
          text: 'I like the conditions, they are suitable for my horse. What I like most is the atmosphere and environment. My horse\'s daily care is ideal, nothing is missing, he is looked after, cared for and groomed. What makes it different is that horses always get 100% attention and you will always be notified if something is not right. I would definitely recommend Asnates JSK to others, because they will take 100% care of your horse, groom it and nothing will ever be missing.',
        },
        {
          name: 'Linda – Masarati, Čillijs',
          role: 'Horse owner',
          rating: 5,
          text: 'Wide pastures, training area, good care. The place, the people. Care is good – cleanliness, good hay, supplements, fresh water, veterinarians are regularly called. Horses definitely feel good because there are many horses, and a horse is a herd animal, as well as space to run around. I think the care is at a high level and the boarding prices are reasonable. Yes, I would recommend. Because of good care, Asnate has great experience and knowledge about horses.',
        },
        {
          name: 'Anastasija – Advokāts',
          role: 'Horse owner',
          rating: 5,
          text: 'I have known Asnate since Tērvete times.. she is a very knowledgeable horse person with a good soul, gives her last so that horses are well, worries about every horse. You can discuss everything with Asnate.. her warm attitude towards horses, people and work is in first place for me. At Asnates there IS that individual horse care, she takes care of every horse as if it were her own. First, Asnate has tremendous experience with horses, especially young horses. Second, there is an individual approach to each horse.. and third, Asnate has a professional attitude towards everything she does.',
        },
        {
          name: 'Baiba - Sparta',
          role: 'Horse owner',
          rating: 5,
          text: 'We bought the horse from Asnates. I really like that horses can live outside 24/7 in their environment with access to shelters. Horses are well-fed, pampered, loved. What we like most is the environment, people and atmosphere. An atmosphere where you can feel at home. People - without pretensions, without arrogance – kind people. At Asnates there is very good horse care. I haven\'t been to many stables, but in those I have been to I can compare that at Asnates horses are cared for, fed… at Asnates the horse is more valuable than a person.',
        },
        {
          name: 'Rēzija',
          role: 'Rider, 16 years',
          rating: 5,
          text: 'I have been riding for eight years. When I was 8 years old, there was an event "Evening Walk" in Ventspils and Asnate was giving children rides with horses. We came up, asked if it was possible to ride with her, and that\'s how my journey with Asnate began.',
        },
        {
          name: 'Samanta',
          role: 'Rider, 23 years',
          rating: 5,
          text: 'I have been going to training for a long time at Asnates JSK. I really like the atmosphere there. Everyone is friendly and helpful. I have noticed that this is not the case in many stables, which is very important to me. I think Asnate is a very knowledgeable and educated trainer. A big plus in my view is that the trainer doesn\'t discriminate between horses, whether it\'s her own personal one or someone\'s private one, she cares for and pampers them all equally. In training I really like that the trainer pays attention to everyone and will see through every rider.',
        },
        {
          name: 'Sāra',
          role: 'Rider, 14 years',
          rating: 5,
          text: 'I have been riding at Asnates for five years, soon it will be the sixth. My friend Elīza, who also rides at Asnates, took me along to training with Popē, and I really liked it. That\'s how I started training at Asnates and I\'m still continuing. Now I already have my own personal horse – Sparta.',
        },
        {
          name: 'Anna',
          role: 'Rider, 8 years',
          rating: 5,
          text: 'I have been training at Asnates for two years. I have many new friends here and my sweetheart Adele. I fell in love with horses thanks to Asnate, whom we met because she was walking with horses to the sea past our house, then dad brought me here.',
        },
        {
          name: 'Pārsla',
          role: 'Rider, 14 years',
          rating: 5,
          text: 'I have been riding for one year. I go to Asnates because while I\'ve been coming here I\'ve met so many new people and made so many new friends. The whole Asnates JSK club is like my second family. Asnate herself is a fantastic trainer, we all in the club love her so much. And without Asnate we would not have achieved what we have now achieved in horse riding.',
        },
        {
          name: 'Zane',
          role: 'Elizabete\'s mother',
          rating: 5,
          text: 'Asnates JSK entered Elizabete\'s life exactly when her soul needed it. These trainings and being together with horses are both comfort and a heart matter for her. Huge thanks to Asnate for this tremendous work and heart investment. When my child is at Asnates, I know that everything is fine with her, and she also learns things that will be very useful in life.',
        },
        {
          name: 'Jolanta',
          role: 'Parent',
          rating: 5,
          text: 'Horses have always been my passion, although I don\'t always manage to treat myself to rides. That\'s why every time at Asnates is special. At Asnates we are always warmly welcomed – she truly cares about her riders and you feel it at every step. Asnate creates a sense of security, she always asks if everything is okay, if everyone is keeping up and feeling comfortable. Rides with her give only positive emotions – both peace and joy, and a true connection with horses.',
        },
      ],
    },
    map: {
      eyebrow: 'Visit us',
      title: 'Find Asnates JSK on the map',
      description:
        'Our equestrian campus is nestled in the peaceful Ventspils region of Latvia. Plan your visit easily by car or coordinate group transport with our team.',
      addressLabel: 'Address',
      address: 'Gluži, Vārves pagasts, Ventspils novads, LV-3623',
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
          'Gluži, Vārves pagasts, Ventspils novads, LV-3623',
        ],
      },
      services: {
        title: 'Services',
        items: [
          { label: 'Horse boarding', href: '#services' },
          { label: 'Riding lessons', href: '#services' },
          { label: 'Events & tours', href: '#services' },
          { label: 'Photoshoot', href: '#services' },
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
      { href: '#about', label: 'О нас' },
      { href: '#services', label: 'Услуги' },
      { href: '#gallery', label: 'Галерея' },
      { href: '#news', label: 'Новости' },
      { href: '#contacts', label: 'Контакты' },
    ],
    navCta: 'Записаться',
    hero: {
      eyebrow: 'Asnates JSK',
      title: 'Здесь начинается путь к дружбе с лошадьми',
      primaryCta: 'Записаться',
      secondaryCta: 'Узнать больше',
    },
    services: {
      heading: {
        eyebrow: 'Услуги',
        title: 'Где рождается доверие между человеком и лошадью',
      },
      cards: [
        {
          title: 'Содержание лошадей',
          description:
            'Полноценное кормление, ежедневный выгул, солярий, подстилка и индивидуальный уход в современных конюшнях.',
          cta: 'Подробнее',
        },
        {
          title: 'Тренировки верховой езды',
          description:
            'Индивидуальные и групповые занятия для детей и взрослых, тренировки по прыжкам и программа для начинающих.',
          cta: 'Подробнее',
        },
        {
          title: 'Мероприятия и экскурсии',
          description:
            'Корпоративные программы, экскурсии по комплексу, подарочные сертификаты и сезонные мероприятия для всей семьи.',
          cta: 'Подробнее',
        },
        {
          title: 'Фотосессия',
          description:
            'Профессиональная фотосессия с лошадьми и всадниками. Индивидуальные и семейные фотосессии, коммерческие проекты и портреты.',
          cta: 'Подробнее',
        },
      ],
    },
    about: {
      eyebrow: 'О нас',
      title: 'Asnates Jātnieku Sporta Klubs — профессиональная школа верховой езды',
      body:
        'Asnates JSK — современный центр конного спорта, расположенный в Глужи, волость Варве, Вентспилсский край. Мы предлагаем комплексное обучение верховой езде для детей и взрослых, сочетая инфраструктуру европейского уровня, опытных тренеров и индивидуальный подход к каждому всаднику. Наша цель — развивать как начинающих, так и профессиональных спортсменов, создавая безопасную и поддерживающую среду для всех любителей лошадей и верховой езды.',
      bullets: [
        'Профессиональная школа верховой езды с современной инфраструктурой',
        'Опытные и сертифицированные тренеры',
        'Индивидуальные и групповые занятия для всех возрастов',
        'Национальная спортивная база с европейскими стандартами',
        'Регулярные соревнования и тренировочные лагеря',
        'Полноценное содержание и уход за лошадьми',
      ],
      primaryCta: 'Связаться',
      secondaryCta: 'Новости',
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
        description: 'Жизнь нашего клуба наполнена захватывающими стартами, душевными встречами и общей радостью за достижения.',
      },
      items: [
        {
          date: '25 декабря 2025',
          title: 'Рождественское благотворительное мероприятие — верховая езда',
          description:
            'Присоединяйтесь к нам 25 декабря на специальное рождественское благотворительное мероприятие! Мы организуем занятия верховой ездой для всей семьи, где вы сможете провести замечательное время с лошадьми и одновременно поддержать благотворительность. Мероприятие подходит как для начинающих, так и для опытных всадников.',
          image: news1Image,
          cta: 'Записаться',
        },
        {
          date: '07 декабря 2025',
          title: '5-летие Asnates JSK',
          description:
            'Мы отмечаем особый момент — 5-летие конноспортивного клуба Asnates JSK! 7 декабря мы приглашаем всех друзей, учеников и семьи на праздничные мероприятия, демонстрации и специальные занятия. Вместе мы отпразднуем наш общий путь и достижения!',
          cta: 'Узнать больше',
        },
        {
          date: '29 апреля 2025',
          title: 'Lielā Talka 2025 в Школе молодых всадников',
          description:
            '26 апреля мы собрали волонтёров и друзей, чтобы привести в порядок территорию и провести время на природе. Общими усилиями сделали столько полезного!',
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
        emailLabel: 'Электронная почта',
        emailPlaceholder: 'maria@example.com',
        phoneLabel: 'Телефон',
        phonePlaceholder: '+371 2 8352881',
        serviceLabel: 'Цель визита',
        servicePlaceholder: 'Выберите услугу',
        services: [
          { value: 'boarding', label: 'Содержание лошадей' },
          { value: 'excursion', label: 'Экскурсия' },
          { value: 'walk', label: 'Прогулка' },
          { value: 'ride', label: 'Выездка' },
          { value: 'carriage', label: 'Катание/Прогулка в экипаже' },
          { value: 'training', label: 'Тренировка' },
          { value: 'photoshoot', label: 'Фотосессия' },
          { value: 'photo-adventure', label: 'Фотоприключение с лошадьми' },
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
          name: 'Паула – Лайтс',
          role: 'Владелица лошади',
          rating: 5,
          text: 'Мне нравятся условия, они подходят именно для моей лошади. Больше всего мне нравится атмосфера и окружение. Ежедневный уход за моей лошадью идеален, ничего не упущено, она под присмотром, ухожена и вычищена. Отличие в том, что лошадям всегда уделяется 100% внимания, и вас всегда уведомят, если что-то не так. Я определенно рекомендую Asnates JSK другим, потому что они будут на 100% заботиться о вашей лошади, ухаживать за ней, и ничего не будет упущено.',
        },
        {
          name: 'Линда – Масарати, Чиллис',
          role: 'Владелица лошади',
          rating: 5,
          text: 'Просторные пастбища, тренировочная площадка, хороший уход. Место, люди. Уход хороший – чистота, хорошее сено, добавки, свежая вода, регулярно привлекаются ветеринары. Лошади определенно чувствуют себя хорошо, потому что много лошадей, а лошадь – стадное животное, а также есть пространство для бега. Я думаю, что уход на высоком уровне и цены на содержание приемлемы. Да, рекомендую. Потому что хороший уход, у Аснате большой опыт и знания о лошадях.',
        },
        {
          name: 'Анастасия – Адвокат',
          role: 'Владелица лошади',
          rating: 5,
          text: 'Я знаю Аснате еще со времен Тервете.. она очень знающий конник с доброй душой, отдаст последнее, чтобы лошадям было хорошо, переживает за каждую лошадь. С Аснате можно обсудить все.. её теплое отношение к лошадям, людям и работе для меня на первом месте. У Аснате ЕСТЬ индивидуальный уход за лошадьми, она заботится о каждой лошади, как о своей. Во-первых, у Аснате огромный опыт работы с лошадьми, особенно с молодыми. Во-вторых, индивидуальный подход к каждой лошади.. и в-третьих, у Аснате профессиональное отношение ко всему, что она делает.',
        },
        {
          name: 'Байба - Спарта',
          role: 'Владелица лошади',
          rating: 5,
          text: 'Мы купили лошадь у Аснате. Мне очень нравится, что лошади могут жить на улице 24/7 в своей среде с доступом к укрытиям. Лошади сыты, избалованы, любимы. Больше всего нам нравится окружение, люди и атмосфера. Атмосфера, где можно чувствовать себя как дома. Люди - без претензий, без высокомерия – добрые люди. У Аснате очень хороший уход за лошадьми. Я не была во многих конюшнях, но в тех, где была, могу сравнить, что у Аснате лошади ухожены, накормлены… у Аснате лошадь ценнее человека.',
        },
        {
          name: 'Рейзия',
          role: 'Всадница, 16 лет',
          rating: 5,
          text: 'Я занимаюсь уже восемь лет. Когда мне было 8 лет, в Вентспилсе было мероприятие "Вечерняя прогулка", и Аснате катала детей на лошадях. Мы подошли, спросили, можно ли у неё покататься, и так начался мой путь с Аснате.',
        },
        {
          name: 'Саманта',
          role: 'Всадница, 23 года',
          rating: 5,
          text: 'Я уже давно хожу на тренировки в Asnates JSK. Мне очень нравится атмосфера там. Все дружелюбны и отзывчивы. Я заметила, что во многих конюшнях это не так, что очень важно для меня. Я думаю, что Аснате очень знающий и образованный тренер. Большой плюс в моих глазах - то, что тренер не различает лошадей, будь то её личная или чья-то частная, она заботится о всех одинаково и балует их одинаково. На тренировках мне очень нравится, что тренер уделяет внимание всем и видит каждого всадника.',
        },
        {
          name: 'Сара',
          role: 'Всадница, 14 лет',
          rating: 5,
          text: 'Я уже пять лет езжу в Аснате, скоро будет шестой. Моя подруга Элиза, которая тоже ездит в Аснате, взяла меня с собой на тренировку с Попе, и мне очень понравилось. Так я начала тренироваться в Аснате и продолжаю до сих пор. Теперь у меня уже есть своя личная лошадь – Спарта.',
        },
        {
          name: 'Анна',
          role: 'Всадница, 8 лет',
          rating: 5,
          text: 'Я тренируюсь в Аснате два года. У меня здесь много новых друзей и моя любимица Адель. Я влюбилась в лошадей благодаря Аснате, которую мы встретили, потому что она шла с лошадьми к морю мимо нашего дома, тогда папа привел меня сюда.',
        },
        {
          name: 'Парсла',
          role: 'Всадница, 14 лет',
          rating: 5,
          text: 'Я занимаюсь один год. Я хожу в Аснате, потому что пока я здесь, я познакомилась с таким количеством новых людей и завела столько новых друзей. Весь клуб Asnates JSK - это моя вторая семья. Сама Аснате - фантастический тренер, мы все в клубе так сильно её любим. И без Аснате мы бы не достигли того, чего достигли сейчас в верховой езде.',
        },
        {
          name: 'Зане',
          role: 'Мама Элизабете',
          rating: 5,
          text: 'Asnates JSK вошла в жизнь Элизабете именно тогда, когда её душе это было нужно. Эти тренировки и общение с лошадьми для неё и утешение, и дело сердца. Огромное спасибо Аснате за эту огромную работу и вложение души. Когда мой ребенок в Аснате, я знаю, что с ней всё в порядке, и она также учится вещам, которые очень пригодятся в жизни.',
        },
        {
          name: 'Йоланта',
          role: 'Родитель',
          rating: 5,
          text: 'Лошади всегда были моей страстью, хотя мне не всегда удается побаловать себя поездками. Именно поэтому каждый раз в Аснате особенный. В Аснате нас всегда тепло встречают – она действительно заботится о своих всадниках, и вы чувствуете это на каждом шагу. Аснате создает чувство безопасности, она всегда спрашивает, всё ли в порядке, все ли успевают и чувствуют себя комфортно. Поездки с ней дают только положительные эмоции – и покой, и радость, и настоящую связь с лошадьми.',
        },
      ],
    },
    map: {
      eyebrow: 'Как нас найти',
      title: 'Asnates JSK на карте',
      description:
        'Наша школа расположена в тихом уголке Вентспилсского края, в волости Варве. Мы будем рады гостям — планируйте визит на автомобиле или договоритесь о трансфере с нашей командой.',
      addressLabel: 'Адрес',
      address: 'Gluži, Vārves pagasts, Ventspils novads, LV-3623',
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
          'Gluži, Vārves pagasts, Ventspils novads, LV-3623',
        ],
      },
      services: {
        title: 'Услуги',
        items: [
          { label: 'Содержание лошадей', href: '#services' },
          { label: 'Тренировки верховой езды', href: '#services' },
          { label: 'Мероприятия и экскурсии', href: '#services' },
          { label: 'Фотосессия', href: '#services' },
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

const SERVICE_ORDER = ['boarding', 'training', 'events', 'photoshoot']

const SERVICE_DETAILS_COPY = {
  lv: {
    eyebrow: 'Detalizēts cenrādis',
    emptyTitle: 'Izvēlieties pakalpojumu',
    emptyBody: 'Spiediet “Uzzināt vairāk” pie vēlamā pakalpojuma, lai redzētu konkrētās cenas, ilgumus un atrunas.',
    notesTitle: 'Svarīgi',
  },
  en: {
    eyebrow: 'Detailed pricing',
    emptyTitle: 'Pick a service',
    emptyBody: 'Click “Learn more” on any service card to view prices, durations, and key notes for that offer.',
    notesTitle: 'Notes',
  },
  ru: {
    eyebrow: 'Детальный прайс',
    emptyTitle: 'Выберите услугу',
    emptyBody: 'Нажмите «Узнать больше» на нужной карточке, чтобы увидеть цены, длительности и важные примечания.',
    notesTitle: 'Важно',
  },
}

const SERVICE_DETAILS = {
  boarding: {
    title: { lv: 'Zirgu uzturēšana', en: 'Horse boarding', ru: 'Содержание лошадей' },
    tagline: {
      lv: 'Pilnvērtīga barošana, ikdienas pastaigas, solārijs, pakaiši un individuāla aprūpe modernās stallēs.',
      en: 'Full board with daily turnout, solarium access and attentive, modern stable care.',
      ru: 'Полный пансион: кормление, ежедневные выгулы, солярий и внимательный уход в современном конюшенном боксe.',
    },
    pricing: [
      {
        title: { lv: 'Pansija un aprūpe', en: 'Boarding & care', ru: 'Пансион и уход' },
        subtitle: {
          lv: 'Iekļauts: barošana, boksa uzkopšana, pastaigas aplokā un manēžas pieejamība.',
          en: 'Includes feeding, stall care, paddock turnout and arena access.',
          ru: 'Включает кормление, уборку денника, выгула и доступ к манежу.',
        },
        rows: [
          {
            label: { lv: 'Pilna pansija stallī', en: 'Full board in stable', ru: 'Полный пансион в деннике' },
            price: 'Pēc vienošanās',
            note: {
              lv: 'Individuāla aprūpe un ikdienas monitorings; elastīga grafika pielāgošana zirgam.',
              en: 'Individual care and daily monitoring; schedule tailored to the horse.',
              ru: 'Индивидуальный уход и ежедневный мониторинг; гибкий график под лошадь.',
            },
          },
          {
            label: { lv: 'Izbraukuma noma pasākumiem', en: 'Off-site horse/pony rental', ru: 'Аренда лошади/пони на выездные события' },
            price: 'Pēc vienošanās',
            note: {
              lv: 'Jubilejas, kāzas, korporatīvi un citi pasākumi.',
              en: 'Birthdays, weddings, corporate events and more.',
              ru: 'Дни рождения, свадьбы, корпоративы и др.',
            },
          },
        ],
      },
    ],
    notes: [
      {
        lv: 'Pieejami sertificēta trenera pakalpojumi un jaunzirgu apmācība.',
        en: 'Certified trainer support and young horse schooling available.',
        ru: 'Доступна работа с сертифицированным тренером и обучение молодых лошадей.',
      },
      {
        lv: 'Dāvanu kartes Jūsu izvēlētajā summā.',
        en: 'Gift cards available in custom amounts.',
        ru: 'Подарочные карты на выбранную сумму.',
      },
    ],
  },
  training: {
    title: { lv: 'Jāšanas treniņi', en: 'Riding training', ru: 'Тренировки верховой езды' },
    tagline: {
      lv: 'Sertificēta trenera vai instruktora nodarbības – individuāli un grupās.',
      en: 'Certified trainer or instructor sessions — individual or group.',
      ru: 'Занятия с сертифицированным тренером или инструктором — индивидуально и в группе.',
    },
    pricing: [
      {
        title: { lv: 'Treniņš ar instruktoru', en: 'Coach-led session', ru: 'Тренировка с тренером' },
        rows: [
          { label: { lv: 'Grupas treniņš', en: 'Group training', ru: 'Групповая тренировка' }, price: '25,00 €', duration: '1h', note: { lv: 'Zirga/ponija mugurā sertificēta trenera uzraudzībā.', en: 'On horse/pony under certified coach supervision.', ru: 'Верхом под контролем сертифицированного тренера.' } },
          { label: { lv: 'Grupas treniņš', en: 'Group training', ru: 'Групповая тренировка' }, price: '15,00 €', duration: '30min', note: { lv: 'Saīsināta nodarbība iesācējiem un bērniem.', en: 'Short format, great for starters and kids.', ru: 'Укороченный формат для новичков и детей.' } },
          { label: { lv: 'Individuāls treniņš', en: '1:1 training', ru: 'Индивидуальная тренировка' }, price: '45,00 €', duration: '1h', note: { lv: 'Personalizēts plāns un tehniska korekcija.', en: 'Personalised plan and technical corrections.', ru: 'Персональный план и техническая корректировка.' } },
          { label: { lv: 'Individuāls treniņš', en: '1:1 training', ru: 'Индивидуальная тренировка' }, price: '25,00 €', duration: '30min', note: { lv: 'Koncentrēts drills vai pirmā iepazīšanās.', en: 'Focused drills or first-time intro.', ru: 'Сфокусированные упражнения или первое знакомство.' } },
        ],
      },
    ],
    notes: [
      { lv: 'Jātnieka svara ierobežojums — 100 kg.', en: 'Rider weight limit — 100 kg.', ru: 'Ограничение веса всадника — 100 кг.' },
    ],
  },
  events: {
    title: { lv: 'Pasākumi un ekskursijas', en: 'Events & excursions', ru: 'Мероприятия и экскурсии' },
    tagline: {
      lv: 'Ekskursijas, izjādes līdz jūrai, vizināšanās un grupu aktivitātes.',
      en: 'Excursions, rides to the sea, carriage experiences and group moments.',
      ru: 'Экскурсии, выезды к морю, катания в упряжке и групповые активности.',
    },
    pricing: [
      {
        title: { lv: 'Ekskursija & iepazīšanās', en: 'Intro tour', ru: 'Экскурсия и знакомство' },
        rows: [
          { label: { lv: 'Iepazīšanās ar zirgiem/ponijiem', en: 'Meet the horses/ponies', ru: 'Знакомство с лошадьми/пони' }, price: '5,00 €', duration: 'līdz 1h' },
          { label: { lv: 'Iepazīšanās + kopšana', en: 'Intro + grooming', ru: 'Знакомство + уход' }, price: '10,00 €', duration: 'līdz 1h', note: { lv: 'Tīrīšana, ķemmēšana, samīļošana.', en: 'Brushing, combing, bonding time.', ru: 'Чистка, расчесывание, общение с лошадью.' } },
        ],
      },
      {
        title: { lv: 'Izjādes un pastaigas', en: 'Rides & walks', ru: 'Прогулки и выезды' },
        rows: [
          { label: { lv: 'Pastaiga līdz jūrai pie rokas', en: 'Lead walk to the sea', ru: 'Пешая прогулка к морю с лошадью в руках' }, price: '20,00 €', duration: 'līdz 1h', note: { lv: '1 zirgs, instruktors pavadībā.', en: '1 horse, escorted by instructor.', ru: '1 лошадь, сопровождение инструктора.' } },
          { label: { lv: 'Grupas izjāde (2–7 pers.)', en: 'Group ride (2–7 ppl)', ru: 'Групповая выездка (2–7 чел.)' }, price: '30,00 €', duration: 'līdz 1h', note: { lv: 'Mežs / jūra, 1 zirgs uz personu.', en: 'Forest/sea route, 1 horse per rider.', ru: 'Маршрут лес/море, 1 лошадь на всадника.' } },
          { label: { lv: 'Grupas izjāde – īsais aplis', en: 'Group ride – short loop', ru: 'Групповая выездка — короткий круг' }, price: '20,00 €', duration: 'līdz 30min' },
          { label: { lv: 'Individuāla izjāde', en: 'Private ride', ru: 'Индивидуальная выездка' }, price: '45,00 €', duration: 'līdz 1h', note: { lv: 'Mežs / jūra, 1 zirgs.', en: 'Forest/sea, 1 horse.', ru: 'Лес / море, 1 лошадь.' } },
          { label: { lv: 'Individuāla izjāde – īsais aplis', en: 'Private ride – short loop', ru: 'Индивидуальная выездка — короткий круг' }, price: '25,00 €', duration: 'līdz 30min' },
        ],
      },
      {
        title: { lv: 'Vizināšanās', en: 'Rides on lead/carriage', ru: 'Катания' },
        rows: [
          { label: { lv: 'Zirga/ponija mugurā pa laukumu', en: 'Arena pony/horse ride', ru: 'Катание на лошади/пони на манеже' }, price: '5,00 €', duration: 'sākot no' },
          { label: { lv: 'Pajūgā līdz 4 personām', en: 'Carriage ride (up to 4 ppl)', ru: 'Катание в упряжке (до 4 чел.)' }, price: '60,00 €', duration: 'līdz 1h' },
          { label: { lv: 'Pajūgā – īsais brauciens', en: 'Carriage short ride', ru: 'Упряжка — короткая поездка' }, price: '40,00 €', duration: 'līdz 30min' },
        ],
      },
    ],
    notes: [
      { lv: 'Jātnieka svara ierobežojums — 100 kg.', en: 'Rider weight limit — 100 kg.', ru: 'Ограничение веса всадника — 100 кг.' },
    ],
  },
  photoshoot: {
    title: { lv: 'Fotosesija', en: 'Photoshoot', ru: 'Фотосессия' },
    tagline: {
      lv: 'Profesionāla fotosesija ar zirgiem, kā arī īpašie fotopiedzīvojumi līdz jūrai.',
      en: 'Professional photo sessions with horses plus signature photo adventures to the sea.',
      ru: 'Профессиональная фотосессия с лошадьми и фирменные фотоприключения у моря.',
    },
    pricing: [
      {
        title: { lv: 'Zirgu fotopiedzīvojumi', en: 'Horse photo adventures', ru: 'Фотоприключения с лошадьми' },
        rows: [
          { label: { lv: 'Nr.1 — jūra + fotosesija (1 zirgs)', en: 'No.1 — sea ride + photos (1 horse)', ru: '№1 — выезд к морю + фотосессия (1 лошадь)' }, price: '50,00 €', duration: 'līdz 1.5h', note: { lv: 'Izjāde līdz jūrai, fotosesija un atpakaļceļš.', en: 'Ride to the sea, photoshoot and return.', ru: 'Выезд к морю, фотосессия и обратный путь.' } },
          { label: { lv: 'Nr.2 — jūras krasts + mugurā (1 zirgs)', en: 'No.2 — beach set + mounted (1 horse)', ru: '№2 — у моря + верхом (1 лошадь)' }, price: '40,00 €', duration: '~40min', note: { lv: 'Zirdziņš sagaida pie jūras, fotogrāfijas un izjāde mugurā.', en: 'Horse awaits at the beach; photos plus mounted segment.', ru: 'Лошадь встречает у моря; фото и верховая часть.' } },
          { label: { lv: 'Papildu zirgs (Nr.1 / Nr.2)', en: 'Extra horse (No.1 / No.2)', ru: 'Доп. лошадь (№1 / №2)' }, price: '+30,00 €', duration: '', note: { lv: '4–7 zirgi — +30 € par katru.', en: 'For 4–7 horses add €30 each.', ru: 'Для 4–7 лошадей +30 € за каждую.' } },
          { label: { lv: '2 zirgi', en: '2 horses', ru: '2 лошади' }, price: '85,00 € / 75,00 €', duration: 'Nr.1 / Nr.2' },
          { label: { lv: '3 zirgi', en: '3 horses', ru: '3 лошади' }, price: '115,00 € / 105,00 €', duration: 'Nr.1 / Nr.2' },
        ],
      },
      {
        title: { lv: 'Foto sesijas tipi', en: 'Photo session types', ru: 'Типы фотосессий' },
        rows: [
          { label: { lv: 'Amatieris', en: 'Amateur photographer', ru: 'Любитель' }, price: '50,00 € / 30,00 €', duration: 'Nr.1 / Nr.2' },
          { label: { lv: 'Monta Zile', en: 'Monta Zile (pro)', ru: 'Monta Zile (про)' }, price: '130,00 € / 80,00 €', duration: 'Nr.1 / Nr.2' },
        ],
      },
    ],
    notes: [
      { lv: 'Jātnieka svara ierobežojums — 100 kg.', en: 'Rider weight limit — 100 kg.', ru: 'Ограничение веса всадника — 100 кг.' },
      { lv: 'Rezervācijas un precizēta pieejamība pa tālruni +371 28352881.', en: 'Booking and availability via +371 28352881.', ru: 'Бронирование и уточнение доступности: +371 28352881.' },
    ],
  },
}

const languageOrder = ['lv', 'en', 'ru']

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [selectedLanguage, setSelectedLanguage] = useState('lv')
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(null)
  const [activeService, setActiveService] = useState(null)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [showScrollBottom, setShowScrollBottom] = useState(false)
  const [formStatus, setFormStatus] = useState({ type: null, message: null })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const scrollPositionRef = useRef(0)
  const languageDropdownRef = useRef(null)
  const headerRef = useRef(null)
  const serviceDetailRef = useRef(null)
  const t = translations[selectedLanguage] ?? translations.ru

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 960)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Register Service Worker for PWA
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then((registration) => {
            console.log('Service Worker registered:', registration)
            
            // Check for updates every hour
            setInterval(() => {
              registration.update()
            }, 60 * 60 * 1000)
            
            // Check for updates on page focus
            window.addEventListener('focus', () => {
              registration.update()
            })
            
            // Handle service worker updates
            registration.addEventListener('updatefound', () => {
              const newWorker = registration.installing
              if (newWorker) {
                newWorker.addEventListener('statechange', () => {
                  if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                    // New service worker available, reload to activate
                    window.location.reload()
                  }
                })
              }
            })
          })
          .catch((error) => {
            console.log('Service Worker registration failed:', error)
          })
      })
    }
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
    
    // Dynamic SEO meta tags
    const seoData = {
      lv: {
        title: 'Asnates JSK — Jātnieku Sporta Klubs',
        description: 'Asnates JSK — moderns jātnieku komplekss: zirgu uzturēšana, treniņi, sacensības un korporatīvie pasākumi.',
        keywords: 'jātniecība, jāšana, treniņi, zirgi, Asnates JSK, Latvija, sacensības'
      },
      en: {
        title: 'Asnates JSK — Equestrian Sports Club',
        description: 'Asnates JSK — modern equestrian complex: horse boarding, training, competitions and corporate events.',
        keywords: 'equestrian, horseback riding, training, horses, Asnates JSK, Latvia, competitions'
      },
      ru: {
        title: 'Asnates JSK — Школа молодых всадников',
        description: 'Asnates JSK — современный конный комплекс: содержание лошадей, тренировки, соревнования и корпоративные мероприятия.',
        keywords: 'конный спорт, верховая езда, тренировки, лошади, Asnates JSK, Латвия, соревнования'
      }
    }
    
    const current = seoData[selectedLanguage] || seoData.ru
    
    // Update title
    document.title = current.title
    
    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]')
    if (!metaDesc) {
      metaDesc = document.createElement('meta')
      metaDesc.setAttribute('name', 'description')
      document.head.appendChild(metaDesc)
    }
    metaDesc.setAttribute('content', current.description)
    
    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]')
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta')
      metaKeywords.setAttribute('name', 'keywords')
      document.head.appendChild(metaKeywords)
    }
    metaKeywords.setAttribute('content', current.keywords)
    
    // Update Open Graph tags
    const updateOGTag = (property, content) => {
      let tag = document.querySelector(`meta[property="${property}"]`)
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('property', property)
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', content)
    }
    
    updateOGTag('og:title', current.title)
    updateOGTag('og:description', current.description)
    
    // Update Twitter tags
    const updateTwitterTag = (name, content) => {
      let tag = document.querySelector(`meta[property="twitter:${name}"]`)
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('property', `twitter:${name}`)
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', content)
    }
    
    updateTwitterTag('title', current.title)
    updateTwitterTag('description', current.description)
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
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const isAtBottom = scrollY + windowHeight >= documentHeight - 100 // 100px tolerance for better detection
      
      // Header scroll class
      if (scrollY > 12) {
        headerRef.current.classList.add('is-scrolled')
      } else {
        headerRef.current.classList.remove('is-scrolled')
      }
      
      // Show scroll-bottom when NOT at bottom, show scroll-top when AT bottom
      if (isAtBottom) {
        // At footer - show scroll-top, hide scroll-bottom
        setShowScrollTop(true)
        setShowScrollBottom(false)
      } else {
        // Not at footer - show scroll-bottom, hide scroll-top (unless at very top)
        if (scrollY > 12) {
          setShowScrollBottom(true)
          setShowScrollTop(false)
        } else {
          // At very top - hide both
          setShowScrollBottom(false)
          setShowScrollTop(false)
        }
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

  const getText = (value) => (typeof value === 'string' ? value : value?.[selectedLanguage] ?? value?.lv ?? '')

  const handleServiceSelect = (slug) => {
    setActiveService(slug)
    window.requestAnimationFrame(() => {
      serviceDetailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormStatus({ type: null, message: null })

    const formData = new FormData(e.target)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      service: formData.get('service'),
      message: formData.get('message'),
      language: selectedLanguage,
    }

    try {
      // EmailJS - Direct from frontend (backend doesn't support EmailJS API)
      if (window.emailjs) {
        // Admin notification email
        const adminTemplateParams = {
          from_name: data.name || 'Nav norādīts',
          from_email: data.email || 'Nav norādīts',
          phone: data.phone || 'Nav norādīts',
          message: data.message || 'Nav komentāra',
          service: data.service || 'Nav norādīts',
          language: data.language || 'lv',
          timestamp: new Date().toLocaleString('lv-LV')
        };

        // Auto-reply email
        const replyTemplateParams = {
          name: data.name || 'Klient',
          email: data.email,
          from_email: data.email,
          service: data.service || 'Nav norādīts',
          language: data.language || 'lv',
          timestamp: new Date().toLocaleString('lv-LV')
        };

        // Send both emails (one at a time to see which one fails)
        // Try with old service first, then new one
        const serviceId = 'service_0la0k52'; // New SMTP service
        
        try {
          const adminResult = await window.emailjs.send(serviceId, 'template_bwjlrhr', adminTemplateParams);
          console.log('✅ Admin email sent:', adminResult);
        } catch (adminError) {
          console.error('❌ Admin email error:', adminError);
          console.error('Error details:', {
            service: serviceId,
            template: 'template_bwjlrhr',
            params: adminTemplateParams,
            error: adminError.text || adminError.message
          });
          // Try with old service as fallback
          try {
            await window.emailjs.send('service_sgqzxcd', 'template_bwjlrhr', adminTemplateParams);
            console.log('✅ Admin email sent with fallback service');
          } catch {
            throw new Error(`Admin email failed: ${adminError.text || adminError.message}`);
          }
        }

        try {
          const replyResult = await window.emailjs.send(serviceId, 'template_nkrc6xo', replyTemplateParams);
          console.log('✅ Auto-reply email sent:', replyResult);
        } catch (replyError) {
          console.error('❌ Auto-reply email error:', replyError);
          // Try with old service as fallback
          try {
            await window.emailjs.send('service_sgqzxcd', 'template_nkrc6xo', replyTemplateParams);
            console.log('✅ Auto-reply sent with fallback service');
          } catch {
            console.error('⚠️ Auto-reply failed, but continuing...');
            // Don't throw for auto-reply
          }
        }

        setFormStatus({ type: 'success', message: t.booking.form.successMessage || 'Paldies! Jūsu pieteikums ir nosūtīts.' })
        e.target.reset()
        // Focus management after success
        const formElement = e.target
        setTimeout(() => {
          const statusElement = formElement.querySelector('.form-status')
          if (statusElement) {
            statusElement.focus()
            statusElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
          }
        }, 100)
      } else {
        throw new Error('EmailJS is not loaded')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setFormStatus({ type: 'error', message: t.booking.form.errorMessage || 'Radās kļūda. Lūdzu, mēģiniet vēlāk vai sazinieties tieši ar mums.' })
      // Focus on error message
      setTimeout(() => {
        const formElement = e.target
        const statusElement = formElement.querySelector('.form-status')
        if (statusElement) {
          statusElement.focus()
          statusElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
        }
      }, 100)
    } finally {
      setIsSubmitting(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' })
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
            <div className="announcement__social">
              <a
                href="https://www.tiktok.com/@asnates_jsk"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="announcement__social-link"
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
                className="announcement__social-link"
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
                className="announcement__social-link"
              >
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="currentColor"/>
                </svg>
              </a>
            </div>
            <div className="announcement__contact" style={{ marginLeft: 'auto', marginRight: 0, paddingRight: 0 }}>
              <a
                href="mailto:asnatesjsk@inbox.lv"
                className="announcement__contact-link"
                aria-label="Email"
              >
                <svg aria-hidden="true" focusable="false" viewBox="0 0 20 20">
                  <path d="M2.5 4.5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1V15a1 1 0 0 1-1 1h-13a1 1 0 0 1-1-1V4.5zm2 1V14h9.9l-5.45-5.45a.75.75 0 0 1 1.06-1.06l5.46 5.45V5.5H4.5z" />
                </svg>
                <span>asnatesjsk@inbox.lv</span>
              </a>
              <a
                href="tel:+37128352881"
                className="announcement__contact-link"
                aria-label="Phone"
              >
                <svg aria-hidden="true" focusable="false" viewBox="0 0 20 20">
                  <path d="M5.7 2.7c.2-.4.7-.6 1.1-.4l2.7 1.3c.4.2.6.6.4 1l-1.2 2.7c-.2.4-.6.6-1 .4l-1-.4a11 11 0 0 0 5.2 5.2l-.3-.9c-.2-.4 0-.8.3-1l2.7-1.2c.4-.2.8 0 1 .4l1.3 2.7c.2.4 0 .9-.4 1.1l-2.1 1c-.4.2-.9.2-1.3 0a13.5 13.5 0 0 1-7.4-7.4c-.2-.4-.2-.9 0-1.3l1-2.1z" />
                </svg>
                <span>+371 2 8352881</span>
              </a>
            </div>
          </div>
        </div>
        <div className="nav-bar container">
              <a className="logo" href="#hero" aria-label="Škola mladých jezdců" onClick={closeMenu}>
                <span className="logo__badge">
                  <img className="logo__emblem" src={logoEmblem} alt="Asnates JSK Emblem" loading="eager" decoding="sync" />
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

      <main id="main-content">
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
            </div>
          </div>
        </section>

        <section id="services" className="section section--light">
          <div className="container">
            <div className="section__heading">
              <p className="eyebrow">{t.services.heading.eyebrow}</p>
              <h2>{t.services.heading.title}</h2>
            </div>
            <div className="service-grid">
              {t.services.cards.map((card, index) => {
                const slug = SERVICE_ORDER[index] || `service-${index}`
                const isActive = slug === activeService
                const icons = [
                  <svg key="horse" className="card__icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="horseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="currentColor" stopOpacity="1"/>
                        <stop offset="100%" stopColor="currentColor" stopOpacity="0.8"/>
                      </linearGradient>
                    </defs>
                    <path d="M32 8C24 8 18 14 18 22c0 4 2 7 5 9v18h4v-15c3-2 5-5 5-9 0-8-6-14-14-14z" fill="url(#horseGradient)" opacity="0.15"/>
                    <path d="M32 12c4.4 0 8 3.6 8 8 0 3-2 5.6-5 7v12h-6v-13c-3-1.4-5-4-5-7 0-4.4 3.6-8 8-8z" fill="url(#horseGradient)"/>
                    <circle cx="30" cy="20" r="2.5" fill="url(#horseGradient)"/>
                    <path d="M28 16c1 0 2 0.5 2.5 1.5" stroke="url(#horseGradient)" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M36 16c-1 0-2 0.5-2.5 1.5" stroke="url(#horseGradient)" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>,
                  <svg key="lesson" className="card__icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="lessonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="currentColor" stopOpacity="1"/>
                        <stop offset="100%" stopColor="currentColor" stopOpacity="0.8"/>
                      </linearGradient>
                    </defs>
                    <path d="M32 8L8 18l24 10 24-10L32 8z" fill="url(#lessonGradient)" opacity="0.15"/>
                    <path d="M8 44l24 10 24-10M8 32l24 10 24-10" stroke="url(#lessonGradient)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    <circle cx="32" cy="18" r="2" fill="url(#lessonGradient)"/>
                    <circle cx="32" cy="32" r="2" fill="url(#lessonGradient)"/>
                    <circle cx="32" cy="44" r="2" fill="url(#lessonGradient)"/>
                  </svg>,
                  <svg key="event" className="card__icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="eventGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="currentColor" stopOpacity="1"/>
                        <stop offset="100%" stopColor="currentColor" stopOpacity="0.8"/>
                      </linearGradient>
                    </defs>
                    <rect x="10" y="12" width="44" height="44" rx="4" fill="url(#eventGradient)" opacity="0.15"/>
                    <rect x="10" y="12" width="44" height="44" rx="4" stroke="url(#eventGradient)" strokeWidth="3" fill="none"/>
                    <path d="M42 8v8M22 8v8M10 24h44" stroke="url(#eventGradient)" strokeWidth="3" strokeLinecap="round"/>
                    <circle cx="32" cy="38" r="5" fill="url(#eventGradient)"/>
                    <path d="M32 33v5M32 43v5" stroke="url(#eventGradient)" strokeWidth="2" strokeLinecap="round"/>
                  </svg>,
                  <svg key="photo" className="card__icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="photoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="currentColor" stopOpacity="1"/>
                        <stop offset="100%" stopColor="currentColor" stopOpacity="0.8"/>
                      </linearGradient>
                    </defs>
                    <rect x="10" y="14" width="44" height="36" rx="4" fill="url(#photoGradient)" opacity="0.15"/>
                    <rect x="10" y="14" width="44" height="36" rx="4" stroke="url(#photoGradient)" strokeWidth="3" fill="none"/>
                    <circle cx="24" cy="28" r="5" fill="url(#photoGradient)"/>
                    <path d="M54 40L38 28 14 48" stroke="url(#photoGradient)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    <circle cx="50" cy="18" r="3" fill="url(#photoGradient)"/>
                  </svg>
                ]
                return (
                  <article
                    className={`card ${isActive ? 'card--active' : ''}`}
                    key={card.title}
                    data-animate="fade-up"
                    style={{ transitionDelay: `${index * 90 + 120}ms` }}
                  >
                    <div className="card__icon-wrapper">
                      {icons[index] || icons[0]}
                    </div>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                    <button
                      type="button"
                      className="card__link card__link--button"
                      onClick={() => handleServiceSelect(slug)}
                      aria-pressed={isActive}
                    >
                      {card.cta}
                    </button>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section id="service-details" className="section service-details-section" ref={serviceDetailRef}>
          <div className="container">
            <div className="section__heading section__heading--inline">
              <div>
                <p className="eyebrow">{(SERVICE_DETAILS_COPY[selectedLanguage] ?? SERVICE_DETAILS_COPY.lv).eyebrow}</p>
                <h2>
                  {activeService && SERVICE_DETAILS[activeService]
                    ? getText(SERVICE_DETAILS[activeService].title)
                    : (SERVICE_DETAILS_COPY[selectedLanguage] ?? SERVICE_DETAILS_COPY.lv).emptyTitle}
                </h2>
                <p>
                  {activeService && SERVICE_DETAILS[activeService]
                    ? getText(SERVICE_DETAILS[activeService].tagline)
                    : (SERVICE_DETAILS_COPY[selectedLanguage] ?? SERVICE_DETAILS_COPY.lv).emptyBody}
                </p>
              </div>
            </div>

            {activeService && SERVICE_DETAILS[activeService] ? (
              <div className="service-details__grid">
                {SERVICE_DETAILS[activeService].pricing.map((section) => (
                  <article className="service-details__card" key={getText(section.title)}>
                    <div className="service-details__card-head">
                      <div>
                        <h3>{getText(section.title)}</h3>
                        {section.subtitle && <p className="service-details__subtitle">{getText(section.subtitle)}</p>}
                      </div>
                    </div>
                    <ul className="service-details__list">
                      {section.rows.map((row) => (
                        <li className="service-details__item" key={`${getText(row.label)}-${row.price}`}>
                          <div className="service-details__item-meta">
                            <span className="service-details__item-title">{getText(row.label)}</span>
                            {row.note && <p className="service-details__note">{getText(row.note)}</p>}
                          </div>
                          <div className="service-details__price-block">
                            <span className="service-details__price">{row.price}</span>
                            {row.duration && <span className="service-details__duration">{row.duration}</span>}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            ) : (
              <div className="service-details__placeholder card" data-animate="fade-up">
                <p>{(SERVICE_DETAILS_COPY[selectedLanguage] ?? SERVICE_DETAILS_COPY.lv).emptyBody}</p>
              </div>
            )}

            {activeService && SERVICE_DETAILS[activeService]?.notes?.length ? (
              <div className="service-details__notes">
                <h4>{(SERVICE_DETAILS_COPY[selectedLanguage] ?? SERVICE_DETAILS_COPY.lv).notesTitle}</h4>
                <ul>
                  {SERVICE_DETAILS[activeService].notes.map((note) => (
                    <li key={getText(note)}>{getText(note)}</li>
                  ))}
                </ul>
              </div>
            ) : null}
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
                      decoding="async"
                      fetchPriority={index < 3 ? "high" : "low"}
                    />
                    <span className="gallery-card__overlay" />
                    <span className="gallery-card__view">View</span>
                  </button>
                  <figcaption className="gallery-card__caption">
                    {image.caption[selectedLanguage] ?? image.caption.ru}
                    {image.date && (
                      <span className="gallery-card__date">
                        {' • '}
                        {image.date[selectedLanguage] ?? image.date.lv}
                      </span>
                    )}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="news" className="section">
          <div className="container">
            <div className="section__heading">
              <p className="eyebrow">{t.news.heading.eyebrow}</p>
              <h2>{t.news.heading.title}</h2>
              {t.news.heading.description && <p>{t.news.heading.description}</p>}
            </div>
            <div className="news-grid">
              {t.news.items.map((item, index) => (
                <article
                  className="news-card"
                  key={item.title}
                  data-animate="fade-up"
                  style={{ transitionDelay: `${index * 100 + 120}ms` }}
                >
                  {item.image && (
                    <div className="news-card__image">
                      <img src={item.image} alt={item.title} loading="lazy" decoding="async" />
                    </div>
                  )}
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

        <section id="booking" className="section section--split section--accent">
          <div className="container section--split__wrapper section--split__wrapper--reverse">
            <div className="section--split__content">
              <p className="eyebrow">{t.booking.eyebrow}</p>
              <h2>{t.booking.title}</h2>
              <p>{t.booking.description}</p>
              <form className="lead-form" onSubmit={handleFormSubmit}>
                <div className="form-grid">
                  <label>
                    <span>{t.booking.form.nameLabel}</span>
                    <input required type="text" name="name" placeholder={t.booking.form.namePlaceholder} disabled={isSubmitting} />
                  </label>
                  <label>
                    <span>{t.booking.form.emailLabel}</span>
                    <input required type="email" name="email" placeholder={t.booking.form.emailPlaceholder} disabled={isSubmitting} />
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
                  <div 
                    className={`form-status form-status--${formStatus.type}`} 
                    role="alert"
                    tabIndex={-1}
                    aria-live="polite"
                    aria-atomic="true"
                  >
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
              <img 
                src={atimImage} 
                className="section--split__media-image"
                data-animate="fade-up"
                data-animate-delay="200ms"
                loading="lazy"
                decoding="async"
              />
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
                  <img className="logo__emblem" src={logoEmblem} alt="Asnates JSK Emblem" loading="eager" decoding="sync" />
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
                  {translations.lv.footer.billing.items.map((item) => (
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

      {showScrollBottom && (
        <button
          className="scroll-bottom"
          type="button"
          onClick={scrollToBottom}
          aria-label="Scroll to bottom"
        >
          ↓
        </button>
      )}

      {activeGalleryIndex !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-labelledby="lightbox-title">
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
            autoFocus
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
            <div className="lightbox__image-wrapper">
            <img
              src={galleryImages[activeGalleryIndex].src}
              alt={galleryImages[activeGalleryIndex].caption[selectedLanguage] ?? galleryImages[activeGalleryIndex].caption.ru}
              loading="eager"
              decoding="async"
            />
            </div>
            <figcaption className="lightbox__caption-wrapper">
              <strong>{galleryImages[activeGalleryIndex].caption[selectedLanguage] ?? galleryImages[activeGalleryIndex].caption.ru}</strong>
              {galleryImages[activeGalleryIndex].date && (
                <span className="lightbox__date">
                  {' • '}
                  {galleryImages[activeGalleryIndex].date[selectedLanguage] ?? galleryImages[activeGalleryIndex].date.lv}
                </span>
              )}
              {galleryImages[activeGalleryIndex].fullDescription && (
                <div className="lightbox__description">
                  {galleryImages[activeGalleryIndex].fullDescription[selectedLanguage] ?? galleryImages[activeGalleryIndex].fullDescription.lv}
                </div>
              )}
            </figcaption>
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

      <ChatBot selectedLanguage={selectedLanguage} />
    </div>
  )
}

export default App
