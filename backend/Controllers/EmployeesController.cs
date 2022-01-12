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

    [Route("api/Employees")]
    [ApiController]
    [ApiKeyAuth]
    public class EmployeeController:ControllerBase
    {
        private readonly IEmployeeRepo _repoEmployee;
        private readonly IMapper _mapper;
        public struct ChangePassw
        {

            public ChangePassw(string _password, string _newPassword)
            {
                Password=_password;
                NewPassword=_newPassword;
            }
            public string Password { get; set; }
            public string NewPassword { get; set; }
        }

        public EmployeeController(IEmployeeRepo repository, IMapper mapper){
            _repoEmployee=repository;
            _mapper=mapper;
        }

        //GET api/Employees
        [HttpGet]
        public ActionResult<IEnumerable<EmployeeReadDto>> GetAllEmployee(){
            var commandItems = _repoEmployee.GetAllEmployee();
            return Ok(_mapper.Map<IEnumerable<EmployeeReadDto>>(commandItems));
        }


        //GET api/Employees/{id}
        [HttpGet("{id}", Name="GetEmployeeById")]
        public ActionResult<EmployeeReadDto> GetEmployeeById(int id){
            var commandItem = _repoEmployee.GetEmployeeById(id);
            
            if(commandItem!=null){
                return Ok(_mapper.Map<EmployeeReadDto>(commandItem));
            }
            else{
                return NotFound();
            }
        }


        //POST api/Employees
        [HttpPost]
        public ActionResult<EmployeeReadDto> CreateEmployee(EmployeeCreateDto EmployeeCreateDto){
            var EmployeeModel =_mapper.Map<Employee>(EmployeeCreateDto);

            if(_repoEmployee.GetEmployeeByLoginPassword(EmployeeCreateDto.Login, EmployeeCreateDto.Password)==null){
                _repoEmployee.CreateEmployee(EmployeeModel);
                _repoEmployee.SaveChanges();

                var uzytkownicyReadDto = _mapper.Map<EmployeeReadDto>(EmployeeModel);

                return CreatedAtRoute(nameof(GetEmployeeById), new {id = uzytkownicyReadDto.IdEmployee},uzytkownicyReadDto);    
            }
            else{
                var EmployeeReadDto= _repoEmployee.GetEmployeeByLoginPassword(EmployeeCreateDto.Login, EmployeeCreateDto.Password);
                return RedirectToRoute(nameof(GetEmployeeById), new {id = EmployeeReadDto.IdEmployee});
            }
        }


        //PUT api/Employees/{id}
        [HttpPut("{id}")]
        public ActionResult UpdateEmployee(int id, EmployeeCreateDto EmployeeUpdate){
             var commandItem = _repoEmployee.GetEmployeeById(id);
            
            if(commandItem!=null){
                _mapper.Map(EmployeeUpdate, commandItem);
                _repoEmployee.UpdateEmployee(commandItem);
                _repoEmployee.SaveChanges();
                return NoContent();
            }
            else{
                return NotFound();
            }
        }

        //PUT api/Employees/pswd/{id}
        [HttpPut("pswd/{id}")]
        public ActionResult UpdateEmployeePaswd(int id, ChangePassw pas){
            var commandItem = _repoEmployee.GetEmployeeById(id);
            Console.WriteLine(id);
            Console.WriteLine(pas.Password);
            if(commandItem.Password!=pas.Password){
                return NotFound();
            }
            var EmployeeUpdate=commandItem;
            EmployeeUpdate.Password=pas.NewPassword;
            if(commandItem!=null){
                _mapper.Map(EmployeeUpdate, commandItem);
                _repoEmployee.UpdateEmployee(commandItem);
                _repoEmployee.SaveChanges();
                return NoContent();
            }
            else{
                return NotFound();
            }
        }


        //DELETE api/Employees/{id}
        [HttpDelete("{id}")]
        public ActionResult DeleteEmployee(int id)
        {
            var commandItem=_repoEmployee.GetEmployeeById(id);
            if(commandItem!=null){
                _repoEmployee.DeleteEmployee(commandItem);
                _repoEmployee.SaveChanges();
                return NoContent();
            }
            else{
                return NotFound();
            }
        }

    }
}