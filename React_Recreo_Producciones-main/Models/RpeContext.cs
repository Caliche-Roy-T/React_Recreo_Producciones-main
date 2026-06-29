using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace RPE.Models;

public partial class RpeContext : DbContext
{
    public RpeContext()
    {
    }

    public RpeContext(DbContextOptions<RpeContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Cliente> Clientes { get; set; }

    public virtual DbSet<Servicio> Servicios { get; set; }

    public virtual DbSet<SolicitudCotizacion> SolicitudCotizacions { get; set; }

    public virtual DbSet<TipoDeEvento> TipoDeEventos { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=(localdb)\\MSSQLLocalDB;Database=RPE;Trusted_Connection=True;TrustServerCertificate=True;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Cliente>(entity =>
        {
            entity.HasKey(e => e.IdCliente).HasName("PK__Cliente__D59466421EEABAC0");

            entity.ToTable("Cliente");

            entity.HasIndex(e => e.Correo, "UQ__Cliente__60695A1967ABAE81").IsUnique();

            entity.Property(e => e.Apellido)
                .HasMaxLength(30)
                .IsUnicode(false);
            entity.Property(e => e.Correo)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.Nombre)
                .HasMaxLength(30)
                .IsUnicode(false);
            entity.Property(e => e.Telefono)
                .HasMaxLength(20)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Servicio>(entity =>
        {
            entity.HasKey(e => e.IdServicio).HasName("PK__Servicio__2DCCF9A253A3461C");

            entity.Property(e => e.Descripcion)
                .HasMaxLength(255)
                .IsUnicode(false);
            entity.Property(e => e.Nombre)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.PrecioReferencia).HasColumnType("decimal(18, 2)");
        });

        modelBuilder.Entity<SolicitudCotizacion>(entity =>
        {
            entity.HasKey(e => e.IdSolicitud).HasName("PK__Solicitu__36899CEFE91F0E72");

            entity.ToTable("SolicitudCotizacion");

            entity.Property(e => e.Estado)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasDefaultValue("Pendiente");
            entity.Property(e => e.FechaEvento).HasColumnType("datetime");
            entity.Property(e => e.FechaSolicitud)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.Lugar)
                .HasMaxLength(250)
                .IsUnicode(false);
            entity.Property(e => e.Observaciones)
                .HasMaxLength(250)
                .IsUnicode(false);

            entity.HasOne(d => d.IdClienteNavigation).WithMany(p => p.SolicitudCotizacions)
                .HasForeignKey(d => d.IdCliente)
                .HasConstraintName("FK__Solicitud__IdCli__412EB0B6");

            entity.HasOne(d => d.IdTipoeventoNavigation).WithMany(p => p.SolicitudCotizacions)
                .HasForeignKey(d => d.IdTipoevento)
                .HasConstraintName("FK__Solicitud__IdTip__4222D4EF");

            entity.HasMany(d => d.IdServicios).WithMany(p => p.IdSolicituds)
                .UsingEntity<Dictionary<string, object>>(
                    "SolicitudServicio",
                    r => r.HasOne<Servicio>().WithMany()
                        .HasForeignKey("IdServicio")
                        .OnDelete(DeleteBehavior.ClientSetNull)
                        .HasConstraintName("FK__Solicitud__IdSer__48CFD27E"),
                    l => l.HasOne<SolicitudCotizacion>().WithMany()
                        .HasForeignKey("IdSolicitud")
                        .OnDelete(DeleteBehavior.ClientSetNull)
                        .HasConstraintName("FK__Solicitud__IdSol__47DBAE45"),
                    j =>
                    {
                        j.HasKey("IdSolicitud", "IdServicio").HasName("PK__Solicitu__04555375895A1378");
                        j.ToTable("SolicitudServicio");
                    });
        });

        modelBuilder.Entity<TipoDeEvento>(entity =>
        {
            entity.HasKey(e => e.IdTipoevento).HasName("PK__Tipo_de___89094F582ADF5CF8");

            entity.ToTable("Tipo_de_evento");

            entity.Property(e => e.NombreTipoDeEvento)
                .HasMaxLength(90)
                .IsUnicode(false)
                .HasColumnName("NombreTipoEvento");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
