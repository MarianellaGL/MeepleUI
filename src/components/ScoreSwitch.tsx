import { StyleSheet, View } from 'react-native';
import { Switch, Text } from 'react-native-paper';

import { tokens } from '../theme';

export type ScoreSwitchProps = {
  label: string;
  value: boolean;
  onChange?: (value: boolean) => void;
  disabled?: boolean;
};

export function ScoreSwitch({ label, value, onChange, disabled = false }: ScoreSwitchProps) {
  return (
    <View style={styles.row}>
      <Text style={[styles.label, disabled && styles.disabled]}>{label}</Text>
      <Switch value={value} onValueChange={onChange} disabled={disabled} color={tokens.color.red} />
    </View>
  );
}

const styles = StyleSheet.create({
  row: { minHeight: 56, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  label: { color: tokens.color.primaryText, fontFamily: tokens.font.body, flex: 1 },
  disabled: { opacity: 0.45 },
});
