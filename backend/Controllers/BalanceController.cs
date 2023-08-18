using Microsoft.AspNetCore.Mvc;
using MyBank.API.Services;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;

namespace MyBank.API
{
    [ApiController]
    [Authorize]
    [Route("api/balance/{accNo}")]
    public class BalanceController : ControllerBase
    {
        private readonly ILogger<CustomersController> _logger;
        private readonly IMyBankRepository _repository;
        private readonly IMapper _mapper;

        public BalanceController(ILogger<CustomersController> logger, IMyBankRepository repository, IMapper mapper)
        {
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
            _repository = repository ?? throw new ArgumentNullException(nameof(repository));
            _mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
        }

        [HttpGet]
        public async Task<IActionResult> GetAccountBalance(long accNo)
        {
            if (!await _repository.AccountExists(accNo)) return NotFound("Account Not Found");
            var accountEntity = await _repository.GetAccountAsync(accNo);
            return Ok(accountEntity.Balance);
        }
    }
}