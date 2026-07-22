(function () {
  'use strict';

  var RECENT_KEY = 'sfh-global-search-recent-v1';
  var activeType = 'all';
  var activeSort = 'relevance';
  var currentQuery = '';

  var resources = [
    { id:'deity-shiva', type:'deities', icon:'🔱', title:'Shiva', hi:'शिव', summary:'The great yogi and transformer, associated with meditation and the cosmic dance.', keywords:'shiv shivji mahadev bholenath rudra nataraja त्रिमूर्ति महादेव भोलेनाथ रुद्र', action:'text', target:'shiva' },
    { id:'text-puranas', type:'texts', icon:'▤', title:'Puranas', hi:'पुराण', summary:'Sacred narratives, traditions and cosmology, including the Shiva Purana.', keywords:'shiva purana shiv puran sacred text mahapurana शिव पुराण शिवपुराण', action:'text', target:'puranas' },
    { id:'mantra-mrityunjaya', type:'mantras', icon:'◎', title:'Maha Mrityunjaya Mantra', hi:'महामृत्युंजय मंत्र', summary:'A Vedic prayer associated with Shiva, courage and freedom from fear.', keywords:'shiv shiva rudra tryambakam त्र्यम्बकं महामृत्युंजय जप', action:'text', target:'maha-mrityunjaya' },
    { id:'aarti-shiva', type:'aartis', icon:'♨', title:'Shiva Aarti', hi:'शिव आरती', summary:'A complete text-first devotional offering associated with Shiva worship.', keywords:'shiv aarti om jai shiv omkara आरती ॐ जय शिव ओंकारा', action:'text', target:'aarti-shiv' },
    { id:'festival-shivratri', type:'festivals', icon:'☾', title:'Maha Shivratri', hi:'महाशिवरात्रि', summary:'A sacred night of devotion to Shiva; observance and date vary by tradition.', keywords:'shivratri maha shivratri festival vrat mahashivaratri शिवरात्रि व्रत', action:'text', target:'maha-shivratri' },
    { id:'mantra-om', type:'mantras', icon:'ॐ', title:'Om — Pranava', hi:'ॐ प्रणव', summary:'The sacred syllable contemplated across many Sanatan traditions.', keywords:'aum om pranava mantra meditation ओम प्रणव', action:'text', target:'om-mantra' },
    { id:'ritual-puja', type:'rituals', icon:'🪔', title:'Puja Guide', hi:'पूजा विधि', summary:'A respectful beginner overview of preparation, offerings, prayer and closing.', keywords:'pooja worship ritual diya आरती पूजा अनुष्ठान', action:'text', target:'puja' },
    { id:'mantra-gayatri', type:'mantras', icon:'☀', title:'Gayatri Mantra', hi:'गायत्री मंत्र', summary:'A Rigvedic prayer for illumination, reflection and clarity.', keywords:'savitr vedic सूर्य सविता', action:'text', target:'gayatri-mantra' },
    { id:'deity-ganesha', type:'deities', icon:'ॐ', title:'Ganesha', hi:'गणेश', summary:'Lord of beginnings, wisdom and the removal of obstacles.', keywords:'ganesh ganpati vinayak गणपति विनायक', action:'text', target:'ganesha' },
    { id:'aarti-ganesh', type:'aartis', icon:'♨', title:'Ganesh Aarti', hi:'गणेश आरती', summary:'The complete Jai Ganesh Deva Aarti with transliteration and meaning.', keywords:'jai ganesh deva ganpati आरती जय गणेश देवा', action:'text', target:'aarti-ganesh' },
    { id:'aarti-jagdish', type:'aartis', icon:'🪔', title:'Om Jai Jagdish Hare', hi:'ॐ जय जगदीश हरे', summary:'A widely recited Vishnu Aarti presented with full lyrics and meaning.', keywords:'vishnu jagdish narayan arti आरती विष्णु नारायण', action:'text', target:'aarti-jagdish' },
    { id:'text-gita', type:'texts', icon:'▤', title:'Bhagavad Gita', hi:'श्रीमद्भगवद्गीता', summary:'A chapter-based sacred text reader with meaning and context.', keywords:'gita geeta krishna arjuna गीता कृष्ण अर्जुन', action:'text', target:'bhagavad-gita' },
    { id:'text-ramayan', type:'texts', icon:'▤', title:'Ramayan', hi:'रामायण', summary:'Seven Kandas, opening and closing prayers, and complete editions.', keywords:'ramcharitmanas ram sita hanuman रामचरितमानस राम सीता', action:'text', target:'ramayan' },
    { id:'paath-hanuman', type:'texts', icon:'❀', title:'Hanuman Chalisa', hi:'हनुमान चालीसा', summary:'The complete forty Chaupais with Dohas, meaning and transliteration.', keywords:'hanuman chalisa bajrang bali तुलसीदास बजरंगबली', action:'paath', target:'hanuman-chalisa' },
    { id:'festival-calendar', type:'festivals', icon:'▦', title:'Festival Calendar', hi:'पर्व कैलेंडर', summary:'Verified festival dates and observances from 2016 through 2026.', keywords:'calendar dates tyohar त्योहार तिथि कैलेंडर', action:'section', target:'festival-calendar' },
    { id:'panchang', type:'rituals', icon:'◴', title:"Today's Panchang", hi:'आज का पंचांग', summary:'Location-aware Tithi, Nakshatra, Yoga, Karana and daily timings.', keywords:'tithi nakshatra yoga karana calendar पंचांग नक्षत्र करण', action:'section', target:'panchang' },
    { id:'deity-durga', type:'deities', icon:'❀', title:'Durga', hi:'दुर्गा', summary:'The Divine Mother revered as strength, protection and victory over disorder.', keywords:'devi mata ambe goddess दुर्गा माता अम्बे देवी', action:'text', target:'durga' },
    { id:'ritual-yoga', type:'rituals', icon:'♙', title:'Yoga', hi:'योग', summary:'A disciplined path of ethical foundations, movement, breath and contemplation.', keywords:'asana dhyana meditation ध्यान आसन', action:'text', target:'yoga' }
  ];

  var typeLabels = { all:'All', texts:'Sacred Texts', mantras:'Mantras', aartis:'Aartis', deities:'Deities', festivals:'Festivals', rituals:'Rituals & Practices' };
  var typeHi = { all:'सभी', texts:'पवित्र ग्रंथ', mantras:'मंत्र', aartis:'आरती', deities:'देवी-देवता', festivals:'त्योहार', rituals:'अनुष्ठान' };

  function esc(value) {
    return String(value == null ? '' : value).replace(/[&<>'"]/g, function (char) { return ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'})[char]; });
  }
  function jsArg(value) { return encodeURIComponent(String(value == null ? '' : value)).replace(/'/g, '%27'); }
  function normalize(value) { return String(value || '').toLocaleLowerCase().replace(/[\u0900-\u097f]/g, function (c) { return c; }).replace(/[^\p{L}\p{N}\s]/gu, ' ').replace(/\s+/g, ' ').trim(); }
  function isHindi() { return typeof currentLang !== 'undefined' && currentLang === 'hi'; }
  function label(item) { return isHindi() ? item.hi + ' / ' + item.title : item.title + ' / ' + item.hi; }
  function recent() {
    try { var data = JSON.parse(localStorage.getItem(RECENT_KEY) || '[]'); if (Array.isArray(data) && data.length) return data.slice(0, 4); } catch (e) {}
    return ['Bhagavad Gita', 'Hanuman Chalisa', "Today's Panchang"];
  }
  function remember(query) {
    query = String(query || '').trim(); if (!query) return;
    var next = recent().filter(function (x) { return normalize(x) !== normalize(query); });
    next.unshift(query);
    try { localStorage.setItem(RECENT_KEY, JSON.stringify(next.slice(0, 5))); } catch (e) {}
  }
  function score(item, query) {
    var q = normalize(query), hay = normalize([item.title,item.hi,item.summary,item.keywords,typeLabels[item.type]].join(' '));
    if (!q) return 1;
    var tokens = q.split(' '), points = 0;
    tokens.forEach(function (token) {
      if (normalize(item.title) === token || normalize(item.hi) === token) points += 16;
      else if (normalize(item.title).indexOf(token) === 0 || normalize(item.hi).indexOf(token) === 0) points += 10;
      else if (hay.indexOf(token) !== -1) points += 4;
      else points -= 20;
    });
    if (hay.indexOf(q) !== -1) points += 7;
    return points;
  }
  function getMatches(query, type) {
    var q = normalize(query);
    return resources.map(function (item, index) { return { item:item, points:score(item,q), index:index }; })
      .filter(function (row) { return (!type || type === 'all' || row.item.type === type) && (!q || row.points > 0); })
      .sort(function (a,b) {
        if (activeSort === 'az') return a.item.title.localeCompare(b.item.title);
        return b.points - a.points || a.index - b.index;
      }).map(function (row) { return row.item; });
  }
  function exact(item, query) {
    var q = normalize(query); return q && (normalize(item.title) === q || normalize(item.hi) === q || normalize(item.keywords).split(' ').indexOf(q) !== -1);
  }
  function resultCard(item, query, compact) {
    return '<article class="sfh-search-result-card' + (compact ? ' is-compact' : '') + '" data-search-type="' + item.type + '">' +
      '<button type="button" class="sfh-search-result-main" onclick="openSearchResource(\'' + item.id + '\')">' +
      '<span class="sfh-search-result-icon" aria-hidden="true">' + item.icon + '</span><span class="sfh-search-result-copy"><small>' + esc(typeLabels[item.type]) + '</small><strong>' + esc(label(item)) + '</strong><span>' + esc(item.summary) + '</span></span>' +
      (exact(item,query) ? '<em>Exact match</em>' : '<b>' + esc(typeLabels[item.type].replace(' & Practices','')) + '</b>') + '<i>›</i></button>' +
      (!compact ? '<button class="sfh-search-save" type="button" aria-label="Save ' + esc(item.title) + '" onclick="event.stopPropagation();this.classList.toggle(\'saved\');this.textContent=this.classList.contains(\'saved\')?\'♥\':\'♡\'">♡</button>' : '') + '</article>';
  }

  window.openSearchResource = function (id) {
    var item = resources.find(function (entry) { return entry.id === id; }); if (!item) return;
    closeGlobalSearch(); closeMobileNav();
    if (item.action === 'section') showSection(item.target);
    else if (item.action === 'paath') { showSection('paathmandir'); window.setTimeout(function () { showPaath(item.target); }, 80); }
    else { var parent = item.type === 'texts' ? 'texts' : item.type === 'mantras' ? 'mantras' : item.type === 'aartis' ? 'aarti' : item.type === 'deities' ? 'deities' : item.type === 'rituals' ? 'rituals' : 'festivals'; showSection(parent); window.setTimeout(function () { showText(item.target); }, 35); }
  };

  function searchIcon() { return '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.8"></circle><path d="m16 16 4.8 4.8"></path></svg>'; }
  function recentMarkup() {
    return recent().map(function (item) { var encoded=jsArg(item);return '<li><button type="button" onclick="searchFromSuggestion(decodeURIComponent(\'' + encoded + '\'))"><span>◷</span>' + esc(item) + '</button><button type="button" aria-label="Remove recent search" onclick="removeRecentSearch(decodeURIComponent(\'' + encoded + '\'))">×</button></li>'; }).join('');
  }
  function overlayResults(query) {
    var matches = getMatches(query,'all').slice(0,6), title = query ? 'Results for ‘' + esc(query) + '’' : 'Popular resources';
    if (!matches.length) return '<div class="sfh-search-overlay-results"><h2>' + title + '</h2><div class="sfh-search-no-results">' + searchIcon() + '<div><strong>No results found for ‘' + esc(query) + '’.</strong><span>Check the spelling, try Hindi, English or Roman transliteration, or browse categories.</span></div></div></div>';
    return '<div class="sfh-search-overlay-results"><h2>' + title + '</h2><div class="sfh-search-overlay-grid">' + matches.map(function (item) { return resultCard(item,query,true); }).join('') + '</div></div>';
  }
  function buildOverlay() {
    var overlay = document.createElement('div'); overlay.id = 'sfh-global-search'; overlay.className = 'sfh-global-search'; overlay.hidden = true;
    overlay.innerHTML = '<div class="sfh-search-backdrop" onclick="closeGlobalSearch()"></div><section class="sfh-search-dialog" role="dialog" aria-modal="true" aria-labelledby="sfh-search-title">' +
      '<header><div class="sfh-search-mobile-brand"><span>❀</span><strong id="sfh-search-title">Search Sanatan</strong></div><button class="sfh-search-close-mobile" type="button" onclick="closeGlobalSearch()"><span>×</span>Close</button></header>' +
      '<div class="sfh-search-input-row"><label>' + searchIcon() + '<input id="sfh-search-input" type="search" autocomplete="off" placeholder="Search Sanatan for Humanity" aria-label="Search Sanatan for Humanity"><button type="button" onclick="clearGlobalSearch()" aria-label="Clear search">×</button></label><button type="button" class="sfh-search-esc" onclick="closeGlobalSearch()">×<small>Esc</small></button></div>' +
      '<div class="sfh-search-hint"><span>Search in Hindi, English or Roman transliteration</span><b>शिव&nbsp; · &nbsp;Shiva&nbsp; · &nbsp;shiv</b></div>' +
      '<div class="sfh-search-discovery"><section><div class="sfh-search-mini-head"><h2>Recent Searches</h2><button onclick="clearRecentSearches()">▧ Clear recent searches</button></div><ul id="sfh-recent-searches">' + recentMarkup() + '</ul></section><section><h2>Suggested Searches</h2><div class="sfh-search-suggestions">' + ['Gayatri Mantra','Maha Shivratri','Aarti Sangrah','Puja Guide'].map(function(x){return '<button type="button" onclick="searchFromSuggestion(\''+x+'\')">⌕ '+x+'</button>';}).join('') + '</div></section></div>' +
      '<div id="sfh-overlay-results">' + overlayResults('') + '</div><div class="sfh-search-overlay-actions"><button type="button" onclick="openFullSearchResults()">❀ View all results</button><button type="button" onclick="openFullSearchResults(true)">Search exact phrase</button></div>' +
      '<footer><span>⌨ Keyboard shortcuts</span><kbd>↑ ↓</kbd> Navigate <kbd>Enter</kbd> Open <kbd>Esc</kbd> Close <kbd>Ctrl K</kbd> Search <small>Search stays within Sanatan for Humanity.</small></footer></section>';
    document.body.appendChild(overlay);
    var input = document.getElementById('sfh-search-input');
    input.addEventListener('input', function () { currentQuery = input.value.trim(); document.getElementById('sfh-overlay-results').innerHTML = overlayResults(currentQuery); });
    input.addEventListener('keydown', function (event) { if (event.key === 'Enter') openFullSearchResults(); });
  }
  window.openGlobalSearch = function (query) {
    closeMobileNav(); var overlay = document.getElementById('sfh-global-search'); if (!overlay) return;
    overlay.hidden = false; document.body.classList.add('sfh-overlay-open');
    var input = document.getElementById('sfh-search-input'); input.value = query || ''; currentQuery = input.value.trim();
    document.getElementById('sfh-overlay-results').innerHTML = overlayResults(currentQuery); window.setTimeout(function(){input.focus();input.select();},35);
  };
  window.closeGlobalSearch = function () { var overlay=document.getElementById('sfh-global-search');if(overlay)overlay.hidden=true;document.body.classList.remove('sfh-overlay-open'); };
  window.clearGlobalSearch = function () { var input=document.getElementById('sfh-search-input');if(input){input.value='';input.focus();}currentQuery='';document.getElementById('sfh-overlay-results').innerHTML=overlayResults(''); };
  window.searchFromSuggestion = function (query) { var input=document.getElementById('sfh-search-input');if(input){input.value=query;input.dispatchEvent(new Event('input'));input.focus();} };
  window.removeRecentSearch = function (item) { try{localStorage.setItem(RECENT_KEY,JSON.stringify(recent().filter(function(x){return x!==item;})));}catch(e){} var list=document.getElementById('sfh-recent-searches');if(list)list.innerHTML=recentMarkup(); };
  window.clearRecentSearches = function () { try{localStorage.setItem(RECENT_KEY,'[]');}catch(e){} var list=document.getElementById('sfh-recent-searches');if(list)list.innerHTML='<li class="empty">No recent searches yet.</li>'; };

  function resultSectionMarkup() {
    return '<div id="search-results" class="section"><div class="sfh-results-page"><nav class="sfh-results-breadcrumb"><button onclick="showSection(\'home\')">Home</button><span>/</span><strong>Search Results</strong></nav>' +
      '<form class="sfh-results-search" onsubmit="event.preventDefault();runResultsSearch()"><label>' + searchIcon() + '<input id="sfh-results-input" type="search" placeholder="Search in Hindi, English or Roman transliteration"><button type="button" onclick="clearResultsSearch()">×</button></label><button>Search</button></form>' +
      '<header class="sfh-results-title"><div><p>Verified site content</p><h1>Search results for <span id="sfh-results-query">‘shiv’</span></h1><small>Results from sacred texts, mantras, Aartis, deities, festivals and practices.</small></div><b id="sfh-results-count"></b></header>' +
      '<div class="sfh-results-tabs" id="sfh-results-tabs">' + Object.keys(typeLabels).map(function(type){return '<button type="button" data-type="'+type+'" onclick="setSearchType(\''+type+'\',this)">'+typeLabels[type]+'</button>';}).join('') + '</div>' +
      '<div class="sfh-results-mobile-tools"><button type="button" onclick="toggleSearchFilters(true)">☷ Filters <b id="sfh-mobile-filter-count"></b></button><label>Sort by: <select onchange="setSearchSort(this.value)"><option value="relevance">Relevance</option><option value="az">A–Z</option></select></label></div>' +
      '<div class="sfh-results-layout"><aside class="sfh-results-filters"><h2>Refine Results</h2><fieldset><legend>Resource Type</legend>' + Object.keys(typeLabels).filter(function(x){return x!=='all';}).map(function(type){return '<label><input type="radio" name="sfh-filter-desktop" value="'+type+'" onchange="setSearchType(\''+type+'\')"> '+typeLabels[type]+'</label>';}).join('') + '<label><input type="radio" name="sfh-filter-desktop" value="all" onchange="setSearchType(\'all\')" checked> All resources</label></fieldset><fieldset><legend>Availability</legend><label><input type="checkbox" checked disabled> Available on this site</label><label><input type="checkbox" checked disabled> Text-first resources</label></fieldset><button type="button" onclick="resetSearchFilters()">Clear Filters</button></aside>' +
      '<main><div class="sfh-results-sort"><span id="sfh-results-status">Relevant matches</span><label>Sort by <select onchange="setSearchSort(this.value)"><option value="relevance">Relevance</option><option value="az">A–Z</option></select></label></div><div id="sfh-results-list" class="sfh-results-list"></div><button id="sfh-load-more" class="sfh-load-more" type="button" onclick="loadMoreSearchResults()">Load More⌄</button></main>' +
      '<aside class="sfh-results-assist"><section><h2>Search Suggestions</h2>' + ['Maha Shivratri','Maha Mrityunjaya Mantra','Shiva Aarti','Om — Pranava'].map(function(x){return '<button onclick="runSuggestedResults(\''+x+'\')">⌕ '+x+'</button>';}).join('') + '</section><section><h2>Spelling helper</h2><p>Searching for ‘shiav’?</p><button onclick="runSuggestedResults(\'Shiva\')">Did you mean Shiva / शिव?</button></section><section><h2>Browse by resource</h2><button onclick="showSection(\'texts\')">Sacred Texts →</button><button onclick="showSection(\'mantras\')">Mantras →</button><button onclick="showSection(\'deities\')">Deities →</button></section></aside></div></div>' +
      '<div class="sfh-filter-backdrop" onclick="toggleSearchFilters(false)"></div><aside class="sfh-filter-sheet"><span></span><header><h2>Filter results</h2><button onclick="toggleSearchFilters(false)">×</button></header><fieldset><legend>Resource type</legend>' + Object.keys(typeLabels).filter(function(x){return x!=='all';}).map(function(type){return '<label><input type="radio" name="sfh-filter-mobile" value="'+type+'"> '+typeLabels[type]+'</label>';}).join('') + '</fieldset><div><button onclick="applyMobileSearchFilter()">Apply Filters</button><button onclick="resetSearchFilters();toggleSearchFilters(false)">Clear</button></div></aside></div>';
  }
  var visibleLimit = 8;
  function renderResults() {
    var matches=getMatches(currentQuery,activeType), list=document.getElementById('sfh-results-list');if(!list)return;
    var shown=matches.slice(0,visibleLimit), title=document.getElementById('sfh-results-query'), count=document.getElementById('sfh-results-count');
    if(title)title.textContent='‘'+(currentQuery||'All resources')+'’';if(count)count.textContent=matches.length+' verified '+(matches.length===1?'result':'results');
    if(!matches.length){list.innerHTML='<div class="sfh-results-empty">'+searchIcon()+'<h2>No matching resources found</h2><p>Try a different spelling, Hindi, English or Roman transliteration.</p><div><button onclick="showSection(\'texts\')">Sacred Texts</button><button onclick="showSection(\'mantras\')">Mantras</button><button onclick="showSection(\'deities\')">Deities</button></div></div>';}else{list.innerHTML=shown.map(function(item,index){return resultCard(item,currentQuery,index>0);}).join('');}
    var more=document.getElementById('sfh-load-more');if(more){more.hidden=matches.length<=visibleLimit;more.textContent='Load More · '+(matches.length-visibleLimit)+' remaining⌄';}
    document.querySelectorAll('#sfh-results-tabs button').forEach(function(button){button.classList.toggle('active',button.dataset.type===activeType);});
    var mobileCount=document.getElementById('sfh-mobile-filter-count');if(mobileCount)mobileCount.textContent=activeType==='all'?'':'1';
  }
  window.openFullSearchResults = function () {
    var input=document.getElementById('sfh-search-input');currentQuery=(input?input.value:currentQuery).trim()||'shiv';remember(currentQuery);closeGlobalSearch();showSection('search-results');
    var resultInput=document.getElementById('sfh-results-input');if(resultInput)resultInput.value=currentQuery;activeType='all';visibleLimit=8;renderResults();window.scrollTo({top:0,behavior:'smooth'});
  };
  window.runResultsSearch = function(){var input=document.getElementById('sfh-results-input');currentQuery=input?input.value.trim():'';remember(currentQuery);activeType='all';visibleLimit=8;renderResults();};
  window.clearResultsSearch = function(){var input=document.getElementById('sfh-results-input');if(input){input.value='';input.focus();}currentQuery='';renderResults();};
  window.runSuggestedResults = function(query){var input=document.getElementById('sfh-results-input');if(input)input.value=query;currentQuery=query;activeType='all';visibleLimit=8;renderResults();};
  window.setSearchType = function(type){activeType=type||'all';visibleLimit=8;document.querySelectorAll('[name="sfh-filter-desktop"]').forEach(function(input){input.checked=input.value===activeType;});renderResults();};
  window.setSearchSort = function(value){activeSort=value==='az'?'az':'relevance';renderResults();};
  window.resetSearchFilters = function(){activeType='all';visibleLimit=8;document.querySelectorAll('[name^="sfh-filter-"]').forEach(function(input){input.checked=input.value==='all';});renderResults();};
  window.loadMoreSearchResults = function(){visibleLimit+=8;renderResults();};
  window.toggleSearchFilters = function(open){document.body.classList.toggle('sfh-filters-open',!!open);};
  window.applyMobileSearchFilter = function(){var selected=document.querySelector('[name="sfh-filter-mobile"]:checked');activeType=selected?selected.value:'all';visibleLimit=8;toggleSearchFilters(false);renderResults();};

  function installHeaderSearch() {
    var utilities=document.querySelector('.site-header .header-top-bar');if(!utilities||document.querySelector('.global-search-launch'))return;
    var button=document.createElement('button');button.type='button';button.className='global-search-launch';button.setAttribute('aria-label','Open global search');button.innerHTML=searchIcon()+'<kbd>⌘ K</kbd>';button.onclick=function(){openGlobalSearch();};utilities.insertBefore(button,utilities.firstChild);
  }
  document.addEventListener('keydown',function(event){if((event.ctrlKey||event.metaKey)&&event.key.toLowerCase()==='k'){event.preventDefault();openGlobalSearch();}if(event.key==='Escape'){closeGlobalSearch();toggleSearchFilters(false);}});
  document.addEventListener('DOMContentLoaded',function(){buildOverlay();var holder=document.querySelector('.container');if(holder)holder.insertAdjacentHTML('beforeend',resultSectionMarkup());installHeaderSearch();});
})();
