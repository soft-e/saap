import React from 'react';
import '../../assets/css/css-deysi/plazasDisponibles.css';

class PlazasDisponibles extends React.Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { plazas, handleClick, bloqueSeleccionado } = this.props;

    // Filtrar las plazas por bloque seleccionado y estado (ocupado o libre)
    const plazasFiltradas =
      bloqueSeleccionado === ''
        ? plazas
        // eslint-disable-next-line react/prop-types
        : plazas.filter((plaza) => plaza.bloque === bloqueSeleccionado && plaza.estado === 'libre');

    // Obtener el texto del encabezado h2 con el número de bloque
    const encabezadoH2 =
      bloqueSeleccionado === ''
        ? 'Plazas Disponibles'
        : `Plazas Disponibles (Bloque ${bloqueSeleccionado})`;

    return (
      <div>
        <h2 className='tituloDisponible'>
          <span className='tituloTexto'>{encabezadoH2}</span>
        </h2>

        <div className="plazas-disponibles">
          {plazasFiltradas.map((plaza) => (
            <div
              key={plaza.id}
              className="plaza-disponible"
              onClick={() => handleClick(plaza.id)}
            >
              <h3>{plaza.numero}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default PlazasDisponibles;
