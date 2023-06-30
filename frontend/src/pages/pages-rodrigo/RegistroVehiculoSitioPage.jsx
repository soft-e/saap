import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { useDocentes } from "../../context/context-rodrigo/DocenteProvider";


function RegistroVehiculoSitioPage() {
  const { docentes, loadDocentes, getDocente } = useDocentes();
  const { id } = useParams();
  const [docente, setDocente] = useState();
  const [vehiculo, setVehiculo] = useState();

  useEffect(() => {
    obtenerDocente();
  }, [])

  const obtenerDocente = async()=>{
    const docenteData = await getDocente(id);
    setDocente(docenteData);
  }

  console.log(docente)
  return <>
    <Navbar accion="cerrar sesion" />
    <div
      className="espacioTotalDeTrabajo"
    >

    </div>
  </>
}
export default RegistroVehiculoSitioPage;