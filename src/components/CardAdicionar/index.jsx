/* eslint-disable react/prop-types */
import { useState } from "react"

export function CardAdicionar(props) {

  const [textoTarefa, setTextoTarefa] = useState('')

  const handleAdicionarTarefa = () => {
    props.adicionarTarefa(textoTarefa);
    setTextoTarefa('');
  }

  return (
    <div>
      <input 
      type="text" 
      value={textoTarefa} 
      onChange={(evento) => setTextoTarefa(evento.target.value)}
      placeholder="Adicionar tarefa"
      />
      <button onClick={() => handleAdicionarTarefa() }>Adicionar</button>
    </div>
  )

}
