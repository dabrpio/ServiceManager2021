using System;
using System.ComponentModel.DataAnnotations;

namespace CommandApi.Dtos
{
    public partial class UzytkownicyCreateDto
    {
        public short RodzajUzytkownika { get; set; }
        
        [Required]
        [StringLength(30)]
        public string Login { get; set; }
        
        [Required]
        [StringLength(30)]
        public string Haslo { get; set; }
        
        public int? NrTel { get; set; }
    }
}