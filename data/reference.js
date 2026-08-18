/* The reference shelf: sayings, vocabulary, and the places where Spanish and
 * English genuinely disagree.
 *
 * A deliberate note on method: Michel Thomas would not have handed you a word
 * list. Lists are for looking things up, not for learning from, and nothing
 * here is drilled or scheduled. The course teaches; this shelf answers
 * questions. Keeping the two separate is the point.
 */

window.MT = window.MT || {};

/* ---------------------------------------------------------------------------
 * 1. Sayings — what people actually say, as opposed to what textbooks print.
 * lit = the literal reading, kept wherever it is the reason the phrase sticks.
 * ------------------------------------------------------------------------ */

window.MT.sayings = [
  {
    group: 'Greetings and courtesy',
    note: 'Spanish is warmer than English here. Skipping these reads as brusque, not efficient.',
    items: [
      { es: '¿Qué tal?', en: 'How are things?', note: 'The everyday one. Works with anybody.' },
      { es: '¿Cómo está?', en: 'How are you?', note: 'Polite (usted). ¿Cómo estás? to a friend.' },
      { es: '¿Qué pasa?', en: "What's up?", note: 'Casual, among friends.' },
      { es: 'Mucho gusto.', en: 'Pleased to meet you.', lit: 'Much pleasure.' },
      { es: 'Encantado. / Encantada.', en: 'Delighted to meet you.', note: 'Men say encantado, women encantada.' },
      { es: 'Con mucho gusto.', en: 'With pleasure. / Gladly.' },
      { es: 'De nada.', en: "You're welcome.", lit: 'Of nothing.' },
      { es: 'No hay de qué.', en: 'Not at all. / Don\'t mention it.' },
      { es: 'Perdón. / Disculpe.', en: 'Sorry. / Excuse me.', note: 'Disculpe to get someone\'s attention; perdón to apologise.' },
      { es: 'Lo siento mucho.', en: 'I am very sorry.' },
      { es: 'Que le vaya bien.', en: 'All the best. / Take care.', lit: 'May it go well for you.' },
      { es: 'Hasta luego.', en: 'See you later.', note: 'Far commoner than adiós, which sounds final.' },
      { es: 'Buen provecho.', en: 'Enjoy your meal.', note: 'Said to anyone eating, including strangers.' },
      { es: 'Salud.', en: 'Cheers. / Bless you.', lit: 'Health.' }
    ]
  },
  {
    group: 'Reactions and fillers',
    note: 'These buy you thinking time and keep you in the conversation. Learn them before you need them.',
    items: [
      { es: 'Vale.', en: 'OK.', note: 'Spain. In Latin America: bueno, órale, dale.' },
      { es: 'Claro. / Claro que sí.', en: 'Of course.' },
      { es: 'Por supuesto.', en: 'Certainly.' },
      { es: 'Exacto. / Eso es.', en: "Exactly. / That's it." },
      { es: 'De acuerdo.', en: 'Agreed.' },
      { es: 'Es que...', en: 'The thing is...', note: 'The single most useful stall in the language.' },
      { es: 'O sea...', en: 'I mean... / That is...' },
      { es: 'Bueno...', en: 'Well...' },
      { es: 'A ver...', en: "Let's see...", lit: 'To see.' },
      { es: 'Pues...', en: 'Well then...' },
      { es: '¡No me digas!', en: 'You don\'t say!' },
      { es: '¡Qué va!', en: 'No way! / Nonsense!' },
      { es: '¡Ojalá!', en: 'I hope so! / If only!', note: 'From Arabic "in šāʾ Allāh". Takes the subjunctive: ¡Ojalá venga!' },
      { es: 'Menos mal.', en: 'Thank goodness.', lit: 'Less bad.' },
      { es: 'No pasa nada.', en: "It's fine. / No harm done.", lit: 'Nothing happens.' },
      { es: 'Ni idea.', en: 'No idea.' },
      { es: 'Me da igual.', en: "I don't mind. / Either way.", lit: 'It gives me the same.' },
      { es: '¿En serio?', en: 'Really? / Seriously?' },
      { es: '¡Qué bien!', en: 'How great!' },
      { es: '¡Qué pena! / ¡Qué lástima!', en: 'What a shame!' },
      { es: 'Ni modo.', en: 'Oh well. / Nothing to be done.', note: 'Latin America, Mexico especially.' },
      { es: '¡Qué chévere!', en: 'How cool!', note: 'Caribbean, Colombia, Venezuela. Mexico: ¡Qué padre! Spain: ¡Qué guay!' }
    ]
  },
  {
    group: 'Phrases that do real work',
    note: 'Fixed expressions worth taking whole rather than assembling.',
    items: [
      { es: 'Tener ganas de...', en: 'To feel like...', note: 'Tengo ganas de comer. — I feel like eating.' },
      { es: 'Tener razón', en: 'To be right', lit: 'To have reason.', note: 'Tiene razón. — You are right.' },
      { es: 'Valer la pena', en: 'To be worth it', lit: 'To be worth the sorrow.', note: 'Vale la pena. — It is worth it.' },
      { es: 'Hacer falta', en: 'To be needed', note: 'Hace falta tiempo. — Time is needed.' },
      { es: 'Echar de menos', en: 'To miss (someone)', note: 'Spain. Latin America says extrañar.' },
      { es: 'Darse cuenta de', en: 'To realise', note: 'Me di cuenta. — I realised.' },
      { es: 'Acabar de...', en: 'To have just...', note: 'Acabo de comer. — I have just eaten.' },
      { es: 'Volver a...', en: 'To do something again', lit: 'To return to.', note: 'Volví a llamar. — I called again.' },
      { es: 'Ponerse a...', en: 'To start doing', note: 'Me puse a trabajar. — I got down to work.' },
      { es: 'Llevar (time) + -ando', en: 'To have been doing for...', note: 'Llevo dos años aquí. — I have been here two years.' },
      { es: 'A lo mejor', en: 'Maybe', note: 'Takes ordinary indicative, unlike quizás.' },
      { es: 'De vez en cuando', en: 'From time to time' },
      { es: 'En seguida', en: 'Right away' },
      { es: 'Por si acaso', en: 'Just in case' },
      { es: 'Ya está.', en: "That's it. / Done." },
      { es: 'Poco a poco', en: 'Little by little' },
      { es: 'Sobre todo', en: 'Above all / especially' },
      { es: 'Por lo menos', en: 'At least' },
      { es: 'Al fin y al cabo', en: 'When all is said and done' },
      { es: 'Hoy en día', en: 'These days / nowadays' }
    ]
  },
  {
    group: 'Idioms',
    note: 'The literal reading is usually the reason they stick. Read both columns.',
    items: [
      { es: 'Costar un ojo de la cara', en: 'To cost an arm and a leg', lit: 'To cost an eye from the face.' },
      { es: 'Tomar el pelo', en: "To pull someone's leg", lit: 'To take the hair.' },
      { es: 'Meter la pata', en: 'To put your foot in it', lit: 'To put in the paw.' },
      { es: 'Ser pan comido', en: 'To be a piece of cake', lit: 'To be eaten bread.' },
      { es: 'Hablar por los codos', en: 'To talk nonstop', lit: 'To talk through the elbows.' },
      { es: 'No tener pelos en la lengua', en: 'To not mince words', lit: 'To have no hairs on the tongue.' },
      { es: 'Echar una mano', en: 'To lend a hand', lit: 'To throw a hand.' },
      { es: 'Dar en el clavo', en: 'To hit the nail on the head', lit: 'To strike the nail.' },
      { es: 'Estar en las nubes', en: 'To have your head in the clouds', lit: 'To be in the clouds.' },
      { es: 'Estar como una cabra', en: 'To be off your rocker', lit: 'To be like a goat.' },
      { es: 'Ponerse las pilas', en: 'To get your act together', lit: 'To put your batteries in.' },
      { es: 'Estar hecho polvo', en: 'To be shattered / exhausted', lit: 'To be made into dust.' },
      { es: 'Tirar la toalla', en: 'To throw in the towel', lit: 'To throw the towel.' },
      { es: 'Quedarse de piedra', en: 'To be stunned', lit: 'To remain of stone.' },
      { es: 'Buscarle tres pies al gato', en: 'To overcomplicate things', lit: 'To look for three feet on the cat.' },
      { es: 'Ser uña y carne', en: 'To be inseparable', lit: 'To be fingernail and flesh.' }
    ]
  },
  {
    group: 'Proverbs',
    note: 'Refranes. Dropping one at the right moment does more for you than fifty extra nouns.',
    items: [
      { es: 'Más vale tarde que nunca.', en: 'Better late than never.' },
      { es: 'Más vale pájaro en mano que cien volando.', en: 'A bird in the hand is worth two in the bush.', lit: 'Better a bird in hand than a hundred flying.' },
      { es: 'No hay mal que por bien no venga.', en: 'Every cloud has a silver lining.', lit: 'There is no bad that does not come for a good.' },
      { es: 'Del dicho al hecho hay mucho trecho.', en: 'Easier said than done.', lit: 'From the saying to the deed there is a long stretch.' },
      { es: 'A quien madruga, Dios le ayuda.', en: 'The early bird catches the worm.', lit: 'God helps the one who rises early.' },
      { es: 'Ojos que no ven, corazón que no siente.', en: 'Out of sight, out of mind.', lit: 'Eyes that do not see, heart that does not feel.' },
      { es: 'En boca cerrada no entran moscas.', en: 'Silence is golden.', lit: 'Flies do not enter a closed mouth.' },
      { es: 'El que no arriesga, no gana.', en: 'Nothing ventured, nothing gained.' },
      { es: 'Dime con quién andas y te diré quién eres.', en: 'You are known by the company you keep.', lit: 'Tell me who you walk with and I will tell you who you are.' },
      { es: 'No dejes para mañana lo que puedas hacer hoy.', en: 'Do not put off till tomorrow what you can do today.' },
      { es: 'Querer es poder.', en: 'Where there is a will there is a way.', lit: 'To want is to be able.' },
      { es: 'Poco a poco se anda lejos.', en: 'Little by little one goes far.' },
      { es: 'Sobre gustos no hay nada escrito.', en: 'There is no accounting for taste.', lit: 'On tastes nothing is written.' },
      { es: 'Mejor solo que mal acompañado.', en: 'Better alone than in bad company.' },
      { es: 'Camarón que se duerme, se lo lleva la corriente.', en: 'You snooze, you lose.', lit: 'The shrimp that falls asleep is carried off by the current.', note: 'Latin America.' },
      { es: 'Cada loco con su tema.', en: 'To each their own.', lit: 'Each madman with his subject.' }
    ]
  },
  {
    group: 'When you are stuck',
    note: 'The repair kit. These are what keep a conversation alive when your Spanish runs out.',
    items: [
      { es: 'No entiendo.', en: 'I do not understand.' },
      { es: '¿Podría repetirlo, por favor?', en: 'Could you repeat that, please?' },
      { es: 'Más despacio, por favor.', en: 'More slowly, please.' },
      { es: '¿Cómo se dice ... en español?', en: 'How do you say ... in Spanish?' },
      { es: '¿Qué significa ...?', en: 'What does ... mean?' },
      { es: '¿Cómo se escribe?', en: 'How do you spell it?' },
      { es: 'Hablo un poco de español.', en: 'I speak a little Spanish.' },
      { es: 'Estoy aprendiendo.', en: 'I am learning.' },
      { es: '¿Habla inglés?', en: 'Do you speak English?' },
      { es: 'No sé la palabra.', en: 'I do not know the word.' },
      { es: '¿Puede ayudarme?', en: 'Can you help me?' },
      { es: '¿Me entiende?', en: 'Do you understand me?' }
    ]
  }
];

