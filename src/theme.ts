import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  spacing: 8,
  palette: {
    primary: {
      main: '#000000'
    },
    text: {
      primary: '#000000',
      secondary: '#999999'
    },
    background: {
      default: '#ffffff',
      paper: '#e1e1e1'
    }
  },

  typography: {
    fontSize: 14, //basic

    body1: {
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '16px'
    },

    h1: {
      fontSize: '20px',
      fontWeight: 400,
      lineHeight: '24px'
    },
    h2: {
      fontSize: '24px',
      fontWeight: 600,
      lineHeight: '24px'
    },
    h3: {
      fontFamily: `'Montserrat', sans-serif`,
      fontWeight: 400,
      fontSize: '5rem'
    }
  },

  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: false,
        disableGutters: true
      },
      styleOverrides: {
        root: ({ theme }) => ({
          paddingLeft: theme.spacing(0),
          paddingRight: theme.spacing(0),
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          width: '100%',
          boxSizing: 'border-box'
        })
      }
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'quantity' },
          style: {
            color: '#999999',
            textTransform: 'none',
            fontSize: '24px',
            fontWeight: 400,
            lineHeight: '24px'
          }
        }
      ]
    }
  }
})

export default theme
