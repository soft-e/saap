import { Component } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar";
import ButtonBoxAdmin from "../../components/ButtonBoxAdmin";

class AsignarSitio extends Component {
  state = {
    nombreBloque: "",
    primerSitioLibre: "",
    parqueos: [],
    sitiosLibres: [],
    selectedParqueo: "",
    selectedSitio: ""
  };

  componentDidMount() {
    this.obtenerParqueos();
    this.obtenerSitiosLibres();
  }

  obtenerParqueos = () => {
    axios.get("http://localhost:8000/api/parqueos")
      .then((response) => {
        const parqueos = response.data;
        this.setState({ parqueos });
      })
      .catch((error) => {
        console.error("Error al obtener los parqueos:", error);
      });
  };

  obtenerSitiosLibres = () => {
    axios.get("http://localhost:8000/api/plazas?estado=libre")
      .then((response) => {
        const sitiosLibres = response.data;
        this.setState({ sitiosLibres });
      })
      .catch((error) => {
        console.error("Error al obtener los sitios libres:", error);
      });
  };

  handleParqueoChange = (event) => {
    this.setState({ selectedParqueo: event.target.value });
  };

  handleSitioChange = (event) => {
    this.setState({ selectedSitio: event.target.value });
  };

  handleFinalizar = (event) => {
    event.preventDefault();
    const { selectedParqueo, selectedSitio } = this.state;

    if (!selectedParqueo || !selectedSitio) {
      console.log("Debes seleccionar un parqueo y un sitio");
      return;
    }

    axios.post("http://localhost:8000/api/sitio_clientes", {
      parqueo_id: selectedParqueo,
      sitio_id: selectedSitio
    })
      .then((response) => {
        console.log("Asignación registrada con éxito:", response.data);

        // Actualizar el estado del sitio a "ocupado" en la tabla "plazas"
        axios.put(`http://localhost:8000/api/plazas/${selectedSitio}`, {
          estado: "ocupado"
        })
          .then((response) => {
            console.log("Estado del sitio actualizado:", response.data);

            // Restablecer los valores seleccionados
            this.setState({
              selectedParqueo: "",
              selectedSitio: ""
            });

            // Actualizar la lista de sitios libres
            this.obtenerSitiosLibres();
          })
          .catch((error) => {
            console.error("Error al actualizar el estado del sitio:", error);
          });
      })
      .catch((error) => {
        console.error("Error al registrar la asignación:", error);
      });
  };

  handleCancel = (event) => {
    event.preventDefault();

    // Restablecer los valores seleccionados
    this.setState({
      selectedParqueo: "",
      selectedSitio: ""
    });
  };

  render() {
    const { parqueos, sitiosLibres, selectedParqueo, selectedSitio } = this.state;
    return (
      <>
        <Navbar accion="iniciar sesión" />
        <div className="espacioPagina">
          <ButtonBoxAdmin />
          <div className="espacioDeTrabajo">
            <div className="padreParqueo">
              <form className="formularioParqueo">
                <div className="contenedorParqueo">
                  <h1 id="tituloParqueo">Datos del parqueo</h1>

                  <div id="entradaP" className="entradaP1">
                    <label>Parqueos:</label>
                    <select
                      value={selectedParqueo}
                      onChange={this.handleParqueoChange}
                    >
                      <option value="">Selecciona un parqueo</option>
                      {parqueos.map((parqueo) => (
                        <option key={parqueo.id} value={parqueo.id}>
                          {parqueo.nombre_bloque}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div id="entradaP" className="entradaP1">
                    <label>Sitios Libres:</label>
                    <select
                      value={selectedSitio}
                      onChange={this.handleSitioChange}
                    >
                      <option value="">Selecciona un sitio libre</option>
                      {sitiosLibres.map((sitio) => (
                        <option key={sitio.id} value={sitio.id}>
                          {sitio.nombre} {sitio.id}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="contenedorBotonP">
                    <button
                      id="finalizar"
                      className="botonInicioSesion"
                      type="submit"
                      onClick={this.handleFinalizar}
                    >
                      Finalizar
                    </button>
                    <button
                      id="botonCancelarP"
                      className="botonInicioSesion botonCancelar"
                      type="submit"
                      onClick={this.handleCancel}
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AsignarSitio;
