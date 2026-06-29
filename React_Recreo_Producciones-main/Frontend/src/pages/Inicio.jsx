import "../styles/inicio.css";
import fondo from "../assets/images/fondo.jpeg";
import fiestas from "../assets/images/fiestas.jpg";
import inicio1 from "../assets/images/inicio1.png";
import inicio2 from "../assets/images/inicio2.png";


function Inicio() {
  return (
    
<div className="container text-center mt-5 pt-5">
<p className="texto-bienvenida1 elementor-heading-title elementor-size-default">¡La diversión comienza aquí!
</p>
  <p className="texto-bienvenida fw-light ">
  En Recreo Producciones hacemos que cada evento cobre vida con 
  creatividad, energía y experiencias memorables. Desde celebraciones familiares hasta eventos 
  empresariales e institucionales, diseñamos actividades, animación y entretenimiento a la medida
  de tus necesidades. Nuestro compromiso es transformar cada ocasión en un momento especial, 
  lleno de sonrisas, emoción y recuerdos que perduren en el tiempo.
</p>

  <p className="lead">
    ¡Déjanos ser parte de tu próximo evento y hagamos realidad una celebración llena de magia, 
    diversión y excelentes recuerdos!
  </p>
<div class="row align-items-center">
  

  <div class="col-md-5">
    <h2 class="featurette-heading fw-normal lh-1">
      ANIMACIÓN Y CRECREACIÓN
    </h2>
     <p></p>
    <p class="lead">- RECREADORES PROFESIONALES</p>
    <p class="lead">- MAESTROS DE CEREMONIA</p>
    <p class="lead">- JUEGOS DIRIGIDOS PARA TODAS LAS EDADES</p>
    <p class="lead">- CONCURSOS Y DINAMICAS GLOBALES</p>
    <p class="lead">- ACTIVIDADES LÚDICAS Y RECREATIVAS</p>
    <p class="lead">- BAILES, RETOS Y COMPETENCIAS</p>

  
  </div>
  <div class="col-md-5 text-center">
  <img src={inicio1} alt="Fiestas" class="img-fluid rounded"/>
  <p></p>
</div>
</div>


<div class="row align-items-center">
<div class="col-md-5 text-center">
    <img src={inicio2} alt="Fiestas" class="img-fluid rounded" />
  </div>
  <div class="col-md-7">
    <h2 class="featurette-heading fw-normal lh-1">
        SONIDO E ILUMINACIÓN
    </h2>
     <p></p>
    <p class="lead">- SONIDO PROFESIONAL</p>
    <p class="lead">- DJ Y MEZCLAS EN VIVO</p>
    <p class="lead">- MICROFONOS INALAMBRICOS</p>
    <p class="lead">- MÁQUINA DE HUMO</p>
    <p class="lead">- PANTALLAS Y APOYO AUDIO VISUAL</p>
  </div>
  </div>
  <p></p>

<p className="texto-despedida1 elementor-heading-title elementor-size-default">¡Creamos momentos que se convierten en recuerdos inolvidables!
</p>
  <div className="container">
  <div className="row justify-content-center">
    <div className="col-md-4 d-flex justify-content-center">
      <img
        src={fiestas}
        alt="Fiestas"
        style={{
          width: "18rem",
          borderRadius: "15px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
        }}
      />
    </div>

    <div className="col-md-4 d-flex justify-content-center">
      <img
        src={fiestas}
        alt="Fiestas"
        style={{
          width: "18rem",
          borderRadius: "15px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
        }}
      />
    </div>

    <div className="col-md-4 d-flex justify-content-center">
      <img
        src={fiestas}
        alt="Fiestas"
        style={{
          width: "18rem",
          borderRadius: "15px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
        }}
      />
      <p></p>
    </div>

  </div>
</div>
</div>

  );
}

export default Inicio;