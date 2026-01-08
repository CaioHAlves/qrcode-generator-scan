import React from 'react';
import {
  MuiThemeProvider,
  createTheme,
} from '@material-ui/core/styles';

// Cyberpunk 2077 Color Palette
export const cyberpunkColors = {
  neonYellow: '#FCEE0A',
  neonCyan: '#00F0FF',
  neonPink: '#FF2A6D',
  darkBg: '#0D0D0D',
  darkBgLight: '#1A1A2E',
  darkBgCard: '#16213E',
  textPrimary: '#FFFFFF',
  textSecondary: '#B0B0B0',
}

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1200,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      main: cyberpunkColors.neonYellow,
      light: cyberpunkColors.neonCyan,
      dark: cyberpunkColors.neonPink
    },
    secondary: {
      main: cyberpunkColors.darkBgCard,
      light: cyberpunkColors.darkBgLight,
      dark: cyberpunkColors.darkBg
    }
  },
  overrides: {
    MuiLink: {
      root: {
        color: cyberpunkColors.neonCyan,
        margin: '0px 0px 0px 15px',
        fontWeight: 'bold',
        cursor: 'pointer',
        textDecoration: 'none',
        fontSize: '20px',
        transition: 'all 0.3s ease',
        '&:hover': {
          color: cyberpunkColors.neonYellow,
          textShadow: `0 0 10px ${cyberpunkColors.neonYellow}`
        }
      }
    }
  }
});

interface Props {
  children: React.ReactNode;
}

const Tema = (props: Props) => {
  const { children } = props;
  return (
    <MuiThemeProvider theme={theme}>
      {children}
    </MuiThemeProvider>
  );
};

export default Tema;
