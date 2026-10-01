import type { Meta, StoryObj } from '@storybook/react-native';
import { ScoreTextField } from '../../src';

const meta = {
  title: 'MeepleUI/Formularios/Campo de texto',
  component: ScoreTextField,
  args: { label: 'Nombre de la partida', value: '', placeholder: 'Noche de dados' },
} satisfies Meta<typeof ScoreTextField>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Vacio: Story = {};
export const Completo: Story = { args: { value: 'Noche de dados', helperText: 'Podés cambiarlo después' } };
export const Error: Story = { args: { value: '', errorText: 'Escribí un nombre para continuar' } };
export const Deshabilitado: Story = { args: { value: 'Partida guardada', disabled: true } };
export const Vinetas: Story = { args: { label: 'Fragmentos sobre puntuación', value: '• Cada moneda vale 1 punto.\n• Cada edificio vale los puntos indicados.', multiline: true, numberOfLines: 5, helperText: 'Una regla por línea. Podés editar el texto antes de pedir una propuesta.' } };
