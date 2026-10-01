import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ActivityIndicator, Text } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

import { tokens } from '../theme';

export type MeepleAssistStatusProps = {
  title: string;
  description: string;
  kind?: 'working' | 'ready' | 'manual' | 'error';
};

export function MeepleAssistStatus({ title, description, kind = 'manual' }: MeepleAssistStatusProps) {
  const icon = kind === 'ready' ? 'check-circle-outline' : kind === 'error' ? 'alert-circle-outline' : 'pencil-outline';
  const accent = kind === 'ready' ? tokens.color.success : kind === 'error' ? tokens.color.warning : tokens.color.gold;
  const background = kind === 'ready' ? tokens.color.successSoft : kind === 'error' ? tokens.color.warningSoft : tokens.color.elevated;

  return (
    <View accessibilityRole={kind === 'error' ? 'alert' : undefined} accessibilityLiveRegion="polite" style={[styles.container, { backgroundColor: background, borderColor: accent }]}>
      <View style={styles.icon}>
        {kind === 'working' ? <ActivityIndicator size={23} color={accent} accessibilityLabel="Procesando" /> :
          <MaterialCommunityIcons name={icon} size={23} color={accent} />}
      </View>
      <View style={styles.text}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'flex-start', borderRadius: tokens.radius.large, borderWidth: 1, flexDirection: 'row', gap: 11, padding: 14, width: '100%' },
  icon: { alignItems: 'center', backgroundColor: tokens.color.surface, borderRadius: 12, height: 42, justifyContent: 'center', width: 42 },
  text: { flex: 1, gap: 3 },
  title: { color: tokens.color.primaryText, fontFamily: tokens.font.semibold, fontSize: 14 },
  description: { color: tokens.color.secondaryText, fontFamily: tokens.font.body, fontSize: 13, lineHeight: 19 },
});
