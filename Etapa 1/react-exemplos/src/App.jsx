import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/counter'

function App() {
  const [count, setCount] = useState(0)
  function updateCount() {
    setCount(count + 1)
  }

  const updateCount1 = () => count + 1;

  const data = {
    "nome": "Jhon",
    "update": (newName) => `O novo nome é ${newName}`,
    "endereco": {
      "rua": "xyz",
      "numero": "120",
      "complementos": ["casa", "Na esquina de um local"]
    }
  }

  data.update("Jhonnathan")
  data.endereco.complementos[1]

  return (
    <>
      <Counter title="Contador superior"/>
      <Counter title="Contador inferior" initial="100"/>
    </>
  )
}

export default App
