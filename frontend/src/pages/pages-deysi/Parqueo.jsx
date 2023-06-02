import { Component } from "react";
import { Link } from "react-router-dom";

import "../../assets/css/templatePage.css";

import "../../assets/css/css-deysi/parqueo.css";
import Navbar from "../../components/Navbar";


import PlazasOcupadas from "./PlazasOcupadas";
import ButtonBoxAdmin from "../../components/ButtonBoxAdmin";

import PlazasDisponibles from "./PlazasDisponibles";
import axios from "axios";
const endPoint = "http://localhost:8000/api";
class Parqueo extends Component {
  /*state = {
     
       plazas: [
        { id: 1, nombre: 'Plaza ', estado: 'libre' },
        { id: 2, nombre: 'Plaza ', estado: 'libre' },
        { id: 3, nombre: 'Plaza ', estado: 'ocupado' },
        { id: 4, nombre: 'Plaza ', estado: 'libre' },
        { id: 5, nombre: 'Plaza ', estado: 'ocupado' },
        { id: 6, nombre: 'Plaza ', estado: 'ocupado' },
        { id: 7, nombre: 'Plaza ', estado: 'ocupado' },
        { id: 8, nombre: 'Plaza ', estado: 'ocupado' },
        
        { id: 9, nombre: 'Plaza ', estado: 'libre' },
        { id: 10, nombre: 'Plaza ', estado: 'libre' },
        { id: 11, nombre: 'Plaza ', estado: 'libre' },
        { id: 12, nombre: 'Plaza ', estado: 'libre' },

        
      ],
    };*/

  state = {
    plazas: [],
  };

  componentDidMount() {
    axios.get(`${endPoint}/plazas`).then((response) => {
      this.setState({ plazas: response.data });
    });
  }

  handleClick = (id) => {
    const plazas = this.state.plazas.map((plaza) => {
      if (plaza.id === id) {
        plaza.estado = plaza.estado === "libre" ? "ocupado" : "libre";
      }
      return plaza;
    });
    this.setState({ plazas });
  };

  render() {
    const plazasDisponibles = this.state.plazas.filter(
      (plaza) => plaza.estado === "libre"
    );
    const plazasOcupadas = this.state.plazas.filter(
      (plaza) => plaza.estado === "ocupado"
    );

    return (
      <>
        <Navbar accion="iniciar sesion"/>
        <div className="espacioPagina">
          <ButtonBoxAdmin />
<div className="espacioDetrabajo">


          <div className=".con">
            <h1 className="p"></h1>
          </div>
          <div
            className=".containers"
            id="b"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Link to="/registrarSitio" style={{ textDecoration: "none" }}>
              <button className="button">registro de sitios</button>
            </Link>
          </div>
          <div className=".con">
            <h1 className="p"></h1>
          </div>

          <div className="parqueo">
            <PlazasDisponibles 
              plazas={plazasDisponibles}
              handleClick={this.handleClick}
            />
            <PlazasOcupadas
              plazas={plazasOcupadas}
              handleClick={this.handleClick}
            />
          </div>
          </div>
        </div>
      </>
    );
  }
}

export default Parqueo;
