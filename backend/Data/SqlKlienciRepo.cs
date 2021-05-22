using System;
using System.Collections.Generic;
using System.Linq;
using CommandApi.Models;

namespace CommandApi.Data
{
    public class SqlKlienciRepo : IKlienciRepo
    {
        private readonly SM2021Context _context;

        public SqlKlienciRepo(SM2021Context context)
        {
            _context = context;
        }

        public void CreateKlienci(Klienci klient)
        {
            if(klient==null){
                throw new ArgumentNullException(nameof(klient));
            }
            _context.Klienci.Add(klient);
        }

        public IEnumerable<Klienci> GetAllKlienci()
        {
            return _context.Klienci.ToList();
        }

        public Klienci GetKlienciById(short? id)
        {
            return _context.Klienci.FirstOrDefault(p=>p.IdKlienta==id);
        }
        public Klienci GetKlienciByPhNumer(int? phone, string imie, string nazwisko)
        {
            return _context.Klienci.FirstOrDefault(p=>p.NrTel==phone&&p.Imie==imie&&p.Nazwisko==nazwisko);
        }

        public bool SaveChanges()
        {
           return (_context.SaveChanges()>=0);
        }

    }
}