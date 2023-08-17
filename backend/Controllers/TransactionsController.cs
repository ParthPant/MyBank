using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using MyBank.API.Models;
using MyBank.API.Services;
using Microsoft.AspNetCore.Authorization;

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
	}
}