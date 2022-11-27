using BabyTracker.Core.Contract.Service;
using BabyTracker.Core.Model;
using Microsoft.AspNetCore.Mvc;
namespace BabyTracker.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BabySitterController: ControllerBase
    {
        private readonly IBabySitterServiceAsync babysitterServiceAsync;
        public BabySitterController(IBabySitterServiceAsync babysitterServiceAsync)
        {
            this.babysitterServiceAsync = babysitterServiceAsync;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return Ok(await babysitterServiceAsync.GetAllAsync());
        }

        [HttpGet]
        [Route("{id:int}")]
        public async Task<IActionResult> GetByIdAsync(int id)
        {
            var result = await babysitterServiceAsync.GetByIdAsync(id);
            if (result == null)
            {
                return NotFound($"Baby sitter object with Id = {id} is not available");
            }
            return Ok(result);
        }

        [HttpGet]
        [Route("{name}")]
        public async Task<IActionResult> GetByNameAsync(string name)
        {
            var result = await babysitterServiceAsync.GetByNameAsync(name);
            if (result == null)
            {
                return NotFound($"Baby sitterobject with Name = {name} is not available");
            }
            return Ok(result);
        }

        [HttpPost]
        public async Task<IActionResult> Post(BabySitterModel model)
        {
            var result = await babysitterServiceAsync.AddBabyAsync(model);
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
            var result = await babysitterServiceAsync.DeleteByIdAsync(id);
            if (result != 0)
            {
                return Ok("Baby Sitter Deleted Successfully");
            }
            return BadRequest();
        }

    }
}
