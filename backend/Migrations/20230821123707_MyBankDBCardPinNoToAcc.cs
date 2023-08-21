using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class MyBankDBCardPinNoToAcc : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CardNo",
                table: "Customers");

            migrationBuilder.DropColumn(
                name: "PinNo",
                table: "Customers");

            migrationBuilder.AddColumn<long>(
                name: "CardNo",
                table: "Accounts",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0L);

            migrationBuilder.AddColumn<long>(
                name: "PinNo",
                table: "Accounts",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0L);

            migrationBuilder.UpdateData(
                table: "Accounts",
                keyColumn: "AccNo",
                keyValue: 2342343245L,
                column: "PinNo",
                value: 0L);

            migrationBuilder.UpdateData(
                table: "Accounts",
                keyColumn: "AccNo",
                keyValue: 3454395723L,
                column: "PinNo",
                value: 0L);

            migrationBuilder.UpdateData(
                table: "Accounts",
                keyColumn: "AccNo",
                keyValue: 3454395724L,
                column: "PinNo",
                value: 0L);

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

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CardNo",
                table: "Accounts");

            migrationBuilder.DropColumn(
                name: "PinNo",
                table: "Accounts");

            migrationBuilder.AddColumn<long>(
                name: "CardNo",
                table: "Customers",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0L);

            migrationBuilder.AddColumn<long>(
                name: "PinNo",
                table: "Customers",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0L);

            migrationBuilder.UpdateData(
                table: "Customers",
                keyColumn: "CustId",
                keyValue: 1L,
                columns: new[] { "CardNo", "PinNo" },
                values: new object[] { 999999999L, 23421L });

            migrationBuilder.UpdateData(
                table: "Customers",
                keyColumn: "CustId",
                keyValue: 2L,
                columns: new[] { "CardNo", "PinNo" },
                values: new object[] { 888888888L, 5345324L });

            migrationBuilder.UpdateData(
                table: "Customers",
                keyColumn: "CustId",
                keyValue: 3L,
                columns: new[] { "CardNo", "PinNo" },
                values: new object[] { 888888888L, 5345324L });

            migrationBuilder.UpdateData(
                table: "Customers",
                keyColumn: "CustId",
                keyValue: 4L,
                columns: new[] { "CardNo", "PinNo" },
                values: new object[] { 322112L, 544151L });

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
    }
}
