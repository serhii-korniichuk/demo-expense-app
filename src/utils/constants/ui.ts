import { createTheme } from '@mui/material/styles'

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    info2: true
    info3: true
    info4: true
  }
}

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary']
    verified: Palette['primary']
    textPrimary: Palette['primary']
    textSecondary: Palette['primary']
    textSecondary2: Palette['primary']
    textSecondary3: Palette['primary']
    textSecondary4: Palette['primary']
    textSecondary5: Palette['primary']
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    neutral?: PaletteOptions['primary']
    verified?: PaletteOptions['primary']
    textPrimary?: PaletteOptions['primary']
    textSecondary?: PaletteOptions['primary']
    textSecondary2?: PaletteOptions['primary']
    textSecondary3?: PaletteOptions['primary']
    textSecondary4?: PaletteOptions['primary']
    textSecondary5?: PaletteOptions['primary']
  }

  interface PaletteColor {
    [800]?: string
    [700]?: string
    [600]?: string
    [500]?: string
    [502]?: string
    [400]?: string
    [300]?: string
    [200]?: string
    [100]?: string
  }
  interface SimplePaletteColorOptions {
    [800]?: string
    [700]?: string
    [600]?: string
    [500]?: string
    [502]?: string
    [400]?: string
    [300]?: string
    [200]?: string
    [100]?: string
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    verified: true
  }
  interface ButtonPropsSizeOverrides {
    XL: true
    LG: true
    MD: true
    SM: true
    XS: true
  }
}

const defaultTheme = createTheme({
  palette: {
    neutral: {
      [800]: '#1B1D21',
      [700]: '#252A32',
      [600]: '#485468',
      [500]: '#8A94A6',
      [502]: '#A7ADB5',
      [400]: '#E1E8ED',
      [300]: '#F5F5F6',
      [200]: '#FBFBFD',
      [100]: '#FFFFFF'
    },
    primary: {
      main: '#1D283A',
      dark: '#7FAAF0',
      [800]: '#E45633',
      [700]: '#F06745',
      [600]: '#F0CDC4'
    },
    secondary: {
      main: '#E45633',
      dark: '#F06745',
      [800]: '#3360FF',
      [700]: '#4D73F6',
      [600]: '#9DB1F9',
      [500]: '#D7DFFC',
      [400]: '#E7EFFF'
    },
    success: {
      [800]: '#4A7B0A',
      [700]: '#539713',
      [600]: '#B5D689',
      [500]: '#D9EBC3'
    },
    warning: {
      [800]: '#F96F22',
      [700]: '#EC915B',
      [600]: '#F0AC82',
      [500]: '#F5C7AB'
    },
    error: {
      800: '#E33509',
      700: '#D96546',
      600: '#E18B71',
      500: '#EAB1A0'
    },
    grey: {
      100: '#FBFBFD',
      300: '#E1E8ED'
    },
    verified: {
      main: 'rgba(116, 190, 41, 0.14)'
    },
    textPrimary: {
      main: '#FFFFFF'
    },
    textSecondary: {
      main: '#485469'
    },
    textSecondary2: {
      main: '#8A94A6'
    },
    textSecondary3: {
      main: '#A7ADB5'
    },
    textSecondary4: {
      main: '#E7EFFF'
    },
    textSecondary5: {
      main: '#858A94'
    }
  },
  breakpoints: {
    values: {
      // extra-small
      xs: 426,
      // small
      sm: 769,
      // medium
      md: 1110,
      // large
      lg: 1201,
      // extra-large
      xl: 1441
    }
  }
})

// const { breakpoints } = defaultTheme

export const theme = createTheme({
  ...defaultTheme,
  components: {
    MuiContainer: {
      variants: [
        {
          props: {},
          style: {
            paddingLeft: '60px !important',
            paddingRight: '60px !important'
          }
        }
      ]
    },
    MuiTypography: {
      variants: [
        {
          props: { variant: 'h1' },
          style: {
            fontSize: 56,
            fontWeight: 700,
            lineHeight: '48px',
            color: defaultTheme.palette.textPrimary.main
          }
        },
        {
          props: { variant: 'h2' },
          style: {
            fontSize: 48,
            fontWeight: 700,
            lineHeight: '72px',
            color: defaultTheme.palette.textPrimary.main
          }
        },
        {
          props: { variant: 'h3' },
          style: {
            fontSize: 36,
            fontWeight: 700,
            lineHeight: '54px',
            color: defaultTheme.palette.textPrimary.main
          }
        },
        {
          props: { variant: 'h5' },
          style: {
            fontSize: 16,
            fontWeight: 600,
            lineHeight: '24px',
            color: defaultTheme.palette.success[700]
          }
        },
        {
          props: { variant: 'info2' },
          style: {
            fontSize: 16,
            fontWeight: 400,
            lineHeight: '155%',
            color: defaultTheme.palette.textPrimary.main
          }
        },
        {
          props: { variant: 'info3' },
          style: {
            fontSize: 14,
            fontWeight: 400,
            lineHeight: '155%',
            color: defaultTheme.palette.textPrimary.main
          }
        },
        {
          props: { variant: 'info4' },
          style: {
            fontSize: 12,
            fontWeight: 400,
            lineHeight: '155%',
            color: defaultTheme.palette.textPrimary.main,
            '&>span': {
              color: defaultTheme.palette.primary.dark,
              cursor: 'pointer'
            }
          }
        }
      ]
    },
    MuiButton: {
      variants: [
        {
          props: { size: 'LG' },
          style: {
            width: '100%',
            maxWidth: '330px'
          }
        },
        {
          props: { size: 'SM' },
          style: {
            width: '100%',
            maxWidth: '114px'
          }
        },
        {
          props: { type: 'button' },
          style: {
            height: '44px',
            borderRadius: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow:
              '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px rgb(0 0 0 / 14%), 0px 1px 5px rgb(0 0 0 / 12%)',
            outline: 'none',
            border: 'none',
            background: defaultTheme.palette.success[700],
            '&:hover': {
              background: defaultTheme.palette.success[800]
            }
          }
        }
      ]
    },
    MuiTextField: {
      variants: [
        {
          props: { variant: 'standard' },
          style: {
            width: '100%',
            color: defaultTheme.palette.textPrimary.main,
            '& input': {
              borderBottom: `1px solid ${defaultTheme.palette.neutral[100]} !important`,
              color: defaultTheme.palette.neutral[100],
              paddingRight: 30,
              opacity: '.7'
            },
            '& .MuiInput-root:hover:before': {
              borderBottom: `1px solid ${defaultTheme.palette.neutral[100]} !important`
            },
            '& .mui-157495d-MuiInputBase-root-MuiInput-root:after': {
              borderBottom: `1px solid ${defaultTheme.palette.neutral[100]} !important`
            },
            '.Mui-focused': {
              color: `${defaultTheme.palette.textPrimary.main} !important`
            }
          }
        }
      ]
    }
  },
  typography: {
    fontFamily: 'Montserrat'
  }
})
