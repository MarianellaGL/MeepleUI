import type { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';
import { MeepleChoiceMarker } from '../../src';

const meta = {
  title: 'MeepleUI/Selección/Marcador',
  component: MeepleChoiceMarker,
} satisfies Meta<typeof MeepleChoiceMarker>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Libre: Story = { args: { selected: false } };
export const Elegida: Story = { args: { selected: true } };
export const Ambas: Story = { render: () => <View style={{ flexDirection: 'row', gap: 24, padding: 20 }}><MeepleChoiceMarker /><MeepleChoiceMarker selected /></View> };
