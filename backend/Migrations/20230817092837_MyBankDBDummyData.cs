using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class MyBankDBDummyData : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Customers",
                columns: new[] { "CustId", "CardNo", "City", "Contact", "Email", "Name", "PinNo" },
                values: new object[,]
                {
                    { 3L, 888888888L, "New York", 23546456L, "homie@vaught.com", "Homelander", 5345324L },
                    { 4L, 322112L, "Gotham", 64654646L, "thatman@vaught.com", "Batman", 544151L }
                });

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

            migrationBuilder.InsertData(
                table: "Transactions",
                columns: new[] { "Id", "AccNo", "Amount", "Time", "TransactionType" },
                values: new object[,]
                {
                    { 3L, 2342343245L, 234L, new DateTime(2023, 8, 17, 14, 58, 37, 761, DateTimeKind.Local).AddTicks(9118), 0 },
                    { 4L, 3454395723L, 123L, new DateTime(2023, 8, 17, 14, 58, 37, 761, DateTimeKind.Local).AddTicks(9119), 1 }
                });

            migrationBuilder.InsertData(
                table: "Accounts",
                columns: new[] { "AccNo", "AccountType", "Balance", "CustId" },
                values: new object[] { 3454395724L, 1, 23423L, 4L });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Accounts",
                keyColumn: "AccNo",
                keyValue: 3454395724L);

            migrationBuilder.DeleteData(
                table: "Customers",
                keyColumn: "CustId",
                keyValue: 3L);

            migrationBuilder.DeleteData(
                table: "Transactions",
                keyColumn: "Id",
                keyValue: 3L);

            migrationBuilder.DeleteData(
                table: "Transactions",
                keyColumn: "Id",
                keyValue: 4L);

            migrationBuilder.DeleteData(
                table: "Customers",
                keyColumn: "CustId",
                keyValue: 4L);

            migrationBuilder.UpdateData(
                table: "Transactions",
                keyColumn: "Id",
                keyValue: 1L,
                column: "Time",
                value: new DateTime(2023, 8, 16, 20, 29, 43, 881, DateTimeKind.Local).AddTicks(1298));

            migrationBuilder.UpdateData(
                table: "Transactions",
                keyColumn: "Id",
                keyValue: 2L,
                column: "Time",
                value: new DateTime(2023, 8, 16, 20, 29, 43, 881, DateTimeKind.Local).AddTicks(1334));
        }
    }
}
