using MyBank.API.Entities;

namespace MyBank.API.Services {
	public interface IMyBankRepository
	{
		Task<IEnumerable<Customer>> GetCustomersAsync();
		Task<Customer?> GetCustomerAsync(long custId);
	}
}
