using BabyTracker.Core.Contract.Service;
using BabyTracker.Core.Model;
using Microsoft.AspNetCore.Mvc;
namespace BabyTracker.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlayActivityControllercs: ControllerBase
    {
        private readonly IPlayActivtyServiceAsync _playActivityServiceAsync;
        public PlayActivityControllercs(IPlayActivtyServiceAsync playActivityServiceAsync)
        {
            _playActivityServiceAsync = playActivityServiceAsync;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return Ok(await _playActivityServiceAsync.GetAllAsync());
        }

        [HttpGet]
        [Route("{id:int}")]
        public async Task<IActionResult> GetByIdAsync(int id)
        {
            var result = await _playActivityServiceAsync.GetByIdAsync(id);
            if (result == null)
            {
                return NotFound($"Play activity with Id = {id} is not available");
            }
            return Ok(result);
        }

        [HttpPost]
        public async Task<IActionResult> Post(PlayActivityModel model)
        {
            var result = await _playActivityServiceAsync.AddPlayAsync(model);
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
            var result = await _playActivityServiceAsync.DeleteByIdAsync(id);
            if (result != 0)
            {
                return Ok("Play Activity Deleted Successfully");
            }
            return BadRequest();
        }

    }
}
