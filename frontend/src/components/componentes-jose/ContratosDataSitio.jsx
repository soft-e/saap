import React, { useEffect, useState } from "react";
import axios from 'axios';
import '../../assets/css/css-jose/listarDocentes.css';
import { URL_API } from "../../services/EndPoint"

const endPoint = URL_API+'/sitio';

const ContratosDataSitio = (props) => {

    const id = props.sitio_id;
    const bloque = props.bloque;

    const [sitios, setSitios] = useState([]);
    useEffect(() => {
        getAllSitios();
      }, []);
    
      const getAllSitios = async () => {
        console.log(id);
        const response = await axios.get(endPoint);
        setSitios(response.data);
      };

    function getNumerSitio(id){
        let response = "buscando sitio...";
            for (let i = 0; i < sitios.length; i++) {
                if (sitios[i].id === id) {
                    response = sitios[i].numero_sitio;
                    break;
                }
            }
        return response;
    }

    return <div className="contenedorListarDocentes_j">
        
        <div className="contenedorTabla_j">
            <h2>  Datos del Sitio</h2>
            <div>
                <div className="contenedor_label_j">
                    <label className="label_j">Numero del Sitio:</label>
                    <label className="label_j">{ getNumerSitio(id) }</label>
                </div>
                <div className="contenedor_label_j">
                    <label className="label_j">bloque:</label>
                    <label className="label_j">{ bloque }</label>
                </div>
            </div>
        </div>
    </div>
}

export default ContratosDataSitio;