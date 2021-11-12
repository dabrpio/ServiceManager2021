using System;
using System.Collections.Generic;
using System.Linq;
using CommandApi.Models;

namespace CommandApi.Data
{
    public class SqlTicketsRepo : ITicketsRepo
    {
        private readonly SM2021Context _context;

        public SqlTicketsRepo(SM2021Context context)
        {
            _context = context;
            _context.Clients.ToList();
            _context.Devices.ToList();
        }

        public void CreateTicket(Ticket zlecenie)
        {
            if(zlecenie==null){
                throw new ArgumentNullException(nameof(zlecenie));
            }
            _context.Tickets.Add(zlecenie);
        }

        public IEnumerable<Ticket> GetAllTickets()
        {
            return _context.Tickets.OrderByDescending(p=>p.Rma).ToList();
        }

        public IEnumerable<Ticket> Get25Tickets()
        {
            return _context.Tickets.OrderByDescending(p=>p.Rma).Take(25).ToList();
        }

        public Ticket GetTicketsByRma(short Rma)
        {
            return _context.Tickets.FirstOrDefault(p=>p.Rma==Rma);
        }

        public bool SaveChanges()
        {
           return (_context.SaveChanges()>=0);
        }

        public void UpdateTicket(Ticket zleceniaUpdate){
             //nothing
        }

        public void DeleteTicket(Ticket zlecenie)
        {
            if(zlecenie==null){
                throw new ArgumentNullException(nameof(zlecenie));
            }
            _context.Tickets.Remove(zlecenie);
        }
    }
}