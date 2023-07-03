import '../../../assets/css/css-eriel/EditarParqueo.css';
import Parqueos from './Parqueos'
import axios from 'axios';
import { useState,useEffect} from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import {URL_API} from '../../../services/EndPoint'
import { useSession } from '../../../context/context-rodrigo/SessionProvider';

function EditarParqueo() {
    const { user } = useSession();
    const {id,nombre,cantidad}=useParams();
    const [nombre_bloque,setnombre]=useState();
    const [cantidad_sitios,setSitios]=useState(); 
    const empleado_id=user.id;
    const navigate=useNavigate();
    
    const update=async(e)=>{
        e.preventDefault();
        await axios.put(`${URL_API}/parqueos/${id}`,{
            nombre_bloque:nombre_bloque,
            cantidad_sitios:cantidad_sitios,
            empleado_id:empleado_id
        })
        registrarSitios()
        navigate('/parqueos')
    }
    useEffect(()=>{
        const getParqueoById=async()=>{
            await axios.get(`${URL_API}/parqueos/${id}`)
            setnombre(nombre)
            setSitios(cantidad)
        }
        getParqueoById();
    },[]);
    
    const registrarSitios = async () => {
        const sitios = [];
        for (let i = parseInt(cantidad)+1; i <= cantidad_sitios; i++) {
          sitios.push({
            parqueo_id: id,
            numero_sitio: i,
            estado_sitio: "libre",
          });
        }
        await axios.post(`${URL_API}/sitio`, sitios);
    }
    
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
                        min={cantidad}
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