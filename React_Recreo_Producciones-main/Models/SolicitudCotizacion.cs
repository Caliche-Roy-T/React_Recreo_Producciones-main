using System;
using System.Collections.Generic;

namespace RPE.Models;

public partial class SolicitudCotizacion
{
    public int IdSolicitud { get; set; }

    public int? IdCliente { get; set; }

    public int? IdTipoevento { get; set; }

    public DateTime FechaEvento { get; set; }

    public int CantidadInvitados { get; set; }

    public string Lugar { get; set; } = null!;

    public string? Observaciones { get; set; }

    public DateTime? FechaSolicitud { get; set; }

    public string Estado { get; set; } = null!;

    public virtual Cliente? IdClienteNavigation { get; set; }

    public virtual TipoDeEvento? IdTipoeventoNavigation { get; set; }

    public virtual ICollection<Servicio> IdServicios { get; set; } = new List<Servicio>();
}
