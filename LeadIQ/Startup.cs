using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;

namespace LeadIQ
{
    public class Startup
    {


    public Startup(IConfiguration configuration)
    {
        Configuration = configuration;
        DirectoryInfo d = new DirectoryInfo(@"./ClientApp/src/blogs");//Assuming Test is your Folder
        FileInfo[] Files = d.GetFiles("*.md"); //Getting Text files
                                               // string str = "";
        List<MdFileData> str = new List<MdFileData>();
        foreach (FileInfo file in Files)
        {
                var fileName = file.Name;
                string title = "";
                string coverImage = "";
                string author = "";
                string authorImage = "";
                string navLink = "";

                string[] text = System.IO.File.ReadAllLines(@"./ClientApp/src/blogs/" + fileName);
                foreach (String line in text)
                {
                   
                    if (line.Contains("title:"))
                    {
                        title = line.Split(":")[1].ToString().TrimStart();
                    }
                    else if(line.Contains("coverImage:"))
                    {
                        coverImage = line.Split(":")[1].ToString().TrimStart();
                    }
                    else if(line.Contains("author:"))
                    {
                        author = line.Split(":")[1].ToString().TrimStart();
                    }
                    else if (line.Contains("authorImage:"))
                    {
                        authorImage = line.Split(":")[1].ToString().TrimStart();

                    }
                   

                };
                str.Add(new MdFileData()
                {
                    Title = title,
                    Author = author,
                    AuthorImage = authorImage,
                    BackgroundImage = coverImage,
                    navLink = "/blog/" + file.Name.Split(".md")[0]
                });

            }

            string json = JsonConvert.SerializeObject(str.ToArray());
        ////write string to file
        File.WriteAllText(@"./ClientApp/src/data/path.json", json);
    }

    public IConfiguration Configuration { get; }

    public void ConfigureServices(IServiceCollection services)
    {
        services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
        services.AddSpaStaticFiles(configuration =>
        {
            configuration.RootPath = "ClientApp/build";
        });
    }

    public void Configure(IApplicationBuilder app, IHostingEnvironment env)
    {
        app.UseExceptionHandler("/Error");
        app.UseHsts();
        app.UseHttpsRedirection();
        app.UseStaticFiles();
        app.UseSpaStaticFiles();

        app.UseSpa(spa =>
        {
            spa.Options.SourcePath = "ClientApp";

            if (env.IsDevelopment())
            {
                spa.UseReactDevelopmentServer(npmScript: "start");
            }
        });
    }
}

    public class MdFileData
    {
        public string Title { get; set; }
        public string Author { get; set; }
        public string AuthorImage { get; set; }
        public string BackgroundImage { get; set; }
        public string navLink { get; set; }
        
    }
}