import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

import { tokens } from '../theme';

export type ScoreBadgeProps = {
  label: string;
  tone?: 'success' | 'warning' | 'neutral';
};

export function ScoreBadge({ label, tone = 'neutral' }: ScoreBadgeProps) {
  const backgroundColor = tone === 'success' ? tokens.color.successSoft : tone === 'warning' ? tokens.color.warningSoft : tokens.color.elevated;
  const color = tone === 'success' ? tokens.color.success : tone === 'warning' ? tokens.color.warning : tokens.color.gold;
  return (
    <View style={[styles.badge, { backgroundColor }]}>
      <Text style={[styles.label, { color }]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: { alignSelf: 'flex-start', borderRadius: 99, paddingHorizontal: 12, paddingVertical: 7 },
  label: { fontFamily: tokens.font.semibold, fontSize: 12 },
});
