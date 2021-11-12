using System.Collections.Generic;
using CommandApi.Models;

namespace CommandApi.Data
{
    public struct Urzadzenia2{
        public string Type{get;set;}
        public string Brand{get;set;}
    }
    public interface IDevicesRepo
    {
        bool SaveChanges();
        IEnumerable<Device> GetAllUrzadzenia();
        Device GetDeviceById(short? id);
        List<string> GetAllTypes();
        List<string> GetSpecificBrand(string type);
        List<string> GetSpecificModel(string type,string brand);
        List<string> GetAllBrands();
        List<string> GetAllModels();
        List<Urzadzenia2> GetBrandsTest();
        List<Device> GetModelsTest();
        Device GetDeviceByModel(string type, string brand, string model);

        void CreateDevice(Device urzadzenie);
        void DeleteUrzadzenia(Device urzadzenie);
        void UpdateUrzadzenia(Device urzadzenie);

    }
}