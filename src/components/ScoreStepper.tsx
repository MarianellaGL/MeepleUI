import { Pressable, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

import { tokens } from '../theme';

export type ScoreStepperProps = {
  player: string;
  detail?: string;
  value: number;
  onChange?: (value: number) => void;
  min?: number;
  max?: number;
  disabled?: boolean;
};

export function ScoreStepper({ player, detail, value, onChange, min = 0, max = 999, disabled = false }: ScoreStepperProps) {
  const adjust = (delta: number) => onChange?.(Math.max(min, Math.min(max, value + delta)));
  return (
    <View style={[styles.row, disabled && styles.disabled]}>
      <View style={styles.person}>
        <Text style={styles.name}>{player}</Text>
        {detail && <Text style={styles.detail}>{detail}</Text>}
      </View>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={`Restar un punto a ${player}`}
        disabled={disabled || value <= min}
        onPress={() => adjust(-1)}
        style={styles.control}
      ><Text style={styles.symbol}>−</Text></Pressable>
      <Text accessibilityLabel={`${value} puntos`} style={styles.value}>{value}</Text>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={`Sumar un punto a ${player}`}
        disabled={disabled || value >= max}
        onPress={() => adjust(1)}
        style={styles.control}
      ><Text style={styles.symbol}>+</Text></Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { minHeight: 88, backgroundColor: tokens.color.surface, borderRadius: tokens.radius.medium, paddingHorizontal: 14, flexDirection: 'row', alignItems: 'center', gap: 6 },
  disabled: { opacity: 0.45 },
  person: { flex: 1, gap: 4 },
  name: { color: tokens.color.primaryText, fontFamily: tokens.font.semibold, fontSize: 14 },
  detail: { color: tokens.color.secondaryText, fontFamily: tokens.font.body, fontSize: 12 },
  control: { width: 44, height: 44, borderRadius: 22, backgroundColor: tokens.color.elevated, alignItems: 'center', justifyContent: 'center' },
  symbol: { color: tokens.color.gold, fontFamily: tokens.font.medium, fontSize: 24 },
  value: { color: tokens.color.primaryText, fontFamily: tokens.font.semibold, minWidth: 30, textAlign: 'center' },
});
