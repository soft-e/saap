import React, { useEffect, useState } from "react";
import axios from "axios";
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

    const [mensaje, setMensaje] = useState([]);
    const [contenido, setContenido] = useState();
    const [asunto, setAsunto] = useState();
    const [destino, setDestino] = useState();

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
        setDestino(mensaje.destino);
        setAsunto(mensaje.asunto);
        setContenido(mensaje.contenido);
        update();
    }

    const update = async (e) => {
      e.preventDefault();
      console.log(endPointActualizar+mensaje.id+"\n"+ 
      mensaje.origen+" "+mensaje.destino+" "+mensaje.asunto+" "+mensaje.estado+" ")
      await axios.put(endPointActualizar+mensaje.id, {
        origen: mensaje.origen,
        destino: mensaje.destino,
        contenido: mensaje.contenido,
        asunto: mensaje.asunto,
        estado: true,
      });
      window.location.reload();
    }

    /**function update(){
      console.log("algo para imprimir"+ mensaje.origen)
      console.log(endPointActualizar+mensaje.id+"\n"+ 
      mensaje.origen+" "+mensaje.destino+" "+mensaje.asunto+" "+mensaje.estado+" ")
      axios.put(endPointActualizar+mensaje.id, {
        origen: mensaje.origen,
        destino: mensaje.destino,
        contenido: mensaje.contenido,
        asunto: mensaje.asunto,
        estado: true,
      }).then(response => {
        console.log('Datos actualizados con éxito');
      })
      .catch(error => {
        console.error('Error al actualizar los datos:', error);
      })
      navigate('/client/messages/'+id);
    }*/

    function estaLeido(mensaje){
      let dato;
      if(mensaje.estado){
        dato = "mensaje leido";
      }else{
        dato = <button
          className="stylesButton_j"
          onClick={()=>{  
            setMensaje(mensaje);
            //marcarLeido(mensaje)
            update(event);
            //update();
          }}
        >marcar Leido</button>
      }
      return dato;
    }

    function imprimirMensajes() {
        let datos = [];
        for (let i = mensajes.length-1; i >= 0; i--) {
            if(mensajes[i].destino.toString().toLowerCase()
            .includes(docente.persona.email.toLowerCase()) ||
            mensajes[i].destino.toString().toLowerCase()
            .includes('todos'.toLowerCase())){
                datos.push(
                    <tr className="tr_j" 
                    key={mensajes[i].id}>
                        <td className="td_j">{mostrarFecha(mensajes[i].created_at)}</td>
                        <td className="td_j">{mensajes[i].asunto}</td>
                        <td className="td_j">{mensajes[i].contenido}</td>
                        <td className="td_j">{estaLeido(mensajes[i])}</td>
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
              <th className="th_j">Leido</th>
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
