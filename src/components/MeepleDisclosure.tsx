import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Pressable, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

import { tokens } from '../theme';

export type MeepleDisclosureProps = {
  title: string;
  detail?: string;
  expanded: boolean;
  onPress: () => void;
};

export function MeepleDisclosure({ title, detail, expanded, onPress }: MeepleDisclosureProps) {
  return (
    <Pressable accessibilityRole="button" accessibilityState={{ expanded }} onPress={onPress} style={styles.container}>
      <View style={styles.text}>
        <Text style={styles.title}>{title}</Text>
        {detail ? <Text style={styles.detail}>{detail}</Text> : null}
      </View>
      <MaterialCommunityIcons name={expanded ? 'chevron-up' : 'chevron-down'} size={22} color={tokens.color.gold} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', backgroundColor: tokens.color.surface, borderColor: tokens.color.border, borderRadius: tokens.radius.large, borderWidth: 1, flexDirection: 'row', justifyContent: 'space-between', minHeight: 52, padding: 16, width: '100%' },
  text: { flex: 1, gap: 3 },
  title: { color: tokens.color.primaryText, fontFamily: tokens.font.semibold, fontSize: 14 },
  detail: { color: tokens.color.secondaryText, fontFamily: tokens.font.body, fontSize: 12 },
});
