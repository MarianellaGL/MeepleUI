import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Menu, Text } from 'react-native-paper';

import { tokens } from '../theme';

export type ScoreDropdownOption = { label: string; value: string };
export type ScoreDropdownProps = {
  label: string;
  value: string;
  options: ScoreDropdownOption[];
  onChange?: (value: string) => void;
  disabled?: boolean;
};

export function ScoreDropdown({ label, value, options, onChange, disabled = false }: ScoreDropdownProps) {
  const [open, setOpen] = useState(false);
  const selected = options.find((option) => option.value === value)?.label ?? 'Seleccionar';
  return (
    <View style={styles.root}>
      <Text style={styles.label}>{label}</Text>
      <Menu
        visible={open}
        onDismiss={() => setOpen(false)}
        contentStyle={styles.menu}
        anchor={<Button mode="outlined" disabled={disabled} onPress={() => setOpen(true)} icon="chevron-down" textColor={tokens.color.primaryText} style={styles.button} contentStyle={styles.buttonContent}>{selected}</Button>}
      >
        {options.map((option) => <Menu.Item key={option.value} title={option.label} onPress={() => { onChange?.(option.value); setOpen(false); }} />)}
      </Menu>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { gap: 8 },
  label: { color: tokens.color.primaryText, fontFamily: tokens.font.semibold, fontSize: 14 },
  menu: { backgroundColor: tokens.color.elevated },
  button: { borderColor: tokens.color.border, borderRadius: tokens.radius.small, backgroundColor: tokens.color.surface },
  buttonContent: { minHeight: 52, justifyContent: 'space-between', flexDirection: 'row-reverse' },
});
