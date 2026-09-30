import type { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';
import { Text } from 'react-native-paper';

import { MeepleLevelBadge, type MeepleLevel, tokens } from '../../src';

const levels: { level: MeepleLevel; name: string }[] = [
  { level: 1, name: 'Aprendiz' },
  { level: 2, name: 'Jugón' },
  { level: 3, name: 'Aventurera' },
  { level: 4, name: 'Guardián' },
  { level: 5, name: 'Mercenario' },
  { level: 6, name: 'Druida' },
  { level: 7, name: 'Caballero' },
  { level: 8, name: 'Ganador' },
  { level: 9, name: 'Rey' },
  { level: 10, name: 'Leyenda' },
];

const meta = {
  title: 'MeepleUI/Logros/Insignia de nivel',
  component: MeepleLevelBadge,
  args: { level: 1 },
  argTypes: { level: { control: 'select', options: levels.map(({ level }) => level) } },
} satisfies Meta<typeof MeepleLevelBadge>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Aprendiz: Story = {};
export const Jugon: Story = { args: { level: 2 } };
export const Aventurera: Story = { args: { level: 3 } };
export const Guardian: Story = { args: { level: 4 } };
export const Mercenario: Story = { args: { level: 5 } };
export const Druida: Story = { args: { level: 6 } };
export const Caballero: Story = { args: { level: 7 } };
export const Ganador: Story = { args: { level: 8 } };
export const Rey: Story = { args: { level: 9 } };
export const Leyenda: Story = { args: { level: 10 } };

export const Todos: Story = {
  render: () => (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 16, justifyContent: 'center' }}>
      {levels.map(({ level, name }) => (
        <View key={level} style={{ width: 100, alignItems: 'center', gap: 6 }}>
          <MeepleLevelBadge level={level} />
          <Text style={{ color: tokens.color.secondaryText, fontSize: 11 }}>{level}. {name}</Text>
        </View>
      ))}
    </View>
  ),
};
