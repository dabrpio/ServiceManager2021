using System.Collections.Generic;
using System.Linq;
using CommandApi.Models;

namespace CommandApi.Data
{
    public class SqlCommandApiRepo : ICommandApiRepo
    {
        private readonly CommandApiContext _context;

        public SqlCommandApiRepo(CommandApiContext context)
        {
            _context = context;
        }
        public IEnumerable<Command> GetAllCommands()
        {
            return _context.Commands.ToList();
        }

        public Command GetCommandById(int id)
        {
            return _context.Commands.FirstOrDefault(p=>p.Id==id);
        }
    }
}