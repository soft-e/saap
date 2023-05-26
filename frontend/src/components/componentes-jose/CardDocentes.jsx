import React, { useEffect, useState } from "react";
import axios from 'axios';

const endPoint = 'http://127.0.0.1:8000/api/docentes';

const CardDocentes = () => {
    const [docentes, setDocentes] = useState( [] )
    
    //const {id, persona} = docentes;

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
                    </tr>
                ))}
            </tbody>
        </table>
    </>
}

export default CardDocentes;