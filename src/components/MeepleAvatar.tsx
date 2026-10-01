import { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
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
  const parts = name.trim().split(/\s+/).filter(Boolean);
  const initials = (parts.length > 1 ? `${parts[0][0]}${parts[parts.length - 1][0]}` : parts[0]?.slice(0, 2) || '?').toLocaleUpperCase();
  const photo = imageUrl && imageUrl !== failedUrl;
  const innerSize = Math.max(24, size - 8);

  return (
    <Pressable
      onPress={onPress}
      disabled={!onPress}
      accessibilityRole={onPress ? 'button' : 'image'}
      accessibilityLabel={onPress ? `Cambiar avatar de ${name}` : `Avatar de ${name}`}
      style={[styles.container, { width: size, height: size }]}
    >
      <View style={[styles.avatar, { width: innerSize, height: innerSize, borderRadius: innerSize / 2 }]}>
        {photo ? <Image source={{ uri: imageUrl }} onError={() => setFailedUrl(imageUrl)} style={styles.image} accessibilityIgnoresInvertColors /> :
          <View style={styles.fallback}><Text style={[styles.initial, { fontSize: innerSize * 0.34 }]}>{initials}</Text></View>}
      </View>
      {onPress && <View style={styles.editBadge}><MaterialCommunityIcons name="camera-outline" size={15} color={tokens.color.canvas} /></View>}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', justifyContent: 'center' },
  avatar: { backgroundColor: tokens.color.elevated, borderColor: tokens.color.gold, borderWidth: 2, overflow: 'hidden' },
  image: { width: '100%', height: '100%' },
  fallback: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  initial: { color: tokens.color.gold, fontFamily: tokens.font.semibold },
  editBadge: { position: 'absolute', right: 0, bottom: 0, width: 24, height: 24, borderRadius: 12, backgroundColor: tokens.color.brand, alignItems: 'center', justifyContent: 'center' },
});
