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
        public DbSet<Transaction> Transactions { get; set; } = null!;

        public MyBankContext(DbContextOptions<MyBankContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // modelBuilder.Entity<Transaction>()
            //     .Property(t => t.Time)
            //     .HasColumnType("datetime2")
            //     .HasDefaultValue("getdate()");


            // modelBuilder.Entity<Customer>()
            //     .Property(c => c.Enabled)
            //     .HasDefaultValue(true);

            modelBuilder.Entity<Customer>()
                .HasData(
                    new Customer("Parth Pant", "parthpant4@gmail.com", "Bengaluru")
                    {
                        CustId = 1,
                        Contact = 7876082603,
                    },
                    new Customer("John Doe", "doejohn@gmail.com", "Delhi")
                    {
                        CustId = 2,
                        Contact = 2342354234,
                    },
                    new Customer("Homelander", "homie@vaught.com", "New York")
                    {
                        CustId = 3,
                        Contact = 23546456,
                    },
                    new Customer("Batman", "thatman@vaught.com", "Gotham")
                    {
                        CustId = 4,
                        Contact = 64654646,
                    }
            );

            modelBuilder.Entity<Account>().HasData(
                    new Account
                    {
                        AccountType = AccountType.Saving,
                        AccNo = 2342343245,
                        Balance = 787,
                        CustId = 1,
                        CardNo = 12345,
                        PinNo = 0,
                    },
                    new Account
                    {
                        AccountType = AccountType.Saving,
                        AccNo = 3454395723,
                        Balance = 234,
                        CardNo = 2345325,
                        PinNo = 0,
                        CustId = 1,
                    },
                    new Account
                    {
                        AccountType = AccountType.Salary,
                        AccNo = 3454395724,
                        Balance = 23423,
                        CardNo = 23423523,
                        PinNo = 0,
                        CustId = 4,
                    }

            );

            modelBuilder.Entity<Admin>().HasData(
                    new Admin("Admin", "admin", "admin@admin.com", "password")
                    {
                        Id = 1,
                    }
            );

            modelBuilder.Entity<Transaction>().HasData(
                    new Transaction(2342343245, TransactionType.Debit, 200)
                    {
                        Id = 1,
                    },
                    new Transaction(3454395723, TransactionType.Credit, 600)
                    {
                        Id = 2,
                    },
                    new Transaction(2342343245, TransactionType.Credit, 234)
                    {
                        Id = 3,
                    },
                    new Transaction(3454395723, TransactionType.Debit, 123)
                    {
                        Id = 4,
                    }
            );
        }
    }
}
