import { Route, Routes } from "react-router-dom";
import PrincipalPage from './pages/PrincipalPage';
//import Navbar from './components/Navbar';
import LoginPage from "./pages/LoginPage";
import Footer from "./components/Footer";
import AdminPage from "./pages/AdminPage";
import PersonalPage from "./pages/pages-jhonatan/PersonalPage";
import TarifaPage from "./pages/pages-jhonatan/TarifaPage";
import RegistrarPersonal from "./pages/pages-jose/RegistrarPersonal";
import EditarPersonal from "./pages/pages-jose/EditarPersonal";
import ListarDocentes from "./pages/pages-jose/ListarDocentes";
import RegistrarMensaje from "./pages/pages-jose/RegistrarMensaje";
import Contratos from "./pages/pages-jose/Contratos";
import ContratosVerIndependiente from "./pages/pages-jose/ContratosVerIndependiente";
import VehiculosExtras from "./pages/pages-eriel/vehiculo/VehiculosExtras"
import EliminarParqueo from "./pages/pages-eriel/parqueos/EliminarParqueo";
//import AdminPageR from "./pages/AdminPageR";
import NotFound from "./pages/NotFound";
import TemplatePage from "./pages/TemplatePage";
import AtencionPage from "./pages/pages-rodrigo/AtencionPage";
import './App.css'
import RegistroParqueo from "./pages/pages-eriel/parqueos/RegistroParqueo";
import RegistroDTvehiculo from "./pages/pages-eriel/vehiculo/RegistroDTvehiculo";
import Parqueos from "./pages/pages-eriel/parqueos/Parqueos";
import EditarParqueo from "./pages/pages-eriel/parqueos/EditarParqueo";
import VerMensajes from "./pages/pages-eriel/mensajes/VerMensajes";
import VerContenidoMensaje from "./pages/pages-eriel/mensajes/VerContenidoMensaje";
import { AtencionContextProvider } from "./context/context-rodrigo/AtencionProvider";
import AtencionForm from "./pages/pages-rodrigo/AtencionForm";
import { TarifaContextProvider } from "./context/context-jhonatan/TarifaProvider";
import TarifaForm from "./pages/pages-jhonatan/TarifaForm";
import TarifaFormCreate from "./pages/pages-jhonatan/TarifaFormCreate";

import { SessionContextProvider } from "./context/context-rodrigo/SessionProvider";
import { PersonaContextProvider } from "./context/context-rodrigo/PersonaProvider"
import VerQuejas from "./pages/pages-jhonatan/VerQuejas";
import VerContenidoQueja from "./pages/pages-jhonatan/VerContenidoQueja";
import RegistrarPlaza from "./pages/pages-deysi/RegistrarPlaza";
import Parqueo from "./pages/pages-deysi/Parqueo";
import AsignarSitio from "./pages/pages-deysi/AsignarSitio";
import { EmpleadoContextProvider } from "./context/context-rodrigo/EmpleadoProvider";

import InicioPage from "./pages/pages-rodrigo/InicioPage";
import ReportesPage from "./pages/pages-rodrigo/ReportesPage";
import { PagoContextProvider } from "./context/context-rodrigo/PagoProvider";
import { Tarifa2ContextProvider } from "./context/context-rodrigo/Tarifa2Provider";
import { PlazaContextProvider } from "./context/context-rodrigo/PlazaProvider";
import { ParqueocontextProvider } from "./context/context-rodrigo/ParqueoProvider";
import FormularioResponderQueja from "./pages/pages-deysi/FormularioResponderQueja";
import { ContratoContextProvider } from "./context/context-rodrigo/ContratoProvider";
import SecretaryPage from "./pages/SecretaryPage";
import SecretaryHomePage from "./pages/SecretaryHomePage";
import SecretaryRegisterPaymentPage from "./pages/SecretaryRegisterPaymentPage";
import SecretaryContractPage from "./pages/SecretaryContractPage";
import ContratosVerIndependienteS from "./pages/pages-jose/ContratosVerIndependienteS";
//IMPORTACIONES CLIENTE
import LoginCliente from "./pages/pages-jose/LoginCliente";
import ClientPage from "./pages/ClientPage";
import ClientComplaintPage from "./pages/pages-jose/ClientComplaintPage";
import ClientComplaintNew from "./pages/pages-jose/ClientComplaintNew";
import ClientMessagePage from "./pages/pages-jose/ClientMessagePage";
import ClientHomePage from "./pages/ClientHomePage";
import ClientContractPage from "./pages/pages-jose/ClientContractPage";
import { DocenteContextProvider } from "./context/context-rodrigo/DocenteProvider";
import { MensajeContextProvider } from "./context/context-rodrigo/MensajeProvider";
import SecretaryContractPage2 from "./pages/SecretaryContractPage2";
import { VehiculoContextProvider } from "./context/context-rodrigo/VehiculoProvider";
import AnunciosPage from "./pages/pages-rodrigo/AnunciosPage";
import UbicacionPage from "./pages/pages-rodrigo/UbicacionPage";
import RegistroVehiculoSitioPage from "./pages/pages-rodrigo/RegistroVehiculoSitioPage";
import { SitioContextProvider } from "./context/context-rodrigo/SitioProvider";
/*import Parqueo from "./pages/pages-deysi/Parqueo";
import RegistrarPlaza from "./pages/pages-deysi/RegistrarPlaza";
import AsignarSitio from "./pages/pages-deysi/AsignarSitio";*/

