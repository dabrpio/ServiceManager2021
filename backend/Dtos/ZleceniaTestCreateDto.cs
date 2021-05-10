
using System;
using System.ComponentModel.DataAnnotations;
using CommandApi.Models;

namespace CommandApi.Dtos
{
    public partial class ZleceniaTestCreateDto
    {
        public DateTime? DataPrzyjecia { get; set; }
        [Required]

        [StringLength(20)]
        public string Rodzaj { get; set; }
        [Required]

        [StringLength(20)]
        public string Marka { get; set; }
        [Required]

        [StringLength(20)]
        public string Model { get; set; }
        [Required]

        [StringLength(300)]
        public string Usterka { get; set; }

        public decimal KosztNaprawy { get; set; }

        public decimal? KosztCzesci { get; set; }

        public DateTime? DataWydania { get; set; }
        [Required]

        [StringLength(20)]
        public string Status { get; set; }

        [StringLength(100)]
        public string Informacje { get; set; }

        [Required]
        [StringLength(20)]
        public string Imie { get; set; }
        [Required]
        [StringLength(30)]
        public string Nazwisko { get; set; }
        public int? NrTel { get; set; }
    }
}