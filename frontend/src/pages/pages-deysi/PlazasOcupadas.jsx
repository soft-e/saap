/* eslint-disable react/prop-types */

import '../../assets/css/css-deysi/plazasOcupadas.css';
// eslint-disable-next-line react/prop-types
const PlazasOcupadas = ({ plazas, handleClick }) => {


  return (

    <div>


    <h2>Plazas Ocupadas</h2>
    
    <div className="plazas-ocupadas" >
    
 {plazas.map((plaza) => (
   <div
     key={plaza.id}
     className={`plaza-ocupada ${plaza.estado ? 'ocupado' : ''}`}
     onClick={() => handleClick(plaza.id)}

   >
    <h3 >  {plaza.id} </h3>
    
   
   </div>
     
 ))}
</div>

</div>
  );
};

export default PlazasOcupadas;
