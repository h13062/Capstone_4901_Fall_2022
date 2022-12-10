using BabyTracker.Core.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BabyTracker.Core.Contract.Repository
{
    public interface IBabyRepositoryAsync : IRepositoryAsync<Baby>
    {
        Task<Baby> GetByNameAsync(string name);
    }
}
