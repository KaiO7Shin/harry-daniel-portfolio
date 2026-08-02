export type NavItem = {
  label: string;
  href: string;
};

export const navigation: NavItem[] = [
  { label: "Accueil", href: "/" },
  { label: "Profil", href: "/profil" },
  { label: "Palmarès", href: "/palmares" },
  { label: "Galerie", href: "/galerie" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks: NavItem[] = [
  { label: "Profil", href: "/profil" },
  { label: "Palmarès", href: "/palmares" },
  { label: "Galerie", href: "/galerie" },
  { label: "Contact", href: "/contact" },
];

export const ctaContact = {
  label: "Prendre contact",
  href: "/contact",
} as const;
