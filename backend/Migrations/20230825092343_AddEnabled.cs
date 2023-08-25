using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class AddEnabled : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "Enabled",
                table: "Customers",
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
                table: "Customers",
                keyColumn: "CustId",
                keyValue: 1L,
                column: "Enabled",
                value: true);

            migrationBuilder.UpdateData(
                table: "Customers",
                keyColumn: "CustId",
                keyValue: 2L,
                column: "Enabled",
                value: true);

            migrationBuilder.UpdateData(
                table: "Customers",
                keyColumn: "CustId",
                keyValue: 3L,
                column: "Enabled",
                value: true);

            migrationBuilder.UpdateData(
                table: "Customers",
                keyColumn: "CustId",
                keyValue: 4L,
                column: "Enabled",
                value: true);

            migrationBuilder.UpdateData(
                table: "Transactions",
                keyColumn: "Id",
                keyValue: 1L,
                column: "Time",
                value: new DateTime(2023, 8, 25, 14, 53, 43, 430, DateTimeKind.Local).AddTicks(205));

            migrationBuilder.UpdateData(
                table: "Transactions",
                keyColumn: "Id",
                keyValue: 2L,
                column: "Time",
                value: new DateTime(2023, 8, 25, 14, 53, 43, 430, DateTimeKind.Local).AddTicks(223));

            migrationBuilder.UpdateData(
                table: "Transactions",
                keyColumn: "Id",
                keyValue: 3L,
                column: "Time",
                value: new DateTime(2023, 8, 25, 14, 53, 43, 430, DateTimeKind.Local).AddTicks(225));

            migrationBuilder.UpdateData(
                table: "Transactions",
                keyColumn: "Id",
                keyValue: 4L,
                column: "Time",
                value: new DateTime(2023, 8, 25, 14, 53, 43, 430, DateTimeKind.Local).AddTicks(226));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Enabled",
                table: "Customers");

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
