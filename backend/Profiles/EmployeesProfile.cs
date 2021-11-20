using AutoMapper;
using CommandApi.Dtos;
using CommandApi.Models;

namespace CommandApi.Profiles
{
    public class EmployeesProfile : Profile
    {
        public EmployeesProfile(){
            //Source -> target
            CreateMap<Employee, EmployeeReadDto>();

            CreateMap<EmployeeCreateDto,Employee>();
        }
    }
}