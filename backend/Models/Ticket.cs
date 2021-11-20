using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace CommandApi.Models
{
    [Table("tickets")]
    public partial class Ticket
    {
        [Key]
        [Column("RMA")]
        public int Rma { get; set; }
        [Column("idClient")]
        public int IdClient { get; set; }
        [Column("idDevice")]
        public int IdDevice { get; set; }
        [Column("beginDate", TypeName = "datetime")]
        public DateTime BeginDate { get; set; }
        [Required]
        [Column("glitch")]
        [StringLength(255)]
        public string Glitch { get; set; }
        [Column("repairCost", TypeName = "money")]
        public decimal? RepairCost { get; set; }
        [Column("partsCost", TypeName = "money")]
        public decimal? PartsCost { get; set; }
        [Column("endDate", TypeName = "datetime")]
        public DateTime? EndDate { get; set; }
        [Column("status")]
        [StringLength(255)]
        public string Status { get; set; }
        [Column("information")]
        [StringLength(255)]
        public string Information { get; set; }
        [Column("idCompany")]
        public int? IdCompany { get; set; }

        [ForeignKey(nameof(IdClient))]
        [InverseProperty(nameof(Client.Tickets))]
        public virtual Client IdClientNavigation { get; set; }
        public virtual Employee IdCompanyNavigation { get; set; }
        [ForeignKey(nameof(IdDevice))]
        [InverseProperty(nameof(Device.Tickets))]
        public virtual Device IdDeviceNavigation { get; set; }
    }
}
