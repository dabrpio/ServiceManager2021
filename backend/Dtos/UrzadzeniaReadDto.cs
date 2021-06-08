using System;


namespace CommandApi.Dtos
{
    public partial class UrzadzeniaReadDto
    {
        public short Id { get; set; }
        public string Type { get; set; }
        public string Brand { get; set; }
        public string Model { get; set; }
    }
}