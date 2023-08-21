using System.ComponentModel.DataAnnotations;
using MyBank.API.Types;

namespace MyBank.API.Models
{
    public class TransactionDto
    {
        [Key]
        public long Id { get; set; }
        [Required]
        public long AccNo { get; set; }
        [Required]
        public TransactionType TransactionType { get; set; }
        [Required]
        public long Amount { get; set; }
        [Required]
        public DateTime Time { get; set; }
    }
}
