export type AchievementScope =
  | "national"
  | "regional"
  | "international"
  | "individuel"
  | "equipe";

export type Achievement = {
  id: string;
  year: number;
  title: string;
  category?: string;
  location?: string;
  scopes: AchievementScope[];
  highlight?: boolean;
};

export type AchievementYearGroup = {
  year: number;
  items: Achievement[];
};

export const achievements: AchievementYearGroup[] = [
  {
    year: 2018,
    items: [
      {
        id: "2018-1",
        year: 2018,
        title: "Champion de la Section Antananarivo en poussin",
        category: "Poussin",
        location: "Antananarivo",
        scopes: ["regional", "individuel"],
      },
      {
        id: "2018-2",
        year: 2018,
        title: "Champion de la Ligue Analamanga en poussin",
        category: "Poussin",
        location: "Analamanga",
        scopes: ["regional", "individuel"],
      },
      {
        id: "2018-3",
        year: 2018,
        title: "Vice-champion du Championnat de Madagascar en poussin",
        category: "Poussin",
        location: "Madagascar",
        scopes: ["national", "individuel"],
      },
    ],
  },
  {
    year: 2019,
    items: [
      {
        id: "2019-1",
        year: 2019,
        title: "Champion de la Section Antananarivo en benjamin",
        category: "Benjamin",
        location: "Antananarivo",
        scopes: ["regional", "individuel"],
      },
      {
        id: "2019-2",
        year: 2019,
        title: "Vice-champion de la Ligue Analamanga par équipes, 2e série",
        category: "2e série",
        location: "Analamanga",
        scopes: ["regional", "equipe"],
      },
    ],
  },
  {
    year: 2020,
    items: [
      {
        id: "2020-1",
        year: 2020,
        title: "Champion de la Section Antananarivo en benjamin",
        category: "Benjamin",
        location: "Antananarivo",
        scopes: ["regional", "individuel"],
      },
      {
        id: "2020-2",
        year: 2020,
        title: "Vice-champion de la Section Antananarivo en 3e série",
        category: "3e série",
        location: "Antananarivo",
        scopes: ["regional", "individuel"],
      },
      {
        id: "2020-3",
        year: 2020,
        title: "Champion de la Ligue Analamanga en benjamin",
        category: "Benjamin",
        location: "Analamanga",
        scopes: ["regional", "individuel"],
      },
      {
        id: "2020-4",
        year: 2020,
        title: "Vice-champion du Championnat de Madagascar en benjamin",
        category: "Benjamin",
        location: "Madagascar",
        scopes: ["national", "individuel"],
      },
    ],
  },
  {
    year: 2021,
    items: [
      {
        id: "2021-1",
        year: 2021,
        title:
          "Vice-champion du Championnat de Madagascar, catégorie minimes garçons",
        category: "Minimes",
        location: "Madagascar",
        scopes: ["national", "individuel"],
      },
    ],
  },
  {
    year: 2022,
    items: [
      {
        id: "2022-1",
        year: 2022,
        title: "Champion de la Section Antananarivo, catégorie minimes garçons",
        category: "Minimes",
        location: "Antananarivo",
        scopes: ["regional", "individuel"],
      },
      {
        id: "2022-2",
        year: 2022,
        title: "Champion de la Ligue Analamanga, catégorie minimes garçons",
        category: "Minimes",
        location: "Analamanga",
        scopes: ["regional", "individuel"],
      },
      {
        id: "2022-3",
        year: 2022,
        title:
          "Vice-champion du Championnat de Madagascar, catégorie minimes garçons",
        category: "Minimes",
        location: "Madagascar",
        scopes: ["national", "individuel"],
      },
    ],
  },
  {
    year: 2023,
    items: [
      {
        id: "2023-1",
        year: 2023,
        title: "Champion de la Ligue Analamanga, catégorie cadets",
        category: "Cadets",
        location: "Analamanga",
        scopes: ["regional", "individuel"],
      },
      {
        id: "2023-2",
        year: 2023,
        title: "Vice-champion du Championnat de Madagascar en double hommes",
        category: "Double hommes",
        location: "Madagascar",
        scopes: ["national", "equipe"],
      },
      {
        id: "2023-3",
        year: 2023,
        title: "Champion du tournoi Brain-up",
        category: "Tournoi",
        location: "Madagascar",
        scopes: ["national", "individuel"],
      },
    ],
  },
  {
    year: 2024,
    items: [
      {
        id: "2024-1",
        year: 2024,
        title: "Vice-champion de la Ligue Analamanga par équipes hommes",
        category: "Équipes hommes",
        location: "Analamanga",
        scopes: ["regional", "equipe"],
      },
      {
        id: "2024-2",
        year: 2024,
        title:
          "Médaille de bronze au Championnat d’Afrique des jeunes par équipes U15",
        category: "U15 par équipes",
        location: "Gaborone, Botswana",
        scopes: ["international", "equipe"],
        highlight: true,
      },
    ],
  },
  {
    year: 2025,
    items: [
      {
        id: "2025-1",
        year: 2025,
        title: "Vice-champion du Championnat de Madagascar en 1re série B",
        category: "1re série B",
        location: "Madagascar",
        scopes: ["national", "individuel"],
      },
    ],
  },
  {
    year: 2026,
    items: [
      {
        id: "2026-1",
        year: 2026,
        title: "Vice-champion de la Section Antananarivo en junior",
        category: "Junior",
        location: "Antananarivo",
        scopes: ["regional", "individuel"],
      },
      {
        id: "2026-2",
        year: 2026,
        title: "Participation à l’ITTF-Africa Youth Cup en U19 à Accra",
        category: "U19",
        location: "Accra, Ghana",
        scopes: ["international", "individuel"],
        highlight: true,
      },
    ],
  },
];

export type HighlightCard = {
  id: string;
  year: string;
  title: string;
  type: string;
  category: string;
  location: string;
  href: string;
};

export const highlightCards: HighlightCard[] = [
  {
    id: "h1",
    year: "2024",
    title: "Médaille de bronze",
    type: "ITTF African Youth Championships",
    category: "Épreuve par équipes U15",
    location: "Gaborone, Botswana",
    href: "/palmares",
  },
  {
    id: "h2",
    year: "2026",
    title: "Participation U19",
    type: "ITTF-Africa Youth Cup",
    category: "Catégorie U19",
    location: "Accra, Ghana",
    href: "/palmares",
  },
  {
    id: "h3",
    year: "Top 16",
    title: "Classement national",
    type: "Classement Madagascar",
    category: "Première série nationale A",
    location: "Madagascar",
    href: "/profil",
  },
  {
    id: "h4",
    year: "Depuis 2024",
    title: "Membre de l’équipe nationale",
    type: "Sélection nationale",
    category: "Équipe nationale",
    location: "Madagascar",
    href: "/palmares",
  },
];

export const achievementFilters = [
  { id: "tous", label: "Tous" },
  { id: "national", label: "National" },
  { id: "regional", label: "Régional" },
  { id: "international", label: "International" },
  { id: "individuel", label: "Individuel" },
  { id: "equipe", label: "Équipe" },
] as const;

export type AchievementFilterId =
  (typeof achievementFilters)[number]["id"];
