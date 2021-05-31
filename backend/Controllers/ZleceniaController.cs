using System;
using System.Collections.Generic;
using AutoMapper;
using CommandApi.Data;
using CommandApi.Dtos;
using CommandApi.Models;
using Microsoft.AspNetCore.Mvc;

namespace CommandApi.Controllers
{

    [Route("api/zlecenia")]
    [ApiController]
    public class ZleceniaController:ControllerBase
    {
        private readonly IZleceniaRepo _repoZlecenia;
        private readonly IKlienciRepo _repoKlienci;
        private readonly IMapper _mapper;

        public ZleceniaController(IZleceniaRepo repository, IKlienciRepo repo2, IMapper mapper){
            _repoZlecenia=repository;
            _repoKlienci=repo2;
            _mapper=mapper;
        }

        //GET api/zlecenia
        [HttpGet]
        public ActionResult<IEnumerable<ZleceniaReadDto>> GetAllZlecenia(){
            var commandItems = _repoZlecenia.GetAllZlecenia();
            List<ZleceniaReadDto> commIt = new List<ZleceniaReadDto>();
            foreach(var item in commandItems){
                ZleceniaReadDto inp=new ZleceniaReadDto();
                inp=_mapper.Map<ZleceniaReadDto>(item);
                inp.IdKlienta=item.IdKlientaNavigation.IdKlienta;
                inp.Imie=item.IdKlientaNavigation.Imie;
                inp.Nazwisko=item.IdKlientaNavigation.Nazwisko;
                inp.NrTel=item.IdKlientaNavigation.NrTel;
                inp.EMail=item.IdKlientaNavigation.EMail;
                inp.Nip=item.IdKlientaNavigation.Nip;
                inp.Nazwa=item.IdKlientaNavigation.Nazwa;
                commIt.Add(inp);
            }
            return Ok(_mapper.Map<IEnumerable<ZleceniaReadDto>>(commIt));
        }




         //GET api/zlecenia/top25

        [HttpGet("top25")]
        public ActionResult<IEnumerable<ZleceniaReadDto>> Get25Zlecenia(){
            var commandItems = _repoZlecenia.Get25Zlecenia();
            List<ZleceniaReadDto> commIt = new List<ZleceniaReadDto>();
            foreach(var item in commandItems){
                ZleceniaReadDto inp=new ZleceniaReadDto();
                inp=_mapper.Map<ZleceniaReadDto>(item);
                inp.IdKlienta=item.IdKlientaNavigation.IdKlienta;
                inp.Imie=item.IdKlientaNavigation.Imie;
                inp.Nazwisko=item.IdKlientaNavigation.Nazwisko;
                inp.NrTel=item.IdKlientaNavigation.NrTel;
                inp.EMail=item.IdKlientaNavigation.EMail;
                inp.Nip=item.IdKlientaNavigation.Nip;
                inp.Nazwa=item.IdKlientaNavigation.Nazwa;
                commIt.Add(inp);
            }
            return Ok(_mapper.Map<List<ZleceniaReadDto>>(commIt));
        }

        //GET api/zlecenia/{Rma}
        [HttpGet("{Rma}", Name="GetZleceniaByRma")]
        public ActionResult<ZleceniaReadDto> GetZleceniaByRma(int Rma){
            var commandItem = _repoZlecenia.GetZleceniaByRma(Rma);
            if(commandItem!=null){
                var klient=_repoKlienci.GetKlienciById(commandItem.IdKlienta);
                if(klient==null){
                    return NoContent();
                }
                ZleceniaReadDto inp=new ZleceniaReadDto();
                inp=_mapper.Map<ZleceniaReadDto>(commandItem);
                inp.IdKlienta=klient.IdKlienta;
                inp.Imie=klient.Imie;
                inp.Nazwisko=klient.Nazwisko;
                inp.NrTel=klient.NrTel;
                inp.EMail=klient.EMail;
                inp.Nip=klient.Nip;
                inp.Nazwa=klient.Nazwa;
                return Ok(_mapper.Map<ZleceniaReadDto>(inp));
            }
            else{
                return NotFound();
            }
        }


        //POST api/zlecenia
        [HttpPost]
        public ActionResult<ZleceniaReadDto> CreateZlecenie(ZleceniaCreateDto zleceniaCreateDto){
            var zleceniaModel =_mapper.Map<Zlecenia>(zleceniaCreateDto);
            var klienciModel = _mapper.Map<Klienci>(zleceniaCreateDto);
            if(_repoKlienci.GetKlienciByPhNumer(klienciModel.NrTel,klienciModel.Imie,klienciModel.Nazwisko)==null){
                _repoKlienci.CreateKlienci(klienciModel);
                _repoKlienci.SaveChanges();
            }
            zleceniaModel.IdKlienta=_repoKlienci.GetKlienciByPhNumer(klienciModel.NrTel,klienciModel.Imie,klienciModel.Nazwisko).IdKlienta;
            if(zleceniaModel.Status=="zrobione")
            {
                zleceniaModel.DataWydania=DateTime.Now;
            }
            _repoZlecenia.CreateZlecenia(zleceniaModel);
            _repoZlecenia.SaveChanges();
           
            var ZleceniaReadDto = _mapper.Map<ZleceniaReadDto>(zleceniaModel);
            ZleceniaReadDto.Imie=klienciModel.Imie;
            ZleceniaReadDto.Nazwisko=klienciModel.Nazwisko;
            ZleceniaReadDto.NrTel=klienciModel.NrTel;
            ZleceniaReadDto.EMail=klienciModel.EMail;
            ZleceniaReadDto.Nip=klienciModel.Nip;
            ZleceniaReadDto.Nazwa=klienciModel.Nazwa;

            return CreatedAtRoute(nameof(GetZleceniaByRma), new {Rma = ZleceniaReadDto.Rma},ZleceniaReadDto);

        }


        //PUT api/zlecenia/{rma}
        [HttpPut("{rma}")]
        public ActionResult UpdateZlecenia(int rma, ZleceniaCreateDto zleceniaUpdate){
            var zlecenieModel = _repoZlecenia.GetZleceniaByRma(rma);
            Klienci klientModel=_repoKlienci.GetKlienciById(zlecenieModel.IdKlienta);
            if(zlecenieModel!=null){
                if(zleceniaUpdate.Status=="zrobione")
                {
                    if(zlecenieModel.DataWydania==null)
                    {
                        zleceniaUpdate.DataWydania=DateTime.Now;
                    }
                }
                _mapper.Map(zleceniaUpdate,zlecenieModel);
                _mapper.Map(zleceniaUpdate,klientModel);
                _repoZlecenia.UpdateZlecenia(zlecenieModel);
                _repoKlienci.UpdateKlienci(klientModel);
                _repoZlecenia.SaveChanges();
                _repoKlienci.SaveChanges();
                return NoContent();
            }
            else{
                return NotFound();
            }
        }

    }
}