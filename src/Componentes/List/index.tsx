import estilos from './estilos.module.scss'
import Item from './Item'

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

<aside
className={estilos.container}>


  <h2 className={estilos.title}>Estudo do dia</h2>

  <ul>
{tarefas.map((tarefas,id)=>(

            <Item 
            key={id}
            tarefa={tarefas.tarefa}
            time={tarefas.time}
              />

))}

  </ul>

</aside>

  )
}