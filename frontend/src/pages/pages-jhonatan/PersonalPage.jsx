import ButtonBoxAdmin from "../../components/ButtonBoxAdmin";
import "../../assets/css/templatePage.css";
import Navbar from "../../components/Navbar";
import React, { useEffect, useState } from 'react';
import CardPersonal from "../../components/CardPersonal";
import '../../assets/css/css-jhonatan/cardPersonal.css';
import { getUsersRequest, deleteUserRequest } from '../../api/user.api';
import { useNavigate } from "react-router-dom";

function PersonalPage() {
  const [empleados, setEmpleados] = useState([]);
  const navigate = useNavigate();

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
    <>
      <Navbar accion="iniciar sesion" />
      <div className="espacioPagina">
        <ButtonBoxAdmin />
        <div className="contenedorPersonal_b">
        <div className="contenedorPersonalArriba_b">
          <h1>Personal</h1>
          <button className="button"
          onClick={ () => navigate("/personal/registrar") }
          >Registrar Personal</button>
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
      </div>
    </>
  );
}

export default PersonalPage;