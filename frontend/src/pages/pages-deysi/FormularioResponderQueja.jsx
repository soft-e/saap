import { useState } from "react";
import Navbar from "../../components/Navbar";
import ButtonBoxAdmin from "../../components/ButtonBoxAdmin";
function FormularioResponderQueja() {
  
  const correoAdministrador = "admin@example.com";
  const [asunto, setAsunto] = useState("");
  const [respuesta, setRespuesta] = useState("");

  const handleInputChange = (e) => {
    setRespuesta(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("Respuesta enviada:");
    console.log("Correo del administrador:", correoAdministrador);
    console.log("Asunto:", asunto);
    console.log("Respuesta:", respuesta);
    // Restablecer los campos después de enviar la respuesta
    setAsunto("");
    setRespuesta("");
  };

  return (

    <>
    <Navbar accion="iniciar sesion" />
    <div className="espacioPagina">
      <ButtonBoxAdmin />
      <div className="espacioDeTrabajo">
      <div className='padre'> 
      <div className="parqueo">
    <form onSubmit={handleSubmit}>
      <label htmlFor="correo">Correo del administrador:</label>
      <input
        id="correo"
        type="email"
        value={correoAdministrador}
        disabled
      />

      <label htmlFor="asunto">Asunto:</label>
      <input
        id="asunto"
        type="text"
        value={asunto}
        onChange={(e) => setAsunto(e.target.value)}
      />

      <label htmlFor="respuesta">Respuesta:</label>
      <textarea
        id="respuesta"
        value={respuesta}
        onChange={handleInputChange}
        required
      ></textarea>

      <button type="submit">Enviar respuesta</button>
    </form>

    </div>
    </div>
    </div>
    </div>
    </>
  );
}

export default FormularioResponderQueja;
