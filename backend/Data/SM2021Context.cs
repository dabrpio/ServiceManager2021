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
/*        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=51.116.231.138;Initial Catalog=SM2021;User ID=SERVICE2021;Password='S3RVIs2@21';");
            }
        }*/

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Zlecenie>(entity =>
            {
                entity.Property(e => e.Rma).ValueGeneratedNever();

                entity.Property(e => e.Imie);

                entity.Property(e => e.Informacje);

                entity.Property(e => e.Marka);

                entity.Property(e => e.Model);

                entity.Property(e => e.Nazwisko);

                entity.Property(e => e.Rodzaj);

                entity.Property(e => e.Status);

                entity.Property(e => e.Usterka);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
