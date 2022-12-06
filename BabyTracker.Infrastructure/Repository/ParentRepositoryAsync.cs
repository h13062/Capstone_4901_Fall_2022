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
    public class ParentRepositoryAsync : BaseRepository<Parent>, IParentRepositoryAsync
    {
        private readonly BabyTrackerDbContext _db;
        public ParentRepositoryAsync(BabyTrackerDbContext db) : base(db)
        {
            _db = db;
        }

        public async Task<Parent> GetByNameAsync(string name)
        {
            return await _db.Set<Parent>().FirstOrDefaultAsync(a => a.Name == name);
        }
    }
}
