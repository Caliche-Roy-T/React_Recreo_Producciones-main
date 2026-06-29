using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RPE.Models;

namespace RPE.Controllers
{
    [ApiController]
    [Route("Api/[controller]")]
    public class ClienteController : ControllerBase
    {
        private readonly RpeContext _context;

        public ClienteController(RpeContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_context.Clientes.ToList());
        }

        [HttpGet("{id}")]

        public IActionResult GetById(int id)
        {
            var cliente = _context.Clientes.Find(id);
            {
                if (cliente == null)
                {
                    return NotFound();

                }
                return Ok(cliente);
            }
        }

        [HttpPost]

        public IActionResult Create(Cliente cliente)
        {
            _context.Clientes.Add(cliente);
            _context.SaveChanges();

            return Ok(cliente);
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, Cliente cliente)
        {
            var existente = _context.Clientes.Find(id);

            if (existente == null)
                return NotFound();

            existente.Nombre = cliente.Nombre;
            existente.Apellido = cliente.Apellido;
            existente.Correo = cliente.Correo;
            existente.Telefono = cliente.Telefono;

            _context.SaveChanges();

            return Ok(existente);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var cliente = _context.Clientes.Find(id);

            if (cliente == null)
                 return NotFound(); 
            
            _context.Clientes.Remove(cliente);
            _context.SaveChanges();

            return NoContent();
        }
    }


}
