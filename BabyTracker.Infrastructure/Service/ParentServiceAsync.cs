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
        private readonly IParentRepositoryAsync _parentRepositoryAsync;
        private readonly IBabyRepositoryAsync _babyRepositoryAsync;
        public ParentServiceAsync(IParentRepositoryAsync par, IBabyRepositoryAsync babyRepositoryAsync)
        {
           _parentRepositoryAsync = par;
            _babyRepositoryAsync = babyRepositoryAsync;

        }

        public async Task<int> AddParentAsync(ParentModel parent)
        {
            Parent p = new Parent();
            p.Id = parent.Id;
            p.ParentName = parent.ParentName;
            p.BabyId = parent.BabyId;
            return await _parentRepositoryAsync.InsertAsync(p);
        }

        public async Task<int?> DeleteByIdAsync(int id)
        {
            return await _parentRepositoryAsync.DeleteAsync(id);
        }

        public async Task<IEnumerable<ParentModel>> GetAllAsync()
        {
            var collection = await _parentRepositoryAsync.GetAllAsync();
            if (collection != null)
            {
                List<ParentModel> result = new List<ParentModel>();
                foreach (var item in collection)
                {
                    ParentModel model = new ParentModel();
                    model.Id = item.Id;
                    model.ParentName = item.ParentName;
                    var par = await _parentRepositoryAsync.GetByIdAsync(item.BabyId);
                    model.BabyId = par.BabyId;

                    result.Add(model);
                }
                return result;
            }
            return null;

        }

        public async Task<ParentModel> GetByIdAsync(int id)
        {
            var item = await _parentRepositoryAsync.GetByIdAsync(id);
            if (item != null)
            {
                ParentModel model = new ParentModel();
                model.Id = item.Id;
                model.ParentName = item.ParentName;
                var par = await _parentRepositoryAsync.GetByIdAsync(item.BabyId);
                model.BabyId = par.BabyId;
                return model;
            }
            return null;
        }

        public async Task<ParentModel> GetByNameAsync(string name)
        {
            var item = await _parentRepositoryAsync.GetByNameAsync(name);
            if (item != null)
            {
                ParentModel model = new ParentModel();
                model.Id = item.Id;
                model.ParentName = item.ParentName;
                var par = await _parentRepositoryAsync.GetByIdAsync(item.BabyId);
                model.BabyId = par.BabyId;
                return model;
            }
            return null;
        }

        public async Task<int> UpdateParentAsync(ParentModel parent)
        {
            Parent p = new Parent();
            p.Id = parent.Id;
            p.ParentName = parent.ParentName;
            p.BabyId = parent.BabyId;
            return await _parentRepositoryAsync.UpdateAsync(p);
        }
    }
}
