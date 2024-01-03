using AgenciaApi.Models;
using Microsoft.EntityFrameworkCore;

namespace AgenciaApi.Context
{
    public class ApiDbContext : DbContext
    {
        public ApiDbContext(DbContextOptions<ApiDbContext> options) : base(options) { }

        public DbSet<Voos> Vos { get; set; }
    }
}
