import ButtonBoxAdmin from "../../components/ButtonBoxAdmin";
import Navbar from "../../components/Navbar.jsx";
import React, { useEffect, useState } from 'react';
import CardPersonal from "../../components/CardPersonal.jsx";
import '../../assets/css/css-jhonatan/cardPersonal.css';
import { getUsersRequest, deleteUserRequest } from '../../api/user.api';

function PersonalPage() {
  const [empleados, setEmpleados] = useState([]);

  useEffect(() => {
    const getEmpleados = async () => {
      const response = await getUsersRequest();
      setEmpleados(response.data);
    };
    getEmpleados();
  }, []);

  const eliminarEmpleado = async (id) => {
    try {
      await deleteUserRequest(id);
      setEmpleados(empleados.filter((empleado) => empleado.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="caja">
      <Navbar accion="cerrar sesion" />
      <ButtonBoxAdmin />
      <div className="contenedor_personal">
        <h1 className="title">Personal</h1>
        <button className="button">Registrar Personal</button>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {empleados.map((empleado) => (
            <CardPersonal
              key={empleado.id}
              empleado={empleado}
              eliminarEmpleado={eliminarEmpleado}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PersonalPage;