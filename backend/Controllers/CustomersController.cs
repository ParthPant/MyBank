using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using MyBank.API.Models;
using MyBank.API.Services;

namespace MyBank.API
{
    [Route("api/customers")]
    public class CustomersController : ControllerBase
    {
        private readonly ILogger<CustomersController> _logger;
        private readonly IMyBankRepository _repository;
        private readonly IMapper _mapper;

        public CustomersController(ILogger<CustomersController> logger, IMyBankRepository repository, IMapper mapper)
        {
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
            _repository = repository ?? throw new ArgumentNullException(nameof(repository));
            _mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<CustomerWithoutAccountsDto>>> GetCustomers()
        {
            var customerEntities = await _repository.GetCustomersAsync();
            var customerDtos = _mapper.Map<IEnumerable<CustomerWithoutAccountsDto>>(customerEntities); ;
            return Ok(customerDtos);
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
