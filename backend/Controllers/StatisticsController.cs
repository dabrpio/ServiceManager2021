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
        public decimal VAT=(decimal)(0.74);
        private readonly IStatisticsRepo _repoStats;
        private readonly IMapper _mapper;

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
    }
}