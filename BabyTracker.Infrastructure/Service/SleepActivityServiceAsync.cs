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
    public class SleepActivityServiceAsync : ISleepActivityServiceAsync
    {
        private readonly ISleepActivityRepositoryAsync sleepActivityRepositoyryAsync;
        public SleepActivityServiceAsync(ISleepActivityRepositoryAsync sleepActivityRepositoyryAsync)
        {
            this.sleepActivityRepositoyryAsync = sleepActivityRepositoyryAsync;
        }

        public async Task<int> AddSleepAsync(SleepActivityModel sleep)
        {
            SleepActivity s = new SleepActivity();
            s.Id = sleep.Id;    
            s.Day = sleep.Day;
            s.SleepStart = sleep.SleepStart;
            s.SleepEnd = sleep.SleepEnd;
            return await sleepActivityRepositoyryAsync.InsertAsync(s);
        }

        public async Task<int?> DeleteByIdAsync(int id)
        {
            return await sleepActivityRepositoyryAsync.DeleteAsync(id); 
        }

        public async Task<IEnumerable<SleepActivityModel>> GetAllAsync()
        {
            var collection = await sleepActivityRepositoyryAsync.GetAllAsync();

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
            throw new NotImplementedException();
        }

        public async Task<int> UpdateSleepAsync(SleepActivityModel sleep)
        {
            SleepActivity s = new SleepActivity();
            s.Id = sleep.Id;
            s.Day = sleep.Day;
            s.SleepStart = sleep.SleepStart;
            s.SleepEnd = sleep.SleepEnd;
            return await sleepActivityRepositoyryAsync.UpdateAsync(s);
        }
    }
}
