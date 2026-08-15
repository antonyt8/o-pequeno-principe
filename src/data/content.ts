import type { ArtPiece } from "@/components/Lightbox";
import planetChart from "@/assets/planet-chart.jpg";
import galleryRose from "@/assets/gallery-rose.jpg";
import galleryFox from "@/assets/gallery-fox.jpg";
import galleryPlane from "@/assets/gallery-plane.jpg";
import galleryAsteroid from "@/assets/gallery-asteroid.jpg";
import charPrince from "@/assets/char-prince.jpg";
import charPilot from "@/assets/char-pilot.jpg";
import charSerpent from "@/assets/char-serpent.jpg";
import charSheep from "@/assets/char-sheep.jpg";
import charAstronomer from "@/assets/char-astronomer.jpg";
import hatOutside from "@/assets/hat-outside.png";
import authorPortrait from "@/assets/author-portrait.jpg";
import heroSkyImage from "@/assets/hero-sky.jpg";

export const SITE_ORIGIN = "https://pequeno-principe.app";
export const OG_IMAGE = `${SITE_ORIGIN}/og-cover.jpg`;

export type NavLink = { to: string; label: string };

export const navLinks: NavLink[] = [
  { to: "/jornada", label: "A Jornada" },
  { to: "/personagens", label: "Personagens" },
  { to: "/planetas", label: "Os Planetas" },
  { to: "/frases", label: "Frases" },
  { to: "/poentes", label: "Pores do Sol" },
  { to: "/galeria", label: "Galeria" },
  { to: "/livro", label: "O Livro" },
  { to: "/autor", label: "O Autor" },
];

export const gallery: ArtPiece[] = [
  {
    src: galleryRose,
    alt: "Ilustração em aquarela de uma rosa vermelha sob uma redoma de vidro",
    title: "A Rosa",
    note: "Única no mundo inteiro",
    story:
      "A rosa é vaidosa, exigente e frágil — e é exatamente por isso que importa. Ela ensina que o valor de alguém não vem da raridade, mas do tempo perdido por ela. Quando o príncipe encontra um jardim com cinco mil rosas iguais, entende que a sua continua única porque foi regada, protegida e escutada.",
  },
  {
    src: galleryFox,
    alt: "Ilustração em aquarela de uma raposa sentada nas dunas",
    title: "A Raposa",
    note: "O rito de cativar",
    story:
      "A raposa pede para ser cativada: aproximar-se um pouco todos os dias, sempre à mesma hora, criando laços. É a cena que dá nome ao livro na memória de todo leitor — cativar é aceitar a possibilidade da saudade em troca do sentido. Dela vem a frase que resume a obra: só se vê bem com o coração.",
  },
  {
    src: galleryPlane,
    alt: "Ilustração em aquarela de um pequeno biplano pousado nas dunas do deserto",
    title: "O Avião",
    note: "Pane no Saara",
    story:
      "A pane no deserto não é só o motor da trama: é autobiografia. Saint-Exupéry caiu no Saara em 1935 e sobreviveu quase sem água durante dias. O avião quebrado marca o momento em que um adulto prático é obrigado a parar, esperar e finalmente ouvir uma criança.",
  },
  {
    src: galleryAsteroid,
    alt: "Ilustração em aquarela do Asteroide B-612 com vulcões, o Pequeno Príncipe e a Rosa",
    title: "O Asteroide",
    note: "B-612",
    story:
      "Um planeta pouco maior que uma casa, com três vulcões e uma flor. O astrônomo turco que o descobriu não foi levado a sério enquanto vestia trajes tradicionais — uma crítica silenciosa à forma como os adultos confundem aparência com verdade.",
  },
];

export const quotes = [
  { text: "Só se vê bem com o coração. O essencial é invisível aos olhos.", who: "A Raposa" },
  { text: "Tu te tornas eternamente responsável por aquilo que cativas.", who: "A Raposa" },
  { text: "Foi o tempo que dedicaste à tua rosa que a fez tão importante.", who: "A Raposa" },
];

export type QuoteTheme =
  "essencial" | "amor" | "responsabilidade" | "infancia" | "solidao" | "esperanca";

export const quoteThemes: QuoteTheme[] = [
  "essencial",
  "amor",
  "responsabilidade",
  "infancia",
  "solidao",
  "esperanca",
];

