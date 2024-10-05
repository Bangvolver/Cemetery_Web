import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import Buttons from './components/Buttons'

createRoot(document.getElementById('root')).render(
  <>
    <Buttons txtButton="mamamia"/>
    <Button>ascsacs</Button>
  </>
)
