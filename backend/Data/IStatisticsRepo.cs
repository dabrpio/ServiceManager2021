using System.Collections.Generic;
using CommandApi.Models;
using CommandApi.Dtos;


namespace CommandApi.Data
{
    
    public struct Money1
    {
        public Money1(decimal? x, decimal? y)
        {
            X = x;
            Y = y;
        }
        public decimal? X { get; set; }
        public decimal? Y { get; set; }
    }
    
    public interface IStatisticsRepo
    {
        IEnumerable<Money1> GetAllMoneyWeek();
        IEnumerable<Money1> GetAllMoneyMonth();
        IEnumerable<Money1> GetAllMoneyYear();

        int CountTicketsWeek();
        int CountTicketsMonth();
        int CountTicketsYear();

        Ticket GetBestTicketWeek(int multi);
        Ticket GetBestTicketMonth(int multi);
        Ticket GetBestTicketYear(int multi);
    }
}