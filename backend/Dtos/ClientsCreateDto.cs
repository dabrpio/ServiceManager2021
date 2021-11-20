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
        [StringLength(20)]
        public string PhoneNumber { get; set; }
        [StringLength(255)]
        public string CompanyName { get; set; }
        public string Nip { get; set; }
        [StringLength(255)]
        public string Email { get; set; }
    }
}