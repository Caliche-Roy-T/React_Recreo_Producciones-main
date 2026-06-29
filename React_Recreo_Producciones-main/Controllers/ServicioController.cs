using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RPE.Models;

namespace RPE.Controllers
{
    [ApiController]
    [Route("Api/[controller]")]
    public class ServicioController : ControllerBase
    {
        private readonly RpeContext _context;

        public ServicioController(RpeContext context)
        {
            _context = context;
        }
        [HttpGet]
        public IActionResult GetById()
        {
            return Ok(_context.Servicios.ToList());
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var servicio = _context.Servicios.Find(id);
            {
                if (servicio == null)
                {
                    return NotFound();
                }
                return Ok(servicio);
            }
        }
        [HttpPost]
        public IActionResult Create(Servicio servicio)
        {
            _context.Servicios.Add(servicio);
            _context.SaveChanges();

            return Ok(servicio);
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, Servicio servicio)
        {
            var existente = _context.Servicios.Find(id);
            if (existente == null) 
                return NotFound();

            existente.Nombre = servicio.Nombre;
            existente.IdServicio = servicio.IdServicio;
            existente.Descripcion = servicio.Descripcion;
            existente.PrecioReferencia = servicio.PrecioReferencia;

            _context.SaveChanges();

            return Ok(existente);
        }
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var servicios = _context.Servicios.Find(id);

            if (servicios == null)
                return NotFound();

            _context.Servicios.Remove(servicios);
            _context.SaveChanges();

            return NoContent();
        }
    }
}
