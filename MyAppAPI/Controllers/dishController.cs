using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyAppAPI.Data;
using MyAppAPI.Models;

namespace MyAppAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class dishController : ControllerBase
    {
        private readonly DataContext _context;

        public dishController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<dish>>> GetDishes()
        {

            var dishes = await _context.dishes.Select(dish => new { 
                id = dish.Id,
                name = dish.Name,
                isFavortie = dish.isFavorite,
                portions = dish.Portions,
                difficultyLevel = dish.DifficultyLevel
            }).ToListAsync();

            return Ok(dishes);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<List<dish>>> GetDish(int id)
        {

            var dish = await _context.dishes.Include(dish => dish.Ingredients).FirstOrDefaultAsync(i => i.Id == id);
            return Ok(dish);

        }

        [HttpPost]
        public async Task<ActionResult<List<dish>>> AddDish(dish dish)
        {
            if (_context.dishes.Any(x => x.Name.ToLower() == dish.Name.ToLower()))
                return BadRequest("There is dish with this name already");

            _context.dishes.AddAsync(dish);
            await _context.SaveChangesAsync();

            return Ok(dish);

        }

        [HttpPut]
        public async Task<IActionResult> AddToFavorites([FromForm] int id)
        {

            var dish = await _context.dishes.FirstOrDefaultAsync(x=> x.Id == id);

            if (dish == null)
            {
                return BadRequest("There is no dish with this id!");
            }

            dish.isFavorite = !dish.isFavorite;

            await _context.SaveChangesAsync();

            return Ok(dish);

        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<dish>>> DeleteDish(int id)
        {

           var dish = await _context.dishes.FindAsync(id);
            if (dish == null)
                return BadRequest("Dish not found");

            _context.dishes.Remove(dish);
            await _context.SaveChangesAsync();

            return Ok();
        }
    }
}
