import { useState } from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

import { tokens } from '../theme';

export type MeepleUnifiedSearchResultProps = {
  title: string;
  edition?: string;
  imageUrl?: string | null;
  sources: string[];
  needsReview?: boolean;
  onPress?: () => void;
};

/** Un resultado por juego, con las fuentes conocidas y un solo siguiente paso. */
export function MeepleUnifiedSearchResult({ title, edition, imageUrl, sources, needsReview = false, onPress }: MeepleUnifiedSearchResultProps) {
  const [failedUrl, setFailedUrl] = useState<string | null>(null);
  const visibleSources = sources.slice(0, 3);
  return (
    <Pressable accessibilityRole="button" accessibilityLabel={`${title}. ${visibleSources.join('. ')}. Ver opciones`} onPress={onPress} disabled={!onPress} style={({ pressed }) => [styles.root, pressed && styles.pressed]}>
      <View style={styles.header}>
        <View style={styles.cover}>
          {imageUrl && imageUrl !== failedUrl ? <Image source={{ uri: imageUrl }} onError={() => setFailedUrl(imageUrl)} resizeMode="cover" style={styles.image} accessibilityIgnoresInvertColors /> : <Text style={styles.coverFallback}>Foto</Text>}
        </View>
        <View style={styles.gameCopy}>
          <Text numberOfLines={1} style={styles.title}>{title}</Text>
          {!!edition && <Text numberOfLines={1} style={styles.edition}>{edition}</Text>}
        </View>
      </View>
      <View style={styles.separator} />
      <Text style={styles.eyebrow}>FUENTES PARA ESTE JUEGO</Text>
      <View style={styles.sources}>
        {visibleSources.map((source, index) => <View key={`${source}-${index}`} style={styles.sourceRow}>
          <View style={[styles.dot, needsReview && styles.reviewDot]} />
          <Text numberOfLines={1} style={styles.sourceText}>{source}</Text>
        </View>)}
      </View>
      <Text style={styles.action}>{needsReview ? 'Revisar opciones →' : 'Ver opciones →'}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  root: { minHeight: 232, width: '100%', backgroundColor: tokens.color.surface, borderColor: tokens.color.gold, borderWidth: 1, borderRadius: 16, padding: 11, gap: 10 },
  pressed: { opacity: 0.82 },
  header: { flexDirection: 'row', alignItems: 'center', gap: 14 },
  cover: { width: 54, height: 56, backgroundColor: tokens.color.elevated, borderRadius: 8, overflow: 'hidden', alignItems: 'center', justifyContent: 'center' },
  image: { width: '100%', height: '100%' },
  coverFallback: { color: tokens.color.secondaryText, fontFamily: tokens.font.body, fontSize: 11 },
  gameCopy: { flex: 1, gap: 6 },
  title: { color: tokens.color.primaryText, fontFamily: tokens.font.semibold, fontSize: 15 },
  edition: { color: tokens.color.secondaryText, fontFamily: tokens.font.body, fontSize: 13 },
  separator: { height: 1, backgroundColor: tokens.color.border, marginTop: 2 },
  eyebrow: { color: tokens.color.secondaryText, fontFamily: tokens.font.semibold, fontSize: 10, marginHorizontal: 4 },
  sources: { gap: 9, marginHorizontal: 4 },
  sourceRow: { flexDirection: 'row', alignItems: 'center', gap: 8, minHeight: 18 },
  dot: { width: 6, height: 6, borderRadius: 3, backgroundColor: tokens.color.success },
  reviewDot: { backgroundColor: tokens.color.brand },
  sourceText: { flex: 1, color: tokens.color.secondaryText, fontFamily: tokens.font.body, fontSize: 13 },
  action: { color: tokens.color.gold, fontFamily: tokens.font.semibold, fontSize: 14, marginHorizontal: 4, marginTop: 'auto' },
});
