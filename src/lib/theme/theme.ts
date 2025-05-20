

import { configureFonts, MD3LightTheme } from 'react-native-paper';
import { StyleSheet, ViewStyle } from 'react-native';

// Extend the default theme
export const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#FF6900',       //  primary color
    secondary: '#FDF8F7',     //  secondary color
    background: '#FFFFFF',    // Default background
    surface: '#FDF8F7',      // Similar to  secondary
    text: '#111111',         // Body text color
  },
  fonts: configureFonts({
    config: {
      bodyLarge: {           // Equivalent to body1
        fontFamily: 'Inter-Regular',
        fontSize: 16,
        // color: '#111111',    // Typography.body1.color
      },
    },
  }),
  styles: StyleSheet.create({
    button: {               // MuiButton styleOverrides
      paddingVertical: 8,
      paddingHorizontal: 24,
    },
    shadow: {              // theme.shadows[1]
      shadowColor: 'lightgray',
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.22,
      shadowRadius: 5,
      elevation: 3,        // Android shadow
    },
  }),
};

// TypeScript support
declare global {
  namespace ReactNativePaper {
    interface ThemeColors {
      secondary: string;   // Extend colors
    }
    interface Theme {
      styles: {           // Extend theme with styles
        button: ViewStyle;
        shadow: ViewStyle;
      };
    }
  }
}