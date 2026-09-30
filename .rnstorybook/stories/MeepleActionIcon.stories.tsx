import type { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';
import { Text } from 'react-native-paper';

import { MeepleActionIcon, type MeepleActionIconType, tokens } from '../../src';

const types: MeepleActionIconType[] = ['dice', 'books', 'users', 'calendar', 'score', 'camera', 'pdf', 'trophy', 'shield', 'person', 'spark'];

const meta = {
  title: 'MeepleUI/Iconografía/Íconos de acción',
  component: MeepleActionIcon,
  args: { type: 'dice' },
  argTypes: { type: { control: 'select', options: types } },
} satisfies Meta<typeof MeepleActionIcon>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Dado: Story = {};
export const Biblioteca: Story = { args: { type: 'books' } };
export const Jugadores: Story = { args: { type: 'users' } };
export const Calendario: Story = { args: { type: 'calendar' } };
export const Puntuacion: Story = { args: { type: 'score' } };
export const Camara: Story = { args: { type: 'camera' } };
export const PDF: Story = { args: { type: 'pdf' } };
export const Victoria: Story = { args: { type: 'trophy' } };
export const Proteccion: Story = { args: { type: 'shield' } };
export const Perfil: Story = { args: { type: 'person' } };
export const Logros: Story = { args: { type: 'spark' } };

export const Todos: Story = {
  render: () => (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 16, justifyContent: 'center' }}>
      {types.map((type) => (
        <View key={type} style={{ width: 88, alignItems: 'center', gap: 6 }}>
          <MeepleActionIcon type={type} />
          <Text style={{ color: tokens.color.secondaryText, fontSize: 11 }}>{type}</Text>
        </View>
      ))}
    </View>
  ),
};
