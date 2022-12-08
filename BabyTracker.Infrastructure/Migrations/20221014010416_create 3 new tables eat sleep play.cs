using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BabyTracker.Infrastructure.Migrations
{
    public partial class create3newtableseatsleepplay : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "EatEnd",
                table: "Babys");

            migrationBuilder.DropColumn(
                name: "EatStart",
                table: "Babys");

            migrationBuilder.DropColumn(
                name: "PlayEnd",
                table: "Babys");

            migrationBuilder.DropColumn(
                name: "PlayStart",
                table: "Babys");

            migrationBuilder.DropColumn(
                name: "SleepEnd",
                table: "Babys");

            migrationBuilder.DropColumn(
                name: "SleepStart",
                table: "Babys");

            migrationBuilder.AddColumn<string>(
                name: "Gender",
                table: "Babys",
                type: "varchar",
                nullable: false,
                defaultValue: "");

            migrationBuilder.CreateTable(
                name: "EatActivities",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Day = table.Column<DateTime>(type: "datetime2", nullable: false),
                    EatStart = table.Column<DateTime>(type: "datetime2", nullable: false),
                    EatEnd = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EatActivities", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "PlayActivities",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Day = table.Column<DateTime>(type: "datetime2", nullable: false),
                    PlayStart = table.Column<DateTime>(type: "datetime2", nullable: false),
                    PlayEnd = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PlayActivities", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "SleepActivities",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Day = table.Column<DateTime>(type: "datetime2", nullable: false),
                    SleepStart = table.Column<DateTime>(type: "datetime2", nullable: false),
                    SleepEnd = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SleepActivities", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "EatActivities");

            migrationBuilder.DropTable(
                name: "PlayActivities");

            migrationBuilder.DropTable(
                name: "SleepActivities");

            migrationBuilder.DropColumn(
                name: "Gender",
                table: "Babys");

            migrationBuilder.AddColumn<DateTime>(
                name: "EatEnd",
                table: "Babys",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "EatStart",
                table: "Babys",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "PlayEnd",
                table: "Babys",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "PlayStart",
                table: "Babys",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "SleepEnd",
                table: "Babys",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "SleepStart",
                table: "Babys",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }
    }
}
