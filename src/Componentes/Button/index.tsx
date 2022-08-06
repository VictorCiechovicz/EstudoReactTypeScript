import estilos from './estilos.module.scss'

export default function Button({texto}:{texto:string}){

  return(

   <button
   className={estilos.button}  
  
   >{texto}</button>
  )
}