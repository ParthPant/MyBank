using MyBank.API.Entities;
using Microsoft.EntityFrameworkCore;
using MyBank.API.DbContexts;

namespace MyBank.API.Services
{
    public class MyBankDBRepository : IMyBankRepository
    {
        private readonly MyBankContext _context;
        public MyBankDBRepository(MyBankContext context)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }

        public async Task<Customer?> GetCustomerAsync(long custId, bool includeAccounts = false)
        {
            if (includeAccounts)
            {
                return await _context.Customers.Include(c => c.Accounts).Where(c => c.CustId == custId).FirstOrDefaultAsync();
            }
            return await _context.Customers.Where(c => c.CustId == custId).FirstOrDefaultAsync();
        }

        public async Task<IEnumerable<Customer>> GetCustomersAsync()
        {
            return await _context.Customers.ToListAsync();
        }

        public void AddCustomer(Customer customer)
        {
            _context.Customers.Add(customer);
        }

        public void DeleteCustomer(Customer customer)
        {
            _context.Customers.Remove(customer);
        }

        public async Task<bool> SaveChangesAsync()
        {
            return (await _context.SaveChangesAsync() >= 0);
        }

        public async Task<bool> CustomerExists(long custId)
        {
            return await _context.Customers.AnyAsync(c => c.CustId == custId);
        }
    }
}
