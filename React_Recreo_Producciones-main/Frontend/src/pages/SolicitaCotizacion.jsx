import { useState } from "react";
import { agregarCotizacion } from "../services/SolicitudCotizacionServices";
import { agregarCliente } from "../services/ClienteServices";

function SolicitaCotizacion() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    telefono: "",
    idTipoEvento: "",
    fechaEvento: "",
    cantidadInvitados: "",
    lugar: "",
    observaciones: ""
  });

  const handleChange = (e) => {
    const {name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,   
  });
  }


  const handleSubmit = async (e) => {

    e.preventDefault();

    const cliente = {
      nombre: formData.nombre,
      apellido: formData.apellido,
      correo: formData.correo,
      telefono: formData.telefono
    };
  
    try {

      const respuestaCliente = await agregarCliente(cliente);
      const solicitud = {
        idCliente: respuestaCliente.data.idCliente,
        idTipoEvento: Number(formData.idTipoEvento),
        fechaEvento: formData.fechaEvento,
        cantidadInvitados: Number(formData.cantidadInvitados),
        lugar: formData.lugar,
        observaciones: formData.observaciones,
        fechaSolicitud: new Date().toISOString(),
        estado: "Pendiente"
      };

      console.log(solicitud);

      const respuestaSolicitud = await agregarCotizacion(solicitud);

      console.log("Solicitud creada", respuestaSolicitud.data);

      alert("Solicitud enviada correctamente");

    } catch (error) {

      console.error(error);

      alert("Error al enviar cliente");
    }

  }


  return(
  
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body p-5">
              <h2 className="text-center mb-3"> Solicita tu cotizacion</h2>
              <p className="text-center text-muted mb-4">
                Completa el siguiente formulario y uno de nuestros asesores se pondrá en contacto contigo para brindarte una propuesta personalizada.
              </p>
          
              <form onSubmit={handleSubmit}>
              <div className="row">

                <div className="col-md-6 mb-3">
                  <label className="form-label">👤Nombre</label>
                  <input
                      type="text"
                      className="form-control"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">👤Apellido</label>
                  <input
                      type="text"
                      className="form-control"
                      name="apellido"
                      value={formData.apellido}
                      onChange={handleChange}
                      />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">📧Correo</label>
                  <input
                      type="text"
                      className="form-control"
                      name="correo"
                      value={formData.correo}
                      onChange={handleChange}
                      />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">📱Telefono</label>
                  <input
                      type="text"
                      className="form-control"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">🎉Tipo de evento</label>
                  <select className="form-select"
                  name="idTipoEvento"
                  value={formData.idTipoEvento}
                  onChange={handleChange}
                  >
                    <option value="">Seleccione un evento</option>
                    <option value="2">Infantiles</option>
                    <option value="3">Primera Comunion</option>
                    <option value="4">15 años</option>
                    <option value="5">Cumpleaños</option>
                    <option value="6">Bodas</option>
                  </select> 
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">📅 Fecha del evento </label>
                  <input
                  type="date"
                  className="form-control"
                  name="fechaEvento"
                    value={formData.fechaEvento}
                    onChange={handleChange}
                />
              </div>
                <div className="col-md-6 mb-3">
                <label className="form-label">👥 Cantidad de invitados </label>
                <input
                type="number"
                className="form-control"
                name="cantidadInvitados"
                value={formData.cantidadInvitados}
                onChange={handleChange}
                />
              </div>
                <div className="col-md-6 mb-3">
                <label className="form-label">📍Lugar </label>
                <input
                type="text"className="form-control"
                name="lugar"
                value={formData.lugar}
                onChange={handleChange}
               />
              </div>
                <div className="mb-3">
                <label className="form-label">Observaciones </label>
                <input
                type="text"className="form-control"
                name="observaciones"
                value={formData.observaciones}
                onChange={handleChange}
               />
              </div>
              <button className="btn btn-warning w-100">
                Solicitar Cotización
              </button>
              </div>
              </form>
              </div>
            </div>
          </div>
        </div>
        </div>
  
    );
  
  }

export default SolicitaCotizacion;