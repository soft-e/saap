import "../assets/css/RegistrarParqueo.css";
import ButtonBoxAdmin from "../components/ButtonBoxAdmin";
import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const endpoint='http://localhost:8000/api';

function RegistroParqueo(){
  const [nombre_bloque,setnombre_bloque]=useState('');
  const [numero_sitios,setnumero_sitios]=useState(0);
  const navigate=useNavigate();

  const store=async(e)=>{
    e.preventDefault();
    await axios.post(`${endpoint}/parqueos`,{
      nombre_bloque:nombre_bloque,numero_sitios:numero_sitios})
    navigate('/admin');
  }

  function handleCancel(event) {
    event.preventDefault();
    setnombre_bloque('');
    setnumero_sitios('');
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
            value={numero_sitios}
            onChange={(e)=>setnumero_sitios(e.target.value)}
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
