using Microsoft.IdentityModel.Tokens;
using System.Text;
using MyBank.API.DbContexts;
using Microsoft.EntityFrameworkCore;
using Serilog;
using MyBank.API.Services;
using System.Text.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);


var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

Log.Logger = new LoggerConfiguration()
    .MinimumLevel.Debug()
    .WriteTo.Console()
    .WriteTo.File("logs/MyBank.txt", rollingInterval: RollingInterval.Day)
    .CreateLogger();

builder.Host.UseSerilog();

// Add services to the container.
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
    policy =>
    {
        policy.WithOrigins("*")
            .WithMethods("GET")
            .WithMethods("POST")
            .WithMethods("PUT")
            .WithMethods("DELETE")
            .AllowAnyHeader();
    });
});

builder.Services.AddControllers(options =>
{
}).AddNewtonsoftJson()
.AddJsonOptions(options =>
{
    options.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());
})
.AddXmlDataContractSerializerFormatters(); // For XML support

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<MyBankContext>(dbContextOptions => dbContextOptions.UseSqlite(builder.Configuration["ConnectionStrings:MyBankDBConnectionString"]));
builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
builder.Services.AddScoped<IMyBankRepository, MyBankDBRepository>();

builder.Services.AddAuthentication("Bearer")
    .AddJwtBearer(options =>
            {
                options.TokenValidationParameters = new()
                {
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidateIssuerSigningKey = true,
                    ValidIssuer = builder.Configuration["Authentication:Issuer"],
                    ValidAudience = builder.Configuration["Authentication:Audience"],
                    IssuerSigningKey = new SymmetricSecurityKey(
                                Encoding.ASCII.GetBytes(builder.Configuration["Authentication:SecretForKey"])
                            )
                };
            }
            );

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors(MyAllowSpecificOrigins);

app.UseAuthentication();

app.UseAuthorization();

app.MapControllers();

app.Run();
