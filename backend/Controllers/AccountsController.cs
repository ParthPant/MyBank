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
    [Route("api/customers/{custId}")]
    public class AccountsController : ControllerBase
    {
        private readonly ILogger<AccountsController> _logger;
        private readonly IMyBankRepository _repository;
        private readonly IMapper _mapper;

        public AccountsController(ILogger<AccountsController> logger, IMyBankRepository repository, IMapper mapper)
        {
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
            _repository = repository ?? throw new ArgumentNullException(nameof(repository));
            _mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
        }

        [HttpGet("accounts")]
        public async Task<IActionResult> GetCustomerAccounts(long custId)
        {
            if (!await _repository.CustomerExists(custId)) return NotFound();

            var accountsEntities = await _repository.GetAccountsAsync(custId);
            var accountsDtos = _mapper.Map<IEnumerable<AccountDto>>(accountsEntities);
            return Ok(accountsDtos);
        }

        [HttpPost("accounts")]
        public async Task<IActionResult> AddCustomerAccount(long custId, AccountNewDto accountNewDto)
        {
            if (!await _repository.CustomerExists(custId)) return NotFound("Customer Not Found");

            var accountNewEntity = _mapper.Map<Account>(accountNewDto);
            await _repository.AddAccount(custId, accountNewEntity);
            await _repository.SaveChangesAsync();
            var accountDto = _mapper.Map<AccountDto>(accountNewEntity);

            return CreatedAtRoute("GetAccount", new
            {
                custId = accountNewEntity.CustId,
                accNo = accountNewEntity.AccNo
            }, accountDto);
        }

        [HttpGet("accounts/{accNo}", Name = "GetAccount")]
        public async Task<IActionResult> GetCustomerAccount(long custId, long accNo)
        {

            if (!await _repository.CustomerExists(custId)) return NotFound();

            var accountentity = await _repository.GetAccountAsync(custId, accNo);
            var accountDto = _mapper.Map<AccountDto>(accountentity);
            return Ok(accountDto);
        }

        [HttpDelete("accounts/{accNo}")]
        public async Task<IActionResult> DeleteCustomerAccount(long custId, long accNo)
        {
            var deleteCustomterAccountEntity = await _repository.GetAccountAsync(custId, accNo);
            if (deleteCustomterAccountEntity == null) return NotFound();
            _repository.DeleteAccount(deleteCustomterAccountEntity);
            await _repository.SaveChangesAsync();

            return NoContent();

        }

        [HttpPut("accounts/{accNo}")]
        public async Task<IActionResult> UpdateCustomerAccount(long custId, long accNo, AccountUpdateDto updateDto)
        {
            var accountToUpdate = await _repository.GetAccountAsync(custId, accNo);
            if (accountToUpdate == null) return NotFound();
            _mapper.Map(updateDto, accountToUpdate);
            await _repository.SaveChangesAsync();

            return NoContent();
        }

        // [HttpPatch("accounts/{accNo}")]
        // public IActionResult PatchCustomerAccount(long custId, long accNo)
        // {
        //     throw new NotImplementedException();
        // }
    }
}
