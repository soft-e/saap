import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../assets/css/css-jose/listarDocentes.css";
import { useNavigate } from "react-router-dom";
import { URL_API } from "../../services/EndPoint";

const endPointDocente = URL_API + "/docentes/";
const endPointQueja = URL_API + "/quejas";
const endPointActualizar = URL_API + "/editarqueja/";

const CardQuejaClient = ( props ) => {

    const navigate = useNavigate();
    const [docente, setDocente] = useState([]);
    const [quejas, setQuejas] = useState([]);
    const [queja, setQueja] = useState([]);    
    const id = props.docente_id;

    useEffect(() => {
        getDocente();
        getAllQuejas();
    }, []);

    const getDocente = async () => {
        console.log(id+" id del docenteasd");
        const response = await axios.get(endPointDocente+id);
        setDocente(response.data);
    };

  const getAllQuejas = async () => {
    const response = await axios.get(endPointQueja);
    setQuejas(response.data);
  };

    function mostrarFecha(fecha){
        return fecha.substring(0, 10);
    }

    const update = async (e) => {
      e.preventDefault();
      await axios.put(endPointActualizar+queja.id, {
        id_docente: queja.id_docente,
        asunto: queja.asunto,
        contenido: queja.contenido,
        respuesta: queja.respuesta,
        estado_adm: true,
        estado_clt: true,
      });
      console.log("marcado como leido")
      window.location.reload();
    }

    function estaLeido(queja){
      let dato;
      if(queja.estado_clt){
        dato = "queja leido";
      }else if (queja.estado_adm){
        dato = <button
          className="stylesButton_j"
          onClick={()=>{  
            setQueja(queja);
            update(event);
          }}
        >marcar Leido</button>
      }else{
        dato = "queja no respondido"
      }
      return dato;
    }

    function imprimirQuejas() {
        let datos = [];
        for (let i = quejas.length-1; i >= 0; i--) {
            if(quejas[i].id_docente.toString().toLowerCase()
            .includes(docente.id)){
                datos.push(
                    <tr className="tr_j" 
                    key={quejas[i].id}>
                        <td className="td_j">{mostrarFecha(quejas[i].created_at)}</td>
                        <td className="td_j">{quejas[i].asunto}</td>
                        <td className="td_j">{quejas[i].contenido}</td>
                        <td className="td_j">{quejas[i].respuesta}</td>
                        <td className="td_j">{estaLeido(quejas[i])}</td>
                    </tr>
                );
                }   
            }
        return datos;
    }

  return (
    <div className="contenedorListarDocentes_j">
      <div className="divBuscar_j">
        <h2>Lista de quejas enviadas</h2>
      </div>
      <div className="contenedorTabla_j">
        <table className="table_j">
          <thead className="thead_j">
            <tr>
              <th className="th_j">fecha</th>
              <th className="th_j">ausnto</th>
              <th className="th_j">contenido</th>
              <th className="th_j">respuesta</th>
              <th className="th_j">estado</th>
            </tr>
          </thead>
          <tbody className="tbody_j">
            {imprimirQuejas()}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CardQuejaClient;