using MyBank.API.Entities;
using MyBank.API.Types;

namespace MyBank.API.Services
{
    public interface IMyBankRepository
    {
        Task<IEnumerable<Customer>> GetCustomersAsync();
        Task<Customer?> GetCustomerAsync(long custId, bool includeAccounts = false);
        Task<bool> CustomerExists(long custId);
        void AddCustomer(Customer customer);
        void DeleteCustomer(Customer customer);

        Task<IEnumerable<Account>> GetAccountsAsync(long custId);
        Task<Account?> GetAccountAsync(long custId, long accNo);
        Task<Account> GetAccountAsync(long accNo);
        Task AddAccount(long custId, Account account);
        void DeleteAccount(Account account);
        Task<bool> AccountExists(long accNo);

        Task<IEnumerable<Transaction>> GetTransactionsAsync(long accNo);

        Task<UserInfo?> GetAdmin(string userName, string password);
        void AddAdmin(Admin admin);

        Task<bool> SaveChangesAsync();
    }
}
