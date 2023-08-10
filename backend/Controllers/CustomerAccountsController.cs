using Microsoft.AspNetCore.Mvc;

namespace MyBank.API
{
    [Route("api/customers/{custId}")]
    public class CustomerAccountsController : ControllerBase
    {
        private readonly ILogger<CustomerAccountsController> _logger;

        public CustomerAccountsController(ILogger<CustomerAccountsController> logger)
        {
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
        }

        [HttpGet("accounts")]
        public IActionResult GetCustomerAccounts(long custId)
        {
            throw new NotImplementedException();
        }

        [HttpPost("accounts")]
        public IActionResult AddCustomerAccount(long custId)
        {
            throw new NotImplementedException();
        }

        [HttpGet("accounts/{accNo}")]
        public IActionResult GetCustomerAccount(long custId, long accNo)
        {
            throw new NotImplementedException();
        }

        [HttpDelete("accounts/{accNo}")]
        public IActionResult DeleteCustomerAccount(long custId, long accNo)
        {
            throw new NotImplementedException();
        }

        [HttpPut("accounts/{accNo}")]
        public IActionResult UpdateCustomerAccount(long custId, long accNo)
        {
            throw new NotImplementedException();
        }

        [HttpPatch("accounts/{accNo}")]
        public IActionResult PatchCustomerAccount(long custId, long accNo)
        {
            throw new NotImplementedException();
        }
    }
}
