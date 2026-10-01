import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

import { tokens } from '../theme';

export type MeepleScoringPreviewField = {
  name: string;
  kind: 'manual' | 'counter' | 'checkbox';
  pointsPerUnit: number;
};

export type MeepleScoringPreviewProps = {
  gameName: string;
  fields: MeepleScoringPreviewField[];
  notes?: string[];
};

function fieldDescription(field: MeepleScoringPreviewField) {
  if (field.kind === 'manual') return 'Puntaje final';
  if (field.kind === 'checkbox') return `${field.pointsPerUnit} puntos al marcar`;
  return `${field.pointsPerUnit} puntos por unidad`;
}

/** Presentational preview only. Fields must be reviewed in the editor before saving. */
export function MeepleScoringPreview({ gameName, fields, notes = [] }: MeepleScoringPreviewProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.eyebrow}>PLANILLA PARA REVISAR</Text>
      <Text style={styles.title}>{gameName ? `Propuesta para ${gameName}` : 'Campos propuestos'}</Text>
      {fields.map((field, index) => (
        <View key={`${index}-${field.name}`} style={styles.row}>
          <Text style={styles.fieldName}>{field.name}</Text>
          <Text style={styles.fieldDetail}>{fieldDescription(field)}</Text>
        </View>
      ))}
      {notes.map((note, index) => <Text key={`${index}-${note}`} style={styles.note}>{note}</Text>)}
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: tokens.color.surface, borderColor: tokens.color.border, borderRadius: tokens.radius.large, borderWidth: 1, gap: 10, padding: 17, width: '100%' },
  eyebrow: { color: tokens.color.gold, fontFamily: tokens.font.semibold, fontSize: 10, letterSpacing: 1.3 },
  title: { color: tokens.color.primaryText, fontFamily: tokens.font.semibold, fontSize: 18 },
  row: { borderTopColor: tokens.color.border, borderTopWidth: 1, flexDirection: 'row', gap: 12, justifyContent: 'space-between', paddingTop: 10 },
  fieldName: { color: tokens.color.primaryText, flex: 1, fontFamily: tokens.font.medium, fontSize: 13 },
  fieldDetail: { color: tokens.color.secondaryText, fontFamily: tokens.font.body, fontSize: 12, textAlign: 'right' },
  note: { color: tokens.color.secondaryText, fontFamily: tokens.font.body, fontSize: 12, lineHeight: 18 },
});
