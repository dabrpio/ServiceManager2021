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
        [Column("id_client")]
        public short IdClient { get; set; }
        [Required]
        [Column("name")]
        [StringLength(255)]
        public string Name { get; set; }
        [Required]
        [Column("surname")]
        [StringLength(255)]
        public string Surname { get; set; }
        [Column("phone_number")]
        public int PhoneNumber { get; set; }
        [Column("company_name")]
        [StringLength(255)]
        public string CompanyName { get; set; }
        [Column("NIP")]
        public long? Nip { get; set; }
        [Column("e-mail")]
        [StringLength(255)]
        public string EMail { get; set; }

        [InverseProperty(nameof(Ticket.IdClientNavigation))]
        public virtual ICollection<Ticket> Tickets { get; set; }
    }
}
