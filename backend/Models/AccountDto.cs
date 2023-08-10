namespace MyBank.API.Models
{
    public class AccountDto
    {
        public long AccNo { get; set; }
        public string AccountType { get; set; }
        public long Balance { get; set; }
        public long CustId { get; set; }

        public AccountDto(string accountType)
        {
            AccountType = accountType;
        }
    }
}
