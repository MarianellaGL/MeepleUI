import { View } from 'react-native';
import { HelperText, TextInput } from 'react-native-paper';

import { tokens } from '../theme';

export type ScoreTextFieldProps = {
  label: string;
  value: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  helperText?: string;
  errorText?: string;
  disabled?: boolean;
};

export function ScoreTextField({ label, value, onChangeText, placeholder, helperText, errorText, disabled }: ScoreTextFieldProps) {
  return (
    <View>
      <TextInput
        mode="outlined"
        label={label}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        disabled={disabled}
        error={Boolean(errorText)}
        textColor={tokens.color.primaryText}
        outlineColor={tokens.color.border}
        activeOutlineColor={tokens.color.gold}
        style={{ backgroundColor: tokens.color.surface }}
      />
      {(errorText || helperText) && <HelperText type={errorText ? 'error' : 'info'} visible>{errorText || helperText}</HelperText>}
    </View>
  );
}
