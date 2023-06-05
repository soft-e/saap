import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import '../../assets/css/css-jose/listarDocentes.css';
import { useNavigate } from "react-router-dom";

const endPoint = 'http://127.0.0.1:8000/api/docentes';

const CardDocentes = () => {
    const navigate = useNavigate();

    const [docentes, setDocentes] = useState( [] )
    const [tableDocentes, setTableDocentes] = useState( [] )
    const [busqueda, setBusqueda] = useState('')
    //const {id, persona} = docentes;

    useEffect ( () => {
        getAllDocentes();
    }, []);

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

    return <div className="contenedorListarDocentes_j">
        <div>
            <h2>Lista de los Docentes</h2>
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
                        <th className="th_j">Apellido Materno</th>
                        <th className="th_j">Apellido Materno</th>
                        <th className="th_j">Numero de Carnet</th>
                        <th className="th_j"> </th>
                    </tr>
                </thead>
                <tbody className="tbody_j">
                    { docentes.map((docente) => (
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
                </tbody>
            </table>
        </div>
    </div>
}

export default CardDocentes;