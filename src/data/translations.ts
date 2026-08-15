/**
 * Traduções de todo o conteúdo longo do site (PT / EN / FR).
 * Os overrides de dados seguem a MESMA ORDEM dos arrays em `src/data/content.ts`.
 */
import type { Lang } from "@/lib/i18n";

/* ------------------------------------------------------------------ */
/* Copy das páginas                                                     */
/* ------------------------------------------------------------------ */

export const ptCopy = {
  jornada: {
    eyebrow: "Capítulo I",
    title: "A Jornada",
    lead: "Uma pane no deserto, um menino vindo de um asteroide minúsculo e uma amizade que atravessa planetas — e gerações.",
    heading: "O encontro no deserto",
    p1: "Um aviador cai no deserto do Saara e encontra um menino de cabelos dourados vindo de um asteroide minúsculo. Entre consertos de motor e goles de água, nasce uma amizade que atravessa planetas.",
    p2: "O príncipe visita mundos habitados por um rei sem súditos, um vaidoso, um bêbado, um homem de negócios, um acendedor de lampiões e um geógrafo. Cada encontro é um espelho gentil das obsessões adultas: poder, vaidade, posse e pressa.",
    p3: "Na Terra, a raposa lhe ensina o rito de cativar, e a rosa deixada para trás revela seu verdadeiro valor. Amizade, amor e perda se costuram numa fábula curta e infinita.",
    capStudy: "O gabinete do escritor",
    capChart: "Carta do asteroide B-612",
    nextLabel: "Próxima escala",
    nextLink: "Os personagens e seus símbolos",
  },
  personagens: {
    eyebrow: "Capítulo II",
    title: "Personagens",
    lead: "Cada figura da fábula é também um símbolo. Oito retratos do que a obra diz sem dizer.",
    teachHeading: "O que eles ensinam",
    nextLabel: "Próxima escala",
    nextLink: "Os planetas visitados",
  },
  planetas: {
    eyebrow: "Capítulo III",
    title: "Os Planetas",
    lead: "Cada asteroide guarda um adulto sozinho com sua obsessão. Sete escalas até chegar à Terra.",
    breakEyebrow: "Entre uma escala e outra",
    breakQuote:
      "Os grandes são decididamente muito estranhos, dizia consigo mesmo o pequeno príncipe, durante a viagem.",
    breakChapter: "Capítulo XVI",
    nextLabel: "Próxima escala",
    nextLink: "Quantos pores do sol você já viu?",
  },
  galeria: {
    eyebrow: "Capítulo IV",
    title: "Galeria de Arte",
    lead: "Aquarelas inspiradas nos símbolos da obra. Toque em uma imagem para ler por que ela importa.",
    read: "Ler a história",
    open: "Abrir",
    nextLabel: "Próxima escala",
    nextLink: "O autor: Saint-Exupéry",
  },
  livro: {
    eyebrow: "A Obra",
    title: "O Livro",
    lead: "Sinopse, dados de publicação e a antologia das frases que atravessaram o século.",
    synopsis: "Sinopse",
    s1: "Um aviador cai com seu avião em pane no deserto do Saara, a mil milhas de qualquer região habitada. Na primeira manhã, uma voz miúda o acorda pedindo: “Por favor, desenha-me um carneiro.” Diante dele está um menino de cachos dourados, vindo de um asteroide pouco maior que uma casa.",
    s2: "Enquanto o piloto conserta o motor com a água contada, o príncipe conta sua viagem: deixou o B-612 e uma rosa vaidosa de quem cuidava, e visitou seis planetas habitados por adultos presos em suas obsessões — um rei sem súditos, um vaidoso, um bêbado, um homem de negócios, um acendedor de lampiões e um geógrafo que nunca viu o que registra.",
    s3: "Na Terra, encontra um jardim com cinco mil rosas idênticas à sua e descobre, com uma raposa, que o laço é o que torna alguém único: cativar é aceitar a responsabilidade por aquilo que se ama. Reencontrado o sentido de sua flor, o príncipe procura o caminho de volta — e a serpente lhe oferece o único bilhete de regresso possível.",
    anthologyEyebrow: "Antologia",
    anthologyHeading: "As frases, reunidas em um só lugar",
    editionsHeading: "Dados de publicação",
    numbersHeading: "A obra em números",
    continueLabel: "Continue",
    continueLink: "Conheça Antoine de Saint-Exupéry",
  },
  autor: {
    eyebrow: "O Autor",
    title: "Antoine de Saint-Exupéry",
    lead: "Aviador antes de escritor. Transformou o silêncio das altitudes em literatura.",
    heading: "Um homem entre céus",
    p1: "Antoine de Saint-Exupéry (1900–1944) foi aviador e escritor francês. Pilotou rotas postais sobre a África e a América do Sul, sobreviveu a quedas no deserto e transformou a solidão do voo em literatura.",
    p2: "Escreveu O Pequeno Príncipe no exílio, em 1943, ilustrando ele mesmo cada aquarela. Um ano depois desapareceu em missão sobre o Mediterrâneo — deixando ao mundo um livro que continua voando.",
    quote: "O essencial é invisível aos olhos.",
    numbersHeading: "A obra em números",
    numbersNote:
      "Para Martin Heidegger, é a maior obra existencialista do século XX. Saint-Exupéry desapareceu como seu personagem: o corpo nunca foi encontrado — só, em 2004, os destroços do avião.",
    nextLink: "Ver a galeria de aquarelas",
  },
  poentes: {
    eyebrow: "Calculadora de entardeceres",
    title1: "Quantos pores do sol",
    title2: "você já viu?",
    lead: "O príncipe contava os seus. Conte os seus também: cada dia vivido foi um convite ao horizonte — aceito ou não.",
    nextLink: "Continuar para a galeria",
  },
  frases: {
    eyebrow: "Antologia",
    title: "Frases",
    lead: "Todas as citações reunidas em um só lugar. Busque por palavra, filtre por personagem ou por tema.",
    searchLabel: "Buscar nas frases",
    searchPlaceholder: "Buscar uma palavra…",
    byCharacter: "Por personagem",
    byTheme: "Por tema",
    all: "Todos",
    results: "frase(s) encontrada(s)",
    empty: "Nenhuma frase encontrada. Tente outra palavra ou limpe os filtros.",
    clear: "Limpar filtros",
  },
  themes: {
    essencial: "O essencial",
    amor: "Amor e rosa",
    responsabilidade: "Responsabilidade",
    infancia: "Infância",
    solidao: "Solidão",
    esperanca: "Esperança",
  },
  footer: {
    tagline:
      "Inspirado em O Pequeno Príncipe, de Antoine de Saint-Exupéry. Projeto editorial sem fins comerciais.",
    credit: "Desenvolvido por Antony Thiago",
  },
};

