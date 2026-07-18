(function () {
  'use strict';

  var state = { items: [], filter: 'all', query: '', sort: 'recent', pendingRemove: null };
  var sections = {
    ramayan: ['Sacred Texts', 'पवित्र ग्रंथ', '▤'],
    texts: ['Sacred Texts', 'पवित्र ग्रंथ', '▤'],
    mantras: ['Mantras', 'मंत्र', 'ॐ'],
    aarti: ['Aartis', 'आरती', '♨'],
    deities: ['Deities', 'देवी-देवता', '♙'],
    festivals: ['Festivals', 'त्योहार', '▦'],
    rituals: ['Rituals', 'अनुष्ठान', '♨'],
    paathmandir: ['Paath Mandir', 'पाठ मंदिर', '▥']
  };

  var artwork = {
    'bhagavad-gita': 'assets/text-bhagavad-gita.webp',
    sundarkand: 'assets/paath-sundar-kand.png',
    'hanuman-chalisa': 'assets/paath-hanuman-chalisa.png',
    'bajrang-baan': 'assets/paath-bajrang-baan.png',
    'durga-chalisa': 'assets/paath-durga-chalisa.png',
    'ram-raksha': 'assets/paath-ram-raksha.png',
    'shiv-tandav': 'assets/paath-shiva-tandava.png',
    'gayatri-mantra': 'assets/mantra-gayatri.webp',
    'maha-mrityunjaya': 'assets/mantra-shiva.webp',
    'om-mantra': 'assets/mantra-gayatri.webp',
    'ganesh-mantra': 'assets/mantra-ganesha.webp',
    brahma: 'assets/deity-brahma.webp',
    vishnu: 'assets/deity-vishnu.webp',
    shiva: 'assets/deity-shiva.webp',
    krishna: 'assets/deity-krishna.webp',
    rama: 'assets/deity-rama.webp',
    durga: 'assets/deity-durga.webp',
    lakshmi: 'assets/deity-lakshmi.webp',
    saraswati: 'assets/deity-saraswati.webp',
    ganesha: 'assets/deity-ganesha.webp',
    hanuman: 'assets/deity-hanuman.webp',
    'durga-108names': 'assets/deity-durga.webp',
    'shiva-108names': 'assets/deity-shiva.webp',
    'vishnu-sahasranama': 'assets/deity-vishnu.webp',
    'ritual-puja': 'assets/ritual-puja-hero.webp',
    'ritual-yoga': 'assets/rituals-library-hero.webp',
    'ritual-dhyana': 'assets/rituals-library-hero.webp',
    'ritual-aarti': 'assets/aarti-library-hero.webp',
    'aarti-ganesh': 'assets/deity-ganesha.webp',
    'aarti-durga': 'assets/deity-durga.webp',
    'aarti-saraswati': 'assets/deity-saraswati.webp',
    'aarti-krishna': 'assets/deity-krishna.webp',
    'aarti-lakshmi': 'assets/deity-lakshmi.webp',
    'aarti-kuber': 'assets/deity-kuber.webp',
    'aarti-jagdish': 'assets/deity-vishnu.webp',
    'aarti-ambe': 'assets/deity-durga.webp',
    'aarti-shiv': 'assets/deity-shiva.webp'
  };

  function lang() {
    var toggle = document.getElementById('langBtn');
    if (toggle && /Read in English/i.test(toggle.textContent || '')) return 'hi';
    if (toggle && /(हिन्दी|हिंदी|Hindi)/i.test(toggle.textContent || '')) return 'en';
    return typeof currentLang !== 'undefined' ? currentLang : 'hi';
  }
  function tr(en, hi) { return lang() === 'hi' ? hi : en; }
  function esc(value) { return String(value == null ? '' : value).replace(/[&<>"']/g, function (c) { return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]; }); }

  function applyLocalLanguage(root) {
    if (!root) return;
    var current = lang();
    root.querySelectorAll('[data-en][data-hi]').forEach(function (node) {
      node.textContent = node.getAttribute('data-' + current);
    });
  }

  function normalizeSection(item) {
    if (item.section && sections[item.section]) return item.section;
    if (/^aarti-/.test(item.id)) return 'aarti';
    if (/^ritual-/.test(item.id)) return 'rituals';
    if (/mantra/.test(item.id)) return 'mantras';
    if (/^(brahma|vishnu|shiva|krishna|rama|durga|lakshmi|saraswati|ganesha|hanuman)/.test(item.id)) return 'deities';
    if (/^(sundarkand|hanuman-chalisa|bajrang-baan|durga-chalisa|ram-raksha|shiv-tandav)/.test(item.id)) return 'paathmandir';
    return item.section || 'texts';
  }

  function title(item) {
    return lang() === 'hi' ? (item.titleHi || item.title || item.titleEn || tr('Untitled', 'बिना शीर्षक')) : (item.titleEn || item.title || item.titleHi || 'Untitled');
  }

  function profileMarkup(user) {
    var name = user.displayName || (user.email ? user.email.split('@')[0] : 'Member');
    var avatar = user.photoURL ? '<img src="' + esc(user.photoURL) + '" alt="">' : '<span>' + esc(name.charAt(0).toUpperCase()) + '</span>';
    return '<aside class="library-profile">' +
      '<div class="library-avatar">' + avatar + '</div>' +
      '<h2>' + esc(name) + '</h2><p>' + esc(user.email || '') + '</p>' +
      '<div class="library-sync-line"><span aria-hidden="true">☁</span><div><strong data-en="Account-synced saves" data-hi="अकाउंट से सिंक संग्रह">Account-synced saves</strong><small data-en="Available after sign-in" data-hi="साइन इन के बाद उपलब्ध">Available after sign-in</small></div><b aria-label="Active">✓</b></div>' +
      '<button type="button" onclick="libraryScrollToSaved()"><span aria-hidden="true">▥</span><span data-en="Library overview" data-hi="लाइब्रेरी का परिचय">Library overview</span></button>' +
      '<button type="button" onclick="libraryScrollToPrivacy()"><span aria-hidden="true">♢</span><span data-en="Sync & privacy" data-hi="सिंक और गोपनीयता">Sync & privacy</span></button>' +
      '<button type="button" onclick="showAccountProfile()"><span aria-hidden="true">⚙</span><span data-en="Account &amp; Profile" data-hi="खाता और प्रोफ़ाइल">Account &amp; Profile</span></button>' +
    '</aside>';
  }

  function shellMarkup(user) {
    var name = user.displayName || (user.email ? user.email.split('@')[0] : 'Member');
    return '<nav class="library-breadcrumb" aria-label="Breadcrumb"><button type="button" onclick="showSection(\'home\')" data-en="Home" data-hi="होम">Home</button><span>/</span><strong data-en="My Library" data-hi="मेरी लाइब्रेरी">My Library</strong></nav>' +
      '<div class="library-layout">' + profileMarkup(user) +
        '<main class="library-main">' +
          '<header class="library-heading"><div><p class="library-kicker" data-en="Your saved sacred resources" data-hi="आपके सहेजे हुए पवित्र संसाधन">Your saved sacred resources</p><h1>My Library <span>/ मेरी लाइब्रेरी</span></h1><p>' + esc(tr('Namaste, ' + name + '. Revisit the sacred resources saved to your account.', 'नमस्ते, ' + name + '। अपने अकाउंट में सहेजे हुए पवित्र संसाधन फिर से देखें।')) + '</p></div><div class="library-sync-badge"><b>✓</b><span data-en="Account sync active" data-hi="अकाउंट सिंक चालू है">Account sync active</span></div></header>' +
          '<div class="library-toolbar"><label><span aria-hidden="true">⌕</span><input id="library-search" type="search" autocomplete="off" placeholder="' + esc(tr('Search your library', 'अपनी लाइब्रेरी खोजें')) + '"></label><select id="library-sort" aria-label="Sort library"><option value="recent">' + esc(tr('Recently saved', 'हाल में सहेजे')) + '</option><option value="title">' + esc(tr('Title A–Z', 'नाम के अनुसार')) + '</option></select><button type="button" onclick="libraryScrollToSaved()"><span aria-hidden="true">▥</span><span data-en="Manage Library" data-hi="लाइब्रेरी संभालें">Manage Library</span></button></div>' +
          '<div class="library-filters" id="library-filters"></div>' +
          '<section class="library-saved" id="library-saved"><div class="library-section-title"><div><p data-en="Account collection" data-hi="अकाउंट संग्रह">Account collection</p><h2 data-en="Saved Resources" data-hi="सहेजे हुए संसाधन">Saved Resources</h2></div><span id="library-result-count"></span></div><div class="library-grid" id="library-grid"></div></section>' +
          '<section class="library-privacy" id="library-privacy"><span aria-hidden="true">☁</span><div><h2 data-en="How saving works" data-hi="सहेजना कैसे काम करता है">How saving works</h2><p data-en="Items in this library are stored with your signed-in account in Firebase and can be available after you sign in on another supported device. Removing an item only removes it from your private library; the public resource remains available." data-hi="इस लाइब्रेरी की सामग्री आपके साइन-इन अकाउंट के साथ Firebase में सहेजी जाती है और दूसरे समर्थित डिवाइस पर साइन इन करने के बाद उपलब्ध हो सकती है। किसी सामग्री को हटाने पर वह केवल आपकी निजी लाइब्रेरी से हटती है; सार्वजनिक संसाधन उपलब्ध रहता है।">Items in this library are stored with your signed-in account in Firebase and can be available after you sign in on another supported device. Removing an item only removes it from your private library; the public resource remains available.</p></div></section>' +
        '</main>' +
      '</div>' +
      '<div class="library-confirm" id="library-confirm" hidden role="dialog" aria-modal="true" aria-labelledby="library-confirm-title"><div><button type="button" class="library-confirm-close" onclick="libraryCancelRemove()" aria-label="Close">×</button><p data-en="Confirmation" data-hi="पुष्टि">Confirmation</p><h2 id="library-confirm-title" data-en="Remove from saved?" data-hi="सहेजे हुए संग्रह से हटाएँ?">Remove from saved?</h2><p id="library-confirm-copy"></p><div><button type="button" onclick="libraryCancelRemove()" data-en="Cancel" data-hi="रद्द करें">Cancel</button><button type="button" class="danger" onclick="libraryConfirmRemove()" data-en="Remove" data-hi="हटाएँ">Remove</button></div></div></div>';
  }

  function signedOutMarkup() {
    return '<nav class="library-breadcrumb" aria-label="Breadcrumb"><button type="button" onclick="showSection(\'home\')" data-en="Home" data-hi="होम">Home</button><span>/</span><strong data-en="My Library" data-hi="मेरी लाइब्रेरी">My Library</strong></nav>' +
      '<section class="library-signed-out"><div class="library-signed-out-art"><span>▥</span><b>ॐ</b></div><p class="library-kicker" data-en="Your personal sacred space" data-hi="आपका निजी पवित्र स्थान">Your personal sacred space</p><h1>My Library <span>/ मेरी लाइब्रेरी</span></h1><p data-en="Sign in to save Mantras, Aartis, Paath, deity knowledge and ritual guides to your private account-synced collection." data-hi="मंत्र, आरती, पाठ, देवी-देवता ज्ञान और अनुष्ठान मार्गदर्शिकाएँ अपने निजी अकाउंट-सिंक संग्रह में सहेजने के लिए साइन इन करें।">Sign in to save Mantras, Aartis, Paath, deity knowledge and ritual guides to your private account-synced collection.</p><div><button type="button" class="primary" onclick="openModal()" data-en="Sign in to My Library" data-hi="मेरी लाइब्रेरी में साइन इन करें">Sign in to My Library</button><button type="button" onclick="showSection(\'home\')" data-en="Continue exploring" data-hi="साइट देखते रहें">Continue exploring</button></div><small><span>✓</span> <span data-en="Only you can view the resources saved to your account." data-hi="आपके अकाउंट में सहेजे संसाधन केवल आप देख सकते हैं।">Only you can view the resources saved to your account.</span></small></section>';
  }

  async function fetchItems() {
    var collection = db.collection('users').doc(currentUser.uid).collection('favorites');
    var snapshot;
    try { snapshot = await collection.orderBy('addedAt', 'desc').get(); }
    catch (error) { snapshot = await collection.get(); }
    var items = [];
    snapshot.forEach(function (doc) {
      var data = doc.data() || {};
      data.id = data.id || doc.id;
      data.docId = doc.id;
      data.section = normalizeSection(data);
      data.addedAtMs = data.addedAt && typeof data.addedAt.toMillis === 'function' ? data.addedAt.toMillis() : 0;
      items.push(data);
    });
    return items;
  }

  function filterMarkup() {
    var definitions = [['all', tr('All', 'सभी')]];
    Object.keys(sections).forEach(function (key) {
      if (key === 'ramayan' || key === 'texts') return;
      if (state.items.some(function (item) { return item.section === key; })) definitions.push([key, tr(sections[key][0], sections[key][1])]);
    });
    if (state.items.some(function (item) { return item.section === 'ramayan' || item.section === 'texts'; })) definitions.splice(1, 0, ['texts', tr('Sacred Texts', 'पवित्र ग्रंथ')]);
    var filters = document.getElementById('library-filters');
    if (!filters) return;
    filters.innerHTML = definitions.map(function (def) { return '<button type="button" data-library-filter="' + def[0] + '" class="' + (state.filter === def[0] ? 'active' : '') + '">' + esc(def[1]) + '</button>'; }).join('');
  }

  function itemMarkup(item) {
    var section = sections[item.section] || sections.texts;
    var image = artwork[item.id];
    var art = image ? '<img src="' + image + '" alt="" loading="lazy">' : '<span>' + section[2] + '</span>';
    return '<article class="library-card" data-library-item data-id="' + esc(item.docId) + '">' +
      '<button type="button" class="library-card-open" data-library-open="' + esc(item.id) + '" data-library-section="' + esc(item.section) + '">' +
        '<div class="library-card-art">' + art + '</div><div class="library-card-copy"><p>' + esc(tr(section[0], section[1])) + '</p><h3>' + esc(title(item)) + '</h3><small><span aria-hidden="true">☁</span> <span data-en="Synced to account" data-hi="अकाउंट में सिंक">Synced to account</span></small><b data-en="Open resource" data-hi="संसाधन खोलें">Open resource</b></div>' +
      '</button>' +
      '<button type="button" class="library-card-remove" data-library-remove="' + esc(item.docId) + '" aria-label="' + esc(tr('Remove from saved', 'सहेजे हुए संग्रह से हटाएँ')) + '">×</button>' +
    '</article>';
  }

  function visibleItems() {
    var query = state.query.toLocaleLowerCase();
    var items = state.items.filter(function (item) {
      var filterMatch = state.filter === 'all' || item.section === state.filter || (state.filter === 'texts' && (item.section === 'texts' || item.section === 'ramayan'));
      var searchMatch = !query || (title(item) + ' ' + (item.titleHi || '') + ' ' + (item.titleEn || '') + ' ' + item.section).toLocaleLowerCase().indexOf(query) !== -1;
      return filterMatch && searchMatch;
    });
    if (state.sort === 'title') items.sort(function (a, b) { return title(a).localeCompare(title(b)); });
    else items.sort(function (a, b) { return b.addedAtMs - a.addedAtMs; });
    return items;
  }

  function paintGrid() {
    var grid = document.getElementById('library-grid');
    if (!grid) return;
    var items = visibleItems();
    var count = document.getElementById('library-result-count');
    if (count) count.textContent = items.length + ' ' + tr(items.length === 1 ? 'item' : 'items', 'सामग्री');
    if (!state.items.length) {
      grid.innerHTML = '<div class="library-empty"><span>▥</span><h3 data-en="Your library is ready" data-hi="आपकी लाइब्रेरी तैयार है">Your library is ready</h3><p data-en="No saved resources yet. Explore the site and use Save on anything you want to revisit." data-hi="अभी कोई संसाधन सहेजा नहीं है। साइट देखें और जिसे फिर पढ़ना चाहें उस पर सहेजें दबाएँ।">No saved resources yet. Explore the site and use Save on anything you want to revisit.</p><button type="button" onclick="showSection(\'mantras\')" data-en="Explore sacred resources" data-hi="पवित्र संसाधन देखें">Explore sacred resources</button></div>';
      applyLocalLanguage(grid);
      return;
    }
    if (!items.length) {
      grid.innerHTML = '<div class="library-empty compact"><span>⌕</span><h3 data-en="No matching saved items" data-hi="कोई मिलती हुई सामग्री नहीं मिली">No matching saved items</h3><p data-en="Try another search or category." data-hi="दूसरा शब्द या श्रेणी चुनें।">Try another search or category.</p><button type="button" onclick="libraryClearFilters()" data-en="Clear filters" data-hi="फ़िल्टर हटाएँ">Clear filters</button></div>';
      applyLocalLanguage(grid);
      return;
    }
    grid.innerHTML = items.map(itemMarkup).join('');
    applyLocalLanguage(grid);
  }

  function bindLibrary() {
    var search = document.getElementById('library-search');
    var sort = document.getElementById('library-sort');
    var filters = document.getElementById('library-filters');
    var grid = document.getElementById('library-grid');
    if (search) search.addEventListener('input', function () { state.query = search.value.trim(); paintGrid(); });
    if (sort) sort.addEventListener('change', function () { state.sort = sort.value; paintGrid(); });
    if (filters) filters.addEventListener('click', function (event) {
      var button = event.target.closest('[data-library-filter]');
      if (!button) return;
      state.filter = button.getAttribute('data-library-filter');
      filterMarkup();
      paintGrid();
    });
    if (grid) grid.addEventListener('click', function (event) {
      var remove = event.target.closest('[data-library-remove]');
      if (remove) { libraryAskRemove(remove.getAttribute('data-library-remove')); return; }
      var open = event.target.closest('[data-library-open]');
      if (open) libraryOpenItem(open.getAttribute('data-library-open'), open.getAttribute('data-library-section'));
    });
  }

  window.showFavorites = async function () {
    document.querySelectorAll('.section').forEach(function (section) { section.classList.remove('active'); });
    var display = document.getElementById('text-display');
    if (display) display.style.display = 'none';
    var section = document.getElementById('favorites-section');
    if (!section) return;
    section.classList.add('active');
    section.classList.add('my-library');
    section.style.display = '';
    if (typeof currentSection !== 'undefined') currentSection = 'favorites-section';
    var content = document.getElementById('favorites-content');
    if (!content) return;

    if (typeof currentUser === 'undefined' || !currentUser) {
      content.innerHTML = signedOutMarkup();
      applyLocalLanguage(content);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    content.innerHTML = '<div class="library-loading"><span></span><p>' + esc(tr('Opening your library…', 'आपकी लाइब्रेरी खुल रही है…')) + '</p></div>';
    try {
      state.items = await fetchItems();
      state.filter = 'all'; state.query = ''; state.sort = 'recent';
      content.innerHTML = shellMarkup(currentUser);
      filterMarkup(); paintGrid(); bindLibrary();
      applyLocalLanguage(content);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Error loading library:', error);
      content.innerHTML = '<section class="library-error"><span>!</span><h1 data-en="Your library could not be loaded" data-hi="आपकी लाइब्रेरी लोड नहीं हो सकी">Your library could not be loaded</h1><p data-en="Please check your connection and try again." data-hi="अपना इंटरनेट कनेक्शन जाँचकर फिर प्रयास करें।">Please check your connection and try again.</p><button type="button" onclick="showFavorites()" data-en="Try again" data-hi="फिर प्रयास करें">Try again</button></section>';
      applyLocalLanguage(content);
    }
  };

  window.libraryOpenItem = function (id, section) {
    if (/^aarti-/.test(id) && typeof showText === 'function') { showText(id); return; }
    if (/^ritual-/.test(id) && typeof showText === 'function') { showText(id); return; }
    if (section === 'deities' && /-(108names|sahasranama)$/.test(id) && typeof jumpToContent === 'function') { jumpToContent(id); return; }
    if (section === 'deities' && typeof showText === 'function') { showText(id); return; }
    if (typeof jumpToContent === 'function') jumpToContent(id);
  };

  window.libraryAskRemove = function (docId) {
    var item = state.items.find(function (entry) { return entry.docId === docId; });
    if (!item) return;
    state.pendingRemove = docId;
    var modal = document.getElementById('library-confirm');
    var copy = document.getElementById('library-confirm-copy');
    if (copy) copy.textContent = tr(title(item) + ' will be removed from your account-synced library. The public resource remains available.', title(item) + ' आपके अकाउंट-सिंक संग्रह से हट जाएगा। सार्वजनिक संसाधन उपलब्ध रहेगा।');
    if (modal) { modal.hidden = false; document.body.classList.add('library-modal-open'); }
  };

  window.libraryCancelRemove = function () {
    state.pendingRemove = null;
    var modal = document.getElementById('library-confirm');
    if (modal) modal.hidden = true;
    document.body.classList.remove('library-modal-open');
  };

  window.libraryConfirmRemove = async function () {
    var docId = state.pendingRemove;
    if (!docId || !currentUser) return;
    try {
      await db.collection('users').doc(currentUser.uid).collection('favorites').doc(docId).delete();
      state.items = state.items.filter(function (item) { return item.docId !== docId; });
      window.libraryCancelRemove();
      filterMarkup(); paintGrid();
    } catch (error) {
      console.error('Error removing library item:', error);
      window.alert(tr('Could not remove this item. Please try again.', 'यह सामग्री हट नहीं सकी। फिर प्रयास करें।'));
    }
  };

  window.libraryClearFilters = function () {
    state.filter = 'all'; state.query = '';
    var search = document.getElementById('library-search');
    if (search) search.value = '';
    filterMarkup(); paintGrid();
  };
  window.libraryScrollToSaved = function () { var target = document.getElementById('library-saved'); if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' }); };
  window.libraryScrollToPrivacy = function () { var target = document.getElementById('library-privacy'); if (target) target.scrollIntoView({ behavior: 'smooth', block: 'center' }); };

  document.addEventListener('DOMContentLoaded', function () {
    var navLink = document.querySelector('a[onclick*="showFavorites"]');
    var divineLink = document.querySelector('a[onclick*="divine-sangrah"]');
    if (navLink && divineLink && divineLink.parentElement && navLink.parentElement) divineLink.parentElement.insertAdjacentElement('afterend', navLink.parentElement);
    var languageToggle = document.getElementById('langBtn');
    if (languageToggle) new MutationObserver(function () {
      var section = document.getElementById('favorites-section');
      if (section && section.classList.contains('active')) window.setTimeout(window.showFavorites, 0);
    }).observe(languageToggle, { childList: true, characterData: true, subtree: true });
  });
})();
