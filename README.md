# Challenge BCI

Aplicación full stack con:
- Backend BFF en NestJS (`bff/`)
- Frontend en Angular (`frontend/`)
- API legacy en Express/TypeScript (`src/`) para referencia

## Requisitos

- Node.js `v20.20.2` (recomendado usar `nvm`)
- npm `>=10`
- Git

Este repositorio incluye `.nvmrc` en la raíz y también en `frontend/` para evitar usar una versión vieja de Node por accidente.

## Clonar el proyecto

```bash
git clone <URL_DEL_REPO>
cd challenge-bci
```

## Configurar Node correctamente

Desde la raíz del repo:

```bash
nvm use
node -v
npm -v
```

Si `nvm use` falla porque no tienes esa versión instalada:

```bash
nvm install 20.20.2
nvm use
```

## Instalación de dependencias

Instala dependencias en backend y frontend por separado:

```bash
cd bff
npm install

cd ../frontend
npm install
```

## Levantar la aplicación

### 1) Backend (BFF)

En una terminal nueva:

```bash
cd challenge-bci/bff
nvm use
npm run start:dev
```

Backend disponible en:
- `http://localhost:3001/`
- `http://localhost:3001/api/v1/elements`

### 2) Frontend (Angular)

En otra terminal:

```bash
cd challenge-bci/frontend
nvm use
npm run start
```

Frontend disponible en:
- `http://localhost:4200/`

## Verificación rápida

Con ambos servicios arriba, prueba:

```bash
curl http://localhost:3001/api/v1/elements
```

Debes recibir un JSON con la lista de elementos.

## Problemas comunes

### 1) `sh: nest: command not found` o errores en `npm install`

Causa: no se instalaron dependencias o estás usando una versión vieja de Node.

Solución:

```bash
cd bff
nvm use
rm -rf node_modules
npm install
```

### 2) `SyntaxError: Unexpected token ?` al ejecutar `ng serve`

Causa: Angular se está ejecutando con Node antiguo (ej. v10).

Solución:

```bash
cd frontend
nvm use
npm install
npm run start
```

### 3) `EADDRINUSE: address already in use`

Causa: ya hay otro proceso usando el puerto (`3001` backend o `4200` frontend).

Ver qué proceso usa el puerto:

```bash
lsof -nP -iTCP:3001 -sTCP:LISTEN
lsof -nP -iTCP:4200 -sTCP:LISTEN
```

Liberar puerto (si corresponde):

```bash
kill <PID>
```

### 4) Front muestra `No se pudieron obtener los elementos del servidor`

Checklist:
- Backend corriendo en `http://localhost:3001`
- Frontend corriendo en `http://localhost:4200`
- Hacer hard refresh en navegador: `Cmd + Shift + R`

## Scripts útiles

### Backend (`bff/`)

```bash
npm run start:dev
npm run build
npm run test
```

### Frontend (`frontend/`)

```bash
npm run start
npm run build
npm run test
```
