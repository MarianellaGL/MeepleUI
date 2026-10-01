import { View } from 'react-native';
import { HelperText, TextInput } from 'react-native-paper';

import { tokens } from '../theme';

export type ScoreTextFieldProps = {
  mode?: 'outlined';
  label: string;
  value: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  helperText?: string;
  errorText?: string;
  disabled?: boolean;
  multiline?: boolean;
  numberOfLines?: number;
  keyboardType?: React.ComponentProps<typeof TextInput>['keyboardType'];
  autoCapitalize?: React.ComponentProps<typeof TextInput>['autoCapitalize'];
  returnKeyType?: React.ComponentProps<typeof TextInput>['returnKeyType'];
  onSubmitEditing?: React.ComponentProps<typeof TextInput>['onSubmitEditing'];
  style?: React.ComponentProps<typeof TextInput>['style'];
};

export function ScoreTextField({ label, value, onChangeText, placeholder, helperText, errorText, disabled, multiline, numberOfLines, keyboardType, autoCapitalize, returnKeyType, onSubmitEditing, style }: ScoreTextFieldProps) {
  return (
    <View>
      <TextInput
        mode="outlined"
        label={label}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        disabled={disabled}
        multiline={multiline}
        numberOfLines={numberOfLines}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        returnKeyType={returnKeyType}
        onSubmitEditing={onSubmitEditing}
        error={Boolean(errorText)}
        textColor={tokens.color.primaryText}
        outlineColor={tokens.color.border}
        activeOutlineColor={tokens.color.gold}
        style={[{ backgroundColor: tokens.color.surface }, style]}
      />
      {(errorText || helperText) && <HelperText type={errorText ? 'error' : 'info'} visible>{errorText || helperText}</HelperText>}
    </View>
  );
}
