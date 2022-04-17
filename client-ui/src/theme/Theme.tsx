import { createTheme } from "@mui/material/styles";
import Colors from './Colors'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: Colors.Blue
    },
    secondary: {
      main: Colors.Green
    },
    warning: {
      main: Colors.Yellow 
    },
    error: {
      main: Colors.Pink
    }
  },
});

export default darkTheme;