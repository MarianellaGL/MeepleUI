import { StyleSheet, View } from 'react-native';
import { tokens } from '../theme';

export type ScoreSkeletonProps = { variant?: 'text' | 'list' | 'card' };

export function ScoreSkeleton({ variant = 'text' }: ScoreSkeletonProps) {
  if (variant === 'text') return <View accessibilityLabel="Cargando" style={[styles.bar, { width: '72%' }]} />;
  if (variant === 'list') return <View accessibilityLabel="Cargando lista" style={styles.list}>
    {[0, 1, 2].map((item) => <View key={item} style={styles.row}>
      <View style={styles.circle} />
      <View style={styles.lines}><View style={[styles.bar, { width: '80%' }]} /><View style={[styles.bar, { width: '55%' }]} /></View>
    </View>)}
  </View>;
  return <View accessibilityLabel="Cargando tarjeta" style={styles.card}>
    <View style={[styles.bar, { width: '35%' }]} />
    <View style={[styles.bar, { width: '75%', height: 28 }]} />
    <View style={[styles.bar, { width: '95%' }]} />
    <View style={[styles.bar, { width: '50%' }]} />
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
