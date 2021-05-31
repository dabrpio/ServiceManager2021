using System;
using System.Collections.Generic;
using AutoMapper;
using CommandApi.Data;
using CommandApi.Dtos;
using CommandApi.Models;
using Microsoft.AspNetCore.Mvc;

namespace CommandApi.Controllers
{

    [Route("api/klienci")]
    [ApiController]
    public class KlienciController:ControllerBase
    {
        private readonly IKlienciRepo _repoKliecni;
        private readonly IMapper _mapper;

        public KlienciController(IKlienciRepo repository, IMapper mapper){
            _repoKliecni=repository;
            _mapper=mapper;
        }

        //GET api/klienci
        [HttpGet]
        public ActionResult<IEnumerable<KlienciReadDto>> GetAllKlienci(){
            var commandItems = _repoKliecni.GetAllKlienci();
            return Ok(_mapper.Map<IEnumerable<KlienciReadDto>>(commandItems));
        }


        //GET api/klienci/{id}
        [HttpGet("{id:int}",Name="GetKlienciById")]
        public ActionResult<KlienciReadDto> GetKlienciById(short? id){
            var commandItem = _repoKliecni.GetKlienciById(id);
            if(commandItem!=null){
                return Ok(_mapper.Map<KlienciReadDto>(commandItem));
            }
            else{
                return NotFound();
            }
        }


        //GET api/klienci/imie/{name}
        [HttpGet("imie/{imie:alpha}")]
        public ActionResult<IEnumerable<KlienciReadDto>> GetKlienciByName(string imie){
            var commandItems = _repoKliecni.GetKlienciByName(imie);

            if(commandItems!=null){
                return Ok(_mapper.Map<IEnumerable<KlienciReadDto>>(commandItems));
            }
            else
            {
                return NotFound();
            }
        }

        //GET api/klienci/nazwisko/{sur}
        [HttpGet("nazwisko/{nazwisko:alpha}")]
        public ActionResult<IEnumerable<KlienciReadDto>> GetKlienciBySur(string nazwisko){
            var commandItems = _repoKliecni.GetKlienciBySur(nazwisko);

            if(commandItems!=null){
                return Ok(_mapper.Map<IEnumerable<KlienciReadDto>>(commandItems));
            }
            else
            {
                return NotFound();
            }
        }

        //POST api/kliecni
        [HttpPost]
        public ActionResult<KlienciReadDto> CreateKlienci(KlienciCreateDto klienciCreateDto){
            var klienciModel =_mapper.Map<Klienci>(klienciCreateDto);
            _repoKliecni.CreateKlienci(klienciModel);
            _repoKliecni.SaveChanges();

            var klienciReadDto = _mapper.Map<KlienciReadDto>(klienciModel);

            return CreatedAtRoute(nameof(GetKlienciById), new {id = klienciReadDto.IdKlienta},klienciReadDto);

        }


        //PUT api/kliecni/{id}
        [HttpPut("{id}")]
        public ActionResult UpdateKliecni(short? id, KlienciCreateDto klienciUpdate){
             var commandItem = _repoKliecni.GetKlienciById(id);
            
            if(commandItem!=null){
                _mapper.Map(klienciUpdate, commandItem);
                _repoKliecni.UpdateKlienci(commandItem);
                _repoKliecni.SaveChanges();
                return NoContent();
            }
            else{
                return NotFound();
            }
        }

    }
}