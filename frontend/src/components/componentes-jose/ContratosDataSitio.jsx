import React from "react";
import axios from 'axios';
import '../../assets/css/css-jose/listarDocentes.css';
//import { URL_API } from "../../services/EndPoint"

//const endPoint = URL_API+'/contrato';

const ContratosDataSitio = (props) => {

    const numParqueo = props.sitio_id;
    const bloque = props.bloque;

    return <div className="contenedorListarDocentes_j">
        
        <div className="contenedorTabla_j">
            <h2>  Datos del Sitio</h2>
            <div>
                <div className="contenedor_label_j">
                    <label className="label_j">Numero del Sitio:</label>
                    <label className="label_j">{ numParqueo }</label>
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