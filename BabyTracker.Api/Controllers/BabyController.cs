using BabyTracker.Core.Contract.Service;
using BabyTracker.Core.Model;
using Microsoft.AspNetCore.Mvc;

namespace BabyTracker.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BabyController: ControllerBase
    {
        private readonly IBabyServiceAsync babyServiceAsync;
        public BabyController(IBabyServiceAsync babyServiceAsync)
        {
            this.babyServiceAsync = babyServiceAsync;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return Ok(await babyServiceAsync.GetAllAsync());
        }

        [HttpGet]
        [Route("{id:int}")]
        public async Task<IActionResult> GetByIdAsync(int id)
        {
            var result = await babyServiceAsync.GetByIdAsync(id);
            if (result == null)
            {
                return NotFound($"Baby object with Id = {id} is not available");
            }
            return Ok(result);
        }

        [HttpGet]
        [Route("{name}")]
        public async Task<IActionResult> GetByNameAsync(string name)
        {
            var result = await babyServiceAsync.GetByNameAsync(name);
            if (result == null)
            {
                return NotFound($"Baby object with Name = {name} is not available");
            }
            return Ok(result);
        }

        [HttpPost]
        public async Task<IActionResult> Post(BabyModel model)
        {
            var result = await babyServiceAsync.AddBabyAsync(model);
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
            var result = await babyServiceAsync.DeleteByIdAsync(id);
            if (result != 0)
            {
                return Ok("Baby Deleted Successfully");
            }
            return BadRequest();
        }

    }
}
