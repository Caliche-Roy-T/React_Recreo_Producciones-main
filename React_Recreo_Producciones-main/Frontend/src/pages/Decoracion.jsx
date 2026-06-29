import { useState } from "react";
import decoracion1 from "../assets/images/decoracion1.jpeg";
import decoracion2 from "../assets/images/decoracion2.jpeg";
import decoracion3 from "../assets/images/decoracion3.jpeg";
import decoracion4 from "../assets/images/decoracion4.jpeg";
import decoracion5 from "../assets/images/decoracion5.jpeg";
import decoracion6 from "../assets/images/decoracion6.jpeg";
import decoracion7 from "../assets/images/decoracion7.jpeg";
import decoracion8 from "../assets/images/decoracion8.jpeg";
import decoracion9 from "../assets/images/decoracion9.jpeg";
import decoracion10 from "../assets/images/decoracion10.jpeg";
import decoracion11 from "../assets/images/decoracion11.jpeg";
import decoracion12 from "../assets/images/decoracion12.jpeg";



function Decoracion() {

  const [selectedImg, setSelectedImg] = useState(null);

  const images = [
    decoracion1, decoracion4, decoracion7, decoracion10,
    decoracion2, decoracion5, decoracion8, decoracion11,
    decoracion3, decoracion6, decoracion9, decoracion12
  ];

  return (
    <div className="container py-5">

      {/* TEXTO INICIO */}
      <div className="text-center mb-4">

        <h2 className="titulo-decoracion">
          DECORACIONES
        </h2>

        <p className="descripcion-paquete">
          Transformamos sus celebraciones en experiencias memorables. Especialistas en el 
          arte de la decoración infantil y de eventos, diseñamos ambientes con un estilo 
          único y sofisticado. Asegure el éxito de su reunión con una atmósfera visualmente
          impactante y totalmente acogedora.
        </p>

      </div>

      {/* GALERÍA */}
      <div className="row g-4">
        {images.map((img, index) => (
          <div key={index} className="col-6 col-md-3">
            <img
              src={img}
              alt="evento"
              className="img-galeria"
              onClick={() => setSelectedImg(img)}
            />
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedImg && (
        <div className="modal-img" onClick={() => setSelectedImg(null)}>
          <img src={selectedImg} alt="grande" />
        </div>
      )}
      <div className="text-center mb-4">

        <h2 className="titulo-decoracion">
          DECORACIONES PARA TODO TIPO DE EVENTOS
        </h2>

        <p className="descripcion-paquete">
          BODAS, 15 AÑOS, GRADOS, CUMPLEAÑOS TEMÁTICOS, EVENTOS INFANTILES Y MUCHO MÁS...
        </p>
       </div>
    </div>
  );
}

export default Decoracion;