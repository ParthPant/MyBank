using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using MyBank.API.Models;
using MyBank.API.Services;
using Microsoft.AspNetCore.Authorization;

namespace MyBank.API
{
    [ApiController]
    [Authorize]
    [Route("api/statement/{accNo}")]
    public class MiniStatementController : ControllerBase
    {
        private readonly ILogger<CustomersController> _logger;
        private readonly IMyBankRepository _repository;
        private readonly IMapper _mapper;

        public MiniStatementController(ILogger<CustomersController> logger, IMyBankRepository repository, IMapper mapper)
        {
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
            _repository = repository ?? throw new ArgumentNullException(nameof(repository));
            _mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
        }

        [HttpGet]
        public async Task<IActionResult> GetStatement(long accNo, int numTransactions = 5)
        {
            if (!await _repository.AccountExists(accNo)) return NotFound("Account Does Not Exist.");

            var account = await _repository.GetAccountAsync(accNo);
            var balance = account.Balance;
            var transactionEntities = await _repository.GetTransactionsAsync(accNo, numTransactions);
            var transactionDtos = _mapper.Map<IEnumerable<TransactionDto>>(transactionEntities);
            return Ok(new { transactions = transactionDtos, balance = balance });
        }
    }
}
