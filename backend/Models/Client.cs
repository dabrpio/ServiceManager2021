using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace CommandApi.Models
{
    [Table("clients")]
    public partial class Client
    {
        public Client()
        {
            Tickets = new HashSet<Ticket>();
        }

        [Key]
        [Column("idClient")]
        public int IdClient { get; set; }
        [Required]
        [Column("name")]
        [StringLength(255)]
        public string Name { get; set; }
        [Required]
        [Column("surname")]
        [StringLength(255)]
        public string Surname { get; set; }
        [Column("phoneNumber")]
        [StringLength(50)]
        public string PhoneNumber { get; set; }
        [Column("email")]
        [StringLength(255)]
        public string Email { get; set; }

        [InverseProperty(nameof(Ticket.IdClientNavigation))]
        public virtual ICollection<Ticket> Tickets { get; set; }
    }
}
