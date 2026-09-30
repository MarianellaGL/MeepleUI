import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-native';
import { ScoreCalendar } from '../../src';

const meta = {
  title: 'MeepleUI/Fechas/Calendario',
  component: ScoreCalendar,
  args: { initialMonth: '2026-09', selectedDate: '2026-09-26' },
} satisfies Meta<typeof ScoreCalendar>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Interactivo: Story = {
  render: (args) => {
    const [selectedDate, setSelectedDate] = useState<string | null>(args.selectedDate ?? null);
    return <ScoreCalendar {...args} selectedDate={selectedDate} onSelect={setSelectedDate} />;
  },
};
export const ConPartidas: Story = {
  args: { markedDates: ['2026-09-04', '2026-09-13', '2026-09-26'] },
};
export const RangoLimitado: Story = {
  args: { minDate: '2026-09-10', maxDate: '2026-09-29', accentColor: '#65D88B' },
};
export const SemanaEnDomingo: Story = {
  args: { firstDayOfWeek: 0, locale: 'en-US' },
};
