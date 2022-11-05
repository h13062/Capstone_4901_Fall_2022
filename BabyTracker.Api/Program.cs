using BabyTracker.Core.Contract.Repository;
using BabyTracker.Core.Contract.Service;
using BabyTracker.Core.Entity;
using BabyTracker.Infrastructure.Data;
using BabyTracker.Infrastructure.Repository;
using BabyTracker.Infrastructure.Service;
using Microsoft.AspNetCore.Identity;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddSqlServer<BabyTrackerDbContext>(builder.Configuration.GetConnectionString("OnlineBabyTracker"));
builder.Services.AddIdentity<ApplicationUser, IdentityRole>().AddEntityFrameworkStores<BabyTrackerDbContext>().AddDefaultTokenProviders();


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
builder.Services.AddScoped<ISleepActivityServiceAsync, SleepActivityServiceAsync>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
