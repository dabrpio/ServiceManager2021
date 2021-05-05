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

        public virtual DbSet<Zlecenie> Zlecenia { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

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

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
