using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyAppAPI.Data;
using MyAppAPI.Models;


namespace MyAppAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ingredientsController : ControllerBase
    {
        private readonly DataContext _context;

        public ingredientsController(DataContext context)
        {
            _context = context;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<List<ingredient>>> GetIngredients(int id)
        {

            var ingredients = await _context.ingredients.Where(a => a.dishId == id).ToListAsync();

            return Ok(ingredients);
        }
    }
}
