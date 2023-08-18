using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using MyBank.API.Types;

namespace MyBank.API.Entities
{
    public class Account
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long AccNo { get; set; }

        [Required]
        public AccountType AccountType { get; set; }

        [Required]
        public long Balance { get; set; }

        [Required]
        public long CustId { get; set; }

        [ForeignKey("CustId")]
        public Customer? Customer { get; set; }

        public ICollection<Transaction> Transactions {get; set;} = new List<Transaction>();
    }
}
