using System.Collections.Generic;
using CommandApi.Models;

namespace CommandApi.Data
{
    public interface IKlienciRepo
    {
        bool SaveChanges();
        IEnumerable<Klienci> GetAllKlienci();
        Klienci GetKlienciById(short? id);
        Klienci GetKlienciByPhNumer(int? Phone, string Imie, string Nazwisko);
        IEnumerable<Klienci> GetKlienciByName(string imie);
        IEnumerable<Klienci> GetKlienciBySur(string nazwisko);
        void CreateKlienci(Klienci klient);
    }
}