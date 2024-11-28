// eslint-disable-next-line no-unused-vars
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import React from 'react'
import './main.css'
import App from './App'
import { UserProvider } from '../src/components/usercontent'; 

createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <UserProvider>
        <App/>
      </UserProvider>
    </BrowserRouter>
  </>
)