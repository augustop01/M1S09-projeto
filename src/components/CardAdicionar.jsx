import { useState } from "react"

export function CardAdicionar(funcao) {
  const [texto, setTexto] = useState('Texto da tarefa.')
  return (
    <div>
      <input type="text" value={texto} onChange={setTexto} placeholder="Adicionar tarefa"/>
      <button onClick={adicionarTarefa()}>Criar nova tarefa</button>
    </div>
  )
}
