namespace MyBank.API.Models
{
    public class CustomerNewDto
    {
        public string Name { get; set; } = String.Empty;
        public string Email { get; set; } = String.Empty;
        public long Contact { get; set; }
        public long CardNo { get; set; }
        public long PinNo { get; set; }
        public string City { get; set; } = String.Empty;
    }
}
