using Microsoft.AspNetCore.Mvc;
using mission14Api.Data;

namespace mission14Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MovieController : Controller
    {
        private MovieDbContext context;
        public MovieController(MovieDbContext temp) {
            context = temp;
        }

        //return to the json
        public IEnumerable<Movies> Get()
        {
            //return the movies that are edited and order them in alphebetical order
            return context.Movies
                .Where(x => x.Edited == "Yes")
                .OrderBy(x => x.Title)
                .ToArray();
        }

    }
}
