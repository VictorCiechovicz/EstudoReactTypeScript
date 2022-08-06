import estilos from './estilos.module.scss'

import Relogio from './Relogio'
import Button from '../Button'

export default function Cronometro(){
  return(

  <div className={estilos.container}>
<h1
className={estilos.title}>Escolha um card e inicie o cronometro!</h1>

<div
className={estilos.relogio}
>
  <Relogio />
</div>

<div
className={estilos.button}
>
<Button
texto='Comecar!'
/>
</div>


  </div>
  )
}