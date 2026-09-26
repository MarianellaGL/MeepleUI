import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-native';
import { ScoreCheckbox } from '../../src';

const meta = {
  title: 'Tablescore/Formularios/Checkbox',
  component: ScoreCheckbox,
  args: { label: 'Guardar jugador para próximas partidas', checked: false },
} satisfies Meta<typeof ScoreCheckbox>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Interactivo: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(args.checked);
    return <ScoreCheckbox {...args} checked={checked} onChange={setChecked} />;
  },
};
export const Marcado: Story = { args: { checked: true } };
export const Deshabilitado: Story = { args: { disabled: true } };
