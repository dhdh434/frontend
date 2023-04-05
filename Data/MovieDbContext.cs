

using Microsoft.EntityFrameworkCore;

namespace mission14Api.Data
{
    public class MovieDbContext : DbContext
    {
        public MovieDbContext(DbContextOptions<MovieDbContext> options) : base(options) { }

        //set up a database
        public DbSet<Movies> Movies { get; set; }
    }
}
