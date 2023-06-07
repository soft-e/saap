import ButtonBoxAdmin from "../../components/ButtonBoxAdmin";
import Navbar from "../../components/Navbar";
import "../../assets/css/css-rodrigo/ReportesPage.css"
function ReportesPage() {
  return (
    <>
      <Navbar accion="cerrar sesion" />
      <div
        className="espacioPagina"
      >
        <ButtonBoxAdmin />
        <div
          className="espacioDeTrabajo"
        >
          <div
            className="tituloPagina"
          >
            <h1>Reportes</h1>
          </div>
          <div
            className="espacioReportes"
          >
            <div
              className="espacioSelects"
            >
              <h2>seleccionar un mes y una semana</h2>
              <select name="selectMonth" id="selectMonth"
                className="selectMonth"
              >
                <option value="1">Enero</option>
                <option value="2">Febrero</option>
                <option value="3">Marzo</option>
                <option value="4">Abril</option>
                <option value="5">Mayo</option>
              </select>
              <select name="selectWeek" id="selectWeek"
                className="selectWeek"
              >
                <option value="1">Semana 1</option>
                <option value="2">Semana 2</option>
                <option value="3">Semana 3</option>
                <option value="4">Semana 4</option>
              </select>
            </div>
            <div
              className="espacioCardsReportes"
            >
              <div
                className="cardRecaudaciones"
              >
                <h3>Recaudaciones</h3>
              </div>
              <div
                className="cardClientesEnMora"
              >
                <h3>Clientes en mora</h3>
              </div>
              <div
                className="cardEspaciosDisponibles"
              >
                <h3>Espacios disponibles</h3>
              </div>
            </div>

          </div>
        </div>
      </div>

    </>
  )
}

export default ReportesPage;