import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-native';
import { ScoreDropdown } from '../../src';

const options = [
  { label: 'd6 · Seis caras', value: 'd6' },
  { label: 'd8 · Ocho caras', value: 'd8' },
  { label: 'd20 · Icosaedro', value: 'd20' },
];
const meta = {
  title: 'Tablescore/Formularios/Dropdown',
  component: ScoreDropdown,
  args: { label: 'Tipo de dado', value: 'd20', options },
} satisfies Meta<typeof ScoreDropdown>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Interactivo: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value);
    return <ScoreDropdown {...args} value={value} onChange={setValue} />;
  },
};
export const Deshabilitado: Story = { args: { disabled: true } };
