import { createTheme } from '@mui/material';
import { blue, cyan, yellow } from '@mui/material/colors';

export const DarkTheme = createTheme({
    palette: {
        primary: {
            main: blue[700], 
            dark: blue[800],
            light: blue[500],
            contrastText: '#fffff',
        },
        secondary: {
            main: cyan[700], 
            dark: cyan[800],
            light: cyan[500],
            contrastText: '#fffff',
        },
        background: {
            paper: '#303134',
            default: '#202124',
        }
    }
});