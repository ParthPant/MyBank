namespace BackendTests;

using MyBank.API.Entities;
using MyBank.API.Services;
using MyBank.API.DbContexts;
using Microsoft.EntityFrameworkCore;
using Microsoft.Data.Sqlite;
using MyBank.API.Types;

public class RepositoryTests
{
	public readonly MyBankContext Context;

	public RepositoryTests()
	{
		var connection = new SqliteConnection("Data Source=:memory:");
		connection.Open();
		var options = new DbContextOptionsBuilder<MyBankContext>().UseSqlite(connection).Options;
		Context = new MyBankContext(options);
		Context.Database.EnsureCreated();
	}

	public void Dispose()
	{
		Context.Database.EnsureDeleted();
	}

	[Fact]
	public void AddCustomerTest_ShouldAddCustomer()
	{
		var newCustomer = new Customer("Tester", "tester@gmail.com", "testland");
		var repository = new MyBankDBRepository(Context);

		repository.AddCustomer(newCustomer);
		Context.SaveChanges();

		Assert.True(Context.Customers.Any(c => c.Name == "Tester" && c.Email == "tester@gmail.com" && c.City == "testland"));
	}

	[Fact]
	public async Task GetCustomersAsyncTest_ShouldGetCustomer()
	{
		var repository = new MyBankDBRepository(Context);

		var customers = await repository.GetCustomersAsync();
		Assert.Equal(4, customers.Count());
	}

	[Fact]
	public async Task CustomerExistsTest_ShouldCheckIfCustExists()
	{
		var repository = new MyBankDBRepository(Context);
		var newCustomer = new Customer("Tester", "tester@gmail.com", "testland")
			{
				CustId = 100,
				Contact = 234234
			};
		Context.Customers.Add(newCustomer);
		Context.SaveChanges();

		var exists = await repository.CustomerExists(100);
		Assert.True(exists);
	}

	[Fact]
	public async Task GetCustomerAsyncTest_ShouldGetCustomer()
	{
		var repository = new MyBankDBRepository(Context);
		var newCustomer = new Customer("Tester", "tester@gmail.com", "testland")
			{
				CustId = 999,
				Contact = 234234
			};
		Context.Customers.Add(newCustomer);
		Context.SaveChanges();

		var customer = await repository.GetCustomerAsync(999, false);
		Assert.Equal(newCustomer, customer);
	}

	[Fact]
	public void DeleteCustomerTest_ShouldDeleteCustomer()
	{
		var repository = new MyBankDBRepository(Context);
		var newCustomer = new Customer("Tester", "tester@gmail.com", "testland")
			{
				CustId = 888,
				Contact = 234234
			};
		Context.Customers.Add(newCustomer);
		Context.SaveChanges();

		repository.DeleteCustomer(newCustomer);
		Context.SaveChanges();
		Assert.False(Context.Customers.Any(c => c.CustId == 888));
	}

	[Fact]
	public async Task GetAccountsAsyncTest_ShouldGetAccounts()
	{
		var repository = new MyBankDBRepository(Context);
		var newCustomer = new Customer("Tester", "tester@gmail.com", "testland")
			{
				CustId = 777,
				Contact = 234234
			};
		Context.Customers.Add(newCustomer);
		var newAccount = new Account
			{
				AccountType = AccountType.Saving,
				Balance = 234,
				PinNo = 0,
				CustId = 777,
			};
		Context.Accounts.Add(newAccount);
		Context.SaveChanges();

		var accounts = await repository.GetAccountsAsync(777);
		Assert.Equal(1, accounts.Count());
	}

	[Fact]
	public async Task GetAccountAsyncTest_ShouldGetAccounts()
	{
		var repository = new MyBankDBRepository(Context);
		var newCustomer = new Customer("Tester", "tester@gmail.com", "testland")
			{
				CustId = 987,
				Contact = 234234
			};
		Context.Customers.Add(newCustomer);
		var newAccount = new Account
			{
				AccountType = AccountType.Saving,
				AccNo = 234234234,
				Balance = 234,
				PinNo = 0,
				CustId = 987,
			};
		Context.Accounts.Add(newAccount);
		Context.SaveChanges();

		var account = await repository.GetAccountAsync(234234234);
		Assert.Equal(account.CustId, 987);
		Assert.Equal(account.Balance, 234);
	}

	[Fact]
	public async Task AddAccountTest_ShouldAddAccount()
	{
		var repository = new MyBankDBRepository(Context);
		var newCustomer = new Customer("Tester", "tester@gmail.com", "testland")
			{
				CustId = 111,
				Contact = 234234
			};
		Context.Customers.Add(newCustomer);
		Context.SaveChanges();

		var newAccount = new Account
			{
				AccountType = AccountType.Saving,
				Balance = 234,
				PinNo = 0,
			};
		await repository.AddAccount(111, newAccount);
		Context.SaveChanges();

		Assert.True(Context.Accounts.Any(a => a.CustId == 111 && a.Balance == 234));
	}

	[Fact]
	public void DeleteAccountTest_ShouldDeleteAccount()
	{
		var repository = new MyBankDBRepository(Context);
		var newCustomer = new Customer("Tester", "tester@gmail.com", "testland")
			{
				CustId = 111,
				Contact = 234234
			};
		Context.Customers.Add(newCustomer);
		var newAccount = new Account
			{
				AccountType = AccountType.Saving,
				Balance = 99,
				PinNo = 0,
				CustId = 111,
			};
		Context.Accounts.Add(newAccount);
		Context.SaveChanges();

		var acc = Context.Customers
						 .Include(c => c.Accounts)
						 .Where(c => c.CustId == 111)
						 .First()
						 .Accounts
						 .First();
		repository.DeleteAccount(acc);
		Context.SaveChanges();

		Assert.Null(Context.Customers.Include(c => c.Accounts).Where(c => c.CustId == 111).First().Accounts.FirstOrDefault());
	}

	[Fact]
	public async Task AccountExistsTest_ShouldCheckAccExists()
	{
		var repository = new MyBankDBRepository(Context);
		var newCustomer = new Customer("Tester", "tester@gmail.com", "testland")
			{
				CustId = 111,
				Contact = 234234
			};
		Context.Customers.Add(newCustomer);
		var newAccount = new Account
			{
				AccountType = AccountType.Saving,
				Balance = 99,
				PinNo = 0,
				CustId = 111,
			};
		Context.Accounts.Add(newAccount);
		Context.SaveChanges();

		var acc = Context.Customers
						 .Include(c => c.Accounts)
						 .Where(c => c.CustId == 111)
						 .First()
						 .Accounts
						 .First();

		Assert.True(await repository.AccountExists(acc.AccNo));
		Assert.False(await repository.AccountExists(2342323423463454));
	}
}
