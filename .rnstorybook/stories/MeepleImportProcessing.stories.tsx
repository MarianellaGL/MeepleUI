import type { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';
import { MeepleImportProcessing } from '../../src';

const meta = {
  title: 'MeepleUI/Estados/Procesando importación',
  component: MeepleImportProcessing,
  args: { source: 'pdf' },
} satisfies Meta<typeof MeepleImportProcessing>;
export default meta;
type Story = StoryObj<typeof meta>;

export const PDF: Story = {};
export const Foto: Story = { args: { source: 'photo' } };
export const Melodice: Story = { args: { source: 'melodice' } };
export const Todas: Story = { render: () => <View style={{ gap: 12, padding: 20 }}>
  <MeepleImportProcessing source="pdf" />
  <MeepleImportProcessing source="photo" />
  <MeepleImportProcessing source="melodice" />
</View> };
