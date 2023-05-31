import React from 'react';

function CardCliente({ docente }) {
  const { id, persona } = docente;
  const { nombre, apellido_paterno, apellido_materno } = persona;

  return (
    <div className="col">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{id} - {nombre} {apellido_paterno} {apellido_materno}</h5>
        </div>
      </div>
    </div>
  );
}

export default CardCliente;