import type { Meta, StoryObj } from '@storybook/react-native';
import { ScoreSkeleton } from '../../src';

const meta = {
  title: 'Tablescore/Estado/Skeleton',
  component: ScoreSkeleton,
  args: { variant: 'text' },
} satisfies Meta<typeof ScoreSkeleton>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Texto: Story = {};
export const Lista: Story = { args: { variant: 'list' } };
export const Tarjeta: Story = { args: { variant: 'card' } };
