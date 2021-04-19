using System.Collections.Generic;
using CommandApi.Models;

namespace CommandApi.Data{
    public class MockCommandApiRepo : ICommandApiRepo
    {
        public IEnumerable<Command> GetAppCommands()
        {
            var commands = new List<Command>{
                new Command{Id=0, HowTo="Boil an egg", Line="Boil water", Platform="Kettle and Pan"},
                new Command{Id=1, HowTo="Boil two egg", Line="Boil water and bread", Platform="Kettle and Pan and board"},
                new Command{Id=2, HowTo="Boil tree egg", Line="Boil water and tee", Platform="Kettle and Pan and cup"}

            };
            return commands;
        }

        public Command GetCommandById(int id)
        {
            return new Command{Id=0, HowTo="Boil an egg", Line="Boil water", Platform="Kettle and Pan"};
        }
    }
}