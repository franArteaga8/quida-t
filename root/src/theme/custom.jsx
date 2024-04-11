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
      fontFamily: 'Roboto, sans-serif', // Default font family
      logo: {
        fontFamily: 'Comfortaa, sans-serif', // Example font family for h1
        fontSize: '2.5rem', // Example font size for h1
        fontWeight: '700', // Example font weight for h1
      },
      h1: {
        fontFamily: 'Comfortaa, sans-serif', // Example font family for h1
        fontSize: '2.5rem', // Example font size for h1
        fontWeight: 'bold', // Example font weight for h1
      },
      h2: {
        fontFamily: 'Comfortaa, sans-serif', // Example font family for h2
        fontSize: '2.25rem', // Example font size for h2
        fontWeight: 'bold', // Example font weight for h2
      },
      h3: {
        fontFamily: 'Comfortaa, sans-serif', // Example font family for h3
        fontSize: '2rem', // Example font size for h3
        fontWeight: 'bold', // Example font weight for h3
      },
      h4: {
        fontFamily: 'Comfortaa, sans-serif', // Example font family for h4
        fontSize: '1.75rem', // Example font size for h4
        fontWeight: 'bold', // Example font weight for h4
      },
      h5: {
        fontFamily: 'Comfortaa, sans-serif', // Example font family for h5
        fontSize: '1.5rem', // Example font size for h5
        fontWeight: 'bold', // Example font weight for h5
      },
      h6: {
        fontFamily: 'Comfortaa, sans-serif', // Example font family for h6
        fontSize: '1.25rem', // Example font size for h6
        fontWeight: 'bold', // Example font weight for h6
      },
      subtitle1: {
        fontFamily: 'Comfortaa, sans-serif',
        fontSize: '1rem', // Example font size for subtitle1
        fontWeight: 'bold', // Example font weight for subtitle1
      },
      subtitle2: {
        fontFamily: 'Comfortaa, sans-serif',
        fontSize: '0.875rem', // Example font size for subtitle2
        fontWeight: 'bold', // Example font weight for subtitle2
      },
      body1: {
        fontSize: '1rem', // Example font size for body1
      },
      body2: {
        fontSize: '0.875rem', // Example font size for body2
      },
      caption: {
        fontSize: '0.75rem', // Example font size for caption
      },
      button: {
        fontSize: '1rem', // Example font size for button
        fontWeight: 'bold', // Example font weight for button
        textTransform: 'uppercase', // Example text transformation for button
      },
      overline: {
        fontSize: '0.75rem', // Example font size for overline
        fontWeight: 'bold', // Example font weight for overline
        textTransform: 'uppercase', // Example text transformation for overline
      },
      // You can customize other typography settings as needed
    },
})


// dark 282828, mint 21F3C1
// light ECEFD7, lavender 44259D