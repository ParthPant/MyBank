using AutoMapper;
using MyBank.API.Entities;
using MyBank.API.Models;

namespace MyBank.API.Profiles
{
    public class AccountProfile : Profile
    {
        public AccountProfile()
        {
            CreateMap<Account, AccountDto>();
        }
    }
}