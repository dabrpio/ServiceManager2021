
using System;

namespace CommandApi.Dtos
{
    public partial class TicketsReadDto
    {
        public int Rma { get; set; }
        public DateTime BeginDate { get; set; }
        public string Glitch { get; set; }
        public decimal? RepairCost { get; set; }
        public decimal? PartsCost { get; set; }
        public DateTime? EndDate { get; set; }
        public string Status { get; set; }
        public string Information { get; set; }
        public int IdCompany { get; set; }


        //client
        public int IdClient { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string PhoneNumber { get; set; }
       // public string CompanyName { get; set; }
      //  public string Nip { get; set; }
        public string Email { get; set; }

        
        //device
        public int IdDevice { get; set; }
        public string Type { get; set; }
        public string Brand { get; set; }
        public string Model { get; set; }
    }
}