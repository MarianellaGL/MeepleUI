import { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

import { tokens } from '../theme';

export type MeepleGameTileProps = {
  title: string;
  detail?: string;
  imageUrl?: string | null;
  onPress?: () => void;
};

/** Fila de juego con carátula de BGG y estado legible cuando falta la imagen. */
export function MeepleGameTile({ title, detail, imageUrl, onPress }: MeepleGameTileProps) {
  const [failedUrl, setFailedUrl] = useState<string | null>(null);

  return (
    <Pressable onPress={onPress} disabled={!onPress} accessibilityRole={onPress ? 'button' : undefined} accessibilityLabel={title} style={styles.tile}>
      <View style={styles.cover}>
        {imageUrl && imageUrl !== failedUrl ? (
          <Image source={{ uri: imageUrl }} onError={() => setFailedUrl(imageUrl)} resizeMode="cover" style={styles.image} accessibilityIgnoresInvertColors />
        ) : (
          <MaterialCommunityIcons name="image-off-outline" size={28} color={tokens.color.secondaryText} accessibilityLabel="Juego sin foto" />
        )}
      </View>
      <View style={styles.content}>
        <Text numberOfLines={2} style={styles.title}>{title}</Text>
        {detail ? <Text numberOfLines={2} style={styles.detail}>{detail}</Text> : null}
      </View>
      {onPress ? <MaterialCommunityIcons name="chevron-right" size={22} color={tokens.color.gold} /> : null}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  tile: { minHeight: 80, width: '100%', backgroundColor: tokens.color.surface, borderRadius: tokens.radius.large, padding: 11, flexDirection: 'row', alignItems: 'center', gap: 12 },
  cover: { width: 54, height: 56, flexShrink: 0, alignItems: 'center', justifyContent: 'center', backgroundColor: tokens.color.elevated, borderRadius: tokens.radius.small, overflow: 'hidden' },
  image: { width: '100%', height: '100%' },
  content: { flex: 1, gap: 5 },
  title: { color: tokens.color.primaryText, fontFamily: tokens.font.semibold, fontSize: 16 },
  detail: { color: tokens.color.secondaryText, fontFamily: tokens.font.body, fontSize: 13 },
});
