namespace MyBank.API.Exceptions
{
	public class CustomerNotFoundException : Exception
	{
		public CustomerNotFoundException(long custId)
			:base (String.Format("Customer with Id: {} not found", custId))
		{
		}
	}
}
