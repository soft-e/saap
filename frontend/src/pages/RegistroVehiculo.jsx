import "../assets/css/RegistroVehiculo.css";
import ButtonBoxAdmin from "../components/ButtonBoxAdmin";


function RegistroVehiculo(){
    
    return (
      <>
          <ButtonBoxAdmin/>
          <div className="formulario" id="hijo2" >
            <form action="" id="formulario">
            <h1 id="titulo">Datos del Vehiculo</h1>
            <div id="input" className="placa">
              <label htmlFor="">placa:</label>
              <input 
                  type="text" 
                  id="inputText"
                  placeholder="Escribe el Nombre"
                  required
              />
            </div>
            <div id="input" className="entradas">
            <label htmlFor="">marca</label>
            <input 
              type="number" 
              id="inputText"
              placeholder="Escribe el Numero de espacios"
              required
            />
            </div>
            <div id="input" className="entradas">
              <label htmlFor="">modelo:</label>
              <input 
                  type="text" 
                  id="inputText"
                  placeholder="Escribe el Nombre"
                  required
              />
            </div>
            <div id="input" className="entradas">
              <label htmlFor="">año:</label>
              <input 
                  type="text" 
                  id="inputText"
                  placeholder="Escribe el Nombre"
                  required
              />
            </div>
            <div id="input" className="entradas">
              <label htmlFor="">color:</label>
              <input 
                  type="text" 
                  id="inputText"
                  placeholder="Escribe el Nombre"
                  required
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
  export default RegistroVehiculo;