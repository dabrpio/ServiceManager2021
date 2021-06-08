using AutoMapper;
using CommandApi.Dtos;
using CommandApi.Models;

namespace CommandApi.Profiles
{
    public class UrzadzeniaProfile : Profile
    {
        public UrzadzeniaProfile(){
            //Source -> target
           /* CreateMap<Zlecenia,Urzadzenia>();
            CreateMap<Urzadzenia,Urzadzenia>();*/
            CreateMap<Urzadzenia, UrzadzeniaReadDto>();

            CreateMap<UrzadzeniaCreateDto,Urzadzenia>();

        }
    }
}