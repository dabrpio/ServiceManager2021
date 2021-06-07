using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace CommandApi.Models
{
    [Table("urzadzenia")]
    public partial class Urzadzenia
    {
        [Key]
        [Column("id")]
        public short Id { get; set; }
        [Required]
        [Column("type")]
        [StringLength(50)]
        public string Type { get; set; }
        [Required]
        [Column("brand")]
        [StringLength(50)]
        public string Brand { get; set; }
        [Required]
        [Column("model")]
        [StringLength(50)]
        public string Model { get; set; }
    }
}
