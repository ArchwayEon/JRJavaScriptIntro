using JRJavaScriptIntro.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace JRJavaScriptIntro.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        return View();
    }

    public IActionResult Numbers()
    {
        return View();
    }

    public IActionResult MilesPerGallon()
    {
        return View();
    }

    public IActionResult RangeInput()
    {
        return View();
    }

    public IActionResult Graphics()
    {
        return View();
    }

    public IActionResult Privacy()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
