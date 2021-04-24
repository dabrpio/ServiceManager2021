using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace CommandApi.Migrations
{
    public partial class InitialMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "zlecenia",
                columns: table => new
                {
                    RMA = table.Column<short>(type: "smallint", nullable: false),
                    imie = table.Column<string>(type: "nchar(20)", fixedLength: true, maxLength: 20, nullable: true),
                    nazwisko = table.Column<string>(type: "nchar(30)", fixedLength: true, maxLength: 30, nullable: true),
                    nr_tel = table.Column<int>(type: "int", nullable: true),
                    data_przyjecia = table.Column<DateTime>(type: "date", nullable: true),
                    rodzaj = table.Column<string>(type: "nchar(20)", fixedLength: true, maxLength: 20, nullable: true),
                    marka = table.Column<string>(type: "nchar(20)", fixedLength: true, maxLength: 20, nullable: true),
                    model = table.Column<string>(type: "nchar(20)", fixedLength: true, maxLength: 20, nullable: true),
                    usterka = table.Column<string>(type: "nchar(300)", fixedLength: true, maxLength: 300, nullable: true),
                    status = table.Column<string>(type: "nchar(20)", fixedLength: true, maxLength: 20, nullable: true),
                    koszt_naprawy = table.Column<decimal>(type: "money", nullable: true),
                    koszt_czesci = table.Column<decimal>(type: "money", nullable: true),
                    informacje = table.Column<string>(type: "nchar(100)", fixedLength: true, maxLength: 100, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_zlecenia", x => x.RMA);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "zlecenia");
        }
    }
}
