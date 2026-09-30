import type { Meta, StoryObj } from '@storybook/react-native';
import { MeepleLogo } from '../../src';

const meta = {
  title: 'MeepleUI/Identidad/Logo',
  component: MeepleLogo,
  args: { size: 128 },
} satisfies Meta<typeof MeepleLogo>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Principal: Story = {};
export const Compacto: Story = { args: { size: 48 } };
