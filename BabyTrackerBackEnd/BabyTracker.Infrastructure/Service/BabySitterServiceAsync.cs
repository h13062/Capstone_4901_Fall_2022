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
    public class BabySitterServiceAsync : IBabySitterServiceAsync
    {
        private readonly IBabySitterRepositoryAsync _babysitterRepositoryAsync;
        private readonly IBabyRepositoryAsync _babyRepositoryAsync;
        public BabySitterServiceAsync(IBabySitterRepositoryAsync babysit, IBabyRepositoryAsync babyRepositoryAsync)
        {
            this._babysitterRepositoryAsync = babysit;
            this._babyRepositoryAsync = babyRepositoryAsync;
        }

        public async Task<int> AddBabyAsync(BabySitterModel babysit)
        {
            BabySitter b = new BabySitter();
            b.Id = babysit.Id;
            b.BabySitterName = babysit.BabySitterName;
            b.BabyId = babysit.BabyId;
            
            return await _babysitterRepositoryAsync.InsertAsync(b);
        }

        public async Task<int?> DeleteByIdAsync(int id)
        {
            return await _babysitterRepositoryAsync.DeleteAsync(id);
        }

        public async Task<IEnumerable<BabySitterModel>> GetAllAsync()
        {
            var collection = await _babysitterRepositoryAsync.GetAllAsync();
            if (collection != null)
            {
                List<BabySitterModel> result = new List<BabySitterModel>();
                foreach (var item in collection)
                {
                    BabySitterModel model = new BabySitterModel();
                    model.Id = item.Id;
                    model.BabySitterName = item.BabySitterName;
                    var baby = await _babyRepositoryAsync.GetByIdAsync(item.BabyId);
                    model.BabyId = baby.Id;
                    result.Add(model);
                }
                return result;
            }
            return null;
        }

        public async Task<BabySitterModel> GetByIdAsync(int id)
        {
            var item = await _babysitterRepositoryAsync.GetByIdAsync(id);
            if (item != null)
            {
                BabySitterModel model = new BabySitterModel();
                model.Id = item.Id;
                model.BabySitterName = item.BabySitterName;
                var baby = await _babyRepositoryAsync.GetByIdAsync(item.BabyId);
                model.BabyId= baby.Id;
                return model;
            }
            return null;
        }

        public async Task<BabySitterModel> GetByNameAsync(string name)
        {
            var item = await _babysitterRepositoryAsync.GetByNameAsync(name);
            if (item != null)
            {
                BabySitterModel model = new BabySitterModel();
                model.Id = item.Id;
                model.BabySitterName = item.BabySitterName;
                var baby = await _babyRepositoryAsync.GetByIdAsync(item.BabyId);
                model.BabyId = baby.Id;
                return model;
            }
            return null;
        }

        public async Task<int> UpdateBabyAsync(BabySitterModel babysit)
        {
            BabySitter b = new BabySitter();
            b.Id = babysit.Id;
            b.BabySitterName = babysit.BabySitterName;
            return await _babysitterRepositoryAsync.UpdateAsync(b);
        }
    }
}
