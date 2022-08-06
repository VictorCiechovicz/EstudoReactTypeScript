
import Button from '../Button'
import estilos from './estilos.module.scss'

export default function Form(){
  return(

       <form >
     <div className={estilos.container}>
         <div
         className={estilos.content}
         >
              <label 
              className={estilos.title}
              htmlFor="tarefa">
              Adicione um novo estudo
              </label>

              <input
              className={estilos.boxinput}
              name="tarefa"
              type="text"
              id="tarefa"
              placeholder="O que você quer estudar?"
              required
              />
         </div>

          <div className={estilos.content}>
           <label 
          className={estilos.title}
           htmlFor="tempo">
            Tempo:
            <input 
           className={estilos.boxinputtime}
            type="time"
            step="1"
            name="tempo"
            id="tempo"
            min="00:00:00"
            max="01:30:00"
            required
            />
           </label>
          </div>
        <div
        className={estilos.button}> 
          <Button/>
          </div>
      
         </div>
         </form>
 )
}