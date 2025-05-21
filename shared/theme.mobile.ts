import { COLORS, FONTS } from './theme';

// Define theme interface for mobile
export interface MobileTheme {
  background: string;
  backgroundAlt: string;
  text: string;
  textSecondary: string;
  primary: string;
  primaryHover: string;
  buttonText: string;
  border: string;
  card: string;
  cardHover: string;
  success: string;
  error: string;
  warning: string;
  statusBar: 'light' | 'dark';
}

// Dark theme (default)
export const darkTheme: MobileTheme = {
  background: COLORS.JET_BLACK,
  backgroundAlt: '#121212',
  text: COLORS.PURE_WHITE,
  textSecondary: COLORS.COOL_GRAY,
  primary: COLORS.AMPLIFY_LIME,
  primaryHover: '#9FE600', // Slightly darker lime for hover states
  buttonText: '#000000',
  border: 'rgba(255, 255, 255, 0.1)',
  card: '#1A1A1A',
  cardHover: '#252525',
  success: '#4CAF50',
  error: '#F44336',
  warning: '#FF9800',
  statusBar: 'light',
};

// Light theme
export const lightTheme: MobileTheme = {
  background: COLORS.GHOST_WHITE,
  backgroundAlt: COLORS.PURE_WHITE,
  text: COLORS.CHARCOAL_GRAY,
  textSecondary: COLORS.COOL_GRAY,
  primary: COLORS.AMPLIFY_LIME,
  primaryHover: '#9FE600', // Slightly darker lime for hover states
  buttonText: '#000000',
  border: 'rgba(0, 0, 0, 0.1)',
  card: COLORS.PURE_WHITE,
  cardHover: COLORS.OFF_WHITE,
  success: '#4CAF50',
  error: '#F44336',
  warning: '#FF9800',
  statusBar: 'dark',
};
