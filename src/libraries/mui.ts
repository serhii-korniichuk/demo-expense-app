import { responsiveFontSizes, createTheme, Theme } from '@mui/material/styles';

let theme: Theme = createTheme({
  breakpoints: {
    values: {
      xs: 365,
      sm: 600,
      md: 900,
      lg: 1320,
      xl: 1920,
    },
  },
  spacing: (value: number) => value * 8,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: 'Montserrat SemiBold',
          fontSize: '16px',
          backgroundColor: '#539713',
          borderRadius: '0px',
          padding: '8px 16px',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily: 'Montserrat Regular',
          fontSize: '14px',
          lineHeight: 1.5,
          color: '#FFFFFF',
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          fontFamily: 'Montserrat Regular',
          fontSize: '16px',
          lineHeight: 1.5,
          color: '#FFFFFF',
          opacity: '0.7',
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontFamily: 'Montserrat Regular',
          fontSize: '12px',
          lineHeight: 1.5,
        },
      },
    },
  },
  palette: {
    background: {
      default: '#F1F2F1',
      paper: '#1D283A',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#4da000',
    },
    primary: {
      main: '#FFFFFF',
      dark: '#5e9e23',
      light: '#FFFFFF',
      contrastText: '#FFFFFF',
    },
  },
  typography: {
    button: {
      fontFamily: 'Montserrat SemiBold',
      fontSize: 16,
      textTransform: 'none',
      width: '100%',
    },
    h1: {
      fontFamily: 'Montserrat Bold',
      fontSize: '56px',
      lineHeight: 1.5,
      fontWeight: 700,
      textTransform: 'uppercase',
    },
    h2: {
      fontFamily: 'Montserrat Bold',
      fontSize: '48px',
      lineHeight: 1.5,
      fontWeight: 700,
      textTransform: 'uppercase',
    },
    h3: {
      fontFamily: 'Montserrat Bold',
      fontSize: '36px',
      lineHeight: 1.5,
      fontWeight: 700,
    },
    h4: {
      fontFamily: 'Montserrat SemiBold',
      fontSize: '24px',
      lineHeight: 1.5,
      fontWeight: 600,
    },
    h5: {
      fontFamily: 'Montserrat SemiBold',
      fontSize: '16px',
      lineHeight: 1.55,
      fontWeight: 600,
    },
  },
});

theme = responsiveFontSizes(theme);

export { theme };
