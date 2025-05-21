import { COLORS, FONTS, SPACING, BORDER_RADIUS } from '@shared/theme';

// Define theme interface
export interface Theme {
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

// Dark theme (default)
export const darkTheme: Theme = {
  // Colors
  background: COLORS.JET_BLACK,
  backgroundAlt: '#121212',
  text: COLORS.PURE_WHITE,
  textSecondary: COLORS.COOL_GRAY,
  primary: COLORS.AMPLIFY_LIME,
  primaryHover: '#9FE600', // Slightly darker lime for hover states
  secondary: '#6C757D',
  secondaryHover: '#5A6268',
  accent: '#FF3366',
  accentHover: '#E62E5C',
  buttonText: '#000000',
  border: 'rgba(255, 255, 255, 0.1)',
  glass: 'rgba(30, 30, 30, 0.7)',
  card: '#1A1A1A',
  cardHover: '#252525',
  success: '#4CAF50',
  error: '#F44336',
  warning: '#FF9800',
  
  // Typography
  fonts: {
    primary: "'Inter', sans-serif",
    secondary: "'Sora', sans-serif",
    display: "'Playfair Display', serif",
  },
  fontSizes: {
    xs: '0.75rem',     // 12px
    sm: '0.875rem',    // 14px
    base: '1rem',      // 16px
    lg: '1.125rem',    // 18px
    xl: '1.25rem',     // 20px
    '2xl': '1.5rem',   // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
    '5xl': '3rem',     // 48px
  },
  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  
  // Spacing
  spacing: {
    xs: '0.25rem',  // 4px
    sm: '0.5rem',   // 8px
    md: '1rem',     // 16px
    lg: '1.5rem',   // 24px
    xl: '2rem',     // 32px
    '2xl': '3rem',  // 48px
  },
  
  // Border Radius
  borderRadius: {
    sm: '0.25rem',  // 4px
    md: '0.5rem',   // 8px
    lg: '0.75rem',  // 12px
    xl: '1.25rem',  // 20px
    full: '9999px', // Circle/Pill
  },
  
  // Shadows
  shadows: {
    sm: '0 2px 4px rgba(0, 0, 0, 0.3)',
    md: '0 4px 8px rgba(0, 0, 0, 0.3)',
    lg: '0 8px 16px rgba(0, 0, 0, 0.3)',
    xl: '0 12px 24px rgba(0, 0, 0, 0.3)',
  },
  
  // Transitions
  transitions: {
    fast: '0.2s ease',
    normal: '0.3s ease',
    slow: '0.5s ease',
  },
};

// Light theme
export const lightTheme: Theme = {
  // Colors
  background: COLORS.GHOST_WHITE,
  backgroundAlt: COLORS.PURE_WHITE,
  text: COLORS.CHARCOAL_GRAY,
  textSecondary: COLORS.COOL_GRAY,
  primary: COLORS.AMPLIFY_LIME,
  primaryHover: '#9FE600', // Slightly darker lime for hover states
  secondary: '#6C757D',
  secondaryHover: '#5A6268',
  accent: '#FF3366',
  accentHover: '#E62E5C',
  buttonText: '#000000',
  border: 'rgba(0, 0, 0, 0.1)',
  glass: 'rgba(255, 255, 255, 0.7)',
  card: COLORS.PURE_WHITE,
  cardHover: COLORS.OFF_WHITE,
  success: '#4CAF50',
  error: '#F44336',
  warning: '#FF9800',
  
  // Typography
  fonts: {
    primary: "'Inter', sans-serif",
    secondary: "'Sora', sans-serif",
    display: "'Playfair Display', serif",
  },
  fontSizes: {
    xs: '0.75rem',     // 12px
    sm: '0.875rem',    // 14px
    base: '1rem',      // 16px
    lg: '1.125rem',    // 18px
    xl: '1.25rem',     // 20px
    '2xl': '1.5rem',   // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
    '5xl': '3rem',     // 48px
  },
  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  
  // Spacing
  spacing: {
    xs: '0.25rem',  // 4px
    sm: '0.5rem',   // 8px
    md: '1rem',     // 16px
    lg: '1.5rem',   // 24px
    xl: '2rem',     // 32px
    '2xl': '3rem',  // 48px
  },
  
  // Border Radius
  borderRadius: {
    sm: '0.25rem',  // 4px
    md: '0.5rem',   // 8px
    lg: '0.75rem',  // 12px
    xl: '1.25rem',  // 20px
    full: '9999px', // Circle/Pill
  },
  
  // Shadows
  shadows: {
    sm: '0 2px 4px rgba(0, 0, 0, 0.1)',
    md: '0 4px 8px rgba(0, 0, 0, 0.1)',
    lg: '0 8px 16px rgba(0, 0, 0, 0.1)',
    xl: '0 12px 24px rgba(0, 0, 0, 0.1)',
  },
  
  // Transitions
  transitions: {
    fast: '0.2s ease',
    normal: '0.3s ease',
    slow: '0.5s ease',
  },
};
