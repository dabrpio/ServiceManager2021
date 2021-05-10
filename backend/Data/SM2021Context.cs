using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using CommandApi.Models;

#nullable disable

namespace CommandApi.Data
{
    public partial class SM2021Context : DbContext
    {
        public SM2021Context()
        {
        }

        public SM2021Context(DbContextOptions<SM2021Context> options)
            : base(options)
        {
        }

        public virtual DbSet<KlienciTest> KlienciTests { get; set; }
        public virtual DbSet<Uzytkownicy> Uzytkownicies { get; set; }
        public virtual DbSet<ZleceniaTest> ZleceniaTests { get; set; }
        public virtual DbSet<Zlecenie> Zlecenia { get; set; }
        public virtual DbSet<Zmienne> Zmiennes { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<KlienciTest>(entity =>
            {
                entity.HasKey(e => e.IdKlienta)
                    .HasName("PK_klienci");
            });

            modelBuilder.Entity<Uzytkownicy>(entity =>
            {
                entity.Property(e => e.Haslo).IsFixedLength(true);

                entity.Property(e => e.Login).IsFixedLength(true);
            });

            modelBuilder.Entity<ZleceniaTest>(entity =>
            {
                entity.Property(e => e.DataPrzyjecia).HasDefaultValueSql("(getdate())");

                entity.HasOne(d => d.IdKlientaNavigation)
                    .WithMany(p => p.ZleceniaTests)
                    .HasForeignKey(d => d.IdKlienta)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__zlecenia___id_kl__571DF1D5");
            });

            modelBuilder.Entity<Zlecenie>(entity =>
            {
                entity.Property(e => e.DataPrzyjecia).HasDefaultValueSql("(getdate())");

                entity.Property(e => e.Imie).IsFixedLength(true);

                entity.Property(e => e.Informacje).IsFixedLength(true);

                entity.Property(e => e.Marka).IsFixedLength(true);

                entity.Property(e => e.Model).IsFixedLength(true);

                entity.Property(e => e.Nazwisko).IsFixedLength(true);

                entity.Property(e => e.Rodzaj).IsFixedLength(true);

                entity.Property(e => e.Status).IsFixedLength(true);

                entity.Property(e => e.Usterka).IsFixedLength(true);
            });

            modelBuilder.Entity<Zmienne>(entity =>
            {
                entity.Property(e => e.Model).IsFixedLength(true);

                entity.Property(e => e.Producent).IsFixedLength(true);

                entity.Property(e => e.Usługa).IsFixedLength(true);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
