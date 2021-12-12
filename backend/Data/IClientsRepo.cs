using System.Collections.Generic;
using CommandApi.Models;

namespace CommandApi.Data
{
    public interface IClientsRepo
    {
        bool SaveChanges();
        IEnumerable<Client> GetAllClients();
        Client GetClientById(int id);
        Client GetClientByPhNumer(string Phone, string Imie, string Nazwisko);
        Client GetClientByEmail(string Email, string Imie, string Nazwisko);
        
        IEnumerable<Client> GetKlienciByName(string imie);
        IEnumerable<Client> GetKlienciBySur(string nazwisko);
        void CreateClient(Client klient);
        void UpdateClient(Client klientUpdate);
        void DeleteClient(Client klient);
    }
}