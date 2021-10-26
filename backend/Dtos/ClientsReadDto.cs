using System;


namespace CommandApi.Dtos
{
    public partial class ClientsReadDto
    {
        public short IdClient { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public int PhoneNumber { get; set; }
        public string CompanyName { get; set; }
        public long? Nip { get; set; }
        public string EMail { get; set; }
        public System.Collections.Generic.List<int> Rmas {get;set;}
    }
}