import type { Meta, StoryObj } from '@storybook/react-native';
import { MeepleUnifiedSearchResult } from '../../src';

const meta = {
  title: 'MeepleUI/Búsqueda/Resultado unificado',
  component: MeepleUnifiedSearchResult,
  args: { title: 'Everdell', edition: '2018 · juego base', sources: ['Mi planilla · lista para jugar', 'Comunidad · 1 planilla', 'Reglamento · juego base'], onPress: () => {} },
} satisfies Meta<typeof MeepleUnifiedSearchResult>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Listo: Story = {};
export const RequiereRevision: Story = { args: { title: 'Viticulture', edition: '2013 · juego base', sources: ['Sin planilla confiable', 'Reglamento disponible', 'Revisá la propuesta antes de guardar'], needsReview: true } };
