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
            Klienci user;
            List<ZleceniaReadDto> commIt = new List<ZleceniaReadDto>();
            foreach(var item in commandItems){
                ZleceniaReadDto inp=new ZleceniaReadDto();
                user=_repoKlienci.GetKlienciById(item.IdKlienta);
                inp.IdKlienta=user.IdKlienta;
                inp.Imie=user.Imie;
                inp.Informacje=item.Informacje;
                inp.KosztCzesci=item.KosztCzesci;
                inp.KosztNaprawy=item.KosztNaprawy;
                inp.Marka=item.Marka;
                inp.Model=item.Model;
                inp.Nazwisko=user.Nazwisko;
                inp.NrTel=user.NrTel;
                inp.Rma=item.Rma;
                inp.Rodzaj=item.Rodzaj;
                inp.Status=item.Status;
                inp.Usterka=item.Usterka;
                inp.DataPrzyjecia=item.DataPrzyjecia;
                inp.DataWydania=item.DataWydania;
                commIt.Add(inp);
            }
            return Ok(_mapper.Map<List<ZleceniaReadDto>>(commIt));
        }

        //GET api/zlecenia/{Rma}
        [HttpGet("{Rma}", Name="GetZlecenieByRma")]
        public ActionResult<ZleceniaReadDto>GetZleceniaByRma(int Rma){
            var commandItem = _repoZlecenia.GetZleceniaByRma(Rma);
            
            if(commandItem!=null){
                var klient=_repoKlienci.GetKlienciById(commandItem.IdKlienta);
                if(klient==null){
                    return NoContent();
                }
                ZleceniaReadDto inp=new ZleceniaReadDto();
                inp.IdKlienta=klient.IdKlienta;
                inp.Imie=klient.Imie;
                inp.Informacje=commandItem.Informacje;
                inp.KosztCzesci=commandItem.KosztCzesci;
                inp.KosztNaprawy=commandItem.KosztNaprawy;
                inp.Marka=commandItem.Marka;
                inp.Model=commandItem.Model;
                inp.Nazwisko=klient.Nazwisko;
                inp.NrTel=klient.NrTel;
                inp.Rma=commandItem.Rma;
                inp.Rodzaj=commandItem.Rodzaj;
                inp.Status=commandItem.Status;
                inp.Usterka=commandItem.Usterka;
                inp.DataWydania=commandItem.DataWydania;
                inp.DataPrzyjecia=commandItem.DataPrzyjecia;
                return Ok(_mapper.Map<ZleceniaReadDto>(inp));
            }
            else{
                return NotFound();
            }
        }


        //POST api/zlecenia
        [HttpPost]
        public ActionResult<ZleceniaReadDto>CreateZlecenie(ZleceniaCreateDto zleceniaCreateDto){
            var commandModel =_mapper.Map<Zlecenia>(zleceniaCreateDto);
            Klienci commandKlient= new Klienci();
            commandKlient.Imie=zleceniaCreateDto.Imie;
            commandKlient.Nazwisko=zleceniaCreateDto.Nazwisko;
            commandKlient.NrTel=zleceniaCreateDto.NrTel;
            //var commandKlient=_mapper.Map<KlienciTest>(zleceniaTestCreateDto);
            if(_repoKlienci.GetKlienciByPhNumer(commandKlient.NrTel,commandKlient.Imie,commandKlient.Nazwisko)==null){
                _repoKlienci.CreateKlienci(commandKlient);
                _repoKlienci.SaveChanges();
            }
            commandModel.IdKlienta=_repoKlienci.GetKlienciByPhNumer(commandKlient.NrTel,commandKlient.Imie,commandKlient.Nazwisko).IdKlienta;
            _repoZlecenia.CreateZlecenia(commandModel);
            _repoZlecenia.SaveChanges();
            var zleceniaTestReadDto = _mapper.Map<ZleceniaReadDto>(commandModel);
            return CreatedAtRoute(nameof(GetZleceniaByRma), new {Rma = zleceniaTestReadDto.Rma},zleceniaTestReadDto);
        }
    }
}