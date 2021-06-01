using AutoMapper;
using CommandApi.Dtos;
using CommandApi.Models;

namespace CommandApi.Profiles
{
    public class ZleceniaProfile : Profile
    {
        public ZleceniaProfile(){
            //Source -> target
            CreateMap<Zlecenia, ZleceniaReadDto>();
            CreateMap<ZleceniaCreateDto,Zlecenia>();
            CreateMap<ZleceniaCreateDto,Klienci>();
            CreateMap<Klienci,ZleceniaReadDto>();
        }
    }
}