import ButtonBoxClient from "../../components/ButtonBoxClient";
import Navbar from "../../components/Navbar";
import '../../assets/css/css-jose/registrarPersonal.css'
//import { CardMensajeCliente } from "../../components/componentes-jose/CardMensjesCliente"

import { useParams } from "react-router-dom";
import axios from "axios";
import React, {useState, useEffect} from "react";

import { URL_API } from "../../services/EndPoint";
import CardMensajesClient from "../../components/componentes-jose/CardMensajesClient";

const endPointContrato = URL_API+"/contrato"
const endPointSContrato = URL_API+"/savesolicitarcontrato"
const endPointSContratos = URL_API+"/solicitarcontrato"

function ClientMessagePage(){
    const { id } = useParams();
    const [contratos, setContratos] = useState ( [] );
    const [sContratos, setSContratos] = useState ( [] );

    useEffect ( () => {
        getContrato();
        getAllSContratos();
    }, []);

    const getAllSContratos = async () => {
        const response = await axios.get(endPointSContratos);
        setSContratos(response.data);
    }

    const getContrato = async () => {
        const response = await axios.get(endPointContrato);
        setContratos(response.data);
    }

    const update = async (e) => {
        e.preventDefault();
        await axios.post(endPointSContrato, {
            empleado_id: '0',
            docente_id: id,
            estado: true,
        });
        window.location.reload();
    }

    function mostrarComponentes(docente_id){
        let dato = [];
        if(tieneContrato(docente_id)){
            dato = (<> 
                <CardMensajesClient id_docente={id}/>
            </>);
        }else if(solicitoContrato(docente_id)){
            dato = (<>
                <label> Actualmente no cuentas con un contrato, 
                    Solo los cliente pueden mandar una queja caso contrario puede solucitar un contrato
                    con el boton que se muestra: Solicitar un Contrato </label>
                <br></br>
                <label> usted ya tiene ina solicitud de contrato pendiente, 
                    debe de esperar que los Administradores acepten la solicitud</label>
            </>)
        }else{
            dato = (<>
                <label> Actualmente no cuentas con un contrato,
                    Solo los cliente pueden mandar un Mensaje 
                    caso contrario puede solucitar un contrato con el boton que se muestra: Solicitar un Contrato</label>
                <div className="espacioBotones_j">
                    <div className="espacioBoton_j">
                        <button className='stylesButton_j' onClick={ update }>
                            Solicitar un Contrato
                        </button>
                    </div>
                </div>
            </>)
        }
        return dato;
    }

    function solicitoContrato(docente_id){
        let res = false;
        for(let i = 0; i<sContratos.length; i++){
            if(docente_id == sContratos[i].docente_id){
                res = true;
            }
        }
        return res;
    }

    function tieneContrato(docente_id){
        let res = false;
        for(let i = 0; i<contratos.length; i++){
            if(docente_id == contratos[i].docente_id){
                res = true;
            }
        }
        return res;
    }

    return <>
        <Navbar accion="cerrar sesion"/>
        <div className="espacioPagina">
            <ButtonBoxClient docente_id={ id } />
            <div className="contenedorContrato_j">
                { mostrarComponentes(id) }
            </div>      
        </div>
    </>
}
export default ClientMessagePage;