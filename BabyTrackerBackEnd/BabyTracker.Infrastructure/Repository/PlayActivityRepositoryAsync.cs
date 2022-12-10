using BabyTracker.Core.Contract.Repository;
using BabyTracker.Core.Entity;
using BabyTracker.Infrastructure.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BabyTracker.Infrastructure.Repository
{
    public class PlayActivityRepositoryAsync : BaseRepository<PlayActivity>, IPlayActivityRepositoryAsync
    {
        public PlayActivityRepositoryAsync(BabyTrackerDbContext db) : base(db)
        {
        }
    }
}
