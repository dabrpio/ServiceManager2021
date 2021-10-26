using AutoMapper;
using CommandApi.Dtos;
using CommandApi.Models;

namespace CommandApi.Profiles
{
    public class ClientsProfile : Profile
    {
        public ClientsProfile(){
            //Source -> target
            CreateMap<Client, ClientsReadDto>();

            CreateMap<ClientsCreateDto,Client>();
        }
    }
}