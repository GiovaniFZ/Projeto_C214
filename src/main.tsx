import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { LocalStorageAdapter } from './LocalStorageAdapter.ts';
const localStorageAdapter = new LocalStorageAdapter();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App ordersRepository={localStorageAdapter} />
  </StrictMode>,
)
