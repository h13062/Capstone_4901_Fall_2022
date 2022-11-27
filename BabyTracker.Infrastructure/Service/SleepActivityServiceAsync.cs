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
    public class SleepActivityServiceAsync : IPlayActivityServiceAsync
    {
        private readonly ISleepActivityRepositoryAsync _sleepActivityRepositoyryAsync;
        public SleepActivityServiceAsync(ISleepActivityRepositoryAsync sleepActivityRepositoyryAsync)
        {
            this._sleepActivityRepositoyryAsync = sleepActivityRepositoyryAsync;
        }

        public async Task<int> AddSleepAsync(SleepActivityModel sleep)
        {
            SleepActivity s = new SleepActivity();
            s.Id = sleep.Id;    
            s.Day = sleep.Day;
            s.SleepStart = sleep.SleepStart;
            s.SleepEnd = sleep.SleepEnd;
            return await _sleepActivityRepositoyryAsync.InsertAsync(s);
        }

        public async Task<int?> DeleteByIdAsync(int id)
        {
            return await _sleepActivityRepositoyryAsync.DeleteAsync(id);
        }

        public async Task<IEnumerable<SleepActivityModel>> GetAllAsync()
        {
            var collection = await _sleepActivityRepositoyryAsync.GetAllAsync();

            if (collection != null)
            {
                List<SleepActivityModel> result = new List<SleepActivityModel>();
                foreach (var item in collection)
                {
                    SleepActivityModel model = new SleepActivityModel();
                    model.Id = item.Id;
                    model.Day = item.Day;
                    model.SleepStart = item.SleepStart;
                    model.SleepEnd = item.SleepEnd;
                    result.Add(model);
                }
                return result;
            }
            return null;

        }

        public async Task<SleepActivityModel> GetByIdAsync(int id)
        {
            var item = await _sleepActivityRepositoyryAsync.GetByIdAsync(id);
            if (item != null)
            {
                SleepActivityModel model = new SleepActivityModel();
                model.Id = item.Id;
                model.Day = item.Day;
                model.SleepStart = item.SleepStart;
                model.SleepEnd = item.SleepEnd ;
                //var par = await _sleepActivityRepositoyryAsync.GetByIdAsync(item.BabyId);
                //model.BabyId = par.BabyId;
                return model;
            }
            return null;
        }

        public async Task<int> UpdateSleepAsync(SleepActivityModel sleep)
        {
            SleepActivity s = new SleepActivity();
            s.Id = sleep.Id;
            s.Day = sleep.Day;
            s.SleepStart = sleep.SleepStart;
            s.SleepEnd = sleep.SleepEnd;
            return await _sleepActivityRepositoyryAsync.UpdateAsync(s);
        }
    }
}