export type Copy = typeof ptCopy;

const enCopy: Copy = {
  jornada: {
    eyebrow: "Chapter I",
    title: "The Journey",
    lead: "An engine failure in the desert, a boy from a tiny asteroid, and a friendship that crosses planets — and generations.",
    heading: "The meeting in the desert",
    p1: "A pilot crashes in the Sahara and meets a golden-haired boy who came from a tiny asteroid. Between engine repairs and rationed sips of water, a friendship is born that crosses planets.",
    p2: "The prince visits worlds inhabited by a king without subjects, a vain man, a drunkard, a businessman, a lamplighter and a geographer. Each encounter is a gentle mirror of adult obsessions: power, vanity, ownership and haste.",
    p3: "On Earth, the fox teaches him the rite of taming, and the rose left behind reveals her true worth. Friendship, love and loss are stitched into a short, endless fable.",
    capStudy: "The writer's study",
    capChart: "Chart of asteroid B-612",
    nextLabel: "Next stop",
    nextLink: "The characters and their symbols",
  },
  personagens: {
    eyebrow: "Chapter II",
    title: "Characters",
    lead: "Every figure in the fable is also a symbol. Eight portraits of what the book says without saying.",
    teachHeading: "What they teach us",
    nextLabel: "Next stop",
    nextLink: "The planets he visited",
  },
  planetas: {
    eyebrow: "Chapter III",
    title: "The Planets",
    lead: "Each asteroid holds one grown-up alone with an obsession. Seven stops before reaching Earth.",
    breakEyebrow: "Between one stop and the next",
    breakQuote:
      "Grown-ups are certainly very odd, the little prince said to himself as he travelled.",
    breakChapter: "Chapter XVI",
    nextLabel: "Next stop",
    nextLink: "How many sunsets have you seen?",
  },
  galeria: {
    eyebrow: "Chapter IV",
    title: "Art Gallery",
    lead: "Watercolours inspired by the book's symbols. Tap an image to read why it matters.",
    read: "Read the story",
    open: "Open",
    nextLabel: "Next stop",
    nextLink: "The author: Saint-Exupéry",
  },
  livro: {
    eyebrow: "The Work",
    title: "The Book",
    lead: "Synopsis, publication data and the anthology of lines that crossed a century.",
    synopsis: "Synopsis",
    s1: "A pilot crashes in the Sahara desert, a thousand miles from any inhabited place. On the first morning a tiny voice wakes him up: “Please, draw me a sheep.” Before him stands a boy with golden curls, come from an asteroid barely bigger than a house.",
    s2: "While the pilot repairs the engine with counted water, the prince tells his story: he left B-612 and a vain rose he cared for, and visited six planets inhabited by adults trapped in their obsessions — a king without subjects, a vain man, a drunkard, a businessman, a lamplighter and a geographer who never sees what he records.",
    s3: "On Earth he finds a garden of five thousand roses identical to his own and learns, from a fox, that the bond is what makes someone unique: to tame is to accept responsibility for what you love. Having found the meaning of his flower again, the prince looks for a way home — and the snake offers him the only possible return ticket.",
    anthologyEyebrow: "Anthology",
    anthologyHeading: "The lines, gathered in one place",
    editionsHeading: "Publication data",
    numbersHeading: "The book in numbers",
    continueLabel: "Continue",
    continueLink: "Meet Antoine de Saint-Exupéry",
  },
  autor: {
    eyebrow: "The Author",
    title: "Antoine de Saint-Exupéry",
    lead: "A pilot before a writer. He turned the silence of high altitude into literature.",
    heading: "A man between skies",
    p1: "Antoine de Saint-Exupéry (1900–1944) was a French aviator and writer. He flew mail routes over Africa and South America, survived desert crashes and turned the solitude of flight into literature.",
    p2: "He wrote The Little Prince in exile, in 1943, painting every watercolour himself. A year later he vanished on a mission over the Mediterranean — leaving the world a book that keeps flying.",
    quote: "What is essential is invisible to the eye.",
    numbersHeading: "The book in numbers",
    numbersNote:
      "For Martin Heidegger it is the greatest existentialist work of the 20th century. Saint-Exupéry disappeared like his character: his body was never found — only, in 2004, the wreckage of his plane.",
    nextLink: "See the watercolour gallery",
  },
  poentes: {
    eyebrow: "Sunset calculator",
    title1: "How many sunsets",
    title2: "have you seen?",
    lead: "The prince counted his. Count yours too: every day you lived was an invitation to the horizon — accepted or not.",
    nextLink: "Continue to the gallery",
  },
  frases: {
    eyebrow: "Anthology",
    title: "Quotes",
    lead: "Every quote in one place. Search by word, filter by character or by theme.",
    searchLabel: "Search the quotes",
    searchPlaceholder: "Search a word…",
    byCharacter: "By character",
    byTheme: "By theme",
    all: "All",
    results: "quote(s) found",
    empty: "No quotes found. Try another word or clear the filters.",
    clear: "Clear filters",
  },
  themes: {
    essencial: "The essential",
    amor: "Love and the rose",
    responsabilidade: "Responsibility",
    infancia: "Childhood",
    solidao: "Solitude",
    esperanca: "Hope",
  },
  footer: {
    tagline:
      "Inspired by The Little Prince, by Antoine de Saint-Exupéry. A non-commercial editorial project.",
    credit: "Developed by Antony Thiago",
  },
};

