using System;
using System.Security.Cryptography;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
namespace CommandApi.Services{
    public class Security
    {
        public const string separator = "..|..";
        public static string Hashing(string password, int type)
        {
            byte[] salt = new byte[128 / 8];
            using (var rngCsp = new RNGCryptoServiceProvider())
            {
                rngCsp.GetNonZeroBytes(salt);
            }

            // derive a 512-bit subkey (use HMACSHA512 with 100,000 iterations)
            string hashed = Convert.ToBase64String(KeyDerivation.Pbkdf2(
                password: password,
                salt: salt,
                prf: KeyDerivationPrf.HMACSHA512,
                iterationCount: 100000,
                numBytesRequested: 512 / 8));
            return hashed+separator+Convert.ToBase64String(salt)+separator+type;
        }
        public static string HashingWithSalt(string password, string Salt, int type)
        {
            byte[] salt = Convert.FromBase64String(Salt);

            // derive a 512-bit subkey (use HMACSHA512 with 100,000 iterations)
            string hashed = Convert.ToBase64String(KeyDerivation.Pbkdf2(
                password: password,
                salt: salt,
                prf: KeyDerivationPrf.HMACSHA512,
                iterationCount: 100000,
                numBytesRequested: 512 / 8));
            return hashed+separator+Salt+separator+type;
        }

        public static string HashingWithSalt1(string password, string Salt)
        {
            byte[] salt = Convert.FromBase64String(Salt);

            // derive a 512-bit subkey (use HMACSHA512 with 100,000 iterations)
            string hashed = Convert.ToBase64String(KeyDerivation.Pbkdf2(
                password: password,
                salt: salt,
                prf: KeyDerivationPrf.HMACSHA512,
                iterationCount: 100000,
                numBytesRequested: 512 / 8));
            return hashed+separator+Salt;
        }
        public static string Hashing1(string password)
        {
            byte[] salt = new byte[128 / 8];
            using (var rngCsp = new RNGCryptoServiceProvider())
            {
                rngCsp.GetNonZeroBytes(salt);
            }

            // derive a 512-bit subkey (use HMACSHA512 with 100,000 iterations)
            string hashed = Convert.ToBase64String(KeyDerivation.Pbkdf2(
                password: password,
                salt: salt,
                prf: KeyDerivationPrf.HMACSHA512,
                iterationCount: 100000,
                numBytesRequested: 512 / 8));
            return hashed+separator+Convert.ToBase64String(salt);
        }
    }
}