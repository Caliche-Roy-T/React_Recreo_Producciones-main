using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RPE.Models;

namespace RPE.Controllers
{
    [ApiController]
    [Route("Api/[controller]")]
    public class TipoDeEventoController : ControllerBase
    {
        private readonly RpeContext _context;

        public TipoDeEventoController(RpeContext context)
        {
            _context = context;
        }
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_context.TipoDeEventos.ToList());
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var tipoEvento = _context.TipoDeEventos.Find(id);
            {
                if (tipoEvento == null)
                {
                    return NotFound();
                }
            }
            return Ok(tipoEvento);
        }

        [HttpPost] 
        public IActionResult Create(TipoDeEvento tipoEvento)
        {
            _context.TipoDeEventos.Add(tipoEvento);
            _context.SaveChanges();

            return Ok(tipoEvento);
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id,TipoDeEvento tipoEvento)
        {
            var existente = _context.TipoDeEventos.Find(id);
            if (existente == null)
                return NotFound();

            existente.NombreTipoDeEvento = tipoEvento.NombreTipoDeEvento;
            existente.SolicitudCotizacions = tipoEvento.SolicitudCotizacions;

            _context.SaveChanges();

            return Ok(existente);
        }
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var tipoEvento = _context.TipoDeEventos.Find(id);

            if (tipoEvento == null)
                return NotFound();
            _context.TipoDeEventos.Remove(tipoEvento);
            _context.SaveChanges();

            return NoContent();
        }
    }
}