const frCopy: Copy = {
  jornada: {
    eyebrow: "Chapitre I",
    title: "Le Voyage",
    lead: "Une panne dans le désert, un garçon venu d'un astéroïde minuscule et une amitié qui traverse les planètes — et les générations.",
    heading: "La rencontre dans le désert",
    p1: "Un aviateur tombe en panne dans le Sahara et rencontre un garçon aux cheveux d'or venu d'un astéroïde minuscule. Entre les réparations du moteur et les gorgées d'eau comptées, naît une amitié qui traverse les planètes.",
    p2: "Le prince visite des mondes habités par un roi sans sujets, un vaniteux, un buveur, un businessman, un allumeur de réverbères et un géographe. Chaque rencontre est un miroir doux des obsessions des grandes personnes : pouvoir, vanité, possession et hâte.",
    p3: "Sur la Terre, le renard lui enseigne le rite d'apprivoiser, et la rose laissée derrière révèle sa vraie valeur. Amitié, amour et perte se cousent dans une fable brève et infinie.",
    capStudy: "Le cabinet de l'écrivain",
    capChart: "Carte de l'astéroïde B-612",
    nextLabel: "Escale suivante",
    nextLink: "Les personnages et leurs symboles",
  },
  personagens: {
    eyebrow: "Chapitre II",
    title: "Personnages",
    lead: "Chaque figure de la fable est aussi un symbole. Huit portraits de ce que l'œuvre dit sans le dire.",
    teachHeading: "Ce qu'ils nous apprennent",
    nextLabel: "Escale suivante",
    nextLink: "Les planètes visitées",
  },
  planetas: {
    eyebrow: "Chapitre III",
    title: "Les Planètes",
    lead: "Chaque astéroïde abrite une grande personne seule avec son obsession. Sept escales avant la Terre.",
    breakEyebrow: "Entre deux escales",
    breakQuote:
      "Les grandes personnes sont décidément bien étranges, se disait le petit prince, pendant son voyage.",
    breakChapter: "Chapitre XVI",
    nextLabel: "Escale suivante",
    nextLink: "Combien de couchers de soleil avez-vous vus ?",
  },
  galeria: {
    eyebrow: "Chapitre IV",
    title: "Galerie d'art",
    lead: "Aquarelles inspirées des symboles de l'œuvre. Touchez une image pour lire pourquoi elle compte.",
    read: "Lire l'histoire",
    open: "Ouvrir",
    nextLabel: "Escale suivante",
    nextLink: "L'auteur : Saint-Exupéry",
  },
  livro: {
    eyebrow: "L'Œuvre",
    title: "Le Livre",
    lead: "Résumé, données de publication et l'anthologie des phrases qui ont traversé le siècle.",
    synopsis: "Résumé",
    s1: "Un aviateur tombe en panne dans le désert du Sahara, à mille milles de toute région habitée. Au premier matin, une petite voix le réveille : « S'il vous plaît, dessine-moi un mouton. » Devant lui se tient un garçon aux boucles dorées, venu d'un astéroïde à peine plus grand qu'une maison.",
    s2: "Pendant que le pilote répare son moteur avec de l'eau comptée, le prince raconte son voyage : il a quitté B-612 et une rose vaniteuse dont il prenait soin, et a visité six planètes habitées par des adultes prisonniers de leurs obsessions — un roi sans sujets, un vaniteux, un buveur, un businessman, un allumeur de réverbères et un géographe qui ne voit jamais ce qu'il consigne.",
    s3: "Sur la Terre, il découvre un jardin de cinq mille roses identiques à la sienne et apprend, grâce à un renard, que c'est le lien qui rend quelqu'un unique : apprivoiser, c'est accepter d'être responsable de ce que l'on aime. Ayant retrouvé le sens de sa fleur, le prince cherche le chemin du retour — et le serpent lui offre le seul billet possible.",
    anthologyEyebrow: "Anthologie",
    anthologyHeading: "Les phrases, réunies en un seul endroit",
    editionsHeading: "Données de publication",
    numbersHeading: "L'œuvre en chiffres",
    continueLabel: "Continuer",
    continueLink: "Découvrir Antoine de Saint-Exupéry",
  },
  autor: {
    eyebrow: "L'Auteur",
    title: "Antoine de Saint-Exupéry",
    lead: "Aviateur avant d'être écrivain. Il a transformé le silence des altitudes en littérature.",
    heading: "Un homme entre les ciels",
    p1: "Antoine de Saint-Exupéry (1900–1944) fut aviateur et écrivain français. Il a piloté des lignes postales au-dessus de l'Afrique et de l'Amérique du Sud, survécu à des chutes dans le désert et transformé la solitude du vol en littérature.",
    p2: "Il écrivit Le Petit Prince en exil, en 1943, peignant lui-même chaque aquarelle. Un an plus tard, il disparut en mission au-dessus de la Méditerranée — laissant au monde un livre qui continue de voler.",
    quote: "L'essentiel est invisible pour les yeux.",
    numbersHeading: "L'œuvre en chiffres",
    numbersNote:
      "Pour Martin Heidegger, c'est la plus grande œuvre existentialiste du XXe siècle. Saint-Exupéry a disparu comme son personnage : son corps n'a jamais été retrouvé — seulement, en 2004, l'épave de son avion.",
    nextLink: "Voir la galerie d'aquarelles",
  },
  poentes: {
    eyebrow: "Calculateur de couchers de soleil",
    title1: "Combien de couchers de soleil",
    title2: "avez-vous vus ?",
    lead: "Le prince comptait les siens. Comptez les vôtres : chaque jour vécu fut une invitation à l'horizon — acceptée ou non.",
    nextLink: "Continuer vers la galerie",
  },
  frases: {
    eyebrow: "Anthologie",
    title: "Citations",
    lead: "Toutes les citations réunies. Cherchez par mot, filtrez par personnage ou par thème.",
    searchLabel: "Rechercher dans les citations",
    searchPlaceholder: "Chercher un mot…",
    byCharacter: "Par personnage",
    byTheme: "Par thème",
    all: "Tous",
    results: "citation(s) trouvée(s)",
    empty: "Aucune citation trouvée. Essayez un autre mot ou effacez les filtres.",
    clear: "Effacer les filtres",
  },
  themes: {
    essencial: "L'essentiel",
    amor: "L'amour et la rose",
    responsabilidade: "Responsabilité",
    infancia: "Enfance",
    solidao: "Solitude",
    esperanca: "Espoir",
  },
  footer: {
    tagline:
      "Inspiré du Petit Prince, d'Antoine de Saint-Exupéry. Projet éditorial sans but commercial.",
    credit: "Développé par Antony Thiago",
  },
};

