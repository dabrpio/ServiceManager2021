using System;


namespace CommandApi.Dtos
{
    public partial class KlienciReadDto
    {
        public short IdKlienta { get; set; }
        public string Imie { get; set; }
        public string Nazwisko { get; set; }
        public int? NrTel { get; set; }
        public string Nazwa { get; set; }
        public long? Nip { get; set; }
        public string EMail { get; set; }
        public System.Collections.Generic.List<int> Rmas {get;set;}
    }
}