import React from 'react';

function CardPersonal({ id, nombre, ApellidoP, ApellidoM, cargo, CI, telefono, correo }) {
  return (
    <div className="col">
      <div className="card">
        <div className="card-header">{cargo}</div>
        <div className="card-body">
          <h5 className="card-title">{nombre}</h5>
          <h5 className="card-title">{ApellidoP}</h5>
          <h5 className="card-title">{ApellidoM}</h5>
          <p className="card-text">
            CI: {CI}
            <br />
            Teléfono: {telefono}
            <br />
            Correo: {correo}
          </p>
          <button className="button">Editar</button>
        </div>
      </div>
    </div>
  );
}

export default CardPersonal;
