import '../../assets/css/personal/personal.css';

export function PersonalRegistro(){
    return(
        <div className='cardRegistroPersonal'>
            <form> 
                <h1>Datos del Empleado</h1>
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
                        Correo Electronico:
                    </label>
                    <input type="text" id="inputText" placeholder="Escribe su correo Electronico"/>
                </div>
                <div className="espacioBoton">
                    <button className="botonInicioSesion" type="submit">
                        Guardar
                    </button>
                    <button className="botonInicioSesion" type="submit">
                        Cancelar
                    </button>
                </div>
        
            </form>
        </div>
    )
}