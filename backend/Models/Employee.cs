using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace CommandApi.Models
{
    [Table("employees")]
    public partial class Employee
    {
        [Key]
        [Column("idEmployee")]
        public int IdEmployee { get; set; }
        [Column("idCompany")]
        public int IdCompany { get; set; }
        [Column("type")]
        public int Type { get; set; }
        [Required]
        [Column("login")]
        [StringLength(255)]
        public string Login { get; set; }
        [Required]
        [Column("password")]
        [StringLength(255)]
        public string Password { get; set; }
        [Required]
        [Column("phoneNumber")]
        [StringLength(50)]
        public string PhoneNumber { get; set; }
        [Required]
        [Column("name")]
        [StringLength(255)]
        public string Name { get; set; }
        [Required]
        [Column("surname")]
        [StringLength(255)]
        public string Surname { get; set; }
        [Column("companyName")]
        [StringLength(255)]
        public string CompanyName { get; set; }
        [Column("NIP")]
        [StringLength(10)]
        public string Nip { get; set; }
    }
}
