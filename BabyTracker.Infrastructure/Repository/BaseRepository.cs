using BabyTracker.Core.Contract.Repository;
using BabyTracker.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BabyTracker.Infrastructure.Repository
{
    //base always need generic
    public class BaseRepository<T> : IRepositoryAsync<T> where T : class
    {
        private readonly BabyTrackerDbContext _db;
        public BaseRepository(BabyTrackerDbContext db) //dependencies injection
        {
            _db = db;
        }

        public async Task<int> DeleteAsync(int id)
        {
            var result = await _db.Set<T>().FindAsync(id);// where(x=>x.Id==id).FirstOrDefault()
            _db.Set<T>().Remove(result);
            return await _db.SaveChangesAsync();  //commit
        }

        public async Task<IEnumerable<T>> GetAllAsync()
        {
            return await _db.Set<T>().ToListAsync();
        }

        public async Task<T> GetByIdAsync(int id)
        {
            return await _db.Set<T>().FindAsync(id);
        }

        public async Task<int> InsertAsync(T entity)
        {
            await _db.Set<T>().AddAsync(entity);
            return await _db.SaveChangesAsync();
        }

        public async Task<int> UpdateAsync(T entity)
        {
            _db.Entry(entity).State = EntityState.Modified;
            return await _db.SaveChangesAsync();
        }
    }
}
