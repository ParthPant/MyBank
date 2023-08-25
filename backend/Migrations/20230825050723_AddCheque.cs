using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class AddCheque : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "Approved",
                table: "Transactions",
                type: "INTEGER",
                nullable: false,
                defaultValue: false);

            migrationBuilder.UpdateData(
                table: "Accounts",
                keyColumn: "AccNo",
                keyValue: 2342343245L,
                column: "CardNo",
                value: 12345L);

            migrationBuilder.UpdateData(
                table: "Accounts",
                keyColumn: "AccNo",
                keyValue: 3454395723L,
                column: "CardNo",
                value: 2345325L);

            migrationBuilder.UpdateData(
                table: "Accounts",
                keyColumn: "AccNo",
                keyValue: 3454395724L,
                column: "CardNo",
                value: 23423523L);

            migrationBuilder.UpdateData(
                table: "Transactions",
                keyColumn: "Id",
                keyValue: 1L,
                columns: new[] { "Approved", "Time" },
                values: new object[] { true, new DateTime(2023, 8, 25, 10, 37, 23, 325, DateTimeKind.Local).AddTicks(9181) });

            migrationBuilder.UpdateData(
                table: "Transactions",
                keyColumn: "Id",
                keyValue: 2L,
                columns: new[] { "Approved", "Time" },
                values: new object[] { true, new DateTime(2023, 8, 25, 10, 37, 23, 325, DateTimeKind.Local).AddTicks(9197) });

            migrationBuilder.UpdateData(
                table: "Transactions",
                keyColumn: "Id",
                keyValue: 3L,
                columns: new[] { "Approved", "Time" },
                values: new object[] { true, new DateTime(2023, 8, 25, 10, 37, 23, 325, DateTimeKind.Local).AddTicks(9198) });

            migrationBuilder.UpdateData(
                table: "Transactions",
                keyColumn: "Id",
                keyValue: 4L,
                columns: new[] { "Approved", "Time" },
                values: new object[] { true, new DateTime(2023, 8, 25, 10, 37, 23, 325, DateTimeKind.Local).AddTicks(9199) });

            migrationBuilder.InsertData(
                table: "Transactions",
                columns: new[] { "Id", "AccNo", "Amount", "Approved", "Time", "TransactionType" },
                values: new object[] { 5L, 2342343245L, 200L, false, new DateTime(2023, 8, 25, 10, 37, 23, 325, DateTimeKind.Local).AddTicks(9200), 2 });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Transactions",
                keyColumn: "Id",
                keyValue: 5L);

            migrationBuilder.DropColumn(
                name: "Approved",
                table: "Transactions");

            migrationBuilder.UpdateData(
                table: "Transactions",
                keyColumn: "Id",
                keyValue: 1L,
                column: "Time",
                value: new DateTime(2023, 8, 21, 18, 7, 7, 690, DateTimeKind.Local).AddTicks(6440));

            migrationBuilder.UpdateData(
                table: "Transactions",
                keyColumn: "Id",
                keyValue: 2L,
                column: "Time",
                value: new DateTime(2023, 8, 21, 18, 7, 7, 690, DateTimeKind.Local).AddTicks(6468));

            migrationBuilder.UpdateData(
                table: "Transactions",
                keyColumn: "Id",
                keyValue: 3L,
                column: "Time",
                value: new DateTime(2023, 8, 21, 18, 7, 7, 690, DateTimeKind.Local).AddTicks(6470));

            migrationBuilder.UpdateData(
                table: "Transactions",
                keyColumn: "Id",
                keyValue: 4L,
                column: "Time",
                value: new DateTime(2023, 8, 21, 18, 7, 7, 690, DateTimeKind.Local).AddTicks(6471));
        }
    }
}
