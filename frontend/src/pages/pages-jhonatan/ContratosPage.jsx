import ButtonBoxAdmin from "../../components/ButtonBoxAdmin";
import Navbar from "../../components/Navbar.jsx";
import React, { useEffect, useState } from 'react';
import CardCliente from "../../components/CardCliente.jsx";
import '../../assets/css/css-jhonatan/cardCliente.css';


function ContratosPage() {
  const [docentes, setDocentes] = useState([]);

  useEffect(() => {
    const getDocentes = async () => {
      const response = await getDocentesRequest();
      setDocentes(response.data);
    };
    getDocentes();
  }, []);

  return (
    <div className="caja">
      <Navbar accion="cerrar sesion"/>
      <ButtonBoxAdmin />
      <div className="contenedor_personal">
        <h1 className="title">Contratos (Docentes)</h1>
        <button className="button">Registrar Contrato</button>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {docentes.map((docente) => (
            <CardCliente key={docente.id} docente={docente} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContratosPage;