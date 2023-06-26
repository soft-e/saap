import { Link } from "react-router-dom";
import "../assets/css/navbar.css"
//import Logo from '../../assets/images/images-deysi/lu.png';
import Logo from '../assets/images/images-deysi/lu.png';
import { useSession } from "../context/context-rodrigo/SessionProvider";


function Navbar(props) {
const {logout}= useSession();

  function Login() {
    return <Link to="/login">{props.accion}</Link>
  }
  function Dashboard() {
    return <Link to="/">{props.accion}</Link>
  }
  function Logout() {

    return <Link to="/">{props.accion}</Link>
    
  }
  function Accion() {
    if (props.accion == "iniciar sesion") {
      return Login();
    }
    if (props.accion == "dashboard") {
      return Dashboard();
    }
    if (props.accion == "cerrar sesion") {
      return Logout();
    }
  }

  return (
    
      <nav id="navbar">
        <div className="container">
          <div className="logo-container">
            <img src={Logo} alt="Logo" className="logo-image" />
            
          </div>
          <h1 className="textologo">
            Sistema de apoyo a la administracion de parqueos
            </h1>
            <div
              className="botonSesion"
            >
              <Accion />
            </div>
            
        </div>
      </nav>
    
  );
};
export default Navbar;
