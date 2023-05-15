import Navbar from "../../components/Navbar";
import ButtonBoxAdmin from "../../components/ButtonBoxAdmin";
import { Formik } from "formik";
import { useAtenciones } from "../../context/context-rodrigo/AtencionProvider";
import { useEffect,useState } from "react";
import { useNavigate,useParams } from "react-router-dom";
import "../../assets/css/css-rodrigo/atencionForm.css"

function AtencionForm(){
  const{getAtencion,updateAtencion}=useAtenciones();
  const [atencion,setAtencion]=useState({
    tipo_atencion:"",
    hora_apertura:"",
    hora_cierre:"",
  });
const params = useParams();
const navigate = useNavigate();
useEffect(()=>{
  const loadAtenciones = async()=>{
    if (params.id) {
      const atencion = await getAtencion(params.id);
      console.log(atencion);
      setAtencion({
        tipo_atencion:atencion.tipo_atencion,
        hora_apertura:atencion.hora_apertura,
        hora_cierre:atencion.hora_cierre,
      });
    }
  };
  loadAtenciones();
},[]);

  return<>
  <Navbar accion="cerrar sesion"/>
  <div className="espacioPagina">
    <ButtonBoxAdmin />
    <div className="espacioDeTrabajo">
      <div
        className="formulario"
      >
        <Formik
        initialValues={atencion}
        enableReinitialize={true}
        onSubmit={async(values,actions)=>{
          console.log(values);
          if (params.id) {
            await updateAtencion(params.id,values);
          }
          navigate("/atencion");
          actions.resetForm();
        }}
      >
        {
          ({handleChange,handleSubmit,values,isSubmitting})=>(
            <form
              className="espacioForm"
              onSubmit={handleSubmit}
            >
              <h1>Actualizar Hora de Atencion</h1>
              <h2>
                {atencion.tipo_atencion}
              </h2>
              <h2>
                hora de apertura
              </h2>
              <input 
                type="text"
                name="hora_apertura"
                placeholder="introduce una nueva hora de apertura"
                onChange={handleChange}
                value={values.hora_apertura}
              />
              <h2>
                hora de cierre
              </h2>
              <input 
                type="text" 
                name="hora_cierre"
                placeholder="introduce una nueva hora de cierre"
                onChange={handleChange}
                value={values.hora_cierre}
              />
              <div
                className="boton"
              >
                <button
                className="boton"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Actualizando": "Actualizar"}
              </button>
              </div>
              
            </form>
          )
        }
      </Formik>
      </div>
      
    </div>
  </div>
  </> 
}
export default AtencionForm;