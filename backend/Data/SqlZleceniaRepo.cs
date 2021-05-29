using System;
using System.Collections.Generic;
using System.Linq;
using CommandApi.Models;

namespace CommandApi.Data
{
    public class SqlZleceniaRepo : IZleceniaRepo
    {
        private readonly SM2021Context _context;

        public SqlZleceniaRepo(SM2021Context context)
        {
            _context = context;
        }

        public void CreateZlecenia(Zlecenia zlecenie)
        {
            if(zlecenie==null){
                throw new ArgumentNullException(nameof(zlecenie));
            }
            _context.Zlecenia.Add(zlecenie);
        }

        public IEnumerable<Zlecenia> GetAllZlecenia()
        {
            _context.Klienci.ToList();
            return _context.Zlecenia.ToList();
        }

        public IEnumerable<Zlecenia> Get25Zlecenia()
        {
            _context.Klienci.ToList();
            return _context.Zlecenia.OrderByDescending(p=>p.Rma).Take(25).ToList();
        }

        public Zlecenia GetZleceniaByRma(int Rma)
        {
            return _context.Zlecenia.FirstOrDefault(p=>p.Rma==Rma);
        }

        public bool SaveChanges()
        {
           return (_context.SaveChanges()>=0);
        }
    }
}