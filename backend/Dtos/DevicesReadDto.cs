using System;


namespace CommandApi.Dtos
{
    public partial class DevicesReadDto
    {
        public int IdDevice { get; set; }
        public string Type { get; set; }
        public string Brand { get; set; }
        public string Model { get; set; }
    }
}