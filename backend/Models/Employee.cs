using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace CommandApi.Models
{
    [Table("employees")]
    [Index(nameof(IdCompany), Name = "IX_users", IsUnique = true)]
    public partial class Employee
    {
        public Employee()
        {
            Tickets = new HashSet<Ticket>();
        }

        [Key]
        [Column("idEmployee")]
        public int IdEmployee { get; set; }
        [Required]
        [Column("idCompany")]
        public int? IdCompany { get; set; }
        [Column("type")]
        public int Type { get; set; }
        [Required]
        [Column("login")]
        [StringLength(30)]
        public string Login { get; set; }
        [Required]
        [Column("password")]
        [StringLength(30)]
        public string Password { get; set; }
        [Required]
        [Column("phoneNumber")]
        [StringLength(20)]
        public string PhoneNumber { get; set; }
        [Required]
        [Column("name")]
        [StringLength(50)]
        public string Name { get; set; }
        [Required]
        [Column("surname")]
        [StringLength(50)]
        public string Surname { get; set; }

        public virtual ICollection<Ticket> Tickets { get; set; }
    }
}
