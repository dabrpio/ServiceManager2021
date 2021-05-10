using System;
using System.Collections.Generic;
using AutoMapper;
using CommandApi.Data;
using CommandApi.Dtos;
using CommandApi.Models;
using Microsoft.AspNetCore.Mvc;

namespace CommandApi.Controllers
{

    [Route("api/zleceniaTest")]
    [ApiController]
    public class ZleceniaTestController:ControllerBase
    {
        private readonly IZleceniaTestRepo _repository;
        private readonly IKlienciTestRepo _repoKlienci;
        private readonly IMapper _mapper;

        public ZleceniaTestController(IZleceniaTestRepo repository, IKlienciTestRepo repo2, IMapper mapper){
            _repository=repository;
            _repoKlienci=repo2;
            _mapper=mapper;
        }

        //GET api/zleceniaTest
        [HttpGet]
        public ActionResult<IEnumerable<ZleceniaTestReadDto>> GetAllZleceniaTest(){
            var commandItems = _repository.GetAllZleceniaTest();
            KlienciTest user;
            List<ZleceniaTestReadDto> commIt = new List<ZleceniaTestReadDto>();
            foreach(var item in commandItems){
                ZleceniaTestReadDto inp=new ZleceniaTestReadDto();
                user=_repoKlienci.GetKlienciTestById(item.IdKlienta);
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
            return Ok(_mapper.Map<List<ZleceniaTestReadDto>>(commIt));
        }

        //GET api/zleceniaTest/{Rma}
        [HttpGet("{Rma}", Name="GetZlecenieTestByRma")]
        public ActionResult<ZleceniaTestReadDto>GetZlecenieTestByRma(int Rma){
            var commandItem = _repository.GetZlecenieTestByRma(Rma);
            
            if(commandItem!=null){
                var klientTest=_repoKlienci.GetKlienciTestById(commandItem.IdKlienta);
                if(klientTest==null){
                    return NoContent();
                }
                ZleceniaTestReadDto inp=new ZleceniaTestReadDto();
                inp.IdKlienta=klientTest.IdKlienta;
                inp.Imie=klientTest.Imie;
                inp.Informacje=commandItem.Informacje;
                inp.KosztCzesci=commandItem.KosztCzesci;
                inp.KosztNaprawy=commandItem.KosztNaprawy;
                inp.Marka=commandItem.Marka;
                inp.Model=commandItem.Model;
                inp.Nazwisko=klientTest.Nazwisko;
                inp.NrTel=klientTest.NrTel;
                inp.Rma=commandItem.Rma;
                inp.Rodzaj=commandItem.Rodzaj;
                inp.Status=commandItem.Status;
                inp.Usterka=commandItem.Usterka;
                inp.DataWydania=commandItem.DataWydania;
                inp.DataPrzyjecia=commandItem.DataPrzyjecia;
                return Ok(_mapper.Map<ZleceniaTestReadDto>(inp));
            }
            else{
                return NotFound();
            }
        }


        //POST api/zleceniaTest
        [HttpPost]
        public ActionResult<ZleceniaTestReadDto>CreateZlecenieTest(ZleceniaTestCreateDto zleceniaTestCreateDto){
            var commandModel =_mapper.Map<ZleceniaTest>(zleceniaTestCreateDto);
            KlienciTest commandKlient= new KlienciTest();
            commandKlient.Imie=zleceniaTestCreateDto.Imie;
            commandKlient.Nazwisko=zleceniaTestCreateDto.Nazwisko;
            commandKlient.NrTel=zleceniaTestCreateDto.NrTel;
            //var commandKlient=_mapper.Map<KlienciTest>(zleceniaTestCreateDto);
            if(_repoKlienci.GetKlienciTestByPhNumer(commandKlient.NrTel,commandKlient.Imie,commandKlient.Nazwisko)==null){
                _repoKlienci.CreateKlienciTest(commandKlient);
                _repoKlienci.SaveChanges();
            }
            commandModel.IdKlienta=_repoKlienci.GetKlienciTestByPhNumer(commandKlient.NrTel,commandKlient.Imie,commandKlient.Nazwisko).IdKlienta;
            _repository.CreateZlecenieTest(commandModel);
            _repository.SaveChanges();
            var zleceniaTestReadDto = _mapper.Map<ZleceniaTestReadDto>(commandModel);
            return CreatedAtRoute(nameof(GetZlecenieTestByRma), new {Rma = zleceniaTestReadDto.Rma},zleceniaTestReadDto);
        }
    }
}