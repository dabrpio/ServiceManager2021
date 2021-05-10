using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace CommandApi.Models
{
    [Keyless]
    [Table("zmienne")]
    public partial class Zmienne
    {
        [StringLength(30)]
        public string Producent { get; set; }
        [StringLength(30)]
        public string Model { get; set; }
        [StringLength(100)]
        public string Usługa { get; set; }
    }
}
