import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.jsx';

import '@/assets/sass/index.sass';
import '@fontsource/jetbrains-mono';
import '@fontsource/jetbrains-mono/400.css';
import '@fontsource-variable/onest';
import '@fontsource-variable/onest/wght.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
