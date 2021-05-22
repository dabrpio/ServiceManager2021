using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace CommandApi.Models
{
    [Table("zlecenia")]
    public partial class Zlecenia
    {
        [Key]
        [Column("RMA")]
        public int Rma { get; set; }
        [Column("id_klienta")]
        public short? IdKlienta { get; set; }
        [Column("data_przyjecia", TypeName = "datetime")]
        public DateTime? DataPrzyjecia { get; set; }
        [Column("rodzaj")]
        [StringLength(255)]
        public string Rodzaj { get; set; }
        [Column("marka")]
        [StringLength(255)]
        public string Marka { get; set; }
        [Column("model")]
        [StringLength(255)]
        public string Model { get; set; }
        [Column("usterka")]
        [StringLength(255)]
        public string Usterka { get; set; }
        [Column("koszt_naprawy", TypeName = "money")]
        public decimal? KosztNaprawy { get; set; }
        [Column("koszt_czesci", TypeName = "money")]
        public decimal? KosztCzesci { get; set; }
        [Column("data_wydania", TypeName = "datetime")]
        public DateTime? DataWydania { get; set; }
        [Column("status")]
        [StringLength(255)]
        public string Status { get; set; }
        [Column("informacje")]
        [StringLength(255)]
        public string Informacje { get; set; }
    }
}
