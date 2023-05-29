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
        <div className="divBuscar_j" >
            <input
                className="inputBuscar_j"
                value={ busqueda }
                placeholder="ingresea nombre o numero de carnet"
                onChange={ handleChange } 
            />
        </div>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido Materno</th>
                        <th>Apellido Materno</th>
                        <th>Numero de Carnet</th>
                    </tr>
                </thead>
                <tbody>
                    { docentes.map((docente) => (
                        <tr key={docente.id}>
                            <td>{ docente.persona.nombre }</td>
                            <td>{ docente.persona.apellido_paterno }</td>
                            <td>{ docente.persona.apellido_materno }</td>
                            <td>{ docente.persona.ci }</td>
                            <td>
                                <Link to={`/registrovehiculo/${docente.id}`}>asignar sitio</Link>
                            </td> 
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
}

export default CardDocentes;