using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using MyBank.API.Models;
using MyBank.API.Entities;
using MyBank.API.Services;
using Microsoft.AspNetCore.Authorization;
using MyBank.API.Types;

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

        [HttpPost]
        public async Task<IActionResult> CreateTransactions(TransactionDto transaction)
        {
            if (!await _repository.AccountExists(transaction.AccNo)) return NotFound("account does not exist");
            //if (!await _repository.AccountExists(fundTransfer.AccNoTo)) return NotFound("Destination account does not exist");

            var AccFromEntity = await _repository.GetAccountAsync(transaction.AccNo);
            //var AccToEntity = await _repository.GetAccountAsync(fundTransfer.AccNoTo);
            Console.WriteLine(AccFromEntity.ToString());
            var AmountToTransfer = transaction.Amount;
            var AccNoFrom = AccFromEntity.AccNo;
            var transactionType = transaction.TransactionType;
            bool approvedStatus = true;

            switch (transactionType)
            {
                case TransactionType.Debit :
                {
                    if (AccFromEntity.Balance < AmountToTransfer) return BadRequest("Amount to Transfer exceed the account balance");
                    AccFromEntity.Balance = AccFromEntity.Balance - AmountToTransfer;
                    break;
                }
                case TransactionType.Credit :
                {
                    AccFromEntity.Balance = AccFromEntity.Balance + AmountToTransfer;
                    break;
                }
                case TransactionType.Cheque :
                {
                    approvedStatus = false;
                    break;
                }
            }

            Transaction transactionEntity = new Transaction(AccFromEntity.AccNo, transactionType, AmountToTransfer, approvedStatus);

            AccFromEntity.Transactions.Add(transactionEntity);

            await _repository.SaveChangesAsync();

            return Ok(AccFromEntity.Balance);
        }

        [HttpPut("approve/{id}")]
        public async Task<IActionResult> ChequeApproval(long AccNo, long Id)
        {
            if (!await _repository.AccountExists(AccNo)) return NotFound("account does not exist");
            //if (!await _repository.AccountExists(fundTransfer.AccNoTo)) return NotFound("Destination account does not exist");

            var AccFromEntity = await _repository.GetAccountAsync(AccNo);

            var transactionEntity = await _repository.GetTransactionAsync(Id);


            if (! transactionEntity.Approved)
            {
                transactionEntity.Approved = true;
                AccFromEntity.Balance = AccFromEntity.Balance + transactionEntity.Amount;
            }



            await _repository.SaveChangesAsync();

            return Ok(AccFromEntity.Balance);
        }
    }
}
