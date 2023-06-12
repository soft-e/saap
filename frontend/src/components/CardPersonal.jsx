import React from 'react';
import { useNavigate } from 'react-router-dom';

function CardPersonal({ empleado, eliminarEmpleado }) {
  const { id, persona } = empleado;
  const { nombre, apellido_paterno, apellido_materno, ci, telefono, email } = persona;
  const navigate = useNavigate();

  const handleEliminarEmpleado = () => {
    eliminarEmpleado(id);
  };

  return (
    <div className="col">
      <div className="card">
        <div className="card-header">{empleado.nombre_cargo}</div>
        <div className="card-body">
          <h5 className="card-title">{nombre}</h5>
          <h5 className="card-title">{apellido_paterno}</h5>
          <h5 className="card-title">{apellido_materno}</h5>
          <p className="card-text">
            CI: {ci}
            <br />
            Teléfono: {telefono}
            <br />
            Correo: {email}
          </p>
          <button className="button" onClick={handleEliminarEmpleado}>
            Eliminar
          </button>
          <button className="button" onClick={ () => {navigate('edit/'+(persona.id)) }}>Editar</button>
        </div>
      </div>
    </div>
  );
}

export default CardPersonal;