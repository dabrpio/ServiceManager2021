using System;
using System.Collections.Generic;
using AutoMapper;
using CommandApi.Data;
using CommandApi.Dtos;
using CommandApi.Models;
using Microsoft.AspNetCore.Mvc;

namespace CommandApi.Controllers
{

    [Route("api/status")]
    [ApiController]
    public class StatusController:ControllerBase
    {
        private readonly ITicketsRepo _repoTickets;
        private readonly IMapper _mapper;

        public StatusController(ITicketsRepo repo1, IClientsRepo repo2, IDevicesRepo repo3, IMapper mapper){
            _repoTickets=repo1;
            _mapper=mapper;
        }

        

        //Get api/status/{Rma + PhoneNumber}
        [HttpGet("{Rma}+{PhoneNumber}", Name="GetTicketsStatus")]
        public ActionResult<String> GetTicketsStatus(short Rma, int PhoneNumber){
            var commandItem=_repoTickets.GetTicketsByRma(Rma);
            if(commandItem==null){
                return NotFound();
            }
            if(commandItem.IdClientNavigation.PhoneNumber==PhoneNumber){
                StatusReadDto inp = new StatusReadDto();
                inp.Status=commandItem.Status;
                inp.Glitch=commandItem.Glitch;
                inp.Brand=commandItem.IdDevicesNavigation.Brand;
                inp.Model=commandItem.IdDevicesNavigation.Model;
                inp.RepairCost=commandItem.RepairCost;
                inp.Rma=Rma;
                return Ok(inp);
            }
            else
            {
                return NotFound();
            }
        }

         //PUT api/status/{rma}+{phoneNumber}+{status}
        [HttpPut("{rma}+{PhoneNumber}",Name="UpdateTicketStatus")]
        public ActionResult UpdateTicketStatus(short rma, int PhoneNumber, StatusCreateDto status){
            var ticketModel = _repoTickets.GetTicketsByRma(rma);
            if(ticketModel==null){
                return NotFound();
            }
            if(ticketModel.IdClientNavigation.PhoneNumber==PhoneNumber){
                StatusReadDto inp = new StatusReadDto();
                var ticketsUpdate = ticketModel;
                ticketsUpdate.Status=status.Status;
                inp.Status=ticketModel.Status;
                inp.Glitch=ticketModel.Glitch;
                inp.Brand=ticketModel.IdDevicesNavigation.Brand;
                inp.Model=ticketModel.IdDevicesNavigation.Model;
                inp.RepairCost=ticketModel.RepairCost;
                inp.Rma=rma;
                _mapper.Map(ticketsUpdate,ticketModel);
                _repoTickets.UpdateTicket(ticketModel);
                _repoTickets.SaveChanges();
                return Ok(inp);
            }
            else
            {
                return NotFound();
            }
        }

    }
}