export const COPY: Record<Lang, Copy> = { pt: ptCopy, en: enCopy, fr: frCopy };

/* ------------------------------------------------------------------ */
/* Overrides de dados (mesma ordem dos arrays em content.ts)            */
/* ------------------------------------------------------------------ */

type GalleryT = { title: string; note: string; story: string; alt: string };
type QuoteT = { text: string; who: string };
type AnthologyT = { text: string; who: string; chapter: string };
type PairT = { label: string; value: string };
type PlanetT = { name: string; line: string; lesson: string };
type CharacterT = { name: string; role: string; text: string; symbol: string; alt: string };
type FactT = { label: string };
type TimelineT = { title: string; text: string };

export type DataOverride = {
  gallery: GalleryT[];
  quotes: QuoteT[];
  anthology: AnthologyT[];
  editions: PairT[];
  planets: PlanetT[];
  characters: CharacterT[];
  bookFacts: FactT[];
  timeline: TimelineT[];
};

const enData: DataOverride = {
  gallery: [
    {
      title: "The Rose",
      note: "Unique in all the world",
      alt: "Watercolour of a red rose under a glass dome",
      story:
        "The rose is vain, demanding and fragile — and that is exactly why she matters. She teaches that someone's worth does not come from rarity, but from the time spent on her. When the prince finds a garden with five thousand identical roses, he understands that his own remains unique because she was watered, protected and listened to.",
    },
    {
      title: "The Fox",
      note: "The rite of taming",
      alt: "Watercolour of a fox sitting on the dunes",
      story:
        "The fox asks to be tamed: come a little closer every day, always at the same hour, creating bonds. It is the scene every reader remembers — to tame is to accept the possibility of longing in exchange for meaning. From her comes the line that sums up the book: one sees clearly only with the heart.",
    },
    {
      title: "The Plane",
      note: "Engine failure in the Sahara",
      alt: "Watercolour of a small biplane landed on desert dunes",
      story:
        "The breakdown in the desert is not just the engine of the plot: it is autobiography. Saint-Exupéry crashed in the Sahara in 1935 and survived for days almost without water. The broken plane marks the moment a practical adult is forced to stop, wait and finally listen to a child.",
    },
    {
      title: "The Asteroid",
      note: "B-612",
      alt: "Minimal astronomical chart with a pale planet and dotted orbits",
      story:
        "A planet barely bigger than a house, with three volcanoes and a flower. The Turkish astronomer who discovered it was not taken seriously while he wore traditional clothes — a silent critique of how grown-ups confuse appearance with truth.",
    },
  ],
  quotes: [
    {
      text: "One sees clearly only with the heart. What is essential is invisible to the eye.",
      who: "The Fox",
    },
    { text: "You become responsible, forever, for what you have tamed.", who: "The Fox" },
    {
      text: "It is the time you devoted to your rose that makes her so important.",
      who: "The Fox",
    },
  ],
  anthology: [
    {
      text: "One sees clearly only with the heart. What is essential is invisible to the eye.",
      who: "The Fox",
      chapter: "Ch. XXI",
    },
    {
      text: "You become responsible, forever, for what you have tamed.",
      who: "The Fox",
      chapter: "Ch. XXI",
    },
    {
      text: "It is the time you wasted on your rose that makes her so important.",
      who: "The Fox",
      chapter: "Ch. XXI",
    },
    {
      text: "Grown-ups never understand anything by themselves.",
      who: "The Pilot",
      chapter: "Ch. I",
    },
    {
      text: "You know… when one is so terribly sad, one loves sunsets.",
      who: "The Little Prince",
      chapter: "Ch. VI",
    },
    {
      text: "I must endure two or three caterpillars if I wish to become acquainted with the butterflies.",
      who: "The Rose",
      chapter: "Ch. IX",
    },
    {
      text: "What makes the desert beautiful is that somewhere it hides a well.",
      who: "The Little Prince",
      chapter: "Ch. XXIV",
    },
    {
      text: "The stars are beautiful because of a flower one cannot see.",
      who: "The Little Prince",
      chapter: "Ch. XXIV",
    },
  ],
  editions: [
    { label: "Original title", value: "Le Petit Prince" },
    { label: "First edition", value: "Reynal & Hitchcock, New York, 6 April 1943" },
    { label: "French edition", value: "Gallimard, 1945, after the liberation of France" },
    { label: "Illustrations", value: "Watercolours by the author himself" },
    { label: "Genre", value: "Allegorical novella / philosophical fable" },
    { label: "Length", value: "27 short chapters" },
  ],
  planets: [
    {
      name: "The King",
      line: "A monarch without subjects who only orders what was going to happen anyway.",
      lesson: "Authority without listening is theatre.",
    },
    {
      name: "The Vain Man",
      line: "He hears only praise; any other sentence never reaches him.",
      lesson: "Vanity is elegant deafness.",
    },
    {
      name: "The Drunkard",
      line: "He drinks to forget that he is ashamed of drinking.",
      lesson: "Escape feeds what one escapes from.",
    },
    {
      name: "The Businessman",
      line: "He counts the stars to own them and keep them in a bank.",
      lesson: "Owning is not caring.",
    },
    {
      name: "The Lamplighter",
      line: "He lights and puts out his lamp every minute, faithful to his orders.",
      lesson: "The only one who tends to something beyond himself.",
    },
    {
      name: "The Geographer",
      line: "He records eternal mountains but despises ephemeral flowers.",
      lesson: "The ephemeral is precisely what matters.",
    },
    {
      name: "The Earth",
      line: "A thousand and one kings, seven thousand geographers and a fox who teaches how to tame.",
      lesson: "Here he learns to love his rose.",
    },
  ],
  characters: [
    {
      name: "The Little Prince",
      role: "The traveller",
      text: "A boy from a tiny asteroid, on his first crossing through worlds inhabited by grown-ups. He is astonished by the incoherence of each one.",
      symbol: "The child still alive inside every adult.",
      alt: "Watercolour of a blond boy with a golden scarf looking at the sky",
    },
    {
      name: "The Pilot",
      role: "The narrator",
      text: "He dreamed of being an artist, but grown-ups discouraged him and he became an aviator. He crashes in the Sahara and there recovers his own child's gaze.",
      symbol: "It is never too late to return to what you abandoned.",
      alt: "Watercolour of an aviator kneeling in the sand with a sketchbook",
    },
    {
      name: "The Fox",
      role: "The teacher",
      text: "She appears suddenly and asks to be tamed: come a little closer each day, always at the same hour. From her comes the secret of the whole book.",
      symbol: "To tame is to take responsibility for a bond.",
      alt: "Watercolour of a fox sitting on the dunes",
    },
    {
      name: "The Rose",
      role: "The love",
      text: "Vain, dramatic and proud — and precisely for that, irreplaceable. Her contradiction pushes the prince to travel; missing her brings him back.",
      symbol: "Love has thorns and demands daily care.",
      alt: "Watercolour of a red rose under a glass dome",
    },
    {
      name: "The Sheep and the Box",
      role: "Imagination",
      text: "Unsatisfied with the drawings, the prince accepts a box with holes: the sheep is inside, invisible. But will it eat the rose?",
      symbol: "Imagination surpasses knowledge — and love brings fear along with it.",
      alt: "Drawing of a wooden box with three holes",
    },
    {
      name: "The Snake",
      role: "The riddle",
      text: "The first being he meets on Earth. He speaks in riddles, yet is the most honest of all: he promises to send him back to his planet whenever he wishes.",
      symbol: "Death as the only way back home.",
      alt: "Watercolour of a golden snake coiled in the sand",
    },
    {
      name: "The Hat and the Boa",
      role: "The first drawing",
      text: "Grown-ups saw a hat; it was a boa digesting an elephant. None of them asked to see inside.",
      symbol: "Not everything you see is what it is. Look beyond appearance.",
      alt: "Line drawing of a shape that looks like a hat",
    },
    {
      name: "The Turkish Astronomer",
      role: "The discoverer",
      text: "He discovered asteroid B-612 in 1909, but no one believed him because of his clothes. He repeated the presentation in a suit years later — and was applauded.",
      symbol: "Grown-ups judge by appearance, and call it seriousness.",
      alt: "Watercolour of an astronomer in a fez observing the sky with a telescope",
    },
  ],
  bookFacts: [
    { label: "First edition, published in New York, in exile" },
    { label: "Languages and dialects it has been translated into" },
    { label: "Best-selling book in the world, after the Bible and the Quran" },
    { label: "Year the wreckage of his plane was found" },
  ],
  timeline: [
    {
      title: "Born in Lyon",
      text: "Antoine Marie Jean-Baptiste Roger de Saint-Exupéry is born on 29 June, in France.",
    },
    {
      title: "The Aéropostale",
      text: "He joins the airmail company and starts flying routes over Africa and South America.",
    },
    {
      title: "The Sahara crash",
      text: "He crashes in the desert with the mechanic Prévot and survives for days almost without water — the scene that would open the book.",
    },
    {
      title: "First edition, in New York",
      text: "Reynal & Hitchcock publishes Le Petit Prince on 6 April, in English and French, with the author's own watercolours.",
    },
    {
      title: "The disappearance",
      text: "On 31 July he takes off from Corsica on a reconnaissance mission and is never seen again.",
    },
    {
      title: "French edition, by Gallimard",
      text: "Only after the liberation of France does the book reach the author's own country, published by Gallimard.",
    },
    {
      title: "The wreckage found",
      text: "Parts of Saint-Exupéry's plane are identified at the bottom of the Mediterranean, near Marseille.",
    },
    {
      title: "220+ languages",
      text: "Translated into more than 220 languages and dialects, it is the third best-selling book in the world.",
    },
  ],
};

