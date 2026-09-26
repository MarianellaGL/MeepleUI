# scoreUI

Biblioteca móvil de Tablescore, construida con React Native Paper y documentada en React Native Storybook. Los colores y componentes siguen el [diseño de Figma](https://www.figma.com/design/wqZypq5EqdDo3KVGi0oxbE?node-id=14-7).

## Ver Storybook en el teléfono

```bash
pnpm install
pnpm storybook --lan
```

Abrí **Expo Go** en un teléfono conectado a la misma red y escaneá el QR que muestra la terminal. `pnpm storybook:ios` y `pnpm storybook:android` lo abren en un simulador disponible. Storybook usa el puerto 8083 para convivir con la app móvil, que puede estar en el 8081.

Para abrir la muestra de componentes sin Storybook, ejecutá `pnpm start`.

## Componentes

El catálogo incluye botón, badge semántico, campo de texto, checkbox, switch, dropdown, tarjeta de partida, control de puntos, navegación inferior, skeleton y calendario. Las stories están en `.rnstorybook/stories`; los componentes y tokens reutilizables están en `src`.

El calendario acepta fechas ISO (`YYYY-MM-DD`). Sus props principales son `selectedDate`, `onSelect`, `initialMonth`, `minDate`, `maxDate`, `markedDates`, `firstDayOfWeek`, `locale` y `accentColor`.

```tsx
import { ScoreCalendar, ScoreUIProvider } from './src';

<ScoreUIProvider>
  <ScoreCalendar
    selectedDate="2026-09-26"
    onSelect={(date) => console.log(date)}
    markedDates={['2026-09-04', '2026-09-26']}
    firstDayOfWeek={1}
  />
</ScoreUIProvider>
```

## Validar

```bash
pnpm lint
pnpm typecheck
pnpm expo install --check
```
