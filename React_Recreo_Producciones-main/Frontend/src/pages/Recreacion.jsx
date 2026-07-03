import "../styles/galeria.css"
import baby1 from "../assets/images/baby1.jpeg";
import baby2 from "../assets/images/baby2.jpeg";
import baby3 from "../assets/images/baby3.jpeg";
import baby4 from "../assets/images/baby4.jpeg";
import baby5 from "../assets/images/baby5.jpeg";
import baby6 from "../assets/images/baby6.jpeg";
import baby7 from "../assets/images/baby7.jpeg";
import baby8 from "../assets/images/baby8.jpeg";
import baby9 from "../assets/images/baby9.jpeg";


function Recreacion() {
  const fila1 = [
    baby1,
    baby2,
    baby3
  ];

  const fila2 = [

    baby4,
    baby5,
    baby6
  ];

  const fila3 = [
    baby7,
    baby8,
    baby9
  ];

  const renderFila = (imagenes) => (
    <div className="row justify-content-center">
      {imagenes.map((imagenes, index) => (
        <div className="col-md-4 d-flex justify-content-center mb-4"
        key={index}
        >
        <img
          src={imagenes}
          alt={`Imagen ${index + 1}`}
          className="imagen-evento"
          />
      </div>
    ))}
    </div>
  );

  return (
      
<div className="container text-center mt-5">
<p className="texto-bienvenida1 elementor-heading-title elementor-size-default">PAQUETE BABY 
</p>
  <p className="texto-bienvenida fw-light ">
  1 Coordinador con actividades dirigidas a menores de 4 años, empleando juguetes de estimulación,
  Neuronal, juegos y practicas con material lúdico, integración con adultos-show de Picasso.
  </p>

    <div className="container">
      {renderFila(fila1)}
      <div className="text-center my-5">
        <h2>Recreacion Infantil</h2>
        <p className="texto-bienvenida1 elementor-heading-title elementor-size-default">PAQUETE BABY # 2
</p>
         <p className="texto-bienvenida fw-light ">
  Actividades con juguetes de estimulación Neuronal, Juegos y practicas con material lúdico y gimnasio
  acolchado figuras geometricas baby, interacción con adultos, show de titeres tematicos recreación
  dinámica y divertida, show de Picasso.
  </p>
  </div>
</div>

      {renderFila(fila2)}
      <div className="text-center my-5">
        <h2>Mas diversión</h2>
        <p className="texto-bienvenida1 elementor-heading-title elementor-size-default">PAQUETE BABY # 3
</p>
         <p className="texto-bienvenida fw-light ">
  Un Animador, Coordinación total del evento, recreación moderna, dinámica y divertida, 
  actividad de esparcimiento familiar.
  </p>
  </div>
      {renderFila(fila3)}
      <div className="text-center my-5">
          <p></p>
        </div>
    </div>
  );
}

export default Recreacion;