using System.Collections.Generic;
using CommandApi.Models;

namespace CommandApi.Data
{
    public interface ITicketsRepo
    {
        bool SaveChanges();
        IEnumerable<Ticket> GetAllTickets();
        Ticket GetTicketsByRma(int Rma);
        void CreateTicket(Ticket ticket);
        IEnumerable<Ticket> Get25Tickets();
        void UpdateTicket(Ticket ticketUpdate);
        void DeleteTicket(Ticket ticket);
    }
}