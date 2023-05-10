import "../../assets/css/cssRodrigo/atencionPage.css"
import ButtonBoxAdmin from "../../components/ButtonBoxAdmin";
import Navbar from "../../components/Navbar";
import { Formik } from "formik";
import { useAtencion } from "../../context/contextRodrigo/AtencionProvider";
import { useEffect,useState } from "react";
import { useParams, useNavigate } from "react-router";



function AtencionPage(){
  const{createAtencion,getAtencion,updateAtencion}=useAtencion();
  const[atencion,setAtencion]=useState({
    tipo_atencion:"",
    hora_apertura:"",
    hora_cierre:""
  });
  const params = useParams();
  const navigate = useNavigate();
  useEffect(()=>{
    const loadAtenciones = async()=>{
      if(params.id){
        const atencion = await getAtencion(params.id);
        console.log(atencion);

        setAtencion({
          tipo_atencion:atencion.tipo_atencion,
          hora_apertura:atencion.hora_apertura,
          hora_cierre:atencion.hora_cierre
        });
      }
    };
    loadAtenciones();
  },[]);

  return <>
    <Navbar accion="iniciar sesion" />
    <div
      className="espacioPagina"
    >
      <ButtonBoxAdmin/>
      <div
        className="espacio de trabajo"
      >
        <Formik
          initialValues={atencion}
          enableReinitialize={true}
          onSubmit={async}
        >
          
        </Formik>
      </div>
    </div>

  </>
}
export default AtencionPage;