using System.ComponentModel.DataAnnotations;
using MyBank.API.Types;

namespace MyBank.API.Models
{
    public class TransactionNewDto
    {

        [Required]
        public long AccNo { get; set; }

        [Required]
        public long Amount { get; set; }

    }
}
