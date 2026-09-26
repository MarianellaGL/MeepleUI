import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Pressable, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

import { tokens } from '../theme';

export type ScoreTab = 'home' | 'history' | 'new-game' | 'score' | 'profile';
export type ScoreBottomNavProps = {
  active: ScoreTab;
  onSelect?: (tab: ScoreTab) => void;
};

const items: { key: ScoreTab; label: string; icon: React.ComponentProps<typeof MaterialCommunityIcons>['name'] }[] = [
  { key: 'home', label: 'Inicio', icon: 'home-outline' },
  { key: 'history', label: 'Historial', icon: 'history' },
  { key: 'new-game', label: 'Nueva partida', icon: 'plus' },
  { key: 'score', label: 'Puntuar', icon: 'file-document-edit-outline' },
  { key: 'profile', label: 'Perfil', icon: 'account-outline' },
];

export function ScoreBottomNav({ active, onSelect }: ScoreBottomNavProps) {
  return (
    <View style={styles.nav}>
      {items.map((item) => {
        const selected = item.key === active;
        const center = item.key === 'new-game';
        const tint = selected ? tokens.color.gold : tokens.color.secondaryText;
        return (
          <Pressable
            key={item.key}
            accessibilityRole="tab"
            accessibilityState={{ selected }}
            accessibilityLabel={item.label}
            onPress={() => onSelect?.(item.key)}
            style={[styles.item, center && styles.centerItem]}
          >
            {center ? (
              <View style={styles.die}>
                <View style={styles.pipLeft} /><View style={styles.pipRight} />
                <MaterialCommunityIcons name="plus" color={tokens.color.primaryText} size={25} />
              </View>
            ) : <MaterialCommunityIcons name={item.icon} color={tint} size={24} />}
            <Text numberOfLines={1} style={[styles.label, { color: center ? tokens.color.primaryText : tint }]}>{item.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  nav: { minHeight: 96, backgroundColor: tokens.color.surface, borderTopColor: tokens.color.border, borderTopWidth: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', paddingHorizontal: 4 },
  item: { minWidth: 58, minHeight: 72, flex: 1, alignItems: 'center', justifyContent: 'center', gap: 5 },
  centerItem: { flex: 1.4 },
  label: { fontFamily: tokens.font.medium, fontSize: 11, textAlign: 'center' },
  die: { width: 44, height: 44, borderRadius: 10, backgroundColor: tokens.color.redDark, alignItems: 'center', justifyContent: 'center', marginTop: -10 },
  pipLeft: { position: 'absolute', width: 3, height: 3, borderRadius: 2, backgroundColor: tokens.color.primaryText, left: 6, top: 6 },
  pipRight: { position: 'absolute', width: 3, height: 3, borderRadius: 2, backgroundColor: tokens.color.primaryText, right: 6, top: 6 },
});
