// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
//import axios from "axios";
import Navbar from "../../components/Navbar";
import ButtonBoxAdmin from "../../components/ButtonBoxAdmin";
import axios from "axios";
import { useParams } from "react-router-dom";
import { URL_API } from "../../services/EndPoint";
import "../../assets/css/css-deysi/plazasDisponibles.css";
import "../../assets/css/css-deysi/plazasOcupadas.css";
const Parqueo = () => {
  const { id } = useParams();
  const [sitiosDisponibles, setSitiosDisponibles] = useState([]);

  useEffect(() => {
    obtenerSitiosDisponibles();
  }, []);

  const obtenerSitiosDisponibles = async () => {
    try {
      // Aquí puedes especificar el ID del parqueo para obtener los sitios disponibles
      const response = await axios.get(`${URL_API}/disponibles/${id}`);
      const sitiosDisponiblesData = response.data;
      setSitiosDisponibles(sitiosDisponiblesData);
      console.log(response);
    } catch (error) {
      console.error("Error al obtener los sitios disponibles:", error);
    }
  };

  const libres = sitiosDisponibles.filter(
    (sitios) => sitios.estado_sitio === "libre"
  );
  console.log(libres);
  const ocupados = sitiosDisponibles.filter(
    (sitios) => sitios.estado_sitio === "ocupado"
  );
  console.log(ocupados);

  return (
    <>
      <Navbar accion="cerrar sesion" />
      <div className="espacioPagina">
        <ButtonBoxAdmin />
        <div className="espacioDeTrabajo">
          <div className="padre">
            <nav className="cabezeraParqueo">
              <h2 id="tituloParqueos">Sitios</h2>
            </nav>
            <div className="contenedorSitios">
              
              <div className="plazas-disponibles">
                {libres.map((sitio) => (
                  <div key={sitio.id} className="plaza-disponible">
                    <h3>{sitio.numero_sitio}</h3>
                  </div>
                ))}
              </div>

              <div className="plazas-ocupadas">
                {ocupados.map((plaza) => (
                  <div key={plaza.id} className="plaza-ocupada">
                    <h3>{plaza.numero_sitio}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default Parqueo;

