using System.ComponentModel.DataAnnotations;

namespace MyBank.API.Models
{
    public class AdminNewDto
    {
        [Required]
        [MaxLength(50)]
        public string Name;
        [Required]
        [MaxLength(50)]
        public string UserName;
        [Required]
        [MaxLength(50)]
        [RegularExpression(@"^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$", ErrorMessage = "Valid Email not provided")]
        public string Email;
        [Required]
        [MaxLength(50)]
        public string Password;
    }
}