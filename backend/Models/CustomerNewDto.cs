using System.ComponentModel.DataAnnotations;

namespace MyBank.API.Models
{
    public class CustomerNewDto
    {
        [Required]
        [MaxLength(50)]
        public string Name { get; set; } = String.Empty;
        [Required]
        [RegularExpression(@"^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$", ErrorMessage = "Valid Email not provided")]
        [MaxLength(50)]
        public string Email { get; set; } = String.Empty;
        [Required]
        public long Contact { get; set; }
        [Required]
        [MaxLength(50)]
        public string City { get; set; } = String.Empty;
    }
}
