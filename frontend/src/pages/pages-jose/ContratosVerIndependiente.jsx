import "../../assets/css/templatePage.css";
import Navbar from "../../components/Navbar";
import '../../assets/css/css-jose/registrarPersonal.css'
import '../../assets/css/css-jose/formularioRegistroPersonas.css'
import ButtonBoxAdmin from "../../components/ButtonBoxAdmin";

import ContratosDataPersona from "../../components/componentes-jose/ContratosDataPersona";
import ContratosDataSitio from "../../components/componentes-jose/ContratosDataSitio";
import ContratosDataVehiculo from "../../components/componentes-jose/ContratosDataVehiculo";

import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import React, {useState, useEffect} from "react";

import { URL_API } from "../../services/EndPoint";

const endPoint = URL_API+"/contrato"

function ContratosVerIndependiente(){
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
        navigate('/listarDocentes');
    }

    return <>
        <Navbar accion="iniciar sesion"/>
        <div className="espacioPagina">
            <ButtonBoxAdmin />
            <div className="contenedorContrato_j">
                <div>
                    <ContratosDataPersona id_docente={ contrato.docente_id }/> 
                </div>
                <div>
                    <ContratosDataSitio contrato_id={ id }/>                 
                </div>
                <div>
                    <ContratosDataVehiculo contrato_id={ id }/>                    
                </div>
            </div>
        </div>
    </>
}   
export default ContratosVerIndependiente;