/* eslint-disable react/prop-types */

import React from 'react';
import '../../assets/css/css-deysi/plazasOcupadas.css';

class PlazasOcupadas extends React.Component {
  render() {
    const { plazas, handleClick, bloqueSeleccionado } = this.props;

    // Filtrar las plazas ocupadas por bloque seleccionado
    const plazasOcupadasFiltradas =
      bloqueSeleccionado === ''
        ? plazas
        : plazas.filter((plaza) => plaza.bloque === bloqueSeleccionado);

    // Obtener el texto del encabezado h2 con el número de bloque
    const encabezadoH2 =
      bloqueSeleccionado === ''
        ? 'Plazas Ocupadas'
        : `Plazas Ocupadas (Bloque ${bloqueSeleccionado})`;

    return (
      <div>
        <h2>{encabezadoH2}</h2>
        <div className="plazas-ocupadas">
          {plazasOcupadasFiltradas.map((plaza) => (
            <div
              key={plaza.id}
              className="plaza-ocupada"
              onClick={() => handleClick(plaza.id)}
            >
              <h3>{plaza.id}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default PlazasOcupadas;
