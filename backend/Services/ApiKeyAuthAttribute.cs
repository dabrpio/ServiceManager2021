using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.Configuration;
using System.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Http;
using CommandApi.Data;
using CommandApi.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.SqlServer;


namespace CommandApi.Services{
    [System.AttributeUsage(System.AttributeTargets.Class | System.AttributeTargets.Method)]
    public class ApiKeyAuthAttribute : System.Attribute, IActionFilter
    {
        private const string ApiKeyHeaderName = "ApiKey";

        public void  OnActionExecuting(ActionExecutingContext context){
            if(!context.HttpContext.Request.Headers.TryGetValue(ApiKeyHeaderName, out var potentialApiKey)){
                context.Result = new UnauthorizedResult();
                return;
            }
            
            string projectPath = AppDomain.CurrentDomain.BaseDirectory.Split(new String[] { @"bin\" }, StringSplitOptions.None)[0];
            IConfigurationRoot configuration = new ConfigurationBuilder()
                .SetBasePath(projectPath)
                .AddJsonFile("appsettings.json")
                .Build();
            var connectionstring = configuration.GetConnectionString("CommanderConnection");
            var optionsBuilder = new DbContextOptionsBuilder<SM2021Context>();
                optionsBuilder.UseSqlServer(connectionstring);
            using(var db = new SM2021Context(optionsBuilder.Options)){
                var commandItem = Task.Run(async() => await db.Employees.FirstOrDefaultAsync(m=>m.ApiKey==potentialApiKey.ToString())).Result;
                if(commandItem==null){
                    context.Result = new UnauthorizedResult();
                    return;
                }
                else{
                    if(commandItem.Type==4){
                        string comp=context.HttpContext.Request.Path.Value.ToString();
                        if(
                        comp.Contains("/api/employees/pswd")||
                        comp.Contains("/api/devices")||
                        comp.Contains("/api/tickets/biz/")
                        ){
                        }else{
                            context.Result = new UnauthorizedResult();
                            return;
                        }
                    }
                    if(commandItem.Ttl<DateTime.Now){
                        context.Result = new UnauthorizedResult();
                        return;
                    }
                }
                commandItem.Ttl=DateTime.Now.AddHours(1);
                db.SaveChanges();
            }
        }
        public void OnActionExecuted(ActionExecutedContext context){
        }
    
    }
}