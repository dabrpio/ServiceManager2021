using System.Collections.Generic;
using CommandApi.Models;

namespace CommandApi.Data
{
    public interface IKlienciTestRepo
    {
        bool SaveChanges();
        IEnumerable<KlienciTest> GetAllKlienciTest();
        KlienciTest GetKlienciTestById(int id);
        KlienciTest GetKlienciTestByPhNumer(int? numer,string imie, string nazwisko);

        void CreateKlienciTest(KlienciTest klienciTest);
    }
}