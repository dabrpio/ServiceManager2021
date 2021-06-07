using System;
using System.Collections.Generic;
using CommandApi.Data;
using CommandApi.Models;
using Microsoft.AspNetCore.Mvc;

namespace CommandApi.Controllers
{

    [Route("api/urzadzenia")]
    [ApiController]
    public class UrzadzeniaController:ControllerBase
    {
        private readonly IUrzadzeniaRepo _repoUrzadzenia;

        public UrzadzeniaController(IUrzadzeniaRepo repository){
            _repoUrzadzenia=repository;
        }

        //GET api/urzadzenia
        [HttpGet]
        public ActionResult<IEnumerable<Urzadzenia>> GetAllUrzadzenia(){
            var commandItems = _repoUrzadzenia.GetAllUrzadzenia();
            return Ok(commandItems);
        }


        //GET api/urzadzenia/{id}
        [HttpGet("{id:int}", Name="GetUrzadzeniaById")]
        public ActionResult<Urzadzenia> GetUrzadzeniaById(short? id){
            var commandItem = _repoUrzadzenia.GetUrzadzeniaById(id);
            
            if(commandItem!=null){
                return Ok(commandItem);
            }
            else{
                return NotFound();
            }
        }

        //GET api/urzadzenia/q/{type}
        [HttpGet("q/{type}", Name="GetUrzadzeniaByType")]
        public ActionResult<Urzadzenia> GetUrzadzeniaByType(string type){
            var commandItem = _repoUrzadzenia.GetUrzadzeniaByType(type);
            
            if(commandItem!=null){
                return Ok(commandItem);
            }
            else{
                return NotFound();
            }
        }

        //GET api/urzadzenia/q/{type}/{brand}
        [HttpGet("q/{type}/{brand}", Name="GetUrzadzeniaByBrand")]
        public ActionResult<Urzadzenia> GetUrzadzeniaByBrand(string type,string brand){
            var commandItem = _repoUrzadzenia.GetUrzadzeniaByBrand(type,brand);
            
            if(commandItem!=null){
                return Ok(commandItem);
            }
            else{
                return NotFound();
            }
        }

        //GET api/urzadzenia/q/{type}/{brand}/{modle}
        [HttpGet("q/{type}/{brand}/{model}", Name="GetUrzadzeniaByModel")]
        public ActionResult<Urzadzenia> GetUrzadzeniaByModle(string type,string brand,string model){
            var commandItem = _repoUrzadzenia.GetUrzadzeniaByModel(type,brand,model);
            
            if(commandItem!=null){
                return Ok(commandItem);
            }
            else{
                return NotFound();
            }
        }

    }
}