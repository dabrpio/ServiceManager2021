using System.Collections.Generic;
using CommandApi.Models;

namespace CommandApi.Data
{
    public interface IUzytkownicyRepo
    {
        bool SaveChanges();
        IEnumerable<Uzytkownicy> GetAllUzytkownicy();
        Uzytkownicy GetUzytkownicyById(short? id);
        void CreateUzytkownicy(Uzytkownicy uzytkownik);
        void UpdateUzytkownicy(Uzytkownicy uzytkownikUpdate);
    }
}