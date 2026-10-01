import { useState } from 'react';
import { Animated, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

import { tokens } from '../theme';
import { useReducedMotion } from '../useReducedMotion';

export type ScoreButtonProps = {
  label: string;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger';
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
  const textOnly = variant === 'tertiary';
  const danger = variant === 'danger';
  const [scale] = useState(() => new Animated.Value(1));
  const reducedMotion = useReducedMotion();

  function animatePress(toValue: number) {
    if (reducedMotion || disabled || loading) return;
    Animated.spring(scale, {
      toValue,
      speed: 28,
      bounciness: 2,
      useNativeDriver: true,
    }).start();
  }

  return (
    <Animated.View style={[styles.wrapper, { transform: [{ scale }] }]}>
    <Button
      mode={textOnly ? 'text' : outlined ? 'outlined' : 'contained'}
      icon={loading ? undefined : icon}
      disabled={disabled}
      accessibilityState={{ disabled: disabled || loading, busy: loading }}
      onPress={loading ? undefined : onPress}
      onPressIn={() => animatePress(0.97)}
      onPressOut={() => animatePress(1)}
      buttonColor={textOnly ? undefined : outlined ? tokens.color.surface : danger ? tokens.color.redDark : tokens.color.brand}
      textColor={outlined || textOnly ? tokens.color.gold : danger ? tokens.color.primaryText : tokens.color.canvas}
      style={[styles.button, outlined && styles.outlined, loading && styles.loading]}
      contentStyle={styles.content}
      labelStyle={styles.label}
    >
      {loading ? 'Cargando…' : label}
    </Button>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  wrapper: { alignSelf: 'stretch' },
  button: { borderRadius: 12 },
  outlined: { borderColor: tokens.color.gold },
  loading: { opacity: 0.8 },
  content: { minHeight: 52 },
  label: { fontFamily: tokens.font.semibold, fontSize: 14, marginVertical: 0 },
});
