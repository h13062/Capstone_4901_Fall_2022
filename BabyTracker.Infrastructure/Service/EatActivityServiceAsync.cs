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
    
    public class EatActivityServiceAsync : IEatActivyServiceAsync
    {
        private readonly IEatActivityRepositoryAsync eatActivyRepositoryAsync;
        public EatActivityServiceAsync(IEatActivityRepositoryAsync eatActivyRepositoryAsync)
        {
            this.eatActivyRepositoryAsync = eatActivyRepositoryAsync;   
        }
        public async Task<int> AddEatAsync(EatActivityModel eat)
        {
            EatActivity e= new EatActivity();
            e.Id = eat.Id;
            e.Day = eat.Day;
            e.EatStart = eat.EatStart;
            e.EatEnd = eat.EatEnd;
            return await eatActivyRepositoryAsync.InsertAsync(e);
        }

        public async Task<int?> DeleteByIdAsync(int id)
        {
            return await eatActivyRepositoryAsync.DeleteAsync(id);
        }

        public async Task<IEnumerable<EatActivityModel>> GetAllAsync()
        {
            var collection = await eatActivyRepositoryAsync.GetAllAsync();

            if (collection != null)
            {
                List<EatActivityModel> result = new List<EatActivityModel>();
                foreach (var item in collection)
                {
                    EatActivityModel model = new EatActivityModel();
                    model.Id = item.Id;
                    model.Day = item.Day;
                    model.EatStart = item.EatStart;
                    model.EatEnd = item.EatEnd;
                    result.Add(model);
                }
                return result;
            }
            return null;
        }

        public async Task<EatActivityModel> GetByIdAsync(int id)
        {
            var item = await eatActivyRepositoryAsync.GetByIdAsync(id);
            if (item != null)
            {
                EatActivityModel model = new EatActivityModel();
                model.Id = item.Id;
                model.Day = item.Day;
                model.EatEnd= item.EatEnd;
                model.EatStart = item.EatStart;
                return model;
            }
            return null;
        }

        public async Task<int> UpdateEatAsync(EatActivityModel eat)
        {
            EatActivity e = new EatActivity();
            e.Id = eat.Id;
            e.Day = eat.Day;
            e.EatStart = eat.EatStart;
            e.EatEnd = eat.EatEnd;
            return await eatActivyRepositoryAsync.UpdateAsync(e);
        }
    }
}
