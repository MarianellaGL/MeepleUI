import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Pressable, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

import { tokens } from '../theme';

export type MeepleLibraryEntryProps = {
  title: string;
  detail: string;
  onPress?: () => void;
  disabled?: boolean;
};

/** Fila de navegación para juegos, planillas y fuentes alternativas. */
export function MeepleLibraryEntry({ title, detail, onPress, disabled = false }: MeepleLibraryEntryProps) {
  return <Pressable
    accessibilityRole="button"
    accessibilityLabel={`${title}. ${detail}`}
    accessibilityState={{ disabled: disabled || !onPress }}
    disabled={disabled || !onPress}
    onPress={onPress}
    style={({ pressed }) => [styles.root, pressed && styles.pressed, disabled && styles.disabled]}
  >
    <View style={styles.copy}>
      <Text numberOfLines={1} style={styles.title}>{title}</Text>
      <Text numberOfLines={1} style={styles.detail}>{detail}</Text>
    </View>
    <MaterialCommunityIcons name="chevron-right" size={24} color={tokens.color.gold} />
  </Pressable>;
}

const styles = StyleSheet.create({
  root: { minHeight: 80, width: '100%', backgroundColor: tokens.color.surface, borderColor: tokens.color.border, borderWidth: 1, borderRadius: 16, paddingHorizontal: 19, flexDirection: 'row', alignItems: 'center', gap: 12 },
  copy: { flex: 1, gap: 7 },
  title: { color: tokens.color.primaryText, fontFamily: tokens.font.semibold, fontSize: 15 },
  detail: { color: tokens.color.secondaryText, fontFamily: tokens.font.body, fontSize: 13 },
  pressed: { borderColor: tokens.color.gold, opacity: 0.85 },
  disabled: { opacity: 0.45 },
});
