import type { Meta, StoryObj } from '@storybook/react-native';
import { MeepleGameTile } from '../../src';

const meta = {
  title: 'MeepleUI/Juegos/Fila con carátula',
  component: MeepleGameTile,
  args: { title: 'Everdell', detail: '1–4 jugadores · 40–80 min' },
} satisfies Meta<typeof MeepleGameTile>;
export default meta;
type Story = StoryObj<typeof meta>;

export const SinFoto: Story = {};
export const ConFoto: Story = { args: { imageUrl: 'https://picsum.photos/seed/meepleui-cover/200/260' } };
export const Seleccionable: Story = { args: { onPress: () => {} } };
