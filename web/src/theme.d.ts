import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    // Colors
    background: string;
    backgroundAlt: string;
    text: string;
    textSecondary: string;
    primary: string;
    primaryHover: string;
    secondary: string;
    secondaryHover: string;
    accent: string;
    accentHover: string;
    buttonText: string;
    border: string;
    glass: string;
    card: string;
    cardHover: string;
    success: string;
    error: string;
    warning: string;
    
    // Typography
    fonts: {
      primary: string;
      secondary: string;
      display: string;
    };
    fontSizes: {
      xs: string;
      sm: string;
      base: string;
      lg: string;
      xl: string;
      '2xl': string;
      '3xl': string;
      '4xl': string;
      '5xl': string;
    };
    fontWeights: {
      light: number;
      normal: number;
      medium: number;
      semibold: number;
      bold: number;
    };
    
    // Spacing
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      '2xl': string;
    };
    
    // Border Radius
    borderRadius: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      full: string;
    };
    
    // Shadows
    shadows: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    
    // Transitions
    transitions: {
      fast: string;
      normal: string;
      slow: string;
    };
  }
}