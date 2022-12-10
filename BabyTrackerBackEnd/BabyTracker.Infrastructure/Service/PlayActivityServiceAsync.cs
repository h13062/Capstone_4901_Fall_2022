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
    public class PlayActivityServiceAsync : IPlayActivtyServiceAsync
    {
        private readonly IPlayActivityRepositoryAsync _playActivtyRepositoryAsync;
        public PlayActivityServiceAsync(IPlayActivityRepositoryAsync playActivtyRepositoryAsync)
        {
              _playActivtyRepositoryAsync = playActivtyRepositoryAsync;
        }
        public async Task<int> AddPlayAsync(PlayActivityModel play)
        {
            PlayActivity p = new PlayActivity();
            p.Id = play.Id;
            p.Day = play.Day;  
            p.PlayStart=play.PlayStart;
            p.PlayEnd=play.PlayEnd;
            return await _playActivtyRepositoryAsync.InsertAsync(p);
        }

        public async Task<int?> DeleteByIdAsync(int id)
        {
            return await _playActivtyRepositoryAsync.DeleteAsync(id);
        }

        public async Task<IEnumerable<PlayActivityModel>> GetAllAsync()
        {
            var collection = await _playActivtyRepositoryAsync.GetAllAsync();

            if (collection != null)
            {
                List<PlayActivityModel> result = new List<PlayActivityModel>();
                foreach (var item in collection)
                {
                    PlayActivityModel model = new PlayActivityModel();
                    model.Id = item.Id;
                    model.Day = item.Day;
                    model.PlayStart = item.PlayStart;
                    model.PlayEnd = item.PlayEnd;
                    result.Add(model);
                }
                return result;
            }
            return null;
        }

        public async Task<PlayActivityModel> GetByIdAsync(int id)
        {
            var item = await _playActivtyRepositoryAsync.GetByIdAsync(id);
            if (item != null)
            {
                PlayActivityModel model = new PlayActivityModel();
                model.Id = item.Id;
                model.Day = item.Day;
                model.PlayStart = item.PlayStart;
                model.PlayEnd = item.PlayEnd;
                //var par = await _sleepActivityRepositoyryAsync.GetByIdAsync(item.BabyId);
                //model.BabyId = par.BabyId;
                return model;
            }
            return null;
        }

        public async Task<int> UpdatePlayAsync(PlayActivityModel play)
        {
            PlayActivity p = new PlayActivity();
            p.Id = play.Id;
            p.Day = play.Day;
            p.PlayStart = play.PlayStart;
            p.PlayEnd = play.PlayEnd;
            return await _playActivtyRepositoryAsync.UpdateAsync(p);
        }
    }
}
