import '../../assets/css/personal/personalRegistro.css';
import { Formik } from "formik";

export function CardPersonalRegistro(){
    return(
        <div className='cardRegistroPersonal'>
            <form> 
                <h2>Datos del Empleado</h2> 
                <div id="input">
                    <label htmlFor="">
                        Celula de Intentidad:
                    </label>
                    <input type="text" id="inputText" placeholder="Escribe tu numero de carnet"/>
                </div>
                <div id="input">
                    <label htmlFor="">
                        Nombres:
                    </label>
                    <input type="text" id="inputText" placeholder="Escribe su nombre"/>
                </div>
                <div id="input">
                    <label htmlFor="">
                            Apellido Paterno:
                    </label>
                    <input type="text" id="inputText" placeholder="Escribe su apellido paterno"/>
                </div>
                <div id="input">
                    <label htmlFor="">
                        Apellido Materno:
                    </label>
                    <input type="text" id="inputText" placeholder="Escribe su apellido Materno"/>
                </div>
                <div id="input">
                    <label htmlFor="">
                        Telefono:
                    </label>
                    <input type="text" id="inputText" placeholder="Escribe su numero de telefono"/>
                </div>
                <div id="input">
                    <label htmlFor="">
                        Tipo de Empleado:
                    </label>
                    <select name="ad" onchange="crearlink(this.form)">
                        <option selected> Guardia </option>
                        <option value="1.htm">Secretaria</option>
                    </select>
                </div>
                <div id="input">
                    <label htmlFor="">
                        Correo Electronico:
                    </label>
                    <input type="text" id="inputText" placeholder="Escribe su correo Electronico"/>
                </div>
                <div className="espacioBoton">
                    <div className='btn'>
                    <button  type="submit">
                        Guardar
                    </button>
                    </div>
                    <div className='btn'>
                    <button type="submit">
                        Cancelar
                    </button>
                    </div>
                </div>
        
            </form>
        </div>
    )
}