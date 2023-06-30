import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import '../../assets/css/css-jose/listarDocentes.css';
import { useLocation } from "react-router-dom";
import { URL_API } from '../../services/EndPoint'

const endPoint = URL_API+'/docentes';
const endPointContrato = URL_API+'/contrato';
const endPointSContratos = URL_API+"/solicitarcontrato"

const CardDocentes = () => {

    const [docentes, setDocentes] = useState( [] )
    const [tableDocentes, setTableDocentes] = useState( [] )
    const [busqueda, setBusqueda] = useState('')
    const [contratos, setContratos] = useState( [] )
    const [sContratos, setSContratos] = useState ( [] );

    const location = useLocation();
    const estado = new URLSearchParams(location.search).get('estado');

    useEffect ( () => {
        getAllDocentes();
        getAllContratos();
        getAllSContratos();
    }, []);

    const getAllSContratos = async () => {
        const response = await axios.get(endPointSContratos);
        setSContratos(response.data);
    }

    const getAllContratos = async () => {
        const response = await axios.get(endPointContrato);
        setContratos(response.data);
    }

    const getAllDocentes = async () => {
        const response = await axios.get(endPoint);
        setDocentes(response.data);
        setTableDocentes(response.data)
    }

    const handleChange = (e) => {
        setBusqueda(e.target.value);
        console.log("busqueda: "+e.target.value);
        filtrar(e.target.value);
    }

    const filtrar = (terminoBusqueda) => {
        var resultadoBusqueda = tableDocentes.filter((elemento) => {
            if(elemento.persona.nombre.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
            || elemento.persona.ci.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
            ){
                return elemento;
            }
        });
        setDocentes(resultadoBusqueda);
    }

    const deleteDocente = async (id) => {
        await axios.delete(`${endPoint}/${id}`);
        getAllDocentes();
    }

    function estaRegistrado(buscar){
        let res = false;
        for(let i = 0; i < contratos.length; i++){
            if(contratos[i].docente_id == buscar){
                res = true;
            }
        }
        return res;
    }

    function mandoSolicitud(buscar){
        let res = false;
        for(let i = 0; i < sContratos.length; i++){
            if(sContratos[i].docente_id == buscar){
                res = true;
            }
        }
        return res;
    }

    const imprimirDocentes = () => {
        let dato = [];
        console.log(estado)
        if(estado == 'false'){
            dato = imprimirListaDocentes();
        }else{
            dato = imprimirListaSolicitudes();
        }
        return dato;
    }

    const imprimirListaSolicitudes = () => {
        let datos = []; 
        for(let i = 0; i < docentes.length; i++){
            if(mandoSolicitud(docentes[i].id) && !estaRegistrado(docentes[i].id)){
                datos.push(<tr className="tr_j" key={docentes[i].id}>
                    <td className="td_j">{ docentes[i].persona.nombre }</td>
                    <td className="td_j">{ docentes[i].persona.apellido_paterno }</td>
                    <td className="td_j">{ docentes[i].persona.apellido_materno }</td>
                    <td className="td_j">{ docentes[i].persona.ci }</td>
                    <td>
                        <Link 
                            className="stylesButton_j"
                            
                            to={`/registrovehiculo/${docentes[i].id}`}
                        >asignar sitio</Link>
                    </td> 
                </tr>)
            }
        }
        return datos;
    }

    const imprimirListaDocentes = () => {
        let datos = []; 
        for(let i = 0; i < docentes.length; i++){
            if(!estaRegistrado(docentes[i].id)){
                datos.push(<tr className="tr_j" key={docentes[i].id}>
                    <td className="td_j">{ docentes[i].persona.nombre }</td>
                    <td className="td_j">{ docentes[i].persona.apellido_paterno }</td>
                    <td className="td_j">{ docentes[i].persona.apellido_materno }</td>
                    <td className="td_j">{ docentes[i].persona.ci }</td>
                    <td>
                        <Link 
                            className="stylesButton_j"
                            to={`/registrovehiculo/${docentes[i].id}`}
                        >asignar sitio</Link>
                    </td> 
                </tr>)
            }
        }
        return datos;
    }

    return <div className="contenedorListarDocentes_j">
        <div>
            <h2>Lista de los Docentes que aun no tienen un sitio asignado</h2>
        </div>
        <div className="divBuscar_j" >
            <input
                className="inputBuscar_j"
                value={ busqueda }
                placeholder="ingresea nombre o numero de carnet"
                onChange={ handleChange } 
            />
        </div>
        <div className="contenedorTabla_j">
            <table className="table_j" >
                <thead className="thead_j">
                    <tr>
                        <th className="th_j">Nombre</th>
                        <th className="th_j">Apellido Paterno</th>
                        <th className="th_j">Apellido Materno</th>
                        <th className="th_j">Numero de Carnet</th>
                        <th className="th_j"> </th>
                    </tr>
                </thead>
                <tbody className="tbody_j">
                    {imprimirDocentes()}
                    {/**{ docentes.map((docente) => (
                        <tr className="tr_j" key={docente.id}>
                            <td className="td_j">{ docente.persona.nombre }</td>
                            <td className="td_j">{ docente.persona.apellido_paterno }</td>
                            <td className="td_j">{ docente.persona.apellido_materno }</td>
                            <td className="td_j">{ docente.persona.ci }</td>
                            <td>
                                <Link 
                                    className="stylesButton_j"
                                    to={`/registrovehiculo/${docente.id}`}
                                >asignar sitio</Link>
                            </td> 
                        </tr>
                    ))}
                    */}
                </tbody>
            </table>
        </div>
    </div>
}

export default CardDocentes;