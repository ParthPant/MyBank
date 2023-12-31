using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using MyBank.API.Types;

namespace MyBank.API.Models
{
    public class AccountNewDto
    {
        [Required(ErrorMessage = "Account Type is necessary")]
        [DefaultValue(AccountType.Saving)]
        public AccountType AccountType { get; set; }
        [Required(ErrorMessage = "Balace is necessary")]
        [DefaultValue(0), Range(0, long.MaxValue)]
        public long Balance { get; set; }
        [Required]
        [DefaultValue(0)]
        public long PinNo { get; set; }
    }
}
