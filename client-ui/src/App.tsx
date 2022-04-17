import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from '@mui/material';
import darkTheme from './theme/Theme';
import { ImageProcessor, Error } from './pages';

const App: React.FC = () => {
  return (
    <Router>
      <ThemeProvider theme={darkTheme}>
        <Routes>
          <Route path='/' element={<ImageProcessor />} />
          <Route path='/error' element={<Error />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
