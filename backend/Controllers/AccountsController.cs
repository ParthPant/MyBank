using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using MyBank.API.Services;

namespace MyBank.API
{
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
        public IActionResult GetCustomerAccounts(long custId)
        {
            throw new NotImplementedException();
        }

        [HttpPost("accounts")]
        public IActionResult AddCustomerAccount(long custId)
        {
            throw new NotImplementedException();
        }

        [HttpGet("accounts/{accNo}")]
        public IActionResult GetCustomerAccount(long custId, long accNo)
        {
            throw new NotImplementedException();
        }

        [HttpDelete("accounts/{accNo}")]
        public IActionResult DeleteCustomerAccount(long custId, long accNo)
        {
            throw new NotImplementedException();
        }

        [HttpPut("accounts/{accNo}")]
        public IActionResult UpdateCustomerAccount(long custId, long accNo)
        {
            throw new NotImplementedException();
        }

        // [HttpPatch("accounts/{accNo}")]
        // public IActionResult PatchCustomerAccount(long custId, long accNo)
        // {
        //     throw new NotImplementedException();
        // }
    }
}
