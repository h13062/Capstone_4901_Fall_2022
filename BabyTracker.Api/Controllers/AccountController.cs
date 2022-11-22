using BabyTracker.Core.Contract.Service;
using BabyTracker.Core.Model;
using Microsoft.AspNetCore.Mvc;

namespace BabyTracker.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController: ControllerBase
    {
        private readonly IAccountServiceAsync _accountServiceAsync;
        private readonly IConfiguration _configuration;

        public AccountController(IAccountServiceAsync accountServiceAsync, IConfiguration configuration)
        {
            _accountServiceAsync = accountServiceAsync;
            _configuration = configuration; 
        }

        [HttpPost]
        [Route("signup")]
        public async Task<IActionResult> SignUp([FromBody]SignUpModel model)
        { 
            var result = await _accountServiceAsync.SignUpAsync(model);
            if (result.Succeeded)
                return Ok(result.Succeeded);
            return Unauthorized();
        }
    }
}
