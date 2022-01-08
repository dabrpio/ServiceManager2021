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
    public struct Response1
    {
        public Response1(string _apiKey, string _companyName, string _nip, int _idCompany)
        {
            ApiKey=_apiKey;
            CompanyName=_companyName;
            Nip=_nip;
            IdCompany=_idCompany;
        }
        public string ApiKey { get; set; }
        public string CompanyName { get; set; }
        public string Nip {get;set;}
        public int IdCompany {get;set;}
    }
    public struct Response2
    {
        public Response2(string _apiKey)
        {
            ApiKey=_apiKey;
        }
        public string ApiKey { get; set; }
    }
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
                updated.ApiKey=Security.Hashing(DateTime.Now.ToString(),commandItem.Type);
                updated.Ttl=DateTime.Now.AddHours(1);
                _mapper.Map(updated, commandItem);
                _repoEmployee.UpdateEmployee(commandItem);
                _repoEmployee.SaveChanges();
                if(commandItem.Nip!=null){
                    Response1 resp1 = new Response1(updated.ApiKey,updated.CompanyName,updated.Nip,updated.IdCompany);
                    return Ok(resp1);
                }
                else{
                    Response2 resp2 = new Response2(updated.ApiKey);
                    return Ok(resp2);
                }
            }
            else{
                return NotFound();
            }
        }
    }
}