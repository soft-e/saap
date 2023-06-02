import "../assets/css/loginPage.css";

import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { SessionContext } from "../context/context-rodrigo/SessionContext";
import { useContext,useEffect } from "react";
import { PersonaContext } from "../context/context-rodrigo/PersonaContext";



function LoginPage(){
  const {isLoggedIn,user,login,logout}=useContext(SessionContext);
  const {personas,loadPersonas}=useContext(PersonaContext);
  
  useEffect(()=>{
    loadPersonas();
    
  },[]);

  
  console.log(personas);
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
      className="formularioLogin"
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