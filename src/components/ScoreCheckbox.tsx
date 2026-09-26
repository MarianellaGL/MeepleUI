import { StyleSheet, View } from 'react-native';
import { Checkbox, Text } from 'react-native-paper';

import { tokens } from '../theme';

export type ScoreCheckboxProps = {
  label: string;
  checked: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
};

export function ScoreCheckbox({ label, checked, onChange, disabled = false }: ScoreCheckboxProps) {
  return (
    <View style={styles.row}>
      <Checkbox
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => onChange?.(!checked)}
        disabled={disabled}
        color={tokens.color.gold}
        uncheckedColor={tokens.color.secondaryText}
      />
      <Text style={[styles.label, disabled && styles.disabled]} onPress={() => !disabled && onChange?.(!checked)}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { minHeight: 48, flexDirection: 'row', alignItems: 'center' },
  label: { color: tokens.color.primaryText, fontFamily: tokens.font.body, flex: 1 },
  disabled: { opacity: 0.45 },
});
