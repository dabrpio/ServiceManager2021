using AutoMapper;
using CommandApi.Dtos;
using CommandApi.Models;

namespace CommandApi.Profiles
{
    public class KlienciProfile : Profile
    {
        public KlienciProfile(){
            //Source -> target
            CreateMap<Klienci, KlienciReadDto>();

            CreateMap<KlienciCreateDto,Klienci>();
        }
    }
}