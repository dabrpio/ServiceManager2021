using System;
using System.Collections.Generic;
using System.Linq;
using CommandApi.Models;

namespace CommandApi.Data
{
    public class SqlZleceniaTestRepo : IZleceniaTestRepo
    {
        private readonly SM2021Context _context;

        public SqlZleceniaTestRepo(SM2021Context context)
        {
            _context = context;
        }

        public void CreateZlecenieTest(ZleceniaTest zlecenieTest)
        {
            if(zlecenieTest==null){
                throw new ArgumentNullException(nameof(zlecenieTest));
            }
            _context.ZleceniaTests.Add(zlecenieTest);
        }

        public IEnumerable<ZleceniaTest> GetAllZleceniaTest()
        {
            return _context.ZleceniaTests.ToList();
        }

        public ZleceniaTest GetZlecenieTestByRma(int Rma)
        {
            return _context.ZleceniaTests.FirstOrDefault(p=>p.Rma==Rma);
        }

        public bool SaveChanges()
        {
           return (_context.SaveChanges()>=0);
        }
    }
}