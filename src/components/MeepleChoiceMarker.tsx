import { StyleSheet, View } from 'react-native';

import { tokens } from '../theme';

export type MeepleChoiceMarkerProps = { selected?: boolean };

/** Indicador para una sola opción elegida dentro de una fila interactiva. */
export function MeepleChoiceMarker({ selected = false }: MeepleChoiceMarkerProps) {
  return <View accessible={false} style={[styles.ring, selected && styles.selected]}>{selected && <View style={styles.dot} />}</View>;
}

const styles = StyleSheet.create({
  ring: { width: 28, height: 28, borderRadius: 14, borderWidth: 2, borderColor: tokens.color.border, backgroundColor: tokens.color.elevated, alignItems: 'center', justifyContent: 'center' },
  selected: { borderColor: tokens.color.gold, backgroundColor: tokens.color.brand },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: tokens.color.surface },
});
