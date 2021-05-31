using System;

namespace CommandApi.Dtos
{
    public partial class UzytkownicyReadDto
    {
        public short Id { get; set; }
        public short RodzajUzytkownika { get; set; }
        public string Login { get; set; }
        public string Haslo { get; set; }
        public int? NrTel { get; set; }
        public string Imie { get; set; }
        public string Nazwisko { get; set; }
    }
}