import {Link}from "react-router-dom";

import "../../assets/css/css-deysi/navbar.css";

import Logo from '../../assets/images/images-deysi/lu.png';

function Navbar(){
  return(
    <>
      <nav id="navbar">
        <div className="container">
          <div className="navbar__logo">
           <img src={Logo} alt="Logo" />
          </div>
          
          <h1 id="navbartextologo"> sistema de parqueo <br/> Umss</h1>
           

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
}
export default Navbar;

