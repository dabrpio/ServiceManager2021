using System.Collections.Generic;
using CommandApi.Models;

namespace CommandApi.Data
{
    public interface IUsersRepo
    {
        bool SaveChanges();
        IEnumerable<User> GetAllUsers();
        User GetUserById(short? id);
        void CreateUser(User uzytkownik);
        void UpdateUser(User uzytkownikUpdate);
        void DeleteUser(User uzytkownik);
    }
}