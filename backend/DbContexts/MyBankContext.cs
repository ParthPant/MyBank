using MyBank.API.Entities;
using Microsoft.EntityFrameworkCore;
using MyBank.API.Types;

namespace MyBank.API.DbContexts
{
    public class MyBankContext : DbContext
    {
        public DbSet<Customer> Customers { get; set; } = null!;
        public DbSet<Account> Accounts { get; set; } = null!;
        public DbSet<Admin> Admins { get; set; } = null!;

        public MyBankContext(DbContextOptions<MyBankContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Customer>().HasData(
                    new Customer("Parth Pant", "parthpant4@gmail.com", "Bengaluru")
                    {
                        CustId = 1,
                        Contact = 7876082603,
                        CardNo = 999999999,
                        PinNo = 23421,
                    },
                    new Customer("John Doe", "doejohn@gmail.com", "Delhi")
                    {
                        CustId = 2,
                        Contact = 2342354234,
                        CardNo = 888888888,
                        PinNo = 5345324,
                    }
            );

            modelBuilder.Entity<Account>().HasData(
                    new Account
                    {
                        AccountType = AccountType.Saving,
                        AccNo = 2342343245,
                        Balance = 787,
                        CustId = 1,
                    }
            );

            modelBuilder.Entity<Admin>().HasData(
                    new Admin("Admin", "admin", "admin@admin.com", "password")
                    {
                        Id = 1,
                    }
            );
        }
    }
}
