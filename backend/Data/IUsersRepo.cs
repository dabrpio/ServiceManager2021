using System.Collections.Generic;
using CommandApi.Models;

namespace CommandApi.Data
{
    public interface IUsersRepo
    {
        bool SaveChanges();
        IEnumerable<User> GetAllUsers();
        User GetUserById(short? id);
        void CreateUser(User user);
        void UpdateUser(User userUpdate);
        void DeleteUser(User user);
        User GetUserByLoginPasswordId(string login, string password, short? id);
    }
}