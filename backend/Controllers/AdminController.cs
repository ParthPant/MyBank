using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using MyBank.API.Models;
using MyBank.API.Entities;
using MyBank.API.Services;
using Microsoft.AspNetCore.Authorization;

namespace MyBank.API
{
    [ApiController]
    [Authorize]
    [Route("api/admins}")]
    public class AdminsController : ControllerBase
    {
        private readonly ILogger<AccountsController> _logger;
        private readonly IMyBankRepository _repository;
        private readonly IMapper _mapper;

        public AdminsController(ILogger<AccountsController> logger, IMyBankRepository repository, IMapper mapper)
        {
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
            _repository = repository ?? throw new ArgumentNullException(nameof(repository));
            _mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
        }

        [HttpPost]
        public async Task<IActionResult> AddAdmin(AdminNewDto adminNewDto)
        {
            var adminInfo = _repository.GetAdmin(adminNewDto.UserName, adminNewDto.Password);
            if (adminInfo == null) return Forbid("Admin credentials already in use");

            var adminEntity = _mapper.Map<Admin>(adminNewDto);
            _repository.AddAdmin(adminEntity);
            await _repository.SaveChangesAsync();
            return Ok();
        }
    }
}