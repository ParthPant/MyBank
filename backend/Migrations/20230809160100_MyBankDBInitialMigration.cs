using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class MyBankDBInitialMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Customers",
                columns: table => new
                {
                    CustId = table.Column<long>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(type: "TEXT", maxLength: 50, nullable: false),
                    Email = table.Column<string>(type: "TEXT", maxLength: 50, nullable: false),
                    Contact = table.Column<long>(type: "INTEGER", nullable: false),
                    CardNo = table.Column<long>(type: "INTEGER", nullable: false),
                    PinNo = table.Column<long>(type: "INTEGER", nullable: false),
                    City = table.Column<string>(type: "TEXT", maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Customers", x => x.CustId);
                });

            migrationBuilder.CreateTable(
                name: "Accounts",
                columns: table => new
                {
                    AccNo = table.Column<long>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    AccountType = table.Column<string>(type: "TEXT", nullable: false),
                    Balance = table.Column<long>(type: "INTEGER", nullable: false),
                    CustId = table.Column<long>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Accounts", x => x.AccNo);
                    table.ForeignKey(
                        name: "FK_Accounts_Customers_CustId",
                        column: x => x.CustId,
                        principalTable: "Customers",
                        principalColumn: "CustId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Customers",
                columns: new[] { "CustId", "CardNo", "City", "Contact", "Email", "Name", "PinNo" },
                values: new object[,]
                {
                    { 1L, 999999999L, "Bengaluru", 7876082603L, "parthpant4@gmail.com", "Parth Pant", 23421L },
                    { 2L, 888888888L, "Delhi", 2342354234L, "doejohn@gmail.com", "John Doe", 5345324L }
                });

            migrationBuilder.InsertData(
                table: "Accounts",
                columns: new[] { "AccNo", "AccountType", "Balance", "CustId" },
                values: new object[] { 2342343245L, "saving", 787L, 1L });

            migrationBuilder.CreateIndex(
                name: "IX_Accounts_CustId",
                table: "Accounts",
                column: "CustId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Accounts");

            migrationBuilder.DropTable(
                name: "Customers");
        }
    }
}
