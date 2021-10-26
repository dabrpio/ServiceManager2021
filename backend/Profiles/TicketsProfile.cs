using AutoMapper;
using CommandApi.Dtos;
using CommandApi.Models;

namespace CommandApi.Profiles
{
    public class TicketsProfile : Profile
    {
        public TicketsProfile(){
            //Source -> target
            CreateMap<Ticket, TicketsReadDto>();
            CreateMap<TicketsCreateDto,Ticket>();
            CreateMap<TicketsCreateDto,Client>();
            CreateMap<Client,TicketsReadDto>();
            CreateMap<Device,TicketsReadDto>();
            CreateMap<TicketsCreateDto,Device>();
        }
    }
}