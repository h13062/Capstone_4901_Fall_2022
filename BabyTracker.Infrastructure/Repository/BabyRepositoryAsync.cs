using BabyTracker.Core.Contract.Repository;
using BabyTracker.Core.Entity;
using BabyTracker.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BabyTracker.Infrastructure.Repository
{
    public  class BabyRepositoryAsync : BaseRepository<Baby>, IBabyRepositoryAsync 
    {
        private readonly BabyTrackerDbContext _db;
        public BabyRepositoryAsync(BabyTrackerDbContext db) : base(db)
        {
            _db = db;
        }

        public async Task<Baby> GetByNameAsync(string name)
        {
            return await _db.Set<Baby>().FirstOrDefaultAsync(a => a.Name == name);
        }

    }
}
