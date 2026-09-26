# @marianellagl/scoreui

Componentes de Tablescore para aplicaciones Expo y React Native con React Native Paper.

## Instalación

En una aplicación Expo SDK 57:

```bash
pnpm add @marianellagl/scoreui react-native-paper @expo/vector-icons
pnpm expo install expo-font
```

## Uso

```tsx
import { ScoreButton, ScoreUIProvider } from '@marianellagl/scoreui';

export default function App() {
  return (
    <ScoreUIProvider>
      <ScoreButton label="Nueva partida" onPress={() => {}} />
    </ScoreUIProvider>
  );
}
```

Incluye tokens, tema, botón, badge, inputs, checkbox, switch, dropdown, tarjeta de partida, control de puntos, navegación inferior, skeleton y calendario. El catálogo y las stories están en el [repositorio](https://github.com/MarianellaGL/scoreUI).
