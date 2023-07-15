/* eslint-disable react/jsx-key */
import { useState } from 'react'
import './App.css'
import { CardAdicionar } from './components/CardAdicionar/index.jsx'
import ListItem from './components/ListItem/index.jsx';

function App() {

  const [listaTarefas, setListaTarefas] = useState([])

  const adicionarTarefa = (texto) => {
    if (texto == '') {
      alert('É necessário digitar uma tarefa.')
      return
    }
    const novaTarefa = {id: listaTarefas.length + 1, textoTarefa: texto, finalizado: false};

    setListaTarefas([...listaTarefas, novaTarefa])
  }

  const removerTarefa = (id) => {
    const novaLista = listaTarefas.filter(item => item.id != id)

    setListaTarefas(novaLista);
  }

  return (
    <>
      <CardAdicionar adicionarTarefa={adicionarTarefa}/>
      <div>{listaTarefas.map(tarefa => (
      <ListItem 
      key={tarefa.id}
      id={tarefa.id}
      removerTarefa={removerTarefa}
      textoTarefa={tarefa.textoTarefa}
      finalizado={tarefa.finalizado}
      />
      ))}</div>
    </>
  )
}

export default App
