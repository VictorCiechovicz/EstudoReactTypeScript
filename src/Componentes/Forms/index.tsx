
import { useState } from 'react'
import Button from '../Button'
import estilos from './estilos.module.scss'

export default function Form(){

const [tarefa, setTarefa] = useState();

const onChange = (tarefa:string) =>{
const value = tarefa.target.value;

setTarefa(value);
}

const showData= () => {
  console.log(tarefa)
}



  return(

       <form >
     <div className={estilos.container}>

         <div className={estilos.content}>
          <div className={estilos.itemcontent}>
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
              value={tarefa}
              onChange={onChange}
                          
              />
       
       <input
       type="button"
       onClick={showData}
       />
          </div>
           
           <div className={estilos.itemcontent}>
           <label 
          className={estilos.title}
           htmlFor="tempo">
            Tempo:
            </label>
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
           
           </div>
          </div>
        <div
        className={estilos.button}> 
         <Button
         
          texto="Adicionar" />
          </div>
         
        
         </div>
         </form>
 )
}