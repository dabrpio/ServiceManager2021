
using System;
using System.ComponentModel.DataAnnotations;

namespace CommandApi.Dtos
{
    public partial class TicketsCreateDto
    {
        public DateTime BeginDate { get; set; }
        [Required]
        [StringLength(255)]
        public string Glitch { get; set; }
        public decimal? RepairCost { get; set; }
        public decimal? PartsCost { get; set; }
        public DateTime? EndDate { get; set; }
        [StringLength(255)]
        public string Status { get; set; }
        [StringLength(255)]
        public string Information { get; set; }
        public int? IdCompany { get; set; }


        //client
        [Required]
        [StringLength(255)]
        public string Name { get; set; }
        [Required]
        [StringLength(255)]
        public string Surname { get; set; }
        [Required]
        [StringLength(20)]
        public string PhoneNumber { get; set; }
        [StringLength(255)]
        public string CompanyName { get; set; }
        [StringLength(20)]
        public string Nip { get; set; }
        [StringLength(255)]
        public string Email { get; set; }

        
        //device
        [Required]
        [StringLength(50)]
        public string Type { get; set; }
        [Required]
        [StringLength(50)]
        public string Brand { get; set; }
        [Required]
        [StringLength(50)]
        public string Model { get; set; }
    }
}