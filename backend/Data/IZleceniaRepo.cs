using System.Collections.Generic;
using CommandApi.Models;

namespace CommandApi.Data
{
    public interface IZleceniaRepo
    {
        bool SaveChanges();
        IEnumerable<Zlecenia> GetAllZlecenia();
        Zlecenia GetZleceniaByRma(int Rma);
        void CreateZlecenia(Zlecenia zlecenia);
        IEnumerable<Zlecenia> Get25Zlecenia();
        void UpdateZlecenia(Zlecenia zleceniaUpdate);

    }
}