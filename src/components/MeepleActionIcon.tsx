import { Image, StyleSheet, View } from 'react-native';

export type MeepleActionIconType = 'dice' | 'books' | 'users' | 'calendar' | 'score' | 'camera' | 'pdf' | 'trophy' | 'shield' | 'person' | 'spark';

export type MeepleActionIconProps = {
  type: MeepleActionIconType;
  accessibilityLabel?: string;
};

const icons = {
  dice: { source: require('../../assets/figma/action-icons/dice.png'), width: 20.625, height: 20.625 },
  books: { source: require('../../assets/figma/action-icons/books.png'), width: 21.6668, height: 18.5417 },
  users: { source: require('../../assets/figma/action-icons/users.png'), width: 20.625, height: 17.5 },
  calendar: { source: require('../../assets/figma/action-icons/calendar.png'), width: 20.625, height: 20.625 },
  score: { source: require('../../assets/figma/action-icons/score.png'), width: 18.5417, height: 20.625 },
  camera: { source: require('../../assets/figma/action-icons/camera.png'), width: 20.625, height: 18.5417 },
  pdf: { source: require('../../assets/figma/action-icons/pdf.png'), width: 15.4167, height: 22.7083 },
  trophy: { source: require('../../assets/figma/action-icons/trophy.png'), width: 20.625, height: 20.625 },
  shield: { source: require('../../assets/figma/action-icons/shield.png'), width: 20.625, height: 22.7083 },
  person: { source: require('../../assets/figma/action-icons/person.png'), width: 18.5417, height: 20.625 },
  spark: { source: require('../../assets/figma/action-icons/spark.png'), width: 22.7083, height: 22.7083 },
} as const;

/** The action glyphs from the shared MeepVP Figma component. */
export function MeepleActionIcon({ type, accessibilityLabel }: MeepleActionIconProps) {
  const icon = icons[type];
  return (
    <View style={styles.container} accessibilityRole="image" accessibilityLabel={accessibilityLabel ?? type}>
      <Image source={icon.source} style={{ width: icon.width, height: icon.height }} resizeMode="contain" accessible={false} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { width: 32, height: 32, borderRadius: 12, alignItems: 'center', justifyContent: 'center' },
});
