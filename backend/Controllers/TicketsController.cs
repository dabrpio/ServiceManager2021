using System;
using System.Collections.Generic;
using AutoMapper;
using CommandApi.Data;
using CommandApi.Dtos;
using CommandApi.Models;
using Microsoft.AspNetCore.Mvc;

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
                inp.EMail=item.IdClientNavigation.EMail;
                inp.Nip=item.IdClientNavigation.Nip;
                inp.CompanyName=item.IdClientNavigation.CompanyName;
                inp.IdDevices=item.IdDevicesNavigation.IdDevices;
                inp.Type=item.IdDevicesNavigation.Type;
                inp.Brand=item.IdDevicesNavigation.Brand;
                inp.Model=item.IdDevicesNavigation.Model;
                commIt.Add(inp);
            }
            return Ok(_mapper.Map<IEnumerable<TicketsReadDto>>(commIt));
        }




         //GET api/tickets/top25

        /*[HttpGet("top25")]
        public ActionResult<IEnumerable<TicketsReadDto>> Get25Zlecenia(){
            var commandItems = _repoTickets.Get25Zlecenia();
            List<TicketsReadDto> commIt = new List<TicketsReadDto>();
            foreach(var item in commandItems){
                TicketsReadDto inp=new TicketsReadDto();
                inp=_mapper.Map<TicketsReadDto>(item);
                inp.IdClient=item.IdClientNavigation.IdClient;
                inp.Imie=item.IdClientNavigation.Imie;
                inp.Nazwisko=item.IdClientNavigation.Nazwisko;
                inp.NrTel=item.IdClientNavigation.NrTel;
                inp.EMail=item.IdClientNavigation.EMail;
                inp.Nip=item.IdClientNavigation.Nip;
                inp.Nazwa=item.IdClientNavigation.Nazwa;
                commIt.Add(inp);
            }
            return Ok(_mapper.Map<List<TicketsReadDto>>(commIt));
        }*/

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
                inp.EMail=commandItem.IdClientNavigation.EMail;
                inp.Nip=commandItem.IdClientNavigation.Nip;
                inp.CompanyName=commandItem.IdClientNavigation.CompanyName;
                inp.Type=commandItem.IdDevicesNavigation.Type;
                inp.Brand=commandItem.IdDevicesNavigation.Brand;
                inp.Model=commandItem.IdDevicesNavigation.Model;
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

 
            if(_repoClients.GetClientByPhNumer(clientModel.PhoneNumber,clientModel.Name,clientModel.Surname)==null){
                _repoClients.CreateClient(clientModel);
                _repoClients.SaveChanges();
            }

            if(_repoDevices.GetDeviceByModel(deviceModel.Type,deviceModel.Brand,deviceModel.Model)==null){
                _repoDevices.CreateDevice(deviceModel);
                _repoDevices.SaveChanges();
            }

            ticketModel.IdClient=_repoClients.GetClientByPhNumer(clientModel.PhoneNumber,clientModel.Name,clientModel.Surname).IdClient;
            ticketModel.IdDevices=_repoDevices.GetDeviceByModel(deviceModel.Type,deviceModel.Brand,deviceModel.Model).IdDevices;

            if(ticketModel.Status=="zrobione")
            {
                ticketModel.IssueDate=DateTime.Now;
            }
            _repoTickets.CreateTicket(ticketModel);
            _repoTickets.SaveChanges();

            var TicketsReadDto = _mapper.Map<TicketsReadDto>(ticketModel);

            return CreatedAtRoute(nameof(GetTicketsByRma), new {Rma = TicketsReadDto.Rma},TicketsReadDto);

        }


        //PUT api/tickets/{rma}
        [HttpPut("{rma}")]
        public ActionResult UpdateTicket(int rma, TicketsCreateDto ticketsUpdate){
            var ticketModel = _repoTickets.GetTicketsByRma(rma);
            var clientModel = _repoClients.GetClientById(ticketModel.IdClient);
            var deviceModel = _repoDevices.GetDeviceById(ticketModel.IdDevices);
            if(ticketModel!=null){
                if(ticketsUpdate.Status=="zrobione")
                {
                    if(ticketModel.IssueDate==null)
                    {
                        ticketsUpdate.IssueDate=DateTime.Now;
                    }
                }
                else
                {
                    if(ticketModel.IssueDate!=null)
                    {
                        ticketsUpdate.IssueDate=null;
                    }
                }
                if(_repoDevices.GetDeviceByModel(ticketsUpdate.Type,ticketsUpdate.Brand,ticketsUpdate.Model)==null){
                    var inp = _mapper.Map<Device>(ticketsUpdate);
                    _repoDevices.CreateDevice(inp);
                    _repoDevices.SaveChanges();
                }
                ticketModel.IdDevices=_repoDevices.GetDeviceByModel(ticketsUpdate.Type,ticketsUpdate.Brand,ticketsUpdate.Model).IdDevices;
                _mapper.Map(ticketsUpdate,ticketModel);
                _mapper.Map(ticketsUpdate,clientModel);
                _repoTickets.UpdateTicket(ticketModel);
                _repoClients.UpdateClient(clientModel);
                _repoTickets.SaveChanges();
                _repoClients.SaveChanges();
                
                var TicketsReadDto = _mapper.Map<TicketsReadDto>(ticketModel);

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