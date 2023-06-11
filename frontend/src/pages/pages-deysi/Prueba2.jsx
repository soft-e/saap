// eslint-disable-next-line no-unused-vars
import React from 'react';

function Prueba2() {
  const array = [1, 2, 3, 4, 5];
  const elementToFind = 3;

  const index = array.findIndex((element) => element === elementToFind);

  return (
    <div>
      <h1>Arreglo:</h1>
      <p>Índice del elemento {elementToFind}: {index}</p>
    </div>
  );
}

export default Prueba2;
