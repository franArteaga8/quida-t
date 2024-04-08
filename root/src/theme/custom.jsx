import {createTheme} from '@mui/material/styles'

export const customTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#44259D',
      light: '#5863a2',
    },
    secondary: {
      main: '#FCFAE6',
    },
    background: {
      default: '#FCFAE6',
      paper: '#FCFAE6',
      lavender: '#201E27'
    },
    text: {
      primary: 'rgba(0,0,0,0.86)',
      secondary: 'rgba(0,0,0,0.5)',
    },
  },
    spacing: 8 // example default spacing unit
    ,
    typography: {
        fontFamily: 'Roboto, sans-serif', // example font family
        fontSize: 16, // example base font size
        // Customize other typography settings as needed
    } 
})


// dark 282828, mint 21F3C1
// light ECEFD7, lavender 44259D