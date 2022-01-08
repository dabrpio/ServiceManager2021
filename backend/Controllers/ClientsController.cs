using System;
using System.Collections.Generic;
using AutoMapper;
using CommandApi.Data;
using CommandApi.Dtos;
using CommandApi.Models;
using Microsoft.AspNetCore.Mvc;
using CommandApi.Services;

namespace CommandApi.Controllers
{

    [Route("api/clients")]
    [ApiController]
    [ApiKeyAuth]

    public class ClientsController:ControllerBase
    {
        private readonly IClientsRepo _repoClients;
        private readonly IMapper _mapper;

        public ClientsController(IClientsRepo repository, IMapper mapper){
            _repoClients=repository;
            _mapper=mapper;
        }

        //GET api/clients
        [HttpGet]
        public ActionResult<IEnumerable<ClientsReadDto>> GetAllClients(){
            var commandItems = _repoClients.GetAllClients();
            return Ok(_mapper.Map<IEnumerable<ClientsReadDto>>(commandItems));
        }
        


        //GET api/clients/{id}
        [HttpGet("{id:int}", Name="GetClientById")]
        public ActionResult<ClientsReadDto> GetClientById(int id){
            var commandItem = _repoClients.GetClientById(id);
            if(commandItem!=null){
                List<int> rmas=new List<int>();
                foreach(var ticket in commandItem.Tickets){
                    rmas.Add(ticket.Rma);
                }
                ClientsReadDto transfer;
                transfer=_mapper.Map<ClientsReadDto>(commandItem);
                transfer.Rmas=rmas;
                return Ok(_mapper.Map<ClientsReadDto>(transfer));
            }
            else{
                return NotFound();
            }
        }


        //GET api/clients/imie/{name}
        [HttpGet("imie/{imie:alpha}")]
        public ActionResult<IEnumerable<ClientsReadDto>> GetKlienciByName(string imie){
            var commandItems = _repoClients.GetKlienciByName(imie);

            if(commandItems!=null){
                return Ok(_mapper.Map<IEnumerable<ClientsReadDto>>(commandItems));
            }
            else
            {
                return NotFound();
            }
        }

        //GET api/clients/nazwisko/{sur}
        [HttpGet("nazwisko/{nazwisko:alpha}")]
        public ActionResult<IEnumerable<ClientsReadDto>> GetKlienciBySur(string nazwisko){
            var commandItems = _repoClients.GetKlienciBySur(nazwisko);

            if(commandItems!=null){
                return Ok(_mapper.Map<IEnumerable<ClientsReadDto>>(commandItems));
            }
            else
            {
                return NotFound();
            }
        }

        //POST api/kliecni
        [HttpPost]
        public ActionResult<ClientsReadDto> CreateClient(ClientsCreateDto clientCreateDto){
            var clientModel =_mapper.Map<Client>(clientCreateDto);
            var byphone = _repoClients.GetClientByPhNumer(clientModel.PhoneNumber,clientModel.Name,clientModel.Surname);
            var byemail = _repoClients.GetClientByEmail(clientModel.Email,clientModel.Name,clientModel.Surname);         
            if(byphone==null&&byemail==null){
                _repoClients.CreateClient(clientModel);
                _repoClients.SaveChanges();
                var clientReadDto = _mapper.Map<ClientsReadDto>(clientModel);
                return CreatedAtRoute(nameof(GetClientById), new {id = clientReadDto.IdClient},clientReadDto);
            }
            else{
                if(byphone==null&&clientModel.PhoneNumber!=null){
                    byemail.PhoneNumber=clientModel.PhoneNumber;
                    _repoClients.UpdateClient(byemail);
                    _repoClients.SaveChanges();
                    var clientReadDto = _mapper.Map<ClientsReadDto>(byemail);
                    return RedirectToRoute(nameof(GetClientById), new {id = clientReadDto.IdClient});
                }
                else{
                    if(byemail==null&&clientModel.Email!=null){                    
                        byphone.Email=clientModel.Email;
                        _repoClients.UpdateClient(byphone);
                        _repoClients.SaveChanges();
                        var clientReadDto = _mapper.Map<ClientsReadDto>(byphone);
                        return RedirectToRoute(nameof(GetClientById), new {id = clientReadDto.IdClient});
                    }
                    else{
                        if(byemail==null){
                            return RedirectToRoute(nameof(GetClientById), new {id = byphone.IdClient});
                        }
                        return RedirectToRoute(nameof(GetClientById), new {id = byemail.IdClient});

                    }
                }
            }
        }


        //PUT api/kliecni/{id}
        [HttpPut("{id}")]
        public ActionResult UpdateKliecni(int id, ClientsCreateDto clientUpdate){
             var commandItem = _repoClients.GetClientById(id);
            
            if(commandItem!=null){
                _mapper.Map(clientUpdate, commandItem);
                _repoClients.UpdateClient(commandItem);
                _repoClients.SaveChanges();
                
                var clientReadDto = _mapper.Map<ClientsReadDto>(commandItem);

            return CreatedAtRoute(nameof(GetClientById), new {id = clientReadDto.IdClient},clientReadDto);
            }
            else{
                return NotFound();
            }
        }

        //DELETE api/kliecni/{id}
        [HttpDelete("{id}")]
        public ActionResult DeleteClient(int id)
        {
            var commandItem=_repoClients.GetClientById(id);
            if(commandItem!=null){
                if(commandItem.Tickets.Count!=0){
                    return Problem("Nie usunięto zleceń klienta");
                }
                _repoClients.DeleteClient(commandItem);
                _repoClients.SaveChanges();
                return NoContent();
            }
            else{
                return NotFound();
            }
        }
    }
}