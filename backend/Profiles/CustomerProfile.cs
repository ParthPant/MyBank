using AutoMapper;

namespace MyBank.API.Profiles
{
    public class CustomerProfile : Profile
    {
        public CustomerProfile()
        {
            CreateMap<Entities.Customer, Models.CustomerDto>();
            CreateMap<Entities.Customer, Models.CustomerWithoutAccountsDto>();
            CreateMap<Entities.Account, Models.AccountDto>();

            CreateMap<Models.CustomerDto, Entities.Customer>();
            CreateMap<Models.AccountDto, Entities.Account>();
        }
    }
}
