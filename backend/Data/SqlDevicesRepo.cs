using System;
using System.Collections.Generic;
using System.Linq;
using CommandApi.Models;

namespace CommandApi.Data
{
    public class SqlDevicesRepo : IDevicesRepo
    {
        private readonly SM2021Context _context;
        public SqlDevicesRepo(SM2021Context context)
        {
            _context = context;
        }

        public void CreateUrzadzenia(Device urzadzenie)
        {
            if(urzadzenie==null){
                throw new ArgumentNullException(nameof(urzadzenie));
            }
            _context.Devices.Add(urzadzenie);
        }

        public void DeleteUrzadzenia(Device urzadzenia)
        {
            if(urzadzenia==null){
                throw new ArgumentNullException(nameof(urzadzenia));
            }
            _context.Devices.Remove(urzadzenia);
        }

        public IEnumerable<Device> GetAllUrzadzenia()
        {
            return _context.Devices.OrderByDescending(p=>p.IdDevices).ToList();
        }

        public List<string> GetAllTypes()
        {
            List<string> commandItem=new List<string>();
            commandItem=_context.Devices.Select(p=>p.Type).Distinct().ToList();
            return commandItem;
        }
        public List<string> GetSpecificBrand(string type)
        {
            List<string> commandItem=new List<string>();
            commandItem=_context.Devices.Where(p=>p.Type==type).Select(p=>p.Brand).Distinct().ToList();
            return commandItem;
        }

        public List<string> GetSpecificModel(string type, string brand)
        {
            List<string> commandItem=new List<string>();
            commandItem=_context.Devices.Where(p=>p.Type==type&&p.Brand==brand).Select(p=>p.Model).Distinct().ToList();        
            return commandItem;
        }

        public Device GetUrzadzeniaById(short? id)
        {
            _context.Tickets.ToList();
            return _context.Devices.FirstOrDefault(p=>p.IdDevices==id);
        }

        public bool SaveChanges()
        {
           return (_context.SaveChanges()>=0);
        }

        public void UpdateUrzadzenia(Device urzadzenie)
        {
            //nothing
        }

        public List<string> GetAllBrands()
        {
            List<string> commandItem=new List<string>();
            commandItem=_context.Devices.Select(p=>p.Brand).Distinct().ToList();
            return commandItem;
        }

        public List<string> GetAllModels()
        {
            List<string> commandItem=new List<string>();
            commandItem=_context.Devices.Select(p=>p.Model).Distinct().ToList();
            return commandItem;
        }

        public List<Urzadzenia2> GetBrandsTest()
        {
            List<Urzadzenia2> data=new List<Urzadzenia2>();
            data = _context.Devices.Select(p=>new Urzadzenia2{Brand=p.Brand,Type=p.Type}).OrderBy(p=>p.Brand).Distinct().ToList();
            return data;

        }

        public List<Device> GetModelsTest()
        {
            return _context.Devices.OrderBy(p=>p.Model).Distinct().ToList();
        }

        public List<Device> GetUrzadzeniaByModel(string type, string brand, string model)
        {
            return _context.Devices.OrderBy(p=>p.Model).Where(p=>p.Brand==brand&&p.Type==type&&p.Model==model).ToList();
        }
    }
}