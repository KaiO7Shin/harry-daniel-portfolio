# Harry Daniel Andriamihaja — Portfolio sportif

Portfolio officiel de **Harry Daniel Andriamihaja**, joueur national malagasy de tennis de table.

Stack : Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion, Lucide React.

## Installation

```bash
npm install
```

## Lancement

```bash
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Déploiement Vercel

Le projet est prêt pour Vercel (Next.js App Router, build statique OK).

1. Va sur [vercel.com/new](https://vercel.com/new)
2. Importe le repo `KaiO7Shin/harry-daniel-portfolio`
3. Framework : **Next.js** (détecté automatiquement)
4. Ajoute les variables d’environnement (Settings → Environment Variables) :

| Variable | Exemple | Obligatoire |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://ton-projet.vercel.app` | Recommandé (SEO / Open Graph) |
| `NEXT_PUBLIC_FORMSPREE_ENDPOINT` | `https://formspree.io/f/xxxxxxxx` | Optionnel (envoi du contact) |

5. Deploy → tu obtiens une URL `*.vercel.app`
6. (Optionnel) Domaine custom dans Project → Settings → Domains

Sans Formspree, le site s’affiche correctement ; seul l’envoi du formulaire reste inactif.

## Structure des pages

| Route | Rôle |
|---|---|
| `/` | Accueil (Hero, stats, présentation, moments forts, galerie + CTA) |
| `/profil` | Bio, fiche technique, extras |
| `/palmares` | Étapes clés + résultats filtrables |
| `/galerie` | Photos |
| `/contact` | Formulaire |

`/parcours` redirige vers `/palmares`.  
`/partenariats` est masqué pour le moment (redirige vers `/contact`).

## Contenu modifiable

Tous les textes, statistiques, résultats et métadonnées sont centralisés :

| Fichier | Contenu |
|---|---|
| `data/player.ts` | Profil, biographie, fiche technique, contact |
| `data/achievements.ts` | Palmarès et moments forts |
| `data/clubs.ts` | Étapes de parcours (timeline) |
| `data/goals.ts` | Objectifs et partenariats |
| `data/gallery.ts` | Galerie photos et légendes |
| `data/navigation.ts` | Navigation |
| `data/stats.ts` | Chiffres clés |
| `lib/metadata.ts` | SEO global |

## Images

Déposer les photos dans :

```text
public/images/harry/
```

Fichiers attendus :

- `hero.png`
- `hero-mobile.png`
- `portrait.jpg`
- `profile-action.jpg`
- `focus.jpg`
- `gallery-01.jpg` … `gallery-06.jpg`
- `og.jpg` (1200×630 pour les réseaux sociaux)

Voir `public/images/harry/README.md`.

Tant qu’une image est absente, un placeholder premium s’affiche automatiquement.

## CV PDF

Déposer le CV ici :

```text
public/documents/cv-harry-daniel-andriamihaja.pdf
```

Le chemin est référencé dans `data/player.ts` → `documents.cv`.

## Couleurs

Variables définies dans `app/globals.css` (`@theme`) :

- Noir principal : `#050505`
- Jaune principal : `#F4C430`
- Accents Madagascar : rouge `#FC3D32`, vert `#007E3A`

## Formulaire de contact

1. Créer un formulaire gratuit sur [Formspree](https://formspree.io)
2. Copier l’endpoint `https://formspree.io/f/xxxxxxxx`
3. Le définir dans `.env.local` (local) et sur Vercel (`NEXT_PUBLIC_FORMSPREE_ENDPOINT`)

Mettre à jour l’e-mail affiché dans `data/player.ts` → `contact.email`.

Copier aussi `.env.example` → `.env.local` pour le développement.

## Version anglaise (future)

L’architecture est prête pour une internationalisation :

1. Extraire les chaînes vers des dictionnaires (`messages/fr.json`, `messages/en.json`)
2. Ajouter `next-intl` ou le système i18n App Router
3. Préfixer les routes (`/en/...`) sans réécrire les composants

Ne pas dupliquer les données sportives : garder `data/*.ts` comme source unique et traduire uniquement les labels UI.

## Scripts

- `npm run dev` — développement
- `npm run build` — build production
- `npm start` — serveur production
- `npm run lint` — ESLint
