import type { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';
import { MeepleSourceOption } from '../../src';

const meta = {
  title: 'MeepleUI/Búsqueda/Fuente alternativa',
  component: MeepleSourceOption,
  args: { source: 'pdf', onPress: () => {} },
} satisfies Meta<typeof MeepleSourceOption>;
export default meta;
type Story = StoryObj<typeof meta>;

export const PDF: Story = {};
export const Foto: Story = { args: { source: 'photo' } };
export const Manual: Story = { args: { source: 'manual' } };
export const Todas: Story = { render: () => <View style={{ gap: 12, padding: 20 }}>
  <MeepleSourceOption source="pdf" onPress={() => {}} />
  <MeepleSourceOption source="photo" onPress={() => {}} />
  <MeepleSourceOption source="manual" onPress={() => {}} />
</View> };
