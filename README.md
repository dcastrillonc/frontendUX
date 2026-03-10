# Proyecto final maquetación frontend

Universidad de los Andes

UX Mejoramiento de la experiencia de usuario

Maquetación frontend de la aplicación web y mobile de alarmas de medicamentos.

## Integrantes
- Daniela Castrillón
- Omar Muñoz

## Web (Angular)

### Requisitos
Instala lo siguiente en tu equipo para iniciar la aplicación web:

1. `Node.js` en una versión compatible con Angular (https://nodejs.org/en/download).
2. `npm` (ya viene con Node).
3. `Angular CLI` (opcional global, recomendado para usar `ng` en consola):
   ```bash
   npm install -g @angular/cli
   ```

Para validar instalación
```bash
node -v
npm -v
ng version
```

Si ves este warning:
`Warning: The current version of Node (...) is not supported by Angular.`
significa que tu versión de Node no es compatible (por ejemplo, Node 25).

### Cambiar de versión de Node con nvm (recomendado)
```bash
# Instalar y usar Node 22 LTS
nvm install 22
nvm use 22

# Verificar
node -v
```

### Instalación del proyecto
Desde la raíz del repositorio

```bash
cd medtrack-web
npm install
```

### Ejecutar proyecto
```bash
cd medtrack-web
npm start
```

Angular levantará la app normalmente en
`http://localhost:4200/`

## Mobile (React Native)

### Requisitos
Instala lo siguiente en tu equipo para iniciar la aplicación mobile:

1. `Node.js` (https://nodejs.org/en/download).
2. `npm`.
3. Android Studio o Xcode si se va a usar emulador/simulador.

### Instalación del proyecto
Desde la raíz del repositorio

```bash
source ~/.nvm/nvm.sh
nvm use 22
cd medtrack-mobile
npm install
```

### Ejecutar proyecto con Metro
```bash
cd medtrack-mobile
npm start
```

Esto levanta Metro para la app mobile.

En otra terminal:

```bash
cd medtrack-mobile
npm run android
```

o en iOS:

```bash
cd medtrack-mobile
npm run ios
```