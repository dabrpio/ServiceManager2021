using System;

namespace CommandApi.Dtos
{
    public partial class UsersReadDto
    {
        public short Id { get; set; }
        public short? IdCompany { get; set; }
        public short Type { get; set; }
        public string Login { get; set; }
        public string Password { get; set; }
        public int? PhoneNumber { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }

    }
}