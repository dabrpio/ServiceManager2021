using AutoMapper;
using CommandApi.Dtos;
using CommandApi.Models;

namespace CommandApi.Profiles
{
    public class ZleceniaProfile : Profile
    {
        public ZleceniaProfile(){
            //Source -> target
            CreateMap<Zlecenie, ZlecenieReadDto>();
            CreateMap<ZlecenieCreateDto,Zlecenie>();
        }
    }
}