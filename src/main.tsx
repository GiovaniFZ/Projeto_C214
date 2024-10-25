import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { LocalStorageAdapter } from './LocalStorageAdapter.ts';
import { ThemeProvider } from '@emotion/react';
import theme from './theme.ts';
const localStorageAdapter = new LocalStorageAdapter();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
    <App ordersRepository={localStorageAdapter} />
    </ThemeProvider>
  </StrictMode>,
)
