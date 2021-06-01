using System;
using System.Collections.Generic;
using AutoMapper;
using CommandApi.Data;
using CommandApi.Dtos;
using CommandApi.Models;
using Microsoft.AspNetCore.Mvc;

namespace CommandApi.Controllers
{

    [Route("api/uzytkownicy")]
    [ApiController]
    public class UzytkownicyController:ControllerBase
    {
        private readonly IUzytkownicyRepo _repoUzytkownicy;
        private readonly IMapper _mapper;

        public UzytkownicyController(IUzytkownicyRepo repository, IMapper mapper){
            _repoUzytkownicy=repository;
            _mapper=mapper;
        }

        //GET api/uzytkownicy
        [HttpGet]
        public ActionResult<IEnumerable<UzytkownicyReadDto>> GetAllUzytkownicy(){
            var commandItems = _repoUzytkownicy.GetAllUzytkownicy();
            return Ok(_mapper.Map<IEnumerable<UzytkownicyReadDto>>(commandItems));
        }


        //GET api/uzytkownicy/{id}
        [HttpGet("{id}", Name="GetUzytkownicyById")]
        public ActionResult<UzytkownicyReadDto> GetUzytkownicyById(short? id){
            var commandItem = _repoUzytkownicy.GetUzytkownicyById(id);
            
            if(commandItem!=null){
                return Ok(_mapper.Map<UzytkownicyReadDto>(commandItem));
            }
            else{
                return NotFound();
            }
        }


        //POST api/uzytkownicy
        [HttpPost]
        public ActionResult<UzytkownicyReadDto> CreateUzytkownicy(UzytkownicyCreateDto uzytkownicyCreateDto){
            var uzytkownicyModel =_mapper.Map<Uzytkownicy>(uzytkownicyCreateDto);
            _repoUzytkownicy.CreateUzytkownicy(uzytkownicyModel);
            _repoUzytkownicy.SaveChanges();

            var uzytkownicyReadDto = _mapper.Map<UzytkownicyReadDto>(uzytkownicyModel);

            return CreatedAtRoute(nameof(GetUzytkownicyById), new {id = uzytkownicyReadDto.Id},uzytkownicyReadDto);
        }


        //PUT api/uzytkownicy/{id}
        [HttpPut("{id}")]
        public ActionResult UpdateUzytkownicy(short? id, UzytkownicyCreateDto uzytkownicyUpdate){
             var commandItem = _repoUzytkownicy.GetUzytkownicyById(id);
            
            if(commandItem!=null){
                _mapper.Map(uzytkownicyUpdate, commandItem);
                _repoUzytkownicy.UpdateUzytkownicy(commandItem);
                _repoUzytkownicy.SaveChanges();
                return NoContent();
            }
            else{
                return NotFound();
            }
        }


        //DELETE api/Uzytkownicy/{id}
        [HttpDelete("{id}")]
        public ActionResult DeleteUzytkownicy(short? id)
        {
            var commandItem=_repoUzytkownicy.GetUzytkownicyById(id);
            if(commandItem!=null){
                _repoUzytkownicy.DeleteUzytkownicy(commandItem);
                _repoUzytkownicy.SaveChanges();
                return NoContent();
            }
            else{
                return NotFound();
            }
        }

    }
}