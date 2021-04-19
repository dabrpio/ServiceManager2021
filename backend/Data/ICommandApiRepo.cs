using System.Collections.Generic;
using CommandApi.Models;

namespace CommandApi.Data
{
    public interface ICommandApiRepo
    {
        IEnumerable<Command> GetAppCommands();
        Command GetCommandById(int id);
    }
}