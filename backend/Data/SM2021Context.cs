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

        public virtual DbSet<Klienci> Klienci { get; set; }
        public virtual DbSet<Uzytkownicy> Uzytkownicy { get; set; }
        public virtual DbSet<Zlecenia> Zlecenia { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Zlecenia>(entity =>
            {
                entity.Property(e => e.DataPrzyjecia).HasDefaultValueSql("(getdate())");

                entity.HasOne(d => d.IdKlientaNavigation)
                    .WithMany(p => p.Zlecenia)
                    .HasForeignKey(d => d.IdKlienta)
                    .HasConstraintName("FK__zlecenia__id_kli__06CD04F7");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
