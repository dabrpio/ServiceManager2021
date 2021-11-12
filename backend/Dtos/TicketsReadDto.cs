
using System;

namespace CommandApi.Dtos
{
    public partial class TicketsReadDto
    {
        public short Rma { get; set; }
        public DateTime Date { get; set; }
        public string Glitch { get; set; }
        public decimal? RepairCost { get; set; }
        public decimal? PartsCost { get; set; }
        public DateTime? IssueDate { get; set; }
        public string Status { get; set; }
        public string Information { get; set; }
        public short? IdCompany { get; set; }


        //client
        public short IdClient { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public int PhoneNumber { get; set; }
        public string CompanyName { get; set; }
        public long? Nip { get; set; }
        public string EMail { get; set; }

        
        //device
        public short IdDevices { get; set; }
        public string Type { get; set; }
        public string Brand { get; set; }
        public string Model { get; set; }
    }
}