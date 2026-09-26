import { useEffect, useState } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { tokens } from '../theme';
import { useReducedMotion } from '../useReducedMotion';

export type ScoreSkeletonProps = { variant?: 'text' | 'list' | 'card' };

export function ScoreSkeleton({ variant = 'text' }: ScoreSkeletonProps) {
  const [opacity] = useState(() => new Animated.Value(1));
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) {
      opacity.setValue(1);
      return;
    }
    const pulse = Animated.loop(Animated.sequence([
      Animated.timing(opacity, { toValue: 0.5, duration: 700, useNativeDriver: true }),
      Animated.timing(opacity, { toValue: 1, duration: 700, useNativeDriver: true }),
    ]));
    pulse.start();
    return () => pulse.stop();
  }, [opacity, reducedMotion]);

  if (variant === 'text') return <Animated.View accessibilityLabel="Cargando" style={[styles.bar, { width: '72%', opacity }]} />;
  if (variant === 'list') return <View accessibilityLabel="Cargando lista" style={styles.list}>
    {[0, 1, 2].map((item) => <View key={item} style={styles.row}>
      <Animated.View style={[styles.circle, { opacity }]} />
      <View style={styles.lines}><Animated.View style={[styles.bar, { width: '80%', opacity }]} /><Animated.View style={[styles.bar, { width: '55%', opacity }]} /></View>
    </View>)}
  </View>;
  return <View accessibilityLabel="Cargando tarjeta" style={styles.card}>
    <Animated.View style={[styles.bar, { width: '35%', opacity }]} />
    <Animated.View style={[styles.bar, { width: '75%', height: 28, opacity }]} />
    <Animated.View style={[styles.bar, { width: '95%', opacity }]} />
    <Animated.View style={[styles.bar, { width: '50%', opacity }]} />
  </View>;
}

const styles = StyleSheet.create({
  bar: { backgroundColor: tokens.color.elevated, height: 16, borderRadius: 8 },
  list: { backgroundColor: tokens.color.surface, padding: 16, borderRadius: tokens.radius.medium, gap: 18 },
  row: { flexDirection: 'row', gap: 12, alignItems: 'center' },
  circle: { backgroundColor: tokens.color.elevated, width: 42, height: 42, borderRadius: 21 },
  lines: { flex: 1, gap: 9 },
  card: { backgroundColor: tokens.color.surface, padding: 24, borderRadius: tokens.radius.large, gap: 17 },
});
