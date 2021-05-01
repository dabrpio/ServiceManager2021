using System;
using System.Collections.Generic;
using AutoMapper;
using CommandApi.Data;
using CommandApi.Dtos;
using CommandApi.Models;
using Microsoft.AspNetCore.Mvc;

namespace CommandApi.Controllers
{

    [Route("api/zlecenia")]
    [ApiController]
    public class MasterController:ControllerBase
    {
        private readonly IMasterRepo _repository;
        private readonly IMapper _mapper;

        public MasterController(IMasterRepo repository, IMapper mapper){
            _repository=repository;
            _mapper=mapper;
        }

        //GET api/zlecenia
        [HttpGet]
        public ActionResult<IEnumerable<ZlecenieReadDto>> GetAllZlecenia(){
            var commandItems = _repository.GetAllZlecenia();
            foreach (Zlecenie commandItem in commandItems)
            {
                commandItem.Usterka=commandItem.Usterka.TrimEnd();
                commandItem.Status=commandItem.Status.TrimEnd();
                commandItem.Rodzaj=commandItem.Rodzaj.TrimEnd();
                commandItem.Nazwisko=commandItem.Nazwisko.TrimEnd();
                commandItem.Model=commandItem.Model.TrimEnd();
                commandItem.Marka=commandItem.Marka.TrimEnd();
                commandItem.Informacje=commandItem.Informacje.TrimEnd();
                commandItem.Imie=commandItem.Imie.TrimEnd();
            }
            return Ok(_mapper.Map<IEnumerable<ZlecenieReadDto>>(commandItems));
        }

        //GET api/zlecenia/{Rma}
        [HttpGet("{Rma}", Name="GetZlecenieByRma")]
        public ActionResult<ZlecenieReadDto>GetZlecenieByRma(int Rma){
            var commandItem = _repository.GetZlecenieByRma(Rma);
            commandItem.Usterka=commandItem.Usterka.TrimEnd();
            commandItem.Status=commandItem.Status.TrimEnd();
            commandItem.Rodzaj=commandItem.Rodzaj.TrimEnd();
            commandItem.Nazwisko=commandItem.Nazwisko.TrimEnd();
            commandItem.Model=commandItem.Model.TrimEnd();
            commandItem.Marka=commandItem.Marka.TrimEnd();
            commandItem.Informacje=commandItem.Informacje.TrimEnd();
            commandItem.Imie=commandItem.Imie.TrimEnd();
            
            if(commandItem!=null){
                return Ok(_mapper.Map<ZlecenieReadDto>(commandItem));
            }
            else{
                return NotFound();
            }
        }


        //POST api/zlecenia
        [HttpPost]
        public ActionResult<ZlecenieReadDto>CreateZlecenie(ZlecenieCreateDto zlecenieCreateDto){
            //TODO - weryfikacja zlecenieCreateDto
            var commandModel =_mapper.Map<Zlecenie>(zlecenieCreateDto);
            _repository.CreateZlecenie(commandModel);
            _repository.SaveChanges();
            var zlecenieReadDto = _mapper.Map<ZlecenieReadDto>(commandModel);
            return CreatedAtRoute(nameof(GetZlecenieByRma), new {Rma = zlecenieReadDto.Rma},zlecenieReadDto);
            //return Ok(zlecenieReadDto);
        }
    }
}