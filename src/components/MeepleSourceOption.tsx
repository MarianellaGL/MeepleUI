import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Pressable, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

import { tokens } from '../theme';
import { MeepleChoiceMarker } from './MeepleChoiceMarker';

export type MeepleSource = 'pdf' | 'photo' | 'manual';
export type MeepleSourceOptionProps = {
  source: MeepleSource;
  onPress?: () => void;
  disabled?: boolean;
  selected?: boolean;
};

const content: Record<MeepleSource, { title: string; detail: string; icon: keyof typeof MaterialCommunityIcons.glyphMap }> = {
  pdf: { title: 'Desde un PDF', detail: 'Leemos las reglas y sugerimos campos.', icon: 'file-pdf-box' },
  photo: { title: 'Desde una foto', detail: 'Capturá la tabla de puntos.', icon: 'camera-outline' },
  manual: { title: 'La armo yo', detail: 'Definí los campos a tu manera.', icon: 'table-edit' },
};

/** Elección de fuente con icono semántico y una fila táctil completa. */
export function MeepleSourceOption({ source, onPress, disabled = false, selected = false }: MeepleSourceOptionProps) {
  const { title, detail, icon } = content[source];
  return <Pressable
    accessibilityRole="button"
    accessibilityLabel={`${title}. ${detail}`}
    accessibilityState={{ disabled: disabled || !onPress, selected }}
    disabled={disabled || !onPress}
    onPress={onPress}
    style={({ pressed }) => [styles.root, selected && styles.selected, pressed && styles.pressed, disabled && styles.disabled]}
  >
    <View style={styles.icon}><MaterialCommunityIcons name={icon} size={25} color={tokens.color.gold} /></View>
    <View style={styles.copy}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.detail}>{detail}</Text>
    </View>
    <MeepleChoiceMarker selected={selected} />
  </Pressable>;
}

const styles = StyleSheet.create({
  root: { minHeight: 90, width: '100%', backgroundColor: tokens.color.surface, borderColor: tokens.color.border, borderWidth: 1, borderRadius: 16, paddingHorizontal: 14, flexDirection: 'row', alignItems: 'center', gap: 12 },
  selected: { borderColor: tokens.color.gold },
  pressed: { opacity: 0.82 },
  disabled: { opacity: 0.45 },
  icon: { width: 44, height: 44, borderRadius: 12, backgroundColor: tokens.color.elevated, alignItems: 'center', justifyContent: 'center' },
  copy: { flex: 1, gap: 5 },
  title: { color: tokens.color.primaryText, fontFamily: tokens.font.semibold, fontSize: 15 },
  detail: { color: tokens.color.secondaryText, fontFamily: tokens.font.body, fontSize: 12, lineHeight: 17 },
});
