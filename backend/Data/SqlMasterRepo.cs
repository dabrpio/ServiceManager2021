using System.Collections.Generic;
using System.Linq;
using CommandApi.Models;

namespace CommandApi.Data
{
    public class SqlMasterRepo : IMasterRepo
    {
        private readonly masterContext _context;

        public SqlMasterRepo(masterContext context)
        {
            _context = context;
        }
        public IEnumerable<Zlecenie> GetAllZlecenia()
        {
            return _context.Zlecenia.ToList();
        }

        public Zlecenie GetZlecenieByRma(int Rma)
        {
            return _context.Zlecenia.FirstOrDefault(p=>p.Rma==Rma);
        }
    }
}