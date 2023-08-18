using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using MyBank.API.Models;
using MyBank.API.Entities;
using MyBank.API.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using MyBank.API.Types;

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
            var AccFromEntity = await _repository.GetAccountAsync(fundTransfer.AccNoFrom);
            var AccToEntity = await _repository.GetAccountAsync(fundTransfer.AccNoTo);
            var AmountToTransfer = fundTransfer.TransactionAmount;
            var AccNoFrom = AccFromEntity.AccNo;
            var AccNoTo = AccToEntity.AccNo;


            if (!await _repository.AccountExists(AccNoFrom)) return NotFound();
            if (!await _repository.AccountExists(AccNoTo)) return NotFound();

            if (AccFromEntity.Balance < AmountToTransfer) return BadRequest("Amount to Transfer exceeds the account balance");

            AccFromEntity.Balance = AccFromEntity.Balance - AmountToTransfer;
            AccToEntity.Balance = AccToEntity.Balance + AmountToTransfer;

            Transaction transactionFrom = new Transaction(AccFromEntity.AccNo, TransactionType.Debit, AmountToTransfer);
            Transaction transactionTo = new Transaction(AccToEntity.AccNo, TransactionType.Credit, AmountToTransfer);
            await _repository.SaveChangesAsync();

            var transactionFromDto = _mapper.Map<TransactionDto>(transactionFrom);
            var transactionToDto = _mapper.Map<TransactionDto>(transactionTo);

            return Ok(transactionFromDto);
        }

    }


}