function App() {


  return (
    <div id="mainheader">
      <SitioContextProvider>
        <EmpleadoContextProvider>
          <PersonaContextProvider>
            <AtencionContextProvider>
              <ContratoContextProvider>
                <TarifaContextProvider>
                  <PagoContextProvider>
                    <Tarifa2ContextProvider>
                      <PlazaContextProvider>
                        <ParqueocontextProvider>
                          <DocenteContextProvider>
                            <MensajeContextProvider>
                              <VehiculoContextProvider>
                                <Routes>
                                  <Route path="/" element={<PrincipalPage />} />
                                  <Route path="/login" element={<LoginPage />} />
                                  <Route path="/admin" element={<AdminPage />} />
                                  <Route path="/personal" element={<PersonalPage />} />
                                  <Route path="/personal/registrar" element={<RegistrarPersonal />} />
                                  <Route path="/personal/edit/:id" element={<EditarPersonal />} />
                                  <Route path="/listardocentes" element={<ListarDocentes />} />
                                  <Route path="/registrarmensaje" element={<RegistrarMensaje />} />
                                  <Route path="/contratos" element={<Contratos />} />
                                  <Route path="/contratos/show/:id" element={<ContratosVerIndependiente />} />
                                  <Route path="*" element={<NotFound />} />
                                  <Route path="/template" element={<TemplatePage />} />
                                  <Route path="/atencion" element={<AtencionPage />} />
                                  <Route path="/atencion/new" element={<AtencionForm />} />
                                  <Route path="/atencion/edit/:id" element={<AtencionForm />} />
                                  <Route path="/registroparqueo" element={<RegistroParqueo />} />
                                  <Route path="/registrovehiculo" element={<RegistroDTvehiculo />} />
                                  <Route path="/tarifa" element={<TarifaPage />} />
                                  <Route path="/tarifa/edit/:id" element={<TarifaForm />} />
                                  <Route path="/tarifa/create" element={<TarifaFormCreate />} />
                                  <Route path="/registrovehiculo/:id" element={<RegistroDTvehiculo />} />
                                  <Route path="/parqueos" element={<Parqueos />} />
                                  <Route path="/editarparqueos/:id/:nombre/:cantidad" element={<EditarParqueo />} />
                                  <Route path="/vermensajes" element={<VerMensajes />} />
                                  <Route path="/vercontenidodemensaje/:id" element={<VerContenidoMensaje />} />
                                  <Route path="/tarifa" element={<TarifaPage />} />
                                  <Route path="/verquejas" element={<VerQuejas />} />
                                  <Route path="/vercontenidodequeja/:id" element={<VerContenidoQueja />} />

                                  <Route path="/registrarSitio" element={<RegistrarPlaza />} />
                                  <Route path="/asignarSitio/:idc/:idv" element={<AsignarSitio />} />
                                  <Route path="/inicio" element={<InicioPage />} />
                                  <Route path="/reportes" element={<ReportesPage />} />
                                  <Route path="/responderquejas/:id" element={<FormularioResponderQueja />} />
                                  <Route path="/secretary" element={<SecretaryPage />} />
                                  <Route path="/secretary/home" element={<SecretaryHomePage />} />
                                  <Route path="/secretaryr/regpayment" element={<SecretaryRegisterPaymentPage />} />
                                  <Route path="/secretaryr/contract" element={<SecretaryContractPage2 />} />
                                  <Route path="/clientr" element={<ClientPage />} />
                                  <Route path="/clientr/home" element={<ClientHomePage />} />
                                  <Route path="/clientr/complaints" element={<ClientComplaintPage />} />
                                  <Route path="/clientr/messages" element={<ClientMessagePage />} />
                                  <Route path="/clientr/contract" element={<ClientContractPage />} />
                                  {/**rutas secretaria **/}
                                  <Route path="/secretary/regpayment/:id" element={<SecretaryRegisterPaymentPage />} />
                                  <Route path="/secretary/contract" element={<SecretaryContractPage />} />
                                  <Route path="/secretary/contract/show/:id" element={<ContratosVerIndependienteS />} />
                                  {/** RUTAS CLIENTE */}
                                  <Route path="/loginCliente" element={<LoginCliente />} />
                                  <Route path="/client/" element={<ClientPage />} />
                                  <Route path="/client/home/:id" element={<ClientHomePage />} />
                                  <Route path="/client/complaints/:id" element={<ClientComplaintPage />} />
                                  <Route path="/client/complaints/new/:id" element={<ClientComplaintNew />} />
                                  <Route path="/client/messages/:id" element={<ClientMessagePage />} />
                                  <Route path="/client/contract/:id" element={<ClientContractPage />} />
                                  <Route path="/anuncios" element={<AnunciosPage />} />
                                  <Route path="/ubicacion" element={<UbicacionPage />} />
                                  <Route path="/registrositiovehiculo/:id" element={<RegistroVehiculoSitioPage />} />
                                  <Route path="/vehiculo/:id" element={<VehiculosExtras />} />
                                  <Route path="/eliminarparqueo/:id/:nombre" element={<EliminarParqueo />} />
                                  <Route path="/sitios/:id/:n" element={<Parqueo />} />
                                </Routes>
                              </VehiculoContextProvider>
                            </MensajeContextProvider>
                          </DocenteContextProvider>
                        </ParqueocontextProvider>
                      </PlazaContextProvider>
                    </Tarifa2ContextProvider>
                  </PagoContextProvider>
                </TarifaContextProvider>
              </ContratoContextProvider>
            </AtencionContextProvider>
          </PersonaContextProvider>
        </EmpleadoContextProvider>
      </SitioContextProvider>
      <Footer />
    </div>
  );
}


export default App;