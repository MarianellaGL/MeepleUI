import type { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';
import { MeepleLibraryEntry } from '../../src';

const meta = {
  title: 'MeepleUI/Biblioteca/Acceso',
  component: MeepleLibraryEntry,
  args: { title: 'Mis juegos', detail: '3 juegos en tu colección', onPress: () => {} },
} satisfies Meta<typeof MeepleLibraryEntry>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Juegos: Story = {};
export const Planillas: Story = { args: { title: 'Mis planillas', detail: '2 planillas guardadas' } };
export const Buscar: Story = { args: { title: 'Buscar un juego', detail: 'Tu colección y otras fuentes' } };
export const Todas: Story = { render: () => <View style={{ gap: 12, padding: 20 }}>
  <MeepleLibraryEntry title="Mis juegos" detail="3 juegos en tu colección" onPress={() => {}} />
  <MeepleLibraryEntry title="Mis planillas" detail="2 planillas guardadas" onPress={() => {}} />
  <MeepleLibraryEntry title="Buscar un juego" detail="Tu colección y otras fuentes" onPress={() => {}} />
  <MeepleLibraryEntry title="Crear una planilla" detail="Prepará una planilla para jugar" onPress={() => {}} />
</View> };
