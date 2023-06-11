// eslint-disable-next-line no-unused-vars

// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';


function Prueba1() {
    const [arrayElements, setArrayElements] = useState([]);

    useEffect(() => {
      const array = [1, 2, 3, 4, 5];
  
      const elements = [];
      array.forEach((element, index) => {
        elements.push(<li key={index}>{element}</li>);
      });
  
      setArrayElements(elements);
    }, []);
  
    return (
      <div>
        <h1>Arreglo:</h1>
        <ul>
          {arrayElements}
        </ul>
      </div>
    );
  }
  
  
  
  
  
  
  
export default Prueba1;