using System.Collections.Generic;
using CommandApi.Data;
using CommandApi.Models;
using Microsoft.AspNetCore.Mvc;

namespace CommandApi.Controllers
{

    [Route("api/zlecenia")]
    [ApiController]
    public class MasterController:ControllerBase
    {
        private readonly IMasterRepo _repository;

        public MasterController(IMasterRepo repository){
            _repository=repository;
        }
        //private readonly MockCommandApiRepo _repository = new MockCommandApiRepo();

        //GET api/zlecenia
        [HttpGet]
        public ActionResult<IEnumerable<Zlecenie>> GetAllZlecenia(){
            var commandItems = _repository.GetAllZlecenia();
            return Ok(commandItems);
        }

        //GET api/zlecenia/{id}
        [HttpGet("{id}")]
        public ActionResult<Zlecenie>GetZlecenieByRma(int Rma){
            var commandItem = _repository.GetZlecenieByRma(Rma);
            return Ok(commandItem);
        }

    }
}