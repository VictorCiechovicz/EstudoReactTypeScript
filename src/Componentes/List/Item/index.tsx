import estilos from '../../List/estilos.module.scss'

export default function Item({tarefa,time}:{tarefa:string,time:string}){
return(


  <li className={estilos.item}>

     <h3 className={estilos.titleitem} >{tarefa}</h3>
    <span>{time}</span>
  </li>
)
}