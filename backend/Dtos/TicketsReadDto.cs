
using System;

namespace CommandApi.Dtos
{
    public partial class TicketsReadDto
    {
        public short Rma { get; set; }
        public short IdClient { get; set; }
        public short IdDevices { get; set; }
        public DateTime Date { get; set; }
        public string Glitch { get; set; }
        public decimal? RepairCost { get; set; }
        public decimal? PartsCost { get; set; }
        public DateTime? IssueDate { get; set; }
        public string Status { get; set; }
        public string Information { get; set; }
        public short? IdCompany { get; set; }

    }
}