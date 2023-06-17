import "../../assets/css/templatePage.css";
import Navbar from "../../components/Navbar";
import '../../assets/css/css-jose/registrarPersonal.css'
import '../../assets/css/css-jose/formularioRegistroPersonas.css'
import ButtonBoxSecretary from "../../components/ButtonBoxSecretary";

import ContratosDataPersona from "../../components/componentes-jose/ContratosDataPersona";
import ContratosDataSitio from "../../components/componentes-jose/ContratosDataSitio";
import ContratosDataVehiculo from "../../components/componentes-jose/ContratosDataVehiculo";

import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import React, {useState, useEffect} from "react";

import { URL_API } from "../../services/EndPoint";

const endPoint = URL_API+"/contrato"

function ContratosVerIndependienteS(){
    const navigate = useNavigate();
    const { id } = useParams();

    const [contrato, setContrato] = useState ( [] )

    useEffect ( () => {
        getContrato();
    }, []);

    const getContrato = async () => {
        const response = await axios.get(endPoint+"/"+id);
        setContrato(response.data);
    }

    function handleClik(){
        navigate('/contratos');
    }

    return <>
        <Navbar accion="iniciar sesion"/>
        <div className="espacioPagina">
            <ButtonBoxSecretary/>
            <div className="contenedorContrato_j">
                <button
                    className="styleButonVerDocentes_j"
                    onClick={ handleClik }
                > Regresar a la lista</button>
                <br></br>
                <div>
                    <ContratosDataPersona id_docente={ contrato.docente_id }/> 
                </div>
                <br></br>
                <div>
                    <ContratosDataSitio 
                    sitio_id={ contrato.sitio_id}
                    bloque = { contrato.bloque } />                 
                </div>
                <br></br>
                <div>
                    <ContratosDataVehiculo vehiculo_id={ contrato.vehiculo_id }/>                    
                </div>
            </div>
        </div>
    </>
}   
export default ContratosVerIndependienteS;