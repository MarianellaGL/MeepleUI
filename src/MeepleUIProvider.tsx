import type { PropsWithChildren } from 'react';
import { View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_500Medium, Inter_600SemiBold } from '@expo-google-fonts/inter';
import { Cinzel_700Bold } from '@expo-google-fonts/cinzel';
import { CinzelDecorative_700Bold } from '@expo-google-fonts/cinzel-decorative';

import { meepleUITheme, tokens } from './theme';

export function MeepleUIProvider({ children }: PropsWithChildren) {
  const [loaded, error] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Cinzel_700Bold,
    CinzelDecorative_700Bold,
  });

  if (!loaded && !error) {
    return <View style={{ flex: 1, backgroundColor: tokens.color.canvas }} />;
  }

  return <PaperProvider theme={meepleUITheme}>{children}</PaperProvider>;
}

/** @deprecated Use MeepleUIProvider. */
export const ScoreUIProvider = MeepleUIProvider;
