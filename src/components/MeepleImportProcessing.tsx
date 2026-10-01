import { useEffect, useState } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

import { tokens } from '../theme';
import { useReducedMotion } from '../useReducedMotion';

export type MeepleImportSource = 'pdf' | 'photo' | 'melodice';
export type MeepleImportProcessingProps = { source: MeepleImportSource };

const content: Record<MeepleImportSource, { title: string; detail: string }> = {
  pdf: { title: 'Leyendo el PDF', detail: 'Buscamos la tabla de puntos…' },
  photo: { title: 'Leyendo la foto', detail: 'Reconocemos el texto de la imagen…' },
  melodice: { title: 'Importando desde Melodice', detail: 'Preparamos la información del juego…' },
};

/** Barra indeterminada: nunca representa un porcentaje si la API no lo informa. */
export function MeepleImportProcessing({ source }: MeepleImportProcessingProps) {
  const [position] = useState(() => new Animated.Value(0));
  const [trackWidth, setTrackWidth] = useState(328);
  const reducedMotion = useReducedMotion();
  const { title, detail } = content[source];

  useEffect(() => {
    if (reducedMotion) { position.setValue(0); return; }
    const animation = Animated.loop(Animated.sequence([
      Animated.timing(position, { toValue: 1, duration: 1100, useNativeDriver: true }),
      Animated.timing(position, { toValue: 0, duration: 1100, useNativeDriver: true }),
    ]));
    animation.start();
    return () => animation.stop();
  }, [position, reducedMotion]);

  return (
    <View accessibilityRole="progressbar" accessibilityLabel={`${title}. ${detail}`} style={styles.root}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.detail}>{detail}</Text>
      <View style={styles.track} onLayout={(event) => setTrackWidth(event.nativeEvent.layout.width)}>
        <Animated.View style={[styles.indicator, { transform: [{ translateX: position.interpolate({ inputRange: [0, 1], outputRange: [0, Math.max(0, trackWidth - 104)] }) }] }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { width: '100%', backgroundColor: tokens.color.surface, borderColor: tokens.color.border, borderWidth: 1, borderRadius: 16, padding: 16, gap: 8 },
  title: { color: tokens.color.primaryText, fontFamily: tokens.font.semibold, fontSize: 15 },
  detail: { color: tokens.color.secondaryText, fontFamily: tokens.font.body, fontSize: 13 },
  track: { height: 6, width: '100%', backgroundColor: tokens.color.elevated, borderRadius: 3, overflow: 'hidden' },
  indicator: { width: 104, height: 6, backgroundColor: tokens.color.brand, borderRadius: 3 },
});
