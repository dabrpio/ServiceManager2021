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
        public ActionResult<IEnumerable<TicketsReadDto>> GetAllZlecenia(){
            var commandItems = _repoTickets.GetAllZlecenia();
            List<TicketsReadDto> commIt = new List<TicketsReadDto>();
            foreach(var item in commandItems){
                TicketsReadDto inp=new TicketsReadDto();
                inp=_mapper.Map<TicketsReadDto>(item);
                /*inp.IdClient=item.IdKlientaNavigation.IdClient;
                inp.Imie=item.IdKlientaNavigation.Imie;
                inp.Nazwisko=item.IdKlientaNavigation.Nazwisko;
                inp.NrTel=item.IdKlientaNavigation.NrTel;
                inp.EMail=item.IdKlientaNavigation.EMail;
                inp.Nip=item.IdKlientaNavigation.Nip;
                inp.Nazwa=item.IdKlientaNavigation.Nazwa;*/
                commIt.Add(inp);
            }
            return Ok(_mapper.Map<IEnumerable<TicketsReadDto>>(commIt));
        }




         //GET api/tickets/top25

        [HttpGet("top25")]
        public ActionResult<IEnumerable<TicketsReadDto>> Get25Zlecenia(){
            var commandItems = _repoTickets.Get25Zlecenia();
            List<TicketsReadDto> commIt = new List<TicketsReadDto>();
            foreach(var item in commandItems){
                TicketsReadDto inp=new TicketsReadDto();
                inp=_mapper.Map<TicketsReadDto>(item);
                /*inp.IdClient=item.IdKlientaNavigation.IdClient;
                inp.Imie=item.IdKlientaNavigation.Imie;
                inp.Nazwisko=item.IdKlientaNavigation.Nazwisko;
                inp.NrTel=item.IdKlientaNavigation.NrTel;
                inp.EMail=item.IdKlientaNavigation.EMail;
                inp.Nip=item.IdKlientaNavigation.Nip;
                inp.Nazwa=item.IdKlientaNavigation.Nazwa;*/
                commIt.Add(inp);
            }
            return Ok(_mapper.Map<List<TicketsReadDto>>(commIt));
        }

        //GET api/tickets/{Rma}
        [HttpGet("{Rma}", Name="GetZleceniaByRma")]
        public ActionResult<TicketsReadDto> GetZleceniaByRma(int Rma){
            var commandItem = _repoTickets.GetZleceniaByRma(Rma);
            if(commandItem!=null){
                var klient=_repoClients.GetKlienciById(commandItem.IdClient);
                if(klient==null){
                    return NoContent();
                }
                TicketsReadDto inp=new TicketsReadDto();
                inp=_mapper.Map<TicketsReadDto>(commandItem);
               /* inp.IdClient=klient.IdClient;
                inp.Imie=klient.Imie;
                inp.Nazwisko=klient.Nazwisko;
                inp.NrTel=klient.NrTel;
                inp.EMail=klient.EMail;
                inp.Nip=klient.Nip;
                inp.Nazwa=klient.Nazwa;*/
                return Ok(_mapper.Map<TicketsReadDto>(inp));
            }
            else{
                return NotFound();
            }
        }


        //POST api/tickets
        [HttpPost]
        public ActionResult<TicketsReadDto> CreateZlecenie(TicketsCreateDto ticketsCreateDto){
            var ticketsModel =_mapper.Map<Ticket>(ticketsCreateDto);
            /*var klienciModel = _mapper.Map<Client>(ticketsCreateDto);
            if(_repoClients.GetKlienciByPhNumer(klienciModel.NrTel,klienciModel.Imie,klienciModel.Nazwisko)==null){
                _repoClients.CreateKlienci(klienciModel);
                _repoClients.SaveChanges();
            }
            ticketsModel.IdClient=_repoClients.GetKlienciByPhNumer(klienciModel.NrTel,klienciModel.Imie,klienciModel.Nazwisko).IdClient;
            if(ticketsModel.Status=="zrobione")
            {
                ticketsModel.DataWydania=DateTime.Now;
            }
            _repoTickets.CreateZlecenia(ticketsModel);
            _repoTickets.SaveChanges();

            if(_repoDevices.GetUrzadzeniaByModel(ticketsModel.Rodzaj,ticketsModel.Marka,ticketsModel.Model).Count==0){
                Urzadzenia device=new Urzadzenia();
                device.Brand=ticketsModel.Marka;
                device.Type=ticketsModel.Rodzaj;
                device.Model=ticketsModel.Model;
                _repoDevices.CreateUrzadzenia(device);
                _repoDevices.SaveChanges();
            }*/
           
            var TicketsReadDto = _mapper.Map<TicketsReadDto>(ticketsModel);
           /* TicketsReadDto.Imie=klienciModel.Imie;
            TicketsReadDto.Nazwisko=klienciModel.Nazwisko;
            TicketsReadDto.NrTel=klienciModel.NrTel;
            TicketsReadDto.EMail=klienciModel.EMail;
            TicketsReadDto.Nip=klienciModel.Nip;
            TicketsReadDto.Nazwa=klienciModel.Nazwa;*/

            return CreatedAtRoute(nameof(GetZleceniaByRma), new {Rma = TicketsReadDto.Rma},TicketsReadDto);

        }


       /* //PUT api/tickets/{rma}
        [HttpPut("{rma}")]
        public ActionResult UpdateZlecenia(int rma, TicketsCreateDto ticketsUpdate){
            var zlecenieModel = _repoTickets.GetZleceniaByRma(rma);
            Client klientModel=_repoClients.GetKlienciById(zlecenieModel.IdClient);
            if(zlecenieModel!=null){
                if(ticketsUpdate.Status=="zrobione")
                {
                    if(zlecenieModel.DataWydania==null)
                    {
                        ticketsUpdate.DataWydania=DateTime.Now;
                    }
                }
                else
                {
                    if(zlecenieModel.DataWydania!=null)
                    {
                        ticketsUpdate.DataWydania=null;
                    }
                }
                if(_repoDevices.GetUrzadzeniaByModel(ticketsUpdate.Rodzaj,ticketsUpdate.Marka,ticketsUpdate.Model).Count==0){
                    Urzadzenia device=new Urzadzenia();
                    device.Brand=ticketsUpdate.Marka;
                    device.Type=ticketsUpdate.Rodzaj;
                    device.Model=ticketsUpdate.Model;
                    _repoDevices.CreateUrzadzenia(device);
                    _repoDevices.SaveChanges();
                }
                _mapper.Map(ticketsUpdate,zlecenieModel);
                _mapper.Map(ticketsUpdate,klientModel);
                _repoTickets.UpdateZlecenia(zlecenieModel);
                _repoClients.UpdateKlienci(klientModel);
                _repoTickets.SaveChanges();
                _repoClients.SaveChanges();
                return NoContent();
            }
            else{
                return NotFound();
            }
        }*/

        //DELETE api/tickets/{rma}
        [HttpDelete("{rma}")]
        public ActionResult DeleteZlecenia(int rma)
        {
            var commandItem=_repoTickets.GetZleceniaByRma(rma);
            if(commandItem!=null){
                _repoTickets.DeleteZlecenia(commandItem);
                _repoTickets.SaveChanges();
                return NoContent();
            }
            else{
                return NotFound();
            }
        }

    }
}