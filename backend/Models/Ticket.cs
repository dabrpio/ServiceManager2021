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
        public short Rma { get; set; }
        [Column("id_client")]
        public short IdClient { get; set; }
        [Column("id_devices")]
        public short IdDevices { get; set; }
        [Column("date", TypeName = "datetime")]
        public DateTime Date { get; set; }
        [Required]
        [Column("glitch")]
        [StringLength(255)]
        public string Glitch { get; set; }
        [Column("repair_cost", TypeName = "money")]
        public decimal? RepairCost { get; set; }
        [Column("parts_cost", TypeName = "money")]
        public decimal? PartsCost { get; set; }
        [Column("issue_date", TypeName = "datetime")]
        public DateTime? IssueDate { get; set; }
        [Column("status")]
        [StringLength(255)]
        public string Status { get; set; }
        [Column("information")]
        [StringLength(255)]
        public string Information { get; set; }
        [Column("id_company")]
        public short? IdCompany { get; set; }

        [ForeignKey(nameof(IdClient))]
        [InverseProperty(nameof(Client.Tickets))]
        public virtual Client IdClientNavigation { get; set; }
        public virtual User IdCompanyNavigation { get; set; }
        [ForeignKey(nameof(IdDevices))]
        [InverseProperty(nameof(Device.Tickets))]
        public virtual Device IdDevicesNavigation { get; set; }
    }
}
