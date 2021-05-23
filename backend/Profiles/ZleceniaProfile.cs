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
            CreateMap<Klienci,ZleceniaReadDto>().ForMember(d=>d.Imie,a=>a.MapFrom(s=>s.Imie)).ForMember(d=>d.Nazwisko,a=>a.MapFrom(s=>s.Nazwisko)).ForMember(d=>d.NrTel,a=>a.MapFrom(s=>s.NrTel));

            CreateMap<ZleceniaCreateDto,Zlecenia>();
            CreateMap<ZleceniaCreateDto,Klienci>().ForMember(d=>d.Imie,a=>a.MapFrom(s=>s.Imie)).ForMember(d=>d.Nazwisko,a=>a.MapFrom(s=>s.Nazwisko)).ForMember(d=>d.NrTel,a=>a.MapFrom(s=>s.NrTel));
        }
    }
}