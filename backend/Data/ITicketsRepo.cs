using System.Collections.Generic;
using CommandApi.Models;

namespace CommandApi.Data
{
    public interface ITicketsRepo
    {
        bool SaveChanges();
        IEnumerable<Ticket> GetAllZlecenia();
        Ticket GetZleceniaByRma(int Rma);
        void CreateZlecenia(Ticket zlecenia);
        IEnumerable<Ticket> Get25Zlecenia();
        void UpdateZlecenia(Ticket zleceniaUpdate);
        void DeleteZlecenia(Ticket zlecenie);
    }
}