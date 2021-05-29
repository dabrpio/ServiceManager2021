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
        [HttpGet("{id}", Name="GetKlienciById")]
        public ActionResult<KlienciReadDto> GetKlienciById(short? id){
            var commandItem = _repoKliecni.GetKlienciById(id);
            
            if(commandItem!=null){
                return Ok(_mapper.Map<KlienciReadDto>(commandItem));
            }
            else{
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
    }
}