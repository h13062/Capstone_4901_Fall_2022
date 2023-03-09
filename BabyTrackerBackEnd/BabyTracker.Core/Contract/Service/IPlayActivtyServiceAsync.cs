using BabyTracker.Core.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BabyTracker.Core.Contract.Service
{
    public interface IPlayActivtyServiceAsync
    {
        Task<IEnumerable<PlayActivityResponseModel>> GetAllAsync();
        Task<int> AddPlayAsync(PlayActivityRequestModel play);
        Task<PlayActivityResponseModel> GetByIdAsync(int id);
        Task<int> UpdatePlayAsync(PlayActivityRequestModel play);
        Task<int?> DeleteByIdAsync(int id);
    }
}