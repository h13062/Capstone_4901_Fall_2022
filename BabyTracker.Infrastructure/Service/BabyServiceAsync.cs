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
    public class BabyServiceAsync : IBabyServiceAsync
    {
        private readonly IBabyRepositoryAsync babyRepositoryAsync;
        public BabyServiceAsync(IBabyRepositoryAsync babe)
        {
            this.babyRepositoryAsync = babe;
        }
        public async Task<int> AddBabyAsync(BabyModel baby)
        {
            Baby b = new Baby();
            b.Id = baby.Id;
            b.Name = baby.Name; 
            b.Gender = baby.Gender;
            b.DateOfBirth = baby.DateOfBirth;
            b.Weight =  baby.Weight;
            return await babyRepositoryAsync.InsertAsync(b);
        }

        public async Task<int?> DeleteByIdAsync(int id)
        {
            return await babyRepositoryAsync.DeleteAsync(id);   
        }

        public async Task<IEnumerable<BabyModel>> GetAllAsync()
        {
            var collection = await babyRepositoryAsync.GetAllAsync();
            if (collection != null)
            {
                List<BabyModel> result = new List<BabyModel>();
                foreach (var item in collection)
                {
                    BabyModel model = new BabyModel();
                    model.Id = item.Id;
                    model.Name= item.Name;
                    model.Gender = item.Gender;
                    model.DateOfBirth = item.DateOfBirth;
                    model.Weight = item.Weight;

                    result.Add(model);
                }
                return result;
            }
            return null;

        }

        public async Task<BabyModel> GetByIdAsync(int id)
        {
            var item = await babyRepositoryAsync.GetByIdAsync(id);
            if (item != null)
            {
                BabyModel model = new BabyModel();
                model.Id = item.Id;
                model.Name = item.Name;
                model.Gender = item.Gender;
                model.DateOfBirth = item.DateOfBirth;
                model.Weight = item.Weight;
                return model;
            }
            return null;

        }

        public async Task<BabyModel> GetByNameAsync(string name)
        {
            var item = await babyRepositoryAsync.GetByNameAsync(name);
            if (item != null)
            {
                BabyModel model = new BabyModel();
                model.Id = item.Id;
                model.Name = item.Name;
                model.Gender = item.Gender;
                model.DateOfBirth = item.DateOfBirth;
                model.Weight = item.Weight;
                return model;
            }
            return null;
        }

        public async Task<int> UpdateBabyAsync(BabyModel baby)
        {
            Baby b = new Baby();
            b.Id = baby.Id;
            b.Name = baby.Name;
            b.Gender = baby.Gender;
            b.DateOfBirth = baby.DateOfBirth;
            b.Weight = baby.Weight;
            return await babyRepositoryAsync.UpdateAsync(b);
        }
    }
}
