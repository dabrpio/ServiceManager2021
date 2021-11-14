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
        public ActionResult<IEnumerable<UsersReadDto>> GetAllUsers(){
            var commandItems = _repoUsers.GetAllUsers();
            return Ok(_mapper.Map<IEnumerable<UsersReadDto>>(commandItems));
        }


        //GET api/users/{id}
        [HttpGet("{id}", Name="GetUserById")]
        public ActionResult<UsersReadDto> GetUserById(short? id){
            var commandItem = _repoUsers.GetUserById(id);
            
            if(commandItem!=null){
                return Ok(_mapper.Map<UsersReadDto>(commandItem));
            }
            else{
                return NotFound();
            }
        }


        //POST api/users
        [HttpPost]
        public ActionResult<UsersReadDto> CreateUser(UsersCreateDto userCreateDto){
            var userModel =_mapper.Map<User>(userCreateDto);

            if(_repoUsers.GetUserByLoginPasswordId(userCreateDto.Login, userCreateDto.Password, userCreateDto.IdCompany)==null){
                _repoUsers.CreateUser(userModel);
                _repoUsers.SaveChanges();

                var uzytkownicyReadDto = _mapper.Map<UsersReadDto>(userModel);

                return CreatedAtRoute(nameof(GetUserById), new {id = uzytkownicyReadDto.Id},uzytkownicyReadDto);    
            }
            else{
                var UserReadDto= _repoUsers.GetUserByLoginPasswordId(userCreateDto.Login, userCreateDto.Password, userCreateDto.IdCompany);
                return RedirectToRoute(nameof(GetUserById), new {id = UserReadDto.Id});
            }
        }


        //PUT api/users/{id}
        [HttpPut("{id}")]
        public ActionResult UpdateUser(short? id, UsersCreateDto userUpdate){
             var commandItem = _repoUsers.GetUserById(id);
            
            if(commandItem!=null){
                _mapper.Map(userUpdate, commandItem);
                _repoUsers.UpdateUser(commandItem);
                _repoUsers.SaveChanges();
                return NoContent();
            }
            else{
                return NotFound();
            }
        }


        //DELETE api/User/{id}
        [HttpDelete("{id}")]
        public ActionResult DeleteUser(short? id)
        {
            var commandItem=_repoUsers.GetUserById(id);
            if(commandItem!=null){
                _repoUsers.DeleteUser(commandItem);
                _repoUsers.SaveChanges();
                return NoContent();
            }
            else{
                return NotFound();
            }
        }

    }
}