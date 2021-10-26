using AutoMapper;
using CommandApi.Dtos;
using CommandApi.Models;

namespace CommandApi.Profiles
{
    public class DevicesProfile : Profile
    {
        public DevicesProfile(){
            //Source -> target
           /* CreateMap<Zlecenia,Device>();
            CreateMap<Device,Device>();*/
            CreateMap<Device, DevicesReadDto>();

            CreateMap<DevicesCreateDto,Device>();

        }
    }
}