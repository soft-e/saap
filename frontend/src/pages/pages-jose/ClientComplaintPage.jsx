import ButtonBoxClient from "../../components/ButtonBoxClient";
import Navbar from "../../components/Navbar";
import '../../assets/css/css-jose/registrarPersonal.css'

import CardQuejaClient from "../../components/componentes-jose/CardQuejaClient"

import { Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import React, {useState, useEffect} from "react";

import { URL_API } from "../../services/EndPoint";

const endPoint = URL_API+"/contrato"
const endPointSContrato = URL_API+"/savesolicitarcontrato"
const endPointSContratos = URL_API+"/solicitarcontrato"

function ClientComplaintPage(){
    const { id } = useParams();
    const [contratos, setContratos] = useState ( [] );
    const [sContratos, setSContratos] = useState ( [] );
    const navigate = useNavigate();
    let contrato;

    useEffect ( () => {
        getContratos();
        getAllSContratos();
    }, []);

    const getAllSContratos = async () => {
        const response = await axios.get(endPointSContratos);
        setSContratos(response.data);
    }

    const getContratos = async () => {
        const response = await axios.get(endPoint);
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
                <div className="contenedorContraroArriba_j">
                    <h1>Quejas</h1>
                    <button
                        className="styleButonVerDocentes_j"
                        onClick={ () =>{
                            navigate('/client/complaints/new/'+id);
                        } }
                    > añadir queja</button>
                </div>
                <CardQuejaClient docente_id = { docente_id }/>
            </>);
        }else if(solicitoContrato(docente_id)){
            dato = (<>
                <label> Actualmente no cuentas con un Sitio, 
                    Solo los cliente pueden mandar una queja caso contrario puede solucitar un Sitio
                    con el boton que se muestra: Solicitar un Sitio </label>
                <br></br>
                <label> usted ya tiene una solicitud de Sitio pendiente, 
                    debe de esperar que los Administradores acepten la solicitud</label>
            </>)
        }else{
            dato = (<>
                <label> Actualmente no cuentas con un Sitio, 
                    Solo los cliente pueden mandar una queja caso contrario puede solucitar un Sitio
                    con el boton que se muestra: Solicitar un Sitio </label>
                <div className="espacioBotones_j">
                    <div className="espacioBoton_j">
                        <button className='stylesButton_j' onClick={ update }>
                            Solicitar un Sitio
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
    return(
        <>
        <Navbar accion="cerrar sesion"/>
        <div className="espacioPagina">
            <ButtonBoxClient docente_id={ id }/>
            <div className="contenedorContrato_j">
                { mostrarComponentes(id) }
            </div>
        </div>
    </>
  )
};
export default ClientComplaintPage;