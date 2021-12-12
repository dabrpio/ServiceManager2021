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

        public void CreateClient(Client client)
        {
            if(client==null){
                throw new ArgumentNullException(nameof(client));
            }
            _context.Clients.Add(client);
        }

        public IEnumerable<Client> GetAllClients()
        {
            return _context.Clients.OrderByDescending(p=>p.IdClient).ToList();
        }

        public Client GetClientById(int id)
        {
            return _context.Clients.FirstOrDefault(p=>p.IdClient==id);
        }
        public Client GetClientByPhNumer(string phone, string name, string surname)
        {
            return _context.Clients.FirstOrDefault(p=>p.PhoneNumber==phone&&p.Name==name&&p.Surname==surname);
        }

          public Client GetClientByEmail(string email, string name, string surname)
        {
            return _context.Clients.FirstOrDefault(p=>p.Email==email&&p.Name==name&&p.Surname==surname);
        }

        public IEnumerable<Client> GetKlienciByName(string name){
            return _context.Clients.OrderByDescending(p=>p.IdClient).Where(p=>p.Name.StartsWith(name)).ToList();
        }
        public IEnumerable<Client> GetKlienciBySur(string surname){
            return _context.Clients.OrderByDescending(p=>p.IdClient).Where(p=>p.Surname.StartsWith(surname)).ToList();
        }

        public bool SaveChanges()
        {
           return (_context.SaveChanges()>=0);
        }

        public void UpdateClient(Client client){
            //nothing
        }

        public void DeleteClient(Client client)
        {
            if(client==null){
                throw new ArgumentNullException(nameof(client));
            }
            _context.Clients.Remove(client);
        }
    }
}