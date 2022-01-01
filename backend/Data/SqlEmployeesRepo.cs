using System;
using System.Collections.Generic;
using System.Linq;
using CommandApi.Models;

namespace CommandApi.Data
{
    public class SqlEmployeeRepo : IEmployeeRepo
    {
        private readonly SM2021Context _context;

        public SqlEmployeeRepo(SM2021Context context)
        {
            _context = context;
        }

        public void CreateEmployee(Employee uzytkownik)
        {
            if(uzytkownik==null){
                throw new ArgumentNullException(nameof(uzytkownik));
            }
            _context.Employees.Add(uzytkownik);
        }

        public void DeleteEmployee(Employee uzytkownik)
        {
           if(uzytkownik==null){
                throw new ArgumentNullException(nameof(uzytkownik));
            }
            _context.Employees.Remove(uzytkownik);
        }

        public IEnumerable<Employee> GetAllEmployee()
        {
            return _context.Employees.OrderByDescending(p=>p.IdEmployee).ToList();
        }

        public Employee GetEmployeeById(int id)
        {
            return _context.Employees.FirstOrDefault(p=>p.IdEmployee==id);
        }

        public Employee GetEmployeeByLoginPasswordId(string login, string password, int id)
        {
            return _context.Employees.FirstOrDefault(p=>p.IdCompany==id && p.Login==login && p.Password == password);
        }
        
        public Employee GetEmployeeByLoginPassword(string login, string password)
        {
            return _context.Employees.FirstOrDefault(p=>p.Login==login && p.Password == password);
        }

        public Employee GetEmployeeByApiKey(string apiKey){
            return _context.Employees.FirstOrDefault(p=>p.ApiKey==apiKey);
        }
        public bool SaveChanges()
        {
           return (_context.SaveChanges()>=0);
        }

        public void UpdateEmployee(Employee uzytkownicyUpdate)
        {
            //nothing
        }

    }
}