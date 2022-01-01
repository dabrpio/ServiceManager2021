using System;
using System.Collections.Generic;
using AutoMapper;
using CommandApi.Data;
using CommandApi.Dtos;
using CommandApi.Models;
using CommandApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace CommandApi.Controllers
{

    [Route("api/login")]
    [ApiController]
    public class LoginController:ControllerBase
    {
        private readonly IEmployeeRepo _repoEmployee;
        private readonly IMapper _mapper;

        public LoginController(IEmployeeRepo repository, IMapper mapper){
            _repoEmployee=repository;
            _mapper=mapper;
        }

        //GET api/Login
        [HttpGet("{login}+{passwd}")]
        public ActionResult<string> TryLogin(string login, string passwd){
            var commandItem = _repoEmployee.GetEmployeeByLoginPassword(login,passwd);
            var updated = _mapper.Map<Employee>(commandItem);
            if(commandItem!=null){
                updated.ApiKey=Security.Hashing(DateTime.Now.ToString());
                updated.Ttl=DateTime.Now.AddHours(1);
                _mapper.Map(updated, commandItem);
                _repoEmployee.UpdateEmployee(commandItem);
                _repoEmployee.SaveChanges();
                return Ok(updated.ApiKey);
            }
            else{
                return NotFound();
            }
        }
    }
}