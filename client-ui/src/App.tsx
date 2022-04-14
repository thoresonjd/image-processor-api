import React from 'react';
import './App.css';
import { ThemeProvider } from '@mui/material';
import darkTheme from './theme/Theme';
import ImageProcessor from './pages/ImageProcessor';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <ImageProcessor />
    </ThemeProvider>
  );
}

export default App;
