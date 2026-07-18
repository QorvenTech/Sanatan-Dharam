(function () {
  'use strict';

  var IDS = ['ganesh', 'durga', 'saraswati', 'krishna', 'lakshmi', 'kuber', 'jagdish', 'ambe', 'shiv'];
  window.aartiReaderIds = IDS.map(function (id) { return 'aarti-' + id; });

  var A = {
    ganesh: {
      title: 'Ganesh Aarti', titleHi: 'गणेश आरती', deity: 'Ganesha', deityHi: 'गणेश', deityId: 'ganesha', category: 'ganesha', image: 'assets/deity-ganesha.webp',
      tradition: 'Ganesha tradition', traditionHi: 'गणेश परंपरा',
      summary: 'A devotional offering to Ganesha, commonly recited at beginnings and in home or temple worship.',
      summaryHi: 'भगवान गणेश को समर्पित आरती, जिसका पाठ शुभ आरंभ तथा गृह या मंदिर की उपासना में किया जाता है।',
      context: 'Recited in many Ganesha devotional settings; wording and order may vary locally.',
      contextHi: 'गणेश उपासना की अनेक परंपराओं में पाठ किया जाता है; स्थानीय पाठ और क्रम भिन्न हो सकते हैं।',
      meaning: 'This Aarti praises Ganesha as the compassionate remover of obstacles and remembers his relationship with Parvati and Shiva. Its language expresses welcome, reverence and a request for wise guidance.',
      meaningHi: 'यह आरती भगवान गणेश की करुणा, विघ्नों को दूर करने वाले स्वरूप और माता पार्वती तथा भगवान शिव से उनके संबंध का स्मरण करती है। इसका भाव स्वागत, श्रद्धा और विवेकपूर्ण मार्गदर्शन की प्रार्थना है।'
    },
    durga: {
      title: 'Durga Aarti', titleHi: 'दुर्गा आरती', deity: 'Durga', deityHi: 'दुर्गा', deityId: 'durga', category: 'devi', image: 'assets/deity-durga.webp',
      tradition: 'Devi tradition', traditionHi: 'देवी परंपरा',
      summary: 'An Aarti offered to the Divine Mother in Durga traditions and festival observances.',
      summaryHi: 'दुर्गा परंपराओं और उत्सवों में दिव्य माता को अर्पित की जाने वाली आरती।',
      context: 'Often encountered in Shakta and regional devotional practice; verses vary by community.',
      contextHi: 'शाक्त और क्षेत्रीय भक्ति परंपराओं में प्रचलित; समुदाय के अनुसार पदों में भिन्नता मिलती है।',
      meaning: 'The text honours the Divine Mother as courageous, compassionate and protective. Its imagery comes from living Durga traditions, so readers should retain the wording followed in their family or temple.',
      meaningHi: 'यह पाठ दिव्य माता के साहस, करुणा और संरक्षणकारी स्वरूप का गुणगान करता है। इसकी छवियाँ जीवंत दुर्गा परंपराओं से आती हैं, इसलिए परिवार या मंदिर में प्रचलित पाठ का सम्मान करें।'
    },
    saraswati: {
      title: 'Saraswati Aarti', titleHi: 'सरस्वती आरती', deity: 'Saraswati', deityHi: 'सरस्वती', deityId: 'saraswati', category: 'devi', image: 'assets/deity-saraswati.webp',
      tradition: 'Devi tradition', traditionHi: 'देवी परंपरा',
      summary: 'A devotional offering associated with learning, music, knowledge and the arts.',
      summaryHi: 'ज्ञान, शिक्षा, संगीत, वाणी और कलाओं की देवी को समर्पित भक्तिमय आरती।',
      context: 'Commonly read in educational, household and festival settings; local forms differ.',
      contextHi: 'शिक्षा, गृह-उपासना और उत्सवों में पढ़ी जाती है; स्थानीय पाठ अलग हो सकते हैं।',
      meaning: 'The Aarti invokes Saraswati as a source of learning, clarity and creative expression. Its prayerful tone asks that confusion be replaced by knowledge and thoughtful conduct.',
      meaningHi: 'यह आरती सरस्वती को ज्ञान, स्पष्टता और सृजनात्मक अभिव्यक्ति के स्रोत के रूप में स्मरण करती है। इसका प्रार्थना-भाव अज्ञान के स्थान पर विवेक और सदाचार की कामना करता है।'
    },
    krishna: {
      title: 'Krishna Aarti', titleHi: 'कृष्ण आरती', deity: 'Krishna', deityHi: 'कृष्ण', deityId: 'krishna', category: 'vishnu', image: 'assets/deity-krishna.webp',
      tradition: 'Vaishnava traditions', traditionHi: 'वैष्णव परंपराएँ',
      summary: 'A devotional Aarti honouring Krishna in home, temple and festival traditions.',
      summaryHi: 'गृह, मंदिर और उत्सव की परंपराओं में भगवान कृष्ण को समर्पित भक्तिमय आरती।',
      context: 'Associated with Krishna devotion; melodies, refrains and verse order vary.',
      contextHi: 'कृष्ण भक्ति से संबद्ध; धुन, टेक और पद-क्रम परंपरा के अनुसार बदलते हैं।',
      meaning: 'The verses contemplate Krishna’s beauty, flute, peacock crown and the atmosphere of Vrindavan. The central mood is loving devotion rather than a promise of a particular outcome.',
      meaningHi: 'इन पदों में कृष्ण की मोहक छवि, मुरली, मोर-मुकुट और वृंदावन के भाव का ध्यान किया जाता है। इसका मुख्य स्वर प्रेमपूर्ण भक्ति है, किसी निश्चित फल का वचन नहीं।'
    },
    lakshmi: {
      title: 'Lakshmi Aarti', titleHi: 'लक्ष्मी आरती', deity: 'Lakshmi', deityHi: 'लक्ष्मी', deityId: 'lakshmi', category: 'lakshmi', image: 'assets/deity-lakshmi.webp',
      tradition: 'Lakshmi traditions', traditionHi: 'लक्ष्मी परंपराएँ',
      summary: 'An offering of light to Lakshmi, recited in household and festival traditions.',
      summaryHi: 'गृह और उत्सव की परंपराओं में माता लक्ष्मी को अर्पित प्रकाश-उपासना।',
      context: 'Read in many household and festival settings; customary wording varies.',
      contextHi: 'अनेक गृह और उत्सव परंपराओं में पाठ; प्रचलित शब्दावली भिन्न हो सकती है।',
      meaning: 'The Aarti honours Lakshmi through images of auspiciousness, generosity and well-being. Prosperity is presented within a devotional and ethical context, not as a guaranteed material result.',
      meaningHi: 'यह आरती लक्ष्मी के मंगल, उदारता और कल्याणकारी स्वरूप का स्मरण करती है। समृद्धि का भाव नैतिक और भक्तिमय संदर्भ में है, किसी निश्चित भौतिक परिणाम की गारंटी नहीं।'
    },
    kuber: {
      title: 'Kuber Aarti', titleHi: 'कुबेर आरती', deity: 'Kuber', deityHi: 'कुबेर', deityId: '', category: 'lakshmi', image: 'assets/deity-kuber.webp',
      tradition: 'Regional devotional text', traditionHi: 'क्षेत्रीय भक्तिमय पाठ',
      summary: 'A devotional text associated with Kuber, presented with tradition and source context.',
      summaryHi: 'कुबेर से संबद्ध भक्तिमय पाठ, जिसे परंपरा और स्रोत-संदर्भ के साथ प्रस्तुत किया गया है।',
      context: 'Regional versions differ. This library makes no promise of wealth or financial result.',
      contextHi: 'क्षेत्रीय पाठ भिन्न हैं। यह संग्रह धन या आर्थिक परिणाम का कोई वचन नहीं देता।',
      meaning: 'The text remembers Kuber’s traditional association with stewardship of resources. It is best read as devotional literature, with generosity and responsibility kept central.',
      meaningHi: 'यह पाठ संसाधनों के संरक्षण से जुड़ी कुबेर की पारंपरिक भूमिका का स्मरण करता है। इसे भक्तिमय साहित्य की तरह पढ़ें, जिसमें उदारता और उत्तरदायित्व केंद्रीय रहें।'
    },
    jagdish: {
      title: 'Om Jai Jagdish Hare', titleHi: 'ॐ जय जगदीश हरे', deity: 'Vishnu / Jagdish', deityHi: 'विष्णु / जगदीश', deityId: 'vishnu', category: 'vishnu', image: 'assets/deity-vishnu.webp',
      tradition: 'Vishnu tradition', traditionHi: 'विष्णु परंपरा',
      summary: 'A widely known devotional Aarti used in many homes and temples; wording and practice vary by tradition.',
      summaryHi: 'अनेक घरों और मंदिरों में प्रचलित भक्तिमय आरती; शब्द और पाठ-विधि परंपरा के अनुसार बदलते हैं।',
      context: 'Widely recited in home and temple traditions; wording varies.',
      contextHi: 'गृह और मंदिर परंपराओं में व्यापक पाठ; शब्दावली में भिन्नता मिलती है।',
      meaning: 'This Aarti addresses Jagdish, the Lord of the universe, through praise and surrender. The opening asks that the distress of devotees be relieved.\n\nLater verses remember the Divine as mother, father, refuge and compassionate sustainer. The language encourages faith, humility and service rather than guaranteeing a particular result.\n\nThe composition is commonly attributed to Pandit Shardha Ram Phillauri. Readers should still identify the version followed by their own family or temple.',
      meaningHi: 'यह आरती भगवान विष्णु के जगदीश स्वरूप की स्तुति है। आरंभिक पद भक्तों के संकट दूर होने की प्रार्थना करते हैं।\n\nआगे के पद ईश्वर को माता-पिता, शरण और करुणामय पालनकर्ता मानते हुए श्रद्धा, नम्रता तथा सेवा का भाव प्रकट करते हैं।\n\nइस रचना का श्रेय सामान्यतः पंडित श्रद्धाराम फिल्लौरी को दिया जाता है। फिर भी परिवार या मंदिर में प्रचलित पाठ का सम्मान करें।',
      source: 'https://www.hindupedia.com/en/Jai_Jagadish_Hare'
    },
    ambe: {
      title: 'Jai Ambe Gauri', titleHi: 'जय अम्बे गौरी', deity: 'Durga / Ambe', deityHi: 'दुर्गा / अम्बे', deityId: 'durga', category: 'devi', image: 'assets/deity-durga.webp',
      tradition: 'Devi traditions', traditionHi: 'देवी परंपराएँ',
      summary: 'A widely recited devotional Aarti honouring the Divine Mother.',
      summaryHi: 'दिव्य माता का गुणगान करने वाली व्यापक रूप से प्रचलित आरती।',
      context: 'Recited in varied Devi traditions; verse order and pronunciation may differ.',
      contextHi: 'विभिन्न देवी परंपराओं में पाठ; पद-क्रम और उच्चारण में भिन्नता हो सकती है।',
      meaning: 'The verses praise Ambe through traditional names, attributes and narratives of the Divine Mother. Different communities preserve different lengths and local readings.',
      meaningHi: 'इन पदों में अम्बे के पारंपरिक नामों, गुणों और दिव्य माता से जुड़ी कथाओं का स्मरण है। विभिन्न समुदाय अलग लंबाई और स्थानीय पाठ सुरक्षित रखते हैं।'
    },
    shiv: {
      title: 'Shiva Aarti', titleHi: 'शिव आरती', deity: 'Shiva', deityHi: 'शिव', deityId: 'shiva', category: 'shiva', image: 'assets/deity-shiva.webp',
      tradition: 'Shaiva traditions', traditionHi: 'शैव परंपराएँ',
      summary: 'An offering of light associated with Shiva worship; regional versions and customs vary.',
      summaryHi: 'शिव उपासना से संबद्ध प्रकाश-अर्पण; क्षेत्रीय पाठ और प्रथाएँ भिन्न हैं।',
      context: 'Read in Shaiva and regional traditions; this is one commonly encountered version.',
      contextHi: 'शैव और क्षेत्रीय परंपराओं में पाठ; यहाँ एक प्रचलित संस्करण प्रस्तुत है।',
      meaning: 'The Aarti uses familiar Shaiva imagery and also reflects regional forms of the text. It should be read with attention to the version and pronunciation preserved in one’s tradition.',
      meaningHi: 'यह आरती परिचित शैव प्रतीकों और क्षेत्रीय पाठ-रूपों का उपयोग करती है। अपनी परंपरा में सुरक्षित पाठ और उच्चारण का ध्यान रखते हुए पढ़ें।'
    }
  };

  var VERIFIED_SOURCES = {
    ganesh: 'https://www.drikpanchang.com/lyrics/aarti/shree-ganesh/jay-ganesh-aarti.html?ck=1&lang=hi',
    durga: 'https://www.drikpanchang.com/lyrics/aarti/durga-mata/durga-mata-aarti.html?ck=1&lang=en',
    saraswati: 'https://www.drikpanchang.com/lyrics/aarti/saraswati-mata/saraswati-mata-aarti.html?ck=1&lang=en',
    krishna: 'https://www.drikpanchang.com/lyrics/aarti/lord-krishna/kunj-bihari-aarti.html?ck=1&lang=hi',
    lakshmi: 'https://www.drikpanchang.com/lyrics/aarti/lakshmi-mata/lakshmi-mata-aarti.html?ck=1&lang=hi',
    kuber: 'https://www.bhaktibharat.com/aarti/shri-kuber-aarti-jai-kuber-swami',
    jagdish: 'https://www.drikpanchang.com/lyrics/aarti/lord-narayan/jai-jagdish-aarti.html',
    ambe: 'https://www.drikpanchang.com/lyrics/aarti/ambe-mata/ambe-mata-aarti.html?ck=1&lang=hi',
    shiv: 'https://www.drikpanchang.com/lyrics/aarti/lord-shiva/shiva-aarti.html'
  };

  var VERIFIED_LYRICS = {
    durga: {
      hi: [
        'अम्बे तू है जगदम्बे काली, जय दुर्गे खप्पर वाली,\nतेरे ही गुण गावें भारती, ओ मैया हम सब उतारे तेरी आरती।\nओ मैया हम सब उतारे तेरी आरती॥',
        'तेरे भक्त जनों पर माता भीर पड़ी है भारी।\nदानव दल पर टूट पड़ो माँ करके सिंह सवारी॥\nसौ-सौ सिंहों से बलशाली, है अष्ट भुजाओं वाली,\nदुष्टों को तू ही ललकारती।\nओ मैया हम सब उतारे तेरी आरती॥',
        'माँ-बेटे का है इस जग में बड़ा ही निर्मल नाता।\nपूत-कपूत सुने हैं पर ना माता सुनी कुमाता॥\nसब पे करुणा दर्शाने वाली, अमृत बरसाने वाली,\nदुखियों के दुखड़े निवारती।\nओ मैया हम सब उतारे तेरी आरती॥',
        'नहीं मांगते धन और दौलत, न चांदी न सोना।\nहम तो मांगें तेरे चरणों में छोटा सा कोना॥\nसबकी बिगड़ी बनाने वाली, लाज बचाने वाली,\nसतियों के सत को संवारती।\nओ मैया हम सब उतारे तेरी आरती॥',
        'चरण शरण में खड़े तुम्हारी, ले पूजा की थाली।\nवरद हस्त सर पर रख दो माँ, संकट हरने वाली॥\nमाँ भर दो भक्ति रस प्याली, अष्ट भुजाओं वाली,\nभक्तों के कारज तू ही सारती।\nओ मैया हम सब उतारे तेरी आरती॥'
      ],
      roman: [
        'Ambe Tu Hai Jagdambe Kaali, Jai Durge Khappar Vaali,\nTere Hi Gun Gaavein Bharati, O Maiya Hum Sab Utaare Teri Aarti.\nO Maiya Hum Sab Utaare Teri Aarti.',
        'Tere Bhakt Janon Par Maata Bheer Padi Hai Bhaari.\nDaanav Dal Par Toot Pado Maa Karke Singh Savaari.\nSau-Sau Singhon Se Balshaali, Hai Asht Bhujaaon Vaali,\nDushton Ko Tu Hi Lalkaarti.\nO Maiya Hum Sab Utaare Teri Aarti.',
        'Maa-Bete Ka Hai Is Jag Mein Bada Hi Nirmal Naata.\nPoot-Kapoot Sune Hain Par Na Maata Suni Kumaata.\nSab Pe Karuna Darsaane Vaali, Amrit Barsaane Vaali,\nDukhiyon Ke Dukhde Nivaarti.\nO Maiya Hum Sab Utaare Teri Aarti.',
        'Nahin Maangte Dhan Aur Daulat, Na Chaandi Na Sona.\nHum To Maangein Tere Charnon Mein Chhota Sa Kona.\nSabki Bigdi Banaane Vaali, Laaj Bachaane Vaali,\nSatiyon Ke Sat Ko Savaarti.\nO Maiya Hum Sab Utaare Teri Aarti.',
        'Charan Sharan Mein Khade Tumhaari, Le Pooja Ki Thaali.\nVarad Hast Sar Par Rakh Do Maa, Sankat Harne Vaali.\nMaa Bhar Do Bhakti Ras Pyaali, Asht Bhujaaon Vaali,\nBhakton Ke Kaaraj Tu Hi Saarti.\nO Maiya Hum Sab Utaare Teri Aarti.'
      ]
    },
    saraswati: {
      hi: [
        'जय सरस्वती माता, मैया जय सरस्वती माता।\nसदगुण वैभव शालिनी, त्रिभुवन विख्याता॥\nजय सरस्वती माता॥',
        'चन्द्रवदनि पद्मासिनि, द्युति मंगलकारी।\nसोहे शुभ हंस सवारी, अतुल तेजधारी॥\nजय सरस्वती माता॥',
        'बाएं कर में वीणा, दाएं कर माला।\nशीश मुकुट मणि सोहे, गल मोतियन माला॥\nजय सरस्वती माता॥',
        'देवी शरण जो आए, उनका उद्धार किया।\nपैठी मंथरा दासी, रावण संहार किया॥\nजय सरस्वती माता॥',
        'विद्या ज्ञान प्रदायिनि, ज्ञान प्रकाश भरो।\nमोह अज्ञान और तिमिर का, जग से नाश करो॥\nजय सरस्वती माता॥',
        'धूप दीप फल मेवा, माँ स्वीकार करो।\nज्ञानचक्षु दे माता, जग निस्तार करो॥\nजय सरस्वती माता॥',
        'माँ सरस्वती की आरती, जो कोई जन गावे।\nहितकारी सुखकारी, ज्ञान भक्ति पावे॥\nजय सरस्वती माता॥',
        'जय सरस्वती माता, जय जय सरस्वती माता।\nसदगुण वैभव शालिनी, त्रिभुवन विख्याता॥\nजय सरस्वती माता॥'
      ],
      roman: [
        'Jai Saraswati Mata, Maiya Jai Saraswati Mata.\nSadgun Vaibhav Shaalini, Tribhuvan Vikhyaata.\nJai Saraswati Mata.',
        'Chandravadan Padmaasini, Dyuti Mangalkaari.\nSohe Shubh Hans Savaari, Atul Tejdhaari.\nJai Saraswati Mata.',
        'Baayein Kar Mein Veena, Daayein Kar Maala.\nSheesh Mukut Mani Sohe, Gal Motiyan Maala.\nJai Saraswati Mata.',
        'Devi Sharan Jo Aaye, Unka Uddhaar Kiya.\nPaithi Manthara Daasi, Raavan Sanhaar Kiya.\nJai Saraswati Mata.',
        'Vidya Gyaan Pradaayini, Gyaan Prakaash Bharo.\nMoh Agyaan Aur Timir Ka, Jag Se Naash Karo.\nJai Saraswati Mata.',
        'Dhoop Deep Phal Meva, Maa Sweekaar Karo.\nGyaan Chakshu De Mata, Jag Nistaar Karo.\nJai Saraswati Mata.',
        'Maa Saraswati Ki Aarti, Jo Koi Jan Gaave.\nHitkaari Sukhkaari, Gyaan Bhakti Paave.\nJai Saraswati Mata.',
        'Jai Saraswati Mata, Jai Jai Saraswati Mata.\nSadgun Vaibhav Shaalini, Tribhuvan Vikhyaata.\nJai Saraswati Mata.'
      ]
    }
  };

  IDS.forEach(function (id) { A[id].id = id; A[id].source = VERIFIED_SOURCES[id]; });

  function lang() { return (typeof currentLang !== 'undefined' && currentLang === 'hi') ? 'hi' : 'en'; }
  function tr(en, hi) { return lang() === 'hi' ? hi : en; }
  function esc(value) { return String(value == null ? '' : value).replace(/[&<>"']/g, function (c) { return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c]; }); }
  function normalize(value) { return String(value || '').replace(/\r/g, '').trim(); }
  function splitVerses(value) { return normalize(value).split(/\n\s*\n+/).map(function (v) { return v.trim(); }).filter(Boolean); }
  function getLegacyLyrics(id) {
    var verified = VERIFIED_LYRICS[id];
    if (verified) return verified.hi.map(function (hi, index) { return {hi: hi, roman: verified.roman[index] || ''}; });
    var source = document.querySelector('#aarti-' + id + '-text .verse');
    var hi = source ? source.getAttribute('data-hi') : '';
    var roman = source ? source.getAttribute('data-en') : '';
    var hiParts = splitVerses(hi);
    var romanParts = splitVerses(roman);
    var count = Math.max(hiParts.length, romanParts.length);
    var verses = [];
    for (var i = 0; i < count; i += 1) verses.push({ hi: hiParts[i] || '', roman: romanParts[i] || '' });
    return verses.length ? verses : [{hi: A[id].titleHi, roman: A[id].title}];
  }
  function imageMarkup(d, className) { return d.image ? '<img class="' + className + '" src="' + d.image + '" alt="" width="120" height="120" loading="lazy">' : '<span class="aarti-card-symbol" aria-hidden="true">ॐ</span>'; }
  function favoriteButton(d, compact) {
    return '<button type="button" class="' + (compact ? 'aarti-save' : 'aarti-outline-button aarti-reader-save') + ' favorite-btn" data-content-id="aarti-' + d.id + '" data-content-title="' + esc(d.titleHi) + '" data-content-title-en="' + esc(d.title) + '" data-section="aarti" onclick="aartiToggleFavorite(event,this)" aria-label="' + tr('Save','सहेजें') + '">♡' + (compact ? '' : ' <span>' + tr('Save','सहेजें') + '</span>') + '</button>';
  }
  function paintFavorite(button) {
    if (!button) return;
    var saved = button.classList.contains('favorited');
    button.innerHTML = saved ? '♥' + (button.classList.contains('aarti-save') ? '' : ' <span>' + tr('Saved','सहेजा गया') + '</span>') : '♡' + (button.classList.contains('aarti-save') ? '' : ' <span>' + tr('Save','सहेजें') + '</span>');
    button.setAttribute('aria-pressed', saved ? 'true' : 'false');
  }
  function hydrateFavorites(root) {
    if (!root) return;
    root.querySelectorAll('.favorite-btn').forEach(function (button) {
      paintFavorite(button);
      if (typeof loadFavoriteStatus === 'function' && typeof currentUser !== 'undefined' && currentUser) Promise.resolve(loadFavoriteStatus(button.dataset.contentId, button)).then(function () { paintFavorite(button); });
    });
  }

  function libraryCard(d, index) {
    return '<article class="aarti-library-card" data-aarti-category="' + d.category + '" data-aarti-search="' + esc((d.title + ' ' + d.titleHi + ' ' + d.deity + ' ' + d.deityHi + ' ' + d.summary + ' ' + d.summaryHi).toLocaleLowerCase()) + '">' +
      '<span class="aarti-card-number">' + (index + 1) + '</span>' + imageMarkup(d, 'aarti-card-art') + favoriteButton(d, true) +
      '<div class="aarti-card-copy"><h3>' + d.title + '<span>/ ' + d.titleHi + '</span></h3><small>♙ ' + tr('Associated deity: ','संबद्ध देवता: ') + (lang() === 'hi' ? d.deityHi : d.deity) + '</small><p>' + tr(d.summary, d.summaryHi) + '</p><div class="aarti-card-footer"><span class="aarti-tag">' + tr('Text only','केवल पाठ') + '</span><button type="button" onclick="showAarti(\'' + d.id + '\')">' + tr('Read Aarti','आरती पढ़ें') + ' →</button></div></div></article>';
  }
  function resourceButton(label, target, detail) { return '<button type="button" onclick="' + target + '"><span>' + label + '<small>' + detail + '</small></span><b>›</b></button>'; }

  function renderLibrary() {
    var root = document.getElementById('aarti-experience-library');
    if (!root) return;
    root.innerHTML = '<div class="aarti-library-shell" data-aarti-filter="all">' +
      '<nav class="aarti-breadcrumb" aria-label="Breadcrumb"><button type="button" onclick="showSection(\'home\')">' + tr('Home','होम') + '</button><span>/</span><strong>' + tr('Aarti Sangrah','आरती संग्रह') + '</strong></nav>' +
      '<section class="aarti-library-hero"><div class="aarti-library-hero-copy"><h1>Aarti Sangrah<span>आरती संग्रह</span></h1><p>' + tr('Read traditional Aartis with clear context, respectful presentation and links to associated deity knowledge.','पारंपरिक आरतियों को स्पष्ट संदर्भ, श्रद्धापूर्ण प्रस्तुति और संबंधित देवता-ज्ञान के साथ पढ़ें।') + '</p><small>ⓘ ' + tr('Text-first devotional library. Audio appears only when its source is verified.','पाठ-केंद्रित भक्तिमय संग्रह। ऑडियो केवल सत्यापित स्रोत मिलने पर दिखाया जाएगा।') + '</small><div class="aarti-library-hero-actions"><button type="button" onclick="aartiScrollToLibrary()">' + tr('Explore Aartis','आरतियाँ देखें') + '</button><button type="button" onclick="aartiScrollToGuide()">▤ ' + tr('Respectful Reading Guide','सम्मानपूर्वक पठन मार्गदर्शिका') + '</button></div></div></section>' +
      '<div class="aarti-library-tools" id="aarti-library-content"><label class="aarti-search"><input id="aarti-search" type="search" placeholder="' + tr('Search Aartis by title or deity','शीर्षक या देवता से आरती खोजें') + '" oninput="searchAartis()"></label><div class="aarti-filter-row" role="group" aria-label="Aarti categories">' +
      [['all','All','सभी'],['ganesha','Ganesha','गणेश'],['devi','Devi','देवी'],['vishnu','Vishnu & Krishna','विष्णु और कृष्ण'],['shiva','Shiva','शिव'],['lakshmi','Lakshmi & Kuber','लक्ष्मी और कुबेर'],['text','Text Only','केवल पाठ']].map(function (f, i) { return '<button type="button" class="aarti-filter' + (i === 0 ? ' active' : '') + '" data-filter="' + f[0] + '" aria-pressed="' + (i === 0 ? 'true' : 'false') + '" onclick="filterAartis(\'' + f[0] + '\',this)">' + tr(f[1],f[2]) + '</button>'; }).join('') + '</div></div>' +
      '<h2 class="aarti-library-heading">' + tr('Featured Aarti','प्रमुख आरती') + '</h2>' +
      '<section class="aarti-featured" data-aarti-category="vishnu text" data-aarti-search="om jai jagdish hare ॐ जय जगदीश हरे vishnu विष्णु jagdish"><div class="aarti-featured-art" role="img" aria-label="Diya, conch, chakra, lotus and manuscript still life"></div><div><h2>Om Jai Jagdish<span>ॐ जय जगदीश हरे</span></h2><div class="aarti-deity-line">♙ ' + tr('Associated deity: Vishnu / Jagdish','संबद्ध देवता: विष्णु / जगदीश') + '</div><p>' + tr(A.jagdish.summary,A.jagdish.summaryHi) + '</p><div class="aarti-tag-row"><span class="aarti-tag">' + tr('Vishnu tradition','विष्णु परंपरा') + '</span><span class="aarti-tag">' + tr('Text only','केवल पाठ') + '</span></div></div><div class="aarti-featured-actions"><button class="aarti-primary-button" type="button" onclick="showAarti(\'jagdish\')">' + tr('Read Aarti','आरती पढ़ें') + ' →</button>' + favoriteButton(A.jagdish,false) + '</div></section>' +
      '<h2 class="aarti-library-heading">' + tr('Browse Aartis','आरतियाँ देखें') + '</h2><div class="aarti-card-grid" id="aarti-card-grid">' + IDS.map(function (id,index) { return libraryCard(A[id],index); }).join('') + '</div><div class="aarti-empty" id="aarti-no-results" hidden>' + tr('No Aarti matched this search. Try another title or remove a filter.','इस खोज से कोई आरती नहीं मिली। दूसरा शीर्षक लिखें या फ़िल्टर हटाएँ।') + '</div>' +
      '<div class="aarti-library-bottom"><section class="aarti-guide-card" id="aarti-guide"><div class="aarti-guide-lamp">🪔</div><div><h2>' + tr('New to Aarti?','आरती का सम्मानपूर्वक पाठ') + '</h2><p>' + tr('Aarti is a devotional offering of light, often accompanied by prayer or song. Lyrics, order and customary practice vary by region, temple, sampradaya and family.','आरती प्रकाश का भक्तिमय अर्पण है, जो अक्सर प्रार्थना या गायन के साथ होता है। शब्द, क्रम और प्रथाएँ क्षेत्र, मंदिर, संप्रदाय और परिवार के अनुसार बदलती हैं।') + '</p></div><div class="aarti-guide-list"><span>' + tr('Read with attention','ध्यान से पढ़ें') + '</span><span>' + tr('Follow local or family tradition','स्थानीय या पारिवारिक परंपरा मानें') + '</span><span>' + tr('Treat lamps and incense safely','दीप और धूप सुरक्षित रखें') + '</span></div><button type="button" onclick="aartiOpenReadingGuide()">▤ ' + tr('Open respectful reading guide','सम्मानपूर्वक पठन मार्गदर्शिका खोलें') + '</button></section>' +
      '<section class="aarti-related-card"><h2>' + tr('Explore Related Resources','संबंधित संसाधन') + '</h2><div class="aarti-related-links">' + resourceButton(tr('Deities Library','देवी-देवता'),"showSection('deities')",tr('Resource','संसाधन')) + resourceButton(tr('Mantras Library','मंत्र संग्रह'),"showSection('mantras')",tr('Resource','संसाधन')) + resourceButton(tr('Puja Guide','पूजा मार्गदर्शिका'),"showText('puja')",tr('Guide','मार्गदर्शिका')) + resourceButton(tr('Festival Knowledge','उत्सव ज्ञान'),"showSection('festivals')",tr('Resource','संसाधन')) + '</div></section>' +
      '<section class="aarti-source-note"><h2>ⓘ ' + tr('Source & Tradition Note','स्रोत और परंपरा टिप्पणी') + '</h2><p>' + tr('Texts and customary versions can vary. Each reader identifies context and keeps unverified audio hidden.','पाठ और प्रचलित संस्करण भिन्न हो सकते हैं। प्रत्येक रीडर संदर्भ बताता है और असत्यापित ऑडियो को छिपाकर रखता है।') + '</p><a href="https://en.wikipedia.org/wiki/Arti_(Hinduism)" target="_blank" rel="noopener">▤ ' + tr('Sources and methodology','स्रोत और पद्धति') + ' →</a></section></div></div>';
    hydrateFavorites(root);
    applyFilters();
  }

  function applyFilters() {
    var shell = document.querySelector('.aarti-library-shell');
    if (!shell) return;
    var query = normalize((document.getElementById('aarti-search') || {}).value).toLocaleLowerCase();
    var category = shell.getAttribute('data-aarti-filter') || 'all';
    var visible = 0;
    shell.querySelectorAll('.aarti-library-card').forEach(function (card) {
      var categories = (card.getAttribute('data-aarti-category') || '') + ' text';
      var ok = (category === 'all' || categories.split(' ').indexOf(category) !== -1) && (!query || (card.getAttribute('data-aarti-search') || '').indexOf(query) !== -1);
      card.hidden = !ok;
      if (ok) visible += 1;
    });
    var featured = shell.querySelector('.aarti-featured');
    if (featured) {
      var fCats = (featured.getAttribute('data-aarti-category') || '').split(' ');
      featured.hidden = !((category === 'all' || fCats.indexOf(category) !== -1) && (!query || (featured.getAttribute('data-aarti-search') || '').indexOf(query) !== -1));
    }
    var empty = document.getElementById('aarti-no-results');
    if (empty) empty.hidden = visible !== 0;
  }
  window.filterAartis = function (category, button) {
    var shell = document.querySelector('.aarti-library-shell');
    if (!shell) return;
    shell.setAttribute('data-aarti-filter', category || 'all');
    shell.querySelectorAll('.aarti-filter').forEach(function (candidate) { var active = candidate === button; candidate.classList.toggle('active',active); candidate.setAttribute('aria-pressed',active?'true':'false'); });
    applyFilters();
  };
  window.searchAartis = applyFilters;
  window.aartiScrollToLibrary = function () { var el = document.getElementById('aarti-library-content'); if (el) el.scrollIntoView({behavior:'smooth',block:'start'}); };
  window.aartiScrollToGuide = function () { var el = document.getElementById('aarti-guide'); if (el) el.scrollIntoView({behavior:'smooth',block:'center'}); };
  window.aartiOpenReadingGuide = function () { var el = document.getElementById('aarti-guide'); if (el) { el.classList.add('attention'); el.scrollIntoView({behavior:'smooth',block:'center'}); window.setTimeout(function(){el.classList.remove('attention');},1400); } };

  function verseCards(d) {
    var verses = getLegacyLyrics(d.id);
    return verses.map(function (verse,index) { return '<article class="aarti-verse-card" id="aarti-verse-' + index + '"><span class="aarti-verse-label">' + (index === 0 ? tr('Opening Refrain','आरंभिक टेक') : tr('Verse ','पद ') + index) + '</span><div class="aarti-verse-hi">' + esc(verse.hi) + '</div><div class="aarti-verse-roman">' + esc(verse.roman) + '</div></article>'; }).join('');
  }
  function jumpButtons(d) {
    var count = getLegacyLyrics(d.id).length;
    var html = '<button type="button" onclick="aartiJumpToVerse(0,this)">' + tr('Opening Refrain','आरंभिक टेक') + '</button>';
    for (var i=1;i<count;i+=1) html += '<button type="button" onclick="aartiJumpToVerse(' + i + ',this)">' + tr('Verse ','पद ') + i + '</button>';
    return html;
  }
  function relatedIds(id) {
    var index = IDS.indexOf(id);
    return [IDS[(index + IDS.length - 1) % IDS.length], IDS[(index + 1) % IDS.length], 'ganesh', 'lakshmi', 'krishna'].filter(function(v,p,a){return v!==id&&a.indexOf(v)===p;}).slice(0,4);
  }
  function currentReader() { return document.querySelector('#text-display .aarti-reader'); }
  function currentData() { var reader=currentReader(); return reader ? A[reader.getAttribute('data-aarti-id')] : null; }

  window.renderAartiReader = function (readerId) {
    var id = String(readerId || '').replace(/^aarti-/,'');
    var d = A[id];
    if (!d) return '';
    var meaningHi = esc(d.meaningHi).replace(/\n\n/g,'</p><p>');
    var meaningEn = esc(d.meaning).replace(/\n\n/g,'</p><p>');
    var rel = relatedIds(id);
    var prev = A[IDS[(IDS.indexOf(id)+IDS.length-1)%IDS.length]];
    var next = A[IDS[(IDS.indexOf(id)+1)%IDS.length]];
    return '<article class="aarti-reader" data-aarti-id="' + id + '" data-font-scale="1" style="--aarti-progress:0%;--aarti-line:1.42"><nav class="aarti-breadcrumb" aria-label="Breadcrumb"><button type="button" onclick="aartiReturnToLibrary()">' + tr('Home','होम') + '</button><span>/</span><button type="button" onclick="aartiReturnToLibrary()">' + tr('Aarti Sangrah','आरती संग्रह') + '</button><span>/</span><strong>' + (lang()==='hi'?d.titleHi:d.title) + '</strong></nav>' +
      '<section class="aarti-reader-hero"><div class="aarti-reader-deity-visual"><img src="' + d.image + '" alt="' + esc((lang()==='hi'?d.deityHi:d.deity) + ' devotional illustration') + '" width="900" height="900"></div><div class="aarti-reader-hero-copy"><h1>' + d.titleHi + '<span>' + d.title + '</span></h1><div class="aarti-reader-meta"><span>♙ ' + tr('Associated deity: ','संबद्ध देवता: ') + (lang()==='hi'?d.deityHi:d.deity) + '</span><span>ⓘ ' + tr('Context: ','संदर्भ: ') + tr(d.context,d.contextHi) + '</span></div><div class="aarti-reader-tags"><span>' + tr(d.tradition,d.traditionHi) + '</span><span>' + tr('Text only','केवल पाठ') + '</span></div><div class="aarti-reader-actions">' + favoriteButton(d,false) + '<button type="button" onclick="aartiCopyLyrics(this)">▣ <span>' + tr('Copy Lyrics','बोल कॉपी करें') + '</span></button><button type="button" onclick="aartiShareCurrent()">⌯ <span>' + tr('Share','साझा करें') + '</span></button></div><div class="aarti-audio-note">ⓘ ' + tr('No verified audio source attached · Text-only reader','कोई सत्यापित ऑडियो स्रोत संलग्न नहीं · केवल पाठ') + '</div></div></section>' +
      '<section class="aarti-reader-toolbar" aria-label="Reader controls"><button type="button" onclick="aartiToggleMeaningLanguage()">▤ ' + tr('Hindi / English Meaning','हिंदी / English अर्थ') + '</button><button type="button" class="active" onclick="aartiToggleRoman(this)">A̲ ' + tr('Transliteration','लिप्यंतरण') + '</button><button type="button" class="active" onclick="aartiToggleMeaning(this)">▤ ' + tr('Meaning','अर्थ') + '</button><div class="aarti-size-control"><button type="button" onclick="aartiChangeTextSize(-.08)">A−</button><span>|</span><button type="button" onclick="aartiChangeTextSize(.08)">A+</button></div><label>¶ <select onchange="aartiSetLineSpacing(this.value)"><option value="1.32">' + tr('Compact','सघन') + '</option><option value="1.42" selected>' + tr('Line Spacing','पंक्ति अंतर') + '</option><option value="1.62">' + tr('Spacious','विस्तृत') + '</option></select></label><button type="button" onclick="aartiToggleWake(this)">☾ ' + tr('Keep screen awake','स्क्रीन चालू रखें') + '<span class="aarti-switch"><b></b></span></button></section>' +
      '<div class="aarti-reader-layout"><main class="aarti-lyrics-panel"><h2>' + tr('Aarti Lyrics · ','आरती के बोल · ') + d.titleHi + '</h2><div class="aarti-verse-list" id="aarti-verse-list">' + verseCards(d) + '</div><button type="button" class="aarti-mobile-more" onclick="aartiShowMoreVerses(this)">' + tr('View more verses','और पद देखें') + '⌄</button></main>' +
      '<section class="aarti-meaning-panel"><h2>' + tr('Meaning (Explanation)','अर्थ और व्याख्या') + '</h2><div class="aarti-meaning-tabs"><button type="button" class="active" data-aarti-meaning-tab="hi" onclick="aartiMeaningTab(\'hi\',this)">हिंदी व्याख्या</button><button type="button" data-aarti-meaning-tab="en" onclick="aartiMeaningTab(\'en\',this)">English Meaning</button></div><div class="aarti-meaning-copy" data-aarti-meaning="hi"><p>' + meaningHi + '</p></div><div class="aarti-meaning-copy" data-aarti-meaning="en" hidden><p>' + meaningEn + '</p></div></section>' +
      '<aside class="aarti-reader-side"><section class="aarti-progress-card"><h2>' + tr('Reading Progress','पठन प्रगति') + '</h2><div class="aarti-progress-ring"><b data-aarti-progress-text>0%</b></div><p>' + tr('You are reading ','आप पढ़ रहे हैं ') + '<strong>' + (lang()==='hi'?d.titleHi:d.title) + '</strong></p><div class="aarti-progress-line"><b></b></div><div class="aarti-side-status"><span>▤</span><span>' + tr('Text-only status','केवल-पाठ स्थिति') + '<small>' + tr('No audio source attached','कोई ऑडियो स्रोत संलग्न नहीं') + '</small></span></div></section>' +
      '<section class="aarti-deity-card"><h2>' + tr('Associated Deity','संबद्ध देवता') + '</h2><div>' + (d.image?'<img src="'+d.image+'" alt="" width="55" height="55">':'<span>ॐ</span>') + '<span><strong>' + (lang()==='hi'?d.deityHi:d.deity) + '</strong><small>' + tr(d.summary,d.summaryHi) + '</small></span></div><button type="button" onclick="aartiOpenDeity()">' + tr('Explore deity','देवता परिचय') + ' →</button></section><section class="aarti-variation-card"><h2>' + tr('Variation Note','पाठांतर टिप्पणी') + '</h2><p>' + tr('Widely recited versions differ in wording, verse order and local custom.','प्रचलित संस्करणों में शब्द, पद-क्रम और स्थानीय रीति का अंतर मिलता है।') + '</p></section></aside>' +
      '<aside class="aarti-jump-panel"><h2>' + tr('Jump to Verse','पद पर जाएँ') + '</h2>' + jumpButtons(d) + '</aside></div>' +
      '<section class="aarti-reader-info"><article class="aarti-info-card"><span>⌂</span><div><h2>' + tr('Context & Tradition','संदर्भ और परंपरा') + '</h2><p>' + tr(d.context,d.contextHi) + '</p></div></article><article class="aarti-info-card"><span>▤</span><div><h2>' + tr('Verified Text Source','सत्यापित पाठ स्रोत') + '</h2><p>' + tr('This complete displayed version was checked line by line against the selected published source; customary wording may still vary locally.','यह पूर्ण प्रदर्शित पाठ चुने गए प्रकाशित स्रोत से पंक्ति-दर-पंक्ति जाँचा गया है; स्थानीय परंपरा में शब्दावली फिर भी भिन्न हो सकती है।') + ' <a href="' + d.source + '" target="_blank" rel="noopener">' + tr('Open source','स्रोत खोलें') + ' ↗</a></p></div></article><section class="aarti-related-reader"><h2>' + tr('Related & Supported','संबंधित पाठ') + '</h2><div class="aarti-related-reader-grid">' + (d.deityId?'<button type="button" onclick="aartiOpenDeity()">' + (lang()==='hi'?d.deityHi:d.deity) + '<br>' + tr('Deity','देवता') + '</button>':'<button type="button" onclick="showSection(\'deities\')">' + tr('Deities Library','देवी-देवता') + '</button>') + rel.map(function(rid){return '<button type="button" onclick="showAarti(\''+rid+'\')">'+(lang()==='hi'?A[rid].titleHi:A[rid].title)+'</button>';}).join('') + '<button type="button" onclick="showText(\'puja\')">' + tr('Puja Guide','पूजा मार्गदर्शिका') + '</button></div></section></section>' +
      '<nav class="aarti-reader-nav" aria-label="Previous and next Aarti"><button type="button" onclick="showAarti(\''+prev.id+'\')">← <small>' + tr('Previous Aarti','पिछली आरती') + '</small><br>'+(lang()==='hi'?prev.titleHi:prev.title)+'</button><div class="aarti-safety-reminder">🪔 ' + tr('Offer attention while reading. Keep lamps and incense safely away from flammable materials.','ध्यान से पाठ करें। दीप और धूप को ज्वलनशील वस्तुओं से सुरक्षित दूरी पर रखें।') + '</div><button type="button" onclick="showAarti(\''+next.id+'\')"><small>' + tr('Next Aarti','अगली आरती') + '</small> →<br>'+(lang()==='hi'?next.titleHi:next.title)+'</button></nav>' +
      '<nav class="aarti-mobile-controls" aria-label="Mobile reader controls"><button type="button" onclick="aartiChangeTextSize(-.08)">A−</button><button type="button" onclick="aartiChangeTextSize(.08)">A+</button><button type="button" onclick="aartiCycleLineSpacing()">¶ ' + tr('Spacing','अंतर') + '</button><button type="button" onclick="aartiToggleWake(this)">☾ ' + tr('Awake','जागृत') + '</button><button type="button" onclick="aartiToggleContents()">☷ ' + tr('Contents','विषय') + '</button></nav><div class="aarti-mobile-contents" id="aarti-mobile-contents">' + jumpButtons(d) + '</div></article>';
  };

  window.showAarti = function (id) { if (A[id] && typeof showText === 'function') showText('aarti-' + id); };
  window.backToAartiGrid = function () { window.aartiReturnToLibrary(); };
  window.aartiReturnToLibrary = function () { var display=document.getElementById('text-display'); if(display){display.style.display='none';display.classList.remove('aarti-display');} if(typeof showSection==='function') showSection('aarti'); var section=document.getElementById('aarti'); if(section)section.scrollIntoView({behavior:'smooth',block:'start'}); };
  window.aartiToggleFavorite = async function (event,button) { if(event)event.stopPropagation(); if(typeof toggleFavorite==='function'){await toggleFavorite(button);paintFavorite(button);} };
  window.aartiToggleRoman = function(button){var reader=currentReader();if(!reader)return;var hidden=reader.classList.toggle('hide-roman');button.classList.toggle('active',!hidden);};
  window.aartiToggleMeaning = function(button){var reader=currentReader();if(!reader)return;var hidden=reader.classList.toggle('hide-meaning');button.classList.toggle('active',!hidden);};
  window.aartiMeaningTab = function(which,button){var reader=currentReader();if(!reader)return;reader.querySelectorAll('[data-aarti-meaning]').forEach(function(el){el.hidden=el.getAttribute('data-aarti-meaning')!==which;});reader.querySelectorAll('[data-aarti-meaning-tab]').forEach(function(el){el.classList.toggle('active',el===button);});};
  window.aartiToggleMeaningLanguage = function(){var reader=currentReader();if(!reader)return;var en=reader.querySelector('[data-aarti-meaning="en"]');var button=reader.querySelector('[data-aarti-meaning-tab="'+(en&&!en.hidden?'hi':'en')+'"]');if(button)button.click();};
  window.aartiChangeTextSize = function(delta){var reader=currentReader();if(!reader)return;var current=Number(reader.getAttribute('data-font-scale')||1);var next=Math.max(.84,Math.min(1.28,current+Number(delta||0)));reader.setAttribute('data-font-scale',next);reader.style.setProperty('--aarti-scale',String(next));try{localStorage.setItem('sanatan-aarti-text-scale',String(next));}catch(e){}};
  window.aartiSetLineSpacing = function(value){var reader=currentReader();if(!reader)return;reader.style.setProperty('--aarti-line',String(value));reader.setAttribute('data-line-space',String(value));try{localStorage.setItem('sanatan-aarti-line-space',String(value));}catch(e){}};
  window.aartiCycleLineSpacing = function(){var reader=currentReader();if(!reader)return;var values=[1.32,1.42,1.62],current=Number(reader.getAttribute('data-line-space')||1.42),index=values.indexOf(current);window.aartiSetLineSpacing(values[(index+1)%values.length]);};
  window.aartiShowMoreVerses = function(button){var list=document.getElementById('aarti-verse-list');if(!list)return;var open=list.classList.toggle('expanded');button.textContent=open?tr('Show fewer verses','कम पद दिखाएँ')+'⌃':tr('View more verses','और पद देखें')+'⌄';};
  window.aartiJumpToVerse = function(index,button){var target=document.getElementById('aarti-verse-'+index);if(target)target.scrollIntoView({behavior:'smooth',block:'center'});document.querySelectorAll('.aarti-jump-panel button').forEach(function(b){b.classList.toggle('active',b===button);});var drawer=document.getElementById('aarti-mobile-contents');if(drawer)drawer.classList.remove('open');};
  window.aartiToggleContents = function(){var drawer=document.getElementById('aarti-mobile-contents');if(drawer)drawer.classList.toggle('open');};
  window.aartiOpenDeity = function(){var d=currentData();if(!d)return;if(d.deityId&&typeof showText==='function')showText(d.deityId);else if(typeof showSection==='function')showSection('deities');};
  window.aartiCopyLyrics = async function(button){var d=currentData();if(!d)return;var text=getLegacyLyrics(d.id).map(function(v){return v.hi;}).join('\n\n');try{await navigator.clipboard.writeText(text);var span=button.querySelector('span');if(span){var old=span.textContent;span.textContent=tr('Copied','कॉपी हो गया');window.setTimeout(function(){span.textContent=old;},1500);}}catch(e){}};
  window.aartiShareCurrent = async function(){var d=currentData();if(!d)return;var payload={title:d.title+' — Sanatan for Humanity',text:tr(d.summary,d.summaryHi),url:window.location.href};try{if(navigator.share)await navigator.share(payload);else await navigator.clipboard.writeText(payload.title+'\n'+payload.url);}catch(e){}};

  var wakeLock = null;
  function paintWake(active){var reader=currentReader();if(!reader)return;reader.classList.toggle('wake-active',active);reader.querySelectorAll('.aarti-switch').forEach(function(s){s.classList.toggle('on',active);});}
  window.aartiToggleWake = async function(){try{if(wakeLock){await wakeLock.release();wakeLock=null;paintWake(false);return;}if(navigator.wakeLock&&navigator.wakeLock.request){wakeLock=await navigator.wakeLock.request('screen');paintWake(true);wakeLock.addEventListener('release',function(){wakeLock=null;paintWake(false);});}else{paintWake(false);}}catch(e){paintWake(false);}};

  function updateProgress(){var reader=currentReader();if(!reader)return;var list=document.getElementById('aarti-verse-list');if(!list)return;var rect=list.getBoundingClientRect();var total=Math.max(1,rect.height-window.innerHeight*.45);var read=Math.min(total,Math.max(0,window.innerHeight*.42-rect.top));var percent=Math.round(read/total*100);reader.style.setProperty('--aarti-progress',percent+'%');reader.querySelectorAll('[data-aarti-progress-text]').forEach(function(el){el.textContent=percent+'%';});}
  window.initAartiReader = function(){var reader=currentReader();if(!reader)return;var scale=1,line=1.42;try{scale=Math.max(.84,Math.min(1.28,Number(localStorage.getItem('sanatan-aarti-text-scale')||1)));line=Number(localStorage.getItem('sanatan-aarti-line-space')||1.42);}catch(e){}reader.setAttribute('data-font-scale',scale);reader.setAttribute('data-line-space',line);reader.style.setProperty('--aarti-scale',String(scale));reader.style.setProperty('--aarti-line',String(line));var select=reader.querySelector('.aarti-reader-toolbar select');if(select)select.value=String(line);hydrateFavorites(reader);if(window._aartiProgressHandler)window.removeEventListener('scroll',window._aartiProgressHandler);window._aartiProgressHandler=function(){window.requestAnimationFrame(updateProgress);};window.addEventListener('scroll',window._aartiProgressHandler,{passive:true});updateProgress();};
  window.initAartiLibrary = renderLibrary;

  var previousToggleLanguage = window.toggleLanguage;
  if (typeof previousToggleLanguage === 'function') {
    window.toggleLanguage = function(){var result=previousToggleLanguage.apply(this,arguments);window.setTimeout(function(){var section=document.getElementById('aarti');if(section&&section.classList.contains('active'))renderLibrary();},0);return result;};
  }
  document.addEventListener('DOMContentLoaded',renderLibrary);
})();
