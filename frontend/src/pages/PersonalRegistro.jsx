import ButtonBoxAdmin from "../components/ButtonBoxAdmin";
import { CardPersonalRegistro } from "../components/personal/CardPersonalRegistro";
import '../assets/css/personal/personalRegistro.css';

function PersonalRegistro(){
    return <div className="caja">
        <ButtonBoxAdmin/>
        <div className="cardPersonal">
            <CardPersonalRegistro/>
        </div>
    </div>
  }
  export default PersonalRegistro;