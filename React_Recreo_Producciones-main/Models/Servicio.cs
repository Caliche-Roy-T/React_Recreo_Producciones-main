using System;
using System.Collections.Generic;

namespace RPE.Models;

public partial class Servicio
{
    public int IdServicio { get; set; }

    public string Nombre { get; set; } = null!;

    public string? Descripcion { get; set; }

    public decimal PrecioReferencia { get; set; }

    public virtual ICollection<SolicitudCotizacion> IdSolicituds { get; set; } = new List<SolicitudCotizacion>();
}
