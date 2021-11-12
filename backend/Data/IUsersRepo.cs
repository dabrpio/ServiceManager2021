using System.Collections.Generic;
using CommandApi.Models;

namespace CommandApi.Data
{
    public interface IUsersRepo
    {
        bool SaveChanges();
        IEnumerable<User> GetAllUzytkownicy();
        User GetUzytkownicyById(short? id);
        void CreateUzytkownicy(User uzytkownik);
        void UpdateUzytkownicy(User uzytkownikUpdate);
        void DeleteUzytkownicy(User uzytkownik);
    }
}