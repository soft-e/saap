import { useContext } from "react";
import "../assets/css/adminPage.css";
import ButtonBoxAdmin from "../components/ButtonBoxAdmin";
import Navbar from "../components/Navbar";
import { SessionContext } from "../context/context-rodrigo/SessionContext";

function AdminPage(){
  const {user} = useContext(SessionContext);
  return <>
    <Navbar accion="cerrar sesion" />
  <div
    className="caja"
  >
    
    <ButtonBoxAdmin/>
  </div>
  </>
}
export default AdminPage;