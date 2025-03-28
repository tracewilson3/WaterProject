using Microsoft.AspNetCore.Mvc;
using WaterProject.API.Data;

namespace WaterProject.API.Controllers
{
    [Route("[controller]")]
    [ApiController]
    
    public class WaterController : ControllerBase
        {
            private WaterDbContext _waterContext;
            
            
            public WaterController(WaterDbContext temp)
            {
                _waterContext = temp;
            }
            [HttpGet("AllProjects")]
            public IActionResult GetProjects(int pageHowMany = 5,int pageNum=1, [FromQuery] List<string>? projectTypes = null)
            {
                // string? favProjType = Request.Cookies["FavoriteProjectType"];
                // Console.WriteLine("~~~~~~~~~~~~COOKIE ~~~~~~~~~~~~~~~ \n"+favProjType);
                //
                //
                // HttpContext.Response.Cookies.Append("FavoriteProjectType", "Borehole Well and Hand Pump", 
                //     new CookieOptions 
                //     { HttpOnly = true, 
                //         Secure = true ,
                //         SameSite = SameSiteMode.Strict,
                //         Expires = DateTime.Now.AddMinutes(1)
                //     });
                
                var query = _waterContext.Projects.AsQueryable();

                if (projectTypes != null && projectTypes.Any())
                {
                    query = query.Where(p => projectTypes.Contains(p.ProjectType));
                }
                
                var something = query
                .Skip((pageNum-1)*pageHowMany)
                .Take(pageHowMany)
                .ToList();
                
                var totalNumProjects = query.Count();
                var someObject = new
                {
                    Projects = something,
                    TotalNumProjects = totalNumProjects
                };
                return Ok(someObject);
            }

            [HttpGet("GetProjectTypes")]
            public IActionResult GetProjectTypes()
            {
                var projectTypes = _waterContext.Projects
                    .Select(p => p.ProjectType)
                    .Distinct()
                    .ToList();
                
                return Ok(projectTypes);
            }
    }
}