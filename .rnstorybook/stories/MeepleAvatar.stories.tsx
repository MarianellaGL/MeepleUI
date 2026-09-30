import type { Meta, StoryObj } from '@storybook/react-native';
import { MeepleAvatar } from '../../src';

const meta = {
  title: 'MeepleUI/Identidad/Avatar',
  component: MeepleAvatar,
  args: { name: 'Mariana' },
} satisfies Meta<typeof MeepleAvatar>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Inicial: Story = {};
export const Editable: Story = { args: { onPress: () => {} } };
export const ConFoto: Story = { args: { imageUrl: 'https://i.pravatar.cc/128?img=47' } };
