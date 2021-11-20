using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace CommandApi.Models
{
    [Table("devices")]
    public partial class Device
    {
        public Device()
        {
            Tickets = new HashSet<Ticket>();
        }

        [Key]
        [Column("idDevice")]
        public int IdDevice { get; set; }
        [Required]
        [Column("type")]
        [StringLength(50)]
        public string Type { get; set; }
        [Required]
        [Column("brand")]
        [StringLength(50)]
        public string Brand { get; set; }
        [Required]
        [Column("model")]
        [StringLength(50)]
        public string Model { get; set; }

        [InverseProperty(nameof(Ticket.IdDeviceNavigation))]
        public virtual ICollection<Ticket> Tickets { get; set; }
    }
}
