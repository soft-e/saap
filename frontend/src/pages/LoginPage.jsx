import "../assets/css/loginPage.css";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { SessionContext } from "../context/context-rodrigo/SessionContext";
import { useContext, useEffect, useState } from "react";
import { PersonaContext } from "../context/context-rodrigo/PersonaContext";
import { EmpleadoContext } from "../context/context-rodrigo/EmpleadoContext";


function LoginPage() {
  const [correo, setCorreo] = useState();
  const [password, setPassword] = useState();
  const { isLoggedIn, user, login, logout } = useContext(SessionContext);
  const { personas, loadPersonas } = useContext(PersonaContext);
  const {empleados,loadEmpleados}=useContext(EmpleadoContext);
  const [users, setUsers] = useState([]);


  useEffect(() => {
    loadPersonas();
    setUsers(personas);
    loadEmpleados();
    console.log(personas);
  }, []);


  const searchUserbyEmailAndPassword = (correo, password) => {
    const findedPerson = users.find((persona) => {
      return (persona.email === correo && persona.password === password);
    })
    console.log(findedPerson);
    //console.log(findedPerson);
    //if (findedPerson!==undefined) {
      
    //}
    //console.log(findedPerson[0]);
    //setUsers(findedPerson);
    //console.log(findedPerson);
    //setCurrentUser(findedPerson);

    return findedPerson;


    //return !findedPerson?null:findedPerson;

  }
  const onPressedLoginButton = (event,correo, password) => {
    event.preventDefault();
    console.log(correo);
    console.log(password);
    //console.log(personas);
    //console.log(personas);
    //console.log(searchUserbyEmailAndPassword(correo,password))
    //console.log(searchUserbyEmailAndPassword(correo,password));
    //const aux1 = searchUserbyEmailAndPassword(correo,password);
    //searchUserbyEmailAndPassword(correo,password);
    //console.log(searchUserbyEmailAndPassword(correo,password));
    const usuario = (searchUserbyEmailAndPassword(correo, password))
    console.log(usuario);
    if (usuario) {
      login(usuario);
      //console.log(empleados);
      //console.log(usuario.id)
      const rol = searchUserRolByPersonId(usuario.id);
      console.log (rol);
      if(isLoggedIn){
        if(rol==="administrador"){
          navigate("/admin");
        }
      }
      
      
      
    }
    //console.log(findedPerson);
    //console.log(aux);
  }
  const searchUserRolByPersonId=(id)=>{
    console.log(id);
    console.log(empleados);
    const rol = empleados.find((empleado)=>{
      return (empleado.persona_id===id);
    });
    console.log(rol);
    return rol.nombre_cargo;
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
            onChange={(e) => setCorreo(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="espacioBoton">
          <button
            className="botonInicioSesion"
            type="text"
            onClick={
              () => {
                onPressedLoginButton(event,correo, password)
                
              }
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