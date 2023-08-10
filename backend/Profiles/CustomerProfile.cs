using AutoMapper;
using MyBank.API.Entities;
using MyBank.API.Models;

namespace MyBank.API.Profiles
{
    public class CustomerProfile : Profile
    {
        public CustomerProfile()
        {
            CreateMap<Customer, CustomerDto>();
            CreateMap<Customer, CustomerWithoutAccountsDto>();

            CreateMap<CustomerNewDto, Customer>();
            CreateMap<CustomerUpdateDto, Customer>();
        }
    }
}
