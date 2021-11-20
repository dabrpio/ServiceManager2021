using System;


namespace CommandApi.Dtos
{
    public partial class ClientsReadDto
    {
        public int IdClient { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string PhoneNumber { get; set; }
        public string CompanyName { get; set; }
        public string Nip { get; set; }
        public string Email { get; set; }
        public System.Collections.Generic.List<int> Rmas {get;set;}
    }
}