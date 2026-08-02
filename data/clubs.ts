export type CareerStep = {
  id: string;
  period: string;
  title: string;
  description: string;
};

export type JourneyChapter = {
  id: string;
  number: string;
  title: string;
  description: string;
  image?: string;
  year?: string;
};

export const careerTimeline: CareerStep[] = [
  {
    id: "cftt",
    period: "2017–2019",
    title: "Club CFTT",
    description:
      "Mes débuts de formation et mes premiers titres, notamment en Ligue Analamanga dès 2018.",
  },
  {
    id: "jovenna",
    period: "2019–2025",
    title: "Club Jovenna",
    description:
      "J’y ai développé mon jeu, remporté des titres régionaux — dont le titre cadets de la Ligue Analamanga en 2023 — et décroché des podiums nationaux.",
  },
  {
    id: "national",
    period: "2024",
    title: "Équipe nationale",
    description:
      "Ma première sélection et ma médaille africaine U15 par équipes.",
  },
  {
    id: "young-vibes",
    period: "Depuis 2026",
    title: "Young Vibes",
    description: "Une nouvelle étape dans ma progression vers le haut niveau.",
  },
  {
    id: "accra",
    period: "2026",
    title: "ITTF-Africa Youth Cup",
    description: "Ma participation en catégorie U19 à Accra.",
  },
];

export const journeyChapters: JourneyChapter[] = [
  {
    id: "debuts",
    number: "01",
    title: "Les débuts à huit ans",
    description:
      "À huit ans, j’ai découvert le tennis de table. Ce premier contact avec la table a posé les bases d’une discipline qui structure aujourd’hui toute ma trajectoire sportive.",
    image: "/images/harry/early-2018.jpg",
    year: "≈ 2017",
  },
  {
    id: "cftt",
    number: "02",
    title: "Formation au CFTT",
    description:
      "Au club CFTT, j’ai appris les fondamentaux, le sens de l’entraînement et le goût de la compétition. Mes premières joutes locales ont confirmé un potentiel à cultiver.",
    image: "/images/harry/early-2018-wide.jpg",
    year: "2017–2019",
  },
  {
    id: "jovenna",
    number: "03",
    title: "Progression avec Jovenna",
    description:
      "Chez Jovenna, mon volume de compétition a augmenté. J’ai affiné mon identité de gaucher offensif et gagné en régularité face à des adversaires de plus en plus exigeants.",
    image: "/images/harry/ligue-2022.jpg",
    year: "2019–2025",
  },
  {
    id: "titres",
    number: "04",
    title: "Premiers titres régionaux",
    description:
      "Mes titres de section et de ligue à Antananarivo et Analamanga jalonnent une progression cohérente, saison après saison, dans les catégories jeunes.",
    image: "/images/harry/ligue-2023.jpg",
    year: "2018–2023",
  },
  {
    id: "podiums",
    number: "05",
    title: "Podiums nationaux",
    description:
      "Mes vice-championnats de Madagascar et mes podiums nationaux ont renforcé mon statut parmi les meilleurs espoirs du circuit local.",
    image: "/images/harry/antananaivo-serve-close.jpg",
    year: "2018–2025",
  },
  {
    id: "selection",
    number: "06",
    title: "Intégration de l’équipe nationale en 2024",
    description:
      "En 2024, la régularité de mes résultats m’a ouvert les portes de l’équipe nationale de Madagascar — une étape décisive vers le niveau continental.",
    image: "/images/harry/equipe-doubles.jpg",
    year: "2024",
  },
  {
    id: "gaborone",
    number: "07",
    title: "Médaille africaine à Gaborone",
    description:
      "Aux ITTF African Youth Championships, j’ai contribué à la médaille de bronze par équipes U15 à Gaborone, Botswana — une première empreinte africaine marquante.",
    image: "/images/harry/gaborone-forehand.jpg",
    year: "2024",
  },
  {
    id: "young-vibes",
    number: "08",
    title: "Arrivée chez Young Vibes",
    description:
      "Depuis 2026, sous la direction de Narcisse Ranarison au club Young Vibes, j’accélère ma préparation pour le haut niveau africain et international.",
    image: "/images/harry/focus.jpg",
    year: "Depuis 2026",
  },
  {
    id: "antananaivo-2026",
    number: "09",
    title: "Vice-champion Section Antananarivo junior",
    description:
      "En 2026, je termine vice-champion de la Section Antananarivo en catégorie junior — une confirmation de mon niveau sur le circuit régional.",
    image: "/images/harry/antananaivo-serve.jpg",
    year: "2026",
  },
  {
    id: "accra",
    number: "10",
    title: "Participation internationale à Accra en 2026",
    description:
      "L’ITTF-Africa Youth Cup à Accra, en catégorie U19, a confirmé ma capacité à évoluer dans un environnement continental plus dense et plus exigeant.",
    image: "/images/harry/gaborone-action.jpg",
    year: "2026",
  },
  {
    id: "pro",
    number: "11",
    title: "Projet vers le niveau professionnel",
    description:
      "Mon ambition reste claire : multiplier les expériences ITTF, rejoindre un club à l’étranger et construire un statut professionnel ou semi-professionnel durable.",
    image: "/images/harry/portrait.jpg",
    year: "À venir",
  },
];
