import ButtonBoxAdmin from "../components/ButtonBoxAdmin";
import FormularioRegistroPersonas from "../components/personal/CardPersonalRegistro";
import '../assets/css/personal/personalRegistro.css';

function PersonalRegistro(){
    return <div className="caja">
        <ButtonBoxAdmin/>
        <div className="cardPersonal">
            <FormularioRegistroPersonas/>
        </div>
    </div>
  }
  export default PersonalRegistro;