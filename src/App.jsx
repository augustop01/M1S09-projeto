import { useState } from 'react'
import './App.css'
import { CardAdicionar } from './components/CardAdicionar.jsx'

function App() {

  const [tarefas, setTarefas] = useState([]);

  return (
    <>
      <CardAdicionar/>
    </>
  )
}

export default App
