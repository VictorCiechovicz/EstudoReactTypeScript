import React from 'react'
import Button from '../Button'
import estilos from './estilos.module.scss'



export default class Form extends React.Component {
state={
  tarefa:"",
  time:"00:00"
}

adicionarTarefa(evento: React.FormEvent){
evento.preventDefault()

}
render(){

  return(

    <form onSubmit={this.adicionarTarefa.bind(this)}>
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
           value={this.state.tarefa}
           onChange={evento => this.setState({...this.state, tarefa: evento.target.value})}
           required
       
          
                       
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
         value={this.state.time}
         onChange={evento => this.setState({...this.state, time: evento.target.value})}
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
}

