using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MyBank.API.Entities
{
    public class Customer
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long CustId { get; set; }

        [Required]
        [MaxLength(50)]
        public string Name { get; set; }

        [Required]
        [MaxLength(50)]
        public string Email { get; set; }

        [Required]
        public long Contact { get; set; }

        public bool Enabled { get; set; } = true;

        [Required]
        [MaxLength(50)]
        public string City { get; set; }

        public ICollection<Account> Accounts { get; set; } = new List<Account>();

        public Customer(string name, string email, string city)
        {
            Name = name;
            Email = email;
            City = city;
        }
    }
};
