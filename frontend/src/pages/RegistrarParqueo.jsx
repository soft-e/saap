import "../assets/css/Parqueo.css";
import ButtonBoxAdmin from "../components/ButtonBoxAdmin";

function RegistroParqueo(){
  return (
    <>
      <ButtonBoxAdmin/>
      <div className="formulario" >
      <form action="" id="formulario">
        <h1>Registro de Parqueo</h1>
        <div id="input">
          <label htmlFor=""> Nombre de Parqueo:</label>
          <input 
          type="text" 
          id="inputText"
          placeholder="Escribe el Nombre"
          />
        </div>
        <div id="input">
          <label htmlFor=""> Numeros de Espacios:</label>
          <input 
            type="text" 
            id="inputText"
            placeholder="Escribe el Numero de espacios"
          />
        </div>
        <div className="espacioBoton">
          <button className="botonInicioSesion" type="submit">
            Registrar
          </button>
          <button className="botonInicioSesion" type="submit">
            Cancelar
          </button>
        </div>
        
      </form>
    </div>
    </>
  )
}
export default RegistroParqueo;
