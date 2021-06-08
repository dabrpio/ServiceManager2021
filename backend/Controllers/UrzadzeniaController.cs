using System;
using System.Collections.Generic;
using AutoMapper;
using CommandApi.Data;
using CommandApi.Dtos;
using CommandApi.Models;
using Microsoft.AspNetCore.Mvc;


namespace CommandApi.Controllers
{

    [Route("api/urzadzenia")]
    [ApiController]
    public class UrzadzeniaController:ControllerBase
    {
        private readonly IUrzadzeniaRepo _repoUrzadzenia;
        private readonly IMapper _mapper;

        public UrzadzeniaController(IUrzadzeniaRepo repository,IMapper mapper){
            _repoUrzadzenia=repository;
            _mapper=mapper;
        }

        //GET api/urzadzenia
        [HttpGet]
        public ActionResult<IEnumerable<UrzadzeniaReadDto>> GetAllUrzadzenia(){
            var commandItems = _repoUrzadzenia.GetAllUrzadzenia();
            return Ok(_mapper.Map<IEnumerable<UrzadzeniaReadDto>>(commandItems));
        }


        //GET api/urzadzenia/{id}
        [HttpGet("{id:int}", Name="GetUrzadzeniaById")]
        public ActionResult<UrzadzeniaReadDto> GetUrzadzeniaById(short? id){
            var commandItem = _repoUrzadzenia.GetUrzadzeniaById(id);
            if(commandItem!=null){
                return Ok(_mapper.Map<UrzadzeniaReadDto>(commandItem));
            }
            else{
                return NotFound();
            }
        }

        //GET api/urzadzenia/q/{type}
        [HttpGet("q/{type}", Name="GetUrzadzeniaByType")]
        public ActionResult<UrzadzeniaReadDto> GetUrzadzeniaByType(string type){
            var commandItem = _repoUrzadzenia.GetUrzadzeniaByType(type);
            
            if(commandItem!=null){
                return Ok(_mapper.Map<IEnumerable<UrzadzeniaReadDto>>(commandItem));
            }
            else{
                return NotFound();
            }
        }

        //GET api/urzadzenia/q/{type}/{brand}
        [HttpGet("q/{type}/{brand}", Name="GetUrzadzeniaByBrand")]
        public ActionResult<UrzadzeniaReadDto> GetUrzadzeniaByBrand(string type,string brand){
            var commandItem = _repoUrzadzenia.GetUrzadzeniaByBrand(type,brand);
            
            if(commandItem!=null){
                return Ok(_mapper.Map<IEnumerable<UrzadzeniaReadDto>>(commandItem));
            }
            else{
                return NotFound();
            }
        }

        //GET api/urzadzenia/q/{type}/{brand}/{modle}
        [HttpGet("q/{type}/{brand}/{model}", Name="GetUrzadzeniaByModel")]
        public ActionResult<UrzadzeniaReadDto> GetUrzadzeniaByModle(string type,string brand,string model){
            var commandItem = _repoUrzadzenia.GetUrzadzeniaByModel(type,brand,model);
            
            if(commandItem!=null){
                return Ok(_mapper.Map<IEnumerable<UrzadzeniaReadDto>>(commandItem));
            }
            else{
                return NotFound();
            }
        }

        //DELETE api/urzadzenia/{id}
        [HttpDelete("{id}")]
        public ActionResult DeleteUrzadzenia(short? id)
        {
            var commandItem=_repoUrzadzenia.GetUrzadzeniaById(id);
            if(commandItem!=null){
                _repoUrzadzenia.DeleteUrzadzenia(commandItem);
                _repoUrzadzenia.SaveChanges();
                return NoContent();
            }
            else{
                return NotFound();
            }
        }

        //POST api/urzadzenia
        [HttpPost]
        public ActionResult<UrzadzeniaReadDto> CreateKlienci(UrzadzeniaReadDto urzadzenie){
            var urzadzeniaModel = _mapper.Map<Urzadzenia>(urzadzenie);
            _repoUrzadzenia.CreateUrzadzenia(urzadzeniaModel);
            _repoUrzadzenia.SaveChanges();
            var UrzadzeniaReadDto= _mapper.Map<UrzadzeniaReadDto>(urzadzeniaModel);
            return CreatedAtRoute(nameof(GetUrzadzeniaById), new {id = UrzadzeniaReadDto.Id},UrzadzeniaReadDto);

        }


        //PUT api/urzadzenia/{id}
        [HttpPut("{id}")]
        public ActionResult UpdateKliecni(short? id, UrzadzeniaCreateDto urzadzenie){
             var commandItem = _repoUrzadzenia.GetUrzadzeniaById(id);
            
            if(commandItem!=null){
                _mapper.Map(urzadzenie,commandItem);
                _repoUrzadzenia.UpdateUrzadzenia(commandItem);
                _repoUrzadzenia.SaveChanges();
                return NoContent();
            }
            else{
                return NotFound();
            }
        }

    }
}