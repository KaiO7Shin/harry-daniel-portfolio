export type GalleryCategory =
  | "portraits"
  | "matchs"
  | "competitions"
  | "equipe"
  | "podiums";

export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  caption: string;
  location: string;
  date: string;
  category: GalleryCategory;
  span?: "normal" | "wide" | "tall";
};

export const galleryFilters = [
  { id: "tous", label: "Tous" },
  { id: "portraits", label: "Portraits" },
  { id: "matchs", label: "Matchs" },
  { id: "competitions", label: "Compétitions" },
  { id: "equipe", label: "Équipe nationale" },
  { id: "podiums", label: "Podiums" },
] as const;

export type GalleryFilterId = (typeof galleryFilters)[number]["id"];

export const galleryItems: GalleryItem[] = [
  {
    id: "g00",
    src: "/images/harry/early-2018.jpg",
    alt: "Harry Daniel médaillé à la Ligue Analamanga en 2018, catégorie poussin",
    caption: "Ligue Analamanga 2018 — premiers titres",
    location: "Antananarivo, Madagascar",
    date: "2018",
    category: "podiums",
    span: "tall",
  },
  {
    id: "g01",
    src: "/images/harry/portrait.jpg",
    alt: "Portrait de Harry Daniel Andriamihaja en maillot national Madagascar",
    caption: "Portrait équipe nationale",
    location: "Gaborone, Botswana",
    date: "2024",
    category: "portraits",
    span: "tall",
  },
  {
    id: "g02",
    src: "/images/harry/gaborone-forehand.jpg",
    alt: "Harry Daniel en frappe aux ITTF African Youth Championships",
    caption: "Médaille de bronze — ITTF African Youth Championships",
    location: "Gaborone, Botswana",
    date: "2024",
    category: "competitions",
    span: "wide",
  },
  {
    id: "g03",
    src: "/images/harry/equipe-doubles.jpg",
    alt: "Harry et coéquipière en maillot Madagascar pendant un match par équipes",
    caption: "Épreuve par équipes U15 — Madagascar",
    location: "Gaborone, Botswana",
    date: "2024",
    category: "equipe",
    span: "wide",
  },
  {
    id: "g04",
    src: "/images/harry/gaborone-action.jpg",
    alt: "Concentration en match, épreuve par équipes U15",
    caption: "En action à Gaborone",
    location: "Gaborone, Botswana",
    date: "2024",
    category: "matchs",
  },
  {
    id: "g05",
    src: "/images/harry/competition-ready.jpg",
    alt: "Harry Daniel en position prête pendant une compétition",
    caption: "Concentration en match",
    location: "Madagascar",
    date: "2025",
    category: "matchs",
    span: "tall",
  },
  {
    id: "g06",
    src: "/images/harry/antananaivo-serve.jpg",
    alt: "Service en match — Section Antananarivo junior",
    caption: "Vice-champion Section Antananarivo junior",
    location: "Antananarivo, Madagascar",
    date: "2026",
    category: "competitions",
  },
  {
    id: "g07",
    src: "/images/harry/gaborone-back-wide.jpg",
    alt: "Dos du maillot Madagascar HARRY en compétition internationale",
    caption: "Représenter Madagascar",
    location: "Gaborone, Botswana",
    date: "2024",
    category: "equipe",
    span: "wide",
  },
  {
    id: "g08",
    src: "/images/harry/antananaivo-serve-close.jpg",
    alt: "Concentration au service pendant la Section Antananarivo",
    caption: "Service — Section Antananarivo",
    location: "Antananarivo, Madagascar",
    date: "2026",
    category: "matchs",
  },
  {
    id: "g09",
    src: "/images/harry/antananaivo-match.jpg",
    alt: "Échange en match lors de la Section Antananarivo junior",
    caption: "Match — Section Antananarivo junior",
    location: "Antananarivo, Madagascar",
    date: "2026",
    category: "competitions",
  },
  {
    id: "g10",
    src: "/images/harry/media-interview.jpg",
    alt: "Harry Daniel et son père-coach, échange en salle entre deux moments de compétition",
    caption: "Avec mon père et coach",
    location: "Madagascar",
    date: "2026",
    category: "portraits",
    span: "tall",
  },
  {
    id: "g11",
    src: "/images/harry/gaborone-back.jpg",
    alt: "Maillot Madagascar Harry — médaille de bronze U15 par équipes",
    caption: "Médaille de bronze U15 par équipes",
    location: "Gaborone, Botswana",
    date: "2024",
    category: "podiums",
  },
  {
    id: "g12",
    src: "/images/harry/competition-ready-wide.jpg",
    alt: "Harry Daniel concentré derrière la table en compétition",
    caption: "Focus compétition",
    location: "Madagascar",
    date: "2025",
    category: "matchs",
  },
  {
    id: "g13",
    src: "/images/harry/ligue-2023.jpg",
    alt: "Harry Daniel en action pendant la Ligue Analamanga 2023",
    caption: "Ligue Analamanga 2023 — Champion cadets",
    location: "Antananarivo, Madagascar",
    date: "2023",
    category: "competitions",
    span: "wide",
  },
  {
    id: "g14",
    src: "/images/harry/ligue-2022.jpg",
    alt: "Harry Daniel en maillot Jovenna pendant la Ligue Analamanga 2022",
    caption: "Ligue Analamanga 2022 — Club Jovenna",
    location: "Antananarivo, Madagascar",
    date: "2022",
    category: "matchs",
    span: "wide",
  },
];

export const galleryPreviewIds = [
  "g02",
  "g14",
  "g13",
  "g00",
  "g03",
  "g01",
];
