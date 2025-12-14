# Dealify Website - Quick Start Guide

## 🚀 Snelste Route naar Live Website (5 minuten)

### Stap 1: Pak de ZIP uit
```bash
unzip dealify-website.zip
cd dealify
```

### Stap 2: Maak GitHub Repository
1. Ga naar [github.com/new](https://github.com/new)
2. Naam: `dealify-website`
3. Klik "Create repository"
4. Volg de instructies:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/JOUW_USERNAME/dealify-website.git
git branch -M main
git push -u origin main
```

### Stap 3: Deploy op Vercel
1. Ga naar [vercel.com/new](https://vercel.com/new)
2. Klik "Import Git Repository"
3. Selecteer je `dealify-website` repo
4. Klik "Deploy"
5. Wacht 2-3 minuten

**KLAAR! Je site is live! 🎉**

Je krijgt een URL zoals: `https://dealify-website.vercel.app`

---

## 📝 Wijzigingen Maken

### Lokaal testen:
```bash
cd dealify
pnpm install
pnpm run dev
# Open http://localhost:3000
```

### Live zetten:
```bash
git add .
git commit -m "Update: beschrijving"
git push origin main
# Vercel deploy automatisch binnen 1-2 minuten
```

---

## 🌍 Custom Domein Toevoegen

1. Registreer domein (bijv. dealify.nl) bij GoDaddy, Namecheap, etc.
2. In Vercel Dashboard → Settings → Domains
3. Voeg je domein in
4. Update DNS records (Vercel geeft instructies)
5. Wacht 24 uur

---

## 📞 Hulp Nodig?

Zie `HOSTING_INSTRUCTIONS.md` voor gedetailleerde stappen en meer opties.

---

**Je website is klaar. Veel succes! 🚀**
