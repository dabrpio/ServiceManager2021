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
        public IEnumerable<Money1> GetAllMoneyWeek()
        {
            IEnumerable<Money1> commandItem = _context.Tickets.Where(p=>p.BeginDate>DateTime.Now.AddDays(-7)).Select(p=>new Money1{X=p.RepairCost,Y=p.PartsCost}).ToList();
            return commandItem;
        }

        public IEnumerable<Money1> GetAllMoneyMonth()
        {
            IEnumerable<Money1> commandItem = _context.Tickets.Where(p=>p.BeginDate>DateTime.Now.AddMonths(-1)).Select(p=>new Money1{X=p.RepairCost,Y=p.PartsCost}).ToList();
            return commandItem;
        }
        
        public IEnumerable<Money1> GetAllMoneyYear()
        {
            IEnumerable<Money1> commandItem = _context.Tickets.Where(p=>p.BeginDate>DateTime.Now.AddYears(-1)).Select(p=>new Money1{X=p.RepairCost,Y=p.PartsCost}).ToList();
            return commandItem;
        }

        public int CountTicketsWeek(){
            return _context.Tickets.Where(p=>p.BeginDate>DateTime.Now.AddDays(-7)).ToList().Count();
        }

        public int CountTicketsMonth(){
            return _context.Tickets.Where(p=>p.BeginDate>DateTime.Now.AddMonths(-1)).ToList().Count();
        }

        public int CountTicketsYear(){
            return _context.Tickets.Where(p=>p.BeginDate>DateTime.Now.AddYears(-1)).ToList().Count();
        }
        public Ticket GetBestTicketWeek(int multi){
            var commandTicket = _context.Tickets.Where(p=>p.BeginDate>DateTime.Now.AddDays(-7*multi)&& p.BeginDate<DateTime.Now.AddDays(-7*(multi-1))).Max(x=>(x.RepairCost-x.PartsCost)*CommandApi.Controllers.StatisticsController.VAT);
            return _context.Tickets.Where(p=>p.BeginDate>DateTime.Now.AddDays(-7*multi)&& p.BeginDate<DateTime.Now.AddDays(-7*(multi-1)) && (p.RepairCost-p.PartsCost)*CommandApi.Controllers.StatisticsController.VAT == commandTicket).FirstOrDefault();
        }
        public Ticket GetBestTicketMonth(int multi){
            var commandTicket = _context.Tickets.Where(p=>p.BeginDate>DateTime.Now.AddMonths(-1*multi) && p.BeginDate<DateTime.Now.AddMonths(-1*(multi-1))).Max(x=>(x.RepairCost-x.PartsCost)*CommandApi.Controllers.StatisticsController.VAT);
            return _context.Tickets.Where(p=>p.BeginDate>DateTime.Now.AddMonths(-1*multi) && p.BeginDate<DateTime.Now.AddMonths(-1*(multi-1)) && (p.RepairCost-p.PartsCost)*CommandApi.Controllers.StatisticsController.VAT == commandTicket).FirstOrDefault();
        }
        public Ticket GetBestTicketYear(int multi){
            var commandTicket = _context.Tickets.Where(p=>p.BeginDate>DateTime.Now.AddYears(-1*multi)&& p.BeginDate<DateTime.Now.AddYears(-1*(multi-1))).Max(x=>(x.RepairCost-x.PartsCost)*CommandApi.Controllers.StatisticsController.VAT);
            return _context.Tickets.Where(p=>p.BeginDate>DateTime.Now.AddYears(-1*multi)&& p.BeginDate<DateTime.Now.AddYears(-1*(multi-1)) && (p.RepairCost-p.PartsCost)*CommandApi.Controllers.StatisticsController.VAT == commandTicket).FirstOrDefault();
        }

    }
}