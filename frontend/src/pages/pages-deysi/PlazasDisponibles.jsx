/* eslint-disable react/prop-types */
import React from 'react';
import '../../assets/css/css-deysi/plazasDisponibles.css';

class PlazasDisponibles extends React.Component {
  render() {
    const { plazas, handleClick, bloqueSeleccionado } = this.props;

    // Filtrar las plazas por bloque seleccionado
    const plazasFiltradas =
      bloqueSeleccionado === ''
        ? plazas
        : plazas.filter((plaza) => plaza.bloque === bloqueSeleccionado);

    // Obtener el texto del encabezado h2 con el número de bloque
    const encabezadoH2 =
      bloqueSeleccionado === ''
        ? 'Plazas Disponibles'
        : `Plazas Disponibles (Bloque ${bloqueSeleccionado})`;

    return (
      <div>
        <h2 className='tituloDisponible'>
            <span className='tituloTexto'> {encabezadoH2}</span>
        
        </h2>

      

        <div className="plazas-disponibles">
          {plazasFiltradas.map((plaza) => (
            <div
              key={plaza.id}
              className="plaza-disponible"
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

export default PlazasDisponibles;
