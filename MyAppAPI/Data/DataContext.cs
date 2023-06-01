using Microsoft.EntityFrameworkCore;
using MyAppAPI.Models;

namespace MyAppAPI.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }

        public DbSet<dish> dishes => Set<dish>();
        public DbSet<ingredient> ingredients => Set<ingredient>();
    }
}
