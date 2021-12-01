using System;
using System.Collections.Generic;
using System.Linq;
using CommandApi.Models;
using CommandApi.Dtos;

namespace CommandApi.Data
{
    public class SqlStatisticsRepo : IStatisticsRepo
    {
        private readonly SM2021Context _context;

        public SqlStatisticsRepo(SM2021Context context)
        {
            _context = context;
        }
        public IEnumerable<Stat1> GetAllMoney(int multi)
        {
            IEnumerable<Stat1> commandItem = _context.Tickets.Where(p=>p.BeginDate>DateTime.Now.AddDays(-1*multi)).Select(p=>new Stat1{Year=p.BeginDate.Year, Month=p.BeginDate.Month, Day=p.BeginDate.Day, Profit=((p.RepairCost-p.PartsCost)*Controllers.StatisticsController.VAT)}).GroupBy(x => new { x.Year, x.Month, x.Day }, (key, group) => new Stat1{Year = key.Year, Month = key.Month, Day= key.Day, Profit = group.Sum(k => k.Profit)}).ToList();            
            return commandItem;
        }


        public IEnumerable<Stat1> CountTickets(int multi){
            //var commandItem =  _context.Tickets.Where(p=>p.BeginDate>DateTime.Now.AddDays(-7)).Count();
            IEnumerable<Stat1> commandItem =_context.Tickets.Where(p=>p.BeginDate>DateTime.Now.AddDays(-1*multi)).Select(p=>new Stat1{Year=p.BeginDate.Year, Month=p.BeginDate.Month, Day=p.BeginDate.Day, Profit=(decimal)1}).GroupBy(x => new { x.Year, x.Month, x.Day }, (key, group) => new Stat1{Year = key.Year, Month = key.Month, Day= key.Day, Profit = group.Sum(k => k.Profit)}).ToList();            

            return commandItem;
        }

        public Ticket GetBestTicket(int multi){
            var commandTicket = _context.Tickets.Where(p=>p.BeginDate>DateTime.Now.AddDays(-multi)).Max(x=>(x.RepairCost-x.PartsCost)*CommandApi.Controllers.StatisticsController.VAT);
            return _context.Tickets.Where(p=>p.BeginDate>DateTime.Now.AddDays(-multi) && (p.RepairCost-p.PartsCost)*CommandApi.Controllers.StatisticsController.VAT == commandTicket).FirstOrDefault();
        }
      
    }
}