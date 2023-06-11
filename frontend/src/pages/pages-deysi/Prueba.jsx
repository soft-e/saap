// eslint-disable-next-line no-unused-vars
import React from 'react';

function Arreglo() {
  const array = [1, 2, 3, 4, 5];

  return (
    <div>
      <h1>Arreglo:</h1>
      <ul>
        {array.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>
    </div>
  );
}
export default Arreglo;
