import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import '../../assets/css/css-jose/listarDocentes.css';
import { useNavigate } from "react-router-dom";
import { URL_API } from "../../services/EndPoint"

const endPointDocentes = URL_API+'/docentes';
const endPointContrato = URL_API+'/contrato';

const CardContratos = () => {
    const navigate = useNavigate();
    const [contratos, setContratos] = useState ( [] )
    const [docentes, setDocentes] = useState( [] )
    const [tableDocentes, setTableDocentes] = useState( [] )
    const [busqueda, setBusqueda] = useState('')
    //const {id, persona} = docentes;

    useEffect ( () => {
        getAllDocentes();
        getAllContratos();
    }, []);

    const getAllDocentes = async () => {
        const response = await axios.get(endPointDocentes);
        setDocentes(response.data);
        setTableDocentes(response.data)
    }

    const getAllContratos = async () => {
        const response = await axios.get(endPointContrato);
        setContratos(response.data);
        console.log(contratos);
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
                placeholder="buscar contratos por nombre"
                onChange={ handleChange } 
            />
        </div>
        <div className="contenedorTabla_j">
            <table className="table_j" >
                <thead className="thead_j">
                    <tr>
                        <th className="th_j">Nombre</th>
                        <th className="th_j">Apellidos</th>
                        <th className="th_j">Sitio</th>
                        <th className="th_j">Bloque</th>
                        <th className="th_j"> </th>
                    </tr>
                </thead>
                <tbody className="tbody_j">
                    { contratos.map((contrato) => (
                        <tr className="tr_j" key={contrato.id}>
                            <td className="td_j">{ contrato.docente_id }</td>
                            <td className="td_j">poner apellido aqui</td>
                            <td className="td_j">{ contrato.sitio_id }</td>
                            <td className="td_j">{ contrato.bloque }</td>
                            <td>
                                <Link 
                                    className="stylesButton_j"
                                >ver</Link>
                            </td> 
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
}

export default CardContratos;