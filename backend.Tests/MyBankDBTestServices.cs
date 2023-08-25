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
		
	}
}