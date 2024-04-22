import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import Home from '../Home'; // Importando como um componente padrão

const theme = createTheme({
  palette: {
    primary: {
      main: '#D68630',
    },
    secondary: {
      main: '#3f51b5',
    },
  },
  shape: {
    borderRadius: 4,
  },
  typography: {
    fontFamily: 'Poppins',
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
};

export default App;
