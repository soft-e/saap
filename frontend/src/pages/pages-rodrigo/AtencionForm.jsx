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
        className="formularioAtencion"
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
              className="espacioFormAtencion"
              onSubmit={handleSubmit}
            >
              <h1
                className="h1Atencion"
              >Actualizar Hora de Atencion</h1>
              <h2
                className="h2TipoAtencion"
              >
                {atencion.tipo_atencion}
              </h2>
              <div
                className="contenedorInputs"
              >
                <h2
                  className="h2Atencion"
                >
                  hora de apertura
                </h2>
                <input 
                  className="inputAtencion"
                  type="text"
                  name="hora_apertura"
                  placeholder="introduce una nueva hora de apertura"
                  onChange={handleChange}
                  value={values.hora_apertura}
                />
                <h2
                  className="h2Atencion"
                >
                  hora de cierre
                </h2>
                <input 
                  className="inputAtencion"
                  type="text" 
                  name="hora_cierre"
                  placeholder="introduce una nueva hora de cierre"
                  onChange={handleChange}
                  value={values.hora_cierre}
                />
              </div>

              <div
                className="espacioBotonesAtencion"
              >
                <button
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Actualizando": "Actualizar"}
              </button>
                
              <button
                onClick={()=>navigate("/atencion")}
              >
                Cancelar
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