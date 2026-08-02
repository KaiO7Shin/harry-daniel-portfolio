export type GoalHorizon = {
  id: string;
  title: string;
  items: string[];
};

export const shortTermGoals = [
  "augmenter mon temps d’entraînement",
  "progresser dans le classement national",
  "participer à davantage de compétitions ITTF",
  "développer mon expérience internationale",
] as const;

export const midTermGoals = [
  "intégrer le Top 10 africain",
  "effectuer des stages en Chine, en France ou en Allemagne",
  "intégrer un club à l’étranger",
  "bénéficier d’un encadrement plus intensif",
] as const;

export const longTermGoals = [
  "devenir joueur professionnel ou semi-professionnel",
  "représenter Madagascar au plus haut niveau",
  "construire une carrière sportive durable",
] as const;

export const homeGoals = [
  "intégrer le Top 10 africain",
  "participer à davantage de compétitions ITTF",
  "rejoindre un club à l’étranger",
  "effectuer des stages en Chine, en France ou en Allemagne",
  "augmenter mon volume d’entraînement",
  "évoluer vers un statut professionnel ou semi-professionnel",
] as const;

export const goalHorizons: GoalHorizon[] = [
  {
    id: "court",
    title: "Court terme",
    items: [...shortTermGoals],
  },
  {
    id: "moyen",
    title: "Moyen terme",
    items: [...midTermGoals],
  },
  {
    id: "long",
    title: "Long terme",
    items: [...longTermGoals],
  },
];

export const whySupport = [
  "je suis déjà membre de l’équipe nationale",
  "je suis régulier dans mes résultats",
  "j’ai une expérience continentale",
  "je dispose d’un fort potentiel de progression",
  "je porte une image positive, disciplinée et ambitieuse",
  "je représente Madagascar à l’international",
] as const;

export const priorityNeeds = [
  "déplacements internationaux",
  "billets d’avion",
  "hébergement",
  "frais de compétition",
  "stages de perfectionnement",
  "équipements",
  "raquettes et revêtements",
  "tenues",
  "préparation physique",
  "communication sportive",
] as const;

export const partnerVisibility = [
  "présence sur mes tenues",
  "visibilité sur mon portfolio",
  "publications sur mes réseaux sociaux",
  "présence sur mes supports de communication",
  "contenus photos et vidéos",
  "participation à des événements",
  "association à mon projet sportif national",
] as const;

export const partnershipCTA = {
  title: "Construisons la prochaine étape ensemble.",
  text: "Je recherche des opportunités sportives, des stages internationaux, un accompagnement matériel et des partenaires souhaitant soutenir le développement d’un jeune talent malagasy.",
} as const;
