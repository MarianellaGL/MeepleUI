import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-native';
import { ScoreBottomNav, type ScoreTab } from '../../src';

const meta = {
  title: 'MeepleUI/Navegación/Barra inferior',
  component: ScoreBottomNav,
  args: { active: 'home' as ScoreTab },
} satisfies Meta<typeof ScoreBottomNav>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Interactiva: Story = {
  render: (args) => {
    const [active, setActive] = useState<ScoreTab>(args.active);
    return <ScoreBottomNav {...args} active={active} onSelect={setActive} />;
  },
};
export const Puntuar: Story = { args: { active: 'score' } };
export const NuevaPartida: Story = { args: { active: 'new-game' } };
