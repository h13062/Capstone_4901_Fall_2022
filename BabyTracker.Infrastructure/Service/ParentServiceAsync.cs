using BabyTracker.Core.Contract.Repository;
using BabyTracker.Core.Contract.Service;
using BabyTracker.Core.Entity;
using BabyTracker.Core.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BabyTracker.Infrastructure.Service
{
    public class ParentServiceAsync : IParentServiceAsync
    {
        private readonly IParentRepositoryAsync parentRepositoryAsync;
        public ParentServiceAsync(IParentRepositoryAsync par)
        {
            this.parentRepositoryAsync = par;
        }

        public async Task<int> AddParentAsync(ParentModel parent)
        {
            Parent p = new Parent();
            p.Id = parent.Id;
            p.ParentName = parent.ParentName;
            return await parentRepositoryAsync.InsertAsync(p);
        }

        public async Task<int?> DeleteByIdAsync(int id)
        {
            return await parentRepositoryAsync.DeleteAsync(id);
        }

        public async Task<IEnumerable<ParentModel>> GetAllAsync()
        {
            var collection = await parentRepositoryAsync.GetAllAsync();
            if (collection != null)
            {
                List<ParentModel> result = new List<ParentModel>();
                foreach (var item in collection)
                {
                    ParentModel model = new ParentModel();
                    model.Id = item.Id;
                    model.ParentName = item.ParentName;
                    
                    result.Add(model);
                }
                return result;
            }
            return null;

        }

        public async Task<ParentModel> GetByIdAsync(int id)
        {
            var item = await parentRepositoryAsync.GetByIdAsync(id);
            if (item != null)
            {
                ParentModel model = new ParentModel();
                model.Id = item.Id;
                model.ParentName = item.ParentName;
                return model;
            }
            return null;
        }

        public Task<ParentModel> GetByNameAsync(string name)
        {
            throw new NotImplementedException();
        }

        public async Task<int> UpdateParentAsync(ParentModel parent)
        {
            Parent p = new Parent();
            p.Id = parent.Id;
            p.ParentName = parent.ParentName;
            return await parentRepositoryAsync.UpdateAsync(p);
        }
    }
}
