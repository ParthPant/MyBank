namespace MyBank.API.Models
{
    public class CustomerDto
    {
        public long CustId { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public long Contact { get; set; }
        public string City { get; set; }
        public ICollection<AccountDto> Accounts { get; set; } = new List<AccountDto>();

        public CustomerDto(string name, string email, string city)
        {
            Name = name;
            Email = email;
            City = city;
        }
    }
}
