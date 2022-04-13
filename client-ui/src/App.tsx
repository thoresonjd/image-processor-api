import React from 'react';
import './App.css';
import { ThemeProvider } from '@emotion/react';
import ImageProcessorToolbar from './components/ImageProcessorToolbar';
import darkTheme from './theme/Theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <ImageProcessorToolbar />
    </ThemeProvider>
  );
}

export default App;
