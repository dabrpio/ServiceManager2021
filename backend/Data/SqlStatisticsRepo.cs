using System;
using System.Collections.Generic;
using System.Linq;
using CommandApi.Models;

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
    }
}