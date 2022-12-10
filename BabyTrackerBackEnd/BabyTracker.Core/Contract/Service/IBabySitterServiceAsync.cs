using BabyTracker.Core.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BabyTracker.Core.Contract.Service
{
    public interface IBabySitterServiceAsync
    {
        Task<IEnumerable<BabySitterModel>> GetAllAsync();
        Task<int> AddBabyAsync(BabySitterModel babysit);
        Task<BabySitterModel> GetByIdAsync(int id);
        Task<BabySitterModel> GetByNameAsync(string name);
        Task<int> UpdateBabyAsync(BabySitterModel babysit);
        Task<int?> DeleteByIdAsync(int id);
    }
}
