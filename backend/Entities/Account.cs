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
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public long CardNo { get; set; } = new Random().Next(0, 1000000);

        [Required]
        public long PinNo { get; set; }

        [Required]
        public long CustId { get; set; }

        [ForeignKey("CustId")]
        public Customer? Customer { get; set; }

        public ICollection<Transaction> Transactions { get; set; } = new List<Transaction>();
    }
}
