import Navbar from "../../components/Navbar";
import ButtonBoxAdmin from "../../components/ButtonBoxAdmin";
import { Formik } from "formik";
import { useAtenciones } from "../../context/context-rodrigo/AtencionProvider";
import { useEffect,useState } from "react";
import { useNavigate,useParams } from "react-router-dom";
import "../../assets/css/css-rodrigo/atencionForm.css"
import "../../assets/css/css-rodrigo/hover.css"

function AtencionForm(){
  const{getAtencion,updateAtencion,createAtencion}=useAtenciones();
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
          }else{
            await createAtencion(values);
          }
          navigate("/atencion");
          actions.resetForm();
        }}
      >
        {
          ({handleChange,handleSubmit,values,isSubmitting})=>(
            <form
              className="espacioFormAtencion fondo"
              onSubmit={handleSubmit}
            >
              <h1
                className="h1Atencion"
              >{params.id? "Editar Horario de Atencion": "Registrar Horario de Atencion"}</h1>
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
                  {params.id? "":"Dia(s) de Atencion"}
                </h2>
                {!params.id? <input 
                  className="inputAtencion"
                  type="text"
                  name="tipo_atencion"
                  placeholder="Nuevo dia de atencion"
                  onChange={handleChange}
                  value={values.tipo_atencion}
                />:<></>}
                <h2
                  className="h2Atencion"
                >
                  hora de apertura
                </h2>
                <input 
                  className="inputAtencion"
                  type="text"
                  name="hora_apertura"
                  placeholder="nueva hora de apertura"
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
                  placeholder="nueva hora de cierre"
                  onChange={handleChange}
                  value={values.hora_cierre}
                />
              </div>

              <div
                className="espacioBotonesAtencion"
              >
                <button
                className="hvr-fade"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Guardando...": "Guardar"}
              </button>
                
              <button
                className="hvr-fade"
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