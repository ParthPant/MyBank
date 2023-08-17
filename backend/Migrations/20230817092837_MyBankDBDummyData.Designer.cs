﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using MyBank.API.DbContexts;

#nullable disable

namespace backend.Migrations
{
    [DbContext(typeof(MyBankContext))]
    [Migration("20230817092837_MyBankDBDummyData")]
    partial class MyBankDBDummyData
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "7.0.10");

            modelBuilder.Entity("MyBank.API.Entities.Account", b =>
                {
                    b.Property<long>("AccNo")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("AccountType")
                        .HasColumnType("INTEGER");

                    b.Property<long>("Balance")
                        .HasColumnType("INTEGER");

                    b.Property<long>("CustId")
                        .HasColumnType("INTEGER");

                    b.HasKey("AccNo");

                    b.HasIndex("CustId");

                    b.ToTable("Accounts");

                    b.HasData(
                        new
                        {
                            AccNo = 2342343245L,
                            AccountType = 0,
                            Balance = 787L,
                            CustId = 1L
                        },
                        new
                        {
                            AccNo = 3454395723L,
                            AccountType = 0,
                            Balance = 234L,
                            CustId = 1L
                        },
                        new
                        {
                            AccNo = 3454395724L,
                            AccountType = 1,
                            Balance = 23423L,
                            CustId = 4L
                        });
                });

            modelBuilder.Entity("MyBank.API.Entities.Admin", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("TEXT");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("TEXT");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("TEXT");

                    b.Property<string>("UserName")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Admins");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Email = "admin@admin.com",
                            Name = "Admin",
                            Password = "password",
                            UserName = "admin"
                        });
                });

            modelBuilder.Entity("MyBank.API.Entities.Customer", b =>
                {
                    b.Property<long>("CustId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<long>("CardNo")
                        .HasColumnType("INTEGER");

                    b.Property<string>("City")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("TEXT");

                    b.Property<long>("Contact")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("TEXT");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("TEXT");

                    b.Property<long>("PinNo")
                        .HasColumnType("INTEGER");

                    b.HasKey("CustId");

                    b.ToTable("Customers");

                    b.HasData(
                        new
                        {
                            CustId = 1L,
                            CardNo = 999999999L,
                            City = "Bengaluru",
                            Contact = 7876082603L,
                            Email = "parthpant4@gmail.com",
                            Name = "Parth Pant",
                            PinNo = 23421L
                        },
                        new
                        {
                            CustId = 2L,
                            CardNo = 888888888L,
                            City = "Delhi",
                            Contact = 2342354234L,
                            Email = "doejohn@gmail.com",
                            Name = "John Doe",
                            PinNo = 5345324L
                        },
                        new
                        {
                            CustId = 3L,
                            CardNo = 888888888L,
                            City = "New York",
                            Contact = 23546456L,
                            Email = "homie@vaught.com",
                            Name = "Homelander",
                            PinNo = 5345324L
                        },
                        new
                        {
                            CustId = 4L,
                            CardNo = 322112L,
                            City = "Gotham",
                            Contact = 64654646L,
                            Email = "thatman@vaught.com",
                            Name = "Batman",
                            PinNo = 544151L
                        });
                });

            modelBuilder.Entity("MyBank.API.Entities.Transaction", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<long>("AccNo")
                        .HasColumnType("INTEGER");

                    b.Property<long>("Amount")
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("Time")
                        .HasColumnType("TEXT");

                    b.Property<int>("TransactionType")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.HasIndex("AccNo");

                    b.ToTable("Transactions");

                    b.HasData(
                        new
                        {
                            Id = 1L,
                            AccNo = 2342343245L,
                            Amount = 200L,
                            Time = new DateTime(2023, 8, 17, 14, 58, 37, 761, DateTimeKind.Local).AddTicks(9093),
                            TransactionType = 1
                        },
                        new
                        {
                            Id = 2L,
                            AccNo = 3454395723L,
                            Amount = 600L,
                            Time = new DateTime(2023, 8, 17, 14, 58, 37, 761, DateTimeKind.Local).AddTicks(9116),
                            TransactionType = 0
                        },
                        new
                        {
                            Id = 3L,
                            AccNo = 2342343245L,
                            Amount = 234L,
                            Time = new DateTime(2023, 8, 17, 14, 58, 37, 761, DateTimeKind.Local).AddTicks(9118),
                            TransactionType = 0
                        },
                        new
                        {
                            Id = 4L,
                            AccNo = 3454395723L,
                            Amount = 123L,
                            Time = new DateTime(2023, 8, 17, 14, 58, 37, 761, DateTimeKind.Local).AddTicks(9119),
                            TransactionType = 1
                        });
                });

            modelBuilder.Entity("MyBank.API.Entities.Account", b =>
                {
                    b.HasOne("MyBank.API.Entities.Customer", "Customer")
                        .WithMany("Accounts")
                        .HasForeignKey("CustId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Customer");
                });

            modelBuilder.Entity("MyBank.API.Entities.Transaction", b =>
                {
                    b.HasOne("MyBank.API.Entities.Account", "Account")
                        .WithMany()
                        .HasForeignKey("AccNo")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Account");
                });

            modelBuilder.Entity("MyBank.API.Entities.Customer", b =>
                {
                    b.Navigation("Accounts");
                });
#pragma warning restore 612, 618
        }
    }
}