using System;
using System.ComponentModel.DataAnnotations;

namespace CommandApi.Dtos
{
    public partial class EmployeeCreateDto
    {
        [Required]
        public int? IdCompany { get; set; }
        public int Type { get; set; }
        [Required]
        [StringLength(30)]
        public string Login { get; set; }
        [Required]
        [StringLength(30)]
        public string Password { get; set; }
        [Required]
        [StringLength(20)]
        public string PhoneNumber { get; set; }
        [Required]
        [StringLength(50)]
        public string Name { get; set; }
        [Required]
        [StringLength(50)]
        public string Surname { get; set; }


    }
}