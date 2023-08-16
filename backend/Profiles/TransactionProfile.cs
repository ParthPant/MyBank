using AutoMapper;
using MyBank.API.Entities;
using MyBank.API.Models;

namespace MyBank.API.Profiles
{
    public class TransactionProfile : Profile
    {
        public TransactionProfile()
        {
            CreateMap<Transaction, TransactionDto>();
        }
    }
}
