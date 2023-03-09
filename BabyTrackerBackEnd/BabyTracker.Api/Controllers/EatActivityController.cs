using BabyTracker.Core.Contract.Service;
using BabyTracker.Core.Model;
using Microsoft.AspNetCore.Mvc;
namespace BabyTracker.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EatActivityController : ControllerBase
    {
        private readonly IEatActivyServiceAsync _eatactivyServiceAsync;
        public EatActivityController(IEatActivyServiceAsync eatactivyService)
        {
            _eatactivyServiceAsync = eatactivyService;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return Ok(await _eatactivyServiceAsync.GetAllAsync());
        }

        [HttpGet]
        [Route("{id:int}")]
        public async Task<IActionResult> GetByIdAsync(int id)
        {
            var result = await _eatactivyServiceAsync.GetByIdAsync(id);
            if (result == null)
            {
                return NotFound($"Eat activity with Id = {id} is not available");
            }
            return Ok(result);
        }


        [HttpPost]
        public async Task<IActionResult> Post(EatActivityRequestModel model)
        {
            var result = await _eatactivyServiceAsync.AddEatAsync(model);
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
            var result = await _eatactivyServiceAsync.DeleteByIdAsync(id);
            if (result != 0)
            {
                return Ok("Eat Activity Deleted Successfully");
            }
            return BadRequest();
        }

    }
}
