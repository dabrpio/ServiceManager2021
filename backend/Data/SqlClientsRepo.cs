using System;
using System.Collections.Generic;
using System.Linq;
using CommandApi.Models;

namespace CommandApi.Data
{
    public class SqlClientsRepo : IClientsRepo
    {
        private readonly SM2021Context _context;

        public SqlClientsRepo(SM2021Context context)
        {
            _context = context;
            _context.Tickets.ToList();
        }

        public void CreateClient(Client klient)
        {
            if(klient==null){
                throw new ArgumentNullException(nameof(klient));
            }
            _context.Clients.Add(klient);
        }

        public IEnumerable<Client> GetAllKlienci()
        {
            return _context.Clients.OrderByDescending(p=>p.IdClient).ToList();
        }

        public Client GetClientById(int id)
        {
            return _context.Clients.FirstOrDefault(p=>p.IdClient==id);
        }
        public Client GetClientByPhNumer(string phone, string imie, string nazwisko)
        {
            return _context.Clients.FirstOrDefault(p=>p.PhoneNumber==phone&&p.Name==imie&&p.Surname==nazwisko);
        }

        public IEnumerable<Client> GetKlienciByName(string imie){
            return _context.Clients.OrderByDescending(p=>p.IdClient).Where(p=>p.Name.StartsWith(imie)).ToList();
        }
        public IEnumerable<Client> GetKlienciBySur(string nazwisko){
            return _context.Clients.OrderByDescending(p=>p.IdClient).Where(p=>p.Surname.StartsWith(nazwisko)).ToList();
        }

        public bool SaveChanges()
        {
           return (_context.SaveChanges()>=0);
        }

        public void UpdateClient(Client klient){
            //nothing
        }

        public void DeleteClient(Client klient)
        {
            if(klient==null){
                throw new ArgumentNullException(nameof(klient));
            }
            _context.Clients.Remove(klient);
        }
    }
}