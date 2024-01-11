import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import NavBar from "./components/NavBar"
import ItemListContainer from './components/ItemListContainer'
import Carta from './components/Carta'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <ItemListContainer titulo={"🚨 Atención 🚨"} mensaje={"Estamos actualizando el Sitio Web. Regresamos en unos minutos."} />
      <Carta/>
    </>
  )
}

export default App
