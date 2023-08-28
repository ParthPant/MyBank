using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using MyBank.API.Models;
using MyBank.API.Entities;
using MyBank.API.Services;
using Microsoft.AspNetCore.Authorization;
using MyBank.API.Types;
using MyBank.API.Exceptions;

namespace MyBank.API
{
    [ApiController]
    [Authorize]
    [Route("api/fundtransfer")]
    public class FundTransferController : ControllerBase
    {
        private readonly ILogger<FundTransferController> _logger;
        private readonly IMyBankRepository _repository;
        private readonly IMapper _mapper;

        public FundTransferController(ILogger<FundTransferController> logger, IMyBankRepository repository, IMapper mapper)
        {
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
            _repository = repository ?? throw new ArgumentNullException(nameof(repository));
            _mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
        }

        [HttpPost]
        public async Task<IActionResult> CreateFundTransfer(FundTransferDto fundTransfer)
        {
            if (!await _repository.AccountExists(fundTransfer.AccNoFrom)) return NotFound("Source account does not exist");
            if (!await _repository.AccountExists(fundTransfer.AccNoTo)) return NotFound("Destination account does not exist");

            try {
                var AccFromEntity = await _repository.GetAccountAsync(fundTransfer.AccNoFrom);
                var AccToEntity = await _repository.GetAccountAsync(fundTransfer.AccNoTo);

                var fromCustEntity = await _repository.GetCustomerAsync(AccFromEntity.CustId);
                var toCustEntity = await _repository.GetCustomerAsync(AccToEntity.CustId);

                if (fromCustEntity != null && !fromCustEntity.Enabled)
                {
                    return BadRequest("From Customer is disabled");
                }

                if (toCustEntity != null && !toCustEntity.Enabled)
                {
                    return BadRequest("To Customer is disabled");
                }

                var AmountToTransfer = fundTransfer.TransactionAmount;

                if (AccFromEntity.Balance < AmountToTransfer) return BadRequest("Amount to Transfer exceeds the account balance");

                AccFromEntity.Balance = AccFromEntity.Balance - AmountToTransfer;
                AccToEntity.Balance = AccToEntity.Balance + AmountToTransfer;

                Transaction transactionFrom = new Transaction(AccFromEntity.AccNo, TransactionType.Debit, AmountToTransfer, true);
                Transaction transactionTo = new Transaction(AccToEntity.AccNo, TransactionType.Credit, AmountToTransfer, true);

                AccFromEntity.Transactions.Add(transactionFrom);
                AccToEntity.Transactions.Add(transactionTo);

                await _repository.SaveChangesAsync();

                return NoContent();
            } catch (CustomerNotFoundException ex) {
                return NotFound(ex.Message);
            } catch (AccountNotFoundException ex) {
                return NotFound(ex.Message);
            }
        }

    }


}
