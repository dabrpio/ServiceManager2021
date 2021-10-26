using System.Collections.Generic;
using CommandApi.Models;

namespace CommandApi.Data
{
    public interface IClientsRepo
    {
        bool SaveChanges();
        IEnumerable<Client> GetAllKlienci();
        Client GetKlienciById(short? id);
        Client GetKlienciByPhNumer(int? Phone, string Imie, string Nazwisko);
        IEnumerable<Client> GetKlienciByName(string imie);
        IEnumerable<Client> GetKlienciBySur(string nazwisko);
        void CreateKlienci(Client klient);
        void UpdateKlienci(Client klientUpdate);
        void DeleteKlienci(Client klient);
    }
}