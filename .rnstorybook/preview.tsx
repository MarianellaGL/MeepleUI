import type { Preview } from '@storybook/react-native';
import { View } from 'react-native';

import { ScoreUIProvider, tokens } from '../src';

const preview: Preview = {
  decorators: [
    (Story) => (
      <ScoreUIProvider>
        <View style={{ flex: 1, backgroundColor: tokens.color.canvas, padding: 20, justifyContent: 'center' }}>
          <Story />
        </View>
      </ScoreUIProvider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
