/* Michel Thomas–style Spanish curriculum.
 *
 * Design rules borrowed from the method itself:
 *   1. Nothing appears in an item that has not been introduced as a block.
 *   2. Every new block is immediately combined with everything before it.
 *   3. Prompts are English; the learner produces Spanish out loud.
 *   4. Conversations are built only from material the learner already owns,
 *      so a "real" exchange is reachable from lesson one.
 *
 * Item shape: { en, es, alt?, note? }
 *   alt  - other fully acceptable answers (typed mode accepts any of them)
 *   note - shown after the reveal, never before (no pre-loading the answer)
 */

window.MT = window.MT || {};

window.MT.curriculum = [
  {
    id: 'l1',
    title: 'You already speak Spanish',
    subtitle: 'Cognates, es, and the question that costs nothing',
    goal: 'Say and negate a real Spanish sentence, and ask a question, within ten minutes.',
    blocks: [
      { rule: '-ible / -able stay the same', ex: 'possible → posible · terrible → terrible · probable → probable' },
      { rule: '-ent / -ant become -ente / -ante', ex: 'important → importante · different → diferente · urgent → urgente' },
      { rule: 'es = it is', ex: 'Es posible. — It is possible.' },
      { rule: 'no goes in front of the verb', ex: 'No es posible. — It is not possible.' },
      { rule: 'A question is the same sentence with a rise at the end', ex: '¿Es posible? — Is it possible?' },
      { rule: 'para mí = for me · para usted = for you', ex: 'Es importante para mí.' }
    ],
    items: [
      { en: 'It is possible.', es: 'Es posible.' },
      { en: 'It is not possible.', es: 'No es posible.' },
      { en: 'Is it possible?', es: '¿Es posible?' },
      { en: 'It is very important.', es: 'Es muy importante.' },
      { en: 'It is not important for me.', es: 'No es importante para mí.' },
      { en: 'Is it important for you?', es: '¿Es importante para usted?' },
      { en: 'It is terrible.', es: 'Es terrible.' },
      { en: 'It is very interesting.', es: 'Es muy interesante.' },
      { en: 'It is not necessary.', es: 'No es necesario.' },
      { en: 'Is it necessary for me?', es: '¿Es necesario para mí?' },
      { en: 'It is different.', es: 'Es diferente.' },
      { en: 'It is urgent.', es: 'Es urgente.' },
      { en: 'It is not urgent for you.', es: 'No es urgente para usted.' },
      { en: 'It is impossible for me.', es: 'Es imposible para mí.' },
      { en: 'It is difficult.', es: 'Es difícil.', note: 'difícil — stress the middle: di-FÍ-cil.' },
      { en: 'It is not difficult, it is easy.', es: 'No es difícil, es fácil.' },
      { en: 'Is it difficult for you?', es: '¿Es difícil para usted?' },
      { en: 'It is excellent.', es: 'Es excelente.' },
      { en: 'It is perfect.', es: 'Es perfecto.' },
      { en: 'It is not perfect, but it is good.', es: 'No es perfecto, pero es bueno.', note: 'pero = but · bueno = good' },
      { en: 'It is very good for me.', es: 'Es muy bueno para mí.' },
      { en: 'Is it possible for you today?', es: '¿Es posible para usted hoy?', note: 'hoy = today' },
      { en: 'It is not possible today, it is impossible.', es: 'No es posible hoy, es imposible.' }
    ],
    conversations: [
      {
        id: 'c1a',
        title: 'At the desk',
        setting: 'Someone at a hotel desk is checking whether a change can be made.',
        turns: [
          { who: 'them', es: '¿Es posible hoy?', en: 'Is it possible today?' },
          { who: 'you', cue: 'Say: No, it is not possible today.', es: 'No, no es posible hoy.' },
          { who: 'them', es: '¿Es posible mañana?', en: 'Is it possible tomorrow?', note: 'mañana = tomorrow' },
          { who: 'you', cue: 'Say: Yes, tomorrow it is possible.', es: 'Sí, mañana es posible.' },
          { who: 'them', es: 'Perfecto. ¿Es urgente para usted?', en: 'Perfect. Is it urgent for you?' },
          { who: 'you', cue: 'Say: It is not urgent, but it is important for me.', es: 'No es urgente, pero es importante para mí.' },
          { who: 'them', es: 'Muy bien. No es difícil.', en: 'Very good. It is not difficult.' },
          { who: 'you', cue: 'Say: Excellent. Thank you.', es: 'Excelente. Gracias.', note: 'gracias = thank you' }
        ]
      }
    ]
  },

  {
    id: 'l2',
    title: 'I want — and the whole verb comes free',
    subtitle: 'quiero / quiere + any infinitive',
    goal: 'Attach every verb you meet to "I want" and "do you want" without conjugating anything.',
    blocks: [
      { rule: 'quiero = I want · quiere = you want (usted) / he · she wants', ex: 'Quiero comer. — I want to eat.' },
      { rule: 'Verbs in the dictionary end in -ar, -er, -ir. That form already means "to ..."', ex: 'hablar = to speak · comer = to eat · ir = to go' },
      { rule: 'After quiero / quiere, nothing changes — just add the verb', ex: 'Quiero hablar. ¿Quiere hablar?' },
      { rule: 'lo = it, and it hooks onto the end of the verb', ex: 'comprarlo = to buy it · Quiero comprarlo.' },
      { rule: 'Useful verbs', ex: 'hablar · comer · comprar · ir · ver (to see) · hacer (to do/make) · probar (to try) · reservar' }
    ],
    items: [
      { en: 'I want to speak Spanish.', es: 'Quiero hablar español.' },
      { en: 'I want to speak Spanish with you.', es: 'Quiero hablar español con usted.', note: 'con = with' },
      { en: 'Do you want to speak Spanish?', es: '¿Quiere hablar español?' },
      { en: 'I do not want to speak English.', es: 'No quiero hablar inglés.' },
      { en: 'I want to eat.', es: 'Quiero comer.' },
      { en: 'Do you want to eat now?', es: '¿Quiere comer ahora?', note: 'ahora = now' },
      { en: 'I do not want to eat now.', es: 'No quiero comer ahora.' },
      { en: 'I want to eat here.', es: 'Quiero comer aquí.', note: 'aquí = here' },
      { en: 'I want to buy it.', es: 'Quiero comprarlo.', alt: ['Lo quiero comprar.'] },
      { en: 'Do you want to buy it?', es: '¿Quiere comprarlo?', alt: ['¿Lo quiere comprar?'] },
      { en: 'I do not want to buy it today.', es: 'No quiero comprarlo hoy.', alt: ['No lo quiero comprar hoy.'] },
      { en: 'I want to go.', es: 'Quiero ir.' },
      { en: 'I want to go with you.', es: 'Quiero ir con usted.' },
      { en: 'Do you want to go now?', es: '¿Quiere ir ahora?' },
      { en: 'I do not want to go now, I want to go later.', es: 'No quiero ir ahora, quiero ir más tarde.', note: 'más tarde = later' },
      { en: 'I want to see it.', es: 'Quiero verlo.', alt: ['Lo quiero ver.'] },
      { en: 'Do you want to see it now?', es: '¿Quiere verlo ahora?', alt: ['¿Lo quiere ver ahora?'] },
      { en: 'I want to do it.', es: 'Quiero hacerlo.', alt: ['Lo quiero hacer.'] },
      { en: 'I do not want to do it, it is very difficult.', es: 'No quiero hacerlo, es muy difícil.', alt: ['No lo quiero hacer, es muy difícil.'] },
      { en: 'I want to try it.', es: 'Quiero probarlo.', alt: ['Lo quiero probar.'] },
      { en: 'Do you want to try it? It is excellent.', es: '¿Quiere probarlo? Es excelente.' },
      { en: 'I want to reserve a table.', es: 'Quiero reservar una mesa.', note: 'una mesa = a table' },
      { en: 'Do you want to reserve a table for tomorrow?', es: '¿Quiere reservar una mesa para mañana?' },
      { en: 'It is not possible, but I want to try it.', es: 'No es posible, pero quiero probarlo.' },
      { en: 'Is it possible to eat here?', es: '¿Es posible comer aquí?', note: 'es posible also takes the plain verb.' }
    ],
    conversations: [
      {
        id: 'c2a',
        title: 'Reserving a table',
        setting: 'You phone a restaurant.',
        turns: [
          { who: 'them', es: 'Buenas tardes. ¿Quiere reservar una mesa?', en: 'Good afternoon. Do you want to reserve a table?' },
          { who: 'you', cue: 'Say: Yes, I want to reserve a table for tomorrow.', es: 'Sí, quiero reservar una mesa para mañana.' },
          { who: 'them', es: '¿Para usted?', en: 'For you?' },
          { who: 'you', cue: 'Say: For me and for a friend.', es: 'Para mí y para un amigo.', note: 'y = and · un amigo = a friend' },
          { who: 'them', es: 'Muy bien. ¿Quiere comer aquí a las nueve?', en: 'Very good. Do you want to eat here at nine?' },
          { who: 'you', cue: 'Say: It is not possible at nine. Is it possible later?', es: 'No es posible a las nueve. ¿Es posible más tarde?' },
          { who: 'them', es: 'Sí, es posible. No es difícil.', en: 'Yes, it is possible. It is not difficult.' },
          { who: 'you', cue: 'Say: Perfect. Thank you very much.', es: 'Perfecto. Muchas gracias.' }
        ]
      }
    ]
  },

  {
    id: 'l3',
    title: 'Can, have to, going to',
    subtitle: 'puedo · tengo que · voy a — three more engines for the same verbs',
    goal: 'Say what you can do, must do and will do, using verbs you already have.',
    blocks: [
      { rule: 'puedo = I can · puede = you can', ex: 'Puedo hacerlo. ¿Puede hacerlo?' },
      { rule: 'tengo que = I have to · tiene que = you have to', ex: 'Tengo que ir. ¿Tiene que trabajar?' },
      { rule: 'voy a = I am going to · va a = you are going to — this is your future tense', ex: 'Voy a comprarlo mañana.' },
      { rule: 'me hooks on the end just like lo', ex: 'ayudarme = to help me · ¿Puede ayudarme?' },
      { rule: 'porque = because · pero = but · si = if', ex: 'Tengo que ir porque es tarde.' }
    ],
    items: [
      { en: 'I can do it.', es: 'Puedo hacerlo.', alt: ['Lo puedo hacer.'] },
      { en: 'I cannot do it today.', es: 'No puedo hacerlo hoy.', alt: ['No lo puedo hacer hoy.'] },
      { en: 'Can you do it?', es: '¿Puede hacerlo?', alt: ['¿Lo puede hacer?'] },
      { en: 'Can you help me?', es: '¿Puede ayudarme?' },
      { en: 'I cannot help you now.', es: 'No puedo ayudarle ahora.', note: 'ayudarle = help you (usted).' },
      { en: 'Can you help me? It is urgent.', es: '¿Puede ayudarme? Es urgente.' },
      { en: 'I have to go.', es: 'Tengo que ir.' },
      { en: 'I have to go now because it is late.', es: 'Tengo que ir ahora porque es tarde.', note: 'tarde = late' },
      { en: 'Do you have to work tomorrow?', es: '¿Tiene que trabajar mañana?', note: 'trabajar = to work' },
      { en: 'I do not have to work tomorrow.', es: 'No tengo que trabajar mañana.' },
      { en: 'I have to speak with you.', es: 'Tengo que hablar con usted.' },
      { en: 'I am going to buy it.', es: 'Voy a comprarlo.', alt: ['Lo voy a comprar.'] },
      { en: 'I am going to speak with him.', es: 'Voy a hablar con él.', note: 'él = him / he' },
      { en: 'Are you going to eat here?', es: '¿Va a comer aquí?' },
      { en: 'I am not going to do it.', es: 'No voy a hacerlo.', alt: ['No lo voy a hacer.'] },
      { en: 'I am going to try it because it is interesting.', es: 'Voy a probarlo porque es interesante.', alt: ['Lo voy a probar porque es interesante.'] },
      { en: 'I can go, but I cannot stay.', es: 'Puedo ir, pero no puedo quedarme.', note: 'quedarse = to stay; quedarme = for me to stay.' },
      { en: 'If it is possible, I am going to go tomorrow.', es: 'Si es posible, voy a ir mañana.' },
      { en: 'I cannot go because I have to work.', es: 'No puedo ir porque tengo que trabajar.' },
      { en: 'Can you speak more slowly?', es: '¿Puede hablar más despacio?', note: 'más despacio = more slowly. The single most useful sentence you will learn.' },
      { en: 'I want to go, but I cannot.', es: 'Quiero ir, pero no puedo.' },
      { en: 'You do not have to do it today.', es: 'No tiene que hacerlo hoy.', alt: ['No lo tiene que hacer hoy.'] },
      { en: 'I am going to see it tomorrow, if it is possible.', es: 'Voy a verlo mañana, si es posible.', alt: ['Lo voy a ver mañana, si es posible.'] }
    ],
    conversations: [
      {
        id: 'c3a',
        title: 'Making a plan',
        setting: 'A colleague wants to meet.',
        turns: [
          { who: 'them', es: '¿Puede hablar conmigo hoy?', en: 'Can you talk with me today?', note: 'conmigo = with me' },
          { who: 'you', cue: 'Say: Today I cannot, because I have to work.', es: 'Hoy no puedo, porque tengo que trabajar.' },
          { who: 'them', es: '¿Y mañana? ¿Tiene que trabajar mañana también?', en: 'And tomorrow? Do you have to work tomorrow too?' },
          { who: 'you', cue: 'Say: No, tomorrow I do not have to work. I can speak with you tomorrow.', es: 'No, mañana no tengo que trabajar. Puedo hablar con usted mañana.' },
          { who: 'them', es: 'Perfecto. ¿Quiere comer aquí?', en: 'Perfect. Do you want to eat here?' },
          { who: 'you', cue: 'Say: Yes, but I cannot stay very late.', es: 'Sí, pero no puedo quedarme muy tarde.' },
          { who: 'them', es: 'No hay problema. Es muy rápido.', en: 'No problem. It is very quick.' },
          { who: 'you', cue: 'Say: Very good. Can you speak more slowly, please?', es: 'Muy bien. ¿Puede hablar más despacio, por favor?' }
        ]
      }
    ]
  },

  {
    id: 'l4',
    title: 'Having, being somewhere, and liking',
    subtitle: 'tengo · estoy / está · hay · me gusta',
    goal: 'Handle the four sentence types that carry most day-to-day talk.',
    blocks: [
      { rule: 'tengo = I have · tiene = you have', ex: 'Tengo tiempo. ¿Tiene tiempo?' },
      { rule: 'es is what something IS; está is where it is or how it is right now', ex: 'Es importante. / Está aquí. / Estoy cansado.' },
      { rule: 'hay = there is / there are', ex: 'Hay un problema. ¿Hay un restaurante aquí?' },
      { rule: 'me gusta = I like it · le gusta = you like it (literally: it pleases me)', ex: 'Me gusta mucho. ¿Le gusta?' },
      { rule: 'Question words', ex: 'dónde = where · qué = what · cuándo = when · por qué = why' }
    ],
    items: [
      { en: 'I have time.', es: 'Tengo tiempo.' },
      { en: 'I do not have time today.', es: 'No tengo tiempo hoy.' },
      { en: 'Do you have time now?', es: '¿Tiene tiempo ahora?' },
      { en: 'I have a problem.', es: 'Tengo un problema.' },
      { en: 'I am tired.', es: 'Estoy cansado.', alt: ['Estoy cansada.'], note: 'A woman says: Estoy cansada.' },
      { en: 'Are you tired?', es: '¿Está cansado?', alt: ['¿Está cansada?'] },
      { en: 'I am here.', es: 'Estoy aquí.' },
      { en: 'Where is the hotel?', es: '¿Dónde está el hotel?' },
      { en: 'The hotel is here, the restaurant is there.', es: 'El hotel está aquí, el restaurante está allí.' },
      { en: 'Where are you?', es: '¿Dónde está?', alt: ['¿Dónde está usted?'] },
      { en: 'Is there a restaurant here?', es: '¿Hay un restaurante aquí?' },
      { en: 'There is a problem.', es: 'Hay un problema.' },
      { en: 'There is no time.', es: 'No hay tiempo.' },
      { en: 'Is there a problem?', es: '¿Hay un problema?' },
      { en: 'I like it.', es: 'Me gusta.' },
      { en: 'I like it a lot.', es: 'Me gusta mucho.' },
      { en: 'Do you like it?', es: '¿Le gusta?' },
      { en: 'I do not like the hotel.', es: 'No me gusta el hotel.' },
      { en: 'I like to speak Spanish.', es: 'Me gusta hablar español.' },
      { en: 'Why do you not want to go?', es: '¿Por qué no quiere ir?' },
      { en: 'Because I am very tired.', es: 'Porque estoy muy cansado.', alt: ['Porque estoy muy cansada.'] },
      { en: 'What do you want to do today?', es: '¿Qué quiere hacer hoy?' },
      { en: 'When are you going to do it?', es: '¿Cuándo va a hacerlo?', alt: ['¿Cuándo lo va a hacer?'] },
      { en: 'I do not have time, but I want to see it.', es: 'No tengo tiempo, pero quiero verlo.' },
      { en: 'There is a very good restaurant here. Do you like it?', es: 'Hay un restaurante muy bueno aquí. ¿Le gusta?' }
    ],
    conversations: [
      {
        id: 'c4a',
        title: 'Arriving in town',
        setting: 'You stop someone in the street.',
        turns: [
          { who: 'you', cue: 'Say: Excuse me, can you help me?', es: 'Perdón, ¿puede ayudarme?', note: 'Perdón = excuse me' },
          { who: 'them', es: 'Sí, claro. ¿Qué necesita?', en: 'Yes, of course. What do you need?' },
          { who: 'you', cue: 'Say: Where is the hotel? I do not know.', es: '¿Dónde está el hotel? No sé.', note: 'No sé = I do not know' },
          { who: 'them', es: 'Está allí, no está lejos. ¿Está cansado?', en: 'It is over there, it is not far. Are you tired?' },
          { who: 'you', cue: 'Say: Yes, I am very tired, and I do not have time.', es: 'Sí, estoy muy cansado, y no tengo tiempo.', alt: ['Sí, estoy muy cansada, y no tengo tiempo.'] },
          { who: 'them', es: '¿Hay un problema?', en: 'Is there a problem?' },
          { who: 'you', cue: 'Say: There is no problem. I have to work tomorrow.', es: 'No hay problema. Tengo que trabajar mañana.' },
          { who: 'them', es: 'Ah, entiendo. ¿Le gusta la ciudad?', en: 'Ah, I understand. Do you like the city?' },
          { who: 'you', cue: 'Say: I like it a lot. It is very interesting.', es: 'Me gusta mucho. Es muy interesante.' }
        ]
      }
    ]
  },

  {
    id: 'l5',
    title: 'The past you can build',
    subtitle: 'he hablado · ha comido — one word plus a fixed ending',
    goal: 'Report what has happened without learning a new tense table.',
    blocks: [
      { rule: '-ar verbs → -ado', ex: 'hablar → hablado · comprar → comprado · trabajar → trabajado' },
      { rule: '-er / -ir verbs → -ido', ex: 'comer → comido · tener → tenido · ir → ido' },
      { rule: 'he = I have · ha = you have / he · she has', ex: 'He hablado. ¿Ha comido?' },
      { rule: 'Three you just take: hecho (done), dicho (said), visto (seen)', ex: 'Lo he hecho. Lo he visto.' },
      { rule: 'lo goes BEFORE he / ha', ex: 'Lo he comprado. ¿Lo ha visto?' },
      { rule: 'ya = already · todavía no = not yet', ex: 'Ya he comido. Todavía no lo he hecho.' }
    ],
    items: [
      { en: 'I have spoken with him.', es: 'He hablado con él.' },
      { en: 'Have you spoken with her?', es: '¿Ha hablado con ella?', note: 'ella = her / she' },
      { en: 'I have not spoken with him today.', es: 'No he hablado con él hoy.' },
      { en: 'I have eaten.', es: 'He comido.' },
      { en: 'I have already eaten.', es: 'Ya he comido.' },
      { en: 'I have not eaten yet.', es: 'Todavía no he comido.' },
      { en: 'Have you eaten here?', es: '¿Ha comido aquí?' },
      { en: 'I have done it.', es: 'Lo he hecho.' },
      { en: 'Have you done it?', es: '¿Lo ha hecho?' },
      { en: 'I have not done it yet.', es: 'Todavía no lo he hecho.' },
      { en: 'I have seen it.', es: 'Lo he visto.' },
      { en: 'Have you seen it?', es: '¿Lo ha visto?' },
      { en: 'I have said it, but it is not important.', es: 'Lo he dicho, pero no es importante.' },
      { en: 'I have bought it.', es: 'Lo he comprado.' },
      { en: 'I have worked a lot today.', es: 'He trabajado mucho hoy.' },
      { en: 'I have not had time.', es: 'No he tenido tiempo.' },
      { en: 'I have already spoken with the manager.', es: 'Ya he hablado con el gerente.', note: 'el gerente = the manager' },
      { en: 'Why have you not done it?', es: '¿Por qué no lo ha hecho?' },
      { en: 'Because I have not had time.', es: 'Porque no he tenido tiempo.' },
      { en: 'I have already seen it and I do not like it.', es: 'Ya lo he visto y no me gusta.' },
      { en: 'Have you been here?', es: '¿Ha estado aquí?', note: 'estar → estado' },
      { en: 'I am going to do it tomorrow, because today I have not been able to.', es: 'Voy a hacerlo mañana, porque hoy no he podido.', alt: ['Lo voy a hacer mañana, porque hoy no he podido.'], note: 'poder → podido' }
    ],
    conversations: [
      {
        id: 'c5a',
        title: 'Where do things stand?',
        setting: 'A colleague checks on progress.',
        turns: [
          { who: 'them', es: '¿Ya ha hablado con el gerente?', en: 'Have you already spoken with the manager?' },
          { who: 'you', cue: 'Say: Yes, I have already spoken with him today.', es: 'Sí, ya he hablado con él hoy.' },
          { who: 'them', es: '¿Y qué ha dicho?', en: 'And what did he say?' },
          { who: 'you', cue: 'Say: He has said that it is not possible.', es: 'Ha dicho que no es posible.', note: 'que = that' },
          { who: 'them', es: '¿Por qué no? ¿Hay un problema?', en: 'Why not? Is there a problem?' },
          { who: 'you', cue: 'Say: There is a problem, but it is not urgent.', es: 'Hay un problema, pero no es urgente.' },
          { who: 'them', es: '¿Lo ha visto usted?', en: 'Have you seen it?' },
          { who: 'you', cue: 'Say: I have not seen it yet. I have not had time.', es: 'Todavía no lo he visto. No he tenido tiempo.' },
          { who: 'them', es: 'Entonces, ¿va a hacerlo mañana?', en: 'So, are you going to do it tomorrow?' },
          { who: 'you', cue: 'Say: Yes, I am going to do it tomorrow, if it is possible.', es: 'Sí, voy a hacerlo mañana, si es posible.' }
        ]
      }
    ]
  },

  {
    id: 'l6',
    title: 'Being polite gets you further',
    subtitle: 'quisiera · podría · me gustaría · sería',
    goal: 'Ask for anything without sounding blunt — the register that actually opens doors.',
    blocks: [
      { rule: 'quisiera = I would like (softer than quiero)', ex: 'Quisiera un café.' },
      { rule: 'podría = could you / could I', ex: '¿Podría ayudarme?' },
      { rule: 'me gustaría = I would like to · le gustaría = would you like to', ex: 'Me gustaría ir.' },
      { rule: 'sería = it would be', ex: 'Sería perfecto. Sería mejor.' },
      { rule: 'Take any verb, add -ía, and you have "would"', ex: 'hablar → hablaría · hacer → haría · ir → iría' },
      { rule: 'por favor = please', ex: '¿Podría repetirlo, por favor?' }
    ],
    items: [
      { en: 'I would like a coffee.', es: 'Quisiera un café.' },
      { en: 'I would like a table for two.', es: 'Quisiera una mesa para dos.' },
      { en: 'I would like to speak with the manager.', es: 'Quisiera hablar con el gerente.' },
      { en: 'Could you help me, please?', es: '¿Podría ayudarme, por favor?' },
      { en: 'Could you repeat that, please?', es: '¿Podría repetirlo, por favor?' },
      { en: 'Could you speak more slowly, please?', es: '¿Podría hablar más despacio, por favor?' },
      { en: 'Could you tell me where the station is?', es: '¿Podría decirme dónde está la estación?', note: 'decirme = to tell me' },
      { en: 'I would like to go with you.', es: 'Me gustaría ir con usted.' },
      { en: 'Would you like to come with me?', es: '¿Le gustaría venir conmigo?', note: 'venir = to come' },
      { en: 'Would you like to eat something?', es: '¿Le gustaría comer algo?', note: 'algo = something' },
      { en: 'It would be perfect.', es: 'Sería perfecto.' },
      { en: 'It would be better.', es: 'Sería mejor.', note: 'mejor = better' },
      { en: 'It would be better to go tomorrow.', es: 'Sería mejor ir mañana.' },
      { en: 'I would do it, but I do not have time.', es: 'Lo haría, pero no tengo tiempo.' },
      { en: 'I would speak with him, but he is not here.', es: 'Hablaría con él, pero no está aquí.' },
      { en: 'I would like to see it, if it is possible.', es: 'Me gustaría verlo, si es posible.', alt: ['Quisiera verlo, si es posible.', 'Me lo gustaría ver, si es posible.'] },
      { en: 'Could I try it?', es: '¿Podría probarlo?', alt: ['¿Lo podría probar?'] },
      { en: 'It would be very interesting for me.', es: 'Sería muy interesante para mí.' },
      { en: 'I would like to reserve a table for tomorrow, please.', es: 'Quisiera reservar una mesa para mañana, por favor.' },
      { en: 'Could you do it today? It is urgent.', es: '¿Podría hacerlo hoy? Es urgente.' },
      { en: 'I would like to, but I cannot.', es: 'Me gustaría, pero no puedo.' }
    ],
    conversations: [
      {
        id: 'c6a',
        title: 'In the café',
        setting: 'You order, and get a question back.',
        turns: [
          { who: 'them', es: 'Buenos días. ¿Qué quiere tomar?', en: 'Good morning. What would you like to have?', note: 'tomar = to have (a drink)' },
          { who: 'you', cue: 'Say: I would like a coffee, please.', es: 'Quisiera un café, por favor.' },
          { who: 'them', es: '¿Le gustaría comer algo también?', en: 'Would you like to eat something too?' },
          { who: 'you', cue: 'Say: I would like to, but I do not have time.', es: 'Me gustaría, pero no tengo tiempo.' },
          { who: 'them', es: 'Es muy rápido, no hay problema.', en: 'It is very quick, no problem.' },
          { who: 'you', cue: 'Say: Then yes. It would be perfect.', es: 'Entonces sí. Sería perfecto.', note: 'entonces = then' },
          { who: 'them', es: '¿Podría esperar cinco minutos?', en: 'Could you wait five minutes?' },
          { who: 'you', cue: 'Say: Could you repeat that, please? More slowly.', es: '¿Podría repetirlo, por favor? Más despacio.' },
          { who: 'them', es: 'Claro. ¿Puede... esperar... cinco minutos?', en: 'Of course. Can you... wait... five minutes?' },
          { who: 'you', cue: 'Say: Yes, of course. Thank you very much.', es: 'Sí, claro. Muchas gracias.' }
        ]
      }
    ]
  },

  {
    id: 'l7',
    title: 'Yesterday',
    subtitle: 'hablé · comí · fui · hice — the past you tell stories in',
    goal: 'Say what you did, where you went, and how it was.',
    blocks: [
      { rule: '-ar verbs: I = -é, you / he / she = -ó', ex: 'hablar → hablé, habló · trabajar → trabajé, trabajó' },
      { rule: '-er / -ir verbs: I = -í, you / he / she = -ió', ex: 'comer → comí, comió · salir → salí, salió' },
      { rule: 'The handful you take whole', ex: 'ir/ser → fui, fue · hacer → hice, hizo · decir → dije, dijo · tener → tuve, tuvo · estar → estuve, estuvo' },
      { rule: 'ayer = yesterday · la semana pasada = last week · anoche = last night' },
      { rule: 'nada = nothing, and Spanish keeps the no', ex: 'No dije nada. — I said nothing.' }
    ],
    items: [
      { en: 'I spoke with him yesterday.', es: 'Hablé con él ayer.' },
      { en: 'Did you speak with her?', es: '¿Habló con ella?' },
      { en: 'I worked a lot last week.', es: 'Trabajé mucho la semana pasada.' },
      { en: 'I ate at the hotel.', es: 'Comí en el hotel.', note: 'en = in / at' },
      { en: 'Where did you eat last night?', es: '¿Dónde comió anoche?' },
      { en: 'I went to Madrid last week.', es: 'Fui a Madrid la semana pasada.' },
      { en: 'Where did you go?', es: '¿Adónde fue?' },
      { en: 'I did it yesterday.', es: 'Lo hice ayer.' },
      { en: 'What did you do yesterday?', es: '¿Qué hizo ayer?' },
      { en: 'What did you say?', es: '¿Qué dijo?' },
      { en: 'I did not say anything.', es: 'No dije nada.' },
      { en: 'I had a problem yesterday.', es: 'Tuve un problema ayer.' },
      { en: 'I was there.', es: 'Estuve allí.' },
      { en: 'It was very interesting.', es: 'Fue muy interesante.' },
      { en: 'It was not difficult.', es: 'No fue difícil.' },
      { en: 'Did you like it?', es: '¿Le gustó?' },
      { en: 'I liked it a lot.', es: 'Me gustó mucho.' },
      { en: 'I did not have time, so I did not do it.', es: 'No tuve tiempo, así que no lo hice.', note: 'así que = so' },
      { en: 'I went with a friend and we ate there.', es: 'Fui con un amigo y comimos allí.', note: 'comimos = we ate' },
      { en: 'I bought it yesterday, but I do not like it.', es: 'Lo compré ayer, pero no me gusta.' },
      { en: 'Why did you not tell me?', es: '¿Por qué no me lo dijo?' },
      { en: 'I spoke with the manager and he said that it is not possible.', es: 'Hablé con el gerente y dijo que no es posible.' }
    ],
    conversations: [
      {
        id: 'c7a',
        title: 'How was the weekend?',
        setting: 'Monday morning small talk.',
        turns: [
          { who: 'them', es: '¿Qué hizo el fin de semana?', en: 'What did you do at the weekend?', note: 'el fin de semana = the weekend' },
          { who: 'you', cue: 'Say: I went to Madrid with a friend.', es: 'Fui a Madrid con un amigo.' },
          { who: 'them', es: '¡Qué bien! ¿Le gustó?', en: 'How nice! Did you like it?' },
          { who: 'you', cue: 'Say: I liked it a lot. It was very interesting.', es: 'Me gustó mucho. Fue muy interesante.' },
          { who: 'them', es: '¿Dónde comieron?', en: 'Where did you eat?' },
          { who: 'you', cue: 'Say: We ate at a very good restaurant. I ate a lot.', es: 'Comimos en un restaurante muy bueno. Comí mucho.' },
          { who: 'them', es: '¿Y no tuvo problemas con el hotel?', en: 'And you did not have problems with the hotel?' },
          { who: 'you', cue: 'Say: I had a problem, but it was not urgent.', es: 'Tuve un problema, pero no fue urgente.' },
          { who: 'them', es: '¿Qué dijeron en el hotel?', en: 'What did they say at the hotel?' },
          { who: 'you', cue: 'Say: They did not say anything, but they did it.', es: 'No dijeron nada, pero lo hicieron.', note: 'dijeron / hicieron = they said / they did' },
          { who: 'them', es: '¿Le gustaría volver?', en: 'Would you like to go back?' },
          { who: 'you', cue: 'Say: I would like to go back, but I do not have time now.', es: 'Me gustaría volver, pero no tengo tiempo ahora.' }
        ]
      }
    ]
  },

  {
    id: 'l8',
    title: 'Holding your end of a conversation',
    subtitle: 'Connectors, reactions, and buying yourself time',
    goal: 'Keep a conversation alive when you do not know a word — the skill that decides whether you actually speak.',
    blocks: [
      { rule: 'The repair kit', ex: 'No entiendo. — I do not understand. · ¿Cómo se dice...? — How do you say...? · ¿Qué significa...? — What does ... mean?' },
      { rule: 'Buying time', ex: 'Bueno... · Pues... · A ver... · Es decir... (that is to say)' },
      { rule: 'Reacting', ex: 'Claro. · Exacto. · De acuerdo. (agreed) · ¡Qué bien! · Lo siento. (I am sorry)' },
      { rule: 'Joining ideas', ex: 'entonces (so) · además (besides) · aunque (although) · por eso (that is why) · sobre todo (above all)' },
      { rule: 'Softening', ex: 'creo que... (I think that) · me parece que... (it seems to me that) · quizás (maybe)' }
    ],
    items: [
      { en: 'I do not understand.', es: 'No entiendo.' },
      { en: 'I am sorry, I do not understand. Could you repeat that?', es: 'Lo siento, no entiendo. ¿Podría repetirlo?' },
      { en: 'How do you say it in Spanish?', es: '¿Cómo se dice en español?' },
      { en: 'What does that mean?', es: '¿Qué significa eso?', note: 'eso = that' },
      { en: 'I think that it is possible.', es: 'Creo que es posible.' },
      { en: 'I do not think so.', es: 'Creo que no.' },
      { en: 'It seems to me that there is a problem.', es: 'Me parece que hay un problema.' },
      { en: 'Maybe tomorrow, I do not know.', es: 'Quizás mañana, no sé.' },
      { en: 'Agreed. It would be perfect.', es: 'De acuerdo. Sería perfecto.' },
      { en: 'Of course, I understand.', es: 'Claro, entiendo.' },
      { en: 'That is why I want to speak with you.', es: 'Por eso quiero hablar con usted.' },
      { en: 'Besides, I do not have time.', es: 'Además, no tengo tiempo.' },
      { en: 'Although it is difficult, I want to try it.', es: 'Aunque es difícil, quiero probarlo.' },
      { en: 'So, what do you want to do?', es: 'Entonces, ¿qué quiere hacer?' },
      { en: 'Above all, it is important for me.', es: 'Sobre todo, es importante para mí.' },
      { en: 'I think that I have already said it.', es: 'Creo que ya lo he dicho.' },
      { en: 'It seems to me that it would be better to go tomorrow.', es: 'Me parece que sería mejor ir mañana.' },
      { en: 'I am sorry, I cannot help you today.', es: 'Lo siento, no puedo ayudarle hoy.' },
      { en: 'Well... I do not know. Maybe.', es: 'Bueno... no sé. Quizás.' },
      { en: 'That is to say, it is not urgent.', es: 'Es decir, no es urgente.' },
      { en: 'I speak a little Spanish, but I do not understand everything.', es: 'Hablo un poco de español, pero no entiendo todo.', note: 'un poco de = a little · todo = everything' },
      { en: 'How do you say "table" in Spanish?', es: '¿Cómo se dice "table" en español?' }
    ],
    conversations: [
      {
        id: 'c8a',
        title: 'Lost in a fast conversation',
        setting: 'Someone is talking quickly and you have to stay in the conversation.',
        turns: [
          { who: 'them', es: 'Oiga, ¿usted es el que llamó ayer por lo del cambio?', en: 'Hey, are you the one who called yesterday about the change?' },
          { who: 'you', cue: 'Say: I am sorry, I do not understand. Could you speak more slowly?', es: 'Lo siento, no entiendo. ¿Podría hablar más despacio?' },
          { who: 'them', es: 'Claro. ¿Usted... llamó... ayer?', en: 'Of course. Did you... call... yesterday?' },
          { who: 'you', cue: 'Say: Yes, I called yesterday. I spoke with the manager.', es: 'Sí, llamé ayer. Hablé con el gerente.' },
          { who: 'them', es: 'Perfecto. Entonces, ¿quiere hacerlo hoy o mañana?', en: 'Perfect. So, do you want to do it today or tomorrow?' },
          { who: 'you', cue: 'Say: I think that it would be better tomorrow.', es: 'Creo que sería mejor mañana.' },
          { who: 'them', es: 'Vale. Pero mañana hay mucha gente.', en: 'OK. But tomorrow there are a lot of people.' },
          { who: 'you', cue: 'Say: What does "gente" mean?', es: '¿Qué significa "gente"?' },
          { who: 'them', es: 'Gente... personas. Muchas personas.', en: 'Gente... people. Many people.' },
          { who: 'you', cue: 'Say: Ah, I understand. Then today, if it is possible.', es: 'Ah, entiendo. Entonces hoy, si es posible.' },
          { who: 'them', es: 'Muy bien. ¿Puede venir a las cuatro?', en: 'Very good. Can you come at four?' },
          { who: 'you', cue: 'Say: Agreed. I am going to come at four. Thank you very much.', es: 'De acuerdo. Voy a venir a las cuatro. Muchas gracias.' }
        ]
      },
      {
        id: 'c8b',
        title: 'Everything you own, in one exchange',
        setting: 'A longer conversation drawing on all eight lessons.',
        turns: [
          { who: 'them', es: 'Buenas tardes. ¿Ya ha estado aquí antes?', en: 'Good afternoon. Have you been here before?' },
          { who: 'you', cue: 'Say: No, I have not been here. I came yesterday.', es: 'No, no he estado aquí. Vine ayer.', note: 'vine = I came' },
          { who: 'them', es: '¿Y le gusta la ciudad?', en: 'And do you like the city?' },
          { who: 'you', cue: 'Say: I like it a lot, although I have not seen much.', es: 'Me gusta mucho, aunque no he visto mucho.' },
          { who: 'them', es: '¿Por qué no? ¿No ha tenido tiempo?', en: 'Why not? Have you not had time?' },
          { who: 'you', cue: 'Say: I have not had time, because I have to work.', es: 'No he tenido tiempo, porque tengo que trabajar.' },
          { who: 'them', es: '¡Qué pena! ¿Cuándo va a volver?', en: 'What a shame! When are you going to come back?' },
          { who: 'you', cue: 'Say: I do not know. Maybe next week, if it is possible.', es: 'No sé. Quizás la próxima semana, si es posible.', alt: ['No sé. Quizás la semana próxima, si es posible.'], note: 'la próxima semana = next week' },
          { who: 'them', es: 'Sería una buena idea. Hay mucho que ver.', en: 'It would be a good idea. There is a lot to see.' },
          { who: 'you', cue: 'Say: That is why I would like to come back. I want to see everything.', es: 'Por eso me gustaría volver. Quiero verlo todo.' },
          { who: 'them', es: 'Y su español es muy bueno, ¿eh?', en: 'And your Spanish is very good, eh?' },
          { who: 'you', cue: 'Say: Thank you, but I speak a little. I do not understand everything.', es: 'Gracias, pero hablo un poco. No entiendo todo.' },
          { who: 'them', es: 'No, no, habla muy bien. De verdad.', en: 'No, no, you speak very well. Really.' },
          { who: 'you', cue: 'Say: You are very kind. I have to go, it is late.', es: 'Es usted muy amable. Tengo que ir, es tarde.' }
        ]
      }
    ]
  }
];
