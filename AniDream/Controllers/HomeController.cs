using JikanDotNet;
using AniDream.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace AniDream.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        Jikan jikan;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
            jikan = new Jikan();

        }
        public async Task<IActionResult> GetTop() {
            var data = await jikan.GetTopAnimeAsync();
            return Ok(data.Data);
        }

        public IActionResult Index()
        {
            // var data = await jikan.GetTopAnimeAsync();
            // ViewData["data"] = data.Data;
            return View();
        }
        

        public  ActionResult Details(long id)
        {
            //var data = await jikan.GetAnimeAsync(id);
            ViewData["Id"] = id;
            return View();
        }

    }
}