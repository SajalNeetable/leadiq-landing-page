using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.FileProviders;
using System;
using System.Collections.Generic;
using System.Linq;

namespace LeadIQ.Controllers
{
    [Route("api/blogs")]
    [ApiController]
    public class BlogController : ControllerBase
    {
        private readonly IFileProvider _fileProvider;

        public BlogController(IFileProvider fileProvider)
        {
            _fileProvider = fileProvider;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var blogs = new List<Blog>();

            var blogFiles = _fileProvider.GetDirectoryContents("ClientApp/src/blogs");

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
                    blogs.Add(new Blog(blogFile.Name, mdList.GetRange(start, count)));
                }
                catch (Exception) { }
            }

            return Ok(blogs.Where(x => !string.IsNullOrWhiteSpace(x.Layout) && x.Layout.Equals("blog")).OrderByDescending(x => x.PublishDate));
        }
    }

    public class Blog
    {
        public string Layout { get; set; }
        public string Url { get; set; }

        public string Title { get; set; }
        public string Description { get; set; }
        public string CoverImage { get; set; }
        public DateTime PublishDate { get; set; }

        public string Author { get; set; }
        public string AuthorImage { get; set; }
        public string AuthorProfile { get; set; }

        public Blog() { }

        public Blog(string fileName, List<string> markdown)
        {
            Url = fileName.Split(":")[0];

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
                    case "author": this.Author = value; break;
                    case "authorProfile": this.AuthorProfile = value; break;
                    case "authorImage": this.AuthorImage = value; break;
                    default: break;
                }
            }
        }
    }
}