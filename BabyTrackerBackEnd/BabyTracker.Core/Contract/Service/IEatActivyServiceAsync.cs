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
        Task<IEnumerable<EatActivityRespondModel>> GetAllAsync();
        Task<int> AddEatAsync(EatActivityRequestModel sleep);
        Task<EatActivityRespondModel> GetByIdAsync(int id);
        Task<int> UpdateEatAsync(EatActivityRequestModel sleep);
        Task<int?> DeleteByIdAsync(int id);
    }
}
