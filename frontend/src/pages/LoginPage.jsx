import "../assets/css/loginPage.css";

import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


function LoginPage(){
  const navigate = useNavigate();
  return <>
    <Navbar accion="dashboard" />
    <div className="divFormulario">

    </div>
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
            onClick={()=>navigate("/admin")}
          >
            <Link></Link>
            Iniciar
          </button>
        </div>
        
      </form>
    </div>
    
  </>
}
export default LoginPage;