import ButtonBoxClient from "../../components/ButtonBoxClient";
import Navbar from "../../components/Navbar";
import '../../assets/css/css-jose/registrarPersonal.css'

import CardQuejaClient from "../../components/componentes-jose/CardQuejaClient"

import { Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import React, {useState, useEffect} from "react";

import { URL_API } from "../../services/EndPoint";

const endPoint = URL_API+"/contrato"

function ClientComplaintPage(){
    const { id } = useParams();
    const [contratos, setContratos] = useState ( [] );
    const navigate = useNavigate();
    let contrato;

    useEffect ( () => {
        getContratos();
    }, []);

    const getContratos = async () => {
        const response = await axios.get(endPoint);
        setContratos(response.data);
    }

    function handleClick (){

    }

    function mostrarComponentes(docente_id){
        let dato = [];
        if(tieneContrato(docente_id)){
            dato = (<> 
                <CardQuejaClient docente_id = { docente_id }/>
            </>);
        }else{
            dato = (<>
                <label> Actualmente no cuentas con un contrato, 
                    Solo los cliente pueden mandar una queja caso contrario puede solucitar un contrato
                    con el boton que se muestra: Solicitar un Contrato </label>
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
            <div className="contenedorContraroArriba_j">
                    <h1>Quejas</h1>
                    <button
                        className="styleButonVerDocentes_j"
                        onClick={ () =>{
                            navigate('/client/complaints/new/'+id);
                        } }
                    > añadir queja</button>
                </div>
                { mostrarComponentes(id) }
            </div>
        </div>
    </>
  )
};
export default ClientComplaintPage;