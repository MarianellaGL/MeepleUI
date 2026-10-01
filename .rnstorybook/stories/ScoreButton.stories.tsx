import type { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';
import { ScoreButton } from '../../src';

const meta = {
  title: 'MeepleUI/Acciones/Botón',
  component: ScoreButton,
  args: { label: 'Nueva partida' },
} satisfies Meta<typeof ScoreButton>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Principal: Story = {};
export const Secundario: Story = { args: { label: 'Ver historial', variant: 'secondary' } };
export const Terciario: Story = { args: { label: 'Leer texto extraído', variant: 'tertiary' } };
export const Peligro: Story = { args: { label: 'Finalizar partida', variant: 'danger' } };
export const Deshabilitado: Story = { args: { label: 'Guardar ronda', disabled: true } };
export const ProcesandoIA: Story = { args: { label: 'Proponer plantilla editable con IA', icon: 'auto-fix', loading: true, disabled: true } };
export const Todos: Story = {
  render: () => <View style={{ gap: 12 }}>
    <ScoreButton label="Nueva partida" />
    <ScoreButton label="Ver historial" variant="secondary" />
    <ScoreButton label="Leer texto extraído" variant="tertiary" />
    <ScoreButton label="Finalizar partida" variant="danger" />
    <ScoreButton label="Guardar ronda" disabled />
    <ScoreButton label="Proponer plantilla editable con IA" icon="auto-fix" loading disabled />
  </View>,
};
