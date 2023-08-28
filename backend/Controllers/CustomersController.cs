using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using MyBank.API.Models;
using MyBank.API.Entities;
using MyBank.API.Services;
using Microsoft.AspNetCore.Authorization;
using MyBank.API.Exceptions;

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

        [HttpPost("{custId}/disable")]
        public async Task<IActionResult> DisableCustomer(long custId)
        {
            try {
                var customerEntity = await _repository.GetCustomerAsync(custId);
                customerEntity.Enabled = false;
                await _repository.SaveChangesAsync();
                return Ok();
            } catch (CustomerNotFoundException ex) {
                return NotFound(ex.Message);
            }
        }

        [HttpPost("{custId}/enable")]
        public async Task<IActionResult> EnableCustomer(long custId)
        {
            try {
                var customerEntity = await _repository.GetCustomerAsync(custId);
                customerEntity.Enabled = true;
                await _repository.SaveChangesAsync();
                return Ok();
            } catch (CustomerNotFoundException ex) {
                return NotFound(ex.Message);
            }

        }

        [HttpGet("{custId}", Name = "GetCustomer")]
        public async Task<IActionResult> GetCustomer(long custId, bool includeAccounts = false)
        {
            try {
                var customerEntity = await _repository.GetCustomerAsync(custId, includeAccounts);
                if (!includeAccounts)
                {
                    return Ok(_mapper.Map<CustomerWithoutAccountsDto>(customerEntity));
                }
                return Ok(_mapper.Map<CustomerDto>(customerEntity));
            } catch (CustomerNotFoundException ex) {
                return NotFound(ex.Message);
            }
        }

        [HttpDelete("{custId}")]
        public async Task<IActionResult> DeleteCustomer(long custId)
        {
            try {
                var customerToDeleteEntity = await _repository.GetCustomerAsync(custId);
                _repository.DeleteCustomer(customerToDeleteEntity);
                await _repository.SaveChangesAsync();
                return NoContent();
            } catch (CustomerNotFoundException ex) {
                return NotFound(ex.Message);
            }
        }

        [HttpPut("{custId}")]
        public async Task<IActionResult> UpdateCustomer(long custId, [FromBody] CustomerUpdateDto updateDto)
        {
            try {
                var customerToUpdate = await _repository.GetCustomerAsync(custId, false);
                _mapper.Map(updateDto, customerToUpdate);

                await _repository.SaveChangesAsync();
                return NoContent();
            } catch (CustomerNotFoundException ex) {
                return NotFound(ex.Message);
            }
        }

        // [HttpPatch("{custId}")]
        // public IActionResult UpdatePatchCustomer(long custId)
        // {
        //     throw new NotImplementedException();
        // }
    }
}
