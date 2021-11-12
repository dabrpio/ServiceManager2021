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

        public void CreateUzytkownicy(User uzytkownik)
        {
            if(uzytkownik==null){
                throw new ArgumentNullException(nameof(uzytkownik));
            }
            _context.Users.Add(uzytkownik);
        }

        public void DeleteUzytkownicy(User uzytkownik)
        {
           if(uzytkownik==null){
                throw new ArgumentNullException(nameof(uzytkownik));
            }
            _context.Users.Remove(uzytkownik);
        }

        public IEnumerable<User> GetAllUzytkownicy()
        {
            return _context.Users.OrderByDescending(p=>p.Id).ToList();
        }

        public User GetUzytkownicyById(short? id)
        {
            return _context.Users.FirstOrDefault(p=>p.Id==id);
        }

        public bool SaveChanges()
        {
           return (_context.SaveChanges()>=0);
        }

        public void UpdateUzytkownicy(User uzytkownicyUpdate)
        {
            //nothing
        }

    }
}