using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BabyTracker.Core.Contract.Repository
{
    public interface IRepositoryAsync<T> where T : class // take class as variable, T stands for template and T is a generic
    {
        //Reposity store basic services such add, update, delete while service stores specific service according to projects
        Task<int> InsertAsync(T entity); //insert in term of columb
        Task<int> UpdateAsync(T entity);
        Task<T> GetByIdAsync(int id);
        Task<IEnumerable<T>> GetAllAsync();
        Task<int> DeleteAsync(int id);   //delete in term of row

    }
}
