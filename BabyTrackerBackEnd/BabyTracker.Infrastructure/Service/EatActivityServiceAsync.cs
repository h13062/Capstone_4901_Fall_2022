using BabyTracker.Core.Contract.Repository;
using BabyTracker.Core.Contract.Service;
using BabyTracker.Core.Entity;
using BabyTracker.Core.Model;
using System;
using System.Collections.Generic;
using System.Globalization;
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
        public async Task<int> AddEatAsync(EatActivityRequestModel eat)
        {
            EatActivity e = new EatActivity();
            //e.Id = eat.Id;
            //e.Day = eat.Day;
            //e.EatStart = eat.EatStart;
            //e.EatEnd = eat.EatEnd;
            e.Id = eat.Id;
            e.Day = DateTime.ParseExact(eat.Day, "MM-dd-yyyy", CultureInfo.InvariantCulture);
            e.EatStart = DateTime.Parse(eat.EatStart);
            e.EatEnd = DateTime.Parse(eat.EatEnd);
            return await eatActivyRepositoryAsync.InsertAsync(e);
        }

        public async Task<int?> DeleteByIdAsync(int id)
        {
            return await eatActivyRepositoryAsync.DeleteAsync(id);
        }

        public async Task<IEnumerable<EatActivityRespondModel>> GetAllAsync()
        {
            var collection = await eatActivyRepositoryAsync.GetAllAsync();

            if (collection != null)
            {
                List<EatActivityRespondModel> result = new List<EatActivityRespondModel>();
                foreach (var item in collection)
                {
                    EatActivityRespondModel model = new EatActivityRespondModel();
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

        public async Task<EatActivityRespondModel> GetByIdAsync(int id)
        {
            var item = await eatActivyRepositoryAsync.GetByIdAsync(id);
            if (item != null)
            {
                EatActivityRespondModel model = new EatActivityRespondModel();
                model.Id = item.Id;
                model.Day = item.Day;
                model.EatEnd = item.EatEnd;
                model.EatStart = item.EatStart;
                return model;
            }
            return null;
        }

        public async Task<int> UpdateEatAsync(EatActivityRequestModel eat)
        {
            EatActivity e = new EatActivity();
            //e.Id = eat.Id;
            //e.Day = eat.Day;
            //e.EatStart = eat.EatStart;
            //e.EatEnd = eat.EatEnd;
            e.Id = eat.Id;
            e.Day = DateTime.Parse(eat.Day);
            e.EatStart = DateTime.Parse(eat.EatStart);
            e.EatEnd = DateTime.Parse(eat.EatEnd);
            return await eatActivyRepositoryAsync.UpdateAsync(e);
        }
    }
}
