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
        void CreateKlienci(Klienci klient);
    }
}