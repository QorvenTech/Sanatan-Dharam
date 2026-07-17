(function () {
  'use strict';

  var IDS = ['puja', 'yoga', 'meditation', 'aarti', 'fasting', 'charity', 'yagna', 'japa'];
  window.ritualReaderIds = IDS.slice();

  function pair(en, hi) { return { en: en, hi: hi }; }
  function material(en, hi) { return pair(en, hi); }
  function step(title, titleHi, instruction, instructionHi, why, whyHi, caution, cautionHi) {
    return {
      title: pair(title, titleHi),
      instruction: pair(instruction, instructionHi),
      why: pair(why, whyHi),
      caution: caution ? pair(caution, cautionHi) : null
    };
  }
  function source(name, url) { return { name: name, url: url }; }

  var SOURCES = {
    kalpa: source('Vedic Heritage Portal — Kalpa and ritual traditions', 'https://vedicheritage.gov.in/vedangas/kalpa/'),
    yoga: source('Ministry of Ayush — Common Yoga Protocol 2026', 'https://yoga.ayush.gov.in/uploads/assets/cyp/CYP_Book_English_2026.pdf'),
    fire: source('U.S. Fire Administration — Candle Fire Safety', 'https://www.usfa.fema.gov/prevention/home-fires/prevent-fires/candle/'),
    fasting: source('NHS — health guidance for people considering a fast', 'https://www.england.nhs.uk/midlands/2025/02/27/nhs-diabetes-expert-offers-fasting-advice-to-diabetics-in-the-east-midlands-for-ramadan/'),
    vedic: source('Vedic Heritage Portal — Introduction to Yajna traditions', 'https://vedicheritage.gov.in/introduction/')
  };

  var R = {
    puja: {
      title: 'Puja', titleHi: 'पूजा', icon: 'puja', categories: ['puja', 'home', 'festival', 'beginner'],
      summary: pair('A form of worship using offerings, prayer and aarti, practised in varied forms at home and in temples.', 'अर्पण, प्रार्थना और आरती के माध्यम से की जाने वाली उपासना, जिसके गृह और मंदिर में अनेक रूप हैं।'),
      time: pair('Varies by tradition', 'परंपरा के अनुसार'), setting: pair('Home or temple', 'गृह या मंदिर'), guidance: pair('Beginner overview', 'आरंभिक परिचय'), tradition: pair('Adapt with family guidance', 'पारिवारिक मार्गदर्शन अनुसार'),
      caution: pair('Keep diya and incense stable, attended and away from children, pets and flammable materials.', 'दीप और धूप को स्थिर, निगरानी में तथा बच्चों, पालतू जीवों और ज्वलनशील वस्तुओं से दूर रखें।'),
      materials: [material('Clean cloth or mat', 'स्वच्छ वस्त्र या आसन'), material('Image or murti used in your tradition', 'अपनी परंपरा में प्रयुक्त चित्र या मूर्ति'), material('Small vessel of clean water', 'स्वच्छ जल का छोटा पात्र'), material('Fresh flowers or customary leaves', 'ताजे पुष्प या परंपरागत पत्ते'), material('Diya and suitable oil or ghee', 'दीपक और उपयुक्त तेल या घी'), material('Incense — optional, with ventilation', 'धूप — वैकल्पिक, वायु-संचार सहित'), material('Fruit or simple prasad — optional', 'फल या सरल प्रसाद — वैकल्पिक'), material('Bell — optional', 'घंटी — वैकल्पिक')],
      steps: [
        step('Prepare the space', 'स्थान की तैयारी', 'Clean a quiet area, place items safely, wash hands and settle attention.', 'शांत स्थान स्वच्छ करें, सामग्री सुरक्षित रखें, हाथ धोएँ और मन को स्थिर करें।', 'Cleanliness and order support attentive worship.', 'स्वच्छता और व्यवस्था एकाग्र उपासना में सहायक हैं।'),
        step('Set intention', 'संकल्प', 'Recall the purpose of the prayer in words natural to you or your family tradition.', 'प्रार्थना का उद्देश्य अपनी सहज भाषा या पारिवारिक परंपरा के अनुसार स्मरण करें।', 'Intention brings attention and sincerity to the practice.', 'संकल्प साधना में ध्यान और भाव जोड़ता है।'),
        step('Light the diya', 'दीप प्रज्वलन', 'Place the lamp in a stable holder and light it carefully where it is customary.', 'दीप को स्थिर आधार पर रखकर परंपरा अनुसार सावधानी से प्रज्वलित करें।', 'Light is widely understood as a symbol of knowledge and reverence.', 'प्रकाश को ज्ञान और श्रद्धा का व्यापक प्रतीक माना जाता है।', 'Never leave a flame unattended; keep it away from cloth, paper, children and pets.', 'ज्योति को कभी अकेला न छोड़ें; वस्त्र, कागज, बच्चों और पालतू जीवों से दूर रखें।'),
        step('Offer water and flowers', 'जल और पुष्प अर्पण', 'Make simple customary offerings without assuming every item is required.', 'यह मानें बिना कि हर सामग्री अनिवार्य है, सरल परंपरागत अर्पण करें।', 'Offerings may express welcome, gratitude and devotion.', 'अर्पण स्वागत, कृतज्ञता और भक्ति का भाव व्यक्त करते हैं।'),
        step('Prayer or japa', 'प्रार्थना या जप', 'Recite a prayer or supported mantra appropriate to the devotee’s tradition.', 'साधक की परंपरा के अनुरूप प्रार्थना या मान्य मंत्र का जप करें।', 'Prayer and repetition help focus attention and devotion.', 'प्रार्थना और जप ध्यान तथा भक्ति को केंद्रित करते हैं।'),
        step('Aarti', 'आरती', 'Where customary, offer light respectfully while reciting or singing a known aarti.', 'जहाँ परंपरा हो, ज्ञात आरती का पाठ या गायन करते हुए दीप अर्पित करें।', 'Aarti is a devotional offering of light.', 'आरती प्रकाश का भक्तिमय अर्पण है।', 'Use a stable plate and keep sleeves, hair and decorations clear of the flame.', 'स्थिर थाली रखें और आस्तीन, बाल तथा सजावट को लौ से दूर रखें।'),
        step('Closing and prasad', 'समापन और प्रसाद', 'Conclude quietly, offer thanks, make the flame safe, and distribute prasad respectfully where customary.', 'शांतिपूर्वक धन्यवाद दें, लौ को सुरक्षित करें और परंपरा अनुसार प्रसाद बाँटें।', 'A clear closing carries attention back into daily life.', 'स्पष्ट समापन साधना के भाव को दैनिक जीवन में ले जाता है।')
      ],
      sources: [SOURCES.kalpa, SOURCES.fire]
    },
    yoga: {
      title: 'Yoga', titleHi: 'योग', icon: 'yoga', categories: ['daily', 'beginner'],
      summary: pair('A disciplined path that can include ethical foundations, movement, breath, concentration and contemplation.', 'एक अनुशासित मार्ग जिसमें आचार, शारीरिक अभ्यास, श्वास, एकाग्रता और मनन सम्मिलित हो सकते हैं।'),
      time: pair('Flexible practice', 'लचीला अभ्यास'), setting: pair('Quiet, clear space', 'शांत, खुला स्थान'), guidance: pair('Learn progressively', 'क्रमशः सीखें'), tradition: pair('Qualified teaching recommended', 'योग्य शिक्षक अनुशंसित'),
      caution: pair('Practise within your capacity. Stop with pain, dizziness or breathlessness and seek qualified health or teaching guidance when needed.', 'अपनी क्षमता के भीतर अभ्यास करें। दर्द, चक्कर या सांस फूलने पर रुकें और आवश्यकता पर योग्य स्वास्थ्य या प्रशिक्षण सलाह लें।'),
      materials: [material('Clear, non-slip space', 'खुला, न फिसलने वाला स्थान'), material('Comfortable clothing', 'आरामदायक वस्त्र'), material('Yoga mat — optional', 'योग आसन — वैकल्पिक'), material('Water for after practice', 'अभ्यास के बाद जल'), material('Props or chair if helpful', 'आवश्यक हो तो सहारा या कुर्सी'), material('Qualified guidance for new or complex postures', 'नए या कठिन आसनों के लिए योग्य मार्गदर्शन')],
      steps: [
        step('Check readiness', 'तैयारी जाँचें', 'Choose a level suited to your health, mobility and experience.', 'अपने स्वास्थ्य, गतिशीलता और अनुभव के अनुरूप स्तर चुनें।', 'A suitable starting point supports a steady practice.', 'उचित आरंभ स्थिर अभ्यास में सहायक है।'),
        step('Settle and centre', 'स्थिर हों', 'Stand or sit comfortably and allow breathing to become unforced.', 'आराम से बैठें या खड़े हों और श्वास को सहज होने दें।', 'Beginning calmly improves awareness of the body.', 'शांत आरंभ शरीर की सजगता बढ़ाता है।'),
        step('Warm the joints', 'संधियों की तैयारी', 'Use slow, comfortable movements before stronger postures.', 'अधिक सक्रिय आसनों से पहले धीमी और सहज गति करें।', 'Gradual movement prepares the body.', 'क्रमिक गति शरीर को तैयार करती है।'),
        step('Practise selected asanas', 'चुने हुए आसन', 'Follow a balanced sequence learned from a reliable teacher or protocol.', 'विश्वसनीय शिक्षक या प्रोटोकॉल से सीखा संतुलित क्रम अपनाएँ।', 'Technique and progression matter more than intensity.', 'तीव्रता से अधिक तकनीक और क्रमिक प्रगति महत्वपूर्ण हैं।', 'Do not force range of motion or use pain as a target.', 'शरीर को बलपूर्वक न मोड़ें और दर्द को लक्ष्य न बनाएं।'),
        step('Breath awareness', 'श्वास सजगता', 'Observe natural breathing; learn specialised pranayama from qualified guidance.', 'प्राकृतिक श्वास देखें; विशेष प्राणायाम योग्य मार्गदर्शन से सीखें।', 'Breath awareness can support steadiness and attention.', 'श्वास सजगता स्थिरता और ध्यान में सहायक हो सकती है।'),
        step('Rest and close', 'विश्राम और समापन', 'Finish with comfortable stillness and rise slowly.', 'सहज स्थिरता में समाप्त करें और धीरे उठें।', 'Rest allows the practice to settle.', 'विश्राम अभ्यास को समाहित होने देता है।')
      ],
      sources: [SOURCES.yoga]
    },
    meditation: {
      title: 'Dhyana', titleHi: 'ध्यान', icon: 'meditation', categories: ['daily', 'home', 'beginner'],
      summary: pair('A contemplative practice of steady attention, observation and inward quiet.', 'स्थिर ध्यान, अवलोकन और अंतर्मुखी शांति की मनन साधना।'),
      time: pair('5–20 minutes to begin', 'आरंभ में 5–20 मिनट'), setting: pair('Quiet and safe', 'शांत और सुरक्षित'), guidance: pair('Beginner friendly', 'आरंभिक अनुकूल'), tradition: pair('Many valid methods', 'अनेक मान्य विधियाँ'),
      caution: pair('Meditation is not a substitute for mental-health care. If practice causes persistent distress, stop and seek appropriate professional support.', 'ध्यान मानसिक स्वास्थ्य उपचार का विकल्प नहीं है। लगातार असहजता हो तो रुकें और उपयुक्त विशेषज्ञ सहायता लें।'),
      materials: [material('Comfortable seat or chair', 'आरामदायक आसन या कुर्सी'), material('Quiet timer — optional', 'शांत टाइमर — वैकल्पिक'), material('Light shawl if needed', 'आवश्यक हो तो हल्का शॉल'), material('A supported focus such as breath or mantra', 'श्वास या मान्य मंत्र जैसा आधार')],
      steps: [
        step('Choose a quiet interval', 'शांत समय चुनें', 'Set a realistic duration with minimal interruption.', 'कम व्यवधान वाला यथार्थ समय निर्धारित करें।', 'Consistency is easier with a modest beginning.', 'छोटे आरंभ से निरंतरता सरल होती है।'),
        step('Find a stable posture', 'स्थिर आसन', 'Sit supported, upright and comfortable without strain.', 'बिना तनाव के सहारे सहित सीधा और सहज बैठें।', 'Comfort reduces unnecessary distraction.', 'आराम अनावश्यक विचलन घटाता है।'),
        step('Notice natural breath', 'सहज श्वास देखें', 'Observe breathing without forcing its pace or depth.', 'श्वास की गति या गहराई को बाध्य किए बिना देखें।', 'A simple anchor steadies attention.', 'सरल आधार ध्यान को स्थिर करता है।'),
        step('Rest attention', 'ध्यान टिकाएँ', 'Use breath, a supported mantra or another method from your tradition.', 'श्वास, मान्य मंत्र या अपनी परंपरा की किसी विधि का आधार लें।', 'A clear focus gives the mind a gentle point of return.', 'स्पष्ट आधार मन को लौटने का सहज बिंदु देता है।'),
        step('Return without judgement', 'बिना निर्णय लौटें', 'When attention wanders, acknowledge it and return softly.', 'ध्यान भटके तो उसे स्वीकार कर सहजता से वापस लाएँ।', 'Returning is part of practice, not a failure.', 'वापस लौटना अभ्यास का भाग है, असफलता नहीं।'),
        step('Close gradually', 'धीरे समापन', 'Notice the room, move gently and carry calm attention forward.', 'स्थान को अनुभव करें, धीरे हिलें और शांत सजगता को आगे ले जाएँ।', 'A gradual close supports a steady transition.', 'क्रमिक समापन सहज परिवर्तन में सहायक है।')
      ],
      sources: [SOURCES.yoga]
    },
    aarti: {
      title: 'Aarti', titleHi: 'आरती', icon: 'aarti', categories: ['puja', 'home', 'festival', 'beginner'],
      summary: pair('A devotional offering of light accompanied by prayer or song.', 'प्रार्थना या गायन के साथ प्रकाश का भक्तिमय अर्पण।'),
      time: pair('Varies by hymn', 'आरती अनुसार'), setting: pair('Home or temple', 'गृह या मंदिर'), guidance: pair('Known text and custom', 'ज्ञात पाठ और रीति'), tradition: pair('Regional forms vary', 'क्षेत्रीय रूप भिन्न'),
      caution: pair('Keep the flame attended in a stable holder and away from sleeves, hair, decorations, children and pets.', 'ज्योति को स्थिर पात्र में निगरानी सहित रखें तथा आस्तीन, बाल, सजावट, बच्चों और पालतू जीवों से दूर रखें।'),
      materials: [material('Stable aarti plate or lamp', 'स्थिर आरती थाली या दीप'), material('Suitable wick and oil or ghee', 'उपयुक्त बाती और तेल या घी'), material('Known aarti text', 'ज्ञात आरती पाठ'), material('Bell — optional', 'घंटी — वैकल्पिक'), material('Flame-safe clear area', 'ज्योति के लिए सुरक्षित खुला स्थान'), material('Safe method to extinguish the flame', 'ज्योति शांत करने का सुरक्षित साधन')],
      steps: [
        step('Prepare a safe place', 'सुरक्षित स्थान तैयार करें', 'Clear cloth, paper and decorations from the lamp area.', 'दीप क्षेत्र से वस्त्र, कागज और सजावट दूर करें।', 'A clear area reduces fire risk.', 'खुला क्षेत्र अग्नि जोखिम घटाता है।'),
        step('Choose the known aarti', 'ज्ञात आरती चुनें', 'Use a text and melody recognised in your family or temple tradition.', 'पारिवारिक या मंदिर परंपरा में मान्य पाठ और धुन लें।', 'A supported text preserves context and care.', 'मान्य पाठ संदर्भ और सावधानी बनाए रखता है।'),
        step('Light the lamp carefully', 'दीप सावधानी से जलाएँ', 'Place the lamp stably before lighting it.', 'दीप को स्थिर रखकर ही प्रज्वलित करें।', 'Stability matters before devotional movement begins.', 'भक्तिमय गति से पहले स्थिरता आवश्यक है।', 'Never hold a loose or unstable flame.', 'ढीली या अस्थिर ज्योति न रखें।'),
        step('Offer light respectfully', 'प्रकाश अर्पित करें', 'Follow the movement customary in your tradition without rushing.', 'अपनी परंपरा की गति को बिना जल्दबाजी अपनाएँ।', 'Attention is more important than display.', 'प्रदर्शन से अधिक सजगता महत्वपूर्ण है।'),
        step('Recite or sing', 'पाठ या गायन', 'Keep the words clear and the pace comfortable for participants.', 'शब्द स्पष्ट और गति सहभागी लोगों के लिए सहज रखें।', 'Shared recitation can gather attention and devotion.', 'सामूहिक पाठ ध्यान और भक्ति को जोड़ता है।'),
        step('Make the flame safe', 'ज्योति सुरक्षित करें', 'Set the lamp down securely and extinguish it when the observance is complete or when leaving.', 'आरती पूर्ण होने या स्थान छोड़ने से पहले दीप सुरक्षित रखकर ज्योति शांत करें।', 'The practice closes only after the flame is safe.', 'ज्योति सुरक्षित होने पर ही साधना का समापन पूर्ण है।')
      ],
      sources: [SOURCES.kalpa, SOURCES.fire]
    },
    fasting: {
      title: 'Vrat', titleHi: 'व्रत', icon: 'vrat', categories: ['home', 'festival'],
      summary: pair('A religious observance that may involve dietary restraint, prayer, discipline or service.', 'एक धार्मिक संकल्प जिसमें आहार-संयम, प्रार्थना, अनुशासन या सेवा सम्मिलित हो सकते हैं।'),
      time: pair('Observance varies', 'संकल्प अनुसार'), setting: pair('Personal or family', 'व्यक्तिगत या पारिवारिक'), guidance: pair('Health-aware guidance', 'स्वास्थ्य-सजग मार्गदर्शन'), tradition: pair('Highly tradition-dependent', 'अत्यंत परंपरा-आधारित'),
      caution: pair('Fasting may be unsafe with diabetes, pregnancy, some health conditions or medicines. Consult a qualified clinician and do not change medication independently.', 'मधुमेह, गर्भावस्था, कुछ स्वास्थ्य स्थितियों या दवाओं के साथ उपवास असुरक्षित हो सकता है। योग्य चिकित्सक से सलाह लें और स्वयं दवा न बदलें।'),
      materials: [material('Reliable observance information', 'विश्वसनीय व्रत जानकारी'), material('Family or temple guidance', 'परिवार या मंदिर मार्गदर्शन'), material('Appropriate food and hydration plan', 'उपयुक्त आहार और जल योजना'), material('Required medicines as prescribed', 'निर्देशानुसार आवश्यक दवाएँ'), material('Prayer or reading', 'प्रार्थना या पाठ'), material('A safe way to end the fast', 'व्रत खोलने की सुरक्षित व्यवस्था')],
      steps: [
        step('Understand the observance', 'व्रत समझें', 'Learn its purpose, timing and local form from a trusted source.', 'विश्वसनीय स्रोत से उद्देश्य, समय और स्थानीय रूप जानें।', 'Vrats vary widely; context prevents assumptions.', 'व्रत बहुत भिन्न होते हैं; संदर्भ गलत मान्यताओं से बचाता है।'),
        step('Check health needs', 'स्वास्थ्य जाँचें', 'Review medical conditions, pregnancy and medicines with a clinician when relevant.', 'आवश्यक हो तो चिकित्सक के साथ स्वास्थ्य स्थिति, गर्भावस्था और दवाओं की समीक्षा करें।', 'Safety takes priority over a rigid observance.', 'कठोर पालन से पहले सुरक्षा आती है।', 'Do not stop or reschedule medicine without professional advice.', 'विशेषज्ञ सलाह के बिना दवा बंद या पुनर्निर्धारित न करें।'),
        step('Choose an appropriate form', 'उपयुक्त रूप चुनें', 'Follow the form suitable to your health and family tradition.', 'अपने स्वास्थ्य और पारिवारिक परंपरा के अनुरूप रूप अपनाएँ।', 'Many traditions allow different forms of restraint and devotion.', 'अनेक परंपराओं में संयम और भक्ति के विविध रूप होते हैं।'),
        step('Make the sankalpa', 'संकल्प लें', 'State the intention simply and without comparing your observance with others.', 'संकल्प सरल रखें और अपने पालन की दूसरों से तुलना न करें।', 'The inner purpose matters more than display.', 'बाहरी प्रदर्शन से अधिक आंतरिक उद्देश्य महत्वपूर्ण है।'),
        step('Observe with awareness', 'सजगता से पालन', 'Maintain prayer, ethical conduct, rest and the food or hydration allowed in your form.', 'प्रार्थना, सदाचार, विश्राम और अपने व्रत में अनुमत आहार या जल का ध्यान रखें।', 'Vrat includes conduct and attention, not only food restriction.', 'व्रत केवल आहार-संयम नहीं, आचरण और सजगता भी है।'),
        step('End safely and gratefully', 'सुरक्षित समापन', 'Break the fast gently according to health needs and tradition.', 'स्वास्थ्य और परंपरा के अनुसार व्रत सहजता से खोलें।', 'A careful close respects both the vow and the body.', 'सावधान समापन संकल्प और शरीर दोनों का सम्मान करता है।', 'Stop and seek help for severe weakness, confusion, fainting or concerning symptoms.', 'अत्यधिक कमजोरी, भ्रम, बेहोशी या चिंताजनक लक्षण पर रुकें और सहायता लें।')
      ],
      sources: [SOURCES.fasting, SOURCES.kalpa]
    },
    charity: {
      title: 'Daan', titleHi: 'दान', icon: 'daan', categories: ['daily', 'home', 'beginner'],
      summary: pair('Charitable giving practised with generosity, discernment and responsibility.', 'उदारता, विवेक और उत्तरदायित्व के साथ किया जाने वाला दान।'),
      time: pair('As appropriate', 'उपयुक्त समय'), setting: pair('Direct or organised', 'प्रत्यक्ष या संस्थागत'), guidance: pair('Context matters', 'संदर्भ महत्वपूर्ण'), tradition: pair('Give without coercion', 'बिना दबाव दान'),
      caution: pair('Verify unfamiliar organisations, protect personal information and never give under pressure or beyond your means.', 'अपरिचित संस्थाओं की जाँच करें, निजी जानकारी सुरक्षित रखें और दबाव में या क्षमता से अधिक दान न दें।'),
      materials: [material('A clear intention', 'स्पष्ट उद्देश्य'), material('Verified recipient or organisation', 'सत्यापित प्राप्तकर्ता या संस्था'), material('Appropriate item or amount', 'उपयुक्त वस्तु या राशि'), material('Receipt where needed', 'आवश्यक हो तो रसीद'), material('Respect for recipient privacy', 'प्राप्तकर्ता की निजता का सम्मान'), material('No expectation of return', 'प्रतिफल की अपेक्षा नहीं')],
      steps: [
        step('Clarify the purpose', 'उद्देश्य स्पष्ट करें', 'Choose a need you understand rather than giving from social pressure.', 'सामाजिक दबाव के बजाय समझी हुई आवश्यकता चुनें।', 'Clarity supports responsible generosity.', 'स्पष्टता उत्तरदायी उदारता में सहायक है।'),
        step('Identify a real need', 'वास्तविक आवश्यकता जानें', 'Listen to the recipient or reliable local guidance.', 'प्राप्तकर्ता या विश्वसनीय स्थानीय मार्गदर्शन को सुनें।', 'Useful giving begins with attention.', 'उपयोगी दान ध्यान से आरंभ होता है।'),
        step('Verify when necessary', 'आवश्यक जाँच करें', 'Check unfamiliar organisations, campaigns and payment details.', 'अपरिचित संस्था, अभियान और भुगतान विवरण जाँचें।', 'Verification protects both giver and recipient.', 'सत्यापन दाता और प्राप्तकर्ता दोनों की रक्षा करता है।'),
        step('Choose an appropriate gift', 'उपयुक्त दान चुनें', 'Give within your means and in a form that is useful and dignified.', 'अपनी क्षमता के भीतर उपयोगी और सम्मानजनक रूप में दें।', 'Responsible giving should not create harm elsewhere.', 'उत्तरदायी दान अन्यत्र हानि नहीं बनाता।'),
        step('Give respectfully', 'सम्मान से दें', 'Protect privacy and avoid using another person’s need for display.', 'निजता रखें और किसी की आवश्यकता को प्रदर्शन न बनाएं।', 'Dignity is part of the gift.', 'सम्मान दान का ही भाग है।'),
        step('Release expectation', 'अपेक्षा छोड़ें', 'Do not demand praise, control or personal return.', 'प्रशंसा, नियंत्रण या निजी प्रतिफल की मांग न रखें।', 'Daan is traditionally associated with generosity without attachment.', 'दान को परंपरागत रूप से अनासक्त उदारता से जोड़ा जाता है।')
      ],
      sources: [SOURCES.kalpa]
    },
    yagna: {
      title: 'Yagna', titleHi: 'यज्ञ', icon: 'yagna', categories: ['puja', 'festival'],
      summary: pair('A Vedic fire offering with mantras and prescribed procedures learned within qualified traditions.', 'मंत्रों और निर्धारित विधियों सहित वैदिक अग्नि-अर्पण, जिसे योग्य परंपरा में सीखा जाता है।'),
      time: pair('Varies by ceremony', 'अनुष्ठान अनुसार'), setting: pair('Authorised, fire-safe place', 'अनुमत, अग्नि-सुरक्षित स्थान'), guidance: pair('Qualified supervision required', 'योग्य मार्गदर्शन आवश्यक'), tradition: pair('Procedure-specific', 'विधि-विशिष्ट'),
      caution: pair('This guide does not teach independent fire-ritual performance. Yagna requires a qualified practitioner, tradition-specific procedure and appropriate fire-safety arrangements.', 'यह मार्गदर्शिका स्वतंत्र अग्नि-अनुष्ठान करना नहीं सिखाती। यज्ञ के लिए योग्य आचार्य, परंपरा-विशिष्ट विधि और उपयुक्त अग्नि-सुरक्षा आवश्यक है।'),
      materials: [material('Qualified acharya or practitioner', 'योग्य आचार्य या पुरोहित'), material('Tradition-specific materials list', 'परंपरा-विशिष्ट सामग्री सूची'), material('Authorised fire-safe venue', 'अनुमत अग्नि-सुरक्षित स्थान'), material('Responsible adult supervision', 'उत्तरदायी वयस्क निगरानी'), material('Local fire-safety provisions', 'स्थानीय अग्नि-सुरक्षा व्यवस्था'), material('Clear participant roles', 'स्पष्ट सहभागी भूमिकाएँ')],
      steps: [
        step('Seek qualified guidance', 'योग्य मार्गदर्शन लें', 'Identify a practitioner trained in the relevant tradition and ceremony.', 'संबंधित परंपरा और अनुष्ठान में प्रशिक्षित आचार्य चुनें।', 'Vedic procedures and recitation are tradition-specific.', 'वैदिक विधि और उच्चारण परंपरा-विशिष्ट होते हैं।'),
        step('Confirm place and permission', 'स्थान और अनुमति', 'Use only a venue authorised and prepared for a controlled ritual fire.', 'केवल नियंत्रित अनुष्ठानिक अग्नि के लिए अनुमत और तैयार स्थान लें।', 'A suitable venue is a prerequisite, not an afterthought.', 'उपयुक्त स्थान पूर्व-आवश्यकता है, बाद की व्यवस्था नहीं।', 'Do not improvise a fire altar indoors or in restricted areas.', 'घर के भीतर या प्रतिबंधित स्थान में अग्निकुंड का स्वयं प्रयोग न करें।'),
        step('Follow the expert’s preparation', 'आचार्य की तैयारी मानें', 'Use only the materials, roles and sequence specified by the qualified guide.', 'योग्य मार्गदर्शक द्वारा बताई सामग्री, भूमिकाएँ और क्रम ही अपनाएँ।', 'Substitution can change both meaning and safety.', 'मनमाना परिवर्तन अर्थ और सुरक्षा दोनों बदल सकता है।'),
        step('Participate as directed', 'निर्देशानुसार सहभागिता', 'Recite or offer only when invited and instructed.', 'आमंत्रण और निर्देश मिलने पर ही पाठ या अर्पण करें।', 'Careful participation respects the rite and other participants.', 'सावधान सहभागिता अनुष्ठान और अन्य सहभागियों का सम्मान करती है।'),
        step('Maintain fire supervision', 'अग्नि निगरानी', 'Keep the fire continuously attended by designated responsible adults.', 'निर्धारित उत्तरदायी वयस्क अग्नि की निरंतर निगरानी रखें।', 'Open flame requires uninterrupted attention.', 'खुली अग्नि को निरंतर ध्यान चाहिए।', 'Keep children, loose clothing and flammable materials outside the safety boundary.', 'बच्चों, ढीले वस्त्र और ज्वलनशील वस्तुओं को सुरक्षा सीमा से बाहर रखें।'),
        step('Complete and make safe', 'समापन और सुरक्षा', 'Let the qualified team complete the rite, extinguish or secure embers, and clean the venue.', 'योग्य दल से समापन, अंगारों की सुरक्षा और स्थान की सफाई कराएँ।', 'The ceremony is not complete until the site is safe.', 'स्थान सुरक्षित होने तक अनुष्ठान पूर्ण नहीं है।')
      ],
      sources: [SOURCES.vedic, SOURCES.kalpa, SOURCES.fire]
    },
    japa: {
      title: 'Japa', titleHi: 'जप', icon: 'japa', categories: ['daily', 'home', 'beginner'],
      summary: pair('Repetitive mantra recitation used as a devotional and contemplative practice.', 'भक्ति और मनन की साधना के रूप में मंत्र का पुनरावृत्त पाठ।'),
      time: pair('Flexible practice', 'लचीला अभ्यास'), setting: pair('Quiet personal space', 'शांत व्यक्तिगत स्थान'), guidance: pair('Beginner overview', 'आरंभिक परिचय'), tradition: pair('Some mantras require initiation', 'कुछ मंत्र दीक्षा-आधारित'),
      caution: pair('Use a mantra supported in your tradition. Restricted or initiation-based mantras should be learned only from a qualified teacher.', 'अपनी परंपरा में मान्य मंत्र लें। प्रतिबंधित या दीक्षा-आधारित मंत्र केवल योग्य गुरु से सीखें।'),
      materials: [material('Supported mantra or divine name', 'मान्य मंत्र या ईश्वर नाम'), material('Comfortable seat', 'आरामदायक आसन'), material('Mala — optional', 'माला — वैकल्पिक'), material('Clean storage pouch for mala', 'माला के लिए स्वच्छ थैली'), material('Simple count or timer — optional', 'सरल गिनती या टाइमर — वैकल्पिक'), material('Quiet, unhurried interval', 'शांत, बिना जल्दबाजी का समय')],
      steps: [
        step('Choose a supported mantra', 'मान्य मंत्र चुनें', 'Use a mantra, nama or short prayer appropriate to your tradition.', 'अपनी परंपरा के अनुरूप मंत्र, नाम या छोटी प्रार्थना चुनें।', 'A supported practice preserves meaning and pronunciation.', 'मान्य साधना अर्थ और उच्चारण की रक्षा करती है।'),
        step('Prepare the place', 'स्थान तैयार करें', 'Sit in a clean, calm place where you can remain undisturbed.', 'स्वच्छ और शांत स्थान पर बैठें जहाँ व्यवधान कम हो।', 'A simple setting supports continuity.', 'सरल स्थान निरंतरता में सहायक है।'),
        step('Set a modest count', 'सरल संख्या चुनें', 'Begin with a realistic count or duration rather than forcing 108 repetitions.', '108 को बाध्य करने के बजाय यथार्थ संख्या या समय से आरंभ करें।', 'Steady practice matters more than an impressive number.', 'बड़ी संख्या से अधिक स्थिर अभ्यास महत्वपूर्ण है।'),
        step('Recite clearly', 'स्पष्ट जप करें', 'Keep the pace comfortable and the pronunciation as taught.', 'गति सहज और उच्चारण सीखे अनुसार रखें।', 'Clarity helps retain attention and meaning.', 'स्पष्टता ध्यान और अर्थ बनाए रखती है।'),
        step('Use the mala gently', 'माला सहज चलाएँ', 'If customary, move one bead at a time without strain or display.', 'जहाँ परंपरा हो, बिना तनाव या प्रदर्शन एक-एक मनका चलाएँ।', 'The mala is a counting aid, not a measure of worth.', 'माला गिनती का साधन है, योग्यता का माप नहीं।'),
        step('Return and close', 'लौटें और समापन करें', 'When distracted, return to the mantra; close with a moment of quiet gratitude.', 'ध्यान भटके तो मंत्र पर लौटें; शांत कृतज्ञता के साथ समाप्त करें।', 'Returning gently builds continuity.', 'सहज वापसी निरंतरता बनाती है।')
      ],
      sources: [SOURCES.kalpa]
    }
  };

  IDS.forEach(function (id) { R[id].id = id; });

  function language() { return typeof currentLang !== 'undefined' && currentLang === 'hi' ? 'hi' : 'en'; }
  function txt(value) { return value && typeof value === 'object' ? value[language()] : String(value || ''); }
  function esc(value) { return String(value || '').replace(/[&<>"']/g, function (char) { return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]; }); }

  function icon(name) {
    var paths = {
      puja: '<path d="M5 15h14l-1.4 4H6.4z"/><path d="M8 14c1.1-3 2.3-4.6 4-7 1.7 2.4 2.9 4 4 7"/><path d="M12 7V3"/>',
      yoga: '<circle cx="12" cy="5" r="2"/><path d="M12 7.5v5m0 0-4-3m4 3 4-3M8 20l4-4 4 4M5 20h14"/>',
      meditation: '<circle cx="12" cy="5" r="2"/><path d="M12 8v5m-5-1 5 3 5-3M4 20c2.2-3 4.8-4 8-4s5.8 1 8 4M7 20h10"/>',
      aarti: '<path d="M6 11h12l-1 3H7zM9 15h6m-4 0v5m-3 0h8"/><path d="M9 9c.2-2 1.4-3.4 3-5 1.6 1.6 2.8 3 3 5"/>',
      vrat: '<path d="M4 15c2 4 14 4 16 0H4z"/><path d="M7 14c0-3 4-3 4 0m2 0c0-4 5-4 5 0M9 8c1-2 3-2 4 0"/><path d="M12 7V4"/>',
      daan: '<path d="M3 13c3-1 5 0 8 3l2 2H8l-5-3m18-2c-3-1-5 0-8 3m8-3v3l-5 3"/><path d="M12 13c-3-2-3-6 0-6 3 0 3 4 0 6z"/>',
      yagna: '<path d="M5 15h14l-2 6H7zM7 18h10"/><path d="M9 14c-1-3 2-4 2-7 3 2 5 4 4 7m-4 0c-1-2 1-3 2-4 1 2 1 3 0 4"/>',
      japa: '<circle cx="12" cy="5" r="1.2"/><circle cx="8" cy="6.5" r="1.2"/><circle cx="5.5" cy="10" r="1.2"/><circle cx="5" cy="14" r="1.2"/><circle cx="7" cy="17.5" r="1.2"/><circle cx="12" cy="19" r="1.2"/><circle cx="17" cy="17.5" r="1.2"/><circle cx="19" cy="14" r="1.2"/><circle cx="18.5" cy="10" r="1.2"/><circle cx="16" cy="6.5" r="1.2"/><path d="M12 20v2m0 0-2-1m2 1 2-1"/>',
      clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v6l4 2"/>',
      home: '<path d="m3 11 9-7 9 7M5 10v10h14V10M9 20v-6h6v6"/>',
      person: '<circle cx="12" cy="6" r="3"/><path d="M5 21c.8-5 3.2-7 7-7s6.2 2 7 7z"/>',
      book: '<path d="M3 5c4-1 7 0 9 2v13c-2-2-5-3-9-2V5zm18 0c-4-1-7 0-9 2v13c2-2 5-3 9-2V5z"/>',
      fire: '<path d="M12 3c3 4 5 6 5 10a5 5 0 0 1-10 0c0-2 1-4 3-6 0 4 2 5 2 5 2-2 1-5 0-9z"/>',
      bookmark: '<path d="M6 3h12v18l-6-4-6 4V3z"/>',
      print: '<path d="M7 8V3h10v5M7 17H4v-7h16v7h-3M7 14h10v7H7z"/><path d="M17 11h1"/>',
      check: '<circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/>',
      info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7h.01"/>',
      calendar: '<rect x="4" y="5" width="16" height="15" rx="2"/><path d="M8 3v4m8-4v4M4 10h16"/>',
      arrow: '<path d="M4 12h16m-6-6 6 6-6 6"/>'
    };
    return '<svg class="ritual-icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.55" stroke-linecap="round" stroke-linejoin="round">' + (paths[name] || paths.puja) + '</svg>';
  }

  function favoriteButton(d, compact) {
    return '<button type="button" class="ritual-save-button favorite-btn' + (compact ? ' compact' : '') + '" data-content-id="ritual-' + d.id + '" data-content-title="' + esc(d.titleHi) + '" data-content-title-en="' + esc(d.title) + ' Guide" data-section="rituals" onclick="event.stopPropagation();ritualToggleFavorite(this)" aria-label="' + (language() === 'hi' ? 'सहेजें' : 'Save guide') + '">' + icon('bookmark') + '<span>' + (language() === 'hi' ? 'सहेजें' : 'Save Guide') + '</span></button>';
  }

  function metaItem(iconName, label, value) {
    return '<span class="ritual-meta-item">' + icon(iconName) + '<span><b>' + label + '</b><small>' + value + '</small></span></span>';
  }

  function libraryCard(d, index) {
    var search = [d.title, d.titleHi, txt(d.summary), txt(d.setting), txt(d.guidance)].join(' ').toLocaleLowerCase();
    return '<article class="ritual-library-card" data-ritual-id="' + d.id + '" data-ritual-categories="' + d.categories.join(' ') + '" data-ritual-search="' + esc(search) + '" onclick="showText(\'' + d.id + '\')" tabindex="0" onkeydown="if(event.key===\'Enter\'||event.key===\' \'){event.preventDefault();showText(\'' + d.id + '\')}">' +
      favoriteButton(d, true) + '<div class="ritual-card-art">' + icon(d.icon) + '</div><div class="ritual-card-copy"><h3><span>' + (index + 1) + '.</span> ' + d.title + ' <em>/ ' + d.titleHi + '</em></h3><p>' + txt(d.summary) + '</p><div class="ritual-card-meta">' + metaItem('clock', language() === 'hi' ? 'समय' : 'Time', txt(d.time)) + metaItem('person', language() === 'hi' ? 'मार्गदर्शन' : 'Guidance', txt(d.guidance)) + '</div><div class="ritual-card-footer"><span>' + txt(d.setting) + '</span><button type="button" tabindex="-1">' + (language() === 'hi' ? 'मार्गदर्शिका' : 'View Guide') + ' <b>→</b></button></div></div></article>';
  }

  function featuredCard() {
    var d = R.puja;
    return '<article class="ritual-featured-card"><img src="assets/ritual-puja-hero.webp" alt="A safely arranged puja thali with diya, kalash, flowers and simple offerings" width="1920" height="768"><div class="ritual-featured-copy"><div><h3>Puja <span>/ पूजा</span></h3>' + favoriteButton(d, true) + '</div><p>' + txt(d.summary) + '</p><div class="ritual-featured-meta">' + metaItem('clock', language() === 'hi' ? 'समय' : 'Time', txt(d.time)) + metaItem('person', language() === 'hi' ? 'मार्गदर्शन' : 'Guidance', txt(d.guidance)) + metaItem('home', language() === 'hi' ? 'स्थान' : 'Setting', txt(d.setting)) + '</div><button type="button" class="ritual-primary-action" onclick="showText(\'puja\')">' + (language() === 'hi' ? 'पूजा मार्गदर्शिका देखें' : 'View Puja Guide') + '</button><small>' + icon('info') + txt(d.caution) + '</small></div></article>';
  }

  function applyFilters() {
    var section = document.getElementById('rituals');
    if (!section) return;
    var query = ((document.getElementById('ritual-search') || {}).value || '').trim().toLocaleLowerCase();
    var category = section.getAttribute('data-ritual-filter') || 'all';
    var visible = 0;
    Array.prototype.forEach.call(section.querySelectorAll('.ritual-library-card'), function (card) {
      var categories = (card.getAttribute('data-ritual-categories') || '').split(' ');
      var ok = (category === 'all' || categories.indexOf(category) !== -1) && (!query || (card.getAttribute('data-ritual-search') || '').indexOf(query) !== -1);
      card.hidden = !ok;
      if (ok) visible += 1;
    });
    var empty = document.getElementById('ritual-no-results');
    if (empty) empty.hidden = visible !== 0;
  }

  function renderLibrary() {
    var grid = document.getElementById('ritual-card-grid');
    var featured = document.getElementById('ritual-featured-card');
    if (!grid || !featured) return;
    grid.innerHTML = IDS.map(function (id, index) { return libraryCard(R[id], index); }).join('');
    featured.innerHTML = featuredCard();
    var input = document.getElementById('ritual-search');
    if (input) input.placeholder = input.getAttribute('data-placeholder-' + language());
    paintFavorites(document.getElementById('rituals'));
    applyFilters();
  }

  window.filterRituals = function (category, button) {
    var section = document.getElementById('rituals');
    if (!section) return;
    section.setAttribute('data-ritual-filter', category || 'all');
    Array.prototype.forEach.call(section.querySelectorAll('.ritual-filter'), function (candidate) {
      var active = candidate === button;
      candidate.classList.toggle('active', active);
      candidate.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
    applyFilters();
  };
  window.searchRituals = applyFilters;
  window.ritualToggleFilters = function (button) {
    var row = document.querySelector('#rituals .ritual-filter-row');
    if (!row) return;
    var open = row.classList.toggle('mobile-open');
    button.setAttribute('aria-expanded', open ? 'true' : 'false');
  };
  window.ritualScrollToLibrary = function () { var el = document.getElementById('ritual-library-content'); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); };
  window.ritualScrollToPathway = function () { var el = document.getElementById('ritual-pathway'); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' }); };

  function materialList(d) {
    return '<details class="ritual-materials" open><summary><span>' + (language() === 'hi' ? 'आवश्यक सामग्री' : 'Materials & Preparation') + '</span><b>⌄</b></summary><div><div class="ritual-material-grid">' + d.materials.map(function (entry, index) {
      return '<label><input type="checkbox" data-ritual-material="' + index + '"><span>' + txt(entry) + '</span></label>';
    }).join('') + '</div><p>' + icon('info') + (language() === 'hi' ? 'केवल वही सामग्री लें जो उपलब्ध, सुरक्षित और आपकी परंपरा में उपयुक्त हो; हर वस्तु हर विधि में अनिवार्य नहीं।' : 'Use what is available, safe and customary; not every item is required in every tradition.') + '</p><button type="button" onclick="ritualCheckAllMaterials(this)">' + icon('check') + '<span>' + (language() === 'hi' ? 'सभी तैयार चिह्नित करें' : 'Check all prepared') + '</span></button></div></details>';
  }

  function stepRows(d) {
    return '<section class="ritual-procedure"><h2>' + (language() === 'hi' ? 'क्रमबद्ध मार्गदर्शिका' : 'Step-by-step Guide') + '<span> · ' + (language() === 'hi' ? d.titleHi : d.title) + '</span></h2><div class="ritual-step-list">' + d.steps.map(function (entry, index) {
      return '<article class="ritual-step-row" data-ritual-step="' + index + '"><button type="button" class="ritual-step-number" onclick="ritualFocusStep(' + index + ')">' + (index + 1) + '</button><div class="ritual-step-copy"><h3>' + txt(entry.title) + '</h3><p>' + txt(entry.instruction) + '</p>' + (entry.caution ? '<small class="ritual-inline-caution">' + icon('fire') + txt(entry.caution) + '</small>' : '') + '</div><aside><b>' + (language() === 'hi' ? 'यह चरण क्यों' : 'Why this step matters') + '</b><p>' + txt(entry.why) + '</p></aside><label class="ritual-step-check"><input type="checkbox" data-ritual-check="' + index + '" onchange="ritualToggleStep(' + index + ',this)"><span>' + (language() === 'hi' ? 'पूर्ण' : 'Mark complete') + '</span></label><button type="button" class="ritual-step-next" onclick="ritualFocusStep(' + Math.min(index + 1, d.steps.length - 1) + ')" aria-label="' + (language() === 'hi' ? 'अगला चरण' : 'Next step') + '">' + icon('arrow') + '</button></article>';
    }).join('') + '</div></section>';
  }

  function progressNav(d) {
    return '<aside class="ritual-progress-nav"><h2>' + (language() === 'hi' ? 'मार्गदर्शिका प्रगति' : 'Guide Progress') + '</h2><p><span data-ritual-count>0</span> ' + (language() === 'hi' ? 'पूर्ण' : 'complete') + '</p><div class="ritual-progress-track"><b data-ritual-progress></b></div><ol>' + d.steps.map(function (entry, index) { return '<li><button type="button" data-ritual-nav-step="' + index + '" onclick="ritualFocusStep(' + index + ')"><b>' + (index + 1) + '</b><span>' + txt(entry.title) + '</span></button></li>'; }).join('') + '</ol><button type="button" class="ritual-progress-action" onclick="ritualCompleteCurrent()">' + icon('check') + '<span>' + (language() === 'hi' ? 'वर्तमान चरण पूर्ण' : 'Mark current step complete') + '</span></button><button type="button" class="ritual-reset" onclick="ritualResetGuide()">↻ ' + (language() === 'hi' ? 'चेकलिस्ट रीसेट' : 'Reset checklist') + '</button></aside>';
  }

  function sourceLinks(d) {
    return '<ul>' + d.sources.map(function (entry) { return '<li><a href="' + entry.url + '" target="_blank" rel="noopener">' + esc(entry.name) + ' ↗</a></li>'; }).join('') + '</ul>';
  }

  function relatedCards(id) {
    var index = IDS.indexOf(id);
    var related = [IDS[(index + IDS.length - 1) % IDS.length], IDS[(index + 1) % IDS.length], 'puja'].filter(function (value, position, list) { return value !== id && list.indexOf(value) === position; });
    return '<div class="ritual-related-grid">' + related.map(function (relatedId) {
      var d = R[relatedId];
      return '<button type="button" onclick="showText(\'' + relatedId + '\')">' + icon(d.icon) + '<span><strong>' + d.title + ' / ' + d.titleHi + '</strong><small>' + txt(d.guidance) + '</small></span><b>›</b></button>';
    }).join('') + '<button type="button" onclick="showSection(\'festival-calendar\')">' + icon('calendar') + '<span><strong>' + (language() === 'hi' ? 'उत्सव पंचांग' : 'Festival Calendar') + '</strong><small>' + (language() === 'hi' ? 'तिथि और पालन' : 'Dates and observances') + '</small></span><b>›</b></button></div>';
  }

  function completionAside(d) {
    return '<aside class="ritual-guide-aside"><section class="ritual-completion-card"><span>' + (language() === 'hi' ? 'पूर्णता स्थिति' : 'Completion state') + '</span>' + icon('check') + '<h2 data-ritual-completion-title>' + (language() === 'hi' ? 'मार्गदर्शिका प्रगति' : 'Guide in Progress') + '</h2><strong><b data-ritual-complete-count>0</b> / ' + d.steps.length + ' ' + (language() === 'hi' ? 'चरण' : 'steps') + '</strong><p>' + (language() === 'hi' ? 'शांत गति रखें और अपनी पारिवारिक या परंपरागत रीति के अनुसार समापन करें।' : 'Move at a calm pace and conclude according to your family or tradition.') + '</p><button type="button" onclick="ritualReturnToLibrary()">' + (language() === 'hi' ? 'अनुष्ठानों पर लौटें' : 'Return to Rituals') + '</button><button type="button" class="outline" onclick="ritualFocusStep(0)">' + (language() === 'hi' ? 'चरण पुनः देखें' : 'Review steps') + '</button></section><section class="ritual-source-card">' + icon('book') + '<h2>' + (language() === 'hi' ? 'स्रोत और पद्धति' : 'Sources & Methodology') + '</h2><p>' + (language() === 'hi' ? 'यह शैक्षिक मार्गदर्शिका व्यापक रूप से ज्ञात तत्वों का परिचय देती है। पारिवारिक, संप्रदाय और क्षेत्रीय विधियाँ भिन्न हो सकती हैं।' : 'This educational guide summarises widely known elements. Family, lineage and regional procedures can differ significantly.') + '</p>' + sourceLinks(d) + '</section></aside>';
  }

  window.renderRitualReader = function (id) {
    var d = R[id];
    if (!d) return '';
    var hi = language() === 'hi';
    return '<article class="ritual-reader" data-ritual-id="' + id + '" data-ritual-current="0" style="--ritual-hero-image:url(\'assets/ritual-puja-hero.webp\')"><nav class="ritual-breadcrumb" aria-label="Breadcrumb"><button type="button" onclick="ritualReturnToLibrary()">' + (hi ? 'होम' : 'Home') + '</button><span>/</span><button type="button" onclick="ritualReturnToLibrary()">' + (hi ? 'अनुष्ठान' : 'Rituals & Practices') + '</button><span>/</span><strong>' + (hi ? d.titleHi : d.title) + '</strong></nav><section class="ritual-detail-hero"><div class="ritual-detail-copy"><p class="ritual-kicker">' + (hi ? 'शैक्षिक अभ्यास मार्गदर्शिका' : 'Educational practice guide') + '</p><h1>' + d.title + '<span>' + d.titleHi + '</span></h1><p>' + txt(d.summary) + '</p><small>' + (hi ? 'रीतियाँ क्षेत्र, संप्रदाय और पारिवारिक परंपरा के अनुसार बदलती हैं।' : 'Customs vary by region, sampradaya and family tradition.') + '</small><div class="ritual-detail-meta">' + metaItem('clock', hi ? 'समय' : 'Approx. time', txt(d.time)) + metaItem('calendar', hi ? 'अवसर' : 'Setting', txt(d.setting)) + metaItem('person', hi ? 'मार्गदर्शन' : 'Guidance', txt(d.guidance)) + metaItem('home', hi ? 'परंपरा' : 'Tradition', txt(d.tradition)) + '</div><div class="ritual-detail-actions">' + favoriteButton(d, false) + '<button type="button" class="ritual-secondary-action" onclick="ritualPrintGuide()">' + icon('print') + '<span>' + (hi ? 'प्रिंट-अनुकूल दृश्य' : 'Print-friendly View') + '</span></button><div><button type="button" onclick="ritualChangeTextSize(-.08)">A−</button><button type="button" onclick="ritualChangeTextSize(.08)">A+</button></div></div></div></section><section class="ritual-before-card"><div>' + icon('book') + '<span><h2>' + (hi ? 'आरंभ से पहले' : 'Before you begin') + '</h2><p>' + (hi ? 'यह शैक्षिक परिचय है। पारिवारिक रीति का सम्मान करें और परंपरा-विशिष्ट विधि के लिए योग्य आचार्य या प्रशिक्षक से सीखें।' : 'This is an educational overview. Follow family customs and consult a qualified practitioner for tradition-specific procedures.') + '</p></span></div><div class="ritual-warning">' + icon(id === 'yagna' || id === 'aarti' || id === 'puja' ? 'fire' : 'info') + '<span>' + txt(d.caution) + '</span></div></section><div class="ritual-reader-layout">' + progressNav(d) + '<main class="ritual-reader-main"><section class="ritual-mobile-progress"><div><h2>' + (hi ? 'मार्गदर्शिका प्रगति' : 'Guide Progress') + ' · <span data-ritual-count>0</span> / ' + d.steps.length + '</h2><div class="ritual-progress-track"><b data-ritual-progress></b></div></div><button type="button" onclick="ritualCompleteCurrent()">' + icon('check') + '<span data-ritual-current-label>' + (hi ? 'चरण 1 पूर्ण करें' : 'Complete step 1') + '</span></button><button type="button" onclick="ritualResetGuide()">↻ ' + (hi ? 'रीसेट' : 'Reset') + '</button></section>' + materialList(d) + stepRows(d) + '<section class="ritual-reader-related"><h2>' + (hi ? 'संबंधित साधनाएँ' : 'Related Resources') + '</h2>' + relatedCards(id) + '</section></main>' + completionAside(d) + '</div><section class="ritual-source-note"><span class="ritual-source-icon">▤</span><div><h2>' + (hi ? 'परंपरा और स्रोत टिप्पणी' : 'Tradition & Source Note') + '</h2><p>' + (hi ? 'ये मार्गदर्शिकाएँ किसी एक विधि को सार्वभौमिक नहीं मानतीं। स्थानीय आचार्य, मंदिर और पारिवारिक परंपरा का सम्मान करें।' : 'These guides do not treat one procedure as universal. Respect local teachers, temples and family traditions.') + '</p></div><a href="' + d.sources[0].url + '" target="_blank" rel="noopener">' + (hi ? 'मुख्य स्रोत देखें ↗' : 'View primary source ↗') + '</a></section><nav class="ritual-mobile-step-nav" aria-label="Guide step navigation"><button type="button" onclick="ritualMoveStep(-1)">← <span>' + (hi ? 'पिछला चरण' : 'Previous Step') + '</span></button><b data-ritual-mobile-step>' + (hi ? 'चरण 1' : 'Step 1') + ' / ' + d.steps.length + '</b><button type="button" onclick="ritualMoveStep(1)"><span>' + (hi ? 'अगला चरण' : 'Next Step') + '</span> →</button></nav></article>';
  };

  function currentReader() { return document.querySelector('#text-display .ritual-reader'); }
  function currentData() { var reader = currentReader(); return reader ? R[reader.getAttribute('data-ritual-id')] : null; }
  function storageKey(id) { return 'sanatan-ritual-guide-' + id; }
  function loadState(id, count) {
    var fallback = { checked: [], materials: [] };
    try {
      var parsed = JSON.parse(localStorage.getItem(storageKey(id)) || 'null');
      if (parsed && Array.isArray(parsed.checked)) fallback.checked = parsed.checked.filter(function (n) { return Number.isInteger(n) && n >= 0 && n < count; });
      if (parsed && Array.isArray(parsed.materials)) fallback.materials = parsed.materials;
    } catch (error) {}
    return fallback;
  }
  function saveState(reader) {
    if (!reader) return;
    var checked = Array.prototype.map.call(reader.querySelectorAll('[data-ritual-check]'), function (box, index) { return box.checked ? index : -1; }).filter(function (index) { return index >= 0; });
    var materials = Array.prototype.map.call(reader.querySelectorAll('[data-ritual-material]'), function (box) { return box.checked; });
    try { localStorage.setItem(storageKey(reader.getAttribute('data-ritual-id')), JSON.stringify({ checked: checked, materials: materials })); } catch (error) {}
  }
  function paintProgress() {
    var reader = currentReader();
    var d = currentData();
    if (!reader || !d) return;
    var boxes = reader.querySelectorAll('[data-ritual-check]');
    var complete = Array.prototype.filter.call(boxes, function (box) { return box.checked; }).length;
    var percent = Math.round(complete / d.steps.length * 100);
    var current = Math.max(0, Math.min(d.steps.length - 1, Number(reader.getAttribute('data-ritual-current') || 0)));
    reader.querySelectorAll('[data-ritual-count]').forEach(function (el) { el.textContent = complete; });
    reader.querySelectorAll('[data-ritual-complete-count]').forEach(function (el) { el.textContent = complete; });
    reader.querySelectorAll('[data-ritual-progress]').forEach(function (el) { el.style.width = percent + '%'; });
    reader.querySelectorAll('[data-ritual-nav-step]').forEach(function (button, index) { button.classList.toggle('active', index === current); button.classList.toggle('complete', !!boxes[index] && boxes[index].checked); });
    reader.querySelectorAll('.ritual-step-row').forEach(function (row, index) { row.classList.toggle('active', index === current); row.classList.toggle('complete', !!boxes[index] && boxes[index].checked); });
    var title = reader.querySelector('[data-ritual-completion-title]');
    if (title) title.textContent = complete === d.steps.length ? (language() === 'hi' ? 'मार्गदर्शिका पूर्ण' : 'Guide Complete') : (language() === 'hi' ? 'मार्गदर्शिका प्रगति' : 'Guide in Progress');
    var card = reader.querySelector('.ritual-completion-card');
    if (card) card.classList.toggle('complete', complete === d.steps.length);
    var currentLabel = reader.querySelector('[data-ritual-current-label]');
    if (currentLabel) currentLabel.textContent = language() === 'hi' ? 'चरण ' + (current + 1) + ' पूर्ण करें' : 'Complete step ' + (current + 1);
    var mobile = reader.querySelector('[data-ritual-mobile-step]');
    if (mobile) mobile.textContent = (language() === 'hi' ? 'चरण ' : 'Step ') + (current + 1) + ' / ' + d.steps.length;
  }

  window.ritualFocusStep = function (index) {
    var reader = currentReader();
    var d = currentData();
    if (!reader || !d) return;
    index = Math.max(0, Math.min(d.steps.length - 1, Number(index || 0)));
    reader.setAttribute('data-ritual-current', index);
    paintProgress();
    var target = reader.querySelector('[data-ritual-step="' + index + '"]');
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };
  window.ritualMoveStep = function (delta) { var reader = currentReader(); if (!reader) return; ritualFocusStep(Number(reader.getAttribute('data-ritual-current') || 0) + Number(delta || 0)); };
  window.ritualToggleStep = function (index, box) { var reader = currentReader(); if (!reader) return; reader.setAttribute('data-ritual-current', index); saveState(reader); paintProgress(); };
  window.ritualCompleteCurrent = function () {
    var reader = currentReader();
    var d = currentData();
    if (!reader || !d) return;
    var index = Number(reader.getAttribute('data-ritual-current') || 0);
    var box = reader.querySelector('[data-ritual-check="' + index + '"]');
    if (box) box.checked = true;
    saveState(reader);
    paintProgress();
    if (index < d.steps.length - 1) ritualFocusStep(index + 1);
  };
  window.ritualResetGuide = function () {
    var reader = currentReader();
    if (!reader) return;
    reader.querySelectorAll('input[type="checkbox"]').forEach(function (box) { box.checked = false; });
    reader.setAttribute('data-ritual-current', 0);
    saveState(reader);
    paintProgress();
  };
  window.ritualCheckAllMaterials = function (button) {
    var reader = currentReader();
    if (!reader) return;
    var boxes = reader.querySelectorAll('[data-ritual-material]');
    var shouldCheck = Array.prototype.some.call(boxes, function (box) { return !box.checked; });
    boxes.forEach(function (box) { box.checked = shouldCheck; });
    saveState(reader);
    if (button) button.classList.toggle('complete', shouldCheck);
  };

  function paintFavorite(button) {
    if (!button) return;
    var saved = button.classList.contains('favorited');
    var label = saved ? (language() === 'hi' ? 'सहेजा गया' : 'Saved') : (language() === 'hi' ? 'सहेजें' : 'Save Guide');
    button.innerHTML = icon('bookmark') + '<span>' + label + '</span>';
    button.setAttribute('aria-label', label);
    button.setAttribute('aria-pressed', saved ? 'true' : 'false');
  }
  function paintFavorites(root) {
    if (!root) return;
    root.querySelectorAll('.ritual-save-button').forEach(function (button) {
      paintFavorite(button);
      if (typeof loadFavoriteStatus === 'function' && typeof currentUser !== 'undefined' && currentUser) {
        Promise.resolve(loadFavoriteStatus(button.dataset.contentId, button)).then(function () { paintFavorite(button); });
      }
    });
  }
  window.ritualToggleFavorite = async function (button) { if (typeof toggleFavorite !== 'function') return; await toggleFavorite(button); paintFavorite(button); };
  window.ritualChangeTextSize = function (delta) {
    var reader = currentReader();
    if (!reader) return;
    var scale = Number(reader.style.getPropertyValue('--ritual-text-scale') || 1);
    scale = Math.max(.86, Math.min(1.24, scale + Number(delta || 0)));
    reader.style.setProperty('--ritual-text-scale', String(scale));
    try { localStorage.setItem('sanatan-ritual-text-scale', String(scale)); } catch (error) {}
  };
  window.ritualPrintGuide = function () { window.print(); };
  window.ritualReturnToLibrary = function () {
    var display = document.getElementById('text-display');
    if (display) { display.style.display = 'none'; display.classList.remove('ritual-display'); }
    if (typeof showSection === 'function') showSection('rituals');
    var section = document.getElementById('rituals');
    if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  window.initRitualReader = function () {
    var reader = currentReader();
    var d = currentData();
    if (!reader || !d) return;
    var state = loadState(d.id, d.steps.length);
    reader.querySelectorAll('[data-ritual-check]').forEach(function (box, index) { box.checked = state.checked.indexOf(index) !== -1; });
    reader.querySelectorAll('[data-ritual-material]').forEach(function (box, index) { box.checked = !!state.materials[index]; box.addEventListener('change', function () { saveState(reader); }); });
    var scale = 1;
    try { scale = Math.max(.86, Math.min(1.24, Number(localStorage.getItem('sanatan-ritual-text-scale') || 1))); } catch (error) {}
    reader.style.setProperty('--ritual-text-scale', String(scale));
    paintFavorites(reader);
    paintProgress();
  };
  window.initRitualLibrary = renderLibrary;

  var previousToggleLanguage = window.toggleLanguage;
  if (typeof previousToggleLanguage === 'function') {
    window.toggleLanguage = function () {
      var result = previousToggleLanguage.apply(this, arguments);
      window.setTimeout(function () {
        var section = document.getElementById('rituals');
        if (section && section.classList.contains('active')) renderLibrary();
      }, 0);
      return result;
    };
  }
  document.addEventListener('DOMContentLoaded', renderLibrary);
})();
