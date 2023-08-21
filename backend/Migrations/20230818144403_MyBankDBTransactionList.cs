using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class MyBankDBTransactionList : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Transactions",
                keyColumn: "Id",
                keyValue: 1L,
                column: "Time",
                value: new DateTime(2023, 8, 18, 20, 14, 3, 188, DateTimeKind.Local).AddTicks(4307));

            migrationBuilder.UpdateData(
                table: "Transactions",
                keyColumn: "Id",
                keyValue: 2L,
                column: "Time",
                value: new DateTime(2023, 8, 18, 20, 14, 3, 188, DateTimeKind.Local).AddTicks(4334));

            migrationBuilder.UpdateData(
                table: "Transactions",
                keyColumn: "Id",
                keyValue: 3L,
                column: "Time",
                value: new DateTime(2023, 8, 18, 20, 14, 3, 188, DateTimeKind.Local).AddTicks(4335));

            migrationBuilder.UpdateData(
                table: "Transactions",
                keyColumn: "Id",
                keyValue: 4L,
                column: "Time",
                value: new DateTime(2023, 8, 18, 20, 14, 3, 188, DateTimeKind.Local).AddTicks(4337));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Transactions",
                keyColumn: "Id",
                keyValue: 1L,
                column: "Time",
                value: new DateTime(2023, 8, 17, 14, 58, 37, 761, DateTimeKind.Local).AddTicks(9093));

            migrationBuilder.UpdateData(
                table: "Transactions",
                keyColumn: "Id",
                keyValue: 2L,
                column: "Time",
                value: new DateTime(2023, 8, 17, 14, 58, 37, 761, DateTimeKind.Local).AddTicks(9116));

            migrationBuilder.UpdateData(
                table: "Transactions",
                keyColumn: "Id",
                keyValue: 3L,
                column: "Time",
                value: new DateTime(2023, 8, 17, 14, 58, 37, 761, DateTimeKind.Local).AddTicks(9118));

            migrationBuilder.UpdateData(
                table: "Transactions",
                keyColumn: "Id",
                keyValue: 4L,
                column: "Time",
                value: new DateTime(2023, 8, 17, 14, 58, 37, 761, DateTimeKind.Local).AddTicks(9119));
        }
    }
}
