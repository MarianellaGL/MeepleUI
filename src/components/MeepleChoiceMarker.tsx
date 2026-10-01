import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';

import { tokens } from '../theme';

export type MeepleChoiceMarkerProps = { selected?: boolean };

/** Indicador para una sola opción elegida dentro de una fila interactiva. */
export function MeepleChoiceMarker({ selected = false }: MeepleChoiceMarkerProps) {
  return <View accessible={false} style={[styles.ring, selected && styles.selected]}><MaterialCommunityIcons name={selected ? 'check' : 'chevron-right'} size={20} color={selected ? tokens.color.canvas : tokens.color.gold} /></View>;
}

const styles = StyleSheet.create({
  ring: { width: 28, height: 28, borderRadius: 14, borderWidth: 1, borderColor: tokens.color.gold, backgroundColor: tokens.color.elevated, alignItems: 'center', justifyContent: 'center' },
  selected: { borderColor: tokens.color.success, backgroundColor: tokens.color.success },
});
