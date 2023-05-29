/* eslint-disable react/prop-types */



import '../../assets/css/css-deysi/plazasDisponibles.css';

const PlazasDisponibles = ({ plazas, handleClick }) => {
  return (
    
   <div>
         <h2>Plazas Disponibles</h2>
         
         <div className="plazas-disponibles" >
         
      {plazas.map((plaza) => (
        <div
          key={plaza.id}
          className="plaza-disponible"
          onClick={() => handleClick(plaza.id)}
        >
         <h3 >  {plaza.id} </h3> 
        </div>

          
      ))}
    </div>
    </div>
  );
};

export default PlazasDisponibles;
