using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CommandApi.Data;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace CommandApi
{
    public class Startup
    {
        readonly string MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;

        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
           services.AddCors(options => {options.AddPolicy(name: MyAllowSpecificOrigins, builder => {builder.WithOrigins("http://localhost:3000", "https://localhost:3001").AllowAnyHeader().AllowAnyMethod();});});
            // services.AddCors(options => {options.AddPolicy(name: MyAllowSpecificOrigins, builder => {builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();});});
            services.AddDbContext<SM2021Context>(opt=>opt.UseSqlServer(Configuration.GetConnectionString("CommanderConnection")));

            services.AddControllers();

            services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

            services.AddScoped<ITicketsRepo, SqlTicketsRepo>();
            services.AddScoped<IClientsRepo, SqlClientsRepo>();
            services.AddScoped<IEmployeeRepo, SqlEmployeeRepo>();
            services.AddScoped<IDevicesRepo, SqlDevicesRepo>();
            services.AddScoped<IStatisticsRepo, SqlStatisticsRepo>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {

            app.UseHttpsRedirection();

            app.UseRouting();
            app.UseCors(MyAllowSpecificOrigins);

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
