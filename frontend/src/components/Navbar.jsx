import { Link } from "react-router-dom";
import "../assets/css/navbar.css"
//import Logo from '../../assets/images/images-deysi/lu.png';
import Logo from '../assets/images/images-deysi/lu.png';
import { useSession } from "../context/context-rodrigo/SessionProvider";
import logoFcyt from "../assets/images/logo-fcyt.png";
import { useNavigate } from "react-router-dom";

function Navbar(props) {
  const navigate = useNavigate();
  const { logout } = useSession();

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
    if (props.accion == "pagina principal") {
      return Dashboard();
    }
    if (props.accion == "cerrar sesion") {
      return Logout();
    }
  }

  return (

    <nav id="navbar">
      <div className="container">
        <div className="logo-container"
          onClick={()=>navigate("/")}
        >
          <img src={logoFcyt} alt="Logo" className="logo-image" />

        </div>
        <div
          className="espacioLinks"
        >
        <div
          className="navLink"
        >
          <p
          onClick={()=>navigate("/anuncios")}
          >Anuncios</p>
        </div>
        <div
          className="navLink"
        >
          <p
            onClick={()=>navigate("/ubicacion")}
          >Ubicaci&oacute;n</p>
        </div>
        
        </div>
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
