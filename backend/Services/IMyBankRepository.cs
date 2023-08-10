using MyBank.API.Entities;

namespace MyBank.API.Services
{
    public interface IMyBankRepository
    {
        Task<IEnumerable<Customer>> GetCustomersAsync();
        Task<Customer?> GetCustomerAsync(long custId, bool includeAccounts = false);
        void AddCustomer(Customer customer);
        void DeleteCustomer(Customer customer);
        Task<bool> SaveChangesAsync();
        Task<bool> CustomerExists(long custId);
    }
}
