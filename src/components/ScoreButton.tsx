import { useState } from 'react';
import { Animated, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

import { tokens } from '../theme';
import { useReducedMotion } from '../useReducedMotion';

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
  const [scale] = useState(() => new Animated.Value(1));
  const reducedMotion = useReducedMotion();

  function animatePress(toValue: number) {
    if (reducedMotion || disabled) return;
    Animated.spring(scale, {
      toValue,
      speed: 28,
      bounciness: 2,
      useNativeDriver: true,
    }).start();
  }

  return (
    <Animated.View style={{ transform: [{ scale }] }}>
    <Button
      mode={outlined ? 'outlined' : 'contained'}
      icon={icon}
      disabled={disabled}
      loading={loading}
      onPress={onPress}
      onPressIn={() => animatePress(0.97)}
      onPressOut={() => animatePress(1)}
      buttonColor={variant === 'danger' ? tokens.color.redDark : tokens.color.red}
      textColor={outlined ? tokens.color.gold : tokens.color.canvas}
      style={[styles.button, outlined && styles.outlined]}
      contentStyle={styles.content}
      labelStyle={styles.label}
    >
      {label}
    </Button>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  button: { borderRadius: tokens.radius.small },
  outlined: { borderColor: tokens.color.gold },
  content: { minHeight: 52 },
  label: { fontFamily: tokens.font.semibold, fontSize: 14, marginVertical: 0 },
});
