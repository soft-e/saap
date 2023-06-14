import React, { useEffect, useState } from "react";
import axios from 'axios';
import '../../assets/css/css-jose/listarDocentes.css';
import '../../assets/css/css-jose/contratos.css'
import { URL_API } from "../../services/EndPoint";

const endPoint = URL_API+'/docentes';

const ContratosDataPersona = (props) => {

    const [docentes, setDocentes] = useState( [] );
    const id = props.id_docente;

    useEffect ( () => {
        getAllDocentes();
    }, []);

    const getAllDocentes = async () => {
        const response = await axios.get(endPoint);
        setDocentes(response.data);
    }

    function getNombreDocente (docente_id){
        let dato = "nombre no obtenido"; 
        for(let i = 0; i < docentes.length; i++){
            if(docentes[i].id == docente_id){
                dato = docentes[i].persona.nombre;
                break;
            }
        }
        return dato;
    }

    function getApellidoPDocente (docente_id){
        let dato = "apellido no obtenido"; 
        for(let i = 0; i < docentes.length; i++){
            if(docentes[i].id == docente_id){
                dato = docentes[i].persona.apellido_paterno;
                break;
            }
        }
        return dato;
    }

    function getApellidoMDocente (docente_id){
        let dato = "apellido no obtenido"; 
        for(let i = 0; i < docentes.length; i++){
            if(docentes[i].id == docente_id){
                dato = docentes[i].persona.apellido_materno;
                break;
            }
        }
        return dato;
    }

    function getCiDocente (docente_id){
        let dato = "ci no obtenido"; 
        for(let i = 0; i < docentes.length; i++){
            if(docentes[i].id == docente_id){
                dato = docentes[i].persona.ci;
                break;
            }
        }
        return dato;
    }

    function getTelefonoDocente (docente_id){
        let dato = "telefono no obtenido"; 
        for(let i = 0; i < docentes.length; i++){
            if(docentes[i].id == docente_id){
                dato = docentes[i].persona.telefono;
                break;
            }
        }
        return dato;
    }

    function getEmailDocente (docente_id){
        let dato = "Email no obtenido"; 
        for(let i = 0; i < docentes.length; i++){
            if(docentes[i].id == docente_id){
                dato = docentes[i].persona.email;
                break;
            }
        }
        return dato;
    }

    return <div className="contenedorListarDocentes_j">
        
        <div className="contenedorTabla_j">
            <h2>Datos de la Persona</h2>
            <div>
                <div className="contenedor_label_j">
                    <label className="label_j">Nombre:</label>
                    <label className="label_j">{getNombreDocente(id)}</label>
                </div>
                <div className="contenedor_label_j">
                    <label className="label_j">Apellido Paterno:</label>
                    <label className="label_j">{getApellidoPDocente(id)}</label>
                </div>
                <div className="contenedor_label_j">
                    <label className="label_j">Apellido Materno:</label>
                    <label className="label_j">{getApellidoMDocente(id)}</label>
                </div>
                <div className="contenedor_label_j">
                    <label className="label_j">Numero de Carnet:</label>
                    <label className="label_j">{getCiDocente(id)}</label>
                </div>
                <div className="contenedor_label_j">
                    <label className="label_j">Numero de Telefono:</label>  
                    <label className="label_j">{getTelefonoDocente(id)}</label>
                </div>
                <div className="contenedor_label_j">
                    <label className="label_j">Correo Electronico:</label>
                    <label className="label_j">{getEmailDocente(id)}</label>
                </div>
            </div>
        </div>
    </div>
}

export default ContratosDataPersona;