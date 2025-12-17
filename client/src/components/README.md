# Dealify - Gewijzigde Files

Deze map bevat alle gewijzigde component files voor de Dealify website (v3.0).

## Instructies voor uploaden in VS Code

### Stap 1: Kopieer de files naar je project
```bash
# Navigeer naar je dealify project folder
cd /pad/naar/dealify

# Kopieer alle component files
cp -r /pad/naar/dealify-modified-files/components/* client/src/components/

# Kopieer de Home.tsx
cp /pad/naar/dealify-modified-files/Home.tsx client/src/pages/
```

### Stap 2: Start je dev server
```bash
pnpm install  # Als je nog dependencies mist
pnpm run dev
```

### Stap 3: Controleer in browser
Open http://localhost:3000 en controleer of alles correct wordt weergegeven.

## Gewijzigde Files

### Components (client/src/components/)
- **Navigation.tsx** - CTA button linkt nu naar Typeform
- **HeroSection.tsx** - Nieuwe headline "Grip op je sales. Rust in je hoofd."
- **FramingStatement.tsx** - NIEUW: "Dit is geen gebrek aan data..."
- **ProblemSection.tsx** - Herschreven met concrete daily work impacts
- **RecognitionSection.tsx** - NIEUW: 5 pain points met recognition
- **SolutionSection.tsx** - Vereenvoudigd naar core positioning
- **HowItWorksSection.tsx** - Herschreven als "Hoe Dealify grip terugbrengt"
- **ValueSection.tsx** - Herschreven als "Effect voor Management"
- **USPSection.tsx** - Vereenvoudigd naar 2 key features
- **TargetAudienceSection.tsx** - Herschreven met filtering language
- **CTASection.tsx** - Nieuwe headline "Hoe betrouwbaar is jouw pipeline echt?"

### Pages (client/src/pages/)
- **Home.tsx** - Nieuwe sectie volgorde

## Typeform Integratie

Alle CTA buttons linken naar:
```
https://cdmq5sde51i.typeform.com/to/fRs6PC5e?typeform-source=dealifai.netlify.app
```

Dit kan je aanpassen in:
- Navigation.tsx (regel 34)
- HeroSection.tsx (regel 32)
- CTASection.tsx (regel 28)

## Vragen?

Als je vragen hebt over de wijzigingen, check de comments in de files of stuur een bericht.
