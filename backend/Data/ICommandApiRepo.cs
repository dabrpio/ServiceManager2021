using System.Collections.Generic;
using CommandApi.Models;

namespace CommandApi.Data
{
    public interface ICommandApiRepo
    {
        IEnumerable<Command> GetAllCommands();
        Command GetCommandById(int id);
    }
}