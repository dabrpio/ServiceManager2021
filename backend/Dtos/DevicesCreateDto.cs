using System;
using System.ComponentModel.DataAnnotations;


namespace CommandApi.Dtos
{
    public partial class DevicesCreateDto
    {
        [Required]
        [StringLength(255)]
        public string Type { get; set; }
        [Required]
        [StringLength(255)]
        public string Brand { get; set; }
        [Required]
        [StringLength(255)]
        public string Model { get; set; }
    }
}