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
        public ParentServiceAsync(IParentRepositoryAsync parentRepositoryAsync, IBabyRepositoryAsync babyRepositoryAsync)
        {
            _parentRepositoryAsync = parentRepositoryAsync;
            _babyRepositoryAsync = babyRepositoryAsync;
        }

        public async Task<int> AddParentAsync(ParentRequestModel parent)
        {
            Parent p = new Parent();
            p.Id = parent.Id;
            p.Name = parent.FirstName + " " + parent.LastName;
            p.BabyId = parent.BabyId;

            return await _parentRepositoryAsync.InsertAsync(p);
        }

        public async Task<int?> DeleteByIdAsync(int id)
        {
            return await _parentRepositoryAsync.DeleteAsync(id);
        }

        public async Task<IEnumerable<ParentResponseModel>> GetAllAsync()
        {
            try
            {
                IEnumerable<Parent> collection = await _parentRepositoryAsync.GetAllAsync();
                if (collection != null)
                {
                    List<ParentResponseModel> result = new List<ParentResponseModel>();
                    foreach (var item in collection)
                    {
                        ParentResponseModel model = new ParentResponseModel();
                        model.Id = item.Id;
                        model.Name = item.Name;
                        try
                        {
                            var par = await _babyRepositoryAsync.GetByIdAsync(item.BabyId);
                            //model.BabyId = par.Id;
                            model.Baby = par;
                            result.Add(model);
                        }
                        catch (Exception ex)
                        {
                            throw new Exception("An error has occur while calling GetByIdAsync", ex);
                        }
                    }
                    return result;
                }
            }
            catch (Exception ex)
            {
                throw new Exception("An error has occur", ex);
            }
            return null;
        }

        public async Task<ParentResponseModel> GetByIdAsync(int id)
        {
            var item = await _parentRepositoryAsync.GetByIdAsync(id);
            if (item != null)
            {
                ParentResponseModel model = new ParentResponseModel();
                model.Id = item.Id;
                model.Name = item.Name;
                var par = await _babyRepositoryAsync.GetByIdAsync(item.BabyId);
                //model.BabyId = par.BabyId;
                model.Baby = par;
                return model;
            }
            return null;
        }

        public async Task<ParentResponseModel> GetByNameAsync(string name)
        {
            var item = await _parentRepositoryAsync.GetByNameAsync(name);
            if (item != null)
            {
                ParentResponseModel model = new ParentResponseModel();
                model.Id = item.Id;
                model.Name = item.Name;
                var par = await _babyRepositoryAsync.GetByIdAsync(item.BabyId);
                //model.BabyId = par.BabyId;
                model.Baby = par;
                return model;
            }
            return null;
        }

        public async Task<int> UpdateParentAsync(ParentRequestModel parent)
        {
            Parent p = new Parent();
            p.Id = parent.Id;
            p.Name = parent.FirstName + " " + parent.LastName;
            p.BabyId = parent.BabyId;

            return await _parentRepositoryAsync.UpdateAsync(p);
        }
    }
}
