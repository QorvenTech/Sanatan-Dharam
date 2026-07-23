(function () {
  'use strict';

  var IDS = ['brahma', 'vishnu', 'shiva', 'krishna', 'rama', 'durga', 'lakshmi', 'saraswati', 'ganesha', 'hanuman'];
  window.deityReaderIds = IDS.slice();

  function pair(en, hi) { return { en: en, hi: hi }; }
  function item(title, titleHi, body, bodyHi, icon) {
    return { title: title, titleHi: titleHi, body: body, bodyHi: bodyHi, icon: icon || 'lotus' };
  }

  var D = {
    brahma: {
      title: 'Brahma', titleHi: 'ब्रह्मा', honorific: 'Lord Brahma', honorificHi: 'भगवान ब्रह्मा', category: 'trimurti', categoryLabel: pair('Trimurti', 'त्रिमूर्ति'), image: 'assets/deity-brahma.webp',
      subtitle: pair('Associated with creation, sacred knowledge and the Vedas.', 'सृष्टि, पवित्र ज्ञान और वेदों से संबद्ध।'), tradition: pair('Vedic and Puranic traditions', 'वैदिक और पौराणिक परंपराएँ'),
      overview: pair('Brahma is presented in many traditions as the creator within the Trimurti. His four faces are commonly interpreted in relation to universal vision, the four directions or the four Vedas; explanations vary across texts and regions.', 'ब्रह्मा को अनेक परंपराओं में त्रिमूर्ति के सृष्टिकर्ता रूप में समझा जाता है। उनके चार मुखों को चार दिशाओं, चार वेदों या व्यापक दृष्टि से जोड़ा जाता है; व्याख्याएँ ग्रंथ और क्षेत्र के अनुसार बदलती हैं।'),
      themes: [item('Sacred Knowledge', 'पवित्र ज्ञान', 'The Vedic book and rosary connect Brahma with learning, recitation and disciplined attention.', 'वेद-पुस्तक और माला उन्हें ज्ञान, पाठ और अनुशासित मनन से जोड़ते हैं.', 'book'), item('Creation & Order', 'सृष्टि और व्यवस्था', 'Creation is shown as an ordered unfolding rather than a single historical event.', 'सृष्टि को केवल एक घटना नहीं, बल्कि व्यवस्थित प्रकट होने की प्रक्रिया के रूप में भी समझा जाता है.', 'lotus'), item('Fourfold Vision', 'चतुर्मुख दृष्टि', 'Four faces express an all-directional vision in widely known iconography.', 'चार मुख व्यापक और सर्वदिशात्मक दृष्टि के प्रसिद्ध प्रतीक हैं.', 'eye')],
      icons: [item('Four faces', 'चार मुख', 'Universal vision; often linked with the four directions or Vedas.', 'व्यापक दृष्टि; प्रायः चार दिशाओं या वेदों से जुड़ा।', 'faces'), item('Kamandalu', 'कमंडल', 'Ritual water vessel associated with purity and creation.', 'पवित्रता और सृष्टि से जुड़ा जलपात्र।', 'vessel'), item('Vedic text & rosary', 'वेद-पुस्तक और माला', 'Knowledge, recitation and contemplation.', 'ज्ञान, जप और मनन।', 'book'), item('Hamsa', 'हंस', 'Traditional vahana, often associated with discernment.', 'पारंपरिक वाहन, जिसे विवेक से जोड़ा जाता है।', 'bird')],
      stories: [item('The Lotus of Creation', 'सृष्टि का कमल', 'Puranic narratives describe Brahma appearing upon a lotus associated with Vishnu.', 'पौराणिक कथाओं में ब्रह्मा का विष्णु से जुड़े कमल पर प्रकट होना वर्णित है.', 'lotus'), item('The Four Kumaras', 'चार कुमार', 'Accounts of the mind-born sages explore renunciation, knowledge and the limits of expectation.', 'मानस-पुत्र कुमारों की कथाएँ वैराग्य, ज्ञान और अपेक्षा की सीमाओं पर विचार करती हैं.', 'book')],
      teachings: [item('Responsible creation', 'उत्तरदायी सृजन', 'Creativity is joined with order and responsibility.', 'सृजनशीलता व्यवस्था और उत्तरदायित्व से जुड़ी है.', 'lotus'), item('Study with humility', 'विनय सहित अध्ययन', 'Knowledge is approached through attention and humility.', 'ज्ञान को ध्यान और विनय के साथ ग्रहण किया जाता है.', 'book'), item('Discernment', 'विवेक', 'The hamsa recalls the value of careful distinction.', 'हंस सावधानीपूर्वक विवेक का स्मरण कराता है.', 'bird')],
      festival: pair('Brahmotsava and regional observances', 'ब्रह्मोत्सव और क्षेत्रीय आयोजन'), festivalNote: pair('Observances vary greatly by temple and region.', 'आयोजन मंदिर और क्षेत्र के अनुसार बहुत भिन्न होते हैं।'),
      mantras: [{ id: 'gayatri-mantra', title: 'Gayatri Mantra', titleHi: 'गायत्री मंत्र' }], related: ['vishnu', 'shiva', 'saraswati'],
      sourceUrl: 'https://www.metmuseum.org/art/collection/search/825648', sourceName: 'The Met — Raga Brahma'
    },
    vishnu: {
      title: 'Vishnu', titleHi: 'विष्णु', honorific: 'Lord Vishnu', honorificHi: 'भगवान विष्णु', category: 'trimurti', categoryLabel: pair('Trimurti', 'त्रिमूर्ति'), image: 'assets/deity-vishnu.webp',
      subtitle: pair('Preserver of cosmic order, revered through many traditions and forms.', 'ब्रह्मांडीय व्यवस्था के पालक, अनेक परंपराओं और स्वरूपों में पूजित।'), tradition: pair('Vaishnava traditions', 'वैष्णव परंपराएँ'),
      overview: pair('Vishnu is revered as the preserver and sustainer of cosmic order. Vaishnava traditions contain diverse theologies, lineages and devotional forms, including the avatar traditions of Rama and Krishna.', 'विष्णु को ब्रह्मांडीय व्यवस्था के पालक और संरक्षक रूप में पूजित किया जाता है। वैष्णव परंपराओं में विविध दर्शन, संप्रदाय और राम-कृष्ण सहित अवतार परंपराएँ हैं।'),
      themes: [item('Protection of Dharma', 'धर्म की रक्षा', 'Vishnu represents preservation, balance and timely protection.', 'विष्णु संरक्षण, संतुलन और उचित समय पर रक्षा का प्रतीक हैं.', 'shield'), item('Compassionate Presence', 'करुणामय उपस्थिति', 'Avatar traditions describe the Divine meeting the needs of different ages.', 'अवतार परंपराएँ विभिन्न युगों की आवश्यकता के अनुसार दिव्य उपस्थिति का वर्णन करती हैं.', 'lotus'), item('Cosmic Order', 'ब्रह्मांडीय व्यवस्था', 'The chakra evokes ordered movement and the passage of time.', 'चक्र क्रमबद्ध गति और काल की धारा का स्मरण कराता है.', 'chakra')],
      icons: [item('Chakra', 'सुदर्शन चक्र', 'Discus associated with protection, order and clarity.', 'रक्षा, व्यवस्था और स्पष्टता से जुड़ा चक्र।', 'chakra'), item('Shankha', 'शंख', 'Conch associated with sacred sound and proclamation.', 'पवित्र ध्वनि और उद्घोष से जुड़ा शंख।', 'conch'), item('Gada', 'गदा', 'Strength used in the service of order.', 'व्यवस्था की सेवा में प्रयुक्त शक्ति।', 'mace'), item('Padma', 'कमल', 'Purity and spiritual unfolding.', 'पवित्रता और आध्यात्मिक विकास।', 'lotus')],
      stories: [item('Samudra Manthana', 'समुद्र मंथन', 'The churning of the ocean gathers many deities, beings and symbols around the search for amrita.', 'समुद्र मंथन की कथा अमृत की खोज में अनेक देवताओं, प्राणियों और प्रतीकों को साथ लाती है.', 'vessel'), item('The Avatar Traditions', 'अवतार परंपराएँ', 'Narratives of Vishnu’s avatars explore the restoration of dharma in different circumstances.', 'विष्णु के अवतारों की कथाएँ विभिन्न परिस्थितियों में धर्म की पुनर्स्थापना पर विचार करती हैं.', 'lotus')],
      teachings: [item('Steadiness', 'स्थिरता', 'Preservation requires patience and sustained care.', 'संरक्षण के लिए धैर्य और निरंतर देखभाल आवश्यक है.', 'shield'), item('Dharma in action', 'कर्म में धर्म', 'Right action is attentive to circumstance and consequence.', 'सही कर्म परिस्थिति और परिणाम दोनों के प्रति सजग होता है.', 'chakra'), item('Compassion', 'करुणा', 'Strength is joined with protection and benevolence.', 'शक्ति को संरक्षण और कल्याण से जोड़ा जाता है.', 'lotus')],
      festival: pair('Vaikuntha Ekadashi', 'वैकुंठ एकादशी'), festivalNote: pair('Dates follow the lunar calendar and regional observance.', 'तिथियाँ चंद्र पंचांग और क्षेत्रीय परंपरा के अनुसार होती हैं।'),
      mantras: [{ id: 'om-mantra', title: 'Om — Pranava', titleHi: 'ॐ प्रणव' }], related: ['brahma', 'rama', 'krishna'],
      sourceUrl: 'https://www.metmuseum.org/art/collection/search/38558', sourceName: 'The Met — Standing Four-Armed Vishnu'
    },
    shiva: {
      title: 'Shiva', titleHi: 'शिव', honorific: 'Lord Shiva', honorificHi: 'भगवान शिव', category: 'trimurti', categoryLabel: pair('Trimurti', 'त्रिमूर्ति'), image: 'assets/deity-shiva.webp', hero: 'assets/deity-shiva-hero.webp',
      subtitle: pair('Revered as the great yogi, transformer and lord of the cosmic dance.', 'महायोगी, रूपांतरणकर्ता और ब्रह्मांडीय नृत्य के स्वामी के रूप में पूजित।'), tradition: pair('Shaiva traditions', 'शैव परंपराएँ'),
      overview: pair('Shiva is honoured in many traditions as yogi, householder, teacher and cosmic transformer. Understandings differ across Shaiva, Smarta and regional traditions, expressed through diverse philosophies, stories and practices.', 'शिव को अनेक परंपराओं में योगी, गृहस्थ, गुरु और ब्रह्मांडीय रूपांतरणकर्ता के रूप में सम्मानित किया जाता है। शैव, स्मार्त और क्षेत्रीय परंपराओं में उनके विविध दर्शन, कथाएँ और साधनाएँ मिलती हैं।'),
      themes: [item('Stillness & Meditation', 'स्थिरता और ध्यान', 'Shiva represents inward stillness leading to clarity and awareness.', 'शिव अंतर्मुखी स्थिरता का प्रतीक हैं, जो स्पष्टता और जागरूकता की ओर ले जाती है.', 'meditation'), item('Transformation & Renewal', 'रूपांतरण और नवीकरण', 'Dissolution makes space for renewal and is part of a larger rhythm.', 'विलय नवीकरण के लिए स्थान बनाता है और व्यापक लय का भाग है.', 'flame'), item('Cosmic Rhythm', 'ब्रह्मांडीय लय', 'As Nataraja, Shiva embodies creation, preservation and dissolution in motion.', 'नटराज रूप में शिव सृष्टि, स्थिति और लय की गतिशीलता को धारण करते हैं.', 'damaru')],
      icons: [item('Trishula', 'त्रिशूल', 'A many-layered symbol interpreted differently across traditions.', 'बहुस्तरीय प्रतीक, जिसकी व्याख्या परंपरा के अनुसार बदलती है।', 'trident'), item('Damaru', 'डमरू', 'Rhythm and primordial sound.', 'लय और आदिम ध्वनि।', 'damaru'), item('Crescent moon', 'अर्धचंद्र', 'Time, cyclical renewal and composure.', 'काल, चक्रीय नवीकरण और संतुलन।', 'moon'), item('Third eye', 'तीसरा नेत्र', 'Insight and discernment beyond ordinary sight.', 'सामान्य दृष्टि से परे अंतर्दृष्टि और विवेक।', 'eye'), item('Ganga', 'गंगा', 'The sacred river held in Shiva narratives.', 'शिव कथाओं में धारण की गई पवित्र नदी।', 'river'), item('Nandi', 'नंदी', 'Devoted companion and guardian in temple tradition.', 'मंदिर परंपरा में समर्पित साथी और द्वारपाल।', 'bull')],
      stories: [item('The Descent of Ganga', 'गंगा का अवतरण', 'Shiva receives the heavenly river in his matted locks so its descent can be moderated.', 'शिव स्वर्गीय गंगा को अपनी जटाओं में धारण कर उसके वेग को संयमित करते हैं.', 'river'), item('Samudra Manthana and Neelkanth', 'समुद्र मंथन और नीलकंठ', 'Shiva consumes the poison that emerges during the churning, holding it in his throat for the welfare of all.', 'समुद्र मंथन से निकले विष को शिव लोक-कल्याण के लिए कंठ में धारण करते हैं.', 'vessel'), item('Nataraja: the Cosmic Dance', 'नटराज: ब्रह्मांडीय नृत्य', 'The dancing form brings together rhythm, creation, concealment and liberation.', 'नृत्य रूप लय, सृष्टि, तिरोभाव और मुक्ति को एक साथ प्रस्तुत करता है.', 'damaru')],
      teachings: [item('Self-discipline', 'आत्म-अनुशासन', 'Restraint and disciplined living support spiritual growth.', 'संयम और अनुशासित जीवन आध्यात्मिक विकास का आधार बनते हैं.', 'lotus'), item('Inner stillness', 'अंतर की स्थिरता', 'Meditation cultivates awareness without forcing experience.', 'ध्यान अनुभव को बाध्य किए बिना जागरूकता विकसित करता है.', 'meditation'), item('Renunciation and responsibility', 'वैराग्य और उत्तरदायित्व', 'Shiva narratives hold ascetic freedom beside household responsibility.', 'शिव कथाएँ तपस्वी स्वतंत्रता और गृहस्थ उत्तरदायित्व दोनों को साथ रखती हैं.', 'balance')],
      festival: pair('Maha Shivratri', 'महाशिवरात्रि'), festivalNote: pair('A sacred night observed through fasting, prayer and night-long worship in many communities.', 'अनेक समुदायों में उपवास, प्रार्थना और रात्रि-जागरण से मनाई जाने वाली पवित्र रात्रि।'),
      mantras: [{ id: 'maha-mrityunjaya', title: 'Maha Mrityunjaya Mantra', titleHi: 'महामृत्युंजय मंत्र' }, { id: 'om-mantra', title: 'Om — Pranava', titleHi: 'ॐ प्रणव' }], related: ['vishnu', 'ganesha', 'durga'],
      sourceUrl: 'https://www.metmuseum.org/art/collection/search/38127', sourceName: 'The Met — Shiva as Mrityunjaya'
    },
    krishna: {
      title: 'Krishna', titleHi: 'कृष्ण', honorific: 'Lord Krishna', honorificHi: 'भगवान कृष्ण', category: 'avatar', categoryLabel: pair('Avatar', 'अवतार'), image: 'assets/deity-krishna.webp',
      subtitle: pair('Teacher of the Bhagavad Gita, honoured through wisdom, devotion and divine play.', 'भगवद्गीता के उपदेशक, ज्ञान, भक्ति और लीला के माध्यम से पूजित।'), tradition: pair('Vaishnava and Krishna traditions', 'वैष्णव और कृष्ण परंपराएँ'),
      overview: pair('Krishna is revered as an avatar of Vishnu and, in many traditions, as the Supreme Divine. His narratives range from pastoral childhood and loving devotion to the philosophical teaching of the Bhagavad Gita.', 'कृष्ण को विष्णु के अवतार और अनेक परंपराओं में परम दिव्य स्वरूप के रूप में पूजित किया जाता है। उनकी कथाएँ बाल-लीला और प्रेम-भक्ति से लेकर भगवद्गीता के दार्शनिक उपदेश तक विस्तृत हैं।'),
      themes: [item('Divine Love', 'दिव्य प्रेम', 'Bhakti traditions approach Krishna through loving remembrance and service.', 'भक्ति परंपराएँ प्रेमपूर्ण स्मरण और सेवा से कृष्ण के निकट जाती हैं.', 'lotus'), item('Wisdom in Action', 'कर्म में ज्ञान', 'The Gita explores responsibility, discernment and freedom from possessive attachment.', 'गीता उत्तरदायित्व, विवेक और आसक्ति से स्वतंत्र कर्म पर विचार करती है.', 'book'), item('Lila', 'लीला', 'Sacred play reveals intimacy, joy and mystery.', 'पवित्र लीला निकटता, आनंद और रहस्य को प्रकट करती है.', 'flute')],
      icons: [item('Flute', 'बाँसुरी', 'The call of divine love and inner attentiveness.', 'दिव्य प्रेम और अंतर्मुखी सजगता का आह्वान।', 'flute'), item('Peacock feather', 'मोरपंख', 'A widely recognised sign of Krishna’s pastoral form.', 'कृष्ण के गोपाल स्वरूप का प्रसिद्ध चिह्न।', 'feather'), item('Cow', 'गौ', 'Care, pastoral life and the Govinda tradition.', 'पालन, गोपाल जीवन और गोविंद परंपरा।', 'cow'), item('Yellow garment', 'पीतांबर', 'A familiar feature in devotional imagery.', 'भक्ति चित्रण में प्रसिद्ध विशेषता।', 'cloth')],
      stories: [item('Govardhan', 'गोवर्धन', 'Krishna shelters the community beneath Govardhan, a story of protection and devotion.', 'कृष्ण गोवर्धन के नीचे समुदाय को आश्रय देते हैं—रक्षा और भक्ति की कथा.', 'mountain'), item('The Bhagavad Gita', 'भगवद्गीता', 'Krishna counsels Arjuna on action, knowledge, devotion and the nature of the Self.', 'कृष्ण अर्जुन को कर्म, ज्ञान, भक्ति और आत्मस्वरूप का उपदेश देते हैं.', 'book')],
      teachings: [item('Act without possessiveness', 'अनासक्त कर्म', 'Offer action while loosening the claim over results.', 'कर्म करें और फल पर स्वामित्व की पकड़ ढीली करें.', 'chakra'), item('Devotion', 'भक्ति', 'Loving remembrance can become a disciplined path.', 'प्रेमपूर्ण स्मरण एक अनुशासित मार्ग बन सकता है.', 'lotus'), item('Discernment', 'विवेक', 'Wisdom helps distinguish duty, impulse and consequence.', 'ज्ञान कर्तव्य, आवेग और परिणाम में भेद करना सिखाता है.', 'eye')],
      festival: pair('Janmashtami', 'जन्माष्टमी'), festivalNote: pair('Krishna’s birth is celebrated with fasting, singing, readings and midnight worship.', 'कृष्ण जन्म उपवास, कीर्तन, पाठ और मध्यरात्रि पूजा से मनाया जाता है।'),
      mantras: [{ id: 'bhagavad-gita', title: 'Read Bhagavad Gita', titleHi: 'भगवद्गीता पढ़ें' }], related: ['vishnu', 'rama', 'hanuman'],
      sourceUrl: 'https://www.metmuseum.org/art/collection/search/838326', sourceName: 'The Met — Krishna Playing the Flute'
    },
    rama: {
      title: 'Rama', titleHi: 'राम', honorific: 'Lord Rama', honorificHi: 'भगवान राम', category: 'avatar', categoryLabel: pair('Avatar', 'अवतार'), image: 'assets/deity-rama.webp',
      subtitle: pair('Hero of the Ramayana, remembered for dharma, courage and ideal conduct.', 'रामायण के नायक, धर्म, साहस और मर्यादा के लिए स्मरण किए जाते हैं।'), tradition: pair('Vaishnava and Ram traditions', 'वैष्णव और राम परंपराएँ'),
      overview: pair('Rama is revered as an avatar of Vishnu and as Maryada Purushottama, an exemplar of principled conduct. Ramayana traditions are diverse and invite reflection on duty, kingship, relationship, loss and devotion.', 'राम को विष्णु के अवतार और मर्यादा पुरुषोत्तम रूप में पूजित किया जाता है। विविध रामायण परंपराएँ कर्तव्य, शासन, संबंध, विरह और भक्ति पर विचार कराती हैं।'),
      themes: [item('Maryada', 'मर्यादा', 'Principled conduct shaped by duty and relationship.', 'कर्तव्य और संबंधों से निर्मित आचरण की मर्यादा.', 'bow'), item('Courage', 'साहस', 'Strength is tested through exile, uncertainty and responsibility.', 'वनवास, अनिश्चितता और उत्तरदायित्व में शक्ति की परीक्षा होती है.', 'shield'), item('Dharma', 'धर्म', 'The epic repeatedly examines difficult choices rather than simple formulas.', 'महाकाव्य सरल सूत्रों के बजाय कठिन निर्णयों की पड़ताल करता है.', 'balance')],
      icons: [item('Bow', 'धनुष', 'Readiness, protection and disciplined strength.', 'सज्जता, रक्षा और अनुशासित शक्ति।', 'bow'), item('Arrow & quiver', 'बाण और तरकश', 'Focused action and preparedness.', 'एकाग्र कर्म और तैयारी।', 'arrow'), item('Royal crown', 'राजमुकुट', 'Kingship understood as responsibility and service.', 'उत्तरदायित्व और सेवा रूपी राजधर्म।', 'crown'), item('Ayodhya', 'अयोध्या', 'Sacred city central to Rama traditions.', 'राम परंपराओं का प्रमुख पवित्र नगर।', 'temple')],
      stories: [item('Exile and Return', 'वनवास और वापसी', 'The journey from Ayodhya and eventual return frames a long examination of duty and endurance.', 'अयोध्या से वनवास और पुनरागमन की यात्रा कर्तव्य और धैर्य की दीर्घ परीक्षा है.', 'path'), item('Rama and Hanuman', 'राम और हनुमान', 'Their relationship is a central image of devotion, trust and service.', 'उनका संबंध भक्ति, विश्वास और सेवा का केंद्रीय आदर्श है.', 'lotus')],
      teachings: [item('Keep one’s word', 'वचन पालन', 'Commitment carries weight and consequence.', 'प्रतिबद्धता का महत्व और परिणाम दोनों होते हैं.', 'book'), item('Leadership as service', 'सेवा रूपी नेतृत्व', 'Authority is measured by care for others.', 'नेतृत्व का मूल्य दूसरों की देखभाल से आँका जाता है.', 'crown'), item('Courage with restraint', 'संयमित साहस', 'Power is guided by purpose and self-control.', 'शक्ति को उद्देश्य और आत्म-संयम दिशा देते हैं.', 'bow')],
      festival: pair('Ram Navami', 'राम नवमी'), festivalNote: pair('Rama’s birth is celebrated through readings, prayer, processions and fasting.', 'राम जन्म पाठ, प्रार्थना, शोभायात्रा और उपवास से मनाया जाता है।'),
      mantras: [{ id: 'ramayan', title: 'Explore Ramayan', titleHi: 'रामायण देखें' }], related: ['vishnu', 'krishna', 'hanuman'],
      sourceUrl: 'https://www.britishmuseum.org/collection/object/A_1920-0917-0-112', sourceName: 'British Museum — Rama and Lakshmana'
    },
    durga: {
      title: 'Durga', titleHi: 'दुर्गा', honorific: 'Goddess Durga', honorificHi: 'माँ दुर्गा', category: 'devi', categoryLabel: pair('Devi', 'देवी'), image: 'assets/deity-durga.webp',
      subtitle: pair('The Divine Mother revered as strength, protection and victory over disorder.', 'शक्ति, संरक्षण और अधर्म पर विजय के रूप में पूजित दिव्य माता।'), tradition: pair('Shakta and regional traditions', 'शाक्त और क्षेत्रीय परंपराएँ'),
      overview: pair('Durga is revered as the powerful and protective Divine Mother. In Devi traditions she confronts forces that destabilise cosmic and moral order, while remaining compassionate toward devotees.', 'दुर्गा को शक्तिशाली और रक्षक दिव्य माता के रूप में पूजित किया जाता है। देवी परंपराओं में वे ब्रह्मांडीय और नैतिक व्यवस्था को बाधित करने वाली शक्तियों का सामना करती हैं और भक्तों के प्रति करुणामयी रहती हैं।'),
      themes: [item('Protective Strength', 'रक्षक शक्ति', 'Power is directed toward protection and restoration of balance.', 'शक्ति का उपयोग संरक्षण और संतुलन की पुनर्स्थापना के लिए होता है.', 'shield'), item('Courage', 'साहस', 'Durga’s composure models courage without panic.', 'दुर्गा का धैर्य भय से परे साहस का आदर्श प्रस्तुत करता है.', 'lion'), item('Divine Mother', 'दिव्य माता', 'Fierceness and compassion coexist in many Devi traditions.', 'अनेक देवी परंपराओं में उग्रता और करुणा साथ रहती हैं.', 'lotus')],
      icons: [item('Many arms', 'अनेक भुजाएँ', 'Multiple capacities and divine powers shown simultaneously.', 'अनेक क्षमताओं और दिव्य शक्तियों का एक साथ चित्रण।', 'arms'), item('Lion', 'सिंह', 'Courage, energy and sovereign strength.', 'साहस, ऊर्जा और स्वतंत्र शक्ति।', 'lion'), item('Trishula and weapons', 'त्रिशूल और आयुध', 'Gifts of divine power used against disorder.', 'अव्यवस्था के विरुद्ध प्रयुक्त दिव्य शक्ति के आयुध।', 'trident'), item('Lotus', 'कमल', 'Purity and centred awareness amid conflict.', 'संघर्ष के बीच पवित्रता और केंद्रित चेतना।', 'lotus')],
      stories: [item('Mahishasuramardini', 'महिषासुरमर्दिनी', 'The Devi Mahatmya narrates Durga’s victory over Mahisha and the restoration of order.', 'देवी माहात्म्य में दुर्गा की महिषासुर पर विजय और व्यवस्था की पुनर्स्थापना वर्णित है.', 'lion'), item('The Gathering of Shakti', 'शक्तियों का समागम', 'The gods’ energies converge in Durga, emphasizing cooperative power directed toward a shared purpose.', 'देवशक्तियाँ दुर्गा में एकत्र होती हैं—साझे उद्देश्य के लिए संयुक्त शक्ति का संकेत.', 'flame')],
      teachings: [item('Courage with compassion', 'करुणा सहित साहस', 'Strength need not abandon care.', 'शक्ति को करुणा त्यागने की आवश्यकता नहीं.', 'lotus'), item('Protect what matters', 'मूल्यों की रक्षा', 'Discern what requires firm protection.', 'जो महत्वपूर्ण है उसकी दृढ़ रक्षा का विवेक विकसित करें.', 'shield'), item('Integrate many strengths', 'अनेक शक्तियों का समन्वय', 'Different capacities can work toward one responsible aim.', 'विभिन्न क्षमताएँ एक उत्तरदायी लक्ष्य के लिए मिलकर काम कर सकती हैं.', 'arms')],
      festival: pair('Navratri and Durga Puja', 'नवरात्रि और दुर्गा पूजा'), festivalNote: pair('Forms, rituals and calendars vary across regions and communities.', 'स्वरूप, अनुष्ठान और पंचांग क्षेत्र और समुदाय के अनुसार बदलते हैं।'),
      mantras: [{ id: 'durga-chalisa', section: 'paathmandir', title: 'Durga Chalisa', titleHi: 'दुर्गा चालीसा' }], related: ['lakshmi', 'saraswati', 'shiva'],
      sourceUrl: 'https://www.metmuseum.org/art/collection/search/74502', sourceName: 'The Met — Durga Slaying Mahisha'
    },
    lakshmi: {
      title: 'Lakshmi', titleHi: 'लक्ष्मी', honorific: 'Goddess Lakshmi', honorificHi: 'माँ लक्ष्मी', category: 'devi', categoryLabel: pair('Devi', 'देवी'), image: 'assets/deity-lakshmi.webp', museumImage: false,
      subtitle: pair('Associated with auspiciousness, prosperity, beauty and well-being.', 'शुभता, समृद्धि, सौंदर्य और कल्याण से संबद्ध।'), tradition: pair('Vaishnava, Shakta and household traditions', 'वैष्णव, शाक्त और गृह परंपराएँ'),
      overview: pair('Lakshmi is revered as the goddess of Shri—auspiciousness, prosperity, beauty and flourishing. Her worship extends across temples, homes and diverse regional traditions.', 'लक्ष्मी श्री—शुभता, समृद्धि, सौंदर्य और उन्नति—की देवी के रूप में पूजित हैं। उनकी उपासना मंदिरों, घरों और विविध क्षेत्रीय परंपराओं में होती है।'),
      themes: [item('Auspiciousness', 'शुभता', 'Prosperity includes well-being, harmony and ethical flourishing.', 'समृद्धि में कल्याण, सामंजस्य और नैतिक उन्नति भी शामिल है.', 'lotus'), item('Generosity', 'उदारता', 'Abundance gains meaning through responsible sharing.', 'समृद्धि उत्तरदायी बाँटने से सार्थक होती है.', 'vessel'), item('Beauty & Order', 'सौंदर्य और व्यवस्था', 'Shri joins grace with the conditions that help life flourish.', 'श्री सौंदर्य को जीवन के विकास की अनुकूल परिस्थितियों से जोड़ती है.', 'lotus')],
      icons: [item('Lotus', 'कमल', 'Purity, beauty and flourishing.', 'पवित्रता, सौंदर्य और उन्नति।', 'lotus'), item('Four arms', 'चार भुजाएँ', 'A familiar divine form with layered interpretations.', 'बहुस्तरीय अर्थों वाला प्रसिद्ध दिव्य स्वरूप।', 'arms'), item('Elephants', 'गज', 'Royal auspiciousness and the Gajalakshmi tradition.', 'राजकीय शुभता और गजलक्ष्मी परंपरा।', 'elephant'), item('Varada mudra', 'वरद मुद्रा', 'Boon-giving generosity and blessing.', 'आशीर्वाद और उदार अनुग्रह।', 'hand')],
      stories: [item('Emergence from the Ocean', 'समुद्र से प्राकट्य', 'Samudra Manthana narratives describe Lakshmi emerging with treasures and auspicious gifts.', 'समुद्र मंथन की कथाओं में लक्ष्मी का रत्नों और शुभ उपहारों के साथ प्राकट्य वर्णित है.', 'vessel'), item('Gajalakshmi', 'गजलक्ष्मी', 'Elephants honour Lakshmi in a longstanding image of abundance and royal auspiciousness.', 'गजलक्ष्मी स्वरूप में हाथी समृद्धि और राजकीय शुभता की देवी का अभिषेक करते हैं.', 'elephant')],
      teachings: [item('Gratitude', 'कृतज्ञता', 'Notice and honour the conditions that sustain life.', 'जीवन को सहारा देने वाली परिस्थितियों को पहचानें और सम्मान दें.', 'lotus'), item('Ethical prosperity', 'धार्मिक समृद्धि', 'Well-being is strengthened by generosity and fairness.', 'उदारता और न्याय से कल्याण मजबूत होता है.', 'balance'), item('Care for the home', 'गृह की देखभाल', 'Order, welcome and cleanliness carry symbolic importance.', 'व्यवस्था, स्वागत और स्वच्छता का प्रतीकात्मक महत्व है.', 'lamp')],
      festival: pair('Diwali and Lakshmi Puja', 'दीपावली और लक्ष्मी पूजा'), festivalNote: pair('Household and regional practices vary widely.', 'गृह और क्षेत्रीय रीति-रिवाज बहुत विविध हैं।'),
      mantras: [{ id: 'om-mantra', title: 'Om — Pranava', titleHi: 'ॐ प्रणव' }], related: ['vishnu', 'durga', 'saraswati'],
      sourceUrl: 'https://www.metmuseum.org/art/collection/search/849494', sourceName: 'Iconography reference — The Met: Goddess Kamalatmika'
    },
    saraswati: {
      title: 'Saraswati', titleHi: 'सरस्वती', honorific: 'Goddess Saraswati', honorificHi: 'माँ सरस्वती', category: 'devi', categoryLabel: pair('Devi', 'देवी'), image: 'assets/deity-saraswati.webp', museumImage: false,
      subtitle: pair('Goddess of knowledge, learning, music, speech and the arts.', 'ज्ञान, शिक्षा, संगीत, वाणी और कलाओं की देवी।'), tradition: pair('Vedic, Puranic and learning traditions', 'वैदिक, पौराणिक और विद्या परंपराएँ'),
      overview: pair('Saraswati is revered as the goddess of knowledge, learning, eloquent speech, music and the arts. Her imagery joins disciplined study with creative expression.', 'सरस्वती ज्ञान, विद्या, वाणी, संगीत और कलाओं की देवी के रूप में पूजित हैं। उनका स्वरूप अनुशासित अध्ययन और रचनात्मक अभिव्यक्ति को जोड़ता है।'),
      themes: [item('Knowledge', 'ज्ञान', 'Learning grows through attention, inquiry and practice.', 'ज्ञान ध्यान, जिज्ञासा और अभ्यास से बढ़ता है.', 'book'), item('Speech', 'वाणी', 'Thoughtful expression is treated as a sacred responsibility.', 'विचारपूर्ण अभिव्यक्ति को पवित्र उत्तरदायित्व माना जाता है.', 'speech'), item('Music & Art', 'संगीत और कला', 'The vina joins technique, harmony and creative insight.', 'वीणा तकनीक, सामंजस्य और रचनात्मक अंतर्दृष्टि को जोड़ती है.', 'vina')],
      icons: [item('Vina', 'वीणा', 'Music, disciplined art and harmony.', 'संगीत, अनुशासित कला और सामंजस्य।', 'vina'), item('Book', 'पुस्तक', 'Study, knowledge and preserved learning.', 'अध्ययन, ज्ञान और संरक्षित विद्या।', 'book'), item('Rosary', 'माला', 'Concentration, recitation and continuity of practice.', 'एकाग्रता, जप और निरंतर अभ्यास।', 'rosary'), item('Hamsa', 'हंस', 'Discernment and refined understanding.', 'विवेक और परिष्कृत समझ।', 'bird')],
      stories: [item('The River and the Goddess', 'नदी और देवी', 'Saraswati is remembered as both sacred river and goddess in layers of Vedic and later tradition.', 'सरस्वती वैदिक और उत्तरवर्ती परंपराओं में पवित्र नदी और देवी दोनों रूपों में स्मरण की जाती हैं.', 'river'), item('The Gift of Speech', 'वाणी का वरदान', 'Narratives connect Saraswati with language, poetry and the awakening of expression.', 'कथाएँ सरस्वती को भाषा, काव्य और अभिव्यक्ति के जागरण से जोड़ती हैं.', 'speech')],
      teachings: [item('Learn continuously', 'निरंतर सीखना', 'Knowledge remains alive through study and reflection.', 'ज्ञान अध्ययन और मनन से जीवंत रहता है.', 'book'), item('Practice the craft', 'कला का अभ्यास', 'Skill and inspiration grow together through discipline.', 'अनुशासन से कौशल और प्रेरणा साथ विकसित होते हैं.', 'vina'), item('Speak responsibly', 'उत्तरदायी वाणी', 'Clarity and care should guide expression.', 'स्पष्टता और संवेदनशीलता वाणी का मार्गदर्शन करें.', 'speech')],
      festival: pair('Vasant Panchami', 'वसंत पंचमी'), festivalNote: pair('Celebrated through worship, learning, music and regional customs.', 'पूजा, विद्यारंभ, संगीत और क्षेत्रीय रीति से मनाया जाता है।'),
      mantras: [{ id: 'gayatri-mantra', title: 'Gayatri Mantra', titleHi: 'गायत्री मंत्र' }], related: ['brahma', 'lakshmi', 'ganesha'],
      sourceUrl: 'https://www.britishmuseum.org/collection/object/A_2016-3051-158', sourceName: 'Iconography reference — British Museum: Sarasvati'
    },
    ganesha: {
      title: 'Ganesha', titleHi: 'गणेश', honorific: 'Lord Ganesha', honorificHi: 'भगवान गणेश', category: 'beloved', categoryLabel: pair('Beloved Deity', 'लोकप्रिय आराध्य'), image: 'assets/deity-ganesha.webp',
      subtitle: pair('Lord of beginnings, wisdom and the removal of obstacles.', 'आरंभ, बुद्धि और विघ्नों को दूर करने वाले देवता।'), tradition: pair('Ganapatya and broad devotional traditions', 'गाणपत्य और व्यापक भक्ति परंपराएँ'),
      overview: pair('Ganesha is invoked at beginnings and revered as the remover of obstacles, patron of learning and guardian of thresholds. His iconography combines an elephant head, human body and meaningful attributes.', 'गणेश का आह्वान शुभ आरंभ में किया जाता है। वे विघ्नहर्ता, विद्या के संरक्षक और दहलीज़ के रक्षक रूप में पूजित हैं। उनके स्वरूप में हाथी-मुख, मानव शरीर और अर्थपूर्ण आयुध मिलते हैं।'),
      themes: [item('Wise Beginnings', 'बुद्धिमान आरंभ', 'A good beginning includes preparation and discernment.', 'शुभ आरंभ में तैयारी और विवेक शामिल हैं.', 'elephant'), item('Removing Obstacles', 'विघ्नों का निवारण', 'Obstacles may be external, practical or within one’s own habits.', 'विघ्न बाहरी, व्यावहारिक या अपनी आदतों के भीतर भी हो सकते हैं.', 'goad'), item('Learning', 'विद्या', 'Ganesha is widely honoured before study, writing and creative work.', 'अध्ययन, लेखन और रचनात्मक कार्य से पहले गणेश का स्मरण व्यापक है.', 'book')],
      icons: [item('Elephant head', 'हाथी-मुख', 'Wisdom, strength and attentive listening.', 'बुद्धि, शक्ति और सजग श्रवण।', 'elephant'), item('Broken tusk', 'एकदंत', 'Sacrifice, resolve and literary associations.', 'त्याग, संकल्प और लेखन से जुड़ी परंपराएँ।', 'tusk'), item('Sweet', 'मोदक', 'The sweetness of insight and fulfilled effort.', 'बोध और सफल प्रयास की मधुरता।', 'sweet'), item('Lasso and axe', 'पाश और अंकुश/परशु', 'Guidance, restraint and cutting through obstruction.', 'मार्गदर्शन, संयम और बाधा को काटना।', 'goad')],
      stories: [item('The Broken Tusk', 'एकदंत की कथा', 'Different traditions explain the broken tusk through stories of sacrifice, resolve and writing.', 'विभिन्न परंपराएँ टूटे दंत को त्याग, संकल्प और लेखन की कथाओं से समझाती हैं.', 'tusk'), item('The Race Around the World', 'विश्व-परिक्रमा', 'Ganesha’s thoughtful solution celebrates insight over haste.', 'गणेश का विचारपूर्ण समाधान जल्दबाज़ी पर बुद्धि की विजय का संदेश देता है.', 'elephant')],
      teachings: [item('Pause before beginning', 'आरंभ से पहले ठहरें', 'Clarify intention and prepare carefully.', 'उद्देश्य स्पष्ट करें और सावधानी से तैयारी करें.', 'lotus'), item('Listen deeply', 'गहराई से सुनें', 'The large ears become a reminder of attentive listening.', 'बड़े कान सजग श्रवण का स्मरण कराते हैं.', 'elephant'), item('Use obstacles as teachers', 'विघ्नों से सीखें', 'Difficulty can reveal what needs adjustment.', 'कठिनाई दिखा सकती है कि कहाँ परिवर्तन आवश्यक है.', 'goad')],
      festival: pair('Ganesh Chaturthi', 'गणेश चतुर्थी'), festivalNote: pair('Public and household observances vary by region and community.', 'सार्वजनिक और गृह आयोजन क्षेत्र और समुदाय के अनुसार बदलते हैं।'),
      mantras: [{ id: 'ganesh-mantra', title: 'Ganesh Mantra', titleHi: 'गणेश मंत्र' }], related: ['shiva', 'saraswati', 'hanuman'],
      sourceUrl: 'https://www.metmuseum.org/art/collection/search/37397', sourceName: 'The Met — Chola Ganesha'
    },
    hanuman: {
      title: 'Hanuman', titleHi: 'हनुमान', honorific: 'Lord Hanuman', honorificHi: 'भगवान हनुमान', category: 'beloved', categoryLabel: pair('Beloved Deity', 'लोकप्रिय आराध्य'), image: 'assets/deity-hanuman.webp',
      subtitle: pair('Devotee of Rama, honoured for courage, service and unwavering bhakti.', 'रामभक्त, साहस, सेवा और अटूट भक्ति के लिए पूजित।'), tradition: pair('Ram, Vaishnava and broad devotional traditions', 'राम, वैष्णव और व्यापक भक्ति परंपराएँ'),
      overview: pair('Hanuman is a central figure of the Ramayana and a widely revered exemplar of devotion, courage, strength and selfless service. Traditions remember him as learned, eloquent and wholly dedicated to Rama.', 'हनुमान रामायण के केंद्रीय पात्र और भक्ति, साहस, शक्ति तथा निस्वार्थ सेवा के व्यापक आदर्श हैं। परंपराएँ उन्हें विद्वान, वाक्पटु और राम के प्रति पूर्णतः समर्पित मानती हैं।'),
      themes: [item('Bhakti', 'भक्ति', 'Hanuman’s strength is directed by devotion rather than pride.', 'हनुमान की शक्ति अहंकार नहीं, भक्ति से संचालित होती है.', 'lotus'), item('Selfless Service', 'निस्वार्थ सेवा', 'Action is offered for the welfare of others and in loyalty to dharma.', 'कर्म दूसरों के कल्याण और धर्म के प्रति निष्ठा में अर्पित है.', 'hand'), item('Courage', 'साहस', 'Courage joins physical ability with resolve and clarity.', 'साहस शारीरिक क्षमता को संकल्प और स्पष्टता से जोड़ता है.', 'mace')],
      icons: [item('Vanara form', 'वानर स्वरूप', 'A distinctive form central to Ramayana traditions.', 'रामायण परंपराओं का विशिष्ट स्वरूप।', 'hanuman'), item('Gada', 'गदा', 'Strength, readiness and protection.', 'शक्ति, सज्जता और संरक्षण।', 'mace'), item('Anjali mudra', 'अंजलि मुद्रा', 'Reverence and devoted service.', 'श्रद्धा और समर्पित सेवा।', 'hand'), item('Mountain of herbs', 'संजीवनी पर्वत', 'Urgent service in the healing of Lakshmana.', 'लक्ष्मण के उपचार के लिए तत्पर सेवा।', 'mountain')],
      stories: [item('The Leap to Lanka', 'लंका की छलाँग', 'Hanuman crosses the ocean in service of Rama’s search for Sita.', 'सीता की खोज में राम की सेवा हेतु हनुमान समुद्र लाँघते हैं.', 'mountain'), item('The Mountain of Herbs', 'संजीवनी पर्वत', 'Unable to identify the needed herb, Hanuman carries the mountain itself.', 'आवश्यक औषधि न पहचान पाने पर हनुमान पूरा पर्वत ही उठा लाते हैं.', 'mountain')],
      teachings: [item('Strength with humility', 'विनय सहित शक्ति', 'Ability becomes meaningful when it serves rather than dominates.', 'क्षमता तब सार्थक होती है जब वह प्रभुत्व नहीं, सेवा करे.', 'mace'), item('Remember one’s purpose', 'उद्देश्य का स्मरण', 'Clear devotion helps recover confidence and direction.', 'स्पष्ट भक्ति आत्मविश्वास और दिशा लौटाती है.', 'lotus'), item('Serve wholeheartedly', 'पूर्ण समर्पण से सेवा', 'Care is expressed through timely, practical action.', 'देखभाल समय पर किए गए व्यावहारिक कर्म में प्रकट होती है.', 'hand')],
      festival: pair('Hanuman Jayanti', 'हनुमान जयंती'), festivalNote: pair('The observed date and customs vary by regional calendar.', 'तिथि और रीति क्षेत्रीय पंचांग के अनुसार बदलती है।'),
      mantras: [{ id: 'hanuman-chalisa', section: 'paathmandir', title: 'Hanuman Chalisa', titleHi: 'हनुमान चालीसा' }], related: ['rama', 'krishna', 'ganesha'],
      sourceUrl: 'https://www.metmuseum.org/art/collection/search/38945', sourceName: 'The Met — Hanuman Conversing'
    }
  };

  function language() {
    return (typeof currentLang !== 'undefined' && currentLang === 'hi') ? 'hi' : 'en';
  }
  function txt(value) { return value ? value[language()] : ''; }
  function esc(value) {
    return String(value == null ? '' : value).replace(/[&<>'"]/g, function (char) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char];
    });
  }
  function icon(name) {
    var paths = {
      bookmark: '<path d="M6 3.5h12v17l-6-4-6 4z"></path>',
      share: '<circle cx="18" cy="5" r="2.2"></circle><circle cx="6" cy="12" r="2.2"></circle><circle cx="18" cy="19" r="2.2"></circle><path d="m8 11 8-5M8 13l8 5"></path>',
      book: '<path d="M4 5.5c3-1 5-.5 8 1.5 3-2 5-2.5 8-1.5v13c-3-1-5-.5-8 1.5-3-2-5-2.5-8-1.5z"></path><path d="M12 7v13"></path>',
      lotus: '<path d="M12 20c-4-2-6-5-6-9 3.3.2 5.3 1.6 6 4.3.7-2.7 2.7-4.1 6-4.3 0 4-2 7-6 9z"></path><path d="M12 15.3C9.5 12.5 9.5 7.8 12 3c2.5 4.8 2.5 9.5 0 12.3zM4 21h16"></path>',
      temple: '<path d="M3 21h18M5 21V10h14v11M4 10h16L12 3zM9 21v-6h6v6"></path>',
      eye: '<path d="M2.5 12s3.3-5 9.5-5 9.5 5 9.5 5-3.3 5-9.5 5-9.5-5-9.5-5z"></path><circle cx="12" cy="12" r="2.4"></circle>',
      default: '<circle cx="12" cy="12" r="8"></circle><path d="M12 4v16M4 12h16"></path>'
    };
    return '<svg viewBox="0 0 24 24" aria-hidden="true">' + (paths[name] || paths.default) + '</svg>';
  }

  function favoriteButton(d, compact) {
    return '<button type="button" class="deity-save-button favorite-btn' + (compact ? ' compact' : '') + '" data-content-id="' + esc(d.id) + '" data-content-title="' + esc(d.titleHi) + '" data-content-title-en="' + esc(d.title) + '" data-section="deities" onclick="event.stopPropagation();deityToggleFavorite(this)" aria-label="Save">' + icon('bookmark') + '<span>' + (language() === 'hi' ? 'सहेजें' : 'Save') + '</span></button>';
  }

  function libraryCard(d) {
    var hi = language() === 'hi';
    var search = [d.title, d.titleHi, txt(d.subtitle), txt(d.tradition), txt(d.categoryLabel)].join(' ').toLocaleLowerCase();
    return '<article class="deity-library-card" data-deity-id="' + d.id + '" data-deity-category="' + d.category + '" data-deity-search="' + esc(search) + '" onclick="showText(\'' + d.id + '\')" tabindex="0" onkeydown="if(event.key===\'Enter\'||event.key===\' \'){event.preventDefault();showText(\'' + d.id + '\')}">' +
      favoriteButton(d, true) +
      '<img class="deity-card-art' + (d.museumImage ? ' museum-art' : '') + '" src="' + d.image + '" alt="' + esc((hi ? d.honorificHi : d.honorific) + ' — ' + txt(d.subtitle)) + '" width="900" height="900" loading="lazy">' +
      '<div class="deity-card-copy"><h3>' + d.title + ' <span>/ ' + d.titleHi + '</span></h3><p>' + txt(d.subtitle) + '</p><div class="deity-card-footer"><span>' + txt(d.categoryLabel) + '</span><button type="button" tabindex="-1">' + (hi ? 'परिचय' : 'Explore') + ' <b>→</b></button></div></div></article>';
  }

  function renderLibrary() {
    var grid = document.getElementById('deity-library-grid');
    if (!grid) return;
    IDS.forEach(function (id) { D[id].id = id; });
    grid.innerHTML = IDS.map(function (id) { return libraryCard(D[id]); }).join('');
    var input = document.getElementById('deity-search');
    if (input) input.placeholder = input.getAttribute('data-placeholder-' + language());
    paintFavorites(document.getElementById('deities'));
    applyFilters();
  }

  function applyFilters() {
    var section = document.getElementById('deities');
    if (!section) return;
    var query = ((document.getElementById('deity-search') || {}).value || '').trim().toLocaleLowerCase();
    var category = section.getAttribute('data-deity-filter') || 'all';
    var visible = 0;
    Array.prototype.forEach.call(section.querySelectorAll('.deity-library-card'), function (card) {
      var ok = (category === 'all' || card.getAttribute('data-deity-category') === category) && (!query || (card.getAttribute('data-deity-search') || '').indexOf(query) !== -1);
      card.hidden = !ok;
      if (ok) visible += 1;
    });
    var empty = document.getElementById('deity-no-results');
    if (empty) empty.hidden = visible !== 0;
  }

  window.filterDeities = function (category, button) {
    var section = document.getElementById('deities');
    if (!section) return;
    section.setAttribute('data-deity-filter', category || 'all');
    Array.prototype.forEach.call(section.querySelectorAll('.deity-filter'), function (candidate) {
      var active = candidate === button;
      candidate.classList.toggle('active', active);
      candidate.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
    applyFilters();
  };
  window.searchDeities = applyFilters;
  window.deityScrollToLibrary = function () { var el = document.getElementById('deity-library-content'); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); };
  window.deityScrollToGuide = function () { var el = document.getElementById('deity-guide'); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' }); };
  window.deityScrollToSources = function () { var el = document.getElementById('deity-source-note'); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' }); };

  function sectionCards(items) {
    return '<div class="deity-info-cards">' + items.map(function (entry) {
      return '<article>' + icon(entry.icon) + '<div><h3>' + (language() === 'hi' ? entry.titleHi : entry.title) + '</h3><p>' + (language() === 'hi' ? entry.bodyHi : entry.body) + '</p></div></article>';
    }).join('') + '</div>';
  }

  function readerSection(id, number, en, hi, body, open) {
    return '<details class="deity-content-section" id="deity-section-' + id + '" ' + (open ? 'open' : '') + '><summary><span>' + number + '. ' + (language() === 'hi' ? hi : en) + '</span><b>⌄</b></summary><div class="deity-section-body">' + body + '</div></details>';
  }

  function overviewBody(d) {
    return '<p class="deity-overview-copy">' + txt(d.overview) + '</p>' + sectionCards([
      item('Name', 'नाम', d.honorific, d.honorificHi, 'lotus'),
      item('Associated tradition', 'संबद्ध परंपरा', d.tradition.en, d.tradition.hi, 'temple'),
      item('Known form', 'प्रमुख स्वरूप', d.subtitle.en, d.subtitle.hi, 'eye')
    ]);
  }

  function storiesBody(d) {
    return '<div class="deity-story-list">' + d.stories.map(function (story) {
      return '<article>' + icon(story.icon) + '<div><h3>' + (language() === 'hi' ? story.titleHi : story.title) + '</h3><p>' + (language() === 'hi' ? story.bodyHi : story.body) + '</p><small>' + (language() === 'hi' ? 'पारंपरिक कथा — संस्करण भिन्न हो सकते हैं' : 'Traditional narrative — versions can vary') + '</small></div></article>';
    }).join('') + '</div>';
  }

  function festivalBody(d) {
    return '<div class="deity-festival-card">' + icon('lotus') + '<div><h3>' + txt(d.festival) + '</h3><p>' + txt(d.festivalNote) + '</p><button type="button" class="deity-primary-action" onclick="showSection(\'festival-calendar\')">' + (language() === 'hi' ? 'उत्सव पंचांग देखें' : 'Explore festival calendar') + '</button></div></div>';
  }

  function mantraBody(d) {
    return '<div class="deity-linked-grid">' + d.mantras.map(function (m) {
      var supported = (window.mantraReaderIds || []).indexOf(m.id) !== -1 || m.id === 'bhagavad-gita' || m.id === 'ramayan';
      var action = m.section ? 'showSection(\'' + m.section + '\')' : (supported ? 'showText(\'' + m.id + '\')' : 'showSection(\'mantras\')');
      return '<button type="button" onclick="' + action + '">' + icon('lotus') + '<span><strong>' + (language() === 'hi' ? m.titleHi : m.title) + '</strong><small>' + (language() === 'hi' ? 'उपलब्ध पाठ' : 'Available reading') + '</small></span><b>›</b></button>';
    }).join('') + '<button type="button" onclick="showSection(\'aarti\')">' + icon('temple') + '<span><strong>' + (language() === 'hi' ? 'आरती संग्रह' : 'Aarti Library') + '</strong><small>' + (language() === 'hi' ? 'भक्ति पाठ देखें' : 'Browse devotional texts') + '</small></span><b>›</b></button></div>';
  }

  function sourceBody(d) {
    return '<div class="deity-source-card">' + icon('book') + '<div><p>' + (language() === 'hi' ? 'यह शैक्षिक परिचय प्रसिद्ध शास्त्रीय, मंदिर, कला-ऐतिहासिक और भक्ति संदर्भों को सावधानी से साथ रखता है। नाम, स्वरूप और व्याख्या परंपरा के अनुसार बदल सकते हैं।' : 'This educational overview brings together widely known scriptural, temple, art-historical and devotional references. Names, forms and interpretations can vary by tradition.') + '</p><a href="' + d.sourceUrl + '" target="_blank" rel="noopener">' + esc(d.sourceName) + ' ↗</a></div></div>';
  }

  function relatedCards(d) {
    return '<div class="deity-related-grid">' + d.related.map(function (id) {
      var x = D[id];
      return '<button type="button" onclick="showText(\'' + id + '\')"><img src="' + x.image + '" alt="" width="900" height="900" loading="lazy" decoding="async"><span><strong>' + x.title + ' / ' + x.titleHi + '</strong><small>' + txt(x.subtitle) + '</small></span><b>›</b></button>';
    }).join('') + '</div>';
  }

  function navLinks() {
    var labels = [pair('Overview', 'परिचय'), pair('Meaning & Symbolism', 'अर्थ और प्रतीक'), pair('Iconography', 'स्वरूप-विज्ञान'), pair('Sacred Stories', 'पवित्र कथाएँ'), pair('Core Teachings', 'मुख्य शिक्षाएँ'), pair('Associated Festivals', 'संबद्ध उत्सव'), pair('Mantras & Aartis', 'मंत्र और आरती'), pair('Sources', 'स्रोत')];
    return labels.map(function (label, index) {
      return '<button type="button" onclick="deityScrollToSection(' + index + ')"><span>' + (index + 1) + '</span>' + txt(label) + '</button>';
    }).join('');
  }

  window.renderDeityReader = function (id) {
    var d = D[id];
    if (!d) return '';
    d.id = id;
    var hi = language() === 'hi';
    var hero = d.hero || d.image;
    return '<article class="deity-reader" data-deity-id="' + id + '" style="--deity-hero-image:url(\'' + hero + '\')">' +
      '<nav class="deity-breadcrumb" aria-label="Breadcrumb"><button type="button" onclick="deityReturnToLibrary()">' + (hi ? 'होम' : 'Home') + '</button><span>/</span><button type="button" onclick="deityReturnToLibrary()">' + (hi ? 'देवी-देवता' : 'Deities') + '</button><span>/</span><strong>' + (hi ? d.titleHi : d.title) + '</strong></nav>' +
      '<section class="deity-detail-hero"><div class="deity-detail-copy"><p class="deity-kicker">' + txt(d.tradition) + '</p><h1>' + (hi ? d.honorificHi : d.honorific) + '<span>' + d.title + '</span></h1><p>' + txt(d.subtitle) + '</p><div class="deity-tags"><span>' + txt(d.categoryLabel) + '</span><span>' + txt(d.tradition) + '</span></div><div class="deity-detail-actions">' + favoriteButton(d, false) + '<button type="button" class="deity-secondary-action" onclick="deityShareCurrent()">' + icon('share') + '<span>' + (hi ? 'साझा करें' : 'Share') + '</span></button></div></div></section>' +
      '<section class="deity-toolbar" aria-label="Reading preferences"><div><button type="button" class="' + (hi ? 'active' : '') + '" onclick="deitySetLanguage(\'hi\')">हिंदी</button><button type="button" class="' + (!hi ? 'active' : '') + '" onclick="deitySetLanguage(\'en\')">English</button></div><div><span>' + (hi ? 'अक्षर आकार' : 'Text size') + '</span><button type="button" onclick="deityChangeTextSize(-.08)">A−</button><button type="button" onclick="deityChangeTextSize(.08)">A+</button></div><button type="button" onclick="deityScrollToSection(7)">' + icon('book') + '<span>' + (hi ? 'स्रोत टिप्पणी' : 'Source note') + '</span></button></section>' +
      '<div class="deity-reader-layout"><aside class="deity-page-nav"><h2>' + (hi ? 'इस पृष्ठ पर' : 'On this page') + '</h2>' + navLinks() + '<div class="deity-saved-note">' + icon('bookmark') + '<strong>' + (hi ? 'अपनी लाइब्रेरी में सहेजें' : 'Save to My Library') + '</strong><p>' + (hi ? 'इस परिचय को बाद में जल्दी खोलें।' : 'Return to this overview quickly.') + '</p></div></aside>' +
      '<main class="deity-reader-main">' +
      '<div class="deity-mobile-nav"><button type="button" onclick="deityToggleMobileNav(this)">☰ <span>' + (hi ? 'इस पृष्ठ पर · 8 अनुभाग' : 'On this page · 8 sections') + '</span><b>⌄</b></button><div>' + navLinks() + '</div></div>' +
      readerSection('overview', 1, 'Overview', 'परिचय', overviewBody(d), true) +
      readerSection('meaning', 2, 'Meaning & Symbolism', 'अर्थ और प्रतीक', sectionCards(d.themes), true) +
      readerSection('iconography', 3, 'Iconography', 'स्वरूप और चिह्न', sectionCards(d.icons), true) +
      '<div class="deity-reader-split">' + readerSection('stories', 4, 'Sacred Stories', 'पवित्र कथाएँ', storiesBody(d), true) + readerSection('teachings', 5, 'Core Teachings', 'मुख्य शिक्षाएँ', sectionCards(d.teachings), true) + '</div>' +
      readerSection('festivals', 6, 'Associated Festivals', 'संबद्ध उत्सव', festivalBody(d), true) +
      readerSection('practice', 7, 'Mantras & Aartis', 'मंत्र और आरती', mantraBody(d), true) +
      readerSection('sources', 8, 'Sources & Tradition', 'स्रोत और परंपरा', sourceBody(d), true) +
      '<section class="deity-related-section"><h2>' + (hi ? 'संबंधित देवी-देवता' : 'Related Deities') + '</h2>' + relatedCards(d) + '</section></main></div>' +
      '<section class="deity-source-note"><span class="deity-source-icon">▤</span><div><h2>' + (hi ? 'परंपरा और स्रोत टिप्पणी' : 'Tradition & Source Note') + '</h2><p>' + (hi ? 'यह शैक्षिक परिचय है, किसी वंश या व्यक्तिगत साधना के मार्गदर्शन का विकल्प नहीं।' : 'This is an educational overview, not a substitute for lineage guidance or personal practice.') + '</p></div><a href="' + d.sourceUrl + '" target="_blank" rel="noopener">' + (hi ? 'स्रोत देखें ↗' : 'View reference ↗') + '</a></section></article>';
  };

  function currentReader() { return document.querySelector('#text-display .deity-reader'); }
  function paintFavorite(button) {
    if (!button) return;
    var saved = button.classList.contains('favorited');
    var hi = language() === 'hi';
    var label = saved ? (hi ? 'सहेजा गया' : 'Saved') : (hi ? 'सहेजें' : 'Save');
    button.innerHTML = icon('bookmark') + '<span>' + label + '</span>';
    button.setAttribute('aria-label', label);
    button.setAttribute('aria-pressed', saved ? 'true' : 'false');
  }
  function paintFavorites(root) {
    if (!root) return;
    Array.prototype.forEach.call(root.querySelectorAll('.deity-save-button'), function (button) {
      paintFavorite(button);
      if (typeof loadFavoriteStatus === 'function' && typeof currentUser !== 'undefined' && currentUser) {
        Promise.resolve(loadFavoriteStatus(button.dataset.contentId, button)).then(function () { paintFavorite(button); });
      }
    });
  }

  window.deityToggleFavorite = async function (button) {
    if (typeof toggleFavorite !== 'function') return;
    await toggleFavorite(button);
    paintFavorite(button);
  };
  window.deityChangeTextSize = function (delta) {
    var reader = currentReader();
    if (!reader) return;
    var scale = Number(reader.style.getPropertyValue('--deity-text-scale') || 1);
    scale = Math.max(.86, Math.min(1.24, scale + Number(delta || 0)));
    reader.style.setProperty('--deity-text-scale', String(scale));
    try { localStorage.setItem('sanatan-deity-text-scale', String(scale)); } catch (error) {}
  };
  window.deitySetLanguage = function (lang) {
    if (lang !== 'hi' && lang !== 'en') return;
    currentLang = lang;
    var headerButton = document.getElementById('langBtn');
    if (headerButton) headerButton.textContent = lang === 'en' ? 'हिंदी में पढ़ें' : 'Read in English';
    if (typeof applyLanguage === 'function') applyLanguage(lang);
    else if (window.currentTextId) showText(window.currentTextId);
  };
  window.deityShareCurrent = async function () {
    var reader = currentReader();
    if (!reader) return;
    var d = D[reader.getAttribute('data-deity-id')];
    var payload = { title: (language() === 'hi' ? d.honorificHi : d.honorific) + ' — Sanatan for Humanity', text: txt(d.subtitle), url: window.location.href };
    try {
      if (navigator.share) await navigator.share(payload);
      else await navigator.clipboard.writeText(payload.title + '\n' + payload.url);
    } catch (error) {}
  };
  window.deityScrollToSection = function (index) {
    var reader = currentReader();
    if (!reader) return;
    var sections = reader.querySelectorAll('.deity-content-section');
    var target = sections[index];
    if (target) { target.open = true; target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  };
  window.deityToggleMobileNav = function (button) {
    var nav = button && button.parentElement;
    if (nav) nav.classList.toggle('open');
  };
  window.deityReturnToLibrary = function () {
    var display = document.getElementById('text-display');
    if (display) { display.style.display = 'none'; display.classList.remove('deity-display'); }
    if (typeof showSection === 'function') showSection('deities');
    var section = document.getElementById('deities');
    if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  window.initDeityReader = function () {
    var reader = currentReader();
    if (!reader) return;
    var scale = 1;
    try { scale = Math.max(.86, Math.min(1.24, Number(localStorage.getItem('sanatan-deity-text-scale') || 1))); } catch (error) {}
    reader.style.setProperty('--deity-text-scale', String(scale));
    paintFavorites(reader);
  };
  window.initDeityLibrary = renderLibrary;

  var previousToggleLanguage = window.toggleLanguage;
  if (typeof previousToggleLanguage === 'function') {
    window.toggleLanguage = function () {
      var result = previousToggleLanguage.apply(this, arguments);
      window.setTimeout(function () {
        var section = document.getElementById('deities');
        if (section && section.classList.contains('active')) renderLibrary();
      }, 0);
      return result;
    };
  }
  document.addEventListener('DOMContentLoaded', renderLibrary);
})();