/** Antologia completa das citações, para a página do livro e a página de frases. */
export const anthology: {
  text: string;
  who: string;
  chapter: string;
  theme: QuoteTheme;
}[] = [
  {
    text: "Só se vê bem com o coração. O essencial é invisível aos olhos.",
    who: "A Raposa",
    chapter: "Cap. XXI",
    theme: "essencial",
  },
  {
    text: "Tu te tornas eternamente responsável por aquilo que cativas.",
    who: "A Raposa",
    chapter: "Cap. XXI",
    theme: "responsabilidade",
  },
  {
    text: "Foi o tempo que perdeste com tua rosa que a fez tão importante.",
    who: "A Raposa",
    chapter: "Cap. XXI",
    theme: "amor",
  },
  {
    text: "As pessoas grandes nunca são capazes de compreender qualquer coisa sozinhas.",
    who: "O Piloto",
    chapter: "Cap. I",
    theme: "infancia",
  },
  {
    text: "Sabes… quando a gente está muito triste, gosta dos pores do sol.",
    who: "O Pequeno Príncipe",
    chapter: "Cap. VI",
    theme: "solidao",
  },
  {
    text: "É preciso que eu suporte duas ou três larvas se quiser conhecer as borboletas.",
    who: "A Rosa",
    chapter: "Cap. IX",
    theme: "amor",
  },
  {
    text: "O que embeleza o deserto é que ele esconde um poço em algum lugar.",
    who: "O Pequeno Príncipe",
    chapter: "Cap. XXIV",
    theme: "esperanca",
  },
  {
    text: "As estrelas são belas por causa de uma flor que não se vê.",
    who: "O Pequeno Príncipe",
    chapter: "Cap. XXIV",
    theme: "amor",
  },
];

/** Dados de publicação e edições. */
export const editions = [
  { label: "Título original", value: "Le Petit Prince" },
  { label: "Primeira edição", value: "Reynal & Hitchcock, Nova York, 6 de abril de 1943" },
  { label: "Edição francesa", value: "Gallimard, 1945, após a libertação da França" },
  { label: "Ilustrações", value: "Aquarelas do próprio autor" },
  { label: "Gênero", value: "Novela alegórica / fábula filosófica" },
  { label: "Extensão", value: "27 capítulos curtos" },
];

export const planets = [
  {
    n: "325",
    name: "O Rei",
    line: "Um monarca sem súditos que só ordena o que já iria acontecer.",
    lesson: "Autoridade sem escuta é encenação.",
  },
  {
    n: "326",
    name: "O Vaidoso",
    line: "Ouve apenas elogios; qualquer outra frase não chega até ele.",
    lesson: "A vaidade é surdez elegante.",
  },
  {
    n: "327",
    name: "O Bêbado",
    line: "Bebe para esquecer que tem vergonha de beber.",
    lesson: "A fuga alimenta aquilo de que se foge.",
  },
  {
    n: "328",
    name: "O Homem de Negócios",
    line: "Conta estrelas para possuí-las e guardá-las num banco.",
    lesson: "Possuir não é cuidar.",
  },
  {
    n: "329",
    name: "O Acendedor",
    line: "Acende e apaga o lampião a cada minuto, fiel à sua ordem.",
    lesson: "O único que cuida de algo além de si.",
  },
  {
    n: "330",
    name: "O Geógrafo",
    line: "Registra montanhas eternas, mas despreza as flores efêmeras.",
    lesson: "O efêmero é justamente o que importa.",
  },
  {
    n: "—",
    name: "A Terra",
    line: "Mil e um reis, sete mil geógrafos e uma raposa que ensina a cativar.",
    lesson: "É aqui que ele aprende a amar sua rosa.",
  },
];

export type Character = {
  name: string;
  role: string;
  text: string;
  symbol: string;
  image: string;
  alt: string;
};

