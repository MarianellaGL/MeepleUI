import { useEffect, useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Animated, Pressable, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

import { tokens } from '../theme';
import { useReducedMotion } from '../useReducedMotion';

export type ScoreTab = 'home' | 'history' | 'new-game' | 'score' | 'profile';
export type ScoreBottomNavProps = {
  active: ScoreTab;
  onSelect?: (tab: ScoreTab) => void;
};

type NavItem = { key: ScoreTab; label: string; icon: React.ComponentProps<typeof MaterialCommunityIcons>['name'] };
const items: NavItem[] = [
  { key: 'home', label: 'Inicio', icon: 'home-outline' },
  { key: 'history', label: 'Historial', icon: 'history' },
  { key: 'new-game', label: 'Nueva partida', icon: 'plus' },
  { key: 'score', label: 'Puntuar', icon: 'file-document-edit-outline' },
  { key: 'profile', label: 'Perfil', icon: 'account-outline' },
];

function TabItem({ item, selected, onSelect, reducedMotion }: { item: NavItem; selected: boolean; onSelect?: (tab: ScoreTab) => void; reducedMotion: boolean }) {
  const [scale] = useState(() => new Animated.Value(selected ? 1.07 : 1));
  const center = item.key === 'new-game';
  const tint = selected ? tokens.color.gold : tokens.color.secondaryText;

  useEffect(() => {
    if (reducedMotion) {
      scale.setValue(1);
      return;
    }
    Animated.spring(scale, { toValue: selected ? 1.07 : 1, speed: 22, bounciness: 3, useNativeDriver: true }).start();
  }, [reducedMotion, scale, selected]);

  return (
    <Pressable
      accessibilityRole="tab"
      accessibilityState={{ selected }}
      accessibilityLabel={item.label}
      onPress={() => onSelect?.(item.key)}
      style={[styles.item, center && styles.centerItem]}
    >
      <Animated.View style={{ transform: [{ scale }] }}>
        {center ? (
          <View style={styles.die}>
            <View style={styles.pipLeft} /><View style={styles.pipRight} />
            <MaterialCommunityIcons name="plus" color={tokens.color.primaryText} size={25} />
          </View>
        ) : <MaterialCommunityIcons name={item.icon} color={tint} size={24} />}
      </Animated.View>
      <Text numberOfLines={1} style={[styles.label, { color: center ? tokens.color.primaryText : tint }]}>{item.label}</Text>
    </Pressable>
  );
}

export function ScoreBottomNav({ active, onSelect }: ScoreBottomNavProps) {
  const reducedMotion = useReducedMotion();
  return (
    <View style={styles.nav}>
      {items.map((item) => <TabItem key={item.key} item={item} selected={item.key === active} onSelect={onSelect} reducedMotion={reducedMotion} />)}
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
