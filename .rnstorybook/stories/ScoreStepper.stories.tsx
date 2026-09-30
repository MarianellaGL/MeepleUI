import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-native';
import { ScoreStepper } from '../../src';

const meta = {
  title: 'MeepleUI/Puntuar/Control de puntos',
  component: ScoreStepper,
  args: { player: 'Mariana', detail: 'Líder de la mesa', value: 18 },
} satisfies Meta<typeof ScoreStepper>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Interactivo: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value);
    return <ScoreStepper {...args} value={value} onChange={setValue} />;
  },
};
export const Cero: Story = { args: { value: 0, detail: 'Todavía sin puntos' } };
export const Deshabilitado: Story = { args: { disabled: true } };
