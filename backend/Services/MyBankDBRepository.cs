using MyBank.API.Entities;
using MyBank.API.Exceptions;
using Microsoft.EntityFrameworkCore;
using MyBank.API.DbContexts;
using MyBank.API.Types;

namespace MyBank.API.Services
{
    public class MyBankDBRepository : IMyBankRepository
    {
        private readonly MyBankContext _context;
        public MyBankDBRepository(MyBankContext context)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }

        public async Task<UserInfo?> GetAdmin(string userName, string password)
        {
            var user = await _context.Admins.Where(u => u.UserName == userName && u.Password == password).FirstOrDefaultAsync();
            if (user != null)
            {
                return new UserInfo
                {
                    Id = user.Id,
                    Name = user.Name,
                    UserName = user.UserName,
                };
            }
            return null;
        }

        public async Task<Customer> GetCustomerAsync(long custId, bool includeAccounts = false)
        {
            Customer res;
            if (includeAccounts)
            {
                // throw new CustomerNotFoundException(custId)
                res = await _context.Customers.Include(c => c.Accounts).Where(c => c.CustId == custId).FirstAsync();
            } else {
                res = await _context.Customers.Where(c => c.CustId == custId).FirstAsync();
            }

            if (res == null)
            {
                throw new CustomerNotFoundException(custId);
            }

            return res;
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

        public async Task<IEnumerable<Account>> GetAccountsAsync(long custId)
        {
            return await _context.Accounts
                .Where(acc => acc.CustId == custId).ToListAsync();
        }

        public async Task<Account> GetAccountAsync(long custId, long accNo)
        {
            var res = await _context.Accounts
                .Where(acc => acc.CustId == custId && acc.AccNo == accNo)
                .FirstAsync();
            if (res == null) {
                throw new AccountNotFoundException(accNo);
            } else {
                return res;
            }
        }

        public async Task<Account> GetAccountAsync(long accNo)
        {
            var res = await _context.Accounts.Where(acc => acc.AccNo == accNo).FirstAsync();
            if (res == null) {
                throw new AccountNotFoundException(accNo);
            } else {
                return res;
            }
        }

        public async Task AddAccount(long custId, Account account)
        {
            var customer = await GetCustomerAsync(custId, false);
            if (customer != null)
            {
                customer.Accounts.Add(account);
            }
        }

        public void DeleteAccount(Account account)
        {
            _context.Accounts.Remove(account);
        }

        public async Task<IEnumerable<Transaction>> GetTransactionsAsync(long accNo, int? numTransactions = null)
        {
            if (numTransactions != null)
            {
                return await _context.Transactions
                    .Where(t => t.AccNo == accNo)
                    .OrderByDescending(t => t.Time)
                    .Take(numTransactions.Value)
                    .ToListAsync();
            }
            else
            {
                return await _context.Transactions
                    .Where(t => t.AccNo == accNo)
                    .OrderByDescending(t => t.Time)
                    .ToListAsync();
            }
        }

        public async Task<Transaction> GetTransactionAsync(long tid)
        {
            return await _context.Transactions.Where(t => t.Id == tid).FirstAsync();
        }

        public void AddAdmin(Admin adminEntity)
        {
            _context.Admins.Add(adminEntity);
        }

        public async Task<bool> AccountExists(long accNo)
        {
            return await _context.Accounts.AnyAsync(a => a.AccNo == accNo);
        }
    }
}
