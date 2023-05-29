import ButtonBoxAdmin from "../../components/ButtonBoxAdmin";
import Navbar from "../../components/Navbar.jsx";
import React, { useEffect, useState } from 'react';
import CardPersonal from "../../components/CardPersonal.jsx";
import '../../assets/css/css-jhonatan/cardPersonal.css';
import { getUsersRequest } from '../../api/user.api';
import { useNavigate } from "react-router-dom";

function PersonalPage(){
  const [empleados, setEmpleados] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getEmpleados = async () => {
      const response = await getUsersRequest();
      setEmpleados(response.data);
    };
    getEmpleados();
  }, []);

  return (
    <div className="caja">
      <Navbar accion="cerrar sesion"/>
      <ButtonBoxAdmin />
      <div className="contenedor_personal">
        <h1 className="title">Personal</h1>
        <button className="button"
          onClick={()=>navigate("/personal/registrar")}
        >Registrar Personal</button>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {empleados.map((empleado) => (
            <CardPersonal key={empleado.id} empleado={empleado} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PersonalPage;