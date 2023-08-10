using System.ComponentModel.DataAnnotations;

namespace MyBank.API.Models
{
    public class CustomerUpdateDto
    {
        [Required]
        [MaxLength(50)]
        public string Name { get; set; } = String.Empty;
        [Required]
        [MaxLength(50)]
        public string Email { get; set; } = String.Empty;
        [Required]
        public long Contact { get; set; }
        [Required]
        public long CardNo { get; set; }
        [Required]
        public long PinNo { get; set; }
        [Required]
        [MaxLength(50)]
        public string City { get; set; } = String.Empty;
    }
}
