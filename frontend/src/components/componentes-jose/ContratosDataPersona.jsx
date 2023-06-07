import React, { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import '../../assets/css/css-jose/listarDocentes.css';
import { URL_API } from "../../services/EndPoint";

const endPoint = URL_API+'/docentes';
const ContratosDataPersona = (props) => {

    const [docente, setDocente] = useState( [] );
    const id = props.id_docente;
    console.log(props);

    const getDocentes = async () => {
        const response = await axios.get(endPoint+"/"+id);
        setDocente(response.data);
    }


    return <div className="contenedorListarDocentes_j">
        
        <div className="contenedorTabla_j">
            <h2>Datos de la Persona</h2>
            <div>
                { getNombre() }
            </div>
        </div>
    </div>
}

export default ContratosDataPersona;