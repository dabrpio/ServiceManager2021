using System;
using System.ComponentModel.DataAnnotations;

namespace CommandApi.Dtos
{
    public partial class ClientsCreateDto
    {
        [Required]
        [StringLength(255)]
        public string Name { get; set; }
        [Required]
        [StringLength(255)]
        public string Surname { get; set; }
        public int PhoneNumber { get; set; }
        [StringLength(255)]
        public string CompanyName { get; set; }
        public long? Nip { get; set; }
        [StringLength(255)]
        public string EMail { get; set; }
    }
}