import type { Meta, StoryObj } from '@storybook/react-native';
import { ScoreGameCard } from '../../src';

const meta = {
  title: 'Tablescore/Datos/Tarjeta de partida',
  component: ScoreGameCard,
  args: { title: 'Noche de dados', detail: '4 jugadores · Ronda 4 de 8', score: 20 },
} satisfies Meta<typeof ScoreGameCard>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Estandar: Story = {};
export const Destacada: Story = { args: { featured: true } };
export const Terminada: Story = { args: { title: 'Viernes de rol', detail: '5 jugadores · Partida finalizada', score: 86, label: 'RESULTADO FINAL' } };
