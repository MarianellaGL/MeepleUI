import type { Meta, StoryObj } from '@storybook/react-native';
import { MeepleDisclosure } from '../../src';

const meta = {
  title: 'MeepleUI/Acciones/Opciones desplegables',
  component: MeepleDisclosure,
  args: { title: 'Otras formas de crear una planilla', expanded: false, onPress: () => {} },
} satisfies Meta<typeof MeepleDisclosure>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Cerrado: Story = {};
export const Abierto: Story = { args: { expanded: true } };
export const ConDetalle: Story = { args: { title: 'Dudas sobre las reglas', detail: '12 conversaciones en BGG' } };
