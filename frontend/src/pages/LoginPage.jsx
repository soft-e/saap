import "../assets/css/loginPage.css";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { SessionContext } from "../context/context-rodrigo/SessionContext";
import { useContext, useEffect, useState } from "react";
import { PersonaContext } from "../context/context-rodrigo/PersonaContext";
import { EmpleadoContext } from "../context/context-rodrigo/EmpleadoContext";
import { useDocentes } from "../context/context-rodrigo/DocenteProvider";

function LoginPage() {
  const navigate = useNavigate();
  const {docentes,loadDocentes}=useDocentes();
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const { isLoggedIn, user, login, logout } = useContext(SessionContext);
  const { personas, loadPersonas } = useContext(PersonaContext);
  const {empleados,loadEmpleados}=useContext(EmpleadoContext);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadPersonas();
    //setUsers(personas);
    loadEmpleados();
    //console.log(personas);
    loadDocentes();
    //console.log(docentes);
  }, []);


  const searchUserbyEmailAndPassword = (correo, password) => {
    const findedPerson = personas.find((persona) => {
      return (persona.email === correo && persona.password === password);
    })
    //console.log(findedPerson);
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
    //console.log(correo);
    //console.log(password);
    //console.log(personas);
    //console.log(personas);
    //console.log(searchUserbyEmailAndPassword(correo,password))
    //console.log(searchUserbyEmailAndPassword(correo,password));
    //const aux1 = searchUserbyEmailAndPassword(correo,password);
    //searchUserbyEmailAndPassword(correo,password);
    //console.log(searchUserbyEmailAndPassword(correo,password));
    const usuario = (searchUserbyEmailAndPassword(correo, password))
    //console.log(usuario);
    if (usuario) {
      login(usuario);
      //console.log(empleados);
      //console.log(usuario.id)
      const rol = searchUserRolByPersonId(usuario.id);
      //console.log (rol);
      if(isLoggedIn){
        if(rol==="Administrador" || rol==="administrador"){
          navigate("/admin");
        }
        if(rol==="Secretaria" || rol==="secretaria"){
          navigate("/secretary");
        }
        if (rol==="docente") {
          navigate("/clientr")
        }
        
      }
    }else{
      alert("Usuario o contraseña incorrectos"); 
    }
    //console.log(findedPerson);
    //console.log(aux);
  }

  const esDocente = (id)=>{
    console.log(docentes);
    const encontre = docentes.find((docente)=>{
      return docente.persona_id === id;
    })
    console.log(encontre)
    return encontre?true:false;
  }

  const searchUserRolByPersonId=(id)=>{
    console.log(id);
    console.log(empleados);
    const rol = empleados.find((empleado)=>{
      return (empleado.persona_id===id);
    });
    console.log(rol);
    
    //const nombreRol = rol.nombre_cargo;
    //return nombreRol;
    return !rol?"docente":rol.nombre_cargo;
  }
  //console.log(personas);
  
  return <>
    <Navbar accion="dashboard" />
    <div className="divFormulario">
  

    
    <div id="titulo">
      <p>
      Este sistema esta restringido a personas que no posean permisos de ingreso al mismo, para ingresar debe llenar los campos que se le solicitan en la parte inferior, es decir el correo de usuario y el password o contraseña de acceso.
      </p>
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
            value={correo}
            type="email"        
            id="correo"
            placeholder="Escribe un correo"
            onChange={(e) => setCorreo(e.target.value)}
            required
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
            type="password"
            id="password"
            placeholder="Escribe una contraseña"
            onChange={(e) => setPassword(e.target.value)}
            required
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
    
    </div>
  </>
}
export default LoginPage;