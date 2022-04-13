import React from 'react';
import './App.css';
import { ThemeProvider } from '@mui/material';
import darkTheme from './theme/Theme';
import ImageProcessorDashboard from './pages/ImageProcessorDashboard';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <ImageProcessorDashboard />
    </ThemeProvider>
  );
}

export default App;
