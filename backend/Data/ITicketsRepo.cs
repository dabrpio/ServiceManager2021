using System.Collections.Generic;
using CommandApi.Models;

namespace CommandApi.Data
{
    public interface ITicketsRepo
    {
        bool SaveChanges();
        IEnumerable<Ticket> GetAllTickets();
        Ticket GetTicketsByRma(int Rma);
        void CreateTicket(Ticket zlecenia);
        IEnumerable<Ticket> Get25Zlecenia();
        void UpdateTicket(Ticket zleceniaUpdate);
        void DeleteTicket(Ticket zlecenie);
    }
}