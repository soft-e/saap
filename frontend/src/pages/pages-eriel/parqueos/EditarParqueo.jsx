import '../../../assets/css/css-eriel/EditarParqueo.css';
import Parqueos from './Parqueos'
import axios from 'axios';
import { useState,useEffect,useContext } from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import {URL_API} from '../../../services/EndPoint'
/*import { SessionContext } from '../../../context/context-rodrigo/SessionProvider';
*/

function EditarParqueo() {
    /*const { user } = useContext(SessionContext);*/
    const {id,nombre,cantidad}=useParams();
    const [nombre_bloque,setnombre]=useState(nombre);
    const [cantidad_sitios,setSitios]=useState(cantidad); 
    const empleado_id=1;
    const navigate=useNavigate();

    const update=async(e)=>{
        e.preventDefault();
        await axios.put(`${URL_API}/parqueos/${id}`,{
            nombre_bloque:nombre_bloque,
            cantidad_sitios:cantidad_sitios,
            empleado_id:empleado_id
        })
        navigate('/parqueos')
    }
    useEffect(()=>{
        const getParqueoById=async()=>{
            const response=await axios.get(`${URL_API}/parqueos/${id}`)
            console.log(response.data)
            setnombre(response.data.nombre_bloque)
            setSitios(response.data.cantidad_sitios)
        }
        getParqueoById();
    },[]);
    
    return(
    <div className='editarParqueoPadre'>
        <Parqueos/>
        <div className='Modal'>
        <div className='padreEditarParqueo' >
            <div className='tituloEditarParqueo'>
                <h2>Editar</h2>
            </div>
            <form onSubmit={update}>
                <div className='cuerpoEditarParqueo'>
                    <label htmlFor="">Nuevo Nombre</label>
                    <input  
                        value={nombre_bloque}
                        onChange={(e)=>setnombre(e.target.value)}
                        type="text"
                        required
                    />
                    <label htmlFor="">Nueva Cantidad de Sitios</label>
                    <input
                        type="number" 
                        onChange={(e)=>setSitios(e.target.value)}
                        value={cantidad_sitios}
                        required
                    />
                </div>
                <div className='botonEditarParqueo'>
                    <button 
                    type='submit'
                    className='Btn-actualizar'
                    >
                        actualizar
                    </button>
                    <button 
                       className='botonCancelarEditarParqueo'
                       onClick={() => navigate("/parqueos")}
                    >
                        cancelar
                    </button>
                </div>
            </form>
        </div>
    </div>
    </div>
    )
}
export default EditarParqueo;