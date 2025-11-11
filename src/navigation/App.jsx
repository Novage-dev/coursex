import React, { useEffect } from 'react';
import { Platform } from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import Menu from './Menu';
import { useData, ThemeProvider, TranslationProvider } from '../hooks';

// keep splash visible until resources are ready
SplashScreen.preventAutoHideAsync();

export default function App() {
  const { isDark, theme, setTheme } = useData();

  // ✅ load custom fonts
  const [fontsLoaded] = useFonts({
    'OpenSans-Light': theme.assets.OpenSansLight,
    'OpenSans-Regular': theme.assets.OpenSansRegular,
    'OpenSans-SemiBold': theme.assets.OpenSansSemiBold,
    'OpenSans-ExtraBold': theme.assets.OpenSansExtraBold,
    'OpenSans-Bold': theme.assets.OpenSansBold,
  });

  // ✅ Hide splash once fonts are ready
  useEffect(() => {
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  // ✅ Navigation color theme
  const navigationTheme = {
    ...DefaultTheme,
    dark: isDark,
    colors: {
      ...DefaultTheme.colors,
      border: 'transparent',
      text: String(theme.colors.text),
      card: String(theme.colors.background),
      primary: String(theme.colors.primary),
      notification: String(theme.colors.primary),
      background: String(theme.colors.background),
    },
  };

  return (
    <TranslationProvider>
      <ThemeProvider theme={theme} setTheme={setTheme}>
          {/* ✅ ExpoStatusBar handles light/dark mode reliably */}
          <ExpoStatusBar
            style={isDark ? 'light' : 'dark'}
            backgroundColor={isDark ? '#121212' : '#ffffff'}
            translucent={false}
          />
          <NavigationContainer theme={navigationTheme}>
            <Menu />
          </NavigationContainer>
      </ThemeProvider>
    </TranslationProvider>
  );
}
