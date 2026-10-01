import type { Meta, StoryObj } from '@storybook/react-native';
import { MeepleScoringPreview } from '../../src';

const meta = {
  title: 'MeepleUI/Planillas/Vista previa de planilla',
  component: MeepleScoringPreview,
  args: {
    gameName: 'Viticulture',
    fields: [{ name: 'Puntos de victoria actuales', kind: 'manual', pointsPerUnit: 0 }],
    notes: ['Propuesta asistida por IA. Comprobá la edición y el total de la pista antes de guardar.'],
  },
} satisfies Meta<typeof MeepleScoringPreview>;
export default meta;
type Story = StoryObj<typeof meta>;

export const PistaDePuntos: Story = {};
export const CategoriasMixtas: Story = { args: {
  gameName: 'Juego de ejemplo',
  fields: [
    { name: 'Objetivos', kind: 'manual', pointsPerUnit: 0 },
    { name: 'Recursos', kind: 'counter', pointsPerUnit: 2 },
    { name: 'Bono único', kind: 'checkbox', pointsPerUnit: 5 },
  ],
  notes: ['Confirmá los valores con el reglamento de tu edición.'],
} };
