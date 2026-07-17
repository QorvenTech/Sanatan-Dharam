(function () {
  'use strict';

  var MANTRAS = {
    'gayatri-mantra': {
      title: 'Gayatri Mantra',
      titleHi: 'गायत्री मंत्र',
      shortTitle: 'Gayatri Mantra',
      image: 'assets/mantra-gayatri.webp',
      alt: 'Traditional golden sun illustration for the Gayatri Mantra',
      source: 'Rigveda 3.62.10',
      sourceHi: 'ऋग्वेद ३.६२.१०',
      tradition: 'Rigvedic verse',
      traditionHi: 'ऋग्वैदिक मंत्र',
      subtitle: 'A Rigvedic prayer for illumination, reflection and clarity.',
      subtitleHi: 'प्रकाश, चिंतन और सद्बुद्धि के लिए एक ऋग्वैदिक प्रार्थना।',
      original: 'ॐ भूर्भुवः स्वः ।\nतत्सवितुर्वरेण्यं ।\nभर्गो देवस्य धीमहि ।\nधियो यो नः प्रचोदयात् ॥',
      transliteration: 'oṃ bhūr bhuvaḥ svaḥ,\ntat savitur vareṇyaṃ,\nbhargo devasya dhīmahi,\ndhiyo yo naḥ pracodayāt.',
      meaning: 'We meditate upon the radiant light of Savitr. May that divine brilliance inspire and guide our understanding.',
      meaningHi: 'हम उस पूजनीय सविता देव के दिव्य तेज का ध्यान करते हैं। वह हमारी बुद्धि को सत्य के मार्ग पर प्रेरित करे।',
      purpose: 'The verse is addressed to Savitr, the divine source of light and conscious activity. It is traditionally used for reflection, clarity and spiritual discipline.',
      purposeHi: 'यह मंत्र प्रकाश और चेतना के दिव्य स्रोत सविता देव को संबोधित है। इसका पारंपरिक उपयोग चिंतन, सद्बुद्धि और आध्यात्मिक अनुशासन के लिए होता है।',
      practice: 'Pronunciation, timings and customary approaches vary by lineage and family. Formal observance should follow guidance from a family elder or qualified teacher.',
      practiceHi: 'उच्चारण, समय और पारंपरिक विधि वंश, परिवार और परंपरा के अनुसार बदल सकती है। औपचारिक साधना के लिए परिवार के बुजुर्ग या योग्य शिक्षक का मार्गदर्शन लें।',
      pronunciation: 'Keep bhūr, bhuvaḥ and svaḥ distinct. Let the final visarga be gentle, and learn the Vedic accents from a qualified teacher when undertaking formal recitation.',
      pronunciationHi: 'भूः, भुवः और स्वः को स्पष्ट रखें। विसर्ग का उच्चारण सहज रखें और औपचारिक वैदिक पाठ के स्वर किसी योग्य शिक्षक से सीखें।',
      sourceNote: 'The mantra is the complete verse Rigveda 3.62.10. Om and the mahāvyāhṛtis are traditionally recited with it in widely followed practice.',
      sourceNoteHi: 'मंत्र का मूल ऋग्वेद ३.६२.१० है। व्यापक परंपरा में इसके साथ ॐ और महाव्याहृतियों का पाठ किया जाता है।'
    },
    'maha-mrityunjaya': {
      title: 'Maha Mrityunjaya Mantra',
      titleHi: 'महामृत्युंजय मंत्र',
      shortTitle: 'Maha Mrityunjaya',
      image: 'assets/mantra-shiva.webp',
      alt: 'Traditional watercolor illustration of Lord Shiva in meditation',
      source: 'Rigveda 7.59.12',
      sourceHi: 'ऋग्वेद ७.५९.१२',
      tradition: 'Shiva tradition',
      traditionHi: 'शिव परंपरा',
      subtitle: 'A Vedic prayer associated with Shiva, courage and freedom from fear.',
      subtitleHi: 'शिव से संबंधित साहस, चिंतन और भय से मुक्ति की वैदिक प्रार्थना।',
      original: 'ॐ त्र्यम्बकं यजामहे\nसुगन्धिं पुष्टिवर्धनम् ।\nउर्वारुकमिव बन्धनान्\nमृत्योर्मुक्षीय मामृतात् ॥',
      transliteration: 'oṃ tryambakaṃ yajāmahe\nsugandhiṃ puṣṭivardhanam,\nurvārukam iva bandhanān\nmṛtyor mukṣīya mā’mṛtāt.',
      meaning: 'We worship the three-eyed one, fragrant and nurturing all beings. Like a ripened fruit released from its stem, may we be released from the bondage of mortality, not from immortality.',
      meaningHi: 'हम त्रिनेत्रधारी, सुगंधित और पोषण करने वाले प्रभु की उपासना करते हैं। जैसे पका फल अपने बंधन से मुक्त होता है, वैसे हम मृत्यु के बंधन से मुक्त हों, अमृतत्व से नहीं।',
      purpose: 'This ancient verse is traditionally associated with Tryambaka, a form of Rudra-Shiva. Its imagery centers on release from bondage and remembrance of the immortal.',
      purposeHi: 'यह प्राचीन मंत्र रुद्र-शिव के त्र्यम्बक स्वरूप से जुड़ा है। इसकी उपमा बंधन से मुक्ति और अमृत तत्त्व के स्मरण पर केंद्रित है।',
      practice: 'This page provides a counting aid, not a promise of healing, protection or a particular outcome. Follow family or lineage guidance for formal japa.',
      practiceHi: 'यह पृष्ठ केवल जप-गणना में सहायता देता है; यह उपचार, सुरक्षा या किसी निश्चित फल का वादा नहीं करता। औपचारिक जप के लिए अपनी परंपरा का मार्गदर्शन लें।',
      pronunciation: 'Keep tryambakaṃ together as try-am-ba-kam. In urvārukam iva, preserve the long ā and pronounce each word without rushing.',
      pronunciationHi: 'त्र्यम्बकं को त्र्य-अम्-ब-कं के क्रम में स्पष्ट बोलें। उर्वारुकमिव में दीर्घ आ और शब्दों की स्पष्टता बनाए रखें।',
      sourceNote: 'The verse occurs at Rigveda 7.59.12 and is also transmitted in Yajurvedic traditions. Spacing and recitational accents may differ by recension.',
      sourceNoteHi: 'यह मंत्र ऋग्वेद ७.५९.१२ में मिलता है और यजुर्वेदीय परंपराओं में भी प्रचलित है। शाखा के अनुसार पद-विभाजन और स्वर बदल सकते हैं।'
    },
    'om-mantra': {
      title: 'Om — Pranava',
      titleHi: 'ॐ — प्रणव',
      shortTitle: 'Om — Pranava',
      image: '',
      alt: 'Om sacred syllable',
      source: 'Māṇḍūkya Upaniṣad',
      sourceHi: 'माण्डूक्य उपनिषद्',
      tradition: 'Sacred syllable',
      traditionHi: 'पवित्र अक्षर',
      subtitle: 'The sacred syllable contemplated across many Sanatan traditions.',
      subtitleHi: 'अनेक सनातन परंपराओं में चिंतन किया जाने वाला पवित्र प्रणव।',
      original: 'ॐ',
      transliteration: 'oṃ  ·  A-U-M',
      meaning: 'Om is contemplated as the sound-symbol of the whole of experience—past, present and future—and that which is beyond time.',
      meaningHi: 'ॐ को भूत, वर्तमान और भविष्य सहित सम्पूर्ण अनुभव तथा काल से परे सत्य के ध्वनि-प्रतीक के रूप में चिंतन किया जाता है।',
      purpose: 'Pranava is used at the beginning and conclusion of many recitations. The Māṇḍūkya Upaniṣad gives a concise philosophical contemplation of Om.',
      purposeHi: 'प्रणव का प्रयोग अनेक पाठों के आरंभ और अंत में होता है। माण्डूक्य उपनिषद् ॐ पर संक्षिप्त और गहन दार्शनिक चिंतन प्रस्तुत करता है।',
      practice: 'Let the breath remain comfortable and natural. A long or forceful vocal practice is not required; follow a teacher when learning a specific method.',
      practiceHi: 'श्वास को सहज और स्वाभाविक रखें। बहुत लंबा या बलपूर्वक उच्चारण आवश्यक नहीं है; किसी विशेष विधि के लिए योग्य शिक्षक से सीखें।',
      pronunciation: 'The sound is commonly described through A-U-M, resolving into silence. Exact phonetics and duration vary between recitational traditions.',
      pronunciationHi: 'इस ध्वनि को सामान्यतः अ-उ-म के क्रम और उसके बाद की शांति के रूप में समझाया जाता है। अवधि और उच्चारण परंपरा के अनुसार बदलते हैं।',
      sourceNote: 'The opening of the Māṇḍūkya Upaniṣad identifies Om with all this and with the three times. Om also appears throughout Vedic and later traditions.',
      sourceNoteHi: 'माण्डूक्य उपनिषद् के आरंभ में ॐ को सम्पूर्ण जगत और त्रिकाल से जोड़ा गया है। प्रणव वैदिक और उत्तरवर्ती परंपराओं में व्यापक है।'
    },
    'ganesh-mantra': {
      title: 'Ganesh Mantra',
      titleHi: 'गणेश मंत्र',
      shortTitle: 'Ganesh Mantra',
      image: 'assets/mantra-ganesha.webp',
      alt: 'Traditional watercolor illustration of Lord Ganesha',
      source: 'Traditional invocation',
      sourceHi: 'पारंपरिक आवाहन',
      tradition: 'Ganapatya tradition',
      traditionHi: 'गाणपत्य परंपरा',
      subtitle: 'A concise traditional salutation to Ganapati at a mindful beginning.',
      subtitleHi: 'मंगल और सजग आरंभ में गणपति को अर्पित संक्षिप्त पारंपरिक नमस्कार।',
      original: 'ॐ गं गणपतये नमः ॥',
      transliteration: 'oṃ gaṃ gaṇapataye namaḥ.',
      meaning: 'Om. Salutations to Ganapati.',
      meaningHi: 'ॐ। गणपति को नमस्कार।',
      purpose: 'This widely used invocation offers respect to Ganesha, who is remembered at the beginning of study, worship and important undertakings.',
      purposeHi: 'यह प्रचलित आवाहन गणेश जी को नमस्कार है, जिनका स्मरण अध्ययन, पूजा और महत्वपूर्ण कार्यों के आरंभ में किया जाता है।',
      practice: 'Customs around nyāsa, initiation and repetition vary. This simple reader is for learning and personal reflection, not a substitute for formal instruction.',
      practiceHi: 'न्यास, दीक्षा और जप की परंपराएँ भिन्न हो सकती हैं। यह सरल पाठक सीखने और व्यक्तिगत चिंतन के लिए है, औपचारिक शिक्षा का विकल्प नहीं।',
      pronunciation: 'The seed sound gaṃ ends with a nasal resonance. Pronounce gaṇapataye as ga-ṇa-pa-ta-ye, keeping the retroflex ṇ distinct where possible.',
      pronunciationHi: 'बीज ध्वनि गं का अंत अनुनासिक स्पंदन के साथ होता है। गणपतये को ग-ण-प-त-ये के क्रम में स्पष्ट बोलें।',
      sourceNote: 'This concise formula is a traditional Ganapati invocation. Practices and attributions vary across Ganapatya and regional traditions.',
      sourceNoteHi: 'यह संक्षिप्त मंत्र गणपति का पारंपरिक आवाहन है। गाणपत्य और क्षेत्रीय परंपराओं में इसकी विधि और संदर्भ भिन्न हो सकते हैं।'
    }
  };

  var MANTRA_IDS = Object.keys(MANTRAS);
  window.mantraReaderIds = MANTRA_IDS.slice();
  window.mantraData = MANTRAS;

  function activeLanguage() {
    return typeof currentLang !== 'undefined' && currentLang === 'en' ? 'en' : 'hi';
  }

  function text(item, key) {
    return activeLanguage() === 'hi' && item[key + 'Hi'] ? item[key + 'Hi'] : item[key];
  }

  function icon(name, extraClass) {
    var paths = {
      bookmark: '<path d="M6.5 3.5h11v17l-5.5-3.6-5.5 3.6z"/>',
      book: '<path d="M3.5 5.2A3.2 3.2 0 0 1 6.7 2H11v17H6.7a3.2 3.2 0 0 0-3.2 3.2z"/><path d="M20.5 5.2A3.2 3.2 0 0 0 17.3 2H13v17h4.3a3.2 3.2 0 0 1 3.2 3.2z"/>',
      copy: '<rect x="8" y="8" width="11" height="11" rx="1.5"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
      search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.4 15.4 5.1 5.1"/>',
      lotus: '<path d="M12 20c-4-2.2-6-5.2-6-9 3.4.2 5.3 1.6 6 4.3.7-2.7 2.6-4.1 6-4.3 0 3.8-2 6.8-6 9z"/><path d="M12 15.3C9.4 12.6 9.4 7.8 12 3c2.6 4.8 2.6 9.6 0 12.3zM6.7 15.8C4.5 15.5 2.9 14.3 2 12c2.1-.5 3.8-.1 5.1 1.2M17.3 15.8c2.2-.3 3.8-1.5 4.7-3.8-2.1-.5-3.8-.1-5.1 1.2M4 21h16"/>',
      temple: '<path d="M3 21h18M5 21V10h14v11M4 10h16L12 3zM9 21v-6h6v6M8 11v2m8-2v2"/>',
      speech: '<path d="M4 4h16v11H9l-5 4z"/><path d="M8 8h8M8 11h5"/>',
      sun: '<circle cx="12" cy="12" r="3"/><path d="M12 2v4m0 12v4M2 12h4m12 0h4M4.9 4.9l2.8 2.8m8.6 8.6 2.8 2.8m0-14.2-2.8 2.8m-8.6 8.6-2.8 2.8"/>'
    };
    return '<svg class="' + (extraClass || '') + '" viewBox="0 0 24 24" aria-hidden="true">' + (paths[name] || paths.lotus) + '</svg>';
  }

  function favoriteButton(item, className, label) {
    return '<button type="button" class="mantra-save-icon ' + (className || '') + ' favorite-btn" ' +
      'data-content-id="' + item.id + '" data-content-title="' + item.titleHi + '" data-content-title-en="' + item.title + '" data-section="mantras" ' +
      'aria-label="' + label + '" aria-pressed="false" onclick="mantraToggleFavorite(this)">' +
      icon('bookmark') + '<span class="mantra-save-label">' + label + '</span></button>';
  }

  function relatedCard(item) {
    var art = item.image
      ? '<img src="' + item.image + '" alt="" width="52" height="48">'
      : '<span class="mantra-related-symbol" aria-hidden="true">ॐ</span>';
    return '<button type="button" class="mantra-related-card" onclick="showText(\'' + item.id + '\')">' + art +
      '<span><strong>' + item.shortTitle + '</strong><small>' + text(item, 'tradition') + '</small></span><i>›</i></button>';
  }

  function infoCard(iconName, titleEn, titleHi, body) {
    return '<article class="mantra-info-card">' + icon(iconName) + '<div><h3>' + (activeLanguage() === 'hi' ? titleHi : titleEn) + '</h3><p>' + body + '</p></div></article>';
  }

  function practiceCard(item) {
    var hi = activeLanguage() === 'hi';
    return '<aside class="mantra-practice-card" id="mantra-practice-panel" aria-labelledby="mantra-practice-title">' +
      '<div class="mantra-practice-heading"><div><h2 id="mantra-practice-title">' + (hi ? 'जप अभ्यास' : 'Repetition Practice') + '</h2>' +
      '<p>' + (hi ? 'यह केवल गणना सहायता है; जप किसी निश्चित परिणाम का वादा नहीं करता।' : 'A counting aid only; repetition does not promise a particular outcome.') + '</p></div>' + icon('lotus', 'mantra-practice-lotus') + '</div>' +
      '<div class="mantra-count-targets" aria-label="Repetition target"><button type="button" data-mantra-target="11" onclick="mantraSetTarget(11)">11</button><button type="button" data-mantra-target="21" onclick="mantraSetTarget(21)">21</button><button type="button" data-mantra-target="108" onclick="mantraSetTarget(108)">108</button></div>' +
      '<div class="mantra-count-number" id="mantra-count-number">0<span>' + (hi ? 'गणना' : 'count') + '</span></div>' +
      '<div class="mantra-count-actions"><button type="button" onclick="mantraChangeCount(-1)" aria-label="Decrease count">−</button><button type="button" class="increment" onclick="mantraChangeCount(1)">+1</button><button type="button" onclick="mantraResetCount()">' + (hi ? 'रीसेट' : 'Reset') + '</button></div>' +
      '<div class="mantra-progress-block"><div class="mantra-progress-label"><span>' + (hi ? 'जप प्रगति' : 'Practice progress') + '</span><b id="mantra-practice-progress-label">0 of 11</b></div><div class="mantra-progress-track"><b id="mantra-practice-progress-bar"></b></div></div>' +
      '<div class="mantra-progress-block"><div class="mantra-progress-label"><span>' + (hi ? 'पठन प्रगति' : 'Reading progress') + '</span><b data-mantra-reading-label>0%</b></div><div class="mantra-progress-track"><b data-mantra-reading-bar></b></div></div>' +
      '<div class="mantra-practice-saved"><span>' + icon('bookmark') + ' ' + (hi ? 'प्रगति इस उपकरण पर सुरक्षित रहती है' : 'Progress is saved on this device') + '</span></div>' +
      '</aside>';
  }

  window.renderMantraReader = function (id) {
    var item = MANTRAS[id];
    if (!item) return '';
    window._mantraProgressSuspendUntil = Date.now() + 650;
    item.id = id;
    var hi = activeLanguage() === 'hi';
    var otherItems = MANTRA_IDS.filter(function (otherId) { return otherId !== id; }).map(function (otherId) {
      var related = MANTRAS[otherId];
      related.id = otherId;
      return relatedCard(related);
    }).join('');
    var symbol = id === 'om-mantra' ? 'ॐ' : (id === 'ganesh-mantra' ? 'गं' : 'ॐ');
    var saveLabel = hi ? 'लाइब्रेरी में सहेजें' : 'Save';
    var meaningLabel = hi ? 'अर्थ' : 'Meaning';
    var copyLabel = hi ? 'मंत्र कॉपी करें' : 'Copy mantra';

    return '<article class="mantra-reader" data-mantra-id="' + id + '">' +
      '<nav class="mantra-breadcrumb" aria-label="Breadcrumb"><button type="button" onclick="mantraReturnToLibrary()">' + (hi ? 'होम' : 'Home') + '</button><span>/</span><button type="button" onclick="mantraReturnToLibrary()">' + (hi ? 'मंत्र' : 'Mantras') + '</button><span>/</span><strong>' + (hi ? item.titleHi : item.title) + '</strong></nav>' +
      '<section class="mantra-detail-hero" aria-labelledby="mantra-detail-title"><div class="mantra-detail-copy"><p class="mantra-kicker">' + text(item, 'tradition') + '</p><h1 id="mantra-detail-title">' + item.title + '<span>' + item.titleHi + '</span></h1><p>' + text(item, 'subtitle') + '</p>' +
      '<div class="mantra-detail-meta"><span>' + icon('book') + text(item, 'source') + '</span><span>' + (hi ? 'केवल पाठ' : 'Text only') + '</span></div>' +
      '<div class="mantra-detail-actions"><button type="button" class="mantra-primary-action" onclick="mantraBeginPractice()">' + (hi ? 'अभ्यास आरंभ करें' : 'Begin practice') + '</button>' +
      favoriteButton(item, '', saveLabel) +
      '<button type="button" class="mantra-secondary-action" id="mantra-copy-action" onclick="mantraCopyCurrent()">' + icon('copy') + '<span id="mantra-copy-label">' + copyLabel + '</span></button></div></div></section>' +
      '<section class="mantra-toolbar" aria-label="Reading preferences"><div class="mantra-toolbar-group"><button type="button" class="' + (hi ? 'active' : '') + '" aria-pressed="' + hi + '" onclick="mantraSetLanguage(\'hi\')">हिंदी</button><button type="button" class="' + (!hi ? 'active' : '') + '" aria-pressed="' + (!hi) + '" onclick="mantraSetLanguage(\'en\')">English</button></div>' +
      '<div class="mantra-toolbar-group"><span class="mantra-toolbar-label">' + meaningLabel + '</span><button type="button" id="mantra-meaning-toggle" aria-pressed="true" onclick="mantraToggleMeanings()">' + (hi ? 'दिखाएँ' : 'Show') + '</button></div>' +
      '<div class="mantra-toolbar-group"><span class="mantra-toolbar-label">' + (hi ? 'अक्षर आकार' : 'Text size') + '</span><button type="button" onclick="mantraChangeTextSize(-0.08)">A−</button><button type="button" onclick="mantraChangeTextSize(0.08)">A+</button></div></section>' +
      '<div class="mantra-body-grid"><main class="mantra-primary-reading"><section class="mantra-reader-card"><h2 class="mantra-reader-heading">' + (hi ? 'मूल मंत्र' : 'Original Mantra') + ' · ' + (hi ? item.titleHi : item.title) + '</h2>' +
      '<div class="mantra-script-grid"><div class="mantra-original-block"><div class="mantra-symbol" aria-hidden="true">' + symbol + '</div><div class="mantra-original">' + item.original + '</div></div><div class="mantra-transliteration"><h3>' + (hi ? 'रोमन लिप्यंतरण' : 'Roman transliteration') + '</h3><p>' + item.transliteration + '</p></div></div>' +
      '<div class="mantra-meaning-grid"><details open><summary>हिंदी अर्थ</summary><p>' + item.meaningHi + '</p></details><details open><summary>English meaning</summary><p>' + item.meaning + '</p></details></div></section></main>' +
      practiceCard(item) +
      '<section class="mantra-info-grid" id="mantra-context-section">' +
      infoCard('temple', 'Purpose & Traditional Context', 'उद्देश्य और पारंपरिक संदर्भ', text(item, 'purpose')) +
      infoCard('lotus', 'Respectful Practice', 'सम्मानपूर्वक अभ्यास', text(item, 'practice')) +
      infoCard('speech', 'Pronunciation Guidance', 'उच्चारण मार्गदर्शन', text(item, 'pronunciation')) +
      infoCard('book', 'Source & Tradition', 'स्रोत और परंपरा', text(item, 'sourceNote')) +
      '</section></div>' +
      '<section class="mantra-related-section"><h2>' + (hi ? 'संबंधित मंत्र और पाठ' : 'Explore Related') + '</h2><div class="mantra-related-grid">' + otherItems +
      '<button type="button" class="mantra-related-card" onclick="showSection(\'paathmandir\')"><img src="assets/paath-hanuman-chalisa.png" alt="" width="52" height="48"><span><strong>Paath Mandir</strong><small>' + (hi ? 'भक्तिमय पाठ' : 'Devotional readings') + '</small></span><i>›</i></button></div></section>' +
      '<section class="mantra-trust-strip">' + icon('temple') + '<div><strong>' + (hi ? 'स्रोत और विश्वास' : 'Source & trust') + '</strong><p>' + (hi ? 'सामग्री को पारंपरिक ग्रंथों और सम्मानित संदर्भों से सावधानीपूर्वक जाँचा जाता है।' : 'Content is checked against traditional scriptures and respected references with careful cross-referencing.') + '</p></div><div><small>' + (hi ? 'अनुवाद अर्थ संप्रेषित करते हैं; वे संस्कृत का शब्दशः विकल्प नहीं हैं। परंपरा के अनुसार उच्चारण और विधि भिन्न हो सकती है।' : 'Translations communicate meaning rather than replace the Sanskrit word-for-word. Pronunciation and practice can vary by tradition.') + '</small></div></section>' +
      '</article>';
  };

  function practiceState(reader) {
    var id = reader.getAttribute('data-mantra-id');
    var state = { target: 11, count: 0 };
    try {
      var stored = JSON.parse(localStorage.getItem('sanatan-mantra-practice:' + id) || '{}');
      if ([11, 21, 108].indexOf(Number(stored.target)) !== -1) state.target = Number(stored.target);
      state.count = Math.max(0, Math.min(state.target, Number(stored.count) || 0));
    } catch (error) {}
    return state;
  }

  function savePracticeState(reader, state) {
    try { localStorage.setItem('sanatan-mantra-practice:' + reader.getAttribute('data-mantra-id'), JSON.stringify(state)); } catch (error) {}
  }

  function paintPractice(reader, state) {
    Array.prototype.forEach.call(reader.querySelectorAll('[data-mantra-target]'), function (button) {
      var active = Number(button.getAttribute('data-mantra-target')) === state.target;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
    var number = reader.querySelector('#mantra-count-number');
    if (number) number.firstChild.nodeValue = String(state.count);
    var label = reader.querySelector('#mantra-practice-progress-label');
    if (label) label.textContent = state.count + ' of ' + state.target;
    var bar = reader.querySelector('#mantra-practice-progress-bar');
    if (bar) bar.style.width = Math.round((state.count / state.target) * 100) + '%';
    reader.classList.toggle('mantra-practice-complete', state.count >= state.target);
  }

  function currentReader() {
    return document.querySelector('#text-display .mantra-reader');
  }

  window.mantraSetTarget = function (target) {
    var reader = currentReader();
    if (!reader || [11, 21, 108].indexOf(Number(target)) === -1) return;
    var state = { target: Number(target), count: 0 };
    savePracticeState(reader, state);
    paintPractice(reader, state);
  };

  window.mantraChangeCount = function (delta) {
    var reader = currentReader();
    if (!reader) return;
    var state = practiceState(reader);
    state.count = Math.max(0, Math.min(state.target, state.count + Number(delta || 0)));
    savePracticeState(reader, state);
    paintPractice(reader, state);
  };

  window.mantraResetCount = function () {
    var reader = currentReader();
    if (!reader) return;
    var state = practiceState(reader);
    state.count = 0;
    savePracticeState(reader, state);
    paintPractice(reader, state);
  };

  function paintFavoriteButton(button) {
    if (!button) return;
    var saved = button.classList.contains('favorited');
    var compact = button.closest('.mantra-detail-actions');
    var hi = activeLanguage() === 'hi';
    var label = saved ? (hi ? 'सहेजा गया' : 'Saved') : (hi ? 'लाइब्रेरी में सहेजें' : 'Save');
    button.innerHTML = icon('bookmark') + (compact ? '<span class="mantra-save-label">' + label + '</span>' : '<span class="sr-only">' + label + '</span>');
    button.setAttribute('aria-label', label);
    button.setAttribute('aria-pressed', saved ? 'true' : 'false');
  }

  window.mantraToggleFavorite = async function (button) {
    if (typeof toggleFavorite !== 'function') return;
    await toggleFavorite(button);
    paintFavoriteButton(button);
  };

  window.initMantraLibrary = function () {
    var section = document.getElementById('mantras');
    if (!section) return;
    Array.prototype.forEach.call(section.querySelectorAll('.mantra-save-icon'), function (button) {
      paintFavoriteButton(button);
      if (typeof loadFavoriteStatus === 'function' && typeof currentUser !== 'undefined' && currentUser) {
        Promise.resolve(loadFavoriteStatus(button.dataset.contentId, button)).then(function () { paintFavoriteButton(button); });
      }
    });
    applyLibraryFilters();
  };

  function paintReadingProgress(reader) {
    if (!reader || !reader.isConnected) return;
    var key = 'sanatan-mantra-reading-v3:' + reader.getAttribute('data-mantra-id');
    var saved = 0;
    try { saved = Number(localStorage.getItem(key) || 0); } catch (error) {}
    if (Date.now() < Number(window._mantraProgressSuspendUntil || 0)) {
      Array.prototype.forEach.call(reader.querySelectorAll('[data-mantra-reading-label]'), function (node) { node.textContent = saved + '%'; });
      Array.prototype.forEach.call(reader.querySelectorAll('[data-mantra-reading-bar]'), function (node) { node.style.width = saved + '%'; });
      return;
    }
    var rect = reader.getBoundingClientRect();
    var readerTop = window.scrollY + rect.top;
    var total = Math.max(1, reader.offsetHeight - window.innerHeight);
    var current = Math.max(0, Math.min(total, window.scrollY - readerTop));
    var percent = Math.max(0, Math.min(100, Math.round((current / total) * 100)));
    try {
      percent = Math.max(saved, percent);
      localStorage.setItem(key, String(percent));
    } catch (error) {}
    Array.prototype.forEach.call(reader.querySelectorAll('[data-mantra-reading-label]'), function (node) { node.textContent = percent + '%'; });
    Array.prototype.forEach.call(reader.querySelectorAll('[data-mantra-reading-bar]'), function (node) { node.style.width = percent + '%'; });
  }

  window.initMantraReader = function () {
    var reader = currentReader();
    if (!reader) return;
    var id = reader.getAttribute('data-mantra-id');
    var scale = 1;
    var hidden = false;
    try {
      scale = Math.max(0.84, Math.min(1.24, Number(localStorage.getItem('sanatan-mantra-scale') || 1)));
      hidden = localStorage.getItem('sanatan-mantra-meanings') === 'hidden';
    } catch (error) {}
    reader.style.setProperty('--mantra-text-scale', String(scale));
    reader.classList.toggle('meanings-hidden', hidden);
    var meaningButton = reader.querySelector('#mantra-meaning-toggle');
    if (meaningButton) {
      meaningButton.setAttribute('aria-pressed', hidden ? 'false' : 'true');
      meaningButton.textContent = hidden ? (activeLanguage() === 'hi' ? 'छिपा है' : 'Hidden') : (activeLanguage() === 'hi' ? 'दिख रहा है' : 'Shown');
    }
    paintPractice(reader, practiceState(reader));
    var favorite = reader.querySelector('.mantra-detail-actions .mantra-save-icon');
    paintFavoriteButton(favorite);
    if (favorite && typeof loadFavoriteStatus === 'function' && typeof currentUser !== 'undefined' && currentUser) {
      Promise.resolve(loadFavoriteStatus(id, favorite)).then(function () { paintFavoriteButton(favorite); });
    }
    paintReadingProgress(reader);
    window.setTimeout(function () { paintReadingProgress(currentReader()); }, 720);
    if (!window._mantraReadingProgressBound) {
      window._mantraReadingProgressBound = true;
      window.addEventListener('scroll', function () { paintReadingProgress(currentReader()); }, { passive: true });
      window.addEventListener('resize', function () { paintReadingProgress(currentReader()); }, { passive: true });
    }
  };

  window.mantraSetLanguage = function (lang) {
    if (lang !== 'hi' && lang !== 'en') return;
    currentLang = lang;
    var headerButton = document.getElementById('langBtn');
    if (headerButton) headerButton.textContent = lang === 'en' ? 'हिंदी में पढ़ें' : 'Read in English';
    if (typeof applyLanguage === 'function') applyLanguage(lang);
    else if (window.currentTextId) showText(window.currentTextId);
  };

  window.mantraToggleMeanings = function () {
    var reader = currentReader();
    if (!reader) return;
    var hidden = !reader.classList.contains('meanings-hidden');
    reader.classList.toggle('meanings-hidden', hidden);
    try { localStorage.setItem('sanatan-mantra-meanings', hidden ? 'hidden' : 'shown'); } catch (error) {}
    var button = reader.querySelector('#mantra-meaning-toggle');
    if (button) {
      button.setAttribute('aria-pressed', hidden ? 'false' : 'true');
      button.textContent = hidden ? (activeLanguage() === 'hi' ? 'छिपा है' : 'Hidden') : (activeLanguage() === 'hi' ? 'दिख रहा है' : 'Shown');
    }
  };

  window.mantraChangeTextSize = function (delta) {
    var reader = currentReader();
    if (!reader) return;
    var current = Number(reader.style.getPropertyValue('--mantra-text-scale') || 1);
    var next = Math.max(0.84, Math.min(1.24, current + Number(delta || 0)));
    reader.style.setProperty('--mantra-text-scale', String(next));
    try { localStorage.setItem('sanatan-mantra-scale', String(next)); } catch (error) {}
  };

  window.mantraBeginPractice = function () {
    var panel = document.getElementById('mantra-practice-panel');
    if (panel) panel.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  window.mantraCopyCurrent = async function () {
    var reader = currentReader();
    if (!reader) return;
    var item = MANTRAS[reader.getAttribute('data-mantra-id')];
    if (!item) return;
    var copy = item.original + '\n\n' + item.transliteration + '\n\n' + text(item, 'meaning');
    var label = document.getElementById('mantra-copy-label');
    try {
      await navigator.clipboard.writeText(copy);
      if (label) label.textContent = activeLanguage() === 'hi' ? 'कॉपी हो गया' : 'Copied';
      window.setTimeout(function () { if (label) label.textContent = activeLanguage() === 'hi' ? 'मंत्र कॉपी करें' : 'Copy mantra'; }, 1600);
    } catch (error) {
      if (label) label.textContent = activeLanguage() === 'hi' ? 'कॉपी उपलब्ध नहीं' : 'Copy unavailable';
    }
  };

  window.mantraReturnToLibrary = function () {
    var display = document.getElementById('text-display');
    if (display) {
      display.style.display = 'none';
      display.classList.remove('mantra-display');
    }
    var section = document.getElementById('mantras');
    if (section) section.style.display = '';
    if (typeof showSection === 'function') showSection('mantras');
    if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  window.mantraScrollToLibrary = function () {
    var target = document.getElementById('mantra-library-panel');
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  window.mantraOpenPracticeGuide = function () {
    var target = document.getElementById('mantra-start-here');
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  function applyLibraryFilters() {
    var section = document.getElementById('mantras');
    if (!section) return;
    var queryInput = section.querySelector('#mantra-search');
    var query = queryInput ? queryInput.value.trim().toLocaleLowerCase() : '';
    var category = section.getAttribute('data-mantra-filter') || 'all';
    var visible = 0;
    Array.prototype.forEach.call(section.querySelectorAll('.mantra-library-card'), function (card) {
      var categories = (card.getAttribute('data-mantra-categories') || '').split(' ');
      var matchesCategory = category === 'all' || categories.indexOf(category) !== -1;
      var matchesQuery = !query || (card.getAttribute('data-mantra-search') || '').toLocaleLowerCase().indexOf(query) !== -1;
      card.hidden = !(matchesCategory && matchesQuery);
      if (!card.hidden) visible += 1;
    });
    var featured = section.querySelector('.mantra-featured');
    if (featured) {
      var featureSearch = (featured.getAttribute('data-mantra-search') || '').toLocaleLowerCase();
      var featureCategories = (featured.getAttribute('data-mantra-categories') || '').split(' ');
      featured.hidden = !((category === 'all' || featureCategories.indexOf(category) !== -1) && (!query || featureSearch.indexOf(query) !== -1));
    }
    var empty = section.querySelector('#mantra-no-results');
    if (empty) empty.hidden = visible !== 0;
  }

  window.filterMantras = function (category, button) {
    var section = document.getElementById('mantras');
    if (!section) return;
    section.setAttribute('data-mantra-filter', category || 'all');
    Array.prototype.forEach.call(section.querySelectorAll('.mantra-filter'), function (candidate) {
      var active = candidate === button;
      candidate.classList.toggle('active', active);
      candidate.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
    applyLibraryFilters();
  };

  window.searchMantras = applyLibraryFilters;

  document.addEventListener('DOMContentLoaded', function () {
    window.initMantraLibrary();
  });
})();
