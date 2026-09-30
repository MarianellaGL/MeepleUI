import { MD3DarkTheme } from 'react-native-paper';

export const tokens = {
  color: {
    canvas: '#100D19',
    surface: '#231928',
    elevated: '#322233',
    primaryText: '#FFF4E1',
    secondaryText: '#BCAFB9',
    gold: '#FFD47A',
    red: '#F4511E',
    redDark: '#B5253C',
    meepleRed: '#C52C32',
    starBrass: '#B99456',
    levelBadgeBackground: '#1F1C2E',
    levelBadgeBorder: '#A67A40',
    border: '#65464C',
    success: '#65D88B',
    successSoft: '#1B402D',
    warning: '#FF6F66',
    warningSoft: '#562026',
  },
  radius: { small: 8, medium: 14, large: 18 },
  space: { xs: 4, sm: 8, md: 16, lg: 24, xl: 32 },
  font: {
    body: 'Inter_400Regular',
    medium: 'Inter_500Medium',
    semibold: 'Inter_600SemiBold',
    heading: 'Cinzel_700Bold',
    brand: 'CinzelDecorative_700Bold',
  },
} as const;

export const meepleUITheme = {
  ...MD3DarkTheme,
  roundness: tokens.radius.medium,
  colors: {
    ...MD3DarkTheme.colors,
    primary: tokens.color.red,
    onPrimary: tokens.color.canvas,
    primaryContainer: tokens.color.redDark,
    onPrimaryContainer: tokens.color.primaryText,
    secondary: tokens.color.gold,
    onSecondary: tokens.color.canvas,
    background: tokens.color.canvas,
    surface: tokens.color.surface,
    surfaceVariant: tokens.color.elevated,
    onSurface: tokens.color.primaryText,
    onSurfaceVariant: tokens.color.secondaryText,
    outline: tokens.color.border,
    error: tokens.color.warning,
  },
};

/** @deprecated Use meepleUITheme. */
export const scoreUITheme = meepleUITheme;
