using BabyTracker.Core.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BabyTracker.Core.Contract.Service
{
    public  interface IParentServiceAsync
    {
      
        Task<IEnumerable<ParentResponseModel>> GetAllAsync();
        Task<int> AddParentAsync(ParentRequestModel parent);
        Task<ParentResponseModel> GetByIdAsync(int id);
        Task<ParentResponseModel> GetByNameAsync(string name);
        Task<int> UpdateParentAsync(ParentRequestModel parent);
        Task<int?> DeleteByIdAsync(int id);
    }
}
