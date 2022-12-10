using BabyTracker.Core.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BabyTracker.Core.Contract.Service
{
    public interface IBabyServiceAsync
    {
        Task<IEnumerable<BabyModel>> GetAllAsync();
        Task<int> AddBabyAsync(BabyModel baby);
        Task<BabyModel> GetByIdAsync(int id);
        Task<BabyModel> GetByNameAsync(string name);
        Task<int> UpdateBabyAsync(BabyModel baby);
        Task<int?> DeleteByIdAsync(int id);
    }
}
