import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/app.scss'
import { Contexto_DataProvider } from './context/contextoFunciones';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Contexto_DataProvider>
      <App />
    </Contexto_DataProvider>
  </React.StrictMode>,
)
