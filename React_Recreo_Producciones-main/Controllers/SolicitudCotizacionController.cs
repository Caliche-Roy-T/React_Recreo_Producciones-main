using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RPE.Models;

namespace RPE.Controllers
{
    [ApiController]
    [Route("Api/[Controller]")]

    public class SolicitudCotizacionController : ControllerBase
    {
        private readonly RpeContext _context;

        public SolicitudCotizacionController(RpeContext context)
        {
            _context = context;
        }
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_context.SolicitudCotizacions.ToList());
        }
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var solicitudCotizacion = _context.SolicitudCotizacions.Find(id);

            {
                if (solicitudCotizacion == null)
                {
                    return NotFound();
                }
            }
            return Ok(solicitudCotizacion);
        }
        [HttpPost]
        public IActionResult Create(SolicitudCotizacion solicitudCotizacion)
        {
            _context.SolicitudCotizacions.Add(solicitudCotizacion);
            _context.SaveChanges();

            return Ok(solicitudCotizacion);
        }

        [HttpPut]
        public IActionResult Update(int id, SolicitudCotizacion solicitudCotizacion)
        {
            var existente = _context.SolicitudCotizacions.Find(id);
            if (existente == null) 
                return NotFound();

            existente.IdCliente = solicitudCotizacion.IdCliente;
            existente.FechaSolicitud = solicitudCotizacion.FechaSolicitud;
            existente.Lugar = solicitudCotizacion.Lugar;
            existente.Observaciones = solicitudCotizacion.Observaciones;
            existente.FechaSolicitud = solicitudCotizacion.FechaSolicitud;
            existente.Estado = solicitudCotizacion.Estado;
            existente.Lugar = solicitudCotizacion.Lugar;
            existente.CantidadInvitados = solicitudCotizacion.CantidadInvitados;

            _context.SaveChanges();

            return Ok(existente);
        }
        [HttpDelete("{id}")]
        public IActionResult DeleteById(int id)
        {
            var solicitudCotizacion = _context.SolicitudCotizacions.Find(id);

            if (solicitudCotizacion == null)
                return NotFound();

            _context.SolicitudCotizacions.Remove(solicitudCotizacion);
            _context.SaveChanges();

            return NoContent();
        }
        
    }
}