const frData: DataOverride = {
  gallery: [
    {
      title: "La Rose",
      note: "Unique au monde",
      alt: "Aquarelle d'une rose rouge sous un globe de verre",
      story:
        "La rose est vaniteuse, exigeante et fragile — et c'est précisément pour cela qu'elle compte. Elle enseigne que la valeur de quelqu'un ne vient pas de sa rareté, mais du temps qu'on lui a consacré. Quand le prince découvre un jardin de cinq mille roses identiques, il comprend que la sienne reste unique parce qu'elle a été arrosée, protégée et écoutée.",
    },
    {
      title: "Le Renard",
      note: "Le rite d'apprivoiser",
      alt: "Aquarelle d'un renard assis sur les dunes",
      story:
        "Le renard demande à être apprivoisé : s'approcher un peu chaque jour, toujours à la même heure, créer des liens. C'est la scène que tout lecteur retient — apprivoiser, c'est accepter le risque du manque en échange du sens. De lui vient la phrase qui résume l'œuvre : on ne voit bien qu'avec le cœur.",
    },
    {
      title: "L'Avion",
      note: "Panne dans le Sahara",
      alt: "Aquarelle d'un petit biplan posé sur les dunes du désert",
      story:
        "La panne dans le désert n'est pas seulement le moteur de l'intrigue : c'est de l'autobiographie. Saint-Exupéry s'est écrasé dans le Sahara en 1935 et a survécu des jours presque sans eau. L'avion brisé marque l'instant où un adulte pratique est obligé de s'arrêter, d'attendre et enfin d'écouter un enfant.",
    },
    {
      title: "L'Astéroïde",
      note: "B-612",
      alt: "Carte astronomique minimaliste avec une planète pâle et des orbites pointillées",
      story:
        "Une planète à peine plus grande qu'une maison, avec trois volcans et une fleur. L'astronome turc qui l'a découverte n'a pas été pris au sérieux tant qu'il portait un costume traditionnel — critique silencieuse de la façon dont les grandes personnes confondent apparence et vérité.",
    },
  ],
  quotes: [
    {
      text: "On ne voit bien qu'avec le cœur. L'essentiel est invisible pour les yeux.",
      who: "Le Renard",
    },
    { text: "Tu deviens responsable pour toujours de ce que tu as apprivoisé.", who: "Le Renard" },
    {
      text: "C'est le temps que tu as consacré à ta rose qui fait ta rose si importante.",
      who: "Le Renard",
    },
  ],
  anthology: [
    {
      text: "On ne voit bien qu'avec le cœur. L'essentiel est invisible pour les yeux.",
      who: "Le Renard",
      chapter: "Chap. XXI",
    },
    {
      text: "Tu deviens responsable pour toujours de ce que tu as apprivoisé.",
      who: "Le Renard",
      chapter: "Chap. XXI",
    },
    {
      text: "C'est le temps que tu as perdu pour ta rose qui fait ta rose si importante.",
      who: "Le Renard",
      chapter: "Chap. XXI",
    },
    {
      text: "Les grandes personnes ne comprennent jamais rien toutes seules.",
      who: "Le Pilote",
      chapter: "Chap. I",
    },
    {
      text: "Tu sais… quand on est tellement triste on aime les couchers de soleil.",
      who: "Le Petit Prince",
      chapter: "Chap. VI",
    },
    {
      text: "Il faut bien que je supporte deux ou trois chenilles si je veux connaître les papillons.",
      who: "La Rose",
      chapter: "Chap. IX",
    },
    {
      text: "Ce qui embellit le désert, c'est qu'il cache un puits quelque part.",
      who: "Le Petit Prince",
      chapter: "Chap. XXIV",
    },
    {
      text: "Les étoiles sont belles à cause d'une fleur que l'on ne voit pas.",
      who: "Le Petit Prince",
      chapter: "Chap. XXIV",
    },
  ],
  editions: [
    { label: "Titre original", value: "Le Petit Prince" },
    { label: "Première édition", value: "Reynal & Hitchcock, New York, 6 avril 1943" },
    { label: "Édition française", value: "Gallimard, 1945, après la libération de la France" },
    { label: "Illustrations", value: "Aquarelles de l'auteur lui-même" },
    { label: "Genre", value: "Nouvelle allégorique / fable philosophique" },
    { label: "Longueur", value: "27 chapitres courts" },
  ],
  planets: [
    {
      name: "Le Roi",
      line: "Un monarque sans sujets qui n'ordonne que ce qui allait déjà arriver.",
      lesson: "L'autorité sans écoute est une mise en scène.",
    },
    {
      name: "Le Vaniteux",
      line: "Il n'entend que les louanges ; toute autre phrase ne l'atteint pas.",
      lesson: "La vanité est une surdité élégante.",
    },
    {
      name: "Le Buveur",
      line: "Il boit pour oublier qu'il a honte de boire.",
      lesson: "La fuite nourrit ce que l'on fuit.",
    },
    {
      name: "Le Businessman",
      line: "Il compte les étoiles pour les posséder et les mettre en banque.",
      lesson: "Posséder n'est pas prendre soin.",
    },
    {
      name: "L'Allumeur de réverbères",
      line: "Il allume et éteint son réverbère chaque minute, fidèle à la consigne.",
      lesson: "Le seul qui s'occupe d'autre chose que de lui-même.",
    },
    {
      name: "Le Géographe",
      line: "Il consigne des montagnes éternelles mais méprise les fleurs éphémères.",
      lesson: "L'éphémère est justement ce qui compte.",
    },
    {
      name: "La Terre",
      line: "Mille et un rois, sept mille géographes et un renard qui apprend à apprivoiser.",
      lesson: "C'est ici qu'il apprend à aimer sa rose.",
    },
  ],
  characters: [
    {
      name: "Le Petit Prince",
      role: "Le voyageur",
      text: "Un garçon venu d'un astéroïde minuscule, lors de sa première traversée de mondes habités par des adultes. Il s'étonne de l'incohérence de chacun d'eux.",
      symbol: "L'enfant qui vit encore dans chaque adulte.",
      alt: "Aquarelle d'un garçon blond au foulard doré regardant le ciel",
    },
    {
      name: "Le Pilote",
      role: "Le narrateur",
      text: "Il rêvait de dessiner, mais les grandes personnes l'ont découragé et il est devenu aviateur. Il tombe dans le Sahara et y retrouve son regard d'enfant.",
      symbol: "Il n'est jamais trop tard pour revenir à ce qu'on a abandonné.",
      alt: "Aquarelle d'un aviateur agenouillé dans le sable avec un carnet de dessin",
    },
    {
      name: "Le Renard",
      role: "Le maître",
      text: "Il apparaît soudain et demande à être apprivoisé : s'approcher un peu chaque jour, toujours à la même heure. De lui vient le secret de tout le livre.",
      symbol: "Apprivoiser, c'est devenir responsable d'un lien.",
      alt: "Aquarelle d'un renard assis sur les dunes",
    },
    {
      name: "La Rose",
      role: "L'amour",
      text: "Vaniteuse, théâtrale et orgueilleuse — et pour cela même irremplaçable. Sa contradiction pousse le prince au voyage ; son absence le ramène.",
      symbol: "L'amour a des épines et exige un soin quotidien.",
      alt: "Aquarelle d'une rose rouge sous un globe de verre",
    },
    {
      name: "Le Mouton et la Caisse",
      role: "L'imagination",
      text: "Insatisfait des dessins, le prince accepte une caisse percée de trous : le mouton est dedans, invisible. Mais mangera-t-il la rose ?",
      symbol: "L'imagination dépasse le savoir — et l'amour amène la peur avec lui.",
      alt: "Dessin d'une caisse en bois avec trois trous",
    },
    {
      name: "Le Serpent",
      role: "L'énigme",
      text: "Le premier être qu'il rencontre sur la Terre. Il parle par énigmes, mais il est le plus franc de tous : il promet de le renvoyer sur sa planète quand il le voudra.",
      symbol: "La mort comme seul chemin du retour.",
      alt: "Aquarelle d'un serpent doré enroulé dans le sable",
    },
    {
      name: "Le Chapeau et le Boa",
      role: "Le premier dessin",
      text: "Les grandes personnes voyaient un chapeau ; c'était un boa digérant un éléphant. Aucune n'a demandé à voir l'intérieur.",
      symbol: "Tout ce qu'on voit n'est pas ce qui est. Regardez au-delà de l'apparence.",
      alt: "Dessin au trait d'une forme qui ressemble à un chapeau",
    },
    {
      name: "L'Astronome Turc",
      role: "Le découvreur",
      text: "Il a découvert l'astéroïde B-612 en 1909, mais personne ne l'a cru à cause de ses vêtements. Il a refait sa présentation en costume des années plus tard — et fut applaudi.",
      symbol: "Les grandes personnes jugent sur l'apparence, et appellent cela du sérieux.",
      alt: "Aquarelle d'un astronome en fez observant le ciel avec une lunette",
    },
  ],
  bookFacts: [
    { label: "Première édition, publiée à New York, en exil" },
    { label: "Langues et dialectes dans lesquels il a été traduit" },
    { label: "Livre le plus vendu au monde, après la Bible et le Coran" },
    { label: "Année où l'épave de son avion fut retrouvée" },
  ],
  timeline: [
    {
      title: "Naissance à Lyon",
      text: "Antoine Marie Jean-Baptiste Roger de Saint-Exupéry naît le 29 juin, en France.",
    },
    {
      title: "L'Aéropostale",
      text: "Il rejoint la compagnie de courrier aérien et vole sur les lignes d'Afrique et d'Amérique du Sud.",
    },
    {
      title: "La chute dans le Sahara",
      text: "Il s'écrase dans le désert avec le mécanicien Prévot et survit des jours presque sans eau — la scène qui ouvrira le livre.",
    },
    {
      title: "Première édition, à New York",
      text: "Reynal & Hitchcock publie Le Petit Prince le 6 avril, en anglais et en français, avec les aquarelles de l'auteur.",
    },
    {
      title: "La disparition",
      text: "Le 31 juillet, il décolle de Corse en mission de reconnaissance et n'est jamais revu.",
    },
    {
      title: "Édition française, chez Gallimard",
      text: "Ce n'est qu'après la libération de la France que le livre arrive dans le pays de l'auteur, chez Gallimard.",
    },
    {
      title: "L'épave retrouvée",
      text: "Des pièces de l'avion de Saint-Exupéry sont identifiées au fond de la Méditerranée, près de Marseille.",
    },
    {
      title: "220+ langues",
      text: "Traduit en plus de 220 langues et dialectes, c'est le troisième livre le plus vendu au monde.",
    },
  ],
};

export const DATA: Partial<Record<Lang, DataOverride>> = { en: enData, fr: frData };
