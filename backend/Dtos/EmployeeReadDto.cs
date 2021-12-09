using System;

namespace CommandApi.Dtos
{
    public partial class EmployeeReadDto
    {
        public int IdEmployee { get; set; }
        public int IdCompany { get; set; }
        public int Type { get; set; }
        public string Login { get; set; }
       // public string Password { get; set; }
        public string PhoneNumber { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string CompanyName { get; set; }
        public string Nip { get; set; }

    }
}