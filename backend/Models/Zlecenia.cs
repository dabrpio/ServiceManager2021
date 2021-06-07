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
        public short Rma { get; set; }
        [Column("id_klienta")]
        public short IdKlienta { get; set; }
        [Column("data_przyjecia", TypeName = "datetime")]
        public DateTime DataPrzyjecia { get; set; }
        [Required]
        [Column("rodzaj")]
        [StringLength(255)]
        public string Rodzaj { get; set; }
        [Required]
        [Column("marka")]
        [StringLength(255)]
        public string Marka { get; set; }
        [Required]
        [Column("model")]
        [StringLength(255)]
        public string Model { get; set; }
        [Required]
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

        [ForeignKey(nameof(IdKlienta))]
        [InverseProperty(nameof(Klienci.Zlecenia))]
        public virtual Klienci IdKlientaNavigation { get; set; }
    }
}
