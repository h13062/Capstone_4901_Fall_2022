using BabyTracker.Core.Contract.Service;
using BabyTracker.Core.Model;
using Microsoft.AspNetCore.Mvc;

namespace BabyTracker.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SleepActivityController: ControllerBase
    {
        private readonly IPlayActivityServiceAsync _sleepactivyServiceAsync;
        public SleepActivityController(IPlayActivityServiceAsync sleepactivyServiceAsync)
        {
            _sleepactivyServiceAsync = sleepactivyServiceAsync;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return Ok(await _sleepactivyServiceAsync.GetAllAsync());
        }

        [HttpGet]
        [Route("{id:int}")]
        public async Task<IActionResult> GetByIdAsync(int id)
        {
            var result = await _sleepactivyServiceAsync.GetByIdAsync(id);
            if (result == null)
            {
                return NotFound($"Sleep activity with Id = {id} is not available");
            }
            return Ok(result);
        }

        [HttpPost]
        public async Task<IActionResult> Post(SleepActivityModel model)
        {
            var result = await _sleepactivyServiceAsync.AddSleepAsync(model);
            if (result != 0)
            {
                return Ok(model);
            }
            return BadRequest();
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var result = await _sleepactivyServiceAsync.DeleteByIdAsync(id);
            if (result != 0)
            {
                return Ok("Sleep Activity Deleted Successfully");
            }
            return BadRequest();
        }
    }
}
