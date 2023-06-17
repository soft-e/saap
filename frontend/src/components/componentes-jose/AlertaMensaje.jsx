import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../assets/css/css-jose/listarDocentes.css";
import { useNavigate } from "react-router-dom";
import { URL_API } from "../../services/EndPoint";


const endPointDocente = URL_API + "/docentes/";
const endPointMensajes = URL_API + "/mensajes";

const AlertaMensaje = (props) => {
    const navigate = useNavigate();
    const [contratos, setContratos] = useState([]);
    const [docente, setDocente] = useState([]);
    const [mensajes, setMensajes] = useState([]);
    const id = props.id_docente;
    const [persona, setPersona] = useState([]);

    useEffect(() => {
        getDocente();
        getAllMensajes();
    }, []);

    const getDocente = async () => {
        const response = await axios.get(endPointDocente+id);
        setDocente(response.data);
        setPersona(response.data.persona)
    };

    const getAllMensajes = async () => {
        const response = await axios.get(endPointMensajes);
        setMensajes(response.data);
    };

    function sacarCantidadDeMensajes(){
        let res = 0;
        for (let i = 0; i < mensajes.length; i++) {
            if(mensajes[i].destino.toString().toLowerCase()
            .includes(persona.email.toLowerCase())){
                if(mensajes[i].estado.toString().toLowerCase()
                .includes('false')){
                    res ++;
                }        
            }   
        }
        return res;
    }

    function imprimirAlerta(id){
        let dato = [];
        let cantidad = sacarCantidadDeMensajes();
        if(cantidad>0){
            if(cantidad===1){
                dato = <>
                    <div>
                        <button className="stylesButton_j"
                        onClick={ (()=>{
                            navigate('/client/messages/'+id)
                        }) }
                        >tienes { cantidad } mensaje nuevos</button>
                    </div>
                </>
            }else{
                dato = <>
                    <div className="espacioBotones_j">
                        <button className="stylesButton_j"
                        onClick={ (()=>{
                            navigate('/client/messages/'+id)
                        }) }
                        >tienes { cantidad } mensajes nuevos</button>
                    </div>
                </>
            }
        }
        return dato
    }
    
    return (
        <div className="contenedorListarDocentes_j">
            <div>
                {imprimirAlerta(props.id_docente) }
                <br></br>
            </div>
        </div>
    );
};

export default AlertaMensaje;