import ButtonBoxClient from "../../components/ButtonBoxClient";
import Navbar from "../../components/Navbar";
import '../../assets/css/css-jose/registrarPersonal.css'

import ContratosDataSitio from "../../components/componentes-jose/ContratosDataSitio";
import ContratosDataVehiculo from "../../components/componentes-jose/ContratosDataVehiculo";

import { useParams } from "react-router-dom";
import axios from "axios";
import React, {useState, useEffect} from "react";

import { URL_API } from "../../services/EndPoint";

const endPoint = URL_API+"/contrato"

function ClientContractPage(){
    const { id } = useParams();
    const [contratos, setContratos] = useState ( [] );
    let contrato;

    useEffect ( () => {
        getContrato();
    }, []);

    const getContrato = async () => {
        const response = await axios.get(endPoint);
        setContratos(response.data);
    }

    function handleClick (){

    }

    function mostrarComponentes(docente_id){
        let dato = [];
        if(tieneContrato(docente_id)){
            dato = (<> 
                <div>
                    <ContratosDataSitio 
                    sitio_id={ contrato.sitio_id}
                    bloque = { contrato.bloque } />                 
                </div>
                <br></br>
                <div>
                    <ContratosDataVehiculo vehiculo_id={ contrato.vehiculo_id }/>                    
                </div>
            </>);
        }else{
            dato = (<>
                <label> Actualmente no cuentas con un contrato, 
                    si deseas un contrato dale click al boton de abajo para solicitar un contrato</label>
                <div className="espacioBotones_j">
                    <div className="espacioBoton_j">
                        <button className='stylesButton_j' onClick={ handleClick }>
                            Solicitar un Contrato
                        </button>
                    </div>
                </div>
            </>)
        }
        return dato;
    }

    function tieneContrato(docente_id){
        let res = false;
        for(let i = 0; i<contratos.length; i++){
            if(docente_id == contratos[i].docente_id){
                console.log("imprimir desde quejas: "+docente_id+" num de contrato: "+ contratos.length);
                contrato = contratos[i];
                res = true;
            }
        }
        return res;
    }

    return <>
        <Navbar accion="cerrar sesion"/>
        <div className="espacioPagina">
            <ButtonBoxClient docente_id={ id }/>
            <div className="contenedorContrato_j">
                { mostrarComponentes(id) }
            </div>
        </div>
    </>
};
export default ClientContractPage;