using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace CommandApi.Models
{
    [Table("klienci_test")]
    public partial class KlienciTest
    {
        public KlienciTest()
        {
            ZleceniaTests = new HashSet<ZleceniaTest>();
        }

        [Key]
        [Column("id_klienta")]
        public short IdKlienta { get; set; }
        [Required]
        [Column("imie")]
        [StringLength(20)]
        public string Imie { get; set; }
        [Required]
        [Column("nazwisko")]
        [StringLength(30)]
        public string Nazwisko { get; set; }
        [Column("nr_tel")]
        public int? NrTel { get; set; }
        [Column("nazwa")]
        [StringLength(50)]
        public string Nazwa { get; set; }
        [Column("NIP")]
        public int? Nip { get; set; }
        [Column("e-mail")]
        [StringLength(100)]
        public string EMail { get; set; }

        [InverseProperty(nameof(ZleceniaTest.IdKlientaNavigation))]
        public virtual ICollection<ZleceniaTest> ZleceniaTests { get; set; }
    }
}
