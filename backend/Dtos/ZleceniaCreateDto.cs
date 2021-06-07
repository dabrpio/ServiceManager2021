
using System;
using System.ComponentModel.DataAnnotations;

namespace CommandApi.Dtos
{
    public partial class ZleceniaCreateDto
    {
        [Required]
        [StringLength(255)]
        public string Rodzaj { get; set; }
        [Required]
        [StringLength(255)]
        public string Marka { get; set; }
        [Required]
        [StringLength(255)]
        public string Model { get; set; }
        [Required]
        [StringLength(255)]
        public string Usterka { get; set; }
        public decimal? KosztNaprawy { get; set; }
        public decimal? KosztCzesci { get; set; }
        public DateTime? DataWydania { get; set; }
        [StringLength(255)]
        public string Status { get; set; }
        [StringLength(255)]
        public string Informacje { get; set; }
        [Required]
        [StringLength(255)]
        public string Imie { get; set; }
        [Required]
        [StringLength(255)]
        public string Nazwisko { get; set; }
        public int NrTel { get; set; }
        [StringLength(255)]
        public string Nazwa { get; set; }
        public long? Nip { get; set; }
        [StringLength(255)]
        public string EMail { get; set; }

    }
}