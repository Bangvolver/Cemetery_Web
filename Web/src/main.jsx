import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import Button from './Button.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <Button txtButton="bottone"/>
    <Button txtButton="minion 1"/>
    <Button txtButton="minion 2"/>
    <Button txtButton="minion 3"/>
  </>
)

// para estilar eu va a usar tailwind
// con react snippets la vida es felicidad
// styles components para estilar los componentes, god