import type { Metadata } from "next";
import { player } from "@/data/player";
import { getSiteUrl } from "@/lib/site-url";

export const siteConfig = {
  name: `${player.displayName} — Joueur national de tennis de table`,
  description:
    "Présentation de Harry Daniel Andriamihaja, joueur national malagasy de tennis de table — parcours, palmarès et galerie.",
  url: getSiteUrl(),
  locale: "fr_MG",
  keywords: [
    "Harry Daniel Andriamihaja",
    "tennis de table Madagascar",
    "joueur national Madagascar",
    "équipe nationale de tennis de table",
    "jeune pongiste malagasy",
    "athlète Madagascar",
    "ITTF Madagascar",
  ],
};

export function createPageMetadata({
  title,
  description,
  path = "",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = `${siteConfig.url}${path}`;
  const fullTitle =
    title === siteConfig.name ? title : `${title} | ${player.displayName}`;

  return {
    title: fullTitle,
    description,
    keywords: siteConfig.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: player.displayName,
      locale: siteConfig.locale,
      type: "website",
      images: [
        {
          url: `${siteConfig.url}/images/harry/og.jpg`,
          width: 1200,
          height: 630,
          alt: player.displayName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [`${siteConfig.url}/images/harry/og.jpg`],
    },
  };
}

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: player.displayName,
  alternateName: player.officialName,
  nationality: player.nationality,
  birthDate: String(player.birthYear),
  jobTitle: "Joueur national de tennis de table",
  memberOf: {
    "@type": "SportsTeam",
    name: "Équipe nationale de tennis de table de Madagascar",
  },
  sport: player.sport,
  url: siteConfig.url,
  image: `${siteConfig.url}${player.images.portrait}`,
  description: siteConfig.description,
};
