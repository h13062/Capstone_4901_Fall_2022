using BabyTracker.Core.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BabyTracker.Core.Contract.Service
{
    public interface IEatActivyServiceAsync
    {
        Task<IEnumerable<EatActivityModel>> GetAllAsync();
        Task<int> AddEatAsync(EatActivityModel sleep);
        Task<EatActivityModel> GetByIdAsync(int id);
        Task<int> UpdateEatAsync(EatActivityModel sleep);
        Task<int?> DeleteByIdAsync(int id);
    }
}
