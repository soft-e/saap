import "../assets/css/loginPage.css";

import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { SessionContext } from "../context/context-rodrigo/SessionContext";
import { useContext,useEffect, useState } from "react";
import { PersonaContext } from "../context/context-rodrigo/PersonaContext";



function LoginPage(){
  const [correo,setCorreo]=useState();
  const [password,setPassword]=useState();
  const {isLoggedIn,user,login,logout}=useContext(SessionContext);
  const {personas,loadPersonas}=useContext(PersonaContext);
  const [users,setUsers]=useState([]);
  const [aux,setAux]=useState({
    apellido_materno: "",
    apellido_paterno: "",
    ci: "",
    created_at: "",
    email: "",
    id: 0,
    nombre: "",
    password: "",
    telefono: "",
    updated_at: ""
});
  
  useEffect(()=>{
    loadPersonas();
    setUsers(personas);
  },[]);
  

  const searchUserbyEmailAndPassword =(correo,password)=>{
    const filteredUser = users.find((persona)=>{
      return persona.email===correo
    })
    //console.log(filteredUser[0]);
    //setUsers(filteredUser);
    //console.log(filteredUser);
    //setCurrentUser(filteredUser);

    console.log(filteredUser);
    setAux(filteredUser);
    
    //return !filteredUser?null:filteredUser;
    
  }
  const onPressedLoginButton = (correo,password) =>{
    console.log(correo);
    console.log(password);
    console.log(personas);
    //console.log(personas);
    //console.log(searchUserbyEmailAndPassword(correo,password))
    //console.log(searchUserbyEmailAndPassword(correo,password));
    //const aux1 = searchUserbyEmailAndPassword(correo,password);
    //searchUserbyEmailAndPassword(correo,password);
    //console.log(searchUserbyEmailAndPassword(correo,password));
    searchUserbyEmailAndPassword(correo,password)
    console.log(aux);
  }

  

  
  //console.log(personas);
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
          value={correo}
          type="text" 
          id="inputText"
          placeholder="Escribe un correo"
          onChange={(e)=>setCorreo(e.target.value)}
          />
        </div>
        <div
          id="input"
        >
          <label htmlFor="">
            Contraseña:
          </label>
          <input 
            value={password}
            type="text" 
            id="inputText"
            placeholder="Escribe una contraseña"
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        <div className="espacioBoton">
          <button
            className="botonInicioSesion"
            type="text"
            onClick={
              ()=>{navigate("/admin")
              onPressedLoginButton(correo,password)}
            }
          >
            Iniciar
          </button>
        </div>
        
      </form>
    </div>
    
  </>
}
export default LoginPage;