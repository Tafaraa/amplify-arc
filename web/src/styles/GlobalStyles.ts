import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&family=Sora:wght@300;400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.primary};
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.background};
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    width: 100%;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.display};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    line-height: 1.2;
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
  
  @media (max-width: 768px) {
    h1 {
      font-size: ${({ theme }) => theme.fontSizes['4xl']};
    }
    
    h2 {
      font-size: ${({ theme }) => theme.fontSizes['3xl']};
    }
    
    h3 {
      font-size: ${({ theme }) => theme.fontSizes['2xl']};
    }
  }
  
  @media (max-width: 576px) {
    h1 {
      font-size: ${({ theme }) => theme.fontSizes['3xl']};
    }
    
    h2 {
      font-size: ${({ theme }) => theme.fontSizes['2xl']};
    }
    
    h3 {
      font-size: ${({ theme }) => theme.fontSizes.xl};
    }
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSizes['5xl']};
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSizes['4xl']};
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
  }

  h4 {
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
  }

  h5 {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }

  h6 {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }

  p {
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  a {
    color: ${({ theme }) => theme.primary};
    text-decoration: none;
    transition: color ${({ theme }) => theme.transitions.fast};

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }

  button {
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
  }

  input, textarea, select {
    font-family: ${({ theme }) => theme.fonts.primary};
  }

  /* Premium Card Styles */
  .premium-card {
    background: ${({ theme }) => theme.card};
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    box-shadow: ${({ theme }) => theme.shadows.lg};
    transition: transform ${({ theme }) => theme.transitions.normal},
                box-shadow ${({ theme }) => theme.transitions.normal};

    &:hover {
      transform: translateY(-4px);
      box-shadow: ${({ theme }) => theme.shadows.xl};
    }
  }

  /* Premium Button Styles */
  .premium-button {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.buttonText};
    padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    border: none;
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    transition: all ${({ theme }) => theme.transitions.normal};
    cursor: pointer;

    &:hover {
      background: ${({ theme }) => theme.primaryHover};
      transform: translateY(-2px);
    }

    &:active {
      transform: translateY(0);
    }
  }

  /* Glass Effect */
  .glass-effect {
    background: ${({ theme }) => theme.glass};
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: ${({ theme }) => theme.borderRadius.lg};
  }
  
  /* Container Styles */
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 ${({ theme }) => theme.spacing.xl};
    position: relative;
  }
  
  @media (max-width: 1024px) {
    .container {
      padding: 0 ${({ theme }) => theme.spacing.lg};
    }
  }
  
  @media (max-width: 576px) {
    .container {
      padding: 0 ${({ theme }) => theme.spacing.md};
    }
  }
  
  /* Section Styles */
  section {
    position: relative;
    padding: ${({ theme }) => theme.spacing['2xl']} 0;
  }
  
  @media (max-width: 768px) {
    section {
      padding: ${({ theme }) => theme.spacing.xl} 0;
    }
  }
  
  /* Utility Classes */
  .text-center {
    text-align: center;
  }
  
  .flex {
    display: flex;
  }
  
  .flex-column {
    flex-direction: column;
  }
  
  .items-center {
    align-items: center;
  }
  
  .justify-center {
    justify-content: center;
  }
  
  .justify-between {
    justify-content: space-between;
  }
  
  .gap-sm {
    gap: ${({ theme }) => theme.spacing.sm};
  }
  
  .gap-md {
    gap: ${({ theme }) => theme.spacing.md};
  }
  
  .gap-lg {
    gap: ${({ theme }) => theme.spacing.lg};
  }
  
  .w-full {
    width: 100%;
  }
  
  .relative {
    position: relative;
  }
  
  .z-10 {
    z-index: 10;
  }
  
  /* Animation Utilities */
  .animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
  
  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
  
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
  
  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;
