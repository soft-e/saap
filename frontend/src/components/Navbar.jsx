import {Link}from "react-router-dom";
import "../assets/css/navbar.css"

function Navbar(){
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
              <Link to="/login">
                <h1>Iniciar Sesion</h1>
              </Link>
            </li>
          </ul>
        </div>
      </nav>      
    </>
  );
};
export default Navbar;
