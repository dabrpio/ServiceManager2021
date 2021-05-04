using System;
using System.Collections.Generic;
using System.Linq;
using CommandApi.Models;

namespace CommandApi.Data
{
    public class SqlMasterRepo : IMasterRepo
    {
        private readonly SM2021Context _context;

        public SqlMasterRepo(SM2021Context context)
        {
            _context = context;
        }

        public void CreateZlecenie(Zlecenie zlecenie)
        {
            if(zlecenie==null){
                throw new ArgumentNullException(nameof(zlecenie));
            }
            _context.Zlecenia.Add(zlecenie);
        }

        public IEnumerable<Zlecenie> GetAllZlecenia()
        {
            return _context.Zlecenia.ToList();
        }

        public Zlecenie GetZlecenieByRma(int Rma)
        {
            return _context.Zlecenia.FirstOrDefault(p=>p.Rma==Rma);
        }

        public bool SaveChanges()
        {
           return (_context.SaveChanges()>=0);
        }
    }
}