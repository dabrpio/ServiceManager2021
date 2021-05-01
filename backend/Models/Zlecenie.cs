using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace CommandApi.Models
{
    [Table("zlecenia")]
    public partial class Zlecenie
    {
        [Key]
        [Column("RMA")]
        public short Rma { get; set; }
        [Column("imie")]
        [MaxLength(20)]
        public string Imie { get; set; }
        [Column("nazwisko")]
        [MaxLength(30)]
        public string Nazwisko { get; set; }
        [Column("nr_tel")]
        public int? NrTel { get; set; }
        [Column("data_przyjecia", TypeName = "date")]
        public DateTime? DataPrzyjecia { get; set; }
        [Column("rodzaj")]
        [MaxLength(20)]
        public string Rodzaj { get; set; }
        [Column("marka")]
        [MaxLength(20)]
        public string Marka { get; set; }
        [Column("model")]
        [MaxLength(20)]
        public string Model { get; set; }
        [Column("usterka")]
        [MaxLength(300)]
        public string Usterka { get; set; }
        [Column("status")]
        [MaxLength(20)]
        public string Status { get; set; }
        [Column("koszt_naprawy", TypeName = "money")]
        public decimal? KosztNaprawy { get; set; }
        [Column("koszt_czesci", TypeName = "money")]
        public decimal? KosztCzesci { get; set; }
        [Column("informacje")]
        [MaxLength(100)]
        public string Informacje { get; set; }
    }
}
