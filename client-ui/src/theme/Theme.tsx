import { createTheme } from "@mui/material/styles";
import Colors from './Colors'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: Colors.Gold
    }
  },
});

export default darkTheme;