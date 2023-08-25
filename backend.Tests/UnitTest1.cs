namespace backendTests;
using Moq;
using MyBank.API.Models;
using MyBank.API.Entities;
using MyBank.API.Services;
using Microsoft.AspNetCore.Mvc.ModelBinding.Validation;
using Microsoft.AspNetCore.Mvc;
using MyBank.API.Types;

public class UnitTest1
{
    [Fact]
    public async Task GetTransactionsAsyncTest_ShouldReturnTransactions_WhenTransactionsExists()
		{
			var _mockrepo = new Mock<IMyBankRepository>();
			var transactionList = new List<Transaction> {
				new Transaction(1234567, TransactionType.Credit, 1000 ),
				new Transaction(1223357, TransactionType.Debit, 2220 ),
			};
			long accNo = 1234567;
			_mockrepo.Setup(x => x.GetTransactionsAsync(accNo,null)).ReturnsAsync(transactionList);
			
			var result = _mockrepo.Object;
			var transactionResult = await result.GetTransactionsAsync(accNo);

			Assert.Equal(transactionList, transactionResult);
			Assert.NotEmpty(transactionResult);
			Assert.IsType<List<Transaction>>(transactionResult);
			
		}
        [Fact]
		public async Task GetAdminAsyncTest_ShouldReturnAdmin()
		{
			var _mockrepo = new Mock<IMyBankRepository>();
			
			var admininfo = new UserInfo();
			admininfo.UserName = "Monaa";
			admininfo.Id = 1;
			admininfo.Name = "Mona";
			var password = "4321";
			_mockrepo.Setup(x => x.GetAdmin(admininfo.UserName,password)).ReturnsAsync(admininfo);

			var result = _mockrepo.Object;
			var adminresult = await result.GetAdmin(admininfo.UserName, password);
			Assert.Equal(admininfo, adminresult);
			Assert.NotNull(adminresult);
			Assert.IsType<UserInfo>(adminresult);
		}
		

}