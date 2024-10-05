import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import Buttons from './Buttons'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'

createRoot(document.getElementById('root')).render(
  <>
    <Buttons txtButton="mamamia"/>
    <Button>ascsacs</Button>
  </>
)
