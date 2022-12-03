using BabyTracker.Core.Entity;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BabyTracker.Infrastructure.Data
{
    public class BabyTrackerDbContext : IdentityDbContext<ApplicationUser>
    {
        public BabyTrackerDbContext(DbContextOptions<BabyTrackerDbContext> option) : base(option)
        {

        }
 
        public DbSet<Baby> Babys { get; set; }

        public DbSet<BabySitter> BabySitters { get; set; }

        public DbSet<Parent> Parents { get; set; }
        
        public DbSet<SleepActivity> SleepActivities { get; set; }

        public DbSet<PlayActivity> PlayActivities { get; set; }

        public DbSet<EatActivity> EatActivities { get; set; }

    }
}