/** Personagens e símbolos da obra — o que cada um representa. */
export const characters: Character[] = [
  {
    name: "O Pequeno Príncipe",
    role: "O viajante",
    text: "Um menino vindo de um asteroide minúsculo, em sua primeira travessia por mundos habitados por adultos. Espanta-se com a incoerência de cada um deles.",
    symbol: "A criança que continua viva dentro de todo adulto.",
    image: charPrince,
    alt: "Aquarela de um menino louro de cachecol dourado olhando para o céu",
  },
  {
    name: "O Piloto",
    role: "O narrador",
    text: "Sonhava ser desenhista, mas foi desencorajado pelos grandes e virou aviador. Cai no Saara e, ali, reencontra o próprio olhar de criança.",
    symbol: "Nunca é tarde para voltar ao que se abandonou.",
    image: charPilot,
    alt: "Aquarela de um aviador ajoelhado na areia com um bloco de desenho",
  },
  {
    name: "A Raposa",
    role: "A mestra",
    text: "Aparece de repente e pede para ser cativada: aproximar-se um pouco a cada dia, sempre à mesma hora. Dela vem o segredo do livro inteiro.",
    symbol: "Cativar é assumir responsabilidade por um laço.",
    image: galleryFox,
    alt: "Aquarela de uma raposa sentada nas dunas",
  },
  {
    name: "A Rosa",
    role: "O amor",
    text: "Vaidosa, dramática e orgulhosa — e por isso mesmo insubstituível. Sua contradição empurra o príncipe à viagem; a saudade dela o traz de volta.",
    symbol: "O amor tem espinhos e exige cuidado diário.",
    image: galleryRose,
    alt: "Aquarela de uma rosa vermelha sob uma redoma de vidro",
  },
  {
    name: "O Carneiro e a Caixa",
    role: "A imaginação",
    text: "Insatisfeito com os desenhos, o príncipe aceita uma caixa com furos: o carneiro está lá dentro, invisível. Mas será que ele comerá a rosa?",
    symbol: "A imaginação supera o conhecimento — e o amor traz medo junto.",
    image: charSheep,
    alt: "Desenho de uma caixa de madeira com três furos",
  },
  {
    name: "A Serpente",
    role: "O enigma",
    text: "Primeiro ser que ele encontra na Terra. Fala por charadas, mas é a mais franca de todas: promete devolvê-lo ao seu planeta quando ele quiser.",
    symbol: "A morte como único caminho de volta para casa.",
    image: charSerpent,
    alt: "Aquarela de uma serpente dourada enrolada na areia",
  },
  {
    name: "O Chapéu e a Jiboia",
    role: "O primeiro desenho",
    text: "Os adultos viam um chapéu; era uma jiboia digerindo um elefante. Nenhum deles pediu para ver por dentro.",
    symbol: "Nem tudo que se vê é o que é. Olhe além da aparência.",
    image: hatOutside,
    alt: "Desenho a traço de uma forma que parece um chapéu",
  },
  {
    name: "O Astrônomo Turco",
    role: "O descobridor",
    text: "Descobriu o asteroide B-612 em 1909, mas ninguém acreditou nele por causa de suas roupas. Repetiu a apresentação de terno anos depois — e foi aplaudido.",
    symbol: "Os grandes julgam pela aparência, e chamam isso de seriedade.",
    image: charAstronomer,
    alt: "Aquarela de um astrônomo de fez observando o céu com uma luneta",
  },
];

/** Dados e curiosidades sobre a obra. */
export const bookFacts = [
  { value: "1943", label: "Primeira edição, publicada em Nova York, no exílio" },
  { value: "220+", label: "Idiomas e dialetos em que já foi traduzido" },
  { value: "3º", label: "Livro mais vendido do mundo, depois de Bíblia e Alcorão" },
  { value: "2004", label: "Ano em que os destroços de seu avião foram encontrados" },
];

export type TimelineEntry = {
  year: string;
  title: string;
  text: string;
  kind: "life" | "book";
  image?: string;
  alt?: string;
};

/** Linha do tempo ilustrada: a vida do autor e a trajetória do livro. */
export const timelineEntries: TimelineEntry[] = [
  {
    year: "1900",
    title: "Nasce em Lyon",
    text: "Antoine Marie Jean-Baptiste Roger de Saint-Exupéry nasce em 29 de junho, na França.",
    kind: "life",
    image: authorPortrait,
    alt: "Retrato em aquarela sépia de Antoine de Saint-Exupéry",
  },
  {
    year: "1926",
    title: "A Aéropostale",
    text: "Entra para a companhia de correio aéreo e passa a voar rotas sobre a África e a América do Sul.",
    kind: "life",
    image: galleryPlane,
    alt: "Aquarela de um pequeno biplano pousado nas dunas",
  },
  {
    year: "1935",
    title: "A queda no Saara",
    text: "Cai no deserto com o mecânico Prévot e sobrevive quase sem água durante dias — a cena que abriria o livro.",
    kind: "life",
    image: heroSkyImage,
    alt: "Céu estrelado sobre o deserto",
  },
  {
    year: "1943",
    title: "Primeira edição, em Nova York",
    text: "Reynal & Hitchcock publica Le Petit Prince em 6 de abril, em inglês e francês, com as aquarelas do próprio autor.",
    kind: "book",
    image: charPrince,
    alt: "Aquarela de um menino louro de cachecol dourado",
  },
  {
    year: "1944",
    title: "O desaparecimento",
    text: "Em 31 de julho, decola da Córsega em missão de reconhecimento e nunca mais é visto.",
    kind: "life",
    image: charPilot,
    alt: "Aquarela de um aviador ajoelhado na areia",
  },
  {
    year: "1945",
    title: "Edição francesa, pela Gallimard",
    text: "Só depois da libertação da França o livro chega ao país do autor, pela editora Gallimard.",
    kind: "book",
    image: galleryRose,
    alt: "Aquarela de uma rosa sob uma redoma de vidro",
  },
  {
    year: "2004",
    title: "Os destroços encontrados",
    text: "Peças do avião de Saint-Exupéry são identificadas no fundo do Mediterrâneo, perto de Marselha.",
    kind: "life",
    image: planetChart,
    alt: "Carta astronômica minimalista com órbitas pontilhadas",
  },
  {
    year: "Hoje",
    title: "220+ idiomas",
    text: "Traduzido para mais de 220 idiomas e dialetos, é o terceiro livro mais vendido do mundo.",
    kind: "book",
    image: galleryFox,
    alt: "Aquarela de uma raposa sentada nas dunas",
  },
];
