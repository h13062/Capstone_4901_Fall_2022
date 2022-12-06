using BabyTracker.Core.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BabyTracker.Core.Contract.Service
{
    public interface IPlayActivityServiceAsync
    {
        Task<IEnumerable<SleepActivityModel>> GetAllAsync();
        Task<int> AddSleepAsync(SleepActivityModel sleep);
        Task<SleepActivityModel> GetByIdAsync(int id);
        Task<int> UpdateSleepAsync(SleepActivityModel sleep);
        Task<int?> DeleteByIdAsync(int id);
    }
}
