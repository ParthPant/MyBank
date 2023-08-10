using MyBank.API.Types;

namespace MyBank.API.Models
{
    public class AccountDto
    {
        public long AccNo { get; set; }
        public AccountType AccountType { get; set; }
        public long Balance { get; set; }
        public long CustId { get; set; }
    }
}
