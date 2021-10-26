
using System;
using System.ComponentModel.DataAnnotations;

namespace CommandApi.Dtos
{
    public partial class TicketsCreateDto
    {
        public short IdClient { get; set; }
        public short IdDevices { get; set; }
        public DateTime Date { get; set; }
        [Required]
        [StringLength(255)]
        public string Glitch { get; set; }
        public decimal? RepairCost { get; set; }
        public decimal? PartsCost { get; set; }
        public DateTime? IssueDate { get; set; }
        [StringLength(255)]
        public string Status { get; set; }
        [StringLength(255)]
        public string Information { get; set; }
        public short? IdCompany { get; set; }

    }
}