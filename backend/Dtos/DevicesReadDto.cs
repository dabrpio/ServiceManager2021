using System;


namespace CommandApi.Dtos
{
    public partial class DevicesReadDto
    {
        public short IdDevices { get; set; }
        public string Type { get; set; }
        public string Brand { get; set; }
        public string Model { get; set; }
    }
}