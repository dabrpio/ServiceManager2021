using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace CommandApi.Models
{
    [Table("users")]
    [Index(nameof(IdCompany), Name = "IX_users", IsUnique = true)]
    public partial class User
    {
        public User()
        {
            Tickets = new HashSet<Ticket>();
        }

        [Key]
        [Column("id")]
        public short Id { get; set; }
        [Required]
        [Column("id_company")]
        public short? IdCompany { get; set; }
        [Column("type")]
        public short Type { get; set; }
        [Required]
        [Column("login")]
        [StringLength(30)]
        public string Login { get; set; }
        [Required]
        [Column("password")]
        [StringLength(30)]
        public string Password { get; set; }
        [Column("phone_number")]
        public int? PhoneNumber { get; set; }
        [Column("name")]
        [StringLength(50)]
        public string Name { get; set; }
        [Column("surname")]
        [StringLength(50)]
        public string Surname { get; set; }

        public virtual ICollection<Ticket> Tickets { get; set; }
    }
}
