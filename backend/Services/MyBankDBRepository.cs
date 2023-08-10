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

        public async Task<Customer?> GetCustomerAsync(long custId, bool includeAccounts)
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


    }
}