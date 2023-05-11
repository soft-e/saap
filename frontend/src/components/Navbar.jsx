import {Link}from "react-router-dom";
import "../assets/css/navbar.css"

function Navbar(props){
  function Login(){
    return <Link to="/login">{props.accion}</Link>
  }
  function Dashboard(){
    return <Link to="/">{props.accion}</Link>
  }
  function Logout(){
    return <Link to="/">{props.accion}</Link>
  }
  function Accion(){
    if(props.accion=="iniciar sesion"){
      return Login();
    }
    if(props.accion=="dashboard"){
      return Dashboard();
    }
    if (props.accion=="cerrar sesion") {
      return Logout(); 
    }
  }
  
  return(
    <>
      <nav id="navbar">
        <div className="container">
          <div className="logo">
            <h1 className="textologo">
              saap
            </h1>
          </div>
          <ul className="nav">
            <li>
              <Accion/>
            </li>
          </ul>
        </div>
      </nav>      
    </>
  );
};
export default Navbar;
