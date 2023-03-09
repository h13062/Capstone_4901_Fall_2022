using BabyTracker.Core.Contract.Repository;
using BabyTracker.Core.Contract.Service;
using BabyTracker.Core.Entity;
using BabyTracker.Infrastructure.Data;
using BabyTracker.Infrastructure.Repository;
using BabyTracker.Infrastructure.Service;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
//add jwt token to swagger
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo
    {
        Title = "BabyTracker",
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
    options.AddPolicy("CorsPolicy",
            builder => builder.AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader());
    //.AllowCredentials());
});

//builder.Services.AddSqlServer<BabyTrackerDbContext>(builder.Configuration.GetConnectionString("OnlineBabyTracker"));
builder.Services.AddDbContext<BabyTrackerDbContext>(options =>
    options.UseSqlServer(
        builder.Configuration.GetConnectionString("OnlineBabyTracker"),
        sqlServerOptionsAction: sqlOptions =>
        {
            sqlOptions.EnableRetryOnFailure(
                maxRetryCount: 5,
                maxRetryDelay: TimeSpan.FromSeconds(30),
                errorNumbersToAdd: null);
        }));
builder.Services.AddIdentity<IdentityUser, IdentityRole>()
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
builder.Services.AddScoped<IPlayActivityRepositoryAsync, PlayActivityRepositoryAsync>();
builder.Services.AddScoped<ISleepActivityRepositoryAsync, SleepActivityRepositoryAsync>();
//builder.Services.AddScoped<IAccountRepositoryAsync, AccountRepositoryAsync>();


builder.Services.AddScoped<IBabyServiceAsync, BabyServiceAsync>();
builder.Services.AddScoped<IBabySitterServiceAsync, BabySitterServiceAsync>();
builder.Services.AddScoped<IParentServiceAsync, ParentServiceAsync>();
builder.Services.AddScoped<IEatActivyServiceAsync, EatActivityServiceAsync>();
builder.Services.AddScoped<IPlayActivtyServiceAsync, PlayActivityServiceAsync>();
builder.Services.AddScoped<IPlayActivityServiceAsync, SleepActivityServiceAsync>();
//builder.Services.AddScoped<IAccountServiceAsync, AccountServiceAsync>();
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
    app.UseSwagger();
    app.UseSwaggerUI();
}
else
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors("CorsPolicy");

//app.UseAuthorization();
app.UseAuthentication();

app.MapControllers();

app.Run();

