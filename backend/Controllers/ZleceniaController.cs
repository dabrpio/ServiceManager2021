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
                inp=_mapper.Map<ZleceniaReadDto>(item);
                inp.IdKlienta=user.IdKlienta;
                inp.Imie=user.Imie;
                inp.Nazwisko=user.Nazwisko;
                inp.NrTel=user.NrTel;
                commIt.Add(inp);
            }
            return Ok(_mapper.Map<List<ZleceniaReadDto>>(commIt));
        }

        //GET api/zlecenia/{Rma}
        [HttpGet("{Rma}", Name="GetZleceniaByRma")]
        public ActionResult<ZleceniaReadDto>GetZleceniaByRma(int Rma){
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

                return Ok(_mapper.Map<ZleceniaReadDto>(inp));
            }
            else{
                return NotFound();
            }
        }


        //POST api/zlecenia
        [HttpPost]
        public ActionResult<ZleceniaReadDto>CreateZlecenie(ZleceniaCreateDto zleceniaCreateDto){
            var zleceniaModel =_mapper.Map<Zlecenia>(zleceniaCreateDto);
            var klienciModel = _mapper.Map<Klienci>(zleceniaCreateDto);
            if(_repoKlienci.GetKlienciByPhNumer(klienciModel.NrTel,klienciModel.Imie,klienciModel.Nazwisko)==null){
                _repoKlienci.CreateKlienci(klienciModel);
                _repoKlienci.SaveChanges();
            }
            zleceniaModel.IdKlienta=_repoKlienci.GetKlienciByPhNumer(klienciModel.NrTel,klienciModel.Imie,klienciModel.Nazwisko).IdKlienta;
            _repoZlecenia.CreateZlecenia(zleceniaModel);
            _repoZlecenia.SaveChanges();
            /*Klienci commandKlient= new Klienci();
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
            _repoZlecenia.SaveChanges();*/
            
            var ZleceniaReadDto = _mapper.Map<ZleceniaReadDto>(zleceniaModel);
            ZleceniaReadDto.Imie=klienciModel.Imie;
            ZleceniaReadDto.Nazwisko=klienciModel.Nazwisko;
            ZleceniaReadDto.NrTel=klienciModel.NrTel;

            return CreatedAtRoute(nameof(GetZleceniaByRma), new {Rma = ZleceniaReadDto.Rma},ZleceniaReadDto);

        }
    }
}