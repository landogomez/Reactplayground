import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {App} from './App'
import './index.css'
//Punto de Entrada de la Aplicación
createRoot(document.getElementById('root')).render(
  <App />
)
