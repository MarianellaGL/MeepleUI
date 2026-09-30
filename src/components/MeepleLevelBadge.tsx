import { Image, StyleSheet, View } from 'react-native';

import { tokens } from '../theme';

export type MeepleLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export type MeepleLevelBadgeProps = {
  level: MeepleLevel;
};

const levels = {
  1: { name: 'Aprendiz', source: require('../../assets/figma/level-badges/aprendiz.png') },
  2: { name: 'Jugón', source: require('../../assets/figma/level-badges/jugon.png') },
  3: { name: 'Aventurera', source: require('../../assets/figma/level-badges/aventurera.png') },
  4: { name: 'Guardián', source: require('../../assets/figma/level-badges/guardian.png') },
  5: { name: 'Mercenario', source: require('../../assets/figma/level-badges/mercenario.png') },
  6: { name: 'Druida', source: require('../../assets/figma/level-badges/druida.png') },
  7: { name: 'Caballero', source: require('../../assets/figma/level-badges/caballero.png') },
  8: { name: 'Ganador', source: require('../../assets/figma/level-badges/ganador.png') },
  9: { name: 'Rey', source: require('../../assets/figma/level-badges/rey.png') },
  10: { name: 'Leyenda', source: require('../../assets/figma/level-badges/leyenda.png') },
} as const;

/** Level is the number of games won, from one to ten. */
export function MeepleLevelBadge({ level }: MeepleLevelBadgeProps) {
  const badge = levels[level];
  return (
    <View style={styles.badge} accessibilityRole="image" accessibilityLabel={`Nivel ${level}: ${badge.name}`}>
      <Image source={badge.source} style={styles.icon} resizeMode="contain" accessible={false} />
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    width: 68,
    height: 68,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: tokens.color.levelBadgeBorder,
    backgroundColor: tokens.color.levelBadgeBackground,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: { width: 44, height: 44 },
});
