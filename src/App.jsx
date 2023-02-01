import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import itemListContainer from './components/itemListContainer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <itemListContainer greeting='Bienvenido a Potterhead Articulos!' />
    </div>
  )
}

export default App
