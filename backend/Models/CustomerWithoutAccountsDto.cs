namespace MyBank.API.Models
{
    public class CustomerWithoutAccountsDto
    {
        public long CustId { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public long Contact { get; set; }
        public long CardNo { get; set; }
        public long PinNo { get; set; }
        public string City { get; set; }

        public CustomerWithoutAccountsDto(string name, string email, string city)
        {
            Name = name;
            Email = email;
            City = city;
        }
    }
}
