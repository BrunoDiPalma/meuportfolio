import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
      primary: {
        main: '#232323',
    },
    secondary: {
      main: '#b71c1c',
      },
    },
    typography: {
        fontFamily: "Helvetica Neue"
    }
  });
  
  theme = responsiveFontSizes(theme)

  export default theme; 