using System.Collections.Generic;
using CommandApi.Data;
using CommandApi.Models;
using Microsoft.AspNetCore.Mvc;

namespace CommandApi.Controllers
{

    [Route("api/commands")]
    [ApiController]
    public class CommandsController:ControllerBase
    {
        private readonly MockCommandApiRepo _repository = new MockCommandApiRepo();

        //GET api/commands
        [HttpGet]
        public ActionResult<IEnumerable<Command>> GetAllCommands(){
            var commandItems = _repository.GetAppCommands();
            return Ok(commandItems);
        }

        //GET api/commands/{id}
        [HttpGet("{id}")]
        public ActionResult<Command>GetCommandById(int id){
            var commandItem = _repository.GetCommandById(id);
            return Ok(commandItem);
        }

    }
}