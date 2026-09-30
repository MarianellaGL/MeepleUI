import { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native-paper';

import { MeepleLogo, MeepleUIProvider, ScoreBadge, ScoreButton, ScoreCalendar, ScoreGameCard, ScoreStepper, tokens } from './src';

export default function App() {
  const [date, setDate] = useState('2026-09-26');
  const [score, setScore] = useState(18);

  return (
    <MeepleUIProvider>
      <StatusBar style="light" />
      <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
        <MeepleLogo size={64} />
        <Text style={styles.brand}>MeepleUI</Text>
        <Text style={styles.copy}>Componentes móviles para MeepVP</Text>
        <View style={styles.badges}>
          <ScoreBadge label="En curso" />
          <ScoreBadge label="Ronda guardada" tone="success" />
          <ScoreBadge label="Faltan puntos" tone="warning" />
        </View>
        <ScoreGameCard title="Noche de dados" detail="4 jugadores · Ronda 4 de 8" score={20} featured />
        <ScoreStepper player="Mariana" detail="Líder de la mesa" value={score} onChange={setScore} />
        <ScoreCalendar initialMonth="2026-09" selectedDate={date} onSelect={setDate} markedDates={['2026-09-04', '2026-09-13', '2026-09-26']} />
        <ScoreButton label="Nueva partida" />
      </ScrollView>
    </MeepleUIProvider>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: tokens.color.canvas },
  content: { paddingHorizontal: 16, paddingTop: 64, paddingBottom: 48, gap: 18 },
  brand: { color: tokens.color.gold, fontFamily: tokens.font.brand, fontSize: 28 },
  copy: { color: tokens.color.secondaryText, fontFamily: tokens.font.body, marginTop: -12 },
  badges: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
});
