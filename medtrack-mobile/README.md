# MedTrack Mobile

Base inicial de React Native sobre Expo, usando Metro como bundler.

## Estructura

```text
medtrack-mobile/
├── App.tsx
├── app.json
├── babel.config.js
├── metro.config.js
├── package.json
├── tsconfig.json
└── src/
    ├── components/
    │   └── brand/
    │       └── medtrack-logo.tsx
    ├── screens/
    │   └── splash-screen.tsx
    └── theme/
        └── colors.ts
```

## Ejecutar con Metro

Usa Node 22 LTS.

```bash
source ~/.nvm/nvm.sh
nvm use
cd medtrack-mobile
npm install
npm start
```

`npm start` levanta Metro.

## Abrir la app

Para levantar una build nativa de desarrollo:

```bash
cd medtrack-mobile
npm run android
```

o

```bash
cd medtrack-mobile
npm run ios
```
