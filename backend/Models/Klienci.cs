using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace CommandApi.Models
{
    [Table("klienci")]
    public partial class Klienci
    {
        [Key]
        [Column("id_klienta")]
        public short IdKlienta { get; set; }
        [Column("imie")]
        [StringLength(255)]
        public string Imie { get; set; }
        [Column("nazwisko")]
        [StringLength(255)]
        public string Nazwisko { get; set; }
        [Column("nr_tel")]
        public int? NrTel { get; set; }
        [Column("nazwa")]
        [StringLength(255)]
        public string Nazwa { get; set; }
        [Column("NIP")]
        public double? Nip { get; set; }
        [Column("e-mail")]
        [StringLength(255)]
        public string EMail { get; set; }
    }
}
