namespace MyBank.API.Exceptions
{
	public class AccountNotFoundException : Exception
	{
		public AccountNotFoundException(long accNo)
			:base (String.Format("Account with Account Number: {} not found", accNo))
		{
		}
	}
}
