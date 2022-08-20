import React from 'react';
import {
  MuiThemeProvider,
  createTheme,
} from '@material-ui/core/styles';

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
      main: '#e6dddc',
      light: '#F2DBAE',
      dark: '#F2CE1B'
    },
    secondary: {
      main: '#e6dddc',
      light: '#47419c',
      dark: '#18153b'
    }
  },
  overrides: {
    MuiLink: {
      root: {
        color: '#F2DBAE',
        margin: '0px 0px 0px 15px',
        fontWeight: 'bold',
        cursor: 'pointer',
        textDecoration: 'none',
        fontSize: '20px'
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
