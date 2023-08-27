namespace BackendTests;

using MyBank.API.Entities;
using MyBank.API.Services;
using MyBank.API.DbContexts;
using Microsoft.EntityFrameworkCore;
using Microsoft.Data.Sqlite;

public class DatabaseFixture : IDisposable
{
	public readonly MyBankContext Context;

	public DatabaseFixture()
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
}

public class RepositoryTests : IClassFixture<DatabaseFixture>
{
	DatabaseFixture fixture;

	public RepositoryTests(DatabaseFixture fixture)
	{
		this.fixture = fixture;
	}

	[Fact]
	public void AddCustomerTest_ShouldAddCustomer()
	{
		var newCustomer = new Customer("Tester", "tester@gmail.com", "testland");
		var repository = new MyBankDBRepository(fixture.Context);

		repository.AddCustomer(newCustomer);
		fixture.Context.SaveChanges();

		Assert.True(fixture.Context.Customers.Any(c => c.Name == "Tester" && c.Email == "tester@gmail.com" && c.City == "testland"));
	}

	[Fact]
	public async Task GetCustomersAsyncTest_ShouldGetCustomer()
	{
		var repository = new MyBankDBRepository(fixture.Context);

		var customers = await repository.GetCustomersAsync();
		Assert.Equal(4, customers.Count());
	}

	[Fact]
	public async Task CustomerExistsTest_ShouldCheckIfCustExists()
	{
		var repository = new MyBankDBRepository(fixture.Context);
		var newCustomer = new Customer("Tester", "tester@gmail.com", "testland")
			{
				CustId = 100,
				Contact = 234234
			};
		fixture.Context.Customers.Add(newCustomer);
		fixture.Context.SaveChanges();

		var exists = await repository.CustomerExists(100);
		Assert.True(exists);
	}

	[Fact]
	public async Task GetCustomerAsyncTest_ShouldGetCustomer()
	{
		var repository = new MyBankDBRepository(fixture.Context);
		var newCustomer = new Customer("Tester", "tester@gmail.com", "testland")
			{
				CustId = 999,
				Contact = 234234
			};
		fixture.Context.Customers.Add(newCustomer);
		fixture.Context.SaveChanges();

		var customer = await repository.GetCustomerAsync(999, false);
		Assert.Equal(newCustomer, customer);
	}

	[Fact]
	public void DeleteCustomerTest_ShouldDeleteCustomer()
	{
		var repository = new MyBankDBRepository(fixture.Context);
		var newCustomer = new Customer("Tester", "tester@gmail.com", "testland")
			{
				CustId = 888,
				Contact = 234234
			};
		fixture.Context.Customers.Add(newCustomer);
		fixture.Context.SaveChanges();

		repository.DeleteCustomer(newCustomer);
		fixture.Context.SaveChanges();
		Assert.False(fixture.Context.Customers.Any(c => c.CustId == 888));
	}
}
