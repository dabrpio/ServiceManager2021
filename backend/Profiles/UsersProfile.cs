using AutoMapper;
using CommandApi.Dtos;
using CommandApi.Models;

namespace CommandApi.Profiles
{
    public class UsetsProfile : Profile
    {
        public UsetsProfile(){
            //Source -> target
            CreateMap<User, UsersReadDto>();

            CreateMap<UsersCreateDto,User>();
        }
    }
}