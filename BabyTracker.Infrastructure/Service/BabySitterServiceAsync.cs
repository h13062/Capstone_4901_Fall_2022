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
        private readonly IBabySitterRepositoryAsync babysitterRepositoryAsync;
        public BabySitterServiceAsync(IBabySitterRepositoryAsync babysit)
        {
            this.babysitterRepositoryAsync = babysit;
        }

        public async Task<int> AddBabyAsync(BabySitterModel babysit)
        {
            BabySitter b = new BabySitter();
            b.Id = babysit.Id;
            b.BabySitterName = babysit.BabySitterName;
            return await babysitterRepositoryAsync.InsertAsync(b);
        }

        public async Task<int?> DeleteByIdAsync(int id)
        {
            return await babysitterRepositoryAsync.DeleteAsync(id);
        }

        public async Task<IEnumerable<BabySitterModel>> GetAllAsync()
        {
            var collection = await babysitterRepositoryAsync.GetAllAsync();
            if (collection != null)
            {
                List<BabySitterModel> result = new List<BabySitterModel>();
                foreach (var item in collection)
                {
                    BabySitterModel model = new BabySitterModel();
                    model.Id = item.Id;
                    model.BabySitterName = item.BabySitterName;
                    result.Add(model);
                }
                return result;
            }
            return null;
        }

        public async Task<BabySitterModel> GetByIdAsync(int id)
        {
            var item = await babysitterRepositoryAsync.GetByIdAsync(id);
            if (item != null)
            {
                BabySitterModel model = new BabySitterModel();
                model.Id = item.Id;
                model.BabySitterName = item.BabySitterName;
                return model;
            }
            return null;
        }

        public Task<BabySitterModel> GetByNameAsync(string name)
        {
            throw new NotImplementedException();
        }

        public async Task<int> UpdateBabyAsync(BabySitterModel babysit)
        {
            BabySitter b = new BabySitter();
            b.Id = babysit.Id;
            b.BabySitterName = babysit.BabySitterName;
            return await babysitterRepositoryAsync.UpdateAsync(b);
        }
    }
}
