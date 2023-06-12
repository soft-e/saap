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
//import AdminPageR from "./pages/AdminPageR";
import NotFound from "./pages/NotFound";
import TemplatePage from "./pages/TemplatePage";
import AtencionPage from "./pages/pages-rodrigo/AtencionPage";
import './App.css'
import RegistroParqueo from "./pages/pages-eriel/RegistroParqueo";
import RegistroDTvehiculo from "./pages/pages-eriel/RegistroDTvehiculo";
import Parqueos from "./pages/pages-eriel/Parqueos";
import EditarParqueo from "./pages/pages-eriel/EditarParqueo";
import VerMensajes from "./pages/pages-eriel/VerMensajes";
import VerContenidoMensaje from "./pages/pages-eriel/VerContenidoMensaje";
import { AtencionContextProvider } from "./context/context-rodrigo/AtencionProvider";
import AtencionForm from "./pages/pages-rodrigo/AtencionForm";
import { TarifaContextProvider } from "./context/context-jhonatan/TarifaProvider";
import TarifaForm from "./pages/pages-jhonatan/TarifaForm";
import TarifaFormCreate from "./pages/pages-jhonatan/TarifaFormCreate";
import ContratosPage from "./pages/pages-jhonatan/ContratosPage";
import { SessionContextProvider } from "./context/context-rodrigo/SessionProvider";
import { PersonaContextProvider } from "./context/context-rodrigo/PersonaProvider"
import VerQuejas from "./pages/pages-jhonatan/VerQuejas";
import VerContenidoQueja from "./pages/pages-jhonatan/VerContenidoQueja";
import RegistrarPlaza from "./pages/pages-deysi/RegistrarPlaza";
import Parqueo from "./pages/pages-deysi/Parqueo";
import AsignarSitio from "./pages/pages-deysi/AsignarSitio";
import { EmpleadoContextProvider } from "./context/context-rodrigo/EmpleadoProvider";
import { SessionContext } from "./context/context-rodrigo/SessionContext";
import { Component, useContext, useEffect } from "react";
import InicioPage from "./pages/pages-rodrigo/InicioPage";
import ReportesPage from "./pages/pages-rodrigo/ReportesPage";
import { PagoContextProvider } from "./context/context-rodrigo/PagoProvider";
import { Tarifa2ContextProvider } from "./context/context-rodrigo/Tarifa2Provider";
import { PlazaContextProvider } from "./context/context-rodrigo/PlazaProvider";
import { ParqueocontextProvider } from "./context/context-rodrigo/ParqueoProvider";
/*import Parqueo from "./pages/pages-deysi/Parqueo";
import RegistrarPlaza from "./pages/pages-deysi/RegistrarPlaza";
import AsignarSitio from "./pages/pages-deysi/AsignarSitio";*/

function App() {


  return (
    <div id="mainheader">
      <SessionContextProvider>
        <EmpleadoContextProvider>
          <PersonaContextProvider>
            <AtencionContextProvider>
              <TarifaContextProvider>
                <PagoContextProvider>
                  <Tarifa2ContextProvider>
                    <PlazaContextProvider>
                      <ParqueocontextProvider>
                        <Routes>
                          <Route path="/" element={<PrincipalPage />} />
                          <Route path="/login" element={<LoginPage />} />
                          <Route path="/admin" element={<AdminPage />} />
                          <Route path="/personal" element={<PersonalPage />} />
                          <Route path="/personal/registrar" element={<RegistrarPersonal />} />
                          <Route path="/personal/edit/:id" element={<EditarPersonal/>}/>
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
                          <Route path="/editarparqueos/:id" element={<EditarParqueo />} />
                          <Route path="/vermensajes" element={<VerMensajes />} />
                          <Route path="/vercontenidodemensaje/:id" element={<VerContenidoMensaje />} />
                          <Route path="/tarifa" element={<TarifaPage />} />
                          <Route path="/verquejas" element={<VerQuejas />} />
                          <Route path="/vercontenidodequeja/:id" element={<VerContenidoQueja />} />
                          <Route path="sitios" element={<Parqueo />} />
                          <Route path="/registrarSitio" element={<RegistrarPlaza />} />
                          <Route path="/asignarSitio/:idc/:idv" element={<AsignarSitio />} />
                          <Route path="/inicio" element={<InicioPage />} />
                          <Route path="/reportes" element={<ReportesPage />} />
                        </Routes>
                      </ParqueocontextProvider>
                    </PlazaContextProvider>
                  </Tarifa2ContextProvider>
                </PagoContextProvider>
              </TarifaContextProvider>
            </AtencionContextProvider>
          </PersonaContextProvider>
        </EmpleadoContextProvider>
      </SessionContextProvider>
      <Footer />
    </div>
  );
}


export default App;
