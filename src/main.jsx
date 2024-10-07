import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import Header from './Header'

createRoot(document.getElementById('root')).render(
  <>
      <Header/>
  </>
)

