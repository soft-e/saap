import "../assets/css/adminPage.css";
import ButtonBoxAdmin from "../components/ButtonBoxAdmin";
import Navbar from "../components/Navbar";


function AdminPage(){
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