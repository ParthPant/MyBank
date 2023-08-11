using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using MyBank.API.Models;
using MyBank.API.Entities;
using MyBank.API.Services;
using Microsoft.AspNetCore.Authorization;

namespace MyBank.API
{
    [ApiController]
    [Authorize]
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
        public async Task<IActionResult> AddCustomer([FromBody] CustomerNewDto newCustomer)
        {
            var customerEntity = _mapper.Map<Customer>(newCustomer);
            _repository.AddCustomer(customerEntity);
            await _repository.SaveChangesAsync();
            var createdCustomer = _mapper.Map<CustomerDto>(customerEntity);

            return CreatedAtRoute("GetCustomer", new
            {
                custId = createdCustomer.CustId,
                includeAccounts = false,
            }, createdCustomer);
        }

        [HttpGet("{custId}", Name = "GetCustomer")]
        public async Task<IActionResult> GetCustomer(long custId, bool includeAccounts = false)
        {
            if (!await _repository.CustomerExists(custId))
            {
                return NotFound();
            }

            var customerEntity = await _repository.GetCustomerAsync(custId, includeAccounts);
            if (!includeAccounts)
            {
                return Ok(_mapper.Map<CustomerWithoutAccountsDto>(customerEntity));
            }
            return Ok(_mapper.Map<CustomerDto>(customerEntity));
        }

        [HttpDelete("{custId}")]
        public async Task<IActionResult> DeleteCustomer(long custId)
        {
            var customerToDeleteEntity = await _repository.GetCustomerAsync(custId);
            if (customerToDeleteEntity == null)
            {
                return NotFound();
            }

            _repository.DeleteCustomer(customerToDeleteEntity);
            await _repository.SaveChangesAsync();
            return NoContent();
        }

        [HttpPut("{custId}")]
        public async Task<IActionResult> UpdateCustomer(long custId, [FromBody] CustomerUpdateDto updateDto)
        {
            if (!await _repository.CustomerExists(custId))
            {
                return NotFound();
            }

            var customerToUpdate = await _repository.GetCustomerAsync(custId, false);
            _mapper.Map(updateDto, customerToUpdate);

            await _repository.SaveChangesAsync();
            return NoContent();
        }

        // [HttpPatch("{custId}")]
        // public IActionResult UpdatePatchCustomer(long custId)
        // {
        //     throw new NotImplementedException();
        // }
    }
}
