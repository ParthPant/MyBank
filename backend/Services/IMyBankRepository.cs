using MyBank.API.Entities;

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
        Task AddAccount(long custId, Account account);
        void DeleteAccount(Account account);

        Task<bool> SaveChangesAsync();
    }
}