/* ---------------------------------------------------------------------------
 * 2. Vocabulary. Nouns carry their article, because the article IS the gender
 * and learning a noun without it means learning it twice.
 * ------------------------------------------------------------------------ */

window.MT.vocabulary = [
  {
    group: 'The 40 verbs that do most of the work',
    note: 'Irregulars are marked. Learn these and you can say most of what you need.',
    items: [
      { es: 'ser', en: 'to be (permanently)', note: 'irregular · soy, es' },
      { es: 'estar', en: 'to be (right now, or located)', note: 'irregular · estoy, está' },
      { es: 'tener', en: 'to have', note: 'irregular · tengo, tiene' },
      { es: 'hacer', en: 'to do, to make', note: 'irregular · hago, hace' },
      { es: 'ir', en: 'to go', note: 'irregular · voy, va' },
      { es: 'poder', en: 'to be able, can', note: 'irregular · puedo, puede' },
      { es: 'querer', en: 'to want, to love', note: 'irregular · quiero, quiere' },
      { es: 'saber', en: 'to know (facts)', note: 'irregular · sé, sabe' },
      { es: 'conocer', en: 'to know (people, places)', note: 'conozco, conoce' },
      { es: 'decir', en: 'to say, to tell', note: 'irregular · digo, dice' },
      { es: 'ver', en: 'to see', note: 'veo, ve' },
      { es: 'dar', en: 'to give', note: 'irregular · doy, da' },
      { es: 'venir', en: 'to come', note: 'irregular · vengo, viene' },
      { es: 'llevar', en: 'to carry, to wear, to take' },
      { es: 'dejar', en: 'to leave, to let' },
      { es: 'pasar', en: 'to pass, to happen, to spend (time)' },
      { es: 'poner', en: 'to put', note: 'irregular · pongo, pone' },
      { es: 'salir', en: 'to leave, to go out', note: 'salgo, sale' },
      { es: 'llegar', en: 'to arrive' },
      { es: 'hablar', en: 'to speak' },
      { es: 'comer', en: 'to eat' },
      { es: 'beber / tomar', en: 'to drink', note: 'tomar is commoner in Latin America' },
      { es: 'vivir', en: 'to live' },
      { es: 'trabajar', en: 'to work' },
      { es: 'comprar', en: 'to buy' },
      { es: 'pagar', en: 'to pay' },
      { es: 'necesitar', en: 'to need' },
      { es: 'buscar', en: 'to look for', note: 'no "for" — busco el hotel' },
      { es: 'encontrar', en: 'to find', note: 'encuentro, encuentra' },
      { es: 'pensar', en: 'to think', note: 'pienso, piensa' },
      { es: 'creer', en: 'to believe, to think' },
      { es: 'entender', en: 'to understand', note: 'entiendo, entiende' },
      { es: 'esperar', en: 'to wait, to hope' },
      { es: 'empezar', en: 'to begin', note: 'empiezo, empieza' },
      { es: 'terminar / acabar', en: 'to finish' },
      { es: 'volver', en: 'to return, to come back', note: 'vuelvo, vuelve' },
      { es: 'quedar(se)', en: 'to stay, to remain, to arrange to meet' },
      { es: 'gustar', en: 'to please', note: 'works backwards — see the contrasts' },
      { es: 'ayudar', en: 'to help' },
      { es: 'usar', en: 'to use' }
    ]
  },
  {
    group: 'People',
    items: [
      { es: 'el hombre', en: 'man' }, { es: 'la mujer', en: 'woman' },
      { es: 'el niño / la niña', en: 'boy / girl' }, { es: 'la gente', en: 'people', note: 'singular in Spanish: la gente es...' },
      { es: 'la persona', en: 'person', note: 'always feminine, even for a man' },
      { es: 'el amigo / la amiga', en: 'friend' }, { es: 'la familia', en: 'family' },
      { es: 'el padre / la madre', en: 'father / mother' }, { es: 'los padres', en: 'parents' },
      { es: 'el hijo / la hija', en: 'son / daughter' }, { es: 'el hermano / la hermana', en: 'brother / sister' },
      { es: 'el marido / la esposa', en: 'husband / wife' }, { es: 'el novio / la novia', en: 'boyfriend / girlfriend' },
      { es: 'el abuelo / la abuela', en: 'grandfather / grandmother' }, { es: 'el jefe / la jefa', en: 'boss' },
      { es: 'el compañero', en: 'colleague, companion' }, { es: 'el vecino', en: 'neighbour' },
      { es: 'el señor / la señora', en: 'sir, Mr / madam, Mrs' }, { es: 'el cliente', en: 'customer' },
      { es: 'el camarero / el mesero', en: 'waiter', note: 'camarero in Spain, mesero in Latin America' }
    ]
  },
  {
    group: 'Time',
    items: [
      { es: 'el tiempo', en: 'time, weather' }, { es: 'la vez', en: 'time (occasion)', note: 'otra vez = again' },
      { es: 'la hora', en: 'hour, time of day' }, { es: 'el día', en: 'day', note: 'masculine despite the -a' },
      { es: 'la semana', en: 'week' }, { es: 'el mes', en: 'month' }, { es: 'el año', en: 'year' },
      { es: 'hoy', en: 'today' }, { es: 'mañana', en: 'tomorrow, morning' }, { es: 'ayer', en: 'yesterday' },
      { es: 'anoche', en: 'last night' }, { es: 'ahora', en: 'now' }, { es: 'luego', en: 'later, then' },
      { es: 'temprano', en: 'early' }, { es: 'tarde', en: 'late, afternoon' }, { es: 'siempre', en: 'always' },
      { es: 'nunca', en: 'never' }, { es: 'a veces', en: 'sometimes' }, { es: 'todavía', en: 'still, yet' },
      { es: 'ya', en: 'already, now' }, { es: 'pronto', en: 'soon' }, { es: 'mientras', en: 'while' },
      { es: 'lunes, martes, miércoles', en: 'Monday, Tuesday, Wednesday', note: 'lower case in Spanish' },
      { es: 'jueves, viernes', en: 'Thursday, Friday' }, { es: 'sábado, domingo', en: 'Saturday, Sunday' },
      { es: 'el fin de semana', en: 'weekend' }
    ]
  },
  {
    group: 'Numbers',
    items: [
      { es: 'uno, dos, tres', en: '1, 2, 3' }, { es: 'cuatro, cinco, seis', en: '4, 5, 6' },
      { es: 'siete, ocho, nueve', en: '7, 8, 9' }, { es: 'diez, once, doce', en: '10, 11, 12' },
      { es: 'trece, catorce, quince', en: '13, 14, 15' }, { es: 'dieciséis, diecisiete', en: '16, 17' },
      { es: 'dieciocho, diecinueve, veinte', en: '18, 19, 20' }, { es: 'treinta, cuarenta, cincuenta', en: '30, 40, 50' },
      { es: 'sesenta, setenta, ochenta', en: '60, 70, 80' }, { es: 'noventa, cien', en: '90, 100' },
      { es: 'doscientos, quinientos', en: '200, 500', note: '500 is irregular: quinientos, not cincocientos' },
      { es: 'mil, un millón', en: '1,000 · 1,000,000' },
      { es: 'primero, segundo, tercero', en: 'first, second, third' },
      { es: 'la mitad', en: 'half' }, { es: 'un par de', en: 'a couple of' }
    ]
  },
  {
    group: 'Food and drink',
    items: [
      { es: 'la comida', en: 'food, meal' }, { es: 'el desayuno', en: 'breakfast' },
      { es: 'el almuerzo', en: 'lunch' }, { es: 'la cena', en: 'dinner' },
      { es: 'el agua', en: 'water', note: 'feminine, but takes el for sound: el agua fría' },
      { es: 'el vino', en: 'wine' }, { es: 'la cerveza', en: 'beer' }, { es: 'el café', en: 'coffee' },
      { es: 'el té', en: 'tea' }, { es: 'el pan', en: 'bread' }, { es: 'la carne', en: 'meat' },
      { es: 'el pescado', en: 'fish (to eat)' }, { es: 'el pollo', en: 'chicken' },
      { es: 'el huevo', en: 'egg' }, { es: 'el queso', en: 'cheese' }, { es: 'la fruta', en: 'fruit' },
      { es: 'la verdura', en: 'vegetable' }, { es: 'el arroz', en: 'rice' }, { es: 'la sal', en: 'salt' },
      { es: 'el azúcar', en: 'sugar' }, { es: 'la cuenta', en: 'the bill' }, { es: 'la carta / el menú', en: 'menu' },
      { es: 'la mesa', en: 'table' }, { es: 'la propina', en: 'tip' }, { es: 'rico', en: 'delicious' },
      { es: 'tengo hambre', en: 'I am hungry', note: 'literally "I have hunger"' },
      { es: 'tengo sed', en: 'I am thirsty' }
    ]
  },
  {
    group: 'Getting around',
    items: [
      { es: 'la calle', en: 'street' }, { es: 'la ciudad', en: 'city' }, { es: 'el pueblo', en: 'town, village' },
      { es: 'el país', en: 'country' }, { es: 'el hotel', en: 'hotel' }, { es: 'la habitación', en: 'room' },
      { es: 'la llave', en: 'key' }, { es: 'el aeropuerto', en: 'airport' }, { es: 'la estación', en: 'station' },
      { es: 'el tren', en: 'train' }, { es: 'el avión', en: 'plane' }, { es: 'el coche / el carro', en: 'car', note: 'coche in Spain, carro in much of Latin America' },
      { es: 'el autobús', en: 'bus' }, { es: 'el billete / el boleto', en: 'ticket', note: 'billete in Spain, boleto in Latin America' },
      { es: 'la maleta', en: 'suitcase' }, { es: 'el equipaje', en: 'luggage' },
      { es: 'la izquierda', en: 'the left' }, { es: 'la derecha', en: 'the right' },
      { es: 'derecho / recto', en: 'straight ahead' }, { es: 'cerca', en: 'near' }, { es: 'lejos', en: 'far' },
      { es: 'aquí / acá', en: 'here' }, { es: 'allí / allá', en: 'there' },
      { es: 'la tienda', en: 'shop' }, { es: 'el mercado', en: 'market' }, { es: 'el banco', en: 'bank' },
      { es: 'el baño / el aseo', en: 'toilet, bathroom' }, { es: 'la playa', en: 'beach' }
    ]
  },
  {
    group: 'Things and places',
    items: [
      { es: 'la cosa', en: 'thing' }, { es: 'la casa', en: 'house, home' }, { es: 'el piso', en: 'flat, floor' },
      { es: 'la puerta', en: 'door' }, { es: 'la ventana', en: 'window' }, { es: 'la silla', en: 'chair' },
      { es: 'la cama', en: 'bed' }, { es: 'el libro', en: 'book' }, { es: 'el papel', en: 'paper' },
      { es: 'el dinero', en: 'money' }, { es: 'el teléfono', en: 'telephone' }, { es: 'el ordenador / la computadora', en: 'computer', note: 'ordenador in Spain' },
      { es: 'la ropa', en: 'clothes' }, { es: 'el trabajo', en: 'work, job' }, { es: 'la empresa', en: 'company' },
      { es: 'la oficina', en: 'office' }, { es: 'la reunión', en: 'meeting' }, { es: 'el problema', en: 'problem', note: 'masculine despite the -a' },
      { es: 'la pregunta', en: 'question' }, { es: 'la respuesta', en: 'answer' }, { es: 'la palabra', en: 'word' },
      { es: 'la idea', en: 'idea' }, { es: 'la razón', en: 'reason' }, { es: 'la manera / la forma', en: 'way, manner' }
    ]
  },
  {
    group: 'Describing things',
    items: [
      { es: 'bueno / malo', en: 'good / bad' }, { es: 'grande / pequeño', en: 'big / small' },
      { es: 'nuevo / viejo', en: 'new / old' }, { es: 'joven', en: 'young' },
      { es: 'fácil / difícil', en: 'easy / difficult' }, { es: 'caro / barato', en: 'expensive / cheap' },
      { es: 'largo / corto', en: 'long / short' }, { es: 'alto / bajo', en: 'tall / short' },
      { es: 'rápido / lento', en: 'fast / slow' }, { es: 'fuerte / débil', en: 'strong / weak' },
      { es: 'bonito / feo', en: 'pretty / ugly' }, { es: 'limpio / sucio', en: 'clean / dirty' },
      { es: 'caliente / frío', en: 'hot / cold' }, { es: 'lleno / vacío', en: 'full / empty' },
      { es: 'abierto / cerrado', en: 'open / closed' }, { es: 'contento / triste', en: 'happy / sad' },
      { es: 'cansado', en: 'tired' }, { es: 'enfermo', en: 'ill' }, { es: 'listo', en: 'ready · clever' },
      { es: 'ocupado', en: 'busy' }, { es: 'seguro', en: 'sure, safe' }, { es: 'mismo', en: 'same' },
      { es: 'otro', en: 'other, another', note: 'never un otro — just otro' },
      { es: 'todo', en: 'all, everything' }, { es: 'mucho / poco', en: 'a lot / a little' },
      { es: 'demasiado', en: 'too much' }, { es: 'bastante', en: 'quite, enough' }
    ]
  },
  {
    group: 'Colours, weather, body',
    items: [
      { es: 'rojo, azul, verde', en: 'red, blue, green' }, { es: 'amarillo, negro, blanco', en: 'yellow, black, white' },
      { es: 'gris, marrón, rosa', en: 'grey, brown, pink' },
      { es: 'hace calor / hace frío', en: 'it is hot / cold', note: 'literally "it makes heat"' },
      { es: 'hace sol / hace viento', en: 'it is sunny / windy' }, { es: 'llueve', en: 'it is raining' },
      { es: 'la lluvia', en: 'rain' }, { es: 'la nieve', en: 'snow' }, { es: 'la nube', en: 'cloud' },
      { es: 'la cabeza', en: 'head' }, { es: 'la mano', en: 'hand', note: 'feminine despite the -o' },
      { es: 'el pie', en: 'foot' }, { es: 'el ojo', en: 'eye' }, { es: 'la boca', en: 'mouth' },
      { es: 'el corazón', en: 'heart' }, { es: 'la espalda', en: 'back' }, { es: 'el estómago', en: 'stomach' },
      { es: 'me duele...', en: '... hurts me', note: 'Me duele la cabeza. — I have a headache.' },
      { es: 'el médico', en: 'doctor' }, { es: 'la farmacia', en: 'pharmacy' }
    ]
  },
  {
    group: 'The glue: connectors and question words',
    note: 'Small words, disproportionate returns. These are what turn phrases into speech.',
    items: [
      { es: 'y / o', en: 'and / or', note: 'y becomes e before i-: padres e hijos' },
      { es: 'pero', en: 'but' }, { es: 'sino', en: 'but rather', note: 'after a negative: no es rojo sino azul' },
      { es: 'porque', en: 'because' }, { es: 'por eso', en: 'that is why' },
      { es: 'aunque', en: 'although' }, { es: 'entonces', en: 'so, then' }, { es: 'así que', en: 'so' },
      { es: 'además', en: 'besides' }, { es: 'también / tampoco', en: 'also / neither' },
      { es: 'si', en: 'if', note: 'sí with an accent means yes' },
      { es: 'cuando', en: 'when' }, { es: 'mientras', en: 'while' }, { es: 'que', en: 'that, which' },
      { es: 'qué', en: 'what' }, { es: 'quién', en: 'who' }, { es: 'dónde', en: 'where' },
      { es: 'cuándo', en: 'when' }, { es: 'cómo', en: 'how' }, { es: 'por qué', en: 'why' },
      { es: 'cuánto', en: 'how much' }, { es: 'cuál', en: 'which' },
      { es: 'con / sin', en: 'with / without' }, { es: 'para / por', en: 'for, to / for, by, through' },
      { es: 'desde / hasta', en: 'from, since / until, as far as' },
      { es: 'entre', en: 'between, among' }, { es: 'sobre', en: 'on, about' },
      { es: 'antes / después', en: 'before / after' }, { es: 'durante', en: 'during' }
    ]
  }
];

