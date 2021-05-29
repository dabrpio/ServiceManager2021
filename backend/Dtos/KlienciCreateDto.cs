using System;
using System.ComponentModel.DataAnnotations;

namespace CommandApi.Dtos
{
    public partial class KlienciCreateDto
    {
        [StringLength(255)]
        public string Imie { get; set; }

        [StringLength(255)]
        public string Nazwisko { get; set; }
        public int? NrTel { get; set; }
        [StringLength(255)]
        public string Nazwa { get; set; }
        public long? Nip { get; set; }
        [StringLength(255)]
        public string EMail { get; set; }
    }
}