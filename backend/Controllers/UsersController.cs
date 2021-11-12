using System;
using System.Collections.Generic;
using AutoMapper;
using CommandApi.Data;
using CommandApi.Dtos;
using CommandApi.Models;
using Microsoft.AspNetCore.Mvc;

namespace CommandApi.Controllers
{

    [Route("api/users")]
    [ApiController]
    public class UzytkownicyController:ControllerBase
    {
        private readonly IUsersRepo _repoUsers;
        private readonly IMapper _mapper;

        public UzytkownicyController(IUsersRepo repository, IMapper mapper){
            _repoUsers=repository;
            _mapper=mapper;
        }

        //GET api/users
        [HttpGet]
        public ActionResult<IEnumerable<UsersReadDto>> GetAllUzytkownicy(){
            var commandItems = _repoUsers.GetAllUzytkownicy();
            return Ok(_mapper.Map<IEnumerable<UsersReadDto>>(commandItems));
        }


        //GET api/users/{id}
        [HttpGet("{id}", Name="GetUzytkownicyById")]
        public ActionResult<UsersReadDto> GetUzytkownicyById(short? id){
            var commandItem = _repoUsers.GetUzytkownicyById(id);
            
            if(commandItem!=null){
                return Ok(_mapper.Map<UsersReadDto>(commandItem));
            }
            else{
                return NotFound();
            }
        }


        //POST api/users
        [HttpPost]
        public ActionResult<UsersReadDto> CreateUzytkownicy(UsersCreateDto uzytkownicyCreateDto){
            var uzytkownicyModel =_mapper.Map<User>(uzytkownicyCreateDto);
            _repoUsers.CreateUzytkownicy(uzytkownicyModel);
            _repoUsers.SaveChanges();

            var uzytkownicyReadDto = _mapper.Map<UsersReadDto>(uzytkownicyModel);

            return CreatedAtRoute(nameof(GetUzytkownicyById), new {id = uzytkownicyReadDto.Id},uzytkownicyReadDto);
        }


        //PUT api/users/{id}
        [HttpPut("{id}")]
        public ActionResult UpdateUzytkownicy(short? id, UsersCreateDto uzytkownicyUpdate){
             var commandItem = _repoUsers.GetUzytkownicyById(id);
            
            if(commandItem!=null){
                _mapper.Map(uzytkownicyUpdate, commandItem);
                _repoUsers.UpdateUzytkownicy(commandItem);
                _repoUsers.SaveChanges();
                return NoContent();
            }
            else{
                return NotFound();
            }
        }


        //DELETE api/User/{id}
        [HttpDelete("{id}")]
        public ActionResult DeleteUzytkownicy(short? id)
        {
            var commandItem=_repoUsers.GetUzytkownicyById(id);
            if(commandItem!=null){
                _repoUsers.DeleteUzytkownicy(commandItem);
                _repoUsers.SaveChanges();
                return NoContent();
            }
            else{
                return NotFound();
            }
        }

    }
}