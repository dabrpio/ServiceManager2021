using System;
using System.Net;
using System.Net.Mail;
using System.Net.Mime;
using System.Threading;
using System.ComponentModel;
using Microsoft.Extensions.Configuration;

namespace CommandApi.Services
{
    public class Mailing
    {
        private static AlternateView Mail_Body3(int rma)  
        {  
            LinkedResource Img = new LinkedResource(@"C:\Users\zjaro\Downloads\stopka1.jpeg", MediaTypeNames.Image.Jpeg);  
            Img.ContentId = "MyImage";  
            string str = @"  <table>
                <tr>
                    Szanowny Kliencie, </tr>
                <tr></br></tr>
                <tr></br></tr>
                <tr></br></tr>

                <tr>
                    Zlecenie o numerze RMA - "+rma.ToString()+@" -  oczekuje na decyzję w sprawie kosztów.</tr>
                <tr></br></tr>
                <tr>
                    Prosimy o podjęcie decyzji i wybranie właściwej opcji po kliknięciu w <a href=""https://www.naprawmnie.com/status"">link</a>.</tr>
                <tr></br></tr>
                <tr></br></tr>                
                <tr></br></tr>

                <tr>
                    Pozdrawiamy,</tr>
                <tr></br></tr>
                <tr>
                    Serwis Napraw Mnie</tr>
                <tr>
                    <img src=cid:MyImage  id='img' alt='' width='378px' height='140px'/></tr>  
                </table>
                ";  
            AlternateView AV =   
            AlternateView.CreateAlternateViewFromString(str, null, MediaTypeNames.Text.Html);  
            AV.LinkedResources.Add(Img);  
            return AV;  
        } 

