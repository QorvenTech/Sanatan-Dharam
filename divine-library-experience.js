(function () {
  'use strict';

  function language() {
    var toggle = document.getElementById('langBtn');
    if (toggle && /Read in English/i.test(toggle.textContent || '')) return 'hi';
    if (toggle && /(हिन्दी|हिंदी|Hindi)/i.test(toggle.textContent || '')) return 'en';
    return typeof currentLang !== 'undefined' ? currentLang : 'hi';
  }

  function enhanceDivineLibrary() {
    var root = document.getElementById('divine-sangrah');
    if (!root || root.dataset.experienceReady === 'true') return;
    root.dataset.experienceReady = 'true';
    root.classList.add('divine-library');

    var oldTitle = root.querySelector(':scope > h2');
    var oldIntro = root.querySelector(':scope > p');
    if (oldTitle) oldTitle.hidden = true;
    if (oldIntro) oldIntro.hidden = true;

    root.insertAdjacentHTML('afterbegin',
      '<nav class="ds-breadcrumb" aria-label="Breadcrumb">' +
        '<button type="button" onclick="showSection(\'home\')" data-en="Home" data-hi="होम">Home</button><span>/</span>' +
        '<strong data-en="Divine Sangrah" data-hi="दिव्य संग्रह">Divine Sangrah</strong>' +
      '</nav>' +
      '<section class="ds-hero" aria-labelledby="ds-library-title">' +
        '<div class="ds-hero-copy">' +
          '<p class="ds-kicker" data-en="Curated devotional media" data-hi="चयनित भक्तिमय मीडिया">Curated devotional media</p>' +
          '<h1 id="ds-library-title">Divine Sangrah<span>दिव्य संग्रह</span></h1>' +
          '<p data-en="Discover carefully selected Pravachan, Bhajan, Katha, Puja Vidhi, live streams and playlists in one calm collection." data-hi="चयनित प्रवचन, भजन, कथा, पूजा विधि, लाइव स्ट्रीम और प्लेलिस्ट एक शांत संग्रह में देखें।">Discover carefully selected Pravachan, Bhajan, Katha, Puja Vidhi, live streams and playlists in one calm collection.</p>' +
          '<p class="ds-hero-note"><span aria-hidden="true">ⓘ</span> <span data-en="Every item keeps its original source and opens at its published destination." data-hi="हर सामग्री अपने मूल स्रोत के साथ उसी प्रकाशित स्थान पर खुलती है।">Every item keeps its original source and opens at its published destination.</span></p>' +
          '<div class="ds-hero-actions">' +
            '<button type="button" class="ds-primary" onclick="dsExploreResources()"><span aria-hidden="true">⌕</span> <span data-en="Explore the Sangrah" data-hi="संग्रह देखें">Explore the Sangrah</span></button>' +
            '<button type="button" class="ds-secondary" onclick="dsToggleReviewGuide()"><span aria-hidden="true">✓</span> <span data-en="How entries are curated" data-hi="सामग्री कैसे चुनी जाती है">How entries are curated</span></button>' +
          '</div>' +
        '</div>' +
        '<div class="ds-hero-signals" aria-label="Collection qualities">' +
          '<span><b>✓</b><small data-en="Curated" data-hi="चयनित">Curated</small></span>' +
          '<span><b>↗</b><small data-en="Source linked" data-hi="स्रोत सहित">Source linked</small></span>' +
          '<span><b>●</b><small data-en="Live status" data-hi="लाइव स्थिति">Live status</small></span>' +
        '</div>' +
      '</section>' +
      '<section class="ds-review-guide" id="ds-review-guide" hidden>' +
        '<div class="ds-review-icon" aria-hidden="true">✓</div>' +
        '<div><h2 data-en="Curated with clarity" data-hi="स्पष्टता के साथ चयन">Curated with clarity</h2>' +
        '<p data-en="Entries are added and maintained by approved site administrators. Titles identify the material, category and live status; the original publisher remains responsible for the destination content." data-hi="सामग्री केवल स्वीकृत साइट प्रशासक जोड़ते और संभालते हैं। शीर्षक में सामग्री, श्रेणी और लाइव स्थिति स्पष्ट रहती है; बाहरी सामग्री की जिम्मेदारी उसके मूल प्रकाशक की होती है।">Entries are added and maintained by approved site administrators. Titles identify the material, category and live status; the original publisher remains responsible for the destination content.</p></div>' +
        '<button type="button" onclick="dsToggleReviewGuide()" aria-label="Close">×</button>' +
      '</section>' +
      '<label class="ds-search" for="ds-resource-search"><span aria-hidden="true">⌕</span><input id="ds-resource-search" type="search" autocomplete="off" data-en-placeholder="Search by title or category" data-hi-placeholder="शीर्षक या श्रेणी खोजें" placeholder="Search by title or category"><button type="button" onclick="dsClearSearch()" aria-label="Clear search">×</button></label>'
    );

    var tabs = document.getElementById('ds-tabs');
    if (tabs) tabs.classList.add('ds-category-tabs');
    var toolbar = document.getElementById('ds-links-toolbar');
    if (toolbar) toolbar.classList.add('ds-view-toolbar');

    var linksArea = document.getElementById('ds-links-area');
    if (linksArea) linksArea.insertAdjacentHTML('beforebegin', '<div class="ds-results-heading"><div><p data-en="Sacred media collection" data-hi="भक्तिमय मीडिया संग्रह">Sacred media collection</p><h2 data-en="Browse Divine Sangrah" data-hi="दिव्य संग्रह देखें">Browse Divine Sangrah</h2></div><span id="ds-visible-count" aria-live="polite"></span></div>');

    var comments = document.getElementById('divine-sangrah-comments');
    var trust = document.createElement('section');
    trust.className = 'ds-trust-strip';
    trust.innerHTML = '<span aria-hidden="true">▤</span><div><h2 data-en="Source & viewing note" data-hi="स्रोत और देखने संबंधी सूचना">Source & viewing note</h2><p data-en="Videos, streams and links may open on third-party platforms. Availability, advertisements and platform policies are controlled by their original publishers." data-hi="वीडियो, लाइव स्ट्रीम और लिंक बाहरी प्लेटफ़ॉर्म पर खुल सकते हैं। उपलब्धता, विज्ञापन और प्लेटफ़ॉर्म नीतियाँ उनके मूल प्रकाशक नियंत्रित करते हैं।">Videos, streams and links may open on third-party platforms. Availability, advertisements and platform policies are controlled by their original publishers.</p></div><button type="button" onclick="dsToggleReviewGuide()" data-en="Curation note ›" data-hi="चयन सूचना ›">Curation note ›</button>';
    if (comments) root.insertBefore(trust, comments);
    else root.appendChild(trust);

    var search = document.getElementById('ds-resource-search');
    if (search) search.addEventListener('input', applySearch);
    var languageToggle = document.getElementById('langBtn');
    if (languageToggle) new MutationObserver(syncLanguage).observe(languageToggle, { childList: true, characterData: true, subtree: true });
    ['ds-grid', 'ds-pl-grid'].forEach(function (id) {
      var node = document.getElementById(id);
      if (node) new MutationObserver(applySearch).observe(node, { childList: true });
    });

    syncLanguage();
    applySearch();
  }

  function syncLanguage() {
    var root = document.getElementById('divine-sangrah');
    if (!root) return;
    var lang = language();
    root.querySelectorAll('[data-en-placeholder][data-hi-placeholder]').forEach(function (input) {
      input.placeholder = input.getAttribute('data-' + lang + '-placeholder');
    });
  }

  function currentCards() {
    var playlist = document.getElementById('ds-playlist-area');
    var selector = playlist && playlist.style.display !== 'none' ? '#ds-pl-grid > *' : '#ds-grid > *';
    return Array.prototype.slice.call(document.querySelectorAll(selector));
  }

  function applySearch() {
    var input = document.getElementById('ds-resource-search');
    if (!input) return;
    var query = input.value.trim().toLocaleLowerCase();
    var cards = currentCards();
    var visible = 0;
    cards.forEach(function (card) {
      var matches = !query || card.textContent.toLocaleLowerCase().indexOf(query) !== -1;
      card.hidden = !matches;
      if (matches) visible += 1;
    });
    var count = document.getElementById('ds-visible-count');
    if (count) count.textContent = cards.length ? visible + ' / ' + cards.length : '';
    var clear = document.querySelector('.ds-search button');
    if (clear) clear.hidden = !query;
  }

  window.dsExploreResources = function () {
    var target = document.getElementById('ds-resource-search');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      window.setTimeout(function () { target.focus({ preventScroll: true }); }, 350);
    }
  };

  window.dsToggleReviewGuide = function () {
    var note = document.getElementById('ds-review-guide');
    if (!note) return;
    note.hidden = !note.hidden;
    if (!note.hidden) note.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  window.dsClearSearch = function () {
    var input = document.getElementById('ds-resource-search');
    if (!input) return;
    input.value = '';
    applySearch();
    input.focus();
  };

  var previousApplyLanguage = window.applyLanguage;
  if (typeof previousApplyLanguage === 'function') {
    window.applyLanguage = function (lang) {
      previousApplyLanguage(lang);
      syncLanguage();
      applySearch();
    };
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', enhanceDivineLibrary);
  else enhanceDivineLibrary();
})();
