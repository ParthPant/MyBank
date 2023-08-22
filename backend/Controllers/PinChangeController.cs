using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using MyBank.API.Models;
using MyBank.API.Services;
using Microsoft.AspNetCore.Authorization;

namespace MyBank.API
{
    [ApiController]
    [Authorize]
    [Route("api/accounts/{accNo}/pinChange")]
    public class PinChangeController : ControllerBase
    {
        private readonly ILogger<AccountsController> _logger;
        private readonly IMyBankRepository _repository;
        private readonly IMapper _mapper;

        public PinChangeController(ILogger<AccountsController> logger, IMyBankRepository repository, IMapper mapper)
        {
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
            _repository = repository ?? throw new ArgumentNullException(nameof(repository));
            _mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
        }

		[HttpPut]
        public async Task<IActionResult> ChangePin(long accNo, PinChangeDto pinChangeDto)
        {
            if (!await _repository.AccountExists(accNo)) {
                return NotFound("The account does not exist.");
            }
            var accountEntity = await _repository.GetAccountAsync(accNo);
            if (accountEntity.PinNo != pinChangeDto.OldPin)
            {
                return BadRequest("Provided Current Pin is incorrect.");
            }

            accountEntity.PinNo = pinChangeDto.NewPin;
            await _repository.SaveChangesAsync();
            return NoContent();
        }
	}
}
