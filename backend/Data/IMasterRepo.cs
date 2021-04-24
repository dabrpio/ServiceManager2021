using System.Collections.Generic;
using CommandApi.Models;

namespace CommandApi.Data
{
    public interface IMasterRepo
    {
        IEnumerable<Zlecenie> GetAllZlecenia();
        Zlecenie GetZlecenieByRma(int Rma);
    }
}