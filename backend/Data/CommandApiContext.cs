using CommandApi.Models;
using Microsoft.EntityFrameworkCore;

namespace CommandApi.Data
{
    public class CommandApiContext :DbContext
    {
        public CommandApiContext(DbContextOptions<CommandApiContext>opt):base(opt)
        {
            
        }
        public DbSet<Command> Commands { get; set; }
    }
}