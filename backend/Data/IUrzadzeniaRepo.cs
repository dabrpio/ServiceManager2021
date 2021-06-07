using System.Collections.Generic;
using CommandApi.Models;

namespace CommandApi.Data
{
    public interface IUrzadzeniaRepo
    {
        bool SaveChanges();
        IEnumerable<Urzadzenia> GetAllUrzadzenia();
        Urzadzenia GetUrzadzeniaById(short? id);
        IEnumerable<Urzadzenia> GetUrzadzeniaByType(string type);
        IEnumerable<Urzadzenia> GetUrzadzeniaByBrand(string type,string brand);
        List<Urzadzenia> GetUrzadzeniaByModel(string type,string brand,string model);
        void CreateUrzadzenia(Urzadzenia urzadzenie);
        void DeleteUrzadzenia(Urzadzenia urzadzenia);

    }
}