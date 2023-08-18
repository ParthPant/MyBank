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
    [Route("api/fundtransfer")]
    public class FundTransferController : ControllerBase
    {
        private readonly ILogger<CustomersController> _logger;
        private readonly IMyBankRepository _repository;
        private readonly IMapper _mapper;

        public FundTransferController(ILogger<CustomersController> logger, IMyBankRepository repository, IMapper mapper)
        {
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
            _repository = repository ?? throw new ArgumentNullException(nameof(repository));
            _mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
        }

        [HttpPost]
        public async Task<IActionResult> CreateFundTransfer(FundTransfer Dto)
        {


        }

    }


}

