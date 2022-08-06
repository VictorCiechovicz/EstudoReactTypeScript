
import Form from '../Forms'
import List from '../List'
 
import estilos from './estilos.module.scss'
export default function Home() {
  return (


    <div
    className={estilos.home} >
      
      <div>
        <Form/>
        </div>

      <div>
      <List/>
      </div>

    </div>
  );
}