/* ---------------------------------------------------------------------------
 * 3. Where Spanish and English genuinely disagree.
 * Not a grammar course — the specific points where English instincts produce
 * wrong Spanish, which is a much shorter and more useful list.
 * ------------------------------------------------------------------------ */

window.MT.contrasts = [
  {
    group: 'Things English does not have at all',
    items: [
      {
        title: 'Every noun has a gender',
        english: 'A table is just a table.',
        spanish: 'La mesa is feminine, el libro is masculine, and everything attached to them has to agree.',
        why: 'Gender is not about meaning — it is a grammatical class. Learn the article as part of the word: not "mesa" but "la mesa". The endings are a good guide (-o masculine, -a, -ción, -dad feminine) with famous exceptions: el día, el problema, la mano, el agua.',
        examples: [
          { es: 'el coche rojo', en: 'the red car' },
          { es: 'la casa roja', en: 'the red house' },
          { es: 'los coches rojos', en: 'the red cars' }
        ]
      },
      {
        title: 'Two verbs for "to be"',
        english: 'One verb covers everything: I am tired, I am English, I am here.',
        spanish: 'ser for what something IS, estar for how or where it is right now.',
        why: 'The rough test: if it would still be true next year, use ser. Some adjectives change meaning entirely — es listo is "he is clever", está listo is "he is ready".',
        examples: [
          { es: 'Soy inglés.', en: 'I am English. (permanent)' },
          { es: 'Estoy cansado.', en: 'I am tired. (right now)' },
          { es: 'El hotel está aquí.', en: 'The hotel is here. (location — always estar)' },
          { es: 'La comida es buena. / La comida está buena.', en: 'The food is good (in general) / tastes good (this plate).' }
        ]
      },
      {
        title: 'Two ways to say "you"',
        english: 'One "you" for the Queen and for your dog.',
        spanish: 'tú for friends, family, children. usted for strangers, elders, formal settings.',
        why: 'Getting this wrong is a social error, not a grammatical one. Start with usted with strangers and let them invite you to tú. Note that usted takes the same verb form as he/she — which is why the course teaches quiere for both.',
        examples: [
          { es: '¿Quieres comer?', en: 'Do you want to eat? (tú — a friend)' },
          { es: '¿Quiere comer?', en: 'Do you want to eat? (usted — a stranger)' },
          { es: 'ustedes / vosotros', en: 'you plural — Latin America uses ustedes for everyone; Spain keeps vosotros for friends.' }
        ]
      },
      {
        title: 'The subjunctive',
        english: 'Barely survives — "if I were you", "I insist that he be told".',
        spanish: 'Alive and compulsory after wishes, doubts, emotions and unrealised events.',
        why: 'It is not a tense but a mood: it marks something as wanted, doubted or hypothetical rather than factual. You can be understood without it for a long time, so do not let it block you — but you will hear it constantly after quiero que, espero que, ojalá, cuando (about the future), and no creo que.',
        examples: [
          { es: 'Quiero que venga.', en: 'I want him to come.', note: 'not "quiero que viene"' },
          { es: 'Espero que sea posible.', en: 'I hope it is possible.' },
          { es: 'Cuando llegue, hablamos.', en: 'When he arrives, we will talk.' }
        ]
      }
    ]
  },
  {
    group: 'Backwards from English',
    items: [
      {
        title: 'Adjectives come after the noun',
        english: 'A red car.',
        spanish: 'Un coche rojo — a car red.',
        why: 'The default is noun first, description after. A few common ones go in front (bueno, gran, otro, mucho), and moving an adjective in front can shift its meaning: un hombre grande is a big man, un gran hombre is a great man.',
        examples: [
          { es: 'una idea interesante', en: 'an interesting idea' },
          { es: 'el vino blanco', en: 'the white wine' },
          { es: 'otra cosa', en: 'another thing', note: 'otro goes in front, and takes no "un"' }
        ]
      },
      {
        title: 'gustar works the other way round',
        english: 'I like the book. (I am the subject)',
        spanish: 'Me gusta el libro. — The book pleases me. (the book is the subject)',
        why: 'This trips up every English speaker. You are not the one doing the liking; the thing is doing the pleasing. So the verb agrees with the THING, not with you: plural things take gustan.',
        examples: [
          { es: 'Me gusta el libro.', en: 'I like the book.' },
          { es: 'Me gustan los libros.', en: 'I like the books.', note: 'gustan, because "books" is plural' },
          { es: '¿Le gusta?', en: 'Do you like it?' },
          { es: 'Me duele la cabeza.', en: 'My head hurts me.', note: 'doler, faltar, quedar and interesar all work this way' }
        ]
      },
      {
        title: 'tener where English uses "to be"',
        english: 'I am hungry. I am 30. I am cold.',
        spanish: 'Tengo hambre. Tengo 30 años. Tengo frío. — I have hunger, I have 30 years, I have cold.',
        why: 'A whole family of states are possessions in Spanish. Saying "estoy caliente" for "I am hot" is a memorable mistake — it means something quite different.',
        examples: [
          { es: 'Tengo hambre / sed / sueño.', en: 'I am hungry / thirsty / sleepy.' },
          { es: 'Tengo treinta años.', en: 'I am thirty years old.' },
          { es: 'Tengo prisa.', en: 'I am in a hurry.' },
          { es: 'Tengo razón.', en: 'I am right.' }
        ]
      },
      {
        title: 'hace for weather and for "ago"',
        english: 'It is cold. Two years ago.',
        spanish: 'Hace frío. Hace dos años. — It makes cold. It makes two years.',
        why: 'The verb hacer (to make) carries both weather and elapsed time.',
        examples: [
          { es: 'Hace calor hoy.', en: 'It is hot today.' },
          { es: 'Hace dos años.', en: 'Two years ago.' },
          { es: 'Hace mucho tiempo que no le veo.', en: 'I have not seen him for a long time.' }
        ]
      }
    ]
  },
  {
    group: 'Things you can simply drop',
    items: [
      {
        title: 'The subject pronoun',
        english: 'I speak. You speak. He speaks. The pronoun is compulsory.',
        spanish: 'Hablo. Hablas. Habla. The ending already says who.',
        why: 'Using yo, tú, él every time is not wrong but sounds laboured — like saying "I myself personally speak". Keep them only for contrast or emphasis: Yo no, pero él sí.',
        examples: [
          { es: 'Hablo español.', en: 'I speak Spanish.' },
          { es: 'Yo hablo español, pero él no.', en: 'I speak Spanish, but he does not.', note: 'yo kept here for contrast' }
        ]
      },
      {
        title: 'The "do" in questions and negatives',
        english: 'Do you want to eat? I do not want to eat.',
        spanish: 'No auxiliary at all. ¿Quiere comer? No quiero comer.',
        why: 'English invented an extra verb to ask questions with; Spanish just raises its voice at the end. Word order need not change either.',
        examples: [
          { es: '¿Habla español?', en: 'Do you speak Spanish?' },
          { es: 'No entiendo.', en: 'I do not understand.' },
          { es: '¿Le gustó?', en: 'Did you like it?' }
        ]
      },
      {
        title: 'The apostrophe-s',
        english: "John's book. The company's problem.",
        spanish: 'El libro de Juan. El problema de la empresa.',
        why: 'Spanish has no possessive apostrophe. Everything is turned round with de.',
        examples: [
          { es: 'el coche de mi hermano', en: "my brother's car" },
          { es: 'la casa de los padres de Ana', en: "Ana's parents' house" }
        ]
      },
      {
        title: 'The continuous tense, most of the time',
        english: 'I am going tomorrow. I am eating right now.',
        spanish: 'Voy mañana. Estoy comiendo ahora.',
        why: 'Spanish has estar + -ando/-iendo, but reserves it for genuinely-in-progress-this-second. For scheduled future or general habit, the plain present does the job. Never use it for the future.',
        examples: [
          { es: 'Mañana voy a Madrid.', en: 'I am going to Madrid tomorrow.', note: 'not "estoy yendo"' },
          { es: 'Estoy trabajando.', en: 'I am working (this minute).' }
        ]
      }
    ]
  },
  {
    group: 'Things you must add',
    items: [
      {
        title: 'The double negative is compulsory',
        english: 'I did not say anything. "I did not say nothing" is a mistake.',
        spanish: 'No dije nada. Two negatives are required, not a mistake.',
        why: 'If a negative word follows the verb, no must still sit in front of it. Alternatively put the negative word first and drop the no: Nada dije.',
        examples: [
          { es: 'No dije nada.', en: 'I said nothing.' },
          { es: 'No hay nadie.', en: 'There is nobody.' },
          { es: 'No voy nunca.', en: 'I never go.' },
          { es: 'No tengo ninguno.', en: 'I do not have any.' }
        ]
      },
      {
        title: 'The personal a',
        english: 'I see the man. Nothing extra.',
        spanish: 'Veo al hombre. An a appears before a person who is the object.',
        why: 'When the direct object is a specific person (or a pet), Spanish marks it with a. No a for things. a + el contracts to al.',
        examples: [
          { es: 'Veo la casa.', en: 'I see the house.', note: 'a thing — no a' },
          { es: 'Veo a María.', en: 'I see María.', note: 'a person — a required' },
          { es: 'Busco al gerente.', en: 'I am looking for the manager.', note: 'a + el = al' }
        ]
      },
      {
        title: 'The article, in places English omits it',
        english: 'Life is hard. I like coffee. Doctor Ruiz is here.',
        spanish: 'La vida es dura. Me gusta el café. El doctor Ruiz está aquí.',
        why: 'Spanish uses the definite article for general concepts, for likes and dislikes, with titles when talking about someone, and with days of the week (el lunes = on Monday).',
        examples: [
          { es: 'Me gusta el vino.', en: 'I like wine.' },
          { es: 'Los niños necesitan dormir.', en: 'Children need sleep.' },
          { es: 'El lunes voy a Madrid.', en: 'On Monday I am going to Madrid.' }
        ]
      },
      {
        title: 'Upside-down punctuation',
        english: 'Punctuation only at the end.',
        spanish: '¿Es posible? ¡Qué bien! The mark opens as well as closes.',
        why: 'It tells the reader how to pitch the sentence before they start it — genuinely useful in a language where a question can look identical to a statement. In dialogue, Spanish uses an em dash rather than quotation marks.',
        examples: [
          { es: '¿Es posible?', en: 'Is it possible?' },
          { es: '¡Qué bien!', en: 'How great!' },
          { es: 'No sé, ¿y usted?', en: 'I do not know, and you?', note: 'the mark opens where the question actually begins' }
        ]
      }
    ]
  },
  {
    group: 'Pairs English collapses into one word',
    items: [
      {
        title: 'saber vs conocer — "to know"',
        english: 'One verb for facts and for people.',
        spanish: 'saber for information and skills; conocer for being acquainted with people and places.',
        why: 'If you can follow it with "that", "how to", or a fact, it is saber. If it is a person, city or book you are familiar with, it is conocer.',
        examples: [
          { es: 'Sé dónde está.', en: 'I know where it is.' },
          { es: 'No sé nadar.', en: 'I do not know how to swim.' },
          { es: 'Conozco a su hermana.', en: 'I know his sister.' },
          { es: 'Conozco Madrid.', en: 'I know Madrid.' }
        ]
      },
      {
        title: 'por vs para — "for"',
        english: 'One word covers cause, purpose, duration and exchange.',
        spanish: 'para looks forward — destination, purpose, deadline, recipient. por looks back or through — cause, route, exchange, duration.',
        why: 'The shortcut that gets you most of the way: para = in order to, meant for, by (a deadline). por = because of, through, in exchange for, per.',
        examples: [
          { es: 'Es para usted.', en: 'It is for you. (recipient)' },
          { es: 'Gracias por todo.', en: 'Thank you for everything. (cause)' },
          { es: 'Salgo para Madrid.', en: 'I am leaving for Madrid. (destination)' },
          { es: 'Pasé por Madrid.', en: 'I went through Madrid. (route)' },
          { es: 'Lo compré por diez euros.', en: 'I bought it for ten euros. (exchange)' }
        ]
      },
      {
        title: 'pedir vs preguntar — "to ask"',
        english: 'Ask a question, ask for a coffee. Same verb.',
        spanish: 'preguntar is to ask a question. pedir is to ask for a thing, to order or request.',
        examples: [
          { es: 'Le pregunté dónde estaba.', en: 'I asked him where it was.' },
          { es: 'Pedí un café.', en: 'I asked for / ordered a coffee.' }
        ]
      },
      {
        title: 'ser, estar, haber — "there is"',
        english: 'There is a problem. There are problems.',
        spanish: 'Hay un problema. Hay problemas. One form, never pluralised.',
        why: 'hay never changes for number — no "hayn". Use hay to say something exists; use está to say where a known thing is.',
        examples: [
          { es: 'Hay un hotel aquí.', en: 'There is a hotel here. (it exists)' },
          { es: 'El hotel está aquí.', en: 'The hotel is here. (where the known one is)' },
          { es: 'Había mucha gente.', en: 'There were a lot of people.', note: 'past of hay, also invariable' }
        ]
      }
    ]
  },
  {
    group: 'Sound and spelling',
    items: [
      {
        title: 'Spanish is spelled the way it sounds',
        english: 'though, through, tough, cough.',
        spanish: 'Every letter has one job. Read a word correctly the first time, every time.',
        why: 'This is the great gift of Spanish. The rules that matter: h is always silent; j and g (before e, i) are the throaty sound; ll is a y; ñ is "ny"; rr is rolled; v sounds like b; qu is a hard k; z is s in Latin America and th in most of Spain.',
        examples: [
          { es: 'hola', en: 'the h is silent — "ola"' },
          { es: 'gente, jefe', en: 'both start with the throaty sound' },
          { es: 'llamar, año', en: '"yamar", "anyo"' }
        ]
      },
      {
        title: 'Stress is predictable, and accents mark the exceptions',
        english: 'Stress must be memorised word by word.',
        spanish: 'Two rules cover nearly everything, and a written accent flags anything that breaks them.',
        why: 'Words ending in a vowel, n or s are stressed on the second-to-last syllable (hablo, hablan, casas). Everything else is stressed on the last syllable (hablar, ciudad, feliz). An accent mark overrides both: habló, inglés, difícil. Accents also separate identical words: si/sí, el/él, tu/tú, que/qué.',
        examples: [
          { es: 'hablo / habló', en: 'I speak / he spoke — the accent moves the stress and changes the tense' },
          { es: 'papa / papá', en: 'potato / dad' }
        ]
      },
      {
        title: 'Lower case where English capitalises',
        english: 'Monday, January, Spanish, Spaniard.',
        spanish: 'lunes, enero, español. Days, months, languages and nationalities are all lower case.',
        examples: [
          { es: 'Hablo español.', en: 'I speak Spanish.' },
          { es: 'El lunes de enero.', en: 'The Monday in January.' }
        ]
      },
      {
        title: 'Numbers use the opposite punctuation',
        english: '1,000.50',
        spanish: '1.000,50 — the dot groups thousands and the comma marks decimals.',
        why: 'Worth knowing before you read a price or a bill. Times are commonly given on the 24-hour clock too: las quince horas.',
        examples: [
          { es: 'Cuesta 1.250,75 euros.', en: 'It costs 1,250.75 euros.' }
        ]
      }
    ]
  }
];
