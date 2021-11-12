using System;
using System.ComponentModel.DataAnnotations;

namespace CommandApi.Dtos
{
    public partial class UsersCreateDto
    {

        [Required]
        public short? IdCompany { get; set; }
        public short Type { get; set; }
        [Required]
        [StringLength(30)]
        public string Login { get; set; }
        [Required]
        [StringLength(30)]
        public string Password { get; set; }
        public int? PhoneNumber { get; set; }
        [StringLength(50)]
        public string Name { get; set; }
        [StringLength(50)]
        public string Surname { get; set; }

    }
}