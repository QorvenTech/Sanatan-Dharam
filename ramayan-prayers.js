(function () {
  'use strict';

  var prayers = {
    'ramayan-aavahan': {
      titleEn: 'Shri Ramayan Aavahan',
      titleHi: 'श्री रामायण आवाहन',
      eyebrowEn: 'Opening invocation · आरम्भ प्रार्थना',
      eyebrowHi: 'आरम्भ प्रार्थना · Opening invocation',
      artwork: 'assets/ramayan-aavahan.webp',
      introEn: 'A traditional invocation recited before beginning Ramayan paath, seeking grace, clarity and Hanumanji’s presence.',
      introHi: 'रामायण पाठ आरम्भ करने से पहले कृपा, निर्मल बुद्धि और हनुमानजी की उपस्थिति के लिए किया जाने वाला पारम्परिक आवाहन।',
      linesHi: [
        'जो सुमिरत सिद्ध होय गण नायक करिवर बदन।','करहुँ अनुग्रह सोई बुद्धि राशि शुभ गुण सदन।।','मूक होई वाचाल पंगु चढ़ाई गिरिवर गहन।','जासु कृपासु दयाल द्रवहु सकल कलिमल दहन।।','नील सरोरुह श्याम तरुन अरुन वारिज नयन।','करहु सो मम उर धाम सदा क्षीरसागर सयन।।','कुंद इंदु सम देह उमा रमन करुणा अयन।','जाहि दिन पर नेह करहुँ कृपा मर्दन मयन।।','बंदहु गुरुपद कंज कृपा सिंधु नर रूप हरि।','महा मोह तम पुंज जासु वचन रविकर निकर।।','बंदहु मुनिपद कंज रामायन जेहि निर मयऊ।','सखर सुकोमल मंजु दोष रहित दूषन सहित।।','बंदहु चारहु वेद भव वारिध वो हित सरिस।','जिनहि न सपनेहु खेद बरनत रघुपति विमल यश।।','बंदहु विधि पद रेनु भवसागर जिन कीन्ह यह।','संत सुधा शशि छेनू प्रगटे खल विष बारुनी।।','बंदहु अवध भुआल सत्य प्रेम जेहि राम पद।','बिछुरत दीनदयाल प्रिय तनु तृन ईव पर हरेऊ।।','बंदहु पवन कुमार खल वन पावक ज्ञान घन।','जासु ह्र्दय आगार बसहि राम सर चाप धर।।','राम कथा के रसिक तुम, भक्ति राशि मति धीर।','आय सो आसन लीजिये, तेज पुंज कपि वीर।।','रामायण तुलसीकृत कहऊ कथा अनुसार।','प्रेम सहित आसन गहऊ आवहु पवन कुमार।।','।। सियावर रामचंद्र जी की जय ।।'
      ],
      linesRoman: [
        'Jo sumirat siddhi hoye, gana nayak karivar badan |','Karahu anugrah soi, buddhi rashi shubh gun sadan ||','Mook hoi vachal, pangu chadhayi girivar gahan |','Jasu kripasu dayal, dravahu sakal kalimal dahan ||','Neel saroruha shyam, tarun arun vaarij nayan |','Karahu so mam ur dham, sada ksheersagar sayan ||','Kunda indu sam deh, Uma Raman karuna ayan |','Jahi deen par neh, karahu kripa mardan mayan ||','Bandahu gurupada kanja, kripa sindhu nar roop Hari |','Maha moh tam punj, jasu vachan ravikar nikar ||','Bandahu munipada kanja, Ramayan jehi nir mayau |','Sakhar sukomal manju, dosh rahit dooshan sahit ||','Bandahu charahu Veda, bhav vaarid vohit saris |','Jinahi na sapanehu khed, baranat Raghupati vimal yash ||','Bandahu vidhi pad renu, bhavsagar jin keenh yeh |','Sant sudha shashi chhenu, pragate khal vish baaruni ||','Bandahu Avadh bhual, satya prem jehi Ram pad |','Bichhurat Deendayal, priya tanu trin iv par hareau ||','Bandahu Pavan Kumar, khal van paavak gyan ghan |','Jasu hridaya aagaar, basahi Ram sar chaap dhar ||','Ram katha ke rasik tum, bhakti rashi mati dheer |','Aaya so aasan lijiye, tej punj kapi veer ||','Ramayan Tulsikrit, kahau katha anusaar |','Prem sahit aasan gahau, aavahu Pavan Kumar ||','|| Siyavar Ramchandra Ji Ki Jai ||'
      ]
    },
    'ramayan-visarjan': {
      titleEn: 'Shri Ramayan Visarjan',
      titleHi: 'श्री रामायण विसर्जन',
      eyebrowEn: 'Closing prayer · समापन प्रार्थना',
      eyebrowHi: 'समापन प्रार्थना · Closing prayer',
      artwork: 'assets/ramayan-visarjan.webp',
      introEn: 'A traditional closing prayer after Ramayan paath, offered with gratitude and a request that Shri Rama’s remembrance remain in the heart.',
      introHi: 'रामायण पाठ के बाद कृतज्ञता के साथ की जाने वाली पारम्परिक समापन प्रार्थना, जिसमें श्रीराम का स्मरण हृदय में बने रहने की कामना की जाती है।',
      linesHi: [
        'जय जय राजा राम की, जय लक्ष्मण बलवान।','जय कपीस सुग्रीव की, जय अंगद हनुमान।।','जय जय कागभुशुण्डि की, जय गिरि उमा महेश।','जय ऋषि भारद्वाज की, जय तुलसी अवधेश।।','प्रभु सन कहियो दंडवत, तुमहि कहौ कर जोर।','बार-बार रघुनाथ कहि सुरति करावहु मोर।।','कामहि नारि पियार जिमि, लोभिहि प्रिय जिमि दाम।','तिमि रघुनाथ निरंतर, प्रिय लागहु मोहि राम।।','बार-बार वर मागहु हर्ष देहु श्री रंग।','पद सरोज अन पयनी भगति सदा सतसंग।।','प्रणत पाल रघुवंश मणि करुणा सिंधु खरारि।','गये शरण प्रभु राखिहैं सब अपराध बिसार।।','कथा विसर्जन होत हैं सुनो वीर हनुमान।','जो जन जहाँ से आये हैं ते तः करो पयान।।','श्रोता सब आश्रम गए शम्भु गए कैलाश।','रामायण मम हिर्दय में सदा करो तुम वास।।','रामायण जसु पावन गावहि सुनहि जे लोग।','राम भगति दृढ पावहि विन विराग जप जोग।।','रामायण बैकुण्ठ गई सुर गए निज निज धाम।','रामचंद्र के पद कमल बंदि गये हनुमान।।','।। सियावर रामचंद्र की जय ।।','।। उमा पति महादेव जी की जय ।।','।। पवनसुत हनुमानजी की जय ।।','।। गोस्वामी तुलसीदास जी की जय ।।','।। बोलो भाई सब संतो की जय ।।'
      ],
      linesRoman: [
        'Jai jai Raja Ram ki, jai Lakshman balvan |','Jai Kapees Sugreev ki, jai Angad Hanuman ||','Jai jai Kagabhushundi ki, jai Giri Uma Mahesh |','Jai Rishi Bharadwaj ki, jai Tulsi Avadhesh ||','Prabhu san kahiyo dandavat, tumahi kahau kar jor |','Baar-baar Raghunath kahi, surati karavahu mor ||','Kaamahi naari piyar jimi, lobhihi priya jimi daam |','Timi Raghunath nirantar, priya laagahu mohi Ram ||','Baar-baar var magahu harsh dehu Shri Rang |','Pad saroj an payani bhagati sada satsang ||','Pranat paal Raghuvansh mani karuna sindhu kharari |','Gaye sharan Prabhu rakhihain sab aparadh bisar ||','Katha visarjan hot hain suno Veer Hanuman |','Jo jan jahan se aaye hain te tah karo payan ||','Shrota sab aashram gaye Shambhu gaye Kailash |','Ramayan mam hirday mein sada karo tum vaas ||','Ramayan jasu paavan gaavahi sunahi je log |','Ram bhagati dridh paavahi vin virag jap jog ||','Ramayan Baikunth gayi sur gaye nij nij dham |','Ramchandra ke pad kamal bandi gaye Hanuman ||','|| Siyavar Ramchandra Ki Jai ||','|| Uma Pati Mahadev Ji Ki Jai ||','|| Pavansut Hanumanji Ki Jai ||','|| Goswami Tulsidas Ji Ki Jai ||','|| Bolo Bhai Sab Santo Ki Jai ||'
      ]
    }
  };

  function esc(value) {
    return String(value == null ? '' : value).replace(/[&<>\"]/g, function (character) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '\"': '&quot;' }[character];
    });
  }

  function isHindi() { return typeof currentLang !== 'undefined' && currentLang === 'hi'; }
  function bilingual(en, hi, tag, className) {
    tag = tag || 'span';
    return '<' + tag + (className ? ' class="' + className + '"' : '') + ' data-en="' + esc(en) + '" data-hi="' + esc(hi) + '">' + esc(isHindi() ? hi : en) + '</' + tag + '>';
  }

  window.renderRamayanPrayer = function (id) {
    var prayer = prayers[id];
    if (!prayer) return '';
    var mainLines = isHindi() ? prayer.linesHi : prayer.linesRoman;
    var supportLines = isHindi() ? prayer.linesRoman : prayer.linesHi;
    return '<article class="ramayan-prayer" data-ramayan-prayer="' + esc(id) + '">' +
      '<nav class="ramayan-prayer-breadcrumb" aria-label="Breadcrumb"><button type="button" onclick="goBack();showSection(\'home\')">' + bilingual('Home','होम') + '</button><i>/</i><button type="button" onclick="goBack()">' + bilingual('Sacred Texts','पवित्र ग्रंथ') + '</button><i>/</i><button type="button" onclick="showText(\'ramayan\')">' + bilingual('Ramayan','रामायण') + '</button><i>/</i><strong>' + esc(isHindi() ? prayer.titleHi : prayer.titleEn) + '</strong></nav>' +
      '<section class="ramayan-prayer-hero" style="--ramayan-prayer-art:url(\'' + esc(prayer.artwork) + '\')"><div class="ramayan-prayer-hero-copy">' +
        bilingual(prayer.eyebrowEn, prayer.eyebrowHi, 'p', 'ramayan-prayer-kicker') +
        '<h1>' + esc(prayer.titleEn) + '<span>' + esc(prayer.titleHi) + '</span></h1>' +
        bilingual(prayer.introEn, prayer.introHi, 'p', 'ramayan-prayer-intro') +
        '<div class="ramayan-prayer-tags"><span>रामचरितमानस परम्परा</span><span>' + bilingual('Text & transliteration','पाठ और लिप्यंतरण') + '</span></div>' +
        '<div class="ramayan-prayer-actions"><button type="button" class="ramayan-prayer-primary" onclick="ramayanPrayerScrollToText()">' + bilingual('Begin reading','पाठ आरम्भ करें') + '</button><button type="button" class="favorite-btn" data-content-id="' + esc(id) + '" data-content-title="' + esc(prayer.titleHi) + '" data-content-title-en="' + esc(prayer.titleEn) + '" data-section="ramayan" onclick="toggleFavorite(this)">' + bilingual('♡ Save','♡ सहेजें') + '</button></div>' +
      '</div></section>' +
      '<section class="ramayan-prayer-note"><span>ⓘ</span><div><strong>' + bilingual('Respectful reading note','सम्मानपूर्वक पाठ') + '</strong>' + bilingual('This is a traditional recitation prayer. Wording and customary use can vary by region, family and sampradaya; follow your trusted tradition.', 'यह पारम्परिक पाठ-प्रार्थना है। क्षेत्र, परिवार और सम्प्रदाय के अनुसार शब्द और प्रयोग बदल सकते हैं; अपनी विश्वसनीय परम्परा का पालन करें।', 'p') + '</div></section>' +
      '<div class="ramayan-prayer-layout" id="ramayan-prayer-text"><main class="ramayan-prayer-text"><div class="ramayan-prayer-text-heading"><p>' + bilingual('Original recitation','मूल पाठ') + '</p><h2>' + esc(isHindi() ? prayer.titleHi : prayer.titleEn) + '</h2></div><div class="ramayan-prayer-verses ' + (isHindi() ? 'devanagari' : 'roman') + '">' + mainLines.map(function (line) { return '<p>' + esc(line) + '</p>'; }).join('') + '</div></main><aside class="ramayan-prayer-support"><p>' + bilingual(isHindi() ? 'Roman transliteration' : 'Devanagari text', isHindi() ? 'रोमन लिप्यंतरण' : 'देवनागरी पाठ') + '</p><div class="' + (isHindi() ? 'roman' : 'devanagari') + '">' + supportLines.map(function (line) { return '<p>' + esc(line) + '</p>'; }).join('') + '</div></aside></div>' +
      '<section class="ramayan-prayer-related"><div><p>' + bilingual('Continue the collection','संग्रह में आगे') + '</p><h2>' + bilingual('Ramayan resources','रामायण संसाधन') + '</h2></div><div><button type="button" onclick="showText(\'ramayan\')">' + bilingual('Browse all Ramayan texts →','सभी रामायण पाठ देखें →') + '</button><button type="button" onclick="showText(\'' + (id === 'ramayan-aavahan' ? 'ramayan-visarjan' : 'ramayan-aavahan') + '\')">' + bilingual(id === 'ramayan-aavahan' ? 'Open closing prayer →' : 'Open opening prayer →', id === 'ramayan-aavahan' ? 'समापन प्रार्थना खोलें →' : 'आरम्भ प्रार्थना खोलें →') + '</button></div></section>' +
    '</article>';
  };

  window.initRamayanPrayer = function () {
    var reader = document.querySelector('[data-ramayan-prayer]');
    if (!reader) return;
    var button = reader.querySelector('.favorite-btn');
    if (button && typeof loadFavoriteStatus === 'function') loadFavoriteStatus(button.dataset.contentId, button);
  };

  window.ramayanPrayerScrollToText = function () {
    var target = document.getElementById('ramayan-prayer-text');
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  window.ramayanPrayerReaderIds = Object.keys(prayers);
})();
