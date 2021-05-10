using AutoMapper;
using CommandApi.Dtos;
using CommandApi.Models;

namespace CommandApi.Profiles
{
    public class ZleceniaTestProfile : Profile
    {
        public ZleceniaTestProfile(){
            //Source -> target
            CreateMap<ZleceniaTest, ZleceniaTestReadDto>();
            CreateMap<ZleceniaTestCreateDto,ZleceniaTest>();
            CreateMap<KlienciTest, ZleceniaTestReadDto>();
            CreateMap<ZleceniaTestCreateDto,KlienciTest>();
        }
    }
}