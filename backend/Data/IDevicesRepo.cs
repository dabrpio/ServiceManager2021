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
        IEnumerable<Device> GetAllDevices();
        Device GetDeviceById(int id);
        List<string> GetAllTypes();
        List<string> GetSpecificBrand(string type);
        List<string> GetSpecificModel(string type,string brand);
        List<string> GetAllBrands();
        List<string> GetAllModels();
        List<Urzadzenia2> GetBrandsTest();
        List<Device> GetModelsTest();
        Device GetDeviceByModel(string type, string brand, string model);

        void CreateDevice(Device urzadzenie);
        void DeleteDevice(Device urzadzenie);
        void UpdateUrzadzenia(Device urzadzenie);

    }
}