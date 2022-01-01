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

        public virtual DbSet<Client> Clients { get; set; }
        public virtual DbSet<Device> Devices { get; set; }
        public virtual DbSet<Employee> Employees { get; set; }
        public virtual DbSet<Ticket> Tickets { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Ticket>(entity =>
            {
                entity.Property(e => e.BeginDate).HasDefaultValueSql("(getdate())");

                entity.HasOne(d => d.IdClientNavigation)
                    .WithMany(p => p.Tickets)
                    .HasForeignKey(d => d.IdClient)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_tickets_clients");

                entity.HasOne(d => d.IdDeviceNavigation)
                    .WithMany(p => p.Tickets)
                    .HasForeignKey(d => d.IdDevice)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_tickets_devices");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
