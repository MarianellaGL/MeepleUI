import type { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';
import { ScoreBadge } from '../../src';

const meta = {
  title: 'Tablescore/Estado/Badge',
  component: ScoreBadge,
  args: { label: 'En curso' },
} satisfies Meta<typeof ScoreBadge>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Neutro: Story = {};
export const Exito: Story = { args: { label: 'Ronda guardada', tone: 'success' } };
export const Aviso: Story = { args: { label: 'Faltan puntos', tone: 'warning' } };
export const Todos: Story = {
  render: () => <View style={{ alignItems: 'flex-start', gap: 12 }}>
    <ScoreBadge label="En curso" />
    <ScoreBadge label="Ronda guardada" tone="success" />
    <ScoreBadge label="Faltan puntos" tone="warning" />
  </View>,
};
