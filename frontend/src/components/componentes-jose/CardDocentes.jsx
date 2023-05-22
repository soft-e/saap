import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

const endPoint = 'http://127.0.0.1:8000/api/docentes';

const CadDocentes = () => {
    const [docentes, setDocentes] = useState([])

    useEffect ( () => {
        getAllDocentes();
    }, []);

    const getAllDocentes = async () => {
        const response = await axios.get(endPoint);
        setDocentes(response);
    }

    return <>
        <table>
            <thead>
                <th>Nombre</th>
                <th>Apellido Materno</th>
                <th>Apellido Materno</th>
                <th>Numero de Carnet</th>
            </thead>
            <tbody>
                { docentes.map( (docente) => (
                    <tr key={docente.id}>
                        <td>{ docente.nombre }</td>
                        <td>{ docente.apellido_paterno }</td>
                        <td>{ docente.apellido_materno }</td>
                        <td>{ docente.ci }</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
}

export default CadDocentes;