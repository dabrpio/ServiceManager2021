using System.Collections.Generic;
using CommandApi.Models;

namespace CommandApi.Data
{
    public interface IEmployeeRepo
    {
        bool SaveChanges();
        IEnumerable<Employee> GetAllEmployee();
        Employee GetEmployeeById(int id);
        void CreateEmployee(Employee Employee);
        void UpdateEmployee(Employee EmployeeUpdate);
        void DeleteEmployee(Employee Employee);
        Employee GetEmployeeByLoginPasswordId(string login, string password, int? id);
    }
}