        public static void SendMailCostApproval(string destination, int rma){
            string projectPath = AppDomain.CurrentDomain.BaseDirectory.Split(new String[] { @"bin\" }, StringSplitOptions.None)[0];
            IConfigurationRoot configuration = new ConfigurationBuilder()
                .SetBasePath(projectPath)
                .AddJsonFile("appsettings.json")
                .Build();
            SmtpClient client = new SmtpClient("naprawmnie.com");
            client.Port=25;
            client.Credentials=new System.Net.NetworkCredential("test@naprawmnie.com", configuration.GetConnectionString("MailPasswd"));
            MailAddress from = new MailAddress("test@naprawmnie.com", "Serwis Napraw Mnie - NoReply", System.Text.Encoding.UTF8);
            MailAddress to = new MailAddress(destination);
            MailMessage message = new MailMessage(from, to);
            message.BodyEncoding =  System.Text.Encoding.UTF8;
            message.IsBodyHtml=true;
            message.Subject = "Oczekiwanie na akceptacje kosztów";
            message.SubjectEncoding = System.Text.Encoding.UTF8;
            message.AlternateViews.Add(Mail_Body3(rma));
            try
            {
                 client.Send(message);
            }
            catch (System.Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
            finally
            {
                client.Dispose();
                Console.WriteLine("Done.");
            }            
        }
        private static AlternateView Mail_Body2( string brand, string model, int rma)  
        {  
            LinkedResource Img = new LinkedResource(@"C:\Users\zjaro\Downloads\stopka1.jpeg", MediaTypeNames.Image.Jpeg);  
            Img.ContentId = "MyImage";  
            string str = @"  <table>
                <tr>
                    Szanowny Kliencie, </tr>
                <tr></br></tr>
                <tr></br></tr>
                <tr></br></tr>

                <tr>
                    Urządzenie: " + brand +" "+model+", o numerze RMA - "+rma.ToString()+@" - czeka na odbiór.</tr>
                <tr></br></tr>
                <tr></br></tr>                
                <tr></br></tr>
                <tr>
                    Serwis Napraw Mnie</tr>
                <tr>
                    <img src=cid:MyImage  id='img' alt='' width='378px' height='140px'/></tr>  
                </table>
                ";  
            AlternateView AV =   
            AlternateView.CreateAlternateViewFromString(str, null, MediaTypeNames.Text.Html);  
            AV.LinkedResources.Add(Img);  
            return AV;  
        }
        public static void SendMailDone(string destination, string brand, string model, int rma){

            string projectPath = AppDomain.CurrentDomain.BaseDirectory.Split(new String[] { @"bin\" }, StringSplitOptions.None)[0];
            IConfigurationRoot configuration = new ConfigurationBuilder()
                .SetBasePath(projectPath)
                .AddJsonFile("appsettings.json")
                .Build();
            SmtpClient client = new SmtpClient("naprawmnie.com");
            client.Port=25;
            client.Credentials=new System.Net.NetworkCredential("test@naprawmnie.com", configuration.GetConnectionString("MailPasswd"));
            MailAddress from = new MailAddress("test@naprawmnie.com", "Serwis Napraw Mnie - NoReply", System.Text.Encoding.UTF8);
            MailAddress to = new MailAddress(destination);
            MailMessage message = new MailMessage(from, to);
            message.BodyEncoding =  System.Text.Encoding.UTF8;
            message.IsBodyHtml=true;
            message.Subject = "Urządzenie gotowe do odbioru";
            message.SubjectEncoding = System.Text.Encoding.UTF8;
            message.AlternateViews.Add(Mail_Body2(  brand,  model,  rma));
            try
            {
                 client.Send(message);
            }
            catch (System.Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
            finally
            {
                client.Dispose();
                Console.WriteLine("Done.");
            }
        }
        private static AlternateView Mail_Body( string brand, string model, int rma)  
        {  
            LinkedResource Img = new LinkedResource(@"C:\Users\zjaro\Downloads\stopka1.jpeg", MediaTypeNames.Image.Jpeg);  
            Img.ContentId = "MyImage";  
            string str = @"  <table>
                <tr>
                    Szanowny Kliencie, </tr>
                <tr></br></tr>
                <tr></br></tr>
                <tr></br></tr>

                <tr>
                    Urządzenie: " + brand +" "+model+", o numerze zlecenia - "+rma.ToString()+@" - zostało przyjęte do naprawy.</tr>
                <tr></br></tr>
                <tr>
                    O dalszych krokach będziemy informować mailowo bądź telefonicznie. </tr>
                <tr></br></tr>
                <tr></br></tr>                
                <tr></br></tr>

                <tr>
                    Pozdrawiamy,</tr>
                <tr></br></tr>
                <tr>
                    Serwis Napraw Mnie</tr>
                <tr>
                    <img src=cid:MyImage  id='img' alt='' width='378px' height='140px'/></tr>  
                </table>
                ";  
            AlternateView AV =   
            AlternateView.CreateAlternateViewFromString(str, null, MediaTypeNames.Text.Html);  
            AV.LinkedResources.Add(Img);  
            return AV;  
        }  

        public static void SendMail(string destination, string brand, string model, int rma)
        {
            string projectPath = AppDomain.CurrentDomain.BaseDirectory.Split(new String[] { @"bin\" }, StringSplitOptions.None)[0];
            IConfigurationRoot configuration = new ConfigurationBuilder()
                .SetBasePath(projectPath)
                .AddJsonFile("appsettings.json")
                .Build();
            SmtpClient client = new SmtpClient("naprawmnie.com");
            client.Port=25;
            client.Credentials=new System.Net.NetworkCredential("test@naprawmnie.com", configuration.GetConnectionString("MailPasswd"));
            MailAddress from = new MailAddress("test@naprawmnie.com", "Serwis Napraw Mnie - NoReply", System.Text.Encoding.UTF8);
            MailAddress to = new MailAddress(destination);
            MailMessage message = new MailMessage(from, to);
            message.BodyEncoding =  System.Text.Encoding.UTF8;
            message.IsBodyHtml=true;
            message.Subject = "Przyjęcie zgłoszenia";
            message.SubjectEncoding = System.Text.Encoding.UTF8;
            message.AlternateViews.Add(Mail_Body(  brand,  model,  rma));
            try
            {
                 client.Send(message);
            }
            catch (System.Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
            finally
            {
                client.Dispose();
                Console.WriteLine("Done.");
            }
        }
    }
}