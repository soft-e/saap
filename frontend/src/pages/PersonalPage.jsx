import ButtonBoxAdmin from "../components/ButtonBoxAdmin";
import React, { useState } from 'react';
import CardPersonal from "../components/CardPersonal.jsx";
import '../assets/css/cardPersonal.css';

function PersonalPage(){
  return <div
  className="caja"
>
  <ButtonBoxAdmin/>
  <div className="contenedor_personal">
  <h1 className="title">Personal</h1>
        <button className="button">Registrar Personal</button>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          <CardPersonal
            id={1}
            nombre="Juan"
            ApellidoP="Perez"
            ApellidoM="Escalera"
            CI="5302459"
            cargo="Guardia"
            telefono="75463989"
            correo="juanperez@example.com"
          />
          <CardPersonal
            id={2}
            nombre="María"
            ApellidoP="Gómez"
            ApellidoM="Valdivia"
            CI="5487451"
            cargo="Secretaria"
            telefono="60370826"
            correo="mariagomez@example.com"
          />
          <CardPersonal
            id={3}
            nombre="Pedro"
            ApellidoP="Rodríguez"
            ApellidoM="Garcia"
            CI="3247841"
            cargo="Guardia"
            telefono="75981537"
            correo="pedrorodriguez@example.com"
          />
        </div>
      </div>
    </div>
  
  
  
 

}
export default PersonalPage;