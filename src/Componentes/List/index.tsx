import React from "react";

const tarefas =[
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

export default function List(){
  return(

<aside>

  <h2>Estudo do dia</h2>

  <ul>
{tarefas.map((tarefas,id)=>(

             <li key={id}>
                <h3>{tarefas.tarefa}</h3>
               <span>{tarefas.time}</span>
             </li>

))}

  </ul>

</aside>

  )
}