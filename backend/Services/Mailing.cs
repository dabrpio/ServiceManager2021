using System;
using System.Net;
using System.Net.Mail;
using System.Net.Mime;
using System.Threading;
using System.ComponentModel;

namespace CommandApi.Services
{
    public class Mailing
    {
        public static void SendMail(string destination)
        {
            //testing rest of app
        }
        
       /* public static void SendMail(string destination)
        {
            SmtpClient client = new SmtpClient("naprawmnie.com");
            client.Port=25;
            client.Credentials=new System.Net.NetworkCredential("test@naprawmnie.com",Configuration.GetConnectionString("MailPasswd"));
            MailAddress from = new MailAddress("test@naprawmnie.com", "NoReply", System.Text.Encoding.UTF8);
            MailAddress to = new MailAddress(destination);
            MailMessage message = new MailMessage(from, to);
            message.Body = "This is a test email message sent by an application. "; 
            message.BodyEncoding =  System.Text.Encoding.UTF8;
            message.Subject = "test message 3";
            message.SubjectEncoding = System.Text.Encoding.UTF8;
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
        }*/
    }
}