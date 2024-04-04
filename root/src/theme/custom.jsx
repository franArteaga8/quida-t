import {createTheme} from '@mui/material/styles'

export const customTheme = createTheme({
    palette: {
        type: 'light',
        primary: {
          main: '#3f51b5',
        },
        secondary: {
          main: '#f50057',
        },
    },
    spacing: {
        unit: 8, // example default spacing unit
    },
    typography: {
        fontFamily: 'Roboto, sans-serif', // example font family
        fontSize: 16, // example base font size
        // Customize other typography settings as needed
    }
})