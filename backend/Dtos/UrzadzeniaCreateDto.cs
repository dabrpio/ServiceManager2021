using System;
using System.ComponentModel.DataAnnotations;


namespace CommandApi.Dtos
{
    public partial class UrzadzeniaCreateDto
    {
        [Required]
        [StringLength(50)]
        public string Type { get; set; }
        [Required]
        [StringLength(50)]
        public string Brand { get; set; }
        [Required]
        [StringLength(50)]
        public string Model { get; set; }
    }
}