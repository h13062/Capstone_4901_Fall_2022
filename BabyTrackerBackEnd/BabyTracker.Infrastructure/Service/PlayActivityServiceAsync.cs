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
    public class PlayActivityServiceAsync : IPlayActivtyServiceAsync
    {
        private readonly IPlayActivityRepositoryAsync _playActivtyRepositoryAsync;
        public PlayActivityServiceAsync(IPlayActivityRepositoryAsync playActivtyRepositoryAsync)
        {
            _playActivtyRepositoryAsync = playActivtyRepositoryAsync;
        }
        public async Task<int> AddPlayAsync(PlayActivityRequestModel play)
        {
            PlayActivity p = new PlayActivity();
            p.Id = play.Id;
            p.Day = DateTime.ParseExact(play.Day, "MM-dd-yyyy", CultureInfo.InvariantCulture);
            p.PlayStart = DateTime.Parse(play.PlayStart);
            p.PlayEnd = DateTime.Parse(play.PlayEnd);
            return await _playActivtyRepositoryAsync.InsertAsync(p);
        }

        public async Task<int?> DeleteByIdAsync(int id)
        {
            return await _playActivtyRepositoryAsync.DeleteAsync(id);
        }

        public async Task<IEnumerable<PlayActivityResponseModel>> GetAllAsync()
        {
            var collection = await _playActivtyRepositoryAsync.GetAllAsync();

            if (collection != null)
            {
                List<PlayActivityResponseModel> result = new List<PlayActivityResponseModel>();
                foreach (var item in collection)
                {
                    PlayActivityResponseModel model = new PlayActivityResponseModel();
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

        public async Task<PlayActivityResponseModel> GetByIdAsync(int id)
        {
            var item = await _playActivtyRepositoryAsync.GetByIdAsync(id);
            if (item != null)
            {
                PlayActivityResponseModel model = new PlayActivityResponseModel();
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

        public async Task<int> UpdatePlayAsync(PlayActivityRequestModel play)
        {
            PlayActivity p = new PlayActivity();
            p.Id = play.Id;
            p.Day = DateTime.Parse(play.Day);
            p.PlayStart = DateTime.Parse(play.PlayStart);
            p.PlayEnd = DateTime.Parse(play.PlayEnd);
            return await _playActivtyRepositoryAsync.UpdateAsync(p);

            //p.Id = play.Id;
            //p.Day = DateTime.ParseExact(play.Day, "MM-dd-yyyy", CultureInfo.InvariantCulture);
            //p.PlayStart = DateTime.Parse(play.PlayStart);
            //p.PlayEnd = DateTime.Parse(play.PlayEnd);

        }
    }
}
