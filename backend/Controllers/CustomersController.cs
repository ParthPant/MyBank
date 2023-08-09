using Microsoft.AspNetCore.Mvc;

namespace MyBank.API
{
    [Route("api/customers")]
    public class CustomersController : ControllerBase
    {
        private readonly ILogger<CustomersController> _logger;

        public CustomersController(ILogger<CustomersController> logger)
        {
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
        }

        [HttpGet]
        public IActionResult GetCustomers()
        {
            _logger.LogInformation("Getting all customers");
            return Ok(new List<object> {
                        new {customerid = 12312, name = "Parth Pant"},
                        new {customerid = 2342, name = "Ayush Verma"},
                    });
        }

        [HttpPost]
        public IActionResult AddCustomer()
        {
            throw new NotImplementedException();
        }

        [HttpGet("{CustId}")]
        public IActionResult GetCustomer(long CustId)
        {
            throw new NotImplementedException();
        }

        [HttpDelete("{CustId}")]
        public IActionResult DeleteCustomer(long CustId)
        {
            throw new NotImplementedException();
        }

        [HttpPut("{CustId}")]
        public IActionResult UpdateCustomer(long CustId)
        {
            throw new NotImplementedException();
        }

        [HttpPatch("{CustId}")]
        public IActionResult UpdatePatchCustomer(long CustId)
        {
            throw new NotImplementedException();
        }

    }
}
