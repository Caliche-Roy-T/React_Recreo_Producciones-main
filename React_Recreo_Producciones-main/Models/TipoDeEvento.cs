using System;
using System.Collections.Generic;

namespace RPE.Models;

public partial class TipoDeEvento
{
    public int IdTipoevento { get; set; }

    public string NombreTipoDeEvento { get; set; } = null!;

    public virtual ICollection<SolicitudCotizacion> SolicitudCotizacions { get; set; } = new List<SolicitudCotizacion>();
}
