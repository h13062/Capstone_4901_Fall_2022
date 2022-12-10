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
    public class BabySitterRepositoryAsync : BaseRepository<BabySitter>, IBabySitterRepositoryAsync
    {
        private readonly BabyTrackerDbContext _db;
        public BabySitterRepositoryAsync(BabyTrackerDbContext db) : base(db)
        {
            _db = db;
        }
        public async Task<BabySitter> GetByNameAsync(string name)
        {
            return await _db.Set<BabySitter>().FirstOrDefaultAsync(a => a.BabySitterName == name);
        }
    }
}
