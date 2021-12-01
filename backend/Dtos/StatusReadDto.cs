
using System;

namespace CommandApi.Dtos
{
    public partial class StatusReadDto
    {
        public int Rma { get; set; }
        public string Glitch { get; set; }
        public decimal? RepairCost { get; set; }
        public string Status { get; set; }
        public string Brand { get; set; }
        public string Model { get; set; }
    }
}