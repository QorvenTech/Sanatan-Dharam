/* Complete responsive readers for the remaining Paath Mandir texts. */
(function () {
  'use strict';

  var bajrangMeanings = [
    ['Hanuman completes the auspicious works of those who approach him with firm faith, love, humility and respect.','जो दृढ़ विश्वास, प्रेम, विनय और सम्मान से हनुमान जी की शरण लेते हैं, उनके सभी शुभ कार्य वे सिद्ध करते हैं।'],
    ['Victory to benevolent Hanuman, protector of saints; please listen to this devotee’s prayer.','संतों का हित करने वाले हनुमान जी की जय हो; कृपया अपने भक्त की प्रार्थना सुनिए।'],
    ['Do not delay the work of your devotee; come swiftly and grant relief and happiness.','अपने भक्त का कार्य करने में विलंब न कीजिए; शीघ्र आकर दुःख दूर कर सुख प्रदान कीजिए।'],
    ['You crossed the ocean and overcame Surasa’s test through courage and intelligence.','आपने समुद्र लाँघा और साहस व बुद्धि से सुरसा की परीक्षा पार की।'],
    ['When Lankini blocked the way, you defeated her and entered Lanka fearlessly.','लंकिनी ने मार्ग रोका तो आपने उसे परास्त कर निर्भय होकर लंका में प्रवेश किया।'],
    ['You comforted Vibhishana and attained the blessed sight of Mother Sita.','आपने विभीषण को सुख दिया और माता सीता के पवित्र दर्शन किए।'],
    ['You uprooted the garden and displayed a power before which even the agents of death tremble.','आपने वाटिका उजाड़ी और ऐसा पराक्रम दिखाया जिससे मृत्यु के दूत भी भयभीत हो उठे।'],
    ['You defeated Akshaya Kumar and burned Lanka with your flame-wrapped tail.','आपने अक्षय कुमार का वध किया और अग्नि से लिपटी पूँछ द्वारा लंका जला दी।'],
    ['Lanka burned like dry resin, while the heavens resounded with praise of your victory.','लंका सूखे लाख समान जल उठी और देवताओं ने आकाश में आपकी जय-जयकार की।'],
    ['O indwelling Lord, why delay now? Please show compassion and come to the devotee’s aid.','हे अंतर्यामी स्वामी, अब विलंब क्यों? कृपा करके भक्त की सहायता के लिए आइए।'],
    ['Glory to the saviour of Lakshmana’s life; come quickly and bring this suffering to an end.','लक्ष्मण के प्राण बचाने वाले प्रभु की जय; शीघ्र आकर इस दुःख का अंत कीजिए।'],
    ['Glory to the mighty bearer of the mountain, ocean of joy and heroic leader honoured by the gods.','पर्वत उठाने वाले, सुख के सागर और देवताओं द्वारा पूजित समर्थ वीर की जय हो।'],
    ['The forceful invocation calls upon steadfast Hanuman to shatter hostile and harmful forces like a thunderbolt.','यह प्रबल आह्वान हठीले हनुमान जी से वज्र समान सभी शत्रुतापूर्ण और हानिकारक शक्तियाँ नष्ट करने की प्रार्थना है।'],
    ['Take up the mace and thunderbolt, defeat adversity and rescue your servant, O Lord.','हे प्रभु, गदा और वज्र धारण कर विपत्ति को हराइए और अपने सेवक का उद्धार कीजिए।'],
    ['Come at once with your mighty roar and thunderbolt mace; do not delay.','अपनी प्रचंड हुंकार और वज्र-गदा के साथ तुरंत आइए, विलंब न कीजिए।'],
    ['These sacred seed sounds invoke Hanuman, lord of the vanaras, to protect body, heart and mind.','ये पवित्र बीज ध्वनियाँ वानरराज हनुमान जी का आह्वान कर शरीर, हृदय और मन की रक्षा माँगती हैं।'],
    ['By the oath of Hari, reveal your protecting power and rush forth as Lord Rama’s messenger.','हरि की शपथ से अपनी रक्षक शक्ति प्रकट कीजिए और श्रीराम के दूत बनकर शीघ्र आइए।'],
    ['Victory to unfathomable Hanuman; the devotee asks why suffering persists under his compassionate protection.','अगाध हनुमान जी की जय; भक्त पूछता है कि आपकी करुणामयी शरण में उसे दुःख क्यों मिले।'],
    ['I do not know elaborate worship, recitation, austerity or rules; I know only that I am your servant.','मैं पूजा, जप, तप और कठिन नियम नहीं जानता; केवल इतना जानता हूँ कि मैं आपका सेवक हूँ।'],
    ['Relying on your strength, I remain fearless in forests, paths, mountains and homes.','आपके बल पर भरोसा रखकर मैं वन, मार्ग, पर्वत और घर—हर स्थान पर निर्भय रहता हूँ।'],
    ['I fall at your feet with folded hands; in this moment of need, whom else can I call?','मैं हाथ जोड़कर आपके चरणों में गिरता हूँ; इस आवश्यकता की घड़ी में आपके सिवा किसे पुकारूँ?'],
    ['Victory to mighty Anjani’s son, the heroic Hanuman and divine son of Shiva.','बलवान अंजनीपुत्र, शिवसुवन वीर हनुमान जी की जय हो।'],
    ['Your fierce form destroys the forces of death, while you eternally protect those supported by Lord Rama.','आपका विकराल रूप काल की शक्तियों का नाश करता है और श्रीराम की शरण वालों की सदा रक्षा करता है।'],
    ['Remove ghosts, harmful spirits, dark forces, feverish fear and every destructive influence.','भूत, प्रेत, पिशाच, निशाचर, भय और सभी विनाशकारी प्रभावों को दूर कीजिए।'],
    ['By Lord Rama’s oath, destroy these afflictions and preserve the honour of your sacred name.','श्रीराम की शपथ से इन बाधाओं को नष्ट कर अपने पवित्र नाम की मर्यादा रखिए।'],
    ['By the honour of Janaki and Hari’s servant, come without delay to protect the devotee.','जानकी माता और हरि-सेवक की मर्यादा से, भक्त की रक्षा के लिए बिना विलंब आइए।'],
    ['Let cries of victory fill the sky; remembrance of Hanuman destroys unbearable sorrow.','जय-जयकार से आकाश गूँजे; हनुमान जी का स्मरण असहनीय दुःख का नाश करता है।'],
    ['With folded hands I seek refuge at your feet; there is no other protector to call now.','हाथ जोड़कर आपके चरणों की शरण लेता हूँ; अब आपके अतिरिक्त कोई दूसरा रक्षक नहीं।'],
    ['Arise and come in Lord Rama’s name; I bow at your feet and plead with joined hands.','श्रीराम की दुहाई देकर उठकर आइए; मैं चरणों में झुककर हाथ जोड़ विनती करता हूँ।'],
    ['The rhythmic sacred syllables call swift and dynamic Hanuman into immediate protecting action.','लयबद्ध पवित्र ध्वनियाँ चपल और वेगवान हनुमान जी को तुरंत रक्षा के लिए बुलाती हैं।'],
    ['The mantra invokes Hanuman’s restless divine energy so that hostile forces lose courage and flee.','यह मंत्र हनुमान जी की दिव्य सक्रिय शक्ति जगाता है, जिससे दुष्ट शक्तियाँ भयभीत होकर भागें।'],
    ['Rescue your devotee at once; remembering you fills the heart with joy and confidence.','अपने भक्त का तुरंत उद्धार कीजिए; आपका स्मरण हृदय में आनंद और विश्वास भरता है।'],
    ['No harmful force can withstand the spiritual resolve represented by this Bajrang Baan.','इस बजरंग बाण से प्रकट आध्यात्मिक संकल्प के सामने कोई हानिकारक शक्ति टिक नहीं सकती।'],
    ['One who recites Bajrang Baan with devotion receives Hanuman’s protection over life and courage.','जो भक्तिभाव से बजरंग बाण का पाठ करता है, उसके जीवन और साहस की हनुमान जी रक्षा करते हैं।'],
    ['Negative and troubling forces tremble before the sincere recitation of this hymn.','इस स्तोत्र के सच्चे पाठ से नकारात्मक और पीड़ादायक शक्तियाँ काँप उठती हैं।'],
    ['Regular recitation with incense and devotion is traditionally prayed to remove bodily and mental affliction.','धूप, श्रद्धा और नियमित पाठ द्वारा शरीर तथा मन के कष्ट दूर होने की पारंपरिक प्रार्थना की जाती है।'],
    ['One who worships Hanuman with love, faith and steady meditation finds auspicious work fulfilled through his grace.','जो प्रेम, विश्वास और एकाग्र ध्यान से हनुमान जी का भजन करता है, उसके शुभ कार्य उनकी कृपा से पूर्ण होते हैं।']
  ];

  var durgaMeanings = [
    ['Salutations to Durga, giver of happiness and remover of sorrow.','सुख देने और दुःख हरने वाली माँ दुर्गा को बार-बार प्रणाम है।'],
    ['Your formless divine light spreads illumination throughout the three worlds.','आपकी निराकार दिव्य ज्योति तीनों लोकों में प्रकाश फैलाती है।'],
    ['The moon adorns your broad forehead; your red eyes and powerful brows reveal your fierce protective form.','विशाल ललाट पर चंद्रमा, लाल नेत्र और विकराल भृकुटियाँ आपके रक्षक तेज को प्रकट करती हैं।'],
    ['Your beautiful motherly form delights devotees, and its sight brings deep joy.','माता का सुंदर रूप भक्तों को मोहित करता है और दर्शन से परम आनंद मिलता है।'],
    ['You created and sustain the world through divine power, providing food and wealth for all beings.','आपने शक्ति से संसार की रचना कर उसके पालन हेतु अन्न और धन प्रदान किया।'],
    ['As Annapurna you nourish the world; you are also the primordial and eternally beautiful Mother.','अन्नपूर्णा रूप में आप जगत का पालन करती हैं और आदि सुंदरी माता भी आप ही हैं।'],
    ['At dissolution you destroy all creation; as Gauri you are beloved of Shiva.','प्रलयकाल में आप सृष्टि का संहार करती हैं और गौरी रूप में शिवशंकर की प्रिया हैं।'],
    ['Shiva and the yogis sing your virtues, while Brahma and Vishnu meditate upon you each day.','शिव और योगी आपके गुण गाते हैं तथा ब्रह्मा-विष्णु नित्य आपका ध्यान करते हैं।'],
    ['Taking the form of Saraswati, you grant wisdom and uplift sages and seekers.','सरस्वती रूप में आप सद्बुद्धि देकर ऋषियों, मुनियों और साधकों का उद्धार करती हैं।'],
    ['O Mother, you manifested as Narasimha, emerging from the pillar to defend righteousness.','हे माता, आपने नरसिंह रूप धारण कर स्तंभ से प्रकट होकर धर्म की रक्षा की।'],
    ['You protected Prahlada and destroyed the tyrant who opposed devotion.','आपने प्रह्लाद की रक्षा की और भक्ति-विरोधी अत्याचारी का संहार किया।'],
    ['As Lakshmi you pervade the world and remain eternally united with Lord Narayana.','लक्ष्मी रूप में आप संसार में व्याप्त हैं और श्रीनारायण के साथ नित्य विराजती हैं।'],
    ['You dwell in the ocean of milk; O ocean of compassion, fulfil the pure hope of the heart.','आप क्षीरसागर में विराजती हैं; हे दयासागर, हृदय की पवित्र आशा पूर्ण कीजिए।'],
    ['At Hinglaj you are worshipped as Bhavani; your immeasurable glory cannot be fully described.','हिंगलाज में भवानी रूप से पूजित आपकी अनंत महिमा का पूरा वर्णन नहीं हो सकता।'],
    ['You are Matangi, Dhumavati, Bhuvaneshwari and Bagalamukhi—the many forms that bestow protection and welfare.','आप मातंगी, धूमावती, भुवनेश्वरी और बगलामुखी सहित अनेक कल्याणकारी रूपों में विराजती हैं।'],
    ['As Bhairavi, Tara and Chhinnamasta, you carry beings across suffering and remove worldly pain.','भैरवी, तारा और छिन्नमस्ता रूप में आप जीवों को पार लगाकर संसार का दुःख दूर करती हैं।'],
    ['Bhavani shines upon the lion, while heroic attendants advance before her.','सिंहवाहिनी भवानी शोभित होती हैं और वीर सेवक उनके आगे चलते हैं।'],
    ['The skull-bowl and sword shine in your hands; even death flees before your power.','आपके हाथों में खप्पर और खड्ग शोभते हैं; आपकी शक्ति देखकर काल भी भयभीत होता है।'],
    ['Your weapons and trident strike terror into the hearts of hostile forces.','आपके अस्त्र और त्रिशूल दुष्ट तथा शत्रुतापूर्ण शक्तियों के हृदय में भय उत्पन्न करते हैं।'],
    ['You dwell at Nagarkot, and your renown resounds throughout the three worlds.','आप नगरकोट में विराजती हैं और तीनों लोकों में आपकी कीर्ति गूँजती है।'],
    ['You destroyed the demons Shumbha, Nishumbha and the multiplying force of Raktabija.','आपने शुंभ, निशुंभ और बार-बार उत्पन्न होने वाले रक्तबीज जैसे दैत्यों का संहार किया।'],
    ['The proud Mahishasura burdened the earth with wrongdoing and oppression.','अभिमानी महिषासुर के पाप और अत्याचार से पृथ्वी व्याकुल हो उठी थी।'],
    ['Taking the fierce form of Kali, you destroyed Mahishasura and his entire army.','कालिका का विकराल रूप धारण कर आपने महिषासुर और उसकी सेना का नाश किया।'],
    ['Whenever saints face grave danger, Mother, you arise to help and protect them.','संतों पर जब-जब बड़ी विपत्ति आती है, माता, आप उनकी सहायता और रक्षा करती हैं।'],
    ['Your glory brings freedom from grief even in the celestial realms of Indra and the gods.','इंद्र और देवताओं के लोकों में भी आपकी महिमा शोक का निवारण करती है।'],
    ['Your flame shines at Jwala Ji, where women and men worship you continually.','ज्वाला जी में आपकी दिव्य ज्योति प्रज्वलित है, जहाँ स्त्री-पुरुष सदा आपकी पूजा करते हैं।'],
    ['Sorrow and poverty do not approach those who lovingly sing your praise.','जो प्रेम और भक्ति से आपका यश गाते हैं, उनके निकट दुःख और दरिद्रता नहीं आती।'],
    ['One who meditates upon you with a focused mind becomes free from the cycle of birth and death.','जो एकाग्र मन से आपका ध्यान करता है, वह जन्म-मरण के बंधन से मुक्त होता है।'],
    ['Yogis, gods and sages declare that spiritual union is impossible without your power.','योगी, देवता और मुनि कहते हैं कि आपकी शक्ति के बिना योग सिद्ध नहीं होता।'],
    ['Shankaracharya performed austerity and conquered desire and anger through discipline.','शंकराचार्य ने तप करके काम और क्रोध पर विजय प्राप्त की।'],
    ['Absorbed in Shiva’s meditation, he did not at first remember the Mother’s power.','शिव के ध्यान में लीन होकर उन्होंने आरंभ में माता की शक्ति का स्मरण नहीं किया।'],
    ['When that power withdrew, he understood its mystery and repented.','शक्ति के हटने पर उन्होंने उसका रहस्य समझा और पश्चाताप किया।'],
    ['He sought refuge, proclaimed your glory and cried victory to Mother Bhavani.','उन्होंने शरण लेकर आपकी महिमा गाई और जगदंबा भवानी की जय पुकार की।'],
    ['The primordial Mother became pleased and restored power without delay.','आदि जगदंबा प्रसन्न हुईं और बिना विलंब शक्ति प्रदान की।'],
    ['O Mother, severe troubles surround me; who besides you can remove my sorrow?','हे माता, मुझे घोर कष्टों ने घेर रखा है; आपके सिवा मेरा दुःख कौन हर सकता है?'],
    ['Hope, craving and hostile ignorance trouble the devotee and create fear.','आशा, तृष्णा, विरोध और अज्ञान भक्त को सताकर भय उत्पन्न करते हैं।'],
    ['O Queen, destroy hostile forces; I remember Bhavani with a single-pointed mind.','हे महारानी, शत्रुतापूर्ण शक्तियों का नाश कीजिए; मैं एकचित्त होकर भवानी का स्मरण करता हूँ।'],
    ['Compassionate Mother, show grace and bless the devotee with prosperity and spiritual attainments.','हे दयालु माता, कृपा करके ऋद्धि, सिद्धि और कल्याण से भक्त को निहाल कीजिए।'],
    ['As long as I live, may I receive your compassion and continually sing your glory.','जब तक जीवित रहूँ, आपकी दया पाता रहूँ और सदा आपका यश सुनाता रहूँ।'],
    ['Whoever sings the Durga Chalisa receives worldly welfare and ultimately the highest spiritual state.','जो दुर्गा चालीसा गाता है, वह सांसारिक सुख और अंततः परम पद प्राप्त करता है।'],
    ['Knowing Devdas to be under your refuge, O Mother of the world, bestow your compassion.','देवीदास को अपनी शरण में जानकर, हे जगदंबा भवानी, उस पर कृपा कीजिए।'],
    ['Thus the sacred Durga Chalisa reaches its reverent completion.','इस प्रकार श्रद्धापूर्वक श्री दुर्गा चालीसा का समापन होता है।']
  ];

  var ramMeanings = [
    ['The formal statement of intention and sacred attribution for the Rama Raksha Stotram follows.','यहाँ राम रक्षा स्तोत्र के पाठ का संकल्प, ऋषि, देवता, छंद, शक्ति और उद्देश्य बताया जाता है।'],
    ['Budha Kaushika is the seer, Sita-Rama the deity, Anushtubh the metre, Sita the power and Hanuman the key; the recitation is offered for Lord Rama’s grace.','इस मंत्र के ऋषि बुधकौशिक, देवता सीताराम, छंद अनुष्टुप्, शक्ति सीता और कीलक हनुमान हैं; जप श्रीराम की प्रसन्नता के लिए है।'],
    ['The meditation upon the divine form of Lord Rama begins.','अब भगवान श्रीराम के दिव्य स्वरूप का ध्यान आरंभ होता है।'],
    ['Meditate on long-armed Rama seated in lotus posture, holding bow and arrows, dressed in yellow and smiling with lotus-like eyes.','पीतांबरधारी, धनुष-बाण धारण किए, पद्मासन में बैठे, कमलनयन और प्रसन्न श्रीराम का ध्यान करें।'],
    ['Meditate on cloud-dark Rama, beautifully adorned, with matted locks, whose eyes lovingly meet the lotus face of Sita seated at his left.','मेघश्याम, आभूषणों से दीप्त, जटाधारी श्रीराम का ध्यान करें, जिनकी बाईं ओर सीता जी विराजती हैं।'],
    ['The principal verses of the Rama Raksha Stotram begin.','अब राम रक्षा स्तोत्र के मुख्य श्लोक आरंभ होते हैं।'],
    ['Lord Rama’s story extends through countless verses; each sacred syllable can destroy the gravest wrongdoing.','श्रीराम का चरित्र अनंत विस्तार वाला है और उसका प्रत्येक पवित्र अक्षर महान पापों का नाश करने वाला है।'],
    ['Meditate on blue-lotus-hued, lotus-eyed Rama with Sita and Lakshmana, crowned with matted locks.','नीलकमल समान श्याम, कमलनयन, सीता-लक्ष्मण सहित और जटामुकुटधारी श्रीराम का ध्यान करें।'],
    ['He holds sword, quiver, bow and arrows, destroys night-roaming demons and manifests to protect the world through divine play.','वे खड्ग, तरकश, धनुष-बाण धारण कर राक्षसों का नाश करते और लीला से जगत की रक्षा हेतु प्रकट होते हैं।'],
    ['The wise should recite this sin-destroying, wish-fulfilling protection: may Raghava guard my head and Dasharatha’s son my forehead.','बुद्धिमान इस पापहारी रक्षा का पाठ करे—राघव मेरे सिर और दशरथपुत्र मेरे ललाट की रक्षा करें।'],
    ['May Kausalya’s son protect my eyes, Vishvamitra’s beloved my ears, the saviour of sacrifice my nose and Lakshmana’s loving brother my face.','कौसल्यापुत्र नेत्रों, विश्वामित्रप्रिय कानों, यज्ञरक्षक नासिका और लक्ष्मणवत्सल मुख की रक्षा करें।'],
    ['May the treasure of wisdom guard my tongue, Bharata’s revered Lord my throat, the divine-armed one my shoulders and Shiva’s bow-breaker my arms.','विद्यानिधि जिह्वा, भरतवंदित कंठ, दिव्यायुधधारी कंधों और शिवधनुष तोड़ने वाले भुजाओं की रक्षा करें।'],
    ['May Sita’s Lord protect my hands, Parashurama’s conqueror my heart, Khara’s destroyer my middle and Jambavan’s refuge my navel.','सीतापति हाथों, परशुरामविजयी हृदय, खर-विनाशक मध्यभाग और जांबवान के आश्रय नाभि की रक्षा करें।'],
    ['May Sugriva’s Lord guard my waist, Hanuman’s master my hips, the best of Raghu my thighs and the destroyer of the rakshasa race my strength.','सुग्रीवेश कमर, हनुमानप्रभु कटि, रघूत्तम जाँघों और राक्षसकुल-विनाशक शरीर की रक्षा करें।'],
    ['May the bridge-builder guard my knees, Ravana’s destroyer my shins, Vibhishana’s benefactor my feet and Rama my entire body.','सेतु बनाने वाले घुटनों, रावण-विनाशक पिंडलियों, विभीषण को राज्य देने वाले चरणों और श्रीराम पूरे शरीर की रक्षा करें।'],
    ['The virtuous person who recites this Rama-powered protection becomes long-lived, happy, blessed with family, victorious and humble.','जो पुण्यात्मा रामबलयुक्त इस रक्षा का पाठ करता है, वह दीर्घायु, सुखी, संतानवान, विजयी और विनयी होता है।'],
    ['Beings moving in the underworld, earth or sky, openly or in disguise, cannot even look upon one protected by Rama’s names.','पाताल, पृथ्वी या आकाश में घूमने वाली प्रकट या छिपी शक्तियाँ रामनाम से रक्षित व्यक्ति को देख भी नहीं सकतीं।'],
    ['Remembering Rama, Ramabhadra or Ramachandra keeps a person untouched by sin and grants both worldly welfare and liberation.','राम, रामभद्र या रामचंद्र का स्मरण मनुष्य को पाप से बचाकर भोग और मोक्ष दोनों देता है।'],
    ['One who wears the world-conquering mantra of Rama’s name at the throat holds every spiritual accomplishment close at hand.','जो जगत-विजयी रामनाम मंत्र को कंठ में धारण करता है, उसके लिए सभी सिद्धियाँ सुलभ हो जाती हैं।'],
    ['Whoever remembers this thunderbolt-cage armour of Rama gains unobstructed authority, victory and auspiciousness everywhere.','जो वज्रपंजर नामक रामकवच का स्मरण करता है, उसे सर्वत्र निर्बाध सफलता, विजय और मंगल मिलता है।'],
    ['Lord Shiva revealed this Rama protection in a dream; on waking, sage Budha Kaushika wrote it exactly as instructed.','भगवान शिव ने स्वप्न में यह रामरक्षा बताई और जागकर ऋषि बुधकौशिक ने उसे निर्देशानुसार लिखा।'],
    ['Rama is the garden of wish-fulfilling trees, the end of every calamity, delight of the three worlds and our glorious Lord.','श्रीराम कल्पवृक्षों के उपवन, सभी विपत्तियों का अंत, तीनों लोकों के आनंद और हमारे प्रभु हैं।'],
    ['Rama and Lakshmana are youthful, handsome, gentle yet immensely strong, with broad lotus eyes and ascetic garments.','राम और लक्ष्मण युवा, सुंदर, कोमल किंतु महाबली, विशाल कमलनयन और तपस्वी वेश वाले हैं।'],
    ['Living on fruits and roots, self-controlled and celibate, these two sons of Dasharatha are the brothers Rama and Lakshmana.','फल-मूल खाने वाले, संयमी और ब्रह्मचारी दशरथपुत्र राम और लक्ष्मण दो वीर भाई हैं।'],
    ['May the two best protectors of all beings, supreme archers and destroyers of the rakshasa clan, guard us.','सब प्राणियों के शरणदाता, श्रेष्ठ धनुर्धर और राक्षसकुल-विनाशक दोनों रघुवीर हमारी रक्षा करें।'],
    ['May Rama and Lakshmana, bows strung and arrows ready, always walk before me on the path for my protection.','धनुष चढ़ाए और बाण तैयार रखे राम-लक्ष्मण मेरी रक्षा हेतु मार्ग में सदा आगे चलें।'],
    ['May youthful Rama, armoured and bearing sword, bow and arrows, walk with Lakshmana and protect our cherished aims.','कवच, खड्ग, धनुष-बाण धारण किए युवा राम लक्ष्मण सहित चलकर हमारे मनोरथों की रक्षा करें।'],
    ['Rama is Dasharatha’s heroic son, accompanied by Lakshmana, mighty, complete, born of Kausalya and the finest of Raghu’s line.','राम दशरथ के वीर पुत्र, लक्ष्मण के सहचर, बलवान, पूर्ण पुरुष, कौसल्यापुत्र और रघुकुलश्रेष्ठ हैं।'],
    ['He is known through Vedanta, Lord of sacrifice, the primordial Supreme Person, beloved of Janaki and immeasurable in valour.','वे वेदांत से जाने जाने वाले, यज्ञेश, आदिपुरुष, जानकीवल्लभ और अपरिमित पराक्रम वाले हैं।'],
    ['The devotee who repeats these names daily with faith gains merit greater than an Ashvamedha sacrifice.','जो भक्त इन नामों का श्रद्धा से नित्य जप करता है, वह अश्वमेध से भी अधिक पुण्य पाता है।'],
    ['Those who praise lotus-eyed, yellow-clad, fresh-grass-dark Rama by these divine names are freed from worldly bondage.','जो दूर्वादल-श्याम, कमलनयन, पीतांबरधारी राम की इन दिव्य नामों से स्तुति करते हैं, वे संसारबंधन से मुक्त होते हैं।'],
    ['I bow to beautiful Rama: Lakshmana’s elder, best of Raghu, Sita’s Lord, ocean of compassion, treasure of virtue, truthful king and Ravana’s enemy.','मैं सुंदर श्रीराम को प्रणाम करता हूँ—लक्ष्मण के अग्रज, रघुवर, सीतापति, करुणासागर, गुणनिधि, सत्यप्रतिज्ञ राजा और रावण-विनाशक।'],
    ['Salutations to Rama, Ramabhadra, Ramachandra, creator, Lord of Raghu’s line and husband of Sita.','राम, रामभद्र, रामचंद्र, सृष्टिकर्ता, रघुनाथ और सीतापति को नमस्कार है।'],
    ['O Rama—Raghu’s joy, Bharata’s elder and formidable warrior—be my refuge.','हे श्रीराम, रघुनंदन, भरत के अग्रज और रणधीर, मेरी शरण बनिए।'],
    ['I remember Rama’s feet in mind, speak of them with my voice, bow to them with my head and take refuge in them completely.','मैं मन से रामचरणों का स्मरण, वाणी से उनका कीर्तन, सिर से प्रणाम और पूर्ण रूप से उनकी शरण ग्रहण करता हूँ।'],
    ['Rama is my mother, father, master, friend and everything; I know no other refuge than compassionate Ramachandra.','राम ही मेरी माता, पिता, स्वामी, मित्र और सर्वस्व हैं; दयालु रामचंद्र के अतिरिक्त मैं किसी और को नहीं जानता।'],
    ['I bow to Raghunandana, with Lakshmana on his right, Janaki on his left and Hanuman before him.','मैं रघुनंदन को प्रणाम करता हूँ, जिनके दाईं ओर लक्ष्मण, बाईं ओर जानकी और सामने हनुमान हैं।'],
    ['I seek refuge in lotus-eyed Rama, delight of the world, courageous in battle, Lord of Raghu’s line and embodiment of compassion.','मैं कमलनयन, लोकाभिराम, रणधीर, रघुवंशनाथ और करुणामूर्ति श्रीराम की शरण लेता हूँ।'],
    ['I seek refuge in Hanuman, swift as thought and wind, master of the senses, foremost in wisdom, vanara leader and Rama’s messenger.','मैं मन और वायु समान वेगवान, जितेंद्रिय, बुद्धिमानों में श्रेष्ठ, वानरवीर और रामदूत हनुमान की शरण लेता हूँ।'],
    ['I bow to Valmiki, the cuckoo perched upon the branch of poetry, sweetly singing “Rama, Rama.”','कवितारूपी शाखा पर बैठे मधुर “राम-राम” गाने वाले कोकिल समान वाल्मीकि को प्रणाम है।'],
    ['Again and again I bow to beautiful Rama, remover of calamities and giver of every prosperity.','विपत्तियों को हरने और सभी संपत्तियाँ देने वाले लोकाभिराम श्रीराम को बार-बार प्रणाम है।'],
    ['The roaring name “Rama, Rama” burns the seeds of rebirth, brings happiness and drives away the messengers of death.','“राम-राम” की गर्जना भवबीज को जलाती, सुख-संपदा देती और यमदूतों को दूर करती है।'],
    ['Rama, jewel among kings, is ever victorious. I worship him, bow to him, accept no higher refuge, and pray that my mind dissolve in him.','राजाओं के मणि श्रीराम सदा विजयी हैं; मैं उनका भजन-प्रणाम कर उन्हीं को परम आश्रय मानता और मन को उनमें लीन करने की प्रार्थना करता हूँ।'],
    ['Chanting “Rama, Rama, Rama” brings the same sacred merit as reciting a thousand divine names.','“राम, राम, राम” का जप सहस्रनाम के पाठ के समान पवित्र फल देता है।'],
    ['Thus the Rama Raksha Stotram composed by sage Budha Kaushika is complete.','इस प्रकार बुधकौशिक मुनि द्वारा रचित श्रीराम रक्षा स्तोत्र पूर्ण होता है।'],
    ['Glory to Shri Rama: Rama, victorious Rama, ever-victorious Rama.','श्रीराम की जय—राम, जय राम, जय-जय राम।']
  ];

  var shivaMeanings = [
    ['May Shiva, whose neck bears a lofty serpent garland and whose matted locks release the purifying Ganga, bless us through his fierce cosmic dance.','जिनकी जटाओं से पवित्र गंगा बहती है और गले में विशाल सर्पमाला है, वे प्रचंड तांडव करने वाले शिव हमारा कल्याण करें।'],
    ['May my love remain every moment with the young-moon-crested Shiva, whose whirling locks carry the celestial river and whose forehead blazes with fire.','घूमती जटाओं में गंगा और ललाट पर धधकती अग्नि धारण करने वाले चंद्रशेखर शिव में मेरी प्रीति हर क्षण बनी रहे।'],
    ['May my mind delight in the sky-clad Shiva, whose compassionate glance restrains unbearable calamity and whose heart rejoices with Parvati.','पार्वती के साथ आनंदित और कृपादृष्टि से असह्य विपत्ति रोकने वाले दिगंबर शिव में मेरा मन रम जाए।'],
    ['May my mind find wondrous joy in the Lord of beings, whose serpent-jewel radiance colours the directions and who wears the hide of a mighty elephant.','सर्पमणियों की प्रभा से दिशाओं को रंगने और गजचर्म धारण करने वाले भूतनाथ में मेरा मन अद्भुत आनंद पाए।'],
    ['May the moon-crested Shiva, whose feet are grey with flowers offered by Indra and the gods and whose locks hold the serpent king, grant lasting prosperity.','इंद्रादि देवों के पुष्पों से धूसर चरण और नागराज से बँधी जटाओं वाले चंद्रशेखर शिव स्थायी समृद्धि दें।'],
    ['May Shiva’s matted locks bring us divine wealth—he whose forehead fire consumed Kama and whose crown shines with the crescent moon.','जिनकी ललाटाग्नि ने कामदेव को भस्म किया और मस्तक पर चंद्रकला शोभती है, उनकी जटाएँ हमें दिव्य संपदा दें।'],
    ['My devotion rests in the three-eyed Lord whose blazing forehead subdued desire and who alone adorns Parvati with perfect artistry.','मेरी प्रीति उस त्रिनेत्र शिव में है जिनकी ललाटाग्नि ने काम को जीता और जो पार्वती का सुंदर श्रृंगार करते हैं।'],
    ['May the bearer of Ganga, wrapped in elephant hide and dark as a new-moon night beneath fresh clouds, sustain the world and grant prosperity.','नवमेघ और अमावस्या समान गहन, गंगाधर, गजचर्मधारी जगतपालक शिव समृद्धि प्रदान करें।'],
    ['I worship the blue-throated Lord who destroyed desire, the three cities, worldly bondage, sacrifice, the elephant demon, Andhaka and death itself.','मैं नीलकंठ शिव की उपासना करता हूँ, जिन्होंने काम, त्रिपुर, भवबंधन, यज्ञ, गजासुर, अंधक और मृत्यु का अंत किया।'],
    ['I worship the destroyer of desire, cities, becoming, sacrifice, elephant and Andhaka—Shiva who is like a bee drinking the nectar of every auspicious art.','मैं समस्त मंगल कलाओं के मधुर रस में रमने वाले, काम और अनेक दुष्ट शक्तियों के संहारक शिव का भजन करता हूँ।'],
    ['Victory to Shiva’s tremendous Tandava, driven by blazing serpents, forehead fire and the auspicious thunder of the great mridanga.','सर्पों की गति, ललाटाग्नि और मृदंग की मंगल ध्वनि से प्रवर्तित शिव के प्रचंड तांडव की जय हो।'],
    ['When will I worship Sadashiva with equal vision toward stone and jewel, serpent and pearl garland, friend and foe, grass and lotus, subject and emperor?','मैं कब पत्थर-रत्न, सर्प-मोती, मित्र-शत्रु, तृण-कमल और प्रजा-राजा में समभाव रखकर सदाशिव का भजन करूँगा?'],
    ['When will I dwell by the celestial Ganga, free from wrong thought, hands folded above my head, chanting Shiva’s name in true happiness?','मैं कब गंगातट पर कुविचार से मुक्त, सिर पर अंजलि रखकर शिवनाम जपते हुए सच्चा सुख पाऊँगा?'],
    ['May the radiant beauty flowing from Shiva’s divine form fill our minds with unending playful joy, day and night.','शिव के दिव्य अंगों से निकलती प्रकाशमयी सुंदरता हमारे मन को दिन-रात अविरत आनंद से भर दे।'],
    ['May the powerful mantra “Shiva,” radiant like a fierce sacred fire and invoked at the auspicious wedding, bring victory to the world.','प्रचंड पवित्र अग्नि समान तेजस्वी और मंगल विवाहध्वनि से युक्त “शिव” मंत्र जगत को विजय और कल्याण दे।'],
    ['One who daily reads, remembers and recites this excellent hymn becomes purified and quickly gains firm devotion to Shiva, the true Guru.','जो इस उत्तम स्तोत्र का नित्य पाठ, स्मरण और उच्चारण करता है, वह शुद्ध होकर सद्गुरु शिव की दृढ़ भक्ति पाता है।'],
    ['Whoever recites this song of Ravana at the close of Shiva worship, especially at Pradosha, receives steady prosperity blessed by Shambhu.','जो शिवपूजा के अंत में, विशेषकर प्रदोषकाल में, रावणकृत इस स्तोत्र का पाठ करता है, उसे शंभु स्थिर समृद्धि प्रदान करते हैं।']
  ];

  var configs = {
    'bajrang-baan': {
      sourceId:'bajrang-baan-text', experienceId:'bajrang-baan-experience', heroClass:'paath-bajrang-hero',
      title:'Bajrang Baan', titleHi:'बजरंग बाण', meta:'37 devotional passages', time:'~12 minutes', tradition:'Traditional Hanuman hymn',
      description:'A forceful devotional prayer to Hanuman for courage, protection and freedom from fear.',
      about:'Bajrang Baan is traditionally recited as a focused prayer to Hanuman. It should be approached with devotion, steadiness and respect rather than fear.',
      sourceNote:'Traditional Hindi devotional text. Wording can vary slightly across regional editions.', meanings:bajrangMeanings,
      label:function (index, total) { if (index === 0) return 'Opening Doha'; if (index === total - 1) return 'Closing Doha'; return 'Chaupai ' + index; }
    },
    'durga-chalisa': {
      sourceId:'durga-chalisa-text', experienceId:'durga-chalisa-experience', heroClass:'paath-durga-hero',
      title:'Durga Chalisa', titleHi:'दुर्गा चालीसा', meta:'Complete devotional Chalisa', time:'~14 minutes', tradition:'Traditional Shakti prayer',
      description:'A reverent hymn praising Maa Durga’s forms, compassion, strength and protection.',
      about:'Durga Chalisa praises the many forms and qualities of Maa Durga and concludes with a prayer for compassion, courage and spiritual welfare.',
      sourceNote:'Traditional Hindi devotional text; minor wording differences may appear across prayer books and regions.', meanings:durgaMeanings,
      label:function (index, total) { return index === total - 1 ? 'Completion' : 'Verse ' + (index + 1); }
    },
    'ram-raksha': {
      sourceId:'ram-raksha-text', experienceId:'ram-raksha-experience', heroClass:'paath-ram-hero',
      title:'Ram Raksha Stotram', titleHi:'राम रक्षा स्तोत्रम्', meta:'Viniyog, Dhyanam & 38 verses', time:'~18 minutes', tradition:'Attributed to Budha Kaushika Rishi',
      description:'A Sanskrit protective hymn invoking Shri Rama throughout the body, mind and path of life.',
      about:'Ram Raksha Stotram is a revered Sanskrit kavacha traditionally attributed to Budha Kaushika Rishi and centred on refuge in the names and form of Shri Rama.',
      sourceNote:'Presented with Sanskrit text, Roman transliteration and concise interpretive meaning. Recitation customs may vary by tradition.', meanings:ramMeanings,
      label:function (index) { if (index === 0) return 'Viniyog'; if (index === 1) return 'Viniyog mantra'; if (index === 2) return 'Dhyanam'; if (index === 3 || index === 4) return 'Dhyana ' + (index - 2); if (index === 5) return 'Stotram'; if (index === 44) return 'Completion'; if (index === 45) return 'Rama Nama'; return 'Verse ' + (index - 5); }
    },
    'shiv-tandav': {
      sourceId:'shiv-tandav-text', experienceId:'shiv-tandav-experience', heroClass:'paath-shiva-hero',
      title:'Shiva Tandava Stotram', titleHi:'शिव तांडव स्तोत्रम्', meta:'17 Sanskrit verses', time:'~10 minutes', tradition:'Traditionally attributed to Ravana',
      description:'A majestic Sanskrit hymn celebrating Shiva’s cosmic dance, power, beauty and transcendence.',
      about:'Shiva Tandava Stotram is traditionally attributed to Ravana and celebrates the rhythm, radiance and transformative power of Lord Shiva’s cosmic dance.',
      sourceNote:'Sanskrit compounds and transliteration can vary across editions; the concise meanings communicate the central sense of each verse.', meanings:shivaMeanings,
      label:function (index, total) { return index === total - 1 ? 'Phalashruti' : 'Verse ' + (index + 1); }
    }
  };

  var page = document.getElementById('paathmandir');
  if (!page) return;

  function escapeHtml(value) {
    return String(value == null ? '' : value).replace(/[&<>\"]/g, function (char) {
      return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[char];
    });
  }

  function language() {
    return typeof currentLang !== 'undefined' && currentLang === 'en' ? 'en' : 'hi';
  }

  function normalize(value) {
    return String(value || '').replace(/[ \t]+/g, ' ').replace(/\s*\n\s*/g, '\n').trim();
  }

  function extractVerses(config) {
    var source = document.getElementById(config.sourceId);
    if (!source) return [];
    return Array.prototype.map.call(source.querySelectorAll('.verse'), function (element, index) {
      var hi = element.getAttribute('data-hi') || '', tr = element.getAttribute('data-en') || '';
      if (!hi) {
        var spans = element.querySelectorAll('[data-hi][data-en]'), hiLines = [], trLines = [];
        Array.prototype.forEach.call(spans, function (span) {
          hiLines.push(span.getAttribute('data-hi') || '');
          trLines.push(span.getAttribute('data-en') || '');
        });
        hi = hiLines.join('\n');
        tr = trLines.join('\n');
      }
      if (!hi) hi = normalize(element.innerText || element.textContent);
      if (!tr) tr = hi;
      var meaning = config.meanings[index] || ['', ''];
      return {label:config.label(index, config.meanings.length), hi:normalize(hi), tr:normalize(tr), meaningEn:meaning[0], meaningHi:meaning[1]};
    });
  }

  function cardHtml(verse, index) {
    var shownMeaning = language() === 'en' ? verse.meaningEn : verse.meaningHi;
    return '<article class="paath-verse-card" data-paath-unit="' + (index + 1) + '">' +
      '<div class="paath-verse-number"><b>' + (index + 1) + '</b><small>' + escapeHtml(verse.label) + '</small></div>' +
      '<div class="paath-verse-original">' + escapeHtml(verse.hi) + '</div>' +
      '<div class="paath-verse-transliteration">' + escapeHtml(verse.tr) + '</div>' +
      '<details class="paath-verse-meaning" open><summary data-en="Meaning" data-hi="भावार्थ">' + (language() === 'en' ? 'Meaning' : 'भावार्थ') + '</summary>' +
      '<p data-en="' + escapeHtml(verse.meaningEn) + '" data-hi="' + escapeHtml(verse.meaningHi) + '">' + escapeHtml(shownMeaning) + '</p></details></article>';
  }

  function preferencesHtml(key) {
    return '<div class="paath-preferences" aria-label="Reading preferences">' +
      '<div class="paath-preference-group paath-language-group"><span class="paath-preference-label" data-en="Language" data-hi="भाषा">भाषा</span><button class="paath-preference-btn" data-paath-lang="hi" aria-pressed="false" type="button" onclick="paathSetLanguage(\'hi\')">हिंदी</button><button class="paath-preference-btn" data-paath-lang="en" aria-pressed="false" type="button" onclick="paathSetLanguage(\'en\')">English</button></div>' +
      '<div class="paath-preference-group"><span class="paath-preference-label" data-en="Meaning" data-hi="भावार्थ">भावार्थ</span><button class="paath-preference-btn active" type="button" data-en="Show / hide" data-hi="दिखाएँ / छिपाएँ" onclick="remainingPaathToggle(\'' + key + '\')">दिखाएँ / छिपाएँ</button></div>' +
      '<div class="paath-preference-group"><span class="paath-preference-label" data-en="Text size" data-hi="अक्षर आकार">अक्षर आकार</span><button class="paath-preference-btn" type="button" onclick="remainingPaathFont(\'' + key + '\',-.08)">A-</button><button class="paath-preference-btn" type="button" onclick="remainingPaathFont(\'' + key + '\',.08)">A+</button></div></div>';
  }

  function experienceHtml(key, config, verses) {
    return '<nav class="paath-breadcrumb" aria-label="Breadcrumb"><button type="button" onclick="remainingPaathReturnToLibrary()">Home</button><span>/</span><button type="button" onclick="remainingPaathReturnToLibrary()">Paath Mandir</button><span>/</span><strong>' + escapeHtml(config.title) + '</strong></nav>' +
      '<section class="paath-hero ' + config.heroClass + '" aria-labelledby="' + key + '-title"><div class="paath-hero-copy"><h2 id="' + key + '-title">' + escapeHtml(config.title) + '<span>' + escapeHtml(config.titleHi) + '</span></h2><div class="paath-hero-rule"></div><div class="paath-meta"><span>' + escapeHtml(config.meta) + '</span><span>' + escapeHtml(config.tradition) + '</span><span>' + escapeHtml(config.time) + '</span></div><p style="margin:1rem 0 0;max-width:450px;color:#f6e6c6;font-size:.9rem;line-height:1.5;">' + escapeHtml(config.description) + '</p><div class="paath-hero-actions"><button type="button" class="paath-action primary" onclick="remainingPaathBegin(\'' + key + '\')">&#9654; Begin Paath</button><button type="button" class="paath-action" onclick="remainingPaathToggle(\'' + key + '\')">&#128214; Meaning</button><button type="button" class="paath-action favorite-btn" data-content-id="' + key + '" data-content-title="' + escapeHtml(config.titleHi) + '" data-content-title-en="' + escapeHtml(config.title) + '" data-section="paathmandir" onclick="toggleFavorite(this)">&#128278; Save to My Library</button></div></div></section>' +
      preferencesHtml(key) +
      '<div class="paath-reading-grid"><main><div class="paath-verse-list" id="' + key + '-reader-list">' + verses.map(cardHtml).join('') + '</div></main><aside class="paath-sidebar"><section class="paath-panel"><h3><span>&#10048;</span> In this Paath</h3><ol class="paath-outline"><li class="active">Complete original text</li><li>Roman transliteration</li><li>Hindi &amp; English meaning</li><li>About this Paath</li></ol><div class="paath-progress-label"><span>Reading progress</span><b data-paath-progress-label>0%</b></div><div class="paath-progress-track"><b data-paath-progress-bar></b></div><div class="paath-progress-label"><span>Approx. reading time</span><b>' + escapeHtml(config.time) + '</b></div></section></aside></div>' +
      '<section class="paath-info-grid"><article class="paath-info-card"><h3><span>&#128214;</span> About this Paath</h3><p>' + escapeHtml(config.about) + '</p></article><article class="paath-info-card"><h3><span>&#10048;</span> Source &amp; Tradition</h3><p>' + escapeHtml(config.sourceNote) + '</p></article><article class="paath-info-card"><h3><span>&#9788;</span> Respectful Reading</h3><p>Read with a calm mind and at your own pace. Follow your family, teacher or local temple tradition for personal observance.</p></article></section>' +
      '<section class="paath-mobile-progress"><div class="paath-progress-label"><span>Your reading progress</span><b data-paath-progress-label>0%</b></div><div class="paath-progress-track"><b data-paath-progress-bar></b></div></section>' +
      '<section class="paath-mobile-accordions"><details><summary>In this Paath</summary><p>Complete original text, Roman transliteration and Hindi/English meaning for every reading unit.</p></details><details><summary>About this Paath</summary><p>' + escapeHtml(config.about) + '</p></details><details><summary>Source &amp; Tradition</summary><p>' + escapeHtml(config.sourceNote) + '</p></details></section>';
  }

  var experiences = {};
  Object.keys(configs).forEach(function (key) {
    var config = configs[key], verses = extractVerses(config);
    if (verses.length !== config.meanings.length || verses.some(function (verse) { return !verse.hi || !verse.tr || !verse.meaningEn || !verse.meaningHi; })) {
      console.error('Paath reader validation failed:', key, verses.length, config.meanings.length);
      return;
    }
    var root = document.createElement('div');
    root.id = config.experienceId;
    root.className = 'paath-experience remaining-paath-experience';
    root.hidden = true;
    root.innerHTML = experienceHtml(key, config, verses);
    page.appendChild(root);
    experiences[key] = {root:root, config:config, verses:verses};
  });

  function syncLanguage(root) {
    var lang = language();
    Array.prototype.forEach.call(root.querySelectorAll('[data-en][data-hi]'), function (node) { node.textContent = node.getAttribute('data-' + lang) || ''; });
    Array.prototype.forEach.call(root.querySelectorAll('[data-paath-lang]'), function (button) {
      var active = button.getAttribute('data-paath-lang') === lang;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
  }

  function bindProgress(key, item) {
    var root = item.root, total = item.verses.length, storageKey = 'sanatan-paath-progress:' + key, saved = 0;
    try { saved = Math.max(0, Math.min(total, Number(localStorage.getItem(storageKey) || 0))); } catch (error) {}
    function paint() {
      var percentage = Math.min(100, Math.round((saved / total) * 100));
      Array.prototype.forEach.call(root.querySelectorAll('[data-paath-progress-label]'), function (node) { if (node.textContent !== percentage + '%') node.textContent = percentage + '%'; });
      Array.prototype.forEach.call(root.querySelectorAll('[data-paath-progress-bar]'), function (node) { node.style.width = percentage + '%'; });
    }
    function update() {
      if (root.hidden) { paint(); return; }
      var seen = 0, threshold = window.innerHeight * .72;
      Array.prototype.forEach.call(root.querySelectorAll('.paath-verse-card'), function (card) {
        var unit = Number(card.getAttribute('data-paath-unit') || 0);
        if (unit && card.getBoundingClientRect().top <= threshold) seen = Math.max(seen, unit);
      });
      if (seen > saved) {
        saved = Math.min(total, seen);
        try { localStorage.setItem(storageKey, String(saved)); } catch (error) {}
      }
      paint();
    }
    root._updatePaathProgress = update;
    paint();
    window.addEventListener('scroll', update, {passive:true});
    window.addEventListener('resize', update, {passive:true});
  }

  Object.keys(experiences).forEach(function (key) { bindProgress(key, experiences[key]); });

  function hideAllReaders() {
    Object.keys(experiences).forEach(function (key) { experiences[key].root.hidden = true; });
    ['paath-experience','sundar-paath-experience'].forEach(function (id) { var root = document.getElementById(id); if (root) root.hidden = true; });
    ['sundarkand-text','hanuman-chalisa-text','bajrang-baan-text','durga-chalisa-text','ram-raksha-text','shiv-tandav-text'].forEach(function (id) { var source = document.getElementById(id); if (source) source.style.display = 'none'; });
  }

  function showLibrary(scroll) {
    hideAllReaders();
    var grid = document.getElementById('paathGrid'), comments = document.getElementById('paathmandir-comments-main');
    if (grid) grid.style.display = 'grid';
    if (comments) comments.style.display = '';
    if (scroll !== false) page.scrollIntoView({behavior:'smooth', block:'start'});
  }

  window.remainingPaathReturnToLibrary = function () { showLibrary(true); };
  window.remainingPaathBegin = function (key) { var list = document.getElementById(key + '-reader-list'); if (list) list.scrollIntoView({behavior:'smooth', block:'start'}); };
  window.remainingPaathToggle = function (key) {
    var item = experiences[key]; if (!item) return;
    var details = item.root.querySelectorAll('.paath-verse-meaning'), open = Array.prototype.some.call(details, function (detail) { return !detail.open; });
    Array.prototype.forEach.call(details, function (detail) { detail.open = open; });
  };
  window.remainingPaathFont = function (key, delta) {
    var item = experiences[key]; if (!item) return;
    var current = Number(item.root.getAttribute('data-font-scale') || '1'), next = Math.max(.88, Math.min(1.22, current + delta));
    item.root.setAttribute('data-font-scale', next); item.root.style.setProperty('--paath-scale', String(next));
  };

  var previousShowPaath = window.showPaath;
  window.showPaath = function (id) {
    if (experiences[id]) {
      hideAllReaders();
      var grid = document.getElementById('paathGrid'), comments = document.getElementById('paathmandir-comments-main'), item = experiences[id];
      if (grid) grid.style.display = 'none';
      if (comments) comments.style.display = 'none';
      item.root.hidden = false;
      syncLanguage(item.root);
      item.root.scrollIntoView({behavior:'smooth', block:'start'});
      window.setTimeout(function () { if (item.root._updatePaathProgress) item.root._updatePaathProgress(); }, 80);
      return;
    }
    hideAllReaders();
    return typeof previousShowPaath === 'function' ? previousShowPaath(id) : undefined;
  };

  var previousReturn = window.paathReturnToLibrary;
  window.paathReturnToLibrary = function () { showLibrary(true); };
  var previousShowSection = window.showSection;
  window.showSection = function (id) {
    if (id === 'paathmandir') showLibrary(false);
    return typeof previousShowSection === 'function' ? previousShowSection(id) : undefined;
  };
})();
