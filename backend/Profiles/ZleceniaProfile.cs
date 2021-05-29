using AutoMapper;
using CommandApi.Dtos;
using CommandApi.Models;

namespace CommandApi.Profiles
{
    public class ZleceniaProfile : Profile
    {
        public ZleceniaProfile(){
            //Source -> target
            /*CreateMap<Zlecenia, ZleceniaReadDto>().ForMember(d=>d.Imie,a=>a.MapFrom(s=>s.IdKlientaNavigation.Imie)).ForMember(d=>d.Nazwisko,a=>a.MapFrom(s=>s.IdKlientaNavigation.Nazwisko)).ForMember(d=>d.NrTel,a=>a.MapFrom(s=>s.IdKlientaNavigation.NrTel)).ForMember(d=>d.EMail,a=>a.MapFrom(s=>s.IdKlientaNavigation.EMail));
            CreateMap<Klienci,ZleceniaReadDto>().ForMember(d=>d.Imie,a=>a.MapFrom(s=>s.Imie)).ForMember(d=>d.Nazwisko,a=>a.MapFrom(s=>s.Nazwisko)).ForMember(d=>d.NrTel,a=>a.MapFrom(s=>s.NrTel)).ForMember(d=>d.EMail,a=>a.MapFrom(s=>s.EMail));

            CreateMap<ZleceniaCreateDto,Zlecenia>().ForMember(d=>d.IdKlientaNavigation.Imie,a=>a.MapFrom(s=>s.Imie)).ForMember(d=>d.IdKlientaNavigation.Nazwisko,a=>a.MapFrom(s=>s.Nazwisko)).ForMember(d=>d.IdKlientaNavigation.NrTel,a=>a.MapFrom(s=>s.NrTel)).ForMember(d=>d.IdKlientaNavigation.EMail,a=>a.MapFrom(s=>s.EMail));
            CreateMap<ZleceniaCreateDto,Klienci>().ForMember(d=>d.Imie,a=>a.MapFrom(s=>s.Imie)).ForMember(d=>d.Nazwisko,a=>a.MapFrom(s=>s.Nazwisko)).ForMember(d=>d.NrTel,a=>a.MapFrom(s=>s.NrTel)).ForMember(d=>d.EMail,a=>a.MapFrom(s=>s.EMail));
        */
            CreateMap<Zlecenia, ZleceniaReadDto>();
            CreateMap<ZleceniaCreateDto,Zlecenia>();
            CreateMap<ZleceniaCreateDto,Klienci>();
            CreateMap<Klienci,ZleceniaReadDto>();
        }
    }
}