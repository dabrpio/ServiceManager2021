using System;
using System.Collections.Generic;
using AutoMapper;
using CommandApi.Data;
using CommandApi.Dtos;
using CommandApi.Models;
using Microsoft.AspNetCore.Mvc;

namespace CommandApi.Controllers
{
    [Route("api/statistics")]
    [ApiController]
    public class StatisticsController:ControllerBase
    {

        private readonly IStatisticsRepo _repoStats;
        private readonly IMapper _mapper;
        public static decimal VAT=(decimal)(0.74);
        public StatisticsController(IStatisticsRepo repository, IMapper mapper){
            _repoStats=repository;
            _mapper=mapper;
        }
        
        //GET api/statistics
        [HttpGet("profit/week")]
        public ActionResult<decimal?> GetAllMoneyWeek(){
            var commandItems = _repoStats.GetAllMoneyWeek();
            decimal? sum= (decimal)0;
            foreach (var item in commandItems)
            {
                sum=sum+(item.X-item.Y)*VAT;
            }
            return Ok(sum);
        }
        

        //GET api/statistics
        [HttpGet("profit/month")]
        public ActionResult<decimal?> GetAllMoneyMonth(){
            var commandItems = _repoStats.GetAllMoneyMonth();
            decimal? sum= (decimal)0;
            foreach (var item in commandItems)
            {
                sum=sum+(item.X-item.Y)*VAT;
            }
            return Ok(sum);
        }
               
        //GET api/statistics
        [HttpGet("profit/year")]
        public ActionResult<decimal?> GetAllMoneyYear(){
            var commandItems = _repoStats.GetAllMoneyYear();
            decimal? sum= (decimal)0;
            foreach (var item in commandItems)
            {
                sum=sum+(item.X-item.Y)*VAT;
            }
            return Ok(sum);
        }


        //GET api/statistics
        [HttpGet("count/week")]
        public ActionResult<int> GetCountWeek(){
            int commandItems = _repoStats.CountTicketsWeek();
            return Ok(commandItems);
        }

        //GET api/statistics
        [HttpGet("count/month")]
        public ActionResult<int> GetCountMonth(){
            int commandItems = _repoStats.CountTicketsMonth();
            return Ok(commandItems);
        }
                
        //GET api/statistics
        [HttpGet("count/year")]
        public ActionResult<int> GetCountYear(){
            int commandItems = _repoStats.CountTicketsYear();
            return Ok(commandItems);
        }


        //GET api/statistics
        [HttpGet("best/week/{multi}")]
        public ActionResult<Ticket> GetBestTicketWeek(int multi){
            var commandItems = _repoStats.GetBestTicketWeek(multi);
            return Ok(commandItems);
        }
                
        //GET api/statistics
        [HttpGet("best/month/{multi}")]
        public ActionResult<Ticket> GetBestTicketMonth(int multi){
            var commandItems = _repoStats.GetBestTicketMonth(multi);
            return Ok(commandItems);
        }

        //GET api/statistics
        [HttpGet("best/year/{multi}")]
        public ActionResult<Ticket> GetBestTicketYear(int multi){
            var commandItems = _repoStats.GetBestTicketYear(multi);
            return Ok(commandItems);
        }
    }
}