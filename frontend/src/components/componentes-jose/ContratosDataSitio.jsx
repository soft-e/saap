import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import '../../assets/css/css-jose/listarDocentes.css';
import { URL_API } from "../../services/EndPoint"

const endPointDocentes = URL_API+'/docentes';

const ContratosDataSitio = () => {
    const [docentes, setDocentes] = useState( [] )

    useEffect ( () => {
        getAllDocentes();
    }, []);

    const getAllDocentes = async () => {
        const response = await axios.get(endPointDocentes);
        setDocentes(response.data);
    }
    
    function getNombreDocente (id){
        let nombreDocente = "nombre no obtenido"; 
        for(let i = 0; docentes.length; i++){
            if(docentes[i].id === id){
                nombreDocente = docentes[i].persona.nombre;
                break;
            }
        }
        return nombreDocente;
    }

    function getApellidosDocente (id){
        let apellidosDocente = "nombre no obtenido"; 
        for(let i = 0; docentes.length; i++){
            if(docentes[i].id === id){
                apellidosDocente = docentes[i].persona.apellido_paterno + " "+
                docentes[i].persona.apellido_materno;
                break;
            }
        }
        return apellidosDocente;
    }

    return <div className="contenedorListarDocentes_j">
        
        <div className="contenedorTabla_j">
            
        </div>
    </div>
}

export default ContratosDataSitio;