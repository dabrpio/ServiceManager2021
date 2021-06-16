using System;
using System.Collections.Generic;
using System.Linq;
using CommandApi.Models;

namespace CommandApi.Data
{
    public class SqlUrzadzeniaRepo : IUrzadzeniaRepo
    {
        private readonly SM2021Context _context;
        public SqlUrzadzeniaRepo(SM2021Context context)
        {
            _context = context;
        }

        public void CreateUrzadzenia(Urzadzenia urzadzenie)
        {
            if(urzadzenie==null){
                throw new ArgumentNullException(nameof(urzadzenie));
            }
            _context.Urzadzenia.Add(urzadzenie);
        }

        public void DeleteUrzadzenia(Urzadzenia urzadzenia)
        {
            if(urzadzenia==null){
                throw new ArgumentNullException(nameof(urzadzenia));
            }
            _context.Urzadzenia.Remove(urzadzenia);
        }

        public IEnumerable<Urzadzenia> GetAllUrzadzenia()
        {
            return _context.Urzadzenia.OrderByDescending(p=>p.Id).ToList();
        }

        public List<string> GetAllTypes()
        {
            List<string> commandItem=new List<string>();
            commandItem=_context.Urzadzenia.Select(p=>p.Type).Distinct().ToList();
            return commandItem;
        }
        public List<string> GetSpecificBrand(string type)
        {
            List<string> commandItem=new List<string>();
            commandItem=_context.Urzadzenia.Where(p=>p.Type==type).Select(p=>p.Brand).Distinct().ToList();
            return commandItem;
        }

        public List<string> GetSpecificModel(string type, string brand)
        {
            List<string> commandItem=new List<string>();
            commandItem=_context.Urzadzenia.Where(p=>p.Type==type&&p.Brand==brand).Select(p=>p.Model).Distinct().ToList();        
            return commandItem;
        }

        public Urzadzenia GetUrzadzeniaById(short? id)
        {
            _context.Zlecenia.ToList();
            return _context.Urzadzenia.FirstOrDefault(p=>p.Id==id);
        }

        public bool SaveChanges()
        {
           return (_context.SaveChanges()>=0);
        }

        public void UpdateUrzadzenia(Urzadzenia urzadzenie)
        {
            //nothing
        }

        public List<string> GetAllBrands()
        {
            List<string> commandItem=new List<string>();
            commandItem=_context.Urzadzenia.Select(p=>p.Brand).Distinct().ToList();
            return commandItem;
        }

        public List<string> GetAllModels()
        {
            List<string> commandItem=new List<string>();
            commandItem=_context.Urzadzenia.Select(p=>p.Model).Distinct().ToList();
            return commandItem;
        }

        public List<Urzadzenia2> GetBrandsTest()
        {
            List<Urzadzenia2> data=new List<Urzadzenia2>();
            data = _context.Urzadzenia.Select(p=>new Urzadzenia2{Brand=p.Brand,Type=p.Type}).OrderBy(p=>p.Brand).Distinct().ToList();
            return data;

        }

        public List<Urzadzenia> GetModelsTest()
        {
            return _context.Urzadzenia.OrderBy(p=>p.Model).Distinct().ToList();
        }

        public List<Urzadzenia> GetUrzadzeniaByModel(string type, string brand, string model)
        {
            return _context.Urzadzenia.OrderBy(p=>p.Model).Where(p=>p.Brand==brand&&p.Type==type&&p.Model==model).ToList();
        }
    }
}