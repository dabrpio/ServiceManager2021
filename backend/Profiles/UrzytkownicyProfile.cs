using AutoMapper;
using CommandApi.Dtos;
using CommandApi.Models;

namespace CommandApi.Profiles
{
    public class UrzytkownicyProfile : Profile
    {
        public UrzytkownicyProfile(){
            //Source -> target
            CreateMap<Uzytkownicy, UzytkownicyReadDto>();

            CreateMap<UzytkownicyCreateDto,Uzytkownicy>();
        }
    }
}