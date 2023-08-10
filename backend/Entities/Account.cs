using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MyBank.API.Entities
{
    public class Account
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long AccNo { get; set; }

        [Required]
        public string AccountType { get; set; }

        [Required]
        public long Balance { get; set; }

        [Required]
        public long CustId { get; set; }

        [ForeignKey("CustId")]
        public Customer? Customer { get; set; }

        public Account(string accountType)
        {
            AccountType = accountType;
        }
    }
}
