using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using MyBank.API.Types;

namespace MyBank.API.Models
{
    public class AccountUpdateDto
    {
        [DefaultValue(AccountType.Saving)]
        public AccountType AccountType { get; set; }
        [DefaultValue(0), Range(0, long.MaxValue)]
        public long Balance { get; set; }
        public long CustId { get; set; }
        public long PinNo { get; set; }
    }
}
