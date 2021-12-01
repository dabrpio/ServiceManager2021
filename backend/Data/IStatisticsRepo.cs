using System.Collections.Generic;
using CommandApi.Models;
using CommandApi.Dtos;
using System;

namespace CommandApi.Data
{
    
    public struct Stat1
    {
        public Stat1(int year, int month, int day, decimal? profit)
        {
            Year = year;
            Month = month;
            Day=day;
            Profit=profit;
        }

        public int Year { get; set; }
        public int Month { get; set; }
        public int Day { get; set; }
        public decimal? Profit { get; set; }
    }
    public struct Stat2
    {

        public Stat2(DateTime beginDate, decimal? profit)
        {
            BeginDate=beginDate;
            Profit=profit;
        }
        public DateTime BeginDate { get; set; }
        public decimal? Profit { get; set; }
    }



    
    public interface IStatisticsRepo
    {
        IEnumerable<Stat1> GetAllMoney(int multi);

        IEnumerable<Stat1> CountTickets(int multi);

        Ticket GetBestTicket(int multi);

    }
}