using Microsoft.AspNetCore.Mvc;

namespace MyBank.API
{
    [Route("api/customers/{CustId}")]
    public class CustomerAccountsController : ControllerBase
    {
        private readonly ILogger<CustomerAccountsController> _logger;

        public CustomerAccountsController(ILogger<CustomerAccountsController> logger)
        {
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
        }

        [HttpGet("accounts")]
        public IActionResult GetCustomerAccounts(long CustId)
        {
            throw new NotImplementedException();
        }

        [HttpPost("accounts")]
        public IActionResult AddCustomerAccount(long CustId)
        {
            throw new NotImplementedException();
        }

        [HttpGet("accounts/{AccNo}")]
        public IActionResult GetCustomerAccount(long CustId, long AccNo)
        {
            throw new NotImplementedException();
        }

        [HttpDelete("accounts/{AccNo}")]
        public IActionResult DeleteCustomerAccount(long CustId, long AccNo)
        {
            throw new NotImplementedException();
        }

        [HttpPut("accounts/{AccNo}")]
        public IActionResult UpdateCustomerAccount(long CustId, long AccNo)
        {
            throw new NotImplementedException();
        }

        [HttpPatch("accounts/{AccNo}")]
        public IActionResult PatchCustomerAccount(long CustId, long AccNo)
        {
            throw new NotImplementedException();
        }
    }
}
