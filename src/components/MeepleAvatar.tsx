import { useState } from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

import { tokens } from '../theme';

export type MeepleAvatarProps = {
  name: string;
  imageUrl?: string | null;
  size?: number;
  onPress?: () => void;
};

export function MeepleAvatar({ name, imageUrl, size = 64, onPress }: MeepleAvatarProps) {
  const [failedUrl, setFailedUrl] = useState<string | null>(null);
  const initial = name.trim().charAt(0).toLocaleUpperCase() || '?';

  return (
    <Pressable
      onPress={onPress}
      disabled={!onPress}
      accessibilityRole={onPress ? 'button' : 'image'}
      accessibilityLabel={onPress ? `Cambiar avatar de ${name}` : `Avatar de ${name}`}
      style={[styles.avatar, { width: size, height: size, borderRadius: size / 2 }]}
    >
      {imageUrl && imageUrl !== failedUrl ? (
        <Image source={{ uri: imageUrl }} onError={() => setFailedUrl(imageUrl)} style={styles.image} accessibilityIgnoresInvertColors />
      ) : (
        <View style={styles.fallback}>
          <Text style={[styles.initial, { fontSize: size * 0.4 }]}>{initial}</Text>
        </View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  avatar: { backgroundColor: tokens.color.elevated, borderColor: tokens.color.starBrass, borderWidth: 1, overflow: 'hidden' },
  image: { width: '100%', height: '100%' },
  fallback: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  initial: { color: tokens.color.primaryText, fontFamily: tokens.font.semibold },
});
