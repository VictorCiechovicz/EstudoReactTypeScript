import estilos from './estilos.module.scss'

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

             <li 
             className={estilos.item}
             key={id}>
                <h3 
                className={estilos.titleitem} >
                  {tarefas.tarefa}
                  </h3>
               <span>{tarefas.time}</span>
             </li>

))}

  </ul>

</aside>

  )
}