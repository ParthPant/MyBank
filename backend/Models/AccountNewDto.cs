using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using MyBank.API.Types;

namespace MyBank.API.Models
{
    public class AccountNewDto
    {
        [Required]
        [DefaultValue(AccountType.Saving)]
        public AccountType AccountType { get; set; }
        [Required]
        [DefaultValue(0)]
        public long Balance { get; set; }
        // [Required]
        // public long CustId { get; set; }
    }
}
