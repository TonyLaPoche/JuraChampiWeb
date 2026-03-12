# Jura Champi - Site Vitrine

Site vitrine pour **Jura Champi**, producteur de champignons frais dans le Jura.

## 🍄 Fonctionnalités

- **Page d'accueil** : Histoire de l'entreprise, clients cibles (restaurants, cantines, particuliers), aperçu des produits
- **Page Produits** : Présentation des champignons (Shiitaké, Pleurote, Champignon de Paris, Maitaké)
- **Page Contact** : Formulaire de contact + carte de visite (téléphone, email, adresse)
- **i18n** : Français et Anglais avec switcher dans le header
- **SEO** : Métadonnées, sitemap, robots.txt, JSON-LD (Schema.org)
- **Responsive** : Mobile-first, design fluide

## 🚀 Démarrage

```bash
# Installation
npm install

# Développement
npm run dev

# Build production
npm run build

# Production
npm start
```

Ouvrir [http://localhost:3000](http://localhost:3000) — le site redirige vers `/fr` par défaut.

## 📁 Structure

```
src/
├── app/
│   ├── [locale]/          # Routes avec locale (fr, en)
│   │   ├── page.tsx       # Accueil
│   │   ├── produits/      # Nos champignons
│   │   └── contact/       # Contact
│   ├── layout.tsx
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── Header.tsx
│   └── Footer.tsx
├── i18n/
│   ├── routing.ts
│   ├── request.ts
│   └── navigation.ts
└── middleware.ts
```

## 📝 Configuration

- **Contact** : Remplacer les coordonnées fictives dans `contact/page.tsx` et les messages
- **Formulaire** : Connecter à une API (Resend, SendGrid, etc.) dans `handleSubmit`
- **Images** : Remplacer les URLs Unsplash par les vraies photos du client
- **Textes** : Mettre à jour `messages/fr.json` et `messages/en.json` avec le contenu client

## 🔗 URLs

- `https://jurachampi.fr/fr` — Accueil
- `https://jurachampi.fr/en` — Home (EN)
- `https://jurachampi.fr/fr/produits` — Nos champignons
- `https://jurachampi.fr/fr/contact` — Contact
