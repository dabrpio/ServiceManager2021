using System.Collections.Generic;
using CommandApi.Models;

namespace CommandApi.Data
{
    public interface IZleceniaTestRepo
    {
        bool SaveChanges();
        IEnumerable<ZleceniaTest> GetAllZleceniaTest();
        ZleceniaTest GetZlecenieTestByRma(int Rma);
        void CreateZlecenieTest(ZleceniaTest zlecenieTest);
    }
}