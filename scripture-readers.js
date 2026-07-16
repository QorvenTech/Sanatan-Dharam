/*
 * Reusable Sacred Text resource readers.
 *
 * These pages intentionally expose only editions that are already present in
 * the repository or were already linked by the website. A listed text without
 * a hosted file is shown with an explicit unavailable state instead of a dead
 * or invented reading action.
 */
(function () {
  'use strict';

  function resource(key, group, titleEn, titleHi, descriptionEn, descriptionHi, href, pages, size, source, options) {
    return Object.assign({
      key: key,
      group: group,
      titleEn: titleEn,
      titleHi: titleHi,
      descriptionEn: descriptionEn,
      descriptionHi: descriptionHi,
      href: href || '',
      pages: pages || '',
      size: size || '',
      source: source || '',
      local: Boolean(href && href.indexOf('pdfs/') === 0),
      available: Boolean(href)
    }, options || {});
  }

  var readers = {
    ramayan: {
      titleEn: 'Ramayan',
      titleHi: 'रामायण',
      eyebrowEn: 'Sacred epic · Dharma and devotion',
      eyebrowHi: 'पवित्र महाकाव्य · धर्म और भक्ति',
      artwork: 'assets/text-ramayan.webp',
      descriptionEn: 'Read the seven Kandas of Goswami Tulsidas\'s Ramcharitmanas and open the complete Ramayan editions already preserved by this website.',
      descriptionHi: 'गोस्वामी तुलसीदास कृत रामचरितमानस के सातों काण्ड पढ़ें और वेबसाइट पर पहले से उपलब्ध सम्पूर्ण रामायण संस्करण खोलें।',
      noteEn: 'The seven hosted Kand files are Ramcharitmanas editions. The complete Valmiki Ramayan and language editions open from the existing Internet Archive sources.',
      noteHi: 'होस्ट किए गए सात काण्ड रामचरितमानस के संस्करण हैं। सम्पूर्ण वाल्मीकि रामायण और भाषा संस्करण मौजूदा Internet Archive स्रोतों से खुलते हैं।',
      stats: [
        ['7', 'Kandas', 'काण्ड'],
        ['10', 'working resources', 'कार्यशील संसाधन'],
        ['Hindi · Sanskrit · English · Tamil', 'available editions', 'उपलब्ध संस्करण']
      ],
      groups: [
        { id: 'kandas', en: 'Seven Kandas', hi: 'सात काण्ड' },
        { id: 'complete', en: 'Complete & language editions', hi: 'सम्पूर्ण व भाषा संस्करण' }
      ],
      resources: [
        resource('bal-kand', 'kandas', 'Bal Kand', 'बालकाण्ड', 'The opening Kand of Ramcharitmanas: invocation, the divine birth and early life of Shri Rama.', 'रामचरितमानस का आरम्भिक काण्ड: मंगलाचरण, श्रीराम जन्म और बाल जीवन।', 'pdfs/1_BalKand.pdf', '137', '0.9 MB', 'Hosted PDF · Ramcharitmanas'),
        resource('ayodhya-kand', 'kandas', 'Ayodhya Kand', 'अयोध्याकाण्ड', 'Shri Rama\'s exile, Bharata\'s devotion and the sorrow of Ayodhya.', 'श्रीराम का वनवास, भरत की भक्ति और अयोध्या का विरह।', 'pdfs/2_AyodhyaKand.pdf', '113', '0.8 MB', 'Hosted PDF · Ramcharitmanas'),
        resource('aranya-kand', 'kandas', 'Aranya Kand', 'अरण्यकाण्ड', 'Life in the forest and the events leading to Sita Mata\'s abduction.', 'वन जीवन और सीता माता के हरण तक की घटनाएँ।', 'pdfs/3_AranyaKand.pdf', '29', '0.2 MB', 'Hosted PDF · Ramcharitmanas'),
        resource('kishkindha-kand', 'kandas', 'Kishkindha Kand', 'किष्किन्धाकाण्ड', 'Shri Rama\'s alliance with Sugriva and the search for Sita Mata.', 'सुग्रीव से श्रीराम की मैत्री और सीता माता की खोज।', 'pdfs/4_KishkindhaKand.pdf', '15', '0.2 MB', 'Hosted PDF · Ramcharitmanas'),
        resource('sundar-kand', 'kandas', 'Sundar Kand', 'सुन्दरकाण्ड', 'Hanumanji\'s journey to Lanka, Sita Mata\'s darshan and the message of courage and devotion.', 'हनुमानजी की लंका यात्रा, सीता माता के दर्शन और साहस-भक्ति का संदेश।', 'pdfs/5_SundarKand.pdf', '25', '0.2 MB', 'Hosted PDF · Ramcharitmanas'),
        resource('lanka-kand', 'kandas', 'Lanka Kand', 'लंकाकाण्ड', 'The battle in Lanka, Ravana\'s defeat and the reunion with Sita Mata.', 'लंका का युद्ध, रावण वध और सीता माता से पुनर्मिलन।', 'pdfs/6_LankaKand.pdf', '58', '0.4 MB', 'Hosted PDF · Ramcharitmanas'),
        resource('uttar-kand', 'kandas', 'Uttar Kand', 'उत्तरकाण्ड', 'The concluding Kand of Ramcharitmanas and teachings that follow Shri Rama\'s return.', 'रामचरितमानस का समापन काण्ड और श्रीराम की वापसी के बाद की शिक्षाएँ।', 'pdfs/7_UttarKand.pdf', '65', '12.7 MB', 'Hosted PDF · Ramcharitmanas'),
        resource('valmiki-complete', 'complete', 'Valmiki Ramayan — Hindi & Sanskrit', 'वाल्मीकि रामायण — हिन्दी व संस्कृत', 'Complete Hindi and Sanskrit edition from the website\'s existing Internet Archive collection.', 'वेबसाइट के मौजूदा Internet Archive संग्रह से सम्पूर्ण हिन्दी-संस्कृत संस्करण।', 'https://archive.org/download/mahabharat-hindi/Ramayan_Hindi_Sanskrit.pdf', '', '', 'Internet Archive · External PDF', { external: true }),
        resource('ramcharitmanas-english', 'complete', 'Ramcharitmanas — English translation', 'रामचरितमानस — अंग्रेज़ी अनुवाद', 'An English-language Ramcharitmanas edition from the existing Internet Archive record.', 'मौजूदा Internet Archive अभिलेख से अंग्रेज़ी भाषा का रामचरितमानस संस्करण।', 'https://archive.org/details/1318-sri-ramchritmanas-roman', '', '', 'Internet Archive · External record', { external: true, record: true }),
        resource('ramayan-tamil', 'complete', 'Ramayan — Tamil edition', 'रामायण — तमिल संस्करण', 'Tamil-language Ramayan from the website\'s existing Internet Archive collection.', 'वेबसाइट के मौजूदा Internet Archive संग्रह से तमिल भाषा का रामायण संस्करण।', 'https://archive.org/download/mahabharat-hindi/Ramayan_Tamil.pdf', '', '', 'Internet Archive · External PDF', { external: true })
      ],
      related: ['bhagavad-gita', 'mahabharata', 'puranas']
    },

    mahabharata: {
      titleEn: 'Mahabharata',
      titleHi: 'महाभारत',
      eyebrowEn: 'Itihasa · Dharma and human choice',
      eyebrowHi: 'इतिहास · धर्म और मानवीय निर्णय',
      artwork: 'assets/text-mahabharata.webp',
      descriptionEn: 'Explore the great epic through the complete Hindi edition already linked by the website, with a clear path back to its Bhagavad Gita reader.',
      descriptionHi: 'वेबसाइट पर पहले से जुड़े सम्पूर्ण हिन्दी संस्करण के माध्यम से महान महाकाव्य पढ़ें और उसके भगवद गीता पाठक तक सहज पहुँच पाएँ।',
      noteEn: 'The website currently provides one complete external Hindi edition. No unverified Parva files, audio, or fabricated chapter text has been added.',
      noteHi: 'वेबसाइट पर अभी एक सम्पूर्ण बाहरी हिन्दी संस्करण उपलब्ध है। कोई अप्रमाणित पर्व फ़ाइल, ऑडियो या गढ़ा हुआ अध्याय-पाठ नहीं जोड़ा गया है।',
      stats: [
        ['18', 'traditional Parvas', 'पारम्परिक पर्व'],
        ['1', 'complete working edition', 'सम्पूर्ण कार्यशील संस्करण'],
        ['Hindi', 'available language', 'उपलब्ध भाषा']
      ],
      groups: [{ id: 'complete', en: 'Complete edition', hi: 'सम्पूर्ण संस्करण' }],
      resources: [
        resource('mahabharata-hindi', 'complete', 'Mahabharata — complete Hindi edition', 'महाभारत — सम्पूर्ण हिन्दी संस्करण', 'The complete Hindi Mahabharata preserved in the website\'s existing Internet Archive collection.', 'वेबसाइट के मौजूदा Internet Archive संग्रह में संरक्षित सम्पूर्ण हिन्दी महाभारत।', 'https://archive.org/download/mahabharat-hindi/Mahabharat_Hindi.pdf', '', '', 'Internet Archive · External PDF', { external: true })
      ],
      related: ['bhagavad-gita', 'ramayan', 'puranas']
    },

    vedas: {
      titleEn: 'Four Vedas',
      titleHi: 'चार वेद',
      eyebrowEn: 'Shruti · Vedic foundations',
      eyebrowHi: 'श्रुति · वैदिक आधार',
      artwork: 'assets/text-vedas.webp',
      descriptionEn: 'Open the four Vedic Samhita editions hosted by Sanatan for Humanity, including both available parts of the Atharvaveda.',
      descriptionHi: 'सनातन फॉर ह्यूमैनिटी पर होस्ट किए गए चार वैदिक संहिता संस्करण खोलें, जिनमें अथर्ववेद के दोनों उपलब्ध भाग शामिल हैं।',
      noteEn: 'These are scanned Hindi and Sanskrit-oriented study editions. Pagination and translation style vary by source; readers should follow their own lineage and teacher for interpretation.',
      noteHi: 'ये स्कैन किए गए हिन्दी-संस्कृत केंद्रित अध्ययन संस्करण हैं। स्रोत के अनुसार पृष्ठ और अनुवाद शैली बदल सकती है; व्याख्या के लिए अपनी परम्परा और गुरु का मार्गदर्शन मानें।',
      stats: [
        ['4', 'Vedas', 'वेद'],
        ['5', 'hosted PDF volumes', 'होस्ट किए गए PDF खण्ड'],
        ['2,356', 'hosted pages', 'होस्ट किए गए पृष्ठ']
      ],
      groups: [{ id: 'samhitas', en: 'Hosted Samhitas', hi: 'होस्ट की गई संहिताएँ' }],
      resources: [
        resource('rigveda', 'samhitas', 'Rigveda Samhita', 'ऋग्वेद संहिता', 'A hosted 739-page edition of the oldest Vedic collection of hymns.', 'वैदिक सूक्तों के प्राचीनतम संग्रह का 739-पृष्ठीय होस्टेड संस्करण।', 'pdfs/Rigveda.pdf', '739', '33.8 MB', 'Hosted PDF'),
        resource('yajurveda', 'samhitas', 'Yajurveda', 'यजुर्वेद', 'A hosted 420-page edition centred on yajna formulas and ritual tradition.', 'यज्ञ-मन्त्रों और अनुष्ठान परम्परा पर केंद्रित 420-पृष्ठीय होस्टेड संस्करण।', 'pdfs/Yajurveda.pdf', '420', '22.1 MB', 'Hosted PDF'),
        resource('samaveda', 'samhitas', 'Samaveda', 'सामवेद', 'A hosted 328-page edition of the Veda associated with melodic recitation.', 'स्वरबद्ध पाठ से सम्बद्ध वेद का 328-पृष्ठीय होस्टेड संस्करण।', 'pdfs/Samveda.pdf', '328', '15.8 MB', 'Hosted PDF'),
        resource('atharvaveda-1', 'samhitas', 'Atharvaveda — Part 1', 'अथर्ववेद — भाग 1', 'The first hosted volume of the Atharvaveda edition.', 'अथर्ववेद संस्करण का पहला होस्टेड खण्ड।', 'pdfs/Atharvaveda_Part1.pdf', '470', '22.3 MB', 'Hosted PDF'),
        resource('atharvaveda-2', 'samhitas', 'Atharvaveda — Part 2', 'अथर्ववेद — भाग 2', 'The second hosted volume of the Atharvaveda edition.', 'अथर्ववेद संस्करण का दूसरा होस्टेड खण्ड।', 'pdfs/Atharvaveda_Part2.pdf', '399', '18.6 MB', 'Hosted PDF')
      ],
      related: ['upanishads', 'bhagavad-gita', 'puranas']
    },

    upanishads: {
      titleEn: 'Upanishads',
      titleHi: 'उपनिषद',
      eyebrowEn: 'Vedanta · Inquiry into self and reality',
      eyebrowHi: 'वेदान्त · आत्मा और सत्य का अन्वेषण',
      artwork: 'assets/text-upanishads.webp',
      descriptionEn: 'A transparent guide to the ten principal Upanishads previously listed by the website while their verified editions are prepared for hosting.',
      descriptionHi: 'वेबसाइट पर पहले सूचीबद्ध दस प्रमुख उपनिषदों की पारदर्शी मार्गदर्शिका, जब तक उनके सत्यापित संस्करण होस्टिंग के लिए तैयार किए जा रहे हैं।',
      noteEn: 'The previous page pointed to ten local PDF files that are not present in the repository. Those dead links have been removed. Titles remain as an honest availability guide, without pretending the texts are readable here yet.',
      noteHi: 'पुराना पृष्ठ दस ऐसी स्थानीय PDF फ़ाइलों से जुड़ा था जो repository में मौजूद नहीं हैं। वे टूटे लिंक हटा दिए गए हैं। शीर्षक उपलब्धता-मार्गदर्शिका के रूप में रखे गए हैं, बिना यह दिखाए कि पाठ अभी यहाँ पढ़ा जा सकता है।',
      stats: [
        ['10', 'principal texts listed', 'प्रमुख ग्रंथ सूचीबद्ध'],
        ['0', 'verified hosted editions', 'सत्यापित होस्टेड संस्करण'],
        ['Transparent', 'availability status', 'उपलब्धता स्थिति']
      ],
      groups: [{ id: 'principal', en: 'Principal Upanishads', hi: 'प्रमुख उपनिषद' }],
      resources: [
        resource('isha', 'principal', 'Isha Upanishad', 'ईश उपनिषद', 'A concise inquiry into the all-pervading divine, action and renunciation.', 'सर्वव्यापक ईश्वर, कर्म और त्याग का संक्षिप्त विवेचन।'),
        resource('kena', 'principal', 'Kena Upanishad', 'केन उपनिषद', 'An inquiry into the source behind mind, speech and the senses.', 'मन, वाणी और इन्द्रियों के पीछे स्थित चेतना का अन्वेषण।'),
        resource('katha', 'principal', 'Katha Upanishad', 'कठ उपनिषद', 'Nachiketa\'s dialogue with Yama on the self, death and immortality.', 'आत्मा, मृत्यु और अमरत्व पर नचिकेता और यम का संवाद।'),
        resource('prashna', 'principal', 'Prashna Upanishad', 'प्रश्न उपनिषद', 'Six questions concerning life, prana, meditation and the Supreme.', 'जीवन, प्राण, ध्यान और परम सत्य से जुड़े छह प्रश्न।'),
        resource('mundaka', 'principal', 'Mundaka Upanishad', 'मुण्डक उपनिषद', 'A distinction between higher and lower knowledge and the path of realisation.', 'परा और अपरा विद्या तथा आत्म-साक्षात्कार के मार्ग का विवेचन।'),
        resource('mandukya', 'principal', 'Mandukya Upanishad', 'माण्डूक्य उपनिषद', 'A short text on Om and the states of consciousness.', 'ॐ और चेतना की अवस्थाओं पर संक्षिप्त ग्रंथ।'),
        resource('taittiriya', 'principal', 'Taittiriya Upanishad', 'तैत्तिरीय उपनिषद', 'Teachings on discipline, the layers of the self and bliss.', 'अनुशासन, आत्मा के आवरणों और आनन्द पर शिक्षाएँ।'),
        resource('aitareya', 'principal', 'Aitareya Upanishad', 'ऐतरेय उपनिषद', 'A philosophical reflection on creation, consciousness and the self.', 'सृष्टि, चेतना और आत्मा पर दार्शनिक चिंतन।'),
        resource('chandogya', 'principal', 'Chandogya Upanishad', 'छान्दोग्य उपनिषद', 'Dialogues and meditations including the teaching of Tat Tvam Asi.', 'तत्त्वमसि की शिक्षा सहित संवाद और उपासनाएँ।'),
        resource('brihadaranyaka', 'principal', 'Brihadaranyaka Upanishad', 'बृहदारण्यक उपनिषद', 'A wide-ranging inquiry into the self, reality and liberation.', 'आत्मा, सत्य और मुक्ति का विस्तृत विवेचन।')
      ],
      related: ['vedas', 'bhagavad-gita', 'ramayan']
    },

    puranas: {
      titleEn: 'Puranas',
      titleHi: 'पुराण',
      eyebrowEn: 'Sacred narratives · Tradition and cosmology',
      eyebrowHi: 'पवित्र आख्यान · परम्परा और ब्रह्माण्ड-विज्ञान',
      artwork: 'assets/text-puranas.webp',
      descriptionEn: 'Browse all eighteen Mahapurana editions hosted by the website, plus the separately identified Narasimha Purana resource.',
      descriptionHi: 'वेबसाइट पर होस्ट किए गए सभी अठारह महापुराण संस्करण देखें, साथ में अलग पहचाना गया नरसिंह पुराण संसाधन।',
      noteEn: 'The library groups the traditional eighteen Mahapuranas separately from the additional Narasimha Purana file. Two large works are split into two hosted volumes.',
      noteHi: 'पुस्तकालय पारम्परिक अठारह महापुराणों को अतिरिक्त नरसिंह पुराण फ़ाइल से अलग रखता है। दो बड़े ग्रंथ दो होस्टेड खण्डों में विभाजित हैं।',
      stats: [
        ['18', 'Mahapuranas hosted', 'महापुराण होस्टेड'],
        ['21', 'hosted PDF volumes', 'होस्ट किए गए PDF खण्ड'],
        ['1', 'additional Purana', 'अतिरिक्त पुराण']
      ],
      groups: [
        { id: 'mahapurana', en: 'Eighteen Mahapuranas', hi: 'अठारह महापुराण' },
        { id: 'additional', en: 'Additional Purana', hi: 'अतिरिक्त पुराण' }
      ],
      resources: [
        resource('brahma-purana', 'mahapurana', 'Brahma Purana', 'ब्रह्म पुराण', 'Hosted Hindi edition of the Brahma Purana.', 'ब्रह्म पुराण का होस्टेड हिन्दी संस्करण।', 'pdfs/Brahma_Puran.pdf', '423', '35.7 MB', 'Hosted PDF'),
        resource('padma-purana', 'mahapurana', 'Padma Purana', 'पद्म पुराण', 'Hosted Hindi edition of the Padma Purana.', 'पद्म पुराण का होस्टेड हिन्दी संस्करण।', 'pdfs/Padma_Puran.pdf', '1,001', '71.7 MB', 'Hosted PDF'),
        resource('vishnu-purana', 'mahapurana', 'Vishnu Purana', 'विष्णु पुराण', 'Hosted Hindi edition of the Vishnu Purana.', 'विष्णु पुराण का होस्टेड हिन्दी संस्करण।', 'pdfs/Vishnu_Puran.pdf', '535', '39.7 MB', 'Hosted PDF'),
        resource('shiva-purana', 'mahapurana', 'Shiva Purana', 'शिव पुराण', 'Hosted Hindi edition of the Shiva Purana.', 'शिव पुराण का होस्टेड हिन्दी संस्करण।', 'pdfs/Shiv_Puran.pdf', '812', '49.2 MB', 'Hosted PDF'),
        resource('bhagavata-purana', 'mahapurana', 'Bhagavata Purana', 'भागवत पुराण', 'Hosted Hindi edition stored by the site as Bhagwat Purana.', 'वेबसाइट पर भागवत पुराण नाम से संग्रहीत होस्टेड हिन्दी संस्करण।', 'pdfs/Bhagwat_Puran.pdf', '977', '63.1 MB', 'Hosted PDF'),
        resource('narada-purana', 'mahapurana', 'Narada Purana', 'नारद पुराण', 'Hosted Hindi edition of the Narada Purana.', 'नारद पुराण का होस्टेड हिन्दी संस्करण।', 'pdfs/Narad_Puran.pdf', '751', '46.9 MB', 'Hosted PDF'),
        resource('markandeya-purana', 'mahapurana', 'Markandeya Purana', 'मार्कण्डेय पुराण', 'Hosted Hindi edition of the Markandeya Purana.', 'मार्कण्डेय पुराण का होस्टेड हिन्दी संस्करण।', 'pdfs/Markandey_Puran.pdf', '296', '17.7 MB', 'Hosted PDF'),
        resource('agni-purana', 'mahapurana', 'Agni Purana', 'अग्नि पुराण', 'Hosted Hindi edition of the Agni Purana.', 'अग्नि पुराण का होस्टेड हिन्दी संस्करण।', 'pdfs/Agni_Puran.pdf', '842', '57.2 MB', 'Hosted PDF'),
        resource('bhavishya-purana', 'mahapurana', 'Bhavishya Purana', 'भविष्य पुराण', 'Hosted Hindi edition of the Bhavishya Purana.', 'भविष्य पुराण का होस्टेड हिन्दी संस्करण।', 'pdfs/Bhavishya_Puran.pdf', '448', '26.9 MB', 'Hosted PDF'),
        resource('brahmavaivarta-purana', 'mahapurana', 'Brahmavaivarta Purana', 'ब्रह्मवैवर्त पुराण', 'Hosted Hindi edition of the Brahmavaivarta Purana.', 'ब्रह्मवैवर्त पुराण का होस्टेड हिन्दी संस्करण।', 'pdfs/BrahmVaivarta_Puran.pdf', '796', '51.7 MB', 'Hosted PDF'),
        resource('linga-purana', 'mahapurana', 'Linga Purana', 'लिंग पुराण', 'Hosted Hindi edition of the Linga Purana.', 'लिंग पुराण का होस्टेड हिन्दी संस्करण।', 'pdfs/Ling_Puran.pdf', '390', '14.4 MB', 'Hosted PDF'),
        resource('varaha-purana', 'mahapurana', 'Varaha Purana', 'वराह पुराण', 'Hosted Hindi edition of the Varaha Purana.', 'वराह पुराण का होस्टेड हिन्दी संस्करण।', 'pdfs/Varah_Puran.pdf', '392', '23.8 MB', 'Hosted PDF'),
        resource('skanda-purana', 'mahapurana', 'Skanda Purana', 'स्कन्द पुराण', 'Hosted Hindi edition of the Skanda Purana.', 'स्कन्द पुराण का होस्टेड हिन्दी संस्करण।', 'pdfs/Skand_Puran.pdf', '1,108', '73.5 MB', 'Hosted PDF'),
        resource('vamana-purana', 'mahapurana', 'Vamana Purana', 'वामन पुराण', 'Hosted Hindi edition of the Vamana Purana.', 'वामन पुराण का होस्टेड हिन्दी संस्करण।', 'pdfs/Vaman_Puran.pdf', '196', '11.7 MB', 'Hosted PDF'),
        resource('kurma-purana', 'mahapurana', 'Kurma Purana', 'कूर्म पुराण', 'Hosted Hindi edition of the Kurma Purana.', 'कूर्म पुराण का होस्टेड हिन्दी संस्करण।', 'pdfs/Kurma_Puran.pdf', '398', '21.6 MB', 'Hosted PDF'),
        resource('matsya-purana-1', 'mahapurana', 'Matsya Purana — Part 1', 'मत्स्य पुराण — भाग 1', 'First hosted volume of the Matsya Purana.', 'मत्स्य पुराण का पहला होस्टेड खण्ड।', 'pdfs/Matsya_Puran_Part1.pdf', '496', '27.1 MB', 'Hosted PDF'),
        resource('matsya-purana-2', 'mahapurana', 'Matsya Purana — Part 2', 'मत्स्य पुराण — भाग 2', 'Second hosted volume of the Matsya Purana.', 'मत्स्य पुराण का दूसरा होस्टेड खण्ड।', 'pdfs/Matsya_Puran_Part2.pdf', '488', '25.7 MB', 'Hosted PDF'),
        resource('garuda-purana', 'mahapurana', 'Garuda Purana', 'गरुड़ पुराण', 'Hosted Hindi edition of the Garuda Purana.', 'गरुड़ पुराण का होस्टेड हिन्दी संस्करण।', 'pdfs/Garuda_Puran.pdf', '528', '32.3 MB', 'Hosted PDF'),
        resource('brahmanda-purana-1', 'mahapurana', 'Brahmanda Purana — Part 1', 'ब्रह्माण्ड पुराण — भाग 1', 'First hosted volume of the Brahmanda Purana.', 'ब्रह्माण्ड पुराण का पहला होस्टेड खण्ड।', 'pdfs/Brahmand_Puran_Part1.pdf', '416', '51.5 MB', 'Hosted PDF'),
        resource('brahmanda-purana-2', 'mahapurana', 'Brahmanda Purana — Part 2', 'ब्रह्माण्ड पुराण — भाग 2', 'Second hosted volume of the Brahmanda Purana.', 'ब्रह्माण्ड पुराण का दूसरा होस्टेड खण्ड।', 'pdfs/Brahmand_Puran_Part2.pdf', '477', '24.9 MB', 'Hosted PDF'),
        resource('narasimha-purana', 'additional', 'Narasimha Purana', 'नरसिंह पुराण', 'An additional hosted Purana edition, identified separately from the traditional eighteen Mahapuranas.', 'पारम्परिक अठारह महापुराणों से अलग पहचाना गया अतिरिक्त होस्टेड पुराण संस्करण।', 'pdfs/Narshima_Puran.pdf', '298', '20.3 MB', 'Hosted PDF · Additional')
      ],
      related: ['ramayan', 'vedas', 'bhagavad-gita']
    }
  };

  var relatedTitles = {
    'bhagavad-gita': ['Bhagavad Gita', 'भगवद गीता', 'Verse reader with Devanagari, transliteration and meaning.', 'देवनागरी, लिप्यन्तरण और अर्थ सहित श्लोक पाठक।'],
    ramayan: ['Ramayan', 'रामायण', 'Seven Kandas and complete existing editions.', 'सात काण्ड और मौजूदा सम्पूर्ण संस्करण।'],
    mahabharata: ['Mahabharata', 'महाभारत', 'Complete existing Hindi edition.', 'मौजूदा सम्पूर्ण हिन्दी संस्करण।'],
    vedas: ['Four Vedas', 'चार वेद', 'Five hosted Samhita volumes.', 'पाँच होस्टेड संहिता खण्ड।'],
    upanishads: ['Upanishads', 'उपनिषद', 'Transparent availability guide to ten principal texts.', 'दस प्रमुख ग्रंथों की पारदर्शी उपलब्धता मार्गदर्शिका।'],
    puranas: ['Puranas', 'पुराण', 'Eighteen Mahapuranas and an additional edition.', 'अठारह महापुराण और एक अतिरिक्त संस्करण।']
  };

  function esc(value) {
    return String(value == null ? '' : value).replace(/[&<>"']/g, function (character) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character];
    });
  }

  function isHindi() {
    return typeof currentLang !== 'undefined' && currentLang === 'hi';
  }

  function bi(en, hi, tag, className) {
    var name = tag || 'span';
    return '<' + name + (className ? ' class="' + className + '"' : '') + ' data-en="' + esc(en) + '" data-hi="' + esc(hi) + '">' + esc(isHindi() ? hi : en) + '</' + name + '>';
  }

  function icon(name) {
    var paths = {
      book: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v16H6.5A2.5 2.5 0 0 0 4 21.5z"/><path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H13v16h4.5a2.5 2.5 0 0 1 2.5 2.5z"/>',
      arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
      download: '<path d="M12 3v12m0 0 5-5m-5 5-5-5"/><path d="M5 21h14"/>',
      bookmark: '<path d="M6 4.5A1.5 1.5 0 0 1 7.5 3h9A1.5 1.5 0 0 1 18 4.5V21l-6-4-6 4z"/>',
      search: '<circle cx="11" cy="11" r="6.5"/><path d="m16 16 4 4"/>',
      check: '<path d="m5 12 4 4L19 6"/>',
      info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6m0-10v.1"/>'
    };
    return '<svg class="scripture-line-icon" viewBox="0 0 24 24" aria-hidden="true">' + paths[name] + '</svg>';
  }

  function readJson(key, fallback) {
    try {
      var parsed = JSON.parse(localStorage.getItem(key));
      return parsed == null ? fallback : parsed;
    } catch (error) {
      return fallback;
    }
  }

  function writeJson(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (error) {}
  }

  function savedScriptures() { return readJson('sanatan-saved-scripture-readers', []); }
  function savedResources() { return readJson('sanatan-saved-scripture-resources', []); }
  function visitedResources(id) { return readJson('sanatan-scripture-visited:' + id, []); }
  function lastResource(id) { return readJson('sanatan-scripture-last:' + id, null); }

  function groupById(reader, id) {
    return reader.groups.filter(function (group) { return group.id === id; })[0];
  }

  function formatMeta(item) {
    var parts = [];
    if (item.pages) parts.push(item.pages + ' ' + (isHindi() ? 'पृष्ठ' : 'pages'));
    if (item.size) parts.push(item.size);
    if (item.external) parts.push(isHindi() ? 'बाहरी स्रोत' : 'external source');
    if (!item.available) parts.push(isHindi() ? 'अभी होस्टेड नहीं' : 'not currently hosted');
    return parts.join(' · ');
  }

  function resourceCardHtml(readerId, item, saved, visited) {
    var saveKey = readerId + ':' + item.key;
    var isSaved = saved.indexOf(saveKey) !== -1;
    var isVisited = visited.indexOf(item.key) !== -1;
    var searchText = [item.titleEn, item.titleHi, item.descriptionEn, item.descriptionHi, item.source].join(' ').toLowerCase();
    var status = item.available
      ? '<span class="scripture-resource-status available">' + icon('check') + bi('Available', 'उपलब्ध') + '</span>'
      : '<span class="scripture-resource-status unavailable">' + icon('info') + bi('Edition not hosted', 'संस्करण होस्टेड नहीं') + '</span>';
    var actions = item.available
      ? '<a class="scripture-resource-open" href="' + esc(item.href) + '" target="_blank" rel="noopener" onclick="scriptureTrackOpen(\'' + readerId + '\',\'' + item.key + '\')">' + icon('book') + bi(item.record ? 'Open source record' : 'Open reader', item.record ? 'स्रोत अभिलेख खोलें' : 'पाठक खोलें') + '</a>' +
        (item.local ? '<a class="scripture-resource-download" href="' + esc(item.href) + '" download onclick="scriptureTrackOpen(\'' + readerId + '\',\'' + item.key + '\')">' + icon('download') + bi('Download PDF', 'PDF डाउनलोड करें') + '</a>' : '')
      : '<button type="button" class="scripture-resource-disabled" disabled>' + icon('info') + bi('No verified file yet', 'सत्यापित फ़ाइल अभी नहीं') + '</button>';

    return '<article class="scripture-resource-card' + (item.available ? '' : ' is-unavailable') + '" id="scripture-resource-' + esc(item.key) + '" data-resource-card data-resource-group="' + esc(item.group) + '" data-resource-search="' + esc(searchText) + '">' +
      '<div class="scripture-resource-card-head">' +
        '<span class="scripture-resource-number">' + String(item.order || '').padStart(2, '0') + '</span>' +
        status +
        '<button type="button" class="scripture-resource-save' + (isSaved ? ' saved' : '') + '" data-save-key="' + esc(saveKey) + '" onclick="scriptureToggleResourceSave(this)" aria-pressed="' + (isSaved ? 'true' : 'false') + '" aria-label="' + esc(isHindi() ? 'संसाधन सहेजें' : 'Save resource') + '">' + icon('bookmark') + '</button>' +
      '</div>' +
      '<div class="scripture-resource-copy">' +
        bi(item.titleEn, item.titleHi, 'h3') +
        bi(item.descriptionEn, item.descriptionHi, 'p') +
      '</div>' +
      '<div class="scripture-resource-meta"><span>' + esc(item.source || (isHindi() ? 'सूचीबद्ध ग्रंथ' : 'Listed text')) + '</span><span>' + esc(formatMeta(item)) + '</span></div>' +
      '<div class="scripture-resource-actions">' + actions + (isVisited ? '<span class="scripture-visited-mark">' + icon('check') + bi('Opened', 'खोला गया') + '</span>' : '') + '</div>' +
    '</article>';
  }

  function groupSectionHtml(readerId, reader, group, saved, visited) {
    var items = reader.resources.filter(function (item) { return item.group === group.id; });
    return '<section class="scripture-resource-group" data-resource-section="' + esc(group.id) + '" id="scripture-group-' + esc(group.id) + '">' +
      '<div class="scripture-group-heading">' +
        '<div><p>' + bi('Reader collection', 'पाठ संग्रह') + '</p>' + bi(group.en, group.hi, 'h2') + '</div>' +
        '<span>' + items.length + ' ' + (isHindi() ? 'संसाधन' : (items.length === 1 ? 'resource' : 'resources')) + '</span>' +
      '</div>' +
      '<div class="scripture-resource-grid">' + items.map(function (item, index) {
        item.order = index + 1;
        return resourceCardHtml(readerId, item, saved, visited);
      }).join('') + '</div>' +
    '</section>';
  }

  function relatedHtml(ids) {
    return ids.map(function (id) {
      var item = relatedTitles[id];
      if (!item) return '';
      return '<button type="button" class="scripture-related-card" onclick="showText(\'' + id + '\')">' +
        icon('book') + '<span>' + bi(item[0], item[1], 'b') + bi(item[2], item[3], 'small') + '</span><i>' + icon('arrow') + '</i>' +
      '</button>';
    }).join('');
  }

  function progressHtml(readerId, reader, visited) {
    var available = reader.resources.filter(function (item) { return item.available; }).length;
    var opened = reader.resources.filter(function (item) { return item.available && visited.indexOf(item.key) !== -1; }).length;
    var percent = available ? Math.round(opened / available * 100) : 0;
    var progressLabel = available ? opened + '/' + available : (isHindi() ? '0 होस्टेड' : '0 hosted');
    return '<div class="scripture-progress" data-scripture-progress>' +
      '<div><span>' + bi('Resources opened', 'खोले गए संसाधन') + '</span><strong data-scripture-progress-label>' + progressLabel + '</strong></div>' +
      '<div class="scripture-progress-track"><span data-scripture-progress-bar style="width:' + percent + '%"></span></div>' +
      '<small>' + bi('Progress records opened resources, not the current page inside a PDF.', 'प्रगति खोले गए संसाधन दर्ज करती है, PDF के भीतर वर्तमान पृष्ठ नहीं।') + '</small>' +
    '</div>';
  }

  window.renderSacredResourceReader = function (id) {
    var reader = readers[id];
    if (!reader) return '';
    var savedPages = savedScriptures();
    var saved = savedResources();
    var visited = visitedResources(id);
    var last = lastResource(id);
    var firstAvailable = reader.resources.filter(function (item) { return item.available; })[0];
    var continueItem = last ? reader.resources.filter(function (item) { return item.key === last; })[0] : firstAvailable;
    var isPageSaved = savedPages.indexOf(id) !== -1;
    var hosted = reader.resources.filter(function (item) { return item.available; }).length;
    var unavailable = reader.resources.length - hosted;

    return '<div class="scripture-resource-reader" id="scripture-resource-reader" data-scripture-reader="' + esc(id) + '">' +
      '<nav class="scripture-reader-breadcrumb" aria-label="Breadcrumb">' +
        '<button type="button" onclick="goBack();showSection(\'home\')">' + bi('Home', 'होम') + '</button><i>/</i>' +
        '<button type="button" onclick="goBack()">' + bi('Sacred Texts', 'पवित्र ग्रंथ') + '</button><i>/</i><strong>' + esc(isHindi() ? reader.titleHi : reader.titleEn) + '</strong>' +
      '</nav>' +

      '<section class="scripture-reader-hero" style="--scripture-art:url(\'' + esc(reader.artwork) + '\')" aria-labelledby="scripture-reader-title">' +
        '<div class="scripture-reader-hero-copy">' +
          bi(reader.eyebrowEn, reader.eyebrowHi, 'p', 'scripture-reader-kicker') +
          '<h1 id="scripture-reader-title">' + esc(reader.titleEn) + '<span>' + esc(reader.titleHi) + '</span></h1>' +
          bi(reader.descriptionEn, reader.descriptionHi, 'p', 'scripture-reader-description') +
          '<div class="scripture-reader-stats">' + reader.stats.map(function (stat) {
            return '<span><b>' + esc(stat[0]) + '</b>' + bi(stat[1], stat[2], 'small') + '</span>';
          }).join('') + '</div>' +
          '<div class="scripture-reader-actions">' +
            (continueItem ? '<button type="button" class="scripture-reader-primary" onclick="scriptureContinueReading(\'' + id + '\')">' + icon('book') + bi(last ? 'Continue reading' : 'Begin reading', last ? 'पढ़ना जारी रखें' : 'पढ़ना आरम्भ करें') + '</button>' : '') +
            '<button type="button" class="scripture-reader-save' + (isPageSaved ? ' saved' : '') + '" data-scripture-id="' + id + '" onclick="scriptureTogglePageSave(this)" aria-pressed="' + (isPageSaved ? 'true' : 'false') + '">' + icon('bookmark') + bi(isPageSaved ? 'Saved on this device' : 'Save this reader', isPageSaved ? 'इस डिवाइस पर सहेजा' : 'यह पाठक सहेजें') + '</button>' +
          '</div>' +
        '</div>' +
      '</section>' +

      '<div class="scripture-reader-trust">' + icon('info') + '<div><strong>' + bi('Source & availability note', 'स्रोत और उपलब्धता नोट') + '</strong>' + bi(reader.noteEn, reader.noteHi, 'p') + '</div></div>' +

      '<div class="scripture-reader-layout">' +
        '<aside class="scripture-reader-outline" aria-label="' + esc(isHindi() ? 'संग्रह सूची' : 'Collection outline') + '">' +
          '<div class="scripture-outline-title">' + bi('In this collection', 'इस संग्रह में', 'p') + bi(reader.titleEn, reader.titleHi, 'h2') + '</div>' +
          reader.groups.map(function (group, index) {
            var count = reader.resources.filter(function (item) { return item.group === group.id; }).length;
            return '<button type="button" onclick="scriptureScrollToGroup(\'' + group.id + '\')"><span>' + String(index + 1).padStart(2, '0') + '</span><b>' + esc(isHindi() ? group.hi : group.en) + '</b><small>' + count + '</small></button>';
          }).join('') +
          progressHtml(id, reader, visited) +
        '</aside>' +

        '<main class="scripture-reader-main">' +
          '<section class="scripture-reader-intro">' +
            '<div><p>' + bi('Verified resource reader', 'सत्यापित संसाधन पाठक') + '</p><h2>' + bi('Choose a text or volume', 'ग्रंथ या खण्ड चुनें') + '</h2></div>' +
            '<span class="scripture-reader-count"><b>' + hosted + '</b>' + bi('working', 'कार्यशील') + (unavailable ? '<em> · ' + unavailable + ' ' + (isHindi() ? 'अभी उपलब्ध नहीं' : 'not yet hosted') + '</em>' : '') + '</span>' +
            '<details class="scripture-mobile-outline"><summary>' + bi('Browse collection sections', 'संग्रह के भाग देखें') + '</summary>' + reader.groups.map(function (group) {
              return '<button type="button" onclick="scriptureScrollToGroup(\'' + group.id + '\')">' + esc(isHindi() ? group.hi : group.en) + '</button>';
            }).join('') + '</details>' +
          '</section>' +

          '<section class="scripture-reader-toolbar" aria-label="' + esc(isHindi() ? 'संसाधन उपकरण' : 'Resource tools') + '">' +
            '<label class="scripture-resource-search">' + icon('search') + '<input id="scripture-resource-search" type="search" oninput="scriptureApplyFilters()" placeholder="' + esc(isHindi() ? 'ग्रंथ या खण्ड खोजें' : 'Search a text or volume') + '"></label>' +
            '<div class="scripture-filter-chips" role="group" aria-label="' + esc(isHindi() ? 'संसाधन फ़िल्टर' : 'Resource filters') + '">' +
              '<button type="button" class="active" data-scripture-filter="all" onclick="scriptureSetFilter(\'all\',this)">' + bi('All', 'सभी') + '</button>' +
              reader.groups.map(function (group) { return '<button type="button" data-scripture-filter="' + group.id + '" onclick="scriptureSetFilter(\'' + group.id + '\',this)">' + esc(isHindi() ? group.hi : group.en) + '</button>'; }).join('') +
            '</div>' +
            '<div class="scripture-language-control" role="group" aria-label="Language"><button type="button" class="' + (!isHindi() ? 'active' : '') + '" onclick="scriptureSetLanguage(\'en\')" aria-pressed="' + (!isHindi()) + '">EN</button><button type="button" class="' + (isHindi() ? 'active' : '') + '" onclick="scriptureSetLanguage(\'hi\')" aria-pressed="' + isHindi() + '">हिं</button></div>' +
          '</section>' +

          '<div id="scripture-resource-sections">' + reader.groups.map(function (group) { return groupSectionHtml(id, reader, group, saved, visited); }).join('') + '</div>' +
          '<div class="scripture-empty-state" id="scripture-empty-state" hidden>' + icon('search') + bi('No resources match this search.', 'इस खोज से कोई संसाधन नहीं मिला।', 'p') + '</div>' +
        '</main>' +
      '</div>' +

      '<section class="scripture-method-section">' +
        '<div class="scripture-section-heading"><div><p>' + bi('Trust & methodology', 'विश्वास और पद्धति') + '</p><h2>' + bi('How this reader handles sources', 'यह पाठक स्रोतों को कैसे संभालता है') + '</h2></div></div>' +
        '<div class="scripture-method-grid">' +
          '<article>' + icon('check') + '<div><b>' + bi('Verified inventory', 'सत्यापित सूची') + '</b><p>' + bi('Open actions appear only when a local file exists or the website already had a working external source.', 'खोलने की क्रिया तभी दिखती है जब स्थानीय फ़ाइल मौजूद हो या वेबसाइट के पास पहले से कार्यशील बाहरी स्रोत हो।') + '</p></div></article>' +
          '<article>' + icon('info') + '<div><b>' + bi('Edition differences', 'संस्करणों में अन्तर') + '</b><p>' + bi('Pagination, commentary and translation can differ across publishers and traditions. File labels describe the available edition, not a universal critical text.', 'प्रकाशक और परम्परा के अनुसार पृष्ठ, टीका और अनुवाद बदल सकते हैं। फ़ाइल लेबल उपलब्ध संस्करण बताते हैं, सार्वभौमिक आलोचनात्मक पाठ नहीं।') + '</p></div></article>' +
          '<article>' + icon('bookmark') + '<div><b>' + bi('Honest progress', 'पारदर्शी प्रगति') + '</b><p>' + bi('Continue reading remembers the last resource opened on this device. The browser PDF viewer controls the page position inside each file.', 'पढ़ना जारी रखें इस डिवाइस पर अंतिम खोला गया संसाधन याद रखता है। प्रत्येक फ़ाइल के भीतर पृष्ठ स्थिति browser PDF viewer नियंत्रित करता है।') + '</p></div></article>' +
        '</div>' +
      '</section>' +

      '<section class="scripture-related-section">' +
        '<div class="scripture-section-heading"><div><p>' + bi('Continue exploring', 'आगे अन्वेषण करें') + '</p><h2>' + bi('Related sacred readings', 'सम्बन्धित पवित्र ग्रंथ') + '</h2></div></div>' +
        '<div class="scripture-related-grid">' + relatedHtml(reader.related) + '</div>' +
      '</section>' +
    '</div>';
  };

  window.initSacredResourceReader = function () {
    window._scriptureResourceFilter = 'all';
    var input = document.getElementById('scripture-resource-search');
    if (input) input.value = '';
  };

  window.scriptureSetFilter = function (filter, button) {
    window._scriptureResourceFilter = filter || 'all';
    document.querySelectorAll('[data-scripture-filter]').forEach(function (item) {
      var active = item.getAttribute('data-scripture-filter') === window._scriptureResourceFilter;
      item.classList.toggle('active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    if (button) button.classList.add('active');
    window.scriptureApplyFilters();
  };

  window.scriptureApplyFilters = function () {
    var query = ((document.getElementById('scripture-resource-search') || {}).value || '').toLowerCase().trim();
    var filter = window._scriptureResourceFilter || 'all';
    var visible = 0;
    document.querySelectorAll('[data-resource-card]').forEach(function (card) {
      var groupMatch = filter === 'all' || card.getAttribute('data-resource-group') === filter;
      var queryMatch = !query || (card.getAttribute('data-resource-search') || '').indexOf(query) !== -1;
      card.hidden = !(groupMatch && queryMatch);
      if (!card.hidden) visible += 1;
    });
    document.querySelectorAll('[data-resource-section]').forEach(function (section) {
      section.hidden = !section.querySelector('[data-resource-card]:not([hidden])');
    });
    var empty = document.getElementById('scripture-empty-state');
    if (empty) empty.hidden = visible !== 0;
  };

  window.scriptureSetLanguage = function (lang) {
    if (typeof currentLang === 'undefined' || currentLang === lang) return;
    currentLang = lang;
    var headerButton = document.getElementById('langBtn');
    if (headerButton) headerButton.textContent = currentLang === 'en' ? 'हिंदी में पढ़ें' : 'Read in English';
    if (typeof applyLanguage === 'function') applyLanguage(lang);
  };

  window.scriptureScrollToGroup = function (group) {
    var section = document.getElementById('scripture-group-' + group);
    if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  window.scriptureTrackOpen = function (id, key) {
    var visited = visitedResources(id);
    if (visited.indexOf(key) === -1) visited.push(key);
    writeJson('sanatan-scripture-visited:' + id, visited);
    writeJson('sanatan-scripture-last:' + id, key);
    var reader = readers[id];
    if (!reader) return;
    var available = reader.resources.filter(function (item) { return item.available; }).length;
    var opened = reader.resources.filter(function (item) { return item.available && visited.indexOf(item.key) !== -1; }).length;
    var label = document.querySelector('[data-scripture-progress-label]');
    var bar = document.querySelector('[data-scripture-progress-bar]');
    if (label) label.textContent = opened + '/' + available;
    if (bar) bar.style.width = (available ? Math.round(opened / available * 100) : 0) + '%';
  };

  window.scriptureContinueReading = function (id) {
    var reader = readers[id];
    if (!reader) return;
    var key = lastResource(id);
    var item = reader.resources.filter(function (candidate) { return candidate.key === key && candidate.available; })[0] || reader.resources.filter(function (candidate) { return candidate.available; })[0];
    if (!item) return;
    var card = document.getElementById('scripture-resource-' + item.key);
    if (card) {
      card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      card.classList.add('continue-highlight');
      window.setTimeout(function () { card.classList.remove('continue-highlight'); }, 1600);
    }
  };

  window.scriptureTogglePageSave = function (button) {
    if (!button) return;
    var id = button.getAttribute('data-scripture-id');
    var saved = savedScriptures();
    var index = saved.indexOf(id);
    if (index === -1) saved.push(id); else saved.splice(index, 1);
    writeJson('sanatan-saved-scripture-readers', saved);
    var active = saved.indexOf(id) !== -1;
    button.classList.toggle('saved', active);
    button.setAttribute('aria-pressed', String(active));
    button.innerHTML = icon('bookmark') + bi(active ? 'Saved on this device' : 'Save this reader', active ? 'इस डिवाइस पर सहेजा' : 'यह पाठक सहेजें');
  };

  window.scriptureToggleResourceSave = function (button) {
    if (!button) return;
    var key = button.getAttribute('data-save-key');
    var saved = savedResources();
    var index = saved.indexOf(key);
    if (index === -1) saved.push(key); else saved.splice(index, 1);
    writeJson('sanatan-saved-scripture-resources', saved);
    var active = saved.indexOf(key) !== -1;
    button.classList.toggle('saved', active);
    button.setAttribute('aria-pressed', String(active));
  };

  window.sacredResourceReaderIds = Object.keys(readers);
})();
