using System;
using System.Collections.Generic;
using System.Linq;
using CommandApi.Models;

namespace CommandApi.Data
{
    public class SqlUsersRepo : IUsersRepo
    {
        private readonly SM2021Context _context;

        public SqlUsersRepo(SM2021Context context)
        {
            _context = context;
        }

        public void CreateUser(User uzytkownik)
        {
            if(uzytkownik==null){
                throw new ArgumentNullException(nameof(uzytkownik));
            }
            _context.Users.Add(uzytkownik);
        }

        public void DeleteUser(User uzytkownik)
        {
           if(uzytkownik==null){
                throw new ArgumentNullException(nameof(uzytkownik));
            }
            _context.Users.Remove(uzytkownik);
        }

        public IEnumerable<User> GetAllUsers()
        {
            return _context.Users.OrderByDescending(p=>p.Id).ToList();
        }

        public User GetUserById(short? id)
        {
            return _context.Users.FirstOrDefault(p=>p.Id==id);
        }

        public User GetUserByLoginPasswordId(string login, string password, short? id)
        {
            return _context.Users.FirstOrDefault(p=>p.IdCompany==id && p.Login==login && p.Password = password);
        }

        public bool SaveChanges()
        {
           return (_context.SaveChanges()>=0);
        }

        public void UpdateUser(User uzytkownicyUpdate)
        {
            //nothing
        }

    }
}