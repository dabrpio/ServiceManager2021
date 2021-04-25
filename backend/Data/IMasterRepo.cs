using System.Collections.Generic;
using CommandApi.Models;

namespace CommandApi.Data
{
    public interface IMasterRepo
    {
        bool SaveChanges();
        IEnumerable<Zlecenie> GetAllZlecenia();
        Zlecenie GetZlecenieByRma(int Rma);
        void CreateZlecenie(Zlecenie zlecenie);
    }
}