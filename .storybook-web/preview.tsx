import type { Preview } from '@storybook/react-native-web-vite';
import { View } from 'react-native';

import { ScoreUIProvider, tokens } from '../src';

const preview: Preview = {
  decorators: [
    (Story) => (
      <ScoreUIProvider>
        <View style={{ minHeight: 800, backgroundColor: tokens.color.canvas, padding: 24, alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ width: '100%', maxWidth: 420 }}><Story /></View>
        </View>
      </ScoreUIProvider>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
    backgrounds: { default: 'dark', values: [{ name: 'dark', value: tokens.color.canvas }] },
  },
};

export default preview;
