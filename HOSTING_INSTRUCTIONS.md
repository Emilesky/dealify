# Dealify Website - Hosting & Deployment Instructies

## 📦 Wat zit in deze ZIP?

De volledige Dealify website met:
- React 19 + Tailwind CSS 4 frontend
- Alle componenten (Hero, Problem, Solution, USP, Value, How It Works, Contact)
- Responsive design
- Contact form
- Modern Minimalist design met deep blue accents

---

## 🚀 Optie 1: Vercel (Aanbevolen - Eenvoudig)

### Voorbereiding
1. **GitHub Account**: Maak een gratis account op [github.com](https://github.com)
2. **Vercel Account**: Maak een gratis account op [vercel.com](https://vercel.com)

### Stappen

#### Stap 1: Upload naar GitHub
```bash
# 1. Pak de ZIP uit
unzip dealify-website.zip
cd dealify

# 2. Initialiseer Git
git init
git add .
git commit -m "Initial commit: Dealify website"

# 3. Maak een nieuwe repository op GitHub.com
# Geef het de naam "dealify-website"

# 4. Push naar GitHub
git remote add origin https://github.com/JOUW_USERNAME/dealify-website.git
git branch -M main
git push -u origin main
```

#### Stap 2: Deploy op Vercel
1. Ga naar [vercel.com/new](https://vercel.com/new)
2. Klik "Import Git Repository"
3. Selecteer je `dealify-website` repository
4. Klik "Import"
5. Vercel detecteert automatisch dat het een Vite project is
6. Klik "Deploy"
7. Wacht 2-3 minuten... Done! 🎉

**Je site is nu live op:** `https://dealify-website.vercel.app`

#### Stap 3: Custom Domein Koppelen (Optioneel)
1. In Vercel Dashboard → Settings → Domains
2. Voeg je domein in (bijv. dealify.nl)
3. Volg de DNS-instructies van je domeinregistrar
4. Wacht 24 uur op DNS propagatie

---

## 🔄 Updates Maken (Vercel Workflow)

### Lokaal wijzigingen maken:
```bash
cd dealify
# Maak je wijzigingen in de code
```

### Testen lokaal:
```bash
pnpm install
pnpm run dev
# Open http://localhost:3000 in je browser
```

### Naar Vercel pushen:
```bash
git add .
git commit -m "Update: beschrijving van wijziging"
git push origin main
```

Vercel detecteert automatisch de push en deployed je wijzigingen. Binnen 1-2 minuten zijn ze live!

---

## 🌐 Optie 2: Netlify (Ook Eenvoudig)

### Stappen
1. Pak de ZIP uit: `unzip dealify-website.zip`
2. Ga naar [netlify.com](https://netlify.com)
3. Klik "Add new site" → "Deploy manually"
4. Sleep de `dealify` folder naar het upload veld
5. Netlify bouwt en deployed automatisch
6. Je site is live! 🎉

**Voordeel:** Geen Git nodig, direct uploaden

---

## 🚀 Optie 3: Railway (Met Meer Controle)

### Voorbereiding
1. GitHub repository aanmaken (zie Vercel stap 1)
2. Account op [railway.app](https://railway.app)

### Deploy
1. Log in op Railway
2. Klik "New Project" → "Deploy from GitHub"
3. Selecteer je repository
4. Railway detecteert Vite en bouwt automatisch
5. Je site is live!

---

## 📋 Checklist voor Go-Live

- [ ] Website lokaal getest (pnpm run dev)
- [ ] Contact form werkt
- [ ] Alle links werken
- [ ] Mobiel responsive getest
- [ ] Domein geregistreerd (optioneel)
- [ ] DNS geconfigureerd (optioneel)
- [ ] Analytics ingesteld (optioneel)

---

## 🛠️ Lokale Setup (Voor Ontwikkeling)

### Vereisten
- Node.js 18+ ([nodejs.org](https://nodejs.org))
- pnpm (`npm install -g pnpm`)

### Installatie
```bash
# Pak ZIP uit
unzip dealify-website.zip
cd dealify

# Installeer dependencies
pnpm install

# Start dev server
pnpm run dev

# Open http://localhost:3000
```

### Beschikbare Commands
```bash
pnpm run dev      # Start development server
pnpm run build    # Build voor production
pnpm run preview  # Preview production build
pnpm run check    # TypeScript check
pnpm run format   # Format code
```

---

## 📝 Contact Form Instellen

De contact form is momenteel een mock (toont success message).

### Om echte emails te ontvangen:
1. **Optie A - Formspree** (Gratis, eenvoudig)
   - Ga naar [formspree.io](https://formspree.io)
   - Maak account aan
   - Voeg je email in
   - Update de form action in `client/src/pages/Contact.tsx`

2. **Optie B - EmailJS** (Gratis, JavaScript)
   - Ga naar [emailjs.com](https://emailjs.com)
   - Maak account aan
   - Volg hun React setup
   - Integreer in Contact.tsx

3. **Optie C - Backend API** (Geavanceerd)
   - Bouw een backend met Node.js/Express
   - Integreer met je email service

---

## 🎨 Website Aanpassen

### Kleuren Wijzigen
Edit `client/src/index.css` (zoek naar `--primary:` en `--secondary:`)

### Tekst Wijzigen
Edit de component files in `client/src/components/` en `client/src/pages/`

### Afbeeldingen Wijzigen
Plaats nieuwe afbeeldingen in `client/public/images/` en update de src in de components

### Fonts Wijzigen
Edit de Google Fonts link in `client/index.html`

---

## 🔒 Veiligheid

- Plaats nooit API keys in je code
- Gebruik environment variables voor secrets
- Vercel/Netlify hebben ingebouwde SSL (HTTPS)
- Contact form data is momenteel niet opgeslagen

---

## 📊 Analytics (Optioneel)

De site is voorbereid voor Umami Analytics:
1. Maak account op [umami.is](https://umami.is)
2. Voeg je website toe
3. Copy je website ID
4. Update in Vercel/Netlify environment variables

---

## ❓ Veelgestelde Vragen

**V: Hoe lang duurt deployment?**
A: 1-3 minuten voor eerste build, updates meestal <1 minuut

**V: Kan ik de site offline bewerken?**
A: Ja, lokaal met `pnpm run dev`

**V: Hoe voeg ik een blog toe?**
A: Maak een nieuwe page in `client/src/pages/Blog.tsx` en voeg route toe in `App.tsx`

**V: Kan ik de database toevoegen?**
A: Dit is een static site. Voor database, contacteer support voor upgrade naar web-db-user

**V: Hoe verwijder ik de "Preview mode" banner?**
A: Die verschijnt alleen lokaal. Op production is die weg.

---

## 📞 Support

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Netlify Docs**: [docs.netlify.com](https://docs.netlify.com)
- **Vite Docs**: [vitejs.dev](https://vitejs.dev)
- **React Docs**: [react.dev](https://react.dev)

---

## 🎯 Volgende Stappen

1. **Deploy** op Vercel/Netlify
2. **Test** op production
3. **Voeg custom domein toe**
4. **Integreer contact form** met email service
5. **Monitor** analytics
6. **Update** content naar behoefte

---

**Veel succes met je Dealify website! 🚀**
