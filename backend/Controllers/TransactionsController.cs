using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using MyBank.API.Models;
using MyBank.API.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication.JwtBearer;

namespace MyBank.API
{
    [ApiController]
    [Authorize]
    [Route("api/transactions/{accNo}")]
    public class TransactionsController : ControllerBase
    {
        private readonly ILogger<CustomersController> _logger;
        private readonly IMyBankRepository _repository;
        private readonly IMapper _mapper;

        public TransactionsController(ILogger<CustomersController> logger, IMyBankRepository repository, IMapper mapper)
        {
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
            _repository = repository ?? throw new ArgumentNullException(nameof(repository));
            _mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
        }

		[HttpGet]
		public async Task<IActionResult> GetTransactions(long accNo)
		{
            if (!await _repository.AccountExists(accNo)) return NotFound();

			var transactionEntities = await _repository.GetTransactionsAsync(accNo);
			var transactionDtos = _mapper.Map<IEnumerable<TransactionDto>>(transactionEntities);
			return Ok(transactionDtos);
		}

        [HttpPost("fundtransfer")]
        public async Task<IActionResult> FundTransfer(long custIdFrom, long accNoFrom, long custIdTo, long accNoTo, long amountToTransfer)
        {
            if(!await _repository.AccountExists(accNoFrom)) return NotFound();
            if(!await _repository.AccountExists(accNoTo)) return NotFound();

            var accountEntityFrom = await _repository.GetAccountAsync(custIdFrom, accNoFrom);
            var accountEntityTo = await _repository.GetAccountAsync(custIdTo, accNoTo);

            if (accountEntityFrom.Balance < amountToTransfer) return BadRequest();

            accountEntityFrom.Balance = accountEntityFrom.Balance - amountToTransfer;
            accountEntityTo.Balance = accountEntityTo.Balance + amountToTransfer;

            await _repository.SaveChangesAsync();

            var accountDtoFrom = _mapper.Map<AccountDto>(accountEntityFrom);
            return Ok(accountEntityFrom);

        }
    }
}
