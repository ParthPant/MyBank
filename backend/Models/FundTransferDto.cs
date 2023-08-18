using System.ComponentModel.DataAnnotations;
using System.Runtime.InteropServices;
using MyBank.API.Types;

namespace MyBank.API.Models
{
    public class FundTransferDto
    {

        [Required]
        public long AccNoFrom { get; set; }

        [Required]
        public long AccNoTo { get; set; }   

        [Required]
        public long TransactionAmount { get; set; }

    }
}
