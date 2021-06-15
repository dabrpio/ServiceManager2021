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

        //GET api/urzadzenia/types
        [HttpGet("types", Name="GetAllTypes")]
        public ActionResult<List<string>> GetAllTypes(){
            var commandItem = _repoUrzadzenia.GetAllTypes();
            
            if(commandItem!=null){
                return Ok(commandItem);
            }
            else{
                return NotFound();
            }
        }
        
        //GET api/urzadzenia/brandstest
        [HttpGet("brandstest", Name="GetAllBrandstest")]
        public ActionResult<List<string>> GetAllBrands(){
            var commandItem = _repoUrzadzenia.GetAllBrands();
            
            if(commandItem!=null){
                return Ok(commandItem);
            }
            else{
                return NotFound();
            }
        }
        //GET api/urzadzenia/brands
        [HttpGet("brands", Name="GetAllBrands")]
        public ActionResult<List<Urzadzenia2>> GetAllBrandstest(){
            var commandItem = _repoUrzadzenia.GetBrandsTest();
            if(commandItem!=null){
                return Ok(commandItem);
            }
            else{
                return NotFound();
            }
        }
        //GET api/urzadzenia/modelstest
        [HttpGet("modelstest", Name="GetAllModelstest")]
        public ActionResult<List<Urzadzenia2>> GetAllModelstest(){
            var commandItem = _repoUrzadzenia.GetModelsTest();
            if(commandItem!=null){
                return Ok(commandItem);
            }
            else{
                return NotFound();
            }
        }
        
        //GET api/urzadzenia/models
        [HttpGet("models", Name="GetAllModels")]
        public ActionResult<List<string>> GetAllModels(){
            var commandItem = _repoUrzadzenia.GetAllModels();
            
            if(commandItem!=null){
                return Ok(commandItem);
            }
            else{
                return NotFound();
            }
        }

        //GET api/urzadzenia/types/{type}
        [HttpGet("types/{type}", Name="GetSpecificBrand")]
        public ActionResult<List<string>> GetSpecificBrand(string type){
            var commandItem = _repoUrzadzenia.GetSpecificBrand(type);
            
            if(commandItem!=null){
                return Ok(commandItem);
            }
            else{
                return NotFound();
            }
        }

        //GET api/urzadzenia/types/{type}/{brand}
        [HttpGet("types/{type}/{brand}", Name="GetSpecificModel")]
        public ActionResult<List<string>> GetSpecificModel(string type,string brand){
            var commandItem = _repoUrzadzenia.GetSpecificModel(type,brand);
            
            if(commandItem!=null){
                return Ok(commandItem);
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
        public ActionResult<UrzadzeniaReadDto> CreateKlienci(UrzadzeniaCreateDto urzadzenie){
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