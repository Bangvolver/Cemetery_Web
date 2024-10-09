// eslint-disable-next-line no-unused-vars
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import React from 'react'
import './main.css'
import App from './App'

createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </>
)