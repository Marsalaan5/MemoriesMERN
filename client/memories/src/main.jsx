


import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducers/index.js';  
import { ThemeProvider, createTheme } from '@mui/material/styles'; 
import { BrowserRouter } from 'react-router-dom';


// Configure Redux store
const store = configureStore({
  reducer: reducers, 
});

// MUI theme configuration
const theme = createTheme({
  spacing: 8,
  palette: {
    primary: {
      main: '#1976d2', 
    },
    secondary: {
      main: '#dc004e',
    },
    red: {
      main: '#ff2c2c',
    },
  },
});

createRoot(document.getElementById('root')).render(
  <BrowserRouter> 
    <Provider store={store}> 
      <ThemeProvider theme={theme}> 
        <App /> 
      </ThemeProvider>
    </Provider>
  </BrowserRouter>
);
