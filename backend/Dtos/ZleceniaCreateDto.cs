
using System;
using System.ComponentModel.DataAnnotations;

namespace CommandApi.Dtos
{
    public partial class ZleceniaCreateDto
    {
        [StringLength(255)]
        public string Rodzaj { get; set; }

        [StringLength(255)]
        public string Marka { get; set; }

        [StringLength(255)]
        public string Model { get; set; }

        [StringLength(255)]
        public string Usterka { get; set; }

        public decimal? KosztNaprawy { get; set; }

        public decimal? KosztCzesci { get; set; }

        [StringLength(255)]
        public string Status { get; set; }

        [StringLength(255)]
        public string Informacje { get; set; }

        [StringLength(255)]
        public string Imie { get; set; }

        [StringLength(255)]
        public string Nazwisko { get; set; }

        public int? NrTel { get; set; }
    }
}