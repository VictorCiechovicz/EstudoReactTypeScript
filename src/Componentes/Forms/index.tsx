import React from "react";
import Button from '../Button'

export default function Form(){
  return(

       <form>
         <div>
              <label htmlFor="tarefa">
              Adicione um novo estudo
              </label>
              <input
              name="tarefa"
              type="text"
              id="tarefa"
              placeholder="O que você quer estudar?"
              required
              />
         </div>

          <div>
           <label htmlFor="tempo">
            Tempo
            <input 
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
         <Button/>
         </form>
 )
}