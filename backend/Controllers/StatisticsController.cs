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
    [Route("api/statistics")]
    [ApiController]
    [ApiKeyAuth]
    public class StatisticsController:ControllerBase
    {

        private readonly IStatisticsRepo _repoStats;

        private readonly ITicketsRepo _repoTickets;
        private readonly IMapper _mapper;
        public static decimal VAT=(decimal)(0.77);
        public StatisticsController(IStatisticsRepo repository, ITicketsRepo repo2, IMapper mapper){
            _repoStats=repository;
            _repoTickets=repo2;
            _mapper=mapper;
        }
        
        //GET api/statistics/profit/{multi}
        [HttpGet("profit/{multi}")]
        public ActionResult<IEnumerable<Stat2>> GetAllMoney(int multi){
            var commandItems = _repoStats.GetAllMoney(multi);
            List<Stat2> ret= new List<Stat2>();
            List<Stat2> allDates=new List<Stat2>();
            foreach (var item in commandItems)
            {
                Stat2 inp = new Stat2();
                inp.BeginDate=new DateTime(item.Year,item.Month,item.Day);
                inp.Profit=item.Profit;
                ret.Add(inp);
            }
            DateTime nowsDate= new DateTime(DateTime.Now.Year,DateTime.Now.Month,DateTime.Now.Day);
            int j=ret.Count-1;
            for (int i = 0; i < multi; i++)
            {
                if(j>=0){
                    if(ret[j].BeginDate==nowsDate.AddDays(-i)){
                        allDates.Add(ret[j]);
                        j=j-1;
                    }
                    else{
                        allDates.Add(new Stat2{BeginDate = nowsDate.AddDays(-i), Profit=(decimal)0});
                    }
                }
                else{
                    allDates.Add(new Stat2{BeginDate = nowsDate.AddDays(-i), Profit=(decimal)0});
                }
            }
            return Ok(allDates);
        }
        

        //GET api/statistics/count/{multi}
        [HttpGet("count/{multi}")]
        public ActionResult<IEnumerable<Stat2>> GetCount(int multi){
            var commandItems = _repoStats.CountTickets(multi);
            List<Stat2> ret= new List<Stat2>();
            List<Stat2> allDates=new List<Stat2>();
            foreach (var item in commandItems)
            {
                Stat2 inp = new Stat2();
                inp.BeginDate=new DateTime(item.Year,item.Month,item.Day);
                inp.Profit=item.Profit;
                ret.Add(inp);
            }
            DateTime nowsDate= new DateTime(DateTime.Now.Year,DateTime.Now.Month,DateTime.Now.Day);
            int j=ret.Count-1;
            for (int i = 0; i < multi; i++)
            {
                if(j>=0){
                    if(ret[j].BeginDate==nowsDate.AddDays(-i)){
                        allDates.Add(ret[j]);
                        j=j-1;
                    }
                    else{
                        allDates.Add(new Stat2{BeginDate = nowsDate.AddDays(-i), Profit=(decimal)0});
                    }
                }
                else{
                    allDates.Add(new Stat2{BeginDate = nowsDate.AddDays(-i), Profit=(decimal)0});
                }
            }
            return Ok(allDates);
        }


        //GET api/statistics/best/{multi}
        [HttpGet("best/{multi}")]
        public ActionResult<TicketsReadDto> GetBestTicket(int multi){
            var commandItem = _repoStats.GetBestTicket(multi);
            var retu=_repoTickets.GetTicketsByRma(commandItem.Rma);
            TicketsReadDto inp= _mapper.Map<TicketsReadDto>(retu);
            _mapper.Map(retu.IdClientNavigation,inp);
            _mapper.Map(retu.IdDeviceNavigation,inp);
            return Ok(inp);
        }

        
        //GET api/statistics/topbrands
    }
}