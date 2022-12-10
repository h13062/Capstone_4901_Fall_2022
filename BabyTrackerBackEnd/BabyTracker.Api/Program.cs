using BabyTracker.Core.Contract.Repository;
using BabyTracker.Core.Contract.Service;
using BabyTracker.Core.Entity;
using BabyTracker.Infrastructure.Data;
using BabyTracker.Infrastructure.Repository;
using BabyTracker.Infrastructure.Service;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo
    {
        Title = "JWT Token",
        Version = "v1",
    });
    c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {
        Name = "Authorization",
        Type = SecuritySchemeType.ApiKey,
        Scheme = "Bearer",
        BearerFormat = "JWT",
        In = ParameterLocation.Header,
        Description = "Enter JWT Token"
    });
    c.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        {
            new OpenApiSecurityScheme
            {
                Reference = new OpenApiReference
                {
                    Type = ReferenceType.SecurityScheme,
                    Id = "Bearer"
                }
            },
            new string[]{ }
        }
    });
});
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(builder =>
    {
        //builder.WithOrigins("https://localhost:7290").AllowAnyHeader().AllowAnyMethod();
        //builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
        builder.WithOrigins("exp://192.168.254.208:19000").AllowAnyHeader().AllowAnyMethod();
    });
});

builder.Services.AddSqlServer<BabyTrackerDbContext>(builder.Configuration.GetConnectionString("OnlineBabyTracker"));
builder.Services.AddIdentity<ApplicationUser, IdentityRole>()
    .AddEntityFrameworkStores<BabyTrackerDbContext>()
    .AddDefaultTokenProviders();
builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
}).AddJwtBearer(x =>
{
    x.SaveToken = true;
    x.RequireHttpsMetadata = false;
    x.TokenValidationParameters = new TokenValidationParameters()
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidAudience = builder.Configuration["JWT:ValidAudience"],
        ValidIssuer = builder.Configuration["JWT:ValidIssuer"],
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["JWT:Secret"]))
    };
});


builder.Services.AddScoped<IBabyRepositoryAsync, BabyRepositoryAsync>();
builder.Services.AddScoped<IBabySitterRepositoryAsync, BabySitterRepositoryAsync>();
builder.Services.AddScoped<IParentRepositoryAsync, ParentRepositoryAsync>();
builder.Services.AddScoped<IEatActivityRepositoryAsync, EatActivityRepositoryAsync>();
builder.Services.AddScoped<IPlayActivityRepositoryAsync,PlayActivityRepositoryAsync>();
builder.Services.AddScoped<ISleepActivityRepositoryAsync, SleepActivityRepositoryAsync>();
builder.Services.AddScoped<IAccountRepositoryAsync, AccountRepositoryAsync>();


builder.Services.AddScoped<IBabyServiceAsync, BabyServiceAsync>();
builder.Services.AddScoped<IBabySitterServiceAsync, BabySitterServiceAsync>();
builder.Services.AddScoped<IParentServiceAsync,ParentServiceAsync>();
builder.Services.AddScoped<IEatActivyServiceAsync, EatActivityServiceAsync>();
builder.Services.AddScoped<IPlayActivtyServiceAsync, PlayActivityServiceAsync>();
builder.Services.AddScoped<IPlayActivityServiceAsync, SleepActivityServiceAsync>();
builder.Services.AddScoped<IAccountServiceAsync, AccountServiceAsync>();
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors();
app.UseAuthorization();
app.UseAuthentication();
app.MapControllers();

app.Run();
