import estilos from './estilos.module.scss'

export default function Relogio(){
  return(

<div className={estilos.container}>

<span className={estilos.itenscontainer}>0</span>
<span className={estilos.itenscontainer}>0</span>
<span className={estilos.itenscontainer}>:</span>
<span className={estilos.itenscontainer}>0</span>
<span className={estilos.itenscontainer}>0</span>

</div>

  )
}