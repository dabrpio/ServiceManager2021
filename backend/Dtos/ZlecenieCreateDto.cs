
using System;
using System.ComponentModel.DataAnnotations;

namespace CommandApi.Dtos
{
    public partial class ZlecenieCreateDto
    {
        [Key]
        public short Rma { get; set; }
        [MaxLength(20)]
        public string Imie { get; set; }
        [MaxLength(30)]
        public string Nazwisko { get; set; }
        public int? NrTel { get; set; }
        public DateTime? DataPrzyjecia { get; set; }
        [MaxLength(20)]
        public string Rodzaj { get; set; }
        [MaxLength(20)]
        public string Marka { get; set; }
        [MaxLength(20)]
        public string Model { get; set; }
        [MaxLength(300)]
        public string Usterka { get; set; }
        [MaxLength(20)]
        public string Status { get; set; }
        public decimal? KosztNaprawy { get; set; }
        public decimal? KosztCzesci { get; set; }
        [MaxLength(100)]
        public string Informacje { get; set; }
    }
}