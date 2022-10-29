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
      
        Task<IEnumerable<ParentModel>> GetAllAsync();
        Task<int> AddParentAsync(ParentModel parent);
        Task<ParentModel> GetByIdAsync(int id);
        Task<ParentModel> GetByNameAsync(string name);
        Task<int> UpdateParentAsync(ParentModel parent);
        Task<int?> DeleteByIdAsync(int id);
    }
}
