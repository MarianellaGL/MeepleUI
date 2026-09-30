import type { Preview } from '@storybook/react-native';
import { View } from 'react-native';

import { MeepleUIProvider, tokens } from '../src';

const preview: Preview = {
  decorators: [
    (Story) => (
      <MeepleUIProvider>
        <View style={{ flex: 1, backgroundColor: tokens.color.canvas, padding: 20, justifyContent: 'center' }}>
          <Story />
        </View>
      </MeepleUIProvider>
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
