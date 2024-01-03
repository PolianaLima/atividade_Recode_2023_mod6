using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AgenciaApi.Context;
using AgenciaApi.Models;

namespace AgenciaApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VoosController : ControllerBase
    {
        private readonly ApiDbContext _context;

        public VoosController(ApiDbContext context)
        {
            _context = context;
        }

        // GET: api/Voos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Voos>>> GetVos()
        {
            return await _context.Vos.ToListAsync();
        }

        // GET: api/Voos/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Voos>> GetVoos(int id)
        {
            var voos = await _context.Vos.FindAsync(id);

            if (voos == null)
            {
                return NotFound();
            }

            return voos;
        }

     
    }
}
