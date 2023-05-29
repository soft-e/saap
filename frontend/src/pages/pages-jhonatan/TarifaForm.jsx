import Navbar from "../../components/Navbar";
import ButtonBoxAdmin from "../../components/ButtonBoxAdmin";
import { Formik } from "formik";
import { useTarifas } from "../../context/context-jhonatan/TarifaProvider";
import { useEffect,useState } from "react";
import { useNavigate,useParams } from "react-router-dom";
import "../../assets/css/css-jhonatan/tarifaForm.css"

function TarifaForm() {
    const { getTarifa, updateTarifa } = useTarifas();
    const [tarifa, setTarifa] = useState({
      costo_tarifa: ""
    });
  
    const params = useParams();
    const navigate = useNavigate();
  
    useEffect(() => {
      const loadTarifa = async () => {
        if (params.id) {
          const tarifa = await getTarifa(params.id);
          console.log(tarifa);
          setTarifa({
            costo_tarifa: tarifa.costo_tarifa
          });
        }
      };
      loadTarifa();
    }, []);
  
    return (
      <>
        <Navbar accion="cerrar sesion" />
        <div className="espacioPagina">
          <ButtonBoxAdmin />
          <div className="espacioDeTrabajo">
            <div className="formularioTarifa">
              <Formik
                initialValues={tarifa}
                enableReinitialize={true}
                onSubmit={async (values, actions) => {
                  console.log(values);
                  if (params.id) {
                    await updateTarifa(params.id, values);
                  }
                  navigate("/tarifa");
                  actions.resetForm();
                }}
              >
                {({ handleChange, handleSubmit, values, isSubmitting }) => (
                  <form className="espacioFormTarifa" onSubmit={handleSubmit}>
                    <h1 className="h1Tarifa">Actualizar Tarifa</h1>
                    <div className="contenedorInputs">
                      <h2 className="h2Tarifa">Costo de la tarifa</h2>
                      <input
                        className="inputTarifa"
                        type="text"
                        name="costo_tarifa"
                        placeholder="introduce un nuevo costo de tarifa"
                        onChange={handleChange}
                        value={values.costo_tarifa}
                      />
                    </div>
  
                    <div className="espacioBotonesTarifa">
                      <button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Actualizando" : "Actualizar"}
                      </button>
  
                      <button onClick={() => navigate("/tarifa")}>
                        Cancelar
                      </button>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default TarifaForm;