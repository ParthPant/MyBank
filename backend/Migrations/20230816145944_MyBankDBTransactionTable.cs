using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class MyBankDBTransactionTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Transactions",
                columns: table => new
                {
                    Id = table.Column<long>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    AccNo = table.Column<long>(type: "INTEGER", nullable: false),
                    TransactionType = table.Column<int>(type: "INTEGER", nullable: false),
                    Amount = table.Column<long>(type: "INTEGER", nullable: false),
                    Time = table.Column<DateTime>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Transactions", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Transactions_Accounts_AccNo",
                        column: x => x.AccNo,
                        principalTable: "Accounts",
                        principalColumn: "AccNo",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Accounts",
                columns: new[] { "AccNo", "AccountType", "Balance", "CustId" },
                values: new object[] { 3454395723L, 0, 234L, 1L });

            migrationBuilder.InsertData(
                table: "Transactions",
                columns: new[] { "Id", "AccNo", "Amount", "Time", "TransactionType" },
                values: new object[,]
                {
                    { 1L, 2342343245L, 200L, new DateTime(2023, 8, 16, 20, 29, 43, 881, DateTimeKind.Local).AddTicks(1298), 1 },
                    { 2L, 3454395723L, 600L, new DateTime(2023, 8, 16, 20, 29, 43, 881, DateTimeKind.Local).AddTicks(1334), 0 }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Transactions_AccNo",
                table: "Transactions",
                column: "AccNo");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Transactions");

            migrationBuilder.DeleteData(
                table: "Accounts",
                keyColumn: "AccNo",
                keyValue: 3454395723L);
        }
    }
}
