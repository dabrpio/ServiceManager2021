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

    [Route("api/tickets")]
    [ApiController]
    public class TicketsController:ControllerBase
    {
        private readonly ITicketsRepo _repoTickets;
        private readonly IClientsRepo _repoClients;
        private readonly IDevicesRepo _repoDevices;
        private readonly IMapper _mapper;

        public TicketsController(ITicketsRepo repo1, IClientsRepo repo2, IDevicesRepo repo3, IMapper mapper){
            _repoTickets=repo1;
            _repoClients=repo2;
            _repoDevices=repo3;
            _mapper=mapper;
        }

        //GET api/tickets
        [HttpGet]
        public ActionResult<IEnumerable<TicketsReadDto>> GetAllTickets(){
            var commandItems = _repoTickets.GetAllTickets();
            List<TicketsReadDto> commIt = new List<TicketsReadDto>();
            foreach(var item in commandItems){
                TicketsReadDto inp=new TicketsReadDto();
                inp=_mapper.Map<TicketsReadDto>(item);
                inp.Name=item.IdClientNavigation.Name;
                inp.Surname=item.IdClientNavigation.Surname;
                inp.PhoneNumber=item.IdClientNavigation.PhoneNumber;
                inp.Email=item.IdClientNavigation.Email;
                inp.IdDevice=item.IdDeviceNavigation.IdDevice;
                inp.Type=item.IdDeviceNavigation.Type;
                inp.Brand=item.IdDeviceNavigation.Brand;
                inp.Model=item.IdDeviceNavigation.Model;
                commIt.Add(inp);
            }
            return Ok(_mapper.Map<IEnumerable<TicketsReadDto>>(commIt));
        }

        //GET api/tickets/{Rma}
        [HttpGet("{Rma}", Name="GetTicketsByRma")]
        public ActionResult<TicketsReadDto> GetTicketsByRma(int Rma){
            var commandItem = _repoTickets.GetTicketsByRma(Rma);
            if(commandItem!=null){
                TicketsReadDto inp=new TicketsReadDto();
                inp=_mapper.Map<TicketsReadDto>(commandItem);
                inp.Name=commandItem.IdClientNavigation.Name;
                inp.Surname=commandItem.IdClientNavigation.Surname;
                inp.PhoneNumber=commandItem.IdClientNavigation.PhoneNumber;
                inp.Email=commandItem.IdClientNavigation.Email;
                inp.Type=commandItem.IdDeviceNavigation.Type;
                inp.Brand=commandItem.IdDeviceNavigation.Brand;
                inp.Model=commandItem.IdDeviceNavigation.Model;
                return Ok(_mapper.Map<TicketsReadDto>(inp));
            }
            else{
                return NotFound();
            }
        }


        //POST api/tickets
        [HttpPost]
        public ActionResult<TicketsReadDto> CreateZlecenie(TicketsCreateDto ticketsCreateDto){
            var ticketModel =_mapper.Map<Ticket>(ticketsCreateDto);
            var clientModel =_mapper.Map<Client>(ticketsCreateDto);
            var deviceModel =_mapper.Map<Device>(ticketsCreateDto);
            var byphone = _repoClients.GetClientByPhNumer(clientModel.PhoneNumber,clientModel.Name,clientModel.Surname);
            var byemail = _repoClients.GetClientByEmail(clientModel.Email,clientModel.Name,clientModel.Surname);         
            if(byphone==null&&byemail==null){
                _repoClients.CreateClient(clientModel);
                _repoClients.SaveChanges();
                if(clientModel.PhoneNumber!=null){
                    ticketModel.IdClient=_repoClients.GetClientByPhNumer(clientModel.PhoneNumber,clientModel.Name,clientModel.Surname).IdClient;
                }
                else{
                    ticketModel.IdClient=_repoClients.GetClientByEmail(clientModel.PhoneNumber,clientModel.Name,clientModel.Surname).IdClient;
                }
            }
            else{
                if(byphone==null&&clientModel.PhoneNumber!=null){
                    byemail.PhoneNumber=clientModel.PhoneNumber;
                    ticketModel.IdClient=byemail.IdClient;
                    _repoClients.UpdateClient(byemail);
                    _repoClients.SaveChanges();
                }
                else{
                    if(byemail==null&&clientModel.Email!=null){                    
                        byphone.Email=clientModel.Email;
                        ticketModel.IdClient=byphone.IdClient;
                        _repoClients.UpdateClient(byphone);
                        _repoClients.SaveChanges();
                    }
                    else{
                        if(byemail==null){
                            ticketModel.IdClient=byphone.IdClient;
                        }
                        ticketModel.IdClient=byemail.IdClient;
                    }                   
                }
            }

            if(_repoDevices.GetDeviceByModel(deviceModel.Type,deviceModel.Brand,deviceModel.Model)==null){
                _repoDevices.CreateDevice(deviceModel);
                _repoDevices.SaveChanges();
            }
            
            ticketModel.IdDevice=_repoDevices.GetDeviceByModel(deviceModel.Type,deviceModel.Brand,deviceModel.Model).IdDevice;

            if(ticketModel.Status=="done")
            {
                ticketModel.EndDate=DateTime.Now;
                if(clientModel.Email!=null){
                    Mailing.SendMail(clientModel.Email);
                }
                
            }
            _repoTickets.CreateTicket(ticketModel);
            _repoTickets.SaveChanges();

            var TicketsReadDto = _mapper.Map<TicketsReadDto>(ticketModel);
            _mapper.Map(ticketModel.IdClientNavigation,TicketsReadDto);
            _mapper.Map(ticketModel.IdDeviceNavigation,TicketsReadDto);


            return CreatedAtRoute(nameof(GetTicketsByRma), new {Rma = TicketsReadDto.Rma},TicketsReadDto);
            
        }


        //PUT api/tickets/{rma}
        [HttpPut("{rma}")]
        public ActionResult UpdateTicket(int rma, TicketsCreateDto ticketsUpdate){
            var ticketModel = _repoTickets.GetTicketsByRma(rma);
            var clientModel = _repoClients.GetClientById(ticketModel.IdClient);
            var deviceModel = _repoDevices.GetDeviceById(ticketModel.IdDevice);
            if(ticketModel!=null){
                if(ticketsUpdate.Status=="done")
                {
                    if(ticketModel.EndDate==null)
                    {
                        ticketsUpdate.EndDate=DateTime.Now;
                    }
                }
                else
                {
                    if(ticketModel.EndDate!=null)
                    {
                        ticketsUpdate.EndDate=null;
                    }
                }
                if(_repoDevices.GetDeviceByModel(ticketsUpdate.Type,ticketsUpdate.Brand,ticketsUpdate.Model)==null){
                    var inp = _mapper.Map<Device>(ticketsUpdate);
                    _repoDevices.CreateDevice(inp);
                    _repoDevices.SaveChanges();
                    ticketModel.IdDevice=_repoDevices.GetDeviceByModel(ticketsUpdate.Type,ticketsUpdate.Brand,ticketsUpdate.Model).IdDevice;
                }
                _mapper.Map(ticketsUpdate,ticketModel);
                _mapper.Map(ticketsUpdate,clientModel);
                _repoTickets.UpdateTicket(ticketModel);
                _repoClients.UpdateClient(clientModel);
                _repoTickets.SaveChanges();
                _repoClients.SaveChanges();
                
                var TicketsReadDto = _mapper.Map<TicketsReadDto>(ticketModel);
                _mapper.Map(ticketModel.IdClientNavigation,TicketsReadDto);
                _mapper.Map(ticketModel.IdDeviceNavigation,TicketsReadDto);

                return CreatedAtRoute(nameof(GetTicketsByRma), new {Rma = TicketsReadDto.Rma},TicketsReadDto);
            }
            else{
                return NotFound();
            }
        }


        //DELETE api/tickets/{rma}
        [HttpDelete("{rma}")]
        public ActionResult DeleteTicket(int rma)
        {
            var commandItem=_repoTickets.GetTicketsByRma(rma);
            if(commandItem!=null){
                _repoTickets.DeleteTicket(commandItem);
                _repoTickets.SaveChanges();
                return NoContent();
            }
            else{
                return NotFound();
            }
        }

    }
}