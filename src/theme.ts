import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000'
    },
    text: {
      primary: '#000000',
      secondary: '#999999'
    },
    background: {
      default: '#ffffff'
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
    }
  },

  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: false,
        disableGutters: true
      },
      styleOverrides: {
        root: {
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          width: '100%',
          boxSizing: 'border-box'
        }
      }
    }
  }
})

export default theme
