import "../assets/css/loginPage.css";
import {Formik} from "formik";


function LoginPage(){
  return <div>
    <div id="titulo">
    <h1>
			Sistema de Apoyo a la Administracion de Parqueos <br />
		</h1>
    </div>
    <div
      className="formulario"
    >
      <form action=""
        id="login"
      >
        <h1>Iniciar Sesion</h1>
        <div
          id="input"
        >
          <label htmlFor="">
            Correo:
          </label>
          <input 
          type="text" 
          id="inputText"
          placeholder="Escribe un correo"
          />
        </div>
        <div
          id="input"
        >
          <label htmlFor="">
            Contraseña:
          </label>
          <input 
            type="text" 
            id="inputText"
            placeholder="Escribe una contraseña"
          />
        </div>
        <div className="espacioBoton">
          <button
            className="botonInicioSesion"
            type="submit"
          >
            Iniciar
          </button>
        </div>
        
      </form>
    </div>
    
  </div>
}
export default LoginPage;