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

        [HttpGet("{custId}")]
        public async Task<IActionResult> GetCustomer(long custId, bool includeAccounts = false)
        {
            var customerEntity = await _repository.GetCustomerAsync(custId, includeAccounts);
            if (customerEntity == null) {
                return NotFound();
            }

            if (!includeAccounts) {
                return Ok(_mapper.Map<CustomerWithoutAccountsDto>(customerEntity));
            } 
            return Ok(_mapper.Map<CustomerDto>(customerEntity));
        }

        [HttpDelete("{custId}")]
        public IActionResult DeleteCustomer(long custId)
        {
            throw new NotImplementedException();
        }

        [HttpPut("{custId}")]
        public IActionResult UpdateCustomer(long custId)
        {
            throw new NotImplementedException();
        }

        [HttpPatch("{custId}")]
        public IActionResult UpdatePatchCustomer(long custId)
        {
            throw new NotImplementedException();
        }

    }
}
