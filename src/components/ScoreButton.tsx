import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

import { tokens } from '../theme';

export type ScoreButtonProps = {
  label: string;
  variant?: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
  loading?: boolean;
  icon?: string;
  onPress?: () => void;
};

export function ScoreButton({
  label,
  variant = 'primary',
  disabled = false,
  loading = false,
  icon,
  onPress,
}: ScoreButtonProps) {
  const outlined = variant === 'secondary';
  return (
    <Button
      mode={outlined ? 'outlined' : 'contained'}
      icon={icon}
      disabled={disabled}
      loading={loading}
      onPress={onPress}
      buttonColor={variant === 'danger' ? tokens.color.redDark : tokens.color.red}
      textColor={outlined ? tokens.color.gold : tokens.color.canvas}
      style={[styles.button, outlined && styles.outlined]}
      contentStyle={styles.content}
      labelStyle={styles.label}
    >
      {label}
    </Button>
  );
}

const styles = StyleSheet.create({
  button: { borderRadius: tokens.radius.small },
  outlined: { borderColor: tokens.color.gold },
  content: { minHeight: 52 },
  label: { fontFamily: tokens.font.semibold, fontSize: 14, marginVertical: 0 },
});
