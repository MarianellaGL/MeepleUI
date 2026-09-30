import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-native';
import { ScoreSwitch } from '../../src';

const meta = {
  title: 'MeepleUI/Formularios/Switch',
  component: ScoreSwitch,
  args: { label: 'Sonido de partida', value: true },
} satisfies Meta<typeof ScoreSwitch>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Interactivo: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value);
    return <ScoreSwitch {...args} value={value} onChange={setValue} />;
  },
};
export const Apagado: Story = { args: { value: false } };
export const Deshabilitado: Story = { args: { disabled: true } };
