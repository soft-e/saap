import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "../../assets/css/css-jose/listarDocentes.css";
import { useNavigate } from "react-router-dom";
import { URL_API } from "../../services/EndPoint";

const endPointDocentes = URL_API + "/docentes/";
const endPointMensaje = URL_API + "/mensajes";
const endPointActualizar = URL_API + "/actualizarmensajes/";

const CardMensajesClient = ( props ) => {
    const navigate = useNavigate();
    const [docente, setDocente] = useState([]);
    const [mensajes, setMensajes] = useState([]);
    const id = props.id_docente;

    let contenido;
    let asunto;
    let destino;

    console.log(id)

    useEffect(() => {
        getDocente();
        getAllMensajes();
    }, []);

    const getDocente = async () => {
        const response = await axios.get(endPointDocentes+id);
        setDocente(response.data);
    };

  const getAllMensajes = async () => {
    const response = await axios.get(endPointMensaje);
    setMensajes(response.data);
  };

    function mostrarFecha(fecha){
        return fecha.substring(0, 10);
    }

    function marcarLeido(mensaje){
        destino = (mensaje.destino);
        asunto = (mensaje.asunto);
        contenido = mensaje.contenido;
        //update();
    }

    const update = async (e) => {
        e.preventDefault();
        await axios.put(endPointActualizar+'2', {
            origen: 'Administrador',
            destino: destino,
            asunto: asunto,
            contenido: contenido,
            estado: true,
        });
    }

    function imprimirMensajes() {
        let datos = [];
        for (let i = mensajes.length-1; i >= 0; i--) {
            if(mensajes[i].destino.toString().toLowerCase()
            .includes(docente.persona.email.toLowerCase()) ||
            mensajes[i].origen.toString().toLowerCase()
            .includes("Todos".toLowerCase())){
                datos.push(
                    <tr className="tr_j" 
                    key={mensajes[i].id} 
                    onClick={marcarLeido(mensajes[i])}>
                        <td className="td_j">{mostrarFecha(mensajes[i].created_at)}</td>
                        <td className="td_j">{mensajes[i].asunto}</td>
                        <td className="td_j">{mensajes[i].contenido}</td>
                    </tr>
                );
                }   
            }
        return datos;
    }

  return (
    <div className="contenedorListarDocentes_j">
      <div className="divBuscar_j">
        <h2>Lista de Mensajes Recibidos </h2>
      </div>
      <div className="contenedorTabla_j">
        <table className="table_j">
          <thead className="thead_j">
            <tr>
              <th className="th_j">fecha</th>
              <th className="th_j">ausnto</th>
              <th className="th_j">contenido</th>
            </tr>
          </thead>
          <tbody className="tbody_j">
            {imprimirMensajes()}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CardMensajesClient;
