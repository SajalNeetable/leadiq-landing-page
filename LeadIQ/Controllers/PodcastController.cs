using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.FileProviders;
using System;
using System.Collections.Generic;
using System.Linq;

namespace LeadIQ.Controllers
{
    [Route("api/podcasts")]
    [ApiController]
    public class PodcastController : ControllerBase
    {
        private readonly IFileProvider _fileProvider;

        public PodcastController(IFileProvider fileProvider)
        {
            _fileProvider = fileProvider;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var blogs = new List<Podcast>();

            var blogFiles = _fileProvider.GetDirectoryContents("ClientApp/src/podcasts");

            if (blogFiles.Exists == false)
                blogFiles = _fileProvider.GetDirectoryContents("ClientApp/build/static/media");

            foreach (var blogFile in blogFiles)
            {
                var mdList = new List<string>();
                mdList.AddRange(System.IO.File.ReadAllLines(blogFile.PhysicalPath));

                var start = mdList.IndexOf("---") + 1;
                var count = mdList.LastIndexOf("---") - start;

                try
                {
                    blogs.Add(new Podcast(blogFile.Name, mdList.GetRange(start, count)));
                }
                catch (Exception) { }
            }

            return Ok(blogs.Where(x => !string.IsNullOrWhiteSpace(x.Layout) && x.Layout.Equals("podcast")).OrderByDescending(x => x.PublishDate));
        }
    }

    public class Podcast
    {
        public string Layout { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string CoverImage { get; set; }
        public DateTime PublishDate { get; set; }
        public string Url { get; set; }

        public Podcast() { }

        public Podcast(string fileName, List<string> markdown)
        {
            Url = fileName.Split(".")[0];

            foreach (var line in markdown)
            {
                if (!line.Contains(":")) continue;
                var name = line.Split(":")[0];
                var value = line.Split(":")[1].Trim();

                switch (name)
                {
                    case "layout": this.Layout = value; break;
                    case "title": this.Title = value; break;
                    case "description": this.Description = value; break;
                    case "coverImage": this.CoverImage = value; break;
                    case "publishDate": this.PublishDate = DateTime.Parse(value); break;
                    default: break;
                }
            }
        }
    }
}