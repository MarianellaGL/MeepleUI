import { StyleSheet, View } from 'react-native';
import { Card, Text } from 'react-native-paper';

import { tokens } from '../theme';

export type ScoreGameCardProps = {
  title: string;
  detail: string;
  score: number;
  label?: string;
  featured?: boolean;
};

export function ScoreGameCard({ title, detail, score, label = 'PARTIDA EN CURSO', featured = false }: ScoreGameCardProps) {
  return (
    <Card style={[styles.card, featured && styles.featured]} mode="contained">
      <Card.Content style={styles.content}>
        <Text style={styles.eyebrow}>{label}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.detail}>{detail}</Text>
        <View style={styles.divider} />
        <View style={styles.footer}>
          <Text style={styles.scoreLabel}>PUNTAJE</Text>
          <Text style={styles.score}>{score}</Text>
        </View>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: tokens.color.surface, borderRadius: tokens.radius.large },
  featured: { borderColor: tokens.color.gold, borderWidth: 1 },
  content: { gap: 12, padding: 24 },
  eyebrow: { color: tokens.color.gold, fontFamily: tokens.font.medium, fontSize: 12 },
  title: { color: tokens.color.primaryText, fontFamily: tokens.font.heading, fontSize: 25, textTransform: 'uppercase' },
  detail: { color: tokens.color.secondaryText, fontFamily: tokens.font.body, fontSize: 14 },
  divider: { backgroundColor: tokens.color.border, height: 1, marginTop: 3 },
  footer: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
  scoreLabel: { color: tokens.color.secondaryText, fontFamily: tokens.font.medium, fontSize: 12 },
  score: { color: tokens.color.gold, fontFamily: tokens.font.heading, fontSize: 30 },
});
