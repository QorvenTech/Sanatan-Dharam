/*
 * Bhagavad Gita internal reader.
 * Uses only the Gita verses already bundled for Shloka of the Day; source and
 * license information is retained in THIRD_PARTY_NOTICES.md.
 */
(function () {
  'use strict';

  var chapters = [
    { n:1, total:47, en:'Arjuna Vishada Yoga', hi:'अर्जुनविषादयोग', meaningEn:"Arjuna's Despondency", meaningHi:'अर्जुन का विषाद' },
    { n:2, total:72, en:'Sankhya Yoga', hi:'सांख्ययोग', meaningEn:'The Yoga of Knowledge', meaningHi:'ज्ञान का योग' },
    { n:3, total:43, en:'Karma Yoga', hi:'कर्मयोग', meaningEn:'The Yoga of Action', meaningHi:'कर्म का योग' },
    { n:4, total:42, en:'Jnana Karma Sannyasa Yoga', hi:'ज्ञानकर्मसंन्यासयोग', meaningEn:'Knowledge and Renunciation of Action', meaningHi:'ज्ञान और कर्म-संन्यास' },
    { n:5, total:29, en:'Karma Sannyasa Yoga', hi:'कर्मसंन्यासयोग', meaningEn:'Renunciation of Action', meaningHi:'कर्म-संन्यास का योग' },
    { n:6, total:47, en:'Dhyana Yoga', hi:'ध्यानयोग', meaningEn:'The Yoga of Meditation', meaningHi:'ध्यान का योग' },
    { n:7, total:30, en:'Jnana Vijnana Yoga', hi:'ज्ञानविज्ञानयोग', meaningEn:'Knowledge and Realisation', meaningHi:'ज्ञान और विज्ञान का योग' },
    { n:8, total:28, en:'Akshara Brahma Yoga', hi:'अक्षरब्रह्मयोग', meaningEn:'The Imperishable Brahman', meaningHi:'अक्षर ब्रह्म का योग' },
    { n:9, total:34, en:'Raja Vidya Raja Guhya Yoga', hi:'राजविद्याराजगुह्ययोग', meaningEn:'Royal Knowledge and Secret', meaningHi:'राजविद्या और राजगुह्य' },
    { n:10, total:42, en:'Vibhuti Yoga', hi:'विभूतियोग', meaningEn:'The Divine Glories', meaningHi:'दिव्य विभूतियों का योग' },
    { n:11, total:55, en:'Vishvarupa Darshana Yoga', hi:'विश्वरूपदर्शनयोग', meaningEn:'Vision of the Cosmic Form', meaningHi:'विश्वरूप का दर्शन' },
    { n:12, total:20, en:'Bhakti Yoga', hi:'भक्तियोग', meaningEn:'The Yoga of Devotion', meaningHi:'भक्ति का योग' },
    { n:13, total:35, en:'Kshetra Kshetrajna Vibhaga Yoga', hi:'क्षेत्रक्षेत्रज्ञविभागयोग', meaningEn:'The Field and Its Knower', meaningHi:'क्षेत्र और क्षेत्रज्ञ का विवेचन' },
    { n:14, total:27, en:'Gunatraya Vibhaga Yoga', hi:'गुणत्रयविभागयोग', meaningEn:'The Three Gunas', meaningHi:'तीन गुणों का विभाग' },
    { n:15, total:20, en:'Purushottama Yoga', hi:'पुरुषोत्तमयोग', meaningEn:'The Supreme Person', meaningHi:'पुरुषोत्तम का योग' },
    { n:16, total:24, en:'Daivasura Sampad Vibhaga Yoga', hi:'दैवासुरसम्पद्विभागयोग', meaningEn:'Divine and Demoniac Qualities', meaningHi:'दैवी और आसुरी सम्पदा' },
    { n:17, total:28, en:'Shraddhatraya Vibhaga Yoga', hi:'श्रद्धात्रयविभागयोग', meaningEn:'The Threefold Faith', meaningHi:'तीन प्रकार की श्रद्धा' },
    { n:18, total:78, en:'Moksha Sannyasa Yoga', hi:'मोक्षसंन्यासयोग', meaningEn:'Liberation through Renunciation', meaningHi:'संन्यास द्वारा मोक्ष' }
  ];

  var collectionCache = null;
  var progressBound = false;

  function esc(value) {
    return String(value == null ? '' : value).replace(/[&<>"']/g, function (character) {
      return { '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[character];
    });
  }

  function readStorage(key, fallback) {
    try {
      var value = localStorage.getItem(key);
      return value == null ? fallback : value;
    } catch (error) {
      return fallback;
    }
  }

  function writeStorage(key, value) {
    try { localStorage.setItem(key, value); } catch (error) {}
  }

  function isHindi() {
    return typeof currentLang !== 'undefined' && currentLang === 'hi';
  }

  function chapterMeta(number) {
    return chapters[Math.max(0, Math.min(chapters.length - 1, Number(number) - 1))];
  }

  function parseSource(source) {
    var match = String(source || '').match(/^Bhagavad Gita\s+(\d+)\.(\d+)(?:-(\d+))?$/i);
    if (!match) return null;
    return {
      chapter: Number(match[1]),
      verse: Number(match[2]),
      verseEnd: match[3] ? Number(match[3]) : Number(match[2]),
      label: match[2] + (match[3] ? '–' + match[3] : '')
    };
  }

  function collectVerses() {
    if (collectionCache) return collectionCache;
    var source = typeof _sotdData !== 'undefined' && Array.isArray(_sotdData) ? _sotdData : [];
    var byReference = {};
    source.forEach(function (item) {
      var meta = parseSource(item && item.src);
      if (!meta || meta.chapter < 1 || meta.chapter > 18) return;
      var key = 'c' + meta.chapter + 'v' + meta.verse + 'e' + meta.verseEnd;
      if (!byReference[key]) {
        byReference[key] = {
          src: item.src,
          sa: item.sa || '',
          tr: item.tr || '',
          en: item.en || '',
          hi: item.hi || '',
          meta: meta
        };
      } else {
        ['sa', 'tr', 'en', 'hi'].forEach(function (field) {
          if (!byReference[key][field] && item[field]) byReference[key][field] = item[field];
        });
      }
    });
    collectionCache = Object.keys(byReference).map(function (key) { return byReference[key]; });
    collectionCache.sort(function (a, b) {
      return a.meta.chapter !== b.meta.chapter ? a.meta.chapter - b.meta.chapter :
        a.meta.verse !== b.meta.verse ? a.meta.verse - b.meta.verse : a.meta.verseEnd - b.meta.verseEnd;
    });
    return collectionCache;
  }

  function versesForChapter(number) {
    return collectVerses().filter(function (item) { return item.meta.chapter === Number(number); });
  }

  function currentChapter() {
    var saved = Number(readStorage('sanatan-gita-current-chapter', '2'));
    return saved >= 1 && saved <= 18 ? saved : 2;
  }

  function savedMeaningsOpen() {
    return readStorage('sanatan-gita-meanings-open', 'true') !== 'false';
  }

  function savedScale() {
    var scale = Number(readStorage('sanatan-gita-font-scale', '1'));
    return Math.max(.9, Math.min(1.2, isFinite(scale) ? scale : 1));
  }

  function savedBookmarks() {
    try {
      var parsed = JSON.parse(readStorage('sanatan-gita-bookmarks', '[]'));
      return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
      return [];
    }
  }

  function lastRead() {
    try {
      var parsed = JSON.parse(readStorage('sanatan-gita-last-read', 'null'));
      return parsed && parsed.chapter && parsed.source ? parsed : null;
    } catch (error) {
      return null;
    }
  }

  function verseId(item) {
    return 'gita-verse-' + item.meta.chapter + '-' + item.meta.verse + (item.meta.verseEnd !== item.meta.verse ? '-' + item.meta.verseEnd : '');
  }

  function chapterOptions(selected, hi) {
    return chapters.map(function (chapter) {
      var label = hi ? chapter.hi : chapter.en;
      return '<option value="' + chapter.n + '"' + (chapter.n === selected ? ' selected' : '') + '>' + (hi ? 'अध्याय ' : 'Chapter ') + chapter.n + ' · ' + esc(label) + '</option>';
    }).join('');
  }

  function outlineHtml(selected, hi, mobile) {
    return '<div class="gita-outline-list" role="list" aria-label="' + (hi ? 'अध्याय सूची' : 'Chapter outline') + '">' + chapters.map(function (chapter) {
      var available = versesForChapter(chapter.n).length;
      return '<button type="button" role="listitem" class="gita-outline-item' + (chapter.n === selected ? ' active' : '') + '" onclick="gitaSetChapter(' + chapter.n + ')"' + (chapter.n === selected ? ' aria-current="true"' : '') + '>' +
        '<span class="gita-outline-number">' + String(chapter.n).padStart(2, '0') + '</span>' +
        '<span class="gita-outline-title">' + esc(hi ? chapter.hi : chapter.en) + '</span>' +
        '<span class="gita-outline-count">' + available + '/' + chapter.total + '</span>' +
      '</button>';
    }).join('') + '</div>';
  }

  function verseNavigationHtml(verses) {
    if (!verses.length) return '';
    return '<nav class="gita-verse-nav" aria-label="Verse navigation">' + verses.map(function (item) {
      return '<button type="button" onclick="gitaJumpToVerse(\'' + verseId(item) + '\')" aria-label="Go to Bhagavad Gita verse ' + esc(item.meta.chapter + '.' + item.meta.label) + '">' + esc(item.meta.label) + '</button>';
    }).join('') + '</nav>';
  }

  function verseCardHtml(item, index, bookmarks, meaningsOpen) {
    var saved = bookmarks.indexOf(item.src) !== -1;
    var transliteration = item.tr || 'Transliteration is not included in the current on-site source for this verse.';
    return '<article class="gita-verse-card" id="' + verseId(item) + '" data-gita-index="' + (index + 1) + '" data-gita-source="' + esc(item.src) + '">' +
      '<div class="gita-verse-head">' +
        '<span class="gita-verse-reference">Bhagavad Gita ' + esc(item.meta.chapter + '.' + item.meta.label) + '</span>' +
        '<button type="button" class="gita-bookmark-button' + (saved ? ' saved' : '') + '" data-source="' + esc(item.src) + '" onclick="gitaToggleBookmark(this)" aria-pressed="' + (saved ? 'true' : 'false') + '">' + (saved ? (isHindi() ? 'सहेजा गया' : 'Saved') : (isHindi() ? 'श्लोक सहेजें' : 'Save verse')) + '</button>' +
      '</div>' +
      '<p class="gita-sanskrit" lang="sa-Deva">' + esc(item.sa) + '</p>' +
      '<p class="gita-transliteration" lang="sa-Latn">' + esc(transliteration) + '</p>' +
      '<details class="gita-meaning"' + (meaningsOpen ? ' open' : '') + '>' +
        '<summary><span data-en="Translation & meaning" data-hi="अनुवाद और भावार्थ">Translation &amp; meaning</span></summary>' +
        '<div class="gita-meaning-body">' +
          '<p class="gita-translation gita-translation-hi" lang="hi"><strong>हिंदी अर्थ</strong>' + esc(item.hi || 'इस स्रोत में हिंदी अनुवाद उपलब्ध नहीं है।') + '</p>' +
          '<p class="gita-translation gita-translation-en" lang="en"><strong>English meaning</strong>' + esc(item.en || 'An English translation is not included in this source.') + '</p>' +
        '</div>' +
      '</details>' +
    '</article>';
  }

  function verseListHtml(verses, bookmarks, meaningsOpen) {
    if (!verses.length) {
      return '<div class="gita-verse-list"><div class="gita-verse-card"><p class="gita-translation" data-en="No on-site verse excerpt is currently available for this chapter. Use the complete editions in Sources & methodology below." data-hi="इस अध्याय का श्लोक-अंश अभी साइट पर उपलब्ध नहीं है। नीचे स्रोत और पद्धति में दिए पूर्ण संस्करण देखें।">No on-site verse excerpt is currently available for this chapter. Use the complete editions in Sources &amp; methodology below.</p></div></div>';
    }
    return '<div class="gita-verse-list" id="gita-verse-list">' + verses.map(function (item, index) {
      return verseCardHtml(item, index, bookmarks, meaningsOpen);
    }).join('') + '</div>';
  }

  function relatedCard(chapter, direction, hi) {
    if (!chapter) return '';
    var title = hi ? chapter.hi : chapter.en;
    var label = direction === 'previous' ? (hi ? 'पिछला अध्याय' : 'Previous chapter') : (hi ? 'अगला अध्याय' : 'Next chapter');
    return '<button type="button" class="gita-related-card" onclick="gitaSetChapter(' + chapter.n + ')">' +
      '<b>' + esc(label) + ': ' + chapter.n + '</b>' +
      '<p>' + esc(title) + '</p>' +
      '<span>' + (hi ? 'अध्याय खोलें →' : 'Open chapter →') + '</span>' +
    '</button>';
  }

  window.renderBhagavadGitaReader = function () {
    var hi = isHindi();
    var number = currentChapter();
    var chapter = chapterMeta(number);
    var verses = versesForChapter(number);
    var collection = collectVerses();
    var meaningsOpen = savedMeaningsOpen();
    var bookmarks = savedBookmarks();
    var last = lastRead();
    var previous = number > 1 ? chapterMeta(number - 1) : null;
    var next = number < 18 ? chapterMeta(number + 1) : null;
    var continueEn = last ? 'Continue Ch. ' + last.chapter + ' · Verse ' + last.label : 'Begin with Chapter 2';
    var continueHi = last ? 'अध्याय ' + last.chapter + ' · श्लोक ' + last.label + ' से जारी रखें' : 'अध्याय 2 से आरंभ करें';
    var availableEn = collection.length + ' curated verses are available on site; complete 700-verse editions are linked below.';
    var availableHi = collection.length + ' चुनिंदा श्लोक साइट पर उपलब्ध हैं; सभी 700 श्लोकों के पूर्ण संस्करण नीचे दिए हैं।';
    var meaningLanguage = hi ? 'hi' : 'en';
    var readCount = Number(readStorage('sanatan-gita-progress:' + number, '0')) || 0;

    return '<div class="gita-reader" id="gita-reader" data-meaning-lang="' + meaningLanguage + '" data-chapter="' + number + '" style="--gita-scale:' + savedScale() + '">' +
      '<div class="gita-breadcrumb" aria-label="Breadcrumb">' +
        '<button type="button" onclick="goBack(); showSection(\'home\')"><span data-en="Home" data-hi="होम">Home</span></button><i>/</i>' +
        '<button type="button" onclick="goBack()"><span data-en="Sacred Texts" data-hi="पवित्र ग्रंथ">Sacred Texts</span></button><i>/</i>' +
        '<span>Bhagavad Gita</span><i>/</i><strong>' + (hi ? 'अध्याय ' : 'Chapter ') + number + '</strong>' +
      '</div>' +

      '<section class="gita-hero" aria-labelledby="gita-title">' +
        '<div class="gita-hero-copy">' +
          '<p class="gita-kicker"><span data-en="Sacred dialogue · Mahabharata" data-hi="पवित्र संवाद · महाभारत">Sacred dialogue · Mahabharata</span></p>' +
          '<h1 id="gita-title">Bhagavad Gita<span>श्रीमद्भगवद्गीता</span></h1>' +
          '<p class="gita-hero-description"><span data-en="Krishna and Arjuna’s dialogue on dharma, action, knowledge and devotion—presented with the original Devanagari, Roman transliteration, and Hindi and English meanings." data-hi="धर्म, कर्म, ज्ञान और भक्ति पर श्रीकृष्ण और अर्जुन का संवाद—मूल देवनागरी, रोमन लिप्यंतरण तथा हिंदी और अंग्रेज़ी अर्थ सहित।">Krishna and Arjuna’s dialogue on dharma, action, knowledge and devotion—presented with the original Devanagari, Roman transliteration, and Hindi and English meanings.</span></p>' +
          '<div class="gita-hero-meta"><span>18 <span data-en="chapters" data-hi="अध्याय">chapters</span></span><span>700 <span data-en="verses in the complete text" data-hi="पूर्ण ग्रंथ में श्लोक">verses in the complete text</span></span><span>' + collection.length + ' <span data-en="curated on site" data-hi="साइट पर चुनिंदा">curated on site</span></span></div>' +
          '<div class="gita-hero-actions">' +
            '<button type="button" class="gita-primary-button" onclick="gitaBeginChapter()"><span data-en="Read selected chapter" data-hi="चुना अध्याय पढ़ें">Read selected chapter</span></button>' +
            '<button type="button" class="gita-secondary-button" id="gita-continue-button" onclick="gitaContinueReading()" data-en="' + esc(continueEn) + '" data-hi="' + esc(continueHi) + '">' + esc(hi ? continueHi : continueEn) + '</button>' +
          '</div>' +
        '</div>' +
      '</section>' +

      '<div class="gita-trust-note"><span class="gita-trust-mark" aria-hidden="true">i</span><span data-en="' + esc(availableEn) + ' Translations can differ by tradition; source notes and complete reference editions are provided below." data-hi="' + esc(availableHi) + ' परंपरा के अनुसार अनुवाद में अंतर हो सकता है; स्रोत-टिप्पणी और पूर्ण संदर्भ संस्करण नीचे दिए हैं।">' + esc(availableEn) + ' Translations can differ by tradition; source notes and complete reference editions are provided below.</span></div>' +

      '<div class="gita-reading-layout">' +
        '<aside class="gita-outline" aria-label="Chapter outline"><div class="gita-outline-heading"><p data-en="Book outline" data-hi="ग्रंथ सूची">Book outline</p><h2 data-en="Eighteen chapters" data-hi="अठारह अध्याय">Eighteen chapters</h2></div>' + outlineHtml(number, hi, false) + '</aside>' +
        '<main class="gita-reader-panel">' +
          '<section class="gita-chapter-section" aria-labelledby="gita-chapter-title">' +
            '<p class="gita-chapter-kicker">' + (hi ? 'अध्याय ' : 'Chapter ') + number + '</p>' +
            '<div class="gita-chapter-heading"><h2 id="gita-chapter-title">' + esc(chapter.en) + '<span>' + esc(chapter.hi) + '</span></h2><p>' + esc(hi ? chapter.meaningHi : chapter.meaningEn) + '<br>' + verses.length + ' ' + (hi ? 'चुनिंदा श्लोक उपलब्ध · पूर्ण अध्याय में ' : 'curated verses available · ') + chapter.total + (hi ? ' श्लोक' : ' verses in complete chapter') + '</p></div>' +
            '<details class="gita-mobile-outline"><summary><span data-en="Browse all 18 chapters" data-hi="सभी 18 अध्याय देखें">Browse all 18 chapters</span></summary>' + outlineHtml(number, hi, true) + '</details>' +
          '</section>' +

          '<div class="gita-toolbar" aria-label="Reader controls">' +
            '<div class="gita-select-wrap"><label for="gita-chapter-select"><span data-en="Choose chapter" data-hi="अध्याय चुनें">Choose chapter</span></label><div class="gita-select-row"><button type="button" class="gita-square-button" onclick="gitaSetChapter(' + Math.max(1, number - 1) + ')" aria-label="Previous chapter"' + (number === 1 ? ' disabled' : '') + '>‹</button><select id="gita-chapter-select" onchange="gitaSelectChapter(this.value)">' + chapterOptions(number, hi) + '</select><button type="button" class="gita-square-button" onclick="gitaSetChapter(' + Math.min(18, number + 1) + ')" aria-label="Next chapter"' + (number === 18 ? ' disabled' : '') + '>›</button></div></div>' +
            '<div><span class="gita-control-label" data-en="Meaning language" data-hi="अर्थ की भाषा">Meaning language</span><div class="gita-control-group"><button type="button" class="gita-toggle-button' + (meaningLanguage === 'hi' ? ' active' : '') + '" onclick="gitaSetMeaningLanguage(\'hi\')" aria-pressed="' + (meaningLanguage === 'hi') + '">हिंदी</button><button type="button" class="gita-toggle-button' + (meaningLanguage === 'en' ? ' active' : '') + '" onclick="gitaSetMeaningLanguage(\'en\')" aria-pressed="' + (meaningLanguage === 'en') + '">English</button></div></div>' +
            '<div><span class="gita-control-label" data-en="Reading tools" data-hi="पठन साधन">Reading tools</span><div class="gita-control-group"><button type="button" class="gita-text-button" onclick="gitaChangeFont(-.05)" aria-label="Decrease text size">A−</button><button type="button" class="gita-text-button" onclick="gitaChangeFont(.05)" aria-label="Increase text size">A+</button><button type="button" class="gita-text-button' + (meaningsOpen ? ' active' : '') + '" id="gita-meaning-toggle" onclick="gitaToggleMeanings()" aria-pressed="' + meaningsOpen + '"><span data-en="Meaning" data-hi="अर्थ">Meaning</span></button></div></div>' +
          '</div>' +

          '<div class="gita-reader-status"><div class="gita-progress-copy"><span data-en="Reading progress for this chapter" data-hi="इस अध्याय की पठन प्रगति">Reading progress for this chapter</span><strong id="gita-progress-label">' + Math.min(readCount, verses.length) + ' / ' + verses.length + '</strong></div><div class="gita-progress-track" aria-hidden="true"><span id="gita-progress-bar"></span></div></div>' +
          verseNavigationHtml(verses) +
          verseListHtml(verses, bookmarks, meaningsOpen) +
        '</main>' +
      '</div>' +

      '<section class="gita-source-section" id="gita-sources" aria-labelledby="gita-sources-title">' +
        '<div class="gita-section-heading"><h2 id="gita-sources-title" data-en="Sources & translation methodology" data-hi="स्रोत और अनुवाद पद्धति">Sources &amp; translation methodology</h2><p data-en="Clear attribution is part of respectful scripture reading. These notes distinguish the complete text from the curated reading collection available on this site." data-hi="सम्मानपूर्वक ग्रंथ-पठन में स्पष्ट स्रोत देना आवश्यक है। ये टिप्पणियाँ पूर्ण ग्रंथ और साइट पर उपलब्ध चुनिंदा पठन-संग्रह के बीच अंतर स्पष्ट करती हैं।">Clear attribution is part of respectful scripture reading. These notes distinguish the complete text from the curated reading collection available on this site.</p></div>' +
        '<div class="gita-method-grid">' +
          '<article class="gita-method-card"><b data-en="On-site verse source" data-hi="साइट पर श्लोकों का स्रोत">On-site verse source</b><p data-en="The curated Sanskrit, transliteration, Hindi and English fields come from the repository’s existing VedicScriptures Bhagavad Gita dataset under the MIT License." data-hi="चुनिंदा संस्कृत, लिप्यंतरण, हिंदी और अंग्रेज़ी सामग्री रिपॉज़िटरी में पहले से उपलब्ध VedicScriptures भगवद्गीता डेटासेट से, MIT लाइसेंस के अंतर्गत आती है।">The curated Sanskrit, transliteration, Hindi and English fields come from the repository’s existing VedicScriptures Bhagavad Gita dataset under the MIT License.</p><a href="https://github.com/vedicscriptures/vedicscriptures.github.io" target="_blank" rel="noopener"><span data-en="View source repository →" data-hi="स्रोत रिपॉज़िटरी देखें →">View source repository →</span></a></article>' +
          '<article class="gita-method-card"><b data-en="Structure reference" data-hi="ग्रंथ-संरचना संदर्भ">Structure reference</b><p data-en="The 18-chapter, 700-verse structure and traditional chapter names are cross-checked against IIT Kanpur’s Gita Supersite." data-hi="18 अध्याय, 700 श्लोक और पारंपरिक अध्याय-नाम IIT कानपुर के Gita Supersite से संदर्भ-जाँचे गए हैं।">The 18-chapter, 700-verse structure and traditional chapter names are cross-checked against IIT Kanpur’s Gita Supersite.</p><a href="https://www.gitasupersite.iitk.ac.in/srimad/intro" target="_blank" rel="noopener"><span data-en="Open Gita Supersite →" data-hi="Gita Supersite खोलें →">Open Gita Supersite →</span></a></article>' +
          '<article class="gita-method-card"><b data-en="Translation note" data-hi="अनुवाद संबंधी टिप्पणी">Translation note</b><p data-en="Translations express interpretation and can vary across sampradayas and teachers. This reader preserves its source wording and does not present one translation as the only understanding." data-hi="अनुवाद में व्याख्या का अंश होता है और संप्रदायों व आचार्यों के अनुसार अंतर हो सकता है। यह रीडर स्रोत की भाषा सुरक्षित रखता है और किसी एक अनुवाद को एकमात्र समझ नहीं बताता।">Translations express interpretation and can vary across sampradayas and teachers. This reader preserves its source wording and does not present one translation as the only understanding.</p><a href="THIRD_PARTY_NOTICES.md" target="_blank"><span data-en="Read license details →" data-hi="लाइसेंस विवरण पढ़ें →">Read license details →</span></a></article>' +
        '</div>' +
        '<div class="gita-resource-grid">' +
          '<article class="gita-resource-card"><b data-en="Hindi & Sanskrit edition" data-hi="हिंदी और संस्कृत संस्करण">Hindi &amp; Sanskrit edition</b><p data-en="Gorakhpur Press edition with commentary, hosted by Internet Archive." data-hi="टीका सहित गोरखपुर प्रेस संस्करण, Internet Archive पर उपलब्ध।">Gorakhpur Press edition with commentary, hosted by Internet Archive.</p><a href="https://archive.org/download/mahabharat-hindi/Bhagavad_Gita_Hindi_Sanskrit_Gorakhpur.pdf" target="_blank" rel="noopener"><span data-en="Open complete PDF →" data-hi="पूर्ण PDF खोलें →">Open complete PDF →</span></a></article>' +
          '<article class="gita-resource-card"><b data-en="English edition" data-hi="अंग्रेज़ी संस्करण">English edition</b><p data-en="A complete English translation hosted by Internet Archive." data-hi="Internet Archive पर उपलब्ध पूर्ण अंग्रेज़ी अनुवाद।">A complete English translation hosted by Internet Archive.</p><a href="https://archive.org/download/mahabharat-hindi/Bhagavad_Gita_English.pdf" target="_blank" rel="noopener"><span data-en="Open complete PDF →" data-hi="पूर्ण PDF खोलें →">Open complete PDF →</span></a></article>' +
          '<article class="gita-resource-card"><b data-en="Punjabi meanings" data-hi="पंजाबी अर्थ">Punjabi meanings</b><p data-en="A Punjabi meaning edition hosted by Internet Archive." data-hi="Internet Archive पर उपलब्ध पंजाबी अर्थ संस्करण।">A Punjabi meaning edition hosted by Internet Archive.</p><a href="https://archive.org/download/mahabharat-hindi/Bhagavad_Gita_Punjabi_Meanings.pdf" target="_blank" rel="noopener"><span data-en="Open complete PDF →" data-hi="पूर्ण PDF खोलें →">Open complete PDF →</span></a></article>' +
          '<article class="gita-resource-card"><b data-en="Bhagwat Stuti" data-hi="भागवत स्तुति">Bhagwat Stuti</b><p data-en="A devotional supplementary PDF already preserved in this website’s collection." data-hi="इस वेबसाइट के संग्रह में पहले से सुरक्षित एक पूरक भक्तिपरक PDF।">A devotional supplementary PDF already preserved in this website’s collection.</p><a href="pdfs/BhagwatStuti.pdf" target="_blank" rel="noopener"><span data-en="Open supplementary PDF →" data-hi="पूरक PDF खोलें →">Open supplementary PDF →</span></a></article>' +
        '</div>' +
        '<p class="gita-device-note" data-en="Verse bookmarks and reading progress are stored only on this device. No audio or download control is shown unless a real source is available." data-hi="श्लोक बुकमार्क और पठन प्रगति केवल इसी डिवाइस पर सुरक्षित होते हैं। वास्तविक स्रोत उपलब्ध होने पर ही ऑडियो या डाउनलोड नियंत्रण दिखाया जाता है।">Verse bookmarks and reading progress are stored only on this device. No audio or download control is shown unless a real source is available.</p>' +
      '</section>' +

      '<section class="gita-related-section" aria-labelledby="gita-related-title"><div class="gita-section-heading"><h2 id="gita-related-title" data-en="Continue your reading" data-hi="पठन जारी रखें">Continue your reading</h2><p data-en="Move through the Gita chapter by chapter, or return to another scripture already available in the library." data-hi="गीता को अध्याय-दर-अध्याय पढ़ें, या पुस्तकालय में उपलब्ध किसी अन्य ग्रंथ पर जाएँ।">Move through the Gita chapter by chapter, or return to another scripture already available in the library.</p></div><div class="gita-related-grid">' +
        (relatedCard(previous, 'previous', hi) || relatedCard(chapterMeta(1), 'previous', hi)) +
        (relatedCard(next, 'next', hi) || relatedCard(chapterMeta(18), 'next', hi)) +
        '<button type="button" class="gita-related-card" onclick="showText(\'upanishads\')"><b data-en="Related reading" data-hi="संबंधित पठन">Related reading</b><p data-en="Explore the Upanishads already available in Sacred Texts." data-hi="पवित्र ग्रंथ में पहले से उपलब्ध उपनिषदों का अध्ययन करें।">Explore the Upanishads already available in Sacred Texts.</p><span data-en="Open Upanishads →" data-hi="उपनिषद खोलें →">Open Upanishads →</span></button>' +
      '</div></section>' +
    '</div>';
  };

  function paintProgress(root, seen) {
    if (!root) return;
    var cards = root.querySelectorAll('.gita-verse-card[data-gita-index]');
    var total = cards.length;
    var safeSeen = Math.max(0, Math.min(total, Number(seen) || 0));
    var label = document.getElementById('gita-progress-label');
    var bar = document.getElementById('gita-progress-bar');
    if (label) label.textContent = safeSeen + ' / ' + total + (isHindi() ? ' पढ़े' : ' read');
    if (bar) bar.style.width = (total ? Math.round((safeSeen / total) * 100) : 0) + '%';
  }

  function updateContinueButton(saved) {
    var button = document.getElementById('gita-continue-button');
    if (!button || !saved) return;
    var en = 'Continue Ch. ' + saved.chapter + ' · Verse ' + saved.label;
    var hi = 'अध्याय ' + saved.chapter + ' · श्लोक ' + saved.label + ' से जारी रखें';
    button.setAttribute('data-en', en);
    button.setAttribute('data-hi', hi);
    button.textContent = isHindi() ? hi : en;
  }

  function updateProgress() {
    var root = document.getElementById('gita-reader');
    var display = document.getElementById('text-display');
    if (!root || !display || display.style.display === 'none') return;
    var number = Number(root.getAttribute('data-chapter'));
    var cards = root.querySelectorAll('.gita-verse-card[data-gita-index]');
    var threshold = window.innerHeight * .72;
    var visible = 0;
    Array.prototype.forEach.call(cards, function (card) {
      if (card.getBoundingClientRect().top <= threshold) visible = Math.max(visible, Number(card.getAttribute('data-gita-index')) || 0);
    });
    var key = 'sanatan-gita-progress:' + number;
    var prior = Number(readStorage(key, '0')) || 0;
    var seen = Math.max(prior, visible);
    if (seen !== prior) writeStorage(key, String(seen));
    if (visible > 0 && cards[visible - 1]) {
      var source = cards[visible - 1].getAttribute('data-gita-source');
      var meta = parseSource(source);
      if (meta) {
        var saved = { chapter:number, source:source, label:meta.label };
        writeStorage('sanatan-gita-last-read', JSON.stringify(saved));
        updateContinueButton(saved);
      }
    }
    paintProgress(root, seen);
  }

  window.initBhagavadGitaReader = function () {
    var root = document.getElementById('gita-reader');
    if (!root) return;
    root.style.setProperty('--gita-scale', savedScale());
    paintProgress(root, Number(readStorage('sanatan-gita-progress:' + root.getAttribute('data-chapter'), '0')) || 0);
    if (!progressBound) {
      window.addEventListener('scroll', updateProgress, { passive:true });
      window.addEventListener('resize', updateProgress, { passive:true });
      progressBound = true;
    }
    window.setTimeout(updateProgress, 80);
  };

  window.gitaSetChapter = function (number) {
    var next = Math.max(1, Math.min(18, Number(number) || 2));
    writeStorage('sanatan-gita-current-chapter', String(next));
    if (typeof showText === 'function') showText('bhagavad-gita');
    window.setTimeout(function () {
      var section = document.querySelector('.gita-chapter-section');
      if (section) section.scrollIntoView({ behavior:'smooth', block:'start' });
    }, 40);
  };

  window.gitaSelectChapter = function (number) { window.gitaSetChapter(number); };

  window.gitaBeginChapter = function () {
    var list = document.getElementById('gita-verse-list');
    if (list) list.scrollIntoView({ behavior:'smooth', block:'start' });
  };

  window.gitaJumpToVerse = function (id) {
    var verse = document.getElementById(id);
    if (verse) verse.scrollIntoView({ behavior:'smooth', block:'start' });
  };

  window.gitaContinueReading = function () {
    var saved = lastRead();
    if (!saved) {
      if (currentChapter() !== 2) window.gitaSetChapter(2);
      else window.gitaBeginChapter();
      return;
    }
    var targetId = 'gita-verse-' + saved.source.replace(/^Bhagavad Gita\s+/i, '').replace(/\./g, '-').replace(/[^0-9-]/g, '');
    if (currentChapter() !== Number(saved.chapter)) {
      writeStorage('sanatan-gita-current-chapter', String(saved.chapter));
      if (typeof showText === 'function') showText('bhagavad-gita');
    }
    window.setTimeout(function () { window.gitaJumpToVerse(targetId); }, 80);
  };

  window.gitaSetMeaningLanguage = function (language) {
    var desired = language === 'hi' ? 'hi' : 'en';
    if (typeof currentLang !== 'undefined' && currentLang !== desired && typeof toggleLanguage === 'function') {
      toggleLanguage();
      return;
    }
    var root = document.getElementById('gita-reader');
    if (root) root.setAttribute('data-meaning-lang', desired);
  };

  window.gitaChangeFont = function (delta) {
    var root = document.getElementById('gita-reader');
    if (!root) return;
    var current = Number(readStorage('sanatan-gita-font-scale', '1')) || 1;
    var next = Math.max(.9, Math.min(1.2, Math.round((current + Number(delta || 0)) * 100) / 100));
    writeStorage('sanatan-gita-font-scale', String(next));
    root.style.setProperty('--gita-scale', String(next));
  };

  window.gitaToggleMeanings = function () {
    var root = document.getElementById('gita-reader');
    if (!root) return;
    var details = root.querySelectorAll('.gita-meaning');
    var shouldOpen = Array.prototype.some.call(details, function (item) { return !item.open; });
    Array.prototype.forEach.call(details, function (item) { item.open = shouldOpen; });
    writeStorage('sanatan-gita-meanings-open', String(shouldOpen));
    var button = document.getElementById('gita-meaning-toggle');
    if (button) {
      button.classList.toggle('active', shouldOpen);
      button.setAttribute('aria-pressed', String(shouldOpen));
    }
  };

  window.gitaToggleBookmark = function (button) {
    if (!button) return;
    var source = button.getAttribute('data-source');
    var bookmarks = savedBookmarks();
    var index = bookmarks.indexOf(source);
    if (index === -1) bookmarks.push(source); else bookmarks.splice(index, 1);
    writeStorage('sanatan-gita-bookmarks', JSON.stringify(bookmarks));
    var saved = bookmarks.indexOf(source) !== -1;
    button.classList.toggle('saved', saved);
    button.setAttribute('aria-pressed', String(saved));
    button.textContent = saved ? (isHindi() ? 'सहेजा गया' : 'Saved') : (isHindi() ? 'श्लोक सहेजें' : 'Save verse');
  };
})();
