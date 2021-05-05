
using System;
using System.ComponentModel.DataAnnotations;

namespace CommandApi.Dtos
{
    public partial class ZlecenieCreateDto
    {
        [StringLength(20)]
        public string Imie { get; set; }

        [StringLength(30)]
        public string Nazwisko { get; set; }

        public int? NrTel { get; set; }

        [StringLength(20)]
        public string Rodzaj { get; set; }

        [StringLength(20)]
        public string Marka { get; set; }

        [StringLength(20)]
        public string Model { get; set; }

        [StringLength(300)]
        public string Usterka { get; set; }

        [StringLength(20)]
        public string Status { get; set; }

        public decimal? KosztNaprawy { get; set; }

        public decimal? KosztCzesci { get; set; }

        [StringLength(100)]
        public string Informacje { get; set; }
    }
}