import "../assets/css/RegistrarParqueo.css";
import ButtonBoxAdmin from "../components/ButtonBoxAdmin";
import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const endpoint='http://localhost:8000/api';

function RegistroParqueo(){
  const [nombre_bloque,setnombre_bloque]=useState('');
  const [cantidad_sitios,setcantidad_sitios]=useState(0); 
  const empleado_id=1;

  const navigate=useNavigate();

  const store=async(e)=>{
    e.preventDefault();
    await axios.post(`${endpoint}/parqueos`,{
      nombre_bloque:nombre_bloque,
      cantidad_sitios:cantidad_sitios,
      empleado_id:empleado_id})
    navigate('/admin');
  }

  function handleCancel(event) {
    event.preventDefault();
    setnombre_bloque('');
    setcantidad_sitios('');
  }
  
  
  return (
    <>
        <ButtonBoxAdmin/>
        <div className="formulario" id="hijo2" onSubmit={store}>
          <form action="" id="formulario">
          <h1>Registro de Parqueo</h1>
          <div id="input">
            <label htmlFor=""> Nombre de Parqueo:</label>
            <input 
                value={nombre_bloque}
                onChange={(e)=>setnombre_bloque(e.target.value)}
                type="text" 
                id="inputText"
                placeholder="Escribe el Nombre"
                required
            />
          </div>
        <div id="input">
          <label htmlFor=""> Numeros de Espacios:</label>
          <input 
            value={cantidad_sitios}
            onChange={(e)=>setcantidad_sitios(e.target.value)}
            type="number" 
            id="inputText"
            placeholder="Escribe el Numero de espacios"
            required
          />
        </div>
        <div className="espacioBoton">
          <button className="botonInicioSesion" type="submit">
            Registrar
          </button>
          <button onClick={handleCancel} className="botonInicioSesion" type="submit">
            Cancelar
          </button>
        </div>
        
        </form>
      </div>   
    </>
  )
}
export default RegistroParqueo;
