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

        public IEnumerable<Urzadzenia> GetUrzadzeniaByBrand(string type,string brand)
        {
            return _context.Urzadzenia.OrderByDescending(p=>p.Id).Where(p=>p.Type==type&&p.Brand.StartsWith(brand)).ToList();
        }

        public Urzadzenia GetUrzadzeniaById(short? id)
        {
            _context.Zlecenia.ToList();
            return _context.Urzadzenia.FirstOrDefault(p=>p.Id==id);
        }

        public List<Urzadzenia> GetUrzadzeniaByModel(string type, string brand,string model)
        {
            return _context.Urzadzenia.OrderByDescending(p=>p.Id).Where(p=>p.Type==type&&p.Brand==brand&&p.Model.StartsWith(model)).ToList();
        }

        public IEnumerable<Urzadzenia> GetUrzadzeniaByType(string type)
        {
            return _context.Urzadzenia.OrderByDescending(p=>p.Id).Where(p=>p.Type.StartsWith(type)).ToList();

        }

        public bool SaveChanges()
        {
           return (_context.SaveChanges()>=0);
        }

        public void UpdateUrzadzenia(Urzadzenia urzadzenie)
        {
            //nothing
        }
    }
}