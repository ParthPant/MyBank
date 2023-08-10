using System.ComponentModel.DataAnnotations;
using System.ComponentModel;

namespace MyBank.API.Models
{
    public class AccountNewDto
    {
        [Required]
        public string AccountType { get; set; }
        [Required]
        [DefaultValue(0)]
        public long Balance { get; set; }
        [Required]
        public long CustId { get; set; }

        public AccountNewDto(string accountType)
        {
            AccountType = accountType;
        }
    }
}
