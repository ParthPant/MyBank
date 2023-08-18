using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using MyBank.API.Services;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;

namespace MyBank.API
{
    [ApiController]
    [Route("api/authentication")]
    public class AuthenticationController : ControllerBase
    {
        private readonly ILogger<AccountsController> _logger;
        private readonly IMyBankRepository _repository;
        private readonly IMapper _mapper;
        private readonly IConfiguration _configuration;

        public class AuthenticationRequestBody
        {
            public string? UserName { get; set; }
            public string? Password { get; set; }
        }

        public AuthenticationController(ILogger<AccountsController> logger, IMyBankRepository repository, IMapper mapper, IConfiguration configuration)
        {
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
            _repository = repository ?? throw new ArgumentNullException(nameof(repository));
            _mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
            _configuration = configuration ?? throw new ArgumentNullException(nameof(configuration));
        }

        [HttpPost("authenticate")]
        public async Task<IActionResult> Authenticate(AuthenticationRequestBody authenticationRequestBody)
        {
            if (authenticationRequestBody.UserName == null || authenticationRequestBody.Password == null)
            {
                return Forbid();
            }
            var user = await _repository.GetAdmin(authenticationRequestBody.UserName, authenticationRequestBody.Password);
            if (user != null)
            {
                var securityKey = new SymmetricSecurityKey(
                        Encoding.ASCII.GetBytes(_configuration["Authentication:SecretForKey"]));
                var signingCredentials = new SigningCredentials(
                        securityKey, SecurityAlgorithms.HmacSha256);

                var claimsForToken = new List<Claim>();
                claimsForToken.Add(new Claim("sub", user.Id.ToString()));
                claimsForToken.Add(new Claim("name", user.Name.ToString()));
                claimsForToken.Add(new Claim("username", user.UserName.ToString()));

                var jwtSecurityToken = new JwtSecurityToken(
                        _configuration["Authentication:Issuer"],
                        _configuration["Authentication:Audience"],
                        claimsForToken,
                        DateTime.UtcNow,
                        DateTime.UtcNow.AddHours(10),
                        signingCredentials
                        );

                var token = new JwtSecurityTokenHandler().WriteToken(jwtSecurityToken);
                return Ok(token);
            }

            return Unauthorized();
        }
    }
}
