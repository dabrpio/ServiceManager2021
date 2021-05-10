using System;
using System.Collections.Generic;
using System.Linq;
using CommandApi.Models;

namespace CommandApi.Data
{
    public class SqlKlienciTestRepo : IKlienciTestRepo
    {
        private readonly SM2021Context _context;

        public SqlKlienciTestRepo(SM2021Context context)
        {
            _context = context;
        }

        public void CreateKlienciTest(KlienciTest klienciTest)
        {
            if(klienciTest==null){
                throw new ArgumentNullException(nameof(klienciTest));
            }
            _context.KlienciTests.Add(klienciTest);
        }

        public IEnumerable<KlienciTest> GetAllKlienciTest()
        {
            return _context.KlienciTests.ToList();
        }

        public KlienciTest GetKlienciTestById(int id)
        {
            return _context.KlienciTests.FirstOrDefault(p=>p.IdKlienta==id);
        }



        public bool SaveChanges()
        {
           return (_context.SaveChanges()>=0);
        }

        KlienciTest IKlienciTestRepo.GetKlienciTestByPhNumer(int? numer, string imie, string nazwisko)
        {
            return _context.KlienciTests.FirstOrDefault(p=>p.NrTel==numer&&p.Imie==imie&&p.Nazwisko==nazwisko);

        }
    }
}