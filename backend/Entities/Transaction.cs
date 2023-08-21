using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using MyBank.API.Types;

namespace MyBank.API.Entities
{
    public class Transaction
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long Id { get; set; }
        [Required]
        public long AccNo { get; set; }
        [Required]
        public TransactionType TransactionType { get; set; }
        [Required]
        public long Amount { get; set; }
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        [DataType(DataType.DateTime)]
        public DateTime Time { get; set; } = DateTime.Now;

        [ForeignKey("AccNo")]
        public Account? Account { get; set; }

        public Transaction(long accNo, TransactionType transactionType, long amount)
        {
            AccNo = accNo;
            Amount = amount;
            TransactionType = transactionType;
        }
    }
}
