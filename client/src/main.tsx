import './index.css'
import React from 'react'
import App from './App.tsx'
import lottie from 'lottie-web'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { defineElement } from '@lordicon/element'

// Définir l'élément "lord-icon" pour l'animation
defineElement(lottie.loadAnimation)



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </React.StrictMode>,
)
