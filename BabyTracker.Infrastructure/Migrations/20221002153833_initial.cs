using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BabyTracker.Infrastructure.Migrations
{
    public partial class initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Babys",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "varchar", nullable: false),
                    DateOfBirth = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Weight = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    SleepStart = table.Column<DateTime>(type: "datetime2", nullable: false),
                    SleepEnd = table.Column<DateTime>(type: "datetime2", nullable: false),
                    PlayStart = table.Column<DateTime>(type: "datetime2", nullable: false),
                    PlayEnd = table.Column<DateTime>(type: "datetime2", nullable: false),
                    EatStart = table.Column<DateTime>(type: "datetime2", nullable: false),
                    EatEnd = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Babys", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "BabySitters",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BabySitterName = table.Column<string>(type: "varchar", nullable: false),
                    BabyId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BabySitters", x => x.Id);
                    table.ForeignKey(
                        name: "FK_BabySitters_Babys_BabyId",
                        column: x => x.BabyId,
                        principalTable: "Babys",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Parents",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ParentName = table.Column<string>(type: "varchar", nullable: false),
                    BabyId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Parents", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Parents_Babys_BabyId",
                        column: x => x.BabyId,
                        principalTable: "Babys",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_BabySitters_BabyId",
                table: "BabySitters",
                column: "BabyId");

            migrationBuilder.CreateIndex(
                name: "IX_Parents_BabyId",
                table: "Parents",
                column: "BabyId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BabySitters");

            migrationBuilder.DropTable(
                name: "Parents");

            migrationBuilder.DropTable(
                name: "Babys");
        }
    }
}
