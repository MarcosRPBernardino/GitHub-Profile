import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import './global.css';

// import { PI as numeroPi, GMT_BRASIL } from './teste.js'
// import nomes from './nomes.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* {numeroPi} */}
    <App />
  </StrictMode>,
)
