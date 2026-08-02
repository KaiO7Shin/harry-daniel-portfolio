export type StatItem = {
  id: string;
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  displayOverride?: string;
};

export const keyStats: StatItem[] = [
  {
    id: "top16",
    value: 16,
    prefix: "Top ",
    label: "Madagascar",
  },
  {
    id: "junior",
    value: 4,
    suffix: "e",
    label: "Classement junior national",
  },
  {
    id: "national",
    value: 2024,
    prefix: "Depuis ",
    label: "Équipe nationale",
    displayOverride: "2024",
  },
  {
    id: "africa",
    value: 2,
    label: "Participations africaines",
  },
  {
    id: "championships",
    value: 8,
    label: "Participations aux Championnats de Madagascar",
  },
];

export const statsNote =
  "Données sportives à mettre à jour selon les classements officiels.";
