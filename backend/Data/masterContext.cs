using System;
using CommandApi.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace CommandApi.Data
{
    public partial class masterContext : DbContext
    {
        public masterContext()
        {
        }

        public masterContext(DbContextOptions<masterContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Zlecenie> Zlecenia { get; set; }

      /*  protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
//#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=DESKTOP-07NQD3C\\SQLEXPRESS;Database=master;Trusted_Connection=True;");
            }
        }*/

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "Polish_CI_AS");

            modelBuilder.Entity<Zlecenie>(entity =>
            {
                entity.HasKey(e => e.Rma);

                entity.ToTable("zlecenia");

                entity.Property(e => e.Rma)
                    .ValueGeneratedNever()
                    .HasColumnName("RMA");

                entity.Property(e => e.DataPrzyjecia)
                    .HasColumnType("date")
                    .HasColumnName("data_przyjecia");

                entity.Property(e => e.Imie)
                    .HasMaxLength(20)
                    .HasColumnName("imie")
                    .IsFixedLength(true);

                entity.Property(e => e.Informacje)
                    .HasMaxLength(100)
                    .HasColumnName("informacje")
                    .IsFixedLength(true);

                entity.Property(e => e.KosztCzesci)
                    .HasColumnType("money")
                    .HasColumnName("koszt_czesci");

                entity.Property(e => e.KosztNaprawy)
                    .HasColumnType("money")
                    .HasColumnName("koszt_naprawy");

                entity.Property(e => e.Marka)
                    .HasMaxLength(20)
                    .HasColumnName("marka")
                    .IsFixedLength(true);

                entity.Property(e => e.Model)
                    .HasMaxLength(20)
                    .HasColumnName("model")
                    .IsFixedLength(true);

                entity.Property(e => e.Nazwisko)
                    .HasMaxLength(30)
                    .HasColumnName("nazwisko")
                    .IsFixedLength(true);

                entity.Property(e => e.NrTel).HasColumnName("nr_tel");

                entity.Property(e => e.Rodzaj)
                    .HasMaxLength(20)
                    .HasColumnName("rodzaj")
                    .IsFixedLength(true);

                entity.Property(e => e.Status)
                    .HasMaxLength(20)
                    .HasColumnName("status")
                    .IsFixedLength(true);

                entity.Property(e => e.Usterka)
                    .HasMaxLength(300)
                    .HasColumnName("usterka")
                    .IsFixedLength(true);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
