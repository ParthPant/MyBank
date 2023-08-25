using Moq;
using MyBank.API.Models;
using MyBank.API.Entities;
using MyBank.API.Services;
using Microsoft.AspNetCore.Mvc.ModelBinding.Validation;
using Microsoft.AspNetCore.Mvc;
using MyBank.API.Types;

namespace MyBankDBTest
{
	public class MyBankDBTestServices
	{
		[Fact]
		
		public async Task GetCustomerAsyncTest_ShouldReturnCustomer_WhenCustomerExists()
		{
			var _mockrepo = new Mock<IMyBankRepository>();
			var custId = 1;
			var customer = new Customer("Tanal", "tp@gmail.com", "Surat");

			_mockrepo.Setup(x => x.GetCustomerAsync(custId, false)).ReturnsAsync(customer);

			var result = _mockrepo.Object;
			var customerresult = await result.GetCustomerAsync(custId);

			Assert.Equal(customer, customerresult);
			Assert.NotNull(customerresult);
			Assert.IsType<Customer>(customerresult);
		}

		[Fact]
		public async Task GetCustomersAsyncTest_ShouldReturnCustomerList()
		{
			var _mockrepo = new Mock<IMyBankRepository>();
			var customerList = new List<Customer> {
				new Customer("Tanal", "tp@gmail.com", "Surat" ),
				new Customer("Bill","bill@gmail.com","USA" )
			};

			_mockrepo.Setup(x => x.GetCustomersAsync()).ReturnsAsync(customerList);

			var result = _mockrepo.Object;
			var customerresult = await result.GetCustomersAsync();

			Assert.Equal(customerList, customerresult);
			Assert.NotEmpty(customerresult);
			Assert.IsType<List<Customer>>(customerresult);
			
		}
		[Fact]
		public async Task CustomerExists_ShouldReturnTrue_IfCustomerExists()
		{
			var _mockrepo = new Mock<IMyBankRepository>();
			var customerList = GetCustomerData();

			long custId = 1;
			_mockrepo.Setup(x => x.CustomerExists(custId)).Returns(Task.FromResult(true));

			var result = _mockrepo.Object;	
			var customerexists = await result.CustomerExists(custId);

			Assert.True(customerexists);

		}
		[Fact]
		public async Task AccountExists_ShouldReturnTrue_IfAccountExists()
		{
			var _mockrepo = new Mock<IMyBankRepository>();
			long accno = 12345;
			Account account = new Account();
			account.AccNo = accno;
			account.AccountType = AccountType.Saving;
			account.Balance = 300000;
			account.CardNo = 987654413;
			account.PinNo = 4451;
			account.CustId = 1;
			_mockrepo.Setup(x => x.AccountExists(accno)).Returns(Task.FromResult(true));

			var result = _mockrepo.Object;
			var accountexists = await result.AccountExists(accno);

			Assert.True(accountexists);

		}


		[Fact]
		public async Task GetAccountAsyncTest_ShouldReturnAccounts_WhenAccountsExists()
		{
			var _mockrepo = new Mock<IMyBankRepository>();
			long accno = 12345;

			Account account= new Account();
			account.AccNo = 12345;
			account.AccountType = AccountType.Saving;
			account.Balance = 300000;
			account.CardNo = 987654413;
			account.PinNo = 4451;
			account.CustId = 1;


			_mockrepo.Setup(x => x.GetAccountAsync(accno)).ReturnsAsync(account);
			var result = _mockrepo.Object;
			var accountresult =  await result.GetAccountAsync(accno);

			Assert.Equal(accountresult,account);
			Assert.NotNull(accountresult);
			Assert.IsType<Account>(accountresult);

		}
		/*
		[Fact]
		public async Task GetAccountsAsyncTest_ShouldReturnAccounts_WhenAccountsExists()
		{
			var _mockrepo = new Mock<IMyBankRepository>();
			var accountlist = new List<Account>();

			Account account = new Account();
			account.AccNo = 12345;
			account.AccountType = AccountType.Saving;
			account.Balance = 300000;
			account.CardNo = 987654413;
			account.PinNo = 4451;
			account.CustId = 1;
			accountlist.Add(account);

			Account newaccount = new Account();
			newaccount.AccNo = 54321;
			newaccount.AccountType = AccountType.Saving;
			newaccount.Balance = 27845;
			newaccount.CardNo = 987654343;
			newaccount.PinNo = 1234;
			newaccount.CustId = 1;
			accountlist.Add(newaccount);



			_mockrepo.Setup(x => x.GetAccountsAsync(1)).Returns(accountlist);
			var result = _mockrepo.Object;
			var accountresult = await result.GetAccountsAsync(1);

			Assert.Equal(accountresult, accountlist);
			Assert.IsType<List<Account>>(accountresult);
			Assert.NotNull(accountresult);

		}*/


		/*[Fact]
        public async Task AddCustomerTest_ShouldAddCustomer()
        {
            var _mockrepo = new Mock<IMyBankRepository>();
			var customerList = GetCustomerData();

            var newcustomer = new Customer("Hanan", "hanan@gmail.com", "SouthIndia");
            customerList.Add(newcustomer);

            _mockrepo.Setup(x => x.AddCustomer(newcustomer)).Returns();
			_mockrepo.Setup(x => x.GetCustomersAsync()).ReturnsAsync(customerList);

            var result = _mockrepo.Object();
			result.AddCustomer(customerList[3]);
			var customerresult = await result.GetCustomersAsync();


			Assert.Equal(customerList[3], customerresult[3]);
			Assert.NotEmpty(customerresult[3]);a
			Assert.IsType<List<Customer>(customerresult);

		}*/

		//private List<Accounts>
		private List<Customer> GetCustomerData()
		{
			var customerList = new List<Customer> {
				new Customer("Tanal", "tp@gmail.com", "Surat" ),
				new Customer("Bill","bill@gmail.com","USA" ),
				new Customer("Mona","mona@jpmc.com","mp")
			};
			return customerList;

		}


	}
}