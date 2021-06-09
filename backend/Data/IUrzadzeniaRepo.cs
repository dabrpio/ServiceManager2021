using System.Collections.Generic;
using CommandApi.Models;

namespace CommandApi.Data
{
    public interface IUrzadzeniaRepo
    {
        bool SaveChanges();
        IEnumerable<Urzadzenia> GetAllUrzadzenia();
        Urzadzenia GetUrzadzeniaById(short? id);
        List<string> GetAllTypes();
        List<string> GetSpecificBrand(string type);
        List<string> GetSpecificModel(string type,string brand);
        List<string> GetAllBrands();
        List<string> GetAllModels();
        void CreateUrzadzenia(Urzadzenia urzadzenie);
        void DeleteUrzadzenia(Urzadzenia urzadzenie);
        void UpdateUrzadzenia(Urzadzenia urzadzenie);

    }
}