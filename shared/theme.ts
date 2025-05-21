// Shared theme configuration for Amplify ARC
export const COLORS = {
  // Base colors
  JET_BLACK: '#000000', // Background (dark mode)
  GHOST_WHITE: '#F8F9FA', // Background (light mode)
  
  // Brand colors
  AMPLIFY_LIME: '#B6FF00', // Primary accent
  OFF_WHITE: '#EDEDED', // Text on dark, muted sections
  PURE_WHITE: '#FFFFFF', // Primary headings (dark mode)
  COOL_GRAY: '#ADB5BD', // Paragraphs, secondary info
  CHARCOAL_GRAY: '#212529', // Divider lines, shadows
  
  // Glassmorphism effects
  GLASS_BLACK: 'rgba(0, 0, 0, 0.4)',
  GLASS_WHITE: 'rgba(255, 255, 255, 0.05)',
  GLASS_LIME: 'rgba(182, 255, 0, 0.15)',
};

export const FONTS = {
  HEADING: 'Sora, sans-serif',
  BODY: 'Inter, sans-serif',
};

export const SHADOWS = {
  SMALL: '0 2px 4px rgba(0, 0, 0, 0.1)',
  MEDIUM: '0 4px 8px rgba(0, 0, 0, 0.12)',
  LARGE: '0 8px 16px rgba(0, 0, 0, 0.14)',
  GLOW: `0 0 15px ${COLORS.AMPLIFY_LIME}`,
};

export const TRANSITIONS = {
  FAST: '0.2s ease',
  MEDIUM: '0.3s ease',
  SLOW: '0.5s ease',
};

export const BREAKPOINTS = {
  MOBILE: '576px',
  TABLET: '768px',
  DESKTOP: '1024px',
  LARGE_DESKTOP: '1440px',
};

export const SPACING = {
  XS: '0.25rem',
  SM: '0.5rem',
  MD: '1rem',
  LG: '1.5rem',
  XL: '2rem',
  XXL: '3rem',
};

export const BORDER_RADIUS = {
  SM: '4px',
  MD: '8px',
  LG: '12px',
  PILL: '9999px',
};
