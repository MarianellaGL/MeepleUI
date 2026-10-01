# MeepleUI

Biblioteca móvil de MeepVP, construida con React Native Paper y documentada en React Native Storybook. Los colores y componentes siguen el [design system de Figma](https://www.figma.com/design/wqZypq5EqdDo3KVGi0oxbE).

## Ver Storybook en el teléfono

```bash
pnpm install
pnpm storybook --lan
```

Abrí **Expo Go** en un teléfono conectado a la misma red y escaneá el QR que muestra la terminal. `pnpm storybook:ios` y `pnpm storybook:android` lo abren en un simulador disponible. Storybook usa el puerto 8083 para convivir con la app móvil, que puede estar en el 8081.

Para abrir la muestra de componentes sin Storybook, ejecutá `pnpm start`.

## Storybook web, Vercel y Chromatic

El Storybook web usa las mismas stories que la versión móvil y genera un sitio estático:

```bash
pnpm storybook:web
pnpm build:storybook:web
```

Para publicarlo en **Vercel**, importá este repositorio desde GitHub y elegí el preset **Other**. `vercel.json` ya define `pnpm build:storybook:web` como build y `dist` como directorio de salida. No requiere variables de entorno.

Para publicarlo en **Chromatic**, configurá `CHROMATIC_PROJECT_TOKEN` como variable de entorno local o secreto de CI y ejecutá:

```bash
pnpm chromatic
```

No incluyas el token en el comando, en `package.json` ni en Git. Chromatic usa `build-storybook`, que apunta al build web de este repositorio.

## Preparar el paquete npm

El nuevo paquete se llama `@decodadev02/meepleui`. La app móvil lo consume desde `package-dist/` durante el desarrollo local; todavía requiere publicación para instalaciones independientes. La versión y las dependencias públicas se editan en `package/package.json`; el build genera `package-dist/` y no modifica la aplicación Expo del repositorio.

```bash
pnpm build:package
pnpm --dir package-dist pack --pack-destination ../package-artifacts
```

Revisá el contenido del `.tgz` en `package-artifacts/`. Para publicarlo desde tu cuenta npm `decodadev02`:

Si guardaste `PUBLIC_NPM_ACCESS_TOKEN` en un `.env` local, publicalo con:

```bash
pnpm publish:package
```

El script carga `.env` solo para ese proceso y pasa el token a pnpm como variable de entorno limitada a `registry.npmjs.org`; `.env` está ignorado por Git. Si preferís iniciar sesión de forma interactiva, también podés usar `pnpm login` y `pnpm --dir package-dist publish --access public --no-git-checks`.

La publicación puede pedir 2FA. Para la siguiente versión, incrementá `version` en `package/package.json`, volvé a ejecutar `pnpm build:package` y repetí el publish. El paquete apunta a Expo SDK 57 y React Native 0.86.

### Publicar con GitHub Actions

El workflow [`.github/workflows/publish-npm.yml`](.github/workflows/publish-npm.yml) publicará `@decodadev02/meepleui` al subir un tag `vX.Y.Z`, una vez configurado Trusted Publishing para el paquete nuevo. Instala con pnpm, ejecuta lint y typecheck, construye `package-dist/` y comprueba que el tag coincida con `package/package.json`. La publicación usa la autenticación OIDC de npm, sin token en los secrets de GitHub.

En la configuración de **Trusted publishing** de `@decodadev02/meepleui`, agregá GitHub Actions con estos valores:

- Usuario u organización de GitHub: `MarianellaGL`
- Repositorio: `MeepleUI`
- Archivo del workflow: `publish-npm.yml`
- Acción permitida: `npm publish` (publicación directa)

Para publicar una versión nueva, actualizá `package/package.json` con una versión que aún no esté publicada, hacé commit y subí un tag con la misma versión:

```bash
git tag v0.1.2
git push origin v0.1.2
```

Usá la versión real del paquete en lugar de `0.1.2`. GitHub Actions publica el paquete de ese commit; no crea ni modifica la versión automáticamente.

## Componentes

El catálogo incluye el logo de MeepVP, los 11 íconos de acción y las 10 insignias de nivel del archivo de flujos de Figma, avatar, fila de juego con carátula, botón, badge semántico, campo de texto, checkbox, switch, dropdown, tarjeta de partida, control de puntos, navegación inferior, skeleton y calendario. También incluye estados de asistencia para carga, revisión y error, una vista previa de campos de puntuación y un control para desplegar opciones secundarias sin llenar la pantalla de botones. Las stories están en `.rnstorybook/stories`; los componentes y tokens reutilizables están en `src`.

Botón, navegación inferior, control de puntos y skeleton incluyen animaciones suaves. Respetan la opción de movimiento reducido del dispositivo.

El calendario acepta fechas ISO (`YYYY-MM-DD`). Sus props principales son `selectedDate`, `onSelect`, `initialMonth`, `minDate`, `maxDate`, `markedDates`, `firstDayOfWeek`, `locale` y `accentColor`.

```tsx
import { MeepleUIProvider, ScoreCalendar } from './src';

<MeepleUIProvider>
  <ScoreCalendar
    selectedDate="2026-09-26"
    onSelect={(date) => console.log(date)}
    markedDates={['2026-09-04', '2026-09-26']}
    firstDayOfWeek={1}
  />
</MeepleUIProvider>
```

## Validar

```bash
pnpm lint
pnpm typecheck
pnpm expo install --check
```
