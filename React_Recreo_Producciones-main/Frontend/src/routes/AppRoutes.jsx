import { Routes, Route } from "react-router-dom";
import Inicio from "../pages/Inicio";
import Servicios from "../pages/Servicios";
import Recreacion from "../pages/Recreacion";
import Decoracion from "../pages/Decoracion";
import SonidoeIluminacion from "../pages/SonidoeIuminacion";
import Empresariales from "../pages/Empresariales";
import InflablesAtracciones from "../pages/InflablesAtracciones";
import Eventos from "../pages/Eventos";
import Infantiles from "../pages/Infantiles";
import Sociales from "../pages/Sociales";
import CumpleAnos from "../pages/Cumpleanos";
import PrimeraComunion from "../pages/PrimeraComunion";
import QuinceAnos from "../pages/QuinceAnos";
import Bodas from "../pages/Bodas";
import Aniversarios from "../pages/Aniversarios";
import RevelacionGenero from "../pages/RevelacionGenero";
import BabyShower from "../pages/BabyShower";
import Escolares from "../pages/Escolares";
import Nosotros from "../pages/Nosotros";
import Contactanos from "../pages/Contactanos";
import SolicitaCotizacion from "../pages/SolicitaCotizacion";
import TrabajaNosotros from "../pages/TrabajaNosotros";
import CooperaNosotros from "../pages/CooperaNosotros";


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/servicios" element={<Servicios />} />
      <Route path="/eventos" element={<Eventos />} />
      <Route path="/sociales" element={<Sociales />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/contactanos" element={<Contactanos />} />
      <Route path="/solicita-cotizacion" element={<SolicitaCotizacion />} />

      <Route path="/recreacion" element={<Recreacion />} />
      <Route path="/decoracion" element={<Decoracion />} />
      <Route path="/sonido-iluminacion" element={<SonidoeIluminacion />} />
      <Route path="/empresariales" element={<Empresariales />} />
      <Route path="/inflables-atracciones" element={<InflablesAtracciones />} />
      <Route path="/infantiles" element={<Infantiles />} />
      <Route path="/bodas" element={<Bodas />} />
    
    </Routes>
  );
}

export default AppRoutes;

