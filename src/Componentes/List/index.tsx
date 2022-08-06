import estilos from './estilos.module.scss'
import Item from './Item'
import Cronometro from '../Cronometro'
import { useState } from 'react'




export default function List(){
  const [tarefas,setTarefas] = useState(
    [
      {
        id:1,
        tarefa:'React',
        time:'02:00:00'
      },
      {
        id:2,
        tarefa:'JavaScrip',
        time:'02:00:00'
      },
      {
        id:3,
        tarefa:'TypeScript',
        time:'02:00:00'
      },
    
      ]
      
  )
  return(

<aside
className={estilos.container}>


  
<div className={estilos.boxitem}>
<h2
className={estilos.title}
onClick={(terefas) => setTarefas(
  [...tarefas, {id:4, tarefa:"estudar", time:"02:00:00"}]
)} 
>Estudo do dia</h2>
  <ul>
{tarefas.map((tarefas,id)=>(

            <Item 
            key={id}
            tarefa={tarefas.tarefa}
            time={tarefas.time}
            
            />

))}

  </ul>
 
  </div>
  <div><Cronometro/></div>
  
</aside>

  )
}