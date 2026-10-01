import type { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';
import { MeepleAssistStatus } from '../../src';

const meta = {
  title: 'MeepleUI/Estado/Asistencia',
  component: MeepleAssistStatus,
  args: { title: 'Leyendo el reglamento', description: 'Buscamos reglas de puntuación en el texto extraído.', kind: 'working' },
} satisfies Meta<typeof MeepleAssistStatus>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Cargando: Story = {};
export const PropuestaLista: Story = { args: { kind: 'ready', title: 'Propuesta asistida por IA', description: 'Revisá los campos y puntos antes de guardar la planilla.' } };
export const RevisionManual: Story = { args: { kind: 'manual', title: 'Texto listo para revisión', description: 'No encontramos una estructura confiable. Podés pedir una propuesta con IA o crearla manualmente.' } };
export const Error: Story = { args: { kind: 'error', title: 'No pudimos generar la propuesta', description: 'Reintentá o continuá con la planilla manual.' } };
export const Todos: Story = { render: () => <View style={{ gap: 12 }}>
  <MeepleAssistStatus kind="working" title="Leyendo el reglamento" description="Buscamos reglas de puntuación en el texto extraído." />
  <MeepleAssistStatus kind="ready" title="Propuesta asistida por IA" description="Revisá los campos y puntos antes de guardar." />
  <MeepleAssistStatus kind="manual" title="Texto listo para revisión" description="Podés pedir una propuesta con IA." />
  <MeepleAssistStatus kind="error" title="No pudimos generar la propuesta" description="Reintentá o continuá manualmente." />
</View> };
