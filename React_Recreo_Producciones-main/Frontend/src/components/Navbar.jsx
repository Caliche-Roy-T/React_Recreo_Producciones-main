import { Link } from "react-router-dom";
import circulos from "../assets/images/circulos.png";
import logo from "../assets/images/logo.png";
import"../styles/navbar.css";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg flex-column"
      style={{ backgroundColor: "#084480" }}>
      {/* CÍRCULOS */}
       <div style={{ position: "absolute", top: 0, left: 0, zIndex: 0 }}>
    <img src={circulos} style={{ width: "230px" }} />
  </div>
        
        {/* LOGO CENTRADO */}
        <div className="py-2 d-flex justify-content-center">
          <img src={logo} alt="logo" style={{ width: "125px" }} />
        </div>

        {/* MENÚ */}
  <ul className="navbar-nav gap-2 pb-0">
        <li className="nav-item">
         <Link to="/" className="nav-link text-white" href="#">INICIO</Link>
        </li>

        <li className="navbar-lineas text-white">|</li>

         <div className="dropdown">
            <Link to="/" className="nav-link text-white" href="#">SERVICIOS</Link>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="/recreacion">RECREACIÓN</Link></li>
              <li><Link className="dropdown-item" to="/decoracion">DECORACIÓN</Link></li>
              <li><Link className="dropdown-item" to="/sonido-iluminacion">SONIDO E ILUMINACIÓN</Link></li>
              <li><Link className="dropdown-item" to="/empresariales">EMPRESARIALES</Link></li>
              <li><Link className="dropdown-item" to="/inflables-atracciones">INFLABLES Y ATRACCIONES</Link></li>
            </ul>
          </div>

        <li className="navbar-lineas text-white">|</li>

        <div className="dropdown">
            <Link to="/eventos" className="nav-link text-white" href="#">EVENTOS</Link>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="/infantiles">INFANTILES</Link></li>
              <li><Link className="dropdown-item" to="/cumpleanos">CUMPLEAÑOS</Link></li>
              <li><Link className="dropdown-item" to="/primera-comunion">PRIMERA COMUNIÓN</Link></li>
              <li><Link className="dropdown-item" to="/15anos">15 AÑOS</Link></li>
              <li><Link className="dropdown-item" to="/bodas">BODAS</Link></li>
              <li><Link className="dropdown-item" to="/aniversarios">ANIVERSARIOS</Link></li>
              <li><Link className="dropdown-item" to="/revelacion-genero">REVELACIÓN DE GENERO</Link></li>
              <li><Link className="dropdown-item" to="/baby-shower">BABY SHOWER</Link></li>
              <li><Link className="dropdown-item" to="/escolares">ESCOLARES</Link></li>
            </ul>
          </div> 

        <li className="navbar-lineas text-white">|</li>
 
        <li className="nav-item dropdown dropdown-hover">
          <Link to="/nosotros" className="nav-link text-white" href="#">NOSOTROS</Link>
        </li>

        <li className="navbar-lineas text-white">|</li>

        <div className="dropdown">
            <Link to="/contactanos" className="nav-link text-white" href="#">CONTÁCTANOS</Link>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="/solicita-cotizacion">SOLICITA TU COTIZACIÓN</Link></li>
              <li><Link className="dropdown-item" to="/trabaja-nosotros">TRABAJA CON NOSOTROS</Link></li>
              <li><Link className="dropdown-item" to="/coopera-nosotros">COOPERA CON NOSOTROS</Link></li>
            </ul>
          </div>
 </ul>
      
    </nav>
  );
}

export default Navbar;