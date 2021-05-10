using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace CommandApi.Models
{
    [Keyless]
    [Table("uzytkownicy")]
    public partial class Uzytkownicy
    {
        [Column("id")]
        public short Id { get; set; }
        [Column("rodzaj_uzytkownika")]
        public short RodzajUzytkownika { get; set; }
        [Required]
        [Column("login")]
        [StringLength(30)]
        public string Login { get; set; }
        [Required]
        [Column("haslo")]
        [StringLength(30)]
        public string Haslo { get; set; }
        [Column("nr_tel")]
        public int? NrTel { get; set; }
    }
}
