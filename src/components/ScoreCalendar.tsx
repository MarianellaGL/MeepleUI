import { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Pressable, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

import { tokens } from '../theme';

export type ScoreCalendarProps = {
  selectedDate?: string | null;
  onSelect?: (date: string) => void;
  initialMonth?: string;
  onMonthChange?: (month: string) => void;
  minDate?: string;
  maxDate?: string;
  markedDates?: string[];
  firstDayOfWeek?: 0 | 1;
  locale?: string;
  accentColor?: string;
};

const two = (value: number) => String(value).padStart(2, '0');
const keyOf = (year: number, month: number, day: number) => `${year}-${two(month + 1)}-${two(day)}`;
const monthKey = (year: number, month: number) => `${year}-${two(month + 1)}`;

function readMonth(input?: string | null) {
  if (input && /^\d{4}-\d{2}/.test(input)) {
    const year = Number(input.slice(0, 4));
    const month = Number(input.slice(5, 7)) - 1;
    if (month >= 0 && month < 12) return { year, month };
  }
  const now = new Date();
  return { year: now.getFullYear(), month: now.getMonth() };
}

export function ScoreCalendar({
  selectedDate = null,
  onSelect,
  initialMonth,
  onMonthChange,
  minDate,
  maxDate,
  markedDates = [],
  firstDayOfWeek = 1,
  locale = 'es-AR',
  accentColor = tokens.color.gold,
}: ScoreCalendarProps) {
  const [visible, setVisible] = useState(() => readMonth(initialMonth ?? selectedDate));
  const first = new Date(Date.UTC(visible.year, visible.month, 1)).getUTCDay();
  const offset = (first - firstDayOfWeek + 7) % 7;
  const count = new Date(Date.UTC(visible.year, visible.month + 1, 0)).getUTCDate();
  const cells = Array.from({ length: Math.ceil((offset + count) / 7) * 7 }, (_, index) => {
    const day = index - offset + 1;
    return day > 0 && day <= count ? day : null;
  });
  const title = new Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(Date.UTC(visible.year, visible.month, 1)));
  const weekdays = Array.from({ length: 7 }, (_, index) => {
    const sundayBased = (index + firstDayOfWeek) % 7;
    return new Intl.DateTimeFormat(locale, { weekday: 'short', timeZone: 'UTC' }).format(new Date(Date.UTC(2024, 0, 7 + sundayBased)));
  });
  const today = new Date();
  const todayKey = keyOf(today.getFullYear(), today.getMonth(), today.getDate());
  const marks = new Set(markedDates);

  function moveMonth(delta: number) {
    const next = new Date(Date.UTC(visible.year, visible.month + delta, 1));
    const month = { year: next.getUTCFullYear(), month: next.getUTCMonth() };
    setVisible(month);
    onMonthChange?.(monthKey(month.year, month.month));
  }

  return (
    <View style={styles.calendar}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.monthButtons}>
          <Pressable accessibilityRole="button" accessibilityLabel="Mes anterior" onPress={() => moveMonth(-1)} style={styles.monthButton}>
            <MaterialCommunityIcons name="chevron-left" size={24} color={tokens.color.primaryText} />
          </Pressable>
          <Pressable accessibilityRole="button" accessibilityLabel="Mes siguiente" onPress={() => moveMonth(1)} style={styles.monthButton}>
            <MaterialCommunityIcons name="chevron-right" size={24} color={tokens.color.primaryText} />
          </Pressable>
        </View>
      </View>
      <View style={styles.grid}>
        {weekdays.map((name, index) => <View key={`weekday-${index}`} style={styles.cell}><Text style={styles.weekday}>{name}</Text></View>)}
        {cells.map((day, index) => {
          if (day === null) return <View key={`blank-${index}`} style={styles.cell} />;
          const date = keyOf(visible.year, visible.month, day);
          const selected = selectedDate === date;
          const disabled = (minDate !== undefined && date < minDate) || (maxDate !== undefined && date > maxDate);
          return <View key={date} style={styles.cell}>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel={new Intl.DateTimeFormat(locale, { dateStyle: 'full', timeZone: 'UTC' }).format(new Date(Date.UTC(visible.year, visible.month, day)))}
              accessibilityState={{ selected, disabled }}
              disabled={disabled}
              hitSlop={4}
              onPress={() => onSelect?.(date)}
              style={[styles.day, date === todayKey && !selected && { borderColor: accentColor, borderWidth: 1 }, selected && { backgroundColor: accentColor }]}
            >
              <Text style={[styles.dayText, disabled && styles.disabledText, selected && styles.selectedText]}>{day}</Text>
              {marks.has(date) && <View style={[styles.mark, { backgroundColor: selected ? tokens.color.canvas : accentColor }]} />}
            </Pressable>
          </View>;
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  calendar: { backgroundColor: tokens.color.surface, borderRadius: tokens.radius.large, padding: 16, gap: 14 },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  title: { color: tokens.color.primaryText, fontFamily: tokens.font.heading, fontSize: 20, textTransform: 'capitalize' },
  monthButtons: { flexDirection: 'row', gap: 4 },
  monthButton: { width: 44, height: 44, alignItems: 'center', justifyContent: 'center' },
  grid: { flexDirection: 'row', flexWrap: 'wrap' },
  cell: { width: '14.2857%', height: 48, alignItems: 'center', justifyContent: 'center' },
  weekday: { color: tokens.color.secondaryText, fontFamily: tokens.font.semibold, fontSize: 12, textTransform: 'uppercase' },
  day: { width: '100%', maxWidth: 44, aspectRatio: 1, borderRadius: 22, alignItems: 'center', justifyContent: 'center' },
  dayText: { color: tokens.color.primaryText, fontFamily: tokens.font.medium, fontSize: 14 },
  disabledText: { color: tokens.color.border },
  selectedText: { color: tokens.color.canvas, fontFamily: tokens.font.semibold },
  mark: { position: 'absolute', bottom: 5, width: 4, height: 4, borderRadius: 2 },
});
